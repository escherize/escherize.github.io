// Compiled by ClojureScript 1.10.238 {}
goog.provide('squares_lgj.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
goog.require('squares_lgj.render');
goog.require('squares_lgj.engine');
goog.require('squares_lgj.io');
squares_lgj.core.setup = (function squares_lgj$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.no_cursor.call(null);

quil.core.no_stroke.call(null);

return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(100),new cljs.core.Keyword(null,"y","y",-1757859776),(100)], null)], null),new cljs.core.Keyword(null,"enemies","enemies",2114285722),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"candy","candy",-1977730302),squares_lgj.engine.spawn_candy.call(null),new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"max-score","max-score",-1665682712),(0),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"start","start",-355208981)], null);
});
squares_lgj.core.run_sketch = (function squares_lgj$core$run_sketch(){
squares_lgj.core.squares_lgj = (function squares_lgj$core$run_sketch_$_squares_lgj(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"squares-lgj",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,squares_lgj.engine.update_state))?(function() { 
var G__38337__delegate = function (args){
return cljs.core.apply.call(null,squares_lgj.engine.update_state,args);
};
var G__38337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38338__i = 0, G__38338__a = new Array(arguments.length -  0);
while (G__38338__i < G__38338__a.length) {G__38338__a[G__38338__i] = arguments[G__38338__i + 0]; ++G__38338__i;}
  args = new cljs.core.IndexedSeq(G__38338__a,0,null);
} 
return G__38337__delegate.call(this,args);};
G__38337.cljs$lang$maxFixedArity = 0;
G__38337.cljs$lang$applyTo = (function (arglist__38339){
var args = cljs.core.seq(arglist__38339);
return G__38337__delegate(args);
});
G__38337.cljs$core$IFn$_invoke$arity$variadic = G__38337__delegate;
return G__38337;
})()
:squares_lgj.engine.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [squares_lgj.render.max_width,squares_lgj.render.max_height], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,squares_lgj.core.setup))?(function() { 
var G__38340__delegate = function (args){
return cljs.core.apply.call(null,squares_lgj.core.setup,args);
};
var G__38340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38341__i = 0, G__38341__a = new Array(arguments.length -  0);
while (G__38341__i < G__38341__a.length) {G__38341__a[G__38341__i] = arguments[G__38341__i + 0]; ++G__38341__i;}
  args = new cljs.core.IndexedSeq(G__38341__a,0,null);
} 
return G__38340__delegate.call(this,args);};
G__38340.cljs$lang$maxFixedArity = 0;
G__38340.cljs$lang$applyTo = (function (arglist__38342){
var args = cljs.core.seq(arglist__38342);
return G__38340__delegate(args);
});
G__38340.cljs$core$IFn$_invoke$arity$variadic = G__38340__delegate;
return G__38340;
})()
:squares_lgj.core.setup),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),((cljs.core.fn_QMARK_.call(null,squares_lgj.io.handle_mouse))?(function() { 
var G__38343__delegate = function (args){
return cljs.core.apply.call(null,squares_lgj.io.handle_mouse,args);
};
var G__38343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38344__i = 0, G__38344__a = new Array(arguments.length -  0);
while (G__38344__i < G__38344__a.length) {G__38344__a[G__38344__i] = arguments[G__38344__i + 0]; ++G__38344__i;}
  args = new cljs.core.IndexedSeq(G__38344__a,0,null);
} 
return G__38343__delegate.call(this,args);};
G__38343.cljs$lang$maxFixedArity = 0;
G__38343.cljs$lang$applyTo = (function (arglist__38345){
var args = cljs.core.seq(arglist__38345);
return G__38343__delegate(args);
});
G__38343.cljs$core$IFn$_invoke$arity$variadic = G__38343__delegate;
return G__38343;
})()
:squares_lgj.io.handle_mouse),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,squares_lgj.render.state))?(function() { 
var G__38346__delegate = function (args){
return cljs.core.apply.call(null,squares_lgj.render.state,args);
};
var G__38346 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38347__i = 0, G__38347__a = new Array(arguments.length -  0);
while (G__38347__i < G__38347__a.length) {G__38347__a[G__38347__i] = arguments[G__38347__i + 0]; ++G__38347__i;}
  args = new cljs.core.IndexedSeq(G__38347__a,0,null);
} 
return G__38346__delegate.call(this,args);};
G__38346.cljs$lang$maxFixedArity = 0;
G__38346.cljs$lang$applyTo = (function (arglist__38348){
var args = cljs.core.seq(arglist__38348);
return G__38346__delegate(args);
});
G__38346.cljs$core$IFn$_invoke$arity$variadic = G__38346__delegate;
return G__38346;
})()
:squares_lgj.render.state));
});
goog.exportSymbol('squares_lgj.core.squares_lgj', squares_lgj.core.squares_lgj);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__21750__21751__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__21750__21751__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),squares_lgj.core.squares_lgj,new cljs.core.Keyword(null,"host-id","host-id",742376279),"squares-lgj"], null));
}
});
goog.exportSymbol('squares_lgj.core.run_sketch', squares_lgj.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1525373214576
