// Compiled by ClojureScript 1.10.238 {}
goog.provide('quil.sketch');
goog.require('cljs.core');
goog.require('quil.util');
goog.require('quil.middlewares.deprecated_options');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.events.EventType');
Processing.disableInit();
quil.sketch._STAR_applet_STAR_ = null;
quil.sketch.current_applet = (function quil$sketch$current_applet(){
return quil.sketch._STAR_applet_STAR_;
});
quil.sketch.rendering_modes = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"java2d","java2d",166099237),(Processing.prototype.PConstants["JAVA2D"]),new cljs.core.Keyword(null,"p2d","p2d",-2106175755),(Processing.prototype.PConstants["P2D"]),new cljs.core.Keyword(null,"p3d","p3d",-850380194),(Processing.prototype.PConstants["P3D"]),new cljs.core.Keyword(null,"opengl","opengl",-614998103),(Processing.prototype.PConstants["OPENGL"])], null);
quil.sketch.resolve_renderer = (function quil$sketch$resolve_renderer(mode){
return quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes);
});
quil.sketch.set_size = (function quil$sketch$set_size(applet,width,height){
var el = applet.quil_canvas;
el.setAttribute("width",width);

el.setAttribute("height",height);

applet.width = window.parseInt(goog.style.getComputedStyle(el,"width"));

return applet.height = window.parseInt(goog.style.getComputedStyle(el,"height"));
});
quil.sketch.size = (function quil$sketch$size(var_args){
var G__21760 = arguments.length;
switch (G__21760) {
case 2:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return quil.sketch.size.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$2 = (function (width,height){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)));
});

quil.sketch.size.cljs$core$IFn$_invoke$arity$3 = (function (width,height,mode){
return quil.sketch.current_applet.call(null).size((width | (0)),(height | (0)),quil.util.resolve_constant_key.call(null,mode,quil.sketch.rendering_modes));
});

quil.sketch.size.cljs$lang$maxFixedArity = 3;

quil.sketch.bind_handlers = (function quil$sketch$bind_handlers(prc,opts){
var seq__21762 = cljs.core.seq.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyPressed","keyPressed",1791025256),new cljs.core.Keyword(null,"mouseOut","mouseOut",-386669045),new cljs.core.Keyword(null,"mouseScrolled","mouseScrolled",31878252),new cljs.core.Keyword(null,"mouseDragged","mouseDragged",129975181),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"keyReleased","keyReleased",541714964),new cljs.core.Keyword(null,"mouseClicked","mouseClicked",1764302965),new cljs.core.Keyword(null,"mouseReleased","mouseReleased",1116234838),new cljs.core.Keyword(null,"mousePressed","mousePressed",1776186454),new cljs.core.Keyword(null,"mouseMoved","mouseMoved",-1936954058),new cljs.core.Keyword(null,"mouseOver","mouseOver",-1334461930),new cljs.core.Keyword(null,"keyTyped","keyTyped",1437329399),new cljs.core.Keyword(null,"draw","draw",1358331674)],[new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364),new cljs.core.Keyword(null,"mouse-exited","mouse-exited",-483205244),new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),new cljs.core.Keyword(null,"mouse-dragged","mouse-dragged",-1220073441),new cljs.core.Keyword(null,"setup","setup",1987730512),new cljs.core.Keyword(null,"key-released","key-released",215919828),new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),new cljs.core.Keyword(null,"mouse-released","mouse-released",-664480061),new cljs.core.Keyword(null,"mouse-pressed","mouse-pressed",736955536),new cljs.core.Keyword(null,"mouse-moved","mouse-moved",-1918152310),new cljs.core.Keyword(null,"mouse-entered","mouse-entered",811350322),new cljs.core.Keyword(null,"key-typed","key-typed",-876037597),new cljs.core.Keyword(null,"draw","draw",1358331674)]));
var chunk__21763 = null;
var count__21764 = (0);
var i__21765 = (0);
while(true){
if((i__21765 < count__21764)){
var vec__21766 = cljs.core._nth.call(null,chunk__21763,i__21765);
var processing_name = cljs.core.nth.call(null,vec__21766,(0),null);
var quil_name = cljs.core.nth.call(null,vec__21766,(1),null);
var temp__5457__auto___21774 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__5457__auto___21774)){
var handler_21775 = temp__5457__auto___21774;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__21762,chunk__21763,count__21764,i__21765,handler_21775,temp__5457__auto___21774,vec__21766,processing_name,quil_name){
return (function (){
var _STAR_applet_STAR_21769 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_21775.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_21769;
}});})(seq__21762,chunk__21763,count__21764,i__21765,handler_21775,temp__5457__auto___21774,vec__21766,processing_name,quil_name))
);
} else {
}


var G__21776 = seq__21762;
var G__21777 = chunk__21763;
var G__21778 = count__21764;
var G__21779 = (i__21765 + (1));
seq__21762 = G__21776;
chunk__21763 = G__21777;
count__21764 = G__21778;
i__21765 = G__21779;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__21762);
if(temp__5457__auto__){
var seq__21762__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21762__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__21762__$1);
var G__21780 = cljs.core.chunk_rest.call(null,seq__21762__$1);
var G__21781 = c__4319__auto__;
var G__21782 = cljs.core.count.call(null,c__4319__auto__);
var G__21783 = (0);
seq__21762 = G__21780;
chunk__21763 = G__21781;
count__21764 = G__21782;
i__21765 = G__21783;
continue;
} else {
var vec__21770 = cljs.core.first.call(null,seq__21762__$1);
var processing_name = cljs.core.nth.call(null,vec__21770,(0),null);
var quil_name = cljs.core.nth.call(null,vec__21770,(1),null);
var temp__5457__auto___21784__$1 = opts.call(null,quil_name);
if(cljs.core.truth_(temp__5457__auto___21784__$1)){
var handler_21785 = temp__5457__auto___21784__$1;
(prc[cljs.core.name.call(null,processing_name)] = ((function (seq__21762,chunk__21763,count__21764,i__21765,handler_21785,temp__5457__auto___21784__$1,vec__21770,processing_name,quil_name,seq__21762__$1,temp__5457__auto__){
return (function (){
var _STAR_applet_STAR_21773 = quil.sketch._STAR_applet_STAR_;
quil.sketch._STAR_applet_STAR_ = prc;

try{return handler_21785.call(null);
}finally {quil.sketch._STAR_applet_STAR_ = _STAR_applet_STAR_21773;
}});})(seq__21762,chunk__21763,count__21764,i__21765,handler_21785,temp__5457__auto___21784__$1,vec__21770,processing_name,quil_name,seq__21762__$1,temp__5457__auto__))
);
} else {
}


var G__21786 = cljs.core.next.call(null,seq__21762__$1);
var G__21787 = null;
var G__21788 = (0);
var G__21789 = (0);
seq__21762 = G__21786;
chunk__21763 = G__21787;
count__21764 = G__21788;
i__21765 = G__21789;
continue;
}
} else {
return null;
}
}
break;
}
});
quil.sketch.make_sketch = (function quil$sketch$make_sketch(options){
var opts = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(300)], null)], null),(function (p1__21790_SHARP_){
return p1__21790_SHARP_.call(null,options);
}).call(null,cljs.core.apply.call(null,cljs.core.comp,cljs.core.cons.call(null,quil.middlewares.deprecated_options.deprecated_options,new cljs.core.Keyword(null,"middleware","middleware",1462115504).cljs$core$IFn$_invoke$arity$2(options,cljs.core.PersistentVector.EMPTY)))));
var sketch_size = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(200)], null);
}
})();
var renderer = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts);
var features = cljs.core.set.call(null,new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(opts));
var setup = ((function (opts,sketch_size,renderer,features){
return (function (){
cljs.core.apply.call(null,quil.sketch.size,cljs.core.concat.call(null,sketch_size,(cljs.core.truth_(renderer)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [renderer], null):cljs.core.PersistentVector.EMPTY)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts))){
new cljs.core.Keyword(null,"settings","settings",1556144875).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts))){
return new cljs.core.Keyword(null,"setup","setup",1987730512).cljs$core$IFn$_invoke$arity$1(opts).call(null);
} else {
return null;
}
});})(opts,sketch_size,renderer,features))
;
var mouse_wheel = (cljs.core.truth_(new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts))?((function (opts,sketch_size,renderer,features,setup){
return (function (){
return new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439).cljs$core$IFn$_invoke$arity$1(opts).call(null,((-1) * quil.sketch._STAR_applet_STAR_.mouseScroll));
});})(opts,sketch_size,renderer,features,setup))
:null);
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"setup","setup",1987730512),setup,new cljs.core.Keyword(null,"mouse-wheel","mouse-wheel",1811662439),mouse_wheel);
var attach_function = ((function (opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1){
return (function (prc){
quil.sketch.bind_handlers.call(null,prc,opts__$1);

prc.quil = cljs.core.atom.call(null,null);

return prc.target_frame_rate = cljs.core.atom.call(null,(60));
});})(opts,sketch_size,renderer,features,setup,mouse_wheel,opts__$1))
;
var sketch = (new Processing.Sketch(attach_function));
if(cljs.core.contains_QMARK_.call(null,features,new cljs.core.Keyword(null,"global-key-events","global-key-events",335064944))){
((sketch["options"])["globalKeyEvents"] = true);
} else {
}

return sketch;
});
quil.sketch.destroy_previous_sketch = (function quil$sketch$destroy_previous_sketch(host_elem){
var temp__5457__auto__ = host_elem.processing_obj;
if(cljs.core.truth_(temp__5457__auto__)){
var proc_obj = temp__5457__auto__;
return proc_obj.exit();
} else {
return null;
}
});
quil.sketch.sketch = (function quil$sketch$sketch(var_args){
var args__4502__auto__ = [];
var len__4499__auto___21792 = arguments.length;
var i__4500__auto___21793 = (0);
while(true){
if((i__4500__auto___21793 < len__4499__auto___21792)){
args__4502__auto__.push((arguments[i__4500__auto___21793]));

var G__21794 = (i__4500__auto___21793 + (1));
i__4500__auto___21793 = G__21794;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

quil.sketch.sketch.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
var opts_map = cljs.core.apply.call(null,cljs.core.hash_map,opts);
var host_elem = goog.dom.getElement(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map));
var renderer = (function (){var or__3922__auto__ = new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(opts_map);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"p2d","p2d",-2106175755);
}
})();
if(cljs.core.truth_(host_elem)){
if(cljs.core.truth_(host_elem.processing_context)){
if(cljs.core._EQ_.call(null,renderer,host_elem.processing_context)){
} else {
console.warn("WARNING: Using different context on one canvas!");
}
} else {
host_elem.processing_context = renderer;
}

quil.sketch.destroy_previous_sketch.call(null,host_elem);

var proc_obj = (new Processing(host_elem,quil.sketch.make_sketch.call(null,opts_map)));
host_elem.processing_obj = proc_obj;

proc_obj.quil_canvas = host_elem;

return proc_obj;
} else {
return console.error((cljs.core.truth_(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map))?["ERROR: Cannot find host element: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(opts_map))].join(''):"ERROR: Cannot create sketch. :host is not specified or element not found."));
}
});

quil.sketch.sketch.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
quil.sketch.sketch.cljs$lang$applyTo = (function (seq21791){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21791));
});

quil.sketch.sketch_init_list = cljs.core.atom.call(null,cljs.core.List.EMPTY);
quil.sketch.empty_body_QMARK_ = (function quil$sketch$empty_body_QMARK_(){
var child = document.body.childNodes;
return (child.length <= (1));
});
quil.sketch.add_canvas = (function quil$sketch$add_canvas(canvas_id){
var canvas = document.createElement("canvas");
canvas.setAttribute("id",canvas_id);

return document.body.appendChild(canvas);
});
quil.sketch.init_sketches = (function quil$sketch$init_sketches(){
var add_elem_QMARK__21799 = quil.sketch.empty_body_QMARK_.call(null);
var seq__21795_21800 = cljs.core.seq.call(null,cljs.core.deref.call(null,quil.sketch.sketch_init_list));
var chunk__21796_21801 = null;
var count__21797_21802 = (0);
var i__21798_21803 = (0);
while(true){
if((i__21798_21803 < count__21797_21802)){
var sk_21804 = cljs.core._nth.call(null,chunk__21796_21801,i__21798_21803);
if(cljs.core.truth_(add_elem_QMARK__21799)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_21804));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_21804).call(null);


var G__21805 = seq__21795_21800;
var G__21806 = chunk__21796_21801;
var G__21807 = count__21797_21802;
var G__21808 = (i__21798_21803 + (1));
seq__21795_21800 = G__21805;
chunk__21796_21801 = G__21806;
count__21797_21802 = G__21807;
i__21798_21803 = G__21808;
continue;
} else {
var temp__5457__auto___21809 = cljs.core.seq.call(null,seq__21795_21800);
if(temp__5457__auto___21809){
var seq__21795_21810__$1 = temp__5457__auto___21809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21795_21810__$1)){
var c__4319__auto___21811 = cljs.core.chunk_first.call(null,seq__21795_21810__$1);
var G__21812 = cljs.core.chunk_rest.call(null,seq__21795_21810__$1);
var G__21813 = c__4319__auto___21811;
var G__21814 = cljs.core.count.call(null,c__4319__auto___21811);
var G__21815 = (0);
seq__21795_21800 = G__21812;
chunk__21796_21801 = G__21813;
count__21797_21802 = G__21814;
i__21798_21803 = G__21815;
continue;
} else {
var sk_21816 = cljs.core.first.call(null,seq__21795_21810__$1);
if(cljs.core.truth_(add_elem_QMARK__21799)){
quil.sketch.add_canvas.call(null,new cljs.core.Keyword(null,"host-id","host-id",742376279).cljs$core$IFn$_invoke$arity$1(sk_21816));
} else {
}

new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(sk_21816).call(null);


var G__21817 = cljs.core.next.call(null,seq__21795_21810__$1);
var G__21818 = null;
var G__21819 = (0);
var G__21820 = (0);
seq__21795_21800 = G__21817;
chunk__21796_21801 = G__21818;
count__21797_21802 = G__21819;
i__21798_21803 = G__21820;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.PersistentVector.EMPTY);
});
quil.sketch.add_sketch_to_init_list = (function quil$sketch$add_sketch_to_init_list(sk){
cljs.core.swap_BANG_.call(null,quil.sketch.sketch_init_list,cljs.core.conj,sk);

if(cljs.core._EQ_.call(null,document.readyState,"complete")){
return quil.sketch.init_sketches.call(null);
} else {
return null;
}
});
goog.events.listenOnce(window,goog.events.EventType.LOAD,quil.sketch.init_sketches);

//# sourceMappingURL=sketch.js.map?rel=1525371766886
