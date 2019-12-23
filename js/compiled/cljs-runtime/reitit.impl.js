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
return (function (p__39068){
var vec__39069 = p__39068;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39069,(0),null);
return cljs.core.boolean$(cljs.core.seq(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(reitit.impl.parse(path,opts))));
});
});
/**
 * Applies a function to every value of a map, updates the value if not nil.
 *   Also works on vectors. Maintains key for maps, order for vectors.
 */
reitit.impl.maybe_map_values = (function reitit$impl$maybe_map_values(f,coll){
return cljs.core.reduce_kv((function (coll__$1,k,v){
var temp__5722__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
if((temp__5722__auto__ == null)){
return coll__$1;
} else {
var v_SINGLEQUOTE_ = temp__5722__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll__$1,k,v_SINGLEQUOTE_);
}
}),coll,coll);
});
reitit.impl.walk = (function reitit$impl$walk(raw_routes,p__39074){
var map__39075 = p__39074;
var map__39075__$1 = (((((!((map__39075 == null))))?(((((map__39075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39075):map__39075);
var opts = map__39075__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39075__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39075__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39075__$1,new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.PersistentVector.EMPTY);
var expand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39075__$1,new cljs.core.Keyword(null,"expand","expand",595248157));
var walk_many = ((function (map__39075,map__39075__$1,opts,path,data,routes,expand){
return (function reitit$impl$walk_$_walk_many(p,m,r){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__39075,map__39075__$1,opts,path,data,routes,expand){
return (function (p1__39072_SHARP_,p2__39073_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__39072_SHARP_,walk_one(p,m,p2__39073_SHARP_));
});})(map__39075,map__39075__$1,opts,path,data,routes,expand))
,cljs.core.PersistentVector.EMPTY,r);
});})(map__39075,map__39075__$1,opts,path,data,routes,expand))
;
var walk_one = ((function (map__39075,map__39075__$1,opts,path,data,routes,expand){
return (function reitit$impl$walk_$_walk_one(pacc,macc,routes__$1){
if(cljs.core.vector_QMARK_(cljs.core.first(routes__$1))){
return walk_many(pacc,macc,routes__$1);
} else {
if(typeof cljs.core.first(routes__$1) === 'string'){
var vec__39086 = routes__$1;
var seq__39087 = cljs.core.seq(vec__39086);
var first__39088 = cljs.core.first(seq__39087);
var seq__39087__$1 = cljs.core.next(seq__39087);
var path__$1 = first__39088;
var vec__39089 = seq__39087__$1;
var maybe_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39089,(0),null);
var args = vec__39089;
var vec__39092 = ((((cljs.core.vector_QMARK_(maybe_arg)) || (((cljs.core.sequential_QMARK_(maybe_arg)) && (cljs.core.sequential_QMARK_(cljs.core.first(maybe_arg))))) || ((maybe_arg == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_arg,cljs.core.rest(args)], null));
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39092,(0),null);
var childs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39092,(1),null);
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
});})(map__39075,map__39075__$1,opts,path,data,routes,expand))
;
return walk_one(path,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,data),raw_routes);
});
reitit.impl.map_data = (function reitit$impl$map_data(f,routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__39095){
var vec__39096 = p__39095;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39096,(0),null);
var ds = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39096,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p,ds) : f.call(null,p,ds))], null);
}),routes);
});
reitit.impl.merge_data = (function reitit$impl$merge_data(p,x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__39099){
var vec__39100 = p__39099;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39100,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39100,(1),null);
try{return meta_merge.core.meta_merge.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));
}catch (e39103){if((e39103 instanceof Error)){
var e = e39103;
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.impl","merge-data","reitit.impl/merge-data",-588218417),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),p,new cljs.core.Keyword(null,"left","left",-399115937),acc,new cljs.core.Keyword(null,"right","right",-452581833),cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]),new cljs.core.Keyword(null,"exception","exception",-335277064),e], null));
} else {
throw e39103;

}
}}),cljs.core.PersistentArrayMap.EMPTY,x);
});
reitit.impl.resolve_routes = (function reitit$impl$resolve_routes(raw_routes,p__39105){
var map__39106 = p__39105;
var map__39106__$1 = (((((!((map__39106 == null))))?(((((map__39106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39106):map__39106);
var opts = map__39106__$1;
var coerce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39106__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504));
var G__39108 = reitit.impl.map_data(reitit.impl.merge_data,reitit.impl.walk(raw_routes,opts));
if(cljs.core.truth_(coerce)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(((function (G__39108,map__39106,map__39106__$1,opts,coerce){
return (function (p1__39104_SHARP_){
return (coerce.cljs$core$IFn$_invoke$arity$2 ? coerce.cljs$core$IFn$_invoke$arity$2(p1__39104_SHARP_,opts) : coerce.call(null,p1__39104_SHARP_,opts));
});})(G__39108,map__39106,map__39106__$1,opts,coerce))
),G__39108);
} else {
return G__39108;
}
});
reitit.impl.path_conflicting_routes = (function reitit$impl$path_conflicting_routes(routes,opts){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (index,route){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__39109_SHARP_){
return reitit.trie.conflicting_paths_QMARK_(cljs.core.first(route),cljs.core.first(p1__39109_SHARP_),opts);
})),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(routes,(index + (1))))], null);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.second))),routes));
});
reitit.impl.conflicting_paths = (function reitit$impl$conflicting_paths(conflicts){
return cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4523__auto__ = (function reitit$impl$conflicting_paths_$_iter__39110(s__39111){
return (new cljs.core.LazySeq(null,(function (){
var s__39111__$1 = s__39111;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__39111__$1);
if(temp__5720__auto__){
var s__39111__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39111__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__39111__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__39113 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__39112 = (0);
while(true){
if((i__39112 < size__4522__auto__)){
var vec__39114 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__39112);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39114,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39114,(1),null);
cljs.core.chunk_append(b__39113,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)));

var G__39162 = (i__39112 + (1));
i__39112 = G__39162;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39113),reitit$impl$conflicting_paths_$_iter__39110(cljs.core.chunk_rest(s__39111__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39113),null);
}
} else {
var vec__39117 = cljs.core.first(s__39111__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39117,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39117,(1),null);
return cljs.core.cons(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)),reitit$impl$conflicting_paths_$_iter__39110(cljs.core.rest(s__39111__$2)));
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
var G__39120 = routes;
var G__39120__$1 = (((G__39120 == null))?null:cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.second),G__39120));
var G__39120__$2 = (((G__39120__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.first),G__39120__$1));
var G__39120__$3 = (((G__39120__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pos_QMARK_,cljs.core.count,cljs.core.butlast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second], 0)),G__39120__$2));
var G__39120__$4 = (((G__39120__$3 == null))?null:cljs.core.seq(G__39120__$3));
var G__39120__$5 = (((G__39120__$4 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__39120,G__39120__$1,G__39120__$2,G__39120__$3,G__39120__$4){
return (function (p__39121){
var vec__39122 = p__39121;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39122,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39122,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set(v)], null);
});})(G__39120,G__39120__$1,G__39120__$2,G__39120__$3,G__39120__$4))
,G__39120__$4));
if((G__39120__$5 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39120__$5);
}
});
reitit.impl.find_names = (function reitit$impl$find_names(routes,_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__39125_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__39125_SHARP_));
})),routes);
});
reitit.impl.compile_route = (function reitit$impl$compile_route(p__39126,p__39127){
var vec__39128 = p__39126;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39128,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39128,(1),null);
var route = vec__39128;
var map__39131 = p__39127;
var map__39131__$1 = (((((!((map__39131 == null))))?(((((map__39131.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39131.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39131):map__39131);
var opts = map__39131__$1;
var compile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39131__$1,new cljs.core.Keyword(null,"compile","compile",608186429));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,m,(cljs.core.truth_(compile)?(compile.cljs$core$IFn$_invoke$arity$2 ? compile.cljs$core$IFn$_invoke$arity$2(route,opts) : compile.call(null,route,opts)):null)], null);
});
reitit.impl.compile_routes = (function reitit$impl$compile_routes(routes,opts){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__39133_SHARP_){
return reitit.impl.compile_route(p1__39133_SHARP_,opts);
}),routes));
});
reitit.impl.uncompile_routes = (function reitit$impl$uncompile_routes(routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,(2))),routes);
});
reitit.impl.path_for = (function reitit$impl$path_for(route,path_params){
if(cljs.core.truth_(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route))){
var temp__5718__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,part){
if(typeof part === 'string'){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,part);
} else {
var temp__5718__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path_params,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(part));
if(cljs.core.truth_(temp__5718__auto__)){
var p = temp__5718__auto__;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,p);
} else {
return cljs.core.reduced(null);
}
}
}),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(route));
if(cljs.core.truth_(temp__5718__auto__)){
var parts = temp__5718__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,parts);
} else {
return null;
}
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route);
}
});
reitit.impl.throw_on_missing_path_params = (function reitit$impl$throw_on_missing_path_params(template,required,path_params){
if(cljs.core.every_QMARK_((function (p1__39134_SHARP_){
return cljs.core.contains_QMARK_(path_params,p1__39134_SHARP_);
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

var G__39136_39176 = reitit.impl.into_string;
var G__39137_39177 = "string";
var G__39138_39178 = ((function (G__39136_39176,G__39137_39177){
return (function (this$){
return this$;
});})(G__39136_39176,G__39137_39177))
;
goog.object.set(G__39136_39176,G__39137_39177,G__39138_39178);

cljs.core.Keyword.prototype.reitit$impl$IntoString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$impl$IntoString$into_string$arity$1 = (function (this$){
var this$__$1 = this;
var ns = cljs.core.namespace(this$__$1);
return [ns,(cljs.core.truth_(ns)?"/":null),cljs.core.name(this$__$1)].join('');
});

goog.object.set(reitit.impl.IntoString,"boolean",true);

var G__39139_39184 = reitit.impl.into_string;
var G__39140_39185 = "boolean";
var G__39141_39186 = ((function (G__39139_39184,G__39140_39185){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__39139_39184,G__39140_39185))
;
goog.object.set(G__39139_39184,G__39140_39185,G__39141_39186);

goog.object.set(reitit.impl.IntoString,"number",true);

var G__39142_39188 = reitit.impl.into_string;
var G__39143_39189 = "number";
var G__39144_39190 = ((function (G__39142_39188,G__39143_39189){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__39142_39188,G__39143_39189))
;
goog.object.set(G__39142_39188,G__39143_39189,G__39144_39190);

goog.object.set(reitit.impl.IntoString,"object",true);

var G__39145_39191 = reitit.impl.into_string;
var G__39146_39192 = "object";
var G__39147_39193 = ((function (G__39145_39191,G__39146_39192){
return (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});})(G__39145_39191,G__39146_39192))
;
goog.object.set(G__39145_39191,G__39146_39192,G__39147_39193);

goog.object.set(reitit.impl.IntoString,"null",true);

var G__39148_39194 = reitit.impl.into_string;
var G__39149_39195 = "null";
var G__39150_39196 = ((function (G__39148_39194,G__39149_39195){
return (function (_){
return null;
});})(G__39148_39194,G__39149_39195))
;
goog.object.set(G__39148_39194,G__39149_39195,G__39150_39196);
/**
 * Convert parameters' values into URL-encoded strings, suitable for URL paths
 */
reitit.impl.path_params = (function reitit$impl$path_params(params){
return reitit.impl.maybe_map_values((function (p1__39151_SHARP_){
return reitit.impl.url_encode(reitit.impl.into_string(p1__39151_SHARP_));
}),params);
});
/**
 * shallow transform of query parameters into query string
 */
reitit.impl.query_string = (function reitit$impl$query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39152){
var vec__39153 = p__39152;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39153,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39153,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode(reitit.impl.into_string(k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.form_encode(reitit.impl.into_string(v)))].join('');
}),params));
});

//# sourceMappingURL=reitit.impl.js.map
