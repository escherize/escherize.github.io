(ns new-root.paint-snake.core
  (:require [reagent.core :as reagent :refer [atom]]))

(let [fps 60]
  (def update-interval (/ 1000 fps)))

(def width 1000)
(def height 800)

(defonce db (atom {:pressed-keys #{}
                   :loop {:time 0 :delta 0}
                   :player {:dx 0
                            :dy 0
                            :x 50
                            :y 50
                            :length 120
                            :trail '()}}))

(defn step [start stop n]
  (let [d (- stop start)
        step-size (/ d n)]
    (range start stop step-size)))

(defn view []
  (let [{:keys [player] :as db} @db]
    [:div
     [:pre (pr-str (:pressed-keys db))]
     (into
      [:svg {:style {:width width
                     :height height
                     :background-color "#e1eaf1"}
             :view-box (str "0 0" width " " height)}
       ;; player
       [:circle {:fill "#1e150e"
                 :stroke-width "5"
                 :stroke "grey"
                 :r 15
                 :cx (:x player)
                 :cy (:y player)}]]
      ;;real fancy curves
      (for [[[p1 p2] r] (map vector
                             (partition 2 1 (:trail player))
                             (step 15 0 (:length player)))]
        (let [{x1 :x y1 :y dx1 :dx dy1 :dy} p1
              {x2 :x y2 :y dx2 :dx dy2 :dy} p2
              s 5]
          [:path {:d (str "M " x1 " " y1
                          ", " x2 " " y2)
                  :stroke-width (* 2 r)
                  :stroke-linecap "round"
                  ;; "M 150 100 C 200 200, 400 200, 500 100"
                  :stroke (if (< r 5) "red" "#1e150e")
                  :fill "transparent"}]))
      ;; circles
      #_(for [[{:keys [x y]} r] (map vector
                                     (:trail player)
                                     (step 30 0 (:length player)))]

          [:circle {:fill (if (< r 5) "red" "#1e150e") ;;(if (> 20 r) "red" "#1e150e")
                    :r r
                    :cx x
                    :cy y}]))
     #_[:div (pr-str ((juxt :x :y) player))]
     #_[:div (pr-str (:loop db))]
     [:p "thanks for playing @escherize"]]))

(def speed 1)
(def damp 0.9)
(def d-bound 6)
(defn clamp [low mid high] (-> mid (max low) (min high)))

(defn update-dd [pressed-keys d]
  (doseq [pk pressed-keys]
    (case pk
      :space (swap! db update :player #(merge % {:x 50 :y 50 :dx 0 :dy 0}))
      :left  (swap! db update-in [:player :dx] (fn [dd] (- dd (* d speed))))
      :right (swap! db update-in [:player :dx] (fn [dd] (+ dd (* d speed))))
      :up    (swap! db update-in [:player :dy] (fn [dd] (- dd (* d speed))))
      :down  (swap! db update-in [:player :dy] (fn [dd] (+ dd (* d speed)))))))

(defn update-player [d]
  (swap! db update :player
         (fn [{:keys [dx x dy y length] :as p}]
           (-> p
               (update :dx (fn [dd] (clamp (* -1 d-bound) (* damp dd) d-bound)))
               (update :dy (fn [dd] (clamp (* -1 d-bound) (* damp dd) d-bound)))
               (assoc :x (clamp 0 (+ x (* d dx)) width))
               (assoc :y (clamp 0 (+ y (* d dy)) height))
               (update :trail (fn [t] (take length (conj t {:x x :y y :dx dx :dy dy}))))))))

(defn handle-updates [pressed-keys delta]
  (let [d (/ delta update-interval)]
    (update-dd pressed-keys d)
    (update-player d)))

(defn game-loop []
  (js/window.requestAnimationFrame game-loop)
  (let [current-time (.getTime (js/Date.))
        delta (- current-time (get-in @db [:loop :time]))
        _ (swap! db assoc-in [:loop :delta] delta)]
    (when (> delta update-interval)
      (swap! db assoc-in [:loop :time] current-time)
      (handle-updates
       (:pressed-keys @db)
       delta))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; hook keypresses
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def code->key {32 :space
                68 :right 65 :left 87 :up 83 :down
                39 :right 37 :left 38 :up 40 :down})

(defn handle-key [edit-fn event]
  (.preventDefault event)
  (let [kc (.-keyCode event)]
    (js/console.log kc)
    (when-let [k (code->key kc)]
      (js/console.log (pr-str))
      (swap! db update :pressed-keys edit-fn k))))

(def kd-hook (fn [e] (handle-key conj e)))
(def ku-hook (fn [e] (handle-key disj e)))

(defn hook-pressed-keys! []
  (js/window.addEventListener "keydown" kd-hook false)
  (js/window.addEventListener "keyup" ku-hook false))

(defn unhook-pressed-keys! []
  (js/window.removeEventListener "keydown" kd-hook false)
  (js/window.removeEventListener "keyup" ku-hook false))

(defn ^:export init []
  (hook-pressed-keys!)
  (game-loop))

(defn stop [] (unhook-pressed-keys!))
