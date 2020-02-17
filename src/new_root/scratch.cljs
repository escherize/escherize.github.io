(ns new-root.scratch
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

(defn p1+p2->box-shadow [to from]
  (let [[x1 y1] from
        [x2 y2] to
        x (- x1 x2)
        y (- y1 y2)
        h (Math/sqrt (+ (sqared x) (sqared y)))
        unit-x (/ x h)
        unit-y (/ y h)
        ;; unit-vector [unit-x unit-y]
        s 14] ;; scale
    (str  (* s unit-x) "px " (* s unit-y) "px " "20px #c9cbcf"
           ", "
          (* s unit-x -1) "px " (* s unit-y -1) "px " "20px #ffffff"
          )))

(defonce *pointer (r/atom [300 300]))

(defn shadow-box []
  (let [*my-position (r/atom [])]
    (r/create-class
     {:component-did-mount (fn [this] (reset! *my-position (find-location (r/dom-node this))))
      :reagent-render
      (fn []
        [:div
         {:style (merge
                  {:margin "40px"
                   :width "161px"
                   :height "100px"
                   :border-radius "30px"
                   :padding "20px"
                   :box-shadow "-14px 14px 20px #c9cbcf, 14px -14px 20px #ffffff"}
                  (when @*my-position
                    {:box-shadow (p1+p2->box-shadow @*pointer @*my-position)}))}
         [:h3 "Eli,"]
         [:h3 "I'm sorry!"]
         (when false
           [:<>
            [:p "origin: " (pr-str @*pointer)]
            [:p "my position: " (pr-str @*my-position)]])])})))



(defn view []
  (r/with-let [handler #(reset! *pointer [(.-pageX %) (.-pageY %)])
               _ (.addEventListener js/document "mousemove" handler)]
    [:div {:style {:margin "100px" :display "flex" :flex-flow "wrap"}}
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]
     [shadow-box]]
    (finally
      (.removeEventListener js/document "mousemove" handler))))
