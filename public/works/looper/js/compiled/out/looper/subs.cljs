(ns looper.subs
  (:require-macros [reagent.ratom :refer [reaction]])
  (:require [re-frame.core :as re-frame]))

(re-frame/register-sub
 :content
 (fn [db]
   (reaction (:content @db))))

(re-frame/register-sub
 :parsed-data
 (fn [db]
   (reaction (:parsed-data @db))))

(re-frame/register-sub
 :graph-data
 (fn [db]
   (reaction {:nodes (:nodes @db)
              :edges (:edges @db)})))
