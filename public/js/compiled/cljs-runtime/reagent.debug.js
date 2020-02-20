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
(o.warn = (function() { 
var G__49302__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__49302 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49303__i = 0, G__49303__a = new Array(arguments.length -  0);
while (G__49303__i < G__49303__a.length) {G__49303__a[G__49303__i] = arguments[G__49303__i + 0]; ++G__49303__i;}
  args = new cljs.core.IndexedSeq(G__49303__a,0,null);
} 
return G__49302__delegate.call(this,args);};
G__49302.cljs$lang$maxFixedArity = 0;
G__49302.cljs$lang$applyTo = (function (arglist__49305){
var args = cljs.core.seq(arglist__49305);
return G__49302__delegate(args);
});
G__49302.cljs$core$IFn$_invoke$arity$variadic = G__49302__delegate;
return G__49302;
})()
);

(o.error = (function() { 
var G__49306__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__49306 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__49307__i = 0, G__49307__a = new Array(arguments.length -  0);
while (G__49307__i < G__49307__a.length) {G__49307__a[G__49307__i] = arguments[G__49307__i + 0]; ++G__49307__i;}
  args = new cljs.core.IndexedSeq(G__49307__a,0,null);
} 
return G__49306__delegate.call(this,args);};
G__49306.cljs$lang$maxFixedArity = 0;
G__49306.cljs$lang$applyTo = (function (arglist__49308){
var args = cljs.core.seq(arglist__49308);
return G__49306__delegate(args);
});
G__49306.cljs$core$IFn$_invoke$arity$variadic = G__49306__delegate;
return G__49306;
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
