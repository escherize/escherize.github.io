// Compiled by ClojureScript 1.8.34 {:static-fns true}
goog.provide('parinfer.reader');
goog.require('cljs.core');
parinfer.reader.matching_delim = new cljs.core.PersistentArrayMap(null, 6, ["{","}","}","{","[","]","]","[","(",")",")","("], null);
parinfer.reader.opening_delim_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["(",null,"{",null,"[",null], null), null);
parinfer.reader.closing_delim_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["]",null,")",null,"}",null], null), null);
parinfer.reader.whitespace_QMARK_ = (function parinfer$reader$whitespace_QMARK_(ch){
return cljs.core.re_find(/\s/,ch);
});
parinfer.reader.prev_ch = (function parinfer$reader$prev_ch(stack){
return new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(cljs.core.peek(stack));
});
/**
 * Next character will be escaped.
 */
parinfer.reader.escaping_QMARK_ = (function parinfer$reader$escaping_QMARK_(stack){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\\",parinfer.reader.prev_ch(stack));
});
/**
 * Next character is inside a string.
 */
parinfer.reader.in_str_QMARK_ = (function parinfer$reader$in_str_QMARK_(stack){
var ch = parinfer.reader.prev_ch((function (){var G__17873 = stack;
var G__17873__$1 = (cljs.core.truth_(parinfer.reader.escaping_QMARK_(stack))?cljs.core.pop(G__17873):G__17873);
return G__17873__$1;
})());
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\"",ch);
});
/**
 * Next character is inside a comment.
 */
parinfer.reader.in_comment_QMARK_ = (function parinfer$reader$in_comment_QMARK_(stack){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(";",parinfer.reader.prev_ch(stack));
});
/**
 * Next character is inside actual code.
 */
parinfer.reader.in_code_QMARK_ = (function parinfer$reader$in_code_QMARK_(stack){
return (cljs.core.not(parinfer.reader.in_str_QMARK_(stack))) && (cljs.core.not(parinfer.reader.in_comment_QMARK_(stack)));
});
/**
 * Determine if the given closing delimiter can be used next, assuming we are inside code.
 */
parinfer.reader.valid_closer_QMARK_ = (function parinfer$reader$valid_closer_QMARK_(stack,ch){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parinfer.reader.prev_ch(stack),(parinfer.reader.matching_delim.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.matching_delim.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.matching_delim.call(null,ch)));
});
if(typeof parinfer.reader.push_char_STAR_ !== 'undefined'){
} else {
/**
 * Update the delimiter stack with the given character.
 */
parinfer.reader.push_char_STAR_ = (function (){var method_table__7433__auto__ = (function (){var G__17874 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17874) : cljs.core.atom.call(null,G__17874));
})();
var prefer_table__7434__auto__ = (function (){var G__17875 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17875) : cljs.core.atom.call(null,G__17875));
})();
var method_cache__7435__auto__ = (function (){var G__17876 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17876) : cljs.core.atom.call(null,G__17876));
})();
var cached_hierarchy__7436__auto__ = (function (){var G__17877 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__17877) : cljs.core.atom.call(null,G__17877));
})();
var hierarchy__7437__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("parinfer.reader","push-char*"),((function (method_table__7433__auto__,prefer_table__7434__auto__,method_cache__7435__auto__,cached_hierarchy__7436__auto__,hierarchy__7437__auto__){
return (function (p__17878){
var map__17879 = p__17878;
var map__17879__$1 = ((((!((map__17879 == null)))?((((map__17879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17879):map__17879);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17879__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
if(cljs.core.truth_((parinfer.reader.opening_delim_QMARK_.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.opening_delim_QMARK_.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.opening_delim_QMARK_.call(null,ch)))){
return new cljs.core.Keyword(null,"open","open",-1763596448);
} else {
if(cljs.core.truth_((parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.closing_delim_QMARK_.cljs$core$IFn$_invoke$arity$1(ch) : parinfer.reader.closing_delim_QMARK_.call(null,ch)))){
return new cljs.core.Keyword(null,"close","close",1835149582);
} else {
return ch;

}
}
});})(method_table__7433__auto__,prefer_table__7434__auto__,method_cache__7435__auto__,cached_hierarchy__7436__auto__,hierarchy__7437__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__7437__auto__,method_table__7433__auto__,prefer_table__7434__auto__,method_cache__7435__auto__,cached_hierarchy__7436__auto__));
})();
}
parinfer.reader.push_char_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,"\t",(function (p__17881){
var map__17882 = p__17881;
var map__17882__$1 = ((((!((map__17882 == null)))?((((map__17882.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17882.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17882):map__17882);
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17882__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.not(parinfer.reader.in_str_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ch","ch",-554717905),"  "], null);
} else {
return null;

}
}));
parinfer.reader.push_char_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"open","open",-1763596448),(function (p__17884){
var map__17885 = p__17884;
var map__17885__$1 = ((((!((map__17885 == null)))?((((map__17885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17885):map__17885);
var state = map__17885__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17885__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop(stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_code_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.select_keys(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905),new cljs.core.Keyword(null,"indent-delta","indent-delta",-1753368232)], null)))], null);
} else {
return null;

}
}
}));
parinfer.reader.push_char_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"close","close",1835149582),(function (p__17887){
var map__17888 = p__17887;
var map__17888__$1 = ((((!((map__17888 == null)))?((((map__17888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17888):map__17888);
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17888__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var backup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17888__$1,new cljs.core.Keyword(null,"backup","backup",26347393));
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17888__$1,new cljs.core.Keyword(null,"ch","ch",-554717905));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop(stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_code_QMARK_(stack))){
if(cljs.core.truth_(parinfer.reader.valid_closer_QMARK_(stack,ch))){
var opener = cljs.core.peek(stack);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop(stack),new cljs.core.Keyword(null,"backup","backup",26347393),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(backup,opener)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ch","ch",-554717905),""], null);
}
} else {
return null;

}
}
}));
parinfer.reader.push_char_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,";",(function (p__17890){
var map__17891 = p__17890;
var map__17891__$1 = ((((!((map__17891 == null)))?((((map__17891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17891):map__17891);
var state = map__17891__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17891__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop(stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_code_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.select_keys(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905)], null)))], null);
} else {
return null;

}
}
}));
parinfer.reader.push_char_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,"\n",(function (p__17893){
var map__17894 = p__17893;
var map__17894__$1 = ((((!((map__17894 == null)))?((((map__17894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17894):map__17894);
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17894__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
var stack__$1 = (function (){var G__17896 = stack;
var G__17896__$1 = (cljs.core.truth_(parinfer.reader.escaping_QMARK_(stack))?cljs.core.pop(G__17896):G__17896);
return G__17896__$1;
})();
var stack__$2 = (function (){var G__17897 = stack__$1;
var G__17897__$1 = (cljs.core.truth_(parinfer.reader.in_comment_QMARK_(stack__$1))?cljs.core.pop(G__17897):G__17897);
return G__17897__$1;
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ch","ch",-554717905),"",new cljs.core.Keyword(null,"stack","stack",-793405930),stack__$2], null);
}));
parinfer.reader.push_char_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,"\\",(function (p__17898){
var map__17899 = p__17898;
var map__17899__$1 = ((((!((map__17899 == null)))?((((map__17899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17899):map__17899);
var state = map__17899__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17899__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop(stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_comment_QMARK_(stack))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.select_keys(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905)], null)))], null);

}
}
}));
parinfer.reader.push_char_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,"\"",(function (p__17901){
var map__17902 = p__17901;
var map__17902__$1 = ((((!((map__17902 == null)))?((((map__17902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17902):map__17902);
var state = map__17902__$1;
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17902__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop(stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_str_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop(stack)], null);
} else {
if(cljs.core.truth_(parinfer.reader.in_comment_QMARK_(stack))){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.select_keys(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x-pos","x-pos",-382213783),new cljs.core.Keyword(null,"ch","ch",-554717905)], null)))], null);

}
}
}
}));
parinfer.reader.push_char_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__17904){
var map__17905 = p__17904;
var map__17905__$1 = ((((!((map__17905 == null)))?((((map__17905.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17905.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17905):map__17905);
var stack = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17905__$1,new cljs.core.Keyword(null,"stack","stack",-793405930));
if(cljs.core.truth_(parinfer.reader.escaping_QMARK_(stack))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stack","stack",-793405930),cljs.core.pop(stack)], null);
} else {
return null;

}
}));
parinfer.reader.push_char = (function parinfer$reader$push_char(state){
var new_data = (parinfer.reader.push_char_STAR_.cljs$core$IFn$_invoke$arity$1 ? parinfer.reader.push_char_STAR_.cljs$core$IFn$_invoke$arity$1(state) : parinfer.reader.push_char_STAR_.call(null,state));
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(((function (new_data){
return (function (p1__17908_SHARP_,p2__17907_SHARP_){
var or__6509__auto__ = p2__17907_SHARP_;
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return p1__17908_SHARP_;
}
});})(new_data))
,cljs.core.array_seq([state,new_data], 0));
});
