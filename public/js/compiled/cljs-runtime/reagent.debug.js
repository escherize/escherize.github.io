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
var G__38964__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38964 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38982__i = 0, G__38982__a = new Array(arguments.length -  0);
while (G__38982__i < G__38982__a.length) {G__38982__a[G__38982__i] = arguments[G__38982__i + 0]; ++G__38982__i;}
  args = new cljs.core.IndexedSeq(G__38982__a,0,null);
} 
return G__38964__delegate.call(this,args);};
G__38964.cljs$lang$maxFixedArity = 0;
G__38964.cljs$lang$applyTo = (function (arglist__38983){
var args = cljs.core.seq(arglist__38983);
return G__38964__delegate(args);
});
G__38964.cljs$core$IFn$_invoke$arity$variadic = G__38964__delegate;
return G__38964;
})()
);

(o.error = (function() { 
var G__38994__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__38994 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38996__i = 0, G__38996__a = new Array(arguments.length -  0);
while (G__38996__i < G__38996__a.length) {G__38996__a[G__38996__i] = arguments[G__38996__i + 0]; ++G__38996__i;}
  args = new cljs.core.IndexedSeq(G__38996__a,0,null);
} 
return G__38994__delegate.call(this,args);};
G__38994.cljs$lang$maxFixedArity = 0;
G__38994.cljs$lang$applyTo = (function (arglist__38997){
var args = cljs.core.seq(arglist__38997);
return G__38994__delegate(args);
});
G__38994.cljs$core$IFn$_invoke$arity$variadic = G__38994__delegate;
return G__38994;
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
