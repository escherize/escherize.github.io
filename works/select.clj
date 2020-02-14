(ns scratch.select
  (:require [tracks.core :as t]
            [clojure.spec.alpha :as s]))

(s/def ::street string?)
(s/def ::city string?)
(s/def ::state string?)
(s/def ::zip int?)
(s/def ::addr (s/keys :req-un [::street ::city ::state ::zip]))

(s/def ::id int?)
(s/def ::first string?)
(s/def ::last string?)
(s/def ::user (s/keys :req-un [::id ::first ::last ::addr]))

(def example-user
  {:id 1,
   :first "George",
   :last "O' Jungle",
   :addr
     {:street "123 Lemon Ln.", :city "Chapel Hill", :state "NC", :zip 12345}})


;; as it is now:
(defn get-movie-times
  [user]
  (str "to get movie times we need: " (:id user)
       " and " (-> user
                   :addr
                   :zip)))

(get-movie-times example-user)
;; => "to get movie times we need: 1 and 12345"

(defn get-movie-times-destructuring
  [{{zipcode :zip} :addr, user-id :id}]
  (str "to get movie times we need: " user-id " and " zipcode))
(get-movie-times-destructuring example-user)
;; => "to get movie times we need: 1 and 12345"


;;## now, with tracks:
(t/deftrack get-movie-times-tracks
            {:id user-id, ;; <--- the shape we need
             :addr {:zip zipcode}}
            (str "to get movie times we need: " user-id " and " zipcode))

(get-movie-times-tracks example-user)
;; => "to get movie times we need: 1 and 12345"

(t/deftrack place-order
            {:first fname,  ;; <-- the shape we need
             :last lname,
             :addr addr}     ;; <-- can (optionally) require all parts of
            ;; address
            (str "order placed for: " fname " " lname " to: " (pr-str addr)))

(place-order example-user)
;; => "order placed for: George O' Jungle to: {:street \"123 Lemon Ln.\", :city
;; \"Chapel Hill\", :state \"NC\", :zip 12345}"
