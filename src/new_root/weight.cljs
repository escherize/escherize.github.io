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
  (pr-str
   (+
    (reduce + 0 (for [[w c] (:weights state)] (* 2 w c)))
    (:bar-weight state))))

(defn weight-button [_lbs]
  (let [on? (r/atom false)]
    (fn [lbs]
      [:button
       {:style {:background-color (when @on? "#a74343")
                :color (when @on? "white")}
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
      [:div
       [weight-button 1]
       [weight-button 2.5]
       [weight-button 5]
       [weight-button 10]
       [weight-button 15]
       [weight-button 25]
       [weight-button 35]
       [weight-button 45]
       [weight-button 45]
       [weight-button 45]
       [weight-button 45]
       [weight-button 45]
       [weight-button 45]
       [weight-button 45]
       [weight-button 45]]]
     [:div {:style {:margin-top "30px"}}
      [:label "Bar Weight:"]
      [:input {:value (:bar-weight @state)
               :placeholder "bar weight"
               :type "number"
               :on-change #(swap! state assoc
                                  :bar-weight
                                  (-> % .-target .-value
                                      edn/read-string))}]]]))
