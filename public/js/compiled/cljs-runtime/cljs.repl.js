goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__40265){
var map__40266 = p__40265;
var map__40266__$1 = (((((!((map__40266 == null))))?(((((map__40266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40266):map__40266);
var m = map__40266__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40266__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40266__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var seq__40278_40743 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40279_40744 = null;
var count__40280_40745 = (0);
var i__40281_40746 = (0);
while(true){
if((i__40281_40746 < count__40280_40745)){
var f_40748 = chunk__40279_40744.cljs$core$IIndexed$_nth$arity$2(null,i__40281_40746);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40748], 0));


var G__40750 = seq__40278_40743;
var G__40751 = chunk__40279_40744;
var G__40752 = count__40280_40745;
var G__40753 = (i__40281_40746 + (1));
seq__40278_40743 = G__40750;
chunk__40279_40744 = G__40751;
count__40280_40745 = G__40752;
i__40281_40746 = G__40753;
continue;
} else {
var temp__5735__auto___40759 = cljs.core.seq(seq__40278_40743);
if(temp__5735__auto___40759){
var seq__40278_40761__$1 = temp__5735__auto___40759;
if(cljs.core.chunked_seq_QMARK_(seq__40278_40761__$1)){
var c__4556__auto___40763 = cljs.core.chunk_first(seq__40278_40761__$1);
var G__40764 = cljs.core.chunk_rest(seq__40278_40761__$1);
var G__40765 = c__4556__auto___40763;
var G__40766 = cljs.core.count(c__4556__auto___40763);
var G__40767 = (0);
seq__40278_40743 = G__40764;
chunk__40279_40744 = G__40765;
count__40280_40745 = G__40766;
i__40281_40746 = G__40767;
continue;
} else {
var f_40772 = cljs.core.first(seq__40278_40761__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_40772], 0));


var G__40775 = cljs.core.next(seq__40278_40761__$1);
var G__40776 = null;
var G__40777 = (0);
var G__40778 = (0);
seq__40278_40743 = G__40775;
chunk__40279_40744 = G__40776;
count__40280_40745 = G__40777;
i__40281_40746 = G__40778;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40786 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_40786], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_40786)))?cljs.core.second(arglists_40786):arglists_40786)], 0));
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
var seq__40293_40808 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40294_40809 = null;
var count__40295_40810 = (0);
var i__40296_40811 = (0);
while(true){
if((i__40296_40811 < count__40295_40810)){
var vec__40319_40815 = chunk__40294_40809.cljs$core$IIndexed$_nth$arity$2(null,i__40296_40811);
var name_40816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40319_40815,(0),null);
var map__40322_40817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40319_40815,(1),null);
var map__40322_40818__$1 = (((((!((map__40322_40817 == null))))?(((((map__40322_40817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40322_40817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40322_40817):map__40322_40817);
var doc_40819 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40322_40818__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40322_40818__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40816], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40820], 0));

if(cljs.core.truth_(doc_40819)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40819], 0));
} else {
}


var G__40835 = seq__40293_40808;
var G__40836 = chunk__40294_40809;
var G__40837 = count__40295_40810;
var G__40838 = (i__40296_40811 + (1));
seq__40293_40808 = G__40835;
chunk__40294_40809 = G__40836;
count__40295_40810 = G__40837;
i__40296_40811 = G__40838;
continue;
} else {
var temp__5735__auto___40842 = cljs.core.seq(seq__40293_40808);
if(temp__5735__auto___40842){
var seq__40293_40843__$1 = temp__5735__auto___40842;
if(cljs.core.chunked_seq_QMARK_(seq__40293_40843__$1)){
var c__4556__auto___40844 = cljs.core.chunk_first(seq__40293_40843__$1);
var G__40845 = cljs.core.chunk_rest(seq__40293_40843__$1);
var G__40846 = c__4556__auto___40844;
var G__40847 = cljs.core.count(c__4556__auto___40844);
var G__40848 = (0);
seq__40293_40808 = G__40845;
chunk__40294_40809 = G__40846;
count__40295_40810 = G__40847;
i__40296_40811 = G__40848;
continue;
} else {
var vec__40330_40849 = cljs.core.first(seq__40293_40843__$1);
var name_40850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40330_40849,(0),null);
var map__40333_40851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40330_40849,(1),null);
var map__40333_40852__$1 = (((((!((map__40333_40851 == null))))?(((((map__40333_40851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40333_40851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40333_40851):map__40333_40851);
var doc_40853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40333_40852__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_40854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40333_40852__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_40850], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_40854], 0));

if(cljs.core.truth_(doc_40853)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_40853], 0));
} else {
}


var G__40856 = cljs.core.next(seq__40293_40843__$1);
var G__40857 = null;
var G__40858 = (0);
var G__40859 = (0);
seq__40293_40808 = G__40856;
chunk__40294_40809 = G__40857;
count__40295_40810 = G__40858;
i__40296_40811 = G__40859;
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

var seq__40342 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__40343 = null;
var count__40344 = (0);
var i__40345 = (0);
while(true){
if((i__40345 < count__40344)){
var role = chunk__40343.cljs$core$IIndexed$_nth$arity$2(null,i__40345);
var temp__5735__auto___40863__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40863__$1)){
var spec_40864 = temp__5735__auto___40863__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40864)], 0));
} else {
}


var G__40865 = seq__40342;
var G__40866 = chunk__40343;
var G__40867 = count__40344;
var G__40868 = (i__40345 + (1));
seq__40342 = G__40865;
chunk__40343 = G__40866;
count__40344 = G__40867;
i__40345 = G__40868;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__40342);
if(temp__5735__auto____$1){
var seq__40342__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__40342__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__40342__$1);
var G__40873 = cljs.core.chunk_rest(seq__40342__$1);
var G__40874 = c__4556__auto__;
var G__40875 = cljs.core.count(c__4556__auto__);
var G__40876 = (0);
seq__40342 = G__40873;
chunk__40343 = G__40874;
count__40344 = G__40875;
i__40345 = G__40876;
continue;
} else {
var role = cljs.core.first(seq__40342__$1);
var temp__5735__auto___40882__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___40882__$2)){
var spec_40886 = temp__5735__auto___40882__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_40886)], 0));
} else {
}


var G__40891 = cljs.core.next(seq__40342__$1);
var G__40892 = null;
var G__40893 = (0);
var G__40894 = (0);
seq__40342 = G__40891;
chunk__40343 = G__40892;
count__40344 = G__40893;
i__40345 = G__40894;
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
var G__40896 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__40897 = cljs.core.ex_cause(t);
via = G__40896;
t = G__40897;
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
var map__40438 = datafied_throwable;
var map__40438__$1 = (((((!((map__40438 == null))))?(((((map__40438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40438):map__40438);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40438__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40438__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__40438__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__40439 = cljs.core.last(via);
var map__40439__$1 = (((((!((map__40439 == null))))?(((((map__40439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40439):map__40439);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40439__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40439__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40439__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__40440 = data;
var map__40440__$1 = (((((!((map__40440 == null))))?(((((map__40440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40440):map__40440);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40440__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40440__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40440__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__40441 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__40441__$1 = (((((!((map__40441 == null))))?(((((map__40441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40441):map__40441);
var top_data = map__40441__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40441__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__40492 = phase;
var G__40492__$1 = (((G__40492 instanceof cljs.core.Keyword))?G__40492.fqn:null);
switch (G__40492__$1) {
case "read-source":
var map__40496 = data;
var map__40496__$1 = (((((!((map__40496 == null))))?(((((map__40496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40496):map__40496);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40496__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40496__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__40508 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__40508__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40508,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40508);
var G__40508__$2 = (cljs.core.truth_((function (){var fexpr__40511 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40511.cljs$core$IFn$_invoke$arity$1 ? fexpr__40511.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40511.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40508__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40508__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40508__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40508__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__40512 = top_data;
var G__40512__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40512,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__40512);
var G__40512__$2 = (cljs.core.truth_((function (){var fexpr__40513 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40513.cljs$core$IFn$_invoke$arity$1 ? fexpr__40513.cljs$core$IFn$_invoke$arity$1(source) : fexpr__40513.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__40512__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__40512__$1);
var G__40512__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40512__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40512__$2);
var G__40512__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40512__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40512__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40512__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40512__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__40524 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40524,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40524,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40524,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40524,(3),null);
var G__40535 = top_data;
var G__40535__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40535,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__40535);
var G__40535__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40535__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__40535__$1);
var G__40535__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40535__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__40535__$2);
var G__40535__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40535__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__40535__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40535__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__40535__$4;
}

break;
case "execution":
var vec__40552 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40552,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40552,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40552,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40552,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__40401_SHARP_){
var or__4126__auto__ = (p1__40401_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__40557 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__40557.cljs$core$IFn$_invoke$arity$1 ? fexpr__40557.cljs$core$IFn$_invoke$arity$1(p1__40401_SHARP_) : fexpr__40557.call(null,p1__40401_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__40559 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__40559__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40559,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__40559);
var G__40559__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40559__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__40559__$1);
var G__40559__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40559__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__40559__$2);
var G__40559__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40559__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__40559__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40559__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__40559__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40492__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__40583){
var map__40585 = p__40583;
var map__40585__$1 = (((((!((map__40585 == null))))?(((((map__40585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40585):map__40585);
var triage_data = map__40585__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40585__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40585__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40585__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40585__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40585__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40585__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40585__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40585__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__40637 = phase;
var G__40637__$1 = (((G__40637 instanceof cljs.core.Keyword))?G__40637.fqn:null);
switch (G__40637__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__40646 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__40647 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40648 = loc;
var G__40649 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40654_40920 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40655_40921 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40656_40922 = true;
var _STAR_print_fn_STAR__temp_val__40657_40923 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40656_40922);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40657_40923);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40569_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40569_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40655_40921);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40654_40920);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40646,G__40647,G__40648,G__40649) : format.call(null,G__40646,G__40647,G__40648,G__40649));

break;
case "macroexpansion":
var G__40679 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__40680 = cause_type;
var G__40681 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40682 = loc;
var G__40683 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40679,G__40680,G__40681,G__40682,G__40683) : format.call(null,G__40679,G__40680,G__40681,G__40682,G__40683));

break;
case "compile-syntax-check":
var G__40684 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__40685 = cause_type;
var G__40686 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40687 = loc;
var G__40688 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40684,G__40685,G__40686,G__40687,G__40688) : format.call(null,G__40684,G__40685,G__40686,G__40687,G__40688));

break;
case "compilation":
var G__40691 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__40692 = cause_type;
var G__40693 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40694 = loc;
var G__40695 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40691,G__40692,G__40693,G__40694,G__40695) : format.call(null,G__40691,G__40692,G__40693,G__40694,G__40695));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__40697 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__40698 = symbol;
var G__40699 = loc;
var G__40700 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__40702_40934 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__40703_40935 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__40704_40936 = true;
var _STAR_print_fn_STAR__temp_val__40705_40937 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__40704_40936);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__40705_40937);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__40575_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__40575_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__40703_40935);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__40702_40934);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__40697,G__40698,G__40699,G__40700) : format.call(null,G__40697,G__40698,G__40699,G__40700));
} else {
var G__40719 = "Execution error%s at %s(%s).\n%s\n";
var G__40720 = cause_type;
var G__40721 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__40722 = loc;
var G__40723 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__40719,G__40720,G__40721,G__40722,G__40723) : format.call(null,G__40719,G__40720,G__40721,G__40722,G__40723));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40637__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
