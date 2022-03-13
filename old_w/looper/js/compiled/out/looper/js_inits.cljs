(ns looper.js-inits)

(defn init-ace [handler]
  (let [editor (.edit js/ace "editor")]
    (.. editor
        (setTheme "ace/theme/monokai"))
    (.setMode (.getSession editor)
              "ace/mode/clojure")
    (.setOptions editor
                 #js {:enableBasicAutocompletion true
                      :enableSnippets true
                      :showGutter false
                      :highlightActiveLine false
                      :showPrintMargin false
                      :fontSize 18})
    (.. editor getSession (on "change" handler))
    (handler)))
