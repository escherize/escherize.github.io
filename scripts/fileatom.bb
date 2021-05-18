(ns fileatom
  (:require [babashka.fs :as fs]))

(defn swap! [file-path f]
  (if (fs/exists? file-path)
    (let [in (read-string (slurp file-path))
          out (f in)]
      (spit file-path out)
      out)
    (let [new-out (spit file-path (f nil))]
      new-out)))
