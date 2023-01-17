(ns convert
  (:require [hiccup.core :as h]
            [clojure.data.csv :as csv]
            [clojure.java.io :as io]
            [clojure.java.shell :as sh]))


(defn make-table []
  (let [[headers & rows] (with-open [reader (io/reader "mens_group_sorted.csv")]
                           (doall
                             (csv/read-csv reader)))]
    [:table {:style "margin-top:50px"}
     [:thead.border-solid.border-2.border-sky-500.hover:outline-blue-500
      (into [:tr]
            (mapv (fn [h]
                    [:th.text-lg.font-medium.px-6.py-4.bg-primary.text-left h])
                  headers))]
     (into [:tbody]
           (mapv (fn [[f l e p]]
                   (into [:tr.border-solid.border-2.border-sky-500.hover:border-amber-500 {:style "margin-top:2px"}]
                         (map (fn [x] [:td.px-4.py-3.whitespace-nowrap x]) [f l e p])))
                 rows))]))

(defn footer []
  [:div.pt-6.md:p-8.text-center.md:text-left.space-y-4 {:style "margin:30px"}
   [:p "Need to update your information? "
    [:a.text-blue-600.hover:text-blue-700.transition.duration-300.ease-in-out.mb-4
     {:href "mailto:bryan.maass@gmail.com"} "Please email me and let me know"]]])

(spit "index.html"
      (h/html
        [:html
         [:head [:meta {:charset "UTF-8"}] [:script {:src "https://cdn.tailwindcss.com"}]]
         [:div {:style "margin:80px"}
          [:h1.text-3xl.font-bold "Middlton First Baptist Men's Group List"]
          (make-table)
          (footer)]]))
