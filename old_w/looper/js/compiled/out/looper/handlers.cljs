(ns looper.handlers
  (:require [re-frame.core :as re-frame]
            [looper.db :as db]))

(re-frame/register-handler :initialize-db
  (fn [_ _] db/default-db))

(re-frame/register-handler :db
  (fn [db _] (.log js/console (pr-str db)) db))

(re-frame/register-handler :content
  (fn [db [_ content]] (assoc db :content content)))

(re-frame/register-handler :parsed-data
  (fn [db [_ graph-data]]
    (let [nodes (->> graph-data flatten set (mapv str))
          edges (->> graph-data
                     (filter coll?)
                     (map #(partition 2 1 %))
                     flatten
                     (partition 2)
                     (map vec)
                     distinct)]
      (comment old-nodes (remove (set nodes)
                                 (:nodes db))
               old-edges (remove (set edges)
                                 (:edges db))
               (.log js/console (clj->js old-nodes))
               (.log js/console (clj->js old-edges)))
      (when (or (not= nodes (:nodes db))
                (not= edges (:edges db)))
        (do
          (js/clear)
          (doseq [n nodes]
            (do (.log js/console (clj->js {:id n}))
                (js/add_node (clj->js {:id n}))))
          (doseq [e edges]
            (let [[s t] e
                  edge {:source {:id s} :target {:id t}}]
              (.log js/console (clj->js edge))
              (js/add_edge (clj->js edge))))
          (js/start)))
      (-> db
          (assoc :parsed-data graph-data)
          (assoc :nodes nodes)
          (assoc :edges edges)))))

(re-frame/register-handler :update-graph
  (fn [db []]))
