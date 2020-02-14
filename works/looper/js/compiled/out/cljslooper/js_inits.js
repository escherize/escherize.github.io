// Compiled by ClojureScript 0.0-3211 {}
goog.provide('cljslooper.js_inits');
goog.require('cljs.core');
cljslooper.js_inits.width = (960);
cljslooper.js_inits.height = (500);
cljslooper.js_inits.color = d3.scale.category10();
cljslooper.js_inits.svg = d3.select("#graph").append("svg");
cljslooper.js_inits.node = cljslooper.js_inits.svg.selectAll(".node");
cljslooper.js_inits.link = cljslooper.js_inits.svg.selectAll(".link");
cljslooper.js_inits.force = cola.d3adaptor().nodes([]).links([]).linkDistance((120)).size([cljslooper.js_inits.width,cljslooper.js_inits.height]).on("tick",(function (){
console.log("teek");

cljslooper.js_inits.node.transition().attr("cx",(function (p1__26768_SHARP_){
return p1__26768_SHARP_.x();
})).attr("cy",(function (p1__26769_SHARP_){
return p1__26769_SHARP_.y();
}));

return cljslooper.js_inits.link.transition().attr("x1",(function (p1__26770_SHARP_){
return p1__26770_SHARP_.source.x();
})).attr("y1",(function (p1__26771_SHARP_){
return p1__26771_SHARP_.source.y();
})).attr("x2",(function (p1__26772_SHARP_){
return p1__26772_SHARP_.target.x();
})).attr("y2",(function (p1__26773_SHARP_){
return p1__26773_SHARP_.target.y();
}));
}));
cljslooper.js_inits.start = (function cljslooper$js_inits$start(){
var link_26779 = cljslooper.js_inits.link.data(cljslooper.js_inits.force.links(),(function (d){
return [cljs.core.str(d.source.id()),cljs.core.str("-"),cljs.core.str(d.target.id())].join('');
}));
link_26779.enter().insert("line",".node").attr("class","link").attr("x1",((function (link_26779){
return (function (p1__26774_SHARP_){
return p1__26774_SHARP_.source.x();
});})(link_26779))
).attr("y1",((function (link_26779){
return (function (p1__26775_SHARP_){
return p1__26775_SHARP_.source.y();
});})(link_26779))
).attr("x2",((function (link_26779){
return (function (p1__26776_SHARP_){
return p1__26776_SHARP_.target.x();
});})(link_26779))
).attr("y2",((function (link_26779){
return (function (p1__26777_SHARP_){
return p1__26777_SHARP_.target.y();
});})(link_26779))
);

link_26779.exit().remove();

var node_26780 = cljslooper.js_inits.node.data(cljslooper.js_inits.force.links(),(function (p1__26778_SHARP_){
return p1__26778_SHARP_.id();
}));
node_26780.enter().append("circle").attr("class",((function (node_26780){
return (function (d){
return [cljs.core.str("node"),cljs.core.str(d.id())].join('');
});})(node_26780))
).attr("r",(8));

node_26780.exit().remove();

return cljslooper.js_inits.force.start();
});

//# sourceMappingURL=js_inits.js.map?rel=1436345297320