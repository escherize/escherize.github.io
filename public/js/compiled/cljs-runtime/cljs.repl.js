goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42581){
var map__42582 = p__42581;
var map__42582__$1 = (((((!((map__42582 == null))))?(((((map__42582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42582):map__42582);
var m = map__42582__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42582__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42582__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__42584_42809 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42585_42810 = null;
var count__42586_42811 = (0);
var i__42587_42812 = (0);
while(true){
if((i__42587_42812 < count__42586_42811)){
var f_42813 = chunk__42585_42810.cljs$core$IIndexed$_nth$arity$2(null,i__42587_42812);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42813], 0));


var G__42814 = seq__42584_42809;
var G__42815 = chunk__42585_42810;
var G__42816 = count__42586_42811;
var G__42817 = (i__42587_42812 + (1));
seq__42584_42809 = G__42814;
chunk__42585_42810 = G__42815;
count__42586_42811 = G__42816;
i__42587_42812 = G__42817;
continue;
} else {
var temp__5735__auto___42819 = cljs.core.seq(seq__42584_42809);
if(temp__5735__auto___42819){
var seq__42584_42822__$1 = temp__5735__auto___42819;
if(cljs.core.chunked_seq_QMARK_(seq__42584_42822__$1)){
var c__4609__auto___42823 = cljs.core.chunk_first(seq__42584_42822__$1);
var G__42824 = cljs.core.chunk_rest(seq__42584_42822__$1);
var G__42825 = c__4609__auto___42823;
var G__42826 = cljs.core.count(c__4609__auto___42823);
var G__42827 = (0);
seq__42584_42809 = G__42824;
chunk__42585_42810 = G__42825;
count__42586_42811 = G__42826;
i__42587_42812 = G__42827;
continue;
} else {
var f_42829 = cljs.core.first(seq__42584_42822__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_42829], 0));


var G__42830 = cljs.core.next(seq__42584_42822__$1);
var G__42831 = null;
var G__42832 = (0);
var G__42833 = (0);
seq__42584_42809 = G__42830;
chunk__42585_42810 = G__42831;
count__42586_42811 = G__42832;
i__42587_42812 = G__42833;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42834 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_42834], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_42834)))?cljs.core.second(arglists_42834):arglists_42834)], 0));
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
var seq__42593_42838 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42594_42839 = null;
var count__42595_42840 = (0);
var i__42596_42841 = (0);
while(true){
if((i__42596_42841 < count__42595_42840)){
var vec__42608_42843 = chunk__42594_42839.cljs$core$IIndexed$_nth$arity$2(null,i__42596_42841);
var name_42844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42608_42843,(0),null);
var map__42611_42845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42608_42843,(1),null);
var map__42611_42846__$1 = (((((!((map__42611_42845 == null))))?(((((map__42611_42845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42611_42845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42611_42845):map__42611_42845);
var doc_42847 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42611_42846__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42848 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42611_42846__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42844], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42848], 0));

if(cljs.core.truth_(doc_42847)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42847], 0));
} else {
}


var G__42849 = seq__42593_42838;
var G__42850 = chunk__42594_42839;
var G__42851 = count__42595_42840;
var G__42852 = (i__42596_42841 + (1));
seq__42593_42838 = G__42849;
chunk__42594_42839 = G__42850;
count__42595_42840 = G__42851;
i__42596_42841 = G__42852;
continue;
} else {
var temp__5735__auto___42853 = cljs.core.seq(seq__42593_42838);
if(temp__5735__auto___42853){
var seq__42593_42854__$1 = temp__5735__auto___42853;
if(cljs.core.chunked_seq_QMARK_(seq__42593_42854__$1)){
var c__4609__auto___42855 = cljs.core.chunk_first(seq__42593_42854__$1);
var G__42856 = cljs.core.chunk_rest(seq__42593_42854__$1);
var G__42857 = c__4609__auto___42855;
var G__42858 = cljs.core.count(c__4609__auto___42855);
var G__42859 = (0);
seq__42593_42838 = G__42856;
chunk__42594_42839 = G__42857;
count__42595_42840 = G__42858;
i__42596_42841 = G__42859;
continue;
} else {
var vec__42624_42860 = cljs.core.first(seq__42593_42854__$1);
var name_42861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42624_42860,(0),null);
var map__42627_42862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42624_42860,(1),null);
var map__42627_42863__$1 = (((((!((map__42627_42862 == null))))?(((((map__42627_42862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42627_42862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42627_42862):map__42627_42862);
var doc_42864 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42627_42863__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42627_42863__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_42861], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_42865], 0));

if(cljs.core.truth_(doc_42864)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_42864], 0));
} else {
}


var G__42866 = cljs.core.next(seq__42593_42854__$1);
var G__42867 = null;
var G__42868 = (0);
var G__42869 = (0);
seq__42593_42838 = G__42866;
chunk__42594_42839 = G__42867;
count__42595_42840 = G__42868;
i__42596_42841 = G__42869;
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

var seq__42629 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42630 = null;
var count__42631 = (0);
var i__42632 = (0);
while(true){
if((i__42632 < count__42631)){
var role = chunk__42630.cljs$core$IIndexed$_nth$arity$2(null,i__42632);
var temp__5735__auto___42871__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___42871__$1)){
var spec_42872 = temp__5735__auto___42871__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42872)], 0));
} else {
}


var G__42873 = seq__42629;
var G__42874 = chunk__42630;
var G__42875 = count__42631;
var G__42876 = (i__42632 + (1));
seq__42629 = G__42873;
chunk__42630 = G__42874;
count__42631 = G__42875;
i__42632 = G__42876;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__42629);
if(temp__5735__auto____$1){
var seq__42629__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__42629__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42629__$1);
var G__42879 = cljs.core.chunk_rest(seq__42629__$1);
var G__42880 = c__4609__auto__;
var G__42881 = cljs.core.count(c__4609__auto__);
var G__42882 = (0);
seq__42629 = G__42879;
chunk__42630 = G__42880;
count__42631 = G__42881;
i__42632 = G__42882;
continue;
} else {
var role = cljs.core.first(seq__42629__$1);
var temp__5735__auto___42885__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___42885__$2)){
var spec_42886 = temp__5735__auto___42885__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_42886)], 0));
} else {
}


var G__42888 = cljs.core.next(seq__42629__$1);
var G__42889 = null;
var G__42890 = (0);
var G__42891 = (0);
seq__42629 = G__42888;
chunk__42630 = G__42889;
count__42631 = G__42890;
i__42632 = G__42891;
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
var G__42892 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__42893 = cljs.core.ex_cause(t);
via = G__42892;
t = G__42893;
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
var map__42668 = datafied_throwable;
var map__42668__$1 = (((((!((map__42668 == null))))?(((((map__42668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42668):map__42668);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42668__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42668__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__42668__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__42669 = cljs.core.last(via);
var map__42669__$1 = (((((!((map__42669 == null))))?(((((map__42669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42669):map__42669);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42669__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42669__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42669__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__42670 = data;
var map__42670__$1 = (((((!((map__42670 == null))))?(((((map__42670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42670):map__42670);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42670__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42670__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42670__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__42671 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__42671__$1 = (((((!((map__42671 == null))))?(((((map__42671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42671):map__42671);
var top_data = map__42671__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42671__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__42694 = phase;
var G__42694__$1 = (((G__42694 instanceof cljs.core.Keyword))?G__42694.fqn:null);
switch (G__42694__$1) {
case "read-source":
var map__42698 = data;
var map__42698__$1 = (((((!((map__42698 == null))))?(((((map__42698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42698):map__42698);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42698__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42698__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__42715 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__42715__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42715,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42715);
var G__42715__$2 = (cljs.core.truth_((function (){var fexpr__42716 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42716.cljs$core$IFn$_invoke$arity$1 ? fexpr__42716.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42716.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42715__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42715__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42715__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42715__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__42717 = top_data;
var G__42717__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42717,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42717);
var G__42717__$2 = (cljs.core.truth_((function (){var fexpr__42718 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42718.cljs$core$IFn$_invoke$arity$1 ? fexpr__42718.cljs$core$IFn$_invoke$arity$1(source) : fexpr__42718.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__42717__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42717__$1);
var G__42717__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42717__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42717__$2);
var G__42717__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42717__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42717__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42717__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42717__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__42719 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42719,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42719,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42719,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42719,(3),null);
var G__42726 = top_data;
var G__42726__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42726,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__42726);
var G__42726__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42726__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__42726__$1);
var G__42726__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42726__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__42726__$2);
var G__42726__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42726__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42726__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42726__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42726__$4;
}

break;
case "execution":
var vec__42734 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42734,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42734,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42734,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42734,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__42663_SHARP_){
var or__4185__auto__ = (p1__42663_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__42748 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__42748.cljs$core$IFn$_invoke$arity$1 ? fexpr__42748.cljs$core$IFn$_invoke$arity$1(p1__42663_SHARP_) : fexpr__42748.call(null,p1__42663_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__42749 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__42749__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42749,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__42749);
var G__42749__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42749__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42749__$1);
var G__42749__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42749__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__42749__$2);
var G__42749__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42749__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__42749__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__42749__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42749__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42694__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__42764){
var map__42765 = p__42764;
var map__42765__$1 = (((((!((map__42765 == null))))?(((((map__42765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42765):map__42765);
var triage_data = map__42765__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42765__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__42768 = phase;
var G__42768__$1 = (((G__42768 instanceof cljs.core.Keyword))?G__42768.fqn:null);
switch (G__42768__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__42769 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__42770 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42771 = loc;
var G__42772 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42773_42927 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42774_42928 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42775_42929 = true;
var _STAR_print_fn_STAR__temp_val__42776_42930 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42775_42929);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42776_42930);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42759_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42759_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42774_42928);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42773_42927);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42769,G__42770,G__42771,G__42772) : format.call(null,G__42769,G__42770,G__42771,G__42772));

break;
case "macroexpansion":
var G__42778 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__42779 = cause_type;
var G__42780 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42781 = loc;
var G__42782 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42778,G__42779,G__42780,G__42781,G__42782) : format.call(null,G__42778,G__42779,G__42780,G__42781,G__42782));

break;
case "compile-syntax-check":
var G__42783 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__42784 = cause_type;
var G__42785 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42786 = loc;
var G__42787 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42783,G__42784,G__42785,G__42786,G__42787) : format.call(null,G__42783,G__42784,G__42785,G__42786,G__42787));

break;
case "compilation":
var G__42788 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__42789 = cause_type;
var G__42790 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42791 = loc;
var G__42792 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42788,G__42789,G__42790,G__42791,G__42792) : format.call(null,G__42788,G__42789,G__42790,G__42791,G__42792));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__42793 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__42794 = symbol;
var G__42795 = loc;
var G__42796 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42797_42935 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42798_42936 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42799_42937 = true;
var _STAR_print_fn_STAR__temp_val__42800_42938 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42799_42937);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42800_42938);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42763_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__42763_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42798_42936);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42797_42935);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__42793,G__42794,G__42795,G__42796) : format.call(null,G__42793,G__42794,G__42795,G__42796));
} else {
var G__42801 = "Execution error%s at %s(%s).\n%s\n";
var G__42802 = cause_type;
var G__42803 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__42804 = loc;
var G__42805 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__42801,G__42802,G__42803,G__42804,G__42805) : format.call(null,G__42801,G__42802,G__42803,G__42804,G__42805));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42768__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
