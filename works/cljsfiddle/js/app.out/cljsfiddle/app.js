// Compiled by ClojureScript 1.8.34 {:static-fns true}
goog.provide('cljsfiddle.app');
goog.require('cljs.core');
goog.require('cljsfiddle.parinfer_codemirror.example');
goog.require('reagent.core');
goog.require('cljs.js');
goog.require('cljsfiddle.state');
goog.require('cljsfiddle.parinfer_codemirror.editor');
goog.require('cljsfiddle.samples_pane');
goog.require('cemerick.url');
goog.require('cljsfiddle.gist');
cljs.core.enable_console_print_BANG_();
COMPILED = true;
cljsfiddle.app.my_eval = (function cljsfiddle$app$my_eval(cljs_string){
return cljs.js.eval_str.cljs$core$IFn$_invoke$arity$5(cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0(),[cljs.core.str("(ns cljs.user\n                    (:refer-clojure :exclude [atom])\n                    (:require reagent.core))\n\n                  (def atom reagent.core/atom)"),cljs.core.str((function (){var or__6509__auto__ = cljs.core.not_empty(cljs_string);
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return "[:div]";
}
})())].join(''),new cljs.core.Symbol(null,"dummy-symbol","dummy-symbol",-412954789,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),true,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),false,new cljs.core.Keyword(null,"load","load",-1318641184),(function (name,cb){
var G__18926 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lang","lang",-1819677104),new cljs.core.Keyword(null,"clj","clj",-660495428),new cljs.core.Keyword(null,"source","source",-433931539),""], null);
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(G__18926) : cb.call(null,G__18926));
}),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863)], null),(function (p__18927){
var map__18928 = p__18927;
var map__18928__$1 = ((((!((map__18928 == null)))?((((map__18928.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18928.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18928):map__18928);
var x = map__18928__$1;
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18928__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18928__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(error)){
cljsfiddle.app._STAR_er = x;

var G__18930 = "Error: ";
var G__18931 = [cljs.core.str(error)].join('');
return console.error(G__18930,G__18931);
} else {
return value;
}
}));
});
cljsfiddle.app.clear = (function cljsfiddle$app$clear(){
var G__18934 = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.item","div.ui.item",-1710744312),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Enter code that returns some hiccup like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[:h1 \"Lemons\"]"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Waiting..."], null)], null);
});
var G__18935 = document.getElementById("baby-dom-target");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__18934,G__18935) : reagent.core.render_component.call(null,G__18934,G__18935));
});
cljsfiddle.app.run = (function cljsfiddle$app$run(){
cljsfiddle.app.clear();

var G__18938 = cljsfiddle.app.my_eval(cljsfiddle.state.read_state());
var G__18939 = document.getElementById("baby-dom-target");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__18938,G__18939) : reagent.core.render_component.call(null,G__18938,G__18939));
});
cljsfiddle.app.code_mirror = (function cljsfiddle$app$code_mirror(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #9A9A9A"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea#codezone","textarea#codezone",1996934932),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default-value","default-value",232220170),cljsfiddle.state.read_state()], null)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
cljsfiddle.parinfer_codemirror.example.create_editor_BANG_.cljs$core$IFn$_invoke$arity$2("codezone",new cljs.core.Keyword(null,"codemirror-box","codemirror-box",332917617));

return cljsfiddle.parinfer_codemirror.editor.start_editor_sync_BANG_();
})], null));
});
cljsfiddle.app.fake_requires = (function cljsfiddle$app$fake_requires(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cm-s-default.CodeMirror","div.cm-s-default.CodeMirror",-1494151364),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"auto",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.CodeMirror-code","div.CodeMirror-code",1374189940),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.CodeMirror-line","pre.CodeMirror-line",-1556514390),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"0.1px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cm-bracket","span.cm-bracket",2036704168),"("], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cm-keyword","span.cm-keyword",-922018471),"ns"], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cm-def","span.cm-def",-556456932),"cljsfiddle.app"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.CodeMirror-line","pre.CodeMirror-line",-1556514390),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-right","padding-right",-1250249681),"0.1px"], null)], null),"  ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cm-bracket","span.cm-bracket",2036704168),"("], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cm-atom","span.cm-atom",-972311901),":require"], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cm-bracket","span.cm-bracket",2036704168),"["], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cm-variable","span.cm-variable",486841392),"reagent.core"], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cm-atom","span.cm-atom",-972311901),":refer"], null)," ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cm-bracket","span.cm-bracket",2036704168),"["], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cm-builtin","span.cm-builtin",-1249174673),"atom"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cm-bracket","span.cm-bracket",2036704168),"]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.cm-bracket.cm-eol","span.cm-bracket.cm-eol",-1816057514),"]])"], null)], null)], null)], null)], null);
});
cljsfiddle.app.cljs_pane = (function cljsfiddle$app$cljs_pane(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.seven.wide.column","div.seven.wide.column",-842624008),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"ClojureScript",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.right.labeled.icon.primary.button","div.ui.right.labeled.icon.primary.button",1748795073),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljsfiddle.app.run], null),"Run",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.play.icon","i.play.icon",-1516903259)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#save-btn.ui.right.labeled.icon.button","div#save-btn.ui.right.labeled.icon.button",-760232619),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljsfiddle.gist.save(cljsfiddle.state.read_state());
})], null),"Save",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.save.icon","i.save.icon",1440887610)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.heading","hr.heading",-102563596)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.form","div.ui.form",1793007869),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsfiddle.app.fake_requires], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsfiddle.app.code_mirror], null)], null)], null);
});
cljsfiddle.app.dom_pane = (function cljsfiddle$app$dom_pane(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.seven.wide.column","div.seven.wide.column",-842624008),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Output",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.right.labeled.icon.button","div.ui.right.labeled.icon.button",-594085666),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"30px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljsfiddle.app.clear], null),"Clear",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.erase.icon","i.erase.icon",-610711585)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr.heading","hr.heading",-102563596)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#baby-dom-target","div#baby-dom-target",-532833880),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.3em"], null)], null)], null)], null);
});
cljsfiddle.app.header = (function cljsfiddle$app$header(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner-wrapper","div.inner-wrapper",-1366184179),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/cljs-ring.svg",new cljs.core.Keyword(null,"alt","alt",-3214426),"CLJS Ring"], null)], null)," cljsfiddle",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tld","span.tld",-376559430),".com"], null)], null)], null)], null);
});
cljsfiddle.app.footer = (function cljsfiddle$app$footer(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inner-wrapper","div.inner-wrapper",-1366184179),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"cljsfiddle.com is an ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://gitlab.com/escherize/cljsfiddle/"], null),"open source project"], null)," by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://twitter.com/escherize"], null),"@escherize"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"feedback welcome :)"], null)], null)], null);
});
cljsfiddle.app.home = (function cljsfiddle$app$home(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsfiddle.app.header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.fluid.container","div.ui.fluid.container",-1578939244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"20px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.ui.grid","div.ui.grid",271546981),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsfiddle.samples_pane.samples_pane,cljsfiddle.app.run], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsfiddle.app.cljs_pane], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsfiddle.app.dom_pane], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsfiddle.app.footer], null)], null);
});
cljsfiddle.app.check_load_gist = (function cljsfiddle$app$check_load_gist(){
var gist_id = (function (){var or__6509__auto__ = cljsfiddle.gist.get_anchor("gist");
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return "7b1f4ec06e90cc683ebb";
}
})();
return cljsfiddle.gist.load.cljs$core$IFn$_invoke$arity$variadic(gist_id,cljs.core.array_seq([((function (gist_id){
return (function (new_text){
cljsfiddle.state.update_text(new_text);

return cljsfiddle.app.run();
});})(gist_id))
], 0));
});
cljsfiddle.app.toggle_loading = (function cljsfiddle$app$toggle_loading(){
return $("#loadingContainer").fadeOut("fast",(function (){
return $("#appContainer").fadeIn("fast");
}));
});
cljsfiddle.app.init = (function cljsfiddle$app$init(){
cljsfiddle.app.check_load_gist();

var G__18942_18944 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljsfiddle.app.home], null);
var G__18943_18945 = document.getElementById("appContainer");
(reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__18942_18944,G__18943_18945) : reagent.core.render_component.call(null,G__18942_18944,G__18943_18945));

cljsfiddle.app.toggle_loading();

return cljsfiddle.app.run();
});
