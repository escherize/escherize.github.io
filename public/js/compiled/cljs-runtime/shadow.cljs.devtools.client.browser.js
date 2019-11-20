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
var len__4730__auto___39566 = arguments.length;
var i__4731__auto___39567 = (0);
while(true){
if((i__4731__auto___39567 < len__4730__auto___39566)){
args__4736__auto__.push((arguments[i__4731__auto___39567]));

var G__39568 = (i__4731__auto___39567 + (1));
i__4731__auto___39567 = G__39568;
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
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq39413){
var G__39414 = cljs.core.first(seq39413);
var seq39413__$1 = cljs.core.next(seq39413);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39414,seq39413__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__39417){
var map__39418 = p__39417;
var map__39418__$1 = (((((!((map__39418 == null))))?(((((map__39418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39418):map__39418);
var src = map__39418__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39418__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39418__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__39420 = cljs.core.seq(sources);
var chunk__39421 = null;
var count__39422 = (0);
var i__39423 = (0);
while(true){
if((i__39423 < count__39422)){
var map__39430 = chunk__39421.cljs$core$IIndexed$_nth$arity$2(null,i__39423);
var map__39430__$1 = (((((!((map__39430 == null))))?(((((map__39430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39430.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39430):map__39430);
var src = map__39430__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39430__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39430__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39430__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39430__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e39432){var e_39569 = e39432;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39569);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39569.message)].join('')));
}

var G__39570 = seq__39420;
var G__39571 = chunk__39421;
var G__39572 = count__39422;
var G__39573 = (i__39423 + (1));
seq__39420 = G__39570;
chunk__39421 = G__39571;
count__39422 = G__39572;
i__39423 = G__39573;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39420);
if(temp__5735__auto__){
var seq__39420__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39420__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__39420__$1);
var G__39574 = cljs.core.chunk_rest(seq__39420__$1);
var G__39575 = c__4550__auto__;
var G__39576 = cljs.core.count(c__4550__auto__);
var G__39577 = (0);
seq__39420 = G__39574;
chunk__39421 = G__39575;
count__39422 = G__39576;
i__39423 = G__39577;
continue;
} else {
var map__39433 = cljs.core.first(seq__39420__$1);
var map__39433__$1 = (((((!((map__39433 == null))))?(((((map__39433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39433):map__39433);
var src = map__39433__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39433__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39433__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39433__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39433__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e39435){var e_39578 = e39435;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39578);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39578.message)].join('')));
}

var G__39579 = cljs.core.next(seq__39420__$1);
var G__39580 = null;
var G__39581 = (0);
var G__39582 = (0);
seq__39420 = G__39579;
chunk__39421 = G__39580;
count__39422 = G__39581;
i__39423 = G__39582;
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
var seq__39438 = cljs.core.seq(js_requires);
var chunk__39439 = null;
var count__39440 = (0);
var i__39441 = (0);
while(true){
if((i__39441 < count__39440)){
var js_ns = chunk__39439.cljs$core$IIndexed$_nth$arity$2(null,i__39441);
var require_str_39583 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39583);


var G__39584 = seq__39438;
var G__39585 = chunk__39439;
var G__39586 = count__39440;
var G__39587 = (i__39441 + (1));
seq__39438 = G__39584;
chunk__39439 = G__39585;
count__39440 = G__39586;
i__39441 = G__39587;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39438);
if(temp__5735__auto__){
var seq__39438__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39438__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__39438__$1);
var G__39588 = cljs.core.chunk_rest(seq__39438__$1);
var G__39589 = c__4550__auto__;
var G__39590 = cljs.core.count(c__4550__auto__);
var G__39591 = (0);
seq__39438 = G__39588;
chunk__39439 = G__39589;
count__39440 = G__39590;
i__39441 = G__39591;
continue;
} else {
var js_ns = cljs.core.first(seq__39438__$1);
var require_str_39592 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39592);


var G__39593 = cljs.core.next(seq__39438__$1);
var G__39594 = null;
var G__39595 = (0);
var G__39596 = (0);
seq__39438 = G__39593;
chunk__39439 = G__39594;
count__39440 = G__39595;
i__39441 = G__39596;
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
var G__39442 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__39442) : callback.call(null,G__39442));
} else {
var G__39443 = shadow.cljs.devtools.client.env.files_url();
var G__39444 = ((function (G__39443){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__39443))
;
var G__39445 = "POST";
var G__39446 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__39447 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__39443,G__39444,G__39445,G__39446,G__39447);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__39449){
var map__39450 = p__39449;
var map__39450__$1 = (((((!((map__39450 == null))))?(((((map__39450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39450):map__39450);
var msg = map__39450__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39450__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39450__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__39452 = info;
var map__39452__$1 = (((((!((map__39452 == null))))?(((((map__39452.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39452.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39452):map__39452);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39452__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39452__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__39452,map__39452__$1,sources,compiled,map__39450,map__39450__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39454(s__39455){
return (new cljs.core.LazySeq(null,((function (map__39452,map__39452__$1,sources,compiled,map__39450,map__39450__$1,msg,info,reload_info){
return (function (){
var s__39455__$1 = s__39455;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39455__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__39460 = cljs.core.first(xs__6292__auto__);
var map__39460__$1 = (((((!((map__39460 == null))))?(((((map__39460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39460):map__39460);
var src = map__39460__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39460__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39460__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__39455__$1,map__39460,map__39460__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39452,map__39452__$1,sources,compiled,map__39450,map__39450__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39454_$_iter__39456(s__39457){
return (new cljs.core.LazySeq(null,((function (s__39455__$1,map__39460,map__39460__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39452,map__39452__$1,sources,compiled,map__39450,map__39450__$1,msg,info,reload_info){
return (function (){
var s__39457__$1 = s__39457;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__39457__$1);
if(temp__5735__auto____$1){
var s__39457__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39457__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__39457__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__39459 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__39458 = (0);
while(true){
if((i__39458 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__39458);
cljs.core.chunk_append(b__39459,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39597 = (i__39458 + (1));
i__39458 = G__39597;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39459),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39454_$_iter__39456(cljs.core.chunk_rest(s__39457__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39459),null);
}
} else {
var warning = cljs.core.first(s__39457__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39454_$_iter__39456(cljs.core.rest(s__39457__$2)));
}
} else {
return null;
}
break;
}
});})(s__39455__$1,map__39460,map__39460__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39452,map__39452__$1,sources,compiled,map__39450,map__39450__$1,msg,info,reload_info))
,null,null));
});})(s__39455__$1,map__39460,map__39460__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__39452,map__39452__$1,sources,compiled,map__39450,map__39450__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__39454(cljs.core.rest(s__39455__$1)));
} else {
var G__39598 = cljs.core.rest(s__39455__$1);
s__39455__$1 = G__39598;
continue;
}
} else {
var G__39599 = cljs.core.rest(s__39455__$1);
s__39455__$1 = G__39599;
continue;
}
} else {
return null;
}
break;
}
});})(map__39452,map__39452__$1,sources,compiled,map__39450,map__39450__$1,msg,info,reload_info))
,null,null));
});})(map__39452,map__39452__$1,sources,compiled,map__39450,map__39450__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__39462_39600 = cljs.core.seq(warnings);
var chunk__39463_39601 = null;
var count__39464_39602 = (0);
var i__39465_39603 = (0);
while(true){
if((i__39465_39603 < count__39464_39602)){
var map__39470_39604 = chunk__39463_39601.cljs$core$IIndexed$_nth$arity$2(null,i__39465_39603);
var map__39470_39605__$1 = (((((!((map__39470_39604 == null))))?(((((map__39470_39604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39470_39604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39470_39604):map__39470_39604);
var w_39606 = map__39470_39605__$1;
var msg_39607__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39470_39605__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39608 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39470_39605__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39470_39605__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39470_39605__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39610)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39608),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39609),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39607__$1)].join(''));


var G__39611 = seq__39462_39600;
var G__39612 = chunk__39463_39601;
var G__39613 = count__39464_39602;
var G__39614 = (i__39465_39603 + (1));
seq__39462_39600 = G__39611;
chunk__39463_39601 = G__39612;
count__39464_39602 = G__39613;
i__39465_39603 = G__39614;
continue;
} else {
var temp__5735__auto___39615 = cljs.core.seq(seq__39462_39600);
if(temp__5735__auto___39615){
var seq__39462_39616__$1 = temp__5735__auto___39615;
if(cljs.core.chunked_seq_QMARK_(seq__39462_39616__$1)){
var c__4550__auto___39617 = cljs.core.chunk_first(seq__39462_39616__$1);
var G__39618 = cljs.core.chunk_rest(seq__39462_39616__$1);
var G__39619 = c__4550__auto___39617;
var G__39620 = cljs.core.count(c__4550__auto___39617);
var G__39621 = (0);
seq__39462_39600 = G__39618;
chunk__39463_39601 = G__39619;
count__39464_39602 = G__39620;
i__39465_39603 = G__39621;
continue;
} else {
var map__39472_39622 = cljs.core.first(seq__39462_39616__$1);
var map__39472_39623__$1 = (((((!((map__39472_39622 == null))))?(((((map__39472_39622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39472_39622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39472_39622):map__39472_39622);
var w_39624 = map__39472_39623__$1;
var msg_39625__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472_39623__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472_39623__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472_39623__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39472_39623__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39628)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39626),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39627),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39625__$1)].join(''));


var G__39629 = cljs.core.next(seq__39462_39616__$1);
var G__39630 = null;
var G__39631 = (0);
var G__39632 = (0);
seq__39462_39600 = G__39629;
chunk__39463_39601 = G__39630;
count__39464_39602 = G__39631;
i__39465_39603 = G__39632;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__39452,map__39452__$1,sources,compiled,warnings,map__39450,map__39450__$1,msg,info,reload_info){
return (function (p__39474){
var map__39475 = p__39474;
var map__39475__$1 = (((((!((map__39475 == null))))?(((((map__39475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39475):map__39475);
var src = map__39475__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39475__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39475__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__39452,map__39452__$1,sources,compiled,warnings,map__39450,map__39450__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__39452,map__39452__$1,sources,compiled,warnings,map__39450,map__39450__$1,msg,info,reload_info){
return (function (p__39477){
var map__39478 = p__39477;
var map__39478__$1 = (((((!((map__39478 == null))))?(((((map__39478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39478):map__39478);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39478__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__39452,map__39452__$1,sources,compiled,warnings,map__39450,map__39450__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__39452,map__39452__$1,sources,compiled,warnings,map__39450,map__39450__$1,msg,info,reload_info){
return (function (p__39480){
var map__39481 = p__39480;
var map__39481__$1 = (((((!((map__39481 == null))))?(((((map__39481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39481):map__39481);
var rc = map__39481__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39481__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__39452,map__39452__$1,sources,compiled,warnings,map__39450,map__39450__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__39452,map__39452__$1,sources,compiled,warnings,map__39450,map__39450__$1,msg,info,reload_info){
return (function (p1__39448_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__39448_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__39452,map__39452__$1,sources,compiled,warnings,map__39450,map__39450__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__39483){
var map__39484 = p__39483;
var map__39484__$1 = (((((!((map__39484 == null))))?(((((map__39484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39484):map__39484);
var msg = map__39484__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39484__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__39486 = cljs.core.seq(updates);
var chunk__39488 = null;
var count__39489 = (0);
var i__39490 = (0);
while(true){
if((i__39490 < count__39489)){
var path = chunk__39488.cljs$core$IIndexed$_nth$arity$2(null,i__39490);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39516_39633 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39519_39634 = null;
var count__39520_39635 = (0);
var i__39521_39636 = (0);
while(true){
if((i__39521_39636 < count__39520_39635)){
var node_39637 = chunk__39519_39634.cljs$core$IIndexed$_nth$arity$2(null,i__39521_39636);
var path_match_39638 = shadow.cljs.devtools.client.browser.match_paths(node_39637.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39638)){
var new_link_39639 = (function (){var G__39526 = node_39637.cloneNode(true);
G__39526.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39638),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39526;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39638], 0));

goog.dom.insertSiblingAfter(new_link_39639,node_39637);

goog.dom.removeNode(node_39637);


var G__39640 = seq__39516_39633;
var G__39641 = chunk__39519_39634;
var G__39642 = count__39520_39635;
var G__39643 = (i__39521_39636 + (1));
seq__39516_39633 = G__39640;
chunk__39519_39634 = G__39641;
count__39520_39635 = G__39642;
i__39521_39636 = G__39643;
continue;
} else {
var G__39644 = seq__39516_39633;
var G__39645 = chunk__39519_39634;
var G__39646 = count__39520_39635;
var G__39647 = (i__39521_39636 + (1));
seq__39516_39633 = G__39644;
chunk__39519_39634 = G__39645;
count__39520_39635 = G__39646;
i__39521_39636 = G__39647;
continue;
}
} else {
var temp__5735__auto___39648 = cljs.core.seq(seq__39516_39633);
if(temp__5735__auto___39648){
var seq__39516_39649__$1 = temp__5735__auto___39648;
if(cljs.core.chunked_seq_QMARK_(seq__39516_39649__$1)){
var c__4550__auto___39650 = cljs.core.chunk_first(seq__39516_39649__$1);
var G__39651 = cljs.core.chunk_rest(seq__39516_39649__$1);
var G__39652 = c__4550__auto___39650;
var G__39653 = cljs.core.count(c__4550__auto___39650);
var G__39654 = (0);
seq__39516_39633 = G__39651;
chunk__39519_39634 = G__39652;
count__39520_39635 = G__39653;
i__39521_39636 = G__39654;
continue;
} else {
var node_39655 = cljs.core.first(seq__39516_39649__$1);
var path_match_39656 = shadow.cljs.devtools.client.browser.match_paths(node_39655.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39656)){
var new_link_39657 = (function (){var G__39527 = node_39655.cloneNode(true);
G__39527.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39656),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39527;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39656], 0));

goog.dom.insertSiblingAfter(new_link_39657,node_39655);

goog.dom.removeNode(node_39655);


var G__39658 = cljs.core.next(seq__39516_39649__$1);
var G__39659 = null;
var G__39660 = (0);
var G__39661 = (0);
seq__39516_39633 = G__39658;
chunk__39519_39634 = G__39659;
count__39520_39635 = G__39660;
i__39521_39636 = G__39661;
continue;
} else {
var G__39662 = cljs.core.next(seq__39516_39649__$1);
var G__39663 = null;
var G__39664 = (0);
var G__39665 = (0);
seq__39516_39633 = G__39662;
chunk__39519_39634 = G__39663;
count__39520_39635 = G__39664;
i__39521_39636 = G__39665;
continue;
}
}
} else {
}
}
break;
}


var G__39666 = seq__39486;
var G__39667 = chunk__39488;
var G__39668 = count__39489;
var G__39669 = (i__39490 + (1));
seq__39486 = G__39666;
chunk__39488 = G__39667;
count__39489 = G__39668;
i__39490 = G__39669;
continue;
} else {
var G__39670 = seq__39486;
var G__39671 = chunk__39488;
var G__39672 = count__39489;
var G__39673 = (i__39490 + (1));
seq__39486 = G__39670;
chunk__39488 = G__39671;
count__39489 = G__39672;
i__39490 = G__39673;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39486);
if(temp__5735__auto__){
var seq__39486__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39486__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__39486__$1);
var G__39674 = cljs.core.chunk_rest(seq__39486__$1);
var G__39675 = c__4550__auto__;
var G__39676 = cljs.core.count(c__4550__auto__);
var G__39677 = (0);
seq__39486 = G__39674;
chunk__39488 = G__39675;
count__39489 = G__39676;
i__39490 = G__39677;
continue;
} else {
var path = cljs.core.first(seq__39486__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__39528_39678 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39531_39679 = null;
var count__39532_39680 = (0);
var i__39533_39681 = (0);
while(true){
if((i__39533_39681 < count__39532_39680)){
var node_39682 = chunk__39531_39679.cljs$core$IIndexed$_nth$arity$2(null,i__39533_39681);
var path_match_39683 = shadow.cljs.devtools.client.browser.match_paths(node_39682.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39683)){
var new_link_39684 = (function (){var G__39538 = node_39682.cloneNode(true);
G__39538.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39683),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39538;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39683], 0));

goog.dom.insertSiblingAfter(new_link_39684,node_39682);

goog.dom.removeNode(node_39682);


var G__39685 = seq__39528_39678;
var G__39686 = chunk__39531_39679;
var G__39687 = count__39532_39680;
var G__39688 = (i__39533_39681 + (1));
seq__39528_39678 = G__39685;
chunk__39531_39679 = G__39686;
count__39532_39680 = G__39687;
i__39533_39681 = G__39688;
continue;
} else {
var G__39689 = seq__39528_39678;
var G__39690 = chunk__39531_39679;
var G__39691 = count__39532_39680;
var G__39692 = (i__39533_39681 + (1));
seq__39528_39678 = G__39689;
chunk__39531_39679 = G__39690;
count__39532_39680 = G__39691;
i__39533_39681 = G__39692;
continue;
}
} else {
var temp__5735__auto___39693__$1 = cljs.core.seq(seq__39528_39678);
if(temp__5735__auto___39693__$1){
var seq__39528_39694__$1 = temp__5735__auto___39693__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39528_39694__$1)){
var c__4550__auto___39695 = cljs.core.chunk_first(seq__39528_39694__$1);
var G__39696 = cljs.core.chunk_rest(seq__39528_39694__$1);
var G__39697 = c__4550__auto___39695;
var G__39698 = cljs.core.count(c__4550__auto___39695);
var G__39699 = (0);
seq__39528_39678 = G__39696;
chunk__39531_39679 = G__39697;
count__39532_39680 = G__39698;
i__39533_39681 = G__39699;
continue;
} else {
var node_39700 = cljs.core.first(seq__39528_39694__$1);
var path_match_39701 = shadow.cljs.devtools.client.browser.match_paths(node_39700.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39701)){
var new_link_39702 = (function (){var G__39539 = node_39700.cloneNode(true);
G__39539.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39701),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39539;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39701], 0));

goog.dom.insertSiblingAfter(new_link_39702,node_39700);

goog.dom.removeNode(node_39700);


var G__39703 = cljs.core.next(seq__39528_39694__$1);
var G__39704 = null;
var G__39705 = (0);
var G__39706 = (0);
seq__39528_39678 = G__39703;
chunk__39531_39679 = G__39704;
count__39532_39680 = G__39705;
i__39533_39681 = G__39706;
continue;
} else {
var G__39707 = cljs.core.next(seq__39528_39694__$1);
var G__39708 = null;
var G__39709 = (0);
var G__39710 = (0);
seq__39528_39678 = G__39707;
chunk__39531_39679 = G__39708;
count__39532_39680 = G__39709;
i__39533_39681 = G__39710;
continue;
}
}
} else {
}
}
break;
}


var G__39711 = cljs.core.next(seq__39486__$1);
var G__39712 = null;
var G__39713 = (0);
var G__39714 = (0);
seq__39486 = G__39711;
chunk__39488 = G__39712;
count__39489 = G__39713;
i__39490 = G__39714;
continue;
} else {
var G__39715 = cljs.core.next(seq__39486__$1);
var G__39716 = null;
var G__39717 = (0);
var G__39718 = (0);
seq__39486 = G__39715;
chunk__39488 = G__39716;
count__39489 = G__39717;
i__39490 = G__39718;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__39540){
var map__39541 = p__39540;
var map__39541__$1 = (((((!((map__39541 == null))))?(((((map__39541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39541):map__39541);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39541__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39541__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__39541,map__39541__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__39541,map__39541__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__39543,done){
var map__39544 = p__39543;
var map__39544__$1 = (((((!((map__39544 == null))))?(((((map__39544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39544):map__39544);
var msg = map__39544__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39544__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39544__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39544__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39544__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__39544,map__39544__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__39546){
var map__39547 = p__39546;
var map__39547__$1 = (((((!((map__39547 == null))))?(((((map__39547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39547):map__39547);
var src = map__39547__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39547__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__39544,map__39544__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__39544,map__39544__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e39549){var e = e39549;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__39544,map__39544__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__39550,done){
var map__39551 = p__39550;
var map__39551__$1 = (((((!((map__39551 == null))))?(((((map__39551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39551):map__39551);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39551__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39551__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__39551,map__39551__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__39551,map__39551__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__39553){
var map__39554 = p__39553;
var map__39554__$1 = (((((!((map__39554 == null))))?(((((map__39554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39554):map__39554);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39554__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39554__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__39556,done){
var map__39557 = p__39556;
var map__39557__$1 = (((((!((map__39557 == null))))?(((((map__39557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39557):map__39557);
var msg = map__39557__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39557__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__39559_39719 = type;
var G__39559_39720__$1 = (((G__39559_39719 instanceof cljs.core.Keyword))?G__39559_39719.fqn:null);
switch (G__39559_39720__$1) {
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
var G__39560 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__39561 = ((function (G__39560){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__39560))
;
var G__39562 = "POST";
var G__39563 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__39564 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__39560,G__39561,G__39562,G__39563,G__39564);
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
}catch (e39565){var e = e39565;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___39722 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___39722)){
var s_39723 = temp__5735__auto___39722;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_39723.onclose = ((function (s_39723,temp__5735__auto___39722){
return (function (e){
return null;
});})(s_39723,temp__5735__auto___39722))
;

s_39723.close();

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
