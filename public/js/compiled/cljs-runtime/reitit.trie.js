goog.provide('reitit.trie');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reitit.exception');
reitit.trie.into_set = (function reitit$trie$into_set(x){
if(((cljs.core.set_QMARK_(x)) || (cljs.core.sequential_QMARK_(x)))){
return cljs.core.set(x);
} else {
if((x == null)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,x);

}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Wild = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34012,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__34056 = k34012;
var G__34056__$1 = (((G__34056 instanceof cljs.core.Keyword))?G__34056.fqn:null);
switch (G__34056__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34012,else__4388__auto__);

}
});

reitit.trie.Wild.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__34066){
var vec__34068 = p__34066;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34068,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34068,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.trie.Wild.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#reitit.trie.Wild{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

reitit.trie.Wild.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34011){
var self__ = this;
var G__34011__$1 = this;
return (new cljs.core.RecordIter((0),G__34011__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.trie.Wild.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.trie.Wild.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.trie.Wild.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

reitit.trie.Wild.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__34080 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1970880185 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__34080(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.trie.Wild.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34014,other34015){
var self__ = this;
var this34014__$1 = this;
return (((!((other34015 == null)))) && ((this34014__$1.constructor === other34015.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34014__$1.value,other34015.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34014__$1.__extmap,other34015.__extmap)));
});

reitit.trie.Wild.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

reitit.trie.Wild.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34011){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__34087 = cljs.core.keyword_identical_QMARK_;
var expr__34088 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__34090 = new cljs.core.Keyword(null,"value","value",305978217);
var G__34091 = expr__34088;
return (pred__34087.cljs$core$IFn$_invoke$arity$2 ? pred__34087.cljs$core$IFn$_invoke$arity$2(G__34090,G__34091) : pred__34087.call(null,G__34090,G__34091));
})())){
return (new reitit.trie.Wild(G__34011,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__34011),null));
}
});

reitit.trie.Wild.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
});

reitit.trie.Wild.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34011){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,G__34011,self__.__extmap,self__.__hash));
});

reitit.trie.Wild.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.trie.Wild.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

reitit.trie.Wild.cljs$lang$type = true;

reitit.trie.Wild.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.trie/Wild",null,(1),null));
});

reitit.trie.Wild.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.trie/Wild");
});

/**
 * Positional factory function for reitit.trie/Wild.
 */
reitit.trie.__GT_Wild = (function reitit$trie$__GT_Wild(value){
return (new reitit.trie.Wild(value,null,null,null));
});

/**
 * Factory function for reitit.trie/Wild, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Wild = (function reitit$trie$map__GT_Wild(G__34028){
var extmap__4424__auto__ = (function (){var G__34109 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34028,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__34028)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34109);
} else {
return G__34109;
}
})();
return (new reitit.trie.Wild(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__34028),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.CatchAll = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34111,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__34115 = k34111;
var G__34115__$1 = (((G__34115 instanceof cljs.core.Keyword))?G__34115.fqn:null);
switch (G__34115__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34111,else__4388__auto__);

}
});

reitit.trie.CatchAll.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__34118){
var vec__34120 = p__34118;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34120,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34120,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.trie.CatchAll.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#reitit.trie.CatchAll{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

reitit.trie.CatchAll.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34110){
var self__ = this;
var G__34110__$1 = this;
return (new cljs.core.RecordIter((0),G__34110__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.trie.CatchAll.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.trie.CatchAll.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.trie.CatchAll.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

reitit.trie.CatchAll.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__34128 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-987265038 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__34128(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.trie.CatchAll.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34112,other34113){
var self__ = this;
var this34112__$1 = this;
return (((!((other34113 == null)))) && ((this34112__$1.constructor === other34113.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34112__$1.value,other34113.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34112__$1.__extmap,other34113.__extmap)));
});

reitit.trie.CatchAll.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34110){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__34156 = cljs.core.keyword_identical_QMARK_;
var expr__34157 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__34159 = new cljs.core.Keyword(null,"value","value",305978217);
var G__34160 = expr__34157;
return (pred__34156.cljs$core$IFn$_invoke$arity$2 ? pred__34156.cljs$core$IFn$_invoke$arity$2(G__34159,G__34160) : pred__34156.call(null,G__34159,G__34160));
})())){
return (new reitit.trie.CatchAll(G__34110,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__34110),null));
}
});

reitit.trie.CatchAll.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
});

reitit.trie.CatchAll.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34110){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,G__34110,self__.__extmap,self__.__hash));
});

reitit.trie.CatchAll.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.trie.CatchAll.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

reitit.trie.CatchAll.cljs$lang$type = true;

reitit.trie.CatchAll.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.trie/CatchAll",null,(1),null));
});

reitit.trie.CatchAll.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.trie/CatchAll");
});

/**
 * Positional factory function for reitit.trie/CatchAll.
 */
reitit.trie.__GT_CatchAll = (function reitit$trie$__GT_CatchAll(value){
return (new reitit.trie.CatchAll(value,null,null,null));
});

/**
 * Factory function for reitit.trie/CatchAll, taking a map of keywords to field values.
 */
reitit.trie.map__GT_CatchAll = (function reitit$trie$map__GT_CatchAll(G__34114){
var extmap__4424__auto__ = (function (){var G__34174 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34114,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__34114)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34174);
} else {
return G__34174;
}
})();
return (new reitit.trie.CatchAll(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__34114),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Match = (function (params,data,__meta,__extmap,__hash){
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34177,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__34183 = k34177;
var G__34183__$1 = (((G__34183 instanceof cljs.core.Keyword))?G__34183.fqn:null);
switch (G__34183__$1) {
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34177,else__4388__auto__);

}
});

reitit.trie.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__34191){
var vec__34192 = p__34191;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34192,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34192,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.trie.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#reitit.trie.Match{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});

reitit.trie.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34176){
var self__ = this;
var G__34176__$1 = this;
return (new cljs.core.RecordIter((0),G__34176__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.trie.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.trie.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.trie.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

reitit.trie.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__34203 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1117628764 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__34203(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.trie.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34178,other34179){
var self__ = this;
var this34178__$1 = this;
return (((!((other34179 == null)))) && ((this34178__$1.constructor === other34179.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34178__$1.params,other34179.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34178__$1.data,other34179.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34178__$1.__extmap,other34179.__extmap)));
});

reitit.trie.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

reitit.trie.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34176){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__34228 = cljs.core.keyword_identical_QMARK_;
var expr__34229 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__34234 = new cljs.core.Keyword(null,"params","params",710516235);
var G__34235 = expr__34229;
return (pred__34228.cljs$core$IFn$_invoke$arity$2 ? pred__34228.cljs$core$IFn$_invoke$arity$2(G__34234,G__34235) : pred__34228.call(null,G__34234,G__34235));
})())){
return (new reitit.trie.Match(G__34176,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34237 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__34238 = expr__34229;
return (pred__34228.cljs$core$IFn$_invoke$arity$2 ? pred__34228.cljs$core$IFn$_invoke$arity$2(G__34237,G__34238) : pred__34228.call(null,G__34237,G__34238));
})())){
return (new reitit.trie.Match(self__.params,G__34176,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__34176),null));
}
}
});

reitit.trie.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
});

reitit.trie.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34176){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,G__34176,self__.__extmap,self__.__hash));
});

reitit.trie.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.trie.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
});

reitit.trie.Match.cljs$lang$type = true;

reitit.trie.Match.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.trie/Match",null,(1),null));
});

reitit.trie.Match.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.trie/Match");
});

/**
 * Positional factory function for reitit.trie/Match.
 */
reitit.trie.__GT_Match = (function reitit$trie$__GT_Match(params,data){
return (new reitit.trie.Match(params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Match, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Match = (function reitit$trie$map__GT_Match(G__34181){
var extmap__4424__auto__ = (function (){var G__34242 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34181,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__34181)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34242);
} else {
return G__34242;
}
})();
return (new reitit.trie.Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__34181),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__34181),null,cljs.core.not_empty(extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.trie.Node = (function (children,wilds,catch_all,params,data,__meta,__extmap,__hash){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.params = params;
this.data = data;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k34244,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__34250 = k34244;
var G__34250__$1 = (((G__34250 instanceof cljs.core.Keyword))?G__34250.fqn:null);
switch (G__34250__$1) {
case "children":
return self__.children;

break;
case "wilds":
return self__.wilds;

break;
case "catch-all":
return self__.catch_all;

break;
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34244,else__4388__auto__);

}
});

reitit.trie.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__34254){
var vec__34256 = p__34254;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34256,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34256,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.trie.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#reitit.trie.Node{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null))], null),self__.__extmap));
});

reitit.trie.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34243){
var self__ = this;
var G__34243__$1 = this;
return (new cljs.core.RecordIter((0),G__34243__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.trie.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.trie.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.trie.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

reitit.trie.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__34268 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (33004208 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__34268(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.trie.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34245,other34246){
var self__ = this;
var this34245__$1 = this;
return (((!((other34246 == null)))) && ((this34245__$1.constructor === other34246.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34245__$1.children,other34246.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34245__$1.wilds,other34246.wilds)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34245__$1.catch_all,other34246.catch_all)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34245__$1.params,other34246.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34245__$1.data,other34246.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34245__$1.__extmap,other34246.__extmap)));
});

reitit.trie.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"children","children",-940561982),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"wilds","wilds",132271223),null,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

reitit.trie.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__34243){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__34277 = cljs.core.keyword_identical_QMARK_;
var expr__34278 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__34280 = new cljs.core.Keyword(null,"children","children",-940561982);
var G__34281 = expr__34278;
return (pred__34277.cljs$core$IFn$_invoke$arity$2 ? pred__34277.cljs$core$IFn$_invoke$arity$2(G__34280,G__34281) : pred__34277.call(null,G__34280,G__34281));
})())){
return (new reitit.trie.Node(G__34243,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34284 = new cljs.core.Keyword(null,"wilds","wilds",132271223);
var G__34285 = expr__34278;
return (pred__34277.cljs$core$IFn$_invoke$arity$2 ? pred__34277.cljs$core$IFn$_invoke$arity$2(G__34284,G__34285) : pred__34277.call(null,G__34284,G__34285));
})())){
return (new reitit.trie.Node(self__.children,G__34243,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34286 = new cljs.core.Keyword(null,"catch-all","catch-all",1184112570);
var G__34287 = expr__34278;
return (pred__34277.cljs$core$IFn$_invoke$arity$2 ? pred__34277.cljs$core$IFn$_invoke$arity$2(G__34286,G__34287) : pred__34277.call(null,G__34286,G__34287));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,G__34243,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34289 = new cljs.core.Keyword(null,"params","params",710516235);
var G__34290 = expr__34278;
return (pred__34277.cljs$core$IFn$_invoke$arity$2 ? pred__34277.cljs$core$IFn$_invoke$arity$2(G__34289,G__34290) : pred__34277.call(null,G__34289,G__34290));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,G__34243,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__34292 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__34293 = expr__34278;
return (pred__34277.cljs$core$IFn$_invoke$arity$2 ? pred__34277.cljs$core$IFn$_invoke$arity$2(G__34292,G__34293) : pred__34277.call(null,G__34292,G__34293));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,G__34243,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__34243),null));
}
}
}
}
}
});

reitit.trie.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"wilds","wilds",132271223),self__.wilds,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),self__.catch_all,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
});

reitit.trie.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__34243){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,G__34243,self__.__extmap,self__.__hash));
});

reitit.trie.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.trie.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"wilds","wilds",1772802750,null),new cljs.core.Symbol(null,"catch-all","catch-all",-1470323199,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null)], null);
});

reitit.trie.Node.cljs$lang$type = true;

reitit.trie.Node.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.trie/Node",null,(1),null));
});

reitit.trie.Node.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.trie/Node");
});

/**
 * Positional factory function for reitit.trie/Node.
 */
reitit.trie.__GT_Node = (function reitit$trie$__GT_Node(children,wilds,catch_all,params,data){
return (new reitit.trie.Node(children,wilds,catch_all,params,data,null,null,null));
});

/**
 * Factory function for reitit.trie/Node, taking a map of keywords to field values.
 */
reitit.trie.map__GT_Node = (function reitit$trie$map__GT_Node(G__34247){
var extmap__4424__auto__ = (function (){var G__34316 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34247,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__34247)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34316);
} else {
return G__34316;
}
})();
return (new reitit.trie.Node(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__34247),new cljs.core.Keyword(null,"wilds","wilds",132271223).cljs$core$IFn$_invoke$arity$1(G__34247),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570).cljs$core$IFn$_invoke$arity$1(G__34247),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__34247),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__34247),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

reitit.trie.wild_QMARK_ = (function reitit$trie$wild_QMARK_(x){
return (x instanceof reitit.trie.Wild);
});
reitit.trie.catch_all_QMARK_ = (function reitit$trie$catch_all_QMARK_(x){
return (x instanceof reitit.trie.CatchAll);
});

/**
 * @interface
 */
reitit.trie.Matcher = function(){};

reitit.trie.match = (function reitit$trie$match(this$,i,max,path){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$match$arity$4 == null)))))){
return this$.reitit$trie$Matcher$match$arity$4(this$,i,max,path);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.match[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__4434__auto__.call(null,this$,i,max,path));
} else {
var m__4431__auto__ = (reitit.trie.match["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(this$,i,max,path) : m__4431__auto__.call(null,this$,i,max,path));
} else {
throw cljs.core.missing_protocol("Matcher.match",this$);
}
}
}
});

reitit.trie.view = (function reitit$trie$view(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$view$arity$1 == null)))))){
return this$.reitit$trie$Matcher$view$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.view[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reitit.trie.view["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.view",this$);
}
}
}
});

reitit.trie.depth = (function reitit$trie$depth(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$depth$arity$1 == null)))))){
return this$.reitit$trie$Matcher$depth$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.depth[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reitit.trie.depth["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.depth",this$);
}
}
}
});

reitit.trie.length = (function reitit$trie$length(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$Matcher$length$arity$1 == null)))))){
return this$.reitit$trie$Matcher$length$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.length[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reitit.trie.length["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Matcher.length",this$);
}
}
}
});


/**
 * @interface
 */
reitit.trie.TrieCompiler = function(){};

reitit.trie.data_matcher = (function reitit$trie$data_matcher(this$,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$data_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$data_matcher$arity$3(this$,params,data);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.data_matcher[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__4434__auto__.call(null,this$,params,data));
} else {
var m__4431__auto__ = (reitit.trie.data_matcher["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,params,data) : m__4431__auto__.call(null,this$,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.data-matcher",this$);
}
}
}
});

reitit.trie.static_matcher = (function reitit$trie$static_matcher(this$,path,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$static_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$static_matcher$arity$3(this$,path,matcher);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.static_matcher[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__4434__auto__.call(null,this$,path,matcher));
} else {
var m__4431__auto__ = (reitit.trie.static_matcher["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,path,matcher) : m__4431__auto__.call(null,this$,path,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.static-matcher",this$);
}
}
}
});

reitit.trie.wild_matcher = (function reitit$trie$wild_matcher(this$,key,end,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$wild_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$wild_matcher$arity$4(this$,key,end,matcher);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.wild_matcher[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__4434__auto__.call(null,this$,key,end,matcher));
} else {
var m__4431__auto__ = (reitit.trie.wild_matcher["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,end,matcher) : m__4431__auto__.call(null,this$,key,end,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.wild-matcher",this$);
}
}
}
});

reitit.trie.catch_all_matcher = (function reitit$trie$catch_all_matcher(this$,key,params,data){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 == null)))))){
return this$.reitit$trie$TrieCompiler$catch_all_matcher$arity$4(this$,key,params,data);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.catch_all_matcher[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__4434__auto__.call(null,this$,key,params,data));
} else {
var m__4431__auto__ = (reitit.trie.catch_all_matcher["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(this$,key,params,data) : m__4431__auto__.call(null,this$,key,params,data));
} else {
throw cljs.core.missing_protocol("TrieCompiler.catch-all-matcher",this$);
}
}
}
});

reitit.trie.linear_matcher = (function reitit$trie$linear_matcher(this$,matchers,ordered_QMARK_){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$linear_matcher$arity$3 == null)))))){
return this$.reitit$trie$TrieCompiler$linear_matcher$arity$3(this$,matchers,ordered_QMARK_);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie.linear_matcher[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__4434__auto__.call(null,this$,matchers,ordered_QMARK_));
} else {
var m__4431__auto__ = (reitit.trie.linear_matcher["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,matchers,ordered_QMARK_) : m__4431__auto__.call(null,this$,matchers,ordered_QMARK_));
} else {
throw cljs.core.missing_protocol("TrieCompiler.linear-matcher",this$);
}
}
}
});

reitit.trie._pretty = (function reitit$trie$_pretty(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_pretty$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_pretty$arity$2(this$,matcher);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie._pretty[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4434__auto__.call(null,this$,matcher));
} else {
var m__4431__auto__ = (reitit.trie._pretty["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4431__auto__.call(null,this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-pretty",this$);
}
}
}
});

reitit.trie._path_matcher = (function reitit$trie$_path_matcher(this$,matcher){
if((((!((this$ == null)))) && ((!((this$.reitit$trie$TrieCompiler$_path_matcher$arity$2 == null)))))){
return this$.reitit$trie$TrieCompiler$_path_matcher$arity$2(this$,matcher);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.trie._path_matcher[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4434__auto__.call(null,this$,matcher));
} else {
var m__4431__auto__ = (reitit.trie._path_matcher["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,matcher) : m__4431__auto__.call(null,this$,matcher));
} else {
throw cljs.core.missing_protocol("TrieCompiler.-path-matcher",this$);
}
}
}
});

reitit.trie.assoc_param = (function reitit$trie$assoc_param(match,k,v){
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,k,v));
});
reitit.trie.common_prefix = (function reitit$trie$common_prefix(s1,s2){
var max = (function (){var x__4222__auto__ = cljs.core.count(s1);
var y__4223__auto__ = cljs.core.count(s2);
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var i = (0);
while(true){
if((i > max)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),max);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s1,i),cljs.core.get.cljs$core$IFn$_invoke$arity$2(s2,i))){
if((!((i === (0))))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s1,(0),i);
} else {
return null;
}
} else {
var G__35330 = (i + (1));
i = G__35330;
continue;

}
}
break;
}
});
reitit.trie._keyword = (function reitit$trie$_keyword(s){
var temp__5733__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,"/");
if(cljs.core.truth_(temp__5733__auto__)){
var i = temp__5733__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(i + (1))));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
}
});
reitit.trie.split_path = (function reitit$trie$split_path(s,p__34403){
var map__34407 = p__34403;
var map__34407__$1 = (((((!((map__34407 == null))))?(((((map__34407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34407):map__34407);
var syntax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34407__$1,new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"bracket","bracket",-600276523),null], null), null));
var bracket_QMARK_ = new cljs.core.Keyword(null,"bracket","bracket",-600276523).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var colon_QMARK_ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var _static = ((function (bracket_QMARK_,colon_QMARK_,map__34407,map__34407__$1,syntax){
return (function (from,to){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,from,to)], null);
} else {
return null;
}
});})(bracket_QMARK_,colon_QMARK_,map__34407,map__34407__$1,syntax))
;
var _wild = ((function (bracket_QMARK_,colon_QMARK_,_static,map__34407,map__34407__$1,syntax){
return (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_Wild(reitit.trie._keyword(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});})(bracket_QMARK_,colon_QMARK_,_static,map__34407,map__34407__$1,syntax))
;
var _catch_all = ((function (bracket_QMARK_,colon_QMARK_,_static,_wild,map__34407,map__34407__$1,syntax){
return (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_CatchAll(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});})(bracket_QMARK_,colon_QMARK_,_static,_wild,map__34407,map__34407__$1,syntax))
;
var ss = null;
var from = (0);
var to = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(to,cljs.core.count(s))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(ss,_static(from,to));
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,to);
if(cljs.core.truth_((function (){var and__4120__auto__ = bracket_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("{",c);
} else {
return and__4120__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__4131__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"}",to);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","unclosed-brackets","reitit.trie/unclosed-brackets",1599327560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),s], null));
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,(to + (1))))){
var G__35355 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all((to + (1)),to_SINGLEQUOTE_)], 0));
var G__35356 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__35357 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__35355;
from = G__35356;
to = G__35357;
continue;
} else {
var G__35364 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__35365 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__35366 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__35364;
from = G__35365;
to = G__35366;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",c);
} else {
return and__4120__auto__;
}
})())){
var to_SINGLEQUOTE_ = (function (){var or__4131__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$3(s,"/",to);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.count(s);
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),(to_SINGLEQUOTE_ - to))){
var G__35368 = ss;
var G__35369 = from;
var G__35370 = (to + (1));
ss = G__35368;
from = G__35369;
to = G__35370;
continue;
} else {
var G__35371 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__35372 = cljs.core.long$(to_SINGLEQUOTE_);
var G__35373 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__35371;
from = G__35372;
to = G__35373;
continue;
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = colon_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",c);
} else {
return and__4120__auto__;
}
})())){
var to_SINGLEQUOTE_ = cljs.core.count(s);
var G__35374 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all(to,to_SINGLEQUOTE_)], 0));
var G__35375 = cljs.core.long$(to_SINGLEQUOTE_);
var G__35376 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__35374;
from = G__35375;
to = G__35376;
continue;
} else {
var G__35378 = ss;
var G__35379 = from;
var G__35380 = (to + (1));
ss = G__35378;
from = G__35379;
to = G__35380;
continue;

}
}
}
}
break;
}
});
reitit.trie.join_path = (function reitit$trie$join_path(xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),((typeof x === 'string')?x:(((x instanceof reitit.trie.Wild))?["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(x)),(1))),"}"].join(''):(((x instanceof reitit.trie.CatchAll))?["{*",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(x)),(1))),"}"].join(''):null)))].join('');
}),"",xs);
});
reitit.trie.normalize = (function reitit$trie$normalize(s,opts){
return reitit.trie.join_path(reitit.trie.split_path(s,opts));
});
reitit.trie._slice_start = (function reitit$trie$_slice_start(p__34596,p__34597){
var vec__34600 = p__34596;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34600,(0),null);
var p1s = vec__34600;
var vec__34603 = p__34597;
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34603,(0),null);
var p2s = vec__34603;
var _split = ((function (vec__34600,p1,p1s,vec__34603,p2,p2s){
return (function (p){
var temp__5733__auto__ = (function (){var and__4120__auto__ = p;
if(cljs.core.truth_(and__4120__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var i = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);
}
});})(vec__34600,p1,p1s,vec__34603,p2,p2s))
;
var _slash = ((function (_split,vec__34600,p1,p1s,vec__34603,p2,p2s){
return (function (cp,p){
if((!(typeof cp === 'string'))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cp], null);
} else {
if(((typeof cp === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cp),cljs.core.count(p))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,cljs.core.count(cp))], null);
} else {
if(((typeof p === 'string') && (cljs.core.not(cp)))){
return _split(p);
} else {
return null;
}
}
}
});})(_split,vec__34600,p1,p1s,vec__34603,p2,p2s))
;
var _postcut = ((function (_split,_slash,vec__34600,p1,p1s,vec__34603,p2,p2s){
return (function (p__34621){
var vec__34622 = p__34621;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34622,(0),null);
var pps = vec__34622;
var i = (function (){var and__4120__auto__ = p;
if(cljs.core.truth_(and__4120__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_((function (){var and__4120__auto__ = i;
if(cljs.core.truth_(and__4120__auto__)){
return (i > (0));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null),cljs.core.rest(pps));
} else {
return pps;
}
});})(_split,_slash,vec__34600,p1,p1s,vec__34603,p2,p2s))
;
var _tailcut = ((function (_split,_slash,_postcut,vec__34600,p1,p1s,vec__34603,p2,p2s){
return (function (cp,p__34628){
var vec__34630 = p__34628;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34630,(0),null);
var ps = vec__34630;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(_slash(cp,p),cljs.core.rest(ps));
});})(_split,_slash,_postcut,vec__34600,p1,p1s,vec__34603,p2,p2s))
;
if((((p1 == null)) || ((p2 == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_postcut(p1s),_postcut(p2s)], null);
} else {
var temp__5733__auto__ = (function (){var and__4120__auto__ = typeof p1 === 'string';
if(and__4120__auto__){
var and__4120__auto____$1 = typeof p2 === 'string';
if(and__4120__auto____$1){
return reitit.trie.common_prefix(p1,p2);
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var cp = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_tailcut(cp,p1s),_tailcut(cp,p2s)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1s,p2s], null);
}
}
});
reitit.trie._slice_end = (function reitit$trie$_slice_end(x,xs){
var i = ((typeof x === 'string')?clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(x,"/"):null);
if(((typeof i === 'number') && ((i > (0))))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,i)], null),xs);
} else {
return xs;
}
});
reitit.trie.conflicting_paths_QMARK_ = (function reitit$trie$conflicting_paths_QMARK_(path1,path2,opts){
var parts1 = reitit.trie.split_path(path1,opts);
var parts2 = reitit.trie.split_path(path2,opts);
while(true){
var vec__34670 = reitit.trie._slice_start(parts1,parts2);
var vec__34673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34670,(0),null);
var seq__34674 = cljs.core.seq(vec__34673);
var first__34675 = cljs.core.first(seq__34674);
var seq__34674__$1 = cljs.core.next(seq__34674);
var s1 = first__34675;
var ss1 = seq__34674__$1;
var vec__34676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34670,(1),null);
var seq__34677 = cljs.core.seq(vec__34676);
var first__34678 = cljs.core.first(seq__34677);
var seq__34677__$1 = cljs.core.next(seq__34677);
var s2 = first__34678;
var ss2 = seq__34677__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(s1,s2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0))){
return true;
} else {
if((((s1 == null)) || ((s2 == null)))){
return false;
} else {
if(((reitit.trie.catch_all_QMARK_(s1)) || (reitit.trie.catch_all_QMARK_(s2)))){
return true;
} else {
if(((reitit.trie.wild_QMARK_(s1)) || (reitit.trie.wild_QMARK_(s2)))){
var G__35418 = reitit.trie._slice_end(s1,ss1);
var G__35419 = reitit.trie._slice_end(s2,ss2);
parts1 = G__35418;
parts2 = G__35419;
continue;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return false;
} else {
var G__35420 = ss1;
var G__35421 = ss2;
parts1 = G__35420;
parts2 = G__35421;
continue;

}
}
}
}
}
break;
}
});
reitit.trie._node = (function reitit$trie$_node(m){
return reitit.trie.map__GT_Node(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"wilds","wilds",132271223),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY], null),m], 0)));
});
reitit.trie._insert = (function reitit$trie$_insert(node,p__34688,fp,params,data){
var vec__34689 = p__34688;
var seq__34690 = cljs.core.seq(vec__34689);
var first__34691 = cljs.core.first(seq__34690);
var seq__34690__$1 = cljs.core.next(seq__34690);
var path = first__34691;
var ps = seq__34690__$1;
var node_SINGLEQUOTE_ = (((path == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"data","data",-232669377),data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),params], 0)):(((path instanceof reitit.trie.Wild))?(function (){var next = cljs.core.first(ps);
if((((next instanceof reitit.trie.Wild)) || ((next instanceof reitit.trie.CatchAll)))){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","following-parameters","reitit.trie/following-parameters",-1072685800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),fp,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,next], null))], null));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wilds","wilds",132271223),path], null),((function (next,vec__34689,seq__34690,first__34691,seq__34690__$1,path,ps){
return (function (n){
var G__34696 = (function (){var or__4131__auto__ = n;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var G__34697 = ps;
var G__34698 = fp;
var G__34699 = params;
var G__34700 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__34696,G__34697,G__34698,G__34699,G__34700) : reitit.trie._insert.call(null,G__34696,G__34697,G__34698,G__34699,G__34700));
});})(next,vec__34689,seq__34690,first__34691,seq__34690__$1,path,ps))
);
}
})():(((path instanceof reitit.trie.CatchAll))?cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),path], null),reitit.trie._node(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"data","data",-232669377),data], null))):((clojure.string.blank_QMARK_(path))?(reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(node,ps,fp,params,data) : reitit.trie._insert.call(null,node,ps,fp,params,data)):(function (){var or__4131__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__34689,seq__34690,first__34691,seq__34690__$1,path,ps){
return (function (_,p__34741){
var vec__34742 = p__34741;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34742,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34742,(1),null);
var temp__5733__auto__ = reitit.trie.common_prefix(p,path);
if(cljs.core.truth_(temp__5733__auto__)){
var cp = temp__5733__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cp,p)){
var n_SINGLEQUOTE_ = (function (){var G__34747 = n;
var G__34748 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(p)));
var G__34749 = fp;
var G__34750 = params;
var G__34751 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__34747,G__34748,G__34749,G__34750,G__34751) : reitit.trie._insert.call(null,G__34747,G__34748,G__34749,G__34750,G__34751));
})();
return cljs.core.reduced(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),p], null),n_SINGLEQUOTE_));
} else {
var rp = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,cljs.core.count(cp));
var rp_SINGLEQUOTE_ = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(cp));
var n_SINGLEQUOTE_ = (function (){var G__34753 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__34754 = ps;
var G__34755 = fp;
var G__34756 = params;
var G__34757 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__34753,G__34754,G__34755,G__34756,G__34757) : reitit.trie._insert.call(null,G__34753,G__34754,G__34755,G__34756,G__34757));
})();
var n_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var G__34760 = reitit.trie._node(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.createAsIfByAssoc([rp,n,rp_SINGLEQUOTE_,n_SINGLEQUOTE_])], null));
var G__34761 = null;
var G__34762 = null;
var G__34763 = null;
var G__34764 = null;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__34760,G__34761,G__34762,G__34763,G__34764) : reitit.trie._insert.call(null,G__34760,G__34761,G__34762,G__34763,G__34764));
})();
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"children","children",-940561982),((function (rp,rp_SINGLEQUOTE_,n_SINGLEQUOTE_,n_SINGLEQUOTE__SINGLEQUOTE_,cp,temp__5733__auto__,vec__34742,p,n,vec__34689,seq__34690,first__34691,seq__34690__$1,path,ps){
return (function (children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(children,p),cp,n_SINGLEQUOTE__SINGLEQUOTE_);
});})(rp,rp_SINGLEQUOTE_,n_SINGLEQUOTE_,n_SINGLEQUOTE__SINGLEQUOTE_,cp,temp__5733__auto__,vec__34742,p,n,vec__34689,seq__34690,first__34691,seq__34690__$1,path,ps))
));
}
} else {
return null;
}
});})(vec__34689,seq__34690,first__34691,seq__34690__$1,path,ps))
,null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),path], null),(function (){var G__34767 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__34768 = ps;
var G__34769 = fp;
var G__34770 = params;
var G__34771 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__34767,G__34768,G__34769,G__34770,G__34771) : reitit.trie._insert.call(null,G__34767,G__34768,G__34769,G__34770,G__34771));
})());
}
})()
))));
var temp__5733__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),""], null));
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,new cljs.core.Keyword(null,"data","data",-232669377)),child], 0)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.dissoc,"");
} else {
return node_SINGLEQUOTE_;
}
});
reitit.trie.decode = (function reitit$trie$decode(path,start,end,percent_QMARK_){
var param = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(path,start,end);
if(cljs.core.truth_(percent_QMARK_)){
return decodeURIComponent(param);
} else {
return param;
}
});
reitit.trie.clojure_trie_compiler = (function reitit$trie$clojure_trie_compiler(){
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie34783 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.TrieCompiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie34783 = (function (meta34784){
this.meta34784 = meta34784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie34783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34785,meta34784__$1){
var self__ = this;
var _34785__$1 = this;
return (new reitit.trie.t_reitit$trie34783(meta34784__$1));
});

reitit.trie.t_reitit$trie34783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34785){
var self__ = this;
var _34785__$1 = this;
return self__.meta34784;
});

reitit.trie.t_reitit$trie34783.prototype.reitit$trie$TrieCompiler$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie34783.prototype.reitit$trie$TrieCompiler$data_matcher$arity$3 = (function (_,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie34791 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie34791 = (function (meta34784,_,params,data,match,meta34792){
this.meta34784 = meta34784;
this._ = _;
this.params = params;
this.data = data;
this.match = match;
this.meta34792 = meta34792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie34791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (match,___$1){
return (function (_34793,meta34792__$1){
var self__ = this;
var _34793__$1 = this;
return (new reitit.trie.t_reitit$trie34791(self__.meta34784,self__._,self__.params,self__.data,self__.match,meta34792__$1));
});})(match,___$1))
;

reitit.trie.t_reitit$trie34791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (match,___$1){
return (function (_34793){
var self__ = this;
var _34793__$1 = this;
return self__.meta34792;
});})(match,___$1))
;

reitit.trie.t_reitit$trie34791.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie34791.prototype.reitit$trie$Matcher$match$arity$4 = ((function (match,___$1){
return (function (___$1,i,max,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,max)){
return self__.match;
} else {
return null;
}
});})(match,___$1))
;

reitit.trie.t_reitit$trie34791.prototype.reitit$trie$Matcher$view$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.data;
});})(match,___$1))
;

reitit.trie.t_reitit$trie34791.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
});})(match,___$1))
;

reitit.trie.t_reitit$trie34791.prototype.reitit$trie$Matcher$length$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(match,___$1))
;

reitit.trie.t_reitit$trie34791.getBasis = ((function (match,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34784","meta34784",1027744036,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie34783","reitit.trie/t_reitit$trie34783",-1151092531,null)], null)),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta34792","meta34792",-1277080909,null)], null);
});})(match,___$1))
;

reitit.trie.t_reitit$trie34791.cljs$lang$type = true;

reitit.trie.t_reitit$trie34791.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie34791";

reitit.trie.t_reitit$trie34791.cljs$lang$ctorPrWriter = ((function (match,___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.trie/t_reitit$trie34791");
});})(match,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie34791.
 */
reitit.trie.__GT_t_reitit$trie34791 = ((function (match,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie34791(meta34784__$1,___$2,params__$1,data__$1,match__$1,meta34792){
return (new reitit.trie.t_reitit$trie34791(meta34784__$1,___$2,params__$1,data__$1,match__$1,meta34792));
});})(match,___$1))
;

}

return (new reitit.trie.t_reitit$trie34791(self__.meta34784,___$1,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie34783.prototype.reitit$trie$TrieCompiler$static_matcher$arity$3 = (function (_,path,matcher){
var self__ = this;
var ___$1 = this;
var size = cljs.core.count(path);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie34795 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie34795 = (function (meta34784,_,path,matcher,size,meta34796){
this.meta34784 = meta34784;
this._ = _;
this.path = path;
this.matcher = matcher;
this.size = size;
this.meta34796 = meta34796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie34795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (size,___$1){
return (function (_34797,meta34796__$1){
var self__ = this;
var _34797__$1 = this;
return (new reitit.trie.t_reitit$trie34795(self__.meta34784,self__._,self__.path,self__.matcher,self__.size,meta34796__$1));
});})(size,___$1))
;

reitit.trie.t_reitit$trie34795.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (size,___$1){
return (function (_34797){
var self__ = this;
var _34797__$1 = this;
return self__.meta34796;
});})(size,___$1))
;

reitit.trie.t_reitit$trie34795.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie34795.prototype.reitit$trie$Matcher$match$arity$4 = ((function (size,___$1){
return (function (___$1,i,max,p){
var self__ = this;
var ___$2 = this;
if((!((max < (i + self__.size))))){
var j = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,self__.size)){
return reitit.trie.match(self__.matcher,(i + self__.size),max,p);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p,(i + j)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.path,j))){
var G__35509 = (j + (1));
j = G__35509;
continue;
} else {
return null;
}
}
break;
}
} else {
return null;
}
});})(size,___$1))
;

reitit.trie.t_reitit$trie34795.prototype.reitit$trie$Matcher$view$arity$1 = ((function (size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,reitit.trie.view(self__.matcher)], null);
});})(size,___$1))
;

reitit.trie.t_reitit$trie34795.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
});})(size,___$1))
;

reitit.trie.t_reitit$trie34795.prototype.reitit$trie$Matcher$length$arity$1 = ((function (size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.count(self__.path);
});})(size,___$1))
;

reitit.trie.t_reitit$trie34795.getBasis = ((function (size,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34784","meta34784",1027744036,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie34783","reitit.trie/t_reitit$trie34783",-1151092531,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta34796","meta34796",-1726344712,null)], null);
});})(size,___$1))
;

reitit.trie.t_reitit$trie34795.cljs$lang$type = true;

reitit.trie.t_reitit$trie34795.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie34795";

reitit.trie.t_reitit$trie34795.cljs$lang$ctorPrWriter = ((function (size,___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.trie/t_reitit$trie34795");
});})(size,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie34795.
 */
reitit.trie.__GT_t_reitit$trie34795 = ((function (size,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie34795(meta34784__$1,___$2,path__$1,matcher__$1,size__$1,meta34796){
return (new reitit.trie.t_reitit$trie34795(meta34784__$1,___$2,path__$1,matcher__$1,size__$1,meta34796));
});})(size,___$1))
;

}

return (new reitit.trie.t_reitit$trie34795(self__.meta34784,___$1,path,matcher,size,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie34783.prototype.reitit$trie$TrieCompiler$wild_matcher$arity$4 = (function (_,key,end,matcher){
var self__ = this;
var ___$1 = this;
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie34803 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie34803 = (function (meta34784,_,key,end,matcher,meta34804){
this.meta34784 = meta34784;
this._ = _;
this.key = key;
this.end = end;
this.matcher = matcher;
this.meta34804 = meta34804;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie34803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34805,meta34804__$1){
var self__ = this;
var _34805__$1 = this;
return (new reitit.trie.t_reitit$trie34803(self__.meta34784,self__._,self__.key,self__.end,self__.matcher,meta34804__$1));
});})(___$1))
;

reitit.trie.t_reitit$trie34803.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34805){
var self__ = this;
var _34805__$1 = this;
return self__.meta34804;
});})(___$1))
;

reitit.trie.t_reitit$trie34803.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie34803.prototype.reitit$trie$Matcher$match$arity$4 = ((function (___$1){
return (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((((i < max)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,i),self__.end)))){
var percent_QMARK_ = false;
var j = i;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max,j)){
var temp__5733__auto__ = reitit.trie.match(self__.matcher,max,max,path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,max,percent_QMARK_));
} else {
return null;
}
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,j);
var pred__34816 = cljs.core._EQ_;
var expr__34817 = c;
if(cljs.core.truth_((pred__34816.cljs$core$IFn$_invoke$arity$2 ? pred__34816.cljs$core$IFn$_invoke$arity$2(self__.end,expr__34817) : pred__34816.call(null,self__.end,expr__34817)))){
var temp__5733__auto__ = reitit.trie.match(self__.matcher,j,max,path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,j,percent_QMARK_));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__34822 = "%";
var G__34823 = expr__34817;
return (pred__34816.cljs$core$IFn$_invoke$arity$2 ? pred__34816.cljs$core$IFn$_invoke$arity$2(G__34822,G__34823) : pred__34816.call(null,G__34822,G__34823));
})())){
var G__35539 = true;
var G__35540 = (j + (1));
percent_QMARK_ = G__35539;
j = G__35540;
continue;
} else {
var G__35541 = percent_QMARK_;
var G__35542 = (j + (1));
percent_QMARK_ = G__35541;
j = G__35542;
continue;
}
}
}
break;
}
} else {
return null;
}
});})(___$1))
;

reitit.trie.t_reitit$trie34803.prototype.reitit$trie$Matcher$view$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,reitit.trie.view(self__.matcher)], null);
});})(___$1))
;

reitit.trie.t_reitit$trie34803.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
});})(___$1))
;

reitit.trie.t_reitit$trie34803.prototype.reitit$trie$Matcher$length$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(___$1))
;

reitit.trie.t_reitit$trie34803.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34784","meta34784",1027744036,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie34783","reitit.trie/t_reitit$trie34783",-1151092531,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"meta34804","meta34804",1911220699,null)], null);
});})(___$1))
;

reitit.trie.t_reitit$trie34803.cljs$lang$type = true;

reitit.trie.t_reitit$trie34803.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie34803";

reitit.trie.t_reitit$trie34803.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.trie/t_reitit$trie34803");
});})(___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie34803.
 */
reitit.trie.__GT_t_reitit$trie34803 = ((function (___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie34803(meta34784__$1,___$2,key__$1,end__$1,matcher__$1,meta34804){
return (new reitit.trie.t_reitit$trie34803(meta34784__$1,___$2,key__$1,end__$1,matcher__$1,meta34804));
});})(___$1))
;

}

return (new reitit.trie.t_reitit$trie34803(self__.meta34784,___$1,key,end,matcher,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie34783.prototype.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 = (function (_,key,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie34825 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie34825 = (function (meta34784,_,key,params,data,match,meta34826){
this.meta34784 = meta34784;
this._ = _;
this.key = key;
this.params = params;
this.data = data;
this.match = match;
this.meta34826 = meta34826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie34825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (match,___$1){
return (function (_34827,meta34826__$1){
var self__ = this;
var _34827__$1 = this;
return (new reitit.trie.t_reitit$trie34825(self__.meta34784,self__._,self__.key,self__.params,self__.data,self__.match,meta34826__$1));
});})(match,___$1))
;

reitit.trie.t_reitit$trie34825.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (match,___$1){
return (function (_34827){
var self__ = this;
var _34827__$1 = this;
return self__.meta34826;
});})(match,___$1))
;

reitit.trie.t_reitit$trie34825.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie34825.prototype.reitit$trie$Matcher$match$arity$4 = ((function (match,___$1){
return (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((i <= max)){
return reitit.trie.assoc_param(self__.match,self__.key,reitit.trie.decode(path,i,max,true));
} else {
return null;
}
});})(match,___$1))
;

reitit.trie.t_reitit$trie34825.prototype.reitit$trie$Matcher$view$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.data], null)], null);
});})(match,___$1))
;

reitit.trie.t_reitit$trie34825.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
});})(match,___$1))
;

reitit.trie.t_reitit$trie34825.prototype.reitit$trie$Matcher$length$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(match,___$1))
;

reitit.trie.t_reitit$trie34825.getBasis = ((function (match,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34784","meta34784",1027744036,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie34783","reitit.trie/t_reitit$trie34783",-1151092531,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta34826","meta34826",1873660496,null)], null);
});})(match,___$1))
;

reitit.trie.t_reitit$trie34825.cljs$lang$type = true;

reitit.trie.t_reitit$trie34825.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie34825";

reitit.trie.t_reitit$trie34825.cljs$lang$ctorPrWriter = ((function (match,___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.trie/t_reitit$trie34825");
});})(match,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie34825.
 */
reitit.trie.__GT_t_reitit$trie34825 = ((function (match,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie34825(meta34784__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta34826){
return (new reitit.trie.t_reitit$trie34825(meta34784__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta34826));
});})(match,___$1))
;

}

return (new reitit.trie.t_reitit$trie34825(self__.meta34784,___$1,key,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie34783.prototype.reitit$trie$TrieCompiler$linear_matcher$arity$3 = (function (_,matchers,ordered_QMARK_){
var self__ = this;
var ___$1 = this;
var matchers__$1 = cljs.core.vec((cljs.core.truth_(ordered_QMARK_)?matchers:cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,reitit.trie.length),matchers))));
var size = cljs.core.count(matchers__$1);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie34839 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie34839 = (function (meta34784,_,matchers,ordered_QMARK_,size,meta34840){
this.meta34784 = meta34784;
this._ = _;
this.matchers = matchers;
this.ordered_QMARK_ = ordered_QMARK_;
this.size = size;
this.meta34840 = meta34840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie34839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (matchers__$1,size,___$1){
return (function (_34841,meta34840__$1){
var self__ = this;
var _34841__$1 = this;
return (new reitit.trie.t_reitit$trie34839(self__.meta34784,self__._,self__.matchers,self__.ordered_QMARK_,self__.size,meta34840__$1));
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie34839.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (matchers__$1,size,___$1){
return (function (_34841){
var self__ = this;
var _34841__$1 = this;
return self__.meta34840;
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie34839.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie34839.prototype.reitit$trie$Matcher$match$arity$4 = ((function (matchers__$1,size,___$1){
return (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
var j = (0);
while(true){
if((j < self__.size)){
var or__4131__auto__ = reitit.trie.match(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.matchers,j),i,max,path);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var G__35606 = (j + (1));
j = G__35606;
continue;
}
} else {
return null;
}
break;
}
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie34839.prototype.reitit$trie$Matcher$view$arity$1 = ((function (matchers__$1,size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(reitit.trie.view,self__.matchers);
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie34839.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (matchers__$1,size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,self__.matchers)) + (1));
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie34839.prototype.reitit$trie$Matcher$length$arity$1 = ((function (matchers__$1,size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie34839.getBasis = ((function (matchers__$1,size,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34784","meta34784",1027744036,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie34783","reitit.trie/t_reitit$trie34783",-1151092531,null)], null)),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null),new cljs.core.Symbol(null,"ordered?","ordered?",-1842273081,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta34840","meta34840",1313298875,null)], null);
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie34839.cljs$lang$type = true;

reitit.trie.t_reitit$trie34839.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie34839";

reitit.trie.t_reitit$trie34839.cljs$lang$ctorPrWriter = ((function (matchers__$1,size,___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.trie/t_reitit$trie34839");
});})(matchers__$1,size,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie34839.
 */
reitit.trie.__GT_t_reitit$trie34839 = ((function (matchers__$1,size,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie34839(meta34784__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta34840){
return (new reitit.trie.t_reitit$trie34839(meta34784__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta34840));
});})(matchers__$1,size,___$1))
;

}

return (new reitit.trie.t_reitit$trie34839(self__.meta34784,___$1,matchers__$1,ordered_QMARK_,size,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie34783.prototype.reitit$trie$TrieCompiler$_pretty$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return reitit.trie.view(matcher);
});

reitit.trie.t_reitit$trie34783.prototype.reitit$trie$TrieCompiler$_path_matcher$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return ((function (___$1){
return (function (path){
var temp__5733__auto__ = reitit.trie.match(matcher,(0),cljs.core.count(path),path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return reitit.trie.__GT_Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
} else {
return null;
}
});
;})(___$1))
});

reitit.trie.t_reitit$trie34783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta34784","meta34784",1027744036,null)], null);
});

reitit.trie.t_reitit$trie34783.cljs$lang$type = true;

reitit.trie.t_reitit$trie34783.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie34783";

reitit.trie.t_reitit$trie34783.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.trie/t_reitit$trie34783");
});

/**
 * Positional factory function for reitit.trie/t_reitit$trie34783.
 */
reitit.trie.__GT_t_reitit$trie34783 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie34783(meta34784){
return (new reitit.trie.t_reitit$trie34783(meta34784));
});

}

return (new reitit.trie.t_reitit$trie34783(cljs.core.PersistentArrayMap.EMPTY));
});
reitit.trie.map_parameters = (function reitit$trie$map_parameters(keys){
return cljs.core.zipmap(keys,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
});
/**
 * Returns a trie with routes added to it.
 */
reitit.trie.insert = (function reitit$trie$insert(var_args){
var G__34960 = arguments.length;
switch (G__34960) {
case 1:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.trie.insert.cljs$core$IFn$_invoke$arity$1 = (function (routes){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$2(null,routes);
});

reitit.trie.insert.cljs$core$IFn$_invoke$arity$2 = (function (node,routes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__34966){
var vec__34968 = p__34966;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34968,(1),null);
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3(acc,p,d);
}),node,routes);
});

reitit.trie.insert.cljs$core$IFn$_invoke$arity$3 = (function (node,path,data){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(node,path,data,null);
});

reitit.trie.insert.cljs$core$IFn$_invoke$arity$4 = (function (node,path,data,p__34972){
var map__34973 = p__34972;
var map__34973__$1 = (((((!((map__34973 == null))))?(((((map__34973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34973):map__34973);
var opts = map__34973__$1;
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34973__$1,new cljs.core.Keyword("reitit.trie","parameters","reitit.trie/parameters",-1304786787),reitit.trie.map_parameters);
var parts = reitit.trie.split_path(path,opts);
var params = (function (){var G__34976 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,parts));
return (parameters.cljs$core$IFn$_invoke$arity$1 ? parameters.cljs$core$IFn$_invoke$arity$1(G__34976) : parameters.call(null,G__34976));
})();
return reitit.trie._insert((function (){var or__4131__auto__ = node;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})(),reitit.trie.split_path(path,opts),path,params,data);
});

reitit.trie.insert.cljs$lang$maxFixedArity = 4;

/**
 * Returns a default [[TrieCompiler]].
 */
reitit.trie.compiler = (function reitit$trie$compiler(){
return reitit.trie.clojure_trie_compiler();
});
/**
 * Returns a compiled trie, to be used with [[pretty]] or [[path-matcher]].
 */
reitit.trie.compile = (function reitit$trie$compile(var_args){
var G__34987 = arguments.length;
switch (G__34987) {
case 1:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.trie.compile.cljs$core$IFn$_invoke$arity$1 = (function (options){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(options,reitit.trie.compiler());
});

reitit.trie.compile.cljs$core$IFn$_invoke$arity$2 = (function (options,compiler){
return reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(options,compiler,cljs.core.PersistentVector.EMPTY);
});

reitit.trie.compile.cljs$core$IFn$_invoke$arity$3 = (function (p__34996,compiler,cp){
var map__34997 = p__34996;
var map__34997__$1 = (((((!((map__34997 == null))))?(((((map__34997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34997):map__34997);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34997__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34997__$1,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34997__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wilds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34997__$1,new cljs.core.Keyword(null,"wilds","wilds",132271223));
var catch_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34997__$1,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570));
var ends = ((function (map__34997,map__34997__$1,data,params,children,wilds,catch_all){
return (function (p__35002){
var map__35003 = p__35002;
var map__35003__$1 = (((((!((map__35003 == null))))?(((((map__35003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35003):map__35003);
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35003__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var or__4131__auto__ = cljs.core.keys(children__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null);
}
});})(map__34997,map__34997__$1,data,params,children,wilds,catch_all))
;
var matchers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__35007 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(data)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__35007,reitit.trie.data_matcher(compiler,params,data));
} else {
return G__35007;
}
})(),(function (){var iter__4523__auto__ = ((function (ends,map__34997,map__34997__$1,data,params,children,wilds,catch_all){
return (function reitit$trie$iter__35009(s__35010){
return (new cljs.core.LazySeq(null,((function (ends,map__34997,map__34997__$1,data,params,children,wilds,catch_all){
return (function (){
var s__35010__$1 = s__35010;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35010__$1);
if(temp__5735__auto__){
var s__35010__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35010__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35010__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35012 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35011 = (0);
while(true){
if((i__35011 < size__4522__auto__)){
var vec__35013 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35011);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35013,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35013,(1),null);
cljs.core.chunk_append(b__35012,reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))));

var G__35657 = (i__35011 + (1));
i__35011 = G__35657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35012),reitit$trie$iter__35009(cljs.core.chunk_rest(s__35010__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35012),null);
}
} else {
var vec__35018 = cljs.core.first(s__35010__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35018,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35018,(1),null);
return cljs.core.cons(reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))),reitit$trie$iter__35009(cljs.core.rest(s__35010__$2)));
}
} else {
return null;
}
break;
}
});})(ends,map__34997,map__34997__$1,data,params,children,wilds,catch_all))
,null,null));
});})(ends,map__34997,map__34997__$1,data,params,children,wilds,catch_all))
;
return iter__4523__auto__(children);
})()),(function (){var iter__4523__auto__ = ((function (ends,map__34997,map__34997__$1,data,params,children,wilds,catch_all){
return (function reitit$trie$iter__35023(s__35024){
return (new cljs.core.LazySeq(null,((function (ends,map__34997,map__34997__$1,data,params,children,wilds,catch_all){
return (function (){
var s__35024__$1 = s__35024;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35024__$1);
if(temp__5735__auto__){
var s__35024__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35024__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35024__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35026 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35025 = (0);
while(true){
if((i__35025 < size__4522__auto__)){
var vec__35059 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35025);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35059,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35059,(1),null);
cljs.core.chunk_append(b__35026,(function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})());

var G__35693 = (i__35025 + (1));
i__35025 = G__35693;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35026),reitit$trie$iter__35023(cljs.core.chunk_rest(s__35024__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35026),null);
}
} else {
var vec__35068 = cljs.core.first(s__35024__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35068,(1),null);
return cljs.core.cons((function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})(),reitit$trie$iter__35023(cljs.core.rest(s__35024__$2)));
}
} else {
return null;
}
break;
}
});})(ends,map__34997,map__34997__$1,data,params,children,wilds,catch_all))
,null,null));
});})(ends,map__34997,map__34997__$1,data,params,children,wilds,catch_all))
;
return iter__4523__auto__(wilds);
})()),(function (){var iter__4523__auto__ = ((function (ends,map__34997,map__34997__$1,data,params,children,wilds,catch_all){
return (function reitit$trie$iter__35071(s__35072){
return (new cljs.core.LazySeq(null,((function (ends,map__34997,map__34997__$1,data,params,children,wilds,catch_all){
return (function (){
var s__35072__$1 = s__35072;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35072__$1);
if(temp__5735__auto__){
var s__35072__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35072__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35072__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35074 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35073 = (0);
while(true){
if((i__35073 < size__4522__auto__)){
var vec__35076 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35073);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35076,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35076,(1),null);
cljs.core.chunk_append(b__35074,reitit.trie.catch_all_matcher(compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)));

var G__35709 = (i__35073 + (1));
i__35073 = G__35709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35074),reitit$trie$iter__35071(cljs.core.chunk_rest(s__35072__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35074),null);
}
} else {
var vec__35080 = cljs.core.first(s__35072__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35080,(1),null);
return cljs.core.cons(reitit.trie.catch_all_matcher(compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)),reitit$trie$iter__35071(cljs.core.rest(s__35072__$2)));
}
} else {
return null;
}
break;
}
});})(ends,map__34997,map__34997__$1,data,params,children,wilds,catch_all))
,null,null));
});})(ends,map__34997,map__34997__$1,data,params,children,wilds,catch_all))
;
return iter__4523__auto__(catch_all);
})());
if((cljs.core.count(matchers) > (1))){
return reitit.trie.linear_matcher(compiler,matchers,false);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(matchers),(1))){
return cljs.core.first(matchers);
} else {
return reitit.trie.data_matcher(compiler,cljs.core.PersistentArrayMap.EMPTY,null);

}
}
});

reitit.trie.compile.cljs$lang$maxFixedArity = 3;

/**
 * Returns a simplified EDN structure of a compiled trie for printing purposes.
 */
reitit.trie.pretty = (function reitit$trie$pretty(var_args){
var G__35087 = arguments.length;
switch (G__35087) {
case 1:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.trie.pretty.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
});

reitit.trie.pretty.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._pretty(compiler,compiled_trie);
});

reitit.trie.pretty.cljs$lang$maxFixedArity = 2;

/**
 * Returns a function of `path -> Match` from a compiled trie.
 */
reitit.trie.path_matcher = (function reitit$trie$path_matcher(var_args){
var G__35100 = arguments.length;
switch (G__35100) {
case 1:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$1 = (function (compiled_trie){
return reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(compiled_trie,reitit.trie.compiler());
});

reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2 = (function (compiled_trie,compiler){
return reitit.trie._path_matcher(compiler,compiled_trie);
});

reitit.trie.path_matcher.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=reitit.trie.js.map
