(ns new-root.fiddle2
  (:require [cljs.js :refer [eval-str empty-state js-eval]]
            [clojure.string :as str]))

(set! js/COMPILED true)

(def cljs-preamble
  "(ns cljs.user
     (:refer-clojure :exclude [atom])
     (:require reagent.core))
    (def atom reagent.core/atom)")


;; map of editor key -> editor state
(defonce state (atom {}))

(def empty-editor-state
  {:text ""             ;; text of the editor
   :mode :indent-mode   ;; editor mode (:indent-mode, :paren-mode)
   :cm nil              ;; the CodeMirror instance
   :watcher nil})       ;; the ScrollMonitor instance


(defn update-state-text [state new-text]
  (assoc-in state [:codemirror-box :text] new-text))

(defn update-text [new-text]
  (swap! state #(update-state-text % new-text)))

(defn read-state []
  (-> @state :codemirror-box :text))

(defn cm-instance []
  (-> @state :codemirror-box :cm))


(defn my-eval [cljs-string]
  (eval-str (empty-state)
            (str cljs-preamble
                 (if-not (str/blank? cljs-string)
                   cljs-string
                   "[:div]"))
            'dummy-symbol
            {:ns 'cljs.user
             :eval js-eval
             :static-fns true
             :def-emits-var false
             :load (fn [name cb] (cb {:lang :clj :source ""}))
             :context :statement}
            (fn [{:keys [error value] :as x}]
              (if error
                (do
                  (def *er x)
                  (js/console.error
                   "Error: " (str error)))
                value))))




(defn view [] [:h1 "hi"])
