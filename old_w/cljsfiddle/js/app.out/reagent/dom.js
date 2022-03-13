// Compiled by ClojureScript 1.8.34 {:static-fns true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__6509__auto__ = (function (){var and__6497__auto__ = typeof ReactDOM !== 'undefined';
if(and__6497__auto__){
return ReactDOM;
} else {
return and__6497__auto__;
}
})();
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
var and__6497__auto__ = typeof require !== 'undefined';
if(and__6497__auto__){
return require("react-dom");
} else {
return and__6497__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str("dom")].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__17911 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17911) : cljs.core.atom.call(null,G__17911));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_17914 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_17914){
return (function (){
var _STAR_always_update_STAR_17915 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_17915;
}});})(_STAR_always_update_STAR_17914))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_17914;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args17916 = [];
var len__7578__auto___17919 = arguments.length;
var i__7579__auto___17920 = (0);
while(true){
if((i__7579__auto___17920 < len__7578__auto___17919)){
args17916.push((arguments[i__7579__auto___17920]));

var G__17921 = (i__7579__auto___17920 + (1));
i__7579__auto___17920 = G__17921;
continue;
} else {
}
break;
}

var G__17918 = args17916.length;
switch (G__17918) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17916.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__17927_17931 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__17928_17932 = null;
var count__17929_17933 = (0);
var i__17930_17934 = (0);
while(true){
if((i__17930_17934 < count__17929_17933)){
var v_17935 = chunk__17928_17932.cljs$core$IIndexed$_nth$arity$2(null,i__17930_17934);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_17935);

var G__17936 = seq__17927_17931;
var G__17937 = chunk__17928_17932;
var G__17938 = count__17929_17933;
var G__17939 = (i__17930_17934 + (1));
seq__17927_17931 = G__17936;
chunk__17928_17932 = G__17937;
count__17929_17933 = G__17938;
i__17930_17934 = G__17939;
continue;
} else {
var temp__4425__auto___17940 = cljs.core.seq(seq__17927_17931);
if(temp__4425__auto___17940){
var seq__17927_17941__$1 = temp__4425__auto___17940;
if(cljs.core.chunked_seq_QMARK_(seq__17927_17941__$1)){
var c__7320__auto___17942 = cljs.core.chunk_first(seq__17927_17941__$1);
var G__17943 = cljs.core.chunk_rest(seq__17927_17941__$1);
var G__17944 = c__7320__auto___17942;
var G__17945 = cljs.core.count(c__7320__auto___17942);
var G__17946 = (0);
seq__17927_17931 = G__17943;
chunk__17928_17932 = G__17944;
count__17929_17933 = G__17945;
i__17930_17934 = G__17946;
continue;
} else {
var v_17947 = cljs.core.first(seq__17927_17941__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_17947);

var G__17948 = cljs.core.next(seq__17927_17941__$1);
var G__17949 = null;
var G__17950 = (0);
var G__17951 = (0);
seq__17927_17931 = G__17948;
chunk__17928_17932 = G__17949;
count__17929_17933 = G__17950;
i__17930_17934 = G__17951;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
