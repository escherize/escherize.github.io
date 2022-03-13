// Compiled by ClojureScript 1.8.34 {:static-fns true}
goog.provide('cljsfiddle.parinfer_codemirror.editor');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljsfiddle.state');
goog.require('cljsfiddle.parinfer_codemirror.editor_support');
goog.require('goog.dom');
cljsfiddle.parinfer_codemirror.editor.frame_updates = (function (){var G__18764 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__18764) : cljs.core.atom.call(null,G__18764));
})();
/**
 * Called before any change is applied to the editor.
 */
cljsfiddle.parinfer_codemirror.editor.before_change = (function cljsfiddle$parinfer_codemirror$editor$before_change(cm,change){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("setValue",change.origin)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cm.getValue(),clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",change.text)))){
return change.cancel();
} else {
return null;
}
});
/**
 * Called after any change is applied to the editor.
 */
cljsfiddle.parinfer_codemirror.editor.on_change = (function cljsfiddle$parinfer_codemirror$editor$on_change(cm,change){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("setValue",change.origin)){
cljsfiddle.parinfer_codemirror.editor_support.fix_text_BANG_.cljs$core$IFn$_invoke$arity$variadic(cm,cljs.core.array_seq([new cljs.core.Keyword(null,"change","change",-1163046502),change], 0));

cljsfiddle.parinfer_codemirror.editor_support.update_cursor_BANG_(cm,change);

return cljsfiddle.parinfer_codemirror.editor_support.set_frame_updated_BANG_(cm,true);
} else {
return null;
}
});
/**
 * Called after the cursor moves in the editor.
 */
cljsfiddle.parinfer_codemirror.editor.on_cursor_activity = (function cljsfiddle$parinfer_codemirror$editor$on_cursor_activity(cm){
if(cljs.core.truth_(cljsfiddle.parinfer_codemirror.editor_support.frame_updated_QMARK_(cm))){
} else {
cljsfiddle.parinfer_codemirror.editor_support.fix_text_BANG_(cm);
}

return cljsfiddle.parinfer_codemirror.editor_support.set_frame_updated_BANG_(cm,false);
});
/**
 * Add parinfer goodness to a codemirror editor
 */
cljsfiddle.parinfer_codemirror.editor.parinferize_BANG_ = (function cljsfiddle$parinfer_codemirror$editor$parinferize_BANG_(cm,key_,parinfer_mode,initial_value){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljsfiddle.state.state) : cljs.core.deref.call(null,cljsfiddle.state.state)),key_))){
return null;
} else {
var initial_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljsfiddle.state.empty_editor_state,new cljs.core.Keyword(null,"mode","mode",654403691),parinfer_mode,cljs.core.array_seq([new cljs.core.Keyword(null,"text","text",-1790561697),initial_value], 0));
var prev_editor_state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljsfiddle.state.state) : cljs.core.deref.call(null,cljsfiddle.state.state)),key_))){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljsfiddle.parinfer_codemirror.editor.frame_updates,cljs.core.assoc,key_,cljs.core.PersistentArrayMap.EMPTY);
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljsfiddle.state.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_], null),((function (initial_state,prev_editor_state){
return (function (p1__18765_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var or__6509__auto__ = p1__18765_SHARP_;
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return initial_state;
}
})(),new cljs.core.Keyword(null,"cm","cm",540591536),cm);
});})(initial_state,prev_editor_state))
);

var x18767_18768 = cm;
x18767_18768.cljsfiddle$parinfer_codemirror$editor_support$IEditor$ = true;

x18767_18768.cljsfiddle$parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 = ((function (x18767_18768,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return prev_editor_state;
});})(x18767_18768,initial_state,prev_editor_state))
;

x18767_18768.cljsfiddle$parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 = ((function (x18767_18768,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return key_;
});})(x18767_18768,initial_state,prev_editor_state))
;

x18767_18768.cljsfiddle$parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 = ((function (x18767_18768,initial_state,prev_editor_state){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljsfiddle.parinfer_codemirror.editor.frame_updates) : cljs.core.deref.call(null,cljsfiddle.parinfer_codemirror.editor.frame_updates)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null));
});})(x18767_18768,initial_state,prev_editor_state))
;

x18767_18768.cljsfiddle$parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 = ((function (x18767_18768,initial_state,prev_editor_state){
return (function (this$,value){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljsfiddle.parinfer_codemirror.editor.frame_updates,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"frame-updated?","frame-updated?",-682706815)], null),value);
});})(x18767_18768,initial_state,prev_editor_state))
;


cm.on("change",cljsfiddle.parinfer_codemirror.editor.on_change);

cm.on("beforeChange",cljsfiddle.parinfer_codemirror.editor.before_change);

cm.on("cursorActivity",cljsfiddle.parinfer_codemirror.editor.on_cursor_activity);

return cm;
}
});
/**
 * Called everytime the state changes to sync the code editor.
 */
cljsfiddle.parinfer_codemirror.editor.on_state_change = (function cljsfiddle$parinfer_codemirror$editor$on_state_change(_,___$1,old_state,new_state){
var seq__18779 = cljs.core.seq(new_state);
var chunk__18780 = null;
var count__18781 = (0);
var i__18782 = (0);
while(true){
if((i__18782 < count__18781)){
var vec__18783 = chunk__18780.cljs$core$IIndexed$_nth$arity$2(null,i__18782);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18783,(0),null);
var map__18784 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18783,(1),null);
var map__18784__$1 = ((((!((map__18784 == null)))?((((map__18784.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18784.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18784):map__18784);
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18784__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18784__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__18789 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(text,cm.getValue());
if(changed_QMARK__18789){
cm.setValue(text);
} else {
}

var G__18790 = seq__18779;
var G__18791 = chunk__18780;
var G__18792 = count__18781;
var G__18793 = (i__18782 + (1));
seq__18779 = G__18790;
chunk__18780 = G__18791;
count__18781 = G__18792;
i__18782 = G__18793;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__18779);
if(temp__4425__auto__){
var seq__18779__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18779__$1)){
var c__7320__auto__ = cljs.core.chunk_first(seq__18779__$1);
var G__18794 = cljs.core.chunk_rest(seq__18779__$1);
var G__18795 = c__7320__auto__;
var G__18796 = cljs.core.count(c__7320__auto__);
var G__18797 = (0);
seq__18779 = G__18794;
chunk__18780 = G__18795;
count__18781 = G__18796;
i__18782 = G__18797;
continue;
} else {
var vec__18786 = cljs.core.first(seq__18779__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18786,(0),null);
var map__18787 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18786,(1),null);
var map__18787__$1 = ((((!((map__18787 == null)))?((((map__18787.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18787.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18787):map__18787);
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18787__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18787__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var changed_QMARK__18798 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(text,cm.getValue());
if(changed_QMARK__18798){
cm.setValue(text);
} else {
}

var G__18799 = cljs.core.next(seq__18779__$1);
var G__18800 = null;
var G__18801 = (0);
var G__18802 = (0);
seq__18779 = G__18799;
chunk__18780 = G__18800;
count__18781 = G__18801;
i__18782 = G__18802;
continue;
}
} else {
return null;
}
}
break;
}
});
cljsfiddle.parinfer_codemirror.editor.force_editor_sync_BANG_ = (function cljsfiddle$parinfer_codemirror$editor$force_editor_sync_BANG_(){
var seq__18813 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljsfiddle.state.state) : cljs.core.deref.call(null,cljsfiddle.state.state)));
var chunk__18814 = null;
var count__18815 = (0);
var i__18816 = (0);
while(true){
if((i__18816 < count__18815)){
var vec__18817 = chunk__18814.cljs$core$IIndexed$_nth$arity$2(null,i__18816);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18817,(0),null);
var map__18818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18817,(1),null);
var map__18818__$1 = ((((!((map__18818 == null)))?((((map__18818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18818):map__18818);
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18818__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18818__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);

var G__18823 = seq__18813;
var G__18824 = chunk__18814;
var G__18825 = count__18815;
var G__18826 = (i__18816 + (1));
seq__18813 = G__18823;
chunk__18814 = G__18824;
count__18815 = G__18825;
i__18816 = G__18826;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__18813);
if(temp__4425__auto__){
var seq__18813__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18813__$1)){
var c__7320__auto__ = cljs.core.chunk_first(seq__18813__$1);
var G__18827 = cljs.core.chunk_rest(seq__18813__$1);
var G__18828 = c__7320__auto__;
var G__18829 = cljs.core.count(c__7320__auto__);
var G__18830 = (0);
seq__18813 = G__18827;
chunk__18814 = G__18828;
count__18815 = G__18829;
i__18816 = G__18830;
continue;
} else {
var vec__18820 = cljs.core.first(seq__18813__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18820,(0),null);
var map__18821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18820,(1),null);
var map__18821__$1 = ((((!((map__18821 == null)))?((((map__18821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18821):map__18821);
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18821__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18821__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
cm.setValue(text);

var G__18831 = cljs.core.next(seq__18813__$1);
var G__18832 = null;
var G__18833 = (0);
var G__18834 = (0);
seq__18813 = G__18831;
chunk__18814 = G__18832;
count__18815 = G__18833;
i__18816 = G__18834;
continue;
}
} else {
return null;
}
}
break;
}
});
cljsfiddle.parinfer_codemirror.editor.start_editor_sync_BANG_ = (function cljsfiddle$parinfer_codemirror$editor$start_editor_sync_BANG_(){
cljs.core.add_watch(cljsfiddle.state.state,new cljs.core.Keyword(null,"editor-updater","editor-updater",-323951652),cljsfiddle.parinfer_codemirror.editor.on_state_change);

return cljsfiddle.parinfer_codemirror.editor.force_editor_sync_BANG_();
});
