goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___42225 = arguments.length;
var i__4819__auto___42226 = (0);
while(true){
if((i__4819__auto___42226 < len__4818__auto___42225)){
args__4824__auto__.push((arguments[i__4819__auto___42226]));

var G__42227 = (i__4819__auto___42226 + (1));
i__4819__auto___42226 = G__42227;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq41955){
var G__41956 = cljs.core.first(seq41955);
var seq41955__$1 = cljs.core.next(seq41955);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41956,seq41955__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__41959 = cljs.core.seq(sources);
var chunk__41960 = null;
var count__41961 = (0);
var i__41962 = (0);
while(true){
if((i__41962 < count__41961)){
var map__41967 = chunk__41960.cljs$core$IIndexed$_nth$arity$2(null,i__41962);
var map__41967__$1 = cljs.core.__destructure_map(map__41967);
var src = map__41967__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41967__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41967__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41967__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41967__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41968){var e_42228 = e41968;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42228);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42228.message)].join('')));
}

var G__42229 = seq__41959;
var G__42230 = chunk__41960;
var G__42231 = count__41961;
var G__42232 = (i__41962 + (1));
seq__41959 = G__42229;
chunk__41960 = G__42230;
count__41961 = G__42231;
i__41962 = G__42232;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41959);
if(temp__5753__auto__){
var seq__41959__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41959__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__41959__$1);
var G__42233 = cljs.core.chunk_rest(seq__41959__$1);
var G__42234 = c__4638__auto__;
var G__42235 = cljs.core.count(c__4638__auto__);
var G__42236 = (0);
seq__41959 = G__42233;
chunk__41960 = G__42234;
count__41961 = G__42235;
i__41962 = G__42236;
continue;
} else {
var map__41969 = cljs.core.first(seq__41959__$1);
var map__41969__$1 = cljs.core.__destructure_map(map__41969);
var src = map__41969__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41969__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41969__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41969__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41969__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e41970){var e_42238 = e41970;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42238);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42238.message)].join('')));
}

var G__42240 = cljs.core.next(seq__41959__$1);
var G__42241 = null;
var G__42242 = (0);
var G__42243 = (0);
seq__41959 = G__42240;
chunk__41960 = G__42241;
count__41961 = G__42242;
i__41962 = G__42243;
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
return null;
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
var seq__41971 = cljs.core.seq(js_requires);
var chunk__41972 = null;
var count__41973 = (0);
var i__41974 = (0);
while(true){
if((i__41974 < count__41973)){
var js_ns = chunk__41972.cljs$core$IIndexed$_nth$arity$2(null,i__41974);
var require_str_42244 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42244);


var G__42245 = seq__41971;
var G__42246 = chunk__41972;
var G__42247 = count__41973;
var G__42248 = (i__41974 + (1));
seq__41971 = G__42245;
chunk__41972 = G__42246;
count__41973 = G__42247;
i__41974 = G__42248;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__41971);
if(temp__5753__auto__){
var seq__41971__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41971__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__41971__$1);
var G__42249 = cljs.core.chunk_rest(seq__41971__$1);
var G__42250 = c__4638__auto__;
var G__42251 = cljs.core.count(c__4638__auto__);
var G__42252 = (0);
seq__41971 = G__42249;
chunk__41972 = G__42250;
count__41973 = G__42251;
i__41974 = G__42252;
continue;
} else {
var js_ns = cljs.core.first(seq__41971__$1);
var require_str_42253 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42253);


var G__42254 = cljs.core.next(seq__41971__$1);
var G__42255 = null;
var G__42256 = (0);
var G__42257 = (0);
seq__41971 = G__42254;
chunk__41972 = G__42255;
count__41973 = G__42256;
i__41974 = G__42257;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__41976){
var map__41977 = p__41976;
var map__41977__$1 = cljs.core.__destructure_map(map__41977);
var msg = map__41977__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41977__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41977__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41979(s__41980){
return (new cljs.core.LazySeq(null,(function (){
var s__41980__$1 = s__41980;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41980__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__41986 = cljs.core.first(xs__6308__auto__);
var map__41986__$1 = cljs.core.__destructure_map(map__41986);
var src = map__41986__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41986__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41986__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__41980__$1,map__41986,map__41986__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41977,map__41977__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41979_$_iter__41981(s__41982){
return (new cljs.core.LazySeq(null,((function (s__41980__$1,map__41986,map__41986__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41977,map__41977__$1,msg,info,reload_info){
return (function (){
var s__41982__$1 = s__41982;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__41982__$1);
if(temp__5753__auto____$1){
var s__41982__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__41982__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__41982__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__41984 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__41983 = (0);
while(true){
if((i__41983 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__41983);
cljs.core.chunk_append(b__41984,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42258 = (i__41983 + (1));
i__41983 = G__42258;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41984),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41979_$_iter__41981(cljs.core.chunk_rest(s__41982__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41984),null);
}
} else {
var warning = cljs.core.first(s__41982__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41979_$_iter__41981(cljs.core.rest(s__41982__$2)));
}
} else {
return null;
}
break;
}
});})(s__41980__$1,map__41986,map__41986__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41977,map__41977__$1,msg,info,reload_info))
,null,null));
});})(s__41980__$1,map__41986,map__41986__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__41977,map__41977__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__41979(cljs.core.rest(s__41980__$1)));
} else {
var G__42262 = cljs.core.rest(s__41980__$1);
s__41980__$1 = G__42262;
continue;
}
} else {
var G__42263 = cljs.core.rest(s__41980__$1);
s__41980__$1 = G__42263;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__41988_42264 = cljs.core.seq(warnings);
var chunk__41989_42265 = null;
var count__41990_42266 = (0);
var i__41991_42267 = (0);
while(true){
if((i__41991_42267 < count__41990_42266)){
var map__41996_42268 = chunk__41989_42265.cljs$core$IIndexed$_nth$arity$2(null,i__41991_42267);
var map__41996_42269__$1 = cljs.core.__destructure_map(map__41996_42268);
var w_42270 = map__41996_42269__$1;
var msg_42271__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41996_42269__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41996_42269__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41996_42269__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41996_42269__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42274)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42272),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42273),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42271__$1)].join(''));


var G__42275 = seq__41988_42264;
var G__42276 = chunk__41989_42265;
var G__42277 = count__41990_42266;
var G__42278 = (i__41991_42267 + (1));
seq__41988_42264 = G__42275;
chunk__41989_42265 = G__42276;
count__41990_42266 = G__42277;
i__41991_42267 = G__42278;
continue;
} else {
var temp__5753__auto___42279 = cljs.core.seq(seq__41988_42264);
if(temp__5753__auto___42279){
var seq__41988_42280__$1 = temp__5753__auto___42279;
if(cljs.core.chunked_seq_QMARK_(seq__41988_42280__$1)){
var c__4638__auto___42281 = cljs.core.chunk_first(seq__41988_42280__$1);
var G__42283 = cljs.core.chunk_rest(seq__41988_42280__$1);
var G__42284 = c__4638__auto___42281;
var G__42285 = cljs.core.count(c__4638__auto___42281);
var G__42286 = (0);
seq__41988_42264 = G__42283;
chunk__41989_42265 = G__42284;
count__41990_42266 = G__42285;
i__41991_42267 = G__42286;
continue;
} else {
var map__41997_42287 = cljs.core.first(seq__41988_42280__$1);
var map__41997_42288__$1 = cljs.core.__destructure_map(map__41997_42287);
var w_42289 = map__41997_42288__$1;
var msg_42290__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41997_42288__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41997_42288__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41997_42288__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41997_42288__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42293)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42291),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42292),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42290__$1)].join(''));


var G__42298 = cljs.core.next(seq__41988_42280__$1);
var G__42299 = null;
var G__42300 = (0);
var G__42301 = (0);
seq__41988_42264 = G__42298;
chunk__41989_42265 = G__42299;
count__41990_42266 = G__42300;
i__41991_42267 = G__42301;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__41975_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__41975_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__42000){
var map__42001 = p__42000;
var map__42001__$1 = cljs.core.__destructure_map(map__42001);
var msg = map__42001__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42001__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__42002 = cljs.core.seq(updates);
var chunk__42004 = null;
var count__42005 = (0);
var i__42006 = (0);
while(true){
if((i__42006 < count__42005)){
var path = chunk__42004.cljs$core$IIndexed$_nth$arity$2(null,i__42006);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42057_42303 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42061_42304 = null;
var count__42062_42305 = (0);
var i__42063_42306 = (0);
while(true){
if((i__42063_42306 < count__42062_42305)){
var node_42307 = chunk__42061_42304.cljs$core$IIndexed$_nth$arity$2(null,i__42063_42306);
if(cljs.core.not(node_42307.shadow$old)){
var path_match_42309 = shadow.cljs.devtools.client.browser.match_paths(node_42307.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42309)){
var new_link_42310 = (function (){var G__42083 = node_42307.cloneNode(true);
G__42083.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42309),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42083;
})();
(node_42307.shadow$old = true);

(new_link_42310.onload = ((function (seq__42057_42303,chunk__42061_42304,count__42062_42305,i__42063_42306,seq__42002,chunk__42004,count__42005,i__42006,new_link_42310,path_match_42309,node_42307,path,map__42001,map__42001__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42307);
});})(seq__42057_42303,chunk__42061_42304,count__42062_42305,i__42063_42306,seq__42002,chunk__42004,count__42005,i__42006,new_link_42310,path_match_42309,node_42307,path,map__42001,map__42001__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42309], 0));

goog.dom.insertSiblingAfter(new_link_42310,node_42307);


var G__42312 = seq__42057_42303;
var G__42313 = chunk__42061_42304;
var G__42314 = count__42062_42305;
var G__42315 = (i__42063_42306 + (1));
seq__42057_42303 = G__42312;
chunk__42061_42304 = G__42313;
count__42062_42305 = G__42314;
i__42063_42306 = G__42315;
continue;
} else {
var G__42316 = seq__42057_42303;
var G__42317 = chunk__42061_42304;
var G__42318 = count__42062_42305;
var G__42319 = (i__42063_42306 + (1));
seq__42057_42303 = G__42316;
chunk__42061_42304 = G__42317;
count__42062_42305 = G__42318;
i__42063_42306 = G__42319;
continue;
}
} else {
var G__42320 = seq__42057_42303;
var G__42321 = chunk__42061_42304;
var G__42322 = count__42062_42305;
var G__42323 = (i__42063_42306 + (1));
seq__42057_42303 = G__42320;
chunk__42061_42304 = G__42321;
count__42062_42305 = G__42322;
i__42063_42306 = G__42323;
continue;
}
} else {
var temp__5753__auto___42324 = cljs.core.seq(seq__42057_42303);
if(temp__5753__auto___42324){
var seq__42057_42325__$1 = temp__5753__auto___42324;
if(cljs.core.chunked_seq_QMARK_(seq__42057_42325__$1)){
var c__4638__auto___42326 = cljs.core.chunk_first(seq__42057_42325__$1);
var G__42327 = cljs.core.chunk_rest(seq__42057_42325__$1);
var G__42328 = c__4638__auto___42326;
var G__42329 = cljs.core.count(c__4638__auto___42326);
var G__42330 = (0);
seq__42057_42303 = G__42327;
chunk__42061_42304 = G__42328;
count__42062_42305 = G__42329;
i__42063_42306 = G__42330;
continue;
} else {
var node_42331 = cljs.core.first(seq__42057_42325__$1);
if(cljs.core.not(node_42331.shadow$old)){
var path_match_42332 = shadow.cljs.devtools.client.browser.match_paths(node_42331.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42332)){
var new_link_42333 = (function (){var G__42091 = node_42331.cloneNode(true);
G__42091.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42332),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42091;
})();
(node_42331.shadow$old = true);

(new_link_42333.onload = ((function (seq__42057_42303,chunk__42061_42304,count__42062_42305,i__42063_42306,seq__42002,chunk__42004,count__42005,i__42006,new_link_42333,path_match_42332,node_42331,seq__42057_42325__$1,temp__5753__auto___42324,path,map__42001,map__42001__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42331);
});})(seq__42057_42303,chunk__42061_42304,count__42062_42305,i__42063_42306,seq__42002,chunk__42004,count__42005,i__42006,new_link_42333,path_match_42332,node_42331,seq__42057_42325__$1,temp__5753__auto___42324,path,map__42001,map__42001__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42332], 0));

goog.dom.insertSiblingAfter(new_link_42333,node_42331);


var G__42334 = cljs.core.next(seq__42057_42325__$1);
var G__42335 = null;
var G__42336 = (0);
var G__42337 = (0);
seq__42057_42303 = G__42334;
chunk__42061_42304 = G__42335;
count__42062_42305 = G__42336;
i__42063_42306 = G__42337;
continue;
} else {
var G__42338 = cljs.core.next(seq__42057_42325__$1);
var G__42339 = null;
var G__42340 = (0);
var G__42341 = (0);
seq__42057_42303 = G__42338;
chunk__42061_42304 = G__42339;
count__42062_42305 = G__42340;
i__42063_42306 = G__42341;
continue;
}
} else {
var G__42342 = cljs.core.next(seq__42057_42325__$1);
var G__42343 = null;
var G__42344 = (0);
var G__42345 = (0);
seq__42057_42303 = G__42342;
chunk__42061_42304 = G__42343;
count__42062_42305 = G__42344;
i__42063_42306 = G__42345;
continue;
}
}
} else {
}
}
break;
}


var G__42346 = seq__42002;
var G__42347 = chunk__42004;
var G__42348 = count__42005;
var G__42349 = (i__42006 + (1));
seq__42002 = G__42346;
chunk__42004 = G__42347;
count__42005 = G__42348;
i__42006 = G__42349;
continue;
} else {
var G__42350 = seq__42002;
var G__42351 = chunk__42004;
var G__42352 = count__42005;
var G__42353 = (i__42006 + (1));
seq__42002 = G__42350;
chunk__42004 = G__42351;
count__42005 = G__42352;
i__42006 = G__42353;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__42002);
if(temp__5753__auto__){
var seq__42002__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42002__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__42002__$1);
var G__42354 = cljs.core.chunk_rest(seq__42002__$1);
var G__42355 = c__4638__auto__;
var G__42356 = cljs.core.count(c__4638__auto__);
var G__42357 = (0);
seq__42002 = G__42354;
chunk__42004 = G__42355;
count__42005 = G__42356;
i__42006 = G__42357;
continue;
} else {
var path = cljs.core.first(seq__42002__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42099_42358 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42103_42359 = null;
var count__42104_42360 = (0);
var i__42105_42361 = (0);
while(true){
if((i__42105_42361 < count__42104_42360)){
var node_42363 = chunk__42103_42359.cljs$core$IIndexed$_nth$arity$2(null,i__42105_42361);
if(cljs.core.not(node_42363.shadow$old)){
var path_match_42364 = shadow.cljs.devtools.client.browser.match_paths(node_42363.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42364)){
var new_link_42365 = (function (){var G__42124 = node_42363.cloneNode(true);
G__42124.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42364),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42124;
})();
(node_42363.shadow$old = true);

(new_link_42365.onload = ((function (seq__42099_42358,chunk__42103_42359,count__42104_42360,i__42105_42361,seq__42002,chunk__42004,count__42005,i__42006,new_link_42365,path_match_42364,node_42363,path,seq__42002__$1,temp__5753__auto__,map__42001,map__42001__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42363);
});})(seq__42099_42358,chunk__42103_42359,count__42104_42360,i__42105_42361,seq__42002,chunk__42004,count__42005,i__42006,new_link_42365,path_match_42364,node_42363,path,seq__42002__$1,temp__5753__auto__,map__42001,map__42001__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42364], 0));

goog.dom.insertSiblingAfter(new_link_42365,node_42363);


var G__42366 = seq__42099_42358;
var G__42367 = chunk__42103_42359;
var G__42368 = count__42104_42360;
var G__42369 = (i__42105_42361 + (1));
seq__42099_42358 = G__42366;
chunk__42103_42359 = G__42367;
count__42104_42360 = G__42368;
i__42105_42361 = G__42369;
continue;
} else {
var G__42370 = seq__42099_42358;
var G__42371 = chunk__42103_42359;
var G__42372 = count__42104_42360;
var G__42373 = (i__42105_42361 + (1));
seq__42099_42358 = G__42370;
chunk__42103_42359 = G__42371;
count__42104_42360 = G__42372;
i__42105_42361 = G__42373;
continue;
}
} else {
var G__42374 = seq__42099_42358;
var G__42375 = chunk__42103_42359;
var G__42376 = count__42104_42360;
var G__42377 = (i__42105_42361 + (1));
seq__42099_42358 = G__42374;
chunk__42103_42359 = G__42375;
count__42104_42360 = G__42376;
i__42105_42361 = G__42377;
continue;
}
} else {
var temp__5753__auto___42378__$1 = cljs.core.seq(seq__42099_42358);
if(temp__5753__auto___42378__$1){
var seq__42099_42379__$1 = temp__5753__auto___42378__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42099_42379__$1)){
var c__4638__auto___42380 = cljs.core.chunk_first(seq__42099_42379__$1);
var G__42381 = cljs.core.chunk_rest(seq__42099_42379__$1);
var G__42382 = c__4638__auto___42380;
var G__42383 = cljs.core.count(c__4638__auto___42380);
var G__42384 = (0);
seq__42099_42358 = G__42381;
chunk__42103_42359 = G__42382;
count__42104_42360 = G__42383;
i__42105_42361 = G__42384;
continue;
} else {
var node_42385 = cljs.core.first(seq__42099_42379__$1);
if(cljs.core.not(node_42385.shadow$old)){
var path_match_42386 = shadow.cljs.devtools.client.browser.match_paths(node_42385.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42386)){
var new_link_42387 = (function (){var G__42134 = node_42385.cloneNode(true);
G__42134.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42386),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42134;
})();
(node_42385.shadow$old = true);

(new_link_42387.onload = ((function (seq__42099_42358,chunk__42103_42359,count__42104_42360,i__42105_42361,seq__42002,chunk__42004,count__42005,i__42006,new_link_42387,path_match_42386,node_42385,seq__42099_42379__$1,temp__5753__auto___42378__$1,path,seq__42002__$1,temp__5753__auto__,map__42001,map__42001__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42385);
});})(seq__42099_42358,chunk__42103_42359,count__42104_42360,i__42105_42361,seq__42002,chunk__42004,count__42005,i__42006,new_link_42387,path_match_42386,node_42385,seq__42099_42379__$1,temp__5753__auto___42378__$1,path,seq__42002__$1,temp__5753__auto__,map__42001,map__42001__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42386], 0));

goog.dom.insertSiblingAfter(new_link_42387,node_42385);


var G__42388 = cljs.core.next(seq__42099_42379__$1);
var G__42389 = null;
var G__42390 = (0);
var G__42391 = (0);
seq__42099_42358 = G__42388;
chunk__42103_42359 = G__42389;
count__42104_42360 = G__42390;
i__42105_42361 = G__42391;
continue;
} else {
var G__42392 = cljs.core.next(seq__42099_42379__$1);
var G__42393 = null;
var G__42394 = (0);
var G__42395 = (0);
seq__42099_42358 = G__42392;
chunk__42103_42359 = G__42393;
count__42104_42360 = G__42394;
i__42105_42361 = G__42395;
continue;
}
} else {
var G__42396 = cljs.core.next(seq__42099_42379__$1);
var G__42397 = null;
var G__42398 = (0);
var G__42399 = (0);
seq__42099_42358 = G__42396;
chunk__42103_42359 = G__42397;
count__42104_42360 = G__42398;
i__42105_42361 = G__42399;
continue;
}
}
} else {
}
}
break;
}


var G__42400 = cljs.core.next(seq__42002__$1);
var G__42401 = null;
var G__42402 = (0);
var G__42403 = (0);
seq__42002 = G__42400;
chunk__42004 = G__42401;
count__42005 = G__42402;
i__42006 = G__42403;
continue;
} else {
var G__42404 = cljs.core.next(seq__42002__$1);
var G__42405 = null;
var G__42406 = (0);
var G__42407 = (0);
seq__42002 = G__42404;
chunk__42004 = G__42405;
count__42005 = G__42406;
i__42006 = G__42407;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__42141){
var map__42142 = p__42141;
var map__42142__$1 = cljs.core.__destructure_map(map__42142);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42142__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__42161){
var map__42162 = p__42161;
var map__42162__$1 = cljs.core.__destructure_map(map__42162);
var _ = map__42162__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42162__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__42164,done,error){
var map__42165 = p__42164;
var map__42165__$1 = cljs.core.__destructure_map(map__42165);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42165__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__42170,done,error){
var map__42172 = p__42170;
var map__42172__$1 = cljs.core.__destructure_map(map__42172);
var msg = map__42172__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42172__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42172__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42172__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__42175){
var map__42176 = p__42175;
var map__42176__$1 = cljs.core.__destructure_map(map__42176);
var src = map__42176__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42176__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__42179 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__42179) : done.call(null,G__42179));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__42182){
var map__42183 = p__42182;
var map__42183__$1 = cljs.core.__destructure_map(map__42183);
var msg__$1 = map__42183__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42183__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e42184){var ex = e42184;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__42185){
var map__42186 = p__42185;
var map__42186__$1 = cljs.core.__destructure_map(map__42186);
var env = map__42186__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42186__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__42188){
var map__42189 = p__42188;
var map__42189__$1 = cljs.core.__destructure_map(map__42189);
var msg = map__42189__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42189__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__42205){
var map__42206 = p__42205;
var map__42206__$1 = cljs.core.__destructure_map(map__42206);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42206__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42206__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__42207){
var map__42210 = p__42207;
var map__42210__$1 = cljs.core.__destructure_map(map__42210);
var svc = map__42210__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42210__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
