goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__34556){
var map__34557 = p__34556;
var map__34557__$1 = (((((!((map__34557 == null))))?(((((map__34557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34557):map__34557);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34557__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34557__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34557__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34557__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4126__auto__ = child_of;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__34559_34590 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__34560_34591 = null;
var count__34561_34592 = (0);
var i__34562_34593 = (0);
while(true){
if((i__34562_34593 < count__34561_34592)){
var vec__34573_34595 = chunk__34560_34591.cljs$core$IIndexed$_nth$arity$2(null,i__34562_34593);
var k_34596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34573_34595,(0),null);
var cb_34597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34573_34595,(1),null);
try{var G__34577_34601 = cljs.core.deref(re_frame.trace.traces);
(cb_34597.cljs$core$IFn$_invoke$arity$1 ? cb_34597.cljs$core$IFn$_invoke$arity$1(G__34577_34601) : cb_34597.call(null,G__34577_34601));
}catch (e34576){var e_34602 = e34576;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_34596,"while storing",cljs.core.deref(re_frame.trace.traces),e_34602], 0));
}

var G__34603 = seq__34559_34590;
var G__34604 = chunk__34560_34591;
var G__34605 = count__34561_34592;
var G__34606 = (i__34562_34593 + (1));
seq__34559_34590 = G__34603;
chunk__34560_34591 = G__34604;
count__34561_34592 = G__34605;
i__34562_34593 = G__34606;
continue;
} else {
var temp__5735__auto___34607 = cljs.core.seq(seq__34559_34590);
if(temp__5735__auto___34607){
var seq__34559_34608__$1 = temp__5735__auto___34607;
if(cljs.core.chunked_seq_QMARK_(seq__34559_34608__$1)){
var c__4556__auto___34612 = cljs.core.chunk_first(seq__34559_34608__$1);
var G__34613 = cljs.core.chunk_rest(seq__34559_34608__$1);
var G__34614 = c__4556__auto___34612;
var G__34615 = cljs.core.count(c__4556__auto___34612);
var G__34616 = (0);
seq__34559_34590 = G__34613;
chunk__34560_34591 = G__34614;
count__34561_34592 = G__34615;
i__34562_34593 = G__34616;
continue;
} else {
var vec__34578_34619 = cljs.core.first(seq__34559_34608__$1);
var k_34620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34578_34619,(0),null);
var cb_34621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34578_34619,(1),null);
try{var G__34582_34623 = cljs.core.deref(re_frame.trace.traces);
(cb_34621.cljs$core$IFn$_invoke$arity$1 ? cb_34621.cljs$core$IFn$_invoke$arity$1(G__34582_34623) : cb_34621.call(null,G__34582_34623));
}catch (e34581){var e_34624 = e34581;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_34620,"while storing",cljs.core.deref(re_frame.trace.traces),e_34624], 0));
}

var G__34628 = cljs.core.next(seq__34559_34608__$1);
var G__34629 = null;
var G__34630 = (0);
var G__34631 = (0);
seq__34559_34590 = G__34628;
chunk__34560_34591 = G__34629;
count__34561_34592 = G__34630;
i__34562_34593 = G__34631;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
