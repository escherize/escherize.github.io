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
var len__4730__auto___37742 = arguments.length;
var i__4731__auto___37743 = (0);
while(true){
if((i__4731__auto___37743 < len__4730__auto___37742)){
args__4736__auto__.push((arguments[i__4731__auto___37743]));

var G__37744 = (i__4731__auto___37743 + (1));
i__4731__auto___37743 = G__37744;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37457){
var G__37458 = cljs.core.first(seq37457);
var seq37457__$1 = cljs.core.next(seq37457);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37458,seq37457__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5718__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5718__auto__)){
var s = temp__5718__auto__;
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__37490){
var map__37492 = p__37490;
var map__37492__$1 = (((((!((map__37492 == null))))?(((((map__37492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37492):map__37492);
var src = map__37492__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37492__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37492__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__37503 = cljs.core.seq(sources);
var chunk__37504 = null;
var count__37505 = (0);
var i__37506 = (0);
while(true){
if((i__37506 < count__37505)){
var map__37525 = chunk__37504.cljs$core$IIndexed$_nth$arity$2(null,i__37506);
var map__37525__$1 = (((((!((map__37525 == null))))?(((((map__37525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37525):map__37525);
var src = map__37525__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37525__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37525__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37525__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37525__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37745 = seq__37503;
var G__37746 = chunk__37504;
var G__37747 = count__37505;
var G__37748 = (i__37506 + (1));
seq__37503 = G__37745;
chunk__37504 = G__37746;
count__37505 = G__37747;
i__37506 = G__37748;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37503);
if(temp__5720__auto__){
var seq__37503__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37503__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37503__$1);
var G__37749 = cljs.core.chunk_rest(seq__37503__$1);
var G__37750 = c__4550__auto__;
var G__37751 = cljs.core.count(c__4550__auto__);
var G__37752 = (0);
seq__37503 = G__37749;
chunk__37504 = G__37750;
count__37505 = G__37751;
i__37506 = G__37752;
continue;
} else {
var map__37532 = cljs.core.first(seq__37503__$1);
var map__37532__$1 = (((((!((map__37532 == null))))?(((((map__37532.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37532.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37532):map__37532);
var src = map__37532__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37532__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37532__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37532__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37532__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37753 = cljs.core.next(seq__37503__$1);
var G__37754 = null;
var G__37755 = (0);
var G__37756 = (0);
seq__37503 = G__37753;
chunk__37504 = G__37754;
count__37505 = G__37755;
i__37506 = G__37756;
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
var seq__37538 = cljs.core.seq(js_requires);
var chunk__37539 = null;
var count__37540 = (0);
var i__37541 = (0);
while(true){
if((i__37541 < count__37540)){
var js_ns = chunk__37539.cljs$core$IIndexed$_nth$arity$2(null,i__37541);
var require_str_37757 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37757);


var G__37758 = seq__37538;
var G__37759 = chunk__37539;
var G__37760 = count__37540;
var G__37761 = (i__37541 + (1));
seq__37538 = G__37758;
chunk__37539 = G__37759;
count__37540 = G__37760;
i__37541 = G__37761;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37538);
if(temp__5720__auto__){
var seq__37538__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37538__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37538__$1);
var G__37762 = cljs.core.chunk_rest(seq__37538__$1);
var G__37763 = c__4550__auto__;
var G__37764 = cljs.core.count(c__4550__auto__);
var G__37765 = (0);
seq__37538 = G__37762;
chunk__37539 = G__37763;
count__37540 = G__37764;
i__37541 = G__37765;
continue;
} else {
var js_ns = cljs.core.first(seq__37538__$1);
var require_str_37766 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37766);


var G__37767 = cljs.core.next(seq__37538__$1);
var G__37768 = null;
var G__37769 = (0);
var G__37770 = (0);
seq__37538 = G__37767;
chunk__37539 = G__37768;
count__37540 = G__37769;
i__37541 = G__37770;
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
var G__37544 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__37544) : callback.call(null,G__37544));
} else {
var G__37545 = shadow.cljs.devtools.client.env.files_url();
var G__37546 = ((function (G__37545){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__37545))
;
var G__37547 = "POST";
var G__37548 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__37549 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37545,G__37546,G__37547,G__37548,G__37549);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37552){
var map__37554 = p__37552;
var map__37554__$1 = (((((!((map__37554 == null))))?(((((map__37554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37554):map__37554);
var msg = map__37554__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37554__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37554__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37556 = info;
var map__37556__$1 = (((((!((map__37556 == null))))?(((((map__37556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37556):map__37556);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37556__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37556__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__37556,map__37556__$1,sources,compiled,map__37554,map__37554__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37559(s__37560){
return (new cljs.core.LazySeq(null,((function (map__37556,map__37556__$1,sources,compiled,map__37554,map__37554__$1,msg,info,reload_info){
return (function (){
var s__37560__$1 = s__37560;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__37560__$1);
if(temp__5720__auto__){
var xs__6277__auto__ = temp__5720__auto__;
var map__37566 = cljs.core.first(xs__6277__auto__);
var map__37566__$1 = (((((!((map__37566 == null))))?(((((map__37566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37566.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37566):map__37566);
var src = map__37566__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37566__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37566__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__37560__$1,map__37566,map__37566__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37556,map__37556__$1,sources,compiled,map__37554,map__37554__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37559_$_iter__37561(s__37562){
return (new cljs.core.LazySeq(null,((function (s__37560__$1,map__37566,map__37566__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37556,map__37556__$1,sources,compiled,map__37554,map__37554__$1,msg,info,reload_info){
return (function (){
var s__37562__$1 = s__37562;
while(true){
var temp__5720__auto____$1 = cljs.core.seq(s__37562__$1);
if(temp__5720__auto____$1){
var s__37562__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37562__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37562__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37564 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37563 = (0);
while(true){
if((i__37563 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37563);
cljs.core.chunk_append(b__37564,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37771 = (i__37563 + (1));
i__37563 = G__37771;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37564),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37559_$_iter__37561(cljs.core.chunk_rest(s__37562__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37564),null);
}
} else {
var warning = cljs.core.first(s__37562__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37559_$_iter__37561(cljs.core.rest(s__37562__$2)));
}
} else {
return null;
}
break;
}
});})(s__37560__$1,map__37566,map__37566__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37556,map__37556__$1,sources,compiled,map__37554,map__37554__$1,msg,info,reload_info))
,null,null));
});})(s__37560__$1,map__37566,map__37566__$1,src,resource_name,warnings,xs__6277__auto__,temp__5720__auto__,map__37556,map__37556__$1,sources,compiled,map__37554,map__37554__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37559(cljs.core.rest(s__37560__$1)));
} else {
var G__37772 = cljs.core.rest(s__37560__$1);
s__37560__$1 = G__37772;
continue;
}
} else {
var G__37773 = cljs.core.rest(s__37560__$1);
s__37560__$1 = G__37773;
continue;
}
} else {
return null;
}
break;
}
});})(map__37556,map__37556__$1,sources,compiled,map__37554,map__37554__$1,msg,info,reload_info))
,null,null));
});})(map__37556,map__37556__$1,sources,compiled,map__37554,map__37554__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__37572_37774 = cljs.core.seq(warnings);
var chunk__37573_37775 = null;
var count__37574_37776 = (0);
var i__37575_37777 = (0);
while(true){
if((i__37575_37777 < count__37574_37776)){
var map__37581_37778 = chunk__37573_37775.cljs$core$IIndexed$_nth$arity$2(null,i__37575_37777);
var map__37581_37779__$1 = (((((!((map__37581_37778 == null))))?(((((map__37581_37778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37581_37778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37581_37778):map__37581_37778);
var w_37780 = map__37581_37779__$1;
var msg_37781__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37581_37779__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37581_37779__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37581_37779__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37581_37779__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37784)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37782),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37783),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37781__$1)].join(''));


var G__37785 = seq__37572_37774;
var G__37786 = chunk__37573_37775;
var G__37787 = count__37574_37776;
var G__37788 = (i__37575_37777 + (1));
seq__37572_37774 = G__37785;
chunk__37573_37775 = G__37786;
count__37574_37776 = G__37787;
i__37575_37777 = G__37788;
continue;
} else {
var temp__5720__auto___37789 = cljs.core.seq(seq__37572_37774);
if(temp__5720__auto___37789){
var seq__37572_37790__$1 = temp__5720__auto___37789;
if(cljs.core.chunked_seq_QMARK_(seq__37572_37790__$1)){
var c__4550__auto___37791 = cljs.core.chunk_first(seq__37572_37790__$1);
var G__37792 = cljs.core.chunk_rest(seq__37572_37790__$1);
var G__37793 = c__4550__auto___37791;
var G__37794 = cljs.core.count(c__4550__auto___37791);
var G__37795 = (0);
seq__37572_37774 = G__37792;
chunk__37573_37775 = G__37793;
count__37574_37776 = G__37794;
i__37575_37777 = G__37795;
continue;
} else {
var map__37584_37796 = cljs.core.first(seq__37572_37790__$1);
var map__37584_37797__$1 = (((((!((map__37584_37796 == null))))?(((((map__37584_37796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37584_37796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37584_37796):map__37584_37796);
var w_37798 = map__37584_37797__$1;
var msg_37799__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37584_37797__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37584_37797__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37584_37797__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37584_37797__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37802)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37800),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37801),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37799__$1)].join(''));


var G__37803 = cljs.core.next(seq__37572_37790__$1);
var G__37804 = null;
var G__37805 = (0);
var G__37806 = (0);
seq__37572_37774 = G__37803;
chunk__37573_37775 = G__37804;
count__37574_37776 = G__37805;
i__37575_37777 = G__37806;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37556,map__37556__$1,sources,compiled,warnings,map__37554,map__37554__$1,msg,info,reload_info){
return (function (p__37592){
var map__37593 = p__37592;
var map__37593__$1 = (((((!((map__37593 == null))))?(((((map__37593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37593):map__37593);
var src = map__37593__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37593__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37593__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__37556,map__37556__$1,sources,compiled,warnings,map__37554,map__37554__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37556,map__37556__$1,sources,compiled,warnings,map__37554,map__37554__$1,msg,info,reload_info){
return (function (p__37597){
var map__37598 = p__37597;
var map__37598__$1 = (((((!((map__37598 == null))))?(((((map__37598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37598):map__37598);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37598__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__37556,map__37556__$1,sources,compiled,warnings,map__37554,map__37554__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37556,map__37556__$1,sources,compiled,warnings,map__37554,map__37554__$1,msg,info,reload_info){
return (function (p__37601){
var map__37602 = p__37601;
var map__37602__$1 = (((((!((map__37602 == null))))?(((((map__37602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37602):map__37602);
var rc = map__37602__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37602__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__37556,map__37556__$1,sources,compiled,warnings,map__37554,map__37554__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__37556,map__37556__$1,sources,compiled,warnings,map__37554,map__37554__$1,msg,info,reload_info){
return (function (p1__37550_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37550_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__37556,map__37556__$1,sources,compiled,warnings,map__37554,map__37554__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37616){
var map__37617 = p__37616;
var map__37617__$1 = (((((!((map__37617 == null))))?(((((map__37617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37617):map__37617);
var msg = map__37617__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37617__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37619 = cljs.core.seq(updates);
var chunk__37621 = null;
var count__37622 = (0);
var i__37623 = (0);
while(true){
if((i__37623 < count__37622)){
var path = chunk__37621.cljs$core$IIndexed$_nth$arity$2(null,i__37623);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37662_37807 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37665_37808 = null;
var count__37666_37809 = (0);
var i__37667_37810 = (0);
while(true){
if((i__37667_37810 < count__37666_37809)){
var node_37811 = chunk__37665_37808.cljs$core$IIndexed$_nth$arity$2(null,i__37667_37810);
var path_match_37812 = shadow.cljs.devtools.client.browser.match_paths(node_37811.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37812)){
var new_link_37813 = (function (){var G__37673 = node_37811.cloneNode(true);
G__37673.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37812),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37673;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37812], 0));

goog.dom.insertSiblingAfter(new_link_37813,node_37811);

goog.dom.removeNode(node_37811);


var G__37814 = seq__37662_37807;
var G__37815 = chunk__37665_37808;
var G__37816 = count__37666_37809;
var G__37817 = (i__37667_37810 + (1));
seq__37662_37807 = G__37814;
chunk__37665_37808 = G__37815;
count__37666_37809 = G__37816;
i__37667_37810 = G__37817;
continue;
} else {
var G__37818 = seq__37662_37807;
var G__37819 = chunk__37665_37808;
var G__37820 = count__37666_37809;
var G__37821 = (i__37667_37810 + (1));
seq__37662_37807 = G__37818;
chunk__37665_37808 = G__37819;
count__37666_37809 = G__37820;
i__37667_37810 = G__37821;
continue;
}
} else {
var temp__5720__auto___37822 = cljs.core.seq(seq__37662_37807);
if(temp__5720__auto___37822){
var seq__37662_37823__$1 = temp__5720__auto___37822;
if(cljs.core.chunked_seq_QMARK_(seq__37662_37823__$1)){
var c__4550__auto___37824 = cljs.core.chunk_first(seq__37662_37823__$1);
var G__37825 = cljs.core.chunk_rest(seq__37662_37823__$1);
var G__37826 = c__4550__auto___37824;
var G__37827 = cljs.core.count(c__4550__auto___37824);
var G__37828 = (0);
seq__37662_37807 = G__37825;
chunk__37665_37808 = G__37826;
count__37666_37809 = G__37827;
i__37667_37810 = G__37828;
continue;
} else {
var node_37829 = cljs.core.first(seq__37662_37823__$1);
var path_match_37830 = shadow.cljs.devtools.client.browser.match_paths(node_37829.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37830)){
var new_link_37831 = (function (){var G__37674 = node_37829.cloneNode(true);
G__37674.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37830),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37674;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37830], 0));

goog.dom.insertSiblingAfter(new_link_37831,node_37829);

goog.dom.removeNode(node_37829);


var G__37832 = cljs.core.next(seq__37662_37823__$1);
var G__37833 = null;
var G__37834 = (0);
var G__37835 = (0);
seq__37662_37807 = G__37832;
chunk__37665_37808 = G__37833;
count__37666_37809 = G__37834;
i__37667_37810 = G__37835;
continue;
} else {
var G__37836 = cljs.core.next(seq__37662_37823__$1);
var G__37837 = null;
var G__37838 = (0);
var G__37839 = (0);
seq__37662_37807 = G__37836;
chunk__37665_37808 = G__37837;
count__37666_37809 = G__37838;
i__37667_37810 = G__37839;
continue;
}
}
} else {
}
}
break;
}


var G__37840 = seq__37619;
var G__37841 = chunk__37621;
var G__37842 = count__37622;
var G__37843 = (i__37623 + (1));
seq__37619 = G__37840;
chunk__37621 = G__37841;
count__37622 = G__37842;
i__37623 = G__37843;
continue;
} else {
var G__37844 = seq__37619;
var G__37845 = chunk__37621;
var G__37846 = count__37622;
var G__37847 = (i__37623 + (1));
seq__37619 = G__37844;
chunk__37621 = G__37845;
count__37622 = G__37846;
i__37623 = G__37847;
continue;
}
} else {
var temp__5720__auto__ = cljs.core.seq(seq__37619);
if(temp__5720__auto__){
var seq__37619__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37619__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37619__$1);
var G__37848 = cljs.core.chunk_rest(seq__37619__$1);
var G__37849 = c__4550__auto__;
var G__37850 = cljs.core.count(c__4550__auto__);
var G__37851 = (0);
seq__37619 = G__37848;
chunk__37621 = G__37849;
count__37622 = G__37850;
i__37623 = G__37851;
continue;
} else {
var path = cljs.core.first(seq__37619__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37675_37852 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37678_37853 = null;
var count__37679_37854 = (0);
var i__37680_37855 = (0);
while(true){
if((i__37680_37855 < count__37679_37854)){
var node_37856 = chunk__37678_37853.cljs$core$IIndexed$_nth$arity$2(null,i__37680_37855);
var path_match_37857 = shadow.cljs.devtools.client.browser.match_paths(node_37856.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37857)){
var new_link_37858 = (function (){var G__37687 = node_37856.cloneNode(true);
G__37687.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37857),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37687;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37857], 0));

goog.dom.insertSiblingAfter(new_link_37858,node_37856);

goog.dom.removeNode(node_37856);


var G__37859 = seq__37675_37852;
var G__37860 = chunk__37678_37853;
var G__37861 = count__37679_37854;
var G__37862 = (i__37680_37855 + (1));
seq__37675_37852 = G__37859;
chunk__37678_37853 = G__37860;
count__37679_37854 = G__37861;
i__37680_37855 = G__37862;
continue;
} else {
var G__37863 = seq__37675_37852;
var G__37864 = chunk__37678_37853;
var G__37865 = count__37679_37854;
var G__37866 = (i__37680_37855 + (1));
seq__37675_37852 = G__37863;
chunk__37678_37853 = G__37864;
count__37679_37854 = G__37865;
i__37680_37855 = G__37866;
continue;
}
} else {
var temp__5720__auto___37867__$1 = cljs.core.seq(seq__37675_37852);
if(temp__5720__auto___37867__$1){
var seq__37675_37868__$1 = temp__5720__auto___37867__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37675_37868__$1)){
var c__4550__auto___37869 = cljs.core.chunk_first(seq__37675_37868__$1);
var G__37870 = cljs.core.chunk_rest(seq__37675_37868__$1);
var G__37871 = c__4550__auto___37869;
var G__37872 = cljs.core.count(c__4550__auto___37869);
var G__37873 = (0);
seq__37675_37852 = G__37870;
chunk__37678_37853 = G__37871;
count__37679_37854 = G__37872;
i__37680_37855 = G__37873;
continue;
} else {
var node_37874 = cljs.core.first(seq__37675_37868__$1);
var path_match_37875 = shadow.cljs.devtools.client.browser.match_paths(node_37874.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37875)){
var new_link_37876 = (function (){var G__37688 = node_37874.cloneNode(true);
G__37688.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37875),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37688;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37875], 0));

goog.dom.insertSiblingAfter(new_link_37876,node_37874);

goog.dom.removeNode(node_37874);


var G__37877 = cljs.core.next(seq__37675_37868__$1);
var G__37878 = null;
var G__37879 = (0);
var G__37880 = (0);
seq__37675_37852 = G__37877;
chunk__37678_37853 = G__37878;
count__37679_37854 = G__37879;
i__37680_37855 = G__37880;
continue;
} else {
var G__37881 = cljs.core.next(seq__37675_37868__$1);
var G__37882 = null;
var G__37883 = (0);
var G__37884 = (0);
seq__37675_37852 = G__37881;
chunk__37678_37853 = G__37882;
count__37679_37854 = G__37883;
i__37680_37855 = G__37884;
continue;
}
}
} else {
}
}
break;
}


var G__37885 = cljs.core.next(seq__37619__$1);
var G__37886 = null;
var G__37887 = (0);
var G__37888 = (0);
seq__37619 = G__37885;
chunk__37621 = G__37886;
count__37622 = G__37887;
i__37623 = G__37888;
continue;
} else {
var G__37889 = cljs.core.next(seq__37619__$1);
var G__37890 = null;
var G__37891 = (0);
var G__37892 = (0);
seq__37619 = G__37889;
chunk__37621 = G__37890;
count__37622 = G__37891;
i__37623 = G__37892;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37693){
var map__37694 = p__37693;
var map__37694__$1 = (((((!((map__37694 == null))))?(((((map__37694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37694):map__37694);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37694__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37694__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__37694,map__37694__$1,id,js){
return (function (){
return eval(js);
});})(map__37694,map__37694__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37698){
var map__37699 = p__37698;
var map__37699__$1 = (((((!((map__37699 == null))))?(((((map__37699.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37699.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37699):map__37699);
var msg = map__37699__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37699__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37699__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37699__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37699__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37699,map__37699__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__37702){
var map__37703 = p__37702;
var map__37703__$1 = (((((!((map__37703 == null))))?(((((map__37703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37703):map__37703);
var src = map__37703__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37703__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__37699,map__37699__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__37699,map__37699__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__37699,map__37699__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37705){
var map__37706 = p__37705;
var map__37706__$1 = (((((!((map__37706 == null))))?(((((map__37706.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37706.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37706):map__37706);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37706__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37706__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__37706,map__37706__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__37706,map__37706__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37709){
var map__37710 = p__37709;
var map__37710__$1 = (((((!((map__37710 == null))))?(((((map__37710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37710):map__37710);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37710__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37710__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37712){
var map__37713 = p__37712;
var map__37713__$1 = (((((!((map__37713 == null))))?(((((map__37713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37713):map__37713);
var msg = map__37713__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37713__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37715 = type;
var G__37715__$1 = (((G__37715 instanceof cljs.core.Keyword))?G__37715.fqn:null);
switch (G__37715__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__37722 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__37723 = ((function (G__37722){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__37722))
;
var G__37724 = "POST";
var G__37725 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__37726 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37722,G__37723,G__37724,G__37725,G__37726);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
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
}catch (e37731){var e = e37731;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5720__auto___37894 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto___37894)){
var s_37895 = temp__5720__auto___37894;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_37895.onclose = ((function (s_37895,temp__5720__auto___37894){
return (function (e){
return null;
});})(s_37895,temp__5720__auto___37894))
;

s_37895.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5720__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5720__auto__)){
var s = temp__5720__auto__;
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
