// Compiled by ClojureScript 1.8.34 {:static-fns true}
goog.provide('cljsfiddle.parinfer_codemirror.editor_support');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('parinfer.indent_mode');
goog.require('parinfer.paren_mode');
goog.require('cljsfiddle.state');

/**
 * Custom data/methods for a CodeMirror editor.
 * @interface
 */
cljsfiddle.parinfer_codemirror.editor_support.IEditor = function(){};

cljsfiddle.parinfer_codemirror.editor_support.cm_key = (function cljsfiddle$parinfer_codemirror$editor_support$cm_key(this$){
if((!((this$ == null))) && (!((this$.cljsfiddle$parinfer_codemirror$editor_support$IEditor$cm_key$arity$1 == null)))){
return this$.cljsfiddle$parinfer_codemirror$editor_support$IEditor$cm_key$arity$1(this$);
} else {
var x__7172__auto__ = (((this$ == null))?null:this$);
var m__7173__auto__ = (cljsfiddle.parinfer_codemirror.editor_support.cm_key[goog.typeOf(x__7172__auto__)]);
if(!((m__7173__auto__ == null))){
return (m__7173__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7173__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7173__auto__.call(null,this$));
} else {
var m__7173__auto____$1 = (cljsfiddle.parinfer_codemirror.editor_support.cm_key["_"]);
if(!((m__7173__auto____$1 == null))){
return (m__7173__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7173__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7173__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditor.cm-key",this$);
}
}
}
});

cljsfiddle.parinfer_codemirror.editor_support.get_prev_state = (function cljsfiddle$parinfer_codemirror$editor_support$get_prev_state(this$){
if((!((this$ == null))) && (!((this$.cljsfiddle$parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1 == null)))){
return this$.cljsfiddle$parinfer_codemirror$editor_support$IEditor$get_prev_state$arity$1(this$);
} else {
var x__7172__auto__ = (((this$ == null))?null:this$);
var m__7173__auto__ = (cljsfiddle.parinfer_codemirror.editor_support.get_prev_state[goog.typeOf(x__7172__auto__)]);
if(!((m__7173__auto__ == null))){
return (m__7173__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7173__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7173__auto__.call(null,this$));
} else {
var m__7173__auto____$1 = (cljsfiddle.parinfer_codemirror.editor_support.get_prev_state["_"]);
if(!((m__7173__auto____$1 == null))){
return (m__7173__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7173__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7173__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditor.get-prev-state",this$);
}
}
}
});

cljsfiddle.parinfer_codemirror.editor_support.frame_updated_QMARK_ = (function cljsfiddle$parinfer_codemirror$editor_support$frame_updated_QMARK_(this$){
if((!((this$ == null))) && (!((this$.cljsfiddle$parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1 == null)))){
return this$.cljsfiddle$parinfer_codemirror$editor_support$IEditor$frame_updated_QMARK_$arity$1(this$);
} else {
var x__7172__auto__ = (((this$ == null))?null:this$);
var m__7173__auto__ = (cljsfiddle.parinfer_codemirror.editor_support.frame_updated_QMARK_[goog.typeOf(x__7172__auto__)]);
if(!((m__7173__auto__ == null))){
return (m__7173__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7173__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7173__auto__.call(null,this$));
} else {
var m__7173__auto____$1 = (cljsfiddle.parinfer_codemirror.editor_support.frame_updated_QMARK_["_"]);
if(!((m__7173__auto____$1 == null))){
return (m__7173__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7173__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7173__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IEditor.frame-updated?",this$);
}
}
}
});

cljsfiddle.parinfer_codemirror.editor_support.set_frame_updated_BANG_ = (function cljsfiddle$parinfer_codemirror$editor_support$set_frame_updated_BANG_(this$,value){
if((!((this$ == null))) && (!((this$.cljsfiddle$parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2 == null)))){
return this$.cljsfiddle$parinfer_codemirror$editor_support$IEditor$set_frame_updated_BANG_$arity$2(this$,value);
} else {
var x__7172__auto__ = (((this$ == null))?null:this$);
var m__7173__auto__ = (cljsfiddle.parinfer_codemirror.editor_support.set_frame_updated_BANG_[goog.typeOf(x__7172__auto__)]);
if(!((m__7173__auto__ == null))){
return (m__7173__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7173__auto__.cljs$core$IFn$_invoke$arity$2(this$,value) : m__7173__auto__.call(null,this$,value));
} else {
var m__7173__auto____$1 = (cljsfiddle.parinfer_codemirror.editor_support.set_frame_updated_BANG_["_"]);
if(!((m__7173__auto____$1 == null))){
return (m__7173__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7173__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,value) : m__7173__auto____$1.call(null,this$,value));
} else {
throw cljs.core.missing_protocol("IEditor.set-frame-updated!",this$);
}
}
}
});

/**
 * Correctly position cursor after text that was just typed.
 *   We need this since reformatting the text can shift things forward past our cursor.
 */
cljsfiddle.parinfer_codemirror.editor_support.update_cursor_BANG_ = (function cljsfiddle$parinfer_codemirror$editor_support$update_cursor_BANG_(cm,change){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("+input",change.origin)){
var selection_QMARK_ = cm.somethingSelected();
var text = clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",change.text);
var from_x = change.from.ch;
var line_no = change.from.line;
var line = cm.getLine(line_no);
var insert_x = line.indexOf(text,from_x);
var after_x = (insert_x + cljs.core.count(text));
if(cljs.core.truth_(selection_QMARK_)){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,"\n")){
return null;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text,";")){
return cm.setCursor(line_no,after_x);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),insert_x)) || ((insert_x > from_x))){
return cm.setCursor(line_no,from_x);
} else {
return null;

}
}
}
}
} else {
return null;
}
});
cljsfiddle.parinfer_codemirror.editor_support.compute_cursor_dx = (function cljsfiddle$parinfer_codemirror$editor_support$compute_cursor_dx(cursor,change){
if(cljs.core.truth_(change)){
var ignore_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("+indenthack",change.origin);
if(ignore_QMARK_){
return (0);
} else {
var start_x = change.to.ch;
var new_lines = change.text;
var len_last_line = cljs.core.count(cljs.core.last(new_lines));
var end_x = (((cljs.core.count(new_lines) > (1)))?len_last_line:(len_last_line + change.from.ch));
return (end_x - start_x);
}
} else {
return null;
}
});
cljsfiddle.parinfer_codemirror.editor_support.compute_cm_change = (function cljsfiddle$parinfer_codemirror$editor_support$compute_cm_change(cm,change,options,prev_state){
var map__18739 = (cljs.core.truth_(change)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-line","start-line",-41746654),change.from.line,new cljs.core.Keyword(null,"end-line","end-line",1837326455),(change.to.line + (1)),new cljs.core.Keyword(null,"num-new-lines","num-new-lines",-1319642646),change.text.length], null):(function (){var start = new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007).cljs$core$IFn$_invoke$arity$1(prev_state);
var end = (start + (1));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start-line","start-line",-41746654),start,new cljs.core.Keyword(null,"end-line","end-line",1837326455),end,new cljs.core.Keyword(null,"num-new-lines","num-new-lines",-1319642646),(end - start)], null);
})());
var map__18739__$1 = ((((!((map__18739 == null)))?((((map__18739.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18739.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18739):map__18739);
var start_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18739__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18739__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var num_new_lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18739__$1,new cljs.core.Keyword(null,"num-new-lines","num-new-lines",-1319642646));
var lines = (function (){var iter__7289__auto__ = ((function (map__18739,map__18739__$1,start_line,end_line,num_new_lines){
return (function cljsfiddle$parinfer_codemirror$editor_support$compute_cm_change_$_iter__18741(s__18742){
return (new cljs.core.LazySeq(null,((function (map__18739,map__18739__$1,start_line,end_line,num_new_lines){
return (function (){
var s__18742__$1 = s__18742;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__18742__$1);
if(temp__4425__auto__){
var s__18742__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18742__$2)){
var c__7287__auto__ = cljs.core.chunk_first(s__18742__$2);
var size__7288__auto__ = cljs.core.count(c__7287__auto__);
var b__18744 = cljs.core.chunk_buffer(size__7288__auto__);
if((function (){var i__18743 = (0);
while(true){
if((i__18743 < size__7288__auto__)){
var i = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7287__auto__,i__18743);
cljs.core.chunk_append(b__18744,cm.getLine(i));

var G__18747 = (i__18743 + (1));
i__18743 = G__18747;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18744),cljsfiddle$parinfer_codemirror$editor_support$compute_cm_change_$_iter__18741(cljs.core.chunk_rest(s__18742__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18744),null);
}
} else {
var i = cljs.core.first(s__18742__$2);
return cljs.core.cons(cm.getLine(i),cljsfiddle$parinfer_codemirror$editor_support$compute_cm_change_$_iter__18741(cljs.core.rest(s__18742__$2)));
}
} else {
return null;
}
break;
}
});})(map__18739,map__18739__$1,start_line,end_line,num_new_lines))
,null,null));
});})(map__18739,map__18739__$1,start_line,end_line,num_new_lines))
;
return iter__7289__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2(start_line,(start_line + num_new_lines)));
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-no","line-no",-666819466),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start_line,end_line], null),new cljs.core.Keyword(null,"new-line","new-line",1060819447),lines], null);
});
/**
 * Correctly format the text from the given editor.
 */
cljsfiddle.parinfer_codemirror.editor_support.fix_text_BANG_ = (function cljsfiddle$parinfer_codemirror$editor_support$fix_text_BANG_(var_args){
var args__7585__auto__ = [];
var len__7578__auto___18756 = arguments.length;
var i__7579__auto___18757 = (0);
while(true){
if((i__7579__auto___18757 < len__7578__auto___18756)){
args__7585__auto__.push((arguments[i__7579__auto___18757]));

var G__18758 = (i__7579__auto___18757 + (1));
i__7579__auto___18757 = G__18758;
continue;
} else {
}
break;
}

var argseq__7586__auto__ = ((((1) < args__7585__auto__.length))?(new cljs.core.IndexedSeq(args__7585__auto__.slice((1)),(0),null)):null);
return cljsfiddle.parinfer_codemirror.editor_support.fix_text_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7586__auto__);
});

cljsfiddle.parinfer_codemirror.editor_support.fix_text_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cm,p__18750){
var map__18751 = p__18750;
var map__18751__$1 = ((((!((map__18751 == null)))?((((map__18751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18751):map__18751);
var change = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18751__$1,new cljs.core.Keyword(null,"change","change",-1163046502),null);
var use_cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18751__$1,new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778),false);
var current_text = cm.getValue();
var selection_QMARK_ = cm.somethingSelected();
var selections = cm.listSelections();
var cursor = cm.getCursor();
var scroller = cm.getScrollerElement();
var scroll_x = scroller.scrollLeft;
var scroll_y = scroller.scrollTop;
var options = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007),cursor.line,new cljs.core.Keyword(null,"cursor-x","cursor-x",475204266),cursor.ch,new cljs.core.Keyword(null,"cursor-dx","cursor-dx",133069327),cljsfiddle.parinfer_codemirror.editor_support.compute_cursor_dx(cursor,change)], null);
var key_ = cljsfiddle.parinfer_codemirror.editor_support.cm_key(cm);
var mode = (function (){var or__6509__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljsfiddle.state.state) : cljs.core.deref.call(null,cljsfiddle.state.state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"mode","mode",654403691)], null));
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return new cljs.core.Keyword(null,"indent-mode","indent-mode",1737814542);
}
})();
var prev_state = cljsfiddle.parinfer_codemirror.editor_support.get_prev_state(cm);
var new_text = (function (){var G__18753 = (((mode instanceof cljs.core.Keyword))?mode.fqn:null);
switch (G__18753) {
case "indent-mode":
var result = (cljs.core.truth_((function (){var and__6497__auto__ = use_cache_QMARK_;
if(cljs.core.truth_(and__6497__auto__)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prev_state) : cljs.core.deref.call(null,prev_state));
} else {
return and__6497__auto__;
}
})())?parinfer.indent_mode.format_text_change.cljs$core$IFn$_invoke$arity$4(current_text,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prev_state) : cljs.core.deref.call(null,prev_state)),cljsfiddle.parinfer_codemirror.editor_support.compute_cm_change(cm,change,options,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prev_state) : cljs.core.deref.call(null,prev_state))),options):parinfer.indent_mode.format_text.cljs$core$IFn$_invoke$arity$2(current_text,options));
if(cljs.core.truth_(new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(result))){
var G__18754_18760 = prev_state;
var G__18755_18761 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(result);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__18754_18760,G__18755_18761) : cljs.core.reset_BANG_.call(null,G__18754_18760,G__18755_18761));
} else {
}

return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(result);

break;
case "paren-mode":
var result = parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$2(current_text,options);
return new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(result);

break;
default:
return null;

}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljsfiddle.state.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_,new cljs.core.Keyword(null,"text","text",-1790561697)], null),new_text);

if(cljs.core.truth_(selection_QMARK_)){
cm.setSelections(selections);
} else {
cm.setCursor(cursor);
}

return cm.scrollTo(scroll_x,scroll_y);
});

cljsfiddle.parinfer_codemirror.editor_support.fix_text_BANG_.cljs$lang$maxFixedArity = (1);

cljsfiddle.parinfer_codemirror.editor_support.fix_text_BANG_.cljs$lang$applyTo = (function (seq18748){
var G__18749 = cljs.core.first(seq18748);
var seq18748__$1 = cljs.core.next(seq18748);
return cljsfiddle.parinfer_codemirror.editor_support.fix_text_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18749,seq18748__$1);
});
