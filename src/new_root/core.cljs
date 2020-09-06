(ns new_root.core
  (:require [clojure.string :as str]
            [new-root.gen-art :as gen-art]
            [new-root.gen-art-2 :as gen-art2]
            [new-root.gen-art-3 :as gen-art3]
            [new-root.leds :as leds]
            [new-root.neumorph :as neumorph]
            [new-root.paint :as paint]
            [new-root.paint-snake-two.core :as ps-two]
            [new-root.scratch :as scratch]
            [new-root.simple-dag :as simple-dag]
            [new-root.relations-grouping :as grouping]
            [reagent.core :as r]
            [reagent.dom :as rd]
            [reitit.frontend :as rfe]
            [reitit.frontend.easy :as rfee]))

(defonce *pointer (r/atom [301 301]))
(defonce app-state (r/atom {:thingies 1}))

(defn link [text post-id]
  [:a {:href (rfee/href ::post {:id post-id})} text])

(def post-0
  {:id "hello-world"
   :sorder 0
   :title "Hello World"
   :preview (fn []
              [:div
               [:p "Welcome to my blog!"]
               [:p "It's built as a single page app using
               Clojurescript and reagent, which means the entire thing is
               completely programmable. Visit my contents " (link "here." "hello-world")]])
   :content (fn []
              [:div
               [:h1 "I'm here, and im post 0."]
               [:p "Here's " (link "Post 1" "snake-game") "."]
               [:p "Its a game I'm working on!"]])})
(def post-1
  {:id "snake-game"
   :sorder 1
   :title "Adding goals and a way to die"
   :preview (fn [] [:div "This is a riff on snake"])
   :content ps-two/view})

(def post-2
  {:id "force-graph"
   :sorder 2
   :title "Force Directed Graph"
   :preview (fn [] [:div "An updatable d3 Force Directed Graph."])
   :content simple-dag/view})

(def post-3
  {:id "paint"
   :sorder 3
   :title "Paint fill game"
   :pure true
   :preview (fn []
              [:div
               [:p "Inspired by a python game I found on my raspberry pi"]
               [:p "Flood the canvas from the top left"]])
   :content paint/view})

(def post-4
  {:id "gen-art"
   :sorder 4
   :title "Generative Art"
   :pure true
   :preview (fn [] [:div "Just getting warmed up"])
   :content gen-art/view})

(def scratch
  {:id "scratch"
   :title "scratch"
   :exclude-post? true
   :pure true
   :preview (fn [] [:div])
   :content scratch/view})

(def post-5
  {:id "neumorph"
   :sorder 5
   :title "Dynamic Neumorphism"
   :pure false
   :preview (fn [] [:div "Yeah.. it's "(link "trendy" "neumorph") "."])
   :content neumorph/view})

(def post-6
  {:id "gen-art-2"
   :sorder 6
   :title "More Art"
   :pure true
   :preview (fn [] [:div "Where circles don't overlap"])
   :content gen-art2/view})

(def post-7
  {:id "gen-art-3"
   :sorder 7
   :title "Even More Art"
   :pure true
   :preview (fn [] [:div "Vector Fields 101"])
   :content gen-art3/view})

(def post-8
  {:id "pico8"
   :sorder 8
   :title "Pico-8"
   :pure true
   :no-content true
   :preview (fn []
              [:div
               "To play, use the arrow keys and z, and x."
               "They also work on mobile."
               [:ul
                [:li>a {:style {:font-size 20}
                        :href "/works/pico8/tetris_attack"} "Tetris Attack v1.1"]
                [:li>a {:style {:font-size 20}
                        :href "/works/pico8/ammo_thruster"} "Ammo Thruster v0.9"]
                [:li>a {:style {:font-size 20}
                        :href "/works/pico8/sliding_tiles"} "Sliding Tiles v0.4"]
                [:li>a {:style {:font-size 20}
                        :href "/works/pico8/gunner_men"} "Gunner Men 0.1"]]])})

(def post-9
  {:id "light-strips"
   :sorder 9
   :title "Working with LED Strips"
   :pure true
   :preview (fn [] "Setting up a low-fi LED display, and accessing 2d arrays")
   :content leds/view})

(defn posts []
  (->> [post-0 post-1 post-2 post-3 post-4 post-5 post-6
        ;; fucked up idk why :D
        ;; post-7
        post-8
        post-9
        scratch]
       (map (juxt :id identity))
       (into {})))

(defn nav []
  [:div {:style {:width "200px" :margin "auto"}}
   [:span {:key "home"
           :style {:margin-right "20px"}} [:a {:href (rfee/href ::home)} "Home"]]
   [:span {:key "projects"}
    [:a {:href (rfee/href ::projects)} "Projects"]]
   #_(repeat (:thingies @app-state) "  |  ")
   #_[:span [:a {:href (rfee/href ::about)} "About"]]])




(defn blog [page]
  (into
   [:div.container
    [:div.row [nav]]
    [:div.row page]]))

(defn teaser [{:as _ :keys [id title preview content no-content release]}]
  [:div.teaser-card
   {:style {:margin "30px"
            :padding "10px 20px 20px 30px"}}
   [:h3 (if no-content
          title
          (link title id))]
   [:div.row (cond preview [preview]
                   content [content]
                   :else [:h2 title])]])

(def btn-style
  {:margin "25px"
   :background-color "#dde"
   :text-align "center"
   :border "5px rgb(12, 112, 160) solid"
   :border-radius 10
   :padding "30px"})

(defn squirt [x]
  (if (> x 0)
    (Math/sqrt (Math/abs x))
    (* -1 (Math/sqrt (Math/abs x)))))

(defn clamp [lo n hi]
  (min hi (max n lo)))

(defn style-fn [{:keys [x y h unit-x unit-y]}]
  (let [dist (Math/sqrt (+ (* x x) (* y y)))]
    (js/console.log h)
    {:box-shadow (str (* 0.8 (squirt x)) "px "
                      (* 0.8 (squirt y)) "px "
                      (/ h 100) "px " ;; blur
                      (/ h 80) "px " ;; spread
                      "#aab"
                      ;; changing colors like:
                      #_(str "hsl(" (/ h 5) ",50%,65%)"))
     ;; changing colors?
     ;; get brigher when mouse closer
     :background-color (str "hsl(-130,40%," (max (- 95 (/ h 100)) 85) "%)")}))

(defn shadow-box [*pointer content]
  (let [*my-position (r/atom [])]
    (r/create-class
     {:component-did-mount
      (fn [this] (reset! *my-position (neumorph/find-location (rd/dom-node this))))
      :reagent-render
      (fn [*pointer content]
        [:div
         {:style (merge
                  btn-style
                  (when @*my-position
                    (style-fn
                     (neumorph/p1+p2->box-shadow-main
                      @*pointer
                      @*my-position))))}
         content
         #_[:<>
            [:p "origin: " (pr-str @*pointer)]
            [:p "my position: " (pr-str @*my-position)]]])})))

(defn shadow-teaser
  [*pointer
   {:as _ :keys [id title preview no-content content release]}]
  (let [*my-position (r/atom [])]
    (r/create-class
     {:component-did-mount
      (fn [this] (reset! *my-position (neumorph/find-location (rd/dom-node this))))
      :reagent-render
      (fn [*pointer content]
        [:div.shadow-teaser
         {:style (merge
                  {:margin "30px 25px"
                   :background-color "#dde"
                   :text-align "center"
                   :border "8px rgb(21, 121, 169) solid"
                   :border-radius "20px"
                   :max-width "300px"
                   :padding "20px"}
                  (when @*my-position
                    (style-fn
                     (neumorph/p1+p2->box-shadow-main @*pointer @*my-position))))}
         [:div
          [:h3 (if no-content
                 title
                 (link title id))]
          [:div.row (cond preview [preview]
                          content [content]
                          :else [:h2 title])]]
         (when false
           [:<>
            [:p "origin: " (pr-str @*pointer)]
            [:p "my position: " (pr-str @*my-position)]])])})))

(defn footer []
  [:div {:style {:height 100}}])

(defn width [] js/window.innerWidth)
(defn height [] js/window.innerHeight)

(js/console.log "width:" (width))
(js/console.log "height:" (height))

(defn to-scale [range n]
  (+ (* range 0.45) (* range n 0.35)))

(defn home-posts []
  (->> (posts) vals distinct (sort-by :sorder) reverse))

(defn home [_]
  (r/with-let [handler #(reset! *pointer [(.-pageX %) (.-pageY %)])
               _ (.addEventListener js/document "mousemove" handler)]
    (fn []
      [:div
       [:div.top {:style {:margin-top "30px"
                          :margin-bottom "30px"}}
        [:div {:style {:width "300px"
                       :margin "auto"}}
         [:h1 "Escherize Zone"]]
        [nav]]
       (into [:div {:style {:display "flex"
                            :flex-flow "wrap"
                            :justify-content "space-evenly"}}]
             (for [{:keys [exclude-post?] :as p} (home-posts)]
               ;; (teaser p)
               (when-not exclude-post? [shadow-teaser *pointer p])))
       [footer]])
    (finally
      (.removeEventListener js/document "mousemove" handler))))

(defn projects []
  [:div
   [:h3 "Here are some projects and toys going back to 2012."]
   (into [:ul]
         (for [project ["blindfold" "catan" "circles" "cljsfiddle"
                        "colors" "dnd5" "hiccup.space" "looper"
                        "magic" "santorini" "transpose"]]
           [:li>a {:href (str "/works/" project)}
            (str/capitalize project)]))])

(defn post [match]
  (if-let [id (-> match :parameters :path :id)]
    (let [posts (posts)
          {:keys [content title] :as post} (or (get posts id)
                                               (get posts (js/parseInt id)))
          pure? (:pure post)]
      (if pure?
        [content]
        [:div
         [:div.row
          [:div [:span "[" [:a {:href (rfee/href ::home)} "Home"] "]"]]
          [:div [:h1 title]]]
         [:hr]
         [content]]))
    [:pre (pr-str match)]))

(defn about [_]
  [:h1 "under construction"])

(def routes
  [["/" {:name ::home :view (fn [] home)}]
   ["/projects" {:name ::projects :view (fn [] projects)}]
   ["/about" {:name ::about :view (fn [] about)}]
   ["/post/:id" {:name ::post
                 :view (fn [] post)
                 :parameters {:path {:id int?}}}]])

(defn current-page []
  [:div
   (if (:match @app-state)
     (let [view (:view (:data (:match @app-state)))]
       [view (:match @app-state)]))])

(defn ^:dev/after-load start []
  (js/console.log "starting..")
  ;;(.resize (js/$ js/window) (fn [] (js/console.log "changed")))
  (rd/render [current-page] (. js/document (getElementById "app"))))

(defn ^:export init []
  ;; init is called ONCE when the page loads
  ;; this is called in the index.html and must be exported
  ;; so it is available even in :advanced release builds
  (rfee/start!
   (rfe/router routes)
   (fn [m] (swap! app-state assoc :match m))
   ;; set to false to enable HistoryAPI
   {:use-fragment true})
  ;;(ps/init)
  (ps-two/init)
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
