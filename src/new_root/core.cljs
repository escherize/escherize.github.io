(ns new_root.core
  (:require
   [reagent.core :as reagent :refer [atom]]
   [reitit.frontend :as rfe]
   [reitit.frontend.easy :as rfee]
   [new-root.paint-snake-two.core :as ps-two]
   [new-root.mindustry :as mind]))

(def posts [{:title "Hello World"
             :preview (fn []
                        [:div
                         [:p "Welcome to my blog!"]
                         [:p "It's built as a single page app using
               Clojurescript and reagent, which means the entire thing is
               completely ~programmable~."]])
             :content (fn []
                        [:div
                         [:h1 "I'm here, and im post 0."]
                         [:p "Here's " [:a {:href (rfee/href ::post {:id 0})} "post 1"] "."]])}

            {:title "Adding goals and a way to die"
             :preview (fn []
                        [:div
                         [:div "This is some further work on the "
                          [:a {:href (rfee/href ::post {:id 2})} "game"]
                          " I'm working on"]
                         [:div "It's now still possible to die, there
                         are green apples for the player to eat, and
                         you can see your score."]])
             :content ps-two/view}

            {:title "Force Directed Graph"
             :preview (fn [] [:div
                              [:div "A slick updatable force directed graph"]
                              [:a {:href (rfee/href ::post {:id 2})} "see it"]])
             :content mind/view}])

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {}))

(defn nav []
  [:div.nav
   [:span
    [:span [:a {:href (rfee/href ::home)} "Home"]]
    " | "
    [:span [:a {:href (rfee/href ::projects)} "Projects"]]
    " | "
    [:span [:a {:href (rfee/href ::post {:id (dec (count posts))})} "Last Post"]]]])

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
                     content [content]
                     :else nil)]]))

(defn home [_]
  [:div
   [:h1 "Escherize Zone"]
   [blog
    (into [:div]
          (for [p (reverse posts)] (teaser p)))]])

(defn projects []
  [:div
   [:h3 "This is the projects component"]
   [:pre "todo: fill in my projects ha"]])

(defn post [match]
  (if-let [id (-> match :parameters :path :id)]
    (let [post (get posts (js/parseInt id))]
      [:div
       [:div.row
        [:p [:span "[" [:a {:href (rfee/href ::home)} "Home"] "]"]]
        [:h1 (:title post)]]
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
