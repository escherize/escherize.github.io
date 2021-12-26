// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljs.looper.js_inits');
goog.require('cljs.core');
cljs.looper.js_inits.init_cola = (function cljs$looper$js_inits$init_cola(){
var width = (960);
var height = (500);
var color = d3.scale.category10();
var svg = d3.select("#graph").append("svg");
var node = svg.selectAll(".node");
var link = svg.selectAll(".link");
var force = cola.d3adaptor().nodes([]).links([]).linkDistance((120)).size([width,height]).on("tick",((function (width,height,color,svg,node,link){
return (function (){
console.log("teek");

node.transition().attr("cx",((function (width,height,color,svg,node,link){
return (function (p1__26936_SHARP_){
return p1__26936_SHARP_.x();
});})(width,height,color,svg,node,link))
).attr("cy",((function (width,height,color,svg,node,link){
return (function (p1__26937_SHARP_){
return p1__26937_SHARP_.y();
});})(width,height,color,svg,node,link))
);

return link.transition().attr("x1",((function (width,height,color,svg,node,link){
return (function (p1__26938_SHARP_){
return p1__26938_SHARP_.source.x();
});})(width,height,color,svg,node,link))
).attr("y1",((function (width,height,color,svg,node,link){
return (function (p1__26939_SHARP_){
return p1__26939_SHARP_.source.y();
});})(width,height,color,svg,node,link))
).attr("x2",((function (width,height,color,svg,node,link){
return (function (p1__26940_SHARP_){
return p1__26940_SHARP_.target.x();
});})(width,height,color,svg,node,link))
).attr("y2",((function (width,height,color,svg,node,link){
return (function (p1__26941_SHARP_){
return p1__26941_SHARP_.target.y();
});})(width,height,color,svg,node,link))
);
});})(width,height,color,svg,node,link))
);
var start = ((function (width,height,color,svg,node,link,force){
return (function (){
var link_26947__$1 = link.data(force.links(),((function (width,height,color,svg,node,link,force){
return (function (d){
return [cljs.core.str(d.source.id()),cljs.core.str("-"),cljs.core.str(d.target.id())].join('');
});})(width,height,color,svg,node,link,force))
);
link_26947__$1.enter().insert("line",".node").attr("class","link").attr("x1",((function (link_26947__$1,width,height,color,svg,node,link,force){
return (function (p1__26942_SHARP_){
return p1__26942_SHARP_.source.x();
});})(link_26947__$1,width,height,color,svg,node,link,force))
).attr("y1",((function (link_26947__$1,width,height,color,svg,node,link,force){
return (function (p1__26943_SHARP_){
return p1__26943_SHARP_.source.y();
});})(link_26947__$1,width,height,color,svg,node,link,force))
).attr("x2",((function (link_26947__$1,width,height,color,svg,node,link,force){
return (function (p1__26944_SHARP_){
return p1__26944_SHARP_.target.x();
});})(link_26947__$1,width,height,color,svg,node,link,force))
).attr("y2",((function (link_26947__$1,width,height,color,svg,node,link,force){
return (function (p1__26945_SHARP_){
return p1__26945_SHARP_.target.y();
});})(link_26947__$1,width,height,color,svg,node,link,force))
);

link_26947__$1.exit().remove();

var node_26948__$1 = node.data(force.links(),((function (width,height,color,svg,node,link,force){
return (function (p1__26946_SHARP_){
return p1__26946_SHARP_.id();
});})(width,height,color,svg,node,link,force))
);
node_26948__$1.enter().append("circle").attr("class",((function (node_26948__$1,width,height,color,svg,node,link,force){
return (function (d){
return [cljs.core.str("node"),cljs.core.str(d.id())].join('');
});})(node_26948__$1,width,height,color,svg,node,link,force))
).attr("r",(8));

node_26948__$1.exit().remove();

return force.start();
});})(width,height,color,svg,node,link,force))
;
return start.call(null);
});

//# sourceMappingURL=js_inits.js.map?rel=1436345409745