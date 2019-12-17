(ns new-root.util
  (:require [clojure.string :as str]))

(defn file-ns [k]
  (-> (namespace k)
      (str/replace #"-" "_")
      (str/replace #"\." "/")))

(defn source-link [k]
  [:div
   [:p "thanks for playing"]
   [:p "Source on "
    [:a {:href
         (str "https://github.com/escherize/escherize.github.io/blob/master/src/"
              (file-ns k)
              ".cljs")}
     "github"] "."]])
