(ns convert
  (:require [hiccup.core :as h]
            [clojure.data.csv :as csv]
            [clojure.java.io :as io]
            [clojure.java.shell :as sh]))


(spit "index.html"
      (h/html
        [:html
         [:head
          [:meta {:charset "UTF-8"}]
          [:script {:src "https://cdn.tailwindcss.com"}]]
         [:div {:style "margin:80px"}
          [:h1.text-3xl.font-bold "Middlton First Baptist Men's Group Listing"]
          (let [[headers & rows] (with-open [reader (io/reader "mens_group_sorted.csv")]
                                   (doall
                                     (csv/read-csv reader)))]
            [:table.min-w-full {:style "margin-top:50px"}
             [:thead.border-b (into [:tr]
                                    (mapv (fn [h]
                                            [:th.text-lg.font-medium.px-6.py-4.text-left h])
                                          headers))]
             (into [:tbody]
                   (mapv (fn [[f l e p]]
                           [:tr.border-b
                            [:td.px-6.py-4.whitespace-nowrap f]
                            [:td.px-6.py-4.whitespace-nowrap l]
                            [:td.px-6.py-4.whitespace-nowrap e]
                            [:td.px-6.py-4.whitespace-nowrap p]])
                         rows))])
          [:div.pt-6.md:p-8.text-center.md:text-left.space-y-4 {:style "margin:30px"}
           [:p "Need to update your information? "
            [:a.text-blue-600.hover:text-blue-700.transition.duration-300.ease-in-out.mb-4
             {:href "mailto:bryan.maass@gmail.com"}
             "Please email me and let me know"]]]]]))
