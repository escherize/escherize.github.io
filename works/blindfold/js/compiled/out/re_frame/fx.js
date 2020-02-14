// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__30586){
var vec__30587 = p__30586;
var k = cljs.core.nth.call(null,vec__30587,(0),null);
var value = cljs.core.nth.call(null,vec__30587,(1),null);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,k,true);
if(cljs.core.truth_(temp__4655__auto__)){
var effect_fn = temp__4655__auto__;
return effect_fn.call(null,value);
} else {
return null;
}
}),new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context)));
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__30590 = cljs.core.seq.call(null,value);
var chunk__30591 = null;
var count__30592 = (0);
var i__30593 = (0);
while(true){
if((i__30593 < count__30592)){
var map__30594 = cljs.core._nth.call(null,chunk__30591,i__30593);
var map__30594__$1 = ((((!((map__30594 == null)))?((((map__30594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30594):map__30594);
var effect = map__30594__$1;
var ms = cljs.core.get.call(null,map__30594__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__30594__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__30590,chunk__30591,count__30592,i__30593,map__30594,map__30594__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__30590,chunk__30591,count__30592,i__30593,map__30594,map__30594__$1,effect,ms,dispatch))
,ms);
}

var G__30598 = seq__30590;
var G__30599 = chunk__30591;
var G__30600 = count__30592;
var G__30601 = (i__30593 + (1));
seq__30590 = G__30598;
chunk__30591 = G__30599;
count__30592 = G__30600;
i__30593 = G__30601;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30590);
if(temp__4657__auto__){
var seq__30590__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30590__$1)){
var c__28211__auto__ = cljs.core.chunk_first.call(null,seq__30590__$1);
var G__30602 = cljs.core.chunk_rest.call(null,seq__30590__$1);
var G__30603 = c__28211__auto__;
var G__30604 = cljs.core.count.call(null,c__28211__auto__);
var G__30605 = (0);
seq__30590 = G__30602;
chunk__30591 = G__30603;
count__30592 = G__30604;
i__30593 = G__30605;
continue;
} else {
var map__30596 = cljs.core.first.call(null,seq__30590__$1);
var map__30596__$1 = ((((!((map__30596 == null)))?((((map__30596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30596):map__30596);
var effect = map__30596__$1;
var ms = cljs.core.get.call(null,map__30596__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__30596__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value: ",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__30590,chunk__30591,count__30592,i__30593,map__30596,map__30596__$1,effect,ms,dispatch,seq__30590__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__30590,chunk__30591,count__30592,i__30593,map__30596,map__30596__$1,effect,ms,dispatch,seq__30590__$1,temp__4657__auto__))
,ms);
}

var G__30606 = cljs.core.next.call(null,seq__30590__$1);
var G__30607 = null;
var G__30608 = (0);
var G__30609 = (0);
seq__30590 = G__30606;
chunk__30591 = G__30607;
count__30592 = G__30608;
i__30593 = G__30609;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got: ",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got: ",value);
} else {
}

var seq__30610 = cljs.core.seq.call(null,value);
var chunk__30611 = null;
var count__30612 = (0);
var i__30613 = (0);
while(true){
if((i__30613 < count__30612)){
var event = cljs.core._nth.call(null,chunk__30611,i__30613);
re_frame.router.dispatch.call(null,event);

var G__30614 = seq__30610;
var G__30615 = chunk__30611;
var G__30616 = count__30612;
var G__30617 = (i__30613 + (1));
seq__30610 = G__30614;
chunk__30611 = G__30615;
count__30612 = G__30616;
i__30613 = G__30617;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30610);
if(temp__4657__auto__){
var seq__30610__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30610__$1)){
var c__28211__auto__ = cljs.core.chunk_first.call(null,seq__30610__$1);
var G__30618 = cljs.core.chunk_rest.call(null,seq__30610__$1);
var G__30619 = c__28211__auto__;
var G__30620 = cljs.core.count.call(null,c__28211__auto__);
var G__30621 = (0);
seq__30610 = G__30618;
chunk__30611 = G__30619;
count__30612 = G__30620;
i__30613 = G__30621;
continue;
} else {
var event = cljs.core.first.call(null,seq__30610__$1);
re_frame.router.dispatch.call(null,event);

var G__30622 = cljs.core.next.call(null,seq__30610__$1);
var G__30623 = null;
var G__30624 = (0);
var G__30625 = (0);
seq__30610 = G__30622;
chunk__30611 = G__30623;
count__30612 = G__30624;
i__30613 = G__30625;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
return cljs.core.doall.call(null,cljs.core.map.call(null,clear_event,value));
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1481770131252