// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args38354 = [];
var len__28475__auto___38357 = arguments.length;
var i__28476__auto___38358 = (0);
while(true){
if((i__28476__auto___38358 < len__28475__auto___38357)){
args38354.push((arguments[i__28476__auto___38358]));

var G__38359 = (i__28476__auto___38358 + (1));
i__28476__auto___38358 = G__38359;
continue;
} else {
}
break;
}

var G__38356 = args38354.length;
switch (G__38356) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38354.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__28482__auto__ = [];
var len__28475__auto___38362 = arguments.length;
var i__28476__auto___38363 = (0);
while(true){
if((i__28476__auto___38363 < len__28475__auto___38362)){
args__28482__auto__.push((arguments[i__28476__auto___38363]));

var G__38364 = (i__28476__auto___38363 + (1));
i__28476__auto___38363 = G__38364;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38361){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38361));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__28482__auto__ = [];
var len__28475__auto___38366 = arguments.length;
var i__28476__auto___38367 = (0);
while(true){
if((i__28476__auto___38367 < len__28475__auto___38366)){
args__28482__auto__.push((arguments[i__28476__auto___38367]));

var G__38368 = (i__28476__auto___38367 + (1));
i__28476__auto___38367 = G__38368;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38365){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38365));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__38369 = cljs.core._EQ_;
var expr__38370 = (function (){var or__27400__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e38373){if((e38373 instanceof Error)){
var e = e38373;
return false;
} else {
throw e38373;

}
}})();
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__38369.call(null,"true",expr__38370))){
return true;
} else {
if(cljs.core.truth_(pred__38369.call(null,"false",expr__38370))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__38370)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e38375){if((e38375 instanceof Error)){
var e = e38375;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e38375;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38376){
var map__38379 = p__38376;
var map__38379__$1 = ((((!((map__38379 == null)))?((((map__38379.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38379.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38379):map__38379);
var message = cljs.core.get.call(null,map__38379__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38379__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27400__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27388__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27388__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27388__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30994__auto___38541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto___38541,ch){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto___38541,ch){
return (function (state_38510){
var state_val_38511 = (state_38510[(1)]);
if((state_val_38511 === (7))){
var inst_38506 = (state_38510[(2)]);
var state_38510__$1 = state_38510;
var statearr_38512_38542 = state_38510__$1;
(statearr_38512_38542[(2)] = inst_38506);

(statearr_38512_38542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38511 === (1))){
var state_38510__$1 = state_38510;
var statearr_38513_38543 = state_38510__$1;
(statearr_38513_38543[(2)] = null);

(statearr_38513_38543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38511 === (4))){
var inst_38463 = (state_38510[(7)]);
var inst_38463__$1 = (state_38510[(2)]);
var state_38510__$1 = (function (){var statearr_38514 = state_38510;
(statearr_38514[(7)] = inst_38463__$1);

return statearr_38514;
})();
if(cljs.core.truth_(inst_38463__$1)){
var statearr_38515_38544 = state_38510__$1;
(statearr_38515_38544[(1)] = (5));

} else {
var statearr_38516_38545 = state_38510__$1;
(statearr_38516_38545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38511 === (15))){
var inst_38470 = (state_38510[(8)]);
var inst_38485 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38470);
var inst_38486 = cljs.core.first.call(null,inst_38485);
var inst_38487 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38486);
var inst_38488 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_38487)].join('');
var inst_38489 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38488);
var state_38510__$1 = state_38510;
var statearr_38517_38546 = state_38510__$1;
(statearr_38517_38546[(2)] = inst_38489);

(statearr_38517_38546[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38511 === (13))){
var inst_38494 = (state_38510[(2)]);
var state_38510__$1 = state_38510;
var statearr_38518_38547 = state_38510__$1;
(statearr_38518_38547[(2)] = inst_38494);

(statearr_38518_38547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38511 === (6))){
var state_38510__$1 = state_38510;
var statearr_38519_38548 = state_38510__$1;
(statearr_38519_38548[(2)] = null);

(statearr_38519_38548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38511 === (17))){
var inst_38492 = (state_38510[(2)]);
var state_38510__$1 = state_38510;
var statearr_38520_38549 = state_38510__$1;
(statearr_38520_38549[(2)] = inst_38492);

(statearr_38520_38549[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38511 === (3))){
var inst_38508 = (state_38510[(2)]);
var state_38510__$1 = state_38510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38510__$1,inst_38508);
} else {
if((state_val_38511 === (12))){
var inst_38469 = (state_38510[(9)]);
var inst_38483 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38469,opts);
var state_38510__$1 = state_38510;
if(cljs.core.truth_(inst_38483)){
var statearr_38521_38550 = state_38510__$1;
(statearr_38521_38550[(1)] = (15));

} else {
var statearr_38522_38551 = state_38510__$1;
(statearr_38522_38551[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38511 === (2))){
var state_38510__$1 = state_38510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38510__$1,(4),ch);
} else {
if((state_val_38511 === (11))){
var inst_38470 = (state_38510[(8)]);
var inst_38475 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38476 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38470);
var inst_38477 = cljs.core.async.timeout.call(null,(1000));
var inst_38478 = [inst_38476,inst_38477];
var inst_38479 = (new cljs.core.PersistentVector(null,2,(5),inst_38475,inst_38478,null));
var state_38510__$1 = state_38510;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38510__$1,(14),inst_38479);
} else {
if((state_val_38511 === (9))){
var inst_38470 = (state_38510[(8)]);
var inst_38496 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38497 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38470);
var inst_38498 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38497);
var inst_38499 = [cljs.core.str("Not loading: "),cljs.core.str(inst_38498)].join('');
var inst_38500 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38499);
var state_38510__$1 = (function (){var statearr_38523 = state_38510;
(statearr_38523[(10)] = inst_38496);

return statearr_38523;
})();
var statearr_38524_38552 = state_38510__$1;
(statearr_38524_38552[(2)] = inst_38500);

(statearr_38524_38552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38511 === (5))){
var inst_38463 = (state_38510[(7)]);
var inst_38465 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38466 = (new cljs.core.PersistentArrayMap(null,2,inst_38465,null));
var inst_38467 = (new cljs.core.PersistentHashSet(null,inst_38466,null));
var inst_38468 = figwheel.client.focus_msgs.call(null,inst_38467,inst_38463);
var inst_38469 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38468);
var inst_38470 = cljs.core.first.call(null,inst_38468);
var inst_38471 = figwheel.client.autoload_QMARK_.call(null);
var state_38510__$1 = (function (){var statearr_38525 = state_38510;
(statearr_38525[(9)] = inst_38469);

(statearr_38525[(8)] = inst_38470);

return statearr_38525;
})();
if(cljs.core.truth_(inst_38471)){
var statearr_38526_38553 = state_38510__$1;
(statearr_38526_38553[(1)] = (8));

} else {
var statearr_38527_38554 = state_38510__$1;
(statearr_38527_38554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38511 === (14))){
var inst_38481 = (state_38510[(2)]);
var state_38510__$1 = state_38510;
var statearr_38528_38555 = state_38510__$1;
(statearr_38528_38555[(2)] = inst_38481);

(statearr_38528_38555[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38511 === (16))){
var state_38510__$1 = state_38510;
var statearr_38529_38556 = state_38510__$1;
(statearr_38529_38556[(2)] = null);

(statearr_38529_38556[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38511 === (10))){
var inst_38502 = (state_38510[(2)]);
var state_38510__$1 = (function (){var statearr_38530 = state_38510;
(statearr_38530[(11)] = inst_38502);

return statearr_38530;
})();
var statearr_38531_38557 = state_38510__$1;
(statearr_38531_38557[(2)] = null);

(statearr_38531_38557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38511 === (8))){
var inst_38469 = (state_38510[(9)]);
var inst_38473 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38469,opts);
var state_38510__$1 = state_38510;
if(cljs.core.truth_(inst_38473)){
var statearr_38532_38558 = state_38510__$1;
(statearr_38532_38558[(1)] = (11));

} else {
var statearr_38533_38559 = state_38510__$1;
(statearr_38533_38559[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30994__auto___38541,ch))
;
return ((function (switch__29418__auto__,c__30994__auto___38541,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29419__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29419__auto____0 = (function (){
var statearr_38537 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38537[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29419__auto__);

(statearr_38537[(1)] = (1));

return statearr_38537;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29419__auto____1 = (function (state_38510){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_38510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e38538){if((e38538 instanceof Object)){
var ex__29422__auto__ = e38538;
var statearr_38539_38560 = state_38510;
(statearr_38539_38560[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38561 = state_38510;
state_38510 = G__38561;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29419__auto__ = function(state_38510){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29419__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29419__auto____1.call(this,state_38510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29419__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29419__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto___38541,ch))
})();
var state__30996__auto__ = (function (){var statearr_38540 = f__30995__auto__.call(null);
(statearr_38540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto___38541);

return statearr_38540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto___38541,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38562_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38562_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38565 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38565){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38564){if((e38564 instanceof Error)){
var e = e38564;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38565], null));
} else {
var e = e38564;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38565))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38566){
var map__38575 = p__38566;
var map__38575__$1 = ((((!((map__38575 == null)))?((((map__38575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38575):map__38575);
var opts = map__38575__$1;
var build_id = cljs.core.get.call(null,map__38575__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38575,map__38575__$1,opts,build_id){
return (function (p__38577){
var vec__38578 = p__38577;
var seq__38579 = cljs.core.seq.call(null,vec__38578);
var first__38580 = cljs.core.first.call(null,seq__38579);
var seq__38579__$1 = cljs.core.next.call(null,seq__38579);
var map__38581 = first__38580;
var map__38581__$1 = ((((!((map__38581 == null)))?((((map__38581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38581):map__38581);
var msg = map__38581__$1;
var msg_name = cljs.core.get.call(null,map__38581__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38579__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38578,seq__38579,first__38580,seq__38579__$1,map__38581,map__38581__$1,msg,msg_name,_,map__38575,map__38575__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38578,seq__38579,first__38580,seq__38579__$1,map__38581,map__38581__$1,msg,msg_name,_,map__38575,map__38575__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38575,map__38575__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38589){
var vec__38590 = p__38589;
var seq__38591 = cljs.core.seq.call(null,vec__38590);
var first__38592 = cljs.core.first.call(null,seq__38591);
var seq__38591__$1 = cljs.core.next.call(null,seq__38591);
var map__38593 = first__38592;
var map__38593__$1 = ((((!((map__38593 == null)))?((((map__38593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38593):map__38593);
var msg = map__38593__$1;
var msg_name = cljs.core.get.call(null,map__38593__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38591__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38595){
var map__38607 = p__38595;
var map__38607__$1 = ((((!((map__38607 == null)))?((((map__38607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38607):map__38607);
var on_compile_warning = cljs.core.get.call(null,map__38607__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38607__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38607,map__38607__$1,on_compile_warning,on_compile_fail){
return (function (p__38609){
var vec__38610 = p__38609;
var seq__38611 = cljs.core.seq.call(null,vec__38610);
var first__38612 = cljs.core.first.call(null,seq__38611);
var seq__38611__$1 = cljs.core.next.call(null,seq__38611);
var map__38613 = first__38612;
var map__38613__$1 = ((((!((map__38613 == null)))?((((map__38613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38613):map__38613);
var msg = map__38613__$1;
var msg_name = cljs.core.get.call(null,map__38613__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38611__$1;
var pred__38615 = cljs.core._EQ_;
var expr__38616 = msg_name;
if(cljs.core.truth_(pred__38615.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38616))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38615.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38616))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38607,map__38607__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto__,msg_hist,msg_names,msg){
return (function (state_38844){
var state_val_38845 = (state_38844[(1)]);
if((state_val_38845 === (7))){
var inst_38764 = (state_38844[(2)]);
var state_38844__$1 = state_38844;
if(cljs.core.truth_(inst_38764)){
var statearr_38846_38896 = state_38844__$1;
(statearr_38846_38896[(1)] = (8));

} else {
var statearr_38847_38897 = state_38844__$1;
(statearr_38847_38897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (20))){
var inst_38838 = (state_38844[(2)]);
var state_38844__$1 = state_38844;
var statearr_38848_38898 = state_38844__$1;
(statearr_38848_38898[(2)] = inst_38838);

(statearr_38848_38898[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (27))){
var inst_38834 = (state_38844[(2)]);
var state_38844__$1 = state_38844;
var statearr_38849_38899 = state_38844__$1;
(statearr_38849_38899[(2)] = inst_38834);

(statearr_38849_38899[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (1))){
var inst_38757 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38844__$1 = state_38844;
if(cljs.core.truth_(inst_38757)){
var statearr_38850_38900 = state_38844__$1;
(statearr_38850_38900[(1)] = (2));

} else {
var statearr_38851_38901 = state_38844__$1;
(statearr_38851_38901[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (24))){
var inst_38836 = (state_38844[(2)]);
var state_38844__$1 = state_38844;
var statearr_38852_38902 = state_38844__$1;
(statearr_38852_38902[(2)] = inst_38836);

(statearr_38852_38902[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (4))){
var inst_38842 = (state_38844[(2)]);
var state_38844__$1 = state_38844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38844__$1,inst_38842);
} else {
if((state_val_38845 === (15))){
var inst_38840 = (state_38844[(2)]);
var state_38844__$1 = state_38844;
var statearr_38853_38903 = state_38844__$1;
(statearr_38853_38903[(2)] = inst_38840);

(statearr_38853_38903[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (21))){
var inst_38793 = (state_38844[(2)]);
var inst_38794 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38795 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38794);
var state_38844__$1 = (function (){var statearr_38854 = state_38844;
(statearr_38854[(7)] = inst_38793);

return statearr_38854;
})();
var statearr_38855_38904 = state_38844__$1;
(statearr_38855_38904[(2)] = inst_38795);

(statearr_38855_38904[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (31))){
var inst_38823 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38844__$1 = state_38844;
if(cljs.core.truth_(inst_38823)){
var statearr_38856_38905 = state_38844__$1;
(statearr_38856_38905[(1)] = (34));

} else {
var statearr_38857_38906 = state_38844__$1;
(statearr_38857_38906[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (32))){
var inst_38832 = (state_38844[(2)]);
var state_38844__$1 = state_38844;
var statearr_38858_38907 = state_38844__$1;
(statearr_38858_38907[(2)] = inst_38832);

(statearr_38858_38907[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (33))){
var inst_38819 = (state_38844[(2)]);
var inst_38820 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38821 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38820);
var state_38844__$1 = (function (){var statearr_38859 = state_38844;
(statearr_38859[(8)] = inst_38819);

return statearr_38859;
})();
var statearr_38860_38908 = state_38844__$1;
(statearr_38860_38908[(2)] = inst_38821);

(statearr_38860_38908[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (13))){
var inst_38778 = figwheel.client.heads_up.clear.call(null);
var state_38844__$1 = state_38844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38844__$1,(16),inst_38778);
} else {
if((state_val_38845 === (22))){
var inst_38799 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38800 = figwheel.client.heads_up.append_warning_message.call(null,inst_38799);
var state_38844__$1 = state_38844;
var statearr_38861_38909 = state_38844__$1;
(statearr_38861_38909[(2)] = inst_38800);

(statearr_38861_38909[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (36))){
var inst_38830 = (state_38844[(2)]);
var state_38844__$1 = state_38844;
var statearr_38862_38910 = state_38844__$1;
(statearr_38862_38910[(2)] = inst_38830);

(statearr_38862_38910[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (29))){
var inst_38810 = (state_38844[(2)]);
var inst_38811 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38812 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38811);
var state_38844__$1 = (function (){var statearr_38863 = state_38844;
(statearr_38863[(9)] = inst_38810);

return statearr_38863;
})();
var statearr_38864_38911 = state_38844__$1;
(statearr_38864_38911[(2)] = inst_38812);

(statearr_38864_38911[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (6))){
var inst_38759 = (state_38844[(10)]);
var state_38844__$1 = state_38844;
var statearr_38865_38912 = state_38844__$1;
(statearr_38865_38912[(2)] = inst_38759);

(statearr_38865_38912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (28))){
var inst_38806 = (state_38844[(2)]);
var inst_38807 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38808 = figwheel.client.heads_up.display_warning.call(null,inst_38807);
var state_38844__$1 = (function (){var statearr_38866 = state_38844;
(statearr_38866[(11)] = inst_38806);

return statearr_38866;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38844__$1,(29),inst_38808);
} else {
if((state_val_38845 === (25))){
var inst_38804 = figwheel.client.heads_up.clear.call(null);
var state_38844__$1 = state_38844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38844__$1,(28),inst_38804);
} else {
if((state_val_38845 === (34))){
var inst_38825 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38844__$1 = state_38844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38844__$1,(37),inst_38825);
} else {
if((state_val_38845 === (17))){
var inst_38784 = (state_38844[(2)]);
var inst_38785 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38786 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38785);
var state_38844__$1 = (function (){var statearr_38867 = state_38844;
(statearr_38867[(12)] = inst_38784);

return statearr_38867;
})();
var statearr_38868_38913 = state_38844__$1;
(statearr_38868_38913[(2)] = inst_38786);

(statearr_38868_38913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (3))){
var inst_38776 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38844__$1 = state_38844;
if(cljs.core.truth_(inst_38776)){
var statearr_38869_38914 = state_38844__$1;
(statearr_38869_38914[(1)] = (13));

} else {
var statearr_38870_38915 = state_38844__$1;
(statearr_38870_38915[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (12))){
var inst_38772 = (state_38844[(2)]);
var state_38844__$1 = state_38844;
var statearr_38871_38916 = state_38844__$1;
(statearr_38871_38916[(2)] = inst_38772);

(statearr_38871_38916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (2))){
var inst_38759 = (state_38844[(10)]);
var inst_38759__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38844__$1 = (function (){var statearr_38872 = state_38844;
(statearr_38872[(10)] = inst_38759__$1);

return statearr_38872;
})();
if(cljs.core.truth_(inst_38759__$1)){
var statearr_38873_38917 = state_38844__$1;
(statearr_38873_38917[(1)] = (5));

} else {
var statearr_38874_38918 = state_38844__$1;
(statearr_38874_38918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (23))){
var inst_38802 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38844__$1 = state_38844;
if(cljs.core.truth_(inst_38802)){
var statearr_38875_38919 = state_38844__$1;
(statearr_38875_38919[(1)] = (25));

} else {
var statearr_38876_38920 = state_38844__$1;
(statearr_38876_38920[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (35))){
var state_38844__$1 = state_38844;
var statearr_38877_38921 = state_38844__$1;
(statearr_38877_38921[(2)] = null);

(statearr_38877_38921[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (19))){
var inst_38797 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38844__$1 = state_38844;
if(cljs.core.truth_(inst_38797)){
var statearr_38878_38922 = state_38844__$1;
(statearr_38878_38922[(1)] = (22));

} else {
var statearr_38879_38923 = state_38844__$1;
(statearr_38879_38923[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (11))){
var inst_38768 = (state_38844[(2)]);
var state_38844__$1 = state_38844;
var statearr_38880_38924 = state_38844__$1;
(statearr_38880_38924[(2)] = inst_38768);

(statearr_38880_38924[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (9))){
var inst_38770 = figwheel.client.heads_up.clear.call(null);
var state_38844__$1 = state_38844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38844__$1,(12),inst_38770);
} else {
if((state_val_38845 === (5))){
var inst_38761 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38844__$1 = state_38844;
var statearr_38881_38925 = state_38844__$1;
(statearr_38881_38925[(2)] = inst_38761);

(statearr_38881_38925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (14))){
var inst_38788 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38844__$1 = state_38844;
if(cljs.core.truth_(inst_38788)){
var statearr_38882_38926 = state_38844__$1;
(statearr_38882_38926[(1)] = (18));

} else {
var statearr_38883_38927 = state_38844__$1;
(statearr_38883_38927[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (26))){
var inst_38814 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38844__$1 = state_38844;
if(cljs.core.truth_(inst_38814)){
var statearr_38884_38928 = state_38844__$1;
(statearr_38884_38928[(1)] = (30));

} else {
var statearr_38885_38929 = state_38844__$1;
(statearr_38885_38929[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (16))){
var inst_38780 = (state_38844[(2)]);
var inst_38781 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38782 = figwheel.client.heads_up.display_exception.call(null,inst_38781);
var state_38844__$1 = (function (){var statearr_38886 = state_38844;
(statearr_38886[(13)] = inst_38780);

return statearr_38886;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38844__$1,(17),inst_38782);
} else {
if((state_val_38845 === (30))){
var inst_38816 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38817 = figwheel.client.heads_up.display_warning.call(null,inst_38816);
var state_38844__$1 = state_38844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38844__$1,(33),inst_38817);
} else {
if((state_val_38845 === (10))){
var inst_38774 = (state_38844[(2)]);
var state_38844__$1 = state_38844;
var statearr_38887_38930 = state_38844__$1;
(statearr_38887_38930[(2)] = inst_38774);

(statearr_38887_38930[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (18))){
var inst_38790 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38791 = figwheel.client.heads_up.display_exception.call(null,inst_38790);
var state_38844__$1 = state_38844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38844__$1,(21),inst_38791);
} else {
if((state_val_38845 === (37))){
var inst_38827 = (state_38844[(2)]);
var state_38844__$1 = state_38844;
var statearr_38888_38931 = state_38844__$1;
(statearr_38888_38931[(2)] = inst_38827);

(statearr_38888_38931[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38845 === (8))){
var inst_38766 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38844__$1 = state_38844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38844__$1,(11),inst_38766);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30994__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29418__auto__,c__30994__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29419__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29419__auto____0 = (function (){
var statearr_38892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38892[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29419__auto__);

(statearr_38892[(1)] = (1));

return statearr_38892;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29419__auto____1 = (function (state_38844){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_38844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e38893){if((e38893 instanceof Object)){
var ex__29422__auto__ = e38893;
var statearr_38894_38932 = state_38844;
(statearr_38894_38932[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38933 = state_38844;
state_38844 = G__38933;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29419__auto__ = function(state_38844){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29419__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29419__auto____1.call(this,state_38844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29419__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29419__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto__,msg_hist,msg_names,msg))
})();
var state__30996__auto__ = (function (){var statearr_38895 = f__30995__auto__.call(null);
(statearr_38895[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto__);

return statearr_38895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto__,msg_hist,msg_names,msg))
);

return c__30994__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30994__auto___38996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto___38996,ch){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto___38996,ch){
return (function (state_38979){
var state_val_38980 = (state_38979[(1)]);
if((state_val_38980 === (1))){
var state_38979__$1 = state_38979;
var statearr_38981_38997 = state_38979__$1;
(statearr_38981_38997[(2)] = null);

(statearr_38981_38997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38980 === (2))){
var state_38979__$1 = state_38979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38979__$1,(4),ch);
} else {
if((state_val_38980 === (3))){
var inst_38977 = (state_38979[(2)]);
var state_38979__$1 = state_38979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38979__$1,inst_38977);
} else {
if((state_val_38980 === (4))){
var inst_38967 = (state_38979[(7)]);
var inst_38967__$1 = (state_38979[(2)]);
var state_38979__$1 = (function (){var statearr_38982 = state_38979;
(statearr_38982[(7)] = inst_38967__$1);

return statearr_38982;
})();
if(cljs.core.truth_(inst_38967__$1)){
var statearr_38983_38998 = state_38979__$1;
(statearr_38983_38998[(1)] = (5));

} else {
var statearr_38984_38999 = state_38979__$1;
(statearr_38984_38999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38980 === (5))){
var inst_38967 = (state_38979[(7)]);
var inst_38969 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38967);
var state_38979__$1 = state_38979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38979__$1,(8),inst_38969);
} else {
if((state_val_38980 === (6))){
var state_38979__$1 = state_38979;
var statearr_38985_39000 = state_38979__$1;
(statearr_38985_39000[(2)] = null);

(statearr_38985_39000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38980 === (7))){
var inst_38975 = (state_38979[(2)]);
var state_38979__$1 = state_38979;
var statearr_38986_39001 = state_38979__$1;
(statearr_38986_39001[(2)] = inst_38975);

(statearr_38986_39001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38980 === (8))){
var inst_38971 = (state_38979[(2)]);
var state_38979__$1 = (function (){var statearr_38987 = state_38979;
(statearr_38987[(8)] = inst_38971);

return statearr_38987;
})();
var statearr_38988_39002 = state_38979__$1;
(statearr_38988_39002[(2)] = null);

(statearr_38988_39002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__30994__auto___38996,ch))
;
return ((function (switch__29418__auto__,c__30994__auto___38996,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29419__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29419__auto____0 = (function (){
var statearr_38992 = [null,null,null,null,null,null,null,null,null];
(statearr_38992[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29419__auto__);

(statearr_38992[(1)] = (1));

return statearr_38992;
});
var figwheel$client$heads_up_plugin_$_state_machine__29419__auto____1 = (function (state_38979){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_38979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e38993){if((e38993 instanceof Object)){
var ex__29422__auto__ = e38993;
var statearr_38994_39003 = state_38979;
(statearr_38994_39003[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39004 = state_38979;
state_38979 = G__39004;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29419__auto__ = function(state_38979){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29419__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29419__auto____1.call(this,state_38979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29419__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29419__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto___38996,ch))
})();
var state__30996__auto__ = (function (){var statearr_38995 = f__30995__auto__.call(null);
(statearr_38995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto___38996);

return statearr_38995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto___38996,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto__){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto__){
return (function (state_39025){
var state_val_39026 = (state_39025[(1)]);
if((state_val_39026 === (1))){
var inst_39020 = cljs.core.async.timeout.call(null,(3000));
var state_39025__$1 = state_39025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39025__$1,(2),inst_39020);
} else {
if((state_val_39026 === (2))){
var inst_39022 = (state_39025[(2)]);
var inst_39023 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39025__$1 = (function (){var statearr_39027 = state_39025;
(statearr_39027[(7)] = inst_39022);

return statearr_39027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39025__$1,inst_39023);
} else {
return null;
}
}
});})(c__30994__auto__))
;
return ((function (switch__29418__auto__,c__30994__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29419__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29419__auto____0 = (function (){
var statearr_39031 = [null,null,null,null,null,null,null,null];
(statearr_39031[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29419__auto__);

(statearr_39031[(1)] = (1));

return statearr_39031;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29419__auto____1 = (function (state_39025){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_39025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e39032){if((e39032 instanceof Object)){
var ex__29422__auto__ = e39032;
var statearr_39033_39035 = state_39025;
(statearr_39033_39035[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39036 = state_39025;
state_39025 = G__39036;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29419__auto__ = function(state_39025){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29419__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29419__auto____1.call(this,state_39025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29419__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29419__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto__))
})();
var state__30996__auto__ = (function (){var statearr_39034 = f__30995__auto__.call(null);
(statearr_39034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto__);

return statearr_39034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto__))
);

return c__30994__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto__,figwheel_version,temp__4657__auto__){
return (function (state_39059){
var state_val_39060 = (state_39059[(1)]);
if((state_val_39060 === (1))){
var inst_39053 = cljs.core.async.timeout.call(null,(2000));
var state_39059__$1 = state_39059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39059__$1,(2),inst_39053);
} else {
if((state_val_39060 === (2))){
var inst_39055 = (state_39059[(2)]);
var inst_39056 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_39057 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39056);
var state_39059__$1 = (function (){var statearr_39061 = state_39059;
(statearr_39061[(7)] = inst_39055);

return statearr_39061;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39059__$1,inst_39057);
} else {
return null;
}
}
});})(c__30994__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29418__auto__,c__30994__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29419__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29419__auto____0 = (function (){
var statearr_39065 = [null,null,null,null,null,null,null,null];
(statearr_39065[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29419__auto__);

(statearr_39065[(1)] = (1));

return statearr_39065;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29419__auto____1 = (function (state_39059){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_39059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e39066){if((e39066 instanceof Object)){
var ex__29422__auto__ = e39066;
var statearr_39067_39069 = state_39059;
(statearr_39067_39069[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39070 = state_39059;
state_39059 = G__39070;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29419__auto__ = function(state_39059){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29419__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29419__auto____1.call(this,state_39059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29419__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29419__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30996__auto__ = (function (){var statearr_39068 = f__30995__auto__.call(null);
(statearr_39068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto__);

return statearr_39068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto__,figwheel_version,temp__4657__auto__))
);

return c__30994__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39071){
var map__39075 = p__39071;
var map__39075__$1 = ((((!((map__39075 == null)))?((((map__39075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39075):map__39075);
var file = cljs.core.get.call(null,map__39075__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39075__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39075__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39077 = "";
var G__39077__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__39077),cljs.core.str("file "),cljs.core.str(file)].join(''):G__39077);
var G__39077__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__39077__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__39077__$1);
if(cljs.core.truth_((function (){var and__27388__auto__ = line;
if(cljs.core.truth_(and__27388__auto__)){
return column;
} else {
return and__27388__auto__;
}
})())){
return [cljs.core.str(G__39077__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__39077__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39078){
var map__39085 = p__39078;
var map__39085__$1 = ((((!((map__39085 == null)))?((((map__39085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39085):map__39085);
var ed = map__39085__$1;
var formatted_exception = cljs.core.get.call(null,map__39085__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39085__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39085__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39087_39091 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39088_39092 = null;
var count__39089_39093 = (0);
var i__39090_39094 = (0);
while(true){
if((i__39090_39094 < count__39089_39093)){
var msg_39095 = cljs.core._nth.call(null,chunk__39088_39092,i__39090_39094);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39095);

var G__39096 = seq__39087_39091;
var G__39097 = chunk__39088_39092;
var G__39098 = count__39089_39093;
var G__39099 = (i__39090_39094 + (1));
seq__39087_39091 = G__39096;
chunk__39088_39092 = G__39097;
count__39089_39093 = G__39098;
i__39090_39094 = G__39099;
continue;
} else {
var temp__4657__auto___39100 = cljs.core.seq.call(null,seq__39087_39091);
if(temp__4657__auto___39100){
var seq__39087_39101__$1 = temp__4657__auto___39100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39087_39101__$1)){
var c__28211__auto___39102 = cljs.core.chunk_first.call(null,seq__39087_39101__$1);
var G__39103 = cljs.core.chunk_rest.call(null,seq__39087_39101__$1);
var G__39104 = c__28211__auto___39102;
var G__39105 = cljs.core.count.call(null,c__28211__auto___39102);
var G__39106 = (0);
seq__39087_39091 = G__39103;
chunk__39088_39092 = G__39104;
count__39089_39093 = G__39105;
i__39090_39094 = G__39106;
continue;
} else {
var msg_39107 = cljs.core.first.call(null,seq__39087_39101__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39107);

var G__39108 = cljs.core.next.call(null,seq__39087_39101__$1);
var G__39109 = null;
var G__39110 = (0);
var G__39111 = (0);
seq__39087_39091 = G__39108;
chunk__39088_39092 = G__39109;
count__39089_39093 = G__39110;
i__39090_39094 = G__39111;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39112){
var map__39115 = p__39112;
var map__39115__$1 = ((((!((map__39115 == null)))?((((map__39115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39115):map__39115);
var w = map__39115__$1;
var message = cljs.core.get.call(null,map__39115__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__27388__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27388__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27388__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39127 = cljs.core.seq.call(null,plugins);
var chunk__39128 = null;
var count__39129 = (0);
var i__39130 = (0);
while(true){
if((i__39130 < count__39129)){
var vec__39131 = cljs.core._nth.call(null,chunk__39128,i__39130);
var k = cljs.core.nth.call(null,vec__39131,(0),null);
var plugin = cljs.core.nth.call(null,vec__39131,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39137 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39127,chunk__39128,count__39129,i__39130,pl_39137,vec__39131,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39137.call(null,msg_hist);
});})(seq__39127,chunk__39128,count__39129,i__39130,pl_39137,vec__39131,k,plugin))
);
} else {
}

var G__39138 = seq__39127;
var G__39139 = chunk__39128;
var G__39140 = count__39129;
var G__39141 = (i__39130 + (1));
seq__39127 = G__39138;
chunk__39128 = G__39139;
count__39129 = G__39140;
i__39130 = G__39141;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39127);
if(temp__4657__auto__){
var seq__39127__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39127__$1)){
var c__28211__auto__ = cljs.core.chunk_first.call(null,seq__39127__$1);
var G__39142 = cljs.core.chunk_rest.call(null,seq__39127__$1);
var G__39143 = c__28211__auto__;
var G__39144 = cljs.core.count.call(null,c__28211__auto__);
var G__39145 = (0);
seq__39127 = G__39142;
chunk__39128 = G__39143;
count__39129 = G__39144;
i__39130 = G__39145;
continue;
} else {
var vec__39134 = cljs.core.first.call(null,seq__39127__$1);
var k = cljs.core.nth.call(null,vec__39134,(0),null);
var plugin = cljs.core.nth.call(null,vec__39134,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39146 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39127,chunk__39128,count__39129,i__39130,pl_39146,vec__39134,k,plugin,seq__39127__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39146.call(null,msg_hist);
});})(seq__39127,chunk__39128,count__39129,i__39130,pl_39146,vec__39134,k,plugin,seq__39127__$1,temp__4657__auto__))
);
} else {
}

var G__39147 = cljs.core.next.call(null,seq__39127__$1);
var G__39148 = null;
var G__39149 = (0);
var G__39150 = (0);
seq__39127 = G__39147;
chunk__39128 = G__39148;
count__39129 = G__39149;
i__39130 = G__39150;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args39151 = [];
var len__28475__auto___39158 = arguments.length;
var i__28476__auto___39159 = (0);
while(true){
if((i__28476__auto___39159 < len__28475__auto___39158)){
args39151.push((arguments[i__28476__auto___39159]));

var G__39160 = (i__28476__auto___39159 + (1));
i__28476__auto___39159 = G__39160;
continue;
} else {
}
break;
}

var G__39153 = args39151.length;
switch (G__39153) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39151.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39154_39162 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39155_39163 = null;
var count__39156_39164 = (0);
var i__39157_39165 = (0);
while(true){
if((i__39157_39165 < count__39156_39164)){
var msg_39166 = cljs.core._nth.call(null,chunk__39155_39163,i__39157_39165);
figwheel.client.socket.handle_incoming_message.call(null,msg_39166);

var G__39167 = seq__39154_39162;
var G__39168 = chunk__39155_39163;
var G__39169 = count__39156_39164;
var G__39170 = (i__39157_39165 + (1));
seq__39154_39162 = G__39167;
chunk__39155_39163 = G__39168;
count__39156_39164 = G__39169;
i__39157_39165 = G__39170;
continue;
} else {
var temp__4657__auto___39171 = cljs.core.seq.call(null,seq__39154_39162);
if(temp__4657__auto___39171){
var seq__39154_39172__$1 = temp__4657__auto___39171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39154_39172__$1)){
var c__28211__auto___39173 = cljs.core.chunk_first.call(null,seq__39154_39172__$1);
var G__39174 = cljs.core.chunk_rest.call(null,seq__39154_39172__$1);
var G__39175 = c__28211__auto___39173;
var G__39176 = cljs.core.count.call(null,c__28211__auto___39173);
var G__39177 = (0);
seq__39154_39162 = G__39174;
chunk__39155_39163 = G__39175;
count__39156_39164 = G__39176;
i__39157_39165 = G__39177;
continue;
} else {
var msg_39178 = cljs.core.first.call(null,seq__39154_39172__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39178);

var G__39179 = cljs.core.next.call(null,seq__39154_39172__$1);
var G__39180 = null;
var G__39181 = (0);
var G__39182 = (0);
seq__39154_39162 = G__39179;
chunk__39155_39163 = G__39180;
count__39156_39164 = G__39181;
i__39157_39165 = G__39182;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__28482__auto__ = [];
var len__28475__auto___39187 = arguments.length;
var i__28476__auto___39188 = (0);
while(true){
if((i__28476__auto___39188 < len__28475__auto___39187)){
args__28482__auto__.push((arguments[i__28476__auto___39188]));

var G__39189 = (i__28476__auto___39188 + (1));
i__28476__auto___39188 = G__39189;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((0) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__28483__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39184){
var map__39185 = p__39184;
var map__39185__$1 = ((((!((map__39185 == null)))?((((map__39185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39185):map__39185);
var opts = map__39185__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39183){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39183));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39191){if((e39191 instanceof Error)){
var e = e39191;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39191;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39195){
var map__39196 = p__39195;
var map__39196__$1 = ((((!((map__39196 == null)))?((((map__39196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39196):map__39196);
var msg_name = cljs.core.get.call(null,map__39196__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1481770144220