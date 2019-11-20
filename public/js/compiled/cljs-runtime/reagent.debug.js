goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__33490__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__33490 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33492__i = 0, G__33492__a = new Array(arguments.length -  0);
while (G__33492__i < G__33492__a.length) {G__33492__a[G__33492__i] = arguments[G__33492__i + 0]; ++G__33492__i;}
  args = new cljs.core.IndexedSeq(G__33492__a,0,null);
} 
return G__33490__delegate.call(this,args);};
G__33490.cljs$lang$maxFixedArity = 0;
G__33490.cljs$lang$applyTo = (function (arglist__33493){
var args = cljs.core.seq(arglist__33493);
return G__33490__delegate(args);
});
G__33490.cljs$core$IFn$_invoke$arity$variadic = G__33490__delegate;
return G__33490;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__33494__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__33494 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33498__i = 0, G__33498__a = new Array(arguments.length -  0);
while (G__33498__i < G__33498__a.length) {G__33498__a[G__33498__i] = arguments[G__33498__i + 0]; ++G__33498__i;}
  args = new cljs.core.IndexedSeq(G__33498__a,0,null);
} 
return G__33494__delegate.call(this,args);};
G__33494.cljs$lang$maxFixedArity = 0;
G__33494.cljs$lang$applyTo = (function (arglist__33500){
var args = cljs.core.seq(arglist__33500);
return G__33494__delegate(args);
});
G__33494.cljs$core$IFn$_invoke$arity$variadic = G__33494__delegate;
return G__33494;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
