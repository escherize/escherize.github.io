// Compiled by ClojureScript 0.0-3291 {:static-fns true, :optimize-constants true}
goog.provide('hiccup_repl.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('goog.events');
goog.require('clojure.string');
goog.require('cljs.reader');
hiccup_repl.core.atom_textarea = (function hiccup_repl$core$atom_textarea(model){
var line_num = cljs.core.count(clojure.string.split_lines(clojure.string.replace((function (){var G__10474 = model;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10474) : cljs.core.deref.call(null,G__10474));
})(),/#_/,"")));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$textarea$form_DASH_control,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$font_DASH_family,"monospace",cljs.core.constant$keyword$font_DASH_size,"14px",cljs.core.constant$keyword$width,"100%",cljs.core.constant$keyword$height,[cljs.core.str(((20) * ((2) + line_num))),cljs.core.str("px")].join(''),cljs.core.constant$keyword$margin_DASH_left,"10px"], null),cljs.core.constant$keyword$value,(function (){var G__10475 = model;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10475) : cljs.core.deref.call(null,G__10475));
})(),cljs.core.constant$keyword$on_DASH_blur,((function (line_num){
return (function (p1__10468_SHARP_){
return console.log(p1__10468_SHARP_);
});})(line_num))
,cljs.core.constant$keyword$on_DASH_change,((function (line_num){
return (function (p1__10469_SHARP_){
var G__10476 = model;
var G__10477 = p1__10469_SHARP_.target.value;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10476,G__10477) : cljs.core.reset_BANG_.call(null,G__10476,G__10477));
});})(line_num))
], null)], null)], null);
});
hiccup_repl.core.safe_read = (function hiccup_repl$core$safe_read(s,out){
try{var data = cljs.reader.read_string(s);
var G__10482 = out;
var G__10483 = data;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10482,G__10483) : cljs.core.reset_BANG_.call(null,G__10482,G__10483));
}catch (e10481){var e = e10481;
return "never mind";
}});
hiccup_repl.core.safe_parse = (function hiccup_repl$core$safe_parse(hiccup_data,out){
try{var hiccup_html = reagent.core.render_to_static_markup(hiccup_data);
var G__10488 = out;
var G__10489 = hiccup_html;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10488,G__10489) : cljs.core.reset_BANG_.call(null,G__10488,G__10489));
}catch (e10487){var e = e10487;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$ok,false,cljs.core.constant$keyword$data,e], null);
}});
hiccup_repl.core.example_component = (function hiccup_repl$core$example_component(starting_string){
var hic_string = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(starting_string);
var hiccup_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var hiccup_html = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
return ((function (hic_string,hiccup_data,hiccup_html){
return (function (){
var __10498 = hiccup_repl.core.safe_read((function (){var G__10494 = hic_string;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10494) : cljs.core.deref.call(null,G__10494));
})(),hiccup_data);
var __10499__$1 = hiccup_repl.core.safe_parse((function (){var G__10495 = hiccup_data;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10495) : cljs.core.deref.call(null,G__10495));
})(),hiccup_html);

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_xs_DASH_6$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.atom_textarea,hic_string], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_xs_DASH_6$col_DASH_md_DASH_4,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$dangerously_DASH_set_DASH_inner_DASH_HTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$__html,(function (){var G__10496 = hiccup_html;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10496) : cljs.core.deref.call(null,G__10496));
})()], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$col_DASH_md_DASH_4$hidden_DASH_sm$hidden_DASH_xs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$form_DASH_group,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$border,"black 1px solid",cljs.core.constant$keyword$font_DASH_family,"monowidth"], null)], null),(function (){var G__10497 = hiccup_html;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10497) : cljs.core.deref.call(null,G__10497));
})()], null)], null)], null)], null);
});
;})(hic_string,hiccup_data,hiccup_html))
});
hiccup_repl.core.home_component = (function hiccup_repl$core$home_component(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div$jumbotron,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"hiccup.space"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Hiccup is subset of ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"http://braveclojure.com"], null),"Clojure"], null)," used for generating html (or ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"http://reagent-project.github.io/"], null),"react.js components"], null),") using ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"http://braveclojure.com"], null),"Clojure"], null)," and ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"https://www.quora.com/Why-ClojureScript"], null),"ClojureScript"], null),"."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$p,"Here are some examples:"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$h1,"Welcome to hiccup.space!"], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,"[:h2 \"You can \"\n     [:code \"edit\"]\n     \"the boxes on the left.\"]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,";;      v-- This Map --v\n[:h1 {:style {:color \"#888\"}}\n  \"Attributes can be added using a map for styles.\"]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,"[:h1.gray.center-text\n  \"Classes can be added using a .\"]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,"[:h2#green-outline.rounded\n  \"Ids can be added using a #\"]"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$pre,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$margin_DASH_left,"15px"], null)], null),"A #_ tells the reader to ignore the next expression."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,"[:div\n[:h4 \"Remove (\" [:code \"#_\"] \") for a surprise :)\"\n#_[:img {:src \"http://media.giphy.com/media/oLJ3zbbp4lX1u/giphy.gif\"}]\n]]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,";; Table example:\n[:table.table.table-hover\n [:thead\n  [:tr [:td \"Programming Language\"]\n       [:td \"Coolness\"]]]\n [:tbody\n  [:tr [:td \"Clojure\"]       [:td \"100\"]]\n  [:tr [:td \"ClojureScript\"] [:td \"100\"]]\n  [:tr [:td \"Brainfuck\"]     [:td \"5\"]]]]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.example_component,"[:div\n  [:input.form-control\n    {:type \"text\" :placeholder \"Your name\"}]]"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$href,"http://twitter.com/escherize"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$code,"by @escherize on twiter"], null)], null)], null)], null);
});
hiccup_repl.core.init_BANG_ = (function hiccup_repl$core$init_BANG_(){
var G__10502 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup_repl.core.home_component], null);
var G__10503 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__10502,G__10503) : reagent.core.render_component.call(null,G__10502,G__10503));
});
