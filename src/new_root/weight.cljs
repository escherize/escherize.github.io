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

(def widths {1 20
             2.5 23
             5 30
             10 40
             15 45
             25 50
             35 60
             45 70})

(defn weight-button [_lbs]
  (let [on? (r/atom false)]
    (fn [lbs]
      [:button
       {:style {
                :border "1px solid grey"
                :margin 20
                :background-color (when @on? "#4343c7")
                :color            (when @on? "white")
                :width (max 42
                            (int (* 3 lbs)))}
        :on-click
        (fn []
          (if @on?
            (do (reset! on? false)
                (swap! state update-in [:weights lbs] dec))
            (do (reset! on? true)
                (swap! state update-in [:weights lbs] inc))))}
       lbs])))

(defn view []
  (fn []
    [:div {:style {:margin "30px 20px"}}
     [:h2 {:style {:text-align "center"}}
      [:code {:style {:font-size "40px"}}
       (total-weight @state)] " lbs"]
     [:div {:style {:border "3px solid grey"
                    :padding "10px"
                    :border-radius "5px"}}
      [:div {:style {:display "flex"
                     :flex-flow "row wrap"
                     :justify-content "space-around"
                     :align-content "stretch"}}
       [weight-button 1]
       [weight-button 1]
       [weight-button 1]
       [weight-button 2.5]
       [weight-button 5]
       [weight-button 10]
       [weight-button 10]
       [weight-button 10]
       [weight-button 15]
       [weight-button 25]
       [weight-button 25]
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
