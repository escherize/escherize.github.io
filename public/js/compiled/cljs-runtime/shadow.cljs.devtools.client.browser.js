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
var len__4730__auto___51266 = arguments.length;
var i__4731__auto___51267 = (0);
while(true){
if((i__4731__auto___51267 < len__4730__auto___51266)){
args__4736__auto__.push((arguments[i__4731__auto___51267]));

var G__51268 = (i__4731__auto___51267 + (1));
i__4731__auto___51267 = G__51268;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51111){
var G__51112 = cljs.core.first(seq51111);
var seq51111__$1 = cljs.core.next(seq51111);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51112,seq51111__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__51115){
var map__51116 = p__51115;
var map__51116__$1 = (((((!((map__51116 == null))))?(((((map__51116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51116):map__51116);
var src = map__51116__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51116__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51116__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__51119 = cljs.core.seq(sources);
var chunk__51120 = null;
var count__51121 = (0);
var i__51122 = (0);
while(true){
if((i__51122 < count__51121)){
var map__51130 = chunk__51120.cljs$core$IIndexed$_nth$arity$2(null,i__51122);
var map__51130__$1 = (((((!((map__51130 == null))))?(((((map__51130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51130):map__51130);
var src = map__51130__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51130__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51130__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51130__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51130__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e51132){var e_51269 = e51132;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51269);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51269.message)].join('')));
}

var G__51270 = seq__51119;
var G__51271 = chunk__51120;
var G__51272 = count__51121;
var G__51273 = (i__51122 + (1));
seq__51119 = G__51270;
chunk__51120 = G__51271;
count__51121 = G__51272;
i__51122 = G__51273;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51119);
if(temp__5735__auto__){
var seq__51119__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51119__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51119__$1);
var G__51274 = cljs.core.chunk_rest(seq__51119__$1);
var G__51275 = c__4550__auto__;
var G__51276 = cljs.core.count(c__4550__auto__);
var G__51277 = (0);
seq__51119 = G__51274;
chunk__51120 = G__51275;
count__51121 = G__51276;
i__51122 = G__51277;
continue;
} else {
var map__51133 = cljs.core.first(seq__51119__$1);
var map__51133__$1 = (((((!((map__51133 == null))))?(((((map__51133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51133):map__51133);
var src = map__51133__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51133__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51133__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51133__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51133__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e51135){var e_51278 = e51135;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51278);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51278.message)].join('')));
}

var G__51279 = cljs.core.next(seq__51119__$1);
var G__51280 = null;
var G__51281 = (0);
var G__51282 = (0);
seq__51119 = G__51279;
chunk__51120 = G__51280;
count__51121 = G__51281;
i__51122 = G__51282;
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
var seq__51136 = cljs.core.seq(js_requires);
var chunk__51137 = null;
var count__51138 = (0);
var i__51139 = (0);
while(true){
if((i__51139 < count__51138)){
var js_ns = chunk__51137.cljs$core$IIndexed$_nth$arity$2(null,i__51139);
var require_str_51283 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51283);


var G__51284 = seq__51136;
var G__51285 = chunk__51137;
var G__51286 = count__51138;
var G__51287 = (i__51139 + (1));
seq__51136 = G__51284;
chunk__51137 = G__51285;
count__51138 = G__51286;
i__51139 = G__51287;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51136);
if(temp__5735__auto__){
var seq__51136__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51136__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51136__$1);
var G__51288 = cljs.core.chunk_rest(seq__51136__$1);
var G__51289 = c__4550__auto__;
var G__51290 = cljs.core.count(c__4550__auto__);
var G__51291 = (0);
seq__51136 = G__51288;
chunk__51137 = G__51289;
count__51138 = G__51290;
i__51139 = G__51291;
continue;
} else {
var js_ns = cljs.core.first(seq__51136__$1);
var require_str_51292 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51292);


var G__51293 = cljs.core.next(seq__51136__$1);
var G__51294 = null;
var G__51295 = (0);
var G__51296 = (0);
seq__51136 = G__51293;
chunk__51137 = G__51294;
count__51138 = G__51295;
i__51139 = G__51296;
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
var G__51141 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__51141) : callback.call(null,G__51141));
} else {
var G__51142 = shadow.cljs.devtools.client.env.files_url();
var G__51143 = ((function (G__51142){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__51142))
;
var G__51144 = "POST";
var G__51145 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__51146 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__51142,G__51143,G__51144,G__51145,G__51146);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__51149){
var map__51150 = p__51149;
var map__51150__$1 = (((((!((map__51150 == null))))?(((((map__51150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51150):map__51150);
var msg = map__51150__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51150__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51150__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__51152 = info;
var map__51152__$1 = (((((!((map__51152 == null))))?(((((map__51152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51152):map__51152);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51152__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51152__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__51152,map__51152__$1,sources,compiled,map__51150,map__51150__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51154(s__51155){
return (new cljs.core.LazySeq(null,((function (map__51152,map__51152__$1,sources,compiled,map__51150,map__51150__$1,msg,info,reload_info){
return (function (){
var s__51155__$1 = s__51155;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__51155__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__51160 = cljs.core.first(xs__6292__auto__);
var map__51160__$1 = (((((!((map__51160 == null))))?(((((map__51160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51160):map__51160);
var src = map__51160__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51160__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51160__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__51155__$1,map__51160,map__51160__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51152,map__51152__$1,sources,compiled,map__51150,map__51150__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51154_$_iter__51156(s__51157){
return (new cljs.core.LazySeq(null,((function (s__51155__$1,map__51160,map__51160__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51152,map__51152__$1,sources,compiled,map__51150,map__51150__$1,msg,info,reload_info){
return (function (){
var s__51157__$1 = s__51157;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__51157__$1);
if(temp__5735__auto____$1){
var s__51157__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51157__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__51157__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__51159 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__51158 = (0);
while(true){
if((i__51158 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__51158);
cljs.core.chunk_append(b__51159,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51297 = (i__51158 + (1));
i__51158 = G__51297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51159),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51154_$_iter__51156(cljs.core.chunk_rest(s__51157__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51159),null);
}
} else {
var warning = cljs.core.first(s__51157__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51154_$_iter__51156(cljs.core.rest(s__51157__$2)));
}
} else {
return null;
}
break;
}
});})(s__51155__$1,map__51160,map__51160__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51152,map__51152__$1,sources,compiled,map__51150,map__51150__$1,msg,info,reload_info))
,null,null));
});})(s__51155__$1,map__51160,map__51160__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__51152,map__51152__$1,sources,compiled,map__51150,map__51150__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51154(cljs.core.rest(s__51155__$1)));
} else {
var G__51298 = cljs.core.rest(s__51155__$1);
s__51155__$1 = G__51298;
continue;
}
} else {
var G__51299 = cljs.core.rest(s__51155__$1);
s__51155__$1 = G__51299;
continue;
}
} else {
return null;
}
break;
}
});})(map__51152,map__51152__$1,sources,compiled,map__51150,map__51150__$1,msg,info,reload_info))
,null,null));
});})(map__51152,map__51152__$1,sources,compiled,map__51150,map__51150__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__51162_51300 = cljs.core.seq(warnings);
var chunk__51163_51301 = null;
var count__51164_51302 = (0);
var i__51165_51303 = (0);
while(true){
if((i__51165_51303 < count__51164_51302)){
var map__51170_51304 = chunk__51163_51301.cljs$core$IIndexed$_nth$arity$2(null,i__51165_51303);
var map__51170_51305__$1 = (((((!((map__51170_51304 == null))))?(((((map__51170_51304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51170_51304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51170_51304):map__51170_51304);
var w_51306 = map__51170_51305__$1;
var msg_51307__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51170_51305__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51170_51305__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51170_51305__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51170_51305__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51310)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51308),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51309),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51307__$1)].join(''));


var G__51311 = seq__51162_51300;
var G__51312 = chunk__51163_51301;
var G__51313 = count__51164_51302;
var G__51314 = (i__51165_51303 + (1));
seq__51162_51300 = G__51311;
chunk__51163_51301 = G__51312;
count__51164_51302 = G__51313;
i__51165_51303 = G__51314;
continue;
} else {
var temp__5735__auto___51315 = cljs.core.seq(seq__51162_51300);
if(temp__5735__auto___51315){
var seq__51162_51316__$1 = temp__5735__auto___51315;
if(cljs.core.chunked_seq_QMARK_(seq__51162_51316__$1)){
var c__4550__auto___51317 = cljs.core.chunk_first(seq__51162_51316__$1);
var G__51318 = cljs.core.chunk_rest(seq__51162_51316__$1);
var G__51319 = c__4550__auto___51317;
var G__51320 = cljs.core.count(c__4550__auto___51317);
var G__51321 = (0);
seq__51162_51300 = G__51318;
chunk__51163_51301 = G__51319;
count__51164_51302 = G__51320;
i__51165_51303 = G__51321;
continue;
} else {
var map__51172_51322 = cljs.core.first(seq__51162_51316__$1);
var map__51172_51323__$1 = (((((!((map__51172_51322 == null))))?(((((map__51172_51322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51172_51322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51172_51322):map__51172_51322);
var w_51324 = map__51172_51323__$1;
var msg_51325__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51172_51323__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51326 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51172_51323__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51327 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51172_51323__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51328 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51172_51323__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51328)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51326),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51327),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51325__$1)].join(''));


var G__51329 = cljs.core.next(seq__51162_51316__$1);
var G__51330 = null;
var G__51331 = (0);
var G__51332 = (0);
seq__51162_51300 = G__51329;
chunk__51163_51301 = G__51330;
count__51164_51302 = G__51331;
i__51165_51303 = G__51332;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__51152,map__51152__$1,sources,compiled,warnings,map__51150,map__51150__$1,msg,info,reload_info){
return (function (p__51174){
var map__51175 = p__51174;
var map__51175__$1 = (((((!((map__51175 == null))))?(((((map__51175.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51175.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51175):map__51175);
var src = map__51175__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51175__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51175__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__51152,map__51152__$1,sources,compiled,warnings,map__51150,map__51150__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__51152,map__51152__$1,sources,compiled,warnings,map__51150,map__51150__$1,msg,info,reload_info){
return (function (p__51177){
var map__51178 = p__51177;
var map__51178__$1 = (((((!((map__51178 == null))))?(((((map__51178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51178):map__51178);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51178__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__51152,map__51152__$1,sources,compiled,warnings,map__51150,map__51150__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__51152,map__51152__$1,sources,compiled,warnings,map__51150,map__51150__$1,msg,info,reload_info){
return (function (p__51180){
var map__51181 = p__51180;
var map__51181__$1 = (((((!((map__51181 == null))))?(((((map__51181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51181):map__51181);
var rc = map__51181__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51181__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__51152,map__51152__$1,sources,compiled,warnings,map__51150,map__51150__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__51152,map__51152__$1,sources,compiled,warnings,map__51150,map__51150__$1,msg,info,reload_info){
return (function (p1__51148_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51148_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__51152,map__51152__$1,sources,compiled,warnings,map__51150,map__51150__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__51183){
var map__51184 = p__51183;
var map__51184__$1 = (((((!((map__51184 == null))))?(((((map__51184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51184):map__51184);
var msg = map__51184__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51184__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__51186 = cljs.core.seq(updates);
var chunk__51188 = null;
var count__51189 = (0);
var i__51190 = (0);
while(true){
if((i__51190 < count__51189)){
var path = chunk__51188.cljs$core$IIndexed$_nth$arity$2(null,i__51190);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51216_51333 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51219_51334 = null;
var count__51220_51335 = (0);
var i__51221_51336 = (0);
while(true){
if((i__51221_51336 < count__51220_51335)){
var node_51337 = chunk__51219_51334.cljs$core$IIndexed$_nth$arity$2(null,i__51221_51336);
var path_match_51338 = shadow.cljs.devtools.client.browser.match_paths(node_51337.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51338)){
var new_link_51339 = (function (){var G__51226 = node_51337.cloneNode(true);
G__51226.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51338),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51226;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51338], 0));

goog.dom.insertSiblingAfter(new_link_51339,node_51337);

goog.dom.removeNode(node_51337);


var G__51340 = seq__51216_51333;
var G__51341 = chunk__51219_51334;
var G__51342 = count__51220_51335;
var G__51343 = (i__51221_51336 + (1));
seq__51216_51333 = G__51340;
chunk__51219_51334 = G__51341;
count__51220_51335 = G__51342;
i__51221_51336 = G__51343;
continue;
} else {
var G__51344 = seq__51216_51333;
var G__51345 = chunk__51219_51334;
var G__51346 = count__51220_51335;
var G__51347 = (i__51221_51336 + (1));
seq__51216_51333 = G__51344;
chunk__51219_51334 = G__51345;
count__51220_51335 = G__51346;
i__51221_51336 = G__51347;
continue;
}
} else {
var temp__5735__auto___51348 = cljs.core.seq(seq__51216_51333);
if(temp__5735__auto___51348){
var seq__51216_51349__$1 = temp__5735__auto___51348;
if(cljs.core.chunked_seq_QMARK_(seq__51216_51349__$1)){
var c__4550__auto___51350 = cljs.core.chunk_first(seq__51216_51349__$1);
var G__51351 = cljs.core.chunk_rest(seq__51216_51349__$1);
var G__51352 = c__4550__auto___51350;
var G__51353 = cljs.core.count(c__4550__auto___51350);
var G__51354 = (0);
seq__51216_51333 = G__51351;
chunk__51219_51334 = G__51352;
count__51220_51335 = G__51353;
i__51221_51336 = G__51354;
continue;
} else {
var node_51355 = cljs.core.first(seq__51216_51349__$1);
var path_match_51356 = shadow.cljs.devtools.client.browser.match_paths(node_51355.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51356)){
var new_link_51357 = (function (){var G__51227 = node_51355.cloneNode(true);
G__51227.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51356),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51227;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51356], 0));

goog.dom.insertSiblingAfter(new_link_51357,node_51355);

goog.dom.removeNode(node_51355);


var G__51358 = cljs.core.next(seq__51216_51349__$1);
var G__51359 = null;
var G__51360 = (0);
var G__51361 = (0);
seq__51216_51333 = G__51358;
chunk__51219_51334 = G__51359;
count__51220_51335 = G__51360;
i__51221_51336 = G__51361;
continue;
} else {
var G__51362 = cljs.core.next(seq__51216_51349__$1);
var G__51363 = null;
var G__51364 = (0);
var G__51365 = (0);
seq__51216_51333 = G__51362;
chunk__51219_51334 = G__51363;
count__51220_51335 = G__51364;
i__51221_51336 = G__51365;
continue;
}
}
} else {
}
}
break;
}


var G__51366 = seq__51186;
var G__51367 = chunk__51188;
var G__51368 = count__51189;
var G__51369 = (i__51190 + (1));
seq__51186 = G__51366;
chunk__51188 = G__51367;
count__51189 = G__51368;
i__51190 = G__51369;
continue;
} else {
var G__51370 = seq__51186;
var G__51371 = chunk__51188;
var G__51372 = count__51189;
var G__51373 = (i__51190 + (1));
seq__51186 = G__51370;
chunk__51188 = G__51371;
count__51189 = G__51372;
i__51190 = G__51373;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__51186);
if(temp__5735__auto__){
var seq__51186__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51186__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__51186__$1);
var G__51374 = cljs.core.chunk_rest(seq__51186__$1);
var G__51375 = c__4550__auto__;
var G__51376 = cljs.core.count(c__4550__auto__);
var G__51377 = (0);
seq__51186 = G__51374;
chunk__51188 = G__51375;
count__51189 = G__51376;
i__51190 = G__51377;
continue;
} else {
var path = cljs.core.first(seq__51186__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51228_51378 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51231_51379 = null;
var count__51232_51380 = (0);
var i__51233_51381 = (0);
while(true){
if((i__51233_51381 < count__51232_51380)){
var node_51382 = chunk__51231_51379.cljs$core$IIndexed$_nth$arity$2(null,i__51233_51381);
var path_match_51383 = shadow.cljs.devtools.client.browser.match_paths(node_51382.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51383)){
var new_link_51384 = (function (){var G__51238 = node_51382.cloneNode(true);
G__51238.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51383),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51238;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51383], 0));

goog.dom.insertSiblingAfter(new_link_51384,node_51382);

goog.dom.removeNode(node_51382);


var G__51385 = seq__51228_51378;
var G__51386 = chunk__51231_51379;
var G__51387 = count__51232_51380;
var G__51388 = (i__51233_51381 + (1));
seq__51228_51378 = G__51385;
chunk__51231_51379 = G__51386;
count__51232_51380 = G__51387;
i__51233_51381 = G__51388;
continue;
} else {
var G__51389 = seq__51228_51378;
var G__51390 = chunk__51231_51379;
var G__51391 = count__51232_51380;
var G__51392 = (i__51233_51381 + (1));
seq__51228_51378 = G__51389;
chunk__51231_51379 = G__51390;
count__51232_51380 = G__51391;
i__51233_51381 = G__51392;
continue;
}
} else {
var temp__5735__auto___51393__$1 = cljs.core.seq(seq__51228_51378);
if(temp__5735__auto___51393__$1){
var seq__51228_51394__$1 = temp__5735__auto___51393__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51228_51394__$1)){
var c__4550__auto___51395 = cljs.core.chunk_first(seq__51228_51394__$1);
var G__51396 = cljs.core.chunk_rest(seq__51228_51394__$1);
var G__51397 = c__4550__auto___51395;
var G__51398 = cljs.core.count(c__4550__auto___51395);
var G__51399 = (0);
seq__51228_51378 = G__51396;
chunk__51231_51379 = G__51397;
count__51232_51380 = G__51398;
i__51233_51381 = G__51399;
continue;
} else {
var node_51400 = cljs.core.first(seq__51228_51394__$1);
var path_match_51401 = shadow.cljs.devtools.client.browser.match_paths(node_51400.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51401)){
var new_link_51402 = (function (){var G__51239 = node_51400.cloneNode(true);
G__51239.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51401),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51239;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51401], 0));

goog.dom.insertSiblingAfter(new_link_51402,node_51400);

goog.dom.removeNode(node_51400);


var G__51403 = cljs.core.next(seq__51228_51394__$1);
var G__51404 = null;
var G__51405 = (0);
var G__51406 = (0);
seq__51228_51378 = G__51403;
chunk__51231_51379 = G__51404;
count__51232_51380 = G__51405;
i__51233_51381 = G__51406;
continue;
} else {
var G__51407 = cljs.core.next(seq__51228_51394__$1);
var G__51408 = null;
var G__51409 = (0);
var G__51410 = (0);
seq__51228_51378 = G__51407;
chunk__51231_51379 = G__51408;
count__51232_51380 = G__51409;
i__51233_51381 = G__51410;
continue;
}
}
} else {
}
}
break;
}


var G__51411 = cljs.core.next(seq__51186__$1);
var G__51412 = null;
var G__51413 = (0);
var G__51414 = (0);
seq__51186 = G__51411;
chunk__51188 = G__51412;
count__51189 = G__51413;
i__51190 = G__51414;
continue;
} else {
var G__51415 = cljs.core.next(seq__51186__$1);
var G__51416 = null;
var G__51417 = (0);
var G__51418 = (0);
seq__51186 = G__51415;
chunk__51188 = G__51416;
count__51189 = G__51417;
i__51190 = G__51418;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__51240){
var map__51241 = p__51240;
var map__51241__$1 = (((((!((map__51241 == null))))?(((((map__51241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51241):map__51241);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51241__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51241__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__51241,map__51241__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__51241,map__51241__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__51243,done){
var map__51244 = p__51243;
var map__51244__$1 = (((((!((map__51244 == null))))?(((((map__51244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51244):map__51244);
var msg = map__51244__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51244__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51244__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51244__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51244__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__51244,map__51244__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__51246){
var map__51247 = p__51246;
var map__51247__$1 = (((((!((map__51247 == null))))?(((((map__51247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51247):map__51247);
var src = map__51247__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51247__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__51244,map__51244__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__51244,map__51244__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e51249){var e = e51249;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__51244,map__51244__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__51250,done){
var map__51251 = p__51250;
var map__51251__$1 = (((((!((map__51251 == null))))?(((((map__51251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51251):map__51251);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51251__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51251__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__51251,map__51251__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__51251,map__51251__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__51253){
var map__51254 = p__51253;
var map__51254__$1 = (((((!((map__51254 == null))))?(((((map__51254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51254):map__51254);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51254__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51254__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__51256,done){
var map__51257 = p__51256;
var map__51257__$1 = (((((!((map__51257 == null))))?(((((map__51257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51257):map__51257);
var msg = map__51257__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51257__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__51259_51419 = type;
var G__51259_51420__$1 = (((G__51259_51419 instanceof cljs.core.Keyword))?G__51259_51419.fqn:null);
switch (G__51259_51420__$1) {
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
var G__51260 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__51261 = ((function (G__51260){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__51260))
;
var G__51262 = "POST";
var G__51263 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__51264 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__51260,G__51261,G__51262,G__51263,G__51264);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
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

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e51265){var e = e51265;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___51422 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___51422)){
var s_51423 = temp__5735__auto___51422;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_51423.onclose = ((function (s_51423,temp__5735__auto___51422){
return (function (e){
return null;
});})(s_51423,temp__5735__auto___51422))
;

s_51423.close();

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
