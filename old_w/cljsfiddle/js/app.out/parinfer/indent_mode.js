// Compiled by ClojureScript 1.8.34 {:static-fns true}
goog.provide('parinfer.indent_mode');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('parinfer.string');
goog.require('parinfer.reader');
/**
 * An initial state of our running state.
 */
parinfer.indent_mode.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728),new cljs.core.Keyword(null,"backup","backup",26347393),new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"postline-states","postline-states",1667653678),new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),new cljs.core.Keyword(null,"line-no","line-no",-666819466),new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762)],[cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-dy","line-dy",41667486),null,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),null], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,false,(-1),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null)]);
/**
 * Update the state by inferring closing delimiters.
 *   Do this by using the given indentation level.
 * 
 *   Example:
 * 
 *   (defn foo [a b
 *   ret           ;; <---  When we process `r`, we detect indentation, then...
 * 
 *   (defn foo [a b]  ;; <---  ... we insert a `]` after `b` since `[` is after `r` on the x-axis.
 *   ret           ;; <---  A `)` is inserted after `ret` if no further indented lines found.
 *   
 */
parinfer.indent_mode.close_delims = (function parinfer$indent_mode$close_delims(var_args){
var args18044 = [];
var len__7578__auto___18052 = arguments.length;
var i__7579__auto___18053 = (0);
while(true){
if((i__7579__auto___18053 < len__7578__auto___18052)){
args18044.push((arguments[i__7579__auto___18053]));

var G__18054 = (i__7579__auto___18053 + (1));
i__7579__auto___18053 = G__18054;
continue;
} else {
}
break;
}

var G__18046 = args18044.length;
switch (G__18046) {
case 1:
return parinfer.indent_mode.close_delims.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.indent_mode.close_delims.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18044.length)].join('')));

}
});

parinfer.indent_mode.close_delims.cljs$core$IFn$_invoke$arity$1 = (function (state){
return parinfer.indent_mode.close_delims.cljs$core$IFn$_invoke$arity$2(state,(0));
});

parinfer.indent_mode.close_delims.cljs$core$IFn$_invoke$arity$2 = (function (state,indent_x){
var vec__18047 = (function (){var stack = new cljs.core.Keyword(null,"stack","stack",-793405930).cljs$core$IFn$_invoke$arity$1(state);
var delims = "";
while(true){
if(cljs.core.not(cljs.core.seq(stack))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,delims], null);
} else {
var map__18049 = cljs.core.peek(stack);
var map__18049__$1 = ((((!((map__18049 == null)))?((((map__18049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18049):map__18049);
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18049__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18049__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
if((x_pos >= indent_x)){
var G__18056 = cljs.core.pop(stack);
var G__18057 = [cljs.core.str(delims),cljs.core.str((parinfer.reader.matching_delim.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.matching_delim.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.matching_delim.call(null,ch)))].join('');
stack = G__18056;
delims = G__18057;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stack,delims], null);
}
}
break;
}
})();
var stack = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18047,(0),null);
var delims = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18047,(1),null);
var map__18048 = new cljs.core.Keyword(null,"insert","insert",1286475395).cljs$core$IFn$_invoke$arity$1(state);
var map__18048__$1 = ((((!((map__18048 == null)))?((((map__18048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18048):map__18048);
var line_dy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18048__$1,new cljs.core.Keyword(null,"line-dy","line-dy",41667486));
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18048__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var line_no = (new cljs.core.Keyword(null,"line-no","line-no",-666819466).cljs$core$IFn$_invoke$arity$1(state) + line_dy);
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),line_no], null),parinfer.string.insert_string,x_pos,delims),new cljs.core.Keyword(null,"stack","stack",-793405930),stack);
return state__$1;
});

parinfer.indent_mode.close_delims.cljs$lang$maxFixedArity = 2;
/**
 * Update the state's delim trail as we scan across a line.
 *   We eventually remove the delim trail since the indented
 *   content below can cause the delims to move.
 * 
 *   Example:
 * 
 *   (foo (+ 2 3) [(bar)] )    ;; a potential comment
 *                  ^^^^
 *                   |
 *                   +-- trailing delims that we will remove
 *                        (notice whitespace will also be removed)
 *   
 */
parinfer.indent_mode.update_delim_trail = (function parinfer$indent_mode$update_delim_trail(p__18059){
var map__18063 = p__18059;
var map__18063__$1 = ((((!((map__18063 == null)))?((((map__18063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18063):map__18063);
var state = map__18063__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18063__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var delim_trail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18063__$1,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762));
var backup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18063__$1,new cljs.core.Keyword(null,"backup","backup",26347393));
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18063__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18063__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var cursor_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18063__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18063__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var cursor_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18063__$1,new cljs.core.Keyword(null,"cursor-x","cursor-x",475204266));
var cursor_in_comment_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18063__$1,new cljs.core.Keyword(null,"cursor-in-comment?","cursor-in-comment?",1676951135));
var pass_char_QMARK_ = (function (){var or__6509__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(";",ch);
if(or__6509__auto__){
return or__6509__auto__;
} else {
var or__6509__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",ch);
if(or__6509__auto____$1){
return or__6509__auto____$1;
} else {
var or__6509__auto____$2 = parinfer.reader.whitespace_QMARK_(ch);
if(cljs.core.truth_(or__6509__auto____$2)){
return or__6509__auto____$2;
} else {
return (parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.closing_delim_QMARK_.call(null,ch));
}
}
}
})();
var reset_QMARK_ = (cljs.core.truth_(parinfer.reader.in_code_QMARK_(stack))?(function (){var or__6509__auto__ = parinfer.reader.escaping_QMARK_(stack);
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return cljs.core.not(pass_char_QMARK_);
}
})():null);
var cursor_in_comment_QMARK___$1 = (function (){var or__6509__auto__ = cursor_in_comment_QMARK_;
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
var and__6497__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cursor_line,line_no);
if(and__6497__auto__){
var and__6497__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x_pos,cursor_x);
if(and__6497__auto____$1){
return parinfer.reader.in_comment_QMARK_(stack);
} else {
return and__6497__auto____$1;
}
} else {
return and__6497__auto__;
}
}
})();
var update_QMARK_ = (function (){var and__6497__auto__ = parinfer.reader.in_code_QMARK_(stack);
if(cljs.core.truth_(and__6497__auto__)){
var and__6497__auto____$1 = cljs.core.not(parinfer.reader.escaping_QMARK_(stack));
if(and__6497__auto____$1){
var and__6497__auto____$2 = (parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.closing_delim_QMARK_.call(null,ch));
if(cljs.core.truth_(and__6497__auto____$2)){
return parinfer.reader.valid_closer_QMARK_(stack,ch);
} else {
return and__6497__auto____$2;
}
} else {
return and__6497__auto____$1;
}
} else {
return and__6497__auto__;
}
})();
var backup__$1 = (function (){var G__18065 = backup;
var G__18065__$1 = (cljs.core.truth_(reset_QMARK_)?cljs.core.empty(G__18065):G__18065);
return G__18065__$1;
})();
var delim_trail__$1 = (cljs.core.truth_(reset_QMARK_)?cljs.core.PersistentArrayMap.EMPTY:(cljs.core.truth_(update_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(delim_trail,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start","start",-355208981)], null),((function (pass_char_QMARK_,reset_QMARK_,cursor_in_comment_QMARK___$1,update_QMARK_,backup__$1,map__18063,map__18063__$1,state,stack,delim_trail,backup,x_pos,ch,cursor_line,line_no,cursor_x,cursor_in_comment_QMARK_){
return (function (p1__18058_SHARP_){
var or__6509__auto__ = p1__18058_SHARP_;
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return x_pos;
}
});})(pass_char_QMARK_,reset_QMARK_,cursor_in_comment_QMARK___$1,update_QMARK_,backup__$1,map__18063,map__18063__$1,state,stack,delim_trail,backup,x_pos,ch,cursor_line,line_no,cursor_x,cursor_in_comment_QMARK_))
),new cljs.core.Keyword(null,"end","end",-268185958),(x_pos + (1))):delim_trail
));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"cursor-in-comment?","cursor-in-comment?",1676951135),cursor_in_comment_QMARK___$1,cljs.core.array_seq([new cljs.core.Keyword(null,"backup","backup",26347393),backup__$1,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762),delim_trail__$1], 0));
});
/**
 * The presence of the cursor can block the removal of some part of the delim trail.
 */
parinfer.indent_mode.block_delim_trail = (function parinfer$indent_mode$block_delim_trail(p__18066){
var map__18074 = p__18066;
var map__18074__$1 = ((((!((map__18074 == null)))?((((map__18074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18074):map__18074);
var state = map__18074__$1;
var delim_trail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18074__$1,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18074__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var cursor_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18074__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var cursor_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18074__$1,new cljs.core.Keyword(null,"cursor-x","cursor-x",475204266));
var cursor_in_comment_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18074__$1,new cljs.core.Keyword(null,"cursor-in-comment?","cursor-in-comment?",1676951135));
var map__18076 = delim_trail;
var map__18076__$1 = ((((!((map__18076 == null)))?((((map__18076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18076):map__18076);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18076__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18076__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var cursor_block_QMARK_ = (function (){var and__6497__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line_no,cursor_line);
if(and__6497__auto__){
var and__6497__auto____$1 = start;
if(cljs.core.truth_(and__6497__auto____$1)){
return ((cursor_x > start)) && (cljs.core.not(cursor_in_comment_QMARK_));
} else {
return and__6497__auto____$1;
}
} else {
return and__6497__auto__;
}
})();
var start__$1 = (function (){var G__18079 = start;
var G__18079__$1 = (cljs.core.truth_((function (){var and__6497__auto__ = start;
if(cljs.core.truth_(and__6497__auto__)){
return cursor_block_QMARK_;
} else {
return and__6497__auto__;
}
})())?(function (){var x__6840__auto__ = G__18079;
var y__6841__auto__ = cursor_x;
return ((x__6840__auto__ > y__6841__auto__) ? x__6840__auto__ : y__6841__auto__);
})():G__18079);
return G__18079__$1;
})();
var end__$1 = (function (){var G__18080 = end;
var G__18080__$1 = (cljs.core.truth_((function (){var and__6497__auto__ = end;
if(cljs.core.truth_(and__6497__auto__)){
return cursor_block_QMARK_;
} else {
return and__6497__auto__;
}
})())?(function (){var x__6840__auto__ = G__18080;
var y__6841__auto__ = cursor_x;
return ((x__6840__auto__ > y__6841__auto__) ? x__6840__auto__ : y__6841__auto__);
})():G__18080);
return G__18080__$1;
})();
var vec__18077 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start__$1,end__$1))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [start__$1,end__$1], null));
var start__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18077,(0),null);
var end__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18077,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),start__$2,new cljs.core.Keyword(null,"end","end",-268185958),end__$2], null));
});
/**
 * Update the state by removing our marked delim trail.
 *   We remove the delims from the appropriate line of text,
 *   while also restoring their matching delims onto the stack.
 * 
 *   Example:
 * 
 *   (foo (+ 2 3) [(bar)] )    ;; a potential comment
 *   ^            ^^   ^^^^
 *   |            |     |
 *   |____________|     +-- Remove these from the text.
 *       |
 *       +-- Restore these onto the delim stack.
 *           (fyi, we originally popped them off to validate
 *            the closing delims. now we need them back to
 *            infer closing delims for indented lines.)
 *   
 */
parinfer.indent_mode.remove_delim_trail = (function parinfer$indent_mode$remove_delim_trail(p__18081){
var map__18088 = p__18081;
var map__18088__$1 = ((((!((map__18088 == null)))?((((map__18088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18088):map__18088);
var state = map__18088__$1;
var delim_trail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18088__$1,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762));
var insert = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18088__$1,new cljs.core.Keyword(null,"insert","insert",1286475395));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18088__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18088__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var backup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18088__$1,new cljs.core.Keyword(null,"backup","backup",26347393));
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18088__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var map__18090 = delim_trail;
var map__18090__$1 = ((((!((map__18090 == null)))?((((map__18090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18090):map__18090);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18090__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18090__$1,new cljs.core.Keyword(null,"end","end",-268185958));
if(cljs.core.truth_((function (){var and__6497__auto__ = start;
if(cljs.core.truth_(and__6497__auto__)){
return end;
} else {
return and__6497__auto__;
}
})())){
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(lines,line_no);
var delims = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(parinfer.reader.closing_delim_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(line,start,end)));
var remove_count = cljs.core.count(delims);
var ignore_count = (cljs.core.count(backup) - remove_count);
var vec__18092 = (function (){var backup__$1 = backup;
var stack__$1 = stack;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ignore_count,cljs.core.count(backup__$1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [backup__$1,stack__$1], null);
} else {
var G__18094 = cljs.core.pop(backup__$1);
var G__18095 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack__$1,cljs.core.peek(backup__$1));
backup__$1 = G__18094;
stack__$1 = G__18095;
continue;
}
break;
}
})();
var backup__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18092,(0),null);
var stack__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18092,(1),null);
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),line_no], null),parinfer.string.remove_str_range,start,end),new cljs.core.Keyword(null,"backup","backup",26347393),backup__$1,cljs.core.array_seq([new cljs.core.Keyword(null,"stack","stack",-793405930),stack__$1,new cljs.core.Keyword(null,"removed-delims","removed-delims",137127226),delims], 0));
var insert_line_QMARK_ = (new cljs.core.Keyword(null,"line-dy","line-dy",41667486).cljs$core$IFn$_invoke$arity$1(insert) === (0));
var state__$2 = (function (){var G__18093 = state__$1;
var G__18093__$1 = ((insert_line_QMARK_)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__18093,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"x-pos","x-pos",-382213783)], null),cljs.core.min,start):G__18093);
return G__18093__$1;
})();
return state__$2;
} else {
return state;
}
});
/**
 * Update the state's trailing delimiter insertion point as we scan the line.
 * 
 *   Example:
 * 
 *   (defn foo [a b] ret)
 *   ^^^^^ ^^^ ^^ ^  ^^^
 *                  |
 *                  +-- final insertion point candidate
 * 
 *   Special rules allow the user to freely position the trailing
 *   delimiters while editing a line.
 * 
 *   
 */
parinfer.indent_mode.update_insertion_pt = (function parinfer$indent_mode$update_insertion_pt(p__18096){
var map__18100 = p__18096;
var map__18100__$1 = ((((!((map__18100 == null)))?((((map__18100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18100):map__18100);
var state = map__18100__$1;
var track_indent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18100__$1,new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136));
var cursor_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18100__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18100__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18100__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18100__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18100__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18100__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var prev_ch = [cljs.core.str(cljs.core.last(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lines,line_no)))].join('');
var insert_at_char_QMARK_ = (function (){var and__6497__auto__ = parinfer.reader.in_code_QMARK_(stack);
if(cljs.core.truth_(and__6497__auto__)){
return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",ch)) && ((cljs.core.not(parinfer.reader.whitespace_QMARK_(ch))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",prev_ch))) && ((cljs.core.not((parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.closing_delim_QMARK_.call(null,ch)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(line_no,cursor_line)));
} else {
return and__6497__auto__;
}
})();
var insert = (cljs.core.truth_(insert_at_char_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line-dy","line-dy",41667486),(0),new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),(x_pos + (1))], null):null);
var G__18102 = state;
var G__18102__$1 = (cljs.core.truth_(insert)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18102,new cljs.core.Keyword(null,"insert","insert",1286475395),insert):G__18102);
return G__18102__$1;
});
parinfer.indent_mode.get_cached_state = (function parinfer$indent_mode$get_cached_state(state){
return cljs.core.select_keys(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stack","stack",-793405930),new cljs.core.Keyword(null,"insert","insert",1286475395)], null));
});
/**
 * Cache a subset of the state after some event.
 *   This is used by process-text-change.
 */
parinfer.indent_mode.commit_cached_state = (function parinfer$indent_mode$commit_cached_state(state,key_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,key_,cljs.core.conj,parinfer.indent_mode.get_cached_state(state));
});
/**
 * Update the state by handling a possible indentation trigger.
 * 
 *   Example:
 * 
 *   (defn foo [a b
 *   ret           ;; <---  When we process `r`, we detect indentation, then
 *                 ;;       we start backtracking to insert closing delimiters on a previous line.
 * 
 * 
 *   (defn foo [a b]
 *   )             ;; <---  If a line starts with a closing delimiter, it is not
 *                 ;;       considered an indentation trigger.  In fact, we skip
 *                 ;;       the character completely, removing it from the line.
 *   
 */
parinfer.indent_mode.process_indent = (function parinfer$indent_mode$process_indent(p__18103){
var map__18106 = p__18103;
var map__18106__$1 = ((((!((map__18106 == null)))?((((map__18106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18106):map__18106);
var state = map__18106__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18106__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var track_indent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18106__$1,new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136));
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18106__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18106__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var x_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18106__$1,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783));
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18106__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
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
var skip_QMARK_ = (function (){var and__6497__auto__ = check_indent_QMARK_;
if(cljs.core.truth_(and__6497__auto__)){
return (parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.closing_delim_QMARK_.call(null,ch));
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
if(cljs.core.truth_(at_indent_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parinfer.indent_mode.commit_cached_state(parinfer.indent_mode.close_delims.cljs$core$IFn$_invoke$arity$2(state__$1,x_pos),new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728)),new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),false,cljs.core.array_seq([new cljs.core.Keyword(null,"processed-indent?","processed-indent?",526120923),true], 0));
} else {
return state__$1;
}
});
/**
 * Update the state by adding processed character to the line.
 */
parinfer.indent_mode.update_line = (function parinfer$indent_mode$update_line(p__18108){
var map__18111 = p__18108;
var map__18111__$1 = ((((!((map__18111 == null)))?((((map__18111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18111):map__18111);
var state = map__18111__$1;
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18111__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18111__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),line_no], null),cljs.core.str,ch);
});
/**
 * Save the text of a line before trailing delims were inserted.
 *   This allows to restore them when skipping to changed lines in
 *   process-text-change.
 */
parinfer.indent_mode.save_preinsert_line = (function parinfer$indent_mode$save_preinsert_line(p__18113){
var map__18117 = p__18113;
var map__18117__$1 = ((((!((map__18117 == null)))?((((map__18117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18117):map__18117);
var state = map__18117__$1;
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18117__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var insert = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18117__$1,new cljs.core.Keyword(null,"insert","insert",1286475395));
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18117__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var G__18119 = state;
var G__18119__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"line-dy","line-dy",41667486).cljs$core$IFn$_invoke$arity$1(insert)))?cljs.core.assoc_in(G__18119,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"line","line",212345235)], null),cljs.core.get.cljs$core$IFn$_invoke$arity$2(lines,line_no)):G__18119);
return G__18119__$1;
});
parinfer.indent_mode.process_char_STAR_ = (function parinfer$indent_mode$process_char_STAR_(state){
return parinfer.indent_mode.update_line(parinfer.indent_mode.update_insertion_pt(parinfer.reader.push_char(parinfer.indent_mode.update_delim_trail(state))));
});
/**
 * Update the state by processing the given character and its position.
 */
parinfer.indent_mode.process_char = (function parinfer$indent_mode$process_char(p__18120,ch){
var map__18124 = p__18120;
var map__18124__$1 = ((((!((map__18124 == null)))?((((map__18124.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18124.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18124):map__18124);
var state = map__18124__$1;
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18124__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18124__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var x_pos = cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(lines,line_no));
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),x_pos,cljs.core.array_seq([new cljs.core.Keyword(null,"ch","ch",-554717905),[cljs.core.str(ch)].join('')], 0));
var state__$2 = parinfer.indent_mode.process_indent(state__$1);
var G__18126 = state__$2;
var G__18126__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"process?","process?",-106844121).cljs$core$IFn$_invoke$arity$1(state__$2))?parinfer.indent_mode.process_char_STAR_(G__18126):G__18126);
return G__18126__$1;
});
/**
 * Update the state by processing the given line of text.
 */
parinfer.indent_mode.process_line = (function parinfer$indent_mode$process_line(var_args){
var args18128 = [];
var len__7578__auto___18135 = arguments.length;
var i__7579__auto___18136 = (0);
while(true){
if((i__7579__auto___18136 < len__7578__auto___18135)){
args18128.push((arguments[i__7579__auto___18136]));

var G__18137 = (i__7579__auto___18136 + (1));
i__7579__auto___18136 = G__18137;
continue;
} else {
}
break;
}

var G__18130 = args18128.length;
switch (G__18130) {
case 1:
return parinfer.indent_mode.process_line.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.indent_mode.process_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18128.length)].join('')));

}
});

parinfer.indent_mode.process_line.cljs$core$IFn$_invoke$arity$1 = (function (line){
return parinfer.indent_mode.process_line.cljs$core$IFn$_invoke$arity$2(parinfer.indent_mode.initial_state,line);
});

parinfer.indent_mode.process_line.cljs$core$IFn$_invoke$arity$2 = (function (p__18131,line){
var map__18132 = p__18131;
var map__18132__$1 = ((((!((map__18132 == null)))?((((map__18132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18132):map__18132);
var state = map__18132__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18132__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18132__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18132__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var cursor_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18132__$1,new cljs.core.Keyword(null,"cursor-line","cursor-line",-1089611007));
var line_no__$1 = (line_no + (1));
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"backup","backup",26347393),cljs.core.PersistentVector.EMPTY,cljs.core.array_seq([new cljs.core.Keyword(null,"cursor-in-comment?","cursor-in-comment?",1676951135),false,new cljs.core.Keyword(null,"delim-trail","delim-trail",-1171858762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),null,new cljs.core.Keyword(null,"end","end",-268185958),null], null),new cljs.core.Keyword(null,"track-indent?","track-indent?",-1967553136),(cljs.core.seq(stack)) && (cljs.core.not(parinfer.reader.in_str_QMARK_(stack))),new cljs.core.Keyword(null,"processed-indent?","processed-indent?",526120923),false,new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lines,""),new cljs.core.Keyword(null,"line-no","line-no",-666819466),line_no__$1,new cljs.core.Keyword(null,"removed-delims","removed-delims",137127226),cljs.core.PersistentVector.EMPTY], 0));
var state__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"insert","insert",1286475395),new cljs.core.Keyword(null,"line-dy","line-dy",41667486)], null),((function (line_no__$1,state__$1,map__18132,map__18132__$1,state,stack,lines,line_no,cursor_line){
return (function (p1__18127_SHARP_){
if(cljs.core.truth_(p1__18127_SHARP_)){
return (p1__18127_SHARP_ - (1));
} else {
return null;
}
});})(line_no__$1,state__$1,map__18132,map__18132__$1,state,stack,lines,line_no,cursor_line))
);
var state__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(parinfer.indent_mode.process_char,state__$2,[cljs.core.str(line),cljs.core.str("\n")].join(''));
var state__$4 = parinfer.indent_mode.commit_cached_state(parinfer.indent_mode.save_preinsert_line(parinfer.indent_mode.remove_delim_trail(parinfer.indent_mode.block_delim_trail(state__$3))),new cljs.core.Keyword(null,"postline-states","postline-states",1667653678));
var state__$5 = (function (){var G__18134 = state__$4;
var G__18134__$1 = ((cljs.core.not(new cljs.core.Keyword(null,"processed-indent?","processed-indent?",526120923).cljs$core$IFn$_invoke$arity$1(state__$4)))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__18134,new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728),cljs.core.conj,null):G__18134);
return G__18134__$1;
})();
return state__$5;
});

parinfer.indent_mode.process_line.cljs$lang$maxFixedArity = 2;
parinfer.indent_mode.finalize_state = (function parinfer$indent_mode$finalize_state(p__18139){
var map__18143 = p__18139;
var map__18143__$1 = ((((!((map__18143 == null)))?((((map__18143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18143):map__18143);
var state = map__18143__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18143__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var valid_QMARK_ = cljs.core.not(parinfer.reader.in_str_QMARK_(stack));
var close_delims_QMARK_ = (valid_QMARK_) && (cljs.core.seq(stack));
var G__18145 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"valid?","valid?",-212412379),valid_QMARK_);
var G__18145__$1 = ((close_delims_QMARK_)?parinfer.indent_mode.close_delims.cljs$core$IFn$_invoke$arity$1(G__18145):G__18145);
return G__18145__$1;
});
/**
 * Fully processes the given text.  Returns new state.
 *   See `format-text` for usage.
 */
parinfer.indent_mode.process_text = (function parinfer$indent_mode$process_text(var_args){
var args18146 = [];
var len__7578__auto___18149 = arguments.length;
var i__7579__auto___18150 = (0);
while(true){
if((i__7579__auto___18150 < len__7578__auto___18149)){
args18146.push((arguments[i__7579__auto___18150]));

var G__18151 = (i__7579__auto___18150 + (1));
i__7579__auto___18150 = G__18151;
continue;
} else {
}
break;
}

var G__18148 = args18146.length;
switch (G__18148) {
case 1:
return parinfer.indent_mode.process_text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.indent_mode.process_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18146.length)].join('')));

}
});

parinfer.indent_mode.process_text.cljs$core$IFn$_invoke$arity$1 = (function (text){
return parinfer.indent_mode.process_text.cljs$core$IFn$_invoke$arity$2(text,null);
});

parinfer.indent_mode.process_text.cljs$core$IFn$_invoke$arity$2 = (function (text,options){
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([parinfer.indent_mode.initial_state,options], 0));
var lines = parinfer.string.get_lines(text);
var state__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(parinfer.indent_mode.process_line,state,lines);
return parinfer.indent_mode.finalize_state(state__$1);
});

parinfer.indent_mode.process_text.cljs$lang$maxFixedArity = 2;
parinfer.indent_mode.safe_subvec = (function parinfer$indent_mode$safe_subvec(v,i){
if((i < cljs.core.count(v))){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,i);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
/**
 * restore the text of a line before trailing delimiters were inserted
 */
parinfer.indent_mode.restore_insert_line = (function parinfer$indent_mode$restore_insert_line(p__18153){
var map__18158 = p__18153;
var map__18158__$1 = ((((!((map__18158 == null)))?((((map__18158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18158):map__18158);
var state = map__18158__$1;
var insert = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18158__$1,new cljs.core.Keyword(null,"insert","insert",1286475395));
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18158__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var map__18160 = insert;
var map__18160__$1 = ((((!((map__18160 == null)))?((((map__18160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18160):map__18160);
var line_dy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18160__$1,new cljs.core.Keyword(null,"line-dy","line-dy",41667486));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18160__$1,new cljs.core.Keyword(null,"line","line",212345235));
if(cljs.core.truth_((function (){var and__6497__auto__ = line_dy;
if(cljs.core.truth_(and__6497__auto__)){
var and__6497__auto____$1 = line;
if(cljs.core.truth_(and__6497__auto____$1)){
return (line_no >= (0));
} else {
return and__6497__auto____$1;
}
} else {
return and__6497__auto__;
}
})())){
var insert_line_no = (line_dy + line_no);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781),insert_line_no], null),line);
} else {
return state;
}
});
/**
 * fill the rest of the lines with info from cache.
 */
parinfer.indent_mode.fill_rest_with_cache = (function parinfer$indent_mode$fill_rest_with_cache(prev_state,state,last_i){
var state__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.pop),new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.into,parinfer.indent_mode.safe_subvec(new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(prev_state),last_i)),new cljs.core.Keyword(null,"postline-states","postline-states",1667653678),cljs.core.into,parinfer.indent_mode.safe_subvec(new cljs.core.Keyword(null,"postline-states","postline-states",1667653678).cljs$core$IFn$_invoke$arity$1(prev_state),(last_i + (1)))),new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728),cljs.core.into,parinfer.indent_mode.safe_subvec(new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728).cljs$core$IFn$_invoke$arity$1(prev_state),(last_i + (1)))),cljs.core.last(new cljs.core.Keyword(null,"postline-states","postline-states",1667653678).cljs$core$IFn$_invoke$arity$1(prev_state))], 0));
var state__$2 = parinfer.indent_mode.restore_insert_line(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466),(cljs.core.count(new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(state__$1)) - (1))));
return state__$2;
});
/**
 * process a line that comes after those that have changed.
 *   'reduced' will halt further processing.
 */
parinfer.indent_mode.process_unchanged_line_STAR_ = (function parinfer$indent_mode$process_unchanged_line_STAR_(prev_state,state,p__18162){
var vec__18164 = p__18162;
var old_i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18164,(0),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18164,(1),null);
var cache = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18164,(2),null);
var state__$1 = parinfer.indent_mode.process_line.cljs$core$IFn$_invoke$arity$2(state,line);
var new_cache = cljs.core.last(new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728).cljs$core$IFn$_invoke$arity$1(state__$1));
var more_QMARK_ = ((old_i + (1)) < cljs.core.count(new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(prev_state)));
var can_skip_QMARK_ = (function (){var and__6497__auto__ = new_cache;
if(cljs.core.truth_(and__6497__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_cache,cache);
} else {
return and__6497__auto__;
}
})();
if(cljs.core.truth_((function (){var and__6497__auto__ = can_skip_QMARK_;
if(cljs.core.truth_(and__6497__auto__)){
return more_QMARK_;
} else {
return and__6497__auto__;
}
})())){
return cljs.core.reduced(parinfer.indent_mode.fill_rest_with_cache(prev_state,state__$1,old_i));
} else {
return state__$1;
}
});
/**
 * process the lines after those that have changed.
 */
parinfer.indent_mode.process_unchanged_lines = (function parinfer$indent_mode$process_unchanged_lines(prev_state,state,start_i){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(parinfer.indent_mode.process_unchanged_line_STAR_,prev_state),state,cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,cljs.core.iterate(cljs.core.inc,start_i),parinfer.indent_mode.safe_subvec(new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(prev_state),start_i),parinfer.indent_mode.safe_subvec(new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728).cljs$core$IFn$_invoke$arity$1(prev_state),start_i)));
});
/**
 * build an initial state based on our starting line and previous cache.
 */
parinfer.indent_mode.initial_cached_state = (function parinfer$indent_mode$initial_cached_state(p__18165,options,i){
var map__18168 = p__18165;
var map__18168__$1 = ((((!((map__18168 == null)))?((((map__18168.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18168.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18168):map__18168);
var prev_state = map__18168__$1;
var lines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18168__$1,new cljs.core.Keyword(null,"lines","lines",-700165781));
var postline_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18168__$1,new cljs.core.Keyword(null,"postline-states","postline-states",1667653678));
var postindent_states = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18168__$1,new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728));
var line_data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"lines","lines",-700165781),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(lines,(0),i),new cljs.core.Keyword(null,"postindent-states","postindent-states",965093728),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(postindent_states,(0),i),new cljs.core.Keyword(null,"postline-states","postline-states",1667653678),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(postline_states,(0),i),new cljs.core.Keyword(null,"line-no","line-no",-666819466),(i - (1))], null);
var last_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$2(postline_states,(i - (1)));
return parinfer.indent_mode.restore_insert_line(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([parinfer.indent_mode.initial_state,options,line_data,last_cache], 0)));
});
/**
 * Processes the given change for the given state.  Returns new state.
 *   See `format-text-change` for usage.
 */
parinfer.indent_mode.process_text_change = (function parinfer$indent_mode$process_text_change(var_args){
var args18170 = [];
var len__7578__auto___18177 = arguments.length;
var i__7579__auto___18178 = (0);
while(true){
if((i__7579__auto___18178 < len__7578__auto___18177)){
args18170.push((arguments[i__7579__auto___18178]));

var G__18179 = (i__7579__auto___18178 + (1));
i__7579__auto___18178 = G__18179;
continue;
} else {
}
break;
}

var G__18172 = args18170.length;
switch (G__18172) {
case 2:
return parinfer.indent_mode.process_text_change.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return parinfer.indent_mode.process_text_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18170.length)].join('')));

}
});

parinfer.indent_mode.process_text_change.cljs$core$IFn$_invoke$arity$2 = (function (prev_state,change){
return parinfer.indent_mode.process_text_change.cljs$core$IFn$_invoke$arity$3(prev_state,change,null);
});

parinfer.indent_mode.process_text_change.cljs$core$IFn$_invoke$arity$3 = (function (prev_state,p__18173,options){
var map__18174 = p__18173;
var map__18174__$1 = ((((!((map__18174 == null)))?((((map__18174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18174):map__18174);
var change = map__18174__$1;
var line_no = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18174__$1,new cljs.core.Keyword(null,"line-no","line-no",-666819466));
var new_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18174__$1,new cljs.core.Keyword(null,"new-line","new-line",1060819447));
var vec__18176 = ((typeof line_no === 'number')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line_no,(line_no + (1))], null):line_no);
var start_line_no = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18176,(0),null);
var end_line_no = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18176,(1),null);
var line_replacements = ((typeof new_line === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_line], null):new_line);
var state = parinfer.indent_mode.initial_cached_state(prev_state,options,start_line_no);
var state__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(parinfer.indent_mode.process_line,state,line_replacements);
var state__$2 = parinfer.indent_mode.process_unchanged_lines(prev_state,state__$1,end_line_no);
return parinfer.indent_mode.finalize_state(state__$2);
});

parinfer.indent_mode.process_text_change.cljs$lang$maxFixedArity = 3;
/**
 * Fully process the given text using Indent Mode.
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
 *  :state    - cached state to be passed to `format-text-change`
 *   
 */
parinfer.indent_mode.format_text = (function parinfer$indent_mode$format_text(var_args){
var args18181 = [];
var len__7578__auto___18184 = arguments.length;
var i__7579__auto___18185 = (0);
while(true){
if((i__7579__auto___18185 < len__7578__auto___18184)){
args18181.push((arguments[i__7579__auto___18185]));

var G__18186 = (i__7579__auto___18185 + (1));
i__7579__auto___18185 = G__18186;
continue;
} else {
}
break;
}

var G__18183 = args18181.length;
switch (G__18183) {
case 1:
return parinfer.indent_mode.format_text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return parinfer.indent_mode.format_text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18181.length)].join('')));

}
});

parinfer.indent_mode.format_text.cljs$core$IFn$_invoke$arity$1 = (function (text){
return parinfer.indent_mode.format_text.cljs$core$IFn$_invoke$arity$2(text,null);
});

parinfer.indent_mode.format_text.cljs$core$IFn$_invoke$arity$2 = (function (text,options){
var state = parinfer.indent_mode.process_text.cljs$core$IFn$_invoke$arity$2(text,options);
var out_text = (cljs.core.truth_(new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(state)):text);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),out_text,new cljs.core.Keyword(null,"valid?","valid?",-212412379),new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
});

parinfer.indent_mode.format_text.cljs$lang$maxFixedArity = 2;
/**
 * Process changed lines in a previously processed text using Indent Mode.
 * 
 *   'text' is the full text (including the change).
 * 
 *   'prev-state' is the state after processing 'text' before the 'change' occurred.
 *  - found in the :state key of the result returned by `format-text` or this function.
 * 
 *   'change' is a map:
 * 
 *  KEY        |  DESCRIPTION             |  TYPE
 *  -----------+--------------------------+------------------------------------
 *  :line-no   |  line range to replace   |  a num or min,max line range
 *  :new-line  |  new line(s) to insert   |  a string or seq if multiple lines
 * 
 *   'options' is an optional map with supported keys:
 *  :cursor-x     - x position of the cursor (zero-based)
 *  :cursor-line  - line number of the cursor (zero-based)
 * 
 *   Returns a map:
 *  :text     - full text output
 *  :valid?   - indicates if the input was valid
 *  :state    - cached state to be passed to `format-text-change`
 *   
 */
parinfer.indent_mode.format_text_change = (function parinfer$indent_mode$format_text_change(var_args){
var args18188 = [];
var len__7578__auto___18191 = arguments.length;
var i__7579__auto___18192 = (0);
while(true){
if((i__7579__auto___18192 < len__7578__auto___18191)){
args18188.push((arguments[i__7579__auto___18192]));

var G__18193 = (i__7579__auto___18192 + (1));
i__7579__auto___18192 = G__18193;
continue;
} else {
}
break;
}

var G__18190 = args18188.length;
switch (G__18190) {
case 3:
return parinfer.indent_mode.format_text_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return parinfer.indent_mode.format_text_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18188.length)].join('')));

}
});

parinfer.indent_mode.format_text_change.cljs$core$IFn$_invoke$arity$3 = (function (text,prev_state,change){
return parinfer.indent_mode.format_text_change.cljs$core$IFn$_invoke$arity$4(text,prev_state,change,null);
});

parinfer.indent_mode.format_text_change.cljs$core$IFn$_invoke$arity$4 = (function (text,prev_state,change,options){
var state = parinfer.indent_mode.process_text_change.cljs$core$IFn$_invoke$arity$3(prev_state,change,options);
var out_text = (cljs.core.truth_(new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state))?clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(state)):text);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),out_text,new cljs.core.Keyword(null,"valid?","valid?",-212412379),new cljs.core.Keyword(null,"valid?","valid?",-212412379).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"state","state",-1988618099),state], null);
});

parinfer.indent_mode.format_text_change.cljs$lang$maxFixedArity = 4;
