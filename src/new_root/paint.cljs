(ns new-root.paint
  (:require [reagent.core :as r]
            [clojure.string :as str]))

(def side-size 20)
(def debug? false)

(def colors [{:title "Orange" :color "#FF8C40" :img "/public/img/sprites/tiles_orange/tileOrange_02.png"}
             {:title "Red"    :color "#E84378" :img "/public/img/sprites/tiles_red/tileRed_03.png"}
             {:title "Pink" :color "#F87398" :img "/public/img/sprites/tiles_pink/tilePink_03.png"}
             {:title "Blue"   :color "#438EE8" :img "public/img/sprites/tiles_blue/tileBlue_03.png"}
             {:title "Green"  :color "#84E841" :img "public/img/sprites/tiles_green/tileGreen_03.png"}
             {:title "Yellow" :color "#FFE252" :img "public/img/sprites/tiles_yellow/tileYellow_03.png"}])

(defn rand-color [] (:color (rand-nth colors)))

(let [c (atom (rand-color))]
  (defn rrand-color [& [n]]
    (if (> (or n 0.3) (rand))
      @c
      (let [nc (rand-color)]
        (reset! c nc)
        nc))))

(defonce state (r/atom {:hints-open? false
                        :moves []
                        :board (apply merge-with merge
                                      (for [x (range side-size)
                                            y (range side-size)]
                                        {x {y {:color (rrand-color)}}}))}))

(defn color-lookup [color]
  (first (filter #(= color (:color %)) colors)))

(defn set-color! [x y color]
  (swap! state assoc-in [:board x y :color] color))

(defn get-color
  ([x y] (get-color [x y]))
  ([[x y]]
   (get-in @state [:board x y :color])))

(defn randomize-board [& [n]]
  (swap! state assoc :moves [])
  (if (> 0.5 (rand))
    (doseq [[i x y] (for [x (range side-size)
                          y (range side-size)]
                      [(+ x (* side-size y)) x y])]
      (js/setTimeout #(set-color! x y (rrand-color n)) i))
    (doseq [[i x y] (for [x (range side-size)
                          y (range side-size)]
                      [(+ x (* side-size y)) x y])]
      (js/setTimeout #(set-color! y x (rrand-color n)) i))))

(defn in-bounds? [[x y]]
  (and (<= 0 x (dec side-size))
       (<= 0 y (dec side-size))))

(defn neighbors
  ([x y] (neighbors [x y]))
  ([[x y]]
   (let [color (get-color x y)]
     (->> [[x (dec y)]
           [x (inc y)]
           [(dec x) y]
           [(inc x) y]]
          (filter #(and
                    (= color (get-color %))
                    (in-bounds? %)))
          vec))))

(defn buds
  ([] (buds #{[0 0]} #{}))
  ([queue] (buds queue #{}))
  ([queue visited]
   (loop [q queue v visited]
     (if (empty? q)
       v
       (let [me (first q)
             next-q (disj q me)
             my-buds (remove v (neighbors me))]
         (recur (apply conj next-q my-buds) (conj v me)))))))

(defn flood-async
  ([color]
   (when-not (= color (get-color 0 0))
     (swap! state update :moves conj color)
     (flood-async color 0 0)))
  ([color x y]
   (doseq [[x y] (buds #{[x y]})]
     (set-color! x y color)
     #_(js/setTimeout #(set-color! x y color) (* 0.1 i)))))

(defn flood
  ([color]
   (flood color 0 0))
  ([color x y]
   (doseq [[i [x y]] (mapv vector (range) (sort-by
                                           (fn [[x y]] (* x y))
                                           (buds #{[x y]})))]
     (js/setTimeout #(set-color! x y color) (* 0.25 i)))))

(defn game-over? [board]
  (= 1 (count (->> board vals (mapcat vals) (map :color) set))))

(defn view []
  [:div {:style {:margin-top "10px" :width 600 :margin "auto"}}
   [:button {:on-click (fn [_] (randomize-board))} "Restart"]
   [:button {:on-click (fn [_] (randomize-board 0))} "Restart (Hard)"]
   (if (not (:hints-open? @state))
     [:button {:on-click #(swap! state update :hints-open? not)} "How to Play"]
     [:div {:style {:margin "10px"
                    :border "5px #438EE8 solid"
                    :border-radius "20px"}}
      [:div {:style {:float "right"}}
       [:button {:style {:background-color "#E84378"
                         :border-radius "50%"
                         :font-size "40px"
                         :width "100px"
                         :height "100px"}
                 :on-click #(swap! state update :hints-open? not)} "ok"]]
      [:p "The goal is to turn the entire board " [:strong "one color."] ""]
      [:p "When you hit a colored "[:strong "square"] " below, imagine the MS Paint fill tool was used on the " [:strong "top left"] " square."]
      [:p "All squares touching your color will be flooded!"]
      [:p "You can restart by clicking randomize"]])
   [:div
    {:style {:visibility (if (game-over? (:board @state))
                           "visible"
                           "hidden")}}
    [:h1 "You Win!"]
    [:p " With " (- 40 (count (:moves @state))) " moves to spare!"]]
   [:div {:style {:margin "20px"
                  :display "grid"
                  :grid-gap 2
                  :grid-template-columns (str/join " " (repeat side-size "25px"))
                  :grid-template-rows (str/join " " (repeat side-size "25px"))}}

    (doall
     (for [x (range side-size)
           y (range side-size)]
       (let [c (get-in @state [:board x y :color])
             img (:img (color-lookup c))]
         (js/console.log img)
         [:<> {:key (str x "-" y)}
          [:div {:on-click (fn [] (flood-async c))
                 :style (merge
                         {:cursor :pointer
                          :width "27px"
                          :height "27px"
                          :margin "-1px"
                          :grid-row-start x
                          :grid-row-end (inc x)
                          :grid-col-start y
                          :grid-col-end (inc y)
                          :text-align "center"
                          :font-size "5px"}
                         (when-not img {:background-color c
                                        :margin "-2px"
                                        :border "2px solid black"}))}
           (when img [:img {:src img}])]])))]
   (into
    [:div {:style {:margin-left "20px" :width "500px"}}
     [:div "Turns taken: " (count (:moves @state)) " | "
      "Turns left: " (- 40 (count (:moves @state)))]]
    (for [color (:moves @state)]
      (let [img (:img (color-lookup color))]
        [:img {:src img
               :style {:width "20px"
                       :margin "-1px 2px"
                       :height "20px"
                       :display "inline-block"}}])))
   (when (:hints-open? @state)
     [:div {:style {:margin-top "20px"
                    :padding "20px"
                    :border "#E84378 3px solid"
                    :border-radius "40px"}}
      [:h1 "Secrets Zone"]
      [:button {:on-click (fn []
                            (doseq [[i {:keys [color]}] (mapv vector
                                                              (range)
                                                              (shuffle colors))]
                              (js/setTimeout #(flood color) (* 800 i))))}
       "rainbow"]
      [:button {:on-click (fn [_]
                            (dotimes [i 10]
                              (js/setTimeout #(flood-async (rand-color)
                                                           (rand-int side-size)
                                                           (rand-int side-size))
                                             (* (rand-nth (range 200 500 100)) i))))}
       "Blam"]])])
