goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50153){
var map__50154 = p__50153;
var map__50154__$1 = (((((!((map__50154 == null))))?(((((map__50154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50154):map__50154);
var m = map__50154__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50154__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50154__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__50160_50386 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50161_50387 = null;
var count__50162_50388 = (0);
var i__50163_50389 = (0);
while(true){
if((i__50163_50389 < count__50162_50388)){
var f_50390 = chunk__50161_50387.cljs$core$IIndexed$_nth$arity$2(null,i__50163_50389);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50390], 0));


var G__50391 = seq__50160_50386;
var G__50392 = chunk__50161_50387;
var G__50393 = count__50162_50388;
var G__50394 = (i__50163_50389 + (1));
seq__50160_50386 = G__50391;
chunk__50161_50387 = G__50392;
count__50162_50388 = G__50393;
i__50163_50389 = G__50394;
continue;
} else {
var temp__5735__auto___50395 = cljs.core.seq(seq__50160_50386);
if(temp__5735__auto___50395){
var seq__50160_50396__$1 = temp__5735__auto___50395;
if(cljs.core.chunked_seq_QMARK_(seq__50160_50396__$1)){
var c__4609__auto___50397 = cljs.core.chunk_first(seq__50160_50396__$1);
var G__50398 = cljs.core.chunk_rest(seq__50160_50396__$1);
var G__50399 = c__4609__auto___50397;
var G__50400 = cljs.core.count(c__4609__auto___50397);
var G__50401 = (0);
seq__50160_50386 = G__50398;
chunk__50161_50387 = G__50399;
count__50162_50388 = G__50400;
i__50163_50389 = G__50401;
continue;
} else {
var f_50402 = cljs.core.first(seq__50160_50396__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50402], 0));


var G__50403 = cljs.core.next(seq__50160_50396__$1);
var G__50404 = null;
var G__50405 = (0);
var G__50406 = (0);
seq__50160_50386 = G__50403;
chunk__50161_50387 = G__50404;
count__50162_50388 = G__50405;
i__50163_50389 = G__50406;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50408 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50408], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50408)))?cljs.core.second(arglists_50408):arglists_50408)], 0));
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
var seq__50166_50416 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50167_50417 = null;
var count__50168_50418 = (0);
var i__50169_50419 = (0);
while(true){
if((i__50169_50419 < count__50168_50418)){
var vec__50187_50420 = chunk__50167_50417.cljs$core$IIndexed$_nth$arity$2(null,i__50169_50419);
var name_50421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50187_50420,(0),null);
var map__50190_50422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50187_50420,(1),null);
var map__50190_50423__$1 = (((((!((map__50190_50422 == null))))?(((((map__50190_50422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50190_50422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50190_50422):map__50190_50422);
var doc_50424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50190_50423__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50190_50423__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50421], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50425], 0));

if(cljs.core.truth_(doc_50424)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50424], 0));
} else {
}


var G__50432 = seq__50166_50416;
var G__50433 = chunk__50167_50417;
var G__50434 = count__50168_50418;
var G__50435 = (i__50169_50419 + (1));
seq__50166_50416 = G__50432;
chunk__50167_50417 = G__50433;
count__50168_50418 = G__50434;
i__50169_50419 = G__50435;
continue;
} else {
var temp__5735__auto___50436 = cljs.core.seq(seq__50166_50416);
if(temp__5735__auto___50436){
var seq__50166_50437__$1 = temp__5735__auto___50436;
if(cljs.core.chunked_seq_QMARK_(seq__50166_50437__$1)){
var c__4609__auto___50438 = cljs.core.chunk_first(seq__50166_50437__$1);
var G__50439 = cljs.core.chunk_rest(seq__50166_50437__$1);
var G__50440 = c__4609__auto___50438;
var G__50441 = cljs.core.count(c__4609__auto___50438);
var G__50442 = (0);
seq__50166_50416 = G__50439;
chunk__50167_50417 = G__50440;
count__50168_50418 = G__50441;
i__50169_50419 = G__50442;
continue;
} else {
var vec__50192_50443 = cljs.core.first(seq__50166_50437__$1);
var name_50444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50192_50443,(0),null);
var map__50195_50445 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50192_50443,(1),null);
var map__50195_50446__$1 = (((((!((map__50195_50445 == null))))?(((((map__50195_50445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50195_50445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50195_50445):map__50195_50445);
var doc_50447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50195_50446__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50195_50446__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50444], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50448], 0));

if(cljs.core.truth_(doc_50447)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50447], 0));
} else {
}


var G__50450 = cljs.core.next(seq__50166_50437__$1);
var G__50451 = null;
var G__50452 = (0);
var G__50453 = (0);
seq__50166_50416 = G__50450;
chunk__50167_50417 = G__50451;
count__50168_50418 = G__50452;
i__50169_50419 = G__50453;
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

var seq__50200 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50201 = null;
var count__50202 = (0);
var i__50203 = (0);
while(true){
if((i__50203 < count__50202)){
var role = chunk__50201.cljs$core$IIndexed$_nth$arity$2(null,i__50203);
var temp__5735__auto___50455__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50455__$1)){
var spec_50456 = temp__5735__auto___50455__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50456)], 0));
} else {
}


var G__50457 = seq__50200;
var G__50458 = chunk__50201;
var G__50459 = count__50202;
var G__50460 = (i__50203 + (1));
seq__50200 = G__50457;
chunk__50201 = G__50458;
count__50202 = G__50459;
i__50203 = G__50460;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__50200);
if(temp__5735__auto____$1){
var seq__50200__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50200__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__50200__$1);
var G__50461 = cljs.core.chunk_rest(seq__50200__$1);
var G__50462 = c__4609__auto__;
var G__50463 = cljs.core.count(c__4609__auto__);
var G__50464 = (0);
seq__50200 = G__50461;
chunk__50201 = G__50462;
count__50202 = G__50463;
i__50203 = G__50464;
continue;
} else {
var role = cljs.core.first(seq__50200__$1);
var temp__5735__auto___50465__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50465__$2)){
var spec_50466 = temp__5735__auto___50465__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50466)], 0));
} else {
}


var G__50470 = cljs.core.next(seq__50200__$1);
var G__50471 = null;
var G__50472 = (0);
var G__50473 = (0);
seq__50200 = G__50470;
chunk__50201 = G__50471;
count__50202 = G__50472;
i__50203 = G__50473;
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
var G__50478 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50479 = cljs.core.ex_cause(t);
via = G__50478;
t = G__50479;
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
var map__50219 = datafied_throwable;
var map__50219__$1 = (((((!((map__50219 == null))))?(((((map__50219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50219):map__50219);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50219__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50219__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50219__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50220 = cljs.core.last(via);
var map__50220__$1 = (((((!((map__50220 == null))))?(((((map__50220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50220):map__50220);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50220__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50220__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50220__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50221 = data;
var map__50221__$1 = (((((!((map__50221 == null))))?(((((map__50221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50221):map__50221);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50221__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50221__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50221__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50222 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50222__$1 = (((((!((map__50222 == null))))?(((((map__50222.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50222.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50222):map__50222);
var top_data = map__50222__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50222__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50240 = phase;
var G__50240__$1 = (((G__50240 instanceof cljs.core.Keyword))?G__50240.fqn:null);
switch (G__50240__$1) {
case "read-source":
var map__50241 = data;
var map__50241__$1 = (((((!((map__50241 == null))))?(((((map__50241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50241):map__50241);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50241__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50241__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50250 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50250__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50250,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50250);
var G__50250__$2 = (cljs.core.truth_((function (){var fexpr__50251 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50251.cljs$core$IFn$_invoke$arity$1 ? fexpr__50251.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50251.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50250__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50250__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50250__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50250__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50252 = top_data;
var G__50252__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50252,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50252);
var G__50252__$2 = (cljs.core.truth_((function (){var fexpr__50253 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50253.cljs$core$IFn$_invoke$arity$1 ? fexpr__50253.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50253.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50252__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50252__$1);
var G__50252__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50252__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50252__$2);
var G__50252__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50252__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50252__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50252__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50252__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50258 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50258,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50258,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50258,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50258,(3),null);
var G__50264 = top_data;
var G__50264__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50264,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50264);
var G__50264__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50264__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50264__$1);
var G__50264__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50264__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50264__$2);
var G__50264__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50264__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50264__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50264__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50264__$4;
}

break;
case "execution":
var vec__50272 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50272,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50272,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50272,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50272,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50212_SHARP_){
var or__4185__auto__ = (p1__50212_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__50291 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50291.cljs$core$IFn$_invoke$arity$1 ? fexpr__50291.cljs$core$IFn$_invoke$arity$1(p1__50212_SHARP_) : fexpr__50291.call(null,p1__50212_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__50301 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50301__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50301,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50301);
var G__50301__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50301__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50301__$1);
var G__50301__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50301__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50301__$2);
var G__50301__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50301__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50301__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50301__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50301__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50240__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50311){
var map__50312 = p__50311;
var map__50312__$1 = (((((!((map__50312 == null))))?(((((map__50312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50312):map__50312);
var triage_data = map__50312__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50312__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50312__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50312__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50312__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50312__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50312__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50312__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50312__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__50329 = phase;
var G__50329__$1 = (((G__50329 instanceof cljs.core.Keyword))?G__50329.fqn:null);
switch (G__50329__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50330 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50331 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50332 = loc;
var G__50333 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50334_50517 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50335_50518 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50336_50519 = true;
var _STAR_print_fn_STAR__temp_val__50337_50520 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50336_50519);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50337_50520);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50302_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50302_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50335_50518);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50334_50517);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50330,G__50331,G__50332,G__50333) : format.call(null,G__50330,G__50331,G__50332,G__50333));

break;
case "macroexpansion":
var G__50346 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50347 = cause_type;
var G__50348 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50349 = loc;
var G__50350 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50346,G__50347,G__50348,G__50349,G__50350) : format.call(null,G__50346,G__50347,G__50348,G__50349,G__50350));

break;
case "compile-syntax-check":
var G__50357 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50358 = cause_type;
var G__50359 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50360 = loc;
var G__50361 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50357,G__50358,G__50359,G__50360,G__50361) : format.call(null,G__50357,G__50358,G__50359,G__50360,G__50361));

break;
case "compilation":
var G__50363 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50364 = cause_type;
var G__50365 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50366 = loc;
var G__50367 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50363,G__50364,G__50365,G__50366,G__50367) : format.call(null,G__50363,G__50364,G__50365,G__50366,G__50367));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50368 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50369 = symbol;
var G__50370 = loc;
var G__50371 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50372_50536 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50373_50537 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50374_50538 = true;
var _STAR_print_fn_STAR__temp_val__50375_50539 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50374_50538);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50375_50539);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50307_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50307_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50373_50537);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50372_50536);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50368,G__50369,G__50370,G__50371) : format.call(null,G__50368,G__50369,G__50370,G__50371));
} else {
var G__50380 = "Execution error%s at %s(%s).\n%s\n";
var G__50381 = cause_type;
var G__50382 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50383 = loc;
var G__50384 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50380,G__50381,G__50382,G__50383,G__50384) : format.call(null,G__50380,G__50381,G__50382,G__50383,G__50384));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50329__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
