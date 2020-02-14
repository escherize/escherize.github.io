// Compiled by ClojureScript 1.8.34 {:static-fns true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__15528__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15528 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15529__i = 0, G__15529__a = new Array(arguments.length -  0);
while (G__15529__i < G__15529__a.length) {G__15529__a[G__15529__i] = arguments[G__15529__i + 0]; ++G__15529__i;}
  args = new cljs.core.IndexedSeq(G__15529__a,0);
} 
return G__15528__delegate.call(this,args);};
G__15528.cljs$lang$maxFixedArity = 0;
G__15528.cljs$lang$applyTo = (function (arglist__15530){
var args = cljs.core.seq(arglist__15530);
return G__15528__delegate(args);
});
G__15528.cljs$core$IFn$_invoke$arity$variadic = G__15528__delegate;
return G__15528;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__15531__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__15531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15532__i = 0, G__15532__a = new Array(arguments.length -  0);
while (G__15532__i < G__15532__a.length) {G__15532__a[G__15532__i] = arguments[G__15532__i + 0]; ++G__15532__i;}
  args = new cljs.core.IndexedSeq(G__15532__a,0);
} 
return G__15531__delegate.call(this,args);};
G__15531.cljs$lang$maxFixedArity = 0;
G__15531.cljs$lang$applyTo = (function (arglist__15533){
var args = cljs.core.seq(arglist__15533);
return G__15531__delegate(args);
});
G__15531.cljs$core$IFn$_invoke$arity$variadic = G__15531__delegate;
return G__15531;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});
