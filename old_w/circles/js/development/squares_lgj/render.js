// Compiled by ClojureScript 1.10.238 {}
goog.provide('squares_lgj.render');
goog.require('cljs.core');
goog.require('quil.core');
squares_lgj.render.max_width = (function (){var x__4006__auto__ = (600);
var y__4007__auto__ = window.innerWidth;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
squares_lgj.render.max_height = (function (){var x__4006__auto__ = (600);
var y__4007__auto__ = window.innerHeight;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
squares_lgj.render.base_unit = ((function (){var x__4009__auto__ = squares_lgj.render.max_height;
var y__4010__auto__ = squares_lgj.render.max_width;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})() / (100));
squares_lgj.render.circle_radius = ((5) * squares_lgj.render.base_unit);
squares_lgj.render.background = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(247),(255),(247)], null);
squares_lgj.render.player_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(41),(47),(54)], null);
squares_lgj.render.candy_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(78),(205),(196)], null);
squares_lgj.render.enemy_color = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(152),(12),(232)], null);
squares_lgj.render.circle = (function squares_lgj$render$circle(circle){
return quil.core.ellipse.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(circle)),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(circle)),squares_lgj.render.circle_radius,squares_lgj.render.circle_radius);
});
squares_lgj.render.player = (function squares_lgj$render$player(player){
cljs.core.apply.call(null,quil.core.fill,squares_lgj.render.player_color);

return squares_lgj.render.circle.call(null,player);
});
squares_lgj.render.candy = (function squares_lgj$render$candy(candy){
cljs.core.apply.call(null,quil.core.fill,squares_lgj.render.candy_color);

return squares_lgj.render.circle.call(null,candy);
});
squares_lgj.render.enemy = (function squares_lgj$render$enemy(enemy){
cljs.core.apply.call(null,quil.core.fill,squares_lgj.render.enemy_color);

return squares_lgj.render.circle.call(null,enemy);
});
squares_lgj.render.score = (function squares_lgj$render$score(score){
cljs.core.apply.call(null,quil.core.fill,squares_lgj.render.candy_color);

quil.core.text_size.call(null,(20));

return quil.core.text_num.call(null,score,((squares_lgj.render.max_width / (2)) - (25)),(25));
});
squares_lgj.render.start = (function squares_lgj$render$start(state){
cljs.core.apply.call(null,quil.core.fill,squares_lgj.render.enemy_color);

quil.core.text_size.call(null,(45));

quil.core.text.call(null,"Circles",(140),(200));

cljs.core.apply.call(null,quil.core.fill,squares_lgj.render.candy_color);

quil.core.text_size.call(null,(25));

quil.core.text.call(null,"Click to start",(255),(355));

squares_lgj.render.player.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(215),new cljs.core.Keyword(null,"y","y",-1757859776),(330)], null)], null));

squares_lgj.render.enemy.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(320),new cljs.core.Keyword(null,"y","y",-1757859776),(170)], null)], null));

return squares_lgj.render.candy.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(25),new cljs.core.Keyword(null,"y","y",-1757859776),(25)], null)], null));
});
squares_lgj.render.playing = (function squares_lgj$render$playing(state){
squares_lgj.render.player.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state));

squares_lgj.render.candy.call(null,new cljs.core.Keyword(null,"candy","candy",-1977730302).cljs$core$IFn$_invoke$arity$1(state));

squares_lgj.render.score.call(null,(new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(state) + cljs.core.count.call(null,new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(state))));

var seq__38238 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(state));
var chunk__38239 = null;
var count__38240 = (0);
var i__38241 = (0);
while(true){
if((i__38241 < count__38240)){
var e = cljs.core._nth.call(null,chunk__38239,i__38241);
squares_lgj.render.enemy.call(null,e);


var G__38242 = seq__38238;
var G__38243 = chunk__38239;
var G__38244 = count__38240;
var G__38245 = (i__38241 + (1));
seq__38238 = G__38242;
chunk__38239 = G__38243;
count__38240 = G__38244;
i__38241 = G__38245;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__38238);
if(temp__5457__auto__){
var seq__38238__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38238__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__38238__$1);
var G__38246 = cljs.core.chunk_rest.call(null,seq__38238__$1);
var G__38247 = c__4319__auto__;
var G__38248 = cljs.core.count.call(null,c__4319__auto__);
var G__38249 = (0);
seq__38238 = G__38246;
chunk__38239 = G__38247;
count__38240 = G__38248;
i__38241 = G__38249;
continue;
} else {
var e = cljs.core.first.call(null,seq__38238__$1);
squares_lgj.render.enemy.call(null,e);


var G__38250 = cljs.core.next.call(null,seq__38238__$1);
var G__38251 = null;
var G__38252 = (0);
var G__38253 = (0);
seq__38238 = G__38250;
chunk__38239 = G__38251;
count__38240 = G__38252;
i__38241 = G__38253;
continue;
}
} else {
return null;
}
}
break;
}
});
squares_lgj.render.game_over = (function squares_lgj$render$game_over(state){
squares_lgj.render.player.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state));

squares_lgj.render.candy.call(null,new cljs.core.Keyword(null,"candy","candy",-1977730302).cljs$core$IFn$_invoke$arity$1(state));

var seq__38254_38258 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(state));
var chunk__38255_38259 = null;
var count__38256_38260 = (0);
var i__38257_38261 = (0);
while(true){
if((i__38257_38261 < count__38256_38260)){
var e_38262 = cljs.core._nth.call(null,chunk__38255_38259,i__38257_38261);
squares_lgj.render.enemy.call(null,e_38262);


var G__38263 = seq__38254_38258;
var G__38264 = chunk__38255_38259;
var G__38265 = count__38256_38260;
var G__38266 = (i__38257_38261 + (1));
seq__38254_38258 = G__38263;
chunk__38255_38259 = G__38264;
count__38256_38260 = G__38265;
i__38257_38261 = G__38266;
continue;
} else {
var temp__5457__auto___38267 = cljs.core.seq.call(null,seq__38254_38258);
if(temp__5457__auto___38267){
var seq__38254_38268__$1 = temp__5457__auto___38267;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38254_38268__$1)){
var c__4319__auto___38269 = cljs.core.chunk_first.call(null,seq__38254_38268__$1);
var G__38270 = cljs.core.chunk_rest.call(null,seq__38254_38268__$1);
var G__38271 = c__4319__auto___38269;
var G__38272 = cljs.core.count.call(null,c__4319__auto___38269);
var G__38273 = (0);
seq__38254_38258 = G__38270;
chunk__38255_38259 = G__38271;
count__38256_38260 = G__38272;
i__38257_38261 = G__38273;
continue;
} else {
var e_38274 = cljs.core.first.call(null,seq__38254_38268__$1);
squares_lgj.render.enemy.call(null,e_38274);


var G__38275 = cljs.core.next.call(null,seq__38254_38268__$1);
var G__38276 = null;
var G__38277 = (0);
var G__38278 = (0);
seq__38254_38258 = G__38275;
chunk__38255_38259 = G__38276;
count__38256_38260 = G__38277;
i__38257_38261 = G__38278;
continue;
}
} else {
}
}
break;
}

cljs.core.apply.call(null,quil.core.fill,squares_lgj.render.candy_color);

var score = new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(state);
var max_score = (function (){var x__4006__auto__ = new cljs.core.Keyword(null,"max-score","max-score",-1665682712).cljs$core$IFn$_invoke$arity$1(state);
var y__4007__auto__ = score;
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
})();
quil.core.text_size.call(null,(40));

quil.core.text.call(null,"Game over!",(155),(255));

quil.core.text_size.call(null,(20));

quil.core.text.call(null,"Score",(205),(295));

quil.core.text_num.call(null,new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(state),(285),(295));

quil.core.text.call(null,"Max",(205),(320));

quil.core.text_num.call(null,max_score,(285),(320));

return quil.core.text.call(null,"Click to restart",(205),(355));
});
squares_lgj.render.state = (function squares_lgj$render$state(state){
cljs.core.apply.call(null,quil.core.background,squares_lgj.render.background);

var pred__38279 = cljs.core._EQ_;
var expr__38280 = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__38279.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__38280))){
return squares_lgj.render.start.call(null,state);
} else {
if(cljs.core.truth_(pred__38279.call(null,new cljs.core.Keyword(null,"playing","playing",70013335),expr__38280))){
return squares_lgj.render.playing.call(null,state);
} else {
if(cljs.core.truth_(pred__38279.call(null,new cljs.core.Keyword(null,"game-over","game-over",-607322695),expr__38280))){
return squares_lgj.render.game_over.call(null,state);
} else {
if(cljs.core.truth_(pred__38279.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__38280))){
return state;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__38280)].join('')));
}
}
}
}
});

//# sourceMappingURL=render.js.map?rel=1525373214411
