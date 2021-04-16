(ns new-root.weight
  (:require [reagent.core :as r]
            [clojure.edn :as edn]))

(defonce state
  (r/atom {:bar-weight 45
           :weights
           {2.5 0
            5   0
            10  0
            15  0
            25  0
            35  0
            45  0}}))

(defn total-weight [state]
  (reduce +
          (:bar-weight state 0)
          (for [[w c] (:weights state)]
            (* 2 w c))))

(defn weight-button [_lbs]
  (let [on? (r/atom false)]
    (fn [lbs]
      [:button
       {:style {:background-color (when @on? "#a74343")
                :color            (when @on? "white")}
        :on-click
        (fn []
          (if @on?
            (do (reset! on? false)
                (swap! state update-in [:weights lbs] dec))
            (do (reset! on? true)
                (swap! state update-in [:weights lbs] inc))))}
       lbs " lb"])))

(defn view []
  (fn []
    [:div {:style {:margin "30px 20px"}}
     [:h2 {:style {:text-align "center"}}
      [:code {:style {:font-size "40px"}}
       (total-weight @state)]
      " lbs total"]
     [:div {:style {:border "3px solid blue"
                    :padding "3px"
                    :border-radius "20px"}}
      [:div {:style {:text-align "center"}}
       "Select your weights for each side"]
      (into [:div]
            (mapv (fn [n]
                    (if (= n :break)
                      [:br]
                      [weight-button n]))
                  [1 1 1 2.5 5 :break
                   10 10 10 15 :break
                   25 25 25 35 :break
                   45 45 45 45 :break
                   45 45 45 45]))]
     [:div {:style {:margin-top "30px"}}
      [:label "Bar Weight:"]
      [:input {:value (:bar-weight @state)
               :placeholder "bar weight"
               :type "number"
               :on-change #(swap! state assoc
                                  :bar-weight
                                  (-> % .-target .-value
                                      edn/read-string))}]]]))
