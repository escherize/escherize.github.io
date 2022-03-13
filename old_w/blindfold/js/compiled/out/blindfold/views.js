// Compiled by ClojureScript 1.9.229 {}
goog.provide('blindfold.views');
goog.require('cljs.core');
goog.require('re_frame.core');
blindfold.views.slider = (function blindfold$views$slider(value,on_change){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(10),new cljs.core.Keyword(null,"step","step",1288888124),(1),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return on_change.call(null,e.target.value);
})], null)], null);
});
blindfold.views.main_panel = (function blindfold$views$main_panel(){
var items = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938)], null));
var weights = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weights","weights",-1097626197)], null));
var all_attributes = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713)], null));
return ((function (items,weights,all_attributes){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"36px",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null)], null),(function (){var attributes = cljs.core.deref.call(null,all_attributes);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),"title"], null)], null),(function (){var iter__28180__auto__ = ((function (attributes,items,weights,all_attributes){
return (function blindfold$views$main_panel_$_iter__43749(s__43750){
return (new cljs.core.LazySeq(null,((function (attributes,items,weights,all_attributes){
return (function (){
var s__43750__$1 = s__43750;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43750__$1);
if(temp__4657__auto__){
var s__43750__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43750__$2)){
var c__28178__auto__ = cljs.core.chunk_first.call(null,s__43750__$2);
var size__28179__auto__ = cljs.core.count.call(null,c__28178__auto__);
var b__43752 = cljs.core.chunk_buffer.call(null,size__28179__auto__);
if((function (){var i__43751 = (0);
while(true){
if((i__43751 < size__28179__auto__)){
var a = cljs.core._nth.call(null,c__28178__auto__,i__43751);
cljs.core.chunk_append.call(null,b__43752,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),a], null));

var G__43781 = (i__43751 + (1));
i__43751 = G__43781;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43752),blindfold$views$main_panel_$_iter__43749.call(null,cljs.core.chunk_rest.call(null,s__43750__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43752),null);
}
} else {
var a = cljs.core.first.call(null,s__43750__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),a], null),blindfold$views$main_panel_$_iter__43749.call(null,cljs.core.rest.call(null,s__43750__$2)));
}
} else {
return null;
}
break;
}
});})(attributes,items,weights,all_attributes))
,null,null));
});})(attributes,items,weights,all_attributes))
;
return iter__28180__auto__.call(null,attributes);
})())], null),cljs.core.map.call(null,((function (attributes,items,weights,all_attributes){
return (function (p__43753){
var vec__43754 = p__43753;
var title = cljs.core.nth.call(null,vec__43754,(0),null);
var data = cljs.core.nth.call(null,vec__43754,(1),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),title], null)], null),(function (){var iter__28180__auto__ = ((function (vec__43754,title,data,attributes,items,weights,all_attributes){
return (function blindfold$views$main_panel_$_iter__43757(s__43758){
return (new cljs.core.LazySeq(null,((function (vec__43754,title,data,attributes,items,weights,all_attributes){
return (function (){
var s__43758__$1 = s__43758;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43758__$1);
if(temp__4657__auto__){
var s__43758__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43758__$2)){
var c__28178__auto__ = cljs.core.chunk_first.call(null,s__43758__$2);
var size__28179__auto__ = cljs.core.count.call(null,c__28178__auto__);
var b__43760 = cljs.core.chunk_buffer.call(null,size__28179__auto__);
if((function (){var i__43759 = (0);
while(true){
if((i__43759 < size__28179__auto__)){
var d = cljs.core._nth.call(null,c__28178__auto__,i__43759);
cljs.core.chunk_append.call(null,b__43760,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black dashed"], null)], null),d], null));

var G__43782 = (i__43759 + (1));
i__43759 = G__43782;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43760),blindfold$views$main_panel_$_iter__43757.call(null,cljs.core.chunk_rest.call(null,s__43758__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43760),null);
}
} else {
var d = cljs.core.first.call(null,s__43758__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px black dashed"], null)], null),d], null),blindfold$views$main_panel_$_iter__43757.call(null,cljs.core.rest.call(null,s__43758__$2)));
}
} else {
return null;
}
break;
}
});})(vec__43754,title,data,attributes,items,weights,all_attributes))
,null,null));
});})(vec__43754,title,data,attributes,items,weights,all_attributes))
;
return iter__28180__auto__.call(null,data);
})());
});})(attributes,items,weights,all_attributes))
,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weight","weight",-1262796205),cljs.core.deref.call(null,weights)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"edit","edit",-1641834166),(function (){var iter__28180__auto__ = ((function (attributes,items,weights,all_attributes){
return (function blindfold$views$main_panel_$_iter__43761(s__43762){
return (new cljs.core.LazySeq(null,((function (attributes,items,weights,all_attributes){
return (function (){
var s__43762__$1 = s__43762;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43762__$1);
if(temp__4657__auto__){
var s__43762__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43762__$2)){
var c__28178__auto__ = cljs.core.chunk_first.call(null,s__43762__$2);
var size__28179__auto__ = cljs.core.count.call(null,c__28178__auto__);
var b__43764 = cljs.core.chunk_buffer.call(null,size__28179__auto__);
if((function (){var i__43763 = (0);
while(true){
if((i__43763 < size__28179__auto__)){
var vec__43771 = cljs.core._nth.call(null,c__28178__auto__,i__43763);
var title = cljs.core.nth.call(null,vec__43771,(0),null);
var value = cljs.core.nth.call(null,vec__43771,(1),null);
cljs.core.chunk_append.call(null,b__43764,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blindfold.views.slider,value,((function (i__43763,vec__43771,title,value,c__28178__auto__,size__28179__auto__,b__43764,s__43762__$2,temp__4657__auto__,attributes,items,weights,all_attributes){
return (function (p1__43716_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weights","weights",-1097626197),title], null),parseFloat(p1__43716_SHARP_)], null));
});})(i__43763,vec__43771,title,value,c__28178__auto__,size__28179__auto__,b__43764,s__43762__$2,temp__4657__auto__,attributes,items,weights,all_attributes))
], null));

var G__43783 = (i__43763 + (1));
i__43763 = G__43783;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43764),blindfold$views$main_panel_$_iter__43761.call(null,cljs.core.chunk_rest.call(null,s__43762__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43764),null);
}
} else {
var vec__43774 = cljs.core.first.call(null,s__43762__$2);
var title = cljs.core.nth.call(null,vec__43774,(0),null);
var value = cljs.core.nth.call(null,vec__43774,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [blindfold.views.slider,value,((function (vec__43774,title,value,s__43762__$2,temp__4657__auto__,attributes,items,weights,all_attributes){
return (function (p1__43716_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assoc-in","assoc-in",-1754117270),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weights","weights",-1097626197),title], null),parseFloat(p1__43716_SHARP_)], null));
});})(vec__43774,title,value,s__43762__$2,temp__4657__auto__,attributes,items,weights,all_attributes))
], null),blindfold$views$main_panel_$_iter__43761.call(null,cljs.core.rest.call(null,s__43762__$2)));
}
} else {
return null;
}
break;
}
});})(attributes,items,weights,all_attributes))
,null,null));
});})(attributes,items,weights,all_attributes))
;
return iter__28180__auto__.call(null,cljs.core.deref.call(null,weights));
})()], null)], null),cljs.core.vec.call(null,cljs.core.reverse.call(null,cljs.core.sort_by.call(null,((function (attributes,items,weights,all_attributes){
return (function (p__43777){
var vec__43778 = p__43777;
var k = cljs.core.nth.call(null,vec__43778,(0),null);
var vs = cljs.core.nth.call(null,vec__43778,(1),null);
return new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(vs);
});})(attributes,items,weights,all_attributes))
,cljs.core.deref.call(null,items)))))));
})()], null);
});
;})(items,weights,all_attributes))
});

//# sourceMappingURL=views.js.map?rel=1481770784792