// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.15";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e29602){if((e29602 instanceof Error)){
var e = e29602;
return "Error: Unable to stringify";
} else {
throw e29602;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29605 = arguments.length;
switch (G__29605) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29603_SHARP_){
if(typeof p1__29603_SHARP_ === 'string'){
return p1__29603_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29603_SHARP_);
}
}),args)], null)], null));

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
var args__4502__auto__ = [];
var len__4499__auto___29608 = arguments.length;
var i__4500__auto___29609 = (0);
while(true){
if((i__4500__auto___29609 < len__4499__auto___29608)){
args__4502__auto__.push((arguments[i__4500__auto___29609]));

var G__29610 = (i__4500__auto___29609 + (1));
i__4500__auto___29609 = G__29610;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29607){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29607));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29612 = arguments.length;
var i__4500__auto___29613 = (0);
while(true){
if((i__4500__auto___29613 < len__4499__auto___29612)){
args__4502__auto__.push((arguments[i__4500__auto___29613]));

var G__29614 = (i__4500__auto___29613 + (1));
i__4500__auto___29613 = G__29614;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29611){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29611));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29615){
var map__29616 = p__29615;
var map__29616__$1 = ((((!((map__29616 == null)))?(((((map__29616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29616):map__29616);
var message = cljs.core.get.call(null,map__29616__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29616__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
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
var c__25379__auto___29695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto___29695,ch){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto___29695,ch){
return (function (state_29667){
var state_val_29668 = (state_29667[(1)]);
if((state_val_29668 === (7))){
var inst_29663 = (state_29667[(2)]);
var state_29667__$1 = state_29667;
var statearr_29669_29696 = state_29667__$1;
(statearr_29669_29696[(2)] = inst_29663);

(statearr_29669_29696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29668 === (1))){
var state_29667__$1 = state_29667;
var statearr_29670_29697 = state_29667__$1;
(statearr_29670_29697[(2)] = null);

(statearr_29670_29697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29668 === (4))){
var inst_29620 = (state_29667[(7)]);
var inst_29620__$1 = (state_29667[(2)]);
var state_29667__$1 = (function (){var statearr_29671 = state_29667;
(statearr_29671[(7)] = inst_29620__$1);

return statearr_29671;
})();
if(cljs.core.truth_(inst_29620__$1)){
var statearr_29672_29698 = state_29667__$1;
(statearr_29672_29698[(1)] = (5));

} else {
var statearr_29673_29699 = state_29667__$1;
(statearr_29673_29699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29668 === (15))){
var inst_29627 = (state_29667[(8)]);
var inst_29642 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29627);
var inst_29643 = cljs.core.first.call(null,inst_29642);
var inst_29644 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29643);
var inst_29645 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29644)].join('');
var inst_29646 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29645);
var state_29667__$1 = state_29667;
var statearr_29674_29700 = state_29667__$1;
(statearr_29674_29700[(2)] = inst_29646);

(statearr_29674_29700[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29668 === (13))){
var inst_29651 = (state_29667[(2)]);
var state_29667__$1 = state_29667;
var statearr_29675_29701 = state_29667__$1;
(statearr_29675_29701[(2)] = inst_29651);

(statearr_29675_29701[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29668 === (6))){
var state_29667__$1 = state_29667;
var statearr_29676_29702 = state_29667__$1;
(statearr_29676_29702[(2)] = null);

(statearr_29676_29702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29668 === (17))){
var inst_29649 = (state_29667[(2)]);
var state_29667__$1 = state_29667;
var statearr_29677_29703 = state_29667__$1;
(statearr_29677_29703[(2)] = inst_29649);

(statearr_29677_29703[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29668 === (3))){
var inst_29665 = (state_29667[(2)]);
var state_29667__$1 = state_29667;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29667__$1,inst_29665);
} else {
if((state_val_29668 === (12))){
var inst_29626 = (state_29667[(9)]);
var inst_29640 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29626,opts);
var state_29667__$1 = state_29667;
if(cljs.core.truth_(inst_29640)){
var statearr_29678_29704 = state_29667__$1;
(statearr_29678_29704[(1)] = (15));

} else {
var statearr_29679_29705 = state_29667__$1;
(statearr_29679_29705[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29668 === (2))){
var state_29667__$1 = state_29667;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29667__$1,(4),ch);
} else {
if((state_val_29668 === (11))){
var inst_29627 = (state_29667[(8)]);
var inst_29632 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29633 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29627);
var inst_29634 = cljs.core.async.timeout.call(null,(1000));
var inst_29635 = [inst_29633,inst_29634];
var inst_29636 = (new cljs.core.PersistentVector(null,2,(5),inst_29632,inst_29635,null));
var state_29667__$1 = state_29667;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29667__$1,(14),inst_29636);
} else {
if((state_val_29668 === (9))){
var inst_29627 = (state_29667[(8)]);
var inst_29653 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29654 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29627);
var inst_29655 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29654);
var inst_29656 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29655)].join('');
var inst_29657 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29656);
var state_29667__$1 = (function (){var statearr_29680 = state_29667;
(statearr_29680[(10)] = inst_29653);

return statearr_29680;
})();
var statearr_29681_29706 = state_29667__$1;
(statearr_29681_29706[(2)] = inst_29657);

(statearr_29681_29706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29668 === (5))){
var inst_29620 = (state_29667[(7)]);
var inst_29622 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29623 = (new cljs.core.PersistentArrayMap(null,2,inst_29622,null));
var inst_29624 = (new cljs.core.PersistentHashSet(null,inst_29623,null));
var inst_29625 = figwheel.client.focus_msgs.call(null,inst_29624,inst_29620);
var inst_29626 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29625);
var inst_29627 = cljs.core.first.call(null,inst_29625);
var inst_29628 = figwheel.client.autoload_QMARK_.call(null);
var state_29667__$1 = (function (){var statearr_29682 = state_29667;
(statearr_29682[(8)] = inst_29627);

(statearr_29682[(9)] = inst_29626);

return statearr_29682;
})();
if(cljs.core.truth_(inst_29628)){
var statearr_29683_29707 = state_29667__$1;
(statearr_29683_29707[(1)] = (8));

} else {
var statearr_29684_29708 = state_29667__$1;
(statearr_29684_29708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29668 === (14))){
var inst_29638 = (state_29667[(2)]);
var state_29667__$1 = state_29667;
var statearr_29685_29709 = state_29667__$1;
(statearr_29685_29709[(2)] = inst_29638);

(statearr_29685_29709[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29668 === (16))){
var state_29667__$1 = state_29667;
var statearr_29686_29710 = state_29667__$1;
(statearr_29686_29710[(2)] = null);

(statearr_29686_29710[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29668 === (10))){
var inst_29659 = (state_29667[(2)]);
var state_29667__$1 = (function (){var statearr_29687 = state_29667;
(statearr_29687[(11)] = inst_29659);

return statearr_29687;
})();
var statearr_29688_29711 = state_29667__$1;
(statearr_29688_29711[(2)] = null);

(statearr_29688_29711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29668 === (8))){
var inst_29626 = (state_29667[(9)]);
var inst_29630 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29626,opts);
var state_29667__$1 = state_29667;
if(cljs.core.truth_(inst_29630)){
var statearr_29689_29712 = state_29667__$1;
(statearr_29689_29712[(1)] = (11));

} else {
var statearr_29690_29713 = state_29667__$1;
(statearr_29690_29713[(1)] = (12));

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
});})(c__25379__auto___29695,ch))
;
return ((function (switch__25289__auto__,c__25379__auto___29695,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25290__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25290__auto____0 = (function (){
var statearr_29691 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29691[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25290__auto__);

(statearr_29691[(1)] = (1));

return statearr_29691;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25290__auto____1 = (function (state_29667){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_29667);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e29692){if((e29692 instanceof Object)){
var ex__25293__auto__ = e29692;
var statearr_29693_29714 = state_29667;
(statearr_29693_29714[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29715 = state_29667;
state_29667 = G__29715;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25290__auto__ = function(state_29667){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25290__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25290__auto____1.call(this,state_29667);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25290__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25290__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto___29695,ch))
})();
var state__25381__auto__ = (function (){var statearr_29694 = f__25380__auto__.call(null);
(statearr_29694[(6)] = c__25379__auto___29695);

return statearr_29694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto___29695,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29716_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29716_SHARP_));
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
var base_path_29720 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29720){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29718 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29719 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29718,_STAR_print_fn_STAR_29719,sb,base_path_29720){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_29718,_STAR_print_fn_STAR_29719,sb,base_path_29720))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29719;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29718;
}}catch (e29717){if((e29717 instanceof Error)){
var e = e29717;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29720], null));
} else {
var e = e29717;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29720))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29721){
var map__29722 = p__29721;
var map__29722__$1 = ((((!((map__29722 == null)))?(((((map__29722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29722):map__29722);
var opts = map__29722__$1;
var build_id = cljs.core.get.call(null,map__29722__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29722,map__29722__$1,opts,build_id){
return (function (p__29724){
var vec__29725 = p__29724;
var seq__29726 = cljs.core.seq.call(null,vec__29725);
var first__29727 = cljs.core.first.call(null,seq__29726);
var seq__29726__$1 = cljs.core.next.call(null,seq__29726);
var map__29728 = first__29727;
var map__29728__$1 = ((((!((map__29728 == null)))?(((((map__29728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29728):map__29728);
var msg = map__29728__$1;
var msg_name = cljs.core.get.call(null,map__29728__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29726__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29725,seq__29726,first__29727,seq__29726__$1,map__29728,map__29728__$1,msg,msg_name,_,map__29722,map__29722__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29725,seq__29726,first__29727,seq__29726__$1,map__29728,map__29728__$1,msg,msg_name,_,map__29722,map__29722__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29722,map__29722__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29730){
var vec__29731 = p__29730;
var seq__29732 = cljs.core.seq.call(null,vec__29731);
var first__29733 = cljs.core.first.call(null,seq__29732);
var seq__29732__$1 = cljs.core.next.call(null,seq__29732);
var map__29734 = first__29733;
var map__29734__$1 = ((((!((map__29734 == null)))?(((((map__29734.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29734.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29734):map__29734);
var msg = map__29734__$1;
var msg_name = cljs.core.get.call(null,map__29734__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29732__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29736){
var map__29737 = p__29736;
var map__29737__$1 = ((((!((map__29737 == null)))?(((((map__29737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29737):map__29737);
var on_compile_warning = cljs.core.get.call(null,map__29737__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29737__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29737,map__29737__$1,on_compile_warning,on_compile_fail){
return (function (p__29739){
var vec__29740 = p__29739;
var seq__29741 = cljs.core.seq.call(null,vec__29740);
var first__29742 = cljs.core.first.call(null,seq__29741);
var seq__29741__$1 = cljs.core.next.call(null,seq__29741);
var map__29743 = first__29742;
var map__29743__$1 = ((((!((map__29743 == null)))?(((((map__29743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29743.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29743):map__29743);
var msg = map__29743__$1;
var msg_name = cljs.core.get.call(null,map__29743__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29741__$1;
var pred__29745 = cljs.core._EQ_;
var expr__29746 = msg_name;
if(cljs.core.truth_(pred__29745.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29746))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29745.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29746))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29737,map__29737__$1,on_compile_warning,on_compile_fail))
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
var c__25379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto__,msg_hist,msg_names,msg){
return (function (state_29835){
var state_val_29836 = (state_29835[(1)]);
if((state_val_29836 === (7))){
var inst_29755 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
if(cljs.core.truth_(inst_29755)){
var statearr_29837_29884 = state_29835__$1;
(statearr_29837_29884[(1)] = (8));

} else {
var statearr_29838_29885 = state_29835__$1;
(statearr_29838_29885[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (20))){
var inst_29829 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
var statearr_29839_29886 = state_29835__$1;
(statearr_29839_29886[(2)] = inst_29829);

(statearr_29839_29886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (27))){
var inst_29825 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
var statearr_29840_29887 = state_29835__$1;
(statearr_29840_29887[(2)] = inst_29825);

(statearr_29840_29887[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (1))){
var inst_29748 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29835__$1 = state_29835;
if(cljs.core.truth_(inst_29748)){
var statearr_29841_29888 = state_29835__$1;
(statearr_29841_29888[(1)] = (2));

} else {
var statearr_29842_29889 = state_29835__$1;
(statearr_29842_29889[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (24))){
var inst_29827 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
var statearr_29843_29890 = state_29835__$1;
(statearr_29843_29890[(2)] = inst_29827);

(statearr_29843_29890[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (4))){
var inst_29833 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29835__$1,inst_29833);
} else {
if((state_val_29836 === (15))){
var inst_29831 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
var statearr_29844_29891 = state_29835__$1;
(statearr_29844_29891[(2)] = inst_29831);

(statearr_29844_29891[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (21))){
var inst_29784 = (state_29835[(2)]);
var inst_29785 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29786 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29785);
var state_29835__$1 = (function (){var statearr_29845 = state_29835;
(statearr_29845[(7)] = inst_29784);

return statearr_29845;
})();
var statearr_29846_29892 = state_29835__$1;
(statearr_29846_29892[(2)] = inst_29786);

(statearr_29846_29892[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (31))){
var inst_29814 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29835__$1 = state_29835;
if(cljs.core.truth_(inst_29814)){
var statearr_29847_29893 = state_29835__$1;
(statearr_29847_29893[(1)] = (34));

} else {
var statearr_29848_29894 = state_29835__$1;
(statearr_29848_29894[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (32))){
var inst_29823 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
var statearr_29849_29895 = state_29835__$1;
(statearr_29849_29895[(2)] = inst_29823);

(statearr_29849_29895[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (33))){
var inst_29810 = (state_29835[(2)]);
var inst_29811 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29812 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29811);
var state_29835__$1 = (function (){var statearr_29850 = state_29835;
(statearr_29850[(8)] = inst_29810);

return statearr_29850;
})();
var statearr_29851_29896 = state_29835__$1;
(statearr_29851_29896[(2)] = inst_29812);

(statearr_29851_29896[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (13))){
var inst_29769 = figwheel.client.heads_up.clear.call(null);
var state_29835__$1 = state_29835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29835__$1,(16),inst_29769);
} else {
if((state_val_29836 === (22))){
var inst_29790 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29791 = figwheel.client.heads_up.append_warning_message.call(null,inst_29790);
var state_29835__$1 = state_29835;
var statearr_29852_29897 = state_29835__$1;
(statearr_29852_29897[(2)] = inst_29791);

(statearr_29852_29897[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (36))){
var inst_29821 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
var statearr_29853_29898 = state_29835__$1;
(statearr_29853_29898[(2)] = inst_29821);

(statearr_29853_29898[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (29))){
var inst_29801 = (state_29835[(2)]);
var inst_29802 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29803 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29802);
var state_29835__$1 = (function (){var statearr_29854 = state_29835;
(statearr_29854[(9)] = inst_29801);

return statearr_29854;
})();
var statearr_29855_29899 = state_29835__$1;
(statearr_29855_29899[(2)] = inst_29803);

(statearr_29855_29899[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (6))){
var inst_29750 = (state_29835[(10)]);
var state_29835__$1 = state_29835;
var statearr_29856_29900 = state_29835__$1;
(statearr_29856_29900[(2)] = inst_29750);

(statearr_29856_29900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (28))){
var inst_29797 = (state_29835[(2)]);
var inst_29798 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29799 = figwheel.client.heads_up.display_warning.call(null,inst_29798);
var state_29835__$1 = (function (){var statearr_29857 = state_29835;
(statearr_29857[(11)] = inst_29797);

return statearr_29857;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29835__$1,(29),inst_29799);
} else {
if((state_val_29836 === (25))){
var inst_29795 = figwheel.client.heads_up.clear.call(null);
var state_29835__$1 = state_29835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29835__$1,(28),inst_29795);
} else {
if((state_val_29836 === (34))){
var inst_29816 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29835__$1 = state_29835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29835__$1,(37),inst_29816);
} else {
if((state_val_29836 === (17))){
var inst_29775 = (state_29835[(2)]);
var inst_29776 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29777 = figwheel.client.auto_jump_to_error.call(null,opts,inst_29776);
var state_29835__$1 = (function (){var statearr_29858 = state_29835;
(statearr_29858[(12)] = inst_29775);

return statearr_29858;
})();
var statearr_29859_29901 = state_29835__$1;
(statearr_29859_29901[(2)] = inst_29777);

(statearr_29859_29901[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (3))){
var inst_29767 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29835__$1 = state_29835;
if(cljs.core.truth_(inst_29767)){
var statearr_29860_29902 = state_29835__$1;
(statearr_29860_29902[(1)] = (13));

} else {
var statearr_29861_29903 = state_29835__$1;
(statearr_29861_29903[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (12))){
var inst_29763 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
var statearr_29862_29904 = state_29835__$1;
(statearr_29862_29904[(2)] = inst_29763);

(statearr_29862_29904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (2))){
var inst_29750 = (state_29835[(10)]);
var inst_29750__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29835__$1 = (function (){var statearr_29863 = state_29835;
(statearr_29863[(10)] = inst_29750__$1);

return statearr_29863;
})();
if(cljs.core.truth_(inst_29750__$1)){
var statearr_29864_29905 = state_29835__$1;
(statearr_29864_29905[(1)] = (5));

} else {
var statearr_29865_29906 = state_29835__$1;
(statearr_29865_29906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (23))){
var inst_29793 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29835__$1 = state_29835;
if(cljs.core.truth_(inst_29793)){
var statearr_29866_29907 = state_29835__$1;
(statearr_29866_29907[(1)] = (25));

} else {
var statearr_29867_29908 = state_29835__$1;
(statearr_29867_29908[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (35))){
var state_29835__$1 = state_29835;
var statearr_29868_29909 = state_29835__$1;
(statearr_29868_29909[(2)] = null);

(statearr_29868_29909[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (19))){
var inst_29788 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29835__$1 = state_29835;
if(cljs.core.truth_(inst_29788)){
var statearr_29869_29910 = state_29835__$1;
(statearr_29869_29910[(1)] = (22));

} else {
var statearr_29870_29911 = state_29835__$1;
(statearr_29870_29911[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (11))){
var inst_29759 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
var statearr_29871_29912 = state_29835__$1;
(statearr_29871_29912[(2)] = inst_29759);

(statearr_29871_29912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (9))){
var inst_29761 = figwheel.client.heads_up.clear.call(null);
var state_29835__$1 = state_29835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29835__$1,(12),inst_29761);
} else {
if((state_val_29836 === (5))){
var inst_29752 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29835__$1 = state_29835;
var statearr_29872_29913 = state_29835__$1;
(statearr_29872_29913[(2)] = inst_29752);

(statearr_29872_29913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (14))){
var inst_29779 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29835__$1 = state_29835;
if(cljs.core.truth_(inst_29779)){
var statearr_29873_29914 = state_29835__$1;
(statearr_29873_29914[(1)] = (18));

} else {
var statearr_29874_29915 = state_29835__$1;
(statearr_29874_29915[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (26))){
var inst_29805 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29835__$1 = state_29835;
if(cljs.core.truth_(inst_29805)){
var statearr_29875_29916 = state_29835__$1;
(statearr_29875_29916[(1)] = (30));

} else {
var statearr_29876_29917 = state_29835__$1;
(statearr_29876_29917[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (16))){
var inst_29771 = (state_29835[(2)]);
var inst_29772 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29773 = figwheel.client.heads_up.display_exception.call(null,inst_29772);
var state_29835__$1 = (function (){var statearr_29877 = state_29835;
(statearr_29877[(13)] = inst_29771);

return statearr_29877;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29835__$1,(17),inst_29773);
} else {
if((state_val_29836 === (30))){
var inst_29807 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29808 = figwheel.client.heads_up.display_warning.call(null,inst_29807);
var state_29835__$1 = state_29835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29835__$1,(33),inst_29808);
} else {
if((state_val_29836 === (10))){
var inst_29765 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
var statearr_29878_29918 = state_29835__$1;
(statearr_29878_29918[(2)] = inst_29765);

(statearr_29878_29918[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (18))){
var inst_29781 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29782 = figwheel.client.heads_up.display_exception.call(null,inst_29781);
var state_29835__$1 = state_29835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29835__$1,(21),inst_29782);
} else {
if((state_val_29836 === (37))){
var inst_29818 = (state_29835[(2)]);
var state_29835__$1 = state_29835;
var statearr_29879_29919 = state_29835__$1;
(statearr_29879_29919[(2)] = inst_29818);

(statearr_29879_29919[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29836 === (8))){
var inst_29757 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29835__$1 = state_29835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29835__$1,(11),inst_29757);
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
});})(c__25379__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25289__auto__,c__25379__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25290__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25290__auto____0 = (function (){
var statearr_29880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29880[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25290__auto__);

(statearr_29880[(1)] = (1));

return statearr_29880;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25290__auto____1 = (function (state_29835){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_29835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e29881){if((e29881 instanceof Object)){
var ex__25293__auto__ = e29881;
var statearr_29882_29920 = state_29835;
(statearr_29882_29920[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29921 = state_29835;
state_29835 = G__29921;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25290__auto__ = function(state_29835){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25290__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25290__auto____1.call(this,state_29835);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25290__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25290__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto__,msg_hist,msg_names,msg))
})();
var state__25381__auto__ = (function (){var statearr_29883 = f__25380__auto__.call(null);
(statearr_29883[(6)] = c__25379__auto__);

return statearr_29883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto__,msg_hist,msg_names,msg))
);

return c__25379__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25379__auto___29950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto___29950,ch){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto___29950,ch){
return (function (state_29936){
var state_val_29937 = (state_29936[(1)]);
if((state_val_29937 === (1))){
var state_29936__$1 = state_29936;
var statearr_29938_29951 = state_29936__$1;
(statearr_29938_29951[(2)] = null);

(statearr_29938_29951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (2))){
var state_29936__$1 = state_29936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29936__$1,(4),ch);
} else {
if((state_val_29937 === (3))){
var inst_29934 = (state_29936[(2)]);
var state_29936__$1 = state_29936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29936__$1,inst_29934);
} else {
if((state_val_29937 === (4))){
var inst_29924 = (state_29936[(7)]);
var inst_29924__$1 = (state_29936[(2)]);
var state_29936__$1 = (function (){var statearr_29939 = state_29936;
(statearr_29939[(7)] = inst_29924__$1);

return statearr_29939;
})();
if(cljs.core.truth_(inst_29924__$1)){
var statearr_29940_29952 = state_29936__$1;
(statearr_29940_29952[(1)] = (5));

} else {
var statearr_29941_29953 = state_29936__$1;
(statearr_29941_29953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (5))){
var inst_29924 = (state_29936[(7)]);
var inst_29926 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29924);
var state_29936__$1 = state_29936;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29936__$1,(8),inst_29926);
} else {
if((state_val_29937 === (6))){
var state_29936__$1 = state_29936;
var statearr_29942_29954 = state_29936__$1;
(statearr_29942_29954[(2)] = null);

(statearr_29942_29954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (7))){
var inst_29932 = (state_29936[(2)]);
var state_29936__$1 = state_29936;
var statearr_29943_29955 = state_29936__$1;
(statearr_29943_29955[(2)] = inst_29932);

(statearr_29943_29955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29937 === (8))){
var inst_29928 = (state_29936[(2)]);
var state_29936__$1 = (function (){var statearr_29944 = state_29936;
(statearr_29944[(8)] = inst_29928);

return statearr_29944;
})();
var statearr_29945_29956 = state_29936__$1;
(statearr_29945_29956[(2)] = null);

(statearr_29945_29956[(1)] = (2));


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
});})(c__25379__auto___29950,ch))
;
return ((function (switch__25289__auto__,c__25379__auto___29950,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25290__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25290__auto____0 = (function (){
var statearr_29946 = [null,null,null,null,null,null,null,null,null];
(statearr_29946[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25290__auto__);

(statearr_29946[(1)] = (1));

return statearr_29946;
});
var figwheel$client$heads_up_plugin_$_state_machine__25290__auto____1 = (function (state_29936){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_29936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e29947){if((e29947 instanceof Object)){
var ex__25293__auto__ = e29947;
var statearr_29948_29957 = state_29936;
(statearr_29948_29957[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29958 = state_29936;
state_29936 = G__29958;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25290__auto__ = function(state_29936){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25290__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25290__auto____1.call(this,state_29936);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25290__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25290__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto___29950,ch))
})();
var state__25381__auto__ = (function (){var statearr_29949 = f__25380__auto__.call(null);
(statearr_29949[(6)] = c__25379__auto___29950);

return statearr_29949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto___29950,ch))
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
var c__25379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto__){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto__){
return (function (state_29964){
var state_val_29965 = (state_29964[(1)]);
if((state_val_29965 === (1))){
var inst_29959 = cljs.core.async.timeout.call(null,(3000));
var state_29964__$1 = state_29964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29964__$1,(2),inst_29959);
} else {
if((state_val_29965 === (2))){
var inst_29961 = (state_29964[(2)]);
var inst_29962 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29964__$1 = (function (){var statearr_29966 = state_29964;
(statearr_29966[(7)] = inst_29961);

return statearr_29966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29964__$1,inst_29962);
} else {
return null;
}
}
});})(c__25379__auto__))
;
return ((function (switch__25289__auto__,c__25379__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25290__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25290__auto____0 = (function (){
var statearr_29967 = [null,null,null,null,null,null,null,null];
(statearr_29967[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25290__auto__);

(statearr_29967[(1)] = (1));

return statearr_29967;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25290__auto____1 = (function (state_29964){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_29964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e29968){if((e29968 instanceof Object)){
var ex__25293__auto__ = e29968;
var statearr_29969_29971 = state_29964;
(statearr_29969_29971[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29968;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29972 = state_29964;
state_29964 = G__29972;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25290__auto__ = function(state_29964){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25290__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25290__auto____1.call(this,state_29964);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25290__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25290__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto__))
})();
var state__25381__auto__ = (function (){var statearr_29970 = f__25380__auto__.call(null);
(statearr_29970[(6)] = c__25379__auto__);

return statearr_29970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto__))
);

return c__25379__auto__;
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
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto__,figwheel_version,temp__5457__auto__){
return (function (state_29979){
var state_val_29980 = (state_29979[(1)]);
if((state_val_29980 === (1))){
var inst_29973 = cljs.core.async.timeout.call(null,(2000));
var state_29979__$1 = state_29979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29979__$1,(2),inst_29973);
} else {
if((state_val_29980 === (2))){
var inst_29975 = (state_29979[(2)]);
var inst_29976 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_29977 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_29976);
var state_29979__$1 = (function (){var statearr_29981 = state_29979;
(statearr_29981[(7)] = inst_29975);

return statearr_29981;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29979__$1,inst_29977);
} else {
return null;
}
}
});})(c__25379__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__25289__auto__,c__25379__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25290__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25290__auto____0 = (function (){
var statearr_29982 = [null,null,null,null,null,null,null,null];
(statearr_29982[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25290__auto__);

(statearr_29982[(1)] = (1));

return statearr_29982;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25290__auto____1 = (function (state_29979){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_29979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e29983){if((e29983 instanceof Object)){
var ex__25293__auto__ = e29983;
var statearr_29984_29986 = state_29979;
(statearr_29984_29986[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29987 = state_29979;
state_29979 = G__29987;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25290__auto__ = function(state_29979){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25290__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25290__auto____1.call(this,state_29979);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25290__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25290__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto__,figwheel_version,temp__5457__auto__))
})();
var state__25381__auto__ = (function (){var statearr_29985 = f__25380__auto__.call(null);
(statearr_29985[(6)] = c__25379__auto__);

return statearr_29985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto__,figwheel_version,temp__5457__auto__))
);

return c__25379__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__29988){
var map__29989 = p__29988;
var map__29989__$1 = ((((!((map__29989 == null)))?(((((map__29989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29989):map__29989);
var file = cljs.core.get.call(null,map__29989__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__29989__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__29989__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__29991 = "";
var G__29991__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29991),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__29991);
var G__29991__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29991__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__29991__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29991__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__29991__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29992){
var map__29993 = p__29992;
var map__29993__$1 = ((((!((map__29993 == null)))?(((((map__29993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29993):map__29993);
var ed = map__29993__$1;
var formatted_exception = cljs.core.get.call(null,map__29993__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29993__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29993__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29995_29999 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29996_30000 = null;
var count__29997_30001 = (0);
var i__29998_30002 = (0);
while(true){
if((i__29998_30002 < count__29997_30001)){
var msg_30003 = cljs.core._nth.call(null,chunk__29996_30000,i__29998_30002);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30003);


var G__30004 = seq__29995_29999;
var G__30005 = chunk__29996_30000;
var G__30006 = count__29997_30001;
var G__30007 = (i__29998_30002 + (1));
seq__29995_29999 = G__30004;
chunk__29996_30000 = G__30005;
count__29997_30001 = G__30006;
i__29998_30002 = G__30007;
continue;
} else {
var temp__5457__auto___30008 = cljs.core.seq.call(null,seq__29995_29999);
if(temp__5457__auto___30008){
var seq__29995_30009__$1 = temp__5457__auto___30008;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29995_30009__$1)){
var c__4319__auto___30010 = cljs.core.chunk_first.call(null,seq__29995_30009__$1);
var G__30011 = cljs.core.chunk_rest.call(null,seq__29995_30009__$1);
var G__30012 = c__4319__auto___30010;
var G__30013 = cljs.core.count.call(null,c__4319__auto___30010);
var G__30014 = (0);
seq__29995_29999 = G__30011;
chunk__29996_30000 = G__30012;
count__29997_30001 = G__30013;
i__29998_30002 = G__30014;
continue;
} else {
var msg_30015 = cljs.core.first.call(null,seq__29995_30009__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30015);


var G__30016 = cljs.core.next.call(null,seq__29995_30009__$1);
var G__30017 = null;
var G__30018 = (0);
var G__30019 = (0);
seq__29995_29999 = G__30016;
chunk__29996_30000 = G__30017;
count__29997_30001 = G__30018;
i__29998_30002 = G__30019;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30020){
var map__30021 = p__30020;
var map__30021__$1 = ((((!((map__30021 == null)))?(((((map__30021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30021):map__30021);
var w = map__30021__$1;
var message = cljs.core.get.call(null,map__30021__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/development/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/development/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
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
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30023 = cljs.core.seq.call(null,plugins);
var chunk__30024 = null;
var count__30025 = (0);
var i__30026 = (0);
while(true){
if((i__30026 < count__30025)){
var vec__30027 = cljs.core._nth.call(null,chunk__30024,i__30026);
var k = cljs.core.nth.call(null,vec__30027,(0),null);
var plugin = cljs.core.nth.call(null,vec__30027,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30033 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30023,chunk__30024,count__30025,i__30026,pl_30033,vec__30027,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30033.call(null,msg_hist);
});})(seq__30023,chunk__30024,count__30025,i__30026,pl_30033,vec__30027,k,plugin))
);
} else {
}


var G__30034 = seq__30023;
var G__30035 = chunk__30024;
var G__30036 = count__30025;
var G__30037 = (i__30026 + (1));
seq__30023 = G__30034;
chunk__30024 = G__30035;
count__30025 = G__30036;
i__30026 = G__30037;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__30023);
if(temp__5457__auto__){
var seq__30023__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30023__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30023__$1);
var G__30038 = cljs.core.chunk_rest.call(null,seq__30023__$1);
var G__30039 = c__4319__auto__;
var G__30040 = cljs.core.count.call(null,c__4319__auto__);
var G__30041 = (0);
seq__30023 = G__30038;
chunk__30024 = G__30039;
count__30025 = G__30040;
i__30026 = G__30041;
continue;
} else {
var vec__30030 = cljs.core.first.call(null,seq__30023__$1);
var k = cljs.core.nth.call(null,vec__30030,(0),null);
var plugin = cljs.core.nth.call(null,vec__30030,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30042 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30023,chunk__30024,count__30025,i__30026,pl_30042,vec__30030,k,plugin,seq__30023__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30042.call(null,msg_hist);
});})(seq__30023,chunk__30024,count__30025,i__30026,pl_30042,vec__30030,k,plugin,seq__30023__$1,temp__5457__auto__))
);
} else {
}


var G__30043 = cljs.core.next.call(null,seq__30023__$1);
var G__30044 = null;
var G__30045 = (0);
var G__30046 = (0);
seq__30023 = G__30043;
chunk__30024 = G__30044;
count__30025 = G__30045;
i__30026 = G__30046;
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
var G__30048 = arguments.length;
switch (G__30048) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30049_30054 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30050_30055 = null;
var count__30051_30056 = (0);
var i__30052_30057 = (0);
while(true){
if((i__30052_30057 < count__30051_30056)){
var msg_30058 = cljs.core._nth.call(null,chunk__30050_30055,i__30052_30057);
figwheel.client.socket.handle_incoming_message.call(null,msg_30058);


var G__30059 = seq__30049_30054;
var G__30060 = chunk__30050_30055;
var G__30061 = count__30051_30056;
var G__30062 = (i__30052_30057 + (1));
seq__30049_30054 = G__30059;
chunk__30050_30055 = G__30060;
count__30051_30056 = G__30061;
i__30052_30057 = G__30062;
continue;
} else {
var temp__5457__auto___30063 = cljs.core.seq.call(null,seq__30049_30054);
if(temp__5457__auto___30063){
var seq__30049_30064__$1 = temp__5457__auto___30063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30049_30064__$1)){
var c__4319__auto___30065 = cljs.core.chunk_first.call(null,seq__30049_30064__$1);
var G__30066 = cljs.core.chunk_rest.call(null,seq__30049_30064__$1);
var G__30067 = c__4319__auto___30065;
var G__30068 = cljs.core.count.call(null,c__4319__auto___30065);
var G__30069 = (0);
seq__30049_30054 = G__30066;
chunk__30050_30055 = G__30067;
count__30051_30056 = G__30068;
i__30052_30057 = G__30069;
continue;
} else {
var msg_30070 = cljs.core.first.call(null,seq__30049_30064__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30070);


var G__30071 = cljs.core.next.call(null,seq__30049_30064__$1);
var G__30072 = null;
var G__30073 = (0);
var G__30074 = (0);
seq__30049_30054 = G__30071;
chunk__30050_30055 = G__30072;
count__30051_30056 = G__30073;
i__30052_30057 = G__30074;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30079 = arguments.length;
var i__4500__auto___30080 = (0);
while(true){
if((i__4500__auto___30080 < len__4499__auto___30079)){
args__4502__auto__.push((arguments[i__4500__auto___30080]));

var G__30081 = (i__4500__auto___30080 + (1));
i__4500__auto___30080 = G__30081;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30076){
var map__30077 = p__30076;
var map__30077__$1 = ((((!((map__30077 == null)))?(((((map__30077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30077):map__30077);
var opts = map__30077__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30075){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30075));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30082){if((e30082 instanceof Error)){
var e = e30082;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30082;

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
return (function (p__30083){
var map__30084 = p__30083;
var map__30084__$1 = ((((!((map__30084 == null)))?(((((map__30084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30084):map__30084);
var msg_name = cljs.core.get.call(null,map__30084__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1525371779296
