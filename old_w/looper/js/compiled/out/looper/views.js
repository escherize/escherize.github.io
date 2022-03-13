// Compiled by ClojureScript 0.0-3211 {}
goog.provide('looper.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.reader');
goog.require('re_frame.core');
goog.require('looper.js_inits');
looper.views.edit_panel_content = (function looper$views$edit_panel_content(){
var parsed_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parsed-data","parsed-data",-2043430652)], null));
var graph_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graph-data","graph-data",-1538047094)], null));
return ((function (parsed_data,graph_data){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),"Graphie"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),"Enter edges such as ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[1 2 3 1]"], null)," for a triangle with nodes 1, 2, and 3."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#editor","div#editor",-1877510501),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"min-height","min-height",398480837),"100px",new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"margin","margin",-995903681),"15px",new cljs.core.Keyword(null,"border","border",1444987323),"rgba(255, 255, 255, 0.5) 1px solid",new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(0, 0, 0, 0.0)"], null)], null),"[4 5]\n[6 4 3 2 5 1 2]"], null)], null);
});
;})(parsed_data,graph_data))
});
looper.views.safe_read = (function looper$views$safe_read(s,on_success){
try{var data = cljs.reader.read_string.call(null,s);
return on_success.call(null,data);
}catch (e26135){var e = e26135;
return null;
}});
looper.views.handle_ace_update = (function looper$views$handle_ace_update(){
var argseq__23965__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return looper.views.handle_ace_update.cljs$core$IFn$_invoke$arity$variadic(argseq__23965__auto__);
});

looper.views.handle_ace_update.cljs$core$IFn$_invoke$arity$variadic = (function (p__26138){
var vec__26139 = p__26138;
var e = cljs.core.nth.call(null,vec__26139,(0),null);
var raw_ace_string = ace.edit("editor").getValue();
var ace_string = [cljs.core.str("["),cljs.core.str(raw_ace_string),cljs.core.str("]")].join('');
return looper.views.safe_read.call(null,ace_string,((function (raw_ace_string,ace_string,vec__26139,e){
return (function (p1__26136_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parsed-data","parsed-data",-2043430652),p1__26136_SHARP_], null));
});})(raw_ace_string,ace_string,vec__26139,e))
);
});

looper.views.handle_ace_update.cljs$lang$maxFixedArity = (0);

looper.views.handle_ace_update.cljs$lang$applyTo = (function (seq26137){
return looper.views.handle_ace_update.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26137));
});
looper.views.edit_panel = (function looper$views$edit_panel(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"render","render",-1408033454),looper.views.edit_panel_content,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return looper.js_inits.init_ace.call(null,looper.views.handle_ace_update);
})], null));
});
looper.views.main_panel = (function looper$views$main_panel(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [looper.views.edit_panel], null);
});

//# sourceMappingURL=views.js.map?rel=1456123623112