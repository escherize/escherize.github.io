goog.provide('reitit.frontend.history');
goog.require('cljs.core');
goog.require('reitit.core');
goog.require('reitit.frontend');
goog.require('goog.events');
goog.require('goog.Uri');

/**
 * @interface
 */
reitit.frontend.history.History = function(){};

/**
 * Create event listeners
 */
reitit.frontend.history._init = (function reitit$frontend$history$_init(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$frontend$history$History$_init$arity$1 == null)))))){
return this$.reitit$frontend$history$History$_init$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.frontend.history._init[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reitit.frontend.history._init["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("History.-init",this$);
}
}
}
});

/**
 * Remove event listeners
 */
reitit.frontend.history._stop = (function reitit$frontend$history$_stop(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$frontend$history$History$_stop$arity$1 == null)))))){
return this$.reitit$frontend$history$History$_stop$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.frontend.history._stop[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reitit.frontend.history._stop["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("History.-stop",this$);
}
}
}
});

reitit.frontend.history._on_navigate = (function reitit$frontend$history$_on_navigate(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$frontend$history$History$_on_navigate$arity$2 == null)))))){
return this$.reitit$frontend$history$History$_on_navigate$arity$2(this$,path);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.frontend.history._on_navigate[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4434__auto__.call(null,this$,path));
} else {
var m__4431__auto__ = (reitit.frontend.history._on_navigate["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4431__auto__.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("History.-on-navigate",this$);
}
}
}
});

reitit.frontend.history._get_path = (function reitit$frontend$history$_get_path(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$frontend$history$History$_get_path$arity$1 == null)))))){
return this$.reitit$frontend$history$History$_get_path$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.frontend.history._get_path[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reitit.frontend.history._get_path["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("History.-get-path",this$);
}
}
}
});

reitit.frontend.history._href = (function reitit$frontend$history$_href(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$frontend$history$History$_href$arity$2 == null)))))){
return this$.reitit$frontend$history$History$_href$arity$2(this$,path);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.frontend.history._href[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4434__auto__.call(null,this$,path));
} else {
var m__4431__auto__ = (reitit.frontend.history._href["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4431__auto__.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("History.-href",this$);
}
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
 * @implements {reitit.frontend.history.History}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.frontend.history.FragmentHistory = (function (on_navigate,router,popstate_listener,hashchange_listener,last_fragment,__meta,__extmap,__hash){
this.on_navigate = on_navigate;
this.router = router;
this.popstate_listener = popstate_listener;
this.hashchange_listener = hashchange_listener;
this.last_fragment = last_fragment;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.frontend.history.FragmentHistory.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.frontend.history.FragmentHistory.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49621,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49628 = k49621;
var G__49628__$1 = (((G__49628 instanceof cljs.core.Keyword))?G__49628.fqn:null);
switch (G__49628__$1) {
case "on-navigate":
return self__.on_navigate;

break;
case "router":
return self__.router;

break;
case "popstate-listener":
return self__.popstate_listener;

break;
case "hashchange-listener":
return self__.hashchange_listener;

break;
case "last-fragment":
return self__.last_fragment;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49621,else__4388__auto__);

}
});

reitit.frontend.history.FragmentHistory.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49629){
var vec__49630 = p__49629;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49630,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49630,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.frontend.history.FragmentHistory.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#reitit.frontend.history.FragmentHistory{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),self__.on_navigate],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"router","router",1091916230),self__.router],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),self__.popstate_listener],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),self__.hashchange_listener],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173),self__.last_fragment],null))], null),self__.__extmap));
});

reitit.frontend.history.FragmentHistory.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49620){
var self__ = this;
var G__49620__$1 = this;
return (new cljs.core.RecordIter((0),G__49620__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.frontend.history.FragmentHistory.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.frontend.history.FragmentHistory.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,self__.popstate_listener,self__.hashchange_listener,self__.last_fragment,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.frontend.history.FragmentHistory.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

reitit.frontend.history.FragmentHistory.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__49674 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (354327177 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49674(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.frontend.history.FragmentHistory.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49622,other49623){
var self__ = this;
var this49622__$1 = this;
return (((!((other49623 == null)))) && ((this49622__$1.constructor === other49623.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49622__$1.on_navigate,other49623.on_navigate)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49622__$1.router,other49623.router)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49622__$1.popstate_listener,other49623.popstate_listener)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49622__$1.hashchange_listener,other49623.hashchange_listener)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49622__$1.last_fragment,other49623.last_fragment)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49622__$1.__extmap,other49623.__extmap)));
});

reitit.frontend.history.FragmentHistory.prototype.reitit$frontend$history$History$ = cljs.core.PROTOCOL_SENTINEL;

reitit.frontend.history.FragmentHistory.prototype.reitit$frontend$history$History$_init$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var last_fragment__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var this$__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173),last_fragment__$1);
var handler = ((function (last_fragment__$1,this$__$2,this$__$1){
return (function (e){
var path = reitit.frontend.history._get_path(this$__$2);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.events.EventType.POPSTATE,e.type)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(last_fragment__$1),path)))){
return reitit.frontend.history._on_navigate(this$__$2,path);
} else {
return null;
}
});})(last_fragment__$1,this$__$2,this$__$1))
;
reitit.frontend.history._on_navigate(this$__$2,reitit.frontend.history._get_path(this$__$2));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this$__$2,new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),goog.events.listen(window,goog.events.EventType.POPSTATE,handler,false),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),goog.events.listen(window,goog.events.EventType.HASHCHANGE,handler,false)], 0));
});

reitit.frontend.history.FragmentHistory.prototype.reitit$frontend$history$History$_stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
goog.events.unlistenByKey(self__.popstate_listener);

return goog.events.unlistenByKey(self__.hashchange_listener);
});

reitit.frontend.history.FragmentHistory.prototype.reitit$frontend$history$History$_on_navigate$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_(self__.last_fragment,path);

var G__49707 = reitit.frontend.match_by_path(self__.router,path);
var G__49708 = this$__$1;
return (self__.on_navigate.cljs$core$IFn$_invoke$arity$2 ? self__.on_navigate.cljs$core$IFn$_invoke$arity$2(G__49707,G__49708) : self__.on_navigate.call(null,G__49707,G__49708));
});

reitit.frontend.history.FragmentHistory.prototype.reitit$frontend$history$History$_get_path$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var fragment = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(window.location.hash,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",fragment)){
return "/";
} else {
return fragment;
}
});

reitit.frontend.history.FragmentHistory.prototype.reitit$frontend$history$History$_href$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(path)){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
} else {
return null;
}
});

reitit.frontend.history.FragmentHistory.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173),null,new cljs.core.Keyword(null,"router","router",1091916230),null,new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),null,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),null,new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,self__.popstate_listener,self__.hashchange_listener,self__.last_fragment,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

reitit.frontend.history.FragmentHistory.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49620){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49728 = cljs.core.keyword_identical_QMARK_;
var expr__49729 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49739 = new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908);
var G__49740 = expr__49729;
return (pred__49728.cljs$core$IFn$_invoke$arity$2 ? pred__49728.cljs$core$IFn$_invoke$arity$2(G__49739,G__49740) : pred__49728.call(null,G__49739,G__49740));
})())){
return (new reitit.frontend.history.FragmentHistory(G__49620,self__.router,self__.popstate_listener,self__.hashchange_listener,self__.last_fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49746 = new cljs.core.Keyword(null,"router","router",1091916230);
var G__49747 = expr__49729;
return (pred__49728.cljs$core$IFn$_invoke$arity$2 ? pred__49728.cljs$core$IFn$_invoke$arity$2(G__49746,G__49747) : pred__49728.call(null,G__49746,G__49747));
})())){
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,G__49620,self__.popstate_listener,self__.hashchange_listener,self__.last_fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49753 = new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472);
var G__49754 = expr__49729;
return (pred__49728.cljs$core$IFn$_invoke$arity$2 ? pred__49728.cljs$core$IFn$_invoke$arity$2(G__49753,G__49754) : pred__49728.call(null,G__49753,G__49754));
})())){
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,G__49620,self__.hashchange_listener,self__.last_fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49755 = new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801);
var G__49756 = expr__49729;
return (pred__49728.cljs$core$IFn$_invoke$arity$2 ? pred__49728.cljs$core$IFn$_invoke$arity$2(G__49755,G__49756) : pred__49728.call(null,G__49755,G__49756));
})())){
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,self__.popstate_listener,G__49620,self__.last_fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49757 = new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173);
var G__49758 = expr__49729;
return (pred__49728.cljs$core$IFn$_invoke$arity$2 ? pred__49728.cljs$core$IFn$_invoke$arity$2(G__49757,G__49758) : pred__49728.call(null,G__49757,G__49758));
})())){
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,self__.popstate_listener,self__.hashchange_listener,G__49620,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,self__.popstate_listener,self__.hashchange_listener,self__.last_fragment,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49620),null));
}
}
}
}
}
});

reitit.frontend.history.FragmentHistory.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),self__.on_navigate,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"router","router",1091916230),self__.router,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),self__.popstate_listener,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),self__.hashchange_listener,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173),self__.last_fragment,null))], null),self__.__extmap));
});

reitit.frontend.history.FragmentHistory.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49620){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,self__.popstate_listener,self__.hashchange_listener,self__.last_fragment,G__49620,self__.__extmap,self__.__hash));
});

reitit.frontend.history.FragmentHistory.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.frontend.history.FragmentHistory.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-navigate","on-navigate",1343303619,null),new cljs.core.Symbol(null,"router","router",-1562519539,null),new cljs.core.Symbol(null,"popstate-listener","popstate-listener",-1847491297,null),new cljs.core.Symbol(null,"hashchange-listener","hashchange-listener",405542726,null),new cljs.core.Symbol(null,"last-fragment","last-fragment",720701354,null)], null);
});

reitit.frontend.history.FragmentHistory.cljs$lang$type = true;

reitit.frontend.history.FragmentHistory.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.frontend.history/FragmentHistory",null,(1),null));
});

reitit.frontend.history.FragmentHistory.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.frontend.history/FragmentHistory");
});

/**
 * Positional factory function for reitit.frontend.history/FragmentHistory.
 */
reitit.frontend.history.__GT_FragmentHistory = (function reitit$frontend$history$__GT_FragmentHistory(on_navigate,router,popstate_listener,hashchange_listener,last_fragment){
return (new reitit.frontend.history.FragmentHistory(on_navigate,router,popstate_listener,hashchange_listener,last_fragment,null,null,null));
});

/**
 * Factory function for reitit.frontend.history/FragmentHistory, taking a map of keywords to field values.
 */
reitit.frontend.history.map__GT_FragmentHistory = (function reitit$frontend$history$map__GT_FragmentHistory(G__49625){
var extmap__4424__auto__ = (function (){var G__49783 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49625,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173)], 0));
if(cljs.core.record_QMARK_(G__49625)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49783);
} else {
return G__49783;
}
})();
return (new reitit.frontend.history.FragmentHistory(new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908).cljs$core$IFn$_invoke$arity$1(G__49625),new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(G__49625),new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472).cljs$core$IFn$_invoke$arity$1(G__49625),new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801).cljs$core$IFn$_invoke$arity$1(G__49625),new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173).cljs$core$IFn$_invoke$arity$1(G__49625),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

reitit.frontend.history.closest_by_tag = (function reitit$frontend$history$closest_by_tag(el,tag){
var tag__$1 = tag.toUpperCase();
var el__$1 = el;
while(true){
if(cljs.core.truth_(el__$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag__$1,el__$1.nodeName)){
return el__$1;
} else {
var G__50183 = el__$1.parentNode;
el__$1 = G__50183;
continue;
}
} else {
return null;
}
break;
}
});
reitit.frontend.history.event_target = (function reitit$frontend$history$event_target(event){

var original_event = event.getBrowserEvent();
if((!((original_event.composedPath == null)))){
return cljs.core.first(original_event.composedPath());
} else {
return event.target;
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
 * @implements {reitit.frontend.history.History}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
reitit.frontend.history.Html5History = (function (on_navigate,router,listen_key,click_listen_key,__meta,__extmap,__hash){
this.on_navigate = on_navigate;
this.router = router;
this.listen_key = listen_key;
this.click_listen_key = click_listen_key;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.frontend.history.Html5History.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.frontend.history.Html5History.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49802,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49813 = k49802;
var G__49813__$1 = (((G__49813 instanceof cljs.core.Keyword))?G__49813.fqn:null);
switch (G__49813__$1) {
case "on-navigate":
return self__.on_navigate;

break;
case "router":
return self__.router;

break;
case "listen-key":
return self__.listen_key;

break;
case "click-listen-key":
return self__.click_listen_key;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49802,else__4388__auto__);

}
});

reitit.frontend.history.Html5History.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49825){
var vec__49826 = p__49825;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49826,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49826,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.frontend.history.Html5History.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#reitit.frontend.history.Html5History{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),self__.on_navigate],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"router","router",1091916230),self__.router],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listen-key","listen-key",51973686),self__.listen_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955),self__.click_listen_key],null))], null),self__.__extmap));
});

reitit.frontend.history.Html5History.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49801){
var self__ = this;
var G__49801__$1 = this;
return (new cljs.core.RecordIter((0),G__49801__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"listen-key","listen-key",51973686),new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.frontend.history.Html5History.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.frontend.history.Html5History.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.frontend.history.Html5History(self__.on_navigate,self__.router,self__.listen_key,self__.click_listen_key,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.frontend.history.Html5History.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

reitit.frontend.history.Html5History.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__49896 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1654764186 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49896(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.frontend.history.Html5History.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49803,other49804){
var self__ = this;
var this49803__$1 = this;
return (((!((other49804 == null)))) && ((this49803__$1.constructor === other49804.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49803__$1.on_navigate,other49804.on_navigate)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49803__$1.router,other49804.router)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49803__$1.listen_key,other49804.listen_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49803__$1.click_listen_key,other49804.click_listen_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49803__$1.__extmap,other49804.__extmap)));
});

reitit.frontend.history.Html5History.prototype.reitit$frontend$history$History$ = cljs.core.PROTOCOL_SENTINEL;

reitit.frontend.history.Html5History.prototype.reitit$frontend$history$History$_init$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var handler = ((function (this$__$1){
return (function (e){
return this$__$1.reitit$frontend$history$History$_on_navigate$arity$2(null,this$__$1.reitit$frontend$history$History$_get_path$arity$1(null));
});})(this$__$1))
;
var current_domain = (((typeof location !== 'undefined'))?goog.Uri.parse(location).getDomain():null);
var ignore_anchor_click = ((function (handler,current_domain,this$__$1){
return (function reitit$frontend$history$ignore_anchor_click(e){
var temp__5735__auto__ = reitit.frontend.history.closest_by_tag(reitit.frontend.history.event_target(e),"a");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_((function (){var and__4120__auto__ = ((((cljs.core.not(uri.hasScheme())) && (cljs.core.not(uri.hasDomain())))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_domain,uri.getDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core.not(e.altKey);
if(and__4120__auto____$1){
var and__4120__auto____$2 = cljs.core.not(e.ctrlKey);
if(and__4120__auto____$2){
var and__4120__auto____$3 = cljs.core.not(e.metaKey);
if(and__4120__auto____$3){
var and__4120__auto____$4 = cljs.core.not(e.shiftKey);
if(and__4120__auto____$4){
var and__4120__auto____$5 = (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["self",null,"_blank",null], null), null),el.getAttribute("target"))));
if(and__4120__auto____$5){
var and__4120__auto____$6 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),e.button);
if(and__4120__auto____$6){
var and__4120__auto____$7 = cljs.core.not(el.isContentEditable);
if(and__4120__auto____$7){
return reitit.core.match_by_path(self__.router,uri.getPath());
} else {
return and__4120__auto____$7;
}
} else {
return and__4120__auto____$6;
}
} else {
return and__4120__auto____$5;
}
} else {
return and__4120__auto____$4;
}
} else {
return and__4120__auto____$3;
}
} else {
return and__4120__auto____$2;
}
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})())){
e.preventDefault();

var path = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri.getPath()),((cljs.core.seq(uri.getQuery()))?["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri.getQuery())].join(''):null)].join('');
window.history.pushState(null,"",path);

return this$__$1.reitit$frontend$history$History$_on_navigate$arity$2(null,path);
} else {
return null;
}
} else {
return null;
}
});})(handler,current_domain,this$__$1))
;
this$__$1.reitit$frontend$history$History$_on_navigate$arity$2(null,this$__$1.reitit$frontend$history$History$_get_path$arity$1(null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"listen-key","listen-key",51973686),goog.events.listen(window,goog.events.EventType.POPSTATE,handler,false),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955),goog.events.listen(document,goog.events.EventType.CLICK,ignore_anchor_click)], 0));
});

reitit.frontend.history.Html5History.prototype.reitit$frontend$history$History$_on_navigate$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
var G__49948 = reitit.frontend.match_by_path(self__.router,path);
var G__49949 = this$__$1;
return (self__.on_navigate.cljs$core$IFn$_invoke$arity$2 ? self__.on_navigate.cljs$core$IFn$_invoke$arity$2(G__49948,G__49949) : self__.on_navigate.call(null,G__49948,G__49949));
});

reitit.frontend.history.Html5History.prototype.reitit$frontend$history$History$_stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
goog.events.unlistenByKey(self__.listen_key);

return goog.events.unlistenByKey(self__.click_listen_key);
});

reitit.frontend.history.Html5History.prototype.reitit$frontend$history$History$_get_path$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.search)].join('');
});

reitit.frontend.history.Html5History.prototype.reitit$frontend$history$History$_href$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
return path;
});

reitit.frontend.history.Html5History.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"router","router",1091916230),null,new cljs.core.Keyword(null,"listen-key","listen-key",51973686),null,new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955),null,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.frontend.history.Html5History(self__.on_navigate,self__.router,self__.listen_key,self__.click_listen_key,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

reitit.frontend.history.Html5History.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49801){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49978 = cljs.core.keyword_identical_QMARK_;
var expr__49979 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49981 = new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908);
var G__49982 = expr__49979;
return (pred__49978.cljs$core$IFn$_invoke$arity$2 ? pred__49978.cljs$core$IFn$_invoke$arity$2(G__49981,G__49982) : pred__49978.call(null,G__49981,G__49982));
})())){
return (new reitit.frontend.history.Html5History(G__49801,self__.router,self__.listen_key,self__.click_listen_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49983 = new cljs.core.Keyword(null,"router","router",1091916230);
var G__49984 = expr__49979;
return (pred__49978.cljs$core$IFn$_invoke$arity$2 ? pred__49978.cljs$core$IFn$_invoke$arity$2(G__49983,G__49984) : pred__49978.call(null,G__49983,G__49984));
})())){
return (new reitit.frontend.history.Html5History(self__.on_navigate,G__49801,self__.listen_key,self__.click_listen_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49985 = new cljs.core.Keyword(null,"listen-key","listen-key",51973686);
var G__49986 = expr__49979;
return (pred__49978.cljs$core$IFn$_invoke$arity$2 ? pred__49978.cljs$core$IFn$_invoke$arity$2(G__49985,G__49986) : pred__49978.call(null,G__49985,G__49986));
})())){
return (new reitit.frontend.history.Html5History(self__.on_navigate,self__.router,G__49801,self__.click_listen_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49992 = new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955);
var G__49993 = expr__49979;
return (pred__49978.cljs$core$IFn$_invoke$arity$2 ? pred__49978.cljs$core$IFn$_invoke$arity$2(G__49992,G__49993) : pred__49978.call(null,G__49992,G__49993));
})())){
return (new reitit.frontend.history.Html5History(self__.on_navigate,self__.router,self__.listen_key,G__49801,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.frontend.history.Html5History(self__.on_navigate,self__.router,self__.listen_key,self__.click_listen_key,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49801),null));
}
}
}
}
});

reitit.frontend.history.Html5History.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),self__.on_navigate,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"router","router",1091916230),self__.router,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"listen-key","listen-key",51973686),self__.listen_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955),self__.click_listen_key,null))], null),self__.__extmap));
});

reitit.frontend.history.Html5History.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49801){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.frontend.history.Html5History(self__.on_navigate,self__.router,self__.listen_key,self__.click_listen_key,G__49801,self__.__extmap,self__.__hash));
});

reitit.frontend.history.Html5History.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.frontend.history.Html5History.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-navigate","on-navigate",1343303619,null),new cljs.core.Symbol(null,"router","router",-1562519539,null),new cljs.core.Symbol(null,"listen-key","listen-key",1692505213,null),new cljs.core.Symbol(null,"click-listen-key","click-listen-key",-2012194814,null)], null);
});

reitit.frontend.history.Html5History.cljs$lang$type = true;

reitit.frontend.history.Html5History.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.frontend.history/Html5History",null,(1),null));
});

reitit.frontend.history.Html5History.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.frontend.history/Html5History");
});

/**
 * Positional factory function for reitit.frontend.history/Html5History.
 */
reitit.frontend.history.__GT_Html5History = (function reitit$frontend$history$__GT_Html5History(on_navigate,router,listen_key,click_listen_key){
return (new reitit.frontend.history.Html5History(on_navigate,router,listen_key,click_listen_key,null,null,null));
});

/**
 * Factory function for reitit.frontend.history/Html5History, taking a map of keywords to field values.
 */
reitit.frontend.history.map__GT_Html5History = (function reitit$frontend$history$map__GT_Html5History(G__49805){
var extmap__4424__auto__ = (function (){var G__50023 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49805,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"listen-key","listen-key",51973686),new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955)], 0));
if(cljs.core.record_QMARK_(G__49805)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50023);
} else {
return G__50023;
}
})();
return (new reitit.frontend.history.Html5History(new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908).cljs$core$IFn$_invoke$arity$1(G__49805),new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(G__49805),new cljs.core.Keyword(null,"listen-key","listen-key",51973686).cljs$core$IFn$_invoke$arity$1(G__49805),new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955).cljs$core$IFn$_invoke$arity$1(G__49805),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

/**
 * This registers event listeners on HTML5 history and hashchange events.
 * 
 *   Returns History object.
 * 
 *   When using with development workflow like Figwheel, remember to
 *   remove listeners using stop! call before calling start! again.
 * 
 *   Parameters:
 *   - router         The Reitit router.
 *   - on-navigate    Function to be called when route changes. Takes two parameters, ´match´ and ´history´ object.
 * 
 *   Options:
 *   - :use-fragment  (default true) If true, onhashchange and location hash are used to store current route.
 */
reitit.frontend.history.start_BANG_ = (function reitit$frontend$history$start_BANG_(var_args){
var G__50030 = arguments.length;
switch (G__50030) {
case 2:
return reitit.frontend.history.start_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.history.start_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.frontend.history.start_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (router,on_navigate){
return reitit.frontend.history.start_BANG_.cljs$core$IFn$_invoke$arity$3(router,on_navigate,null);
});

reitit.frontend.history.start_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (router,on_navigate,p__50042){
var map__50043 = p__50042;
var map__50043__$1 = (((((!((map__50043 == null))))?(((((map__50043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50043):map__50043);
var use_fragment = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50043__$1,new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true);
var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"router","router",1091916230),router,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),on_navigate], null);
return reitit.frontend.history._init((cljs.core.truth_(use_fragment)?reitit.frontend.history.map__GT_FragmentHistory(opts):reitit.frontend.history.map__GT_Html5History(opts)));
});

reitit.frontend.history.start_BANG_.cljs$lang$maxFixedArity = 3;

reitit.frontend.history.stop_BANG_ = (function reitit$frontend$history$stop_BANG_(history){
if(cljs.core.truth_(history)){
return reitit.frontend.history._stop(history);
} else {
return null;
}
});
reitit.frontend.history.href = (function reitit$frontend$history$href(var_args){
var G__50059 = arguments.length;
switch (G__50059) {
case 2:
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$2 = (function (history,k){
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$3(history,k,null);
});

reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$3 = (function (history,k,params){
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$4(history,k,params,null);
});

reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$4 = (function (history,k,params,query){
var match = reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(history),k,params);
return reitit.frontend.history._href(history,reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,query));
});

reitit.frontend.history.href.cljs$lang$maxFixedArity = 4;

/**
 * Sets the new route, leaving previous route in history.
 */
reitit.frontend.history.push_state = (function reitit$frontend$history$push_state(var_args){
var G__50066 = arguments.length;
switch (G__50066) {
case 2:
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$2 = (function (history,k){
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$4(history,k,null,null);
});

reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$3 = (function (history,k,params){
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$4(history,k,params,null);
});

reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$4 = (function (history,k,params,query){
var match = reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(history),k,params);
var path = reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,query);
window.history.pushState(null,"",reitit.frontend.history._href(history,path));

return reitit.frontend.history._on_navigate(history,path);
});

reitit.frontend.history.push_state.cljs$lang$maxFixedArity = 4;

/**
 * Replaces current route. I.e. current route is not left on history.
 */
reitit.frontend.history.replace_state = (function reitit$frontend$history$replace_state(var_args){
var G__50073 = arguments.length;
switch (G__50073) {
case 2:
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$2 = (function (history,k){
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$4(history,k,null,null);
});

reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$3 = (function (history,k,params){
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$4(history,k,params,null);
});

reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$4 = (function (history,k,params,query){
var match = reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(history),k,params);
var path = reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,query);
window.history.replaceState(null,"",reitit.frontend.history._href(history,path));

return reitit.frontend.history._on_navigate(history,path);
});

reitit.frontend.history.replace_state.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=reitit.frontend.history.js.map
