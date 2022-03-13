// Compiled by ClojureScript 1.10.238 {}
goog.provide('squares_lgj.io');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('squares_lgj.render');
squares_lgj.io.get_player = (function squares_lgj$io$get_player(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(function (){var x__4009__auto__ = quil.core.mouse_x.call(null);
var y__4010__auto__ = (squares_lgj.render.max_width - squares_lgj.render.circle_radius);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})(),new cljs.core.Keyword(null,"y","y",-1757859776),(function (){var x__4009__auto__ = quil.core.mouse_y.call(null);
var y__4010__auto__ = (squares_lgj.render.max_height - squares_lgj.render.circle_radius);
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})()], null)], null);
});
squares_lgj.io.handle_mouse = (function squares_lgj$io$handle_mouse(state){
var pred__38285 = cljs.core._EQ_;
var expr__38286 = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__38285.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__38286))){
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691)], null),new cljs.core.Keyword(null,"playing","playing",70013335));
} else {
if(cljs.core.truth_(pred__38285.call(null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),expr__38286))){
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780)], null),(0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemies","enemies",2114285722)], null),cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-score","max-score",-1665682712)], null),((function (pred__38285,expr__38286){
return (function (p1__38284_SHARP_){
var x__4006__auto__ = new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(state);
var y__4007__auto__ = p1__38284_SHARP_;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
});})(pred__38285,expr__38286))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691)], null),new cljs.core.Keyword(null,"playing","playing",70013335));
} else {
return state;
}
}
});

//# sourceMappingURL=io.js.map?rel=1525373214436
