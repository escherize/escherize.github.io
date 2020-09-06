(ns new-root.relations-grouping
  (:require [quil.core :as q]
            [reagent.dom :as rd]
            [quil.middleware :as m]
            [reagent.core :as r]))

(def margin 10)

(defn draw [{:keys [width height items] :as state}]
  (q/clear)
  (doseq [{:keys [x y] :as i} items]
    (q/ellipse x y 10 10)))

(defn set-matcher [s1 s2])

(defn fellow-nodes [state item]
  )

(defn move-item [state {:keys [dx dy] :as item}]
  (-> item
      (update :x + dx)
      (update :y + dy)))

(defn update-state [{:keys [items] :as state}]
  (let [moved-items (mapv #(move-item state %) (:items state))]
    (assoc state :items moved-items)))

(defn ->item [w h title & tags]
  {:title title
   :x (rand-int w)
   :y (rand-int h)
   :dx (- (rand) 0.5)
   :dy (- (rand) 0.5)
   :tags (set tags)})

(defn canvas []
  (r/create-class
   {:component-did-mount
    (fn [component]
      (let [node (rd/dom-node component)
            width (- (.-innerWidth js/window) (* 2 margin))
            height (- (.-innerHeight js/window) (* 2 margin))
            ->item (partial ->item width height)]
        (q/sketch
         :host node
         :draw draw
         :setup (constantly {:width width
                             :height height
                             :items [(->item "item A" :A :B)
                                     (->item "item B" :A :B)]})
         :update update-state
         :size [width height]
         :middleware [m/fun-mode])))
    :render
    (fn [] [:div])}))

(defn view []
  [:div {:style {:width "800px" :margin "auto"}}
   [:h1 "Grouping things"]
   [canvas]])
