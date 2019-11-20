goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36401){
var map__36402 = p__36401;
var map__36402__$1 = (((((!((map__36402 == null))))?(((((map__36402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36402):map__36402);
var m = map__36402__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36402__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36402__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
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
var seq__36406_36687 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36407_36688 = null;
var count__36408_36689 = (0);
var i__36409_36690 = (0);
while(true){
if((i__36409_36690 < count__36408_36689)){
var f_36691 = chunk__36407_36688.cljs$core$IIndexed$_nth$arity$2(null,i__36409_36690);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36691], 0));


var G__36692 = seq__36406_36687;
var G__36693 = chunk__36407_36688;
var G__36694 = count__36408_36689;
var G__36695 = (i__36409_36690 + (1));
seq__36406_36687 = G__36692;
chunk__36407_36688 = G__36693;
count__36408_36689 = G__36694;
i__36409_36690 = G__36695;
continue;
} else {
var temp__5735__auto___36696 = cljs.core.seq(seq__36406_36687);
if(temp__5735__auto___36696){
var seq__36406_36697__$1 = temp__5735__auto___36696;
if(cljs.core.chunked_seq_QMARK_(seq__36406_36697__$1)){
var c__4550__auto___36698 = cljs.core.chunk_first(seq__36406_36697__$1);
var G__36699 = cljs.core.chunk_rest(seq__36406_36697__$1);
var G__36700 = c__4550__auto___36698;
var G__36701 = cljs.core.count(c__4550__auto___36698);
var G__36702 = (0);
seq__36406_36687 = G__36699;
chunk__36407_36688 = G__36700;
count__36408_36689 = G__36701;
i__36409_36690 = G__36702;
continue;
} else {
var f_36703 = cljs.core.first(seq__36406_36697__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36703], 0));


var G__36704 = cljs.core.next(seq__36406_36697__$1);
var G__36705 = null;
var G__36706 = (0);
var G__36707 = (0);
seq__36406_36687 = G__36704;
chunk__36407_36688 = G__36705;
count__36408_36689 = G__36706;
i__36409_36690 = G__36707;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36708 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36708], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36708)))?cljs.core.second(arglists_36708):arglists_36708)], 0));
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
var seq__36418_36713 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36419_36714 = null;
var count__36420_36715 = (0);
var i__36421_36716 = (0);
while(true){
if((i__36421_36716 < count__36420_36715)){
var vec__36464_36718 = chunk__36419_36714.cljs$core$IIndexed$_nth$arity$2(null,i__36421_36716);
var name_36719 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36464_36718,(0),null);
var map__36467_36720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36464_36718,(1),null);
var map__36467_36721__$1 = (((((!((map__36467_36720 == null))))?(((((map__36467_36720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36467_36720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36467_36720):map__36467_36720);
var doc_36722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36467_36721__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36467_36721__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36719], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36723], 0));

if(cljs.core.truth_(doc_36722)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36722], 0));
} else {
}


var G__36728 = seq__36418_36713;
var G__36729 = chunk__36419_36714;
var G__36730 = count__36420_36715;
var G__36731 = (i__36421_36716 + (1));
seq__36418_36713 = G__36728;
chunk__36419_36714 = G__36729;
count__36420_36715 = G__36730;
i__36421_36716 = G__36731;
continue;
} else {
var temp__5735__auto___36736 = cljs.core.seq(seq__36418_36713);
if(temp__5735__auto___36736){
var seq__36418_36737__$1 = temp__5735__auto___36736;
if(cljs.core.chunked_seq_QMARK_(seq__36418_36737__$1)){
var c__4550__auto___36738 = cljs.core.chunk_first(seq__36418_36737__$1);
var G__36739 = cljs.core.chunk_rest(seq__36418_36737__$1);
var G__36740 = c__4550__auto___36738;
var G__36741 = cljs.core.count(c__4550__auto___36738);
var G__36742 = (0);
seq__36418_36713 = G__36739;
chunk__36419_36714 = G__36740;
count__36420_36715 = G__36741;
i__36421_36716 = G__36742;
continue;
} else {
var vec__36477_36743 = cljs.core.first(seq__36418_36737__$1);
var name_36744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36477_36743,(0),null);
var map__36480_36745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36477_36743,(1),null);
var map__36480_36746__$1 = (((((!((map__36480_36745 == null))))?(((((map__36480_36745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36480_36745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36480_36745):map__36480_36745);
var doc_36747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36480_36746__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36480_36746__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36744], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36748], 0));

if(cljs.core.truth_(doc_36747)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36747], 0));
} else {
}


var G__36758 = cljs.core.next(seq__36418_36737__$1);
var G__36759 = null;
var G__36760 = (0);
var G__36761 = (0);
seq__36418_36713 = G__36758;
chunk__36419_36714 = G__36759;
count__36420_36715 = G__36760;
i__36421_36716 = G__36761;
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

var seq__36482 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36483 = null;
var count__36484 = (0);
var i__36485 = (0);
while(true){
if((i__36485 < count__36484)){
var role = chunk__36483.cljs$core$IIndexed$_nth$arity$2(null,i__36485);
var temp__5735__auto___36766__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36766__$1)){
var spec_36767 = temp__5735__auto___36766__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36767)], 0));
} else {
}


var G__36772 = seq__36482;
var G__36773 = chunk__36483;
var G__36774 = count__36484;
var G__36775 = (i__36485 + (1));
seq__36482 = G__36772;
chunk__36483 = G__36773;
count__36484 = G__36774;
i__36485 = G__36775;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36482);
if(temp__5735__auto____$1){
var seq__36482__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36482__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36482__$1);
var G__36784 = cljs.core.chunk_rest(seq__36482__$1);
var G__36785 = c__4550__auto__;
var G__36786 = cljs.core.count(c__4550__auto__);
var G__36787 = (0);
seq__36482 = G__36784;
chunk__36483 = G__36785;
count__36484 = G__36786;
i__36485 = G__36787;
continue;
} else {
var role = cljs.core.first(seq__36482__$1);
var temp__5735__auto___36797__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36797__$2)){
var spec_36799 = temp__5735__auto___36797__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36799)], 0));
} else {
}


var G__36805 = cljs.core.next(seq__36482__$1);
var G__36806 = null;
var G__36807 = (0);
var G__36808 = (0);
seq__36482 = G__36805;
chunk__36483 = G__36806;
count__36484 = G__36807;
i__36485 = G__36808;
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
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
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
var G__36823 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36824 = cljs.core.ex_cause(t);
via = G__36823;
t = G__36824;
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
var map__36509 = datafied_throwable;
var map__36509__$1 = (((((!((map__36509 == null))))?(((((map__36509.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36509.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36509):map__36509);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36509__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36509__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36509__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36510 = cljs.core.last(via);
var map__36510__$1 = (((((!((map__36510 == null))))?(((((map__36510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36510):map__36510);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36510__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36510__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36510__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36511 = data;
var map__36511__$1 = (((((!((map__36511 == null))))?(((((map__36511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36511):map__36511);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36511__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36511__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36511__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36512 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36512__$1 = (((((!((map__36512 == null))))?(((((map__36512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36512.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36512):map__36512);
var top_data = map__36512__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36512__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36520 = phase;
var G__36520__$1 = (((G__36520 instanceof cljs.core.Keyword))?G__36520.fqn:null);
switch (G__36520__$1) {
case "read-source":
var map__36522 = data;
var map__36522__$1 = (((((!((map__36522 == null))))?(((((map__36522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36522):map__36522);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36522__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36522__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36528 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36528__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36528,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36528);
var G__36528__$2 = (cljs.core.truth_((function (){var fexpr__36529 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36529.cljs$core$IFn$_invoke$arity$1 ? fexpr__36529.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36529.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36528__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36528__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36528__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36528__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36530 = top_data;
var G__36530__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36530,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36530);
var G__36530__$2 = (cljs.core.truth_((function (){var fexpr__36531 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36531.cljs$core$IFn$_invoke$arity$1 ? fexpr__36531.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36531.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36530__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36530__$1);
var G__36530__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36530__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36530__$2);
var G__36530__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36530__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36530__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36530__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36530__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36535 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36535,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36535,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36535,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36535,(3),null);
var G__36539 = top_data;
var G__36539__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36539,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36539);
var G__36539__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36539__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36539__$1);
var G__36539__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36539__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36539__$2);
var G__36539__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36539__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36539__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36539__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36539__$4;
}

break;
case "execution":
var vec__36541 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36541,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36541,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36541,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36541,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__36541,source__$1,method,file,line,G__36520,G__36520__$1,map__36509,map__36509__$1,via,trace,phase,map__36510,map__36510__$1,type,message,data,map__36511,map__36511__$1,problems,fn,caller,map__36512,map__36512__$1,top_data,source){
return (function (p1__36505_SHARP_){
var or__4131__auto__ = (p1__36505_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__36552 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36552.cljs$core$IFn$_invoke$arity$1 ? fexpr__36552.cljs$core$IFn$_invoke$arity$1(p1__36505_SHARP_) : fexpr__36552.call(null,p1__36505_SHARP_));
}
});})(vec__36541,source__$1,method,file,line,G__36520,G__36520__$1,map__36509,map__36509__$1,via,trace,phase,map__36510,map__36510__$1,type,message,data,map__36511,map__36511__$1,problems,fn,caller,map__36512,map__36512__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__36554 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36554__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36554,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36554);
var G__36554__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36554__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36554__$1);
var G__36554__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36554__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36554__$2);
var G__36554__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36554__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36554__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36554__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36554__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36520__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36586){
var map__36590 = p__36586;
var map__36590__$1 = (((((!((map__36590 == null))))?(((((map__36590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36590):map__36590);
var triage_data = map__36590__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36590__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36590__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36590__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36590__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36590__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36590__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36590__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36590__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__36616 = phase;
var G__36616__$1 = (((G__36616 instanceof cljs.core.Keyword))?G__36616.fqn:null);
switch (G__36616__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36617 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36618 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36619 = loc;
var G__36620 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36625_36869 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36626_36870 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36627_36871 = true;
var _STAR_print_fn_STAR__temp_val__36628_36872 = ((function (_STAR_print_newline_STAR__orig_val__36625_36869,_STAR_print_fn_STAR__orig_val__36626_36870,_STAR_print_newline_STAR__temp_val__36627_36871,sb__4661__auto__,G__36617,G__36618,G__36619,G__36616,G__36616__$1,loc,class_name,simple_class,cause_type,format,map__36590,map__36590__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__36625_36869,_STAR_print_fn_STAR__orig_val__36626_36870,_STAR_print_newline_STAR__temp_val__36627_36871,sb__4661__auto__,G__36617,G__36618,G__36619,G__36616,G__36616__$1,loc,class_name,simple_class,cause_type,format,map__36590,map__36590__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36627_36871;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36628_36872;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__36625_36869,_STAR_print_fn_STAR__orig_val__36626_36870,_STAR_print_newline_STAR__temp_val__36627_36871,_STAR_print_fn_STAR__temp_val__36628_36872,sb__4661__auto__,G__36617,G__36618,G__36619,G__36616,G__36616__$1,loc,class_name,simple_class,cause_type,format,map__36590,map__36590__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__36625_36869,_STAR_print_fn_STAR__orig_val__36626_36870,_STAR_print_newline_STAR__temp_val__36627_36871,_STAR_print_fn_STAR__temp_val__36628_36872,sb__4661__auto__,G__36617,G__36618,G__36619,G__36616,G__36616__$1,loc,class_name,simple_class,cause_type,format,map__36590,map__36590__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__36575_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36575_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__36625_36869,_STAR_print_fn_STAR__orig_val__36626_36870,_STAR_print_newline_STAR__temp_val__36627_36871,_STAR_print_fn_STAR__temp_val__36628_36872,sb__4661__auto__,G__36617,G__36618,G__36619,G__36616,G__36616__$1,loc,class_name,simple_class,cause_type,format,map__36590,map__36590__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__36625_36869,_STAR_print_fn_STAR__orig_val__36626_36870,_STAR_print_newline_STAR__temp_val__36627_36871,_STAR_print_fn_STAR__temp_val__36628_36872,sb__4661__auto__,G__36617,G__36618,G__36619,G__36616,G__36616__$1,loc,class_name,simple_class,cause_type,format,map__36590,map__36590__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36626_36870;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36625_36869;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36617,G__36618,G__36619,G__36620) : format.call(null,G__36617,G__36618,G__36619,G__36620));

break;
case "macroexpansion":
var G__36643 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36644 = cause_type;
var G__36645 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36646 = loc;
var G__36647 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36643,G__36644,G__36645,G__36646,G__36647) : format.call(null,G__36643,G__36644,G__36645,G__36646,G__36647));

break;
case "compile-syntax-check":
var G__36648 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36649 = cause_type;
var G__36650 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36651 = loc;
var G__36652 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36648,G__36649,G__36650,G__36651,G__36652) : format.call(null,G__36648,G__36649,G__36650,G__36651,G__36652));

break;
case "compilation":
var G__36653 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36654 = cause_type;
var G__36655 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36656 = loc;
var G__36657 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36653,G__36654,G__36655,G__36656,G__36657) : format.call(null,G__36653,G__36654,G__36655,G__36656,G__36657));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36658 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36659 = symbol;
var G__36660 = loc;
var G__36661 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36665_36884 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36666_36885 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36667_36886 = true;
var _STAR_print_fn_STAR__temp_val__36668_36887 = ((function (_STAR_print_newline_STAR__orig_val__36665_36884,_STAR_print_fn_STAR__orig_val__36666_36885,_STAR_print_newline_STAR__temp_val__36667_36886,sb__4661__auto__,G__36658,G__36659,G__36660,G__36616,G__36616__$1,loc,class_name,simple_class,cause_type,format,map__36590,map__36590__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__36665_36884,_STAR_print_fn_STAR__orig_val__36666_36885,_STAR_print_newline_STAR__temp_val__36667_36886,sb__4661__auto__,G__36658,G__36659,G__36660,G__36616,G__36616__$1,loc,class_name,simple_class,cause_type,format,map__36590,map__36590__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36667_36886;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36668_36887;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__36665_36884,_STAR_print_fn_STAR__orig_val__36666_36885,_STAR_print_newline_STAR__temp_val__36667_36886,_STAR_print_fn_STAR__temp_val__36668_36887,sb__4661__auto__,G__36658,G__36659,G__36660,G__36616,G__36616__$1,loc,class_name,simple_class,cause_type,format,map__36590,map__36590__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__36665_36884,_STAR_print_fn_STAR__orig_val__36666_36885,_STAR_print_newline_STAR__temp_val__36667_36886,_STAR_print_fn_STAR__temp_val__36668_36887,sb__4661__auto__,G__36658,G__36659,G__36660,G__36616,G__36616__$1,loc,class_name,simple_class,cause_type,format,map__36590,map__36590__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__36581_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36581_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__36665_36884,_STAR_print_fn_STAR__orig_val__36666_36885,_STAR_print_newline_STAR__temp_val__36667_36886,_STAR_print_fn_STAR__temp_val__36668_36887,sb__4661__auto__,G__36658,G__36659,G__36660,G__36616,G__36616__$1,loc,class_name,simple_class,cause_type,format,map__36590,map__36590__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__36665_36884,_STAR_print_fn_STAR__orig_val__36666_36885,_STAR_print_newline_STAR__temp_val__36667_36886,_STAR_print_fn_STAR__temp_val__36668_36887,sb__4661__auto__,G__36658,G__36659,G__36660,G__36616,G__36616__$1,loc,class_name,simple_class,cause_type,format,map__36590,map__36590__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36666_36885;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36665_36884;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36658,G__36659,G__36660,G__36661) : format.call(null,G__36658,G__36659,G__36660,G__36661));
} else {
var G__36671 = "Execution error%s at %s(%s).\n%s\n";
var G__36672 = cause_type;
var G__36673 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36674 = loc;
var G__36675 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36671,G__36672,G__36673,G__36674,G__36675) : format.call(null,G__36671,G__36672,G__36673,G__36674,G__36675));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36616__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
