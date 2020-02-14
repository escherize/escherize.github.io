// Compiled by ClojureScript 1.8.34 {:static-fns true}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__13630){
var vec__13631 = p__13630;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13631,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13631,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__13633 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13633,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13633,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13633,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13633,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13633,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__4425__auto__)){
var name__$1 = temp__4425__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__13636 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13636,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13636,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13636,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13636,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13636,(4),null);
var vec__13637 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13637,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13637,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13637,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13637,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13637,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__6509__auto__ = source;
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__6509__auto__ = line;
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__6509__auto__ = col;
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__6509__auto__ = name;
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__13640 = segmap;
var map__13640__$1 = ((((!((map__13640 == null)))?((((map__13640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13640):map__13640);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13640__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13640__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13640__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13640__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13640__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__13640,map__13640__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__13640,map__13640__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__13640,map__13640__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__13640,map__13640__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__13640,map__13640__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__13640,map__13640__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var args13642 = [];
var len__7578__auto___13646 = arguments.length;
var i__7579__auto___13647 = (0);
while(true){
if((i__7579__auto___13647 < len__7578__auto___13646)){
args13642.push((arguments[i__7579__auto___13647]));

var G__13648 = (i__7579__auto___13647 + (1));
i__7579__auto___13647 = G__13648;
continue;
} else {
}
break;
}

var G__13644 = args13642.length;
switch (G__13644) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13642.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__13645 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__13650 = cljs.core.next(segs__$1);
var G__13651 = nrelseg;
var G__13652 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__13650;
relseg__$1 = G__13651;
result__$1 = G__13652;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13645,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13645,(1),null);
var G__13653 = (gline + (1));
var G__13654 = cljs.core.next(lines__$1);
var G__13655 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__13656 = result__$1;
gline = G__13653;
lines__$1 = G__13654;
relseg = G__13655;
result = G__13656;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__13660 = segmap;
var map__13660__$1 = ((((!((map__13660 == null)))?((((map__13660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13660):map__13660);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13660__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13660__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13660__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13660__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13660__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__13660,map__13660__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__13660,map__13660__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__13657_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__13657_SHARP_,d__$1);
});})(map__13660,map__13660__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__13660,map__13660__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var args13662 = [];
var len__7578__auto___13666 = arguments.length;
var i__7579__auto___13667 = (0);
while(true){
if((i__7579__auto___13667 < len__7578__auto___13666)){
args13662.push((arguments[i__7579__auto___13667]));

var G__13668 = (i__7579__auto___13667 + (1));
i__7579__auto___13667 = G__13668;
continue;
} else {
}
break;
}

var G__13664 = args13662.length;
switch (G__13664) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13662.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__13665 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__13670 = cljs.core.next(segs__$1);
var G__13671 = nrelseg;
var G__13672 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__13670;
relseg__$1 = G__13671;
result__$1 = G__13672;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13665,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13665,(1),null);
var G__13673 = (gline + (1));
var G__13674 = cljs.core.next(lines__$1);
var G__13675 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__13676 = result__$1;
gline = G__13673;
lines__$1 = G__13674;
relseg = G__13675;
result = G__13676;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = (function (){var G__13684 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13684) : cljs.core.atom.call(null,G__13684));
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (relseg){
return (function (p__13685){
var vec__13686 = p__13685;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13686,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13686,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13686,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13686,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13686,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
});})(relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (relseg){
return (function (cols__$1,p__13687){
var vec__13688 = p__13687;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13688,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13688,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13688,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13688,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13688,(4),null);
var seg = vec__13688;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(relseg) : cljs.core.deref.call(null,relseg)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,((function (offset,vec__13688,gcol,sidx,line,col,name,seg,relseg){
return (function (p__13689){
var vec__13690 = p__13689;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13690,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13690,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13690,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13690,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13690,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__6509__auto__ = name;
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return lname;
}
})()], null);
});})(offset,vec__13688,gcol,sidx,line,col,name,seg,relseg))
);

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,cols));
});})(relseg))
,cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = (function (){var G__13749 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13749) : cljs.core.atom.call(null,G__13749));
})();
var names__GT_idx = (function (){var G__13750 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13750) : cljs.core.atom.call(null,G__13750));
})();
var name_idx = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__6509__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = ((function (lines,names__GT_idx,name_idx,preamble_lines){
return (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__4423__auto__)){
var name = temp__4423__auto__;
var idx = (function (){var temp__4423__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx)),name);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return idx;
} else {
var cidx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(name_idx) : cljs.core.deref.call(null,name_idx));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});})(lines,names__GT_idx,name_idx,preamble_lines))
;
var encode_cols = ((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (infos,source_idx,line,col){
var seq__13751 = cljs.core.seq(infos);
var chunk__13752 = null;
var count__13753 = (0);
var i__13754 = (0);
while(true){
if((i__13754 < count__13753)){
var info = chunk__13752.cljs$core$IIndexed$_nth$arity$2(null,i__13754);
var segv_13804 = info__GT_segv(info,source_idx,line,col);
var gline_13805 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_13806 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_13805 > (lc_13806 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__13751,chunk__13752,count__13753,i__13754,segv_13804,gline_13805,lc_13806,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_13805 - (lc_13806 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_13804], null));
});})(seq__13751,chunk__13752,count__13753,i__13754,segv_13804,gline_13805,lc_13806,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__13751,chunk__13752,count__13753,i__13754,segv_13804,gline_13805,lc_13806,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13805], null),cljs.core.conj,segv_13804);
});})(seq__13751,chunk__13752,count__13753,i__13754,segv_13804,gline_13805,lc_13806,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__13807 = seq__13751;
var G__13808 = chunk__13752;
var G__13809 = count__13753;
var G__13810 = (i__13754 + (1));
seq__13751 = G__13807;
chunk__13752 = G__13808;
count__13753 = G__13809;
i__13754 = G__13810;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13751);
if(temp__4425__auto__){
var seq__13751__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13751__$1)){
var c__7320__auto__ = cljs.core.chunk_first(seq__13751__$1);
var G__13811 = cljs.core.chunk_rest(seq__13751__$1);
var G__13812 = c__7320__auto__;
var G__13813 = cljs.core.count(c__7320__auto__);
var G__13814 = (0);
seq__13751 = G__13811;
chunk__13752 = G__13812;
count__13753 = G__13813;
i__13754 = G__13814;
continue;
} else {
var info = cljs.core.first(seq__13751__$1);
var segv_13815 = info__GT_segv(info,source_idx,line,col);
var gline_13816 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_13817 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)));
if((gline_13816 > (lc_13817 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__13751,chunk__13752,count__13753,i__13754,segv_13815,gline_13816,lc_13817,info,seq__13751__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_13816 - (lc_13817 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_13815], null));
});})(seq__13751,chunk__13752,count__13753,i__13754,segv_13815,gline_13816,lc_13817,info,seq__13751__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__13751,chunk__13752,count__13753,i__13754,segv_13815,gline_13816,lc_13817,info,seq__13751__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_13816], null),cljs.core.conj,segv_13815);
});})(seq__13751,chunk__13752,count__13753,i__13754,segv_13815,gline_13816,lc_13817,info,seq__13751__$1,temp__4425__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}

var G__13818 = cljs.core.next(seq__13751__$1);
var G__13819 = null;
var G__13820 = (0);
var G__13821 = (0);
seq__13751 = G__13818;
chunk__13752 = G__13819;
count__13753 = G__13820;
i__13754 = G__13821;
continue;
}
} else {
return null;
}
}
break;
}
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
;
var seq__13755_13822 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__13756_13823 = null;
var count__13757_13824 = (0);
var i__13758_13825 = (0);
while(true){
if((i__13758_13825 < count__13757_13824)){
var vec__13759_13826 = chunk__13756_13823.cljs$core$IIndexed$_nth$arity$2(null,i__13758_13825);
var source_idx_13827 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13759_13826,(0),null);
var vec__13760_13828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13759_13826,(1),null);
var __13829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13760_13828,(0),null);
var lines_13830__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13760_13828,(1),null);
var seq__13761_13831 = cljs.core.seq(lines_13830__$1);
var chunk__13762_13832 = null;
var count__13763_13833 = (0);
var i__13764_13834 = (0);
while(true){
if((i__13764_13834 < count__13763_13833)){
var vec__13765_13835 = chunk__13762_13832.cljs$core$IIndexed$_nth$arity$2(null,i__13764_13834);
var line_13836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13765_13835,(0),null);
var cols_13837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13765_13835,(1),null);
var seq__13766_13838 = cljs.core.seq(cols_13837);
var chunk__13767_13839 = null;
var count__13768_13840 = (0);
var i__13769_13841 = (0);
while(true){
if((i__13769_13841 < count__13768_13840)){
var vec__13770_13842 = chunk__13767_13839.cljs$core$IIndexed$_nth$arity$2(null,i__13769_13841);
var col_13843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13770_13842,(0),null);
var infos_13844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13770_13842,(1),null);
encode_cols(infos_13844,source_idx_13827,line_13836,col_13843);

var G__13845 = seq__13766_13838;
var G__13846 = chunk__13767_13839;
var G__13847 = count__13768_13840;
var G__13848 = (i__13769_13841 + (1));
seq__13766_13838 = G__13845;
chunk__13767_13839 = G__13846;
count__13768_13840 = G__13847;
i__13769_13841 = G__13848;
continue;
} else {
var temp__4425__auto___13849 = cljs.core.seq(seq__13766_13838);
if(temp__4425__auto___13849){
var seq__13766_13850__$1 = temp__4425__auto___13849;
if(cljs.core.chunked_seq_QMARK_(seq__13766_13850__$1)){
var c__7320__auto___13851 = cljs.core.chunk_first(seq__13766_13850__$1);
var G__13852 = cljs.core.chunk_rest(seq__13766_13850__$1);
var G__13853 = c__7320__auto___13851;
var G__13854 = cljs.core.count(c__7320__auto___13851);
var G__13855 = (0);
seq__13766_13838 = G__13852;
chunk__13767_13839 = G__13853;
count__13768_13840 = G__13854;
i__13769_13841 = G__13855;
continue;
} else {
var vec__13771_13856 = cljs.core.first(seq__13766_13850__$1);
var col_13857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13771_13856,(0),null);
var infos_13858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13771_13856,(1),null);
encode_cols(infos_13858,source_idx_13827,line_13836,col_13857);

var G__13859 = cljs.core.next(seq__13766_13850__$1);
var G__13860 = null;
var G__13861 = (0);
var G__13862 = (0);
seq__13766_13838 = G__13859;
chunk__13767_13839 = G__13860;
count__13768_13840 = G__13861;
i__13769_13841 = G__13862;
continue;
}
} else {
}
}
break;
}

var G__13863 = seq__13761_13831;
var G__13864 = chunk__13762_13832;
var G__13865 = count__13763_13833;
var G__13866 = (i__13764_13834 + (1));
seq__13761_13831 = G__13863;
chunk__13762_13832 = G__13864;
count__13763_13833 = G__13865;
i__13764_13834 = G__13866;
continue;
} else {
var temp__4425__auto___13867 = cljs.core.seq(seq__13761_13831);
if(temp__4425__auto___13867){
var seq__13761_13868__$1 = temp__4425__auto___13867;
if(cljs.core.chunked_seq_QMARK_(seq__13761_13868__$1)){
var c__7320__auto___13869 = cljs.core.chunk_first(seq__13761_13868__$1);
var G__13870 = cljs.core.chunk_rest(seq__13761_13868__$1);
var G__13871 = c__7320__auto___13869;
var G__13872 = cljs.core.count(c__7320__auto___13869);
var G__13873 = (0);
seq__13761_13831 = G__13870;
chunk__13762_13832 = G__13871;
count__13763_13833 = G__13872;
i__13764_13834 = G__13873;
continue;
} else {
var vec__13772_13874 = cljs.core.first(seq__13761_13868__$1);
var line_13875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13772_13874,(0),null);
var cols_13876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13772_13874,(1),null);
var seq__13773_13877 = cljs.core.seq(cols_13876);
var chunk__13774_13878 = null;
var count__13775_13879 = (0);
var i__13776_13880 = (0);
while(true){
if((i__13776_13880 < count__13775_13879)){
var vec__13777_13881 = chunk__13774_13878.cljs$core$IIndexed$_nth$arity$2(null,i__13776_13880);
var col_13882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13777_13881,(0),null);
var infos_13883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13777_13881,(1),null);
encode_cols(infos_13883,source_idx_13827,line_13875,col_13882);

var G__13884 = seq__13773_13877;
var G__13885 = chunk__13774_13878;
var G__13886 = count__13775_13879;
var G__13887 = (i__13776_13880 + (1));
seq__13773_13877 = G__13884;
chunk__13774_13878 = G__13885;
count__13775_13879 = G__13886;
i__13776_13880 = G__13887;
continue;
} else {
var temp__4425__auto___13888__$1 = cljs.core.seq(seq__13773_13877);
if(temp__4425__auto___13888__$1){
var seq__13773_13889__$1 = temp__4425__auto___13888__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13773_13889__$1)){
var c__7320__auto___13890 = cljs.core.chunk_first(seq__13773_13889__$1);
var G__13891 = cljs.core.chunk_rest(seq__13773_13889__$1);
var G__13892 = c__7320__auto___13890;
var G__13893 = cljs.core.count(c__7320__auto___13890);
var G__13894 = (0);
seq__13773_13877 = G__13891;
chunk__13774_13878 = G__13892;
count__13775_13879 = G__13893;
i__13776_13880 = G__13894;
continue;
} else {
var vec__13778_13895 = cljs.core.first(seq__13773_13889__$1);
var col_13896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13778_13895,(0),null);
var infos_13897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13778_13895,(1),null);
encode_cols(infos_13897,source_idx_13827,line_13875,col_13896);

var G__13898 = cljs.core.next(seq__13773_13889__$1);
var G__13899 = null;
var G__13900 = (0);
var G__13901 = (0);
seq__13773_13877 = G__13898;
chunk__13774_13878 = G__13899;
count__13775_13879 = G__13900;
i__13776_13880 = G__13901;
continue;
}
} else {
}
}
break;
}

var G__13902 = cljs.core.next(seq__13761_13868__$1);
var G__13903 = null;
var G__13904 = (0);
var G__13905 = (0);
seq__13761_13831 = G__13902;
chunk__13762_13832 = G__13903;
count__13763_13833 = G__13904;
i__13764_13834 = G__13905;
continue;
}
} else {
}
}
break;
}

var G__13906 = seq__13755_13822;
var G__13907 = chunk__13756_13823;
var G__13908 = count__13757_13824;
var G__13909 = (i__13758_13825 + (1));
seq__13755_13822 = G__13906;
chunk__13756_13823 = G__13907;
count__13757_13824 = G__13908;
i__13758_13825 = G__13909;
continue;
} else {
var temp__4425__auto___13910 = cljs.core.seq(seq__13755_13822);
if(temp__4425__auto___13910){
var seq__13755_13911__$1 = temp__4425__auto___13910;
if(cljs.core.chunked_seq_QMARK_(seq__13755_13911__$1)){
var c__7320__auto___13912 = cljs.core.chunk_first(seq__13755_13911__$1);
var G__13913 = cljs.core.chunk_rest(seq__13755_13911__$1);
var G__13914 = c__7320__auto___13912;
var G__13915 = cljs.core.count(c__7320__auto___13912);
var G__13916 = (0);
seq__13755_13822 = G__13913;
chunk__13756_13823 = G__13914;
count__13757_13824 = G__13915;
i__13758_13825 = G__13916;
continue;
} else {
var vec__13779_13917 = cljs.core.first(seq__13755_13911__$1);
var source_idx_13918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13779_13917,(0),null);
var vec__13780_13919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13779_13917,(1),null);
var __13920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13780_13919,(0),null);
var lines_13921__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13780_13919,(1),null);
var seq__13781_13922 = cljs.core.seq(lines_13921__$1);
var chunk__13782_13923 = null;
var count__13783_13924 = (0);
var i__13784_13925 = (0);
while(true){
if((i__13784_13925 < count__13783_13924)){
var vec__13785_13926 = chunk__13782_13923.cljs$core$IIndexed$_nth$arity$2(null,i__13784_13925);
var line_13927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13785_13926,(0),null);
var cols_13928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13785_13926,(1),null);
var seq__13786_13929 = cljs.core.seq(cols_13928);
var chunk__13787_13930 = null;
var count__13788_13931 = (0);
var i__13789_13932 = (0);
while(true){
if((i__13789_13932 < count__13788_13931)){
var vec__13790_13933 = chunk__13787_13930.cljs$core$IIndexed$_nth$arity$2(null,i__13789_13932);
var col_13934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13790_13933,(0),null);
var infos_13935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13790_13933,(1),null);
encode_cols(infos_13935,source_idx_13918,line_13927,col_13934);

var G__13936 = seq__13786_13929;
var G__13937 = chunk__13787_13930;
var G__13938 = count__13788_13931;
var G__13939 = (i__13789_13932 + (1));
seq__13786_13929 = G__13936;
chunk__13787_13930 = G__13937;
count__13788_13931 = G__13938;
i__13789_13932 = G__13939;
continue;
} else {
var temp__4425__auto___13940__$1 = cljs.core.seq(seq__13786_13929);
if(temp__4425__auto___13940__$1){
var seq__13786_13941__$1 = temp__4425__auto___13940__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13786_13941__$1)){
var c__7320__auto___13942 = cljs.core.chunk_first(seq__13786_13941__$1);
var G__13943 = cljs.core.chunk_rest(seq__13786_13941__$1);
var G__13944 = c__7320__auto___13942;
var G__13945 = cljs.core.count(c__7320__auto___13942);
var G__13946 = (0);
seq__13786_13929 = G__13943;
chunk__13787_13930 = G__13944;
count__13788_13931 = G__13945;
i__13789_13932 = G__13946;
continue;
} else {
var vec__13791_13947 = cljs.core.first(seq__13786_13941__$1);
var col_13948 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13791_13947,(0),null);
var infos_13949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13791_13947,(1),null);
encode_cols(infos_13949,source_idx_13918,line_13927,col_13948);

var G__13950 = cljs.core.next(seq__13786_13941__$1);
var G__13951 = null;
var G__13952 = (0);
var G__13953 = (0);
seq__13786_13929 = G__13950;
chunk__13787_13930 = G__13951;
count__13788_13931 = G__13952;
i__13789_13932 = G__13953;
continue;
}
} else {
}
}
break;
}

var G__13954 = seq__13781_13922;
var G__13955 = chunk__13782_13923;
var G__13956 = count__13783_13924;
var G__13957 = (i__13784_13925 + (1));
seq__13781_13922 = G__13954;
chunk__13782_13923 = G__13955;
count__13783_13924 = G__13956;
i__13784_13925 = G__13957;
continue;
} else {
var temp__4425__auto___13958__$1 = cljs.core.seq(seq__13781_13922);
if(temp__4425__auto___13958__$1){
var seq__13781_13959__$1 = temp__4425__auto___13958__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13781_13959__$1)){
var c__7320__auto___13960 = cljs.core.chunk_first(seq__13781_13959__$1);
var G__13961 = cljs.core.chunk_rest(seq__13781_13959__$1);
var G__13962 = c__7320__auto___13960;
var G__13963 = cljs.core.count(c__7320__auto___13960);
var G__13964 = (0);
seq__13781_13922 = G__13961;
chunk__13782_13923 = G__13962;
count__13783_13924 = G__13963;
i__13784_13925 = G__13964;
continue;
} else {
var vec__13792_13965 = cljs.core.first(seq__13781_13959__$1);
var line_13966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13792_13965,(0),null);
var cols_13967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13792_13965,(1),null);
var seq__13793_13968 = cljs.core.seq(cols_13967);
var chunk__13794_13969 = null;
var count__13795_13970 = (0);
var i__13796_13971 = (0);
while(true){
if((i__13796_13971 < count__13795_13970)){
var vec__13797_13972 = chunk__13794_13969.cljs$core$IIndexed$_nth$arity$2(null,i__13796_13971);
var col_13973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13797_13972,(0),null);
var infos_13974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13797_13972,(1),null);
encode_cols(infos_13974,source_idx_13918,line_13966,col_13973);

var G__13975 = seq__13793_13968;
var G__13976 = chunk__13794_13969;
var G__13977 = count__13795_13970;
var G__13978 = (i__13796_13971 + (1));
seq__13793_13968 = G__13975;
chunk__13794_13969 = G__13976;
count__13795_13970 = G__13977;
i__13796_13971 = G__13978;
continue;
} else {
var temp__4425__auto___13979__$2 = cljs.core.seq(seq__13793_13968);
if(temp__4425__auto___13979__$2){
var seq__13793_13980__$1 = temp__4425__auto___13979__$2;
if(cljs.core.chunked_seq_QMARK_(seq__13793_13980__$1)){
var c__7320__auto___13981 = cljs.core.chunk_first(seq__13793_13980__$1);
var G__13982 = cljs.core.chunk_rest(seq__13793_13980__$1);
var G__13983 = c__7320__auto___13981;
var G__13984 = cljs.core.count(c__7320__auto___13981);
var G__13985 = (0);
seq__13793_13968 = G__13982;
chunk__13794_13969 = G__13983;
count__13795_13970 = G__13984;
i__13796_13971 = G__13985;
continue;
} else {
var vec__13798_13986 = cljs.core.first(seq__13793_13980__$1);
var col_13987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13798_13986,(0),null);
var infos_13988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13798_13986,(1),null);
encode_cols(infos_13988,source_idx_13918,line_13966,col_13987);

var G__13989 = cljs.core.next(seq__13793_13980__$1);
var G__13990 = null;
var G__13991 = (0);
var G__13992 = (0);
seq__13793_13968 = G__13989;
chunk__13794_13969 = G__13990;
count__13795_13970 = G__13991;
i__13796_13971 = G__13992;
continue;
}
} else {
}
}
break;
}

var G__13993 = cljs.core.next(seq__13781_13959__$1);
var G__13994 = null;
var G__13995 = (0);
var G__13996 = (0);
seq__13781_13922 = G__13993;
chunk__13782_13923 = G__13994;
count__13783_13924 = G__13995;
i__13784_13925 = G__13996;
continue;
}
} else {
}
}
break;
}

var G__13997 = cljs.core.next(seq__13755_13911__$1);
var G__13998 = null;
var G__13999 = (0);
var G__14000 = (0);
seq__13755_13822 = G__13997;
chunk__13756_13823 = G__13998;
count__13757_13824 = G__13999;
i__13758_13825 = G__14000;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__13799 = {"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__13691_SHARP_){
return [cljs.core.str(p1__13691_SHARP_),cljs.core.str("?rel="),cljs.core.str((new Date()).valueOf())].join('');
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
:cljs.core.identity),((function (paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__13692_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__13692_SHARP_,/\//));
});})(paths,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
);
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (p1__13693_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__13693_SHARP_);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(lines) : cljs.core.deref.call(null,lines)))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(names__GT_idx) : cljs.core.deref.call(null,names__GT_idx))))))};
var G__13799__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))?(function (){var G__13800 = G__13799;
var G__13801_14001 = G__13800;
var G__13802_14002 = "sourcesContent";
var G__13803_14003 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts));
goog.object.set(G__13801_14001,G__13802_14002,G__13803_14003);

return G__13800;
})():G__13799);
return G__13799__$1;
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__14009 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14009,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14009,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__14010 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14010,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14010,(1),null);
var G__14014 = cljs.core.next(col_map_seq);
var G__14015 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__14010,col,infos,vec__14009,line,col_map){
return (function (v,p__14011){
var map__14012 = p__14011;
var map__14012__$1 = ((((!((map__14012 == null)))?((((map__14012.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14012.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14012):map__14012);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14012__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14012__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__14010,col,infos,vec__14009,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__14014;
new_cols = G__14015;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__14016 = cljs.core.next(line_map_seq);
var G__14017 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__14016;
new_lines = G__14017;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = (function (){var G__14069 = cljs.core.sorted_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14069) : cljs.core.atom.call(null,G__14069));
})();
var seq__14070_14120 = cljs.core.seq(reverse_map);
var chunk__14071_14121 = null;
var count__14072_14122 = (0);
var i__14073_14123 = (0);
while(true){
if((i__14073_14123 < count__14072_14122)){
var vec__14074_14124 = chunk__14071_14121.cljs$core$IIndexed$_nth$arity$2(null,i__14073_14123);
var line_14125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14074_14124,(0),null);
var columns_14126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14074_14124,(1),null);
var seq__14075_14127 = cljs.core.seq(columns_14126);
var chunk__14076_14128 = null;
var count__14077_14129 = (0);
var i__14078_14130 = (0);
while(true){
if((i__14078_14130 < count__14077_14129)){
var vec__14079_14131 = chunk__14076_14128.cljs$core$IIndexed$_nth$arity$2(null,i__14078_14130);
var column_14132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14079_14131,(0),null);
var column_info_14133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14079_14131,(1),null);
var seq__14080_14134 = cljs.core.seq(column_info_14133);
var chunk__14081_14135 = null;
var count__14082_14136 = (0);
var i__14083_14137 = (0);
while(true){
if((i__14083_14137 < count__14082_14136)){
var map__14084_14138 = chunk__14081_14135.cljs$core$IIndexed$_nth$arity$2(null,i__14083_14137);
var map__14084_14139__$1 = ((((!((map__14084_14138 == null)))?((((map__14084_14138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14084_14138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14084_14138):map__14084_14138);
var gline_14140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14084_14139__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14084_14139__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14142 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14084_14139__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14140], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14080_14134,chunk__14081_14135,count__14082_14136,i__14083_14137,seq__14075_14127,chunk__14076_14128,count__14077_14129,i__14078_14130,seq__14070_14120,chunk__14071_14121,count__14072_14122,i__14073_14123,map__14084_14138,map__14084_14139__$1,gline_14140,gcol_14141,name_14142,vec__14079_14131,column_14132,column_info_14133,vec__14074_14124,line_14125,columns_14126,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14141], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14125,new cljs.core.Keyword(null,"col","col",-1959363084),column_14132,new cljs.core.Keyword(null,"name","name",1843675177),name_14142], null));
});})(seq__14080_14134,chunk__14081_14135,count__14082_14136,i__14083_14137,seq__14075_14127,chunk__14076_14128,count__14077_14129,i__14078_14130,seq__14070_14120,chunk__14071_14121,count__14072_14122,i__14073_14123,map__14084_14138,map__14084_14139__$1,gline_14140,gcol_14141,name_14142,vec__14079_14131,column_14132,column_info_14133,vec__14074_14124,line_14125,columns_14126,inverted))
,cljs.core.sorted_map()));

var G__14143 = seq__14080_14134;
var G__14144 = chunk__14081_14135;
var G__14145 = count__14082_14136;
var G__14146 = (i__14083_14137 + (1));
seq__14080_14134 = G__14143;
chunk__14081_14135 = G__14144;
count__14082_14136 = G__14145;
i__14083_14137 = G__14146;
continue;
} else {
var temp__4425__auto___14147 = cljs.core.seq(seq__14080_14134);
if(temp__4425__auto___14147){
var seq__14080_14148__$1 = temp__4425__auto___14147;
if(cljs.core.chunked_seq_QMARK_(seq__14080_14148__$1)){
var c__7320__auto___14149 = cljs.core.chunk_first(seq__14080_14148__$1);
var G__14150 = cljs.core.chunk_rest(seq__14080_14148__$1);
var G__14151 = c__7320__auto___14149;
var G__14152 = cljs.core.count(c__7320__auto___14149);
var G__14153 = (0);
seq__14080_14134 = G__14150;
chunk__14081_14135 = G__14151;
count__14082_14136 = G__14152;
i__14083_14137 = G__14153;
continue;
} else {
var map__14086_14154 = cljs.core.first(seq__14080_14148__$1);
var map__14086_14155__$1 = ((((!((map__14086_14154 == null)))?((((map__14086_14154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14086_14154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14086_14154):map__14086_14154);
var gline_14156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14086_14155__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14086_14155__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14158 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14086_14155__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14156], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14080_14134,chunk__14081_14135,count__14082_14136,i__14083_14137,seq__14075_14127,chunk__14076_14128,count__14077_14129,i__14078_14130,seq__14070_14120,chunk__14071_14121,count__14072_14122,i__14073_14123,map__14086_14154,map__14086_14155__$1,gline_14156,gcol_14157,name_14158,seq__14080_14148__$1,temp__4425__auto___14147,vec__14079_14131,column_14132,column_info_14133,vec__14074_14124,line_14125,columns_14126,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14157], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14125,new cljs.core.Keyword(null,"col","col",-1959363084),column_14132,new cljs.core.Keyword(null,"name","name",1843675177),name_14158], null));
});})(seq__14080_14134,chunk__14081_14135,count__14082_14136,i__14083_14137,seq__14075_14127,chunk__14076_14128,count__14077_14129,i__14078_14130,seq__14070_14120,chunk__14071_14121,count__14072_14122,i__14073_14123,map__14086_14154,map__14086_14155__$1,gline_14156,gcol_14157,name_14158,seq__14080_14148__$1,temp__4425__auto___14147,vec__14079_14131,column_14132,column_info_14133,vec__14074_14124,line_14125,columns_14126,inverted))
,cljs.core.sorted_map()));

var G__14159 = cljs.core.next(seq__14080_14148__$1);
var G__14160 = null;
var G__14161 = (0);
var G__14162 = (0);
seq__14080_14134 = G__14159;
chunk__14081_14135 = G__14160;
count__14082_14136 = G__14161;
i__14083_14137 = G__14162;
continue;
}
} else {
}
}
break;
}

var G__14163 = seq__14075_14127;
var G__14164 = chunk__14076_14128;
var G__14165 = count__14077_14129;
var G__14166 = (i__14078_14130 + (1));
seq__14075_14127 = G__14163;
chunk__14076_14128 = G__14164;
count__14077_14129 = G__14165;
i__14078_14130 = G__14166;
continue;
} else {
var temp__4425__auto___14167 = cljs.core.seq(seq__14075_14127);
if(temp__4425__auto___14167){
var seq__14075_14168__$1 = temp__4425__auto___14167;
if(cljs.core.chunked_seq_QMARK_(seq__14075_14168__$1)){
var c__7320__auto___14169 = cljs.core.chunk_first(seq__14075_14168__$1);
var G__14170 = cljs.core.chunk_rest(seq__14075_14168__$1);
var G__14171 = c__7320__auto___14169;
var G__14172 = cljs.core.count(c__7320__auto___14169);
var G__14173 = (0);
seq__14075_14127 = G__14170;
chunk__14076_14128 = G__14171;
count__14077_14129 = G__14172;
i__14078_14130 = G__14173;
continue;
} else {
var vec__14088_14174 = cljs.core.first(seq__14075_14168__$1);
var column_14175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14088_14174,(0),null);
var column_info_14176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14088_14174,(1),null);
var seq__14089_14177 = cljs.core.seq(column_info_14176);
var chunk__14090_14178 = null;
var count__14091_14179 = (0);
var i__14092_14180 = (0);
while(true){
if((i__14092_14180 < count__14091_14179)){
var map__14093_14181 = chunk__14090_14178.cljs$core$IIndexed$_nth$arity$2(null,i__14092_14180);
var map__14093_14182__$1 = ((((!((map__14093_14181 == null)))?((((map__14093_14181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14093_14181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14093_14181):map__14093_14181);
var gline_14183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14093_14182__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14184 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14093_14182__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14185 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14093_14182__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14183], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14089_14177,chunk__14090_14178,count__14091_14179,i__14092_14180,seq__14075_14127,chunk__14076_14128,count__14077_14129,i__14078_14130,seq__14070_14120,chunk__14071_14121,count__14072_14122,i__14073_14123,map__14093_14181,map__14093_14182__$1,gline_14183,gcol_14184,name_14185,vec__14088_14174,column_14175,column_info_14176,seq__14075_14168__$1,temp__4425__auto___14167,vec__14074_14124,line_14125,columns_14126,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14184], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14125,new cljs.core.Keyword(null,"col","col",-1959363084),column_14175,new cljs.core.Keyword(null,"name","name",1843675177),name_14185], null));
});})(seq__14089_14177,chunk__14090_14178,count__14091_14179,i__14092_14180,seq__14075_14127,chunk__14076_14128,count__14077_14129,i__14078_14130,seq__14070_14120,chunk__14071_14121,count__14072_14122,i__14073_14123,map__14093_14181,map__14093_14182__$1,gline_14183,gcol_14184,name_14185,vec__14088_14174,column_14175,column_info_14176,seq__14075_14168__$1,temp__4425__auto___14167,vec__14074_14124,line_14125,columns_14126,inverted))
,cljs.core.sorted_map()));

var G__14186 = seq__14089_14177;
var G__14187 = chunk__14090_14178;
var G__14188 = count__14091_14179;
var G__14189 = (i__14092_14180 + (1));
seq__14089_14177 = G__14186;
chunk__14090_14178 = G__14187;
count__14091_14179 = G__14188;
i__14092_14180 = G__14189;
continue;
} else {
var temp__4425__auto___14190__$1 = cljs.core.seq(seq__14089_14177);
if(temp__4425__auto___14190__$1){
var seq__14089_14191__$1 = temp__4425__auto___14190__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14089_14191__$1)){
var c__7320__auto___14192 = cljs.core.chunk_first(seq__14089_14191__$1);
var G__14193 = cljs.core.chunk_rest(seq__14089_14191__$1);
var G__14194 = c__7320__auto___14192;
var G__14195 = cljs.core.count(c__7320__auto___14192);
var G__14196 = (0);
seq__14089_14177 = G__14193;
chunk__14090_14178 = G__14194;
count__14091_14179 = G__14195;
i__14092_14180 = G__14196;
continue;
} else {
var map__14095_14197 = cljs.core.first(seq__14089_14191__$1);
var map__14095_14198__$1 = ((((!((map__14095_14197 == null)))?((((map__14095_14197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14095_14197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14095_14197):map__14095_14197);
var gline_14199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095_14198__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14200 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095_14198__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14095_14198__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14199], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14089_14177,chunk__14090_14178,count__14091_14179,i__14092_14180,seq__14075_14127,chunk__14076_14128,count__14077_14129,i__14078_14130,seq__14070_14120,chunk__14071_14121,count__14072_14122,i__14073_14123,map__14095_14197,map__14095_14198__$1,gline_14199,gcol_14200,name_14201,seq__14089_14191__$1,temp__4425__auto___14190__$1,vec__14088_14174,column_14175,column_info_14176,seq__14075_14168__$1,temp__4425__auto___14167,vec__14074_14124,line_14125,columns_14126,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14200], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14125,new cljs.core.Keyword(null,"col","col",-1959363084),column_14175,new cljs.core.Keyword(null,"name","name",1843675177),name_14201], null));
});})(seq__14089_14177,chunk__14090_14178,count__14091_14179,i__14092_14180,seq__14075_14127,chunk__14076_14128,count__14077_14129,i__14078_14130,seq__14070_14120,chunk__14071_14121,count__14072_14122,i__14073_14123,map__14095_14197,map__14095_14198__$1,gline_14199,gcol_14200,name_14201,seq__14089_14191__$1,temp__4425__auto___14190__$1,vec__14088_14174,column_14175,column_info_14176,seq__14075_14168__$1,temp__4425__auto___14167,vec__14074_14124,line_14125,columns_14126,inverted))
,cljs.core.sorted_map()));

var G__14202 = cljs.core.next(seq__14089_14191__$1);
var G__14203 = null;
var G__14204 = (0);
var G__14205 = (0);
seq__14089_14177 = G__14202;
chunk__14090_14178 = G__14203;
count__14091_14179 = G__14204;
i__14092_14180 = G__14205;
continue;
}
} else {
}
}
break;
}

var G__14206 = cljs.core.next(seq__14075_14168__$1);
var G__14207 = null;
var G__14208 = (0);
var G__14209 = (0);
seq__14075_14127 = G__14206;
chunk__14076_14128 = G__14207;
count__14077_14129 = G__14208;
i__14078_14130 = G__14209;
continue;
}
} else {
}
}
break;
}

var G__14210 = seq__14070_14120;
var G__14211 = chunk__14071_14121;
var G__14212 = count__14072_14122;
var G__14213 = (i__14073_14123 + (1));
seq__14070_14120 = G__14210;
chunk__14071_14121 = G__14211;
count__14072_14122 = G__14212;
i__14073_14123 = G__14213;
continue;
} else {
var temp__4425__auto___14214 = cljs.core.seq(seq__14070_14120);
if(temp__4425__auto___14214){
var seq__14070_14215__$1 = temp__4425__auto___14214;
if(cljs.core.chunked_seq_QMARK_(seq__14070_14215__$1)){
var c__7320__auto___14216 = cljs.core.chunk_first(seq__14070_14215__$1);
var G__14217 = cljs.core.chunk_rest(seq__14070_14215__$1);
var G__14218 = c__7320__auto___14216;
var G__14219 = cljs.core.count(c__7320__auto___14216);
var G__14220 = (0);
seq__14070_14120 = G__14217;
chunk__14071_14121 = G__14218;
count__14072_14122 = G__14219;
i__14073_14123 = G__14220;
continue;
} else {
var vec__14097_14221 = cljs.core.first(seq__14070_14215__$1);
var line_14222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14097_14221,(0),null);
var columns_14223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14097_14221,(1),null);
var seq__14098_14224 = cljs.core.seq(columns_14223);
var chunk__14099_14225 = null;
var count__14100_14226 = (0);
var i__14101_14227 = (0);
while(true){
if((i__14101_14227 < count__14100_14226)){
var vec__14102_14228 = chunk__14099_14225.cljs$core$IIndexed$_nth$arity$2(null,i__14101_14227);
var column_14229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14102_14228,(0),null);
var column_info_14230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14102_14228,(1),null);
var seq__14103_14231 = cljs.core.seq(column_info_14230);
var chunk__14104_14232 = null;
var count__14105_14233 = (0);
var i__14106_14234 = (0);
while(true){
if((i__14106_14234 < count__14105_14233)){
var map__14107_14235 = chunk__14104_14232.cljs$core$IIndexed$_nth$arity$2(null,i__14106_14234);
var map__14107_14236__$1 = ((((!((map__14107_14235 == null)))?((((map__14107_14235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14107_14235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14107_14235):map__14107_14235);
var gline_14237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14107_14236__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14107_14236__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14239 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14107_14236__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14237], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14103_14231,chunk__14104_14232,count__14105_14233,i__14106_14234,seq__14098_14224,chunk__14099_14225,count__14100_14226,i__14101_14227,seq__14070_14120,chunk__14071_14121,count__14072_14122,i__14073_14123,map__14107_14235,map__14107_14236__$1,gline_14237,gcol_14238,name_14239,vec__14102_14228,column_14229,column_info_14230,vec__14097_14221,line_14222,columns_14223,seq__14070_14215__$1,temp__4425__auto___14214,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14238], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14222,new cljs.core.Keyword(null,"col","col",-1959363084),column_14229,new cljs.core.Keyword(null,"name","name",1843675177),name_14239], null));
});})(seq__14103_14231,chunk__14104_14232,count__14105_14233,i__14106_14234,seq__14098_14224,chunk__14099_14225,count__14100_14226,i__14101_14227,seq__14070_14120,chunk__14071_14121,count__14072_14122,i__14073_14123,map__14107_14235,map__14107_14236__$1,gline_14237,gcol_14238,name_14239,vec__14102_14228,column_14229,column_info_14230,vec__14097_14221,line_14222,columns_14223,seq__14070_14215__$1,temp__4425__auto___14214,inverted))
,cljs.core.sorted_map()));

var G__14240 = seq__14103_14231;
var G__14241 = chunk__14104_14232;
var G__14242 = count__14105_14233;
var G__14243 = (i__14106_14234 + (1));
seq__14103_14231 = G__14240;
chunk__14104_14232 = G__14241;
count__14105_14233 = G__14242;
i__14106_14234 = G__14243;
continue;
} else {
var temp__4425__auto___14244__$1 = cljs.core.seq(seq__14103_14231);
if(temp__4425__auto___14244__$1){
var seq__14103_14245__$1 = temp__4425__auto___14244__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14103_14245__$1)){
var c__7320__auto___14246 = cljs.core.chunk_first(seq__14103_14245__$1);
var G__14247 = cljs.core.chunk_rest(seq__14103_14245__$1);
var G__14248 = c__7320__auto___14246;
var G__14249 = cljs.core.count(c__7320__auto___14246);
var G__14250 = (0);
seq__14103_14231 = G__14247;
chunk__14104_14232 = G__14248;
count__14105_14233 = G__14249;
i__14106_14234 = G__14250;
continue;
} else {
var map__14109_14251 = cljs.core.first(seq__14103_14245__$1);
var map__14109_14252__$1 = ((((!((map__14109_14251 == null)))?((((map__14109_14251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14109_14251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14109_14251):map__14109_14251);
var gline_14253 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14109_14252__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14109_14252__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14109_14252__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14253], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14103_14231,chunk__14104_14232,count__14105_14233,i__14106_14234,seq__14098_14224,chunk__14099_14225,count__14100_14226,i__14101_14227,seq__14070_14120,chunk__14071_14121,count__14072_14122,i__14073_14123,map__14109_14251,map__14109_14252__$1,gline_14253,gcol_14254,name_14255,seq__14103_14245__$1,temp__4425__auto___14244__$1,vec__14102_14228,column_14229,column_info_14230,vec__14097_14221,line_14222,columns_14223,seq__14070_14215__$1,temp__4425__auto___14214,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14254], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14222,new cljs.core.Keyword(null,"col","col",-1959363084),column_14229,new cljs.core.Keyword(null,"name","name",1843675177),name_14255], null));
});})(seq__14103_14231,chunk__14104_14232,count__14105_14233,i__14106_14234,seq__14098_14224,chunk__14099_14225,count__14100_14226,i__14101_14227,seq__14070_14120,chunk__14071_14121,count__14072_14122,i__14073_14123,map__14109_14251,map__14109_14252__$1,gline_14253,gcol_14254,name_14255,seq__14103_14245__$1,temp__4425__auto___14244__$1,vec__14102_14228,column_14229,column_info_14230,vec__14097_14221,line_14222,columns_14223,seq__14070_14215__$1,temp__4425__auto___14214,inverted))
,cljs.core.sorted_map()));

var G__14256 = cljs.core.next(seq__14103_14245__$1);
var G__14257 = null;
var G__14258 = (0);
var G__14259 = (0);
seq__14103_14231 = G__14256;
chunk__14104_14232 = G__14257;
count__14105_14233 = G__14258;
i__14106_14234 = G__14259;
continue;
}
} else {
}
}
break;
}

var G__14260 = seq__14098_14224;
var G__14261 = chunk__14099_14225;
var G__14262 = count__14100_14226;
var G__14263 = (i__14101_14227 + (1));
seq__14098_14224 = G__14260;
chunk__14099_14225 = G__14261;
count__14100_14226 = G__14262;
i__14101_14227 = G__14263;
continue;
} else {
var temp__4425__auto___14264__$1 = cljs.core.seq(seq__14098_14224);
if(temp__4425__auto___14264__$1){
var seq__14098_14265__$1 = temp__4425__auto___14264__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14098_14265__$1)){
var c__7320__auto___14266 = cljs.core.chunk_first(seq__14098_14265__$1);
var G__14267 = cljs.core.chunk_rest(seq__14098_14265__$1);
var G__14268 = c__7320__auto___14266;
var G__14269 = cljs.core.count(c__7320__auto___14266);
var G__14270 = (0);
seq__14098_14224 = G__14267;
chunk__14099_14225 = G__14268;
count__14100_14226 = G__14269;
i__14101_14227 = G__14270;
continue;
} else {
var vec__14111_14271 = cljs.core.first(seq__14098_14265__$1);
var column_14272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14111_14271,(0),null);
var column_info_14273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14111_14271,(1),null);
var seq__14112_14274 = cljs.core.seq(column_info_14273);
var chunk__14113_14275 = null;
var count__14114_14276 = (0);
var i__14115_14277 = (0);
while(true){
if((i__14115_14277 < count__14114_14276)){
var map__14116_14278 = chunk__14113_14275.cljs$core$IIndexed$_nth$arity$2(null,i__14115_14277);
var map__14116_14279__$1 = ((((!((map__14116_14278 == null)))?((((map__14116_14278.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14116_14278.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14116_14278):map__14116_14278);
var gline_14280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14116_14279__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14116_14279__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14116_14279__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14280], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14112_14274,chunk__14113_14275,count__14114_14276,i__14115_14277,seq__14098_14224,chunk__14099_14225,count__14100_14226,i__14101_14227,seq__14070_14120,chunk__14071_14121,count__14072_14122,i__14073_14123,map__14116_14278,map__14116_14279__$1,gline_14280,gcol_14281,name_14282,vec__14111_14271,column_14272,column_info_14273,seq__14098_14265__$1,temp__4425__auto___14264__$1,vec__14097_14221,line_14222,columns_14223,seq__14070_14215__$1,temp__4425__auto___14214,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14281], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14222,new cljs.core.Keyword(null,"col","col",-1959363084),column_14272,new cljs.core.Keyword(null,"name","name",1843675177),name_14282], null));
});})(seq__14112_14274,chunk__14113_14275,count__14114_14276,i__14115_14277,seq__14098_14224,chunk__14099_14225,count__14100_14226,i__14101_14227,seq__14070_14120,chunk__14071_14121,count__14072_14122,i__14073_14123,map__14116_14278,map__14116_14279__$1,gline_14280,gcol_14281,name_14282,vec__14111_14271,column_14272,column_info_14273,seq__14098_14265__$1,temp__4425__auto___14264__$1,vec__14097_14221,line_14222,columns_14223,seq__14070_14215__$1,temp__4425__auto___14214,inverted))
,cljs.core.sorted_map()));

var G__14283 = seq__14112_14274;
var G__14284 = chunk__14113_14275;
var G__14285 = count__14114_14276;
var G__14286 = (i__14115_14277 + (1));
seq__14112_14274 = G__14283;
chunk__14113_14275 = G__14284;
count__14114_14276 = G__14285;
i__14115_14277 = G__14286;
continue;
} else {
var temp__4425__auto___14287__$2 = cljs.core.seq(seq__14112_14274);
if(temp__4425__auto___14287__$2){
var seq__14112_14288__$1 = temp__4425__auto___14287__$2;
if(cljs.core.chunked_seq_QMARK_(seq__14112_14288__$1)){
var c__7320__auto___14289 = cljs.core.chunk_first(seq__14112_14288__$1);
var G__14290 = cljs.core.chunk_rest(seq__14112_14288__$1);
var G__14291 = c__7320__auto___14289;
var G__14292 = cljs.core.count(c__7320__auto___14289);
var G__14293 = (0);
seq__14112_14274 = G__14290;
chunk__14113_14275 = G__14291;
count__14114_14276 = G__14292;
i__14115_14277 = G__14293;
continue;
} else {
var map__14118_14294 = cljs.core.first(seq__14112_14288__$1);
var map__14118_14295__$1 = ((((!((map__14118_14294 == null)))?((((map__14118_14294.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14118_14294.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14118_14294):map__14118_14294);
var gline_14296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14118_14295__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_14297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14118_14295__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_14298 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14118_14295__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_14296], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14112_14274,chunk__14113_14275,count__14114_14276,i__14115_14277,seq__14098_14224,chunk__14099_14225,count__14100_14226,i__14101_14227,seq__14070_14120,chunk__14071_14121,count__14072_14122,i__14073_14123,map__14118_14294,map__14118_14295__$1,gline_14296,gcol_14297,name_14298,seq__14112_14288__$1,temp__4425__auto___14287__$2,vec__14111_14271,column_14272,column_info_14273,seq__14098_14265__$1,temp__4425__auto___14264__$1,vec__14097_14221,line_14222,columns_14223,seq__14070_14215__$1,temp__4425__auto___14214,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_14297], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_14222,new cljs.core.Keyword(null,"col","col",-1959363084),column_14272,new cljs.core.Keyword(null,"name","name",1843675177),name_14298], null));
});})(seq__14112_14274,chunk__14113_14275,count__14114_14276,i__14115_14277,seq__14098_14224,chunk__14099_14225,count__14100_14226,i__14101_14227,seq__14070_14120,chunk__14071_14121,count__14072_14122,i__14073_14123,map__14118_14294,map__14118_14295__$1,gline_14296,gcol_14297,name_14298,seq__14112_14288__$1,temp__4425__auto___14287__$2,vec__14111_14271,column_14272,column_info_14273,seq__14098_14265__$1,temp__4425__auto___14264__$1,vec__14097_14221,line_14222,columns_14223,seq__14070_14215__$1,temp__4425__auto___14214,inverted))
,cljs.core.sorted_map()));

var G__14299 = cljs.core.next(seq__14112_14288__$1);
var G__14300 = null;
var G__14301 = (0);
var G__14302 = (0);
seq__14112_14274 = G__14299;
chunk__14113_14275 = G__14300;
count__14114_14276 = G__14301;
i__14115_14277 = G__14302;
continue;
}
} else {
}
}
break;
}

var G__14303 = cljs.core.next(seq__14098_14265__$1);
var G__14304 = null;
var G__14305 = (0);
var G__14306 = (0);
seq__14098_14224 = G__14303;
chunk__14099_14225 = G__14304;
count__14100_14226 = G__14305;
i__14101_14227 = G__14306;
continue;
}
} else {
}
}
break;
}

var G__14307 = cljs.core.next(seq__14070_14215__$1);
var G__14308 = null;
var G__14309 = (0);
var G__14310 = (0);
seq__14070_14120 = G__14307;
chunk__14071_14121 = G__14308;
count__14072_14122 = G__14309;
i__14073_14123 = G__14310;
continue;
}
} else {
}
}
break;
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(inverted) : cljs.core.deref.call(null,inverted));
});
