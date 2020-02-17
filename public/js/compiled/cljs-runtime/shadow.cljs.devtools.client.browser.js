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
var len__4789__auto___45563 = arguments.length;
var i__4790__auto___45564 = (0);
while(true){
if((i__4790__auto___45564 < len__4789__auto___45563)){
args__4795__auto__.push((arguments[i__4790__auto___45564]));

var G__45567 = (i__4790__auto___45564 + (1));
i__4790__auto___45564 = G__45567;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq45042){
var G__45043 = cljs.core.first(seq45042);
var seq45042__$1 = cljs.core.next(seq45042);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45043,seq45042__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__45073){
var map__45074 = p__45073;
var map__45074__$1 = (((((!((map__45074 == null))))?(((((map__45074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45074):map__45074);
var src = map__45074__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45074__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45074__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__45080 = cljs.core.seq(sources);
var chunk__45081 = null;
var count__45082 = (0);
var i__45083 = (0);
while(true){
if((i__45083 < count__45082)){
var map__45109 = chunk__45081.cljs$core$IIndexed$_nth$arity$2(null,i__45083);
var map__45109__$1 = (((((!((map__45109 == null))))?(((((map__45109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45109):map__45109);
var src = map__45109__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45109__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45109__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45109__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45109__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e45116){var e_45635 = e45116;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45635);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45635.message)].join('')));
}

var G__45636 = seq__45080;
var G__45637 = chunk__45081;
var G__45638 = count__45082;
var G__45639 = (i__45083 + (1));
seq__45080 = G__45636;
chunk__45081 = G__45637;
count__45082 = G__45638;
i__45083 = G__45639;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45080);
if(temp__5735__auto__){
var seq__45080__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45080__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45080__$1);
var G__45641 = cljs.core.chunk_rest(seq__45080__$1);
var G__45642 = c__4609__auto__;
var G__45643 = cljs.core.count(c__4609__auto__);
var G__45644 = (0);
seq__45080 = G__45641;
chunk__45081 = G__45642;
count__45082 = G__45643;
i__45083 = G__45644;
continue;
} else {
var map__45118 = cljs.core.first(seq__45080__$1);
var map__45118__$1 = (((((!((map__45118 == null))))?(((((map__45118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45118):map__45118);
var src = map__45118__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45118__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45118__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45118__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45118__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e45121){var e_45658 = e45121;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_45658);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_45658.message)].join('')));
}

var G__45659 = cljs.core.next(seq__45080__$1);
var G__45660 = null;
var G__45661 = (0);
var G__45662 = (0);
seq__45080 = G__45659;
chunk__45081 = G__45660;
count__45082 = G__45661;
i__45083 = G__45662;
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
var seq__45128 = cljs.core.seq(js_requires);
var chunk__45129 = null;
var count__45130 = (0);
var i__45131 = (0);
while(true){
if((i__45131 < count__45130)){
var js_ns = chunk__45129.cljs$core$IIndexed$_nth$arity$2(null,i__45131);
var require_str_45675 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45675);


var G__45677 = seq__45128;
var G__45678 = chunk__45129;
var G__45679 = count__45130;
var G__45680 = (i__45131 + (1));
seq__45128 = G__45677;
chunk__45129 = G__45678;
count__45130 = G__45679;
i__45131 = G__45680;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45128);
if(temp__5735__auto__){
var seq__45128__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45128__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45128__$1);
var G__45683 = cljs.core.chunk_rest(seq__45128__$1);
var G__45684 = c__4609__auto__;
var G__45685 = cljs.core.count(c__4609__auto__);
var G__45686 = (0);
seq__45128 = G__45683;
chunk__45129 = G__45684;
count__45130 = G__45685;
i__45131 = G__45686;
continue;
} else {
var js_ns = cljs.core.first(seq__45128__$1);
var require_str_45687 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_45687);


var G__45688 = cljs.core.next(seq__45128__$1);
var G__45689 = null;
var G__45690 = (0);
var G__45691 = (0);
seq__45128 = G__45688;
chunk__45129 = G__45689;
count__45130 = G__45690;
i__45131 = G__45691;
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
var G__45147 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__45147) : callback.call(null,G__45147));
} else {
var G__45148 = shadow.cljs.devtools.client.env.files_url();
var G__45149 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__45150 = "POST";
var G__45151 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__45152 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__45148,G__45149,G__45150,G__45151,G__45152);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__45163){
var map__45164 = p__45163;
var map__45164__$1 = (((((!((map__45164 == null))))?(((((map__45164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45164):map__45164);
var msg = map__45164__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45164__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45164__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__45170 = info;
var map__45170__$1 = (((((!((map__45170 == null))))?(((((map__45170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45170):map__45170);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45170__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45170__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45172(s__45173){
return (new cljs.core.LazySeq(null,(function (){
var s__45173__$1 = s__45173;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__45173__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__45178 = cljs.core.first(xs__6292__auto__);
var map__45178__$1 = (((((!((map__45178 == null))))?(((((map__45178.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45178.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45178):map__45178);
var src = map__45178__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45178__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45178__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__45173__$1,map__45178,map__45178__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__45170,map__45170__$1,sources,compiled,map__45164,map__45164__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45172_$_iter__45174(s__45175){
return (new cljs.core.LazySeq(null,((function (s__45173__$1,map__45178,map__45178__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__45170,map__45170__$1,sources,compiled,map__45164,map__45164__$1,msg,info,reload_info){
return (function (){
var s__45175__$1 = s__45175;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__45175__$1);
if(temp__5735__auto____$1){
var s__45175__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__45175__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__45175__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__45177 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__45176 = (0);
while(true){
if((i__45176 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__45176);
cljs.core.chunk_append(b__45177,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__45704 = (i__45176 + (1));
i__45176 = G__45704;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__45177),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45172_$_iter__45174(cljs.core.chunk_rest(s__45175__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__45177),null);
}
} else {
var warning = cljs.core.first(s__45175__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45172_$_iter__45174(cljs.core.rest(s__45175__$2)));
}
} else {
return null;
}
break;
}
});})(s__45173__$1,map__45178,map__45178__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__45170,map__45170__$1,sources,compiled,map__45164,map__45164__$1,msg,info,reload_info))
,null,null));
});})(s__45173__$1,map__45178,map__45178__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__45170,map__45170__$1,sources,compiled,map__45164,map__45164__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__45172(cljs.core.rest(s__45173__$1)));
} else {
var G__45705 = cljs.core.rest(s__45173__$1);
s__45173__$1 = G__45705;
continue;
}
} else {
var G__45706 = cljs.core.rest(s__45173__$1);
s__45173__$1 = G__45706;
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
var seq__45190_45707 = cljs.core.seq(warnings);
var chunk__45191_45708 = null;
var count__45192_45709 = (0);
var i__45193_45710 = (0);
while(true){
if((i__45193_45710 < count__45192_45709)){
var map__45201_45711 = chunk__45191_45708.cljs$core$IIndexed$_nth$arity$2(null,i__45193_45710);
var map__45201_45712__$1 = (((((!((map__45201_45711 == null))))?(((((map__45201_45711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45201_45711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45201_45711):map__45201_45711);
var w_45713 = map__45201_45712__$1;
var msg_45714__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45201_45712__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45201_45712__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45201_45712__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45201_45712__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45717)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45715),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45716),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45714__$1)].join(''));


var G__45718 = seq__45190_45707;
var G__45719 = chunk__45191_45708;
var G__45720 = count__45192_45709;
var G__45721 = (i__45193_45710 + (1));
seq__45190_45707 = G__45718;
chunk__45191_45708 = G__45719;
count__45192_45709 = G__45720;
i__45193_45710 = G__45721;
continue;
} else {
var temp__5735__auto___45722 = cljs.core.seq(seq__45190_45707);
if(temp__5735__auto___45722){
var seq__45190_45723__$1 = temp__5735__auto___45722;
if(cljs.core.chunked_seq_QMARK_(seq__45190_45723__$1)){
var c__4609__auto___45726 = cljs.core.chunk_first(seq__45190_45723__$1);
var G__45727 = cljs.core.chunk_rest(seq__45190_45723__$1);
var G__45728 = c__4609__auto___45726;
var G__45729 = cljs.core.count(c__4609__auto___45726);
var G__45730 = (0);
seq__45190_45707 = G__45727;
chunk__45191_45708 = G__45728;
count__45192_45709 = G__45729;
i__45193_45710 = G__45730;
continue;
} else {
var map__45220_45731 = cljs.core.first(seq__45190_45723__$1);
var map__45220_45732__$1 = (((((!((map__45220_45731 == null))))?(((((map__45220_45731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45220_45731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45220_45731):map__45220_45731);
var w_45733 = map__45220_45732__$1;
var msg_45734__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45220_45732__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_45735 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45220_45732__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_45736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45220_45732__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_45737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45220_45732__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_45737)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_45735),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_45736),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_45734__$1)].join(''));


var G__45738 = cljs.core.next(seq__45190_45723__$1);
var G__45739 = null;
var G__45740 = (0);
var G__45741 = (0);
seq__45190_45707 = G__45738;
chunk__45191_45708 = G__45739;
count__45192_45709 = G__45740;
i__45193_45710 = G__45741;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__45235){
var map__45238 = p__45235;
var map__45238__$1 = (((((!((map__45238 == null))))?(((((map__45238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45238.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45238):map__45238);
var src = map__45238__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45238__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45238__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45255){
var map__45256 = p__45255;
var map__45256__$1 = (((((!((map__45256 == null))))?(((((map__45256.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45256.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45256):map__45256);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45256__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__45270){
var map__45271 = p__45270;
var map__45271__$1 = (((((!((map__45271 == null))))?(((((map__45271.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45271.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45271):map__45271);
var rc = map__45271__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45271__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__45161_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__45161_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__45305){
var map__45306 = p__45305;
var map__45306__$1 = (((((!((map__45306 == null))))?(((((map__45306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45306):map__45306);
var msg = map__45306__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45306__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__45322 = cljs.core.seq(updates);
var chunk__45324 = null;
var count__45325 = (0);
var i__45326 = (0);
while(true){
if((i__45326 < count__45325)){
var path = chunk__45324.cljs$core$IIndexed$_nth$arity$2(null,i__45326);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45371_45755 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45374_45756 = null;
var count__45375_45757 = (0);
var i__45376_45758 = (0);
while(true){
if((i__45376_45758 < count__45375_45757)){
var node_45761 = chunk__45374_45756.cljs$core$IIndexed$_nth$arity$2(null,i__45376_45758);
var path_match_45762 = shadow.cljs.devtools.client.browser.match_paths(node_45761.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45762)){
var new_link_45764 = (function (){var G__45396 = node_45761.cloneNode(true);
G__45396.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45762),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45396;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45762], 0));

goog.dom.insertSiblingAfter(new_link_45764,node_45761);

goog.dom.removeNode(node_45761);


var G__45765 = seq__45371_45755;
var G__45766 = chunk__45374_45756;
var G__45767 = count__45375_45757;
var G__45768 = (i__45376_45758 + (1));
seq__45371_45755 = G__45765;
chunk__45374_45756 = G__45766;
count__45375_45757 = G__45767;
i__45376_45758 = G__45768;
continue;
} else {
var G__45769 = seq__45371_45755;
var G__45770 = chunk__45374_45756;
var G__45771 = count__45375_45757;
var G__45772 = (i__45376_45758 + (1));
seq__45371_45755 = G__45769;
chunk__45374_45756 = G__45770;
count__45375_45757 = G__45771;
i__45376_45758 = G__45772;
continue;
}
} else {
var temp__5735__auto___45773 = cljs.core.seq(seq__45371_45755);
if(temp__5735__auto___45773){
var seq__45371_45774__$1 = temp__5735__auto___45773;
if(cljs.core.chunked_seq_QMARK_(seq__45371_45774__$1)){
var c__4609__auto___45776 = cljs.core.chunk_first(seq__45371_45774__$1);
var G__45778 = cljs.core.chunk_rest(seq__45371_45774__$1);
var G__45779 = c__4609__auto___45776;
var G__45780 = cljs.core.count(c__4609__auto___45776);
var G__45781 = (0);
seq__45371_45755 = G__45778;
chunk__45374_45756 = G__45779;
count__45375_45757 = G__45780;
i__45376_45758 = G__45781;
continue;
} else {
var node_45784 = cljs.core.first(seq__45371_45774__$1);
var path_match_45785 = shadow.cljs.devtools.client.browser.match_paths(node_45784.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45785)){
var new_link_45786 = (function (){var G__45399 = node_45784.cloneNode(true);
G__45399.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45785),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45399;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45785], 0));

goog.dom.insertSiblingAfter(new_link_45786,node_45784);

goog.dom.removeNode(node_45784);


var G__45787 = cljs.core.next(seq__45371_45774__$1);
var G__45788 = null;
var G__45789 = (0);
var G__45790 = (0);
seq__45371_45755 = G__45787;
chunk__45374_45756 = G__45788;
count__45375_45757 = G__45789;
i__45376_45758 = G__45790;
continue;
} else {
var G__45795 = cljs.core.next(seq__45371_45774__$1);
var G__45796 = null;
var G__45797 = (0);
var G__45798 = (0);
seq__45371_45755 = G__45795;
chunk__45374_45756 = G__45796;
count__45375_45757 = G__45797;
i__45376_45758 = G__45798;
continue;
}
}
} else {
}
}
break;
}


var G__45799 = seq__45322;
var G__45800 = chunk__45324;
var G__45801 = count__45325;
var G__45802 = (i__45326 + (1));
seq__45322 = G__45799;
chunk__45324 = G__45800;
count__45325 = G__45801;
i__45326 = G__45802;
continue;
} else {
var G__45803 = seq__45322;
var G__45804 = chunk__45324;
var G__45805 = count__45325;
var G__45806 = (i__45326 + (1));
seq__45322 = G__45803;
chunk__45324 = G__45804;
count__45325 = G__45805;
i__45326 = G__45806;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45322);
if(temp__5735__auto__){
var seq__45322__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45322__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45322__$1);
var G__45810 = cljs.core.chunk_rest(seq__45322__$1);
var G__45811 = c__4609__auto__;
var G__45812 = cljs.core.count(c__4609__auto__);
var G__45813 = (0);
seq__45322 = G__45810;
chunk__45324 = G__45811;
count__45325 = G__45812;
i__45326 = G__45813;
continue;
} else {
var path = cljs.core.first(seq__45322__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__45406_45814 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__45409_45815 = null;
var count__45410_45816 = (0);
var i__45411_45817 = (0);
while(true){
if((i__45411_45817 < count__45410_45816)){
var node_45821 = chunk__45409_45815.cljs$core$IIndexed$_nth$arity$2(null,i__45411_45817);
var path_match_45823 = shadow.cljs.devtools.client.browser.match_paths(node_45821.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45823)){
var new_link_45824 = (function (){var G__45434 = node_45821.cloneNode(true);
G__45434.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45823),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45434;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45823], 0));

goog.dom.insertSiblingAfter(new_link_45824,node_45821);

goog.dom.removeNode(node_45821);


var G__45825 = seq__45406_45814;
var G__45826 = chunk__45409_45815;
var G__45827 = count__45410_45816;
var G__45828 = (i__45411_45817 + (1));
seq__45406_45814 = G__45825;
chunk__45409_45815 = G__45826;
count__45410_45816 = G__45827;
i__45411_45817 = G__45828;
continue;
} else {
var G__45829 = seq__45406_45814;
var G__45830 = chunk__45409_45815;
var G__45831 = count__45410_45816;
var G__45832 = (i__45411_45817 + (1));
seq__45406_45814 = G__45829;
chunk__45409_45815 = G__45830;
count__45410_45816 = G__45831;
i__45411_45817 = G__45832;
continue;
}
} else {
var temp__5735__auto___45836__$1 = cljs.core.seq(seq__45406_45814);
if(temp__5735__auto___45836__$1){
var seq__45406_45837__$1 = temp__5735__auto___45836__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45406_45837__$1)){
var c__4609__auto___45838 = cljs.core.chunk_first(seq__45406_45837__$1);
var G__45839 = cljs.core.chunk_rest(seq__45406_45837__$1);
var G__45840 = c__4609__auto___45838;
var G__45841 = cljs.core.count(c__4609__auto___45838);
var G__45842 = (0);
seq__45406_45814 = G__45839;
chunk__45409_45815 = G__45840;
count__45410_45816 = G__45841;
i__45411_45817 = G__45842;
continue;
} else {
var node_45843 = cljs.core.first(seq__45406_45837__$1);
var path_match_45846 = shadow.cljs.devtools.client.browser.match_paths(node_45843.getAttribute("href"),path);
if(cljs.core.truth_(path_match_45846)){
var new_link_45847 = (function (){var G__45438 = node_45843.cloneNode(true);
G__45438.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_45846),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__45438;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_45846], 0));

goog.dom.insertSiblingAfter(new_link_45847,node_45843);

goog.dom.removeNode(node_45843);


var G__45848 = cljs.core.next(seq__45406_45837__$1);
var G__45849 = null;
var G__45850 = (0);
var G__45851 = (0);
seq__45406_45814 = G__45848;
chunk__45409_45815 = G__45849;
count__45410_45816 = G__45850;
i__45411_45817 = G__45851;
continue;
} else {
var G__45855 = cljs.core.next(seq__45406_45837__$1);
var G__45856 = null;
var G__45857 = (0);
var G__45858 = (0);
seq__45406_45814 = G__45855;
chunk__45409_45815 = G__45856;
count__45410_45816 = G__45857;
i__45411_45817 = G__45858;
continue;
}
}
} else {
}
}
break;
}


var G__45860 = cljs.core.next(seq__45322__$1);
var G__45861 = null;
var G__45862 = (0);
var G__45863 = (0);
seq__45322 = G__45860;
chunk__45324 = G__45861;
count__45325 = G__45862;
i__45326 = G__45863;
continue;
} else {
var G__45864 = cljs.core.next(seq__45322__$1);
var G__45865 = null;
var G__45866 = (0);
var G__45867 = (0);
seq__45322 = G__45864;
chunk__45324 = G__45865;
count__45325 = G__45866;
i__45326 = G__45867;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__45442){
var map__45443 = p__45442;
var map__45443__$1 = (((((!((map__45443 == null))))?(((((map__45443.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45443.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45443):map__45443);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45443__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45443__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__45445,done){
var map__45446 = p__45445;
var map__45446__$1 = (((((!((map__45446 == null))))?(((((map__45446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45446):map__45446);
var msg = map__45446__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45446__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45446__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45446__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45446__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__45449){
var map__45450 = p__45449;
var map__45450__$1 = (((((!((map__45450 == null))))?(((((map__45450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45450):map__45450);
var src = map__45450__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45450__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e45457){var e = e45457;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__45468,done){
var map__45469 = p__45468;
var map__45469__$1 = (((((!((map__45469 == null))))?(((((map__45469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45469):map__45469);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45469__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45469__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__45480){
var map__45481 = p__45480;
var map__45481__$1 = (((((!((map__45481 == null))))?(((((map__45481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45481):map__45481);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45481__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45481__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__45484,done){
var map__45485 = p__45484;
var map__45485__$1 = (((((!((map__45485 == null))))?(((((map__45485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45485):map__45485);
var msg = map__45485__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45485__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__45492_45895 = type;
var G__45492_45896__$1 = (((G__45492_45895 instanceof cljs.core.Keyword))?G__45492_45895.fqn:null);
switch (G__45492_45896__$1) {
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
var G__45505 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__45506 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__45507 = "POST";
var G__45508 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__45509 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__45505,G__45506,G__45507,G__45508,G__45509);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__45530 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__45529 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__45529.cljs$core$IFn$_invoke$arity$1 ? fexpr__45529.cljs$core$IFn$_invoke$arity$1(G__45530) : fexpr__45529.call(null,G__45530));
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
}catch (e45542){var e = e45542;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___45906 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___45906)){
var s_45907 = temp__5735__auto___45906;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_45907.onclose = (function (e){
return null;
}));

s_45907.close();

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
