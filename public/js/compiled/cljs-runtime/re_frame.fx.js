goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
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
var _STAR_current_trace_STAR__orig_val__39090 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39091 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39091;

try{try{var seq__39092 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39093 = null;
var count__39094 = (0);
var i__39095 = (0);
while(true){
if((i__39095 < count__39094)){
var vec__39109 = chunk__39093.cljs$core$IIndexed$_nth$arity$2(null,i__39095);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39109,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39109,(1),null);
var temp__5733__auto___39178 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39178)){
var effect_fn_39179 = temp__5733__auto___39178;
(effect_fn_39179.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39179.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39179.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39180 = seq__39092;
var G__39181 = chunk__39093;
var G__39182 = count__39094;
var G__39183 = (i__39095 + (1));
seq__39092 = G__39180;
chunk__39093 = G__39181;
count__39094 = G__39182;
i__39095 = G__39183;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39092);
if(temp__5735__auto__){
var seq__39092__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39092__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__39092__$1);
var G__39184 = cljs.core.chunk_rest(seq__39092__$1);
var G__39185 = c__4550__auto__;
var G__39186 = cljs.core.count(c__4550__auto__);
var G__39187 = (0);
seq__39092 = G__39184;
chunk__39093 = G__39185;
count__39094 = G__39186;
i__39095 = G__39187;
continue;
} else {
var vec__39115 = cljs.core.first(seq__39092__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39115,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39115,(1),null);
var temp__5733__auto___39192 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39192)){
var effect_fn_39193 = temp__5733__auto___39192;
(effect_fn_39193.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39193.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39193.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39195 = cljs.core.next(seq__39092__$1);
var G__39196 = null;
var G__39197 = (0);
var G__39198 = (0);
seq__39092 = G__39195;
chunk__39093 = G__39196;
count__39094 = G__39197;
i__39095 = G__39198;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38767__auto___39199 = re_frame.interop.now();
var duration__38768__auto___39200 = (end__38767__auto___39199 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38768__auto___39200,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38767__auto___39199);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39090;
}} else {
var seq__39119 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39120 = null;
var count__39121 = (0);
var i__39122 = (0);
while(true){
if((i__39122 < count__39121)){
var vec__39134 = chunk__39120.cljs$core$IIndexed$_nth$arity$2(null,i__39122);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39134,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39134,(1),null);
var temp__5733__auto___39202 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39202)){
var effect_fn_39203 = temp__5733__auto___39202;
(effect_fn_39203.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39203.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39203.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39205 = seq__39119;
var G__39206 = chunk__39120;
var G__39207 = count__39121;
var G__39208 = (i__39122 + (1));
seq__39119 = G__39205;
chunk__39120 = G__39206;
count__39121 = G__39207;
i__39122 = G__39208;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39119);
if(temp__5735__auto__){
var seq__39119__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39119__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__39119__$1);
var G__39209 = cljs.core.chunk_rest(seq__39119__$1);
var G__39210 = c__4550__auto__;
var G__39211 = cljs.core.count(c__4550__auto__);
var G__39212 = (0);
seq__39119 = G__39209;
chunk__39120 = G__39210;
count__39121 = G__39211;
i__39122 = G__39212;
continue;
} else {
var vec__39137 = cljs.core.first(seq__39119__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39137,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39137,(1),null);
var temp__5733__auto___39214 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39214)){
var effect_fn_39218 = temp__5733__auto___39214;
(effect_fn_39218.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39218.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39218.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39219 = cljs.core.next(seq__39119__$1);
var G__39220 = null;
var G__39221 = (0);
var G__39222 = (0);
seq__39119 = G__39219;
chunk__39120 = G__39220;
count__39121 = G__39221;
i__39122 = G__39222;
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
var seq__39140 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39141 = null;
var count__39142 = (0);
var i__39143 = (0);
while(true){
if((i__39143 < count__39142)){
var map__39156 = chunk__39141.cljs$core$IIndexed$_nth$arity$2(null,i__39143);
var map__39156__$1 = (((((!((map__39156 == null))))?(((((map__39156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39156):map__39156);
var effect = map__39156__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39156__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39156__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__39140,chunk__39141,count__39142,i__39143,map__39156,map__39156__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__39140,chunk__39141,count__39142,i__39143,map__39156,map__39156__$1,effect,ms,dispatch))
,ms);
}


var G__39223 = seq__39140;
var G__39224 = chunk__39141;
var G__39225 = count__39142;
var G__39226 = (i__39143 + (1));
seq__39140 = G__39223;
chunk__39141 = G__39224;
count__39142 = G__39225;
i__39143 = G__39226;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39140);
if(temp__5735__auto__){
var seq__39140__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39140__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__39140__$1);
var G__39227 = cljs.core.chunk_rest(seq__39140__$1);
var G__39228 = c__4550__auto__;
var G__39229 = cljs.core.count(c__4550__auto__);
var G__39230 = (0);
seq__39140 = G__39227;
chunk__39141 = G__39228;
count__39142 = G__39229;
i__39143 = G__39230;
continue;
} else {
var map__39163 = cljs.core.first(seq__39140__$1);
var map__39163__$1 = (((((!((map__39163 == null))))?(((((map__39163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39163):map__39163);
var effect = map__39163__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39163__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39163__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__39140,chunk__39141,count__39142,i__39143,map__39163,map__39163__$1,effect,ms,dispatch,seq__39140__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__39140,chunk__39141,count__39142,i__39143,map__39163,map__39163__$1,effect,ms,dispatch,seq__39140__$1,temp__5735__auto__))
,ms);
}


var G__39231 = cljs.core.next(seq__39140__$1);
var G__39232 = null;
var G__39233 = (0);
var G__39234 = (0);
seq__39140 = G__39231;
chunk__39141 = G__39232;
count__39142 = G__39233;
i__39143 = G__39234;
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
var seq__39169 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39170 = null;
var count__39171 = (0);
var i__39172 = (0);
while(true){
if((i__39172 < count__39171)){
var event = chunk__39170.cljs$core$IIndexed$_nth$arity$2(null,i__39172);
re_frame.router.dispatch(event);


var G__39249 = seq__39169;
var G__39250 = chunk__39170;
var G__39251 = count__39171;
var G__39252 = (i__39172 + (1));
seq__39169 = G__39249;
chunk__39170 = G__39250;
count__39171 = G__39251;
i__39172 = G__39252;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39169);
if(temp__5735__auto__){
var seq__39169__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39169__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__39169__$1);
var G__39253 = cljs.core.chunk_rest(seq__39169__$1);
var G__39254 = c__4550__auto__;
var G__39255 = cljs.core.count(c__4550__auto__);
var G__39256 = (0);
seq__39169 = G__39253;
chunk__39170 = G__39254;
count__39171 = G__39255;
i__39172 = G__39256;
continue;
} else {
var event = cljs.core.first(seq__39169__$1);
re_frame.router.dispatch(event);


var G__39257 = cljs.core.next(seq__39169__$1);
var G__39258 = null;
var G__39259 = (0);
var G__39260 = (0);
seq__39169 = G__39257;
chunk__39170 = G__39258;
count__39171 = G__39259;
i__39172 = G__39260;
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
var seq__39173 = cljs.core.seq(value);
var chunk__39174 = null;
var count__39175 = (0);
var i__39176 = (0);
while(true){
if((i__39176 < count__39175)){
var event = chunk__39174.cljs$core$IIndexed$_nth$arity$2(null,i__39176);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__39261 = seq__39173;
var G__39262 = chunk__39174;
var G__39263 = count__39175;
var G__39264 = (i__39176 + (1));
seq__39173 = G__39261;
chunk__39174 = G__39262;
count__39175 = G__39263;
i__39176 = G__39264;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39173);
if(temp__5735__auto__){
var seq__39173__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39173__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__39173__$1);
var G__39267 = cljs.core.chunk_rest(seq__39173__$1);
var G__39268 = c__4550__auto__;
var G__39269 = cljs.core.count(c__4550__auto__);
var G__39270 = (0);
seq__39173 = G__39267;
chunk__39174 = G__39268;
count__39175 = G__39269;
i__39176 = G__39270;
continue;
} else {
var event = cljs.core.first(seq__39173__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__39272 = cljs.core.next(seq__39173__$1);
var G__39273 = null;
var G__39274 = (0);
var G__39275 = (0);
seq__39173 = G__39272;
chunk__39174 = G__39273;
count__39175 = G__39274;
i__39176 = G__39275;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
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
