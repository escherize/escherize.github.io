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
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42323 = arguments.length;
var i__4790__auto___42324 = (0);
while(true){
if((i__4790__auto___42324 < len__4789__auto___42323)){
args__4795__auto__.push((arguments[i__4790__auto___42324]));

var G__42325 = (i__4790__auto___42324 + (1));
i__4790__auto___42324 = G__42325;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq41945){
var G__41946 = cljs.core.first(seq41945);
var seq41945__$1 = cljs.core.next(seq41945);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41946,seq41945__$1);
}));

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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__41949){
var map__41950 = p__41949;
var map__41950__$1 = (((((!((map__41950 == null))))?(((((map__41950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41950):map__41950);
var src = map__41950__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41950__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41950__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__41952 = cljs.core.seq(sources);
var chunk__41953 = null;
var count__41954 = (0);
var i__41955 = (0);
while(true){
if((i__41955 < count__41954)){
var map__41968 = chunk__41953.cljs$core$IIndexed$_nth$arity$2(null,i__41955);
var map__41968__$1 = (((((!((map__41968 == null))))?(((((map__41968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41968):map__41968);
var src = map__41968__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41968__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41968__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41968__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41968__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e41970){var e_42342 = e41970;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42342);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42342.message)].join('')));
}

var G__42343 = seq__41952;
var G__42344 = chunk__41953;
var G__42345 = count__41954;
var G__42346 = (i__41955 + (1));
seq__41952 = G__42343;
chunk__41953 = G__42344;
count__41954 = G__42345;
i__41955 = G__42346;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41952);
if(temp__5735__auto__){
var seq__41952__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41952__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41952__$1);
var G__42347 = cljs.core.chunk_rest(seq__41952__$1);
var G__42348 = c__4609__auto__;
var G__42349 = cljs.core.count(c__4609__auto__);
var G__42350 = (0);
seq__41952 = G__42347;
chunk__41953 = G__42348;
count__41954 = G__42349;
i__41955 = G__42350;
continue;
} else {
var map__41984 = cljs.core.first(seq__41952__$1);
var map__41984__$1 = (((((!((map__41984 == null))))?(((((map__41984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41984):map__41984);
var src = map__41984__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41984__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41984__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41984__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41984__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e41986){var e_42351 = e41986;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42351);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42351.message)].join('')));
}

var G__42352 = cljs.core.next(seq__41952__$1);
var G__42353 = null;
var G__42354 = (0);
var G__42355 = (0);
seq__41952 = G__42352;
chunk__41953 = G__42353;
count__41954 = G__42354;
i__41955 = G__42355;
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
var seq__41989 = cljs.core.seq(js_requires);
var chunk__41990 = null;
var count__41991 = (0);
var i__41992 = (0);
while(true){
if((i__41992 < count__41991)){
var js_ns = chunk__41990.cljs$core$IIndexed$_nth$arity$2(null,i__41992);
var require_str_42356 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42356);


var G__42357 = seq__41989;
var G__42358 = chunk__41990;
var G__42359 = count__41991;
var G__42360 = (i__41992 + (1));
seq__41989 = G__42357;
chunk__41990 = G__42358;
count__41991 = G__42359;
i__41992 = G__42360;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41989);
if(temp__5735__auto__){
var seq__41989__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41989__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41989__$1);
var G__42361 = cljs.core.chunk_rest(seq__41989__$1);
var G__42362 = c__4609__auto__;
var G__42363 = cljs.core.count(c__4609__auto__);
var G__42364 = (0);
seq__41989 = G__42361;
chunk__41990 = G__42362;
count__41991 = G__42363;
i__41992 = G__42364;
continue;
} else {
var js_ns = cljs.core.first(seq__41989__$1);
var require_str_42365 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42365);


var G__42366 = cljs.core.next(seq__41989__$1);
var G__42367 = null;
var G__42368 = (0);
var G__42369 = (0);
seq__41989 = G__42366;
chunk__41990 = G__42367;
count__41991 = G__42368;
i__41992 = G__42369;
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
var G__41993 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__41993) : callback.call(null,G__41993));
} else {
var G__41994 = shadow.cljs.devtools.client.env.files_url();
var G__41995 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__41996 = "POST";
var G__41997 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__41998 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__41994,G__41995,G__41996,G__41997,G__41998);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__42000){
var map__42002 = p__42000;
var map__42002__$1 = (((((!((map__42002 == null))))?(((((map__42002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42002):map__42002);
var msg = map__42002__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42002__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42002__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__42005 = info;
var map__42005__$1 = (((((!((map__42005 == null))))?(((((map__42005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42005):map__42005);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42005__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42005__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42008(s__42009){
return (new cljs.core.LazySeq(null,(function (){
var s__42009__$1 = s__42009;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42009__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__42014 = cljs.core.first(xs__6292__auto__);
var map__42014__$1 = (((((!((map__42014 == null))))?(((((map__42014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42014):map__42014);
var src = map__42014__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42014__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42014__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__42009__$1,map__42014,map__42014__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42005,map__42005__$1,sources,compiled,map__42002,map__42002__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42008_$_iter__42010(s__42011){
return (new cljs.core.LazySeq(null,((function (s__42009__$1,map__42014,map__42014__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42005,map__42005__$1,sources,compiled,map__42002,map__42002__$1,msg,info,reload_info){
return (function (){
var s__42011__$1 = s__42011;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__42011__$1);
if(temp__5735__auto____$1){
var s__42011__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42011__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__42011__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__42013 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__42012 = (0);
while(true){
if((i__42012 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__42012);
cljs.core.chunk_append(b__42013,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42370 = (i__42012 + (1));
i__42012 = G__42370;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42013),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42008_$_iter__42010(cljs.core.chunk_rest(s__42011__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42013),null);
}
} else {
var warning = cljs.core.first(s__42011__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42008_$_iter__42010(cljs.core.rest(s__42011__$2)));
}
} else {
return null;
}
break;
}
});})(s__42009__$1,map__42014,map__42014__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42005,map__42005__$1,sources,compiled,map__42002,map__42002__$1,msg,info,reload_info))
,null,null));
});})(s__42009__$1,map__42014,map__42014__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42005,map__42005__$1,sources,compiled,map__42002,map__42002__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42008(cljs.core.rest(s__42009__$1)));
} else {
var G__42371 = cljs.core.rest(s__42009__$1);
s__42009__$1 = G__42371;
continue;
}
} else {
var G__42372 = cljs.core.rest(s__42009__$1);
s__42009__$1 = G__42372;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__42028_42373 = cljs.core.seq(warnings);
var chunk__42029_42374 = null;
var count__42030_42375 = (0);
var i__42031_42376 = (0);
while(true){
if((i__42031_42376 < count__42030_42375)){
var map__42036_42377 = chunk__42029_42374.cljs$core$IIndexed$_nth$arity$2(null,i__42031_42376);
var map__42036_42378__$1 = (((((!((map__42036_42377 == null))))?(((((map__42036_42377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42036_42377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42036_42377):map__42036_42377);
var w_42379 = map__42036_42378__$1;
var msg_42380__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42036_42378__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42036_42378__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42036_42378__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42036_42378__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42383)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42381),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42382),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42380__$1)].join(''));


var G__42384 = seq__42028_42373;
var G__42385 = chunk__42029_42374;
var G__42386 = count__42030_42375;
var G__42387 = (i__42031_42376 + (1));
seq__42028_42373 = G__42384;
chunk__42029_42374 = G__42385;
count__42030_42375 = G__42386;
i__42031_42376 = G__42387;
continue;
} else {
var temp__5735__auto___42388 = cljs.core.seq(seq__42028_42373);
if(temp__5735__auto___42388){
var seq__42028_42389__$1 = temp__5735__auto___42388;
if(cljs.core.chunked_seq_QMARK_(seq__42028_42389__$1)){
var c__4609__auto___42390 = cljs.core.chunk_first(seq__42028_42389__$1);
var G__42391 = cljs.core.chunk_rest(seq__42028_42389__$1);
var G__42392 = c__4609__auto___42390;
var G__42393 = cljs.core.count(c__4609__auto___42390);
var G__42394 = (0);
seq__42028_42373 = G__42391;
chunk__42029_42374 = G__42392;
count__42030_42375 = G__42393;
i__42031_42376 = G__42394;
continue;
} else {
var map__42040_42395 = cljs.core.first(seq__42028_42389__$1);
var map__42040_42396__$1 = (((((!((map__42040_42395 == null))))?(((((map__42040_42395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42040_42395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42040_42395):map__42040_42395);
var w_42397 = map__42040_42396__$1;
var msg_42398__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42040_42396__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42399 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42040_42396__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42040_42396__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42040_42396__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42401)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42399),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42400),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42398__$1)].join(''));


var G__42404 = cljs.core.next(seq__42028_42389__$1);
var G__42405 = null;
var G__42406 = (0);
var G__42407 = (0);
seq__42028_42373 = G__42404;
chunk__42029_42374 = G__42405;
count__42030_42375 = G__42406;
i__42031_42376 = G__42407;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__42048){
var map__42051 = p__42048;
var map__42051__$1 = (((((!((map__42051 == null))))?(((((map__42051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42051):map__42051);
var src = map__42051__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42051__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42051__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__42063){
var map__42064 = p__42063;
var map__42064__$1 = (((((!((map__42064 == null))))?(((((map__42064.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42064.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42064):map__42064);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42064__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__42067){
var map__42068 = p__42067;
var map__42068__$1 = (((((!((map__42068 == null))))?(((((map__42068.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42068.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42068):map__42068);
var rc = map__42068__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42068__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__41999_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__41999_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
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
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__42081){
var map__42082 = p__42081;
var map__42082__$1 = (((((!((map__42082 == null))))?(((((map__42082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42082):map__42082);
var msg = map__42082__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42082__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__42085 = cljs.core.seq(updates);
var chunk__42087 = null;
var count__42088 = (0);
var i__42089 = (0);
while(true){
if((i__42089 < count__42088)){
var path = chunk__42087.cljs$core$IIndexed$_nth$arity$2(null,i__42089);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42152_42420 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42155_42421 = null;
var count__42156_42422 = (0);
var i__42157_42423 = (0);
while(true){
if((i__42157_42423 < count__42156_42422)){
var node_42424 = chunk__42155_42421.cljs$core$IIndexed$_nth$arity$2(null,i__42157_42423);
var path_match_42425 = shadow.cljs.devtools.client.browser.match_paths(node_42424.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42425)){
var new_link_42426 = (function (){var G__42172 = node_42424.cloneNode(true);
G__42172.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42425),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42172;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42425], 0));

goog.dom.insertSiblingAfter(new_link_42426,node_42424);

goog.dom.removeNode(node_42424);


var G__42427 = seq__42152_42420;
var G__42428 = chunk__42155_42421;
var G__42429 = count__42156_42422;
var G__42430 = (i__42157_42423 + (1));
seq__42152_42420 = G__42427;
chunk__42155_42421 = G__42428;
count__42156_42422 = G__42429;
i__42157_42423 = G__42430;
continue;
} else {
var G__42431 = seq__42152_42420;
var G__42432 = chunk__42155_42421;
var G__42433 = count__42156_42422;
var G__42434 = (i__42157_42423 + (1));
seq__42152_42420 = G__42431;
chunk__42155_42421 = G__42432;
count__42156_42422 = G__42433;
i__42157_42423 = G__42434;
continue;
}
} else {
var temp__5735__auto___42435 = cljs.core.seq(seq__42152_42420);
if(temp__5735__auto___42435){
var seq__42152_42436__$1 = temp__5735__auto___42435;
if(cljs.core.chunked_seq_QMARK_(seq__42152_42436__$1)){
var c__4609__auto___42437 = cljs.core.chunk_first(seq__42152_42436__$1);
var G__42438 = cljs.core.chunk_rest(seq__42152_42436__$1);
var G__42439 = c__4609__auto___42437;
var G__42440 = cljs.core.count(c__4609__auto___42437);
var G__42441 = (0);
seq__42152_42420 = G__42438;
chunk__42155_42421 = G__42439;
count__42156_42422 = G__42440;
i__42157_42423 = G__42441;
continue;
} else {
var node_42442 = cljs.core.first(seq__42152_42436__$1);
var path_match_42443 = shadow.cljs.devtools.client.browser.match_paths(node_42442.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42443)){
var new_link_42444 = (function (){var G__42175 = node_42442.cloneNode(true);
G__42175.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42443),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42175;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42443], 0));

goog.dom.insertSiblingAfter(new_link_42444,node_42442);

goog.dom.removeNode(node_42442);


var G__42448 = cljs.core.next(seq__42152_42436__$1);
var G__42449 = null;
var G__42450 = (0);
var G__42451 = (0);
seq__42152_42420 = G__42448;
chunk__42155_42421 = G__42449;
count__42156_42422 = G__42450;
i__42157_42423 = G__42451;
continue;
} else {
var G__42452 = cljs.core.next(seq__42152_42436__$1);
var G__42453 = null;
var G__42454 = (0);
var G__42455 = (0);
seq__42152_42420 = G__42452;
chunk__42155_42421 = G__42453;
count__42156_42422 = G__42454;
i__42157_42423 = G__42455;
continue;
}
}
} else {
}
}
break;
}


var G__42456 = seq__42085;
var G__42457 = chunk__42087;
var G__42458 = count__42088;
var G__42459 = (i__42089 + (1));
seq__42085 = G__42456;
chunk__42087 = G__42457;
count__42088 = G__42458;
i__42089 = G__42459;
continue;
} else {
var G__42460 = seq__42085;
var G__42461 = chunk__42087;
var G__42462 = count__42088;
var G__42463 = (i__42089 + (1));
seq__42085 = G__42460;
chunk__42087 = G__42461;
count__42088 = G__42462;
i__42089 = G__42463;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42085);
if(temp__5735__auto__){
var seq__42085__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42085__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42085__$1);
var G__42464 = cljs.core.chunk_rest(seq__42085__$1);
var G__42465 = c__4609__auto__;
var G__42466 = cljs.core.count(c__4609__auto__);
var G__42467 = (0);
seq__42085 = G__42464;
chunk__42087 = G__42465;
count__42088 = G__42466;
i__42089 = G__42467;
continue;
} else {
var path = cljs.core.first(seq__42085__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42182_42468 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42185_42469 = null;
var count__42186_42470 = (0);
var i__42187_42471 = (0);
while(true){
if((i__42187_42471 < count__42186_42470)){
var node_42472 = chunk__42185_42469.cljs$core$IIndexed$_nth$arity$2(null,i__42187_42471);
var path_match_42473 = shadow.cljs.devtools.client.browser.match_paths(node_42472.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42473)){
var new_link_42474 = (function (){var G__42198 = node_42472.cloneNode(true);
G__42198.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42473),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42198;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42473], 0));

goog.dom.insertSiblingAfter(new_link_42474,node_42472);

goog.dom.removeNode(node_42472);


var G__42476 = seq__42182_42468;
var G__42477 = chunk__42185_42469;
var G__42478 = count__42186_42470;
var G__42479 = (i__42187_42471 + (1));
seq__42182_42468 = G__42476;
chunk__42185_42469 = G__42477;
count__42186_42470 = G__42478;
i__42187_42471 = G__42479;
continue;
} else {
var G__42480 = seq__42182_42468;
var G__42481 = chunk__42185_42469;
var G__42482 = count__42186_42470;
var G__42483 = (i__42187_42471 + (1));
seq__42182_42468 = G__42480;
chunk__42185_42469 = G__42481;
count__42186_42470 = G__42482;
i__42187_42471 = G__42483;
continue;
}
} else {
var temp__5735__auto___42484__$1 = cljs.core.seq(seq__42182_42468);
if(temp__5735__auto___42484__$1){
var seq__42182_42485__$1 = temp__5735__auto___42484__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42182_42485__$1)){
var c__4609__auto___42486 = cljs.core.chunk_first(seq__42182_42485__$1);
var G__42487 = cljs.core.chunk_rest(seq__42182_42485__$1);
var G__42488 = c__4609__auto___42486;
var G__42489 = cljs.core.count(c__4609__auto___42486);
var G__42490 = (0);
seq__42182_42468 = G__42487;
chunk__42185_42469 = G__42488;
count__42186_42470 = G__42489;
i__42187_42471 = G__42490;
continue;
} else {
var node_42491 = cljs.core.first(seq__42182_42485__$1);
var path_match_42492 = shadow.cljs.devtools.client.browser.match_paths(node_42491.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42492)){
var new_link_42493 = (function (){var G__42203 = node_42491.cloneNode(true);
G__42203.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42492),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42203;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42492], 0));

goog.dom.insertSiblingAfter(new_link_42493,node_42491);

goog.dom.removeNode(node_42491);


var G__42498 = cljs.core.next(seq__42182_42485__$1);
var G__42499 = null;
var G__42500 = (0);
var G__42501 = (0);
seq__42182_42468 = G__42498;
chunk__42185_42469 = G__42499;
count__42186_42470 = G__42500;
i__42187_42471 = G__42501;
continue;
} else {
var G__42502 = cljs.core.next(seq__42182_42485__$1);
var G__42503 = null;
var G__42504 = (0);
var G__42505 = (0);
seq__42182_42468 = G__42502;
chunk__42185_42469 = G__42503;
count__42186_42470 = G__42504;
i__42187_42471 = G__42505;
continue;
}
}
} else {
}
}
break;
}


var G__42506 = cljs.core.next(seq__42085__$1);
var G__42507 = null;
var G__42508 = (0);
var G__42509 = (0);
seq__42085 = G__42506;
chunk__42087 = G__42507;
count__42088 = G__42508;
i__42089 = G__42509;
continue;
} else {
var G__42514 = cljs.core.next(seq__42085__$1);
var G__42515 = null;
var G__42516 = (0);
var G__42517 = (0);
seq__42085 = G__42514;
chunk__42087 = G__42515;
count__42088 = G__42516;
i__42089 = G__42517;
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
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__42216){
var map__42217 = p__42216;
var map__42217__$1 = (((((!((map__42217 == null))))?(((((map__42217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42217):map__42217);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42217__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42217__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__42224,done){
var map__42226 = p__42224;
var map__42226__$1 = (((((!((map__42226 == null))))?(((((map__42226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42226):map__42226);
var msg = map__42226__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42226__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42226__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42226__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42226__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__42236){
var map__42237 = p__42236;
var map__42237__$1 = (((((!((map__42237 == null))))?(((((map__42237.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42237.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42237):map__42237);
var src = map__42237__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42237__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e42247){var e = e42247;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__42257,done){
var map__42258 = p__42257;
var map__42258__$1 = (((((!((map__42258 == null))))?(((((map__42258.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42258.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42258):map__42258);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42258__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42258__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__42267){
var map__42269 = p__42267;
var map__42269__$1 = (((((!((map__42269 == null))))?(((((map__42269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42269):map__42269);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42269__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42269__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__42278,done){
var map__42281 = p__42278;
var map__42281__$1 = (((((!((map__42281 == null))))?(((((map__42281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42281):map__42281);
var msg = map__42281__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42281__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__42287_42527 = type;
var G__42287_42528__$1 = (((G__42287_42527 instanceof cljs.core.Keyword))?G__42287_42527.fqn:null);
switch (G__42287_42528__$1) {
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
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

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
var G__42288 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__42289 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__42290 = "POST";
var G__42291 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__42292 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__42288,G__42289,G__42290,G__42291,G__42292);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__42304 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__42303 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__42303.cljs$core$IFn$_invoke$arity$1 ? fexpr__42303.cljs$core$IFn$_invoke$arity$1(G__42304) : fexpr__42303.call(null,G__42304));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e42310){var e = e42310;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___42540 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___42540)){
var s_42541 = temp__5735__auto___42540;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_42541.onclose = (function (e){
return null;
}));

s_42541.close();

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

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
