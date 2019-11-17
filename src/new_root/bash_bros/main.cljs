(ns new-root.bash-bros.main
  (:require [reagent.core :as r]
            [clojure.pprint :as pp]))

(def width 600)
(def height 400)
(defonce state (r/atom {:debug/on? false
                        :player/dir :right
                        :player/x (/ width 2)
                        :player/y (/ height 2)}))

(defn ensure-coll [& xs]
  (flatten xs))

(defn debug-component [state]
  [:span {:on-click #(swap! state update :debug/on? not)}
   (if (:debug/on? @state)
     [:pre (with-out-str (pp/pprint @state))]
     "*")])

(defn draw-game [state]
  [:svg
   {:view-box (str "0 0 " width " " height)
    :style {:background-color "green"
            :height height
            :width width}}
   [:circle {:cx (:player/x state)
             :cy (:player/y state)
             :r 5}]])

(defn main []
  [:div
   [:h1 "bash Bros."]
   [:div
    [draw-game @state]]
   [:div
    [debug-component state]]])
