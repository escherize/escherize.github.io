goog.provide('reitit.core');
goog.require('cljs.core');
goog.require('reitit.impl');
goog.require('reitit.exception');
goog.require('reitit.trie');

/**
 * @interface
 */
reitit.core.Expand = function(){};

reitit.core.expand = (function reitit$core$expand(this$,opts){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Expand$expand$arity$2 == null)))))){
return this$.reitit$core$Expand$expand$arity$2(this$,opts);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.expand[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4434__auto__.call(null,this$,opts));
} else {
var m__4431__auto__ = (reitit.core.expand["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4431__auto__.call(null,this$,opts));
} else {
throw cljs.core.missing_protocol("Expand.expand",this$);
}
}
}
});

cljs.core.Keyword.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),this$__$1], null);
});

cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentHashMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentHashMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
});

goog.object.set(reitit.core.Expand,"function",true);

var G__39156_39441 = reitit.core.expand;
var G__39157_39442 = "function";
var G__39158_39443 = ((function (G__39156_39441,G__39157_39442){
return (function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),this$], null);
});})(G__39156_39441,G__39157_39442))
;
goog.object.set(G__39156_39441,G__39157_39442,G__39158_39443);

goog.object.set(reitit.core.Expand,"null",true);

var G__39159_39444 = reitit.core.expand;
var G__39160_39445 = "null";
var G__39161_39446 = ((function (G__39159_39444,G__39160_39445){
return (function (_,___$1){
return null;
});})(G__39159_39444,G__39160_39445))
;
goog.object.set(G__39159_39444,G__39160_39445,G__39161_39446);

/**
 * @interface
 */
reitit.core.Router = function(){};

reitit.core.router_name = (function reitit$core$router_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$router_name$arity$1 == null)))))){
return this$.reitit$core$Router$router_name$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.router_name[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reitit.core.router_name["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.router-name",this$);
}
}
}
});

reitit.core.routes = (function reitit$core$routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$routes$arity$1 == null)))))){
return this$.reitit$core$Router$routes$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.routes[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reitit.core.routes["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.routes",this$);
}
}
}
});

reitit.core.compiled_routes = (function reitit$core$compiled_routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$compiled_routes$arity$1 == null)))))){
return this$.reitit$core$Router$compiled_routes$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.compiled_routes[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reitit.core.compiled_routes["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.compiled-routes",this$);
}
}
}
});

reitit.core.options = (function reitit$core$options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$options$arity$1 == null)))))){
return this$.reitit$core$Router$options$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.options[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reitit.core.options["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.options",this$);
}
}
}
});

reitit.core.route_names = (function reitit$core$route_names(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$route_names$arity$1 == null)))))){
return this$.reitit$core$Router$route_names$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.route_names[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (reitit.core.route_names["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.route-names",this$);
}
}
}
});

reitit.core.match_by_path = (function reitit$core$match_by_path(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_path$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_path$arity$2(this$,path);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.match_by_path[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4434__auto__.call(null,this$,path));
} else {
var m__4431__auto__ = (reitit.core.match_by_path["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4431__auto__.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("Router.match-by-path",this$);
}
}
}
});

reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__39169 = arguments.length;
switch (G__39169) {
case 2:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$2(this$,name);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4434__auto__.call(null,this$,name));
} else {
var m__4431__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4431__auto__.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
}
});

reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$3 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__4434__auto__.call(null,this$,name,path_params));
} else {
var m__4431__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__4431__auto__.call(null,this$,name,path_params));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
}
});

reitit.core.match_by_name.cljs$lang$maxFixedArity = 3;


reitit.core.router_QMARK_ = (function reitit$core$router_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reitit$core$Router$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
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
reitit.core.Match = (function (template,data,result,path_params,path,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k39180,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__39197 = k39180;
var G__39197__$1 = (((G__39197 instanceof cljs.core.Keyword))?G__39197.fqn:null);
switch (G__39197__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39180,else__4388__auto__);

}
});

reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__39201){
var vec__39202 = p__39201;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39202,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39202,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#reitit.core.Match{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39179){
var self__ = this;
var G__39179__$1 = this;
return (new cljs.core.RecordIter((0),G__39179__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__39206 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__39206(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39181,other39182){
var self__ = this;
var this39181__$1 = this;
return (((!((other39182 == null)))) && ((this39181__$1.constructor === other39182.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39181__$1.template,other39182.template)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39181__$1.data,other39182.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39181__$1.result,other39182.result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39181__$1.path_params,other39182.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39181__$1.path,other39182.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39181__$1.__extmap,other39182.__extmap)));
});

reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__39179){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__39213 = cljs.core.keyword_identical_QMARK_;
var expr__39214 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__39216 = new cljs.core.Keyword(null,"template","template",-702405684);
var G__39217 = expr__39214;
return (pred__39213.cljs$core$IFn$_invoke$arity$2 ? pred__39213.cljs$core$IFn$_invoke$arity$2(G__39216,G__39217) : pred__39213.call(null,G__39216,G__39217));
})())){
return (new reitit.core.Match(G__39179,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__39222 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__39223 = expr__39214;
return (pred__39213.cljs$core$IFn$_invoke$arity$2 ? pred__39213.cljs$core$IFn$_invoke$arity$2(G__39222,G__39223) : pred__39213.call(null,G__39222,G__39223));
})())){
return (new reitit.core.Match(self__.template,G__39179,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__39224 = new cljs.core.Keyword(null,"result","result",1415092211);
var G__39225 = expr__39214;
return (pred__39213.cljs$core$IFn$_invoke$arity$2 ? pred__39213.cljs$core$IFn$_invoke$arity$2(G__39224,G__39225) : pred__39213.call(null,G__39224,G__39225));
})())){
return (new reitit.core.Match(self__.template,self__.data,G__39179,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__39226 = new cljs.core.Keyword(null,"path-params","path-params",-48130597);
var G__39227 = expr__39214;
return (pred__39213.cljs$core$IFn$_invoke$arity$2 ? pred__39213.cljs$core$IFn$_invoke$arity$2(G__39226,G__39227) : pred__39213.call(null,G__39226,G__39227));
})())){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__39179,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__39228 = new cljs.core.Keyword(null,"path","path",-188191168);
var G__39229 = expr__39214;
return (pred__39213.cljs$core$IFn$_invoke$arity$2 ? pred__39213.cljs$core$IFn$_invoke$arity$2(G__39228,G__39229) : pred__39213.call(null,G__39228,G__39229));
})())){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__39179,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__39179),null));
}
}
}
}
}
});

reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
});

reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__39179){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__39179,self__.__extmap,self__.__hash));
});

reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
});

reitit.core.Match.cljs$lang$type = true;

reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
});

reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.core/Match");
});

/**
 * Positional factory function for reitit.core/Match.
 */
reitit.core.__GT_Match = (function reitit$core$__GT_Match(template,data,result,path_params,path){
return (new reitit.core.Match(template,data,result,path_params,path,null,null,null));
});

/**
 * Factory function for reitit.core/Match, taking a map of keywords to field values.
 */
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__39183){
var extmap__4424__auto__ = (function (){var G__39231 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39183,new cljs.core.Keyword(null,"template","template",-702405684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], 0));
if(cljs.core.record_QMARK_(G__39183)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39231);
} else {
return G__39231;
}
})();
return (new reitit.core.Match(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__39183),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__39183),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__39183),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__39183),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__39183),null,cljs.core.not_empty(extmap__4424__auto__),null));
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
reitit.core.PartialMatch = (function (template,data,result,path_params,required,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.required = required;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k39233,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__39242 = k39233;
var G__39242__$1 = (((G__39242 instanceof cljs.core.Keyword))?G__39242.fqn:null);
switch (G__39242__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "required":
return self__.required;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39233,else__4388__auto__);

}
});

reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__39249){
var vec__39250 = p__39249;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39250,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39250,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#reitit.core.PartialMatch{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null))], null),self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39232){
var self__ = this;
var G__39232__$1 = this;
return (new cljs.core.RecordIter((0),G__39232__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

reitit.core.PartialMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

reitit.core.PartialMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,self__.__hash));
});

reitit.core.PartialMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__39254 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__39254(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39234,other39235){
var self__ = this;
var this39234__$1 = this;
return (((!((other39235 == null)))) && ((this39234__$1.constructor === other39235.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39234__$1.template,other39235.template)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39234__$1.data,other39235.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39234__$1.result,other39235.result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39234__$1.path_params,other39235.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39234__$1.required,other39235.required)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39234__$1.__extmap,other39235.__extmap)));
});

reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"required","required",1807647006),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__39232){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__39255 = cljs.core.keyword_identical_QMARK_;
var expr__39256 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__39258 = new cljs.core.Keyword(null,"template","template",-702405684);
var G__39259 = expr__39256;
return (pred__39255.cljs$core$IFn$_invoke$arity$2 ? pred__39255.cljs$core$IFn$_invoke$arity$2(G__39258,G__39259) : pred__39255.call(null,G__39258,G__39259));
})())){
return (new reitit.core.PartialMatch(G__39232,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__39261 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__39262 = expr__39256;
return (pred__39255.cljs$core$IFn$_invoke$arity$2 ? pred__39255.cljs$core$IFn$_invoke$arity$2(G__39261,G__39262) : pred__39255.call(null,G__39261,G__39262));
})())){
return (new reitit.core.PartialMatch(self__.template,G__39232,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__39265 = new cljs.core.Keyword(null,"result","result",1415092211);
var G__39266 = expr__39256;
return (pred__39255.cljs$core$IFn$_invoke$arity$2 ? pred__39255.cljs$core$IFn$_invoke$arity$2(G__39265,G__39266) : pred__39255.call(null,G__39265,G__39266));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__39232,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__39267 = new cljs.core.Keyword(null,"path-params","path-params",-48130597);
var G__39268 = expr__39256;
return (pred__39255.cljs$core$IFn$_invoke$arity$2 ? pred__39255.cljs$core$IFn$_invoke$arity$2(G__39267,G__39268) : pred__39255.call(null,G__39267,G__39268));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__39232,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__39269 = new cljs.core.Keyword(null,"required","required",1807647006);
var G__39270 = expr__39256;
return (pred__39255.cljs$core$IFn$_invoke$arity$2 ? pred__39255.cljs$core$IFn$_invoke$arity$2(G__39269,G__39270) : pred__39255.call(null,G__39269,G__39270));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__39232,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__39232),null));
}
}
}
}
}
});

reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null))], null),self__.__extmap));
});

reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__39232){
var self__ = this;
var this__4384__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__39232,self__.__extmap,self__.__hash));
});

reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"required","required",-846788763,null)], null);
});

reitit.core.PartialMatch.cljs$lang$type = true;

reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
});

reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.core/PartialMatch");
});

/**
 * Positional factory function for reitit.core/PartialMatch.
 */
reitit.core.__GT_PartialMatch = (function reitit$core$__GT_PartialMatch(template,data,result,path_params,required){
return (new reitit.core.PartialMatch(template,data,result,path_params,required,null,null,null));
});

/**
 * Factory function for reitit.core/PartialMatch, taking a map of keywords to field values.
 */
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__39236){
var extmap__4424__auto__ = (function (){var G__39276 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39236,new cljs.core.Keyword(null,"template","template",-702405684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], 0));
if(cljs.core.record_QMARK_(G__39236)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39276);
} else {
return G__39276;
}
})();
return (new reitit.core.PartialMatch(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__39236),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__39236),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__39236),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__39236),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__39236),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__39278 = arguments.length;
switch (G__39278) {
case 2:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(this$,name,null);
});

reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
var temp__5718__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(this$,name,path_params);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
if((!(reitit.core.partial_match_QMARK_(match)))){
return match;
} else {
return reitit.impl.throw_on_missing_path_params(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match),path_params);
}
} else {
return null;
}
});

reitit.core.match_by_name_BANG_.cljs$lang$maxFixedArity = 3;

reitit.core.match__GT_path = (function reitit$core$match__GT_path(var_args){
var G__39283 = arguments.length;
switch (G__39283) {
case 1:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,null);
});

reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
var G__39288 = match;
var G__39288__$1 = (((G__39288 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__39288));
if((G__39288__$1 == null)){
return null;
} else {
var G__39289 = G__39288__$1;
if(cljs.core.seq(query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39289),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reitit.impl.query_string(query_params))].join('');
} else {
return G__39289;
}
}
});

reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2;

/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__39298 = arguments.length;
switch (G__39298) {
case 1:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = new cljs.core.Keyword("reitit.trie","trie-compiler","reitit.trie/trie-compiler",2125029755).cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler());
var names = reitit.impl.find_names(compiled_routes,opts);
var vec__39303 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (compiler,names){
return (function (p__39310,p__39311){
var vec__39313 = p__39310;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39313,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39313,(1),null);
var vec__39316 = p__39311;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39316,(0),null);
var map__39319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39316,(1),null);
var map__39319__$1 = (((((!((map__39319 == null))))?(((((map__39319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39319):map__39319);
var data = map__39319__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39319__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39316,(2),null);
var map__39321 = reitit.impl.parse(p,opts);
var map__39321__$1 = (((((!((map__39321 == null))))?(((((map__39321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39321):map__39321);
var route = map__39321__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39321__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = ((function (map__39321,map__39321__$1,route,path_params,vec__39313,pl,nl,vec__39316,p,map__39319,map__39319__$1,data,name,result,compiler,names){
return (function (p1__39293_SHARP_){
var temp__5718__auto__ = reitit.impl.path_for(route,p1__39293_SHARP_);
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__39293_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__39293_SHARP_),path_params);
}
});})(map__39321,map__39321__$1,route,path_params,vec__39313,pl,nl,vec__39316,p,map__39319,map__39319__$1,data,name,result,compiler,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pl,reitit.trie.compile.cljs$core$IFn$_invoke$arity$1(reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(null,p,reitit.core.__GT_Match(p,data,result,null,null),opts))),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
});})(compiler,names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39303,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39303,(1),null);
var lookup = reitit.impl.fast_map(nl);
var matcher = reitit.trie.linear_matcher(compiler,pl,true);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core39328 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core39328 = (function (matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,vec__39303,meta39329){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.vec__39303 = vec__39303;
this.meta39329 = meta39329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core39328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_39330,meta39329__$1){
var self__ = this;
var _39330__$1 = this;
return (new reitit.core.t_reitit$core39328(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.match_by_path,self__.compiler,self__.opts,self__.vec__39303,meta39329__$1));
});})(compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core39328.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_39330){
var self__ = this;
var _39330__$1 = this;
return self__.meta39329;
});})(compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core39328.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core39328.prototype.reitit$core$Router$router_name$arity$1 = ((function (compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"linear-router","linear-router",-755184172);
});})(compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core39328.prototype.reitit$core$Router$routes$arity$1 = ((function (compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core39328.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core39328.prototype.reitit$core$Router$options$arity$1 = ((function (compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core39328.prototype.reitit$core$Router$route_names$arity$1 = ((function (compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core39328.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
});})(compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core39328.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
});})(compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core39328.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__39342 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__39342) : match.call(null,G__39342));
} else {
return null;
}
});})(compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core39328.getBasis = ((function (compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"vec__39303","vec__39303",1813622782,null),new cljs.core.Symbol(null,"meta39329","meta39329",2028284439,null)], null);
});})(compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes))
;

reitit.core.t_reitit$core39328.cljs$lang$type = true;

reitit.core.t_reitit$core39328.cljs$lang$ctorStr = "reitit.core/t_reitit$core39328";

reitit.core.t_reitit$core39328.cljs$lang$ctorPrWriter = ((function (compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.core/t_reitit$core39328");
});})(compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core39328.
 */
reitit.core.__GT_t_reitit$core39328 = ((function (compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes){
return (function reitit$core$__GT_t_reitit$core39328(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,vec__39303__$1,meta39329){
return (new reitit.core.t_reitit$core39328(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,match_by_path__$1,compiler__$1,opts__$1,vec__39303__$1,meta39329));
});})(compiler,names,vec__39303,pl,nl,lookup,matcher,match_by_path,routes))
;

}

return (new reitit.core.t_reitit$core39328(matcher,names,compiled_routes,routes,lookup,pl,nl,match_by_path,compiler,opts,vec__39303,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.linear_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__39345 = arguments.length;
switch (G__39345) {
case 1:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var temp__5720__auto___39502 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes));
if(temp__5720__auto___39502){
var wilds_39503 = temp__5720__auto___39502;
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_39503)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wilds","wilds",132271223),wilds_39503,new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var names = reitit.impl.find_names(compiled_routes,opts);
var vec__39346 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (names){
return (function (p__39349,p__39350){
var vec__39351 = p__39349;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39351,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39351,(1),null);
var vec__39354 = p__39350;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39354,(0),null);
var map__39357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39354,(1),null);
var map__39357__$1 = (((((!((map__39357 == null))))?(((((map__39357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39357):map__39357);
var data = map__39357__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39357__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39354,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pl,p,reitit.core.__GT_Match(p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,((function (vec__39351,pl,nl,vec__39354,p,map__39357,map__39357__$1,data,name,result,names){
return (function (p1__39343_SHARP_){
return reitit.core.__GT_Match(p,data,result,p1__39343_SHARP_,p);
});})(vec__39351,pl,nl,vec__39354,p,map__39357,map__39357__$1,data,name,result,names))
):nl)], null);
});})(names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39346,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39346,(1),null);
var data = reitit.impl.fast_map(pl);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core39359 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core39359 = (function (names,data,compiled_routes,routes,lookup,pl,vec__39346,nl,opts,meta39360){
this.names = names;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.vec__39346 = vec__39346;
this.nl = nl;
this.opts = opts;
this.meta39360 = meta39360;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core39359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (names,vec__39346,pl,nl,data,lookup,routes){
return (function (_39361,meta39360__$1){
var self__ = this;
var _39361__$1 = this;
return (new reitit.core.t_reitit$core39359(self__.names,self__.data,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.vec__39346,self__.nl,self__.opts,meta39360__$1));
});})(names,vec__39346,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core39359.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (names,vec__39346,pl,nl,data,lookup,routes){
return (function (_39361){
var self__ = this;
var _39361__$1 = this;
return self__.meta39360;
});})(names,vec__39346,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core39359.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core39359.prototype.reitit$core$Router$router_name$arity$1 = ((function (names,vec__39346,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"lookup-router","lookup-router",-684998665);
});})(names,vec__39346,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core39359.prototype.reitit$core$Router$routes$arity$1 = ((function (names,vec__39346,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(names,vec__39346,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core39359.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (names,vec__39346,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(names,vec__39346,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core39359.prototype.reitit$core$Router$options$arity$1 = ((function (names,vec__39346,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(names,vec__39346,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core39359.prototype.reitit$core$Router$route_names$arity$1 = ((function (names,vec__39346,pl,nl,data,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(names,vec__39346,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core39359.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (names,vec__39346,pl,nl,data,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get(self__.data,path);
});})(names,vec__39346,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core39359.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (names,vec__39346,pl,nl,data,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
});})(names,vec__39346,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core39359.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (names,vec__39346,pl,nl,data,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__39363 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__39363) : match.call(null,G__39363));
} else {
return null;
}
});})(names,vec__39346,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core39359.getBasis = ((function (names,vec__39346,pl,nl,data,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"vec__39346","vec__39346",-1801738473,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta39360","meta39360",-282568114,null)], null);
});})(names,vec__39346,pl,nl,data,lookup,routes))
;

reitit.core.t_reitit$core39359.cljs$lang$type = true;

reitit.core.t_reitit$core39359.cljs$lang$ctorStr = "reitit.core/t_reitit$core39359";

reitit.core.t_reitit$core39359.cljs$lang$ctorPrWriter = ((function (names,vec__39346,pl,nl,data,lookup,routes){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.core/t_reitit$core39359");
});})(names,vec__39346,pl,nl,data,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core39359.
 */
reitit.core.__GT_t_reitit$core39359 = ((function (names,vec__39346,pl,nl,data,lookup,routes){
return (function reitit$core$__GT_t_reitit$core39359(names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,vec__39346__$1,nl__$1,opts__$1,meta39360){
return (new reitit.core.t_reitit$core39359(names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,vec__39346__$1,nl__$1,opts__$1,meta39360));
});})(names,vec__39346,pl,nl,data,lookup,routes))
;

}

return (new reitit.core.t_reitit$core39359(names,data,compiled_routes,routes,lookup,pl,vec__39346,nl,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.lookup_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a special prefix-tree router from resolved routes and optional
 *   expanded options. See [[router]] for available options, plus the following:
 * 
 *   | key                          | description |
 *   | -----------------------------|-------------|
 *   | `:reitit.trie/trie-compiler` | Optional trie-compiler.
 *   | `:reitit.trie/parameters`    | Optional function to create empty map(-like) path parameters value from sequence of keys.
 */
reitit.core.trie_router = (function reitit$core$trie_router(var_args){
var G__39366 = arguments.length;
switch (G__39366) {
case 1:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.trie_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var compiler = new cljs.core.Keyword("reitit.trie","trie-compiler","reitit.trie/trie-compiler",2125029755).cljs$core$IFn$_invoke$arity$2(opts,reitit.trie.compiler());
var names = reitit.impl.find_names(compiled_routes,opts);
var vec__39368 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (compiler,names){
return (function (p__39371,p__39372){
var vec__39373 = p__39371;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39373,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39373,(1),null);
var vec__39376 = p__39372;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39376,(0),null);
var map__39379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39376,(1),null);
var map__39379__$1 = (((((!((map__39379 == null))))?(((((map__39379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39379):map__39379);
var data = map__39379__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39379__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39376,(2),null);
var map__39381 = reitit.impl.parse(p,opts);
var map__39381__$1 = (((((!((map__39381 == null))))?(((((map__39381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39381):map__39381);
var route = map__39381__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39381__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = ((function (map__39381,map__39381__$1,route,path_params,vec__39373,pl,nl,vec__39376,p,map__39379,map__39379__$1,data,name,result,compiler,names){
return (function (p1__39364_SHARP_){
var temp__5718__auto__ = reitit.impl.path_for(route,p1__39364_SHARP_);
if(cljs.core.truth_(temp__5718__auto__)){
var path = temp__5718__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__39364_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,reitit.impl.url_decode_coll(p1__39364_SHARP_),path_params);
}
});})(map__39381,map__39381__$1,route,path_params,vec__39373,pl,nl,vec__39376,p,map__39379,map__39379__$1,data,name,result,compiler,names))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.trie.insert.cljs$core$IFn$_invoke$arity$4(pl,p,reitit.core.__GT_Match(p,data,result,null,null),opts),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
});})(compiler,names))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39368,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39368,(1),null);
var matcher = reitit.trie.compile.cljs$core$IFn$_invoke$arity$2(pl,compiler);
var match_by_path = reitit.trie.path_matcher.cljs$core$IFn$_invoke$arity$2(matcher,compiler);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core39383 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core39383 = (function (matcher,names,compiled_routes,routes,lookup,pl,nl,vec__39368,match_by_path,compiler,opts,meta39384){
this.matcher = matcher;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.vec__39368 = vec__39368;
this.match_by_path = match_by_path;
this.compiler = compiler;
this.opts = opts;
this.meta39384 = meta39384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core39383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_39385,meta39384__$1){
var self__ = this;
var _39385__$1 = this;
return (new reitit.core.t_reitit$core39383(self__.matcher,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.vec__39368,self__.match_by_path,self__.compiler,self__.opts,meta39384__$1));
});})(compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core39383.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_39385){
var self__ = this;
var _39385__$1 = this;
return self__.meta39384;
});})(compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core39383.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core39383.prototype.reitit$core$Router$router_name$arity$1 = ((function (compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"trie-router","trie-router",1876430760);
});})(compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core39383.prototype.reitit$core$Router$routes$arity$1 = ((function (compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core39383.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core39383.prototype.reitit$core$Router$options$arity$1 = ((function (compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core39383.prototype.reitit$core$Router$route_names$arity$1 = ((function (compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core39383.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = (self__.match_by_path.cljs$core$IFn$_invoke$arity$1 ? self__.match_by_path.cljs$core$IFn$_invoke$arity$1(path) : self__.match_by_path.call(null,path));
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
});})(compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core39383.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
});})(compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core39383.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5718__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5718__auto__)){
var match = temp__5718__auto__;
var G__39386 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__39386) : match.call(null,G__39386));
} else {
return null;
}
});})(compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core39383.getBasis = ((function (compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"matcher","matcher",1187762532,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"vec__39368","vec__39368",598512505,null),new cljs.core.Symbol(null,"match-by-path","match-by-path",272707419,null),new cljs.core.Symbol(null,"compiler","compiler",1372604796,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta39384","meta39384",958596678,null)], null);
});})(compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes))
;

reitit.core.t_reitit$core39383.cljs$lang$type = true;

reitit.core.t_reitit$core39383.cljs$lang$ctorStr = "reitit.core/t_reitit$core39383";

reitit.core.t_reitit$core39383.cljs$lang$ctorPrWriter = ((function (compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.core/t_reitit$core39383");
});})(compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core39383.
 */
reitit.core.__GT_t_reitit$core39383 = ((function (compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes){
return (function reitit$core$__GT_t_reitit$core39383(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,vec__39368__$1,match_by_path__$1,compiler__$1,opts__$1,meta39384){
return (new reitit.core.t_reitit$core39383(matcher__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,vec__39368__$1,match_by_path__$1,compiler__$1,opts__$1,meta39384));
});})(compiler,names,vec__39368,pl,nl,matcher,match_by_path,lookup,routes))
;

}

return (new reitit.core.t_reitit$core39383(matcher,names,compiled_routes,routes,lookup,pl,nl,vec__39368,match_by_path,compiler,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.trie_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__39388 = arguments.length;
switch (G__39388) {
case 1:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(compiled_routes),(1));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
}
})())){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2([":single-static-path-router requires exactly 1 static route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var vec__39389 = reitit.impl.find_names(compiled_routes,opts);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39389,(0),null);
var names = vec__39389;
var vec__39392 = compiled_routes;
var vec__39395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39392,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39395,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39395,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39395,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match(p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core39398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core39398 = (function (p,names,match,data,compiled_routes,vec__39395,routes,vec__39392,n,vec__39389,result,opts,meta39399){
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.vec__39395 = vec__39395;
this.routes = routes;
this.vec__39392 = vec__39392;
this.n = n;
this.vec__39389 = vec__39389;
this.result = result;
this.opts = opts;
this.meta39399 = meta39399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core39398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes){
return (function (_39400,meta39399__$1){
var self__ = this;
var _39400__$1 = this;
return (new reitit.core.t_reitit$core39398(self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.vec__39395,self__.routes,self__.vec__39392,self__.n,self__.vec__39389,self__.result,self__.opts,meta39399__$1));
});})(vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core39398.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes){
return (function (_39400){
var self__ = this;
var _39400__$1 = this;
return self__.meta39399;
});})(vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core39398.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core39398.prototype.reitit$core$Router$router_name$arity$1 = ((function (vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"single-static-path-router","single-static-path-router",-247523580);
});})(vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core39398.prototype.reitit$core$Router$routes$arity$1 = ((function (vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core39398.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core39398.prototype.reitit$core$Router$options$arity$1 = ((function (vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core39398.prototype.reitit$core$Router$route_names$arity$1 = ((function (vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core39398.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,path)){
return self__.match;
} else {
return null;
}
});})(vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core39398.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return self__.match;
} else {
return null;
}
});})(vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core39398.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return reitit.impl.fast_assoc(self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.path_params(path_params));
} else {
return null;
}
});})(vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core39398.getBasis = ((function (vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes){
return (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"vec__39395","vec__39395",298908104,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"vec__39392","vec__39392",331327664,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"vec__39389","vec__39389",846647802,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta39399","meta39399",-1906948355,null)], null);
});})(vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes))
;

reitit.core.t_reitit$core39398.cljs$lang$type = true;

reitit.core.t_reitit$core39398.cljs$lang$ctorStr = "reitit.core/t_reitit$core39398";

reitit.core.t_reitit$core39398.cljs$lang$ctorPrWriter = ((function (vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.core/t_reitit$core39398");
});})(vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core39398.
 */
reitit.core.__GT_t_reitit$core39398 = ((function (vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes){
return (function reitit$core$__GT_t_reitit$core39398(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,vec__39395__$1,routes__$1,vec__39392__$1,n__$1,vec__39389__$1,result__$1,opts__$1,meta39399){
return (new reitit.core.t_reitit$core39398(p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,vec__39395__$1,routes__$1,vec__39392__$1,n__$1,vec__39389__$1,result__$1,opts__$1,meta39399));
});})(vec__39389,n,names,vec__39392,vec__39395,p,data,result,p__$1,match,routes))
;

}

return (new reitit.core.t_reitit$core39398(p__$1,names,match,data,compiled_routes,vec__39395,routes,vec__39392,n,vec__39389,result,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__39407 = arguments.length;
switch (G__39407) {
case 1:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var map__39409 = cljs.core.group_by(reitit.impl.__GT_wild_route_QMARK_(opts),compiled_routes);
var map__39409__$1 = (((((!((map__39409 == null))))?(((((map__39409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39409):map__39409);
var wild = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39409__$1,true);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39409__$1,false);
var __GT_static_router = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.trie_router.cljs$core$IFn$_invoke$arity$2(wild,opts);
var static_router = (__GT_static_router.cljs$core$IFn$_invoke$arity$2 ? __GT_static_router.cljs$core$IFn$_invoke$arity$2(lookup,opts) : __GT_static_router.call(null,lookup,opts));
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core39411 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core39411 = (function (map__39409,names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,meta39412){
this.map__39409 = map__39409;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.static_router = static_router;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta39412 = meta39412;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core39411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_39413,meta39412__$1){
var self__ = this;
var _39413__$1 = this;
return (new reitit.core.t_reitit$core39411(self__.map__39409,self__.names,self__.compiled_routes,self__.routes,self__.__GT_static_router,self__.lookup,self__.wild,self__.static_router,self__.opts,self__.wildcard_router,meta39412__$1));
});})(map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core39411.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_39413){
var self__ = this;
var _39413__$1 = this;
return self__.meta39412;
});})(map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core39411.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core39411.prototype.reitit$core$Router$router_name$arity$1 = ((function (map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"mixed-router","mixed-router",-1225013968);
});})(map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core39411.prototype.reitit$core$Router$routes$arity$1 = ((function (map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core39411.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core39411.prototype.reitit$core$Router$options$arity$1 = ((function (map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core39411.prototype.reitit$core$Router$route_names$arity$1 = ((function (map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core39411.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = reitit.core.match_by_path(self__.static_router,path);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.core.match_by_path(self__.wildcard_router,path);
}
});})(map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core39411.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.static_router,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.wildcard_router,name);
}
});})(map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core39411.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.static_router,name,path_params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.wildcard_router,name,path_params);
}
});})(map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core39411.getBasis = ((function (map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__39409","map__39409",-330249599,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"->static-router","->static-router",-1746495540,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"wild","wild",-2041111534,null),new cljs.core.Symbol(null,"static-router","static-router",439222930,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"wildcard-router","wildcard-router",553983966,null),new cljs.core.Symbol(null,"meta39412","meta39412",-1414960736,null)], null);
});})(map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

reitit.core.t_reitit$core39411.cljs$lang$type = true;

reitit.core.t_reitit$core39411.cljs$lang$ctorStr = "reitit.core/t_reitit$core39411";

reitit.core.t_reitit$core39411.cljs$lang$ctorPrWriter = ((function (map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.core/t_reitit$core39411");
});})(map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core39411.
 */
reitit.core.__GT_t_reitit$core39411 = ((function (map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes){
return (function reitit$core$__GT_t_reitit$core39411(map__39409__$2,names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta39412){
return (new reitit.core.t_reitit$core39411(map__39409__$2,names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta39412));
});})(map__39409,map__39409__$1,wild,lookup,__GT_static_router,wildcard_router,static_router,names,routes))
;

}

return (new reitit.core.t_reitit$core39411(map__39409__$1,names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.mixed_router.cljs$lang$maxFixedArity = 2;

/**
 * Creates two routers: [[mixed-router]] for non-conflicting routes
 *   and [[linear-router]] for conflicting routes. Takes resolved routes
 *   and optional expanded options. See [[router]] for options.
 */
reitit.core.quarantine_router = (function reitit$core$quarantine_router(var_args){
var G__39417 = arguments.length;
switch (G__39417) {
case 1:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var conflicting_paths = reitit.impl.conflicting_paths(reitit.impl.path_conflicting_routes(compiled_routes,opts));
var conflicting_QMARK_ = ((function (conflicting_paths){
return (function (p1__39415_SHARP_){
return cljs.core.contains_QMARK_(conflicting_paths,cljs.core.first(p1__39415_SHARP_));
});})(conflicting_paths))
;
var map__39418 = cljs.core.group_by(conflicting_QMARK_,compiled_routes);
var map__39418__$1 = (((((!((map__39418 == null))))?(((((map__39418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39418):map__39418);
var conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39418__$1,true);
var non_conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39418__$1,false);
var linear_router = reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(conflicting,opts);
var mixed_router = reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(non_conflicting,opts);
var names = reitit.impl.find_names(compiled_routes,opts);
var routes = reitit.impl.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core39420 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core39420 = (function (map__39418,non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,opts,meta39421){
this.map__39418 = map__39418;
this.non_conflicting = non_conflicting;
this.names = names;
this.conflicting_paths = conflicting_paths;
this.compiled_routes = compiled_routes;
this.conflicting = conflicting;
this.routes = routes;
this.conflicting_QMARK_ = conflicting_QMARK_;
this.mixed_router = mixed_router;
this.linear_router = linear_router;
this.opts = opts;
this.meta39421 = meta39421;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
reitit.core.t_reitit$core39420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_39422,meta39421__$1){
var self__ = this;
var _39422__$1 = this;
return (new reitit.core.t_reitit$core39420(self__.map__39418,self__.non_conflicting,self__.names,self__.conflicting_paths,self__.compiled_routes,self__.conflicting,self__.routes,self__.conflicting_QMARK_,self__.mixed_router,self__.linear_router,self__.opts,meta39421__$1));
});})(conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core39420.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_39422){
var self__ = this;
var _39422__$1 = this;
return self__.meta39421;
});})(conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core39420.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL;

reitit.core.t_reitit$core39420.prototype.reitit$core$Router$router_name$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"quarantine-router","quarantine-router",-1548185225);
});})(conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core39420.prototype.reitit$core$Router$routes$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
});})(conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core39420.prototype.reitit$core$Router$compiled_routes$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
});})(conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core39420.prototype.reitit$core$Router$options$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
});})(conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core39420.prototype.reitit$core$Router$route_names$arity$1 = ((function (conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
});})(conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core39420.prototype.reitit$core$Router$match_by_path$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = reitit.core.match_by_path(self__.mixed_router,path);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.core.match_by_path(self__.linear_router,path);
}
});})(conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core39420.prototype.reitit$core$Router$match_by_name$arity$2 = ((function (conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.mixed_router,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.linear_router,name);
}
});})(conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core39420.prototype.reitit$core$Router$match_by_name$arity$3 = ((function (conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4131__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.mixed_router,name,path_params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.linear_router,name,path_params);
}
});})(conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core39420.getBasis = ((function (conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__39418","map__39418",-1932908799,null),new cljs.core.Symbol(null,"non-conflicting","non-conflicting",1853515681,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"conflicting-paths","conflicting-paths",-1148454714,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"conflicting","conflicting",-650607353,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"conflicting?","conflicting?",-1064530835,null),new cljs.core.Symbol(null,"mixed-router","mixed-router",415517559,null),new cljs.core.Symbol(null,"linear-router","linear-router",885347355,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta39421","meta39421",-1600658345,null)], null);
});})(conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

reitit.core.t_reitit$core39420.cljs$lang$type = true;

reitit.core.t_reitit$core39420.cljs$lang$ctorStr = "reitit.core/t_reitit$core39420";

reitit.core.t_reitit$core39420.cljs$lang$ctorPrWriter = ((function (conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"reitit.core/t_reitit$core39420");
});})(conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

/**
 * Positional factory function for reitit.core/t_reitit$core39420.
 */
reitit.core.__GT_t_reitit$core39420 = ((function (conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes){
return (function reitit$core$__GT_t_reitit$core39420(map__39418__$2,non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,meta39421){
return (new reitit.core.t_reitit$core39420(map__39418__$2,non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,mixed_router__$1,linear_router__$1,opts__$1,meta39421));
});})(conflicting_paths,conflicting_QMARK_,map__39418,map__39418__$1,conflicting,non_conflicting,linear_router,mixed_router,names,routes))
;

}

return (new reitit.core.t_reitit$core39420(map__39418__$1,non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,mixed_router,linear_router,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
});

reitit.core.quarantine_router.cljs$lang$maxFixedArity = 2;

reitit.core.default_router_options = (function reitit$core$default_router_options(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),(function reitit$core$default_router_options_$_lookup(p__39423,_){
var vec__39424 = p__39423;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39424,(0),null);
var map__39427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39424,(1),null);
var map__39427__$1 = (((((!((map__39427 == null))))?(((((map__39427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39427):map__39427);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39427__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
}),new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function reitit$core$default_router_options_$_coerce(route,_){
return route;
}),new cljs.core.Keyword(null,"compile","compile",608186429),(function reitit$core$default_router_options_$_compile(p__39429,_){
var vec__39430 = p__39429;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39430,(0),null);
var map__39433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39430,(1),null);
var map__39433__$1 = (((((!((map__39433 == null))))?(((((map__39433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39433):map__39433);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39433__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return handler;
}),new cljs.core.Keyword(null,"exception","exception",-335277064),reitit.exception.exception,new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),(function reitit$core$default_router_options_$_throw_BANG_(conflicts){
return reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path-conflicts","path-conflicts",-1238675313),conflicts);
})], null);
});
/**
 * Create a [[Router]] from raw route data and optionally an options map.
 *   Selects implementation based on route details. The following options
 *   are available:
 * 
 *   | key          | description
 *   | -------------|-------------
 *   | `:path`      | Base-path for routes
 *   | `:routes`    | Initial resolved routes (default `[]`)
 *   | `:data`      | Initial route data (default `{}`)
 *   | `:spec`      | clojure.spec definition for a route data, see `reitit.spec` on how to use this
 *   | `:syntax`    | Path-parameter syntax as keyword or set of keywords (default #{:bracket :colon})
 *   | `:expand`    | Function of `arg opts => data` to expand route arg to route data (default `reitit.core/expand`)
 *   | `:coerce`    | Function of `route opts => route` to coerce resolved route, can throw or return `nil`
 *   | `:compile`   | Function of `route opts => result` to compile a route handler
 *   | `:validate`  | Function of `routes opts => ()` to validate route (data) via side-effects
 *   | `:conflicts` | Function of `{route #{route}} => ()` to handle conflicting routes
 *   | `:exception` | Function of `Exception => Exception ` to handle creation time exceptions (default `reitit.exception/exception`)
 *   | `:router`    | Function of `routes opts => router` to override the actual router implementation
 */
reitit.core.router = (function reitit$core$router(var_args){
var G__39436 = arguments.length;
switch (G__39436) {
case 1:
return reitit.core.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reitit.core.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.core.router.cljs$core$IFn$_invoke$arity$2(raw_routes,cljs.core.PersistentArrayMap.EMPTY);
});

reitit.core.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
var map__39437 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reitit.core.default_router_options(),opts], 0));
var map__39437__$1 = (((((!((map__39437 == null))))?(((((map__39437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39437):map__39437);
var opts__$1 = map__39437__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39437__$1,new cljs.core.Keyword(null,"router","router",1091916230));
try{var routes = reitit.impl.resolve_routes(raw_routes,opts__$1);
var path_conflicting = reitit.impl.path_conflicting_routes(routes,opts__$1);
var name_conflicting = reitit.impl.name_conflicting_routes(routes);
var compiled_routes = reitit.impl.compile_routes(routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$(cljs.core.some(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_(reitit.impl.__GT_wild_route_QMARK_(opts__$1),compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.quarantine_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.trie_router:reitit.core.mixed_router
)))));
var temp__5720__auto___39544 = new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5720__auto___39544)){
var conflicts_39545 = temp__5720__auto___39544;
if(cljs.core.truth_(path_conflicting)){
(conflicts_39545.cljs$core$IFn$_invoke$arity$1 ? conflicts_39545.cljs$core$IFn$_invoke$arity$1(path_conflicting) : conflicts_39545.call(null,path_conflicting));
} else {
}
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.exception.fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name-conflicts","name-conflicts",-2016386444),name_conflicting);
} else {
}

var temp__5720__auto___39547 = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5720__auto___39547)){
var validate_39548 = temp__5720__auto___39547;
(validate_39548.cljs$core$IFn$_invoke$arity$2 ? validate_39548.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : validate_39548.call(null,compiled_routes,opts__$1));
} else {
}

return (router__$1.cljs$core$IFn$_invoke$arity$2 ? router__$1.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : router__$1.call(null,compiled_routes,opts__$1));
}catch (e39439){if((e39439 instanceof Error)){
var e = e39439;
throw (function (){var fexpr__39440 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(opts__$1,new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.identity);
return (fexpr__39440.cljs$core$IFn$_invoke$arity$1 ? fexpr__39440.cljs$core$IFn$_invoke$arity$1(e) : fexpr__39440.call(null,e));
})();
} else {
throw e39439;

}
}});

reitit.core.router.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=reitit.core.js.map
