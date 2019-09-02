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

reitit.trie.Wild.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k37965,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__37969 = k37965;
var G__37969__$1 = (((G__37969 instanceof cljs.core.Keyword))?G__37969.fqn:null);
switch (G__37969__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37965,else__4388__auto__);

}
});

reitit.trie.Wild.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__37970){
var vec__37971 = p__37970;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37971,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37971,(1),null);
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

reitit.trie.Wild.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37964){
var self__ = this;
var G__37964__$1 = this;
return (new cljs.core.RecordIter((0),G__37964__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__37974 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1970880185 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__37974(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.trie.Wild.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37966,other37967){
var self__ = this;
var this37966__$1 = this;
return (((!((other37967 == null)))) && ((this37966__$1.constructor === other37967.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37966__$1.value,other37967.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37966__$1.__extmap,other37967.__extmap)));
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

reitit.trie.Wild.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__37964){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__37979 = cljs.core.keyword_identical_QMARK_;
var expr__37980 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__37982 = new cljs.core.Keyword(null,"value","value",305978217);
var G__37983 = expr__37980;
return (pred__37979.cljs$core$IFn$_invoke$arity$2 ? pred__37979.cljs$core$IFn$_invoke$arity$2(G__37982,G__37983) : pred__37979.call(null,G__37982,G__37983));
})())){
return (new reitit.trie.Wild(G__37964,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Wild(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__37964),null));
}
});

reitit.trie.Wild.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
});

reitit.trie.Wild.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__37964){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.trie.Wild(self__.value,G__37964,self__.__extmap,self__.__hash));
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
reitit.trie.map__GT_Wild = (function reitit$trie$map__GT_Wild(G__37968){
var extmap__4424__auto__ = (function (){var G__37984 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37968,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__37968)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37984);
} else {
return G__37984;
}
})();
return (new reitit.trie.Wild(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__37968),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

reitit.trie.CatchAll.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k37986,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__37990 = k37986;
var G__37990__$1 = (((G__37990 instanceof cljs.core.Keyword))?G__37990.fqn:null);
switch (G__37990__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37986,else__4388__auto__);

}
});

reitit.trie.CatchAll.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__37991){
var vec__37992 = p__37991;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37992,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37992,(1),null);
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

reitit.trie.CatchAll.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37985){
var self__ = this;
var G__37985__$1 = this;
return (new cljs.core.RecordIter((0),G__37985__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__37995 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-987265038 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__37995(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.trie.CatchAll.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37987,other37988){
var self__ = this;
var this37987__$1 = this;
return (((!((other37988 == null)))) && ((this37987__$1.constructor === other37988.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37987__$1.value,other37988.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37987__$1.__extmap,other37988.__extmap)));
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

reitit.trie.CatchAll.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__37985){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__37996 = cljs.core.keyword_identical_QMARK_;
var expr__37997 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__37999 = new cljs.core.Keyword(null,"value","value",305978217);
var G__38000 = expr__37997;
return (pred__37996.cljs$core$IFn$_invoke$arity$2 ? pred__37996.cljs$core$IFn$_invoke$arity$2(G__37999,G__38000) : pred__37996.call(null,G__37999,G__38000));
})())){
return (new reitit.trie.CatchAll(G__37985,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.CatchAll(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__37985),null));
}
});

reitit.trie.CatchAll.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
});

reitit.trie.CatchAll.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__37985){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.trie.CatchAll(self__.value,G__37985,self__.__extmap,self__.__hash));
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
reitit.trie.map__GT_CatchAll = (function reitit$trie$map__GT_CatchAll(G__37989){
var extmap__4424__auto__ = (function (){var G__38001 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__37989,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.record_QMARK_(G__37989)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38001);
} else {
return G__38001;
}
})();
return (new reitit.trie.CatchAll(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__37989),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

reitit.trie.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k38003,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__38007 = k38003;
var G__38007__$1 = (((G__38007 instanceof cljs.core.Keyword))?G__38007.fqn:null);
switch (G__38007__$1) {
case "params":
return self__.params;

break;
case "data":
return self__.data;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38003,else__4388__auto__);

}
});

reitit.trie.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__38008){
var vec__38009 = p__38008;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38009,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38009,(1),null);
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

reitit.trie.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38002){
var self__ = this;
var G__38002__$1 = this;
return (new cljs.core.RecordIter((0),G__38002__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__38012 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1117628764 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__38012(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.trie.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38004,other38005){
var self__ = this;
var this38004__$1 = this;
return (((!((other38005 == null)))) && ((this38004__$1.constructor === other38005.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38004__$1.params,other38005.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38004__$1.data,other38005.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38004__$1.__extmap,other38005.__extmap)));
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

reitit.trie.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__38002){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__38013 = cljs.core.keyword_identical_QMARK_;
var expr__38014 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__38016 = new cljs.core.Keyword(null,"params","params",710516235);
var G__38017 = expr__38014;
return (pred__38013.cljs$core$IFn$_invoke$arity$2 ? pred__38013.cljs$core$IFn$_invoke$arity$2(G__38016,G__38017) : pred__38013.call(null,G__38016,G__38017));
})())){
return (new reitit.trie.Match(G__38002,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38018 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__38019 = expr__38014;
return (pred__38013.cljs$core$IFn$_invoke$arity$2 ? pred__38013.cljs$core$IFn$_invoke$arity$2(G__38018,G__38019) : pred__38013.call(null,G__38018,G__38019));
})())){
return (new reitit.trie.Match(self__.params,G__38002,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Match(self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__38002),null));
}
}
});

reitit.trie.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null))], null),self__.__extmap));
});

reitit.trie.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__38002){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.trie.Match(self__.params,self__.data,G__38002,self__.__extmap,self__.__hash));
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
reitit.trie.map__GT_Match = (function reitit$trie$map__GT_Match(G__38006){
var extmap__4424__auto__ = (function (){var G__38020 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38006,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__38006)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38020);
} else {
return G__38020;
}
})();
return (new reitit.trie.Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__38006),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__38006),null,cljs.core.not_empty(extmap__4424__auto__),null));
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

reitit.trie.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k38022,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__38026 = k38022;
var G__38026__$1 = (((G__38026 instanceof cljs.core.Keyword))?G__38026.fqn:null);
switch (G__38026__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k38022,else__4388__auto__);

}
});

reitit.trie.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__38027){
var vec__38028 = p__38027;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38028,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38028,(1),null);
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

reitit.trie.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__38021){
var self__ = this;
var G__38021__$1 = this;
return (new cljs.core.RecordIter((0),G__38021__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__38031 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (33004208 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__38031(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.trie.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this38023,other38024){
var self__ = this;
var this38023__$1 = this;
return (((!((other38024 == null)))) && ((this38023__$1.constructor === other38024.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38023__$1.children,other38024.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38023__$1.wilds,other38024.wilds)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38023__$1.catch_all,other38024.catch_all)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38023__$1.params,other38024.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38023__$1.data,other38024.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this38023__$1.__extmap,other38024.__extmap)));
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

reitit.trie.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__38021){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__38032 = cljs.core.keyword_identical_QMARK_;
var expr__38033 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__38035 = new cljs.core.Keyword(null,"children","children",-940561982);
var G__38036 = expr__38033;
return (pred__38032.cljs$core$IFn$_invoke$arity$2 ? pred__38032.cljs$core$IFn$_invoke$arity$2(G__38035,G__38036) : pred__38032.call(null,G__38035,G__38036));
})())){
return (new reitit.trie.Node(G__38021,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38037 = new cljs.core.Keyword(null,"wilds","wilds",132271223);
var G__38038 = expr__38033;
return (pred__38032.cljs$core$IFn$_invoke$arity$2 ? pred__38032.cljs$core$IFn$_invoke$arity$2(G__38037,G__38038) : pred__38032.call(null,G__38037,G__38038));
})())){
return (new reitit.trie.Node(self__.children,G__38021,self__.catch_all,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38039 = new cljs.core.Keyword(null,"catch-all","catch-all",1184112570);
var G__38040 = expr__38033;
return (pred__38032.cljs$core$IFn$_invoke$arity$2 ? pred__38032.cljs$core$IFn$_invoke$arity$2(G__38039,G__38040) : pred__38032.call(null,G__38039,G__38040));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,G__38021,self__.params,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38041 = new cljs.core.Keyword(null,"params","params",710516235);
var G__38042 = expr__38033;
return (pred__38032.cljs$core$IFn$_invoke$arity$2 ? pred__38032.cljs$core$IFn$_invoke$arity$2(G__38041,G__38042) : pred__38032.call(null,G__38041,G__38042));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,G__38021,self__.data,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__38043 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__38044 = expr__38033;
return (pred__38032.cljs$core$IFn$_invoke$arity$2 ? pred__38032.cljs$core$IFn$_invoke$arity$2(G__38043,G__38044) : pred__38032.call(null,G__38043,G__38044));
})())){
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,G__38021,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__38021),null));
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

reitit.trie.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__38021){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.trie.Node(self__.children,self__.wilds,self__.catch_all,self__.params,self__.data,G__38021,self__.__extmap,self__.__hash));
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
reitit.trie.map__GT_Node = (function reitit$trie$map__GT_Node(G__38025){
var extmap__4424__auto__ = (function (){var G__38045 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__38025,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wilds","wilds",132271223),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"data","data",-232669377)], 0));
if(cljs.core.record_QMARK_(G__38025)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__38045);
} else {
return G__38045;
}
})();
return (new reitit.trie.Node(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__38025),new cljs.core.Keyword(null,"wilds","wilds",132271223).cljs$core$IFn$_invoke$arity$1(G__38025),new cljs.core.Keyword(null,"catch-all","catch-all",1184112570).cljs$core$IFn$_invoke$arity$1(G__38025),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__38025),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__38025),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
var G__38282 = (i + (1));
i = G__38282;
continue;

}
}
break;
}
});
reitit.trie._keyword = (function reitit$trie$_keyword(s){
var temp__5718__auto__ = clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(s,"/");
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(i + (1))));
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
}
});
reitit.trie.split_path = (function reitit$trie$split_path(s,p__38046){
var map__38047 = p__38046;
var map__38047__$1 = (((((!((map__38047 == null))))?(((((map__38047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38047):map__38047);
var syntax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38047__$1,new cljs.core.Keyword(null,"syntax","syntax",-1637761676),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"bracket","bracket",-600276523),null], null), null));
var bracket_QMARK_ = new cljs.core.Keyword(null,"bracket","bracket",-600276523).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var colon_QMARK_ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(reitit.trie.into_set(syntax));
var _static = ((function (bracket_QMARK_,colon_QMARK_,map__38047,map__38047__$1,syntax){
return (function (from,to){
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,to)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,from,to)], null);
} else {
return null;
}
});})(bracket_QMARK_,colon_QMARK_,map__38047,map__38047__$1,syntax))
;
var _wild = ((function (bracket_QMARK_,colon_QMARK_,_static,map__38047,map__38047__$1,syntax){
return (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_Wild(reitit.trie._keyword(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});})(bracket_QMARK_,colon_QMARK_,_static,map__38047,map__38047__$1,syntax))
;
var _catch_all = ((function (bracket_QMARK_,colon_QMARK_,_static,_wild,map__38047,map__38047__$1,syntax){
return (function (from,to){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.__GT_CatchAll(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(from + (1)),to)))], null);
});})(bracket_QMARK_,colon_QMARK_,_static,_wild,map__38047,map__38047__$1,syntax))
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
var G__38309 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all((to + (1)),to_SINGLEQUOTE_)], 0));
var G__38310 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__38311 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__38309;
from = G__38310;
to = G__38311;
continue;
} else {
var G__38312 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__38313 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
var G__38314 = cljs.core.long$((to_SINGLEQUOTE_ + (1)));
ss = G__38312;
from = G__38313;
to = G__38314;
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
var G__38315 = ss;
var G__38316 = from;
var G__38317 = (to + (1));
ss = G__38315;
from = G__38316;
to = G__38317;
continue;
} else {
var G__38318 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_wild(to,to_SINGLEQUOTE_)], 0));
var G__38319 = cljs.core.long$(to_SINGLEQUOTE_);
var G__38320 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__38318;
from = G__38319;
to = G__38320;
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
var G__38324 = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(ss,_static(from,to),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_catch_all(to,to_SINGLEQUOTE_)], 0));
var G__38325 = cljs.core.long$(to_SINGLEQUOTE_);
var G__38326 = cljs.core.long$(to_SINGLEQUOTE_);
ss = G__38324;
from = G__38325;
to = G__38326;
continue;
} else {
var G__38328 = ss;
var G__38329 = from;
var G__38330 = (to + (1));
ss = G__38328;
from = G__38329;
to = G__38330;
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
reitit.trie._slice_start = (function reitit$trie$_slice_start(p__38049,p__38050){
var vec__38051 = p__38049;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38051,(0),null);
var p1s = vec__38051;
var vec__38054 = p__38050;
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38054,(0),null);
var p2s = vec__38054;
var _split = ((function (vec__38051,p1,p1s,vec__38054,p2,p2s){
return (function (p){
var temp__5718__auto__ = (function (){var and__4120__auto__ = p;
if(cljs.core.truth_(and__4120__auto__)){
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2(p,"/");
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5718__auto__)){
var i = temp__5718__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(p,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,i)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null);
}
});})(vec__38051,p1,p1s,vec__38054,p2,p2s))
;
var _slash = ((function (_split,vec__38051,p1,p1s,vec__38054,p2,p2s){
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
});})(_split,vec__38051,p1,p1s,vec__38054,p2,p2s))
;
var _postcut = ((function (_split,_slash,vec__38051,p1,p1s,vec__38054,p2,p2s){
return (function (p__38057){
var vec__38058 = p__38057;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38058,(0),null);
var pps = vec__38058;
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
});})(_split,_slash,vec__38051,p1,p1s,vec__38054,p2,p2s))
;
var _tailcut = ((function (_split,_slash,_postcut,vec__38051,p1,p1s,vec__38054,p2,p2s){
return (function (cp,p__38061){
var vec__38062 = p__38061;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38062,(0),null);
var ps = vec__38062;
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(_slash(cp,p),cljs.core.rest(ps));
});})(_split,_slash,_postcut,vec__38051,p1,p1s,vec__38054,p2,p2s))
;
if((((p1 == null)) || ((p2 == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_postcut(p1s),_postcut(p2s)], null);
} else {
var temp__5718__auto__ = (function (){var and__4120__auto__ = typeof p1 === 'string';
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
if(cljs.core.truth_(temp__5718__auto__)){
var cp = temp__5718__auto__;
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
var vec__38074 = reitit.trie._slice_start(parts1,parts2);
var vec__38077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38074,(0),null);
var seq__38078 = cljs.core.seq(vec__38077);
var first__38079 = cljs.core.first(seq__38078);
var seq__38078__$1 = cljs.core.next(seq__38078);
var s1 = first__38079;
var ss1 = seq__38078__$1;
var vec__38080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38074,(1),null);
var seq__38081 = cljs.core.seq(vec__38080);
var first__38082 = cljs.core.first(seq__38081);
var seq__38081__$1 = cljs.core.next(seq__38081);
var s2 = first__38082;
var ss2 = seq__38081__$1;
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
var G__38349 = reitit.trie._slice_end(s1,ss1);
var G__38350 = reitit.trie._slice_end(s2,ss2);
parts1 = G__38349;
parts2 = G__38350;
continue;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return false;
} else {
var G__38351 = ss1;
var G__38352 = ss2;
parts1 = G__38351;
parts2 = G__38352;
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
reitit.trie._insert = (function reitit$trie$_insert(node,p__38083,fp,params,data){
var vec__38084 = p__38083;
var seq__38085 = cljs.core.seq(vec__38084);
var first__38086 = cljs.core.first(seq__38085);
var seq__38085__$1 = cljs.core.next(seq__38085);
var path = first__38086;
var ps = seq__38085__$1;
var node_SINGLEQUOTE_ = (((path == null))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"data","data",-232669377),data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),params], 0)):(((path instanceof reitit.trie.Wild))?(function (){var next = cljs.core.first(ps);
if((((next instanceof reitit.trie.Wild)) || ((next instanceof reitit.trie.CatchAll)))){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","following-parameters","reitit.trie/following-parameters",-1072685800),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),fp,new cljs.core.Keyword(null,"parameters","parameters",-1229919748),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,next], null))], null));
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"wilds","wilds",132271223),path], null),((function (next,vec__38084,seq__38085,first__38086,seq__38085__$1,path,ps){
return (function (n){
var G__38087 = (function (){var or__4131__auto__ = n;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
}
})();
var G__38088 = ps;
var G__38089 = fp;
var G__38090 = params;
var G__38091 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__38087,G__38088,G__38089,G__38090,G__38091) : reitit.trie._insert.call(null,G__38087,G__38088,G__38089,G__38090,G__38091));
});})(next,vec__38084,seq__38085,first__38086,seq__38085__$1,path,ps))
);
}
})():(((path instanceof reitit.trie.CatchAll))?cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"catch-all","catch-all",1184112570),path], null),reitit.trie._node(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"data","data",-232669377),data], null))):((clojure.string.blank_QMARK_(path))?(reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(node,ps,fp,params,data) : reitit.trie._insert.call(null,node,ps,fp,params,data)):(function (){var or__4131__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__38084,seq__38085,first__38086,seq__38085__$1,path,ps){
return (function (_,p__38111){
var vec__38112 = p__38111;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38112,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38112,(1),null);
var temp__5718__auto__ = reitit.trie.common_prefix(p,path);
if(cljs.core.truth_(temp__5718__auto__)){
var cp = temp__5718__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cp,p)){
var n_SINGLEQUOTE_ = (function (){var G__38115 = n;
var G__38116 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ps,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(p)));
var G__38117 = fp;
var G__38118 = params;
var G__38119 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__38115,G__38116,G__38117,G__38118,G__38119) : reitit.trie._insert.call(null,G__38115,G__38116,G__38117,G__38118,G__38119));
})();
return cljs.core.reduced(cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),p], null),n_SINGLEQUOTE_));
} else {
var rp = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(p,cljs.core.count(cp));
var rp_SINGLEQUOTE_ = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(path,cljs.core.count(cp));
var n_SINGLEQUOTE_ = (function (){var G__38120 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__38121 = ps;
var G__38122 = fp;
var G__38123 = params;
var G__38124 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__38120,G__38121,G__38122,G__38123,G__38124) : reitit.trie._insert.call(null,G__38120,G__38121,G__38122,G__38123,G__38124));
})();
var n_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var G__38125 = reitit.trie._node(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.PersistentArrayMap.createAsIfByAssoc([rp,n,rp_SINGLEQUOTE_,n_SINGLEQUOTE_])], null));
var G__38126 = null;
var G__38127 = null;
var G__38128 = null;
var G__38129 = null;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__38125,G__38126,G__38127,G__38128,G__38129) : reitit.trie._insert.call(null,G__38125,G__38126,G__38127,G__38128,G__38129));
})();
return cljs.core.reduced(cljs.core.update.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"children","children",-940561982),((function (rp,rp_SINGLEQUOTE_,n_SINGLEQUOTE_,n_SINGLEQUOTE__SINGLEQUOTE_,cp,temp__5718__auto__,vec__38112,p,n,vec__38084,seq__38085,first__38086,seq__38085__$1,path,ps){
return (function (children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(children,p),cp,n_SINGLEQUOTE__SINGLEQUOTE_);
});})(rp,rp_SINGLEQUOTE_,n_SINGLEQUOTE_,n_SINGLEQUOTE__SINGLEQUOTE_,cp,temp__5718__auto__,vec__38112,p,n,vec__38084,seq__38085,first__38086,seq__38085__$1,path,ps))
));
}
} else {
return null;
}
});})(vec__38084,seq__38085,first__38086,seq__38085__$1,path,ps))
,null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.assoc_in(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),path], null),(function (){var G__38130 = reitit.trie._node(cljs.core.PersistentArrayMap.EMPTY);
var G__38131 = ps;
var G__38132 = fp;
var G__38133 = params;
var G__38134 = data;
return (reitit.trie._insert.cljs$core$IFn$_invoke$arity$5 ? reitit.trie._insert.cljs$core$IFn$_invoke$arity$5(G__38130,G__38131,G__38132,G__38133,G__38134) : reitit.trie._insert.call(null,G__38130,G__38131,G__38132,G__38133,G__38134));
})());
}
})()
))));
var temp__5718__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982),""], null));
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
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
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie38135 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.TrieCompiler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie38135 = (function (meta38136){
this.meta38136 = meta38136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie38135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38137,meta38136__$1){
var self__ = this;
var _38137__$1 = this;
return (new reitit.trie.t_reitit$trie38135(meta38136__$1));
});

reitit.trie.t_reitit$trie38135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38137){
var self__ = this;
var _38137__$1 = this;
return self__.meta38136;
});

reitit.trie.t_reitit$trie38135.prototype.reitit$trie$TrieCompiler$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie38135.prototype.reitit$trie$TrieCompiler$data_matcher$arity$3 = (function (_,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie38138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie38138 = (function (meta38136,_,params,data,match,meta38139){
this.meta38136 = meta38136;
this._ = _;
this.params = params;
this.data = data;
this.match = match;
this.meta38139 = meta38139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie38138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (match,___$1){
return (function (_38140,meta38139__$1){
var self__ = this;
var _38140__$1 = this;
return (new reitit.trie.t_reitit$trie38138(self__.meta38136,self__._,self__.params,self__.data,self__.match,meta38139__$1));
});})(match,___$1))
;

reitit.trie.t_reitit$trie38138.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (match,___$1){
return (function (_38140){
var self__ = this;
var _38140__$1 = this;
return self__.meta38139;
});})(match,___$1))
;

reitit.trie.t_reitit$trie38138.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie38138.prototype.reitit$trie$Matcher$match$arity$4 = ((function (match,___$1){
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

reitit.trie.t_reitit$trie38138.prototype.reitit$trie$Matcher$view$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return self__.data;
});})(match,___$1))
;

reitit.trie.t_reitit$trie38138.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
});})(match,___$1))
;

reitit.trie.t_reitit$trie38138.prototype.reitit$trie$Matcher$length$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(match,___$1))
;

reitit.trie.t_reitit$trie38138.getBasis = ((function (match,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38136","meta38136",-429055930,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie38135","reitit.trie/t_reitit$trie38135",1655721734,null)], null)),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta38139","meta38139",1023871206,null)], null);
});})(match,___$1))
;

reitit.trie.t_reitit$trie38138.cljs$lang$type = true;

reitit.trie.t_reitit$trie38138.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie38138";

reitit.trie.t_reitit$trie38138.cljs$lang$ctorPrWriter = ((function (match,___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.trie/t_reitit$trie38138");
});})(match,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie38138.
 */
reitit.trie.__GT_t_reitit$trie38138 = ((function (match,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie38138(meta38136__$1,___$2,params__$1,data__$1,match__$1,meta38139){
return (new reitit.trie.t_reitit$trie38138(meta38136__$1,___$2,params__$1,data__$1,match__$1,meta38139));
});})(match,___$1))
;

}

return (new reitit.trie.t_reitit$trie38138(self__.meta38136,___$1,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie38135.prototype.reitit$trie$TrieCompiler$static_matcher$arity$3 = (function (_,path,matcher){
var self__ = this;
var ___$1 = this;
var size = cljs.core.count(path);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie38141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie38141 = (function (meta38136,_,path,matcher,size,meta38142){
this.meta38136 = meta38136;
this._ = _;
this.path = path;
this.matcher = matcher;
this.size = size;
this.meta38142 = meta38142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie38141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (size,___$1){
return (function (_38143,meta38142__$1){
var self__ = this;
var _38143__$1 = this;
return (new reitit.trie.t_reitit$trie38141(self__.meta38136,self__._,self__.path,self__.matcher,self__.size,meta38142__$1));
});})(size,___$1))
;

reitit.trie.t_reitit$trie38141.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (size,___$1){
return (function (_38143){
var self__ = this;
var _38143__$1 = this;
return self__.meta38142;
});})(size,___$1))
;

reitit.trie.t_reitit$trie38141.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie38141.prototype.reitit$trie$Matcher$match$arity$4 = ((function (size,___$1){
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
var G__38378 = (j + (1));
j = G__38378;
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

reitit.trie.t_reitit$trie38141.prototype.reitit$trie$Matcher$view$arity$1 = ((function (size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.path,reitit.trie.view(self__.matcher)], null);
});})(size,___$1))
;

reitit.trie.t_reitit$trie38141.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
});})(size,___$1))
;

reitit.trie.t_reitit$trie38141.prototype.reitit$trie$Matcher$length$arity$1 = ((function (size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.count(self__.path);
});})(size,___$1))
;

reitit.trie.t_reitit$trie38141.getBasis = ((function (size,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38136","meta38136",-429055930,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie38135","reitit.trie/t_reitit$trie38135",1655721734,null)], null)),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta38142","meta38142",-633200840,null)], null);
});})(size,___$1))
;

reitit.trie.t_reitit$trie38141.cljs$lang$type = true;

reitit.trie.t_reitit$trie38141.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie38141";

reitit.trie.t_reitit$trie38141.cljs$lang$ctorPrWriter = ((function (size,___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.trie/t_reitit$trie38141");
});})(size,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie38141.
 */
reitit.trie.__GT_t_reitit$trie38141 = ((function (size,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie38141(meta38136__$1,___$2,path__$1,matcher__$1,size__$1,meta38142){
return (new reitit.trie.t_reitit$trie38141(meta38136__$1,___$2,path__$1,matcher__$1,size__$1,meta38142));
});})(size,___$1))
;

}

return (new reitit.trie.t_reitit$trie38141(self__.meta38136,___$1,path,matcher,size,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie38135.prototype.reitit$trie$TrieCompiler$wild_matcher$arity$4 = (function (_,key,end,matcher){
var self__ = this;
var ___$1 = this;
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie38144 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie38144 = (function (meta38136,_,key,end,matcher,meta38145){
this.meta38136 = meta38136;
this._ = _;
this.key = key;
this.end = end;
this.matcher = matcher;
this.meta38145 = meta38145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie38144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38146,meta38145__$1){
var self__ = this;
var _38146__$1 = this;
return (new reitit.trie.t_reitit$trie38144(self__.meta38136,self__._,self__.key,self__.end,self__.matcher,meta38145__$1));
});})(___$1))
;

reitit.trie.t_reitit$trie38144.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38146){
var self__ = this;
var _38146__$1 = this;
return self__.meta38145;
});})(___$1))
;

reitit.trie.t_reitit$trie38144.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie38144.prototype.reitit$trie$Matcher$match$arity$4 = ((function (___$1){
return (function (___$1,i,max,path){
var self__ = this;
var ___$2 = this;
if((((i < max)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,i),self__.end)))){
var percent_QMARK_ = false;
var j = i;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max,j)){
var temp__5718__auto__ = reitit.trie.match(self__.matcher,max,max,path);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,max,percent_QMARK_));
} else {
return null;
}
} else {
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path,j);
var pred__38147 = cljs.core._EQ_;
var expr__38148 = c;
if(cljs.core.truth_((pred__38147.cljs$core$IFn$_invoke$arity$2 ? pred__38147.cljs$core$IFn$_invoke$arity$2(self__.end,expr__38148) : pred__38147.call(null,self__.end,expr__38148)))){
var temp__5718__auto__ = reitit.trie.match(self__.matcher,j,max,path);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return reitit.trie.assoc_param(match,self__.key,reitit.trie.decode(path,i,j,percent_QMARK_));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__38150 = "%";
var G__38151 = expr__38148;
return (pred__38147.cljs$core$IFn$_invoke$arity$2 ? pred__38147.cljs$core$IFn$_invoke$arity$2(G__38150,G__38151) : pred__38147.call(null,G__38150,G__38151));
})())){
var G__38384 = true;
var G__38385 = (j + (1));
percent_QMARK_ = G__38384;
j = G__38385;
continue;
} else {
var G__38387 = percent_QMARK_;
var G__38388 = (j + (1));
percent_QMARK_ = G__38387;
j = G__38388;
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

reitit.trie.t_reitit$trie38144.prototype.reitit$trie$Matcher$view$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,reitit.trie.view(self__.matcher)], null);
});})(___$1))
;

reitit.trie.t_reitit$trie38144.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (reitit.trie.depth(self__.matcher) + (1));
});})(___$1))
;

reitit.trie.t_reitit$trie38144.prototype.reitit$trie$Matcher$length$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(___$1))
;

reitit.trie.t_reitit$trie38144.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38136","meta38136",-429055930,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie38135","reitit.trie/t_reitit$trie38135",1655721734,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"meta38145","meta38145",-218746598,null)], null);
});})(___$1))
;

reitit.trie.t_reitit$trie38144.cljs$lang$type = true;

reitit.trie.t_reitit$trie38144.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie38144";

reitit.trie.t_reitit$trie38144.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.trie/t_reitit$trie38144");
});})(___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie38144.
 */
reitit.trie.__GT_t_reitit$trie38144 = ((function (___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie38144(meta38136__$1,___$2,key__$1,end__$1,matcher__$1,meta38145){
return (new reitit.trie.t_reitit$trie38144(meta38136__$1,___$2,key__$1,end__$1,matcher__$1,meta38145));
});})(___$1))
;

}

return (new reitit.trie.t_reitit$trie38144(self__.meta38136,___$1,key,end,matcher,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie38135.prototype.reitit$trie$TrieCompiler$catch_all_matcher$arity$4 = (function (_,key,params,data){
var self__ = this;
var ___$1 = this;
var match = reitit.trie.__GT_Match(params,data);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie38152 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie38152 = (function (meta38136,_,key,params,data,match,meta38153){
this.meta38136 = meta38136;
this._ = _;
this.key = key;
this.params = params;
this.data = data;
this.match = match;
this.meta38153 = meta38153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie38152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (match,___$1){
return (function (_38154,meta38153__$1){
var self__ = this;
var _38154__$1 = this;
return (new reitit.trie.t_reitit$trie38152(self__.meta38136,self__._,self__.key,self__.params,self__.data,self__.match,meta38153__$1));
});})(match,___$1))
;

reitit.trie.t_reitit$trie38152.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (match,___$1){
return (function (_38154){
var self__ = this;
var _38154__$1 = this;
return self__.meta38153;
});})(match,___$1))
;

reitit.trie.t_reitit$trie38152.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie38152.prototype.reitit$trie$Matcher$match$arity$4 = ((function (match,___$1){
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

reitit.trie.t_reitit$trie38152.prototype.reitit$trie$Matcher$view$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.key,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.data], null)], null);
});})(match,___$1))
;

reitit.trie.t_reitit$trie38152.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (1);
});})(match,___$1))
;

reitit.trie.t_reitit$trie38152.prototype.reitit$trie$Matcher$length$arity$1 = ((function (match,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(match,___$1))
;

reitit.trie.t_reitit$trie38152.getBasis = ((function (match,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38136","meta38136",-429055930,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie38135","reitit.trie/t_reitit$trie38135",1655721734,null)], null)),new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"meta38153","meta38153",421627477,null)], null);
});})(match,___$1))
;

reitit.trie.t_reitit$trie38152.cljs$lang$type = true;

reitit.trie.t_reitit$trie38152.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie38152";

reitit.trie.t_reitit$trie38152.cljs$lang$ctorPrWriter = ((function (match,___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.trie/t_reitit$trie38152");
});})(match,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie38152.
 */
reitit.trie.__GT_t_reitit$trie38152 = ((function (match,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie38152(meta38136__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta38153){
return (new reitit.trie.t_reitit$trie38152(meta38136__$1,___$2,key__$1,params__$1,data__$1,match__$1,meta38153));
});})(match,___$1))
;

}

return (new reitit.trie.t_reitit$trie38152(self__.meta38136,___$1,key,params,data,match,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie38135.prototype.reitit$trie$TrieCompiler$linear_matcher$arity$3 = (function (_,matchers,ordered_QMARK_){
var self__ = this;
var ___$1 = this;
var matchers__$1 = cljs.core.vec((cljs.core.truth_(ordered_QMARK_)?matchers:cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,reitit.trie.length),matchers))));
var size = cljs.core.count(matchers__$1);
if((typeof reitit !== 'undefined') && (typeof reitit.trie !== 'undefined') && (typeof reitit.trie.t_reitit$trie38155 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.trie.Matcher}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.trie.t_reitit$trie38155 = (function (meta38136,_,matchers,ordered_QMARK_,size,meta38156){
this.meta38136 = meta38136;
this._ = _;
this.matchers = matchers;
this.ordered_QMARK_ = ordered_QMARK_;
this.size = size;
this.meta38156 = meta38156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.trie.t_reitit$trie38155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (matchers__$1,size,___$1){
return (function (_38157,meta38156__$1){
var self__ = this;
var _38157__$1 = this;
return (new reitit.trie.t_reitit$trie38155(self__.meta38136,self__._,self__.matchers,self__.ordered_QMARK_,self__.size,meta38156__$1));
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie38155.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (matchers__$1,size,___$1){
return (function (_38157){
var self__ = this;
var _38157__$1 = this;
return self__.meta38156;
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie38155.prototype.reitit$trie$Matcher$ = cljs.core.PROTOCOL_SENTINEL;

reitit.trie.t_reitit$trie38155.prototype.reitit$trie$Matcher$match$arity$4 = ((function (matchers__$1,size,___$1){
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
var G__38410 = (j + (1));
j = G__38410;
continue;
}
} else {
return null;
}
break;
}
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie38155.prototype.reitit$trie$Matcher$view$arity$1 = ((function (matchers__$1,size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(reitit.trie.view,self__.matchers);
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie38155.prototype.reitit$trie$Matcher$depth$arity$1 = ((function (matchers__$1,size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2(reitit.trie.depth,self__.matchers)) + (1));
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie38155.prototype.reitit$trie$Matcher$length$arity$1 = ((function (matchers__$1,size,___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return null;
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie38155.getBasis = ((function (matchers__$1,size,___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38136","meta38136",-429055930,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("reitit.trie","t_reitit$trie38135","reitit.trie/t_reitit$trie38135",1655721734,null)], null)),new cljs.core.Symbol(null,"matchers","matchers",-39860883,null),new cljs.core.Symbol(null,"ordered?","ordered?",-1842273081,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"meta38156","meta38156",828155917,null)], null);
});})(matchers__$1,size,___$1))
;

reitit.trie.t_reitit$trie38155.cljs$lang$type = true;

reitit.trie.t_reitit$trie38155.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie38155";

reitit.trie.t_reitit$trie38155.cljs$lang$ctorPrWriter = ((function (matchers__$1,size,___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.trie/t_reitit$trie38155");
});})(matchers__$1,size,___$1))
;

/**
 * Positional factory function for reitit.trie/t_reitit$trie38155.
 */
reitit.trie.__GT_t_reitit$trie38155 = ((function (matchers__$1,size,___$1){
return (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie38155(meta38136__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta38156){
return (new reitit.trie.t_reitit$trie38155(meta38136__$1,___$2,matchers__$2,ordered_QMARK___$1,size__$1,meta38156));
});})(matchers__$1,size,___$1))
;

}

return (new reitit.trie.t_reitit$trie38155(self__.meta38136,___$1,matchers__$1,ordered_QMARK_,size,cljs.core.PersistentArrayMap.EMPTY));
});

reitit.trie.t_reitit$trie38135.prototype.reitit$trie$TrieCompiler$_pretty$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return reitit.trie.view(matcher);
});

reitit.trie.t_reitit$trie38135.prototype.reitit$trie$TrieCompiler$_path_matcher$arity$2 = (function (_,matcher){
var self__ = this;
var ___$1 = this;
return ((function (___$1){
return (function (path){
var temp__5718__auto__ = reitit.trie.match(matcher,(0),cljs.core.count(path),path);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return reitit.trie.__GT_Match(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
} else {
return null;
}
});
;})(___$1))
});

reitit.trie.t_reitit$trie38135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta38136","meta38136",-429055930,null)], null);
});

reitit.trie.t_reitit$trie38135.cljs$lang$type = true;

reitit.trie.t_reitit$trie38135.cljs$lang$ctorStr = "reitit.trie/t_reitit$trie38135";

reitit.trie.t_reitit$trie38135.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.trie/t_reitit$trie38135");
});

/**
 * Positional factory function for reitit.trie/t_reitit$trie38135.
 */
reitit.trie.__GT_t_reitit$trie38135 = (function reitit$trie$clojure_trie_compiler_$___GT_t_reitit$trie38135(meta38136){
return (new reitit.trie.t_reitit$trie38135(meta38136));
});

}

return (new reitit.trie.t_reitit$trie38135(cljs.core.PersistentArrayMap.EMPTY));
});
reitit.trie.map_parameters = (function reitit$trie$map_parameters(keys){
return cljs.core.zipmap(keys,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null));
});
/**
 * Returns a trie with routes added to it.
 */
reitit.trie.insert = (function reitit$trie$insert(var_args){
var G__38159 = arguments.length;
switch (G__38159) {
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__38160){
var vec__38161 = p__38160;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38161,(0),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38161,(1),null);
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$3(acc,p,d);
}),node,routes);
});

reitit.trie.insert.cljs$core$IFn$_invoke$arity$3 = (function (node,path,data){
return reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(node,path,data,null);
});

reitit.trie.insert.cljs$core$IFn$_invoke$arity$4 = (function (node,path,data,p__38164){
var map__38165 = p__38164;
var map__38165__$1 = (((((!((map__38165 == null))))?(((((map__38165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38165):map__38165);
var opts = map__38165__$1;
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38165__$1,new cljs.core.Keyword("reitit.trie","parameters","reitit.trie/parameters",-1304786787),reitit.trie.map_parameters);
var parts = reitit.trie.split_path(path,opts);
var params = (function (){var G__38167 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.string_QMARK_,parts));
return (parameters.cljs$core$IFn$_invoke$arity$1 ? parameters.cljs$core$IFn$_invoke$arity$1(G__38167) : parameters.call(null,G__38167));
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
var G__38169 = arguments.length;
switch (G__38169) {
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

reitit.trie.compile.cljs$core$IFn$_invoke$arity$3 = (function (p__38170,compiler,cp){
var map__38171 = p__38170;
var map__38171__$1 = (((((!((map__38171 == null))))?(((((map__38171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38171):map__38171);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38171__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38171__$1,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38171__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var wilds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38171__$1,new cljs.core.Keyword(null,"wilds","wilds",132271223));
var catch_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38171__$1,new cljs.core.Keyword(null,"catch-all","catch-all",1184112570));
var ends = ((function (map__38171,map__38171__$1,data,params,children,wilds,catch_all){
return (function (p__38173){
var map__38174 = p__38173;
var map__38174__$1 = (((((!((map__38174 == null))))?(((((map__38174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38174):map__38174);
var children__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38174__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var or__4131__auto__ = cljs.core.keys(children__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/"], null);
}
});})(map__38171,map__38171__$1,data,params,children,wilds,catch_all))
;
var matchers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__38176 = cljs.core.PersistentVector.EMPTY;
if(cljs.core.truth_(data)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__38176,reitit.trie.data_matcher(compiler,params,data));
} else {
return G__38176;
}
})(),(function (){var iter__4523__auto__ = ((function (ends,map__38171,map__38171__$1,data,params,children,wilds,catch_all){
return (function reitit$trie$iter__38177(s__38178){
return (new cljs.core.LazySeq(null,((function (ends,map__38171,map__38171__$1,data,params,children,wilds,catch_all){
return (function (){
var s__38178__$1 = s__38178;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__38178__$1);
if(temp__5720__auto__){
var s__38178__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38178__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38178__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38180 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38179 = (0);
while(true){
if((i__38179 < size__4522__auto__)){
var vec__38181 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38179);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38181,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38181,(1),null);
cljs.core.chunk_append(b__38180,reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))));

var G__38444 = (i__38179 + (1));
i__38179 = G__38444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38180),reitit$trie$iter__38177(cljs.core.chunk_rest(s__38178__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38180),null);
}
} else {
var vec__38184 = cljs.core.first(s__38178__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38184,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38184,(1),null);
return cljs.core.cons(reitit.trie.static_matcher(compiler,p,reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))),reitit$trie$iter__38177(cljs.core.rest(s__38178__$2)));
}
} else {
return null;
}
break;
}
});})(ends,map__38171,map__38171__$1,data,params,children,wilds,catch_all))
,null,null));
});})(ends,map__38171,map__38171__$1,data,params,children,wilds,catch_all))
;
return iter__4523__auto__(children);
})()),(function (){var iter__4523__auto__ = ((function (ends,map__38171,map__38171__$1,data,params,children,wilds,catch_all){
return (function reitit$trie$iter__38187(s__38188){
return (new cljs.core.LazySeq(null,((function (ends,map__38171,map__38171__$1,data,params,children,wilds,catch_all){
return (function (){
var s__38188__$1 = s__38188;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__38188__$1);
if(temp__5720__auto__){
var s__38188__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38188__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38188__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38190 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38189 = (0);
while(true){
if((i__38189 < size__4522__auto__)){
var vec__38191 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38189);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38191,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38191,(1),null);
cljs.core.chunk_append(b__38190,(function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})());

var G__38462 = (i__38189 + (1));
i__38189 = G__38462;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38190),reitit$trie$iter__38187(cljs.core.chunk_rest(s__38188__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38190),null);
}
} else {
var vec__38194 = cljs.core.first(s__38188__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38194,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38194,(1),null);
return cljs.core.cons((function (){var pv = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p);
var ends__$1 = ends(c);
if(cljs.core.next(ends__$1)){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("reitit.trie","multiple-terminators","reitit.trie/multiple-terminators",-116295163),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"terminators","terminators",-1448255712),ends__$1,new cljs.core.Keyword(null,"path","path",-188191168),reitit.trie.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,p))], null));
} else {
return reitit.trie.wild_matcher(compiler,pv,cljs.core.ffirst(ends__$1),reitit.trie.compile.cljs$core$IFn$_invoke$arity$3(c,compiler,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cp,pv)));
}
})(),reitit$trie$iter__38187(cljs.core.rest(s__38188__$2)));
}
} else {
return null;
}
break;
}
});})(ends,map__38171,map__38171__$1,data,params,children,wilds,catch_all))
,null,null));
});})(ends,map__38171,map__38171__$1,data,params,children,wilds,catch_all))
;
return iter__4523__auto__(wilds);
})()),(function (){var iter__4523__auto__ = ((function (ends,map__38171,map__38171__$1,data,params,children,wilds,catch_all){
return (function reitit$trie$iter__38197(s__38198){
return (new cljs.core.LazySeq(null,((function (ends,map__38171,map__38171__$1,data,params,children,wilds,catch_all){
return (function (){
var s__38198__$1 = s__38198;
while(true){
var temp__5720__auto__ = cljs.core.seq(s__38198__$1);
if(temp__5720__auto__){
var s__38198__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(s__38198__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__38198__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__38200 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__38199 = (0);
while(true){
if((i__38199 < size__4522__auto__)){
var vec__38201 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__38199);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38201,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38201,(1),null);
cljs.core.chunk_append(b__38200,reitit.trie.catch_all_matcher(compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)));

var G__38501 = (i__38199 + (1));
i__38199 = G__38501;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38200),reitit$trie$iter__38197(cljs.core.chunk_rest(s__38198__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38200),null);
}
} else {
var vec__38204 = cljs.core.first(s__38198__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38204,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38204,(1),null);
return cljs.core.cons(reitit.trie.catch_all_matcher(compiler,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p),params,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(c)),reitit$trie$iter__38197(cljs.core.rest(s__38198__$2)));
}
} else {
return null;
}
break;
}
});})(ends,map__38171,map__38171__$1,data,params,children,wilds,catch_all))
,null,null));
});})(ends,map__38171,map__38171__$1,data,params,children,wilds,catch_all))
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
var G__38208 = arguments.length;
switch (G__38208) {
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
var G__38210 = arguments.length;
switch (G__38210) {
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
