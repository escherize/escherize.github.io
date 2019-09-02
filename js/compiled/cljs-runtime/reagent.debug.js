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
var G__35457__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35457 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35460__i = 0, G__35460__a = new Array(arguments.length -  0);
while (G__35460__i < G__35460__a.length) {G__35460__a[G__35460__i] = arguments[G__35460__i + 0]; ++G__35460__i;}
  args = new cljs.core.IndexedSeq(G__35460__a,0,null);
} 
return G__35457__delegate.call(this,args);};
G__35457.cljs$lang$maxFixedArity = 0;
G__35457.cljs$lang$applyTo = (function (arglist__35461){
var args = cljs.core.seq(arglist__35461);
return G__35457__delegate(args);
});
G__35457.cljs$core$IFn$_invoke$arity$variadic = G__35457__delegate;
return G__35457;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35462__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35463__i = 0, G__35463__a = new Array(arguments.length -  0);
while (G__35463__i < G__35463__a.length) {G__35463__a[G__35463__i] = arguments[G__35463__i + 0]; ++G__35463__i;}
  args = new cljs.core.IndexedSeq(G__35463__a,0,null);
} 
return G__35462__delegate.call(this,args);};
G__35462.cljs$lang$maxFixedArity = 0;
G__35462.cljs$lang$applyTo = (function (arglist__35465){
var args = cljs.core.seq(arglist__35465);
return G__35462__delegate(args);
});
G__35462.cljs$core$IFn$_invoke$arity$variadic = G__35462__delegate;
return G__35462;
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
