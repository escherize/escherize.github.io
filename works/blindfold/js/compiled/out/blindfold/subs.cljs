(ns blindfold.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

(defn attrs [items]
  (vec (distinct (mapcat keys (vals items)))))

(re-frame/reg-sub
 :items
 (fn [{:keys [items weights] :as db}]
   (let [attrs (attrs items)
         with-scores (into {}
                           (map
                            (fn [[k vs]]
                              [k (assoc vs :score
                                        (->> attrs
                                             (map (fn [a] (* (a weights 0) (a vs 0))))
                                             (apply +)))]))
                           items)]
     with-scores
     ;;items
     )))

(re-frame/reg-sub
 :attrs
 :<- [:items]
 (fn [items _]
   (attrs items)))

(re-frame/reg-sub
 :weights
 (fn [db] (:weights db)))
