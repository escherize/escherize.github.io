// Compiled by ClojureScript 1.8.34 {:static-fns true}
goog.provide('cljsfiddle.state');
goog.require('cljs.core');
if(typeof cljsfiddle.state.state !== 'undefined'){
} else {
cljsfiddle.state.state = (function (){var G__18647 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18647) : cljs.core.atom.call(null,G__18647));
})();
}
cljsfiddle.state.empty_editor_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),"",new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"indent-mode","indent-mode",1737814542),new cljs.core.Keyword(null,"cm","cm",540591536),null,new cljs.core.Keyword(null,"watcher","watcher",2145165251),null], null);
cljsfiddle.state.update_state_text = (function cljsfiddle$state$update_state_text(state,new_text){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"codemirror-box","codemirror-box",332917617),new cljs.core.Keyword(null,"text","text",-1790561697)], null),new_text);
});
cljsfiddle.state.update_text = (function cljsfiddle$state$update_text(new_text){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljsfiddle.state.state,(function (p1__18648_SHARP_){
return cljsfiddle.state.update_state_text(p1__18648_SHARP_,new_text);
}));
});
cljsfiddle.state.read_state = (function cljsfiddle$state$read_state(){
return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"codemirror-box","codemirror-box",332917617).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljsfiddle.state.state) : cljs.core.deref.call(null,cljsfiddle.state.state))));
});
cljsfiddle.state.cm_instance = (function cljsfiddle$state$cm_instance(){
return new cljs.core.Keyword(null,"cm","cm",540591536).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"codemirror-box","codemirror-box",332917617).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljsfiddle.state.state) : cljs.core.deref.call(null,cljsfiddle.state.state))));
});
