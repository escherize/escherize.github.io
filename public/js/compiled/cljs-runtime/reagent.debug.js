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
var G__44114__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__44114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44117__i = 0, G__44117__a = new Array(arguments.length -  0);
while (G__44117__i < G__44117__a.length) {G__44117__a[G__44117__i] = arguments[G__44117__i + 0]; ++G__44117__i;}
  args = new cljs.core.IndexedSeq(G__44117__a,0,null);
} 
return G__44114__delegate.call(this,args);};
G__44114.cljs$lang$maxFixedArity = 0;
G__44114.cljs$lang$applyTo = (function (arglist__44118){
var args = cljs.core.seq(arglist__44118);
return G__44114__delegate(args);
});
G__44114.cljs$core$IFn$_invoke$arity$variadic = G__44114__delegate;
return G__44114;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__44119__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__44119 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44120__i = 0, G__44120__a = new Array(arguments.length -  0);
while (G__44120__i < G__44120__a.length) {G__44120__a[G__44120__i] = arguments[G__44120__i + 0]; ++G__44120__i;}
  args = new cljs.core.IndexedSeq(G__44120__a,0,null);
} 
return G__44119__delegate.call(this,args);};
G__44119.cljs$lang$maxFixedArity = 0;
G__44119.cljs$lang$applyTo = (function (arglist__44121){
var args = cljs.core.seq(arglist__44121);
return G__44119__delegate(args);
});
G__44119.cljs$core$IFn$_invoke$arity$variadic = G__44119__delegate;
return G__44119;
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
