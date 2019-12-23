// Compiled by ClojureScript 1.10.238 {}
goog.provide('squares_lgj.engine');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('squares_lgj.io');
goog.require('squares_lgj.render');
squares_lgj.engine.min_vel = ((1) * squares_lgj.render.base_unit);
squares_lgj.engine.max_vel = ((2) * squares_lgj.render.base_unit);
squares_lgj.engine.max_x = (squares_lgj.render.max_width - squares_lgj.render.circle_radius);
squares_lgj.engine.max_y = (squares_lgj.render.max_height - squares_lgj.render.circle_radius);
squares_lgj.engine.gen_with_constraint = (function squares_lgj$engine$gen_with_constraint(generator,constraint){
return cljs.core.first.call(null,cljs.core.drop_while.call(null,(function (p1__38290_SHARP_){
return cljs.core.not.call(null,constraint.call(null,p1__38290_SHARP_));
}),cljs.core.repeatedly.call(null,generator)));
});
squares_lgj.engine.rand_pos = (function squares_lgj$engine$rand_pos(var_args){
var G__38292 = arguments.length;
switch (G__38292) {
case 0:
return squares_lgj.engine.rand_pos.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return squares_lgj.engine.rand_pos.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

squares_lgj.engine.rand_pos.cljs$core$IFn$_invoke$arity$0 = (function (){
return squares_lgj.engine.rand_pos.call(null,cljs.core.constantly.call(null,true),cljs.core.constantly.call(null,true));
});

squares_lgj.engine.rand_pos.cljs$core$IFn$_invoke$arity$2 = (function (x_pred,y_pred){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),squares_lgj.engine.gen_with_constraint.call(null,(function (){
return cljs.core.rand_int.call(null,squares_lgj.engine.max_x);
}),x_pred),new cljs.core.Keyword(null,"y","y",-1757859776),squares_lgj.engine.gen_with_constraint.call(null,(function (){
return cljs.core.rand_int.call(null,squares_lgj.engine.max_y);
}),y_pred)], null);
});

squares_lgj.engine.rand_pos.cljs$lang$maxFixedArity = 2;

squares_lgj.engine.buffer_zone = (50);
squares_lgj.engine.new_enemy = (function squares_lgj$engine$new_enemy(player){
var map__38296 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player);
var map__38296__$1 = ((((!((map__38296 == null)))?(((((map__38296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38296):map__38296);
var player_x = cljs.core.get.call(null,map__38296__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var player_y = cljs.core.get.call(null,map__38296__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var buffer_zone = (50);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),squares_lgj.engine.rand_pos.call(null,((function (map__38296,map__38296__$1,player_x,player_y,buffer_zone){
return (function (p1__38294_SHARP_){
return !(((((player_x - buffer_zone) < p1__38294_SHARP_)) && ((p1__38294_SHARP_ < (player_x + buffer_zone)))));
});})(map__38296,map__38296__$1,player_x,player_y,buffer_zone))
,((function (map__38296,map__38296__$1,player_x,player_y,buffer_zone){
return (function (p1__38295_SHARP_){
return !(((((player_y - buffer_zone) < p1__38295_SHARP_)) && ((p1__38295_SHARP_ < (player_y + buffer_zone)))));
});})(map__38296,map__38296__$1,player_x,player_y,buffer_zone))
),new cljs.core.Keyword(null,"vel","vel",-110770822),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null);
});
squares_lgj.engine.spawn_candy = (function squares_lgj$engine$spawn_candy(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pos","pos",-864607220),squares_lgj.engine.rand_pos.call(null)], null);
});
squares_lgj.engine.square = (function squares_lgj$engine$square(x){
return (x * x);
});
squares_lgj.engine.distance = (function squares_lgj$engine$distance(x_diff,y_diff){
return Math.sqrt((squares_lgj.engine.square.call(null,x_diff) + squares_lgj.engine.square.call(null,y_diff)));
});
squares_lgj.engine.collision_QMARK_ = (function squares_lgj$engine$collision_QMARK_(a,b){
var xa = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(a));
var ya = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(a));
var xb = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b));
var yb = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(b));
return ((squares_lgj.engine.square.call(null,(xa - xb)) + squares_lgj.engine.square.call(null,(ya - yb))) < squares_lgj.engine.square.call(null,squares_lgj.render.circle_radius));
});
squares_lgj.engine.mag_damper = ((1) / (4));
squares_lgj.engine.bounce_damper = ((1) / (3));
squares_lgj.engine.dist_buffer = 0.001;
squares_lgj.engine.gravity = (3);
/**
 * returns x and y components of a vector from enemy to player.
 */
squares_lgj.engine.unit_vector = (function squares_lgj$engine$unit_vector(player,enemy){
var map__38298 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(player);
var map__38298__$1 = ((((!((map__38298 == null)))?(((((map__38298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38298):map__38298);
var px = cljs.core.get.call(null,map__38298__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.call(null,map__38298__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__38299 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(enemy);
var map__38299__$1 = ((((!((map__38299 == null)))?(((((map__38299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38299):map__38299);
var ex = cljs.core.get.call(null,map__38299__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var ey = cljs.core.get.call(null,map__38299__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var vec__38300 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(px - ex),(py - ey)], null);
var x = cljs.core.nth.call(null,vec__38300,(0),null);
var y = cljs.core.nth.call(null,vec__38300,(1),null);
var mag_fn = ((function (map__38298,map__38298__$1,px,py,map__38299,map__38299__$1,ex,ey,vec__38300,x,y){
return (function (x__$1,y__$1){
return Math.sqrt((squares_lgj.engine.square.call(null,x__$1) + squares_lgj.engine.square.call(null,y__$1)));
});})(map__38298,map__38298__$1,px,py,map__38299,map__38299__$1,ex,ey,vec__38300,x,y))
;
var dist = squares_lgj.engine.distance.call(null,x,y);
var mag = mag_fn.call(null,x,y);
var vec__38303 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x / mag),(y / mag)], null);
var x__$1 = cljs.core.nth.call(null,vec__38303,(0),null);
var y__$1 = cljs.core.nth.call(null,vec__38303,(1),null);
var grav = (((1) / Math.sqrt(dist)) * squares_lgj.engine.gravity);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x-player-dir","x-player-dir",143304780),(x__$1 * grav),new cljs.core.Keyword(null,"y-player-dir","y-player-dir",76952257),(y__$1 * grav)], null);
});
squares_lgj.engine.clamp = (function squares_lgj$engine$clamp(lil,big,n){
var x__4006__auto__ = lil;
var y__4007__auto__ = (function (){var x__4009__auto__ = big;
var y__4010__auto__ = n;
return ((x__4009__auto__ < y__4010__auto__) ? x__4009__auto__ : y__4010__auto__);
})();
return ((x__4006__auto__ > y__4007__auto__) ? x__4006__auto__ : y__4007__auto__);
});
/**
 * Returns the new position of enemy.
 */
squares_lgj.engine.move_enemy = (function squares_lgj$engine$move_enemy(player,enemy){
var map__38308 = squares_lgj.engine.unit_vector.call(null,player,enemy);
var map__38308__$1 = ((((!((map__38308 == null)))?(((((map__38308.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38308.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38308):map__38308);
var x_player_dir = cljs.core.get.call(null,map__38308__$1,new cljs.core.Keyword(null,"x-player-dir","x-player-dir",143304780));
var y_player_dir = cljs.core.get.call(null,map__38308__$1,new cljs.core.Keyword(null,"y-player-dir","y-player-dir",76952257));
var vx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(enemy)) + x_player_dir);
var vy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(enemy)) + y_player_dir);
var new_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(enemy)) + vx);
var new_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(enemy)) + vy);
var new_vel = ((!(((((0) < new_x)) && ((new_x < squares_lgj.engine.max_x)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(squares_lgj.engine.bounce_damper * (- vx)),new cljs.core.Keyword(null,"y","y",-1757859776),vy], null):((!(((((0) < new_y)) && ((new_y < squares_lgj.engine.max_y)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),vx,new cljs.core.Keyword(null,"y","y",-1757859776),(squares_lgj.engine.bounce_damper * (- vy))], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),vx,new cljs.core.Keyword(null,"y","y",-1757859776),vy], null)
));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),squares_lgj.engine.clamp.call(null,(0),squares_lgj.engine.max_x,new_x),new cljs.core.Keyword(null,"y","y",-1757859776),squares_lgj.engine.clamp.call(null,(0),squares_lgj.engine.max_y,new_y)], null),new cljs.core.Keyword(null,"vel","vel",-110770822),new_vel], null);
});
/**
 * Returns the new position of candy.
 */
squares_lgj.engine.move_candy = (function squares_lgj$engine$move_candy(player,candy){
var map__38310 = squares_lgj.engine.unit_vector.call(null,player,candy);
var map__38310__$1 = ((((!((map__38310 == null)))?(((((map__38310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38310):map__38310);
var x_player_dir = cljs.core.get.call(null,map__38310__$1,new cljs.core.Keyword(null,"x-player-dir","x-player-dir",143304780));
var y_player_dir = cljs.core.get.call(null,map__38310__$1,new cljs.core.Keyword(null,"y-player-dir","y-player-dir",76952257));
var vx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(candy)) + x_player_dir);
var vy = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"vel","vel",-110770822).cljs$core$IFn$_invoke$arity$1(candy)) + y_player_dir);
var new_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(candy)) - vx);
var new_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(candy)) - vy);
var left_side = (squares_lgj.render.circle_radius / (2));
var bounce_damper = (1);
var new_vel = ((!((((left_side < new_x)) && ((new_x < squares_lgj.engine.max_x)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(bounce_damper * (- vx)),new cljs.core.Keyword(null,"y","y",-1757859776),vy], null):((!((((left_side < new_y)) && ((new_y < squares_lgj.engine.max_y)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),vx,new cljs.core.Keyword(null,"y","y",-1757859776),(bounce_damper * (- vy))], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),vx,new cljs.core.Keyword(null,"y","y",-1757859776),vy], null)
));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),squares_lgj.engine.clamp.call(null,(0),squares_lgj.engine.max_x,new_x),new cljs.core.Keyword(null,"y","y",-1757859776),squares_lgj.engine.clamp.call(null,(0),squares_lgj.engine.max_y,new_y)], null),new cljs.core.Keyword(null,"vel","vel",-110770822),new_vel], null);
});
squares_lgj.engine.spawn_enemy = (function squares_lgj$engine$spawn_enemy(var_args){
var G__38313 = arguments.length;
switch (G__38313) {
case 1:
return squares_lgj.engine.spawn_enemy.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return squares_lgj.engine.spawn_enemy.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

squares_lgj.engine.spawn_enemy.cljs$core$IFn$_invoke$arity$1 = (function (player){
return squares_lgj.engine.spawn_enemy.call(null,player,new cljs.core.Keyword(null,"candy","candy",-1977730302),(1),cljs.core.PersistentVector.EMPTY);
});

squares_lgj.engine.spawn_enemy.cljs$core$IFn$_invoke$arity$4 = (function (player,event,score,enemies){
var pred__38314 = cljs.core._EQ_;
var expr__38315 = event;
if(cljs.core.truth_(pred__38314.call(null,new cljs.core.Keyword(null,"candy","candy",-1977730302),expr__38315))){
return cljs.core.concat.call(null,enemies,cljs.core.repeatedly.call(null,score,((function (pred__38314,expr__38315){
return (function (){
return squares_lgj.engine.new_enemy.call(null,player);
});})(pred__38314,expr__38315))
));
} else {
return enemies;
}
});

squares_lgj.engine.spawn_enemy.cljs$lang$maxFixedArity = 4;

squares_lgj.engine.check_collisions = (function squares_lgj$engine$check_collisions(state){
if(cljs.core.truth_(squares_lgj.engine.collision_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"candy","candy",-1977730302).cljs$core$IFn$_invoke$arity$1(state)))){
return new cljs.core.Keyword(null,"candy","candy",-1977730302);
} else {
if(cljs.core.truth_(cljs.core.reduce.call(null,(function (p1__38319_SHARP_,p2__38318_SHARP_){
var or__3922__auto__ = squares_lgj.engine.collision_QMARK_.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state),p2__38318_SHARP_);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return p1__38319_SHARP_;
}
}),false,new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(state)))){
return new cljs.core.Keyword(null,"enemy","enemy",-956472047);
} else {
return new cljs.core.Keyword(null,"nothing","nothing",-1022703296);

}
}
});
squares_lgj.engine.play = (function squares_lgj$engine$play(state){
var event = squares_lgj.engine.check_collisions.call(null,state);
var player = squares_lgj.io.get_player.call(null);
var score = new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"candy","candy",-1977730302)], null),(function (){var pred__38323 = cljs.core._EQ_;
var expr__38324 = event;
if(cljs.core.truth_(pred__38323.call(null,new cljs.core.Keyword(null,"candy","candy",-1977730302),expr__38324))){
return squares_lgj.engine.spawn_candy.call(null);
} else {
return new cljs.core.Keyword(null,"candy","candy",-1977730302).cljs$core$IFn$_invoke$arity$1(state);
}
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mode","mode",654403691)], null),(function (){var pred__38326 = cljs.core._EQ_;
var expr__38327 = event;
if(cljs.core.truth_(pred__38326.call(null,new cljs.core.Keyword(null,"enemy","enemy",-956472047),expr__38327))){
return ((function (pred__38326,expr__38327,event,player,score){
return (function (a){
return new cljs.core.Keyword(null,"game-over","game-over",-607322695);
});
;})(pred__38326,expr__38327,event,player,score))
} else {
return cljs.core.identity;
}
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"score","score",-1963588780)], null),(function (){var pred__38329 = cljs.core._EQ_;
var expr__38330 = event;
if(cljs.core.truth_(pred__38329.call(null,new cljs.core.Keyword(null,"candy","candy",-1977730302),expr__38330))){
return cljs.core.inc;
} else {
return cljs.core.identity;
}
})()),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"candy","candy",-1977730302)], null),((function (event,player,score){
return (function (p1__38320_SHARP_){
return squares_lgj.engine.move_candy.call(null,player,p1__38320_SHARP_);
});})(event,player,score))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"player","player",-97687400)], null),player),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemies","enemies",2114285722)], null),((function (event,player,score){
return (function (p1__38321_SHARP_){
return cljs.core.map.call(null,cljs.core.partial.call(null,squares_lgj.engine.move_enemy,player),p1__38321_SHARP_);
});})(event,player,score))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enemies","enemies",2114285722)], null),((function (event,player,score){
return (function (p1__38322_SHARP_){
return squares_lgj.engine.spawn_enemy.call(null,player,event,score,p1__38322_SHARP_);
});})(event,player,score))
);
});
squares_lgj.engine.update_state = (function squares_lgj$engine$update_state(state){
var pred__38332 = cljs.core._EQ_;
var expr__38333 = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__38332.call(null,new cljs.core.Keyword(null,"playing","playing",70013335),expr__38333))){
return squares_lgj.engine.play.call(null,state);
} else {
return state;
}
});

//# sourceMappingURL=engine.js.map?rel=1525373214532
