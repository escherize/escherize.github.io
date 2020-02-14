(ns new-root.gen-art
  (:require [quil.core :as q]
            [quil.middleware :as m]
            [reagent.core :as r]))

(defn draw [{:keys [circles]}]
  (q/background 255)
  (doseq [{[x y] :pos color :color} circles]
    (q/fill color)
    (q/ellipse x y 20 20)))

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

(defn update-state [{:keys [width height] :as state}]
  (update state :circles conj {:pos   [(+ 20 (rand-int (- width 40)))
                                       (+ 20 (rand-int (- height 40)))]
                               :color (rand-color @pallet-title)}))

(defn canvas []
  (r/create-class
   {:component-did-mount
    (fn [component]
      (let [node (r/dom-node component)
            width (/ (.-innerWidth js/window) 2)
            height (/ (.-innerHeight js/window) 2)]
        (q/sketch
         :host node
         :draw draw
         :setup (constantly {:width   width
                             :height  height
                             :circles []})
         :update update-state
         :size [width height]
         :middleware [m/fun-mode])))
    :render
    (fn [] [:div])}))

(defonce running? (r/atom false))

(defn view []
  [:div {:style {:width "800px" :margin "auto"}}
   [:h3 "Circles Demo"]
   [:div>button
    {:on-click #(swap! running? not)}
    (if @running? "stop" "start")]
   (when @running? [canvas])
   [:h3 "Select a Pallet"]
   (doall
    (for [[title pallet] pallets]
      [:div {:key title
             :style (merge {:margin 10
                            :background-color "#fafaff"
                            :cursor :pointer
                            :border-radius "10px"}
                           (if (= title @pallet-title)
                             {:border "3px black solid"
                              :padding "7px"}
                             {:padding "10px"}))
             :on-click #(reset! pallet-title title)}
       [:span {:style {:font-size "20px"}}(name title)]
       [:br]
       (doall
        (for [[description color] pallet]
          [:<> {:key color}
           [:span {:style {:background-color color
                           :padding 5
                           :white-space "nowrap"
                           :margin 2
                           :width "10px"
                           :height "10px"}}
            description]]))]))])
