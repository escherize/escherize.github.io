goog.provide('reitit.impl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('meta_merge.core');
goog.require('reitit.trie');
goog.require('reitit.exception');
reitit.impl.parse = (function reitit$impl$parse(path,opts){
var path__$1 = reitit.trie.normalize(path,opts);
var path_parts = reitit.trie.split_path(path__$1,opts);
var path_params = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,path_parts)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),path_parts,new cljs.core.Keyword(null,"path","path",-188191168),path__$1], null);
});
reitit.impl.wild_path_QMARK_ = (function reitit$impl$wild_path_QMARK_(path,opts){
return cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(reitit.impl.parse(path,opts))));
});
reitit.impl.__GT_wild_route_QMARK_ = (function reitit$impl$__GT_wild_route_QMARK_(opts){
return (function (p__44069){
var vec__44070 = p__44069;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44070,(0),null);
return cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(reitit.impl.parse(path,opts))));
});
});
/**
 * Applies a function to every value of a map, updates the value if not nil.
 *   Also works on vectors. Maintains key for maps, order for vectors.
 */
reitit.impl.maybe_map_values = (function reitit$impl$maybe_map_values(f,coll){
return cljs.core.reduce_kv((function (coll__$1,k,v){
var temp__5737__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
if((temp__5737__auto__ == null)){
return coll__$1;
} else {
var v_SINGLEQUOTE_ = temp__5737__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll__$1,k,v_SINGLEQUOTE_);
}
}),coll,coll);
});
reitit.impl.walk = (function reitit$impl$walk(raw_routes,p__44075){
var map__44076 = p__44075;
var map__44076__$1 = (((((!((map__44076 == null))))?(((((map__44076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44076):map__44076);
var opts = map__44076__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44076__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44076__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__44076__$1,new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.PersistentVector.EMPTY);
var expand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44076__$1,new cljs.core.Keyword(null,"expand","expand",595248157));
var walk_many = ((function (map__44076,map__44076__$1,opts,path,data,routes,expand){
return (function reitit$impl$walk_$_walk_many(p,m,r){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__44076,map__44076__$1,opts,path,data,routes,expand){
return (function (p1__44073_SHARP_,p2__44074_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__44073_SHARP_,walk_one(p,m,p2__44074_SHARP_));
});})(map__44076,map__44076__$1,opts,path,data,routes,expand))
,cljs.core.PersistentVector.EMPTY,r);
});})(map__44076,map__44076__$1,opts,path,data,routes,expand))
;
var walk_one = ((function (map__44076,map__44076__$1,opts,path,data,routes,expand){
return (function reitit$impl$walk_$_walk_one(pacc,macc,routes__$1){
if(cljs.core.vector_QMARK_(cljs.core.first(routes__$1))){
return walk_many(pacc,macc,routes__$1);
} else {
if(typeof cljs.core.first(routes__$1) === 'string'){
var vec__44087 = routes__$1;
var seq__44088 = cljs.core.seq(vec__44087);
var first__44089 = cljs.core.first(seq__44088);
var seq__44088__$1 = cljs.core.next(seq__44088);
var path__$1 = first__44089;
var vec__44090 = seq__44088__$1;
var maybe_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44090,(0),null);
var args = vec__44090;
var vec__44093 = ((((cljs.core.vector_QMARK_(maybe_arg)) || (((cljs.core.sequential_QMARK_(maybe_arg)) && (cljs.core.sequential_QMARK_(cljs.core.first(maybe_arg))))) || ((maybe_arg == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_arg,cljs.core.rest(args)], null));
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44093,(0),null);
var childs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44093,(1),null);
var macc__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(macc,(expand.cljs$core$IFn$_invoke$arity$2 ? expand.cljs$core$IFn$_invoke$arity$2(data__$1,opts) : expand.call(null,data__$1,opts)));
var child_routes = walk_many([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,childs));
if(cljs.core.seq(childs)){
return cljs.core.seq(child_routes);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1], null)], null);
}
} else {
return null;
}
}
});})(map__44076,map__44076__$1,opts,path,data,routes,expand))
;
return walk_one(path,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,data),raw_routes);
});
reitit.impl.map_data = (function reitit$impl$map_data(f,routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__44096){
var vec__44097 = p__44096;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44097,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44097,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p,ds) : f.call(null,p,ds))], null);
}),routes);
});
reitit.impl.merge_data = (function reitit$impl$merge_data(p,x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__44100){
var vec__44101 = p__44100;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44101,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44101,(1),null);
try{return meta_merge.core.meta_merge.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));
}catch (e44104){if((e44104 instanceof Error)){
var e = e44104;
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.impl","merge-data","reitit.impl/merge-data",-588218417),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),p,new cljs.core.Keyword(null,"left","left",-399115937),acc,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]),new cljs.core.Keyword(null,"exception","exception",-335277064),e], null));
} else {
throw e44104;

}
}}),cljs.core.PersistentArrayMap.EMPTY,x);
});
reitit.impl.resolve_routes = (function reitit$impl$resolve_routes(raw_routes,p__44106){
var map__44107 = p__44106;
var map__44107__$1 = (((((!((map__44107 == null))))?(((((map__44107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44107):map__44107);
var opts = map__44107__$1;
var coerce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44107__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504));
var G__44109 = reitit.impl.map_data(reitit.impl.merge_data,reitit.impl.walk(raw_routes,opts));
if(cljs.core.truth_(coerce)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(((function (G__44109,map__44107,map__44107__$1,opts,coerce){
return (function (p1__44105_SHARP_){
return (coerce.cljs$core$IFn$_invoke$arity$2 ? coerce.cljs$core$IFn$_invoke$arity$2(p1__44105_SHARP_,opts) : coerce.call(null,p1__44105_SHARP_,opts));
});})(G__44109,map__44107,map__44107__$1,opts,coerce))
),G__44109);
} else {
return G__44109;
}
});
reitit.impl.path_conflicting_routes = (function reitit$impl$path_conflicting_routes(routes,opts){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (index,route){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__44110_SHARP_){
return reitit.trie.conflicting_paths_QMARK_(cljs.core.first(route),cljs.core.first(p1__44110_SHARP_),opts);
})),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(routes,(index + (1))))], null);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.second))),routes));
});
reitit.impl.conflicting_paths = (function reitit$impl$conflicting_paths(conflicts){
return cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4523__auto__ = (function reitit$impl$conflicting_paths_$_iter__44111(s__44112){
return (new cljs.core.LazySeq(null,(function (){
var s__44112__$1 = s__44112;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__44112__$1);
if(temp__5735__auto__){
var s__44112__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44112__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__44112__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__44114 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__44113 = (0);
while(true){
if((i__44113 < size__4522__auto__)){
var vec__44115 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__44113);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44115,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44115,(1),null);
cljs.core.chunk_append(b__44114,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)));

var G__44163 = (i__44113 + (1));
i__44113 = G__44163;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44114),reitit$impl$conflicting_paths_$_iter__44111(cljs.core.chunk_rest(s__44112__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44114),null);
}
} else {
var vec__44118 = cljs.core.first(s__44112__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44118,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44118,(1),null);
return cljs.core.cons(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)),reitit$impl$conflicting_paths_$_iter__44111(cljs.core.rest(s__44112__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(conflicts);
})()));
});
reitit.impl.name_conflicting_routes = (function reitit$impl$name_conflicting_routes(routes){
var G__44121 = routes;
var G__44121__$1 = (((G__44121 == null))?null:cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.second),G__44121));
var G__44121__$2 = (((G__44121__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.first),G__44121__$1));
var G__44121__$3 = (((G__44121__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pos_QMARK_,cljs.core.count,cljs.core.butlast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second], 0)),G__44121__$2));
var G__44121__$4 = (((G__44121__$3 == null))?null:cljs.core.seq(G__44121__$3));
var G__44121__$5 = (((G__44121__$4 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__44121,G__44121__$1,G__44121__$2,G__44121__$3,G__44121__$4){
return (function (p__44122){
var vec__44123 = p__44122;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44123,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44123,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set(v)], null);
});})(G__44121,G__44121__$1,G__44121__$2,G__44121__$3,G__44121__$4))
,G__44121__$4));
if((G__44121__$5 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44121__$5);
}
});
reitit.impl.find_names = (function reitit$impl$find_names(routes,_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__44126_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__44126_SHARP_));
})),routes);
});
reitit.impl.compile_route = (function reitit$impl$compile_route(p__44127,p__44128){
var vec__44129 = p__44127;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44129,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44129,(1),null);
var route = vec__44129;
var map__44132 = p__44128;
var map__44132__$1 = (((((!((map__44132 == null))))?(((((map__44132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44132):map__44132);
var opts = map__44132__$1;
var compile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44132__$1,new cljs.core.Keyword(null,"compile","compile",608186429));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,m,(cljs.core.truth_(compile)?(compile.cljs$core$IFn$_invoke$arity$2 ? compile.cljs$core$IFn$_invoke$arity$2(route,opts) : compile.call(null,route,opts)):null)], null);
});
reitit.impl.compile_routes = (function reitit$impl$compile_routes(routes,opts){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__44134_SHARP_){
return reitit.impl.compile_route(p1__44134_SHARP_,opts);
}),routes));
});
reitit.impl.uncompile_routes = (function reitit$impl$uncompile_routes(routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,(2))),routes);
});
reitit.impl.path_for = (function reitit$impl$path_for(route,path_params){
if(cljs.core.truth_(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route))){
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){
if(typeof part === 'string'){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,part);
} else {
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path_params,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(part));
if(cljs.core.truth_(temp__5733__auto__)){
var p = temp__5733__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return cljs.core.reduced(null);
}
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(route));
if(cljs.core.truth_(temp__5733__auto__)){
var parts = temp__5733__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,parts);
} else {
return null;
}
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route);
}
});
reitit.impl.throw_on_missing_path_params = (function reitit$impl$throw_on_missing_path_params(template,required,path_params){
if(cljs.core.every_QMARK_((function (p1__44135_SHARP_){
return cljs.core.contains_QMARK_(path_params,p1__44135_SHARP_);
}),required)){
return null;
} else {
var defined = cljs.core.set(cljs.core.keys(path_params));
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required,defined);
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(["missing path-params for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(template)," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"required","required",1807647006),required], null));
}
});
reitit.impl.fast_assoc = (function reitit$impl$fast_assoc(a,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,v);
});
reitit.impl.fast_map = (function reitit$impl$fast_map(m){
return m;
});
reitit.impl.fast_get = (function reitit$impl$fast_get(m,k){
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k));
});
reitit.impl.strip_nils = (function reitit$impl$strip_nils(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),m));
});
reitit.impl.url_encode = (function reitit$impl$url_encode(s){
if(cljs.core.truth_(s)){
return encodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.maybe_url_decode = (function reitit$impl$maybe_url_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.url_decode = (function reitit$impl$url_decode(s){
var or__4131__auto__ = reitit.impl.maybe_url_decode(s);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return s;
}
});
reitit.impl.form_encode = (function reitit$impl$form_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(encodeURIComponent(s),"%20","+");
} else {
return null;
}
});
reitit.impl.form_decode = (function reitit$impl$form_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(clojure.string.replace(s,"+"," "));
} else {
return null;
}
});
/**
 * URL-decodes maps and vectors
 */
reitit.impl.url_decode_coll = (function reitit$impl$url_decode_coll(coll){
return reitit.impl.maybe_map_values(reitit.impl.maybe_url_decode,coll);
});

/**
 * @interface
 */
reitit.impl.IntoString = function(){};

reitit.impl.into_string = (function reitit$impl$into_string(_){
if((((!((_ == null)))) && ((!((_.reitit$impl$IntoString$into_string$arity$1 == null)))))){
return _.reitit$impl$IntoString$into_string$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (reitit.impl.into_string[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (reitit.impl.into_string["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IntoString.into-string",_);
}
}
}
});

goog.object.set(reitit.impl.IntoString,"string",true);

var G__44137_44183 = reitit.impl.into_string;
var G__44138_44184 = "string";
var G__44139_44185 = ((function (G__44137_44183,G__44138_44184){
return (function (this$){
return this$;
});})(G__44137_44183,G__44138_44184))
;
goog.object.set(G__44137_44183,G__44138_44184,G__44139_44185);

cljs.core.Keyword.prototype.reitit$impl$IntoString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$impl$IntoString$into_string$arity$1 = (function (this$){
var this$__$1 = this;
var ns = cljs.core.namespace(this$__$1);
return [ns,(cljs.core.truth_(ns)?"/":null),cljs.core.name(this$__$1)].join('');
});

goog.object.set(reitit.impl.IntoString,"boolean",true);

var G__44140_44189 = reitit.impl.into_string;
var G__44141_44190 = "boolean";
var G__44142_44191 = ((function (G__44140_44189,G__44141_44190){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__44140_44189,G__44141_44190))
;
goog.object.set(G__44140_44189,G__44141_44190,G__44142_44191);

goog.object.set(reitit.impl.IntoString,"number",true);

var G__44143_44192 = reitit.impl.into_string;
var G__44144_44193 = "number";
var G__44145_44194 = ((function (G__44143_44192,G__44144_44193){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__44143_44192,G__44144_44193))
;
goog.object.set(G__44143_44192,G__44144_44193,G__44145_44194);

goog.object.set(reitit.impl.IntoString,"object",true);

var G__44146_44196 = reitit.impl.into_string;
var G__44147_44197 = "object";
var G__44148_44198 = ((function (G__44146_44196,G__44147_44197){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__44146_44196,G__44147_44197))
;
goog.object.set(G__44146_44196,G__44147_44197,G__44148_44198);

goog.object.set(reitit.impl.IntoString,"null",true);

var G__44149_44199 = reitit.impl.into_string;
var G__44150_44200 = "null";
var G__44151_44201 = ((function (G__44149_44199,G__44150_44200){
return (function (_){
return null;
});})(G__44149_44199,G__44150_44200))
;
goog.object.set(G__44149_44199,G__44150_44200,G__44151_44201);
/**
 * Convert parameters' values into URL-encoded strings, suitable for URL paths
 */
reitit.impl.path_params = (function reitit$impl$path_params(params){
return reitit.impl.maybe_map_values((function (p1__44152_SHARP_){
return reitit.impl.url_encode(reitit.impl.into_string(p1__44152_SHARP_));
}),params);
});
/**
 * shallow transform of query parameters into query string
 */
reitit.impl.query_string = (function reitit$impl$query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44153){
var vec__44154 = p__44153;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44154,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44154,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode(reitit.impl.into_string(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode(reitit.impl.into_string(v)))].join('');
}),params));
});

//# sourceMappingURL=reitit.impl.js.map
