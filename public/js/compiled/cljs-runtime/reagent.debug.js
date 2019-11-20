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
var G__40418__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40418 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40419__i = 0, G__40419__a = new Array(arguments.length -  0);
while (G__40419__i < G__40419__a.length) {G__40419__a[G__40419__i] = arguments[G__40419__i + 0]; ++G__40419__i;}
  args = new cljs.core.IndexedSeq(G__40419__a,0,null);
} 
return G__40418__delegate.call(this,args);};
G__40418.cljs$lang$maxFixedArity = 0;
G__40418.cljs$lang$applyTo = (function (arglist__40420){
var args = cljs.core.seq(arglist__40420);
return G__40418__delegate(args);
});
G__40418.cljs$core$IFn$_invoke$arity$variadic = G__40418__delegate;
return G__40418;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__40421__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__40421 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40423__i = 0, G__40423__a = new Array(arguments.length -  0);
while (G__40423__i < G__40423__a.length) {G__40423__a[G__40423__i] = arguments[G__40423__i + 0]; ++G__40423__i;}
  args = new cljs.core.IndexedSeq(G__40423__a,0,null);
} 
return G__40421__delegate.call(this,args);};
G__40421.cljs$lang$maxFixedArity = 0;
G__40421.cljs$lang$applyTo = (function (arglist__40424){
var args = cljs.core.seq(arglist__40424);
return G__40421__delegate(args);
});
G__40421.cljs$core$IFn$_invoke$arity$variadic = G__40421__delegate;
return G__40421;
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
