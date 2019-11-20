(ns new_root.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reitit.frontend :as rfe]
   [reitit.frontend.easy :as rfee]
   [new-root.paint-snake.core :as ps]
   [new-root.paint-snake-two.core :as ps-two]))

(def posts (atom nil))

(def post-3
  {:title "Game 2. Adding some goals"
   :preview (fn []
              [:div
               [:div "This is a riff on the "
                [:a {:href (rfee/href ::post {:id 3})} "game"]
                " I'm working on"]
               [:div "While it's still impossible to die, there are green apples for the player to eat."]])
   :content ps-two/view})

(def post-2
  {:title "Game 1. Getting started"
   :preview (fn []
              [:div "This is a "
               [:a {:href (rfee/href ::post {:id 2})} "game"]
               " I'm getting started on."])
   :content ps/view})

(def post-0
  {:title "Hello World"
   :preview (fn []
              [:div
               [:p "Welcome to my blog!"]
               [:p "It's built as a single page app using
               clojurescript reagent, which means the entire thing is
               completely programmable."]
               [:p "so we can do all kinds of things."]
               [:hr]
               "Such as "
               [:button {:on-click #(swap! posts shuffle)} "shuffle"]
               "the order of the posts on this page!"])
   :content (fn []
              [:div
               [:h1 "I'm here, and im post 0."]
               [:p "Here's " [:a {:href (rfee/href ::post {:id 1})} "post 1"] "."]])})



;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {}))

(defn nav []
  [:div.nav
   [:span
    [:span [:a {:href (rfee/href ::home)} "Home"]]
    " | "
    [:span [:a {:href (rfee/href ::projects)} "Projects"]]
    " | "
    [:span [:a {:href (rfee/href ::post {:id (dec (count @posts))})} "Last Post"]]]])

(defn blog [page]
  [:div.container
   [:hr]
   [:div.row [nav]]
   [:hr]
   [:div.row page]])

(defn teaser [{:as _ :keys [title preview content release]}]
  (when (not= :beta release)
    [:div.card {:style {:border-radius "10px"
                        :padding "10px"
                        :margin "20px"}}
     [:h3.small {:style {:color "#d24c53"}} title]
     [:div.row (cond preview [preview]
                     content (content)
                     :else nil)]]))

(defn home [_]
  [:div
   [:h1 "Escherize Zone"]
   [blog
    (into [:div]
          (for [p (reverse @posts)] (teaser p)))]])

(defn projects []
  [:div
   "This is the projects component"])

(defn post [match]
  (if-let [id (-> match :parameters :path :id)]
    (let [post (get @posts (js/parseInt id))]
      [:div
       [:div.row
        [:p [:span "[" [:a {:href (rfee/href ::home)} "Home"] "]"]]
        [:h1 (:title post)]]
       [:hr]
       ((:content (get @posts (js/parseInt id))))])
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
  (reset! posts [post-0 post-2 post-3])
  (rfee/start!
   (rfe/router routes)
   (fn [m] (swap! app-state assoc :match m))
   ;; set to false to enable HistoryAPI
   {:use-fragment true})
  (ps/init)
  (ps-two/init)
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
