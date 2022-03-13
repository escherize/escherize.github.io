// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x41731_41732 = value;
x41731_41732.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x41736_41737 = value;
x41736_41737.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x41741_41742 = value;
x41741_41742.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__27388__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__27388__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__27388__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__28482__auto__ = [];
var len__28475__auto___41750 = arguments.length;
var i__28476__auto___41751 = (0);
while(true){
if((i__28476__auto___41751 < len__28475__auto___41750)){
args__28482__auto__.push((arguments[i__28476__auto___41751]));

var G__41752 = (i__28476__auto___41751 + (1));
i__28476__auto___41751 = G__41752;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__41746_41753 = cljs.core.seq.call(null,items);
var chunk__41747_41754 = null;
var count__41748_41755 = (0);
var i__41749_41756 = (0);
while(true){
if((i__41749_41756 < count__41748_41755)){
var item_41757 = cljs.core._nth.call(null,chunk__41747_41754,i__41749_41756);
if(cljs.core.some_QMARK_.call(null,item_41757)){
if(cljs.core.coll_QMARK_.call(null,item_41757)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_41757)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_41757));
}
} else {
}

var G__41758 = seq__41746_41753;
var G__41759 = chunk__41747_41754;
var G__41760 = count__41748_41755;
var G__41761 = (i__41749_41756 + (1));
seq__41746_41753 = G__41758;
chunk__41747_41754 = G__41759;
count__41748_41755 = G__41760;
i__41749_41756 = G__41761;
continue;
} else {
var temp__4657__auto___41762 = cljs.core.seq.call(null,seq__41746_41753);
if(temp__4657__auto___41762){
var seq__41746_41763__$1 = temp__4657__auto___41762;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41746_41763__$1)){
var c__28211__auto___41764 = cljs.core.chunk_first.call(null,seq__41746_41763__$1);
var G__41765 = cljs.core.chunk_rest.call(null,seq__41746_41763__$1);
var G__41766 = c__28211__auto___41764;
var G__41767 = cljs.core.count.call(null,c__28211__auto___41764);
var G__41768 = (0);
seq__41746_41753 = G__41765;
chunk__41747_41754 = G__41766;
count__41748_41755 = G__41767;
i__41749_41756 = G__41768;
continue;
} else {
var item_41769 = cljs.core.first.call(null,seq__41746_41763__$1);
if(cljs.core.some_QMARK_.call(null,item_41769)){
if(cljs.core.coll_QMARK_.call(null,item_41769)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_41769)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_41769));
}
} else {
}

var G__41770 = cljs.core.next.call(null,seq__41746_41763__$1);
var G__41771 = null;
var G__41772 = (0);
var G__41773 = (0);
seq__41746_41753 = G__41770;
chunk__41747_41754 = G__41771;
count__41748_41755 = G__41772;
i__41749_41756 = G__41773;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq41745){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41745));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__28482__auto__ = [];
var len__28475__auto___41781 = arguments.length;
var i__28476__auto___41782 = (0);
while(true){
if((i__28476__auto___41782 < len__28475__auto___41781)){
args__28482__auto__.push((arguments[i__28476__auto___41782]));

var G__41783 = (i__28476__auto___41782 + (1));
i__28476__auto___41782 = G__41783;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((2) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__28483__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__41777_41784 = cljs.core.seq.call(null,children);
var chunk__41778_41785 = null;
var count__41779_41786 = (0);
var i__41780_41787 = (0);
while(true){
if((i__41780_41787 < count__41779_41786)){
var child_41788 = cljs.core._nth.call(null,chunk__41778_41785,i__41780_41787);
if(cljs.core.some_QMARK_.call(null,child_41788)){
if(cljs.core.coll_QMARK_.call(null,child_41788)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_41788))));
} else {
var temp__4655__auto___41789 = devtools.formatters.helpers.pref.call(null,child_41788);
if(cljs.core.truth_(temp__4655__auto___41789)){
var child_value_41790 = temp__4655__auto___41789;
template.push(child_value_41790);
} else {
}
}
} else {
}

var G__41791 = seq__41777_41784;
var G__41792 = chunk__41778_41785;
var G__41793 = count__41779_41786;
var G__41794 = (i__41780_41787 + (1));
seq__41777_41784 = G__41791;
chunk__41778_41785 = G__41792;
count__41779_41786 = G__41793;
i__41780_41787 = G__41794;
continue;
} else {
var temp__4657__auto___41795 = cljs.core.seq.call(null,seq__41777_41784);
if(temp__4657__auto___41795){
var seq__41777_41796__$1 = temp__4657__auto___41795;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41777_41796__$1)){
var c__28211__auto___41797 = cljs.core.chunk_first.call(null,seq__41777_41796__$1);
var G__41798 = cljs.core.chunk_rest.call(null,seq__41777_41796__$1);
var G__41799 = c__28211__auto___41797;
var G__41800 = cljs.core.count.call(null,c__28211__auto___41797);
var G__41801 = (0);
seq__41777_41784 = G__41798;
chunk__41778_41785 = G__41799;
count__41779_41786 = G__41800;
i__41780_41787 = G__41801;
continue;
} else {
var child_41802 = cljs.core.first.call(null,seq__41777_41796__$1);
if(cljs.core.some_QMARK_.call(null,child_41802)){
if(cljs.core.coll_QMARK_.call(null,child_41802)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_41802))));
} else {
var temp__4655__auto___41803 = devtools.formatters.helpers.pref.call(null,child_41802);
if(cljs.core.truth_(temp__4655__auto___41803)){
var child_value_41804 = temp__4655__auto___41803;
template.push(child_value_41804);
} else {
}
}
} else {
}

var G__41805 = cljs.core.next.call(null,seq__41777_41796__$1);
var G__41806 = null;
var G__41807 = (0);
var G__41808 = (0);
seq__41777_41784 = G__41805;
chunk__41778_41785 = G__41806;
count__41779_41786 = G__41807;
i__41780_41787 = G__41808;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq41774){
var G__41775 = cljs.core.first.call(null,seq41774);
var seq41774__$1 = cljs.core.next.call(null,seq41774);
var G__41776 = cljs.core.first.call(null,seq41774__$1);
var seq41774__$2 = cljs.core.next.call(null,seq41774__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__41775,G__41776,seq41774__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__28482__auto__ = [];
var len__28475__auto___41811 = arguments.length;
var i__28476__auto___41812 = (0);
while(true){
if((i__28476__auto___41812 < len__28475__auto___41811)){
args__28482__auto__.push((arguments[i__28476__auto___41812]));

var G__41813 = (i__28476__auto___41812 + (1));
i__28476__auto___41812 = G__41813;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((1) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28483__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq41809){
var G__41810 = cljs.core.first.call(null,seq41809);
var seq41809__$1 = cljs.core.next.call(null,seq41809);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41810,seq41809__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__28482__auto__ = [];
var len__28475__auto___41816 = arguments.length;
var i__28476__auto___41817 = (0);
while(true){
if((i__28476__auto___41817 < len__28475__auto___41816)){
args__28482__auto__.push((arguments[i__28476__auto___41817]));

var G__41818 = (i__28476__auto___41817 + (1));
i__28476__auto___41817 = G__41818;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((1) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28483__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq41814){
var G__41815 = cljs.core.first.call(null,seq41814);
var seq41814__$1 = cljs.core.next.call(null,seq41814);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41815,seq41814__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args41819 = [];
var len__28475__auto___41824 = arguments.length;
var i__28476__auto___41825 = (0);
while(true){
if((i__28476__auto___41825 < len__28475__auto___41824)){
args41819.push((arguments[i__28476__auto___41825]));

var G__41826 = (i__28476__auto___41825 + (1));
i__28476__auto___41825 = G__41826;
continue;
} else {
}
break;
}

var G__41821 = args41819.length;
switch (G__41821) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41819.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj41823 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__27400__auto__ = start_index;
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
return (0);
}
})()};
return obj41823;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__28482__auto__ = [];
var len__28475__auto___41834 = arguments.length;
var i__28476__auto___41835 = (0);
while(true){
if((i__28476__auto___41835 < len__28475__auto___41834)){
args__28482__auto__.push((arguments[i__28476__auto___41835]));

var G__41836 = (i__28476__auto___41835 + (1));
i__28476__auto___41835 = G__41836;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((1) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28483__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__41830){
var vec__41831 = p__41830;
var state_override_fn = cljs.core.nth.call(null,vec__41831,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq41828){
var G__41829 = cljs.core.first.call(null,seq41828);
var seq41828__$1 = cljs.core.next.call(null,seq41828);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__41829,seq41828__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__28386__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_41840_41843 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_41841_41844 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_41840_41843,_STAR_print_fn_STAR_41841_41844,sb__28386__auto__){
return (function (x__28387__auto__){
return sb__28386__auto__.append(x__28387__auto__);
});})(_STAR_print_newline_STAR_41840_41843,_STAR_print_fn_STAR_41841_41844,sb__28386__auto__))
;

try{var _STAR_print_level_STAR_41842_41845 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_41842_41845;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41841_41844;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41840_41843;
}
return [cljs.core.str(sb__28386__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_41847 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_41847;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__41849 = name;
switch (G__41849) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__41854 = tag;
var html_tag = cljs.core.nth.call(null,vec__41854,(0),null);
var style = cljs.core.nth.call(null,vec__41854,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_41858 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_41858;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_41861 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_41862 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_41862;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_41861;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__41863 = initial_value;
var G__41864 = value.call(null);
initial_value = G__41863;
value = G__41864;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__41865 = initial_value;
var G__41866 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__41865;
value = G__41866;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__41867 = initial_value;
var G__41868 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__41867;
value = G__41868;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1481770150539