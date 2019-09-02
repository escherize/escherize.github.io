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
var _STAR_current_trace_STAR__orig_val__27721 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__27722 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__27722;

try{try{var seq__27723 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27724 = null;
var count__27725 = (0);
var i__27726 = (0);
while(true){
if((i__27726 < count__27725)){
var vec__27733 = chunk__27724.cljs$core$IIndexed$_nth$arity$2(null,i__27726);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27733,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27733,(1),null);
var temp__5718__auto___27775 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___27775)){
var effect_fn_27776 = temp__5718__auto___27775;
(effect_fn_27776.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27776.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27776.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27777 = seq__27723;
var G__27778 = chunk__27724;
var G__27779 = count__27725;
var G__27780 = (i__27726 + (1));
seq__27723 = G__27777;
chunk__27724 = G__27778;
count__27725 = G__27779;
i__27726 = G__27780;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27723);
if(temp__5720__auto__){
var seq__27723__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27723__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27723__$1);
var G__27781 = cljs.core.chunk_rest(seq__27723__$1);
var G__27782 = c__4550__auto__;
var G__27783 = cljs.core.count(c__4550__auto__);
var G__27784 = (0);
seq__27723 = G__27781;
chunk__27724 = G__27782;
count__27725 = G__27783;
i__27726 = G__27784;
continue;
} else {
var vec__27736 = cljs.core.first(seq__27723__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27736,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27736,(1),null);
var temp__5718__auto___27785 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___27785)){
var effect_fn_27786 = temp__5718__auto___27785;
(effect_fn_27786.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27786.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27786.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27787 = cljs.core.next(seq__27723__$1);
var G__27788 = null;
var G__27789 = (0);
var G__27790 = (0);
seq__27723 = G__27787;
chunk__27724 = G__27788;
count__27725 = G__27789;
i__27726 = G__27790;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__26580__auto___27791 = re_frame.interop.now();
var duration__26581__auto___27792 = (end__26580__auto___27791 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__26581__auto___27792,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__26580__auto___27791);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__27721;
}} else {
var seq__27739 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27740 = null;
var count__27741 = (0);
var i__27742 = (0);
while(true){
if((i__27742 < count__27741)){
var vec__27749 = chunk__27740.cljs$core$IIndexed$_nth$arity$2(null,i__27742);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27749,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27749,(1),null);
var temp__5718__auto___27793 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___27793)){
var effect_fn_27794 = temp__5718__auto___27793;
(effect_fn_27794.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27794.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27794.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27795 = seq__27739;
var G__27796 = chunk__27740;
var G__27797 = count__27741;
var G__27798 = (i__27742 + (1));
seq__27739 = G__27795;
chunk__27740 = G__27796;
count__27741 = G__27797;
i__27742 = G__27798;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27739);
if(temp__5720__auto__){
var seq__27739__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27739__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27739__$1);
var G__27800 = cljs.core.chunk_rest(seq__27739__$1);
var G__27801 = c__4550__auto__;
var G__27802 = cljs.core.count(c__4550__auto__);
var G__27803 = (0);
seq__27739 = G__27800;
chunk__27740 = G__27801;
count__27741 = G__27802;
i__27742 = G__27803;
continue;
} else {
var vec__27752 = cljs.core.first(seq__27739__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27752,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27752,(1),null);
var temp__5718__auto___27805 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___27805)){
var effect_fn_27806 = temp__5718__auto___27805;
(effect_fn_27806.cljs$core$IFn$_invoke$arity$1 ? effect_fn_27806.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_27806.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__27807 = cljs.core.next(seq__27739__$1);
var G__27808 = null;
var G__27809 = (0);
var G__27810 = (0);
seq__27739 = G__27807;
chunk__27740 = G__27808;
count__27741 = G__27809;
i__27742 = G__27810;
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
var seq__27755 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27756 = null;
var count__27757 = (0);
var i__27758 = (0);
while(true){
if((i__27758 < count__27757)){
var map__27763 = chunk__27756.cljs$core$IIndexed$_nth$arity$2(null,i__27758);
var map__27763__$1 = (((((!((map__27763 == null))))?(((((map__27763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27763):map__27763);
var effect = map__27763__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27763__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27763__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__27755,chunk__27756,count__27757,i__27758,map__27763,map__27763__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__27755,chunk__27756,count__27757,i__27758,map__27763,map__27763__$1,effect,ms,dispatch))
,ms);
}


var G__27812 = seq__27755;
var G__27813 = chunk__27756;
var G__27814 = count__27757;
var G__27815 = (i__27758 + (1));
seq__27755 = G__27812;
chunk__27756 = G__27813;
count__27757 = G__27814;
i__27758 = G__27815;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27755);
if(temp__5720__auto__){
var seq__27755__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27755__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27755__$1);
var G__27817 = cljs.core.chunk_rest(seq__27755__$1);
var G__27818 = c__4550__auto__;
var G__27819 = cljs.core.count(c__4550__auto__);
var G__27820 = (0);
seq__27755 = G__27817;
chunk__27756 = G__27818;
count__27757 = G__27819;
i__27758 = G__27820;
continue;
} else {
var map__27765 = cljs.core.first(seq__27755__$1);
var map__27765__$1 = (((((!((map__27765 == null))))?(((((map__27765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27765):map__27765);
var effect = map__27765__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27765__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27765__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__27755,chunk__27756,count__27757,i__27758,map__27765,map__27765__$1,effect,ms,dispatch,seq__27755__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__27755,chunk__27756,count__27757,i__27758,map__27765,map__27765__$1,effect,ms,dispatch,seq__27755__$1,temp__5720__auto__))
,ms);
}


var G__27821 = cljs.core.next(seq__27755__$1);
var G__27822 = null;
var G__27823 = (0);
var G__27824 = (0);
seq__27755 = G__27821;
chunk__27756 = G__27822;
count__27757 = G__27823;
i__27758 = G__27824;
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
var seq__27767 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__27768 = null;
var count__27769 = (0);
var i__27770 = (0);
while(true){
if((i__27770 < count__27769)){
var event = chunk__27768.cljs$core$IIndexed$_nth$arity$2(null,i__27770);
re_frame.router.dispatch(event);


var G__27827 = seq__27767;
var G__27828 = chunk__27768;
var G__27829 = count__27769;
var G__27830 = (i__27770 + (1));
seq__27767 = G__27827;
chunk__27768 = G__27828;
count__27769 = G__27829;
i__27770 = G__27830;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27767);
if(temp__5720__auto__){
var seq__27767__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27767__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27767__$1);
var G__27831 = cljs.core.chunk_rest(seq__27767__$1);
var G__27832 = c__4550__auto__;
var G__27833 = cljs.core.count(c__4550__auto__);
var G__27834 = (0);
seq__27767 = G__27831;
chunk__27768 = G__27832;
count__27769 = G__27833;
i__27770 = G__27834;
continue;
} else {
var event = cljs.core.first(seq__27767__$1);
re_frame.router.dispatch(event);


var G__27835 = cljs.core.next(seq__27767__$1);
var G__27836 = null;
var G__27837 = (0);
var G__27838 = (0);
seq__27767 = G__27835;
chunk__27768 = G__27836;
count__27769 = G__27837;
i__27770 = G__27838;
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
var seq__27771 = cljs.core.seq(value);
var chunk__27772 = null;
var count__27773 = (0);
var i__27774 = (0);
while(true){
if((i__27774 < count__27773)){
var event = chunk__27772.cljs$core$IIndexed$_nth$arity$2(null,i__27774);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__27839 = seq__27771;
var G__27840 = chunk__27772;
var G__27841 = count__27773;
var G__27842 = (i__27774 + (1));
seq__27771 = G__27839;
chunk__27772 = G__27840;
count__27773 = G__27841;
i__27774 = G__27842;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__27771);
if(temp__5720__auto__){
var seq__27771__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27771__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27771__$1);
var G__27843 = cljs.core.chunk_rest(seq__27771__$1);
var G__27844 = c__4550__auto__;
var G__27845 = cljs.core.count(c__4550__auto__);
var G__27846 = (0);
seq__27771 = G__27843;
chunk__27772 = G__27844;
count__27773 = G__27845;
i__27774 = G__27846;
continue;
} else {
var event = cljs.core.first(seq__27771__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__27847 = cljs.core.next(seq__27771__$1);
var G__27848 = null;
var G__27849 = (0);
var G__27850 = (0);
seq__27771 = G__27847;
chunk__27772 = G__27848;
count__27773 = G__27849;
i__27774 = G__27850;
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
