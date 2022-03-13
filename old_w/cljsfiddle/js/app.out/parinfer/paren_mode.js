// Compiled by ClojureScript 1.8.34 {:static-fns true}
goog.provide('parinfer.paren_mode');
goog.require('cljs.core');
goog.require('parinfer.reader');
goog.require('parinfer.indent_mode');
goog.require('parinfer.string');
goog.require('clojure.string');
/**
 * An initial state of our running state.
 */
parinfer.paren_mode.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"backup","backup",26347393),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),new cljs.core.Keyword(null,"line-no","line-no",-666819466),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762),new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232)],[cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-dy","line-dy",41667486),null,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),null], null),null,cljs.core.PersistentVector.EMPTY,false,(-1),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null),(0)]);
parinfer.paren_mode.append_delim_trail = (function parinfer$paren_mode$append_delim_trail(p__18651){
var map__18655 = p__18651;
var map__18655__$1 = ((((!((map__18655 == null)))?((((map__18655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18655):map__18655);
var state = map__18655__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18655__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18655__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var insert = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18655__$1,new cljs.core.Keyword(null,"insert","insert",1286475395));
var opener = cljs.core.peek(stack);
var close_ch = (function (){var G__18657 = new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(opener);
return (parinfer.reader.matching_delim.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.matching_delim.cljs$core$IFn$_invoke$arity$1(G__18657) : parinfer.reader.matching_delim.call(null,G__18657));
})();
var stack__$1 = cljs.core.pop(stack);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"stack","stack",-793405930),stack__$1,cljs.core.array_seq([new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627),new cljs.core.Keyword(null,"x-pos","x-pos",-382213783).cljs$core$IFn$_invoke$arity$1(opener)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),(line_no + new cljs.core.Keyword(null,"line-dy","line-dy",41667486).cljs$core$IFn$_invoke$arity$1(insert))], null),parinfer.string.insert_string,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783).cljs$core$IFn$_invoke$arity$1(insert),close_ch),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"x-pos","x-pos",-382213783)], null),cljs.core.inc);
});
parinfer.paren_mode.min_indent = (function parinfer$paren_mode$min_indent(x,p__18658){
var map__18661 = p__18658;
var map__18661__$1 = ((((!((map__18661 == null)))?((((map__18661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18661):map__18661);
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18661__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var opener = cljs.core.peek(stack);
var temp__4423__auto__ = new cljs.core.Keyword(null,"x-pos","x-pos",-382213783).cljs$core$IFn$_invoke$arity$1(opener);
if(cljs.core.truth_(temp__4423__auto__)){
var start_x = temp__4423__auto__;
var x__6840__auto__ = (start_x + (1));
var y__6841__auto__ = x;
return ((x__6840__auto__ > y__6841__auto__) ? x__6840__auto__ : y__6841__auto__);
} else {
return x;
}
});
parinfer.paren_mode.min_dedent = (function parinfer$paren_mode$min_dedent(x,p__18663){
var map__18666 = p__18663;
var map__18666__$1 = ((((!((map__18666 == null)))?((((map__18666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18666):map__18666);
var dedent_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18666__$1,new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627));
if(cljs.core.truth_(dedent_x)){
var x__6847__auto__ = dedent_x;
var y__6848__auto__ = x;
return ((x__6847__auto__ < y__6848__auto__) ? x__6847__auto__ : y__6848__auto__);
} else {
return x;
}
});
parinfer.paren_mode.correct_indent = (function parinfer$paren_mode$correct_indent(p__18668){
var map__18671 = p__18668;
var map__18671__$1 = ((((!((map__18671 == null)))?((((map__18671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18671):map__18671);
var state = map__18671__$1;
var indent_delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18671__$1,new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232));
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18671__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18671__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var dedent_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18671__$1,new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18671__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var opener = cljs.core.peek(stack);
var delta = new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232).cljs$core$IFn$_invoke$arity$2(opener,(0));
var new_x = parinfer.paren_mode.min_dedent(parinfer.paren_mode.min_indent((x_pos + delta),state),state);
var new_delta = (indent_delta + (new_x - x_pos));
var indent_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(new_x," "));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),line_no], null),indent_str),new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232),new_delta,cljs.core.array_seq([new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new_x,new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),false,new cljs.core.Keyword(null,"dedent-x","dedent-x",1097411627),null], 0));
});
parinfer.paren_mode.handle_cursor_delta = (function parinfer$paren_mode$handle_cursor_delta(p__18673){
var map__18677 = p__18673;
var map__18677__$1 = ((((!((map__18677 == null)))?((((map__18677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18677):map__18677);
var state = map__18677__$1;
var indent_delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18677__$1,new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18677__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18677__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var cursor_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18677__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var cursor_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18677__$1,new cljs.core.Keyword(null,"cursor-x","cursor-x",475204266));
var cursor_dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18677__$1,new cljs.core.Keyword(null,"cursor-dx","cursor-dx",133069327));
var cursor_delta_QMARK_ = (function (){var and__6497__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cursor_line,line_no);
if(and__6497__auto__){
var and__6497__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cursor_x,x_pos);
if(and__6497__auto____$1){
return cursor_dx;
} else {
return and__6497__auto____$1;
}
} else {
return and__6497__auto__;
}
})();
var G__18679 = state;
var G__18679__$1 = (cljs.core.truth_(cursor_delta_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__18679,new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232),cljs.core._PLUS_,cursor_dx):G__18679);
return G__18679__$1;
});
/**
 * Update the state by handling a possible indentation trigger.
 */
parinfer.paren_mode.process_indent = (function parinfer$paren_mode$process_indent(p__18680){
var map__18684 = p__18680;
var map__18684__$1 = ((((!((map__18684 == null)))?((((map__18684.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18684.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18684):map__18684);
var state = map__18684__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18684__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var track_indent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18684__$1,new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136));
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18684__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18684__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18684__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18684__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var cursor_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18684__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var cursor_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18684__$1,new cljs.core.Keyword(null,"cursor-x","cursor-x",475204266));
var cursor_dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18684__$1,new cljs.core.Keyword(null,"cursor-dx","cursor-dx",133069327));
var check_indent_QMARK_ = (function (){var and__6497__auto__ = track_indent_QMARK_;
if(cljs.core.truth_(and__6497__auto__)){
var and__6497__auto____$1 = parinfer.reader.in_code_QMARK_(stack);
if(cljs.core.truth_(and__6497__auto____$1)){
return (cljs.core.not(parinfer.reader.whitespace_QMARK_(ch))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(";",ch));
} else {
return and__6497__auto____$1;
}
} else {
return and__6497__auto__;
}
})();
var at_valid_closer_QMARK_ = (function (){var and__6497__auto__ = check_indent_QMARK_;
if(cljs.core.truth_(and__6497__auto__)){
var and__6497__auto____$1 = (parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.closing_delim_QMARK_.call(null,ch));
if(cljs.core.truth_(and__6497__auto____$1)){
return parinfer.reader.valid_closer_QMARK_(stack,ch);
} else {
return and__6497__auto____$1;
}
} else {
return and__6497__auto__;
}
})();
var cursor_holding_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line_no,cursor_line)) && ((cursor_x <= x_pos));
var move_closer_QMARK_ = (function (){var and__6497__auto__ = at_valid_closer_QMARK_;
if(cljs.core.truth_(and__6497__auto__)){
return !(cursor_holding_QMARK_);
} else {
return and__6497__auto__;
}
})();
var skip_QMARK_ = (function (){var and__6497__auto__ = check_indent_QMARK_;
if(cljs.core.truth_(and__6497__auto__)){
var and__6497__auto____$1 = (parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.closing_delim_QMARK_.call(null,ch));
if(cljs.core.truth_(and__6497__auto____$1)){
return !(cursor_holding_QMARK_);
} else {
return and__6497__auto____$1;
}
} else {
return and__6497__auto__;
}
})();
var at_indent_QMARK_ = (function (){var and__6497__auto__ = check_indent_QMARK_;
if(cljs.core.truth_(and__6497__auto__)){
return cljs.core.not(skip_QMARK_);
} else {
return and__6497__auto__;
}
})();
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"process?","process?",-106844121),cljs.core.not(skip_QMARK_));
var G__18686 = state__$1;
var G__18686__$1 = (cljs.core.truth_(move_closer_QMARK_)?parinfer.paren_mode.append_delim_trail(G__18686):G__18686);
var G__18686__$2 = parinfer.paren_mode.handle_cursor_delta(G__18686__$1)
;
var G__18686__$3 = (cljs.core.truth_(at_indent_QMARK_)?parinfer.paren_mode.correct_indent(G__18686__$2):G__18686__$2);
return G__18686__$3;
});
/**
 * Update the state by processing the given character and its position.
 */
parinfer.paren_mode.process_char = (function parinfer$paren_mode$process_char(p__18687,ch){
var map__18691 = p__18687;
var map__18691__$1 = ((((!((map__18691 == null)))?((((map__18691.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18691.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18691):map__18691);
var state = map__18691__$1;
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18691__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18691__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var x_pos = cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lines,line_no));
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),x_pos,cljs.core.array_seq([new cljs.core.Keyword(null,"ch","ch",-554717905),[cljs.core.str(ch)].join('')], 0));
var state__$2 = parinfer.paren_mode.process_indent(state__$1);
var G__18693 = state__$2;
var G__18693__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"process?","process?",-106844121).cljs$core$IFn$_invoke$arity$1(state__$2))?parinfer.indent_mode.process_char_STAR_(G__18693):G__18693);
return G__18693__$1;
});
parinfer.paren_mode.reinsert_delims = (function parinfer$paren_mode$reinsert_delims(p__18694){
var map__18697 = p__18694;
var map__18697__$1 = ((((!((map__18697 == null)))?((((map__18697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18697):map__18697);
var state = map__18697__$1;
var removed_delims = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18697__$1,new cljs.core.Keyword(null,"removed-delims","removed-delims",137127226));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__18697,map__18697__$1,state,removed_delims){
return (function (state__$1,_delim){
return parinfer.paren_mode.append_delim_trail(state__$1);
});})(map__18697,map__18697__$1,state,removed_delims))
,state,removed_delims);
});
/**
 * Update the state by processing the given line of text.
 */
parinfer.paren_mode.process_line = (function parinfer$paren_mode$process_line(var_args){
var args18700 = [];
var len__7578__auto___18706 = arguments.length;
var i__7579__auto___18707 = (0);
while(true){
if((i__7579__auto___18707 < len__7578__auto___18706)){
args18700.push((arguments[i__7579__auto___18707]));

var G__18708 = (i__7579__auto___18707 + (1));
i__7579__auto___18707 = G__18708;
continue;
} else {
}
break;
}

var G__18702 = args18700.length;
switch (G__18702) {
case 1:
return parinfer.paren_mode.process_line.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.paren_mode.process_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18700.length)].join('')));

}
});

parinfer.paren_mode.process_line.cljs$core$IFn$_invoke$arity$1 = (function (line){
return parinfer.paren_mode.process_line.cljs$core$IFn$_invoke$arity$2(parinfer.paren_mode.initial_state,line);
});

parinfer.paren_mode.process_line.cljs$core$IFn$_invoke$arity$2 = (function (p__18703,line){
var map__18704 = p__18703;
var map__18704__$1 = ((((!((map__18704 == null)))?((((map__18704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18704):map__18704);
var state = map__18704__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18704__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18704__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18704__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var cursor_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18704__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var line_no__$1 = (line_no + (1));
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"backup","backup",26347393),cljs.core.PersistentVector.EMPTY,cljs.core.array_seq([new cljs.core.Keyword(null,"cursor-in-comment?","cursor-in-comment?",1676951135),false,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null),new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),cljs.core.not(parinfer.reader.in_str_QMARK_(stack)),new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232),(0),new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,""),new cljs.core.Keyword(null,"line-no","line-no",-666819466),line_no__$1,new cljs.core.Keyword(null,"removed-delims","removed-delims",137127226),cljs.core.PersistentVector.EMPTY], 0));
var state__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"line-dy","line-dy",41667486)], null),((function (line_no__$1,state__$1,map__18704,map__18704__$1,state,stack,lines,line_no,cursor_line){
return (function (p1__18699_SHARP_){
if(cljs.core.truth_(p1__18699_SHARP_)){
return (p1__18699_SHARP_ - (1));
} else {
return null;
}
});})(line_no__$1,state__$1,map__18704,map__18704__$1,state,stack,lines,line_no,cursor_line))
);
var state__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(parinfer.paren_mode.process_char,state__$2,[cljs.core.str(line),cljs.core.str("\n")].join(''));
var state__$4 = parinfer.paren_mode.reinsert_delims(parinfer.indent_mode.remove_delim_trail(state__$3));
return state__$4;
});

parinfer.paren_mode.process_line.cljs$lang$maxFixedArity = 2;
parinfer.paren_mode.finalize_state = (function parinfer$paren_mode$finalize_state(p__18710){
var map__18713 = p__18710;
var map__18713__$1 = ((((!((map__18713 == null)))?((((map__18713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18713):map__18713);
var state = map__18713__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18713__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var valid_QMARK_ = cljs.core.empty_QMARK_(stack);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"valid?","valid?",-212412379),valid_QMARK_);
});
/**
 * Update the state by processing the given text.
 */
parinfer.paren_mode.process_text = (function parinfer$paren_mode$process_text(var_args){
var args18715 = [];
var len__7578__auto___18718 = arguments.length;
var i__7579__auto___18719 = (0);
while(true){
if((i__7579__auto___18719 < len__7578__auto___18718)){
args18715.push((arguments[i__7579__auto___18719]));

var G__18720 = (i__7579__auto___18719 + (1));
i__7579__auto___18719 = G__18720;
continue;
} else {
}
break;
}

var G__18717 = args18715.length;
switch (G__18717) {
case 1:
return parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18715.length)].join('')));

}
});

parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$1 = (function (text){
return parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$2(text,null);
});

parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$2 = (function (text,options){
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([parinfer.paren_mode.initial_state,options], 0));
var lines = parinfer.string.get_lines(text);
var state__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(parinfer.paren_mode.process_line,state,lines);
var state__$2 = parinfer.paren_mode.finalize_state(state__$1);
return state__$2;
});

parinfer.paren_mode.process_text.cljs$lang$maxFixedArity = 2;
/**
 * Fully process the given text using Paren Mode.
 * 
 *   'text' is the full text.
 * 
 *   'options' is an optional map with supported keys:
 *  :cursor-x     - x position of the cursor (zero-based)
 *  :cursor-line  - line number of the cursor (zero-based)
 * 
 *   Returns a map:
 *  :text     - full text output
 *  :valid?   - indicates if the input was valid
 *  :state    - cached state to be passed to `format-text-change` (once it is implemented)
 *   
 */
parinfer.paren_mode.format_text = (function parinfer$paren_mode$format_text(var_args){
var args18722 = [];
var len__7578__auto___18725 = arguments.length;
var i__7579__auto___18726 = (0);
while(true){
if((i__7579__auto___18726 < len__7578__auto___18725)){
args18722.push((arguments[i__7579__auto___18726]));

var G__18727 = (i__7579__auto___18726 + (1));
i__7579__auto___18726 = G__18727;
continue;
} else {
}
break;
}

var G__18724 = args18722.length;
switch (G__18724) {
case 1:
return parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18722.length)].join('')));

}
});

parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$1 = (function (text){
return parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$2(text,null);
});

parinfer.paren_mode.format_text.cljs$core$IFn$_invoke$arity$2 = (function (text,options){
var state = parinfer.paren_mode.process_text.cljs$core$IFn$_invoke$arity$2(text,options);
var out_text = (cljs.core.truth_(new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(state)):text);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),out_text,new cljs.core.Keyword(null,"valid?","valid?",-212412379),new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
});

parinfer.paren_mode.format_text.cljs$lang$maxFixedArity = 2;
