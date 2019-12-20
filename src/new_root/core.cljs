(ns new_root.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reitit.frontend :as rfe]
   [reitit.frontend.easy :as rfee]
   [new-root.paint-snake-two.core :as ps-two]
   [new-root.paint :as paint]
   [new-root.mindustry :as mind]))

(defonce app-state (atom {:thingies 1}))

(defn link [text id]
  [:a {:href (rfee/href ::post {:id id})} text])

(def post-0
  {:id 0
   :title "Hello World"
   :preview (fn []
              [:div
               [:p "Welcome to my blog!"]
               [:p "It's built as a single page app using
               Clojurescript and reagent, which means the entire thing is
               completely programmable. Visit my contents " (link "here." 0)]
               [:button
                {:style {:cursor :pointer}
                 :on-click (fn [] (swap! app-state update :thingies #(int (inc (* 1.5 %)))))}
                "Click here to see stuff happen"]])
   :content (fn []
              [:div
               [:h1 "I'm here, and im post 0."]
               [:p "Here's " (link "Post 1" 1) "."]
               [:p "Its a game I'm working on!"]])})
(def post-1
  {:id 1
   :title "Adding goals and a way to die"
   :preview (fn []
              [:div
               [:div "This is some further work on the " (link "game" 1) " I'm working on"]
               [:div "It's possible to die, there are apples for the
                         player to eat, and you can see your
                         score."]])
   :content ps-two/view})

(def post-2
  {:id 2
   :title "Force Directed Graph"
   :preview (fn [] [:div
                    [:div "An updatable d3 Force Directed Graph built with cljs. "]
                    (link "see it" 2)])
   :content mind/view})

(def post-3
  {:id 3
   :title "Paint fill game"
   :preview (fn []
              [:div
               [:div "Inspired by a python game I found on my raspberry pi"]
               [:div (link "Check it out" 3)]])
   :content paint/view})

(def posts
  {0 post-0,
   1 post-1,
   2 post-2,
   3 post-3})

(defn nav []
  [:div.nav
   (into
    [:span
     [:span [:a {:href (rfee/href ::home)} "Home"]]
     " | "
     [:span [:a {:href (rfee/href ::projects)} "Projects"]]
     " | "
     [:span [:a {:href (rfee/href ::post {:id (dec (count posts))})} "Last Post"]]]
    (repeat (:thingies @app-state) "  |  "))])

(defn blog [page]
  (into
   [:div.container
    (into [:div] (repeat (:thingies @app-state) [:hr]))
    [:div.row [nav]]
    [:div.row page]]))

(defn teaser [{:as _ :keys [title preview content release]}]
  [:div.card {:style {:border "10px #89c solid"
                      :border-radius "20px"
                      :padding "20px"
                      :margin "20px 40px"}}
   [:h3 title]
   [:div.row (cond preview [preview]
                   content [content]
                   :else [:h2 title])]])

(defn footer []
  [:<>
   [:hr]
   [:p "Copyright Bryan Maass 2019"]])

(defn home [_]
  [:div
   [:h1 "Escherize Zone"]
   [blog
    (into [:div]
          (for [p (sort-by :id (vals posts))]
            (teaser p)))]
   [footer]])

(defn projects []
  [:div
   [:h3 "This is the projects component"]
   [:pre "todo: fill in my projects ha"]])

(defn post [match]
  (if-let [id (-> match :parameters :path :id)]
    (let [post (get posts (js/parseInt id))]
      [:div
       [:div.row
        [:div [:span "[" [:a {:href (rfee/href ::home)} "Home"] "]"]]
        [:div [:h1 (:title post)]]]
       [:hr]
       [(:content (get posts (js/parseInt id)))]])
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
       [view (:match @app-state)]))
   #_[:pre (pr-str (:match @app-state))]])

(defn start []
  (reagent/render-component
   [current-page]
   (. js/document (getElementById "app"))))

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
