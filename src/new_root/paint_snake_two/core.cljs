(ns new-root.paint-snake-two.core
  (:require
   [new-root.util :as u]
   [reagent.core :as reagent :refer [atom]]))

(let [fps 60]
  (def update-interval (/ 1000 fps)))

(def width 800)
(def height 600)

(def initial-db {:pressed-keys #{}
                 :game-over? false
                 :loop {:time 0 :delta 0}
                 :candy {:x 300 :y 200 :r 10}
                 :player {:dx 0
                          :dy 0
                          :r 20
                          :x 50
                          :y 50
                          :d-bound 5
                          :length 0
                          :trail '()}})

(def killer-len 20)

(defonce db (atom initial-db))

(defn steps [start stop n]
  (let [d (- stop start)
        step-size (/ d n)]
    (range start stop step-size)))

(defn view []
  (let [{:keys [player candy game-over?]} @db
        {:keys [length trail]} player]
    [:div
     [:p "Use wasd to move around, and collect green apples while avoiding your poisonous red tail! The longer you get the higher your score."]
     [:div "Score: " (:length player)]
     (if game-over?
       [:div {:style {:margin-top "50px"}}
        [:h1 "Game Over"
         [:div "Score: " (:length player)]
         [:button {:on-click #(reset! db initial-db)}
          "play again"]]]
       (into
        [:svg {:style {:width width
                       :height height
                       :background-color "#e1eaf1"}
               :view-box (str "0 0" width " " height)}

         ;; player
         [:circle {:fill "#1e150e"
                   :stroke-width "5"
                   :stroke "grey"
                   :r (:r player)
                   :cx (:x player)
                   :cy (:y player)}]

         ;; candy
         [:circle {:fill "violet"
                   :r (:r candy)
                   :cx (:x candy)
                   :cy (:y candy)}]]

        ;;lines
        (remove nil?
                (for [[[p1 p2] r i] (map vector
                                         (partition 2 1 trail)
                                         (steps (/ (:r player) 2) 0 length)
                                         (range))]

                  (let [{x1 :x y1 :y} p1
                        {x2 :x y2 :y} p2]
                    (when
                      (> i killer-len)
                      [:path {:d (str "M " x1 " " y1 ", " x2 " " y2)
                              :stroke-width (* 2 r)
                              :stroke-linecap "round"
                              :stroke "red"
                              :fill "transparent"}]))))))
     (u/source-link ::hi)]))

(def speed 1)
(def damp 0.9)
(defn clamp [low mid high] (-> mid (max low) (min high)))

(defn update-dd [pressed-keys d]
  (doseq [pk pressed-keys]
    (case pk
      :space (swap! db update :player #(merge % {:x 50 :y 50 :dx 0 :dy 0}))
      :left  (swap! db update-in [:player :dx] (fn [dd] (- dd (* d speed))))
      :right (swap! db update-in [:player :dx] (fn [dd] (+ dd (* d speed))))
      :up    (swap! db update-in [:player :dy] (fn [dd] (- dd (* d speed))))
      :down  (swap! db update-in [:player :dy] (fn [dd] (+ dd (* d speed)))))))

(defn sq [base] (Math/pow base 2))

(defn collision? [{x1 :x y1 :y r1 :r}
                  {x2 :x y2 :y r2 :r}]
  (> (sq (+ r1 r2))
     (+ (sq (Math/abs (- x1 x2)))
        (sq (Math/abs (- y1 y2))))))

(defn eat-candy! []
  (let [new-candy {:x (clamp 50 (rand-int width) (- width 50))
                   :y (clamp 50 (rand-int height) (- width 50))}]
    (swap! db (fn [db]
                (-> db
                    (update :candy merge new-candy)
                    (update-in [:player :length] #(-> % (+ 5) (* 1.05) int))
                    (update-in [:player :d-bound] + 0.5))))))

(defn update-candy [d]
  (let [{:keys [player candy]} @db]
    (when (collision? player candy)
      (eat-candy!))))

(defn update-player [d]
  (swap! db update :player
         (fn [{:keys [dx x dy y length r d-bound] :as p}]
           (-> p
               (update :dx (fn [dd] (clamp (* -1 d-bound) (* damp dd) d-bound)))
               (update :dy (fn [dd] (clamp (* -1 d-bound) (* damp dd) d-bound)))
               (assoc :x (clamp r (+ x (* d dx)) (- width r)))
               (assoc :y (clamp r (+ y (* d dy)) (- height r)))
               (update :trail (fn [t] (take length (conj t {:x x :y y}))))))))

(defn update-death [d]
  (let [{:keys [player]} @db
        {:keys [trail r]} player
        trail-length (count trail)]
    (when (< killer-len trail-length)
      (let [killers (drop killer-len trail)
            killer-rs (drop killer-len (steps r 0 trail-length))
            colliding (keep (fn [[k kr]]
                              (when (collision? player (assoc k :r kr)) true))
                            (map vector
                                 killers
                                 killer-rs))]
        (when-not (empty? colliding)
          (swap! db assoc :game-over? true))))))

(defn handle-updates [pressed-keys delta]
  (let [d (/ delta update-interval)]
    (update-dd pressed-keys d)
    (update-player d)
    (update-candy d)
    (update-death d)))

(defn game-loop []
  (js/window.requestAnimationFrame game-loop)
  (let [current-time (.getTime (js/Date.))
        delta (- current-time (get-in @db [:loop :time]))
        _ (swap! db assoc-in [:loop :delta] delta)]
    (when (> delta update-interval)
      (swap! db assoc-in [:loop :time] current-time)
      (handle-updates (:pressed-keys @db) delta))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; hook keypresses
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def code->key
  {32 :space
   68 :right
   65 :left
   87 :up
   83 :down ;;wasd
   39 :right
   37 :left
   38 :up
   40 :down ;; arrows
   })

(defn handle-key [edit-fn event]
  (let [kc (.-keyCode event)]
    (when-let [k (code->key kc)]
      (when (= k :space) (.preventDefault event))
      (swap! db update :pressed-keys edit-fn k))))

(defonce kd-hook (fn [e] (handle-key conj e)))
(defonce ku-hook (fn [e] (handle-key disj e)))

(defn hook-pressed-keys [db]
  (js/window.addEventListener "keydown" kd-hook false)
  (js/window.addEventListener "keyup" ku-hook false))

(defn unhook-pressed-keys [db]
  (js/window.removeEventListener "keydown" kd-hook false)
  (js/window.removeEventListener "keyup" ku-hook false))

(defn init []
  (hook-pressed-keys db)
  (game-loop))

(defn stop [] (unhook-pressed-keys db))
