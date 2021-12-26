// Compiled by ClojureScript 1.9.229 {}
goog.provide('blindfold.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('blindfold.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
console.log("??");

return blindfold.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),(function (db,p__42798){
var vec__42799 = p__42798;
var _ = cljs.core.nth.call(null,vec__42799,(0),null);
var ks = cljs.core.nth.call(null,vec__42799,(1),null);
var v = cljs.core.nth.call(null,vec__42799,(2),null);
return cljs.core.assoc_in.call(null,db,ks,v);
}));

//# sourceMappingURL=events.js.map?rel=1481770524106