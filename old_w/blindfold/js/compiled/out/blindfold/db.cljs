(ns blindfold.db)

(def default-db
  {:name "re-frame"
   :items {:dog   {:loyalty 10
                   :cleanliness 5
                   :independence 4
                   :cuteness 5}
           :cat   {:loyalty 2
                   :cleanliness 8
                   :independence 9
                   :cuteness 10}
           :human {:loyalty 8
                   :cleanliness 7
                   :independence 6
                   :cuteness 2}}
   :weights {:loyalty 1
             :cleanliness 1
             :independence 1
             :cuteness 1}})
