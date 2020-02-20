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
var len__4789__auto___49910 = arguments.length;
var i__4790__auto___49911 = (0);
while(true){
if((i__4790__auto___49911 < len__4789__auto___49910)){
args__4795__auto__.push((arguments[i__4790__auto___49911]));

var G__49912 = (i__4790__auto___49911 + (1));
i__4790__auto___49911 = G__49912;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49519){
var G__49520 = cljs.core.first(seq49519);
var seq49519__$1 = cljs.core.next(seq49519);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49520,seq49519__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__49535){
var map__49537 = p__49535;
var map__49537__$1 = (((((!((map__49537 == null))))?(((((map__49537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49537):map__49537);
var src = map__49537__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49537__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49537__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__49544 = cljs.core.seq(sources);
var chunk__49545 = null;
var count__49546 = (0);
var i__49547 = (0);
while(true){
if((i__49547 < count__49546)){
var map__49555 = chunk__49545.cljs$core$IIndexed$_nth$arity$2(null,i__49547);
var map__49555__$1 = (((((!((map__49555 == null))))?(((((map__49555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49555):map__49555);
var src = map__49555__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49555__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49555__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49555__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49555__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49566){var e_49919 = e49566;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49919);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49919.message)].join('')));
}

var G__49920 = seq__49544;
var G__49921 = chunk__49545;
var G__49922 = count__49546;
var G__49923 = (i__49547 + (1));
seq__49544 = G__49920;
chunk__49545 = G__49921;
count__49546 = G__49922;
i__49547 = G__49923;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49544);
if(temp__5735__auto__){
var seq__49544__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49544__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49544__$1);
var G__49924 = cljs.core.chunk_rest(seq__49544__$1);
var G__49925 = c__4609__auto__;
var G__49926 = cljs.core.count(c__4609__auto__);
var G__49927 = (0);
seq__49544 = G__49924;
chunk__49545 = G__49925;
count__49546 = G__49926;
i__49547 = G__49927;
continue;
} else {
var map__49568 = cljs.core.first(seq__49544__$1);
var map__49568__$1 = (((((!((map__49568 == null))))?(((((map__49568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49568):map__49568);
var src = map__49568__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49568__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49568__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49568__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49568__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49570){var e_49931 = e49570;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49931);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49931.message)].join('')));
}

var G__49932 = cljs.core.next(seq__49544__$1);
var G__49933 = null;
var G__49934 = (0);
var G__49935 = (0);
seq__49544 = G__49932;
chunk__49545 = G__49933;
count__49546 = G__49934;
i__49547 = G__49935;
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
var seq__49573 = cljs.core.seq(js_requires);
var chunk__49574 = null;
var count__49575 = (0);
var i__49576 = (0);
while(true){
if((i__49576 < count__49575)){
var js_ns = chunk__49574.cljs$core$IIndexed$_nth$arity$2(null,i__49576);
var require_str_49936 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49936);


var G__49937 = seq__49573;
var G__49938 = chunk__49574;
var G__49939 = count__49575;
var G__49940 = (i__49576 + (1));
seq__49573 = G__49937;
chunk__49574 = G__49938;
count__49575 = G__49939;
i__49576 = G__49940;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49573);
if(temp__5735__auto__){
var seq__49573__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49573__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49573__$1);
var G__49941 = cljs.core.chunk_rest(seq__49573__$1);
var G__49942 = c__4609__auto__;
var G__49943 = cljs.core.count(c__4609__auto__);
var G__49944 = (0);
seq__49573 = G__49941;
chunk__49574 = G__49942;
count__49575 = G__49943;
i__49576 = G__49944;
continue;
} else {
var js_ns = cljs.core.first(seq__49573__$1);
var require_str_49945 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49945);


var G__49946 = cljs.core.next(seq__49573__$1);
var G__49947 = null;
var G__49948 = (0);
var G__49949 = (0);
seq__49573 = G__49946;
chunk__49574 = G__49947;
count__49575 = G__49948;
i__49576 = G__49949;
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
var G__49597 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__49597) : callback.call(null,G__49597));
} else {
var G__49598 = shadow.cljs.devtools.client.env.files_url();
var G__49599 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__49600 = "POST";
var G__49601 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__49602 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49598,G__49599,G__49600,G__49601,G__49602);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__49606){
var map__49607 = p__49606;
var map__49607__$1 = (((((!((map__49607 == null))))?(((((map__49607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49607):map__49607);
var msg = map__49607__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49607__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49607__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__49610 = info;
var map__49610__$1 = (((((!((map__49610 == null))))?(((((map__49610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49610):map__49610);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49610__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49610__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49612(s__49613){
return (new cljs.core.LazySeq(null,(function (){
var s__49613__$1 = s__49613;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49613__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__49618 = cljs.core.first(xs__6292__auto__);
var map__49618__$1 = (((((!((map__49618 == null))))?(((((map__49618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49618):map__49618);
var src = map__49618__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49618__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49618__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__49613__$1,map__49618,map__49618__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49610,map__49610__$1,sources,compiled,map__49607,map__49607__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49612_$_iter__49614(s__49615){
return (new cljs.core.LazySeq(null,((function (s__49613__$1,map__49618,map__49618__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49610,map__49610__$1,sources,compiled,map__49607,map__49607__$1,msg,info,reload_info){
return (function (){
var s__49615__$1 = s__49615;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49615__$1);
if(temp__5735__auto____$1){
var s__49615__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49615__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__49615__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__49617 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__49616 = (0);
while(true){
if((i__49616 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__49616);
cljs.core.chunk_append(b__49617,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__49955 = (i__49616 + (1));
i__49616 = G__49955;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49617),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49612_$_iter__49614(cljs.core.chunk_rest(s__49615__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49617),null);
}
} else {
var warning = cljs.core.first(s__49615__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49612_$_iter__49614(cljs.core.rest(s__49615__$2)));
}
} else {
return null;
}
break;
}
});})(s__49613__$1,map__49618,map__49618__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49610,map__49610__$1,sources,compiled,map__49607,map__49607__$1,msg,info,reload_info))
,null,null));
});})(s__49613__$1,map__49618,map__49618__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49610,map__49610__$1,sources,compiled,map__49607,map__49607__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49612(cljs.core.rest(s__49613__$1)));
} else {
var G__49960 = cljs.core.rest(s__49613__$1);
s__49613__$1 = G__49960;
continue;
}
} else {
var G__49961 = cljs.core.rest(s__49613__$1);
s__49613__$1 = G__49961;
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
var seq__49629_49962 = cljs.core.seq(warnings);
var chunk__49630_49963 = null;
var count__49631_49964 = (0);
var i__49632_49965 = (0);
while(true){
if((i__49632_49965 < count__49631_49964)){
var map__49658_49966 = chunk__49630_49963.cljs$core$IIndexed$_nth$arity$2(null,i__49632_49965);
var map__49658_49967__$1 = (((((!((map__49658_49966 == null))))?(((((map__49658_49966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49658_49966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49658_49966):map__49658_49966);
var w_49968 = map__49658_49967__$1;
var msg_49969__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49658_49967__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49658_49967__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49658_49967__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49658_49967__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49972)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49970),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49971),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49969__$1)].join(''));


var G__49980 = seq__49629_49962;
var G__49981 = chunk__49630_49963;
var G__49982 = count__49631_49964;
var G__49983 = (i__49632_49965 + (1));
seq__49629_49962 = G__49980;
chunk__49630_49963 = G__49981;
count__49631_49964 = G__49982;
i__49632_49965 = G__49983;
continue;
} else {
var temp__5735__auto___49984 = cljs.core.seq(seq__49629_49962);
if(temp__5735__auto___49984){
var seq__49629_49985__$1 = temp__5735__auto___49984;
if(cljs.core.chunked_seq_QMARK_(seq__49629_49985__$1)){
var c__4609__auto___49986 = cljs.core.chunk_first(seq__49629_49985__$1);
var G__49987 = cljs.core.chunk_rest(seq__49629_49985__$1);
var G__49988 = c__4609__auto___49986;
var G__49989 = cljs.core.count(c__4609__auto___49986);
var G__49990 = (0);
seq__49629_49962 = G__49987;
chunk__49630_49963 = G__49988;
count__49631_49964 = G__49989;
i__49632_49965 = G__49990;
continue;
} else {
var map__49661_49991 = cljs.core.first(seq__49629_49985__$1);
var map__49661_49992__$1 = (((((!((map__49661_49991 == null))))?(((((map__49661_49991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49661_49991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49661_49991):map__49661_49991);
var w_49993 = map__49661_49992__$1;
var msg_49994__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49661_49992__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49661_49992__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49661_49992__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49661_49992__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49997)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49995),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49996),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49994__$1)].join(''));


var G__49998 = cljs.core.next(seq__49629_49985__$1);
var G__49999 = null;
var G__50000 = (0);
var G__50001 = (0);
seq__49629_49962 = G__49998;
chunk__49630_49963 = G__49999;
count__49631_49964 = G__50000;
i__49632_49965 = G__50001;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49666){
var map__49671 = p__49666;
var map__49671__$1 = (((((!((map__49671 == null))))?(((((map__49671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49671):map__49671);
var src = map__49671__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49671__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49671__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49677){
var map__49679 = p__49677;
var map__49679__$1 = (((((!((map__49679 == null))))?(((((map__49679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49679):map__49679);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49679__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49682){
var map__49683 = p__49682;
var map__49683__$1 = (((((!((map__49683 == null))))?(((((map__49683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49683):map__49683);
var rc = map__49683__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49683__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__49605_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49605_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__49698){
var map__49700 = p__49698;
var map__49700__$1 = (((((!((map__49700 == null))))?(((((map__49700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49700):map__49700);
var msg = map__49700__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49700__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__49702 = cljs.core.seq(updates);
var chunk__49704 = null;
var count__49705 = (0);
var i__49706 = (0);
while(true){
if((i__49706 < count__49705)){
var path = chunk__49704.cljs$core$IIndexed$_nth$arity$2(null,i__49706);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49748_50007 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49751_50008 = null;
var count__49752_50009 = (0);
var i__49753_50010 = (0);
while(true){
if((i__49753_50010 < count__49752_50009)){
var node_50011 = chunk__49751_50008.cljs$core$IIndexed$_nth$arity$2(null,i__49753_50010);
var path_match_50012 = shadow.cljs.devtools.client.browser.match_paths(node_50011.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50012)){
var new_link_50013 = (function (){var G__49768 = node_50011.cloneNode(true);
G__49768.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50012),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49768;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50012], 0));

goog.dom.insertSiblingAfter(new_link_50013,node_50011);

goog.dom.removeNode(node_50011);


var G__50014 = seq__49748_50007;
var G__50015 = chunk__49751_50008;
var G__50016 = count__49752_50009;
var G__50017 = (i__49753_50010 + (1));
seq__49748_50007 = G__50014;
chunk__49751_50008 = G__50015;
count__49752_50009 = G__50016;
i__49753_50010 = G__50017;
continue;
} else {
var G__50018 = seq__49748_50007;
var G__50019 = chunk__49751_50008;
var G__50020 = count__49752_50009;
var G__50021 = (i__49753_50010 + (1));
seq__49748_50007 = G__50018;
chunk__49751_50008 = G__50019;
count__49752_50009 = G__50020;
i__49753_50010 = G__50021;
continue;
}
} else {
var temp__5735__auto___50022 = cljs.core.seq(seq__49748_50007);
if(temp__5735__auto___50022){
var seq__49748_50023__$1 = temp__5735__auto___50022;
if(cljs.core.chunked_seq_QMARK_(seq__49748_50023__$1)){
var c__4609__auto___50024 = cljs.core.chunk_first(seq__49748_50023__$1);
var G__50025 = cljs.core.chunk_rest(seq__49748_50023__$1);
var G__50026 = c__4609__auto___50024;
var G__50027 = cljs.core.count(c__4609__auto___50024);
var G__50028 = (0);
seq__49748_50007 = G__50025;
chunk__49751_50008 = G__50026;
count__49752_50009 = G__50027;
i__49753_50010 = G__50028;
continue;
} else {
var node_50029 = cljs.core.first(seq__49748_50023__$1);
var path_match_50030 = shadow.cljs.devtools.client.browser.match_paths(node_50029.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50030)){
var new_link_50031 = (function (){var G__49776 = node_50029.cloneNode(true);
G__49776.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50030),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49776;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50030], 0));

goog.dom.insertSiblingAfter(new_link_50031,node_50029);

goog.dom.removeNode(node_50029);


var G__50032 = cljs.core.next(seq__49748_50023__$1);
var G__50033 = null;
var G__50034 = (0);
var G__50035 = (0);
seq__49748_50007 = G__50032;
chunk__49751_50008 = G__50033;
count__49752_50009 = G__50034;
i__49753_50010 = G__50035;
continue;
} else {
var G__50036 = cljs.core.next(seq__49748_50023__$1);
var G__50037 = null;
var G__50038 = (0);
var G__50039 = (0);
seq__49748_50007 = G__50036;
chunk__49751_50008 = G__50037;
count__49752_50009 = G__50038;
i__49753_50010 = G__50039;
continue;
}
}
} else {
}
}
break;
}


var G__50040 = seq__49702;
var G__50041 = chunk__49704;
var G__50042 = count__49705;
var G__50043 = (i__49706 + (1));
seq__49702 = G__50040;
chunk__49704 = G__50041;
count__49705 = G__50042;
i__49706 = G__50043;
continue;
} else {
var G__50044 = seq__49702;
var G__50045 = chunk__49704;
var G__50046 = count__49705;
var G__50047 = (i__49706 + (1));
seq__49702 = G__50044;
chunk__49704 = G__50045;
count__49705 = G__50046;
i__49706 = G__50047;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49702);
if(temp__5735__auto__){
var seq__49702__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49702__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49702__$1);
var G__50048 = cljs.core.chunk_rest(seq__49702__$1);
var G__50049 = c__4609__auto__;
var G__50050 = cljs.core.count(c__4609__auto__);
var G__50051 = (0);
seq__49702 = G__50048;
chunk__49704 = G__50049;
count__49705 = G__50050;
i__49706 = G__50051;
continue;
} else {
var path = cljs.core.first(seq__49702__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49785_50052 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49790_50053 = null;
var count__49791_50054 = (0);
var i__49792_50055 = (0);
while(true){
if((i__49792_50055 < count__49791_50054)){
var node_50056 = chunk__49790_50053.cljs$core$IIndexed$_nth$arity$2(null,i__49792_50055);
var path_match_50057 = shadow.cljs.devtools.client.browser.match_paths(node_50056.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50057)){
var new_link_50058 = (function (){var G__49809 = node_50056.cloneNode(true);
G__49809.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50057),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49809;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50057], 0));

goog.dom.insertSiblingAfter(new_link_50058,node_50056);

goog.dom.removeNode(node_50056);


var G__50059 = seq__49785_50052;
var G__50060 = chunk__49790_50053;
var G__50061 = count__49791_50054;
var G__50062 = (i__49792_50055 + (1));
seq__49785_50052 = G__50059;
chunk__49790_50053 = G__50060;
count__49791_50054 = G__50061;
i__49792_50055 = G__50062;
continue;
} else {
var G__50063 = seq__49785_50052;
var G__50064 = chunk__49790_50053;
var G__50065 = count__49791_50054;
var G__50066 = (i__49792_50055 + (1));
seq__49785_50052 = G__50063;
chunk__49790_50053 = G__50064;
count__49791_50054 = G__50065;
i__49792_50055 = G__50066;
continue;
}
} else {
var temp__5735__auto___50067__$1 = cljs.core.seq(seq__49785_50052);
if(temp__5735__auto___50067__$1){
var seq__49785_50068__$1 = temp__5735__auto___50067__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49785_50068__$1)){
var c__4609__auto___50069 = cljs.core.chunk_first(seq__49785_50068__$1);
var G__50070 = cljs.core.chunk_rest(seq__49785_50068__$1);
var G__50071 = c__4609__auto___50069;
var G__50072 = cljs.core.count(c__4609__auto___50069);
var G__50073 = (0);
seq__49785_50052 = G__50070;
chunk__49790_50053 = G__50071;
count__49791_50054 = G__50072;
i__49792_50055 = G__50073;
continue;
} else {
var node_50074 = cljs.core.first(seq__49785_50068__$1);
var path_match_50075 = shadow.cljs.devtools.client.browser.match_paths(node_50074.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50075)){
var new_link_50076 = (function (){var G__49815 = node_50074.cloneNode(true);
G__49815.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50075),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49815;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50075], 0));

goog.dom.insertSiblingAfter(new_link_50076,node_50074);

goog.dom.removeNode(node_50074);


var G__50080 = cljs.core.next(seq__49785_50068__$1);
var G__50081 = null;
var G__50082 = (0);
var G__50083 = (0);
seq__49785_50052 = G__50080;
chunk__49790_50053 = G__50081;
count__49791_50054 = G__50082;
i__49792_50055 = G__50083;
continue;
} else {
var G__50084 = cljs.core.next(seq__49785_50068__$1);
var G__50085 = null;
var G__50086 = (0);
var G__50087 = (0);
seq__49785_50052 = G__50084;
chunk__49790_50053 = G__50085;
count__49791_50054 = G__50086;
i__49792_50055 = G__50087;
continue;
}
}
} else {
}
}
break;
}


var G__50088 = cljs.core.next(seq__49702__$1);
var G__50089 = null;
var G__50090 = (0);
var G__50091 = (0);
seq__49702 = G__50088;
chunk__49704 = G__50089;
count__49705 = G__50090;
i__49706 = G__50091;
continue;
} else {
var G__50092 = cljs.core.next(seq__49702__$1);
var G__50093 = null;
var G__50094 = (0);
var G__50095 = (0);
seq__49702 = G__50092;
chunk__49704 = G__50093;
count__49705 = G__50094;
i__49706 = G__50095;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__49830){
var map__49831 = p__49830;
var map__49831__$1 = (((((!((map__49831 == null))))?(((((map__49831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49831.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49831):map__49831);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49831__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49831__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__49843,done){
var map__49845 = p__49843;
var map__49845__$1 = (((((!((map__49845 == null))))?(((((map__49845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49845):map__49845);
var msg = map__49845__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49845__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49845__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49845__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49845__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49853){
var map__49854 = p__49853;
var map__49854__$1 = (((((!((map__49854 == null))))?(((((map__49854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49854):map__49854);
var src = map__49854__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49854__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e49857){var e = e49857;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__49865,done){
var map__49866 = p__49865;
var map__49866__$1 = (((((!((map__49866 == null))))?(((((map__49866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49866):map__49866);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49866__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49866__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__49870){
var map__49871 = p__49870;
var map__49871__$1 = (((((!((map__49871 == null))))?(((((map__49871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49871):map__49871);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49871__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49871__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__49875,done){
var map__49876 = p__49875;
var map__49876__$1 = (((((!((map__49876 == null))))?(((((map__49876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49876):map__49876);
var msg = map__49876__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49876__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__49878_50109 = type;
var G__49878_50110__$1 = (((G__49878_50109 instanceof cljs.core.Keyword))?G__49878_50109.fqn:null);
switch (G__49878_50110__$1) {
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
var G__49883 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__49884 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__49885 = "POST";
var G__49886 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__49887 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49883,G__49884,G__49885,G__49886,G__49887);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__49901 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__49900 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__49900.cljs$core$IFn$_invoke$arity$1 ? fexpr__49900.cljs$core$IFn$_invoke$arity$1(G__49901) : fexpr__49900.call(null,G__49901));
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
}catch (e49905){var e = e49905;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___50120 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___50120)){
var s_50121 = temp__5735__auto___50120;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_50121.onclose = (function (e){
return null;
}));

s_50121.close();

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
