// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frisk.core');
goog.require('cljs.core');
goog.require('re_frisk.devtool');
goog.require('re_frisk.ui');
goog.require('reagent.core');
goog.require('re_frisk.data');
goog.require('re_frame.core');
goog.require('datafrisk.core');
re_frisk.core.post_event_callback = (function re_frisk$core$post_event_callback(value){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_events,cljs.core.conj,value);
});
re_frisk.core.render_re_frisk = (function re_frisk$core$render_re_frisk(params){
var div = document.createElement("div");
document.body.appendChild(div);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.re_frisk_shell,re_frisk.data.re_frame_data,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),re_frisk.devtool.open_debugger_window], null),params)], null),div);
});
re_frisk.core.enable_re_frisk_BANG_ = (function re_frisk$core$enable_re_frisk_BANG_(var_args){
var args__28482__auto__ = [];
var len__28475__auto___30892 = arguments.length;
var i__28476__auto___30893 = (0);
while(true){
if((i__28476__auto___30893 < len__28475__auto___30892)){
args__28482__auto__.push((arguments[i__28476__auto___30893]));

var G__30894 = (i__28476__auto___30893 + (1));
i__28476__auto___30893 = G__30894;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return null;
} else {
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709),(function (db,_){
return db;
}));

cljs.core.reset_BANG_.call(null,re_frisk.data.re_frame_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app-db","app-db",865606302),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709)], null))], null));

cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true);

re_frame.core.add_post_event_callback.call(null,re_frisk.core.post_event_callback);

return setTimeout(re_frisk.core.render_re_frisk,(100),cljs.core.first.call(null,params));
}
});

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$applyTo = (function (seq30891){
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30891));
});

re_frisk.core.enable_frisk_BANG_ = (function re_frisk$core$enable_frisk_BANG_(var_args){
var args__28482__auto__ = [];
var len__28475__auto___30896 = arguments.length;
var i__28476__auto___30897 = (0);
while(true){
if((i__28476__auto___30897 < len__28475__auto___30896)){
args__28482__auto__.push((arguments[i__28476__auto___30897]));

var G__30898 = (i__28476__auto___30897 + (1));
i__28476__auto___30897 = G__30898;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return null;
} else {
cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true);

return setTimeout(re_frisk.core.render_re_frisk,(100),cljs.core.first.call(null,params));
}
});

re_frisk.core.enable_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_frisk_BANG_.cljs$lang$applyTo = (function (seq30895){
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30895));
});

re_frisk.core.add_data = (function re_frisk$core$add_data(key,data){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc,key,data);
} else {
return null;
}
});
re_frisk.core.add_in_data = (function re_frisk$core$add_in_data(keys,data){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,keys,data);
} else {
return null;
}
});
re_frisk.core.reg_view = (function re_frisk$core$reg_view(view,subs,events){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)))){
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view,new cljs.core.Keyword(null,"events","events",1792552201)], null),events);

cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view,new cljs.core.Keyword(null,"subs","subs",-186681991)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__30899_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__30899_SHARP_],[re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30899_SHARP_], null))]);
}),subs)));

var seq__30904 = cljs.core.seq.call(null,subs);
var chunk__30905 = null;
var count__30906 = (0);
var i__30907 = (0);
while(true){
if((i__30907 < count__30906)){
var s = cljs.core._nth.call(null,chunk__30905,i__30907);
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),s], null),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)));

var G__30908 = seq__30904;
var G__30909 = chunk__30905;
var G__30910 = count__30906;
var G__30911 = (i__30907 + (1));
seq__30904 = G__30908;
chunk__30905 = G__30909;
count__30906 = G__30910;
i__30907 = G__30911;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30904);
if(temp__4657__auto__){
var seq__30904__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30904__$1)){
var c__28211__auto__ = cljs.core.chunk_first.call(null,seq__30904__$1);
var G__30912 = cljs.core.chunk_rest.call(null,seq__30904__$1);
var G__30913 = c__28211__auto__;
var G__30914 = cljs.core.count.call(null,c__28211__auto__);
var G__30915 = (0);
seq__30904 = G__30912;
chunk__30905 = G__30913;
count__30906 = G__30914;
i__30907 = G__30915;
continue;
} else {
var s = cljs.core.first.call(null,seq__30904__$1);
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),s], null),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)));

var G__30916 = cljs.core.next.call(null,seq__30904__$1);
var G__30917 = null;
var G__30918 = (0);
var G__30919 = (0);
seq__30904 = G__30916;
chunk__30905 = G__30917;
count__30906 = G__30918;
i__30907 = G__30919;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
re_frisk.core.unmount_view = (function re_frisk$core$unmount_view(view){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)))){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,view);
} else {
return null;
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("re-frisk","update-db","re-frisk/update-db",-658524246),(function (db,p__30920){
var vec__30921 = p__30920;
var _ = cljs.core.nth.call(null,vec__30921,(0),null);
var value = cljs.core.nth.call(null,vec__30921,(1),null);
return value;
}));

//# sourceMappingURL=core.js.map?rel=1481770132025