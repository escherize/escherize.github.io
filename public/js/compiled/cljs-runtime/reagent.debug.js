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
var G__41658__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__41658 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41660__i = 0, G__41660__a = new Array(arguments.length -  0);
while (G__41660__i < G__41660__a.length) {G__41660__a[G__41660__i] = arguments[G__41660__i + 0]; ++G__41660__i;}
  args = new cljs.core.IndexedSeq(G__41660__a,0,null);
} 
return G__41658__delegate.call(this,args);};
G__41658.cljs$lang$maxFixedArity = 0;
G__41658.cljs$lang$applyTo = (function (arglist__41661){
var args = cljs.core.seq(arglist__41661);
return G__41658__delegate(args);
});
G__41658.cljs$core$IFn$_invoke$arity$variadic = G__41658__delegate;
return G__41658;
})()
);

(o.error = (function() { 
var G__41662__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__41662 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41664__i = 0, G__41664__a = new Array(arguments.length -  0);
while (G__41664__i < G__41664__a.length) {G__41664__a[G__41664__i] = arguments[G__41664__i + 0]; ++G__41664__i;}
  args = new cljs.core.IndexedSeq(G__41664__a,0,null);
} 
return G__41662__delegate.call(this,args);};
G__41662.cljs$lang$maxFixedArity = 0;
G__41662.cljs$lang$applyTo = (function (arglist__41666){
var args = cljs.core.seq(arglist__41666);
return G__41662__delegate(args);
});
G__41662.cljs$core$IFn$_invoke$arity$variadic = G__41662__delegate;
return G__41662;
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
