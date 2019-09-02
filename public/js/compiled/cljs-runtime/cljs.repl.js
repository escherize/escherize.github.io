goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31689){
var map__31690 = p__31689;
var map__31690__$1 = (((((!((map__31690 == null))))?(((((map__31690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31690):map__31690);
var m = map__31690__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31690__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31690__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
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
var seq__31692_31916 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31693_31917 = null;
var count__31694_31918 = (0);
var i__31695_31919 = (0);
while(true){
if((i__31695_31919 < count__31694_31918)){
var f_31920 = chunk__31693_31917.cljs$core$IIndexed$_nth$arity$2(null,i__31695_31919);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31920], 0));


var G__31921 = seq__31692_31916;
var G__31922 = chunk__31693_31917;
var G__31923 = count__31694_31918;
var G__31924 = (i__31695_31919 + (1));
seq__31692_31916 = G__31921;
chunk__31693_31917 = G__31922;
count__31694_31918 = G__31923;
i__31695_31919 = G__31924;
continue;
} else {
var temp__5720__auto___31925 = cljs.core.seq(seq__31692_31916);
if(temp__5720__auto___31925){
var seq__31692_31926__$1 = temp__5720__auto___31925;
if(cljs.core.chunked_seq_QMARK_(seq__31692_31926__$1)){
var c__4550__auto___31927 = cljs.core.chunk_first(seq__31692_31926__$1);
var G__31928 = cljs.core.chunk_rest(seq__31692_31926__$1);
var G__31929 = c__4550__auto___31927;
var G__31930 = cljs.core.count(c__4550__auto___31927);
var G__31931 = (0);
seq__31692_31916 = G__31928;
chunk__31693_31917 = G__31929;
count__31694_31918 = G__31930;
i__31695_31919 = G__31931;
continue;
} else {
var f_31932 = cljs.core.first(seq__31692_31926__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31932], 0));


var G__31933 = cljs.core.next(seq__31692_31926__$1);
var G__31934 = null;
var G__31935 = (0);
var G__31936 = (0);
seq__31692_31916 = G__31933;
chunk__31693_31917 = G__31934;
count__31694_31918 = G__31935;
i__31695_31919 = G__31936;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31938 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31938], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31938)))?cljs.core.second(arglists_31938):arglists_31938)], 0));
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
var seq__31707_31944 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31708_31945 = null;
var count__31709_31946 = (0);
var i__31710_31947 = (0);
while(true){
if((i__31710_31947 < count__31709_31946)){
var vec__31725_31948 = chunk__31708_31945.cljs$core$IIndexed$_nth$arity$2(null,i__31710_31947);
var name_31949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31725_31948,(0),null);
var map__31728_31950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31725_31948,(1),null);
var map__31728_31951__$1 = (((((!((map__31728_31950 == null))))?(((((map__31728_31950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31728_31950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31728_31950):map__31728_31950);
var doc_31952 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31728_31951__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31953 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31728_31951__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31949], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31953], 0));

if(cljs.core.truth_(doc_31952)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31952], 0));
} else {
}


var G__31955 = seq__31707_31944;
var G__31956 = chunk__31708_31945;
var G__31957 = count__31709_31946;
var G__31958 = (i__31710_31947 + (1));
seq__31707_31944 = G__31955;
chunk__31708_31945 = G__31956;
count__31709_31946 = G__31957;
i__31710_31947 = G__31958;
continue;
} else {
var temp__5720__auto___31959 = cljs.core.seq(seq__31707_31944);
if(temp__5720__auto___31959){
var seq__31707_31960__$1 = temp__5720__auto___31959;
if(cljs.core.chunked_seq_QMARK_(seq__31707_31960__$1)){
var c__4550__auto___31961 = cljs.core.chunk_first(seq__31707_31960__$1);
var G__31962 = cljs.core.chunk_rest(seq__31707_31960__$1);
var G__31963 = c__4550__auto___31961;
var G__31964 = cljs.core.count(c__4550__auto___31961);
var G__31965 = (0);
seq__31707_31944 = G__31962;
chunk__31708_31945 = G__31963;
count__31709_31946 = G__31964;
i__31710_31947 = G__31965;
continue;
} else {
var vec__31731_31966 = cljs.core.first(seq__31707_31960__$1);
var name_31967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31731_31966,(0),null);
var map__31734_31968 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31731_31966,(1),null);
var map__31734_31969__$1 = (((((!((map__31734_31968 == null))))?(((((map__31734_31968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31734_31968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31734_31968):map__31734_31968);
var doc_31970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31734_31969__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31734_31969__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31967], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31971], 0));

if(cljs.core.truth_(doc_31970)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31970], 0));
} else {
}


var G__31972 = cljs.core.next(seq__31707_31960__$1);
var G__31973 = null;
var G__31974 = (0);
var G__31975 = (0);
seq__31707_31944 = G__31972;
chunk__31708_31945 = G__31973;
count__31709_31946 = G__31974;
i__31710_31947 = G__31975;
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
var temp__5720__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31742 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31743 = null;
var count__31744 = (0);
var i__31745 = (0);
while(true){
if((i__31745 < count__31744)){
var role = chunk__31743.cljs$core$IIndexed$_nth$arity$2(null,i__31745);
var temp__5720__auto___31978__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31978__$1)){
var spec_31979 = temp__5720__auto___31978__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31979)], 0));
} else {
}


var G__31980 = seq__31742;
var G__31981 = chunk__31743;
var G__31982 = count__31744;
var G__31983 = (i__31745 + (1));
seq__31742 = G__31980;
chunk__31743 = G__31981;
count__31744 = G__31982;
i__31745 = G__31983;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq(seq__31742);
if(temp__5720__auto____$1){
var seq__31742__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31742__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31742__$1);
var G__31985 = cljs.core.chunk_rest(seq__31742__$1);
var G__31986 = c__4550__auto__;
var G__31987 = cljs.core.count(c__4550__auto__);
var G__31988 = (0);
seq__31742 = G__31985;
chunk__31743 = G__31986;
count__31744 = G__31987;
i__31745 = G__31988;
continue;
} else {
var role = cljs.core.first(seq__31742__$1);
var temp__5720__auto___31989__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5720__auto___31989__$2)){
var spec_31990 = temp__5720__auto___31989__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31990)], 0));
} else {
}


var G__31991 = cljs.core.next(seq__31742__$1);
var G__31992 = null;
var G__31993 = (0);
var G__31994 = (0);
seq__31742 = G__31991;
chunk__31743 = G__31992;
count__31744 = G__31993;
i__31745 = G__31994;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
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
var G__31998 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__31999 = cljs.core.ex_cause(t);
via = G__31998;
t = G__31999;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
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
var map__31773 = datafied_throwable;
var map__31773__$1 = (((((!((map__31773 == null))))?(((((map__31773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31773):map__31773);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31773__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31773__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31773__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31774 = cljs.core.last(via);
var map__31774__$1 = (((((!((map__31774 == null))))?(((((map__31774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31774):map__31774);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31774__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31774__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31774__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31775 = data;
var map__31775__$1 = (((((!((map__31775 == null))))?(((((map__31775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31775):map__31775);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31775__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31775__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31775__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31776 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31776__$1 = (((((!((map__31776 == null))))?(((((map__31776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31776):map__31776);
var top_data = map__31776__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31776__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31785 = phase;
var G__31785__$1 = (((G__31785 instanceof cljs.core.Keyword))?G__31785.fqn:null);
switch (G__31785__$1) {
case "read-source":
var map__31786 = data;
var map__31786__$1 = (((((!((map__31786 == null))))?(((((map__31786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31786):map__31786);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31786__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31786__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31788 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31788__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31788,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31788);
var G__31788__$2 = (cljs.core.truth_((function (){var fexpr__31791 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31791.cljs$core$IFn$_invoke$arity$1 ? fexpr__31791.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31791.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31788__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31788__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31788__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31788__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31793 = top_data;
var G__31793__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31793,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31793);
var G__31793__$2 = (cljs.core.truth_((function (){var fexpr__31794 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31794.cljs$core$IFn$_invoke$arity$1 ? fexpr__31794.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31794.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31793__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31793__$1);
var G__31793__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31793__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31793__$2);
var G__31793__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31793__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31793__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31793__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31793__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31795 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31795,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31795,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31795,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31795,(3),null);
var G__31798 = top_data;
var G__31798__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31798,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31798);
var G__31798__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31798__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31798__$1);
var G__31798__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31798__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31798__$2);
var G__31798__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31798__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31798__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31798__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31798__$4;
}

break;
case "execution":
var vec__31802 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31802,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31802,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31802,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31802,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__31802,source__$1,method,file,line,G__31785,G__31785__$1,map__31773,map__31773__$1,via,trace,phase,map__31774,map__31774__$1,type,message,data,map__31775,map__31775__$1,problems,fn,caller,map__31776,map__31776__$1,top_data,source){
return (function (p1__31766_SHARP_){
var or__4131__auto__ = (p1__31766_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__31813 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31813.cljs$core$IFn$_invoke$arity$1 ? fexpr__31813.cljs$core$IFn$_invoke$arity$1(p1__31766_SHARP_) : fexpr__31813.call(null,p1__31766_SHARP_));
}
});})(vec__31802,source__$1,method,file,line,G__31785,G__31785__$1,map__31773,map__31773__$1,via,trace,phase,map__31774,map__31774__$1,type,message,data,map__31775,map__31775__$1,problems,fn,caller,map__31776,map__31776__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__31814 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31814__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31814,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31814);
var G__31814__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31814__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31814__$1);
var G__31814__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31814__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31814__$2);
var G__31814__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31814__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31814__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31814__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31814__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31785__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31845){
var map__31846 = p__31845;
var map__31846__$1 = (((((!((map__31846 == null))))?(((((map__31846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31846):map__31846);
var triage_data = map__31846__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31846__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31846__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31846__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31846__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31846__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31846__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31846__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31846__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31869 = phase;
var G__31869__$1 = (((G__31869 instanceof cljs.core.Keyword))?G__31869.fqn:null);
switch (G__31869__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31870 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31871 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31872 = loc;
var G__31873 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31878_32046 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31879_32047 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31880_32048 = true;
var _STAR_print_fn_STAR__temp_val__31881_32049 = ((function (_STAR_print_newline_STAR__orig_val__31878_32046,_STAR_print_fn_STAR__orig_val__31879_32047,_STAR_print_newline_STAR__temp_val__31880_32048,sb__4661__auto__,G__31870,G__31871,G__31872,G__31869,G__31869__$1,loc,class_name,simple_class,cause_type,format,map__31846,map__31846__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31878_32046,_STAR_print_fn_STAR__orig_val__31879_32047,_STAR_print_newline_STAR__temp_val__31880_32048,sb__4661__auto__,G__31870,G__31871,G__31872,G__31869,G__31869__$1,loc,class_name,simple_class,cause_type,format,map__31846,map__31846__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31880_32048;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31881_32049;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31878_32046,_STAR_print_fn_STAR__orig_val__31879_32047,_STAR_print_newline_STAR__temp_val__31880_32048,_STAR_print_fn_STAR__temp_val__31881_32049,sb__4661__auto__,G__31870,G__31871,G__31872,G__31869,G__31869__$1,loc,class_name,simple_class,cause_type,format,map__31846,map__31846__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31878_32046,_STAR_print_fn_STAR__orig_val__31879_32047,_STAR_print_newline_STAR__temp_val__31880_32048,_STAR_print_fn_STAR__temp_val__31881_32049,sb__4661__auto__,G__31870,G__31871,G__31872,G__31869,G__31869__$1,loc,class_name,simple_class,cause_type,format,map__31846,map__31846__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31827_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31827_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31878_32046,_STAR_print_fn_STAR__orig_val__31879_32047,_STAR_print_newline_STAR__temp_val__31880_32048,_STAR_print_fn_STAR__temp_val__31881_32049,sb__4661__auto__,G__31870,G__31871,G__31872,G__31869,G__31869__$1,loc,class_name,simple_class,cause_type,format,map__31846,map__31846__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31878_32046,_STAR_print_fn_STAR__orig_val__31879_32047,_STAR_print_newline_STAR__temp_val__31880_32048,_STAR_print_fn_STAR__temp_val__31881_32049,sb__4661__auto__,G__31870,G__31871,G__31872,G__31869,G__31869__$1,loc,class_name,simple_class,cause_type,format,map__31846,map__31846__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31879_32047;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31878_32046;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31870,G__31871,G__31872,G__31873) : format.call(null,G__31870,G__31871,G__31872,G__31873));

break;
case "macroexpansion":
var G__31883 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31884 = cause_type;
var G__31885 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31886 = loc;
var G__31887 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31883,G__31884,G__31885,G__31886,G__31887) : format.call(null,G__31883,G__31884,G__31885,G__31886,G__31887));

break;
case "compile-syntax-check":
var G__31888 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31889 = cause_type;
var G__31890 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31891 = loc;
var G__31892 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31888,G__31889,G__31890,G__31891,G__31892) : format.call(null,G__31888,G__31889,G__31890,G__31891,G__31892));

break;
case "compilation":
var G__31893 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31894 = cause_type;
var G__31895 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31896 = loc;
var G__31897 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31893,G__31894,G__31895,G__31896,G__31897) : format.call(null,G__31893,G__31894,G__31895,G__31896,G__31897));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31898 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31899 = symbol;
var G__31900 = loc;
var G__31901 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31902_32050 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31903_32051 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31904_32052 = true;
var _STAR_print_fn_STAR__temp_val__31905_32053 = ((function (_STAR_print_newline_STAR__orig_val__31902_32050,_STAR_print_fn_STAR__orig_val__31903_32051,_STAR_print_newline_STAR__temp_val__31904_32052,sb__4661__auto__,G__31898,G__31899,G__31900,G__31869,G__31869__$1,loc,class_name,simple_class,cause_type,format,map__31846,map__31846__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31902_32050,_STAR_print_fn_STAR__orig_val__31903_32051,_STAR_print_newline_STAR__temp_val__31904_32052,sb__4661__auto__,G__31898,G__31899,G__31900,G__31869,G__31869__$1,loc,class_name,simple_class,cause_type,format,map__31846,map__31846__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31904_32052;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31905_32053;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31902_32050,_STAR_print_fn_STAR__orig_val__31903_32051,_STAR_print_newline_STAR__temp_val__31904_32052,_STAR_print_fn_STAR__temp_val__31905_32053,sb__4661__auto__,G__31898,G__31899,G__31900,G__31869,G__31869__$1,loc,class_name,simple_class,cause_type,format,map__31846,map__31846__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31902_32050,_STAR_print_fn_STAR__orig_val__31903_32051,_STAR_print_newline_STAR__temp_val__31904_32052,_STAR_print_fn_STAR__temp_val__31905_32053,sb__4661__auto__,G__31898,G__31899,G__31900,G__31869,G__31869__$1,loc,class_name,simple_class,cause_type,format,map__31846,map__31846__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31836_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31836_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31902_32050,_STAR_print_fn_STAR__orig_val__31903_32051,_STAR_print_newline_STAR__temp_val__31904_32052,_STAR_print_fn_STAR__temp_val__31905_32053,sb__4661__auto__,G__31898,G__31899,G__31900,G__31869,G__31869__$1,loc,class_name,simple_class,cause_type,format,map__31846,map__31846__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31902_32050,_STAR_print_fn_STAR__orig_val__31903_32051,_STAR_print_newline_STAR__temp_val__31904_32052,_STAR_print_fn_STAR__temp_val__31905_32053,sb__4661__auto__,G__31898,G__31899,G__31900,G__31869,G__31869__$1,loc,class_name,simple_class,cause_type,format,map__31846,map__31846__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31903_32051;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31902_32050;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31898,G__31899,G__31900,G__31901) : format.call(null,G__31898,G__31899,G__31900,G__31901));
} else {
var G__31911 = "Execution error%s at %s(%s).\n%s\n";
var G__31912 = cause_type;
var G__31913 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31914 = loc;
var G__31915 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31911,G__31912,G__31913,G__31914,G__31915) : format.call(null,G__31911,G__31912,G__31913,G__31914,G__31915));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31869__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
