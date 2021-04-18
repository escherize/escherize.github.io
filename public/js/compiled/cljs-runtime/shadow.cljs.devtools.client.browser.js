goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___42409 = arguments.length;
var i__4737__auto___42410 = (0);
while(true){
if((i__4737__auto___42410 < len__4736__auto___42409)){
args__4742__auto__.push((arguments[i__4737__auto___42410]));

var G__42412 = (i__4737__auto___42410 + (1));
i__4737__auto___42410 = G__42412;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq42125){
var G__42126 = cljs.core.first(seq42125);
var seq42125__$1 = cljs.core.next(seq42125);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42126,seq42125__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__42127 = cljs.core.seq(sources);
var chunk__42128 = null;
var count__42129 = (0);
var i__42130 = (0);
while(true){
if((i__42130 < count__42129)){
var map__42137 = chunk__42128.cljs$core$IIndexed$_nth$arity$2(null,i__42130);
var map__42137__$1 = (((((!((map__42137 == null))))?(((((map__42137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42137):map__42137);
var src = map__42137__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42137__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42137__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42137__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42137__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e42139){var e_42413 = e42139;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42413);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42413.message)].join('')));
}

var G__42414 = seq__42127;
var G__42415 = chunk__42128;
var G__42416 = count__42129;
var G__42417 = (i__42130 + (1));
seq__42127 = G__42414;
chunk__42128 = G__42415;
count__42129 = G__42416;
i__42130 = G__42417;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42127);
if(temp__5735__auto__){
var seq__42127__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42127__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42127__$1);
var G__42420 = cljs.core.chunk_rest(seq__42127__$1);
var G__42421 = c__4556__auto__;
var G__42422 = cljs.core.count(c__4556__auto__);
var G__42423 = (0);
seq__42127 = G__42420;
chunk__42128 = G__42421;
count__42129 = G__42422;
i__42130 = G__42423;
continue;
} else {
var map__42140 = cljs.core.first(seq__42127__$1);
var map__42140__$1 = (((((!((map__42140 == null))))?(((((map__42140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42140):map__42140);
var src = map__42140__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42140__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42140__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42140__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42140__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e42142){var e_42424 = e42142;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_42424);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_42424.message)].join('')));
}

var G__42425 = cljs.core.next(seq__42127__$1);
var G__42426 = null;
var G__42427 = (0);
var G__42428 = (0);
seq__42127 = G__42425;
chunk__42128 = G__42426;
count__42129 = G__42427;
i__42130 = G__42428;
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
var seq__42145 = cljs.core.seq(js_requires);
var chunk__42146 = null;
var count__42147 = (0);
var i__42148 = (0);
while(true){
if((i__42148 < count__42147)){
var js_ns = chunk__42146.cljs$core$IIndexed$_nth$arity$2(null,i__42148);
var require_str_42433 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42433);


var G__42434 = seq__42145;
var G__42435 = chunk__42146;
var G__42436 = count__42147;
var G__42437 = (i__42148 + (1));
seq__42145 = G__42434;
chunk__42146 = G__42435;
count__42147 = G__42436;
i__42148 = G__42437;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42145);
if(temp__5735__auto__){
var seq__42145__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42145__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42145__$1);
var G__42439 = cljs.core.chunk_rest(seq__42145__$1);
var G__42440 = c__4556__auto__;
var G__42441 = cljs.core.count(c__4556__auto__);
var G__42442 = (0);
seq__42145 = G__42439;
chunk__42146 = G__42440;
count__42147 = G__42441;
i__42148 = G__42442;
continue;
} else {
var js_ns = cljs.core.first(seq__42145__$1);
var require_str_42443 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42443);


var G__42446 = cljs.core.next(seq__42145__$1);
var G__42447 = null;
var G__42448 = (0);
var G__42449 = (0);
seq__42145 = G__42446;
chunk__42146 = G__42447;
count__42147 = G__42448;
i__42148 = G__42449;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__42157){
var map__42158 = p__42157;
var map__42158__$1 = (((((!((map__42158 == null))))?(((((map__42158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42158):map__42158);
var msg = map__42158__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42158__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42158__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42160(s__42161){
return (new cljs.core.LazySeq(null,(function (){
var s__42161__$1 = s__42161;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42161__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__42168 = cljs.core.first(xs__6292__auto__);
var map__42168__$1 = (((((!((map__42168 == null))))?(((((map__42168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42168):map__42168);
var src = map__42168__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42168__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42168__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__42161__$1,map__42168,map__42168__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42158,map__42158__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42160_$_iter__42162(s__42163){
return (new cljs.core.LazySeq(null,((function (s__42161__$1,map__42168,map__42168__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42158,map__42158__$1,msg,info,reload_info){
return (function (){
var s__42163__$1 = s__42163;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__42163__$1);
if(temp__5735__auto____$1){
var s__42163__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42163__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__42163__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__42165 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__42164 = (0);
while(true){
if((i__42164 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__42164);
cljs.core.chunk_append(b__42165,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42459 = (i__42164 + (1));
i__42164 = G__42459;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42165),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42160_$_iter__42162(cljs.core.chunk_rest(s__42163__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42165),null);
}
} else {
var warning = cljs.core.first(s__42163__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42160_$_iter__42162(cljs.core.rest(s__42163__$2)));
}
} else {
return null;
}
break;
}
});})(s__42161__$1,map__42168,map__42168__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42158,map__42158__$1,msg,info,reload_info))
,null,null));
});})(s__42161__$1,map__42168,map__42168__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42158,map__42158__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42160(cljs.core.rest(s__42161__$1)));
} else {
var G__42463 = cljs.core.rest(s__42161__$1);
s__42161__$1 = G__42463;
continue;
}
} else {
var G__42464 = cljs.core.rest(s__42161__$1);
s__42161__$1 = G__42464;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__42180_42467 = cljs.core.seq(warnings);
var chunk__42181_42468 = null;
var count__42182_42469 = (0);
var i__42183_42470 = (0);
while(true){
if((i__42183_42470 < count__42182_42469)){
var map__42193_42473 = chunk__42181_42468.cljs$core$IIndexed$_nth$arity$2(null,i__42183_42470);
var map__42193_42474__$1 = (((((!((map__42193_42473 == null))))?(((((map__42193_42473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42193_42473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42193_42473):map__42193_42473);
var w_42475 = map__42193_42474__$1;
var msg_42476__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42193_42474__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42477 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42193_42474__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42193_42474__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42193_42474__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42479)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42477),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42478),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42476__$1)].join(''));


var G__42481 = seq__42180_42467;
var G__42482 = chunk__42181_42468;
var G__42483 = count__42182_42469;
var G__42484 = (i__42183_42470 + (1));
seq__42180_42467 = G__42481;
chunk__42181_42468 = G__42482;
count__42182_42469 = G__42483;
i__42183_42470 = G__42484;
continue;
} else {
var temp__5735__auto___42486 = cljs.core.seq(seq__42180_42467);
if(temp__5735__auto___42486){
var seq__42180_42487__$1 = temp__5735__auto___42486;
if(cljs.core.chunked_seq_QMARK_(seq__42180_42487__$1)){
var c__4556__auto___42488 = cljs.core.chunk_first(seq__42180_42487__$1);
var G__42490 = cljs.core.chunk_rest(seq__42180_42487__$1);
var G__42491 = c__4556__auto___42488;
var G__42492 = cljs.core.count(c__4556__auto___42488);
var G__42493 = (0);
seq__42180_42467 = G__42490;
chunk__42181_42468 = G__42491;
count__42182_42469 = G__42492;
i__42183_42470 = G__42493;
continue;
} else {
var map__42196_42496 = cljs.core.first(seq__42180_42487__$1);
var map__42196_42497__$1 = (((((!((map__42196_42496 == null))))?(((((map__42196_42496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42196_42496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42196_42496):map__42196_42496);
var w_42498 = map__42196_42497__$1;
var msg_42499__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42196_42497__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42196_42497__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42501 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42196_42497__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42196_42497__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42502)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42500),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42501),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42499__$1)].join(''));


var G__42505 = cljs.core.next(seq__42180_42487__$1);
var G__42506 = null;
var G__42507 = (0);
var G__42508 = (0);
seq__42180_42467 = G__42505;
chunk__42181_42468 = G__42506;
count__42182_42469 = G__42507;
i__42183_42470 = G__42508;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__42156_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__42156_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__42198){
var map__42199 = p__42198;
var map__42199__$1 = (((((!((map__42199 == null))))?(((((map__42199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42199):map__42199);
var msg = map__42199__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42199__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__42201 = cljs.core.seq(updates);
var chunk__42204 = null;
var count__42205 = (0);
var i__42206 = (0);
while(true){
if((i__42206 < count__42205)){
var path = chunk__42204.cljs$core$IIndexed$_nth$arity$2(null,i__42206);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42250_42514 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42254_42515 = null;
var count__42255_42516 = (0);
var i__42256_42517 = (0);
while(true){
if((i__42256_42517 < count__42255_42516)){
var node_42519 = chunk__42254_42515.cljs$core$IIndexed$_nth$arity$2(null,i__42256_42517);
if(cljs.core.not(node_42519.shadow$old)){
var path_match_42520 = shadow.cljs.devtools.client.browser.match_paths(node_42519.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42520)){
var new_link_42521 = (function (){var G__42278 = node_42519.cloneNode(true);
G__42278.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42520),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42278;
})();
(node_42519.shadow$old = true);

(new_link_42521.onload = ((function (seq__42250_42514,chunk__42254_42515,count__42255_42516,i__42256_42517,seq__42201,chunk__42204,count__42205,i__42206,new_link_42521,path_match_42520,node_42519,path,map__42199,map__42199__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42519);
});})(seq__42250_42514,chunk__42254_42515,count__42255_42516,i__42256_42517,seq__42201,chunk__42204,count__42205,i__42206,new_link_42521,path_match_42520,node_42519,path,map__42199,map__42199__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42520], 0));

goog.dom.insertSiblingAfter(new_link_42521,node_42519);


var G__42524 = seq__42250_42514;
var G__42525 = chunk__42254_42515;
var G__42526 = count__42255_42516;
var G__42527 = (i__42256_42517 + (1));
seq__42250_42514 = G__42524;
chunk__42254_42515 = G__42525;
count__42255_42516 = G__42526;
i__42256_42517 = G__42527;
continue;
} else {
var G__42528 = seq__42250_42514;
var G__42529 = chunk__42254_42515;
var G__42530 = count__42255_42516;
var G__42531 = (i__42256_42517 + (1));
seq__42250_42514 = G__42528;
chunk__42254_42515 = G__42529;
count__42255_42516 = G__42530;
i__42256_42517 = G__42531;
continue;
}
} else {
var G__42534 = seq__42250_42514;
var G__42535 = chunk__42254_42515;
var G__42536 = count__42255_42516;
var G__42537 = (i__42256_42517 + (1));
seq__42250_42514 = G__42534;
chunk__42254_42515 = G__42535;
count__42255_42516 = G__42536;
i__42256_42517 = G__42537;
continue;
}
} else {
var temp__5735__auto___42538 = cljs.core.seq(seq__42250_42514);
if(temp__5735__auto___42538){
var seq__42250_42539__$1 = temp__5735__auto___42538;
if(cljs.core.chunked_seq_QMARK_(seq__42250_42539__$1)){
var c__4556__auto___42540 = cljs.core.chunk_first(seq__42250_42539__$1);
var G__42542 = cljs.core.chunk_rest(seq__42250_42539__$1);
var G__42543 = c__4556__auto___42540;
var G__42544 = cljs.core.count(c__4556__auto___42540);
var G__42545 = (0);
seq__42250_42514 = G__42542;
chunk__42254_42515 = G__42543;
count__42255_42516 = G__42544;
i__42256_42517 = G__42545;
continue;
} else {
var node_42546 = cljs.core.first(seq__42250_42539__$1);
if(cljs.core.not(node_42546.shadow$old)){
var path_match_42548 = shadow.cljs.devtools.client.browser.match_paths(node_42546.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42548)){
var new_link_42549 = (function (){var G__42280 = node_42546.cloneNode(true);
G__42280.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42548),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42280;
})();
(node_42546.shadow$old = true);

(new_link_42549.onload = ((function (seq__42250_42514,chunk__42254_42515,count__42255_42516,i__42256_42517,seq__42201,chunk__42204,count__42205,i__42206,new_link_42549,path_match_42548,node_42546,seq__42250_42539__$1,temp__5735__auto___42538,path,map__42199,map__42199__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42546);
});})(seq__42250_42514,chunk__42254_42515,count__42255_42516,i__42256_42517,seq__42201,chunk__42204,count__42205,i__42206,new_link_42549,path_match_42548,node_42546,seq__42250_42539__$1,temp__5735__auto___42538,path,map__42199,map__42199__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42548], 0));

goog.dom.insertSiblingAfter(new_link_42549,node_42546);


var G__42550 = cljs.core.next(seq__42250_42539__$1);
var G__42551 = null;
var G__42552 = (0);
var G__42553 = (0);
seq__42250_42514 = G__42550;
chunk__42254_42515 = G__42551;
count__42255_42516 = G__42552;
i__42256_42517 = G__42553;
continue;
} else {
var G__42554 = cljs.core.next(seq__42250_42539__$1);
var G__42555 = null;
var G__42556 = (0);
var G__42557 = (0);
seq__42250_42514 = G__42554;
chunk__42254_42515 = G__42555;
count__42255_42516 = G__42556;
i__42256_42517 = G__42557;
continue;
}
} else {
var G__42558 = cljs.core.next(seq__42250_42539__$1);
var G__42559 = null;
var G__42560 = (0);
var G__42561 = (0);
seq__42250_42514 = G__42558;
chunk__42254_42515 = G__42559;
count__42255_42516 = G__42560;
i__42256_42517 = G__42561;
continue;
}
}
} else {
}
}
break;
}


var G__42562 = seq__42201;
var G__42563 = chunk__42204;
var G__42564 = count__42205;
var G__42565 = (i__42206 + (1));
seq__42201 = G__42562;
chunk__42204 = G__42563;
count__42205 = G__42564;
i__42206 = G__42565;
continue;
} else {
var G__42566 = seq__42201;
var G__42567 = chunk__42204;
var G__42568 = count__42205;
var G__42569 = (i__42206 + (1));
seq__42201 = G__42566;
chunk__42204 = G__42567;
count__42205 = G__42568;
i__42206 = G__42569;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42201);
if(temp__5735__auto__){
var seq__42201__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42201__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__42201__$1);
var G__42571 = cljs.core.chunk_rest(seq__42201__$1);
var G__42572 = c__4556__auto__;
var G__42573 = cljs.core.count(c__4556__auto__);
var G__42574 = (0);
seq__42201 = G__42571;
chunk__42204 = G__42572;
count__42205 = G__42573;
i__42206 = G__42574;
continue;
} else {
var path = cljs.core.first(seq__42201__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42284_42575 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42288_42576 = null;
var count__42289_42577 = (0);
var i__42290_42578 = (0);
while(true){
if((i__42290_42578 < count__42289_42577)){
var node_42580 = chunk__42288_42576.cljs$core$IIndexed$_nth$arity$2(null,i__42290_42578);
if(cljs.core.not(node_42580.shadow$old)){
var path_match_42581 = shadow.cljs.devtools.client.browser.match_paths(node_42580.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42581)){
var new_link_42582 = (function (){var G__42320 = node_42580.cloneNode(true);
G__42320.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42581),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42320;
})();
(node_42580.shadow$old = true);

(new_link_42582.onload = ((function (seq__42284_42575,chunk__42288_42576,count__42289_42577,i__42290_42578,seq__42201,chunk__42204,count__42205,i__42206,new_link_42582,path_match_42581,node_42580,path,seq__42201__$1,temp__5735__auto__,map__42199,map__42199__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42580);
});})(seq__42284_42575,chunk__42288_42576,count__42289_42577,i__42290_42578,seq__42201,chunk__42204,count__42205,i__42206,new_link_42582,path_match_42581,node_42580,path,seq__42201__$1,temp__5735__auto__,map__42199,map__42199__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42581], 0));

goog.dom.insertSiblingAfter(new_link_42582,node_42580);


var G__42583 = seq__42284_42575;
var G__42584 = chunk__42288_42576;
var G__42585 = count__42289_42577;
var G__42586 = (i__42290_42578 + (1));
seq__42284_42575 = G__42583;
chunk__42288_42576 = G__42584;
count__42289_42577 = G__42585;
i__42290_42578 = G__42586;
continue;
} else {
var G__42587 = seq__42284_42575;
var G__42588 = chunk__42288_42576;
var G__42589 = count__42289_42577;
var G__42590 = (i__42290_42578 + (1));
seq__42284_42575 = G__42587;
chunk__42288_42576 = G__42588;
count__42289_42577 = G__42589;
i__42290_42578 = G__42590;
continue;
}
} else {
var G__42591 = seq__42284_42575;
var G__42592 = chunk__42288_42576;
var G__42593 = count__42289_42577;
var G__42594 = (i__42290_42578 + (1));
seq__42284_42575 = G__42591;
chunk__42288_42576 = G__42592;
count__42289_42577 = G__42593;
i__42290_42578 = G__42594;
continue;
}
} else {
var temp__5735__auto___42595__$1 = cljs.core.seq(seq__42284_42575);
if(temp__5735__auto___42595__$1){
var seq__42284_42596__$1 = temp__5735__auto___42595__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42284_42596__$1)){
var c__4556__auto___42597 = cljs.core.chunk_first(seq__42284_42596__$1);
var G__42598 = cljs.core.chunk_rest(seq__42284_42596__$1);
var G__42599 = c__4556__auto___42597;
var G__42600 = cljs.core.count(c__4556__auto___42597);
var G__42601 = (0);
seq__42284_42575 = G__42598;
chunk__42288_42576 = G__42599;
count__42289_42577 = G__42600;
i__42290_42578 = G__42601;
continue;
} else {
var node_42602 = cljs.core.first(seq__42284_42596__$1);
if(cljs.core.not(node_42602.shadow$old)){
var path_match_42604 = shadow.cljs.devtools.client.browser.match_paths(node_42602.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42604)){
var new_link_42605 = (function (){var G__42321 = node_42602.cloneNode(true);
G__42321.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42604),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42321;
})();
(node_42602.shadow$old = true);

(new_link_42605.onload = ((function (seq__42284_42575,chunk__42288_42576,count__42289_42577,i__42290_42578,seq__42201,chunk__42204,count__42205,i__42206,new_link_42605,path_match_42604,node_42602,seq__42284_42596__$1,temp__5735__auto___42595__$1,path,seq__42201__$1,temp__5735__auto__,map__42199,map__42199__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_42602);
});})(seq__42284_42575,chunk__42288_42576,count__42289_42577,i__42290_42578,seq__42201,chunk__42204,count__42205,i__42206,new_link_42605,path_match_42604,node_42602,seq__42284_42596__$1,temp__5735__auto___42595__$1,path,seq__42201__$1,temp__5735__auto__,map__42199,map__42199__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42604], 0));

goog.dom.insertSiblingAfter(new_link_42605,node_42602);


var G__42612 = cljs.core.next(seq__42284_42596__$1);
var G__42613 = null;
var G__42614 = (0);
var G__42615 = (0);
seq__42284_42575 = G__42612;
chunk__42288_42576 = G__42613;
count__42289_42577 = G__42614;
i__42290_42578 = G__42615;
continue;
} else {
var G__42617 = cljs.core.next(seq__42284_42596__$1);
var G__42618 = null;
var G__42619 = (0);
var G__42620 = (0);
seq__42284_42575 = G__42617;
chunk__42288_42576 = G__42618;
count__42289_42577 = G__42619;
i__42290_42578 = G__42620;
continue;
}
} else {
var G__42621 = cljs.core.next(seq__42284_42596__$1);
var G__42622 = null;
var G__42623 = (0);
var G__42624 = (0);
seq__42284_42575 = G__42621;
chunk__42288_42576 = G__42622;
count__42289_42577 = G__42623;
i__42290_42578 = G__42624;
continue;
}
}
} else {
}
}
break;
}


var G__42625 = cljs.core.next(seq__42201__$1);
var G__42626 = null;
var G__42627 = (0);
var G__42628 = (0);
seq__42201 = G__42625;
chunk__42204 = G__42626;
count__42205 = G__42627;
i__42206 = G__42628;
continue;
} else {
var G__42629 = cljs.core.next(seq__42201__$1);
var G__42630 = null;
var G__42631 = (0);
var G__42632 = (0);
seq__42201 = G__42629;
chunk__42204 = G__42630;
count__42205 = G__42631;
i__42206 = G__42632;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__42322){
var map__42323 = p__42322;
var map__42323__$1 = (((((!((map__42323 == null))))?(((((map__42323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42323):map__42323);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42323__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__42335){
var map__42336 = p__42335;
var map__42336__$1 = (((((!((map__42336 == null))))?(((((map__42336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42336):map__42336);
var _ = map__42336__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42336__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__42338,done,error){
var map__42339 = p__42338;
var map__42339__$1 = (((((!((map__42339 == null))))?(((((map__42339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42339):map__42339);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42339__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__42346,done,error){
var map__42349 = p__42346;
var map__42349__$1 = (((((!((map__42349 == null))))?(((((map__42349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42349):map__42349);
var msg = map__42349__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42349__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42349__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42349__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__42352){
var map__42354 = p__42352;
var map__42354__$1 = (((((!((map__42354 == null))))?(((((map__42354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42354):map__42354);
var src = map__42354__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42354__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__42360 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__42360) : done.call(null,G__42360));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__42361){
var map__42362 = p__42361;
var map__42362__$1 = (((((!((map__42362 == null))))?(((((map__42362.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42362.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42362):map__42362);
var msg__$1 = map__42362__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42362__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e42365){var ex = e42365;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__42368){
var map__42369 = p__42368;
var map__42369__$1 = (((((!((map__42369 == null))))?(((((map__42369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42369):map__42369);
var env = map__42369__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42369__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__42380){
var map__42381 = p__42380;
var map__42381__$1 = (((((!((map__42381 == null))))?(((((map__42381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42381):map__42381);
var msg = map__42381__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42381__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__42391){
var map__42392 = p__42391;
var map__42392__$1 = (((((!((map__42392 == null))))?(((((map__42392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42392.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42392):map__42392);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42392__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42392__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__42399){
var map__42401 = p__42399;
var map__42401__$1 = (((((!((map__42401 == null))))?(((((map__42401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42401):map__42401);
var svc = map__42401__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42401__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
