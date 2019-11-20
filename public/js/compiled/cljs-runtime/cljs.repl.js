goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30385){
var map__30387 = p__30385;
var map__30387__$1 = (((((!((map__30387 == null))))?(((((map__30387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30387):map__30387);
var m = map__30387__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30387__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30387__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__30392_30637 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30393_30638 = null;
var count__30394_30639 = (0);
var i__30395_30640 = (0);
while(true){
if((i__30395_30640 < count__30394_30639)){
var f_30641 = chunk__30393_30638.cljs$core$IIndexed$_nth$arity$2(null,i__30395_30640);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_30641], 0));


var G__30642 = seq__30392_30637;
var G__30643 = chunk__30393_30638;
var G__30644 = count__30394_30639;
var G__30645 = (i__30395_30640 + (1));
seq__30392_30637 = G__30642;
chunk__30393_30638 = G__30643;
count__30394_30639 = G__30644;
i__30395_30640 = G__30645;
continue;
} else {
var temp__5735__auto___30646 = cljs.core.seq(seq__30392_30637);
if(temp__5735__auto___30646){
var seq__30392_30647__$1 = temp__5735__auto___30646;
if(cljs.core.chunked_seq_QMARK_(seq__30392_30647__$1)){
var c__4550__auto___30648 = cljs.core.chunk_first(seq__30392_30647__$1);
var G__30649 = cljs.core.chunk_rest(seq__30392_30647__$1);
var G__30650 = c__4550__auto___30648;
var G__30651 = cljs.core.count(c__4550__auto___30648);
var G__30652 = (0);
seq__30392_30637 = G__30649;
chunk__30393_30638 = G__30650;
count__30394_30639 = G__30651;
i__30395_30640 = G__30652;
continue;
} else {
var f_30653 = cljs.core.first(seq__30392_30647__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_30653], 0));


var G__30655 = cljs.core.next(seq__30392_30647__$1);
var G__30656 = null;
var G__30657 = (0);
var G__30658 = (0);
seq__30392_30637 = G__30655;
chunk__30393_30638 = G__30656;
count__30394_30639 = G__30657;
i__30395_30640 = G__30658;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30659 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_30659], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_30659)))?cljs.core.second(arglists_30659):arglists_30659)], 0));
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
var seq__30410_30664 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30411_30665 = null;
var count__30412_30666 = (0);
var i__30413_30667 = (0);
while(true){
if((i__30413_30667 < count__30412_30666)){
var vec__30450_30668 = chunk__30411_30665.cljs$core$IIndexed$_nth$arity$2(null,i__30413_30667);
var name_30669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30450_30668,(0),null);
var map__30453_30670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30450_30668,(1),null);
var map__30453_30671__$1 = (((((!((map__30453_30670 == null))))?(((((map__30453_30670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30453_30670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30453_30670):map__30453_30670);
var doc_30672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30453_30671__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30453_30671__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_30669], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_30673], 0));

if(cljs.core.truth_(doc_30672)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_30672], 0));
} else {
}


var G__30680 = seq__30410_30664;
var G__30681 = chunk__30411_30665;
var G__30682 = count__30412_30666;
var G__30683 = (i__30413_30667 + (1));
seq__30410_30664 = G__30680;
chunk__30411_30665 = G__30681;
count__30412_30666 = G__30682;
i__30413_30667 = G__30683;
continue;
} else {
var temp__5735__auto___30684 = cljs.core.seq(seq__30410_30664);
if(temp__5735__auto___30684){
var seq__30410_30685__$1 = temp__5735__auto___30684;
if(cljs.core.chunked_seq_QMARK_(seq__30410_30685__$1)){
var c__4550__auto___30686 = cljs.core.chunk_first(seq__30410_30685__$1);
var G__30687 = cljs.core.chunk_rest(seq__30410_30685__$1);
var G__30688 = c__4550__auto___30686;
var G__30689 = cljs.core.count(c__4550__auto___30686);
var G__30690 = (0);
seq__30410_30664 = G__30687;
chunk__30411_30665 = G__30688;
count__30412_30666 = G__30689;
i__30413_30667 = G__30690;
continue;
} else {
var vec__30464_30692 = cljs.core.first(seq__30410_30685__$1);
var name_30693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30464_30692,(0),null);
var map__30467_30694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30464_30692,(1),null);
var map__30467_30695__$1 = (((((!((map__30467_30694 == null))))?(((((map__30467_30694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30467_30694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30467_30694):map__30467_30694);
var doc_30696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30467_30695__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30467_30695__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_30693], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_30697], 0));

if(cljs.core.truth_(doc_30696)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_30696], 0));
} else {
}


var G__30705 = cljs.core.next(seq__30410_30685__$1);
var G__30706 = null;
var G__30707 = (0);
var G__30708 = (0);
seq__30410_30664 = G__30705;
chunk__30411_30665 = G__30706;
count__30412_30666 = G__30707;
i__30413_30667 = G__30708;
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

var seq__30479 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30480 = null;
var count__30481 = (0);
var i__30482 = (0);
while(true){
if((i__30482 < count__30481)){
var role = chunk__30480.cljs$core$IIndexed$_nth$arity$2(null,i__30482);
var temp__5735__auto___30717__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___30717__$1)){
var spec_30718 = temp__5735__auto___30717__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_30718)], 0));
} else {
}


var G__30719 = seq__30479;
var G__30720 = chunk__30480;
var G__30721 = count__30481;
var G__30722 = (i__30482 + (1));
seq__30479 = G__30719;
chunk__30480 = G__30720;
count__30481 = G__30721;
i__30482 = G__30722;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__30479);
if(temp__5735__auto____$1){
var seq__30479__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__30479__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__30479__$1);
var G__30723 = cljs.core.chunk_rest(seq__30479__$1);
var G__30724 = c__4550__auto__;
var G__30725 = cljs.core.count(c__4550__auto__);
var G__30726 = (0);
seq__30479 = G__30723;
chunk__30480 = G__30724;
count__30481 = G__30725;
i__30482 = G__30726;
continue;
} else {
var role = cljs.core.first(seq__30479__$1);
var temp__5735__auto___30727__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___30727__$2)){
var spec_30728 = temp__5735__auto___30727__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_30728)], 0));
} else {
}


var G__30732 = cljs.core.next(seq__30479__$1);
var G__30733 = null;
var G__30734 = (0);
var G__30735 = (0);
seq__30479 = G__30732;
chunk__30480 = G__30733;
count__30481 = G__30734;
i__30482 = G__30735;
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
var G__30742 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__30743 = cljs.core.ex_cause(t);
via = G__30742;
t = G__30743;
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
var map__30522 = datafied_throwable;
var map__30522__$1 = (((((!((map__30522 == null))))?(((((map__30522.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30522.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30522):map__30522);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30522__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30522__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__30522__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__30523 = cljs.core.last(via);
var map__30523__$1 = (((((!((map__30523 == null))))?(((((map__30523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30523):map__30523);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30523__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30523__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30523__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__30524 = data;
var map__30524__$1 = (((((!((map__30524 == null))))?(((((map__30524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30524):map__30524);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30524__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30524__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30524__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__30525 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__30525__$1 = (((((!((map__30525 == null))))?(((((map__30525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30525):map__30525);
var top_data = map__30525__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30525__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__30538 = phase;
var G__30538__$1 = (((G__30538 instanceof cljs.core.Keyword))?G__30538.fqn:null);
switch (G__30538__$1) {
case "read-source":
var map__30542 = data;
var map__30542__$1 = (((((!((map__30542 == null))))?(((((map__30542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30542):map__30542);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30542__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30542__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__30546 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__30546__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30546,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30546);
var G__30546__$2 = (cljs.core.truth_((function (){var fexpr__30547 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__30547.cljs$core$IFn$_invoke$arity$1 ? fexpr__30547.cljs$core$IFn$_invoke$arity$1(source) : fexpr__30547.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__30546__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30546__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30546__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30546__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__30548 = top_data;
var G__30548__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30548,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__30548);
var G__30548__$2 = (cljs.core.truth_((function (){var fexpr__30552 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__30552.cljs$core$IFn$_invoke$arity$1 ? fexpr__30552.cljs$core$IFn$_invoke$arity$1(source) : fexpr__30552.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__30548__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__30548__$1);
var G__30548__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30548__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30548__$2);
var G__30548__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30548__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30548__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30548__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30548__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__30554 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30554,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30554,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30554,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30554,(3),null);
var G__30558 = top_data;
var G__30558__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30558,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__30558);
var G__30558__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30558__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__30558__$1);
var G__30558__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30558__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__30558__$2);
var G__30558__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30558__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__30558__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30558__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__30558__$4;
}

break;
case "execution":
var vec__30563 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30563,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30563,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30563,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30563,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__30563,source__$1,method,file,line,G__30538,G__30538__$1,map__30522,map__30522__$1,via,trace,phase,map__30523,map__30523__$1,type,message,data,map__30524,map__30524__$1,problems,fn,caller,map__30525,map__30525__$1,top_data,source){
return (function (p1__30516_SHARP_){
var or__4131__auto__ = (p1__30516_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__30569 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__30569.cljs$core$IFn$_invoke$arity$1 ? fexpr__30569.cljs$core$IFn$_invoke$arity$1(p1__30516_SHARP_) : fexpr__30569.call(null,p1__30516_SHARP_));
}
});})(vec__30563,source__$1,method,file,line,G__30538,G__30538__$1,map__30522,map__30522__$1,via,trace,phase,map__30523,map__30523__$1,type,message,data,map__30524,map__30524__$1,problems,fn,caller,map__30525,map__30525__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__30570 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__30570__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30570,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__30570);
var G__30570__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30570__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__30570__$1);
var G__30570__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30570__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__30570__$2);
var G__30570__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30570__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__30570__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__30570__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__30570__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30538__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__30574){
var map__30575 = p__30574;
var map__30575__$1 = (((((!((map__30575 == null))))?(((((map__30575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30575):map__30575);
var triage_data = map__30575__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30575__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30575__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30575__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30575__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30575__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30575__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30575__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30575__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__30590 = phase;
var G__30590__$1 = (((G__30590 instanceof cljs.core.Keyword))?G__30590.fqn:null);
switch (G__30590__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__30591 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__30592 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__30593 = loc;
var G__30594 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30595_30843 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30596_30844 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30597_30845 = true;
var _STAR_print_fn_STAR__temp_val__30598_30846 = ((function (_STAR_print_newline_STAR__orig_val__30595_30843,_STAR_print_fn_STAR__orig_val__30596_30844,_STAR_print_newline_STAR__temp_val__30597_30845,sb__4661__auto__,G__30591,G__30592,G__30593,G__30590,G__30590__$1,loc,class_name,simple_class,cause_type,format,map__30575,map__30575__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30595_30843,_STAR_print_fn_STAR__orig_val__30596_30844,_STAR_print_newline_STAR__temp_val__30597_30845,sb__4661__auto__,G__30591,G__30592,G__30593,G__30590,G__30590__$1,loc,class_name,simple_class,cause_type,format,map__30575,map__30575__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30597_30845;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30598_30846;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30595_30843,_STAR_print_fn_STAR__orig_val__30596_30844,_STAR_print_newline_STAR__temp_val__30597_30845,_STAR_print_fn_STAR__temp_val__30598_30846,sb__4661__auto__,G__30591,G__30592,G__30593,G__30590,G__30590__$1,loc,class_name,simple_class,cause_type,format,map__30575,map__30575__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__30595_30843,_STAR_print_fn_STAR__orig_val__30596_30844,_STAR_print_newline_STAR__temp_val__30597_30845,_STAR_print_fn_STAR__temp_val__30598_30846,sb__4661__auto__,G__30591,G__30592,G__30593,G__30590,G__30590__$1,loc,class_name,simple_class,cause_type,format,map__30575,map__30575__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30572_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__30572_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30595_30843,_STAR_print_fn_STAR__orig_val__30596_30844,_STAR_print_newline_STAR__temp_val__30597_30845,_STAR_print_fn_STAR__temp_val__30598_30846,sb__4661__auto__,G__30591,G__30592,G__30593,G__30590,G__30590__$1,loc,class_name,simple_class,cause_type,format,map__30575,map__30575__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30595_30843,_STAR_print_fn_STAR__orig_val__30596_30844,_STAR_print_newline_STAR__temp_val__30597_30845,_STAR_print_fn_STAR__temp_val__30598_30846,sb__4661__auto__,G__30591,G__30592,G__30593,G__30590,G__30590__$1,loc,class_name,simple_class,cause_type,format,map__30575,map__30575__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30596_30844;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30595_30843;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__30591,G__30592,G__30593,G__30594) : format.call(null,G__30591,G__30592,G__30593,G__30594));

break;
case "macroexpansion":
var G__30601 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__30602 = cause_type;
var G__30603 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__30604 = loc;
var G__30605 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__30601,G__30602,G__30603,G__30604,G__30605) : format.call(null,G__30601,G__30602,G__30603,G__30604,G__30605));

break;
case "compile-syntax-check":
var G__30606 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__30607 = cause_type;
var G__30608 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__30609 = loc;
var G__30610 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__30606,G__30607,G__30608,G__30609,G__30610) : format.call(null,G__30606,G__30607,G__30608,G__30609,G__30610));

break;
case "compilation":
var G__30611 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__30612 = cause_type;
var G__30613 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__30614 = loc;
var G__30615 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__30611,G__30612,G__30613,G__30614,G__30615) : format.call(null,G__30611,G__30612,G__30613,G__30614,G__30615));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__30617 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__30618 = symbol;
var G__30619 = loc;
var G__30620 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30622_30873 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30623_30874 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30625_30875 = true;
var _STAR_print_fn_STAR__temp_val__30626_30876 = ((function (_STAR_print_newline_STAR__orig_val__30622_30873,_STAR_print_fn_STAR__orig_val__30623_30874,_STAR_print_newline_STAR__temp_val__30625_30875,sb__4661__auto__,G__30617,G__30618,G__30619,G__30590,G__30590__$1,loc,class_name,simple_class,cause_type,format,map__30575,map__30575__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__30622_30873,_STAR_print_fn_STAR__orig_val__30623_30874,_STAR_print_newline_STAR__temp_val__30625_30875,sb__4661__auto__,G__30617,G__30618,G__30619,G__30590,G__30590__$1,loc,class_name,simple_class,cause_type,format,map__30575,map__30575__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30625_30875;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30626_30876;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__30622_30873,_STAR_print_fn_STAR__orig_val__30623_30874,_STAR_print_newline_STAR__temp_val__30625_30875,_STAR_print_fn_STAR__temp_val__30626_30876,sb__4661__auto__,G__30617,G__30618,G__30619,G__30590,G__30590__$1,loc,class_name,simple_class,cause_type,format,map__30575,map__30575__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__30622_30873,_STAR_print_fn_STAR__orig_val__30623_30874,_STAR_print_newline_STAR__temp_val__30625_30875,_STAR_print_fn_STAR__temp_val__30626_30876,sb__4661__auto__,G__30617,G__30618,G__30619,G__30590,G__30590__$1,loc,class_name,simple_class,cause_type,format,map__30575,map__30575__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__30573_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__30573_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__30622_30873,_STAR_print_fn_STAR__orig_val__30623_30874,_STAR_print_newline_STAR__temp_val__30625_30875,_STAR_print_fn_STAR__temp_val__30626_30876,sb__4661__auto__,G__30617,G__30618,G__30619,G__30590,G__30590__$1,loc,class_name,simple_class,cause_type,format,map__30575,map__30575__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__30622_30873,_STAR_print_fn_STAR__orig_val__30623_30874,_STAR_print_newline_STAR__temp_val__30625_30875,_STAR_print_fn_STAR__temp_val__30626_30876,sb__4661__auto__,G__30617,G__30618,G__30619,G__30590,G__30590__$1,loc,class_name,simple_class,cause_type,format,map__30575,map__30575__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30623_30874;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30622_30873;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__30617,G__30618,G__30619,G__30620) : format.call(null,G__30617,G__30618,G__30619,G__30620));
} else {
var G__30628 = "Execution error%s at %s(%s).\n%s\n";
var G__30629 = cause_type;
var G__30630 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__30631 = loc;
var G__30632 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__30628,G__30629,G__30630,G__30631,G__30632) : format.call(null,G__30628,G__30629,G__30630,G__30631,G__30632));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30590__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
