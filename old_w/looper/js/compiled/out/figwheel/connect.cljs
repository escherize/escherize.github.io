(ns figwheel.connect (:require [looper.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:websocket-url "ws://localhost:3449/figwheel-ws", :on-jsload (fn [& x] (if js/looper.core.mount-root (apply js/looper.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'looper.core/mount-root' is missing"))), :nrepl-port 7002, :server-port 3449, :build-id "dev", :css-dirs ["resources/public/css"], :http-server-root "public"})

