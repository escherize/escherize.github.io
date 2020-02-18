(ns new_root.core
  (:require
   [reagent.core :as r]
   [reitit.frontend :as rfe]
   [reitit.frontend.easy :as rfee]
   [new-root.paint-snake-two.core :as ps-two]
   [new-root.paint :as paint]
   [new-root.mindustry :as mind]
   [clojure.string :as str]
   [new-root.gen-art :as gen-art]
   [new-root.scratch :as scratch]
   [new-root.neumorph :as neumorph]))

(defonce *pointer (r/atom [301 301]))
(defonce app-state (r/atom {:thingies 1}))

(defn link [text id]
  [:a {:href (rfee/href ::post {:id id})} text])

(def post-0
  {:id "hello-world"
   :sorder 0
   :title "Hello World"
   :preview (fn []
              [:div
               [:p "Welcome to my blog!"]
               [:p "It's built as a single page app using
               Clojurescript and reagent, which means the entire thing is
               completely programmable. Visit my contents " (link "here." "hello-world")]
               [:button
                {:style {:cursor :pointer}
                 :on-click (fn [] (swap! app-state update :thingies #(* 2 %)))}
                "Click here to see stuff happen"]])
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
   :content mind/view})

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

(def posts
  (->> [post-1 post-2 post-3 post-4 post-5]
       (map (juxt :id identity))
       (into {})))

(defn nav []
  [:div.nav
   (into
    [:span
     [:span [:a {:href (rfee/href ::home)} "Home"]]
     (repeat (:thingies @app-state) "  |  ")
     [:span [:a {:href (rfee/href ::projects)} "Projects"]]])])

(defn blog [page]
  (into
   [:div.container
    [:div.row [nav]]
    [:div.row page]]))

(defn teaser [{:as _ :keys [id title preview content release]}]
  [:div.teaser-card
   {:style {:border "none"
            :padding "10px 20px 20px 30px"
            :margin "60px"}}
   [:h3 (link title id)]
   [:div.row (cond preview [preview]
                   content [content]
                   :else [:h2 title])]])

(defn shadow-box [*pointer content]
  (let [*my-position (r/atom [])]
    (r/create-class
     {:component-did-mount
      (fn [this] (reset! *my-position (neumorph/find-location (r/dom-node this))))
      :reagent-render
      (fn [*pointer content]
        [:div
         {:style (merge
                  {:margin "20px 30px"
                   :text-align "center"
                   :border-radius "20px"
                   :padding "20px 100px"}
                  (when @*my-position
                    {:box-shadow
                     (neumorph/p1+p2->box-shadow @*pointer @*my-position)}))}
         content
         (when false
           [:<>
            [:p "origin: " (pr-str @*pointer)]
            [:p "my position: " (pr-str @*my-position)]])])})))

(defn shadow-teaser [*pointer {:as _ :keys [id title preview content release]}]
  (let [*my-position (r/atom [])]
    (r/create-class
     {:component-did-mount
      (fn [this] (reset! *my-position (neumorph/find-location (r/dom-node this))))
      :reagent-render
      (fn [*pointer content]
        [:div
         {:style (merge
                  {:margin "30px"
                   :text-align "center"
                   :border-radius "20px"
                   :padding "20px"}
                  (when @*my-position
                    {:box-shadow
                     (neumorph/p1+p2->box-shadow @*pointer @*my-position)}))}
         [:div
          [:h3 (link title id)]
          [:div.row (cond preview [preview]
                          content [content]
                          :else [:h2 title])]]
         (when false
           [:<>
            [:p "origin: " (pr-str @*pointer)]
            [:p "my position: " (pr-str @*my-position)]])])})))

(defn footer []
  [:div {:style {:float :right}}
   [:p "Copyright Bryan Maass 2019"]])

(defn sorter [id1 id2]
  (case [(string? id1) (string? id2)]
    [false true] id2
    [true false] id1
    [true true] (first (sort [id1 id2]))
    [false false] (first (sort [id1 id2]))))

(defn home [_]
  (r/with-let [handler #(reset! *pointer [(.-pageX %) (.-pageY %)])
               _ (.addEventListener js/document "mousemove" handler)
               touch-handler (fn [e] (let [last-idx (-> e .-touches .-length dec)
                                           last-item (-> e .-touches (aget last-idx))]
                                       (reset! *pointer [(.-clientX last-item) (.-clientY last-item)])))
               _ (.addEventListener js/document "touchmove" touch-handler)]
    [:div
     [:div {:style {:width "64%" :margin "auto"}}
      [shadow-box *pointer [:div
                            [:h1 "Escherize Zone"]
                            [nav]]]]
     (into [:div {:style {:display "flex" :flex-flow "wrap"}}]
           (for [p (reverse (sort-by sorter (distinct (vals posts))))]
             ;; (teaser p)
             [shadow-teaser *pointer p]))
     [footer]]
    (finally
      (.removeEventListener js/document "mousemove" handler)
      (.removeEventListener js/document "touchmove" touch-handler))))

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
    (let [{:keys [content title] :as post} (or (get posts id)
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

(def routes
  [["/" {:name ::home :view home}]
   ["/projects" {:name ::projects :view projects}]
   ["/post/:id" {:name ::post
                 :view post
                 :parameters {:path {:id int?}}}]])

(defn current-page []
  [:div
   (if (:match @app-state)
     (let [view (:view (:data (:match @app-state)))]
       [view (:match @app-state)]))])

(defn start []
  (r/render-component [current-page] (. js/document (getElementById "app"))))

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
