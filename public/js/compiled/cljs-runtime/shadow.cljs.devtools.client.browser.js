goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38079 = arguments.length;
var i__4731__auto___38080 = (0);
while(true){
if((i__4731__auto___38080 < len__4730__auto___38079)){
args__4736__auto__.push((arguments[i__4731__auto___38080]));

var G__38081 = (i__4731__auto___38080 + (1));
i__4731__auto___38080 = G__38081;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37819){
var G__37820 = cljs.core.first(seq37819);
var seq37819__$1 = cljs.core.next(seq37819);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37820,seq37819__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__37830){
var map__37832 = p__37830;
var map__37832__$1 = (((((!((map__37832 == null))))?(((((map__37832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37832):map__37832);
var src = map__37832__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37832__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37832__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37835 = cljs.core.seq(sources);
var chunk__37836 = null;
var count__37837 = (0);
var i__37838 = (0);
while(true){
if((i__37838 < count__37837)){
var map__37845 = chunk__37836.cljs$core$IIndexed$_nth$arity$2(null,i__37838);
var map__37845__$1 = (((((!((map__37845 == null))))?(((((map__37845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37845):map__37845);
var src = map__37845__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37845__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37845__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37845__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37845__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e37847){var e_38087 = e37847;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38087);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38087.message)].join('')));
}

var G__38089 = seq__37835;
var G__38090 = chunk__37836;
var G__38091 = count__37837;
var G__38092 = (i__37838 + (1));
seq__37835 = G__38089;
chunk__37836 = G__38090;
count__37837 = G__38091;
i__37838 = G__38092;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37835);
if(temp__5735__auto__){
var seq__37835__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37835__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37835__$1);
var G__38095 = cljs.core.chunk_rest(seq__37835__$1);
var G__38096 = c__4550__auto__;
var G__38097 = cljs.core.count(c__4550__auto__);
var G__38098 = (0);
seq__37835 = G__38095;
chunk__37836 = G__38096;
count__37837 = G__38097;
i__37838 = G__38098;
continue;
} else {
var map__37849 = cljs.core.first(seq__37835__$1);
var map__37849__$1 = (((((!((map__37849 == null))))?(((((map__37849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37849):map__37849);
var src = map__37849__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37849__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37849__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37849__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37849__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e37851){var e_38103 = e37851;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38103);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38103.message)].join('')));
}

var G__38104 = cljs.core.next(seq__37835__$1);
var G__38105 = null;
var G__38106 = (0);
var G__38107 = (0);
seq__37835 = G__38104;
chunk__37836 = G__38105;
count__37837 = G__38106;
i__37838 = G__38107;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37854 = cljs.core.seq(js_requires);
var chunk__37855 = null;
var count__37856 = (0);
var i__37857 = (0);
while(true){
if((i__37857 < count__37856)){
var js_ns = chunk__37855.cljs$core$IIndexed$_nth$arity$2(null,i__37857);
var require_str_38111 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38111);


var G__38112 = seq__37854;
var G__38113 = chunk__37855;
var G__38114 = count__37856;
var G__38115 = (i__37857 + (1));
seq__37854 = G__38112;
chunk__37855 = G__38113;
count__37856 = G__38114;
i__37857 = G__38115;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37854);
if(temp__5735__auto__){
var seq__37854__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37854__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37854__$1);
var G__38117 = cljs.core.chunk_rest(seq__37854__$1);
var G__38118 = c__4550__auto__;
var G__38119 = cljs.core.count(c__4550__auto__);
var G__38120 = (0);
seq__37854 = G__38117;
chunk__37855 = G__38118;
count__37856 = G__38119;
i__37857 = G__38120;
continue;
} else {
var js_ns = cljs.core.first(seq__37854__$1);
var require_str_38121 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38121);


var G__38122 = cljs.core.next(seq__37854__$1);
var G__38123 = null;
var G__38124 = (0);
var G__38125 = (0);
seq__37854 = G__38122;
chunk__37855 = G__38123;
count__37856 = G__38124;
i__37857 = G__38125;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__37862 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__37862) : callback.call(null,G__37862));
} else {
var G__37864 = shadow.cljs.devtools.client.env.files_url();
var G__37865 = ((function (G__37864){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__37864))
;
var G__37866 = "POST";
var G__37867 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__37868 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37864,G__37865,G__37866,G__37867,G__37868);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37870){
var map__37871 = p__37870;
var map__37871__$1 = (((((!((map__37871 == null))))?(((((map__37871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37871):map__37871);
var msg = map__37871__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37871__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37871__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37873 = info;
var map__37873__$1 = (((((!((map__37873 == null))))?(((((map__37873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37873):map__37873);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37873__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37873__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__37873,map__37873__$1,sources,compiled,map__37871,map__37871__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37875(s__37876){
return (new cljs.core.LazySeq(null,((function (map__37873,map__37873__$1,sources,compiled,map__37871,map__37871__$1,msg,info,reload_info){
return (function (){
var s__37876__$1 = s__37876;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37876__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37881 = cljs.core.first(xs__6292__auto__);
var map__37881__$1 = (((((!((map__37881 == null))))?(((((map__37881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37881):map__37881);
var src = map__37881__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37881__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37881__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__37876__$1,map__37881,map__37881__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37873,map__37873__$1,sources,compiled,map__37871,map__37871__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37875_$_iter__37877(s__37878){
return (new cljs.core.LazySeq(null,((function (s__37876__$1,map__37881,map__37881__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37873,map__37873__$1,sources,compiled,map__37871,map__37871__$1,msg,info,reload_info){
return (function (){
var s__37878__$1 = s__37878;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37878__$1);
if(temp__5735__auto____$1){
var s__37878__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37878__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37878__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37880 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37879 = (0);
while(true){
if((i__37879 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37879);
cljs.core.chunk_append(b__37880,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38133 = (i__37879 + (1));
i__37879 = G__38133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37880),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37875_$_iter__37877(cljs.core.chunk_rest(s__37878__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37880),null);
}
} else {
var warning = cljs.core.first(s__37878__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37875_$_iter__37877(cljs.core.rest(s__37878__$2)));
}
} else {
return null;
}
break;
}
});})(s__37876__$1,map__37881,map__37881__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37873,map__37873__$1,sources,compiled,map__37871,map__37871__$1,msg,info,reload_info))
,null,null));
});})(s__37876__$1,map__37881,map__37881__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37873,map__37873__$1,sources,compiled,map__37871,map__37871__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37875(cljs.core.rest(s__37876__$1)));
} else {
var G__38138 = cljs.core.rest(s__37876__$1);
s__37876__$1 = G__38138;
continue;
}
} else {
var G__38139 = cljs.core.rest(s__37876__$1);
s__37876__$1 = G__38139;
continue;
}
} else {
return null;
}
break;
}
});})(map__37873,map__37873__$1,sources,compiled,map__37871,map__37871__$1,msg,info,reload_info))
,null,null));
});})(map__37873,map__37873__$1,sources,compiled,map__37871,map__37871__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__37883_38141 = cljs.core.seq(warnings);
var chunk__37884_38142 = null;
var count__37885_38143 = (0);
var i__37886_38144 = (0);
while(true){
if((i__37886_38144 < count__37885_38143)){
var map__37891_38145 = chunk__37884_38142.cljs$core$IIndexed$_nth$arity$2(null,i__37886_38144);
var map__37891_38146__$1 = (((((!((map__37891_38145 == null))))?(((((map__37891_38145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37891_38145.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37891_38145):map__37891_38145);
var w_38147 = map__37891_38146__$1;
var msg_38148__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37891_38146__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37891_38146__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37891_38146__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37891_38146__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38151)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38149),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38150),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38148__$1)].join(''));


var G__38152 = seq__37883_38141;
var G__38153 = chunk__37884_38142;
var G__38154 = count__37885_38143;
var G__38155 = (i__37886_38144 + (1));
seq__37883_38141 = G__38152;
chunk__37884_38142 = G__38153;
count__37885_38143 = G__38154;
i__37886_38144 = G__38155;
continue;
} else {
var temp__5735__auto___38156 = cljs.core.seq(seq__37883_38141);
if(temp__5735__auto___38156){
var seq__37883_38157__$1 = temp__5735__auto___38156;
if(cljs.core.chunked_seq_QMARK_(seq__37883_38157__$1)){
var c__4550__auto___38158 = cljs.core.chunk_first(seq__37883_38157__$1);
var G__38159 = cljs.core.chunk_rest(seq__37883_38157__$1);
var G__38160 = c__4550__auto___38158;
var G__38161 = cljs.core.count(c__4550__auto___38158);
var G__38162 = (0);
seq__37883_38141 = G__38159;
chunk__37884_38142 = G__38160;
count__37885_38143 = G__38161;
i__37886_38144 = G__38162;
continue;
} else {
var map__37893_38163 = cljs.core.first(seq__37883_38157__$1);
var map__37893_38164__$1 = (((((!((map__37893_38163 == null))))?(((((map__37893_38163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37893_38163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37893_38163):map__37893_38163);
var w_38165 = map__37893_38164__$1;
var msg_38166__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37893_38164__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37893_38164__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37893_38164__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37893_38164__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38169)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38167),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38168),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38166__$1)].join(''));


var G__38171 = cljs.core.next(seq__37883_38157__$1);
var G__38172 = null;
var G__38173 = (0);
var G__38174 = (0);
seq__37883_38141 = G__38171;
chunk__37884_38142 = G__38172;
count__37885_38143 = G__38173;
i__37886_38144 = G__38174;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37873,map__37873__$1,sources,compiled,warnings,map__37871,map__37871__$1,msg,info,reload_info){
return (function (p__37895){
var map__37896 = p__37895;
var map__37896__$1 = (((((!((map__37896 == null))))?(((((map__37896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37896):map__37896);
var src = map__37896__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37896__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37896__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__37873,map__37873__$1,sources,compiled,warnings,map__37871,map__37871__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37873,map__37873__$1,sources,compiled,warnings,map__37871,map__37871__$1,msg,info,reload_info){
return (function (p__37899){
var map__37900 = p__37899;
var map__37900__$1 = (((((!((map__37900 == null))))?(((((map__37900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37900):map__37900);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37900__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__37873,map__37873__$1,sources,compiled,warnings,map__37871,map__37871__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37873,map__37873__$1,sources,compiled,warnings,map__37871,map__37871__$1,msg,info,reload_info){
return (function (p__37903){
var map__37904 = p__37903;
var map__37904__$1 = (((((!((map__37904 == null))))?(((((map__37904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37904):map__37904);
var rc = map__37904__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37904__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__37873,map__37873__$1,sources,compiled,warnings,map__37871,map__37871__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__37873,map__37873__$1,sources,compiled,warnings,map__37871,map__37871__$1,msg,info,reload_info){
return (function (p1__37869_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37869_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__37873,map__37873__$1,sources,compiled,warnings,map__37871,map__37871__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37909){
var map__37910 = p__37909;
var map__37910__$1 = (((((!((map__37910 == null))))?(((((map__37910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37910):map__37910);
var msg = map__37910__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37910__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37912 = cljs.core.seq(updates);
var chunk__37914 = null;
var count__37915 = (0);
var i__37916 = (0);
while(true){
if((i__37916 < count__37915)){
var path = chunk__37914.cljs$core$IIndexed$_nth$arity$2(null,i__37916);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37991_38182 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37994_38183 = null;
var count__37995_38184 = (0);
var i__37996_38185 = (0);
while(true){
if((i__37996_38185 < count__37995_38184)){
var node_38186 = chunk__37994_38183.cljs$core$IIndexed$_nth$arity$2(null,i__37996_38185);
var path_match_38187 = shadow.cljs.devtools.client.browser.match_paths(node_38186.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38187)){
var new_link_38188 = (function (){var G__38006 = node_38186.cloneNode(true);
G__38006.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38187),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38006;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38187], 0));

goog.dom.insertSiblingAfter(new_link_38188,node_38186);

goog.dom.removeNode(node_38186);


var G__38189 = seq__37991_38182;
var G__38190 = chunk__37994_38183;
var G__38191 = count__37995_38184;
var G__38192 = (i__37996_38185 + (1));
seq__37991_38182 = G__38189;
chunk__37994_38183 = G__38190;
count__37995_38184 = G__38191;
i__37996_38185 = G__38192;
continue;
} else {
var G__38193 = seq__37991_38182;
var G__38194 = chunk__37994_38183;
var G__38195 = count__37995_38184;
var G__38196 = (i__37996_38185 + (1));
seq__37991_38182 = G__38193;
chunk__37994_38183 = G__38194;
count__37995_38184 = G__38195;
i__37996_38185 = G__38196;
continue;
}
} else {
var temp__5735__auto___38197 = cljs.core.seq(seq__37991_38182);
if(temp__5735__auto___38197){
var seq__37991_38198__$1 = temp__5735__auto___38197;
if(cljs.core.chunked_seq_QMARK_(seq__37991_38198__$1)){
var c__4550__auto___38199 = cljs.core.chunk_first(seq__37991_38198__$1);
var G__38200 = cljs.core.chunk_rest(seq__37991_38198__$1);
var G__38201 = c__4550__auto___38199;
var G__38202 = cljs.core.count(c__4550__auto___38199);
var G__38203 = (0);
seq__37991_38182 = G__38200;
chunk__37994_38183 = G__38201;
count__37995_38184 = G__38202;
i__37996_38185 = G__38203;
continue;
} else {
var node_38204 = cljs.core.first(seq__37991_38198__$1);
var path_match_38205 = shadow.cljs.devtools.client.browser.match_paths(node_38204.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38205)){
var new_link_38207 = (function (){var G__38013 = node_38204.cloneNode(true);
G__38013.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38205),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38013;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38205], 0));

goog.dom.insertSiblingAfter(new_link_38207,node_38204);

goog.dom.removeNode(node_38204);


var G__38208 = cljs.core.next(seq__37991_38198__$1);
var G__38209 = null;
var G__38210 = (0);
var G__38211 = (0);
seq__37991_38182 = G__38208;
chunk__37994_38183 = G__38209;
count__37995_38184 = G__38210;
i__37996_38185 = G__38211;
continue;
} else {
var G__38212 = cljs.core.next(seq__37991_38198__$1);
var G__38213 = null;
var G__38214 = (0);
var G__38215 = (0);
seq__37991_38182 = G__38212;
chunk__37994_38183 = G__38213;
count__37995_38184 = G__38214;
i__37996_38185 = G__38215;
continue;
}
}
} else {
}
}
break;
}


var G__38216 = seq__37912;
var G__38217 = chunk__37914;
var G__38218 = count__37915;
var G__38219 = (i__37916 + (1));
seq__37912 = G__38216;
chunk__37914 = G__38217;
count__37915 = G__38218;
i__37916 = G__38219;
continue;
} else {
var G__38221 = seq__37912;
var G__38222 = chunk__37914;
var G__38223 = count__37915;
var G__38224 = (i__37916 + (1));
seq__37912 = G__38221;
chunk__37914 = G__38222;
count__37915 = G__38223;
i__37916 = G__38224;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37912);
if(temp__5735__auto__){
var seq__37912__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37912__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37912__$1);
var G__38226 = cljs.core.chunk_rest(seq__37912__$1);
var G__38227 = c__4550__auto__;
var G__38228 = cljs.core.count(c__4550__auto__);
var G__38229 = (0);
seq__37912 = G__38226;
chunk__37914 = G__38227;
count__37915 = G__38228;
i__37916 = G__38229;
continue;
} else {
var path = cljs.core.first(seq__37912__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38014_38230 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38017_38231 = null;
var count__38018_38232 = (0);
var i__38019_38233 = (0);
while(true){
if((i__38019_38233 < count__38018_38232)){
var node_38234 = chunk__38017_38231.cljs$core$IIndexed$_nth$arity$2(null,i__38019_38233);
var path_match_38235 = shadow.cljs.devtools.client.browser.match_paths(node_38234.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38235)){
var new_link_38236 = (function (){var G__38024 = node_38234.cloneNode(true);
G__38024.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38235),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38024;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38235], 0));

goog.dom.insertSiblingAfter(new_link_38236,node_38234);

goog.dom.removeNode(node_38234);


var G__38237 = seq__38014_38230;
var G__38238 = chunk__38017_38231;
var G__38239 = count__38018_38232;
var G__38240 = (i__38019_38233 + (1));
seq__38014_38230 = G__38237;
chunk__38017_38231 = G__38238;
count__38018_38232 = G__38239;
i__38019_38233 = G__38240;
continue;
} else {
var G__38241 = seq__38014_38230;
var G__38242 = chunk__38017_38231;
var G__38243 = count__38018_38232;
var G__38244 = (i__38019_38233 + (1));
seq__38014_38230 = G__38241;
chunk__38017_38231 = G__38242;
count__38018_38232 = G__38243;
i__38019_38233 = G__38244;
continue;
}
} else {
var temp__5735__auto___38245__$1 = cljs.core.seq(seq__38014_38230);
if(temp__5735__auto___38245__$1){
var seq__38014_38246__$1 = temp__5735__auto___38245__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38014_38246__$1)){
var c__4550__auto___38248 = cljs.core.chunk_first(seq__38014_38246__$1);
var G__38250 = cljs.core.chunk_rest(seq__38014_38246__$1);
var G__38251 = c__4550__auto___38248;
var G__38252 = cljs.core.count(c__4550__auto___38248);
var G__38253 = (0);
seq__38014_38230 = G__38250;
chunk__38017_38231 = G__38251;
count__38018_38232 = G__38252;
i__38019_38233 = G__38253;
continue;
} else {
var node_38256 = cljs.core.first(seq__38014_38246__$1);
var path_match_38257 = shadow.cljs.devtools.client.browser.match_paths(node_38256.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38257)){
var new_link_38258 = (function (){var G__38025 = node_38256.cloneNode(true);
G__38025.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38257),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38025;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38257], 0));

goog.dom.insertSiblingAfter(new_link_38258,node_38256);

goog.dom.removeNode(node_38256);


var G__38260 = cljs.core.next(seq__38014_38246__$1);
var G__38261 = null;
var G__38262 = (0);
var G__38263 = (0);
seq__38014_38230 = G__38260;
chunk__38017_38231 = G__38261;
count__38018_38232 = G__38262;
i__38019_38233 = G__38263;
continue;
} else {
var G__38264 = cljs.core.next(seq__38014_38246__$1);
var G__38265 = null;
var G__38266 = (0);
var G__38267 = (0);
seq__38014_38230 = G__38264;
chunk__38017_38231 = G__38265;
count__38018_38232 = G__38266;
i__38019_38233 = G__38267;
continue;
}
}
} else {
}
}
break;
}


var G__38268 = cljs.core.next(seq__37912__$1);
var G__38269 = null;
var G__38270 = (0);
var G__38271 = (0);
seq__37912 = G__38268;
chunk__37914 = G__38269;
count__37915 = G__38270;
i__37916 = G__38271;
continue;
} else {
var G__38275 = cljs.core.next(seq__37912__$1);
var G__38276 = null;
var G__38277 = (0);
var G__38278 = (0);
seq__37912 = G__38275;
chunk__37914 = G__38276;
count__37915 = G__38277;
i__37916 = G__38278;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__38034){
var map__38035 = p__38034;
var map__38035__$1 = (((((!((map__38035 == null))))?(((((map__38035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38035):map__38035);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38035__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38035__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__38035,map__38035__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__38035,map__38035__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__38038,done){
var map__38040 = p__38038;
var map__38040__$1 = (((((!((map__38040 == null))))?(((((map__38040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38040):map__38040);
var msg = map__38040__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38040__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38040__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38040__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38040__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__38040,map__38040__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__38042){
var map__38043 = p__38042;
var map__38043__$1 = (((((!((map__38043 == null))))?(((((map__38043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38043):map__38043);
var src = map__38043__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38043__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__38040,map__38040__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__38040,map__38040__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e38045){var e = e38045;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__38040,map__38040__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__38046,done){
var map__38047 = p__38046;
var map__38047__$1 = (((((!((map__38047 == null))))?(((((map__38047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38047):map__38047);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38047__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38047__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__38047,map__38047__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__38047,map__38047__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__38049){
var map__38050 = p__38049;
var map__38050__$1 = (((((!((map__38050 == null))))?(((((map__38050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38050):map__38050);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38050__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38050__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__38053,done){
var map__38054 = p__38053;
var map__38054__$1 = (((((!((map__38054 == null))))?(((((map__38054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38054):map__38054);
var msg = map__38054__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38054__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__38056_38310 = type;
var G__38056_38311__$1 = (((G__38056_38310 instanceof cljs.core.Keyword))?G__38056_38310.fqn:null);
switch (G__38056_38311__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__38061 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__38062 = ((function (G__38061){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__38061))
;
var G__38063 = "POST";
var G__38064 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__38065 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__38061,G__38062,G__38063,G__38064,G__38065);
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

return socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;
}catch (e38068){var e = e38068;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___38317 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___38317)){
var s_38318 = temp__5735__auto___38317;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_38318.onclose = ((function (s_38318,temp__5735__auto___38317){
return (function (e){
return null;
});})(s_38318,temp__5735__auto___38317))
;

s_38318.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
