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
var len__4730__auto___42810 = arguments.length;
var i__4731__auto___42811 = (0);
while(true){
if((i__4731__auto___42811 < len__4730__auto___42810)){
args__4736__auto__.push((arguments[i__4731__auto___42811]));

var G__42812 = (i__4731__auto___42811 + (1));
i__4731__auto___42811 = G__42812;
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
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq42511){
var G__42512 = cljs.core.first(seq42511);
var seq42511__$1 = cljs.core.next(seq42511);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42512,seq42511__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__42514){
var map__42515 = p__42514;
var map__42515__$1 = (((((!((map__42515 == null))))?(((((map__42515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42515):map__42515);
var src = map__42515__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42515__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42515__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__42521 = cljs.core.seq(sources);
var chunk__42522 = null;
var count__42523 = (0);
var i__42524 = (0);
while(true){
if((i__42524 < count__42523)){
var map__42539 = chunk__42522.cljs$core$IIndexed$_nth$arity$2(null,i__42524);
var map__42539__$1 = (((((!((map__42539 == null))))?(((((map__42539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42539):map__42539);
var src = map__42539__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42539__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42539__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42539__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42539__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e42541){var e_42813 = e42541;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42813);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42813.message)].join('')));
}

var G__42814 = seq__42521;
var G__42815 = chunk__42522;
var G__42816 = count__42523;
var G__42817 = (i__42524 + (1));
seq__42521 = G__42814;
chunk__42522 = G__42815;
count__42523 = G__42816;
i__42524 = G__42817;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42521);
if(temp__5735__auto__){
var seq__42521__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42521__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42521__$1);
var G__42818 = cljs.core.chunk_rest(seq__42521__$1);
var G__42819 = c__4550__auto__;
var G__42820 = cljs.core.count(c__4550__auto__);
var G__42821 = (0);
seq__42521 = G__42818;
chunk__42522 = G__42819;
count__42523 = G__42820;
i__42524 = G__42821;
continue;
} else {
var map__42549 = cljs.core.first(seq__42521__$1);
var map__42549__$1 = (((((!((map__42549 == null))))?(((((map__42549.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42549.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42549):map__42549);
var src = map__42549__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42549__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42549__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42549__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42549__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e42555){var e_42822 = e42555;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42822);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42822.message)].join('')));
}

var G__42823 = cljs.core.next(seq__42521__$1);
var G__42824 = null;
var G__42825 = (0);
var G__42826 = (0);
seq__42521 = G__42823;
chunk__42522 = G__42824;
count__42523 = G__42825;
i__42524 = G__42826;
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
var seq__42557 = cljs.core.seq(js_requires);
var chunk__42558 = null;
var count__42559 = (0);
var i__42560 = (0);
while(true){
if((i__42560 < count__42559)){
var js_ns = chunk__42558.cljs$core$IIndexed$_nth$arity$2(null,i__42560);
var require_str_42827 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42827);


var G__42828 = seq__42557;
var G__42829 = chunk__42558;
var G__42830 = count__42559;
var G__42831 = (i__42560 + (1));
seq__42557 = G__42828;
chunk__42558 = G__42829;
count__42559 = G__42830;
i__42560 = G__42831;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42557);
if(temp__5735__auto__){
var seq__42557__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42557__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42557__$1);
var G__42832 = cljs.core.chunk_rest(seq__42557__$1);
var G__42833 = c__4550__auto__;
var G__42834 = cljs.core.count(c__4550__auto__);
var G__42835 = (0);
seq__42557 = G__42832;
chunk__42558 = G__42833;
count__42559 = G__42834;
i__42560 = G__42835;
continue;
} else {
var js_ns = cljs.core.first(seq__42557__$1);
var require_str_42836 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42836);


var G__42837 = cljs.core.next(seq__42557__$1);
var G__42838 = null;
var G__42839 = (0);
var G__42840 = (0);
seq__42557 = G__42837;
chunk__42558 = G__42838;
count__42559 = G__42839;
i__42560 = G__42840;
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
var G__42565 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__42565) : callback.call(null,G__42565));
} else {
var G__42568 = shadow.cljs.devtools.client.env.files_url();
var G__42569 = ((function (G__42568){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__42568))
;
var G__42570 = "POST";
var G__42571 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__42572 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__42568,G__42569,G__42570,G__42571,G__42572);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__42579){
var map__42580 = p__42579;
var map__42580__$1 = (((((!((map__42580 == null))))?(((((map__42580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42580):map__42580);
var msg = map__42580__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42580__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42580__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__42584 = info;
var map__42584__$1 = (((((!((map__42584 == null))))?(((((map__42584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42584):map__42584);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42584__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42584__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__42584,map__42584__$1,sources,compiled,map__42580,map__42580__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42588(s__42589){
return (new cljs.core.LazySeq(null,((function (map__42584,map__42584__$1,sources,compiled,map__42580,map__42580__$1,msg,info,reload_info){
return (function (){
var s__42589__$1 = s__42589;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42589__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__42599 = cljs.core.first(xs__6292__auto__);
var map__42599__$1 = (((((!((map__42599 == null))))?(((((map__42599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42599):map__42599);
var src = map__42599__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42599__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42599__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__42589__$1,map__42599,map__42599__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42584,map__42584__$1,sources,compiled,map__42580,map__42580__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42588_$_iter__42590(s__42591){
return (new cljs.core.LazySeq(null,((function (s__42589__$1,map__42599,map__42599__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42584,map__42584__$1,sources,compiled,map__42580,map__42580__$1,msg,info,reload_info){
return (function (){
var s__42591__$1 = s__42591;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__42591__$1);
if(temp__5735__auto____$1){
var s__42591__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42591__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42591__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42593 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42592 = (0);
while(true){
if((i__42592 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42592);
cljs.core.chunk_append(b__42593,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42841 = (i__42592 + (1));
i__42592 = G__42841;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42593),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42588_$_iter__42590(cljs.core.chunk_rest(s__42591__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42593),null);
}
} else {
var warning = cljs.core.first(s__42591__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42588_$_iter__42590(cljs.core.rest(s__42591__$2)));
}
} else {
return null;
}
break;
}
});})(s__42589__$1,map__42599,map__42599__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42584,map__42584__$1,sources,compiled,map__42580,map__42580__$1,msg,info,reload_info))
,null,null));
});})(s__42589__$1,map__42599,map__42599__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42584,map__42584__$1,sources,compiled,map__42580,map__42580__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42588(cljs.core.rest(s__42589__$1)));
} else {
var G__42842 = cljs.core.rest(s__42589__$1);
s__42589__$1 = G__42842;
continue;
}
} else {
var G__42843 = cljs.core.rest(s__42589__$1);
s__42589__$1 = G__42843;
continue;
}
} else {
return null;
}
break;
}
});})(map__42584,map__42584__$1,sources,compiled,map__42580,map__42580__$1,msg,info,reload_info))
,null,null));
});})(map__42584,map__42584__$1,sources,compiled,map__42580,map__42580__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__42604_42844 = cljs.core.seq(warnings);
var chunk__42605_42845 = null;
var count__42606_42846 = (0);
var i__42607_42847 = (0);
while(true){
if((i__42607_42847 < count__42606_42846)){
var map__42617_42848 = chunk__42605_42845.cljs$core$IIndexed$_nth$arity$2(null,i__42607_42847);
var map__42617_42849__$1 = (((((!((map__42617_42848 == null))))?(((((map__42617_42848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42617_42848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42617_42848):map__42617_42848);
var w_42850 = map__42617_42849__$1;
var msg_42851__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42617_42849__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42617_42849__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42617_42849__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42617_42849__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42854)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42852),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42853),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42851__$1)].join(''));


var G__42855 = seq__42604_42844;
var G__42856 = chunk__42605_42845;
var G__42857 = count__42606_42846;
var G__42858 = (i__42607_42847 + (1));
seq__42604_42844 = G__42855;
chunk__42605_42845 = G__42856;
count__42606_42846 = G__42857;
i__42607_42847 = G__42858;
continue;
} else {
var temp__5735__auto___42859 = cljs.core.seq(seq__42604_42844);
if(temp__5735__auto___42859){
var seq__42604_42860__$1 = temp__5735__auto___42859;
if(cljs.core.chunked_seq_QMARK_(seq__42604_42860__$1)){
var c__4550__auto___42861 = cljs.core.chunk_first(seq__42604_42860__$1);
var G__42862 = cljs.core.chunk_rest(seq__42604_42860__$1);
var G__42863 = c__4550__auto___42861;
var G__42864 = cljs.core.count(c__4550__auto___42861);
var G__42865 = (0);
seq__42604_42844 = G__42862;
chunk__42605_42845 = G__42863;
count__42606_42846 = G__42864;
i__42607_42847 = G__42865;
continue;
} else {
var map__42625_42866 = cljs.core.first(seq__42604_42860__$1);
var map__42625_42867__$1 = (((((!((map__42625_42866 == null))))?(((((map__42625_42866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42625_42866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42625_42866):map__42625_42866);
var w_42868 = map__42625_42867__$1;
var msg_42869__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42625_42867__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42625_42867__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42871 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42625_42867__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42625_42867__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42872)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42870),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42871),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42869__$1)].join(''));


var G__42873 = cljs.core.next(seq__42604_42860__$1);
var G__42874 = null;
var G__42875 = (0);
var G__42876 = (0);
seq__42604_42844 = G__42873;
chunk__42605_42845 = G__42874;
count__42606_42846 = G__42875;
i__42607_42847 = G__42876;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__42584,map__42584__$1,sources,compiled,warnings,map__42580,map__42580__$1,msg,info,reload_info){
return (function (p__42627){
var map__42628 = p__42627;
var map__42628__$1 = (((((!((map__42628 == null))))?(((((map__42628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42628):map__42628);
var src = map__42628__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42628__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42628__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__42584,map__42584__$1,sources,compiled,warnings,map__42580,map__42580__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__42584,map__42584__$1,sources,compiled,warnings,map__42580,map__42580__$1,msg,info,reload_info){
return (function (p__42630){
var map__42631 = p__42630;
var map__42631__$1 = (((((!((map__42631 == null))))?(((((map__42631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42631):map__42631);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42631__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__42584,map__42584__$1,sources,compiled,warnings,map__42580,map__42580__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__42584,map__42584__$1,sources,compiled,warnings,map__42580,map__42580__$1,msg,info,reload_info){
return (function (p__42634){
var map__42635 = p__42634;
var map__42635__$1 = (((((!((map__42635 == null))))?(((((map__42635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42635):map__42635);
var rc = map__42635__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42635__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__42584,map__42584__$1,sources,compiled,warnings,map__42580,map__42580__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__42584,map__42584__$1,sources,compiled,warnings,map__42580,map__42580__$1,msg,info,reload_info){
return (function (p1__42578_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__42578_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__42584,map__42584__$1,sources,compiled,warnings,map__42580,map__42580__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__42646){
var map__42647 = p__42646;
var map__42647__$1 = (((((!((map__42647 == null))))?(((((map__42647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42647):map__42647);
var msg = map__42647__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42647__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__42650 = cljs.core.seq(updates);
var chunk__42656 = null;
var count__42657 = (0);
var i__42658 = (0);
while(true){
if((i__42658 < count__42657)){
var path = chunk__42656.cljs$core$IIndexed$_nth$arity$2(null,i__42658);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42709_42880 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42712_42881 = null;
var count__42713_42882 = (0);
var i__42714_42883 = (0);
while(true){
if((i__42714_42883 < count__42713_42882)){
var node_42884 = chunk__42712_42881.cljs$core$IIndexed$_nth$arity$2(null,i__42714_42883);
var path_match_42885 = shadow.cljs.devtools.client.browser.match_paths(node_42884.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42885)){
var new_link_42886 = (function (){var G__42729 = node_42884.cloneNode(true);
G__42729.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42885),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42729;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42885], 0));

goog.dom.insertSiblingAfter(new_link_42886,node_42884);

goog.dom.removeNode(node_42884);


var G__42887 = seq__42709_42880;
var G__42888 = chunk__42712_42881;
var G__42889 = count__42713_42882;
var G__42890 = (i__42714_42883 + (1));
seq__42709_42880 = G__42887;
chunk__42712_42881 = G__42888;
count__42713_42882 = G__42889;
i__42714_42883 = G__42890;
continue;
} else {
var G__42891 = seq__42709_42880;
var G__42892 = chunk__42712_42881;
var G__42893 = count__42713_42882;
var G__42894 = (i__42714_42883 + (1));
seq__42709_42880 = G__42891;
chunk__42712_42881 = G__42892;
count__42713_42882 = G__42893;
i__42714_42883 = G__42894;
continue;
}
} else {
var temp__5735__auto___42895 = cljs.core.seq(seq__42709_42880);
if(temp__5735__auto___42895){
var seq__42709_42896__$1 = temp__5735__auto___42895;
if(cljs.core.chunked_seq_QMARK_(seq__42709_42896__$1)){
var c__4550__auto___42897 = cljs.core.chunk_first(seq__42709_42896__$1);
var G__42898 = cljs.core.chunk_rest(seq__42709_42896__$1);
var G__42899 = c__4550__auto___42897;
var G__42900 = cljs.core.count(c__4550__auto___42897);
var G__42901 = (0);
seq__42709_42880 = G__42898;
chunk__42712_42881 = G__42899;
count__42713_42882 = G__42900;
i__42714_42883 = G__42901;
continue;
} else {
var node_42902 = cljs.core.first(seq__42709_42896__$1);
var path_match_42903 = shadow.cljs.devtools.client.browser.match_paths(node_42902.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42903)){
var new_link_42904 = (function (){var G__42734 = node_42902.cloneNode(true);
G__42734.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42903),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42734;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42903], 0));

goog.dom.insertSiblingAfter(new_link_42904,node_42902);

goog.dom.removeNode(node_42902);


var G__42905 = cljs.core.next(seq__42709_42896__$1);
var G__42906 = null;
var G__42907 = (0);
var G__42908 = (0);
seq__42709_42880 = G__42905;
chunk__42712_42881 = G__42906;
count__42713_42882 = G__42907;
i__42714_42883 = G__42908;
continue;
} else {
var G__42909 = cljs.core.next(seq__42709_42896__$1);
var G__42910 = null;
var G__42911 = (0);
var G__42912 = (0);
seq__42709_42880 = G__42909;
chunk__42712_42881 = G__42910;
count__42713_42882 = G__42911;
i__42714_42883 = G__42912;
continue;
}
}
} else {
}
}
break;
}


var G__42913 = seq__42650;
var G__42914 = chunk__42656;
var G__42915 = count__42657;
var G__42916 = (i__42658 + (1));
seq__42650 = G__42913;
chunk__42656 = G__42914;
count__42657 = G__42915;
i__42658 = G__42916;
continue;
} else {
var G__42917 = seq__42650;
var G__42918 = chunk__42656;
var G__42919 = count__42657;
var G__42920 = (i__42658 + (1));
seq__42650 = G__42917;
chunk__42656 = G__42918;
count__42657 = G__42919;
i__42658 = G__42920;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42650);
if(temp__5735__auto__){
var seq__42650__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42650__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42650__$1);
var G__42921 = cljs.core.chunk_rest(seq__42650__$1);
var G__42922 = c__4550__auto__;
var G__42923 = cljs.core.count(c__4550__auto__);
var G__42924 = (0);
seq__42650 = G__42921;
chunk__42656 = G__42922;
count__42657 = G__42923;
i__42658 = G__42924;
continue;
} else {
var path = cljs.core.first(seq__42650__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42735_42925 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42738_42926 = null;
var count__42739_42927 = (0);
var i__42740_42928 = (0);
while(true){
if((i__42740_42928 < count__42739_42927)){
var node_42929 = chunk__42738_42926.cljs$core$IIndexed$_nth$arity$2(null,i__42740_42928);
var path_match_42930 = shadow.cljs.devtools.client.browser.match_paths(node_42929.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42930)){
var new_link_42931 = (function (){var G__42756 = node_42929.cloneNode(true);
G__42756.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42930),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42756;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42930], 0));

goog.dom.insertSiblingAfter(new_link_42931,node_42929);

goog.dom.removeNode(node_42929);


var G__42932 = seq__42735_42925;
var G__42933 = chunk__42738_42926;
var G__42934 = count__42739_42927;
var G__42935 = (i__42740_42928 + (1));
seq__42735_42925 = G__42932;
chunk__42738_42926 = G__42933;
count__42739_42927 = G__42934;
i__42740_42928 = G__42935;
continue;
} else {
var G__42936 = seq__42735_42925;
var G__42937 = chunk__42738_42926;
var G__42938 = count__42739_42927;
var G__42939 = (i__42740_42928 + (1));
seq__42735_42925 = G__42936;
chunk__42738_42926 = G__42937;
count__42739_42927 = G__42938;
i__42740_42928 = G__42939;
continue;
}
} else {
var temp__5735__auto___42940__$1 = cljs.core.seq(seq__42735_42925);
if(temp__5735__auto___42940__$1){
var seq__42735_42941__$1 = temp__5735__auto___42940__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42735_42941__$1)){
var c__4550__auto___42942 = cljs.core.chunk_first(seq__42735_42941__$1);
var G__42943 = cljs.core.chunk_rest(seq__42735_42941__$1);
var G__42944 = c__4550__auto___42942;
var G__42945 = cljs.core.count(c__4550__auto___42942);
var G__42946 = (0);
seq__42735_42925 = G__42943;
chunk__42738_42926 = G__42944;
count__42739_42927 = G__42945;
i__42740_42928 = G__42946;
continue;
} else {
var node_42947 = cljs.core.first(seq__42735_42941__$1);
var path_match_42948 = shadow.cljs.devtools.client.browser.match_paths(node_42947.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42948)){
var new_link_42949 = (function (){var G__42757 = node_42947.cloneNode(true);
G__42757.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42948),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42757;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42948], 0));

goog.dom.insertSiblingAfter(new_link_42949,node_42947);

goog.dom.removeNode(node_42947);


var G__42950 = cljs.core.next(seq__42735_42941__$1);
var G__42951 = null;
var G__42952 = (0);
var G__42953 = (0);
seq__42735_42925 = G__42950;
chunk__42738_42926 = G__42951;
count__42739_42927 = G__42952;
i__42740_42928 = G__42953;
continue;
} else {
var G__42954 = cljs.core.next(seq__42735_42941__$1);
var G__42955 = null;
var G__42956 = (0);
var G__42957 = (0);
seq__42735_42925 = G__42954;
chunk__42738_42926 = G__42955;
count__42739_42927 = G__42956;
i__42740_42928 = G__42957;
continue;
}
}
} else {
}
}
break;
}


var G__42958 = cljs.core.next(seq__42650__$1);
var G__42959 = null;
var G__42960 = (0);
var G__42961 = (0);
seq__42650 = G__42958;
chunk__42656 = G__42959;
count__42657 = G__42960;
i__42658 = G__42961;
continue;
} else {
var G__42962 = cljs.core.next(seq__42650__$1);
var G__42963 = null;
var G__42964 = (0);
var G__42965 = (0);
seq__42650 = G__42962;
chunk__42656 = G__42963;
count__42657 = G__42964;
i__42658 = G__42965;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__42765){
var map__42766 = p__42765;
var map__42766__$1 = (((((!((map__42766 == null))))?(((((map__42766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42766):map__42766);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42766__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42766__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__42766,map__42766__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__42766,map__42766__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__42772,done){
var map__42773 = p__42772;
var map__42773__$1 = (((((!((map__42773 == null))))?(((((map__42773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42773):map__42773);
var msg = map__42773__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42773__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42773__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42773__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42773__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__42773,map__42773__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__42775){
var map__42776 = p__42775;
var map__42776__$1 = (((((!((map__42776 == null))))?(((((map__42776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42776):map__42776);
var src = map__42776__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42776__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__42773,map__42773__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__42773,map__42773__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e42778){var e = e42778;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}});})(sources_to_load,map__42773,map__42773__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__42780,done){
var map__42781 = p__42780;
var map__42781__$1 = (((((!((map__42781 == null))))?(((((map__42781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42781):map__42781);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42781__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42781__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__42781,map__42781__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__42781,map__42781__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__42783){
var map__42784 = p__42783;
var map__42784__$1 = (((((!((map__42784 == null))))?(((((map__42784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42784):map__42784);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42784__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42784__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__42799,done){
var map__42800 = p__42799;
var map__42800__$1 = (((((!((map__42800 == null))))?(((((map__42800.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42800.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42800):map__42800);
var msg = map__42800__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42800__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__42802_42982 = type;
var G__42802_42983__$1 = (((G__42802_42982 instanceof cljs.core.Keyword))?G__42802_42982.fqn:null);
switch (G__42802_42983__$1) {
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
var G__42804 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__42805 = ((function (G__42804){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__42804))
;
var G__42806 = "POST";
var G__42807 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__42808 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__42804,G__42805,G__42806,G__42807,G__42808);
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
}catch (e42809){var e = e42809;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___43003 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___43003)){
var s_43004 = temp__5735__auto___43003;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_43004.onclose = ((function (s_43004,temp__5735__auto___43003){
return (function (e){
return null;
});})(s_43004,temp__5735__auto___43003))
;

s_43004.close();

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
