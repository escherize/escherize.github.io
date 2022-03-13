// Compiled by ClojureScript 1.8.34 {:static-fns true}
goog.provide('cemerick.url');
goog.require('cljs.core');
goog.require('pathetic.core');
goog.require('clojure.string');
goog.require('goog.Uri');
cemerick.url.url_encode = (function cemerick$url$url_encode(string){
var G__18854 = string;
var G__18854__$1 = (((G__18854 == null))?null:[cljs.core.str(G__18854)].join(''));
var G__18854__$2 = (((G__18854__$1 == null))?null:encodeURIComponent(G__18854__$1));
var G__18854__$3 = (((G__18854__$2 == null))?null:G__18854__$2.replace("+","%20"));
return G__18854__$3;
});
cemerick.url.url_decode = (function cemerick$url$url_decode(string){
var G__18856 = string;
var G__18856__$1 = (((G__18856 == null))?null:[cljs.core.str(G__18856)].join(''));
var G__18856__$2 = (((G__18856__$1 == null))?null:decodeURIComponent(G__18856__$1));
return G__18856__$2;
});
cemerick.url.map__GT_query = (function cemerick$url$map__GT_query(m){
var G__18860 = cljs.core.seq(m);
var G__18860__$1 = (((G__18860 == null))?null:cljs.core.sort.cljs$core$IFn$_invoke$arity$1(G__18860));
var G__18860__$2 = (((G__18860__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__18860,G__18860__$1){
return (function (p__18861){
var vec__18862 = p__18861;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18862,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18862,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cemerick.url.url_encode(cljs.core.name(k)),"=",cemerick.url.url_encode([cljs.core.str(v)].join(''))], null);
});})(G__18860,G__18860__$1))
,G__18860__$1));
var G__18860__$3 = (((G__18860__$2 == null))?null:cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("&",G__18860__$2));
var G__18860__$4 = (((G__18860__$3 == null))?null:cljs.core.flatten(G__18860__$3));
var G__18860__$5 = (((G__18860__$4 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,G__18860__$4));
return G__18860__$5;
});
cemerick.url.split_param = (function cemerick$url$split_param(param){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(param,/=/),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("")));
});
cemerick.url.query__GT_map = (function cemerick$url$query__GT_map(qstr){
if(!(clojure.string.blank_QMARK_(qstr))){
var G__18864 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(qstr,/&/);
var G__18864__$1 = (((G__18864 == null))?null:cljs.core.seq(G__18864));
var G__18864__$2 = (((G__18864__$1 == null))?null:cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cemerick.url.split_param,cljs.core.array_seq([G__18864__$1], 0)));
var G__18864__$3 = (((G__18864__$2 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cemerick.url.url_decode,G__18864__$2));
var G__18864__$4 = (((G__18864__$3 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,G__18864__$3));
return G__18864__$4;
} else {
return null;
}
});
cemerick.url.port_str = (function cemerick$url$port_str(protocol,port){
if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,port)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),port)) && (!(((port === (80))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"http")))) && (!(((port === (443))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https"))))){
return [cljs.core.str(":"),cljs.core.str(port)].join('');
} else {
return null;
}
});
cemerick.url.url_creds = (function cemerick$url$url_creds(username,password){
if(cljs.core.truth_(username)){
return [cljs.core.str(username),cljs.core.str(":"),cljs.core.str(password)].join('');
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cemerick.url.Object}
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
cemerick.url.URL = (function (protocol,username,password,host,port,path,query,anchor,__meta,__extmap,__hash){
this.protocol = protocol;
this.username = username;
this.password = password;
this.host = host;
this.port = port;
this.path = path;
this.query = query;
this.anchor = anchor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cemerick.url.URL.prototype.toString = (function (){
var self__ = this;
var this$ = this;
var creds = cemerick.url.url_creds(self__.username,self__.password);
return [cljs.core.str(self__.protocol),cljs.core.str("://"),cljs.core.str(creds),cljs.core.str((cljs.core.truth_(creds)?"@":null)),cljs.core.str(self__.host),cljs.core.str(cemerick.url.port_str(self__.protocol,self__.port)),cljs.core.str(self__.path),cljs.core.str(((cljs.core.seq(self__.query))?[cljs.core.str("?"),cljs.core.str(((typeof self__.query === 'string')?self__.query:cemerick.url.map__GT_query(self__.query)))].join(''):null)),cljs.core.str((cljs.core.truth_(self__.anchor)?[cljs.core.str("#"),cljs.core.str(self__.anchor)].join(''):null))].join('');
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7131__auto__,k__7132__auto__){
var self__ = this;
var this__7131__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7131__auto____$1,k__7132__auto__,null);
});

cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7133__auto__,k18866,else__7134__auto__){
var self__ = this;
var this__7133__auto____$1 = this;
var G__18868 = (((k18866 instanceof cljs.core.Keyword))?k18866.fqn:null);
switch (G__18868) {
case "protocol":
return self__.protocol;

break;
case "username":
return self__.username;

break;
case "password":
return self__.password;

break;
case "host":
return self__.host;

break;
case "port":
return self__.port;

break;
case "path":
return self__.path;

break;
case "query":
return self__.query;

break;
case "anchor":
return self__.anchor;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18866,else__7134__auto__);

}
});

cemerick.url.URL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7145__auto__,writer__7146__auto__,opts__7147__auto__){
var self__ = this;
var this__7145__auto____$1 = this;
var pr_pair__7148__auto__ = ((function (this__7145__auto____$1){
return (function (keyval__7149__auto__){
return cljs.core.pr_sequential_writer(writer__7146__auto__,cljs.core.pr_writer,""," ","",opts__7147__auto__,keyval__7149__auto__);
});})(this__7145__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7146__auto__,pr_pair__7148__auto__,"#cemerick.url.URL{",", ","}",opts__7147__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IIterable$ = true;

cemerick.url.URL.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18865){
var self__ = this;
var G__18865__$1 = this;
return (new cljs.core.RecordIter((0),G__18865__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], null),cljs.core._iterator(self__.__extmap)));
});

cemerick.url.URL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7129__auto__){
var self__ = this;
var this__7129__auto____$1 = this;
return self__.__meta;
});

cemerick.url.URL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7125__auto__){
var self__ = this;
var this__7125__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7135__auto__){
var self__ = this;
var this__7135__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7126__auto__){
var self__ = this;
var this__7126__auto____$1 = this;
var h__6944__auto__ = self__.__hash;
if(!((h__6944__auto__ == null))){
return h__6944__auto__;
} else {
var h__6944__auto____$1 = cljs.core.hash_imap(this__7126__auto____$1);
self__.__hash = h__6944__auto____$1;

return h__6944__auto____$1;
}
});

cemerick.url.URL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7127__auto__,other__7128__auto__){
var self__ = this;
var this__7127__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6497__auto__ = other__7128__auto__;
if(cljs.core.truth_(and__6497__auto__)){
var and__6497__auto____$1 = (this__7127__auto____$1.constructor === other__7128__auto__.constructor);
if(and__6497__auto____$1){
return cljs.core.equiv_map(this__7127__auto____$1,other__7128__auto__);
} else {
return and__6497__auto____$1;
}
} else {
return and__6497__auto__;
}
})())){
return true;
} else {
return false;
}
});

cemerick.url.URL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7140__auto__,k__7141__auto__){
var self__ = this;
var this__7140__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"protocol","protocol",652470118),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"username","username",1605666410),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"host","host",-1558485167),null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null), null),k__7141__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7140__auto____$1),self__.__meta),k__7141__auto__);
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7141__auto__)),null));
}
});

cemerick.url.URL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7138__auto__,k__7139__auto__,G__18865){
var self__ = this;
var this__7138__auto____$1 = this;
var pred__18869 = cljs.core.keyword_identical_QMARK_;
var expr__18870 = k__7139__auto__;
if(cljs.core.truth_((pred__18869.cljs$core$IFn$_invoke$arity$2 ? pred__18869.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"protocol","protocol",652470118),expr__18870) : pred__18869.call(null,new cljs.core.Keyword(null,"protocol","protocol",652470118),expr__18870)))){
return (new cemerick.url.URL(G__18865,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18869.cljs$core$IFn$_invoke$arity$2 ? pred__18869.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410),expr__18870) : pred__18869.call(null,new cljs.core.Keyword(null,"username","username",1605666410),expr__18870)))){
return (new cemerick.url.URL(self__.protocol,G__18865,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18869.cljs$core$IFn$_invoke$arity$2 ? pred__18869.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"password","password",417022471),expr__18870) : pred__18869.call(null,new cljs.core.Keyword(null,"password","password",417022471),expr__18870)))){
return (new cemerick.url.URL(self__.protocol,self__.username,G__18865,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18869.cljs$core$IFn$_invoke$arity$2 ? pred__18869.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"host","host",-1558485167),expr__18870) : pred__18869.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),expr__18870)))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,G__18865,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18869.cljs$core$IFn$_invoke$arity$2 ? pred__18869.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"port","port",1534937262),expr__18870) : pred__18869.call(null,new cljs.core.Keyword(null,"port","port",1534937262),expr__18870)))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,G__18865,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18869.cljs$core$IFn$_invoke$arity$2 ? pred__18869.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),expr__18870) : pred__18869.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__18870)))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,G__18865,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18869.cljs$core$IFn$_invoke$arity$2 ? pred__18869.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"query","query",-1288509510),expr__18870) : pred__18869.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),expr__18870)))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,G__18865,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18869.cljs$core$IFn$_invoke$arity$2 ? pred__18869.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"anchor","anchor",1549638489),expr__18870) : pred__18869.call(null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),expr__18870)))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,G__18865,self__.__meta,self__.__extmap,null));
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7139__auto__,G__18865),null));
}
}
}
}
}
}
}
}
});

cemerick.url.URL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7143__auto__){
var self__ = this;
var this__7143__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
});

cemerick.url.URL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7130__auto__,G__18865){
var self__ = this;
var this__7130__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,G__18865,self__.__extmap,self__.__hash));
});

cemerick.url.URL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7136__auto__,entry__7137__auto__){
var self__ = this;
var this__7136__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7137__auto__)){
return cljs.core._assoc(this__7136__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7137__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7137__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7136__auto____$1,entry__7137__auto__);
}
});

cemerick.url.URL.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null),new cljs.core.Symbol(null,"username","username",-1048769359,null),new cljs.core.Symbol(null,"password","password",2057553998,null),new cljs.core.Symbol(null,"host","host",82046360,null),new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Symbol(null,"anchor","anchor",-1104797280,null)], null);
});

cemerick.url.URL.cljs$lang$type = true;

cemerick.url.URL.cljs$lang$ctorPrSeq = (function (this__7165__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cemerick.url/URL");
});

cemerick.url.URL.cljs$lang$ctorPrWriter = (function (this__7165__auto__,writer__7166__auto__){
return cljs.core._write(writer__7166__auto__,"cemerick.url/URL");
});

cemerick.url.__GT_URL = (function cemerick$url$__GT_URL(protocol,username,password,host,port,path,query,anchor){
return (new cemerick.url.URL(protocol,username,password,host,port,path,query,anchor,null,null,null));
});

cemerick.url.map__GT_URL = (function cemerick$url$map__GT_URL(G__18867){
return (new cemerick.url.URL(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(G__18867),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(G__18867),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(G__18867),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(G__18867),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__18867),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__18867),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__18867),new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(G__18867),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18867,new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.array_seq([new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], 0)),null));
});

cemerick.url.translate_default = (function cemerick$url$translate_default(s,old_default,new_default){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,old_default)){
return new_default;
} else {
return s;
}
});
cemerick.url.url_STAR_ = (function cemerick$url$url_STAR_(url){
var url__$1 = (new goog.Uri(url));
var vec__18874 = clojure.string.split.cljs$core$IFn$_invoke$arity$3((function (){var or__6509__auto__ = url__$1.getUserInfo();
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return "";
}
})(),/:/,(2));
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18874,(0),null);
var pass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18874,(1),null);
return (new cemerick.url.URL(url__$1.getScheme(),(function (){var and__6497__auto__ = cljs.core.seq(user);
if(and__6497__auto__){
return user;
} else {
return and__6497__auto__;
}
})(),(function (){var and__6497__auto__ = cljs.core.seq(pass);
if(and__6497__auto__){
return pass;
} else {
return and__6497__auto__;
}
})(),url__$1.getDomain(),cemerick.url.translate_default(url__$1.getPort(),null,(-1)),pathetic.core.normalize(url__$1.getPath()),cemerick.url.query__GT_map(cemerick.url.translate_default(url__$1.getQuery(),"",null)),cemerick.url.translate_default(url__$1.getFragment(),"",null),null,null,null));
});
/**
 * Returns a new URL record for the given url string(s).
 * 
 * The first argument must be a base url — either a complete url string, or
 * a pre-existing URL record instance that will serve as the basis for the new
 * URL.  Any additional arguments must be strings, which are interpreted as
 * relative paths that are successively resolved against the base url's path
 * to construct the final :path in the returned URL record. 
 * 
 * This function does not perform any url-encoding.  Use `url-encode` to encode
 * URL path segments as desired before passing them into this fn.
 */
cemerick.url.url = (function cemerick$url$url(var_args){
var args18875 = [];
var len__7578__auto___18880 = arguments.length;
var i__7579__auto___18881 = (0);
while(true){
if((i__7579__auto___18881 < len__7578__auto___18880)){
args18875.push((arguments[i__7579__auto___18881]));

var G__18882 = (i__7579__auto___18881 + (1));
i__7579__auto___18881 = G__18882;
continue;
} else {
}
break;
}

var G__18879 = args18875.length;
switch (G__18879) {
case 1:
return cemerick.url.url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7597__auto__ = (new cljs.core.IndexedSeq(args18875.slice((1)),(0),null));
return cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7597__auto__);

}
});

cemerick.url.url.cljs$core$IFn$_invoke$arity$1 = (function (url){
if((url instanceof cemerick.url.URL)){
return url;
} else {
return cemerick.url.url_STAR_(url);
}
});

cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic = (function (base_url,path_segments){
var base_url__$1 = (((base_url instanceof cemerick.url.URL))?base_url:cemerick.url.url.cljs$core$IFn$_invoke$arity$1(base_url));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base_url__$1,new cljs.core.Keyword(null,"path","path",-188191168),pathetic.core.normalize(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(pathetic.core.resolve,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(base_url__$1),path_segments)));
});

cemerick.url.url.cljs$lang$applyTo = (function (seq18876){
var G__18877 = cljs.core.first(seq18876);
var seq18876__$1 = cljs.core.next(seq18876);
return cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic(G__18877,seq18876__$1);
});

cemerick.url.url.cljs$lang$maxFixedArity = (1);
