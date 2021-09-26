goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__45237 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__45238 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__45238);

try{try{var seq__45242 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__45243 = null;
var count__45244 = (0);
var i__45245 = (0);
while(true){
if((i__45245 < count__45244)){
var vec__45258 = chunk__45243.cljs$core$IIndexed$_nth$arity$2(null,i__45245);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45258,(1),null);
var temp__5751__auto___45331 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___45331)){
var effect_fn_45332 = temp__5751__auto___45331;
(effect_fn_45332.cljs$core$IFn$_invoke$arity$1 ? effect_fn_45332.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_45332.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__45333 = seq__45242;
var G__45334 = chunk__45243;
var G__45335 = count__45244;
var G__45336 = (i__45245 + (1));
seq__45242 = G__45333;
chunk__45243 = G__45334;
count__45244 = G__45335;
i__45245 = G__45336;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45242);
if(temp__5753__auto__){
var seq__45242__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45242__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45242__$1);
var G__45337 = cljs.core.chunk_rest(seq__45242__$1);
var G__45338 = c__4638__auto__;
var G__45339 = cljs.core.count(c__4638__auto__);
var G__45340 = (0);
seq__45242 = G__45337;
chunk__45243 = G__45338;
count__45244 = G__45339;
i__45245 = G__45340;
continue;
} else {
var vec__45262 = cljs.core.first(seq__45242__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45262,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45262,(1),null);
var temp__5751__auto___45348 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___45348)){
var effect_fn_45349 = temp__5751__auto___45348;
(effect_fn_45349.cljs$core$IFn$_invoke$arity$1 ? effect_fn_45349.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_45349.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__45350 = cljs.core.next(seq__45242__$1);
var G__45351 = null;
var G__45352 = (0);
var G__45353 = (0);
seq__45242 = G__45350;
chunk__45243 = G__45351;
count__45244 = G__45352;
i__45245 = G__45353;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__44815__auto___45354 = re_frame.interop.now();
var duration__44816__auto___45355 = (end__44815__auto___45354 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__44816__auto___45355,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__44815__auto___45354);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__45237);
}} else {
var seq__45270 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__45271 = null;
var count__45272 = (0);
var i__45273 = (0);
while(true){
if((i__45273 < count__45272)){
var vec__45290 = chunk__45271.cljs$core$IIndexed$_nth$arity$2(null,i__45273);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45290,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45290,(1),null);
var temp__5751__auto___45356 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___45356)){
var effect_fn_45357 = temp__5751__auto___45356;
(effect_fn_45357.cljs$core$IFn$_invoke$arity$1 ? effect_fn_45357.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_45357.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__45358 = seq__45270;
var G__45359 = chunk__45271;
var G__45360 = count__45272;
var G__45361 = (i__45273 + (1));
seq__45270 = G__45358;
chunk__45271 = G__45359;
count__45272 = G__45360;
i__45273 = G__45361;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45270);
if(temp__5753__auto__){
var seq__45270__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45270__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45270__$1);
var G__45362 = cljs.core.chunk_rest(seq__45270__$1);
var G__45363 = c__4638__auto__;
var G__45364 = cljs.core.count(c__4638__auto__);
var G__45365 = (0);
seq__45270 = G__45362;
chunk__45271 = G__45363;
count__45272 = G__45364;
i__45273 = G__45365;
continue;
} else {
var vec__45298 = cljs.core.first(seq__45270__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45298,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45298,(1),null);
var temp__5751__auto___45366 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___45366)){
var effect_fn_45367 = temp__5751__auto___45366;
(effect_fn_45367.cljs$core$IFn$_invoke$arity$1 ? effect_fn_45367.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_45367.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__45368 = cljs.core.next(seq__45270__$1);
var G__45369 = null;
var G__45370 = (0);
var G__45371 = (0);
seq__45270 = G__45368;
chunk__45271 = G__45369;
count__45272 = G__45370;
i__45273 = G__45371;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__45302 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__45303 = null;
var count__45304 = (0);
var i__45305 = (0);
while(true){
if((i__45305 < count__45304)){
var map__45311 = chunk__45303.cljs$core$IIndexed$_nth$arity$2(null,i__45305);
var map__45311__$1 = cljs.core.__destructure_map(map__45311);
var effect = map__45311__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45311__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45311__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__45302,chunk__45303,count__45304,i__45305,map__45311,map__45311__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__45302,chunk__45303,count__45304,i__45305,map__45311,map__45311__$1,effect,ms,dispatch))
,ms);
}


var G__45372 = seq__45302;
var G__45373 = chunk__45303;
var G__45374 = count__45304;
var G__45375 = (i__45305 + (1));
seq__45302 = G__45372;
chunk__45303 = G__45373;
count__45304 = G__45374;
i__45305 = G__45375;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45302);
if(temp__5753__auto__){
var seq__45302__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45302__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45302__$1);
var G__45377 = cljs.core.chunk_rest(seq__45302__$1);
var G__45378 = c__4638__auto__;
var G__45379 = cljs.core.count(c__4638__auto__);
var G__45380 = (0);
seq__45302 = G__45377;
chunk__45303 = G__45378;
count__45304 = G__45379;
i__45305 = G__45380;
continue;
} else {
var map__45313 = cljs.core.first(seq__45302__$1);
var map__45313__$1 = cljs.core.__destructure_map(map__45313);
var effect = map__45313__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45313__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45313__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__45302,chunk__45303,count__45304,i__45305,map__45313,map__45313__$1,effect,ms,dispatch,seq__45302__$1,temp__5753__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__45302,chunk__45303,count__45304,i__45305,map__45313,map__45313__$1,effect,ms,dispatch,seq__45302__$1,temp__5753__auto__))
,ms);
}


var G__45381 = cljs.core.next(seq__45302__$1);
var G__45382 = null;
var G__45383 = (0);
var G__45384 = (0);
seq__45302 = G__45381;
chunk__45303 = G__45382;
count__45304 = G__45383;
i__45305 = G__45384;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__45314 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__45315 = null;
var count__45316 = (0);
var i__45317 = (0);
while(true){
if((i__45317 < count__45316)){
var event = chunk__45315.cljs$core$IIndexed$_nth$arity$2(null,i__45317);
re_frame.router.dispatch(event);


var G__45386 = seq__45314;
var G__45387 = chunk__45315;
var G__45388 = count__45316;
var G__45389 = (i__45317 + (1));
seq__45314 = G__45386;
chunk__45315 = G__45387;
count__45316 = G__45388;
i__45317 = G__45389;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45314);
if(temp__5753__auto__){
var seq__45314__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45314__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45314__$1);
var G__45390 = cljs.core.chunk_rest(seq__45314__$1);
var G__45391 = c__4638__auto__;
var G__45392 = cljs.core.count(c__4638__auto__);
var G__45393 = (0);
seq__45314 = G__45390;
chunk__45315 = G__45391;
count__45316 = G__45392;
i__45317 = G__45393;
continue;
} else {
var event = cljs.core.first(seq__45314__$1);
re_frame.router.dispatch(event);


var G__45394 = cljs.core.next(seq__45314__$1);
var G__45395 = null;
var G__45396 = (0);
var G__45397 = (0);
seq__45314 = G__45394;
chunk__45315 = G__45395;
count__45316 = G__45396;
i__45317 = G__45397;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__45319 = cljs.core.seq(value);
var chunk__45320 = null;
var count__45321 = (0);
var i__45322 = (0);
while(true){
if((i__45322 < count__45321)){
var event = chunk__45320.cljs$core$IIndexed$_nth$arity$2(null,i__45322);
clear_event(event);


var G__45398 = seq__45319;
var G__45399 = chunk__45320;
var G__45400 = count__45321;
var G__45401 = (i__45322 + (1));
seq__45319 = G__45398;
chunk__45320 = G__45399;
count__45321 = G__45400;
i__45322 = G__45401;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45319);
if(temp__5753__auto__){
var seq__45319__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45319__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45319__$1);
var G__45403 = cljs.core.chunk_rest(seq__45319__$1);
var G__45404 = c__4638__auto__;
var G__45405 = cljs.core.count(c__4638__auto__);
var G__45406 = (0);
seq__45319 = G__45403;
chunk__45320 = G__45404;
count__45321 = G__45405;
i__45322 = G__45406;
continue;
} else {
var event = cljs.core.first(seq__45319__$1);
clear_event(event);


var G__45407 = cljs.core.next(seq__45319__$1);
var G__45408 = null;
var G__45409 = (0);
var G__45410 = (0);
seq__45319 = G__45407;
chunk__45320 = G__45408;
count__45321 = G__45409;
i__45322 = G__45410;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
