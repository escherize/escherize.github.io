goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('blindfold.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__39200__delegate = function (x){
if(cljs.core.truth_(blindfold.core.mount_root)){
return cljs.core.apply.call(null,blindfold.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'blindfold.core/mount-root' is missing");
}
};
var G__39200 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__39201__i = 0, G__39201__a = new Array(arguments.length -  0);
while (G__39201__i < G__39201__a.length) {G__39201__a[G__39201__i] = arguments[G__39201__i + 0]; ++G__39201__i;}
  x = new cljs.core.IndexedSeq(G__39201__a,0);
} 
return G__39200__delegate.call(this,x);};
G__39200.cljs$lang$maxFixedArity = 0;
G__39200.cljs$lang$applyTo = (function (arglist__39202){
var x = cljs.core.seq(arglist__39202);
return G__39200__delegate(x);
});
G__39200.cljs$core$IFn$_invoke$arity$variadic = G__39200__delegate;
return G__39200;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
