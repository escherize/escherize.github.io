(ns new-root.mindustry
  (:require
   [reagent.core :as reagent]
   [rid3.core :as rid3 :refer [rid3->]]
   [new-root.data :refer [miserables]]
   ["d3" :as d3]))

(defn create-sim
  [d3-vars]
  (let [{:keys [width height]} @d3-vars]
    (doto (d3/forceSimulation)
      (.stop)
      (.force "link" (-> (d3/forceLink) (.id #(.-index %))))
      (.force "charge" (d3/forceManyBody))
      (.force "center" (d3/forceCenter (/ width 2) (/ height 2)))
      (.on "tick"
           (fn tick []
             (when-let [s (:links-sel @d3-vars)]
               (rid3-> s
                       {:x1 #(.. % -source -x)
                        :y1 #(.. % -source -y)
                        :x2 #(.. % -target -x)
                        :y2 #(.. % -target -y)}))
             (when-let [s (:nodes-sel @d3-vars)]
               (rid3-> s
                       {:cx #(.-x %)}
                       {:cy #(.-y %)})))))))

(defn create-drag
  [sim]
  (-> (d3/drag)
      (.on "start"
           (fn started
             [_d _ _]
             (if (-> js/d3 .-event .-active zero?)
               (doto sim
                 (.alphaTarget 0.3)
                 (.restart)))))
      (.on "drag"
           (fn dragged
             [d _ _]
             (let [event (.-event js/d3)]
               (set! (.-fx d) (.-x event))
               (set! (.-fy d) (.-y event)))))
      (.on "end"
           (fn ended
             [d _ _]
             (if (-> js/d3 .-event .-active zero?)
               (.alphaTarget sim 0))
             (set! (.-fx d) nil)
             (set! (.-fy d) nil)))))

(defn merge-nodes
  [orig new id]
  (let [orig-map (into {} (map-indexed (fn [i n] [(id n) i]) orig))]
    (doseq [n new]
      (when-let [old (aget orig (orig-map (id n)))]
        (when-let [x (.-x old)] (set! (.-x n) x))
        (when-let [y (.-y old)] (set! (.-y n) y))
        (when-let [vx (.-vx old)] (set! (.-vx n) vx))
        (when-let [vy (.-vy old)] (set! (.-vy n) vy))
        (when-let [fx (.-fx old)] (set! (.-fx n) fx))
        (when-let [fy (.-fy old)] (set! (.-fy n) fy))))
    new))


(defn update-sim! [sim alpha {:keys [links nodes]}]
  (let [old-nodes (.nodes sim)
        new-nodes (merge-nodes old-nodes nodes #(.-name %))]
    (doto sim
      (.nodes new-nodes)
      (-> (.force "link") (.links links))
      (.alpha alpha)
      (.restart))))

(defn viz
  [ratom]
  (let [d3-vars (atom {:width 950
                       :height 800
                       :links-sel nil
                       :nodes-sel nil})
        sim (create-sim d3-vars)
        drag (create-drag sim)
        color (d3/scaleOrdinal (.-schemeCategory10 js/d3))]
    (fn [ratom]
      [rid3/viz {:id     "rid3-force-demo"
                 :ratom  ratom
                 :svg    {:did-mount  (fn [svg ratom]
                                        (let [{:keys [width height]} @d3-vars]
                                          (rid3-> svg
                                                  {:width   width
                                                   :height  height
                                                   :viewBox #js [0 0 width height]}))
                                        (update-sim! sim 1 @ratom))
                          :did-update (fn [svg ratom]
                                        (update-sim! sim 0.3 @ratom))}
                 :pieces [{:kind            :elem-with-data
                           :class           "links"
                           :tag             "line"
                           :prepare-dataset (fn [ratom] (:links @ratom))
                           :did-mount       (fn [sel _ratom]
                                              (swap! d3-vars assoc :links-sel sel)
                                              (rid3-> sel
                                                      {:stroke         "#999"
                                                       :stroke-opacity 0.6
                                                       :stroke-width   #(-> (.-value %)
                                                                            js/Math.sqrt)}))}
                          {:kind            :elem-with-data
                           :class           "nodes"
                           :tag             "circle"
                           :prepare-dataset (fn [ratom] (:nodes @ratom))
                           :did-mount       (fn [sel _ratom]
                                              (swap! d3-vars assoc :nodes-sel sel)
                                              (rid3-> sel
                                                      {:stroke       "#fff"
                                                       :stroke-width 1.5
                                                       :r            5
                                                       :fill         #(color (.-group %))}
                                                      (.call drag)))}]}])))

(defonce app-state (reagent/atom miserables))

(defn prechew
  [app-state]
  (-> @app-state
      (update :nodes clj->js)
      (update :links clj->js)))

(defn miserables-rand-links []
  (update miserables :links #(->> % shuffle (take (rand-int (dec (count %)))))))

(defn view
  []
  [:div
   [:button
    {:on-click #(reset! app-state (miserables-rand-links))}
    "Randomize links"]
   [viz (reagent/track prechew app-state)]])
