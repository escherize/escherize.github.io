(ns new-root.neumorph
  (:require [reagent.core :as r]))

;; (def origin (r/atom [0 0]))

(defn find-location [element]
  (let [position (js->clj (.getBoundingClientRect element))
        w (.-offsetWidth element)
        x (.-x position)
        h (.-offsetHeight element)
        y (.-y position)]
    [(+ x (/ w 2))
     (+ y (/ h 2))]))

(defn sqared [x] (* x x))

(defn p1+p2->box-shadow
  [to from]
  (let [->bs (fn ->bs
               ([x y] (->bs x y x y))
               ([a b c d]
                (str a "px " b "px 20px #c9cbcf, "
                     (* -1 c) "px " (* -1 d) "px 20px #ffffff")))
        [x1 y1] from
        [x2 y2] to
        x (- x1 x2)
        y (- y1 y2)
        h (Math/sqrt (+ (sqared x) (sqared y)))
        unit-x (/ x h)
        unit-y (/ y h)
        ;; unit-vector [unit-x unit-y]
        us 12
        scale (fn [x] (/ x 50))]

    ;; tried these, chose # 0
    #_(case @*selector
      0 (->bs (* us unit-x) (* us unit-y))
      1 (->bs (* us unit-x) (* us unit-y) (scale x) (scale y))
      2 (->bs (scale x) (scale y) (* us unit-x) (* us unit-y)))

    (->bs (* us unit-x) (* us unit-y))))

(defonce *pointer (r/atom [300 300]))

(defn shadow-box []
  (let [*my-position (r/atom [])
        title (rand-nth ["Beep" "Boop"])
        width (* 31.25 (rand-nth (range 3 7)))]
    (r/create-class
     {:component-did-mount (fn [this] (reset! *my-position (find-location (r/dom-node this))))
      :reagent-render
      (fn []
        [:div
         {:style (merge
                  {:margin "30px"
                   :width width
                   :height 50
                   :border-radius "20px"
                   :padding "20px"
                   :box-shadow "-14px 14px 20px #c9cbcf, 14px -14px 20px #ffffff"}
                  (when @*my-position
                    {:box-shadow (p1+p2->box-shadow @*pointer @*my-position)}))}
         [:h1 title]
         (when false
           [:<>
            [:p "origin: " (pr-str @*pointer)]
            [:p "my position: " (pr-str @*my-position)]])])})))

(defn view []
  (r/with-let [handler #(reset! *pointer [(.-pageX %) (.-pageY %)])
               _ (.addEventListener js/document "mousemove" handler)]
    [:div {:style {:margin "100px"}}
     #_[:button {:style {:cursor :pointer}
               :on-click bump-selector}
      ({0 "constant dark, constant light."
        1 "constant dark, scaled light."
        2 "scaled dark, constant light."} @*selector)]
     (into
      [:div {:style {:display "flex" :flex-flow "wrap"}}]
      (repeat 30 [shadow-box]))]
    (finally
      (.removeEventListener js/document "mousemove" handler))))
