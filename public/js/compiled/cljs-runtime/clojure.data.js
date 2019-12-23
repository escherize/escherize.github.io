goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__30715){
var vec__30716 = p__30715;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30716,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30716,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__30722 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30722,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30722,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30722,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__30745 = arguments.length;
switch (G__30745) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__30773_30929 = clojure.data.equality_partition;
var G__30774_30930 = "null";
var G__30775_30931 = ((function (G__30773_30929,G__30774_30930){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30773_30929,G__30774_30930))
;
goog.object.set(G__30773_30929,G__30774_30930,G__30775_30931);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__30776_30932 = clojure.data.equality_partition;
var G__30777_30933 = "string";
var G__30778_30934 = ((function (G__30776_30932,G__30777_30933){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30776_30932,G__30777_30933))
;
goog.object.set(G__30776_30932,G__30777_30933,G__30778_30934);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__30781_30937 = clojure.data.equality_partition;
var G__30782_30938 = "number";
var G__30783_30939 = ((function (G__30781_30937,G__30782_30938){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30781_30937,G__30782_30938))
;
goog.object.set(G__30781_30937,G__30782_30938,G__30783_30939);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__30785_30945 = clojure.data.equality_partition;
var G__30786_30946 = "array";
var G__30787_30947 = ((function (G__30785_30945,G__30786_30946){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__30785_30945,G__30786_30946))
;
goog.object.set(G__30785_30945,G__30786_30946,G__30787_30947);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__30795_30948 = clojure.data.equality_partition;
var G__30796_30949 = "function";
var G__30797_30950 = ((function (G__30795_30948,G__30796_30949){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30795_30948,G__30796_30949))
;
goog.object.set(G__30795_30948,G__30796_30949,G__30797_30950);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__30800_30953 = clojure.data.equality_partition;
var G__30801_30954 = "boolean";
var G__30802_30955 = ((function (G__30800_30953,G__30801_30954){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__30800_30953,G__30801_30954))
;
goog.object.set(G__30800_30953,G__30801_30954,G__30802_30955);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__30803_30964 = clojure.data.equality_partition;
var G__30804_30965 = "_";
var G__30805_30966 = ((function (G__30803_30964,G__30804_30965){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__30803_30964,G__30804_30965))
;
goog.object.set(G__30803_30964,G__30804_30965,G__30805_30966);
goog.object.set(clojure.data.Diff,"null",true);

var G__30819_30981 = clojure.data.diff_similar;
var G__30820_30982 = "null";
var G__30821_30983 = ((function (G__30819_30981,G__30820_30982){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30819_30981,G__30820_30982))
;
goog.object.set(G__30819_30981,G__30820_30982,G__30821_30983);

goog.object.set(clojure.data.Diff,"string",true);

var G__30822_30986 = clojure.data.diff_similar;
var G__30823_30987 = "string";
var G__30824_30988 = ((function (G__30822_30986,G__30823_30987){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30822_30986,G__30823_30987))
;
goog.object.set(G__30822_30986,G__30823_30987,G__30824_30988);

goog.object.set(clojure.data.Diff,"number",true);

var G__30833_30991 = clojure.data.diff_similar;
var G__30834_30992 = "number";
var G__30835_30993 = ((function (G__30833_30991,G__30834_30992){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30833_30991,G__30834_30992))
;
goog.object.set(G__30833_30991,G__30834_30992,G__30835_30993);

goog.object.set(clojure.data.Diff,"array",true);

var G__30836_30994 = clojure.data.diff_similar;
var G__30837_30995 = "array";
var G__30838_30996 = ((function (G__30836_30994,G__30837_30995){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__30836_30994,G__30837_30995))
;
goog.object.set(G__30836_30994,G__30837_30995,G__30838_30996);

goog.object.set(clojure.data.Diff,"function",true);

var G__30839_31000 = clojure.data.diff_similar;
var G__30840_31001 = "function";
var G__30841_31002 = ((function (G__30839_31000,G__30840_31001){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30839_31000,G__30840_31001))
;
goog.object.set(G__30839_31000,G__30840_31001,G__30841_31002);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__30845_31005 = clojure.data.diff_similar;
var G__30846_31006 = "boolean";
var G__30847_31007 = ((function (G__30845_31005,G__30846_31006){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__30845_31005,G__30846_31006))
;
goog.object.set(G__30845_31005,G__30846_31006,G__30847_31007);

goog.object.set(clojure.data.Diff,"_",true);

var G__30849_31008 = clojure.data.diff_similar;
var G__30850_31009 = "_";
var G__30851_31010 = ((function (G__30849_31008,G__30850_31009){
return (function (a,b){
var fexpr__30856 = (function (){var G__30857 = clojure.data.equality_partition(a);
var G__30857__$1 = (((G__30857 instanceof cljs.core.Keyword))?G__30857.fqn:null);
switch (G__30857__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30857__$1)].join('')));

}
})();
return (fexpr__30856.cljs$core$IFn$_invoke$arity$2 ? fexpr__30856.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__30856.call(null,a,b));
});})(G__30849_31008,G__30850_31009))
;
goog.object.set(G__30849_31008,G__30850_31009,G__30851_31010);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
