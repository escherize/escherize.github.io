(ns new_root.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [re-frame.core :as rf]
   [reitit.frontend :as rfe]
   [reitit.frontend.easy :as rfee]
   [new-root.paint-snake.core :as ps]))

(def post-2
  {:title "It's a project in a project!"
   :release :beta
   :preview (fn []
              [:div "This is a "
               [:a {:href (rfee/href ::post {:id 2})} "game"]
               " I'm working on"])
   :content ps/view})

(def post-1
  {:title "Hello Again"
   :content (fn []
              [:div
               [:h1 "I'm post 1."]
               [:p "Here's " [:a {:href (rfee/href ::post {:id 0})} "post 0"] "."]])})

(def post-0
  {:title "Hello World"
   :content (fn []
              [:div
               [:h1 "I'm here, and im post 0."]
               [:p "Here's " [:a {:href (rfee/href ::post {:id 1})} "post 1"] "."]])})

(def posts [post-0 post-1 post-2])

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {}))

#_[:button {:type "button" :on-click #(rfee/push-state ::post {:id 3})} "Item 3"]

(defn nav []
  [:div.nav
   [:span
    [:span [:a {:href (rfee/href ::home)} "Home"]]
    " | "
    [:span [:a {:href (rfee/href ::projects)} "Projects"]]
    " | "
    [:span [:a {:href (rfee/href ::post {:id (dec (count posts))})} "Last Post"]]]])

(defn red-box []
  [:div {:style {:background-color "#d24c53" :width "100px" :height "100px"}}])

(defn blog [page]
  [:div.container
   [:div.row [nav]]
   [:div.row page]])

(defn teaser [{:as _ :keys [title preview content]}]
  [:div.card
   [:h3.small {:style {:color "#d24c53"}} title]
   [:div.row (cond preview [preview]
                   content (content)
                   :else nil)]])

(defn home [_]
  [:div
   [:h1 "Bryan Zone"]
   [blog
    (into [:div]
          (for [p (reverse posts)] (teaser p)))]])

(defn projects []
  [:div
   "This is the projects component"])

(defn post [match]
  (if-let [id (-> match :parameters :path :id)]
    (let [post (get posts (js/parseInt id))]
      [:div
       [:div.row
        [:p [:span "[" [:a {:href (rfee/href ::home)} "Home"] "]"]]
        [:h1 (:title post)]]
       [:hr]
       ((:content (get posts (js/parseInt id))))])
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
  (ps/init)
  (start))

(defn stop []
  ;; stop is called before any code is reloaded
  ;; this is controlled by :before-load in the config
  (js/console.log "stop"))
