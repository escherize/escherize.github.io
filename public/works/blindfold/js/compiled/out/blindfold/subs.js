// Compiled by ClojureScript 1.9.229 {}
goog.provide('blindfold.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
blindfold.subs.attrs = (function blindfold$subs$attrs(items){
return cljs.core.vec.call(null,cljs.core.distinct.call(null,cljs.core.mapcat.call(null,cljs.core.keys,cljs.core.vals.call(null,items))));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"items","items",1031954938),(function (p__42918){
var map__42919 = p__42918;
var map__42919__$1 = ((((!((map__42919 == null)))?((((map__42919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42919):map__42919);
var db = map__42919__$1;
var items = cljs.core.get.call(null,map__42919__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var weights = cljs.core.get.call(null,map__42919__$1,new cljs.core.Keyword(null,"weights","weights",-1097626197));
var attrs = blindfold.subs.attrs.call(null,items);
var with_scores = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (attrs,map__42919,map__42919__$1,db,items,weights){
return (function (p__42921){
var vec__42922 = p__42921;
var k = cljs.core.nth.call(null,vec__42922,(0),null);
var vs = cljs.core.nth.call(null,vec__42922,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.assoc.call(null,vs,new cljs.core.Keyword(null,"score","score",-1963588780),cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (vec__42922,k,vs,attrs,map__42919,map__42919__$1,db,items,weights){
return (function (a){
return (a.call(null,weights,(0)) * a.call(null,vs,(0)));
});})(vec__42922,k,vs,attrs,map__42919,map__42919__$1,db,items,weights))
,attrs)))], null);
});})(attrs,map__42919,map__42919__$1,db,items,weights))
),items);
return with_scores;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null),(function (items,_){
return blindfold.subs.attrs.call(null,items);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"weights","weights",-1097626197),(function (db){
return new cljs.core.Keyword(null,"weights","weights",-1097626197).cljs$core$IFn$_invoke$arity$1(db);
}));

//# sourceMappingURL=subs.js.map?rel=1481770686182