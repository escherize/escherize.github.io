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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__26251){
var vec__26252 = p__26251;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26252,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26252,(1),null);
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
var vec__26263 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26263,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26263,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26263,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__26292 = arguments.length;
switch (G__26292) {
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

var G__26345_26542 = clojure.data.equality_partition;
var G__26346_26543 = "null";
var G__26347_26544 = ((function (G__26345_26542,G__26346_26543){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26345_26542,G__26346_26543))
;
goog.object.set(G__26345_26542,G__26346_26543,G__26347_26544);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__26359_26557 = clojure.data.equality_partition;
var G__26360_26558 = "string";
var G__26361_26559 = ((function (G__26359_26557,G__26360_26558){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26359_26557,G__26360_26558))
;
goog.object.set(G__26359_26557,G__26360_26558,G__26361_26559);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__26367_26564 = clojure.data.equality_partition;
var G__26368_26565 = "number";
var G__26369_26566 = ((function (G__26367_26564,G__26368_26565){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26367_26564,G__26368_26565))
;
goog.object.set(G__26367_26564,G__26368_26565,G__26369_26566);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__26373_26570 = clojure.data.equality_partition;
var G__26374_26571 = "array";
var G__26375_26572 = ((function (G__26373_26570,G__26374_26571){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__26373_26570,G__26374_26571))
;
goog.object.set(G__26373_26570,G__26374_26571,G__26375_26572);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__26376_26577 = clojure.data.equality_partition;
var G__26377_26578 = "function";
var G__26378_26579 = ((function (G__26376_26577,G__26377_26578){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26376_26577,G__26377_26578))
;
goog.object.set(G__26376_26577,G__26377_26578,G__26378_26579);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__26379_26583 = clojure.data.equality_partition;
var G__26380_26584 = "boolean";
var G__26381_26585 = ((function (G__26379_26583,G__26380_26584){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26379_26583,G__26380_26584))
;
goog.object.set(G__26379_26583,G__26380_26584,G__26381_26585);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__26392_26588 = clojure.data.equality_partition;
var G__26393_26589 = "_";
var G__26394_26590 = ((function (G__26392_26588,G__26393_26589){
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
});})(G__26392_26588,G__26393_26589))
;
goog.object.set(G__26392_26588,G__26393_26589,G__26394_26590);
goog.object.set(clojure.data.Diff,"null",true);

var G__26411_26608 = clojure.data.diff_similar;
var G__26412_26609 = "null";
var G__26413_26610 = ((function (G__26411_26608,G__26412_26609){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26411_26608,G__26412_26609))
;
goog.object.set(G__26411_26608,G__26412_26609,G__26413_26610);

goog.object.set(clojure.data.Diff,"string",true);

var G__26414_26613 = clojure.data.diff_similar;
var G__26415_26614 = "string";
var G__26416_26615 = ((function (G__26414_26613,G__26415_26614){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26414_26613,G__26415_26614))
;
goog.object.set(G__26414_26613,G__26415_26614,G__26416_26615);

goog.object.set(clojure.data.Diff,"number",true);

var G__26419_26620 = clojure.data.diff_similar;
var G__26420_26621 = "number";
var G__26421_26622 = ((function (G__26419_26620,G__26420_26621){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26419_26620,G__26420_26621))
;
goog.object.set(G__26419_26620,G__26420_26621,G__26421_26622);

goog.object.set(clojure.data.Diff,"array",true);

var G__26424_26624 = clojure.data.diff_similar;
var G__26425_26625 = "array";
var G__26426_26626 = ((function (G__26424_26624,G__26425_26625){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__26424_26624,G__26425_26625))
;
goog.object.set(G__26424_26624,G__26425_26625,G__26426_26626);

goog.object.set(clojure.data.Diff,"function",true);

var G__26427_26633 = clojure.data.diff_similar;
var G__26428_26634 = "function";
var G__26429_26635 = ((function (G__26427_26633,G__26428_26634){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26427_26633,G__26428_26634))
;
goog.object.set(G__26427_26633,G__26428_26634,G__26429_26635);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__26433_26640 = clojure.data.diff_similar;
var G__26434_26641 = "boolean";
var G__26435_26642 = ((function (G__26433_26640,G__26434_26641){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26433_26640,G__26434_26641))
;
goog.object.set(G__26433_26640,G__26434_26641,G__26435_26642);

goog.object.set(clojure.data.Diff,"_",true);

var G__26438_26646 = clojure.data.diff_similar;
var G__26439_26647 = "_";
var G__26440_26648 = ((function (G__26438_26646,G__26439_26647){
return (function (a,b){
var fexpr__26460 = (function (){var G__26463 = clojure.data.equality_partition(a);
var G__26463__$1 = (((G__26463 instanceof cljs.core.Keyword))?G__26463.fqn:null);
switch (G__26463__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26463__$1)].join('')));

}
})();
return (fexpr__26460.cljs$core$IFn$_invoke$arity$2 ? fexpr__26460.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__26460.call(null,a,b));
});})(G__26438_26646,G__26439_26647))
;
goog.object.set(G__26438_26646,G__26439_26647,G__26440_26648);
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
