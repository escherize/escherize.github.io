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
var _STAR_current_trace_STAR__orig_val__34846 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__34847 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__34847);

try{try{var seq__34849 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__34850 = null;
var count__34851 = (0);
var i__34852 = (0);
while(true){
if((i__34852 < count__34851)){
var vec__34862 = chunk__34850.cljs$core$IIndexed$_nth$arity$2(null,i__34852);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34862,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34862,(1),null);
var temp__5733__auto___34927 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34927)){
var effect_fn_34928 = temp__5733__auto___34927;
(effect_fn_34928.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34928.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34928.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34929 = seq__34849;
var G__34930 = chunk__34850;
var G__34931 = count__34851;
var G__34932 = (i__34852 + (1));
seq__34849 = G__34929;
chunk__34850 = G__34930;
count__34851 = G__34931;
i__34852 = G__34932;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34849);
if(temp__5735__auto__){
var seq__34849__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34849__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34849__$1);
var G__34933 = cljs.core.chunk_rest(seq__34849__$1);
var G__34934 = c__4556__auto__;
var G__34935 = cljs.core.count(c__4556__auto__);
var G__34936 = (0);
seq__34849 = G__34933;
chunk__34850 = G__34934;
count__34851 = G__34935;
i__34852 = G__34936;
continue;
} else {
var vec__34867 = cljs.core.first(seq__34849__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34867,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34867,(1),null);
var temp__5733__auto___34937 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34937)){
var effect_fn_34938 = temp__5733__auto___34937;
(effect_fn_34938.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34938.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34938.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34939 = cljs.core.next(seq__34849__$1);
var G__34940 = null;
var G__34941 = (0);
var G__34942 = (0);
seq__34849 = G__34939;
chunk__34850 = G__34940;
count__34851 = G__34941;
i__34852 = G__34942;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__34536__auto___34943 = re_frame.interop.now();
var duration__34537__auto___34944 = (end__34536__auto___34943 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__34537__auto___34944,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__34536__auto___34943);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__34846);
}} else {
var seq__34871 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__34872 = null;
var count__34873 = (0);
var i__34874 = (0);
while(true){
if((i__34874 < count__34873)){
var vec__34883 = chunk__34872.cljs$core$IIndexed$_nth$arity$2(null,i__34874);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34883,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34883,(1),null);
var temp__5733__auto___34945 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34945)){
var effect_fn_34946 = temp__5733__auto___34945;
(effect_fn_34946.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34946.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34946.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34947 = seq__34871;
var G__34948 = chunk__34872;
var G__34949 = count__34873;
var G__34950 = (i__34874 + (1));
seq__34871 = G__34947;
chunk__34872 = G__34948;
count__34873 = G__34949;
i__34874 = G__34950;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34871);
if(temp__5735__auto__){
var seq__34871__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34871__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34871__$1);
var G__34951 = cljs.core.chunk_rest(seq__34871__$1);
var G__34952 = c__4556__auto__;
var G__34953 = cljs.core.count(c__4556__auto__);
var G__34954 = (0);
seq__34871 = G__34951;
chunk__34872 = G__34952;
count__34873 = G__34953;
i__34874 = G__34954;
continue;
} else {
var vec__34887 = cljs.core.first(seq__34871__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34887,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34887,(1),null);
var temp__5733__auto___34955 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___34955)){
var effect_fn_34956 = temp__5733__auto___34955;
(effect_fn_34956.cljs$core$IFn$_invoke$arity$1 ? effect_fn_34956.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_34956.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__34957 = cljs.core.next(seq__34871__$1);
var G__34958 = null;
var G__34959 = (0);
var G__34960 = (0);
seq__34871 = G__34957;
chunk__34872 = G__34958;
count__34873 = G__34959;
i__34874 = G__34960;
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
var seq__34891 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__34892 = null;
var count__34893 = (0);
var i__34894 = (0);
while(true){
if((i__34894 < count__34893)){
var map__34899 = chunk__34892.cljs$core$IIndexed$_nth$arity$2(null,i__34894);
var map__34899__$1 = (((((!((map__34899 == null))))?(((((map__34899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34899):map__34899);
var effect = map__34899__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34899__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34899__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__34891,chunk__34892,count__34893,i__34894,map__34899,map__34899__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__34891,chunk__34892,count__34893,i__34894,map__34899,map__34899__$1,effect,ms,dispatch))
,ms);
}


var G__34963 = seq__34891;
var G__34964 = chunk__34892;
var G__34965 = count__34893;
var G__34966 = (i__34894 + (1));
seq__34891 = G__34963;
chunk__34892 = G__34964;
count__34893 = G__34965;
i__34894 = G__34966;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34891);
if(temp__5735__auto__){
var seq__34891__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34891__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34891__$1);
var G__34967 = cljs.core.chunk_rest(seq__34891__$1);
var G__34968 = c__4556__auto__;
var G__34969 = cljs.core.count(c__4556__auto__);
var G__34970 = (0);
seq__34891 = G__34967;
chunk__34892 = G__34968;
count__34893 = G__34969;
i__34894 = G__34970;
continue;
} else {
var map__34902 = cljs.core.first(seq__34891__$1);
var map__34902__$1 = (((((!((map__34902 == null))))?(((((map__34902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34902):map__34902);
var effect = map__34902__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34902__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34902__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__34891,chunk__34892,count__34893,i__34894,map__34902,map__34902__$1,effect,ms,dispatch,seq__34891__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__34891,chunk__34892,count__34893,i__34894,map__34902,map__34902__$1,effect,ms,dispatch,seq__34891__$1,temp__5735__auto__))
,ms);
}


var G__34972 = cljs.core.next(seq__34891__$1);
var G__34973 = null;
var G__34974 = (0);
var G__34975 = (0);
seq__34891 = G__34972;
chunk__34892 = G__34973;
count__34893 = G__34974;
i__34894 = G__34975;
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
var seq__34906 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__34907 = null;
var count__34908 = (0);
var i__34909 = (0);
while(true){
if((i__34909 < count__34908)){
var event = chunk__34907.cljs$core$IIndexed$_nth$arity$2(null,i__34909);
re_frame.router.dispatch(event);


var G__34977 = seq__34906;
var G__34978 = chunk__34907;
var G__34979 = count__34908;
var G__34980 = (i__34909 + (1));
seq__34906 = G__34977;
chunk__34907 = G__34978;
count__34908 = G__34979;
i__34909 = G__34980;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34906);
if(temp__5735__auto__){
var seq__34906__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34906__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34906__$1);
var G__34981 = cljs.core.chunk_rest(seq__34906__$1);
var G__34982 = c__4556__auto__;
var G__34983 = cljs.core.count(c__4556__auto__);
var G__34984 = (0);
seq__34906 = G__34981;
chunk__34907 = G__34982;
count__34908 = G__34983;
i__34909 = G__34984;
continue;
} else {
var event = cljs.core.first(seq__34906__$1);
re_frame.router.dispatch(event);


var G__34985 = cljs.core.next(seq__34906__$1);
var G__34986 = null;
var G__34987 = (0);
var G__34988 = (0);
seq__34906 = G__34985;
chunk__34907 = G__34986;
count__34908 = G__34987;
i__34909 = G__34988;
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
var seq__34911 = cljs.core.seq(value);
var chunk__34912 = null;
var count__34913 = (0);
var i__34914 = (0);
while(true){
if((i__34914 < count__34913)){
var event = chunk__34912.cljs$core$IIndexed$_nth$arity$2(null,i__34914);
clear_event(event);


var G__34991 = seq__34911;
var G__34992 = chunk__34912;
var G__34993 = count__34913;
var G__34994 = (i__34914 + (1));
seq__34911 = G__34991;
chunk__34912 = G__34992;
count__34913 = G__34993;
i__34914 = G__34994;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34911);
if(temp__5735__auto__){
var seq__34911__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34911__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__34911__$1);
var G__34995 = cljs.core.chunk_rest(seq__34911__$1);
var G__34996 = c__4556__auto__;
var G__34997 = cljs.core.count(c__4556__auto__);
var G__34998 = (0);
seq__34911 = G__34995;
chunk__34912 = G__34996;
count__34913 = G__34997;
i__34914 = G__34998;
continue;
} else {
var event = cljs.core.first(seq__34911__$1);
clear_event(event);


var G__34999 = cljs.core.next(seq__34911__$1);
var G__35000 = null;
var G__35001 = (0);
var G__35002 = (0);
seq__34911 = G__34999;
chunk__34912 = G__35000;
count__34913 = G__35001;
i__34914 = G__35002;
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
