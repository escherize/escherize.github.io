(ns blindfold.views
  (:require [re-frame.core :as re-frame]))

(defn slider [value on-change]
  [:input {:type "range" :value value :min 0 :max 10 :step 1
           :style {:width "100px"}
           :on-change (fn [e]
                        (on-change
                         (.-target.value e)))}])

(defn main-panel []
  (let [items (re-frame/subscribe [:items])
        weights (re-frame/subscribe [:weights])
        all-attributes (re-frame/subscribe [:attrs])
        ]
    (fn []
      [:div {:style {:text-align "center"
                     :font-size "36px"
                     :font-family "monospace"}}
       (let [attributes @all-attributes]
         ;;[:pre (pr-str @items)]
         (into [:table
                (into [:thead [:td "title"]]
                      (for [a attributes] [:td a]))]
               (map (fn [[title data]]
                      (into [:tr [:td title]]
                            (for [d data] [:td {:style {:border "1px black dashed"}} d])))
                    (concat
                     [[:weight @weights]
                      [:edit (for [[title value] @weights]
                               [slider
                                value
                                #(re-frame/dispatch
                                  [:assoc-in [:weights title]
                                   (js/parseFloat %)])])]]
                     (vec
                      (reverse
                       (sort-by
                        (fn [[k vs]] (:score vs))
                        @items)))))))])))
