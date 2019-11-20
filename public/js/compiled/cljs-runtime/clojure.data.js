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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__26346){
var vec__26349 = p__26346;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26349,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26349,(1),null);
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
var vec__26366 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26366,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26366,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26366,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__26403 = arguments.length;
switch (G__26403) {
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

var G__26459_26642 = clojure.data.equality_partition;
var G__26460_26643 = "null";
var G__26461_26644 = ((function (G__26459_26642,G__26460_26643){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26459_26642,G__26460_26643))
;
goog.object.set(G__26459_26642,G__26460_26643,G__26461_26644);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__26471_26647 = clojure.data.equality_partition;
var G__26472_26648 = "string";
var G__26473_26649 = ((function (G__26471_26647,G__26472_26648){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26471_26647,G__26472_26648))
;
goog.object.set(G__26471_26647,G__26472_26648,G__26473_26649);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__26479_26652 = clojure.data.equality_partition;
var G__26480_26653 = "number";
var G__26481_26654 = ((function (G__26479_26652,G__26480_26653){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26479_26652,G__26480_26653))
;
goog.object.set(G__26479_26652,G__26480_26653,G__26481_26654);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__26482_26658 = clojure.data.equality_partition;
var G__26483_26659 = "array";
var G__26484_26660 = ((function (G__26482_26658,G__26483_26659){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__26482_26658,G__26483_26659))
;
goog.object.set(G__26482_26658,G__26483_26659,G__26484_26660);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__26486_26663 = clojure.data.equality_partition;
var G__26487_26664 = "function";
var G__26488_26665 = ((function (G__26486_26663,G__26487_26664){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26486_26663,G__26487_26664))
;
goog.object.set(G__26486_26663,G__26487_26664,G__26488_26665);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__26489_26667 = clojure.data.equality_partition;
var G__26490_26668 = "boolean";
var G__26491_26669 = ((function (G__26489_26667,G__26490_26668){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26489_26667,G__26490_26668))
;
goog.object.set(G__26489_26667,G__26490_26668,G__26491_26669);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__26497_26673 = clojure.data.equality_partition;
var G__26498_26674 = "_";
var G__26499_26675 = ((function (G__26497_26673,G__26498_26674){
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
});})(G__26497_26673,G__26498_26674))
;
goog.object.set(G__26497_26673,G__26498_26674,G__26499_26675);
goog.object.set(clojure.data.Diff,"null",true);

var G__26508_26679 = clojure.data.diff_similar;
var G__26509_26680 = "null";
var G__26510_26681 = ((function (G__26508_26679,G__26509_26680){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26508_26679,G__26509_26680))
;
goog.object.set(G__26508_26679,G__26509_26680,G__26510_26681);

goog.object.set(clojure.data.Diff,"string",true);

var G__26515_26682 = clojure.data.diff_similar;
var G__26516_26683 = "string";
var G__26517_26684 = ((function (G__26515_26682,G__26516_26683){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26515_26682,G__26516_26683))
;
goog.object.set(G__26515_26682,G__26516_26683,G__26517_26684);

goog.object.set(clojure.data.Diff,"number",true);

var G__26519_26686 = clojure.data.diff_similar;
var G__26520_26687 = "number";
var G__26521_26688 = ((function (G__26519_26686,G__26520_26687){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26519_26686,G__26520_26687))
;
goog.object.set(G__26519_26686,G__26520_26687,G__26521_26688);

goog.object.set(clojure.data.Diff,"array",true);

var G__26522_26689 = clojure.data.diff_similar;
var G__26523_26690 = "array";
var G__26524_26691 = ((function (G__26522_26689,G__26523_26690){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__26522_26689,G__26523_26690))
;
goog.object.set(G__26522_26689,G__26523_26690,G__26524_26691);

goog.object.set(clojure.data.Diff,"function",true);

var G__26532_26692 = clojure.data.diff_similar;
var G__26533_26693 = "function";
var G__26534_26694 = ((function (G__26532_26692,G__26533_26693){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26532_26692,G__26533_26693))
;
goog.object.set(G__26532_26692,G__26533_26693,G__26534_26694);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__26537_26695 = clojure.data.diff_similar;
var G__26538_26696 = "boolean";
var G__26539_26697 = ((function (G__26537_26695,G__26538_26696){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26537_26695,G__26538_26696))
;
goog.object.set(G__26537_26695,G__26538_26696,G__26539_26697);

goog.object.set(clojure.data.Diff,"_",true);

var G__26547_26698 = clojure.data.diff_similar;
var G__26548_26699 = "_";
var G__26549_26700 = ((function (G__26547_26698,G__26548_26699){
return (function (a,b){
var fexpr__26551 = (function (){var G__26552 = clojure.data.equality_partition(a);
var G__26552__$1 = (((G__26552 instanceof cljs.core.Keyword))?G__26552.fqn:null);
switch (G__26552__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26552__$1)].join('')));

}
})();
return (fexpr__26551.cljs$core$IFn$_invoke$arity$2 ? fexpr__26551.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__26551.call(null,a,b));
});})(G__26547_26698,G__26548_26699))
;
goog.object.set(G__26547_26698,G__26548_26699,G__26549_26700);
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
