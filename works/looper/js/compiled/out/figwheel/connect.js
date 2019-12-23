// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('figwheel.client');
goog.require('looper.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21303__delegate = function (x){
if(cljs.core.truth_(looper.core.mount_root)){
return cljs.core.apply.call(null,looper.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'looper.core/mount-root' is missing");
}
};
var G__21303 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21304__i = 0, G__21304__a = new Array(arguments.length -  0);
while (G__21304__i < G__21304__a.length) {G__21304__a[G__21304__i] = arguments[G__21304__i + 0]; ++G__21304__i;}
  x = new cljs.core.IndexedSeq(G__21304__a,0);
} 
return G__21303__delegate.call(this,x);};
G__21303.cljs$lang$maxFixedArity = 0;
G__21303.cljs$lang$applyTo = (function (arglist__21305){
var x = cljs.core.seq(arglist__21305);
return G__21303__delegate(x);
});
G__21303.cljs$core$IFn$_invoke$arity$variadic = G__21303__delegate;
return G__21303;
})()
,new cljs.core.Keyword(null,"nrepl-port","nrepl-port",672044751),(7002),new cljs.core.Keyword(null,"server-port","server-port",663745648),(3449),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"css-dirs","css-dirs",-60931525),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["resources/public/css"], null),new cljs.core.Keyword(null,"http-server-root","http-server-root",-1335567108),"public"], null));

//# sourceMappingURL=connect.js.map?rel=1467271885076