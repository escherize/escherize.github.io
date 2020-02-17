goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40893){
var map__40894 = p__40893;
var map__40894__$1 = (((((!((map__40894 == null))))?(((((map__40894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40894):map__40894);
var m = map__40894__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40894__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40894__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40910_41261 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40911_41262 = null;
var count__40912_41263 = (0);
var i__40913_41264 = (0);
while(true){
if((i__40913_41264 < count__40912_41263)){
var f_41265 = chunk__40911_41262.cljs$core$IIndexed$_nth$arity$2(null,i__40913_41264);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41265], 0));


var G__41266 = seq__40910_41261;
var G__41267 = chunk__40911_41262;
var G__41268 = count__40912_41263;
var G__41269 = (i__40913_41264 + (1));
seq__40910_41261 = G__41266;
chunk__40911_41262 = G__41267;
count__40912_41263 = G__41268;
i__40913_41264 = G__41269;
continue;
} else {
var temp__5735__auto___41271 = cljs.core.seq(seq__40910_41261);
if(temp__5735__auto___41271){
var seq__40910_41272__$1 = temp__5735__auto___41271;
if(cljs.core.chunked_seq_QMARK_(seq__40910_41272__$1)){
var c__4609__auto___41273 = cljs.core.chunk_first(seq__40910_41272__$1);
var G__41274 = cljs.core.chunk_rest(seq__40910_41272__$1);
var G__41275 = c__4609__auto___41273;
var G__41276 = cljs.core.count(c__4609__auto___41273);
var G__41277 = (0);
seq__40910_41261 = G__41274;
chunk__40911_41262 = G__41275;
count__40912_41263 = G__41276;
i__40913_41264 = G__41277;
continue;
} else {
var f_41278 = cljs.core.first(seq__40910_41272__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_41278], 0));


var G__41279 = cljs.core.next(seq__40910_41272__$1);
var G__41280 = null;
var G__41281 = (0);
var G__41282 = (0);
seq__40910_41261 = G__41279;
chunk__40911_41262 = G__41280;
count__40912_41263 = G__41281;
i__40913_41264 = G__41282;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41284 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_41284], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_41284)))?cljs.core.second(arglists_41284):arglists_41284)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__40927_41290 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40929_41291 = null;
var count__40930_41292 = (0);
var i__40931_41293 = (0);
while(true){
if((i__40931_41293 < count__40930_41292)){
var vec__40977_41294 = chunk__40929_41291.cljs$core$IIndexed$_nth$arity$2(null,i__40931_41293);
var name_41295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40977_41294,(0),null);
var map__40980_41296 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40977_41294,(1),null);
var map__40980_41297__$1 = (((((!((map__40980_41296 == null))))?(((((map__40980_41296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40980_41296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40980_41296):map__40980_41296);
var doc_41298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40980_41297__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40980_41297__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41295], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41299], 0));

if(cljs.core.truth_(doc_41298)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41298], 0));
} else {
}


var G__41300 = seq__40927_41290;
var G__41301 = chunk__40929_41291;
var G__41302 = count__40930_41292;
var G__41303 = (i__40931_41293 + (1));
seq__40927_41290 = G__41300;
chunk__40929_41291 = G__41301;
count__40930_41292 = G__41302;
i__40931_41293 = G__41303;
continue;
} else {
var temp__5735__auto___41304 = cljs.core.seq(seq__40927_41290);
if(temp__5735__auto___41304){
var seq__40927_41305__$1 = temp__5735__auto___41304;
if(cljs.core.chunked_seq_QMARK_(seq__40927_41305__$1)){
var c__4609__auto___41306 = cljs.core.chunk_first(seq__40927_41305__$1);
var G__41308 = cljs.core.chunk_rest(seq__40927_41305__$1);
var G__41309 = c__4609__auto___41306;
var G__41310 = cljs.core.count(c__4609__auto___41306);
var G__41311 = (0);
seq__40927_41290 = G__41308;
chunk__40929_41291 = G__41309;
count__40930_41292 = G__41310;
i__40931_41293 = G__41311;
continue;
} else {
var vec__40992_41312 = cljs.core.first(seq__40927_41305__$1);
var name_41313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40992_41312,(0),null);
var map__40995_41314 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40992_41312,(1),null);
var map__40995_41315__$1 = (((((!((map__40995_41314 == null))))?(((((map__40995_41314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40995_41314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40995_41314):map__40995_41314);
var doc_41316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40995_41315__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40995_41315__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_41313], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_41317], 0));

if(cljs.core.truth_(doc_41316)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_41316], 0));
} else {
}


var G__41327 = cljs.core.next(seq__40927_41305__$1);
var G__41328 = null;
var G__41329 = (0);
var G__41330 = (0);
seq__40927_41290 = G__41327;
chunk__40929_41291 = G__41328;
count__40930_41292 = G__41329;
i__40931_41293 = G__41330;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__41004 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41005 = null;
var count__41006 = (0);
var i__41007 = (0);
while(true){
if((i__41007 < count__41006)){
var role = chunk__41005.cljs$core$IIndexed$_nth$arity$2(null,i__41007);
var temp__5735__auto___41337__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___41337__$1)){
var spec_41341 = temp__5735__auto___41337__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41341)], 0));
} else {
}


var G__41344 = seq__41004;
var G__41345 = chunk__41005;
var G__41346 = count__41006;
var G__41347 = (i__41007 + (1));
seq__41004 = G__41344;
chunk__41005 = G__41345;
count__41006 = G__41346;
i__41007 = G__41347;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__41004);
if(temp__5735__auto____$1){
var seq__41004__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__41004__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41004__$1);
var G__41352 = cljs.core.chunk_rest(seq__41004__$1);
var G__41353 = c__4609__auto__;
var G__41354 = cljs.core.count(c__4609__auto__);
var G__41355 = (0);
seq__41004 = G__41352;
chunk__41005 = G__41353;
count__41006 = G__41354;
i__41007 = G__41355;
continue;
} else {
var role = cljs.core.first(seq__41004__$1);
var temp__5735__auto___41362__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___41362__$2)){
var spec_41365 = temp__5735__auto___41362__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_41365)], 0));
} else {
}


var G__41369 = cljs.core.next(seq__41004__$1);
var G__41370 = null;
var G__41371 = (0);
var G__41372 = (0);
seq__41004 = G__41369;
chunk__41005 = G__41370;
count__41006 = G__41371;
i__41007 = G__41372;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__41377 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__41378 = cljs.core.ex_cause(t);
via = G__41377;
t = G__41378;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__41059 = datafied_throwable;
var map__41059__$1 = (((((!((map__41059 == null))))?(((((map__41059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41059):map__41059);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41059__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41059__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__41059__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__41061 = cljs.core.last(via);
var map__41061__$1 = (((((!((map__41061 == null))))?(((((map__41061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41061):map__41061);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41061__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41061__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41061__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__41062 = data;
var map__41062__$1 = (((((!((map__41062 == null))))?(((((map__41062.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41062.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41062):map__41062);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41062__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41062__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41062__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__41063 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__41063__$1 = (((((!((map__41063 == null))))?(((((map__41063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41063):map__41063);
var top_data = map__41063__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41063__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__41074 = phase;
var G__41074__$1 = (((G__41074 instanceof cljs.core.Keyword))?G__41074.fqn:null);
switch (G__41074__$1) {
case "read-source":
var map__41077 = data;
var map__41077__$1 = (((((!((map__41077 == null))))?(((((map__41077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41077):map__41077);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41077__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41077__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__41084 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__41084__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41084,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41084);
var G__41084__$2 = (cljs.core.truth_((function (){var fexpr__41090 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41090.cljs$core$IFn$_invoke$arity$1 ? fexpr__41090.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41090.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41084__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41084__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41084__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41084__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__41102 = top_data;
var G__41102__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41102,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__41102);
var G__41102__$2 = (cljs.core.truth_((function (){var fexpr__41103 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41103.cljs$core$IFn$_invoke$arity$1 ? fexpr__41103.cljs$core$IFn$_invoke$arity$1(source) : fexpr__41103.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41102__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__41102__$1);
var G__41102__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41102__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41102__$2);
var G__41102__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41102__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41102__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41102__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41102__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__41105 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41105,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41105,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41105,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41105,(3),null);
var G__41110 = top_data;
var G__41110__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41110,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__41110);
var G__41110__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41110__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__41110__$1);
var G__41110__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41110__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__41110__$2);
var G__41110__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41110__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__41110__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41110__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__41110__$4;
}

break;
case "execution":
var vec__41118 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41118,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41118,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41118,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41118,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__41058_SHARP_){
var or__4185__auto__ = (p1__41058_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__41131 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__41131.cljs$core$IFn$_invoke$arity$1 ? fexpr__41131.cljs$core$IFn$_invoke$arity$1(p1__41058_SHARP_) : fexpr__41131.call(null,p1__41058_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__41132 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__41132__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41132,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__41132);
var G__41132__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41132__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__41132__$1);
var G__41132__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41132__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__41132__$2);
var G__41132__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41132__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__41132__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__41132__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__41132__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41074__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__41154){
var map__41155 = p__41154;
var map__41155__$1 = (((((!((map__41155 == null))))?(((((map__41155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41155):map__41155);
var triage_data = map__41155__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41155__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41155__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41155__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41155__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41155__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41155__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41155__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41155__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__41183 = phase;
var G__41183__$1 = (((G__41183 instanceof cljs.core.Keyword))?G__41183.fqn:null);
switch (G__41183__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__41184 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__41185 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41186 = loc;
var G__41187 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41188_41457 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41189_41458 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41190_41459 = true;
var _STAR_print_fn_STAR__temp_val__41191_41460 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41190_41459);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41191_41460);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41152_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41152_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41189_41458);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41188_41457);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41184,G__41185,G__41186,G__41187) : format.call(null,G__41184,G__41185,G__41186,G__41187));

break;
case "macroexpansion":
var G__41199 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__41200 = cause_type;
var G__41201 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41202 = loc;
var G__41203 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41199,G__41200,G__41201,G__41202,G__41203) : format.call(null,G__41199,G__41200,G__41201,G__41202,G__41203));

break;
case "compile-syntax-check":
var G__41204 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__41205 = cause_type;
var G__41206 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41207 = loc;
var G__41208 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41204,G__41205,G__41206,G__41207,G__41208) : format.call(null,G__41204,G__41205,G__41206,G__41207,G__41208));

break;
case "compilation":
var G__41209 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__41210 = cause_type;
var G__41211 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41212 = loc;
var G__41213 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41209,G__41210,G__41211,G__41212,G__41213) : format.call(null,G__41209,G__41210,G__41211,G__41212,G__41213));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__41220 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__41221 = symbol;
var G__41222 = loc;
var G__41223 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__41231_41468 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__41232_41469 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__41233_41470 = true;
var _STAR_print_fn_STAR__temp_val__41234_41471 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__41233_41470);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__41234_41471);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__41153_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__41153_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__41232_41469);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__41231_41468);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__41220,G__41221,G__41222,G__41223) : format.call(null,G__41220,G__41221,G__41222,G__41223));
} else {
var G__41241 = "Execution error%s at %s(%s).\n%s\n";
var G__41242 = cause_type;
var G__41243 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__41244 = loc;
var G__41245 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__41241,G__41242,G__41243,G__41244,G__41245) : format.call(null,G__41241,G__41242,G__41243,G__41244,G__41245));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41183__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
