(ns new-root.neumorph
  (:require [reagent.core :as r]
            [clojure.string :as str]))

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
        us 12]
    (->bs (* us unit-x) (* us unit-y))))

(defn p1+p2->box-shadow-main
  [to from]
  (let [->bs (fn [x y] (str x "px " y "px #DBCBA9"))
        [x1 y1] from
        [x2 y2] to
        x (- x1 x2)
        y (- y1 y2)
        h (Math/sqrt (+ (sqared x) (sqared y)))
        unit-x (/ x h)
        unit-y (/ y h)
        bs (->bs (* 17 unit-x) (* 17 unit-y))]
    {:bs bs
     :x x
     :y y
     :h h
     :unit-x unit-x
     :unit-y unit-y}))



(defonce *pointer (r/atom [300 300]))

(defn shadow-box
  ([*pointer content]
   (let [*my-position (r/atom [])
         height 30]
     (r/create-class
      {:component-did-mount (fn [this] (reset! *my-position (find-location (r/dom-node this))))
       :reagent-render
       (fn [*pointer content]
         [:div
          {:style (merge
                   {:margin "30px"
                    :text-align "center"
                    :height height
                    :border-radius "20px"
                    :padding "20px"
                    :box-shadow "-14px 14px 20px #c9cbcf, 14px -14px 20px #ffffff"}
                   (when @*my-position
                     {:box-shadow
                      (p1+p2->box-shadow @*pointer @*my-position)}))}
          content
          (when false
            [:<>
             [:p "origin: " (pr-str @*pointer)]
             [:p "my position: " (pr-str @*my-position)]])])}))))

(defn is-mobile? []
  (-> js/window
      (.matchMedia "only screen and (max-width: 760px)")
      (.-matches)))

(defn wrap-shadow-container [*pointer content]
  (r/with-let [handler #(reset! *pointer [(.-pageX %) (.-pageY %)])
               _ (.addEventListener js/document "mousemove" handler)
               touch-handler (fn [e] (let [last-idx (-> e .-touches .-length dec)
                                           last-item (-> e .-touches (aget last-idx))]
                                       (reset! *pointer [(.-clientX last-item) (.-clientY last-item)])))
               _ (.addEventListener js/document "touchmove" touch-handler)]
    content
    (finally
      (.removeEventListener js/document "mousemove" handler)
      (.removeEventListener js/document "touchmove" touch-handler))))

(defn view []
  (r/with-let [handler #(reset! *pointer [(.-pageX %) (.-pageY %)])
               _ (.addEventListener js/document "mousemove" handler)
               touch-handler (fn [e] (let [last-idx (-> e .-touches .-length dec)
                                           last-item (-> e .-touches (aget last-idx))]
                                       (reset! *pointer [(.-clientX last-item) (.-clientY last-item)])))
               _ (.addEventListener js/document "touchmove" touch-handler)
               ]
    [:div {:style {:margin "100px"}}
     (into
      [:div {:style {:display "flex" :flex-flow "wrap"}}]
      (doall
       (map (fn [w] [shadow-box *pointer
                     [:p w]])
            (repeat 30 "Neumorphism"))))]
    (finally
      (.removeEventListener js/document "mousemove" handler)
      (.removeEventListener js/document "touchmove" touch-handler))))
