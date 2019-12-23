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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__25748){
var vec__25749 = p__25748;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25749,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25749,(1),null);
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
var vec__25753 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25753,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25753,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25753,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__25768 = arguments.length;
switch (G__25768) {
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

var G__25798_26000 = clojure.data.equality_partition;
var G__25799_26001 = "null";
var G__25800_26002 = ((function (G__25798_26000,G__25799_26001){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25798_26000,G__25799_26001))
;
goog.object.set(G__25798_26000,G__25799_26001,G__25800_26002);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__25808_26004 = clojure.data.equality_partition;
var G__25809_26005 = "string";
var G__25810_26006 = ((function (G__25808_26004,G__25809_26005){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25808_26004,G__25809_26005))
;
goog.object.set(G__25808_26004,G__25809_26005,G__25810_26006);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__25813_26013 = clojure.data.equality_partition;
var G__25814_26014 = "number";
var G__25815_26015 = ((function (G__25813_26013,G__25814_26014){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25813_26013,G__25814_26014))
;
goog.object.set(G__25813_26013,G__25814_26014,G__25815_26015);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__25819_26019 = clojure.data.equality_partition;
var G__25820_26020 = "array";
var G__25821_26021 = ((function (G__25819_26019,G__25820_26020){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__25819_26019,G__25820_26020))
;
goog.object.set(G__25819_26019,G__25820_26020,G__25821_26021);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__25828_26025 = clojure.data.equality_partition;
var G__25829_26026 = "function";
var G__25830_26027 = ((function (G__25828_26025,G__25829_26026){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25828_26025,G__25829_26026))
;
goog.object.set(G__25828_26025,G__25829_26026,G__25830_26027);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__25833_26033 = clojure.data.equality_partition;
var G__25834_26034 = "boolean";
var G__25835_26035 = ((function (G__25833_26033,G__25834_26034){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25833_26033,G__25834_26034))
;
goog.object.set(G__25833_26033,G__25834_26034,G__25835_26035);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__25836_26039 = clojure.data.equality_partition;
var G__25837_26040 = "_";
var G__25838_26041 = ((function (G__25836_26039,G__25837_26040){
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
});})(G__25836_26039,G__25837_26040))
;
goog.object.set(G__25836_26039,G__25837_26040,G__25838_26041);
goog.object.set(clojure.data.Diff,"null",true);

var G__25858_26060 = clojure.data.diff_similar;
var G__25859_26061 = "null";
var G__25860_26062 = ((function (G__25858_26060,G__25859_26061){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25858_26060,G__25859_26061))
;
goog.object.set(G__25858_26060,G__25859_26061,G__25860_26062);

goog.object.set(clojure.data.Diff,"string",true);

var G__25863_26072 = clojure.data.diff_similar;
var G__25864_26073 = "string";
var G__25865_26074 = ((function (G__25863_26072,G__25864_26073){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25863_26072,G__25864_26073))
;
goog.object.set(G__25863_26072,G__25864_26073,G__25865_26074);

goog.object.set(clojure.data.Diff,"number",true);

var G__25868_26080 = clojure.data.diff_similar;
var G__25869_26081 = "number";
var G__25870_26082 = ((function (G__25868_26080,G__25869_26081){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25868_26080,G__25869_26081))
;
goog.object.set(G__25868_26080,G__25869_26081,G__25870_26082);

goog.object.set(clojure.data.Diff,"array",true);

var G__25873_26093 = clojure.data.diff_similar;
var G__25874_26094 = "array";
var G__25875_26095 = ((function (G__25873_26093,G__25874_26094){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__25873_26093,G__25874_26094))
;
goog.object.set(G__25873_26093,G__25874_26094,G__25875_26095);

goog.object.set(clojure.data.Diff,"function",true);

var G__25878_26098 = clojure.data.diff_similar;
var G__25879_26099 = "function";
var G__25880_26100 = ((function (G__25878_26098,G__25879_26099){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25878_26098,G__25879_26099))
;
goog.object.set(G__25878_26098,G__25879_26099,G__25880_26100);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__25883_26111 = clojure.data.diff_similar;
var G__25884_26112 = "boolean";
var G__25885_26113 = ((function (G__25883_26111,G__25884_26112){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25883_26111,G__25884_26112))
;
goog.object.set(G__25883_26111,G__25884_26112,G__25885_26113);

goog.object.set(clojure.data.Diff,"_",true);

var G__25894_26118 = clojure.data.diff_similar;
var G__25895_26119 = "_";
var G__25896_26120 = ((function (G__25894_26118,G__25895_26119){
return (function (a,b){
var fexpr__25900 = (function (){var G__25901 = clojure.data.equality_partition(a);
var G__25901__$1 = (((G__25901 instanceof cljs.core.Keyword))?G__25901.fqn:null);
switch (G__25901__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25901__$1)].join('')));

}
})();
return (fexpr__25900.cljs$core$IFn$_invoke$arity$2 ? fexpr__25900.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__25900.call(null,a,b));
});})(G__25894_26118,G__25895_26119))
;
goog.object.set(G__25894_26118,G__25895_26119,G__25896_26120);
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
