(ns blindfold.events
  (:require [re-frame.core :as re-frame]
            [blindfold.db :as db]))

(re-frame/reg-event-db
 :initialize-db
 (fn  [_ _]
   (js/console.log "??")
   db/default-db))

(re-frame/reg-event-db :assoc-in
 (fn  [db [_ ks v]] (assoc-in db ks v)))
