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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__44836){
var map__44837 = p__44836;
var map__44837__$1 = cljs.core.__destructure_map(map__44837);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44837__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44837__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44837__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44837__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4212__auto__ = child_of;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
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
var seq__44838_44869 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__44839_44870 = null;
var count__44840_44871 = (0);
var i__44841_44872 = (0);
while(true){
if((i__44841_44872 < count__44840_44871)){
var vec__44852_44873 = chunk__44839_44870.cljs$core$IIndexed$_nth$arity$2(null,i__44841_44872);
var k_44874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44852_44873,(0),null);
var cb_44875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44852_44873,(1),null);
try{var G__44857_44876 = cljs.core.deref(re_frame.trace.traces);
(cb_44875.cljs$core$IFn$_invoke$arity$1 ? cb_44875.cljs$core$IFn$_invoke$arity$1(G__44857_44876) : cb_44875.call(null,G__44857_44876));
}catch (e44855){var e_44877 = e44855;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_44874,"while storing",cljs.core.deref(re_frame.trace.traces),e_44877], 0));
}

var G__44878 = seq__44838_44869;
var G__44879 = chunk__44839_44870;
var G__44880 = count__44840_44871;
var G__44881 = (i__44841_44872 + (1));
seq__44838_44869 = G__44878;
chunk__44839_44870 = G__44879;
count__44840_44871 = G__44880;
i__44841_44872 = G__44881;
continue;
} else {
var temp__5753__auto___44882 = cljs.core.seq(seq__44838_44869);
if(temp__5753__auto___44882){
var seq__44838_44883__$1 = temp__5753__auto___44882;
if(cljs.core.chunked_seq_QMARK_(seq__44838_44883__$1)){
var c__4638__auto___44884 = cljs.core.chunk_first(seq__44838_44883__$1);
var G__44885 = cljs.core.chunk_rest(seq__44838_44883__$1);
var G__44886 = c__4638__auto___44884;
var G__44887 = cljs.core.count(c__4638__auto___44884);
var G__44888 = (0);
seq__44838_44869 = G__44885;
chunk__44839_44870 = G__44886;
count__44840_44871 = G__44887;
i__44841_44872 = G__44888;
continue;
} else {
var vec__44859_44890 = cljs.core.first(seq__44838_44883__$1);
var k_44891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44859_44890,(0),null);
var cb_44892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44859_44890,(1),null);
try{var G__44863_44893 = cljs.core.deref(re_frame.trace.traces);
(cb_44892.cljs$core$IFn$_invoke$arity$1 ? cb_44892.cljs$core$IFn$_invoke$arity$1(G__44863_44893) : cb_44892.call(null,G__44863_44893));
}catch (e44862){var e_44894 = e44862;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_44891,"while storing",cljs.core.deref(re_frame.trace.traces),e_44894], 0));
}

var G__44895 = cljs.core.next(seq__44838_44883__$1);
var G__44896 = null;
var G__44897 = (0);
var G__44898 = (0);
seq__44838_44869 = G__44895;
chunk__44839_44870 = G__44896;
count__44840_44871 = G__44897;
i__44841_44872 = G__44898;
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
