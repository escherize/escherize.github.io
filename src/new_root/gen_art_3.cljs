(ns new-root.gen-art-3
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [reagent.dom :as rd]
            [reagent.core :as r]))

(defn draw [{:keys [circles]}]
  (q/background 255)
  (doseq [{[x y] :pos color :color r :r} circles]
    (q/fill color)
    (q/ellipse x y r r)))

(def pallets
  {:night-sand {:sand-tan "#e1b382"
                :sand-tan-shadow "#c89666"
                :night-blue "#2d545e"
                :night-blue-shadow "#12343b"}
   :mountain-grass {:grassy-green "#9bc400"
                    :purple-mountains-majesty "#8076a3"
                    :misty-mountain-pink "#f9c5bd"
                    :factory-stone-purple "#7c677f"}
   :treeline-light {:green-treeline "#478559"
                    :purple-baseline "#161748"
                    :pink-highlight "#f95d9b"
                    :bluewater-lowlight "#39a0ca"}
   :bright-mode {:yellow-background "#ffde22"
                 :pink-red-circle "#ff414e"
                 :orange-circle "#ff8928"
                 :white-layover "#f1fcfa"}
   :blueperp {:lightning-blue "#51d0de"
              :lightning-purple "#bf4aa8"
              :brain-wrinkle-white "#d9d9d9"}
   :soft-red {:light-blue-green "#6ed3cf"
              :soft-purple "#9068be"
              :tasty-eighties-grey "#e1e8f0"
              :rich-red "#e62739"}})

(defn rand-color [pallet-name]
  (rand-nth (vals (pallet-name pallets))))

(defonce pallet-title (r/atom (first (keys pallets))))

(defn gen-circle [width height]
  (let [r (+ 10 (rand-int 300))]
    {:r r
     :pos [(+ (/ r 2) (rand-int (- width r)))
           (+ (/ r 2) (rand-int (- height r)))]}))

(defn square [x] (* x x))

(defn collide? [{[x1 y1] :pos r1 :r}
                {[x2 y2] :pos r2 :r}]
  (< (square (/ (+ r1 r2) 2))
     (+ (square (- x1 x2))
        (square (- y1 y2)))))

(defn no-collisions? [{[x y] :pos r :r :as c}
                      circles]
  (->> circles
       (map #(collide? c %))
       (reduce #(and %1 %2) true)))

(defn update-state [{:keys [width height vector-f] :as state}]
  (js/console.log (pr-str state))
  state)

(defonce page-state
  (r/atom {:running? true
           :margin (* 0.05 (.-innerWidth js/window))}))

(defn canvas []
  (r/create-class
   {:component-did-mount
    (fn [component]
      (let [node (rd/dom-node component)
            width (- (.-innerWidth js/window)
                     (* 2 (:margin @page-state)))
            height (/ width 1.61)]
        (q/sketch
         :host node
         :setup (constantly {:width (int width)
                             :height (int height)
                             :vector-f (fn [x y] [1 1])
                             :travelers []})
         :draw draw
         :update update-state
         :size [width height]
         :middleware [m/fun-mode])))
    :render
    (fn [] [:div])}))

(defn color-pallete []
  [:div
   [:h3 "Current Pallet " (pr-str @pallet-title)]
   (doall
    (for [[title pallet] pallets]
      [:div {:style {:margin 20
                     :cursor :pointer
                     :border-radius "3px"
                     :border (if (= title @pallet-title) "5px black solid" "none")}
             :on-click #(reset! pallet-title title)}
       (name title) " => "
       (for [[description color] pallet]
         [:<> [:span {:style {:background-color color
                              :padding 5
                              :margin 2
                              :width "10px"
                              :height "10px"}}
               description]])]))])

(defn view []
  (let [running? (:running? @page-state)]
    [:div
     [:h3 "vector fields"]
     [:div>button
      {:on-click #(swap! page-state update :running? not)}
      (if running? "stop" "start")]
     (when running? [:div {:style {:margin (:margin @page-state)}} [canvas]])
     #_[color-pallete]]))
