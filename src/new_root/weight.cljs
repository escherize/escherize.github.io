(ns new-root.weight
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [clojure.edn :as edn]))

(rf/reg-event-db ::init!
 (fn [db _]
   (cond-> db
     (not (::here db))
     (assoc ::here
            {:bar-weight 45
             :excercise-count 1
             :total 135
             :weights
             {0.5 0
              1   0
              2.5 0
              5   0
              10  0
              15  0
              25  0
              45  0}
             :buttons [0.5 1 1 1 2.5 5 10 10
                       25 25 25
                       45 45 45 45 45 45 45 45]}))))

(rf/reg-sub ::total (fn [db _] (:total (::here db))))
(rf/reg-sub ::excercise-count (fn [db _] (:excercise-count (::here db))))
(rf/reg-sub ::bar-weight (fn [db _] (:bar-weight (::here db))))

(defn weights-per-side [plate-denominations weight-total bar-weight]
  {:total weight-total
   :bar bar-weight
   :weights
   (loop [weights (reverse (sort plate-denominations))
          total (- weight-total bar-weight)
          acc {}]
     ;;(println [weights total acc])
     (let [weight (first weights)]
       (cond
         (zero? total)
         acc

         (not weight)
         (do
           (js/console.log "broken:" [acc weights total])
           {})

         (< total 0)
         {}

         :else
         (if (>= total (* 2 weight))
           (recur weights
                  (- total (* 2 weight))
                  (update acc weight (fnil inc 0)))
           (recur (rest weights) total acc)))))})

(rf/reg-sub
 ;; outputs map of lbs -> # of weights to put on each side
 ::weights
 :<- [::total]
 :<- [::bar-weight]
 (fn [[total bar-weight] _]
   (:weights (weights-per-side [0.5 1 2.5 5 10 25 45] total bar-weight))))

#_(rf/reg-sub
 ::weights-per-side
 :<- [::weights]
 (fn [[weights] _]
   (mapv
    (fn [[w n]])
    )))

(rf/reg-event-db
 ::set-bar-weight
 (fn [db [_ bw]]
   (assoc-in db [::here :bar-weight] (edn/read-string bw))))

(rf/reg-event-fx
 ::set-total-debounced
 (fn [_ [_ bw]]
   {:dispatch-debounce [::set-total bw]}))

(rf/reg-event-db
 ::set-total
 (fn [db [_ bw]]
   (let [v (min (edn/read-string bw) 20000)]
     (-> db (assoc-in [::here :total] v)))))

(defonce state
  (r/atom {:bar-weight 45
           :weights
           {0.5 0
            1   0
            2.5 0
            5   0
            10  0
            15  0
            25  0
            45  0}
           :buttons [0.5
                     1 1 1
                     2.5
                     5
                     10 10
                     25 25 25
                     45 45 45 45 45 45 45 45]}))

(defn total-weight [state]
  (reduce +
          (:bar-weight state 0)
          (for [[w c] (:weights state)]
            (* 2 w c))))

(defn weight-values [state]
  (vec (reverse (sort (keys (:weights state))))))

(def widths {0.5 30 1 33 2.5 35 5 40 10 50 25 60 45 80})
(def m-tops {0.5 48
           1 45
           2.5 44
           5 38
           10 30
           25 18
           45 0})
(def fs {0.5 17 1 20 2.5 20 5 25 10 30 25 35 45 40})

(defn weight [size]
  [:div
   {:style {:margin-top (str (m-tops size) "px")
            :margin-right "3px"
            :margin-left "3px"
            :display "inline-block"
            :text-align "center"
            :width (widths size)
            :height (widths size)}}
   [:div
    {:style {:width (widths size)
             :height (widths size)
             :border-radius "50%"
             :background-color "#999"
             :border "1px solid black"
             :display "inline-block"
             :position "relative"}}
    [:div {:style {:position "absolute"
                   :top "0%"
                   :width "100%"
                   :color "#1535e5"
                   :font-size (fs size)
                   :text-align "center"}}
     size]]])

(defn display-weights [weights]
  (into [:div {:style {:display "flex"
                       :justify-content "center"
                       :align-content "end"
                       :flex-wrap "wrap"
                       :padding "10px 2px"}}]
        (mapv
         (fn [[w cnt]] (repeat cnt [weight w]))
         (reverse (sort-by first weights)))))

(defn exercise []
  [:<>
   [:div
    [:div {:style {:display :inline-block
                   :background-color "#acf"
                   :margin "0 0 3px 0"
                   :padding "4px"
                   :border-radius "4px"}}
     [:label [:strong "Total Weight"]]
     [:input {:value @(rf/subscribe [::total])
              :placeholder "total weight"

              :step 5
              :inputmode :numeric
              :input-mode :numeric
              :type "number"
              :on-change #(rf/dispatch [::set-total (-> % .-target .-value)])}]]
    ]
   [:div {:style {:border "4px solid #454545" :padding 3}}
    [:p "Weights per side"]
    [:hr {:style {:height "3px" :color "#454545"}}]
    [display-weights @(rf/subscribe [::weights])]]
   (let [wob (- @(rf/subscribe [::total]) @(rf/subscribe [::bar-weight]))]
      [:<>
       [:div
        [:span {:style {:margin-left "3%"
                        :color "grey"
                        :text-align "center"}} (str "weight on bar = " wob)]]
       [:div
        [:span {:style {:margin-left "3%"
                        :color "grey"
                        :text-align "center"}}
         (str "(" wob " / 2) = "  (/ wob 2))]]])
   [:div {:style {:display :inline-block
                  :margin-top "-33px"
                  :background-color "#acf"
                  :padding "4px"
                  :border-radius "4px"
                  :float :right}}
     [:label "Bar Weight:"]
     [:input {:value @(rf/subscribe [::bar-weight])
              :placeholder "bar weight"
              :inputmode :numeric
              :input-mode :numeric
              :type "number"
              :on-change #(rf/dispatch [::set-bar-weight (-> % .-target .-value)])}]]])

(rf/reg-event-db
 ::add-exercise
 (fn [db _] (update db :excercise-count inc)))

(defn view []
  (let [_ (rf/dispatch [::init!])
        exercise-count @(rf/subscribe [::excercise-count])]
    [:div {:style {:margin "30px 20px"}}
     [exercise]
     ;; [:div exercise-count]

     ;; (into [:div]
     ;;       (doall
     ;;        (for [path (range 1 (inc exercise-count))]
     ;;          ^{:key path} [:div path])))

     ;; [:button
     ;;  {:on-click #(rf/dispatch [::add-exercise])}
     ;;  "+"]
     ]))
