(ns cljslooper.js-inits)


(def width 960)
(def height 500)
(def color (.category10 (.-scale  js/d3)))
(def svg (.. js/d3 (select "#graph") (append "svg")))
(def node (.. svg (selectAll ".node")))
(def link (.. svg (selectAll ".link")))
(def force (.. js/cola
               d3adaptor
               (nodes #js [])
               (links #js [])
               (linkDistance 120)
               (size #js [width height])
               (on "tick" (fn []
                            (.log js/console "teek")
                            (let []
                              (.. node
                                  transition
                                  (attr "cx" #(.x %))
                                  (attr "cy" #(.y %)))
                              (.. link
                                  transition
                                  (attr "x1" #(.x (.-source %)))
                                  (attr "y1" #(.y (.-source %)))
                                  (attr "x2" #(.x (.-target %)))
                                  (attr "y2" #(.y (.-target %)))))))))
(def start (fn []
             (let [link (.. link
                            (data
                             (.. force links)
                             (fn [d] (str (.. d -source id)
                                          "-"
                                          (.. d -target id)))))]
               (.. link enter
                   (insert "line" ".node")
                   (attr "class" "link")
                   (attr "x1" #(.x (.-source %)))
                   (attr "y1" #(.y (.-source %)))
                   (attr "x2" #(.x (.-target %)))
                   (attr "y2" #(.y (.-target %))))
               (.. link exit remove))
             (let [node (.. node
                            (data
                             (.. force links)
                             #(.id %)))]
               (.. node
                   enter
                   (append "circle")
                   (attr "class" (fn [d]
                                   (str "node" (.id d))))
                   (attr "r" 8))
               (.. node exit remove))
             (.start force)))
