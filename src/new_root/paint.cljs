(ns new-root.paint
  (:require [reagent.core :as r]
            [clojure.string :as str]))

(def side-size 25)
(def debug? false)

(def colors [{:title "Orange" :color "#FF8C40"}
             {:title "Red"    :color "#E84378"}
             {:title "Purple" :color "#A256FF"}
             {:title "Blue"   :color "#438EE8"}
             {:title "Teal"   :color "#54FFC0"}
             {:title "Green"  :color "#84E841"}
             {:title "Yellow" :color "#FFE252"}])

(defn rand-color [] (:color (rand-nth colors)))

(let [c (atom (rand-color))]
  (defn rrand-color []
    (if (> 0.3 (rand))
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

(defn set-color! [x y color]
  (swap! state assoc-in [:board x y :color] color))

(defn get-color
  ([x y] (get-color [x y]))
  ([[x y]]
   (get-in @state [:board x y :color])))

(defn randomize-board []
  (swap! state assoc :moves [])
  (if (> 0.5 (rand))
    (doseq [[i x y] (for [x (range side-size)
                          y (range side-size)]
                      [(+ x (* side-size y)) x y])]
      (js/setTimeout #(set-color! x y (rrand-color)) i))
    (doseq [[i x y] (for [x (range side-size)
                          y (range side-size)]
                      [(+ x (* side-size y)) x y])]
      (js/setTimeout #(set-color! y x (rrand-color)) i))))

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
   (swap! state update :moves conj color)
   (flood-async color 0 0))
  ([color x y]
   (doseq [[i [x y]] (mapv vector (range) (sort-by
                                           (rand-nth
                                            [(fn [[x y]] (* x y))
                                             (fn [[x y]] (* x x y y))
                                             (fn [[x y]] (* x x x x y y y y))
                                             (fn [[x y]] (+ x y))
                                             (fn [[x y]] (- (* 2 x) y y))
                                             (fn [[x y]] x)
                                             (fn [[x y]] (+ x (* 0.01 y)))
                                             (fn [[x y]] y)
                                             (fn [[x y]] (/ x (inc y)))
                                             (fn [[x y]] (/ y (inc y)))])
                                           (buds #{[x y]})))]
     #_(set-color! x y color)
     (js/setTimeout #(set-color! x y color) i))))

(defn flood
  ([color]
   (flood color 0 0))
  ([color x y]
   (doseq [[i [x y]] (mapv vector (range) (sort-by
                                           (rand-nth
                                            [(fn [[x y]] (* x y))
                                             (fn [[x y]] (* x x y y))
                                             (fn [[x y]] (* x x x x y y y y))
                                             (fn [[x y]] (+ x y))
                                             (fn [[x y]] (- (* 2 x) y y))
                                             (fn [[x y]] x)
                                             (fn [[x y]] (+ x (* 0.01 y)))
                                             (fn [[x y]] y)
                                             (fn [[x y]] (/ x (inc y)))
                                             (fn [[x y]] (/ y (inc y)))])
                                           (buds #{[x y]})))]
     #_(set-color! x y color)
     (js/setTimeout #(set-color! x y color) i))))

(defn game-over? [board]
  (= 1 (count (->> board
                   vals
                   (mapcat vals)
                   (map :color)
                   distinct))))

(defn view []
  [:div {:style {:margin-top "10px"}}
   [:div
    [:button {:on-click (fn [_] (randomize-board))} "Randomize"]]
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
      [:p "When you hit a colored button below, imagine the MS Paint fill tool was used on the top left square."]
      [:p "All squares touching your color will be flooded!"]
      [:p "You can restart by clicking randomize"]])
   [:div
    (for [{:keys [title color]} colors]
      [:<> {:key color}
       [:button {:on-click #(flood-async color)
                 :style {:background-color color}} title]])]
   [:div (when (game-over? (:board @state)) [:h1 "You Win!"])]
   (into
    [:div {:style {:margin-left "20px" :width "500px"}}
     [:div "Turns taken: " (count (:moves @state)) " | "
      "Turns left: " (- 40 (count (:moves @state)))]]
    (for [color (:moves @state)]
      [:span {:style {:width "20px"
                      :border "1px solid black"
                      :margin "-1px 2px"
                      :height "20px"
                      :display "inline-block"
                      :background-color color}} " "]))
   [:div {:style {:margin "20px"
                  :display "grid"
                  :grid-gap 2
                  :grid-template-columns (str/join " " (repeat side-size "20px"))
                  :grid-template-rows (str/join " " (repeat side-size "20px"))}}

    (doall
     (for [x (range side-size)
           y (range side-size)]
       [:<> {:key (str x "-" y)}
        [:div {:style (merge
                       {:width "20px"
                        :height "20px"
                        :margin "-2px"
                        :border "2px solid black"
                        ;;:border-radius "20%"
                        :grid-row-start x
                        :grid-row-end (inc x)
                        :grid-col-start y
                        :grid-col-end (inc y)
                        :text-align "center"
                        :font-size "5px"}
                       (when-let [c (get-in @state [:board x y :color])]
                         {:background-color c}))}
         (when debug? (str  x "," y))]]))]
   (when (:hints-open? @state)
     [:div {:style {:margin-top "100px"
                    :padding "20px"
                    :border "#E84378 3px solid"
                    :border-radius "40px"}}
      [:h1 "~~~ Fun Zone ~~~"]
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
