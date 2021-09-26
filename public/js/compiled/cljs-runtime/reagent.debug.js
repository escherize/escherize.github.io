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
var G__42191__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42191 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42194__i = 0, G__42194__a = new Array(arguments.length -  0);
while (G__42194__i < G__42194__a.length) {G__42194__a[G__42194__i] = arguments[G__42194__i + 0]; ++G__42194__i;}
  args = new cljs.core.IndexedSeq(G__42194__a,0,null);
} 
return G__42191__delegate.call(this,args);};
G__42191.cljs$lang$maxFixedArity = 0;
G__42191.cljs$lang$applyTo = (function (arglist__42195){
var args = cljs.core.seq(arglist__42195);
return G__42191__delegate(args);
});
G__42191.cljs$core$IFn$_invoke$arity$variadic = G__42191__delegate;
return G__42191;
})()
);

(o.error = (function() { 
var G__42196__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__42196 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42203__i = 0, G__42203__a = new Array(arguments.length -  0);
while (G__42203__i < G__42203__a.length) {G__42203__a[G__42203__i] = arguments[G__42203__i + 0]; ++G__42203__i;}
  args = new cljs.core.IndexedSeq(G__42203__a,0,null);
} 
return G__42196__delegate.call(this,args);};
G__42196.cljs$lang$maxFixedArity = 0;
G__42196.cljs$lang$applyTo = (function (arglist__42204){
var args = cljs.core.seq(arglist__42204);
return G__42196__delegate(args);
});
G__42196.cljs$core$IFn$_invoke$arity$variadic = G__42196__delegate;
return G__42196;
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
