goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40196){
var map__40197 = p__40196;
var map__40197__$1 = cljs.core.__destructure_map(map__40197);
var m = map__40197__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40197__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40197__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
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
var seq__40206_40635 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40207_40636 = null;
var count__40208_40637 = (0);
var i__40209_40638 = (0);
while(true){
if((i__40209_40638 < count__40208_40637)){
var f_40639 = chunk__40207_40636.cljs$core$IIndexed$_nth$arity$2(null,i__40209_40638);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40639], 0));


var G__40640 = seq__40206_40635;
var G__40641 = chunk__40207_40636;
var G__40642 = count__40208_40637;
var G__40643 = (i__40209_40638 + (1));
seq__40206_40635 = G__40640;
chunk__40207_40636 = G__40641;
count__40208_40637 = G__40642;
i__40209_40638 = G__40643;
continue;
} else {
var temp__5753__auto___40645 = cljs.core.seq(seq__40206_40635);
if(temp__5753__auto___40645){
var seq__40206_40646__$1 = temp__5753__auto___40645;
if(cljs.core.chunked_seq_QMARK_(seq__40206_40646__$1)){
var c__4638__auto___40647 = cljs.core.chunk_first(seq__40206_40646__$1);
var G__40648 = cljs.core.chunk_rest(seq__40206_40646__$1);
var G__40649 = c__4638__auto___40647;
var G__40650 = cljs.core.count(c__4638__auto___40647);
var G__40651 = (0);
seq__40206_40635 = G__40648;
chunk__40207_40636 = G__40649;
count__40208_40637 = G__40650;
i__40209_40638 = G__40651;
continue;
} else {
var f_40652 = cljs.core.first(seq__40206_40646__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40652], 0));


var G__40653 = cljs.core.next(seq__40206_40646__$1);
var G__40654 = null;
var G__40655 = (0);
var G__40656 = (0);
seq__40206_40635 = G__40653;
chunk__40207_40636 = G__40654;
count__40208_40637 = G__40655;
i__40209_40638 = G__40656;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40657 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40657], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40657)))?cljs.core.second(arglists_40657):arglists_40657)], 0));
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
var seq__40219_40659 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40220_40660 = null;
var count__40221_40661 = (0);
var i__40222_40662 = (0);
while(true){
if((i__40222_40662 < count__40221_40661)){
var vec__40257_40663 = chunk__40220_40660.cljs$core$IIndexed$_nth$arity$2(null,i__40222_40662);
var name_40664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40257_40663,(0),null);
var map__40260_40665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40257_40663,(1),null);
var map__40260_40666__$1 = cljs.core.__destructure_map(map__40260_40665);
var doc_40667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40260_40666__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40260_40666__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40664], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40668], 0));

if(cljs.core.truth_(doc_40667)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40667], 0));
} else {
}


var G__40669 = seq__40219_40659;
var G__40670 = chunk__40220_40660;
var G__40671 = count__40221_40661;
var G__40672 = (i__40222_40662 + (1));
seq__40219_40659 = G__40669;
chunk__40220_40660 = G__40670;
count__40221_40661 = G__40671;
i__40222_40662 = G__40672;
continue;
} else {
var temp__5753__auto___40674 = cljs.core.seq(seq__40219_40659);
if(temp__5753__auto___40674){
var seq__40219_40675__$1 = temp__5753__auto___40674;
if(cljs.core.chunked_seq_QMARK_(seq__40219_40675__$1)){
var c__4638__auto___40676 = cljs.core.chunk_first(seq__40219_40675__$1);
var G__40677 = cljs.core.chunk_rest(seq__40219_40675__$1);
var G__40678 = c__4638__auto___40676;
var G__40679 = cljs.core.count(c__4638__auto___40676);
var G__40680 = (0);
seq__40219_40659 = G__40677;
chunk__40220_40660 = G__40678;
count__40221_40661 = G__40679;
i__40222_40662 = G__40680;
continue;
} else {
var vec__40276_40681 = cljs.core.first(seq__40219_40675__$1);
var name_40682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40276_40681,(0),null);
var map__40279_40683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40276_40681,(1),null);
var map__40279_40684__$1 = cljs.core.__destructure_map(map__40279_40683);
var doc_40685 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40279_40684__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40686 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40279_40684__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40682], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40686], 0));

if(cljs.core.truth_(doc_40685)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40685], 0));
} else {
}


var G__40687 = cljs.core.next(seq__40219_40675__$1);
var G__40688 = null;
var G__40689 = (0);
var G__40690 = (0);
seq__40219_40659 = G__40687;
chunk__40220_40660 = G__40688;
count__40221_40661 = G__40689;
i__40222_40662 = G__40690;
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
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__40314 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40315 = null;
var count__40316 = (0);
var i__40317 = (0);
while(true){
if((i__40317 < count__40316)){
var role = chunk__40315.cljs$core$IIndexed$_nth$arity$2(null,i__40317);
var temp__5753__auto___40691__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___40691__$1)){
var spec_40692 = temp__5753__auto___40691__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40692)], 0));
} else {
}


var G__40693 = seq__40314;
var G__40694 = chunk__40315;
var G__40695 = count__40316;
var G__40696 = (i__40317 + (1));
seq__40314 = G__40693;
chunk__40315 = G__40694;
count__40316 = G__40695;
i__40317 = G__40696;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__40314);
if(temp__5753__auto____$1){
var seq__40314__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40314__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__40314__$1);
var G__40700 = cljs.core.chunk_rest(seq__40314__$1);
var G__40701 = c__4638__auto__;
var G__40702 = cljs.core.count(c__4638__auto__);
var G__40703 = (0);
seq__40314 = G__40700;
chunk__40315 = G__40701;
count__40316 = G__40702;
i__40317 = G__40703;
continue;
} else {
var role = cljs.core.first(seq__40314__$1);
var temp__5753__auto___40704__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___40704__$2)){
var spec_40706 = temp__5753__auto___40704__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40706)], 0));
} else {
}


var G__40707 = cljs.core.next(seq__40314__$1);
var G__40708 = null;
var G__40709 = (0);
var G__40710 = (0);
seq__40314 = G__40707;
chunk__40315 = G__40708;
count__40316 = G__40709;
i__40317 = G__40710;
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
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
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
var G__40717 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40718 = cljs.core.ex_cause(t);
via = G__40717;
t = G__40718;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
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
var map__40395 = datafied_throwable;
var map__40395__$1 = cljs.core.__destructure_map(map__40395);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40395__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40395__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40395__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40396 = cljs.core.last(via);
var map__40396__$1 = cljs.core.__destructure_map(map__40396);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40396__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40396__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40396__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40397 = data;
var map__40397__$1 = cljs.core.__destructure_map(map__40397);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40397__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40397__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40397__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40398 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40398__$1 = cljs.core.__destructure_map(map__40398);
var top_data = map__40398__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40398__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40401 = phase;
var G__40401__$1 = (((G__40401 instanceof cljs.core.Keyword))?G__40401.fqn:null);
switch (G__40401__$1) {
case "read-source":
var map__40402 = data;
var map__40402__$1 = cljs.core.__destructure_map(map__40402);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40402__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40402__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40403 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40403__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40403,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40403);
var G__40403__$2 = (cljs.core.truth_((function (){var fexpr__40409 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40409.cljs$core$IFn$_invoke$arity$1 ? fexpr__40409.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40409.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40403__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40403__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40403__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40403__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40416 = top_data;
var G__40416__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40416,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40416);
var G__40416__$2 = (cljs.core.truth_((function (){var fexpr__40426 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40426.cljs$core$IFn$_invoke$arity$1 ? fexpr__40426.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40426.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40416__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40416__$1);
var G__40416__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40416__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40416__$2);
var G__40416__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40416__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40416__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40416__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40416__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40454 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40454,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40454,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40454,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40454,(3),null);
var G__40463 = top_data;
var G__40463__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40463,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40463);
var G__40463__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40463__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40463__$1);
var G__40463__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40463__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40463__$2);
var G__40463__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40463__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40463__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40463__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40463__$4;
}

break;
case "execution":
var vec__40497 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40497,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40497,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40497,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40497,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40393_SHARP_){
var or__4212__auto__ = (p1__40393_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__40504 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40504.cljs$core$IFn$_invoke$arity$1 ? fexpr__40504.cljs$core$IFn$_invoke$arity$1(p1__40393_SHARP_) : fexpr__40504.call(null,p1__40393_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__40514 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40514__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40514,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40514);
var G__40514__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40514__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40514__$1);
var G__40514__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40514__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40514__$2);
var G__40514__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40514__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40514__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40514__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40514__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40401__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40525){
var map__40526 = p__40525;
var map__40526__$1 = cljs.core.__destructure_map(map__40526);
var triage_data = map__40526__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40526__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40526__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40526__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40526__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40526__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40526__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40526__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40526__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40552 = phase;
var G__40552__$1 = (((G__40552 instanceof cljs.core.Keyword))?G__40552.fqn:null);
switch (G__40552__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40557 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40558 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40559 = loc;
var G__40560 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40571_40762 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40572_40763 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40573_40764 = true;
var _STAR_print_fn_STAR__temp_val__40574_40765 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40573_40764);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40574_40765);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40522_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40522_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40572_40763);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40571_40762);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40557,G__40558,G__40559,G__40560) : format.call(null,G__40557,G__40558,G__40559,G__40560));

break;
case "macroexpansion":
var G__40590 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40591 = cause_type;
var G__40592 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40593 = loc;
var G__40594 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40590,G__40591,G__40592,G__40593,G__40594) : format.call(null,G__40590,G__40591,G__40592,G__40593,G__40594));

break;
case "compile-syntax-check":
var G__40595 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40596 = cause_type;
var G__40597 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40598 = loc;
var G__40599 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40595,G__40596,G__40597,G__40598,G__40599) : format.call(null,G__40595,G__40596,G__40597,G__40598,G__40599));

break;
case "compilation":
var G__40600 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40601 = cause_type;
var G__40602 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40603 = loc;
var G__40604 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40600,G__40601,G__40602,G__40603,G__40604) : format.call(null,G__40600,G__40601,G__40602,G__40603,G__40604));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40605 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40606 = symbol;
var G__40607 = loc;
var G__40608 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40609_40790 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40610_40791 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40611_40792 = true;
var _STAR_print_fn_STAR__temp_val__40612_40793 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40611_40792);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40612_40793);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40523_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40523_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40610_40791);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40609_40790);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40605,G__40606,G__40607,G__40608) : format.call(null,G__40605,G__40606,G__40607,G__40608));
} else {
var G__40627 = "Execution error%s at %s(%s).\n%s\n";
var G__40628 = cause_type;
var G__40629 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40630 = loc;
var G__40631 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40627,G__40628,G__40629,G__40630,G__40631) : format.call(null,G__40627,G__40628,G__40629,G__40630,G__40631));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40552__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
