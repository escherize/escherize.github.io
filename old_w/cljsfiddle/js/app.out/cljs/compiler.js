// Compiled by ClojureScript 1.8.34 {:static-fns true}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_first_ns_segment,cljs.core.keys(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__14337 = s;
var map__14337__$1 = ((((!((map__14337 == null)))?((((map__14337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14337):map__14337);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14337__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14337__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__14340 = info;
var map__14341 = G__14340;
var map__14341__$1 = ((((!((map__14341 == null)))?((((map__14341.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14341.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14341):map__14341);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14341__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__14340__$1 = G__14340;
while(true){
var d__$2 = d__$1;
var map__14343 = G__14340__$1;
var map__14343__$1 = ((((!((map__14343 == null)))?((((map__14343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14343):map__14343);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14343__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__14345 = (d__$2 + (1));
var G__14346 = shadow__$1;
d__$1 = G__14345;
G__14340__$1 = G__14346;
continue;
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments()))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__14347){
var map__14353 = p__14347;
var map__14353__$1 = ((((!((map__14353 == null)))?((((map__14353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14353):map__14353);
var name_var = map__14353__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14353__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14353__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace([cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__14355 = info;
var map__14355__$1 = ((((!((map__14355 == null)))?((((map__14355.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14355.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14355):map__14355);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14355__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14355__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__14357 = [cljs.core.str(clojure.string.replace([cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__14357) : cljs.compiler.munge.call(null,G__14357));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var args14358 = [];
var len__7578__auto___14361 = arguments.length;
var i__7579__auto___14362 = (0);
while(true){
if((i__7579__auto___14362 < len__7578__auto___14361)){
args14358.push((arguments[i__7579__auto___14362]));

var G__14363 = (i__7579__auto___14362 + (1));
i__7579__auto___14362 = G__14363;
continue;
} else {
}
break;
}

var G__14360 = args14358.length;
switch (G__14360) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14358.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace([cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = cljs.core.munge(ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__14366 = cp;
switch (G__14366) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return [cljs.core.str("\\u"),cljs.core.str(pad),cljs.core.str(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__14372_14376 = cljs.core.seq(s);
var chunk__14373_14377 = null;
var count__14374_14378 = (0);
var i__14375_14379 = (0);
while(true){
if((i__14375_14379 < count__14374_14378)){
var c_14380 = chunk__14373_14377.cljs$core$IIndexed$_nth$arity$2(null,i__14375_14379);
sb.append(cljs.compiler.escape_char(c_14380));

var G__14381 = seq__14372_14376;
var G__14382 = chunk__14373_14377;
var G__14383 = count__14374_14378;
var G__14384 = (i__14375_14379 + (1));
seq__14372_14376 = G__14381;
chunk__14373_14377 = G__14382;
count__14374_14378 = G__14383;
i__14375_14379 = G__14384;
continue;
} else {
var temp__4425__auto___14385 = cljs.core.seq(seq__14372_14376);
if(temp__4425__auto___14385){
var seq__14372_14386__$1 = temp__4425__auto___14385;
if(cljs.core.chunked_seq_QMARK_(seq__14372_14386__$1)){
var c__7320__auto___14387 = cljs.core.chunk_first(seq__14372_14386__$1);
var G__14388 = cljs.core.chunk_rest(seq__14372_14386__$1);
var G__14389 = c__7320__auto___14387;
var G__14390 = cljs.core.count(c__7320__auto___14387);
var G__14391 = (0);
seq__14372_14376 = G__14388;
chunk__14373_14377 = G__14389;
count__14374_14378 = G__14390;
i__14375_14379 = G__14391;
continue;
} else {
var c_14392 = cljs.core.first(seq__14372_14386__$1);
sb.append(cljs.compiler.escape_char(c_14392));

var G__14393 = cljs.core.next(seq__14372_14386__$1);
var G__14394 = null;
var G__14395 = (0);
var G__14396 = (0);
seq__14372_14376 = G__14393;
chunk__14373_14377 = G__14394;
count__14374_14378 = G__14395;
i__14375_14379 = G__14396;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__7433__auto__ = (function (){var G__14397 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14397) : cljs.core.atom.call(null,G__14397));
})();
var prefer_table__7434__auto__ = (function (){var G__14398 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14398) : cljs.core.atom.call(null,G__14398));
})();
var method_cache__7435__auto__ = (function (){var G__14399 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14399) : cljs.core.atom.call(null,G__14399));
})();
var cached_hierarchy__7436__auto__ = (function (){var G__14400 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14400) : cljs.core.atom.call(null,G__14400));
})();
var hierarchy__7437__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7437__auto__,method_table__7433__auto__,prefer_table__7434__auto__,method_cache__7435__auto__,cached_hierarchy__7436__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__12728__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__12728__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__14406_14411 = ast;
var map__14406_14412__$1 = ((((!((map__14406_14411 == null)))?((((map__14406_14411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14406_14411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14406_14411):map__14406_14411);
var env_14413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14406_14412__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_14413))){
var map__14408_14414 = env_14413;
var map__14408_14415__$1 = ((((!((map__14408_14414 == null)))?((((map__14408_14414.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14408_14414.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14408_14414):map__14408_14414);
var line_14416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14408_14415__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_14417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14408_14415__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__14408_14414,map__14408_14415__$1,line_14416,column_14417,map__14406_14411,map__14406_14412__$1,env_14413,val__12728__auto__){
return (function (m){
var minfo = (function (){var G__14410 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__14410__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14410,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__14410);
return G__14410__$1;
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_14416 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__14408_14414,map__14408_14415__$1,line_14416,column_14417,map__14406_14411,map__14406_14412__$1,env_14413,val__12728__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_14417)?(column_14417 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__14408_14414,map__14408_14415__$1,line_14416,column_14417,map__14406_14411,map__14406_14412__$1,env_14413,val__12728__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__14408_14414,map__14408_14415__$1,line_14416,column_14417,map__14406_14411,map__14406_14412__$1,env_14413,val__12728__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__14408_14414,map__14408_14415__$1,line_14416,column_14417,map__14406_14411,map__14406_14412__$1,env_14413,val__12728__auto__))
,cljs.core.sorted_map()));
});})(map__14408_14414,map__14408_14415__$1,line_14416,column_14417,map__14406_14411,map__14406_14412__$1,env_14413,val__12728__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__12728__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__7585__auto__ = [];
var len__7578__auto___14424 = arguments.length;
var i__7579__auto___14425 = (0);
while(true){
if((i__7579__auto___14425 < len__7578__auto___14424)){
args__7585__auto__.push((arguments[i__7579__auto___14425]));

var G__14426 = (i__7579__auto___14425 + (1));
i__7579__auto___14425 = G__14426;
continue;
} else {
}
break;
}

var argseq__7586__auto__ = ((((0) < args__7585__auto__.length))?(new cljs.core.IndexedSeq(args__7585__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__7586__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__14420_14427 = cljs.core.seq(xs);
var chunk__14421_14428 = null;
var count__14422_14429 = (0);
var i__14423_14430 = (0);
while(true){
if((i__14423_14430 < count__14422_14429)){
var x_14431 = chunk__14421_14428.cljs$core$IIndexed$_nth$arity$2(null,i__14423_14430);
if((x_14431 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_14431)){
cljs.compiler.emit(x_14431);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_14431)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_14431);
} else {
if(goog.isFunction(x_14431)){
(x_14431.cljs$core$IFn$_invoke$arity$0 ? x_14431.cljs$core$IFn$_invoke$arity$0() : x_14431.call(null));
} else {
var s_14432 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_14431], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__14420_14427,chunk__14421_14428,count__14422_14429,i__14423_14430,s_14432,x_14431){
return (function (p1__14418_SHARP_){
return (p1__14418_SHARP_ + cljs.core.count(s_14432));
});})(seq__14420_14427,chunk__14421_14428,count__14422_14429,i__14423_14430,s_14432,x_14431))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_14432], 0));

}
}
}
}

var G__14433 = seq__14420_14427;
var G__14434 = chunk__14421_14428;
var G__14435 = count__14422_14429;
var G__14436 = (i__14423_14430 + (1));
seq__14420_14427 = G__14433;
chunk__14421_14428 = G__14434;
count__14422_14429 = G__14435;
i__14423_14430 = G__14436;
continue;
} else {
var temp__4425__auto___14437 = cljs.core.seq(seq__14420_14427);
if(temp__4425__auto___14437){
var seq__14420_14438__$1 = temp__4425__auto___14437;
if(cljs.core.chunked_seq_QMARK_(seq__14420_14438__$1)){
var c__7320__auto___14439 = cljs.core.chunk_first(seq__14420_14438__$1);
var G__14440 = cljs.core.chunk_rest(seq__14420_14438__$1);
var G__14441 = c__7320__auto___14439;
var G__14442 = cljs.core.count(c__7320__auto___14439);
var G__14443 = (0);
seq__14420_14427 = G__14440;
chunk__14421_14428 = G__14441;
count__14422_14429 = G__14442;
i__14423_14430 = G__14443;
continue;
} else {
var x_14444 = cljs.core.first(seq__14420_14438__$1);
if((x_14444 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(x_14444)){
cljs.compiler.emit(x_14444);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(x_14444)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_14444);
} else {
if(goog.isFunction(x_14444)){
(x_14444.cljs$core$IFn$_invoke$arity$0 ? x_14444.cljs$core$IFn$_invoke$arity$0() : x_14444.call(null));
} else {
var s_14445 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_14444], 0));
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__14420_14427,chunk__14421_14428,count__14422_14429,i__14423_14430,s_14445,x_14444,seq__14420_14438__$1,temp__4425__auto___14437){
return (function (p1__14418_SHARP_){
return (p1__14418_SHARP_ + cljs.core.count(s_14445));
});})(seq__14420_14427,chunk__14421_14428,count__14422_14429,i__14423_14430,s_14445,x_14444,seq__14420_14438__$1,temp__4425__auto___14437))
);
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_14445], 0));

}
}
}
}

var G__14446 = cljs.core.next(seq__14420_14438__$1);
var G__14447 = null;
var G__14448 = (0);
var G__14449 = (0);
seq__14420_14427 = G__14446;
chunk__14421_14428 = G__14447;
count__14422_14429 = G__14448;
i__14423_14430 = G__14449;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq14419){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14419));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__7585__auto__ = [];
var len__7578__auto___14454 = arguments.length;
var i__7579__auto___14455 = (0);
while(true){
if((i__7579__auto___14455 < len__7578__auto___14454)){
args__7585__auto__.push((arguments[i__7579__auto___14455]));

var G__14456 = (i__7579__auto___14455 + (1));
i__7579__auto___14455 = G__14456;
continue;
} else {
}
break;
}

var argseq__7586__auto__ = ((((0) < args__7585__auto__.length))?(new cljs.core.IndexedSeq(args__7585__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__7586__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

cljs.core.println();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__14451){
var map__14452 = p__14451;
var map__14452__$1 = ((((!((map__14452 == null)))?((((map__14452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14452):map__14452);
var m = map__14452__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14452__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.array_seq([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq14450){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14450));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__7494__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14459_14461 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14460_14462 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14459_14461,_STAR_print_fn_STAR_14460_14462,sb__7494__auto__){
return (function (x__7495__auto__){
return sb__7494__auto__.append(x__7495__auto__);
});})(_STAR_print_newline_STAR_14459_14461,_STAR_print_fn_STAR_14460_14462,sb__7494__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14460_14462;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14459_14461;
}
return [cljs.core.str(sb__7494__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__7433__auto__ = (function (){var G__14463 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14463) : cljs.core.atom.call(null,G__14463));
})();
var prefer_table__7434__auto__ = (function (){var G__14464 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14464) : cljs.core.atom.call(null,G__14464));
})();
var method_cache__7435__auto__ = (function (){var G__14465 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14465) : cljs.core.atom.call(null,G__14465));
})();
var cached_hierarchy__7436__auto__ = (function (){var G__14466 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14466) : cljs.core.atom.call(null,G__14466));
})();
var hierarchy__7437__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7437__auto__,method_table__7433__auto__,prefer_table__7434__auto__,method_cache__7435__auto__,cached_hierarchy__7436__auto__));
})();
}
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["null"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",x,")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x))], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(x)?"true":"false")], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new RegExp(\"\"))"], 0));
} else {
var vec__14467 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14467,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14467,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14467,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([pattern], 0));
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Keyword("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__14470_14472 = (cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__14470_14472) : cljs.compiler.emit_constant.call(null,G__14470_14472));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__14471_14473 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__14471_14473) : cljs.compiler.emit_constant.call(null,G__14471_14473));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Symbol("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(symstr) : cljs.compiler.emit_constant.call(null,symstr));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__14475_14476 = cljs.core.hash(sym);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__14475_14476) : cljs.compiler.emit_constant.call(null,G__14475_14476));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__14477 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__14477) : x.call(null,G__14477));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__14478 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__14478) : x.call(null,G__14478));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new Date(",date.getTime(),")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__14480){
var map__14481 = p__14480;
var map__14481__$1 = ((((!((map__14481 == null)))?((((map__14481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14481):map__14481);
var arg = map__14481__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14481__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14481__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14481__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name)], null));
var or__6509__auto__ = js_module_name;
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(arg)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__14321__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__14483 = info__$1;
var G__14483__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__14483):G__14483);
return G__14483__$1;
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__14484){
var map__14485 = p__14484;
var map__14485__$1 = ((((!((map__14485 == null)))?((((map__14485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14485):map__14485);
var arg = map__14485__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14485__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14485__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14485__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14485__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__14487 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__14487__$1 = ((((!((map__14487 == null)))?((((map__14487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14487):map__14487);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14487__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__14321__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__14489){
var map__14490 = p__14489;
var map__14490__$1 = ((((!((map__14490 == null)))?((((map__14490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14490):map__14490);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14490__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14490__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14490__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14321__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__14492_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__14492_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__14493){
var map__14494 = p__14493;
var map__14494__$1 = ((((!((map__14494 == null)))?((((map__14494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14494):map__14494);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14494__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14494__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14494__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__14321__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if((cljs.core.count(keys) === (0))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentArrayMap.EMPTY"], 0));
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_(keys))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], true, false)"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep(keys),"],[",cljs.compiler.comma_sep(vals),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__14496){
var map__14497 = p__14496;
var map__14497__$1 = ((((!((map__14497 == null)))?((((map__14497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14497):map__14497);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14497__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14497__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14321__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__14499){
var map__14500 = p__14499;
var map__14500__$1 = ((((!((map__14500 == null)))?((((map__14500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14500):map__14500);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14500__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14500__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14321__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_14502 = cljs.core.count(items);
if((cnt_14502 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentVector(null, ",cnt_14502,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__14503_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__14503_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__14504){
var map__14505 = p__14504;
var map__14505__$1 = ((((!((map__14505 == null)))?((((map__14505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14505):map__14505);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14505__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14505__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14321__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.EMPTY"], 0));
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_(items))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"))),"], null), null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__14507){
var map__14508 = p__14507;
var map__14508__$1 = ((((!((map__14508 == null)))?((((map__14508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14508):map__14508);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14508__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14508__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14508__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14321__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["{"], 0));

var temp__4425__auto___14518 = cljs.core.seq(items);
if(temp__4425__auto___14518){
var items_14519__$1 = temp__4425__auto___14518;
var vec__14510_14520 = items_14519__$1;
var vec__14511_14521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14510_14520,(0),null);
var k_14522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14511_14521,(0),null);
var v_14523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14511_14521,(1),null);
var r_14524 = cljs.core.nthnext(vec__14510_14520,(1));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\"",cljs.core.name(k_14522),"\": ",v_14523], 0));

var seq__14512_14525 = cljs.core.seq(r_14524);
var chunk__14513_14526 = null;
var count__14514_14527 = (0);
var i__14515_14528 = (0);
while(true){
if((i__14515_14528 < count__14514_14527)){
var vec__14516_14529 = chunk__14513_14526.cljs$core$IIndexed$_nth$arity$2(null,i__14515_14528);
var k_14530__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14516_14529,(0),null);
var v_14531__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14516_14529,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_14530__$1),"\": ",v_14531__$1], 0));

var G__14532 = seq__14512_14525;
var G__14533 = chunk__14513_14526;
var G__14534 = count__14514_14527;
var G__14535 = (i__14515_14528 + (1));
seq__14512_14525 = G__14532;
chunk__14513_14526 = G__14533;
count__14514_14527 = G__14534;
i__14515_14528 = G__14535;
continue;
} else {
var temp__4425__auto___14536__$1 = cljs.core.seq(seq__14512_14525);
if(temp__4425__auto___14536__$1){
var seq__14512_14537__$1 = temp__4425__auto___14536__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14512_14537__$1)){
var c__7320__auto___14538 = cljs.core.chunk_first(seq__14512_14537__$1);
var G__14539 = cljs.core.chunk_rest(seq__14512_14537__$1);
var G__14540 = c__7320__auto___14538;
var G__14541 = cljs.core.count(c__7320__auto___14538);
var G__14542 = (0);
seq__14512_14525 = G__14539;
chunk__14513_14526 = G__14540;
count__14514_14527 = G__14541;
i__14515_14528 = G__14542;
continue;
} else {
var vec__14517_14543 = cljs.core.first(seq__14512_14537__$1);
var k_14544__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14517_14543,(0),null);
var v_14545__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14517_14543,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_14544__$1),"\": ",v_14545__$1], 0));

var G__14546 = cljs.core.next(seq__14512_14537__$1);
var G__14547 = null;
var G__14548 = (0);
var G__14549 = (0);
seq__14512_14525 = G__14546;
chunk__14513_14526 = G__14547;
count__14514_14527 = G__14548;
i__14515_14528 = G__14549;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["[",cljs.compiler.comma_sep(items),"]"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__14550){
var map__14551 = p__14550;
var map__14551__$1 = ((((!((map__14551 == null)))?((((map__14551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14551):map__14551);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14551__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14551__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__14321__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__14553){
var map__14556 = p__14553;
var map__14556__$1 = ((((!((map__14556 == null)))?((((map__14556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14556):map__14556);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14556__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14556__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__6497__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__6497__auto__){
var and__6497__auto____$1 = form;
if(cljs.core.truth_(and__6497__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__6497__auto____$1;
}
} else {
return and__6497__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__14558){
var map__14561 = p__14558;
var map__14561__$1 = ((((!((map__14561 == null)))?((((map__14561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14561):map__14561);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14561__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14561__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__6509__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__14563){
var map__14564 = p__14563;
var map__14564__$1 = ((((!((map__14564 == null)))?((((map__14564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14564):map__14564);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14564__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14564__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14564__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14564__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14564__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__6509__auto__ = unchecked;
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then], 0));
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(cljs.core.truth_(",test,")){"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(",test,"){"], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then,"} else {"], 0));

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$,"}"], 0));
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__14566){
var map__14567 = p__14566;
var map__14567__$1 = ((((!((map__14567 == null)))?((((map__14567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14567):map__14567);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14567__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14567__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14567__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14567__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14567__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){"], 0));
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",gs,";"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch (",v,") {"], 0));

var seq__14569_14583 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__14570_14584 = null;
var count__14571_14585 = (0);
var i__14572_14586 = (0);
while(true){
if((i__14572_14586 < count__14571_14585)){
var vec__14573_14587 = chunk__14570_14584.cljs$core$IIndexed$_nth$arity$2(null,i__14572_14586);
var ts_14588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14573_14587,(0),null);
var then_14589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14573_14587,(1),null);
var seq__14574_14590 = cljs.core.seq(ts_14588);
var chunk__14575_14591 = null;
var count__14576_14592 = (0);
var i__14577_14593 = (0);
while(true){
if((i__14577_14593 < count__14576_14592)){
var test_14594 = chunk__14575_14591.cljs$core$IIndexed$_nth$arity$2(null,i__14577_14593);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_14594,":"], 0));

var G__14595 = seq__14574_14590;
var G__14596 = chunk__14575_14591;
var G__14597 = count__14576_14592;
var G__14598 = (i__14577_14593 + (1));
seq__14574_14590 = G__14595;
chunk__14575_14591 = G__14596;
count__14576_14592 = G__14597;
i__14577_14593 = G__14598;
continue;
} else {
var temp__4425__auto___14599 = cljs.core.seq(seq__14574_14590);
if(temp__4425__auto___14599){
var seq__14574_14600__$1 = temp__4425__auto___14599;
if(cljs.core.chunked_seq_QMARK_(seq__14574_14600__$1)){
var c__7320__auto___14601 = cljs.core.chunk_first(seq__14574_14600__$1);
var G__14602 = cljs.core.chunk_rest(seq__14574_14600__$1);
var G__14603 = c__7320__auto___14601;
var G__14604 = cljs.core.count(c__7320__auto___14601);
var G__14605 = (0);
seq__14574_14590 = G__14602;
chunk__14575_14591 = G__14603;
count__14576_14592 = G__14604;
i__14577_14593 = G__14605;
continue;
} else {
var test_14606 = cljs.core.first(seq__14574_14600__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_14606,":"], 0));

var G__14607 = cljs.core.next(seq__14574_14600__$1);
var G__14608 = null;
var G__14609 = (0);
var G__14610 = (0);
seq__14574_14590 = G__14607;
chunk__14575_14591 = G__14608;
count__14576_14592 = G__14609;
i__14577_14593 = G__14610;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_14589], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_14589], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__14611 = seq__14569_14583;
var G__14612 = chunk__14570_14584;
var G__14613 = count__14571_14585;
var G__14614 = (i__14572_14586 + (1));
seq__14569_14583 = G__14611;
chunk__14570_14584 = G__14612;
count__14571_14585 = G__14613;
i__14572_14586 = G__14614;
continue;
} else {
var temp__4425__auto___14615 = cljs.core.seq(seq__14569_14583);
if(temp__4425__auto___14615){
var seq__14569_14616__$1 = temp__4425__auto___14615;
if(cljs.core.chunked_seq_QMARK_(seq__14569_14616__$1)){
var c__7320__auto___14617 = cljs.core.chunk_first(seq__14569_14616__$1);
var G__14618 = cljs.core.chunk_rest(seq__14569_14616__$1);
var G__14619 = c__7320__auto___14617;
var G__14620 = cljs.core.count(c__7320__auto___14617);
var G__14621 = (0);
seq__14569_14583 = G__14618;
chunk__14570_14584 = G__14619;
count__14571_14585 = G__14620;
i__14572_14586 = G__14621;
continue;
} else {
var vec__14578_14622 = cljs.core.first(seq__14569_14616__$1);
var ts_14623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14578_14622,(0),null);
var then_14624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14578_14622,(1),null);
var seq__14579_14625 = cljs.core.seq(ts_14623);
var chunk__14580_14626 = null;
var count__14581_14627 = (0);
var i__14582_14628 = (0);
while(true){
if((i__14582_14628 < count__14581_14627)){
var test_14629 = chunk__14580_14626.cljs$core$IIndexed$_nth$arity$2(null,i__14582_14628);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_14629,":"], 0));

var G__14630 = seq__14579_14625;
var G__14631 = chunk__14580_14626;
var G__14632 = count__14581_14627;
var G__14633 = (i__14582_14628 + (1));
seq__14579_14625 = G__14630;
chunk__14580_14626 = G__14631;
count__14581_14627 = G__14632;
i__14582_14628 = G__14633;
continue;
} else {
var temp__4425__auto___14634__$1 = cljs.core.seq(seq__14579_14625);
if(temp__4425__auto___14634__$1){
var seq__14579_14635__$1 = temp__4425__auto___14634__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14579_14635__$1)){
var c__7320__auto___14636 = cljs.core.chunk_first(seq__14579_14635__$1);
var G__14637 = cljs.core.chunk_rest(seq__14579_14635__$1);
var G__14638 = c__7320__auto___14636;
var G__14639 = cljs.core.count(c__7320__auto___14636);
var G__14640 = (0);
seq__14579_14625 = G__14637;
chunk__14580_14626 = G__14638;
count__14581_14627 = G__14639;
i__14582_14628 = G__14640;
continue;
} else {
var test_14641 = cljs.core.first(seq__14579_14635__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_14641,":"], 0));

var G__14642 = cljs.core.next(seq__14579_14635__$1);
var G__14643 = null;
var G__14644 = (0);
var G__14645 = (0);
seq__14579_14625 = G__14642;
chunk__14580_14626 = G__14643;
count__14581_14627 = G__14644;
i__14582_14628 = G__14645;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_14624], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_14624], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__14646 = cljs.core.next(seq__14569_14616__$1);
var G__14647 = null;
var G__14648 = (0);
var G__14649 = (0);
seq__14569_14583 = G__14646;
chunk__14570_14584 = G__14647;
count__14571_14585 = G__14648;
i__14572_14586 = G__14649;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",default$], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default$], 0));
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",gs,";})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__14650){
var map__14651 = p__14650;
var map__14651__$1 = ((((!((map__14651 == null)))?((((map__14651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14651):map__14651);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14651__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14651__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){throw ",throw$,"})()"], 0));
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw ",throw$,";"], 0));
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return [cljs.core.str("!"),cljs.core.str(cljs$compiler$resolve_type(env,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1))))].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__14660 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14660,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14660,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs$compiler$resolve_type(env,rstr):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (idx,vec__14660,fstr,rstr,ret_t,axstr){
return (function (p1__14653_SHARP_){
return cljs$compiler$resolve_type(env,p1__14653_SHARP_);
});})(idx,vec__14660,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__14661 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts)),cljs.core.str(")")].join('');
var G__14661__$1 = (cljs.core.truth_(ret_t)?[cljs.core.str(G__14661),cljs.core.str(":"),cljs.core.str(ret_t)].join(''):G__14661);
return G__14661__$1;
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str(cljs$compiler$resolve_type(env,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1))))),cljs.core.str("=")].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t))))].join(''));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return [cljs.core.str("{"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ts__$1,xs){
return (function (p1__14662_SHARP_){
return cljs.compiler.resolve_type(env,p1__14662_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__14665 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14665,(0),null);
var ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14665,(1),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14665,(2),null);
var xs = cljs.core.nthnext(vec__14665,(3));
if(cljs.core.truth_((function (){var and__6497__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__6497__auto__){
var and__6497__auto____$1 = ts;
if(cljs.core.truth_(and__6497__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6497__auto____$1;
}
} else {
return and__6497__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__14666 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14666,(0),null);
var ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14666,(1),null);
var xs = cljs.core.nthnext(vec__14666,(2));
if(cljs.core.truth_((function (){var and__6497__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__6497__auto__){
var and__6497__auto____$1 = ts;
if(cljs.core.truth_(and__6497__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__6497__auto____$1;
}
} else {
return and__6497__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warn","warn",-436710552),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null)));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var args14668 = [];
var len__7578__auto___14695 = arguments.length;
var i__7579__auto___14696 = (0);
while(true){
if((i__7579__auto___14696 < len__7578__auto___14695)){
args14668.push((arguments[i__7579__auto___14696]));

var G__14697 = (i__7579__auto___14696 + (1));
i__7579__auto___14696 = G__14697;
continue;
} else {
}
break;
}

var G__14670 = args14668.length;
switch (G__14670) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14668.length)].join('')));

}
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
});

cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$print_comment_lines(e){
var vec__14686 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (docs,docs__$1,docs__$2){
return (function (p1__14667_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__14667_SHARP_);
} else {
return p1__14667_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines(e));
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14686,(0),null);
var ys = cljs.core.nthnext(vec__14686,(1));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(x,"*/","* /")], 0));

var seq__14687 = cljs.core.seq(ys);
var chunk__14688 = null;
var count__14689 = (0);
var i__14690 = (0);
while(true){
if((i__14690 < count__14689)){
var next_line = chunk__14688.cljs$core$IIndexed$_nth$arity$2(null,i__14690);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__14699 = seq__14687;
var G__14700 = chunk__14688;
var G__14701 = count__14689;
var G__14702 = (i__14690 + (1));
seq__14687 = G__14699;
chunk__14688 = G__14700;
count__14689 = G__14701;
i__14690 = G__14702;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__14687);
if(temp__4425__auto__){
var seq__14687__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14687__$1)){
var c__7320__auto__ = cljs.core.chunk_first(seq__14687__$1);
var G__14703 = cljs.core.chunk_rest(seq__14687__$1);
var G__14704 = c__7320__auto__;
var G__14705 = cljs.core.count(c__7320__auto__);
var G__14706 = (0);
seq__14687 = G__14703;
chunk__14688 = G__14704;
count__14689 = G__14705;
i__14690 = G__14706;
continue;
} else {
var next_line = cljs.core.first(seq__14687__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /")], 0));

var G__14707 = cljs.core.next(seq__14687__$1);
var G__14708 = null;
var G__14709 = (0);
var G__14710 = (0);
seq__14687 = G__14707;
chunk__14688 = G__14708;
count__14689 = G__14709;
i__14690 = G__14710;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

var seq__14691_14711 = cljs.core.seq(docs__$2);
var chunk__14692_14712 = null;
var count__14693_14713 = (0);
var i__14694_14714 = (0);
while(true){
if((i__14694_14714 < count__14693_14713)){
var e_14715 = chunk__14692_14712.cljs$core$IIndexed$_nth$arity$2(null,i__14694_14714);
if(cljs.core.truth_(e_14715)){
print_comment_lines(e_14715);
} else {
}

var G__14716 = seq__14691_14711;
var G__14717 = chunk__14692_14712;
var G__14718 = count__14693_14713;
var G__14719 = (i__14694_14714 + (1));
seq__14691_14711 = G__14716;
chunk__14692_14712 = G__14717;
count__14693_14713 = G__14718;
i__14694_14714 = G__14719;
continue;
} else {
var temp__4425__auto___14720 = cljs.core.seq(seq__14691_14711);
if(temp__4425__auto___14720){
var seq__14691_14721__$1 = temp__4425__auto___14720;
if(cljs.core.chunked_seq_QMARK_(seq__14691_14721__$1)){
var c__7320__auto___14722 = cljs.core.chunk_first(seq__14691_14721__$1);
var G__14723 = cljs.core.chunk_rest(seq__14691_14721__$1);
var G__14724 = c__7320__auto___14722;
var G__14725 = cljs.core.count(c__7320__auto___14722);
var G__14726 = (0);
seq__14691_14711 = G__14723;
chunk__14692_14712 = G__14724;
count__14693_14713 = G__14725;
i__14694_14714 = G__14726;
continue;
} else {
var e_14727 = cljs.core.first(seq__14691_14721__$1);
if(cljs.core.truth_(e_14727)){
print_comment_lines(e_14727);
} else {
}

var G__14728 = cljs.core.next(seq__14691_14721__$1);
var G__14729 = null;
var G__14730 = (0);
var G__14731 = (0);
seq__14691_14711 = G__14728;
chunk__14692_14712 = G__14729;
count__14693_14713 = G__14730;
i__14694_14714 = G__14731;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" */"], 0));
} else {
return null;
}
});

cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3;
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword(null,"options","options",99638489));
var and__6497__auto__ = cljs.core.some(((function (opts){
return (function (p1__14733_SHARP_){
return goog.string.startsWith(p1__14733_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__6497__auto__)){
var and__6497__auto____$1 = opts;
if(cljs.core.truth_(and__6497__auto____$1)){
var and__6497__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__6497__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([define], 0));
} else {
return null;
}
} else {
return and__6497__auto____$2;
}
} else {
return and__6497__auto____$1;
}
} else {
return and__6497__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__14734){
var map__14735 = p__14734;
var map__14735__$1 = ((((!((map__14735 == null)))?((((map__14735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14735):map__14735);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14735__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14735__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14735__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14735__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14735__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14735__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14735__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14735__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14735__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__6509__auto__ = init;
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ("], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$], 0));

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",(function (){var temp__4423__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__4423__auto__)){
var define = temp__4423__auto__;
return define;
} else {
return init;
}
})()], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["; return ("], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0))], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
} else {
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");"], 0));
} else {
}

if(cljs.core.truth_((function (){var and__6497__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__6497__auto__)){
return test;
} else {
return and__6497__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$,".cljs$lang$test = ",test,";"], 0));
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__14737){
var map__14754 = p__14737;
var map__14754__$1 = ((((!((map__14754 == null)))?((((map__14754.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14754.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14754):map__14754);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14754__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14754__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14754__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (",arglist,"){"], 0));

var seq__14756_14770 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__14757_14771 = null;
var count__14758_14772 = (0);
var i__14759_14773 = (0);
while(true){
if((i__14759_14773 < count__14758_14772)){
var vec__14760_14774 = chunk__14757_14771.cljs$core$IIndexed$_nth$arity$2(null,i__14759_14773);
var i_14775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14760_14774,(0),null);
var param_14776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14760_14774,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_14776);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__14777 = seq__14756_14770;
var G__14778 = chunk__14757_14771;
var G__14779 = count__14758_14772;
var G__14780 = (i__14759_14773 + (1));
seq__14756_14770 = G__14777;
chunk__14757_14771 = G__14778;
count__14758_14772 = G__14779;
i__14759_14773 = G__14780;
continue;
} else {
var temp__4425__auto___14781 = cljs.core.seq(seq__14756_14770);
if(temp__4425__auto___14781){
var seq__14756_14782__$1 = temp__4425__auto___14781;
if(cljs.core.chunked_seq_QMARK_(seq__14756_14782__$1)){
var c__7320__auto___14783 = cljs.core.chunk_first(seq__14756_14782__$1);
var G__14784 = cljs.core.chunk_rest(seq__14756_14782__$1);
var G__14785 = c__7320__auto___14783;
var G__14786 = cljs.core.count(c__7320__auto___14783);
var G__14787 = (0);
seq__14756_14770 = G__14784;
chunk__14757_14771 = G__14785;
count__14758_14772 = G__14786;
i__14759_14773 = G__14787;
continue;
} else {
var vec__14761_14788 = cljs.core.first(seq__14756_14782__$1);
var i_14789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14761_14788,(0),null);
var param_14790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14761_14788,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_14790);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__14791 = cljs.core.next(seq__14756_14782__$1);
var G__14792 = null;
var G__14793 = (0);
var G__14794 = (0);
seq__14756_14770 = G__14791;
chunk__14757_14771 = G__14792;
count__14758_14772 = G__14793;
i__14759_14773 = G__14794;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.rest(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__14762_14795 = cljs.core.seq(params);
var chunk__14763_14796 = null;
var count__14764_14797 = (0);
var i__14765_14798 = (0);
while(true){
if((i__14765_14798 < count__14764_14797)){
var param_14799 = chunk__14763_14796.cljs$core$IIndexed$_nth$arity$2(null,i__14765_14798);
cljs.compiler.emit(param_14799);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14799,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__14800 = seq__14762_14795;
var G__14801 = chunk__14763_14796;
var G__14802 = count__14764_14797;
var G__14803 = (i__14765_14798 + (1));
seq__14762_14795 = G__14800;
chunk__14763_14796 = G__14801;
count__14764_14797 = G__14802;
i__14765_14798 = G__14803;
continue;
} else {
var temp__4425__auto___14804 = cljs.core.seq(seq__14762_14795);
if(temp__4425__auto___14804){
var seq__14762_14805__$1 = temp__4425__auto___14804;
if(cljs.core.chunked_seq_QMARK_(seq__14762_14805__$1)){
var c__7320__auto___14806 = cljs.core.chunk_first(seq__14762_14805__$1);
var G__14807 = cljs.core.chunk_rest(seq__14762_14805__$1);
var G__14808 = c__7320__auto___14806;
var G__14809 = cljs.core.count(c__7320__auto___14806);
var G__14810 = (0);
seq__14762_14795 = G__14807;
chunk__14763_14796 = G__14808;
count__14764_14797 = G__14809;
i__14765_14798 = G__14810;
continue;
} else {
var param_14811 = cljs.core.first(seq__14762_14805__$1);
cljs.compiler.emit(param_14811);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14811,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__14812 = cljs.core.next(seq__14762_14805__$1);
var G__14813 = null;
var G__14814 = (0);
var G__14815 = (0);
seq__14762_14795 = G__14812;
chunk__14763_14796 = G__14813;
count__14764_14797 = G__14814;
i__14765_14798 = G__14815;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.seq(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__14766_14816 = cljs.core.seq(params);
var chunk__14767_14817 = null;
var count__14768_14818 = (0);
var i__14769_14819 = (0);
while(true){
if((i__14769_14819 < count__14768_14818)){
var param_14820 = chunk__14767_14817.cljs$core$IIndexed$_nth$arity$2(null,i__14769_14819);
cljs.compiler.emit(param_14820);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14820,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__14821 = seq__14766_14816;
var G__14822 = chunk__14767_14817;
var G__14823 = count__14768_14818;
var G__14824 = (i__14769_14819 + (1));
seq__14766_14816 = G__14821;
chunk__14767_14817 = G__14822;
count__14768_14818 = G__14823;
i__14769_14819 = G__14824;
continue;
} else {
var temp__4425__auto___14825 = cljs.core.seq(seq__14766_14816);
if(temp__4425__auto___14825){
var seq__14766_14826__$1 = temp__4425__auto___14825;
if(cljs.core.chunked_seq_QMARK_(seq__14766_14826__$1)){
var c__7320__auto___14827 = cljs.core.chunk_first(seq__14766_14826__$1);
var G__14828 = cljs.core.chunk_rest(seq__14766_14826__$1);
var G__14829 = c__7320__auto___14827;
var G__14830 = cljs.core.count(c__7320__auto___14827);
var G__14831 = (0);
seq__14766_14816 = G__14828;
chunk__14767_14817 = G__14829;
count__14768_14818 = G__14830;
i__14769_14819 = G__14831;
continue;
} else {
var param_14832 = cljs.core.first(seq__14766_14826__$1);
cljs.compiler.emit(param_14832);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14832,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__14833 = cljs.core.next(seq__14766_14826__$1);
var G__14834 = null;
var G__14835 = (0);
var G__14836 = (0);
seq__14766_14816 = G__14833;
chunk__14767_14817 = G__14834;
count__14768_14818 = G__14835;
i__14769_14819 = G__14836;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__14841 = cljs.core.seq(params);
var chunk__14842 = null;
var count__14843 = (0);
var i__14844 = (0);
while(true){
if((i__14844 < count__14843)){
var param = chunk__14842.cljs$core$IIndexed$_nth$arity$2(null,i__14844);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__14845 = seq__14841;
var G__14846 = chunk__14842;
var G__14847 = count__14843;
var G__14848 = (i__14844 + (1));
seq__14841 = G__14845;
chunk__14842 = G__14846;
count__14843 = G__14847;
i__14844 = G__14848;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__14841);
if(temp__4425__auto__){
var seq__14841__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14841__$1)){
var c__7320__auto__ = cljs.core.chunk_first(seq__14841__$1);
var G__14849 = cljs.core.chunk_rest(seq__14841__$1);
var G__14850 = c__7320__auto__;
var G__14851 = cljs.core.count(c__7320__auto__);
var G__14852 = (0);
seq__14841 = G__14849;
chunk__14842 = G__14850;
count__14843 = G__14851;
i__14844 = G__14852;
continue;
} else {
var param = cljs.core.first(seq__14841__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__14853 = cljs.core.next(seq__14841__$1);
var G__14854 = null;
var G__14855 = (0);
var G__14856 = (0);
seq__14841 = G__14853;
chunk__14842 = G__14854;
count__14843 = G__14855;
i__14844 = G__14856;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__14857){
var map__14860 = p__14857;
var map__14860__$1 = ((((!((map__14860 == null)))?((((map__14860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14860):map__14860);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14860__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14860__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14860__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14860__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14860__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14860__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14860__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14860__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__14321__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"("], 0));

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__14862){
var map__14873 = p__14862;
var map__14873__$1 = ((((!((map__14873 == null)))?((((map__14873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14873):map__14873);
var f = map__14873__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14873__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14873__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14873__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14873__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14873__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14873__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14873__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14873__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__14321__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

var name_14883__$1 = (function (){var or__6509__auto__ = name;
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_14884 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_14883__$1);
var delegate_name_14885 = [cljs.core.str(mname_14884),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",delegate_name_14885," = function ("], 0));

var seq__14875_14886 = cljs.core.seq(params);
var chunk__14876_14887 = null;
var count__14877_14888 = (0);
var i__14878_14889 = (0);
while(true){
if((i__14878_14889 < count__14877_14888)){
var param_14890 = chunk__14876_14887.cljs$core$IIndexed$_nth$arity$2(null,i__14878_14889);
cljs.compiler.emit(param_14890);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14890,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__14891 = seq__14875_14886;
var G__14892 = chunk__14876_14887;
var G__14893 = count__14877_14888;
var G__14894 = (i__14878_14889 + (1));
seq__14875_14886 = G__14891;
chunk__14876_14887 = G__14892;
count__14877_14888 = G__14893;
i__14878_14889 = G__14894;
continue;
} else {
var temp__4425__auto___14895 = cljs.core.seq(seq__14875_14886);
if(temp__4425__auto___14895){
var seq__14875_14896__$1 = temp__4425__auto___14895;
if(cljs.core.chunked_seq_QMARK_(seq__14875_14896__$1)){
var c__7320__auto___14897 = cljs.core.chunk_first(seq__14875_14896__$1);
var G__14898 = cljs.core.chunk_rest(seq__14875_14896__$1);
var G__14899 = c__7320__auto___14897;
var G__14900 = cljs.core.count(c__7320__auto___14897);
var G__14901 = (0);
seq__14875_14886 = G__14898;
chunk__14876_14887 = G__14899;
count__14877_14888 = G__14900;
i__14878_14889 = G__14901;
continue;
} else {
var param_14902 = cljs.core.first(seq__14875_14896__$1);
cljs.compiler.emit(param_14902);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14902,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__14903 = cljs.core.next(seq__14875_14896__$1);
var G__14904 = null;
var G__14905 = (0);
var G__14906 = (0);
seq__14875_14886 = G__14903;
chunk__14876_14887 = G__14904;
count__14877_14888 = G__14905;
i__14878_14889 = G__14906;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_14884," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_14907 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_14907,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name_14885,".call(this,"], 0));

var seq__14879_14908 = cljs.core.seq(params);
var chunk__14880_14909 = null;
var count__14881_14910 = (0);
var i__14882_14911 = (0);
while(true){
if((i__14882_14911 < count__14881_14910)){
var param_14912 = chunk__14880_14909.cljs$core$IIndexed$_nth$arity$2(null,i__14882_14911);
cljs.compiler.emit(param_14912);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14912,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__14913 = seq__14879_14908;
var G__14914 = chunk__14880_14909;
var G__14915 = count__14881_14910;
var G__14916 = (i__14882_14911 + (1));
seq__14879_14908 = G__14913;
chunk__14880_14909 = G__14914;
count__14881_14910 = G__14915;
i__14882_14911 = G__14916;
continue;
} else {
var temp__4425__auto___14917 = cljs.core.seq(seq__14879_14908);
if(temp__4425__auto___14917){
var seq__14879_14918__$1 = temp__4425__auto___14917;
if(cljs.core.chunked_seq_QMARK_(seq__14879_14918__$1)){
var c__7320__auto___14919 = cljs.core.chunk_first(seq__14879_14918__$1);
var G__14920 = cljs.core.chunk_rest(seq__14879_14918__$1);
var G__14921 = c__7320__auto___14919;
var G__14922 = cljs.core.count(c__7320__auto___14919);
var G__14923 = (0);
seq__14879_14908 = G__14920;
chunk__14880_14909 = G__14921;
count__14881_14910 = G__14922;
i__14882_14911 = G__14923;
continue;
} else {
var param_14924 = cljs.core.first(seq__14879_14918__$1);
cljs.compiler.emit(param_14924);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14924,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__14925 = cljs.core.next(seq__14879_14918__$1);
var G__14926 = null;
var G__14927 = (0);
var G__14928 = (0);
seq__14879_14908 = G__14925;
chunk__14880_14909 = G__14926;
count__14881_14910 = G__14927;
i__14882_14911 = G__14928;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_14884,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_14884,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_14883__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_14884,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_14885,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_14884,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__14932){
var map__14933 = p__14932;
var map__14933__$1 = ((((!((map__14933 == null)))?((((map__14933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14933):map__14933);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14933__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14933__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14933__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14933__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14933__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14933__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14933__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__14933,map__14933__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__14929_SHARP_){
var and__6497__auto__ = p1__14929_SHARP_;
if(cljs.core.truth_(and__6497__auto__)){
var G__14935 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__14929_SHARP_);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__14935) : cljs.core.deref.call(null,G__14935));
} else {
return and__6497__auto__;
}
});})(map__14933,map__14933__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.array_seq([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_14955__$1 = (function (){var or__6509__auto__ = name;
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_14956 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_14955__$1);
var maxparams_14957 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_14958 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_14955__$1,mname_14956,maxparams_14957,loop_locals,map__14933,map__14933__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(mname_14956),cljs.core.str("__"),cljs.core.str(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_14955__$1,mname_14956,maxparams_14957,loop_locals,map__14933,map__14933__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_14959 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_14955__$1,mname_14956,maxparams_14957,mmap_14958,loop_locals,map__14933,map__14933__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__14930_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__14930_SHARP_)));
});})(name_14955__$1,mname_14956,maxparams_14957,mmap_14958,loop_locals,map__14933,map__14933__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_14958));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_14956," = null;"], 0));

var seq__14936_14960 = cljs.core.seq(ms_14959);
var chunk__14937_14961 = null;
var count__14938_14962 = (0);
var i__14939_14963 = (0);
while(true){
if((i__14939_14963 < count__14938_14962)){
var vec__14940_14964 = chunk__14937_14961.cljs$core$IIndexed$_nth$arity$2(null,i__14939_14963);
var n_14965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14940_14964,(0),null);
var meth_14966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14940_14964,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_14965," = "], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14966))){
cljs.compiler.emit_variadic_fn_method(meth_14966);
} else {
cljs.compiler.emit_fn_method(meth_14966);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__14967 = seq__14936_14960;
var G__14968 = chunk__14937_14961;
var G__14969 = count__14938_14962;
var G__14970 = (i__14939_14963 + (1));
seq__14936_14960 = G__14967;
chunk__14937_14961 = G__14968;
count__14938_14962 = G__14969;
i__14939_14963 = G__14970;
continue;
} else {
var temp__4425__auto___14971 = cljs.core.seq(seq__14936_14960);
if(temp__4425__auto___14971){
var seq__14936_14972__$1 = temp__4425__auto___14971;
if(cljs.core.chunked_seq_QMARK_(seq__14936_14972__$1)){
var c__7320__auto___14973 = cljs.core.chunk_first(seq__14936_14972__$1);
var G__14974 = cljs.core.chunk_rest(seq__14936_14972__$1);
var G__14975 = c__7320__auto___14973;
var G__14976 = cljs.core.count(c__7320__auto___14973);
var G__14977 = (0);
seq__14936_14960 = G__14974;
chunk__14937_14961 = G__14975;
count__14938_14962 = G__14976;
i__14939_14963 = G__14977;
continue;
} else {
var vec__14941_14978 = cljs.core.first(seq__14936_14972__$1);
var n_14979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14941_14978,(0),null);
var meth_14980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14941_14978,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_14979," = "], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14980))){
cljs.compiler.emit_variadic_fn_method(meth_14980);
} else {
cljs.compiler.emit_fn_method(meth_14980);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__14981 = cljs.core.next(seq__14936_14972__$1);
var G__14982 = null;
var G__14983 = (0);
var G__14984 = (0);
seq__14936_14960 = G__14981;
chunk__14937_14961 = G__14982;
count__14938_14962 = G__14983;
i__14939_14963 = G__14984;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_14956," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_14957),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_14957)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_14957));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch(arguments.length){"], 0));

var seq__14942_14985 = cljs.core.seq(ms_14959);
var chunk__14943_14986 = null;
var count__14944_14987 = (0);
var i__14945_14988 = (0);
while(true){
if((i__14945_14988 < count__14944_14987)){
var vec__14946_14989 = chunk__14943_14986.cljs$core$IIndexed$_nth$arity$2(null,i__14945_14988);
var n_14990 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14946_14989,(0),null);
var meth_14991 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14946_14989,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_14991))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_14992 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_14992," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_14993 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_14992," = new cljs.core.IndexedSeq(",a_14993,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_14990,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_14957)),(((cljs.core.count(maxparams_14957) > (1)))?", ":null),restarg_14992,");"], 0));
} else {
var pcnt_14994 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14991));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_14994,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_14990,".call(this",(((pcnt_14994 === (0)))?null:cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_14994,maxparams_14957))),",")),");"], 0));
}

var G__14995 = seq__14942_14985;
var G__14996 = chunk__14943_14986;
var G__14997 = count__14944_14987;
var G__14998 = (i__14945_14988 + (1));
seq__14942_14985 = G__14995;
chunk__14943_14986 = G__14996;
count__14944_14987 = G__14997;
i__14945_14988 = G__14998;
continue;
} else {
var temp__4425__auto___14999 = cljs.core.seq(seq__14942_14985);
if(temp__4425__auto___14999){
var seq__14942_15000__$1 = temp__4425__auto___14999;
if(cljs.core.chunked_seq_QMARK_(seq__14942_15000__$1)){
var c__7320__auto___15001 = cljs.core.chunk_first(seq__14942_15000__$1);
var G__15002 = cljs.core.chunk_rest(seq__14942_15000__$1);
var G__15003 = c__7320__auto___15001;
var G__15004 = cljs.core.count(c__7320__auto___15001);
var G__15005 = (0);
seq__14942_14985 = G__15002;
chunk__14943_14986 = G__15003;
count__14944_14987 = G__15004;
i__14945_14988 = G__15005;
continue;
} else {
var vec__14947_15006 = cljs.core.first(seq__14942_15000__$1);
var n_15007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14947_15006,(0),null);
var meth_15008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14947_15006,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15008))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_15009 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_15009," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_15010 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_15009," = new cljs.core.IndexedSeq(",a_15010,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_15007,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_14957)),(((cljs.core.count(maxparams_14957) > (1)))?", ":null),restarg_15009,");"], 0));
} else {
var pcnt_15011 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15008));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_15011,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_15007,".call(this",(((pcnt_15011 === (0)))?null:cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_15011,maxparams_14957))),",")),");"], 0));
}

var G__15012 = cljs.core.next(seq__14942_15000__$1);
var G__15013 = null;
var G__15014 = (0);
var G__15015 = (0);
seq__14942_14985 = G__15012;
chunk__14943_14986 = G__15013;
count__14944_14987 = G__15014;
i__14945_14988 = G__15015;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw(new Error('Invalid arity: ' + arguments.length));"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_14956,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_14956,".cljs$lang$applyTo = ",cljs.core.some(((function (name_14955__$1,mname_14956,maxparams_14957,mmap_14958,ms_14959,loop_locals,map__14933,map__14933__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__14931_SHARP_){
var vec__14948 = p1__14931_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14948,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14948,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_14955__$1,mname_14956,maxparams_14957,mmap_14958,ms_14959,loop_locals,map__14933,map__14933__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_14959),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__14949_15016 = cljs.core.seq(ms_14959);
var chunk__14950_15017 = null;
var count__14951_15018 = (0);
var i__14952_15019 = (0);
while(true){
if((i__14952_15019 < count__14951_15018)){
var vec__14953_15020 = chunk__14950_15017.cljs$core$IIndexed$_nth$arity$2(null,i__14952_15019);
var n_15021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14953_15020,(0),null);
var meth_15022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14953_15020,(1),null);
var c_15023 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15022));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15022))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_14956,".cljs$core$IFn$_invoke$arity$variadic = ",n_15021,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_14956,".cljs$core$IFn$_invoke$arity$",c_15023," = ",n_15021,";"], 0));
}

var G__15024 = seq__14949_15016;
var G__15025 = chunk__14950_15017;
var G__15026 = count__14951_15018;
var G__15027 = (i__14952_15019 + (1));
seq__14949_15016 = G__15024;
chunk__14950_15017 = G__15025;
count__14951_15018 = G__15026;
i__14952_15019 = G__15027;
continue;
} else {
var temp__4425__auto___15028 = cljs.core.seq(seq__14949_15016);
if(temp__4425__auto___15028){
var seq__14949_15029__$1 = temp__4425__auto___15028;
if(cljs.core.chunked_seq_QMARK_(seq__14949_15029__$1)){
var c__7320__auto___15030 = cljs.core.chunk_first(seq__14949_15029__$1);
var G__15031 = cljs.core.chunk_rest(seq__14949_15029__$1);
var G__15032 = c__7320__auto___15030;
var G__15033 = cljs.core.count(c__7320__auto___15030);
var G__15034 = (0);
seq__14949_15016 = G__15031;
chunk__14950_15017 = G__15032;
count__14951_15018 = G__15033;
i__14952_15019 = G__15034;
continue;
} else {
var vec__14954_15035 = cljs.core.first(seq__14949_15029__$1);
var n_15036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14954_15035,(0),null);
var meth_15037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14954_15035,(1),null);
var c_15038 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_15037));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_15037))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_14956,".cljs$core$IFn$_invoke$arity$variadic = ",n_15036,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_14956,".cljs$core$IFn$_invoke$arity$",c_15038," = ",n_15036,";"], 0));
}

var G__15039 = cljs.core.next(seq__14949_15029__$1);
var G__15040 = null;
var G__15041 = (0);
var G__15042 = (0);
seq__14949_15016 = G__15039;
chunk__14950_15017 = G__15040;
count__14951_15018 = G__15041;
i__14952_15019 = G__15042;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_14956,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__15043){
var map__15044 = p__15043;
var map__15044__$1 = ((((!((map__15044 == null)))?((((map__15044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15044):map__15044);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15044__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15044__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15044__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__6497__auto__ = statements;
if(cljs.core.truth_(and__6497__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__6497__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__15046_15050 = cljs.core.seq(statements);
var chunk__15047_15051 = null;
var count__15048_15052 = (0);
var i__15049_15053 = (0);
while(true){
if((i__15049_15053 < count__15048_15052)){
var s_15054 = chunk__15047_15051.cljs$core$IIndexed$_nth$arity$2(null,i__15049_15053);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_15054], 0));

var G__15055 = seq__15046_15050;
var G__15056 = chunk__15047_15051;
var G__15057 = count__15048_15052;
var G__15058 = (i__15049_15053 + (1));
seq__15046_15050 = G__15055;
chunk__15047_15051 = G__15056;
count__15048_15052 = G__15057;
i__15049_15053 = G__15058;
continue;
} else {
var temp__4425__auto___15059 = cljs.core.seq(seq__15046_15050);
if(temp__4425__auto___15059){
var seq__15046_15060__$1 = temp__4425__auto___15059;
if(cljs.core.chunked_seq_QMARK_(seq__15046_15060__$1)){
var c__7320__auto___15061 = cljs.core.chunk_first(seq__15046_15060__$1);
var G__15062 = cljs.core.chunk_rest(seq__15046_15060__$1);
var G__15063 = c__7320__auto___15061;
var G__15064 = cljs.core.count(c__7320__auto___15061);
var G__15065 = (0);
seq__15046_15050 = G__15062;
chunk__15047_15051 = G__15063;
count__15048_15052 = G__15064;
i__15049_15053 = G__15065;
continue;
} else {
var s_15066 = cljs.core.first(seq__15046_15060__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_15066], 0));

var G__15067 = cljs.core.next(seq__15046_15060__$1);
var G__15068 = null;
var G__15069 = (0);
var G__15070 = (0);
seq__15046_15050 = G__15067;
chunk__15047_15051 = G__15068;
count__15048_15052 = G__15069;
i__15049_15053 = G__15070;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__6497__auto__ = statements;
if(cljs.core.truth_(and__6497__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__6497__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__15071){
var map__15072 = p__15071;
var map__15072__$1 = ((((!((map__15072 == null)))?((((map__15072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15072):map__15072);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15072__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15072__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15072__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15072__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15072__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__6509__auto__ = name;
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["try{",try$,"}"], 0));

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}"], 0));
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str("(not= :constant (:op finally))")].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["finally {",finally$,"}"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([try$], 0));
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__15074,is_loop){
var map__15086 = p__15074;
var map__15086__$1 = ((((!((map__15086 == null)))?((((map__15086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15086):map__15086);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15086__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15086__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15086__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_15088_15097 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_15088_15097,context,map__15086,map__15086__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_15088_15097,context,map__15086,map__15086__$1,bindings,expr,env))
,bindings):null));

try{var seq__15089_15098 = cljs.core.seq(bindings);
var chunk__15090_15099 = null;
var count__15091_15100 = (0);
var i__15092_15101 = (0);
while(true){
if((i__15092_15101 < count__15091_15100)){
var map__15093_15102 = chunk__15090_15099.cljs$core$IIndexed$_nth$arity$2(null,i__15092_15101);
var map__15093_15103__$1 = ((((!((map__15093_15102 == null)))?((((map__15093_15102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15093_15102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15093_15102):map__15093_15102);
var binding_15104 = map__15093_15103__$1;
var init_15105 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15093_15103__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_15104);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_15105,";"], 0));

var G__15106 = seq__15089_15098;
var G__15107 = chunk__15090_15099;
var G__15108 = count__15091_15100;
var G__15109 = (i__15092_15101 + (1));
seq__15089_15098 = G__15106;
chunk__15090_15099 = G__15107;
count__15091_15100 = G__15108;
i__15092_15101 = G__15109;
continue;
} else {
var temp__4425__auto___15110 = cljs.core.seq(seq__15089_15098);
if(temp__4425__auto___15110){
var seq__15089_15111__$1 = temp__4425__auto___15110;
if(cljs.core.chunked_seq_QMARK_(seq__15089_15111__$1)){
var c__7320__auto___15112 = cljs.core.chunk_first(seq__15089_15111__$1);
var G__15113 = cljs.core.chunk_rest(seq__15089_15111__$1);
var G__15114 = c__7320__auto___15112;
var G__15115 = cljs.core.count(c__7320__auto___15112);
var G__15116 = (0);
seq__15089_15098 = G__15113;
chunk__15090_15099 = G__15114;
count__15091_15100 = G__15115;
i__15092_15101 = G__15116;
continue;
} else {
var map__15095_15117 = cljs.core.first(seq__15089_15111__$1);
var map__15095_15118__$1 = ((((!((map__15095_15117 == null)))?((((map__15095_15117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15095_15117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15095_15117):map__15095_15117);
var binding_15119 = map__15095_15118__$1;
var init_15120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15095_15118__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_15119);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_15120,";"], 0));

var G__15121 = cljs.core.next(seq__15089_15111__$1);
var G__15122 = null;
var G__15123 = (0);
var G__15124 = (0);
seq__15089_15098 = G__15121;
chunk__15090_15099 = G__15122;
count__15091_15100 = G__15123;
i__15092_15101 = G__15124;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_15088_15097;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__15125){
var map__15126 = p__15125;
var map__15126__$1 = ((((!((map__15126 == null)))?((((map__15126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15126):map__15126);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15126__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15126__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15126__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__7423__auto___15128 = cljs.core.count(exprs);
var i_15129 = (0);
while(true){
if((i_15129 < n__7423__auto___15128)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_15129) : temps.call(null,i_15129))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_15129) : exprs.call(null,i_15129)),";"], 0));

var G__15130 = (i_15129 + (1));
i_15129 = G__15130;
continue;
} else {
}
break;
}

var n__7423__auto___15131 = cljs.core.count(exprs);
var i_15132 = (0);
while(true){
if((i_15132 < n__7423__auto___15131)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_15132) : params.call(null,i_15132)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_15132) : temps.call(null,i_15132)),";"], 0));

var G__15133 = (i_15132 + (1));
i_15132 = G__15133;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__15134){
var map__15135 = p__15134;
var map__15135__$1 = ((((!((map__15135 == null)))?((((map__15135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15135):map__15135);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15135__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15135__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15135__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__15137_15145 = cljs.core.seq(bindings);
var chunk__15138_15146 = null;
var count__15139_15147 = (0);
var i__15140_15148 = (0);
while(true){
if((i__15140_15148 < count__15139_15147)){
var map__15141_15149 = chunk__15138_15146.cljs$core$IIndexed$_nth$arity$2(null,i__15140_15148);
var map__15141_15150__$1 = ((((!((map__15141_15149 == null)))?((((map__15141_15149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15141_15149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15141_15149):map__15141_15149);
var binding_15151 = map__15141_15150__$1;
var init_15152 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15141_15150__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_15151)," = ",init_15152,";"], 0));

var G__15153 = seq__15137_15145;
var G__15154 = chunk__15138_15146;
var G__15155 = count__15139_15147;
var G__15156 = (i__15140_15148 + (1));
seq__15137_15145 = G__15153;
chunk__15138_15146 = G__15154;
count__15139_15147 = G__15155;
i__15140_15148 = G__15156;
continue;
} else {
var temp__4425__auto___15157 = cljs.core.seq(seq__15137_15145);
if(temp__4425__auto___15157){
var seq__15137_15158__$1 = temp__4425__auto___15157;
if(cljs.core.chunked_seq_QMARK_(seq__15137_15158__$1)){
var c__7320__auto___15159 = cljs.core.chunk_first(seq__15137_15158__$1);
var G__15160 = cljs.core.chunk_rest(seq__15137_15158__$1);
var G__15161 = c__7320__auto___15159;
var G__15162 = cljs.core.count(c__7320__auto___15159);
var G__15163 = (0);
seq__15137_15145 = G__15160;
chunk__15138_15146 = G__15161;
count__15139_15147 = G__15162;
i__15140_15148 = G__15163;
continue;
} else {
var map__15143_15164 = cljs.core.first(seq__15137_15158__$1);
var map__15143_15165__$1 = ((((!((map__15143_15164 == null)))?((((map__15143_15164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15143_15164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15143_15164):map__15143_15164);
var binding_15166 = map__15143_15165__$1;
var init_15167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15143_15165__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_15166)," = ",init_15167,";"], 0));

var G__15168 = cljs.core.next(seq__15137_15158__$1);
var G__15169 = null;
var G__15170 = (0);
var G__15171 = (0);
seq__15137_15145 = G__15168;
chunk__15138_15146 = G__15169;
count__15139_15147 = G__15170;
i__15140_15148 = G__15171;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__15174){
var map__15175 = p__15174;
var map__15175__$1 = ((((!((map__15175 == null)))?((((map__15175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15175):map__15175);
var expr = map__15175__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15175__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15175__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15175__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__6497__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6497__auto__)){
var and__6497__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__6497__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__6497__auto____$1;
}
} else {
return and__6497__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__6497__auto__ = protocol;
if(cljs.core.truth_(and__6497__auto__)){
var and__6497__auto____$1 = tag;
if(cljs.core.truth_(and__6497__auto____$1)){
var or__6509__auto__ = (function (){var and__6497__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6497__auto____$2)){
var and__6497__auto____$3 = protocol;
if(cljs.core.truth_(and__6497__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__6497__auto____$3;
}
} else {
return and__6497__auto____$2;
}
})();
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
var and__6497__auto____$2 = (function (){var or__6509__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__6509__auto____$1)){
return or__6509__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__6497__auto____$2)){
var or__6509__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__6509__auto____$1){
return or__6509__auto____$1;
} else {
var and__6497__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__6497__auto____$3){
var and__6497__auto____$4 = cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__6497__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__6497__auto____$4;
}
} else {
return and__6497__auto____$3;
}
}
} else {
return and__6497__auto____$2;
}
}
} else {
return and__6497__auto____$1;
}
} else {
return and__6497__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__6509__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__6509__auto__){
return or__6509__auto__;
} else {
var temp__4425__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4425__auto__)){
var ns_str = temp__4425__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__15177 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__6497__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__6497__auto__)){
return (arity > mfa);
} else {
return and__6497__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15175,map__15175__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15175,map__15175__$1,expr,f,args,env){
return (function (p1__15172_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__15172_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15175,map__15175__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15175,map__15175__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15175,map__15175__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15175,map__15175__$1,expr,f,args,env){
return (function (p1__15173_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__15173_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15175,map__15175__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__15175,map__15175__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15177,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15177,(1),null);
var env__14321__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_15178 = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(args),".",pimpl_15178,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_15179 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_15179,args)),(((mfa_15179 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_15179,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__6509__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
var or__6509__auto____$1 = js_QMARK_;
if(or__6509__auto____$1){
return or__6509__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_((function (){var and__6497__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__6497__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__6497__auto__;
}
})())){
var fprop_15180 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",f__$1,fprop_15180," ? ",f__$1,fprop_15180,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__15181){
var map__15182 = p__15181;
var map__15182__$1 = ((((!((map__15182 == null)))?((((map__15182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15182):map__15182);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15182__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15182__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15182__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14321__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__15184){
var map__15185 = p__15184;
var map__15185__$1 = ((((!((map__15185 == null)))?((((map__15185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15185):map__15185);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15185__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15185__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15185__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14321__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.set();"], 0));
} else {
}

var seq__15191_15195 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(libs))));
var chunk__15192_15196 = null;
var count__15193_15197 = (0);
var i__15194_15198 = (0);
while(true){
if((i__15194_15198 < count__15193_15197)){
var lib_15199 = chunk__15192_15196.cljs$core$IIndexed$_nth$arity$2(null,i__15194_15198);
if(cljs.core.truth_((function (){var or__6509__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_15199),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_15199),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__6509__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_15199),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_15199),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_15199),"');"], 0));

}
}

var G__15200 = seq__15191_15195;
var G__15201 = chunk__15192_15196;
var G__15202 = count__15193_15197;
var G__15203 = (i__15194_15198 + (1));
seq__15191_15195 = G__15200;
chunk__15192_15196 = G__15201;
count__15193_15197 = G__15202;
i__15194_15198 = G__15203;
continue;
} else {
var temp__4425__auto___15204 = cljs.core.seq(seq__15191_15195);
if(temp__4425__auto___15204){
var seq__15191_15205__$1 = temp__4425__auto___15204;
if(cljs.core.chunked_seq_QMARK_(seq__15191_15205__$1)){
var c__7320__auto___15206 = cljs.core.chunk_first(seq__15191_15205__$1);
var G__15207 = cljs.core.chunk_rest(seq__15191_15205__$1);
var G__15208 = c__7320__auto___15206;
var G__15209 = cljs.core.count(c__7320__auto___15206);
var G__15210 = (0);
seq__15191_15195 = G__15207;
chunk__15192_15196 = G__15208;
count__15193_15197 = G__15209;
i__15194_15198 = G__15210;
continue;
} else {
var lib_15211 = cljs.core.first(seq__15191_15205__$1);
if(cljs.core.truth_((function (){var or__6509__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_15211),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_15211),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__6509__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_15211),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_15211),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_15211),"');"], 0));

}
}

var G__15212 = cljs.core.next(seq__15191_15205__$1);
var G__15213 = null;
var G__15214 = (0);
var G__15215 = (0);
seq__15191_15195 = G__15212;
chunk__15192_15196 = G__15213;
count__15193_15197 = G__15214;
i__15194_15198 = G__15215;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__15216){
var map__15217 = p__15216;
var map__15217__$1 = ((((!((map__15217 == null)))?((((map__15217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15217):map__15217);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15217__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15217__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15217__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15217__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15217__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15217__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('cljs.core');"], 0));
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__15219){
var map__15220 = p__15219;
var map__15220__$1 = ((((!((map__15220 == null)))?((((map__15220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15220):map__15220);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15220__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15220__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15220__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15220__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15220__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__15222_15236 = cljs.core.seq(protocols);
var chunk__15223_15237 = null;
var count__15224_15238 = (0);
var i__15225_15239 = (0);
while(true){
if((i__15225_15239 < count__15224_15238)){
var protocol_15240 = chunk__15223_15237.cljs$core$IIndexed$_nth$arity$2(null,i__15225_15239);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_15240)].join('')),"}"], 0));

var G__15241 = seq__15222_15236;
var G__15242 = chunk__15223_15237;
var G__15243 = count__15224_15238;
var G__15244 = (i__15225_15239 + (1));
seq__15222_15236 = G__15241;
chunk__15223_15237 = G__15242;
count__15224_15238 = G__15243;
i__15225_15239 = G__15244;
continue;
} else {
var temp__4425__auto___15245 = cljs.core.seq(seq__15222_15236);
if(temp__4425__auto___15245){
var seq__15222_15246__$1 = temp__4425__auto___15245;
if(cljs.core.chunked_seq_QMARK_(seq__15222_15246__$1)){
var c__7320__auto___15247 = cljs.core.chunk_first(seq__15222_15246__$1);
var G__15248 = cljs.core.chunk_rest(seq__15222_15246__$1);
var G__15249 = c__7320__auto___15247;
var G__15250 = cljs.core.count(c__7320__auto___15247);
var G__15251 = (0);
seq__15222_15236 = G__15248;
chunk__15223_15237 = G__15249;
count__15224_15238 = G__15250;
i__15225_15239 = G__15251;
continue;
} else {
var protocol_15252 = cljs.core.first(seq__15222_15246__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_15252)].join('')),"}"], 0));

var G__15253 = cljs.core.next(seq__15222_15246__$1);
var G__15254 = null;
var G__15255 = (0);
var G__15256 = (0);
seq__15222_15236 = G__15253;
chunk__15223_15237 = G__15254;
count__15224_15238 = G__15255;
i__15225_15239 = G__15256;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__15226_15257 = cljs.core.seq(fields__$1);
var chunk__15227_15258 = null;
var count__15228_15259 = (0);
var i__15229_15260 = (0);
while(true){
if((i__15229_15260 < count__15228_15259)){
var fld_15261 = chunk__15227_15258.cljs$core$IIndexed$_nth$arity$2(null,i__15229_15260);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_15261," = ",fld_15261,";"], 0));

var G__15262 = seq__15226_15257;
var G__15263 = chunk__15227_15258;
var G__15264 = count__15228_15259;
var G__15265 = (i__15229_15260 + (1));
seq__15226_15257 = G__15262;
chunk__15227_15258 = G__15263;
count__15228_15259 = G__15264;
i__15229_15260 = G__15265;
continue;
} else {
var temp__4425__auto___15266 = cljs.core.seq(seq__15226_15257);
if(temp__4425__auto___15266){
var seq__15226_15267__$1 = temp__4425__auto___15266;
if(cljs.core.chunked_seq_QMARK_(seq__15226_15267__$1)){
var c__7320__auto___15268 = cljs.core.chunk_first(seq__15226_15267__$1);
var G__15269 = cljs.core.chunk_rest(seq__15226_15267__$1);
var G__15270 = c__7320__auto___15268;
var G__15271 = cljs.core.count(c__7320__auto___15268);
var G__15272 = (0);
seq__15226_15257 = G__15269;
chunk__15227_15258 = G__15270;
count__15228_15259 = G__15271;
i__15229_15260 = G__15272;
continue;
} else {
var fld_15273 = cljs.core.first(seq__15226_15267__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_15273," = ",fld_15273,";"], 0));

var G__15274 = cljs.core.next(seq__15226_15267__$1);
var G__15275 = null;
var G__15276 = (0);
var G__15277 = (0);
seq__15226_15257 = G__15274;
chunk__15227_15258 = G__15275;
count__15228_15259 = G__15276;
i__15229_15260 = G__15277;
continue;
}
} else {
}
}
break;
}

var seq__15230_15278 = cljs.core.seq(pmasks);
var chunk__15231_15279 = null;
var count__15232_15280 = (0);
var i__15233_15281 = (0);
while(true){
if((i__15233_15281 < count__15232_15280)){
var vec__15234_15282 = chunk__15231_15279.cljs$core$IIndexed$_nth$arity$2(null,i__15233_15281);
var pno_15283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15234_15282,(0),null);
var pmask_15284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15234_15282,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_15283,"$ = ",pmask_15284,";"], 0));

var G__15285 = seq__15230_15278;
var G__15286 = chunk__15231_15279;
var G__15287 = count__15232_15280;
var G__15288 = (i__15233_15281 + (1));
seq__15230_15278 = G__15285;
chunk__15231_15279 = G__15286;
count__15232_15280 = G__15287;
i__15233_15281 = G__15288;
continue;
} else {
var temp__4425__auto___15289 = cljs.core.seq(seq__15230_15278);
if(temp__4425__auto___15289){
var seq__15230_15290__$1 = temp__4425__auto___15289;
if(cljs.core.chunked_seq_QMARK_(seq__15230_15290__$1)){
var c__7320__auto___15291 = cljs.core.chunk_first(seq__15230_15290__$1);
var G__15292 = cljs.core.chunk_rest(seq__15230_15290__$1);
var G__15293 = c__7320__auto___15291;
var G__15294 = cljs.core.count(c__7320__auto___15291);
var G__15295 = (0);
seq__15230_15278 = G__15292;
chunk__15231_15279 = G__15293;
count__15232_15280 = G__15294;
i__15233_15281 = G__15295;
continue;
} else {
var vec__15235_15296 = cljs.core.first(seq__15230_15290__$1);
var pno_15297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15235_15296,(0),null);
var pmask_15298 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15235_15296,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_15297,"$ = ",pmask_15298,";"], 0));

var G__15299 = cljs.core.next(seq__15230_15290__$1);
var G__15300 = null;
var G__15301 = (0);
var G__15302 = (0);
seq__15230_15278 = G__15299;
chunk__15231_15279 = G__15300;
count__15232_15280 = G__15301;
i__15233_15281 = G__15302;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__15303){
var map__15304 = p__15303;
var map__15304__$1 = ((((!((map__15304 == null)))?((((map__15304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15304):map__15304);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15304__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15304__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15304__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15304__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15304__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__15306_15320 = cljs.core.seq(protocols);
var chunk__15307_15321 = null;
var count__15308_15322 = (0);
var i__15309_15323 = (0);
while(true){
if((i__15309_15323 < count__15308_15322)){
var protocol_15324 = chunk__15307_15321.cljs$core$IIndexed$_nth$arity$2(null,i__15309_15323);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_15324)].join('')),"}"], 0));

var G__15325 = seq__15306_15320;
var G__15326 = chunk__15307_15321;
var G__15327 = count__15308_15322;
var G__15328 = (i__15309_15323 + (1));
seq__15306_15320 = G__15325;
chunk__15307_15321 = G__15326;
count__15308_15322 = G__15327;
i__15309_15323 = G__15328;
continue;
} else {
var temp__4425__auto___15329 = cljs.core.seq(seq__15306_15320);
if(temp__4425__auto___15329){
var seq__15306_15330__$1 = temp__4425__auto___15329;
if(cljs.core.chunked_seq_QMARK_(seq__15306_15330__$1)){
var c__7320__auto___15331 = cljs.core.chunk_first(seq__15306_15330__$1);
var G__15332 = cljs.core.chunk_rest(seq__15306_15330__$1);
var G__15333 = c__7320__auto___15331;
var G__15334 = cljs.core.count(c__7320__auto___15331);
var G__15335 = (0);
seq__15306_15320 = G__15332;
chunk__15307_15321 = G__15333;
count__15308_15322 = G__15334;
i__15309_15323 = G__15335;
continue;
} else {
var protocol_15336 = cljs.core.first(seq__15306_15330__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(protocol_15336)].join('')),"}"], 0));

var G__15337 = cljs.core.next(seq__15306_15330__$1);
var G__15338 = null;
var G__15339 = (0);
var G__15340 = (0);
seq__15306_15320 = G__15337;
chunk__15307_15321 = G__15338;
count__15308_15322 = G__15339;
i__15309_15323 = G__15340;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__15310_15341 = cljs.core.seq(fields__$1);
var chunk__15311_15342 = null;
var count__15312_15343 = (0);
var i__15313_15344 = (0);
while(true){
if((i__15313_15344 < count__15312_15343)){
var fld_15345 = chunk__15311_15342.cljs$core$IIndexed$_nth$arity$2(null,i__15313_15344);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_15345," = ",fld_15345,";"], 0));

var G__15346 = seq__15310_15341;
var G__15347 = chunk__15311_15342;
var G__15348 = count__15312_15343;
var G__15349 = (i__15313_15344 + (1));
seq__15310_15341 = G__15346;
chunk__15311_15342 = G__15347;
count__15312_15343 = G__15348;
i__15313_15344 = G__15349;
continue;
} else {
var temp__4425__auto___15350 = cljs.core.seq(seq__15310_15341);
if(temp__4425__auto___15350){
var seq__15310_15351__$1 = temp__4425__auto___15350;
if(cljs.core.chunked_seq_QMARK_(seq__15310_15351__$1)){
var c__7320__auto___15352 = cljs.core.chunk_first(seq__15310_15351__$1);
var G__15353 = cljs.core.chunk_rest(seq__15310_15351__$1);
var G__15354 = c__7320__auto___15352;
var G__15355 = cljs.core.count(c__7320__auto___15352);
var G__15356 = (0);
seq__15310_15341 = G__15353;
chunk__15311_15342 = G__15354;
count__15312_15343 = G__15355;
i__15313_15344 = G__15356;
continue;
} else {
var fld_15357 = cljs.core.first(seq__15310_15351__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_15357," = ",fld_15357,";"], 0));

var G__15358 = cljs.core.next(seq__15310_15351__$1);
var G__15359 = null;
var G__15360 = (0);
var G__15361 = (0);
seq__15310_15341 = G__15358;
chunk__15311_15342 = G__15359;
count__15312_15343 = G__15360;
i__15313_15344 = G__15361;
continue;
}
} else {
}
}
break;
}

var seq__15314_15362 = cljs.core.seq(pmasks);
var chunk__15315_15363 = null;
var count__15316_15364 = (0);
var i__15317_15365 = (0);
while(true){
if((i__15317_15365 < count__15316_15364)){
var vec__15318_15366 = chunk__15315_15363.cljs$core$IIndexed$_nth$arity$2(null,i__15317_15365);
var pno_15367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15318_15366,(0),null);
var pmask_15368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15318_15366,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_15367,"$ = ",pmask_15368,";"], 0));

var G__15369 = seq__15314_15362;
var G__15370 = chunk__15315_15363;
var G__15371 = count__15316_15364;
var G__15372 = (i__15317_15365 + (1));
seq__15314_15362 = G__15369;
chunk__15315_15363 = G__15370;
count__15316_15364 = G__15371;
i__15317_15365 = G__15372;
continue;
} else {
var temp__4425__auto___15373 = cljs.core.seq(seq__15314_15362);
if(temp__4425__auto___15373){
var seq__15314_15374__$1 = temp__4425__auto___15373;
if(cljs.core.chunked_seq_QMARK_(seq__15314_15374__$1)){
var c__7320__auto___15375 = cljs.core.chunk_first(seq__15314_15374__$1);
var G__15376 = cljs.core.chunk_rest(seq__15314_15374__$1);
var G__15377 = c__7320__auto___15375;
var G__15378 = cljs.core.count(c__7320__auto___15375);
var G__15379 = (0);
seq__15314_15362 = G__15376;
chunk__15315_15363 = G__15377;
count__15316_15364 = G__15378;
i__15317_15365 = G__15379;
continue;
} else {
var vec__15319_15380 = cljs.core.first(seq__15314_15374__$1);
var pno_15381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15319_15380,(0),null);
var pmask_15382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15319_15380,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_15381,"$ = ",pmask_15382,";"], 0));

var G__15383 = cljs.core.next(seq__15314_15374__$1);
var G__15384 = null;
var G__15385 = (0);
var G__15386 = (0);
seq__15314_15362 = G__15383;
chunk__15315_15363 = G__15384;
count__15316_15364 = G__15385;
i__15317_15365 = G__15386;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__15387){
var map__15388 = p__15387;
var map__15388__$1 = ((((!((map__15388 == null)))?((((map__15388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15388):map__15388);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15388__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15388__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15388__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15388__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15388__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__14321__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__15390){
var map__15391 = p__15390;
var map__15391__$1 = ((((!((map__15391 == null)))?((((map__15391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15391):map__15391);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15391__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15391__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15391__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15391__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15391__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__6497__auto__ = code;
if(cljs.core.truth_(and__6497__auto__)){
var G__15393 = clojure.string.trim(code);
var G__15394 = "/*";
return goog.string.startsWith(G__15393,G__15394);
} else {
return and__6497__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([code], 0));
} else {
var env__14321__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__14321__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__15403 = cljs.core.seq(table);
var chunk__15404 = null;
var count__15405 = (0);
var i__15406 = (0);
while(true){
if((i__15406 < count__15405)){
var vec__15407 = chunk__15404.cljs$core$IIndexed$_nth$arity$2(null,i__15406);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15407,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15407,(1),null);
var ns_15409 = cljs.core.namespace(sym);
var name_15410 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__15411 = seq__15403;
var G__15412 = chunk__15404;
var G__15413 = count__15405;
var G__15414 = (i__15406 + (1));
seq__15403 = G__15411;
chunk__15404 = G__15412;
count__15405 = G__15413;
i__15406 = G__15414;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__15403);
if(temp__4425__auto__){
var seq__15403__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15403__$1)){
var c__7320__auto__ = cljs.core.chunk_first(seq__15403__$1);
var G__15415 = cljs.core.chunk_rest(seq__15403__$1);
var G__15416 = c__7320__auto__;
var G__15417 = cljs.core.count(c__7320__auto__);
var G__15418 = (0);
seq__15403 = G__15415;
chunk__15404 = G__15416;
count__15405 = G__15417;
i__15406 = G__15418;
continue;
} else {
var vec__15408 = cljs.core.first(seq__15403__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15408,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15408,(1),null);
var ns_15419 = cljs.core.namespace(sym);
var name_15420 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Cannot emit constant for type "),cljs.core.str(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__15421 = cljs.core.next(seq__15403__$1);
var G__15422 = null;
var G__15423 = (0);
var G__15424 = (0);
seq__15403 = G__15421;
chunk__15404 = G__15422;
count__15405 = G__15423;
i__15406 = G__15424;
continue;
}
} else {
return null;
}
}
break;
}
});
