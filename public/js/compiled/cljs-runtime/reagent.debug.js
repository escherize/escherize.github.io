goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__42603__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42603 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42606__i = 0, G__42606__a = new Array(arguments.length -  0);
while (G__42606__i < G__42606__a.length) {G__42606__a[G__42606__i] = arguments[G__42606__i + 0]; ++G__42606__i;}
  args = new cljs.core.IndexedSeq(G__42606__a,0,null);
} 
return G__42603__delegate.call(this,args);};
G__42603.cljs$lang$maxFixedArity = 0;
G__42603.cljs$lang$applyTo = (function (arglist__42607){
var args = cljs.core.seq(arglist__42607);
return G__42603__delegate(args);
});
G__42603.cljs$core$IFn$_invoke$arity$variadic = G__42603__delegate;
return G__42603;
})()
);

(o.error = (function() { 
var G__42608__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42608 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42609__i = 0, G__42609__a = new Array(arguments.length -  0);
while (G__42609__i < G__42609__a.length) {G__42609__a[G__42609__i] = arguments[G__42609__i + 0]; ++G__42609__i;}
  args = new cljs.core.IndexedSeq(G__42609__a,0,null);
} 
return G__42608__delegate.call(this,args);};
G__42608.cljs$lang$maxFixedArity = 0;
G__42608.cljs$lang$applyTo = (function (arglist__42610){
var args = cljs.core.seq(arglist__42610);
return G__42608__delegate(args);
});
G__42608.cljs$core$IFn$_invoke$arity$variadic = G__42608__delegate;
return G__42608;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
