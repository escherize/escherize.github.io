// Compiled by ClojureScript 1.8.34 {:static-fns true}
goog.provide('cljsfiddle.parinfer_codemirror.example');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljsfiddle.parinfer_codemirror.editor');
goog.require('cljsfiddle.state');
goog.require('cljsfiddle.parinfer_codemirror.editor_support');
/**
 * Indent selection or insert two spaces when tab is pressed.
 *   from: https://github.com/codemirror/CodeMirror/issues/988#issuecomment-14921785
 */
cljsfiddle.parinfer_codemirror.example.on_tab = (function cljsfiddle$parinfer_codemirror$example$on_tab(cm){
if(cljs.core.truth_(cm.somethingSelected())){
return cm.indentSelection();
} else {
var n = cm.getOption("indentUnit");
var spaces = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n," "));
return cm.replaceSelection(spaces);
}
});
cljsfiddle.parinfer_codemirror.example.editor_opts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"mode","mode",654403691),"clojure-parinfer",new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),true,new cljs.core.Keyword(null,"viewportMargin","viewportMargin",948056881),Infinity,new cljs.core.Keyword(null,"indentUnit","indentUnit",438562839),(2),new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"extraKeys","extraKeys",1380834830),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Tab","Tab",-1823302454),cljsfiddle.parinfer_codemirror.example.on_tab,new cljs.core.Keyword(null,"Shift-Tab","Shift-Tab",2042089464),"indentLess"], null)], null);
/**
 * Create a non-parinfer editor.
 */
cljsfiddle.parinfer_codemirror.example.create_regular_editor_BANG_ = (function cljsfiddle$parinfer_codemirror$example$create_regular_editor_BANG_(var_args){
var args18886 = [];
var len__7578__auto___18891 = arguments.length;
var i__7579__auto___18892 = (0);
while(true){
if((i__7579__auto___18892 < len__7578__auto___18891)){
args18886.push((arguments[i__7579__auto___18892]));

var G__18893 = (i__7579__auto___18892 + (1));
i__7579__auto___18892 = G__18893;
continue;
} else {
}
break;
}

var G__18888 = args18886.length;
switch (G__18888) {
case 1:
return cljsfiddle.parinfer_codemirror.example.create_regular_editor_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljsfiddle.parinfer_codemirror.example.create_regular_editor_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18886.length)].join('')));

}
});

cljsfiddle.parinfer_codemirror.example.create_regular_editor_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (element_id){
return cljsfiddle.parinfer_codemirror.example.create_regular_editor_BANG_.cljs$core$IFn$_invoke$arity$2(element_id,cljs.core.PersistentArrayMap.EMPTY);
});

cljsfiddle.parinfer_codemirror.example.create_regular_editor_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (element_id,opts){
var element = document.getElementById(element_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("none",element.style.display)){
return null;
} else {
var cm = (function (){var G__18889 = element;
var G__18890 = cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljsfiddle.parinfer_codemirror.example.editor_opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),"clojure"], null),opts], 0)));
return CodeMirror.fromTextArea(G__18889,G__18890);
})();
var wrapper = cm.getWrapperElement();
wrapper.id = [cljs.core.str("cm-"),cljs.core.str(element_id)].join('');

return cm;
}
});

cljsfiddle.parinfer_codemirror.example.create_regular_editor_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Create a parinfer editor.
 */
cljsfiddle.parinfer_codemirror.example.create_editor_BANG_ = (function cljsfiddle$parinfer_codemirror$example$create_editor_BANG_(var_args){
var args18895 = [];
var len__7578__auto___18900 = arguments.length;
var i__7579__auto___18901 = (0);
while(true){
if((i__7579__auto___18901 < len__7578__auto___18900)){
args18895.push((arguments[i__7579__auto___18901]));

var G__18902 = (i__7579__auto___18901 + (1));
i__7579__auto___18901 = G__18902;
continue;
} else {
}
break;
}

var G__18897 = args18895.length;
switch (G__18897) {
case 2:
return cljsfiddle.parinfer_codemirror.example.create_editor_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljsfiddle.parinfer_codemirror.example.create_editor_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18895.length)].join('')));

}
});

cljsfiddle.parinfer_codemirror.example.create_editor_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (element_id,key_){
return cljsfiddle.parinfer_codemirror.example.create_editor_BANG_.cljs$core$IFn$_invoke$arity$3(element_id,key_,cljs.core.PersistentArrayMap.EMPTY);
});

cljsfiddle.parinfer_codemirror.example.create_editor_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (element_id,key_,opts){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljsfiddle.state.state) : cljs.core.deref.call(null,cljsfiddle.state.state)),key_))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljsfiddle.state.state,cljs.core.dissoc,key_);
} else {
}

var element = document.getElementById(element_id);
var cm = (function (){var G__18898 = element;
var G__18899 = cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljsfiddle.parinfer_codemirror.example.editor_opts,opts], 0)));
return CodeMirror.fromTextArea(G__18898,G__18899);
})();
var wrapper = cm.getWrapperElement();
wrapper.id = [cljs.core.str("cm-"),cljs.core.str(element_id)].join('');

cljsfiddle.parinfer_codemirror.editor.parinferize_BANG_(cm,key_,new cljs.core.Keyword(null,"parinfer-mode","parinfer-mode",-851652980).cljs$core$IFn$_invoke$arity$1(opts),"");

return cm;
});

cljsfiddle.parinfer_codemirror.example.create_editor_BANG_.cljs$lang$maxFixedArity = 3;
