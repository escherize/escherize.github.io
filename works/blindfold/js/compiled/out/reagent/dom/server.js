// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom.server');
goog.require('cljs.core');
goog.require('cljsjs.react.dom.server');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.ratom');
goog.require('reagent.interop');
if(typeof reagent.dom.server.imported !== 'undefined'){
} else {
reagent.dom.server.imported = null;
}
reagent.dom.server.module = (function reagent$dom$server$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.server.imported)){
return reagent.dom.server.imported;
} else {
if(typeof ReactDOMServer !== 'undefined'){
return reagent.dom.server.imported = ReactDOMServer;
} else {
if(typeof require !== 'undefined'){
var or__27400__auto__ = reagent.dom.server.imported = require("react-dom/server");
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
throw (new Error("require('react-dom/server') failed"));
}
} else {
throw (new Error("js/ReactDOMServer is missing"));

}
}
}
});
/**
 * Turns a component into an HTML string.
 */
reagent.dom.server.render_to_string = (function reagent$dom$server$render_to_string(component){
reagent.ratom.flush_BANG_.call(null);

var _STAR_non_reactive_STAR_30035 = reagent.impl.util._STAR_non_reactive_STAR_;
reagent.impl.util._STAR_non_reactive_STAR_ = true;

try{return (reagent.dom.server.module.call(null)["renderToString"])(reagent.impl.template.as_element.call(null,component));
}finally {reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_30035;
}});
/**
 * Turns a component into an HTML string, without data-react-id attributes, etc.
 */
reagent.dom.server.render_to_static_markup = (function reagent$dom$server$render_to_static_markup(component){
reagent.ratom.flush_BANG_.call(null);

var _STAR_non_reactive_STAR_30037 = reagent.impl.util._STAR_non_reactive_STAR_;
reagent.impl.util._STAR_non_reactive_STAR_ = true;

try{return (reagent.dom.server.module.call(null)["renderToStaticMarkup"])(reagent.impl.template.as_element.call(null,component));
}finally {reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_30037;
}});

//# sourceMappingURL=server.js.map?rel=1481770129445