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
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.frontend.history._init[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (reitit.frontend.history._init["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
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
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.frontend.history._stop[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (reitit.frontend.history._stop["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
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
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.frontend.history._on_navigate[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4488__auto__.call(null,this$,path));
} else {
var m__4485__auto__ = (reitit.frontend.history._on_navigate["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4485__auto__.call(null,this$,path));
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
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.frontend.history._get_path[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (reitit.frontend.history._get_path["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
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
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.frontend.history._href[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4488__auto__.call(null,this$,path));
} else {
var m__4485__auto__ = (reitit.frontend.history._href["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4485__auto__.call(null,this$,path));
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
(reitit.frontend.history.FragmentHistory.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k45453,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__45472 = k45453;
var G__45472__$1 = (((G__45472 instanceof cljs.core.Keyword))?G__45472.fqn:null);
switch (G__45472__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45453,else__4442__auto__);

}
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__45475){
var vec__45477 = p__45475;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45477,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45477,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#reitit.frontend.history.FragmentHistory{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),self__.on_navigate],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"router","router",1091916230),self__.router],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),self__.popstate_listener],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),self__.hashchange_listener],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173),self__.last_fragment],null))], null),self__.__extmap));
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45452){
var self__ = this;
var G__45452__$1 = this;
return (new cljs.core.RecordIter((0),G__45452__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,self__.popstate_listener,self__.hashchange_listener,self__.last_fragment,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__45494 = (function (coll__4436__auto__){
return (354327177 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__45494(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45454,other45455){
var self__ = this;
var this45454__$1 = this;
return (((!((other45455 == null)))) && ((this45454__$1.constructor === other45455.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45454__$1.on_navigate,other45455.on_navigate)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45454__$1.router,other45455.router)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45454__$1.popstate_listener,other45455.popstate_listener)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45454__$1.hashchange_listener,other45455.hashchange_listener)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45454__$1.last_fragment,other45455.last_fragment)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45454__$1.__extmap,other45455.__extmap)));
}));

(reitit.frontend.history.FragmentHistory.prototype.reitit$frontend$history$History$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.frontend.history.FragmentHistory.prototype.reitit$frontend$history$History$_init$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var last_fragment__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var this$__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173),last_fragment__$1);
var handler = (function (e){
var path = reitit.frontend.history._get_path(this$__$2);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.events.EventType.POPSTATE,e.type)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(last_fragment__$1),path)))){
return reitit.frontend.history._on_navigate(this$__$2,path);
} else {
return null;
}
});
reitit.frontend.history._on_navigate(this$__$2,reitit.frontend.history._get_path(this$__$2));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this$__$2,new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),goog.events.listen(window,goog.events.EventType.POPSTATE,handler,false),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),goog.events.listen(window,goog.events.EventType.HASHCHANGE,handler,false)], 0));
}));

(reitit.frontend.history.FragmentHistory.prototype.reitit$frontend$history$History$_stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
goog.events.unlistenByKey(self__.popstate_listener);

return goog.events.unlistenByKey(self__.hashchange_listener);
}));

(reitit.frontend.history.FragmentHistory.prototype.reitit$frontend$history$History$_on_navigate$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
cljs.core.reset_BANG_(self__.last_fragment,path);

var G__45526 = reitit.frontend.match_by_path(self__.router,path);
var G__45527 = this$__$1;
return (self__.on_navigate.cljs$core$IFn$_invoke$arity$2 ? self__.on_navigate.cljs$core$IFn$_invoke$arity$2(G__45526,G__45527) : self__.on_navigate.call(null,G__45526,G__45527));
}));

(reitit.frontend.history.FragmentHistory.prototype.reitit$frontend$history$History$_get_path$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var fragment = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(window.location.hash,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",fragment)){
return "/";
} else {
return fragment;
}
}));

(reitit.frontend.history.FragmentHistory.prototype.reitit$frontend$history$History$_href$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(path)){
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
} else {
return null;
}
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173),null,new cljs.core.Keyword(null,"router","router",1091916230),null,new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),null,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),null,new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,self__.popstate_listener,self__.hashchange_listener,self__.last_fragment,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__45452){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__45536 = cljs.core.keyword_identical_QMARK_;
var expr__45537 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__45540 = new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908);
var G__45541 = expr__45537;
return (pred__45536.cljs$core$IFn$_invoke$arity$2 ? pred__45536.cljs$core$IFn$_invoke$arity$2(G__45540,G__45541) : pred__45536.call(null,G__45540,G__45541));
})())){
return (new reitit.frontend.history.FragmentHistory(G__45452,self__.router,self__.popstate_listener,self__.hashchange_listener,self__.last_fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__45543 = new cljs.core.Keyword(null,"router","router",1091916230);
var G__45544 = expr__45537;
return (pred__45536.cljs$core$IFn$_invoke$arity$2 ? pred__45536.cljs$core$IFn$_invoke$arity$2(G__45543,G__45544) : pred__45536.call(null,G__45543,G__45544));
})())){
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,G__45452,self__.popstate_listener,self__.hashchange_listener,self__.last_fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__45545 = new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472);
var G__45546 = expr__45537;
return (pred__45536.cljs$core$IFn$_invoke$arity$2 ? pred__45536.cljs$core$IFn$_invoke$arity$2(G__45545,G__45546) : pred__45536.call(null,G__45545,G__45546));
})())){
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,G__45452,self__.hashchange_listener,self__.last_fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__45547 = new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801);
var G__45548 = expr__45537;
return (pred__45536.cljs$core$IFn$_invoke$arity$2 ? pred__45536.cljs$core$IFn$_invoke$arity$2(G__45547,G__45548) : pred__45536.call(null,G__45547,G__45548));
})())){
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,self__.popstate_listener,G__45452,self__.last_fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__45549 = new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173);
var G__45550 = expr__45537;
return (pred__45536.cljs$core$IFn$_invoke$arity$2 ? pred__45536.cljs$core$IFn$_invoke$arity$2(G__45549,G__45550) : pred__45536.call(null,G__45549,G__45550));
})())){
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,self__.popstate_listener,self__.hashchange_listener,G__45452,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,self__.popstate_listener,self__.hashchange_listener,self__.last_fragment,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__45452),null));
}
}
}
}
}
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),self__.on_navigate,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"router","router",1091916230),self__.router,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),self__.popstate_listener,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),self__.hashchange_listener,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173),self__.last_fragment,null))], null),self__.__extmap));
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__45452){
var self__ = this;
var this__4438__auto____$1 = this;
return (new reitit.frontend.history.FragmentHistory(self__.on_navigate,self__.router,self__.popstate_listener,self__.hashchange_listener,self__.last_fragment,G__45452,self__.__extmap,self__.__hash));
}));

(reitit.frontend.history.FragmentHistory.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(reitit.frontend.history.FragmentHistory.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-navigate","on-navigate",1343303619,null),new cljs.core.Symbol(null,"router","router",-1562519539,null),new cljs.core.Symbol(null,"popstate-listener","popstate-listener",-1847491297,null),new cljs.core.Symbol(null,"hashchange-listener","hashchange-listener",405542726,null),new cljs.core.Symbol(null,"last-fragment","last-fragment",720701354,null)], null);
}));

(reitit.frontend.history.FragmentHistory.cljs$lang$type = true);

(reitit.frontend.history.FragmentHistory.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"reitit.frontend.history/FragmentHistory",null,(1),null));
}));

(reitit.frontend.history.FragmentHistory.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"reitit.frontend.history/FragmentHistory");
}));

/**
 * Positional factory function for reitit.frontend.history/FragmentHistory.
 */
reitit.frontend.history.__GT_FragmentHistory = (function reitit$frontend$history$__GT_FragmentHistory(on_navigate,router,popstate_listener,hashchange_listener,last_fragment){
return (new reitit.frontend.history.FragmentHistory(on_navigate,router,popstate_listener,hashchange_listener,last_fragment,null,null,null));
});

/**
 * Factory function for reitit.frontend.history/FragmentHistory, taking a map of keywords to field values.
 */
reitit.frontend.history.map__GT_FragmentHistory = (function reitit$frontend$history$map__GT_FragmentHistory(G__45456){
var extmap__4478__auto__ = (function (){var G__45561 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45456,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472),new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173)], 0));
if(cljs.core.record_QMARK_(G__45456)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45561);
} else {
return G__45561;
}
})();
return (new reitit.frontend.history.FragmentHistory(new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908).cljs$core$IFn$_invoke$arity$1(G__45456),new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(G__45456),new cljs.core.Keyword(null,"popstate-listener","popstate-listener",806944472).cljs$core$IFn$_invoke$arity$1(G__45456),new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801).cljs$core$IFn$_invoke$arity$1(G__45456),new cljs.core.Keyword(null,"last-fragment","last-fragment",-919830173).cljs$core$IFn$_invoke$arity$1(G__45456),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

reitit.frontend.history.closest_by_tag = (function reitit$frontend$history$closest_by_tag(el,tag){
var tag__$1 = tag.toUpperCase();
var el__$1 = el;
while(true){
if(cljs.core.truth_(el__$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag__$1,el__$1.nodeName)){
return el__$1;
} else {
var G__45917 = el__$1.parentNode;
el__$1 = G__45917;
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
(reitit.frontend.history.Html5History.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k45596,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__45632 = k45596;
var G__45632__$1 = (((G__45632 instanceof cljs.core.Keyword))?G__45632.fqn:null);
switch (G__45632__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45596,else__4442__auto__);

}
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__45645){
var vec__45646 = p__45645;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45646,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45646,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#reitit.frontend.history.Html5History{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),self__.on_navigate],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"router","router",1091916230),self__.router],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"listen-key","listen-key",51973686),self__.listen_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955),self__.click_listen_key],null))], null),self__.__extmap));
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45595){
var self__ = this;
var G__45595__$1 = this;
return (new cljs.core.RecordIter((0),G__45595__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"listen-key","listen-key",51973686),new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new reitit.frontend.history.Html5History(self__.on_navigate,self__.router,self__.listen_key,self__.click_listen_key,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__45676 = (function (coll__4436__auto__){
return (-1654764186 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__45676(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45597,other45598){
var self__ = this;
var this45597__$1 = this;
return (((!((other45598 == null)))) && ((this45597__$1.constructor === other45598.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45597__$1.on_navigate,other45598.on_navigate)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45597__$1.router,other45598.router)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45597__$1.listen_key,other45598.listen_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45597__$1.click_listen_key,other45598.click_listen_key)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45597__$1.__extmap,other45598.__extmap)));
}));

(reitit.frontend.history.Html5History.prototype.reitit$frontend$history$History$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.frontend.history.Html5History.prototype.reitit$frontend$history$History$_init$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var handler = (function (e){
return this$__$1.reitit$frontend$history$History$_on_navigate$arity$2(null,this$__$1.reitit$frontend$history$History$_get_path$arity$1(null));
});
var current_domain = (((typeof location !== 'undefined'))?goog.Uri.parse(location).getDomain():null);
var ignore_anchor_click = (function reitit$frontend$history$ignore_anchor_click(e){
var temp__5735__auto__ = reitit.frontend.history.closest_by_tag(reitit.frontend.history.event_target(e),"a");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_(((((((cljs.core.not(uri.hasScheme())) && (cljs.core.not(uri.hasDomain())))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_domain,uri.getDomain()))))?((cljs.core.not(e.altKey))?((cljs.core.not(e.ctrlKey))?((cljs.core.not(e.metaKey))?((cljs.core.not(e.shiftKey))?(((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["self",null,"_blank",null], null), null),el.getAttribute("target")))))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),e.button))?((cljs.core.not(el.isContentEditable))?reitit.core.match_by_path(self__.router,uri.getPath()):false):false):false):false):false):false):false):false))){
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
});
this$__$1.reitit$frontend$history$History$_on_navigate$arity$2(null,this$__$1.reitit$frontend$history$History$_get_path$arity$1(null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"listen-key","listen-key",51973686),goog.events.listen(window,goog.events.EventType.POPSTATE,handler,false),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955),goog.events.listen(document,goog.events.EventType.CLICK,ignore_anchor_click)], 0));
}));

(reitit.frontend.history.Html5History.prototype.reitit$frontend$history$History$_on_navigate$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
var G__45724 = reitit.frontend.match_by_path(self__.router,path);
var G__45725 = this$__$1;
return (self__.on_navigate.cljs$core$IFn$_invoke$arity$2 ? self__.on_navigate.cljs$core$IFn$_invoke$arity$2(G__45724,G__45725) : self__.on_navigate.call(null,G__45724,G__45725));
}));

(reitit.frontend.history.Html5History.prototype.reitit$frontend$history$History$_stop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
goog.events.unlistenByKey(self__.listen_key);

return goog.events.unlistenByKey(self__.click_listen_key);
}));

(reitit.frontend.history.Html5History.prototype.reitit$frontend$history$History$_get_path$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.search)].join('');
}));

(reitit.frontend.history.Html5History.prototype.reitit$frontend$history$History$_href$arity$2 = (function (this$,path){
var self__ = this;
var this$__$1 = this;
return path;
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"router","router",1091916230),null,new cljs.core.Keyword(null,"listen-key","listen-key",51973686),null,new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955),null,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new reitit.frontend.history.Html5History(self__.on_navigate,self__.router,self__.listen_key,self__.click_listen_key,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__45595){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__45742 = cljs.core.keyword_identical_QMARK_;
var expr__45743 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__45745 = new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908);
var G__45746 = expr__45743;
return (pred__45742.cljs$core$IFn$_invoke$arity$2 ? pred__45742.cljs$core$IFn$_invoke$arity$2(G__45745,G__45746) : pred__45742.call(null,G__45745,G__45746));
})())){
return (new reitit.frontend.history.Html5History(G__45595,self__.router,self__.listen_key,self__.click_listen_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__45747 = new cljs.core.Keyword(null,"router","router",1091916230);
var G__45748 = expr__45743;
return (pred__45742.cljs$core$IFn$_invoke$arity$2 ? pred__45742.cljs$core$IFn$_invoke$arity$2(G__45747,G__45748) : pred__45742.call(null,G__45747,G__45748));
})())){
return (new reitit.frontend.history.Html5History(self__.on_navigate,G__45595,self__.listen_key,self__.click_listen_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__45749 = new cljs.core.Keyword(null,"listen-key","listen-key",51973686);
var G__45750 = expr__45743;
return (pred__45742.cljs$core$IFn$_invoke$arity$2 ? pred__45742.cljs$core$IFn$_invoke$arity$2(G__45749,G__45750) : pred__45742.call(null,G__45749,G__45750));
})())){
return (new reitit.frontend.history.Html5History(self__.on_navigate,self__.router,G__45595,self__.click_listen_key,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__45751 = new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955);
var G__45752 = expr__45743;
return (pred__45742.cljs$core$IFn$_invoke$arity$2 ? pred__45742.cljs$core$IFn$_invoke$arity$2(G__45751,G__45752) : pred__45742.call(null,G__45751,G__45752));
})())){
return (new reitit.frontend.history.Html5History(self__.on_navigate,self__.router,self__.listen_key,G__45595,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.frontend.history.Html5History(self__.on_navigate,self__.router,self__.listen_key,self__.click_listen_key,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__45595),null));
}
}
}
}
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),self__.on_navigate,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"router","router",1091916230),self__.router,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"listen-key","listen-key",51973686),self__.listen_key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955),self__.click_listen_key,null))], null),self__.__extmap));
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__45595){
var self__ = this;
var this__4438__auto____$1 = this;
return (new reitit.frontend.history.Html5History(self__.on_navigate,self__.router,self__.listen_key,self__.click_listen_key,G__45595,self__.__extmap,self__.__hash));
}));

(reitit.frontend.history.Html5History.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(reitit.frontend.history.Html5History.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"on-navigate","on-navigate",1343303619,null),new cljs.core.Symbol(null,"router","router",-1562519539,null),new cljs.core.Symbol(null,"listen-key","listen-key",1692505213,null),new cljs.core.Symbol(null,"click-listen-key","click-listen-key",-2012194814,null)], null);
}));

(reitit.frontend.history.Html5History.cljs$lang$type = true);

(reitit.frontend.history.Html5History.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"reitit.frontend.history/Html5History",null,(1),null));
}));

(reitit.frontend.history.Html5History.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"reitit.frontend.history/Html5History");
}));

/**
 * Positional factory function for reitit.frontend.history/Html5History.
 */
reitit.frontend.history.__GT_Html5History = (function reitit$frontend$history$__GT_Html5History(on_navigate,router,listen_key,click_listen_key){
return (new reitit.frontend.history.Html5History(on_navigate,router,listen_key,click_listen_key,null,null,null));
});

/**
 * Factory function for reitit.frontend.history/Html5History, taking a map of keywords to field values.
 */
reitit.frontend.history.map__GT_Html5History = (function reitit$frontend$history$map__GT_Html5History(G__45606){
var extmap__4478__auto__ = (function (){var G__45753 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45606,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"router","router",1091916230),new cljs.core.Keyword(null,"listen-key","listen-key",51973686),new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955)], 0));
if(cljs.core.record_QMARK_(G__45606)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45753);
} else {
return G__45753;
}
})();
return (new reitit.frontend.history.Html5History(new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908).cljs$core$IFn$_invoke$arity$1(G__45606),new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(G__45606),new cljs.core.Keyword(null,"listen-key","listen-key",51973686).cljs$core$IFn$_invoke$arity$1(G__45606),new cljs.core.Keyword(null,"click-listen-key","click-listen-key",642240955).cljs$core$IFn$_invoke$arity$1(G__45606),null,cljs.core.not_empty(extmap__4478__auto__),null));
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
var G__45763 = arguments.length;
switch (G__45763) {
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

(reitit.frontend.history.start_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (router,on_navigate){
return reitit.frontend.history.start_BANG_.cljs$core$IFn$_invoke$arity$3(router,on_navigate,null);
}));

(reitit.frontend.history.start_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (router,on_navigate,p__45775){
var map__45777 = p__45775;
var map__45777__$1 = (((((!((map__45777 == null))))?(((((map__45777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45777):map__45777);
var use_fragment = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45777__$1,new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),true);
var opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"router","router",1091916230),router,new cljs.core.Keyword(null,"on-navigate","on-navigate",-297227908),on_navigate], null);
return reitit.frontend.history._init((cljs.core.truth_(use_fragment)?reitit.frontend.history.map__GT_FragmentHistory(opts):reitit.frontend.history.map__GT_Html5History(opts)));
}));

(reitit.frontend.history.start_BANG_.cljs$lang$maxFixedArity = 3);

reitit.frontend.history.stop_BANG_ = (function reitit$frontend$history$stop_BANG_(history){
if(cljs.core.truth_(history)){
return reitit.frontend.history._stop(history);
} else {
return null;
}
});
reitit.frontend.history.href = (function reitit$frontend$history$href(var_args){
var G__45822 = arguments.length;
switch (G__45822) {
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

(reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$2 = (function (history,k){
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$3(history,k,null);
}));

(reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$3 = (function (history,k,params){
return reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$4(history,k,params,null);
}));

(reitit.frontend.history.href.cljs$core$IFn$_invoke$arity$4 = (function (history,k,params,query){
var match = reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(history),k,params);
return reitit.frontend.history._href(history,reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,query));
}));

(reitit.frontend.history.href.cljs$lang$maxFixedArity = 4);

/**
 * Sets the new route, leaving previous route in history.
 */
reitit.frontend.history.push_state = (function reitit$frontend$history$push_state(var_args){
var G__45868 = arguments.length;
switch (G__45868) {
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

(reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$2 = (function (history,k){
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$4(history,k,null,null);
}));

(reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$3 = (function (history,k,params){
return reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$4(history,k,params,null);
}));

(reitit.frontend.history.push_state.cljs$core$IFn$_invoke$arity$4 = (function (history,k,params,query){
var match = reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(history),k,params);
var path = reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,query);
window.history.pushState(null,"",reitit.frontend.history._href(history,path));

return reitit.frontend.history._on_navigate(history,path);
}));

(reitit.frontend.history.push_state.cljs$lang$maxFixedArity = 4);

/**
 * Replaces current route. I.e. current route is not left on history.
 */
reitit.frontend.history.replace_state = (function reitit$frontend$history$replace_state(var_args){
var G__45878 = arguments.length;
switch (G__45878) {
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

(reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$2 = (function (history,k){
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$4(history,k,null,null);
}));

(reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$3 = (function (history,k,params){
return reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$4(history,k,params,null);
}));

(reitit.frontend.history.replace_state.cljs$core$IFn$_invoke$arity$4 = (function (history,k,params,query){
var match = reitit.frontend.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"router","router",1091916230).cljs$core$IFn$_invoke$arity$1(history),k,params);
var path = reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,query);
window.history.replaceState(null,"",reitit.frontend.history._href(history,path));

return reitit.frontend.history._on_navigate(history,path);
}));

(reitit.frontend.history.replace_state.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=reitit.frontend.history.js.map
