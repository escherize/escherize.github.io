// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__28063__auto__ = (((value == null))?null:value);
var m__28064__auto__ = (devtools.format._header[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,value);
} else {
var m__28064__auto____$1 = (devtools.format._header["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__28063__auto__ = (((value == null))?null:value);
var m__28064__auto__ = (devtools.format._has_body[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,value);
} else {
var m__28064__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__28063__auto__ = (((value == null))?null:value);
var m__28064__auto__ = (devtools.format._body[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,value);
} else {
var m__28064__auto____$1 = (devtools.format._body["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39229__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39229__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39229__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39229__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39228__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39228__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39229__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39229__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39229__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39229__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39228__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39228__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39229__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39229__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39229__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39229__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39228__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39228__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39229__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39229__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39229__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39229__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39228__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39228__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39229__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39229__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39229__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39229__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39228__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39228__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39229__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39229__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39229__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39229__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39228__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39228__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__39229__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__39229__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__39229__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__39229__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__39228__auto__ = temp__4657__auto____$2;
return goog.object.get(o__39228__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39250 = arguments.length;
var i__28476__auto___39251 = (0);
while(true){
if((i__28476__auto___39251 < len__28475__auto___39250)){
args__28482__auto__.push((arguments[i__28476__auto___39251]));

var G__39252 = (i__28476__auto___39251 + (1));
i__28476__auto___39251 = G__39252;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq39249){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39249));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39254 = arguments.length;
var i__28476__auto___39255 = (0);
while(true){
if((i__28476__auto___39255 < len__28475__auto___39254)){
args__28482__auto__.push((arguments[i__28476__auto___39255]));

var G__39256 = (i__28476__auto___39255 + (1));
i__28476__auto___39255 = G__39256;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq39253){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39253));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39258 = arguments.length;
var i__28476__auto___39259 = (0);
while(true){
if((i__28476__auto___39259 < len__28475__auto___39258)){
args__28482__auto__.push((arguments[i__28476__auto___39259]));

var G__39260 = (i__28476__auto___39259 + (1));
i__28476__auto___39259 = G__39260;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq39257){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39257));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39262 = arguments.length;
var i__28476__auto___39263 = (0);
while(true){
if((i__28476__auto___39263 < len__28475__auto___39262)){
args__28482__auto__.push((arguments[i__28476__auto___39263]));

var G__39264 = (i__28476__auto___39263 + (1));
i__28476__auto___39263 = G__39264;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq39261){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39261));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39266 = arguments.length;
var i__28476__auto___39267 = (0);
while(true){
if((i__28476__auto___39267 < len__28475__auto___39266)){
args__28482__auto__.push((arguments[i__28476__auto___39267]));

var G__39268 = (i__28476__auto___39267 + (1));
i__28476__auto___39267 = G__39268;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq39265){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39265));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39270 = arguments.length;
var i__28476__auto___39271 = (0);
while(true){
if((i__28476__auto___39271 < len__28475__auto___39270)){
args__28482__auto__.push((arguments[i__28476__auto___39271]));

var G__39272 = (i__28476__auto___39271 + (1));
i__28476__auto___39271 = G__39272;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq39269){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39269));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39274 = arguments.length;
var i__28476__auto___39275 = (0);
while(true){
if((i__28476__auto___39275 < len__28475__auto___39274)){
args__28482__auto__.push((arguments[i__28476__auto___39275]));

var G__39276 = (i__28476__auto___39275 + (1));
i__28476__auto___39275 = G__39276;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq39273){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39273));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39284 = arguments.length;
var i__28476__auto___39285 = (0);
while(true){
if((i__28476__auto___39285 < len__28475__auto___39284)){
args__28482__auto__.push((arguments[i__28476__auto___39285]));

var G__39286 = (i__28476__auto___39285 + (1));
i__28476__auto___39285 = G__39286;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((1) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28483__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39280){
var vec__39281 = p__39280;
var state_override = cljs.core.nth.call(null,vec__39281,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__39281,state_override){
return (function (p1__39277_SHARP_){
return cljs.core.merge.call(null,p1__39277_SHARP_,state_override);
});})(vec__39281,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq39278){
var G__39279 = cljs.core.first.call(null,seq39278);
var seq39278__$1 = cljs.core.next.call(null,seq39278);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__39279,seq39278__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39288 = arguments.length;
var i__28476__auto___39289 = (0);
while(true){
if((i__28476__auto___39289 < len__28475__auto___39288)){
args__28482__auto__.push((arguments[i__28476__auto___39289]));

var G__39290 = (i__28476__auto___39289 + (1));
i__28476__auto___39289 = G__39290;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq39287){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39287));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39293 = arguments.length;
var i__28476__auto___39294 = (0);
while(true){
if((i__28476__auto___39294 < len__28475__auto___39293)){
args__28482__auto__.push((arguments[i__28476__auto___39294]));

var G__39295 = (i__28476__auto___39294 + (1));
i__28476__auto___39294 = G__39295;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((1) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28483__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq39291){
var G__39292 = cljs.core.first.call(null,seq39291);
var seq39291__$1 = cljs.core.next.call(null,seq39291);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__39292,seq39291__$1);
});


//# sourceMappingURL=format.js.map?rel=1481770144587