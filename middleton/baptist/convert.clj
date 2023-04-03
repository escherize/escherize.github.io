(ns convert
  (:require [hiccup.core :as h]
            [clojure.data.csv :as csv]
            [clojure.java.io :as io]
            [clojure.java.shell :as sh]
            [clojure.string :as str]))

;; html:







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


;;; csv
;;;
;;;
(def headers (str/split "Name,Given Name,Additional Name,Family Name,Yomi Name,Given Name Yomi,Additional Name Yomi,Family Name Yomi,Name Prefix,Name Suffix,Initials,Nickname,Short Name,Maiden Name,Birthday,Gender,Location,Billing Information,Directory Server,Mileage,Occupation,Hobby,Sensitivity,Priority,Subject,Notes,Language,Photo,Group Membership,E-mail 1 - Type,E-mail 1 - Value,E-mail 2 - Type,E-mail 2 - Value,Phone 1 - Type,Phone 1 - Value,Address 1 - Type,Address 1 - Formatted,Address 1 - Street,Address 1 - City,Address 1 - PO Box,Address 1 - Region,Address 1 - Postal Code,Address 1 - Country,Address 1 - Extended Address,Website 1 - Type,Website 1 - Value" #","))

(def old->new
  {"LastName" "Family Name"
   "FirstName" "Given Name"
   "email" "E-mail 1 - Value"
   "phone" "Phone 1 - Value"})

(spit "middleton/baptist/new.csv"
      (let [[headers & rows] (with-open [reader (io/reader "middleton/baptist/mens_group_sorted.csv")]
                               (doall (csv/read-csv reader)))
            new-headers (mapv old->new headers)]
        (str/join "\n"
                  (concat [(str/join "," new-headers)] (mapv #(str/join "," %) rows)))))
