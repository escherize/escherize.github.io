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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__37185){
var vec__37186 = p__37185;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37186,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37186,(1),null);
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
var vec__37192 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37192,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37192,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37192,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__37218 = arguments.length;
switch (G__37218) {
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

var G__37286_37506 = clojure.data.equality_partition;
var G__37287_37507 = "null";
var G__37288_37508 = ((function (G__37286_37506,G__37287_37507){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__37286_37506,G__37287_37507))
;
goog.object.set(G__37286_37506,G__37287_37507,G__37288_37508);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__37290_37516 = clojure.data.equality_partition;
var G__37291_37517 = "string";
var G__37292_37518 = ((function (G__37290_37516,G__37291_37517){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__37290_37516,G__37291_37517))
;
goog.object.set(G__37290_37516,G__37291_37517,G__37292_37518);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__37307_37519 = clojure.data.equality_partition;
var G__37308_37520 = "number";
var G__37309_37521 = ((function (G__37307_37519,G__37308_37520){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__37307_37519,G__37308_37520))
;
goog.object.set(G__37307_37519,G__37308_37520,G__37309_37521);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__37311_37527 = clojure.data.equality_partition;
var G__37312_37528 = "array";
var G__37313_37529 = ((function (G__37311_37527,G__37312_37528){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__37311_37527,G__37312_37528))
;
goog.object.set(G__37311_37527,G__37312_37528,G__37313_37529);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__37318_37535 = clojure.data.equality_partition;
var G__37319_37536 = "function";
var G__37320_37537 = ((function (G__37318_37535,G__37319_37536){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__37318_37535,G__37319_37536))
;
goog.object.set(G__37318_37535,G__37319_37536,G__37320_37537);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__37326_37539 = clojure.data.equality_partition;
var G__37327_37540 = "boolean";
var G__37328_37541 = ((function (G__37326_37539,G__37327_37540){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__37326_37539,G__37327_37540))
;
goog.object.set(G__37326_37539,G__37327_37540,G__37328_37541);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__37329_37548 = clojure.data.equality_partition;
var G__37330_37549 = "_";
var G__37331_37550 = ((function (G__37329_37548,G__37330_37549){
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
});})(G__37329_37548,G__37330_37549))
;
goog.object.set(G__37329_37548,G__37330_37549,G__37331_37550);
goog.object.set(clojure.data.Diff,"null",true);

var G__37350_37559 = clojure.data.diff_similar;
var G__37351_37560 = "null";
var G__37352_37561 = ((function (G__37350_37559,G__37351_37560){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__37350_37559,G__37351_37560))
;
goog.object.set(G__37350_37559,G__37351_37560,G__37352_37561);

goog.object.set(clojure.data.Diff,"string",true);

var G__37355_37564 = clojure.data.diff_similar;
var G__37356_37565 = "string";
var G__37357_37566 = ((function (G__37355_37564,G__37356_37565){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__37355_37564,G__37356_37565))
;
goog.object.set(G__37355_37564,G__37356_37565,G__37357_37566);

goog.object.set(clojure.data.Diff,"number",true);

var G__37363_37567 = clojure.data.diff_similar;
var G__37364_37568 = "number";
var G__37365_37569 = ((function (G__37363_37567,G__37364_37568){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__37363_37567,G__37364_37568))
;
goog.object.set(G__37363_37567,G__37364_37568,G__37365_37569);

goog.object.set(clojure.data.Diff,"array",true);

var G__37372_37576 = clojure.data.diff_similar;
var G__37373_37577 = "array";
var G__37374_37578 = ((function (G__37372_37576,G__37373_37577){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__37372_37576,G__37373_37577))
;
goog.object.set(G__37372_37576,G__37373_37577,G__37374_37578);

goog.object.set(clojure.data.Diff,"function",true);

var G__37378_37582 = clojure.data.diff_similar;
var G__37379_37583 = "function";
var G__37380_37584 = ((function (G__37378_37582,G__37379_37583){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__37378_37582,G__37379_37583))
;
goog.object.set(G__37378_37582,G__37379_37583,G__37380_37584);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__37383_37589 = clojure.data.diff_similar;
var G__37384_37590 = "boolean";
var G__37385_37591 = ((function (G__37383_37589,G__37384_37590){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__37383_37589,G__37384_37590))
;
goog.object.set(G__37383_37589,G__37384_37590,G__37385_37591);

goog.object.set(clojure.data.Diff,"_",true);

var G__37396_37592 = clojure.data.diff_similar;
var G__37397_37593 = "_";
var G__37398_37594 = ((function (G__37396_37592,G__37397_37593){
return (function (a,b){
var fexpr__37401 = (function (){var G__37402 = clojure.data.equality_partition(a);
var G__37402__$1 = (((G__37402 instanceof cljs.core.Keyword))?G__37402.fqn:null);
switch (G__37402__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37402__$1)].join('')));

}
})();
return (fexpr__37401.cljs$core$IFn$_invoke$arity$2 ? fexpr__37401.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__37401.call(null,a,b));
});})(G__37396_37592,G__37397_37593))
;
goog.object.set(G__37396_37592,G__37397_37593,G__37398_37594);
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
