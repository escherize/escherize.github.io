// Compiled by ClojureScript 0.0-3211 {}
goog.provide('looper.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('looper.db');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return looper.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (db,_){
console.log(cljs.core.pr_str.call(null,db));

return db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"content","content",15833224),(function (db,p__6712){
var vec__6713 = p__6712;
var _ = cljs.core.nth.call(null,vec__6713,(0),null);
var content = cljs.core.nth.call(null,vec__6713,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"content","content",15833224),content);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"parsed-data","parsed-data",-2043430652),(function (db,p__6715){
var vec__6716 = p__6715;
var _ = cljs.core.nth.call(null,vec__6716,(0),null);
var graph_data = cljs.core.nth.call(null,vec__6716,(1),null);
var nodes = cljs.core.mapv.call(null,cljs.core.str,cljs.core.set.call(null,cljs.core.flatten.call(null,graph_data)));
var edges = cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),cljs.core.flatten.call(null,cljs.core.map.call(null,((function (nodes,vec__6716,_,graph_data){
return (function (p1__6714_SHARP_){
return cljs.core.partition.call(null,(2),(1),p1__6714_SHARP_);
});})(nodes,vec__6716,_,graph_data))
,cljs.core.filter.call(null,cljs.core.coll_QMARK_,graph_data))))));

if((cljs.core.not_EQ_.call(null,nodes,new cljs.core.Keyword(null,"nodes","nodes",-2099585805).cljs$core$IFn$_invoke$arity$1(db))) || (cljs.core.not_EQ_.call(null,edges,new cljs.core.Keyword(null,"edges","edges",-694791395).cljs$core$IFn$_invoke$arity$1(db)))){
clear();

var seq__6717_6727 = cljs.core.seq.call(null,nodes);
var chunk__6718_6728 = null;
var count__6719_6729 = (0);
var i__6720_6730 = (0);
while(true){
if((i__6720_6730 < count__6719_6729)){
var n_6731 = cljs.core._nth.call(null,chunk__6718_6728,i__6720_6730);
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),n_6731], null)));

add_node(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),n_6731], null)));

var G__6732 = seq__6717_6727;
var G__6733 = chunk__6718_6728;
var G__6734 = count__6719_6729;
var G__6735 = (i__6720_6730 + (1));
seq__6717_6727 = G__6732;
chunk__6718_6728 = G__6733;
count__6719_6729 = G__6734;
i__6720_6730 = G__6735;
continue;
} else {
var temp__4657__auto___6736 = cljs.core.seq.call(null,seq__6717_6727);
if(temp__4657__auto___6736){
var seq__6717_6737__$1 = temp__4657__auto___6736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6717_6737__$1)){
var c__5073__auto___6738 = cljs.core.chunk_first.call(null,seq__6717_6737__$1);
var G__6739 = cljs.core.chunk_rest.call(null,seq__6717_6737__$1);
var G__6740 = c__5073__auto___6738;
var G__6741 = cljs.core.count.call(null,c__5073__auto___6738);
var G__6742 = (0);
seq__6717_6727 = G__6739;
chunk__6718_6728 = G__6740;
count__6719_6729 = G__6741;
i__6720_6730 = G__6742;
continue;
} else {
var n_6743 = cljs.core.first.call(null,seq__6717_6737__$1);
console.log(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),n_6743], null)));

add_node(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),n_6743], null)));

var G__6744 = cljs.core.next.call(null,seq__6717_6737__$1);
var G__6745 = null;
var G__6746 = (0);
var G__6747 = (0);
seq__6717_6727 = G__6744;
chunk__6718_6728 = G__6745;
count__6719_6729 = G__6746;
i__6720_6730 = G__6747;
continue;
}
} else {
}
}
break;
}

var seq__6721_6748 = cljs.core.seq.call(null,edges);
var chunk__6722_6749 = null;
var count__6723_6750 = (0);
var i__6724_6751 = (0);
while(true){
if((i__6724_6751 < count__6723_6750)){
var e_6752 = cljs.core._nth.call(null,chunk__6722_6749,i__6724_6751);
var vec__6725_6753 = e_6752;
var s_6754 = cljs.core.nth.call(null,vec__6725_6753,(0),null);
var t_6755 = cljs.core.nth.call(null,vec__6725_6753,(1),null);
var edge_6756 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),s_6754], null),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),t_6755], null)], null);
console.log(cljs.core.clj__GT_js.call(null,edge_6756));

add_edge(cljs.core.clj__GT_js.call(null,edge_6756));

var G__6757 = seq__6721_6748;
var G__6758 = chunk__6722_6749;
var G__6759 = count__6723_6750;
var G__6760 = (i__6724_6751 + (1));
seq__6721_6748 = G__6757;
chunk__6722_6749 = G__6758;
count__6723_6750 = G__6759;
i__6724_6751 = G__6760;
continue;
} else {
var temp__4657__auto___6761 = cljs.core.seq.call(null,seq__6721_6748);
if(temp__4657__auto___6761){
var seq__6721_6762__$1 = temp__4657__auto___6761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6721_6762__$1)){
var c__5073__auto___6763 = cljs.core.chunk_first.call(null,seq__6721_6762__$1);
var G__6764 = cljs.core.chunk_rest.call(null,seq__6721_6762__$1);
var G__6765 = c__5073__auto___6763;
var G__6766 = cljs.core.count.call(null,c__5073__auto___6763);
var G__6767 = (0);
seq__6721_6748 = G__6764;
chunk__6722_6749 = G__6765;
count__6723_6750 = G__6766;
i__6724_6751 = G__6767;
continue;
} else {
var e_6768 = cljs.core.first.call(null,seq__6721_6762__$1);
var vec__6726_6769 = e_6768;
var s_6770 = cljs.core.nth.call(null,vec__6726_6769,(0),null);
var t_6771 = cljs.core.nth.call(null,vec__6726_6769,(1),null);
var edge_6772 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),s_6770], null),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),t_6771], null)], null);
console.log(cljs.core.clj__GT_js.call(null,edge_6772));

add_edge(cljs.core.clj__GT_js.call(null,edge_6772));

var G__6773 = cljs.core.next.call(null,seq__6721_6762__$1);
var G__6774 = null;
var G__6775 = (0);
var G__6776 = (0);
seq__6721_6748 = G__6773;
chunk__6722_6749 = G__6774;
count__6723_6750 = G__6775;
i__6724_6751 = G__6776;
continue;
}
} else {
}
}
break;
}

start();
} else {
}

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"parsed-data","parsed-data",-2043430652),graph_data),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),nodes),new cljs.core.Keyword(null,"edges","edges",-694791395),edges);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"update-graph","update-graph",335048197),(function (db,p__6777){
var vec__6778 = p__6777;
return null;
}));

//# sourceMappingURL=handlers.js.map?rel=1467272471660