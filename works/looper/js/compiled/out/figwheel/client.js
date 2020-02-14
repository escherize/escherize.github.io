// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__32597__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32598__i = 0, G__32598__a = new Array(arguments.length -  0);
while (G__32598__i < G__32598__a.length) {G__32598__a[G__32598__i] = arguments[G__32598__i + 0]; ++G__32598__i;}
  args = new cljs.core.IndexedSeq(G__32598__a,0);
} 
return G__32597__delegate.call(this,args);};
G__32597.cljs$lang$maxFixedArity = 0;
G__32597.cljs$lang$applyTo = (function (arglist__32599){
var args = cljs.core.seq(arglist__32599);
return G__32597__delegate(args);
});
G__32597.cljs$core$IFn$_invoke$arity$variadic = G__32597__delegate;
return G__32597;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32600){
var map__32602 = p__32600;
var map__32602__$1 = ((cljs.core.seq_QMARK_.call(null,map__32602))?cljs.core.apply.call(null,cljs.core.hash_map,map__32602):map__32602);
var class$ = cljs.core.get.call(null,map__32602__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__32602__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__22374__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__22374__auto__)){
return or__22374__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__22362__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__22362__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__22362__auto__;
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
var c__25598__auto___32731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto___32731,ch){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto___32731,ch){
return (function (state_32705){
var state_val_32706 = (state_32705[(1)]);
if((state_val_32706 === (7))){
var inst_32701 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32707_32732 = state_32705__$1;
(statearr_32707_32732[(2)] = inst_32701);

(statearr_32707_32732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (1))){
var state_32705__$1 = state_32705;
var statearr_32708_32733 = state_32705__$1;
(statearr_32708_32733[(2)] = null);

(statearr_32708_32733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (4))){
var inst_32669 = (state_32705[(7)]);
var inst_32669__$1 = (state_32705[(2)]);
var state_32705__$1 = (function (){var statearr_32709 = state_32705;
(statearr_32709[(7)] = inst_32669__$1);

return statearr_32709;
})();
if(cljs.core.truth_(inst_32669__$1)){
var statearr_32710_32734 = state_32705__$1;
(statearr_32710_32734[(1)] = (5));

} else {
var statearr_32711_32735 = state_32705__$1;
(statearr_32711_32735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (13))){
var state_32705__$1 = state_32705;
var statearr_32712_32736 = state_32705__$1;
(statearr_32712_32736[(2)] = null);

(statearr_32712_32736[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (6))){
var state_32705__$1 = state_32705;
var statearr_32713_32737 = state_32705__$1;
(statearr_32713_32737[(2)] = null);

(statearr_32713_32737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (3))){
var inst_32703 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32705__$1,inst_32703);
} else {
if((state_val_32706 === (12))){
var inst_32676 = (state_32705[(8)]);
var inst_32689 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32676);
var inst_32690 = cljs.core.first.call(null,inst_32689);
var inst_32691 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32690);
var inst_32692 = console.warn("Figwheel: Not loading code with warnings - ",inst_32691);
var state_32705__$1 = state_32705;
var statearr_32714_32738 = state_32705__$1;
(statearr_32714_32738[(2)] = inst_32692);

(statearr_32714_32738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (2))){
var state_32705__$1 = state_32705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32705__$1,(4),ch);
} else {
if((state_val_32706 === (11))){
var inst_32685 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32715_32739 = state_32705__$1;
(statearr_32715_32739[(2)] = inst_32685);

(statearr_32715_32739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (9))){
var inst_32675 = (state_32705[(9)]);
var inst_32687 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32675,opts);
var state_32705__$1 = state_32705;
if(cljs.core.truth_(inst_32687)){
var statearr_32716_32740 = state_32705__$1;
(statearr_32716_32740[(1)] = (12));

} else {
var statearr_32717_32741 = state_32705__$1;
(statearr_32717_32741[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (5))){
var inst_32675 = (state_32705[(9)]);
var inst_32669 = (state_32705[(7)]);
var inst_32671 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32672 = (new cljs.core.PersistentArrayMap(null,2,inst_32671,null));
var inst_32673 = (new cljs.core.PersistentHashSet(null,inst_32672,null));
var inst_32674 = figwheel.client.focus_msgs.call(null,inst_32673,inst_32669);
var inst_32675__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32674);
var inst_32676 = cljs.core.first.call(null,inst_32674);
var inst_32677 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32675__$1,opts);
var state_32705__$1 = (function (){var statearr_32718 = state_32705;
(statearr_32718[(9)] = inst_32675__$1);

(statearr_32718[(8)] = inst_32676);

return statearr_32718;
})();
if(cljs.core.truth_(inst_32677)){
var statearr_32719_32742 = state_32705__$1;
(statearr_32719_32742[(1)] = (8));

} else {
var statearr_32720_32743 = state_32705__$1;
(statearr_32720_32743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (14))){
var inst_32695 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32721_32744 = state_32705__$1;
(statearr_32721_32744[(2)] = inst_32695);

(statearr_32721_32744[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (10))){
var inst_32697 = (state_32705[(2)]);
var state_32705__$1 = (function (){var statearr_32722 = state_32705;
(statearr_32722[(10)] = inst_32697);

return statearr_32722;
})();
var statearr_32723_32745 = state_32705__$1;
(statearr_32723_32745[(2)] = null);

(statearr_32723_32745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (8))){
var inst_32676 = (state_32705[(8)]);
var inst_32679 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32680 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32676);
var inst_32681 = cljs.core.async.timeout.call(null,(1000));
var inst_32682 = [inst_32680,inst_32681];
var inst_32683 = (new cljs.core.PersistentVector(null,2,(5),inst_32679,inst_32682,null));
var state_32705__$1 = state_32705;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32705__$1,(11),inst_32683);
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
});})(c__25598__auto___32731,ch))
;
return ((function (switch__25536__auto__,c__25598__auto___32731,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25537__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25537__auto____0 = (function (){
var statearr_32727 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32727[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25537__auto__);

(statearr_32727[(1)] = (1));

return statearr_32727;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25537__auto____1 = (function (state_32705){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_32705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e32728){if((e32728 instanceof Object)){
var ex__25540__auto__ = e32728;
var statearr_32729_32746 = state_32705;
(statearr_32729_32746[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32747 = state_32705;
state_32705 = G__32747;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25537__auto__ = function(state_32705){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25537__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25537__auto____1.call(this,state_32705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25537__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25537__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto___32731,ch))
})();
var state__25600__auto__ = (function (){var statearr_32730 = f__25599__auto__.call(null);
(statearr_32730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto___32731);

return statearr_32730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto___32731,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32748_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32748_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_32755 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32755){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_32753 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_32754 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_32753,_STAR_print_newline_STAR_32754,base_path_32755){
return (function() { 
var G__32756__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__32756 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32757__i = 0, G__32757__a = new Array(arguments.length -  0);
while (G__32757__i < G__32757__a.length) {G__32757__a[G__32757__i] = arguments[G__32757__i + 0]; ++G__32757__i;}
  args = new cljs.core.IndexedSeq(G__32757__a,0);
} 
return G__32756__delegate.call(this,args);};
G__32756.cljs$lang$maxFixedArity = 0;
G__32756.cljs$lang$applyTo = (function (arglist__32758){
var args = cljs.core.seq(arglist__32758);
return G__32756__delegate(args);
});
G__32756.cljs$core$IFn$_invoke$arity$variadic = G__32756__delegate;
return G__32756;
})()
;})(_STAR_print_fn_STAR_32753,_STAR_print_newline_STAR_32754,base_path_32755))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32754;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32753;
}}catch (e32752){if((e32752 instanceof Error)){
var e = e32752;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32755], null));
} else {
var e = e32752;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_32755))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32759){
var map__32764 = p__32759;
var map__32764__$1 = ((cljs.core.seq_QMARK_.call(null,map__32764))?cljs.core.apply.call(null,cljs.core.hash_map,map__32764):map__32764);
var opts = map__32764__$1;
var build_id = cljs.core.get.call(null,map__32764__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32764,map__32764__$1,opts,build_id){
return (function (p__32765){
var vec__32766 = p__32765;
var map__32767 = cljs.core.nth.call(null,vec__32766,(0),null);
var map__32767__$1 = ((cljs.core.seq_QMARK_.call(null,map__32767))?cljs.core.apply.call(null,cljs.core.hash_map,map__32767):map__32767);
var msg = map__32767__$1;
var msg_name = cljs.core.get.call(null,map__32767__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32766,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__32766,map__32767,map__32767__$1,msg,msg_name,_,map__32764,map__32764__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32766,map__32767,map__32767__$1,msg,msg_name,_,map__32764,map__32764__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32764,map__32764__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32771){
var vec__32772 = p__32771;
var map__32773 = cljs.core.nth.call(null,vec__32772,(0),null);
var map__32773__$1 = ((cljs.core.seq_QMARK_.call(null,map__32773))?cljs.core.apply.call(null,cljs.core.hash_map,map__32773):map__32773);
var msg = map__32773__$1;
var msg_name = cljs.core.get.call(null,map__32773__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32772,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32774){
var map__32782 = p__32774;
var map__32782__$1 = ((cljs.core.seq_QMARK_.call(null,map__32782))?cljs.core.apply.call(null,cljs.core.hash_map,map__32782):map__32782);
var on_compile_fail = cljs.core.get.call(null,map__32782__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__32782__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__32782,map__32782__$1,on_compile_fail,on_compile_warning){
return (function (p__32783){
var vec__32784 = p__32783;
var map__32785 = cljs.core.nth.call(null,vec__32784,(0),null);
var map__32785__$1 = ((cljs.core.seq_QMARK_.call(null,map__32785))?cljs.core.apply.call(null,cljs.core.hash_map,map__32785):map__32785);
var msg = map__32785__$1;
var msg_name = cljs.core.get.call(null,map__32785__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32784,(1));
var pred__32786 = cljs.core._EQ_;
var expr__32787 = msg_name;
if(cljs.core.truth_(pred__32786.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32787))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32786.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32787))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32782,map__32782__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto__,msg_hist,msg_names,msg){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto__,msg_hist,msg_names,msg){
return (function (state_32988){
var state_val_32989 = (state_32988[(1)]);
if((state_val_32989 === (7))){
var inst_32922 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_32990_33031 = state_32988__$1;
(statearr_32990_33031[(2)] = inst_32922);

(statearr_32990_33031[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (20))){
var inst_32950 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32988__$1 = state_32988;
if(cljs.core.truth_(inst_32950)){
var statearr_32991_33032 = state_32988__$1;
(statearr_32991_33032[(1)] = (22));

} else {
var statearr_32992_33033 = state_32988__$1;
(statearr_32992_33033[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (27))){
var inst_32962 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32963 = figwheel.client.heads_up.display_warning.call(null,inst_32962);
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32988__$1,(30),inst_32963);
} else {
if((state_val_32989 === (1))){
var inst_32910 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32988__$1 = state_32988;
if(cljs.core.truth_(inst_32910)){
var statearr_32993_33034 = state_32988__$1;
(statearr_32993_33034[(1)] = (2));

} else {
var statearr_32994_33035 = state_32988__$1;
(statearr_32994_33035[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (24))){
var inst_32978 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_32995_33036 = state_32988__$1;
(statearr_32995_33036[(2)] = inst_32978);

(statearr_32995_33036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (4))){
var inst_32986 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32988__$1,inst_32986);
} else {
if((state_val_32989 === (15))){
var inst_32938 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32939 = figwheel.client.format_messages.call(null,inst_32938);
var inst_32940 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32941 = figwheel.client.heads_up.display_error.call(null,inst_32939,inst_32940);
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32988__$1,(18),inst_32941);
} else {
if((state_val_32989 === (21))){
var inst_32980 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_32996_33037 = state_32988__$1;
(statearr_32996_33037[(2)] = inst_32980);

(statearr_32996_33037[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (31))){
var inst_32969 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32988__$1,(34),inst_32969);
} else {
if((state_val_32989 === (32))){
var state_32988__$1 = state_32988;
var statearr_32997_33038 = state_32988__$1;
(statearr_32997_33038[(2)] = null);

(statearr_32997_33038[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (33))){
var inst_32974 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_32998_33039 = state_32988__$1;
(statearr_32998_33039[(2)] = inst_32974);

(statearr_32998_33039[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (13))){
var inst_32928 = (state_32988[(2)]);
var inst_32929 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32930 = figwheel.client.format_messages.call(null,inst_32929);
var inst_32931 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32932 = figwheel.client.heads_up.display_error.call(null,inst_32930,inst_32931);
var state_32988__$1 = (function (){var statearr_32999 = state_32988;
(statearr_32999[(7)] = inst_32928);

return statearr_32999;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32988__$1,(14),inst_32932);
} else {
if((state_val_32989 === (22))){
var inst_32952 = figwheel.client.heads_up.clear.call(null);
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32988__$1,(25),inst_32952);
} else {
if((state_val_32989 === (29))){
var inst_32976 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33000_33040 = state_32988__$1;
(statearr_33000_33040[(2)] = inst_32976);

(statearr_33000_33040[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (6))){
var inst_32918 = figwheel.client.heads_up.clear.call(null);
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32988__$1,(9),inst_32918);
} else {
if((state_val_32989 === (28))){
var inst_32967 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32988__$1 = state_32988;
if(cljs.core.truth_(inst_32967)){
var statearr_33001_33041 = state_32988__$1;
(statearr_33001_33041[(1)] = (31));

} else {
var statearr_33002_33042 = state_32988__$1;
(statearr_33002_33042[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (25))){
var inst_32954 = (state_32988[(2)]);
var inst_32955 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32956 = figwheel.client.heads_up.display_warning.call(null,inst_32955);
var state_32988__$1 = (function (){var statearr_33003 = state_32988;
(statearr_33003[(8)] = inst_32954);

return statearr_33003;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32988__$1,(26),inst_32956);
} else {
if((state_val_32989 === (34))){
var inst_32971 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33004_33043 = state_32988__$1;
(statearr_33004_33043[(2)] = inst_32971);

(statearr_33004_33043[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (17))){
var inst_32982 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33005_33044 = state_32988__$1;
(statearr_33005_33044[(2)] = inst_32982);

(statearr_33005_33044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (3))){
var inst_32924 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32988__$1 = state_32988;
if(cljs.core.truth_(inst_32924)){
var statearr_33006_33045 = state_32988__$1;
(statearr_33006_33045[(1)] = (10));

} else {
var statearr_33007_33046 = state_32988__$1;
(statearr_33007_33046[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (12))){
var inst_32984 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33008_33047 = state_32988__$1;
(statearr_33008_33047[(2)] = inst_32984);

(statearr_33008_33047[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (2))){
var inst_32912 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32988__$1 = state_32988;
if(cljs.core.truth_(inst_32912)){
var statearr_33009_33048 = state_32988__$1;
(statearr_33009_33048[(1)] = (5));

} else {
var statearr_33010_33049 = state_32988__$1;
(statearr_33010_33049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (23))){
var inst_32960 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32988__$1 = state_32988;
if(cljs.core.truth_(inst_32960)){
var statearr_33011_33050 = state_32988__$1;
(statearr_33011_33050[(1)] = (27));

} else {
var statearr_33012_33051 = state_32988__$1;
(statearr_33012_33051[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (19))){
var inst_32947 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32948 = figwheel.client.heads_up.append_message.call(null,inst_32947);
var state_32988__$1 = state_32988;
var statearr_33013_33052 = state_32988__$1;
(statearr_33013_33052[(2)] = inst_32948);

(statearr_33013_33052[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (11))){
var inst_32936 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32988__$1 = state_32988;
if(cljs.core.truth_(inst_32936)){
var statearr_33014_33053 = state_32988__$1;
(statearr_33014_33053[(1)] = (15));

} else {
var statearr_33015_33054 = state_32988__$1;
(statearr_33015_33054[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (9))){
var inst_32920 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33016_33055 = state_32988__$1;
(statearr_33016_33055[(2)] = inst_32920);

(statearr_33016_33055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (5))){
var inst_32914 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32988__$1,(8),inst_32914);
} else {
if((state_val_32989 === (14))){
var inst_32934 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33017_33056 = state_32988__$1;
(statearr_33017_33056[(2)] = inst_32934);

(statearr_33017_33056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (26))){
var inst_32958 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33018_33057 = state_32988__$1;
(statearr_33018_33057[(2)] = inst_32958);

(statearr_33018_33057[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (16))){
var inst_32945 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32988__$1 = state_32988;
if(cljs.core.truth_(inst_32945)){
var statearr_33019_33058 = state_32988__$1;
(statearr_33019_33058[(1)] = (19));

} else {
var statearr_33020_33059 = state_32988__$1;
(statearr_33020_33059[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (30))){
var inst_32965 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33021_33060 = state_32988__$1;
(statearr_33021_33060[(2)] = inst_32965);

(statearr_33021_33060[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (10))){
var inst_32926 = figwheel.client.heads_up.clear.call(null);
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32988__$1,(13),inst_32926);
} else {
if((state_val_32989 === (18))){
var inst_32943 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33022_33061 = state_32988__$1;
(statearr_33022_33061[(2)] = inst_32943);

(statearr_33022_33061[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (8))){
var inst_32916 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33023_33062 = state_32988__$1;
(statearr_33023_33062[(2)] = inst_32916);

(statearr_33023_33062[(1)] = (7));


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
});})(c__25598__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25536__auto__,c__25598__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25537__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25537__auto____0 = (function (){
var statearr_33027 = [null,null,null,null,null,null,null,null,null];
(statearr_33027[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25537__auto__);

(statearr_33027[(1)] = (1));

return statearr_33027;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25537__auto____1 = (function (state_32988){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_32988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e33028){if((e33028 instanceof Object)){
var ex__25540__auto__ = e33028;
var statearr_33029_33063 = state_32988;
(statearr_33029_33063[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33064 = state_32988;
state_32988 = G__33064;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25537__auto__ = function(state_32988){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25537__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25537__auto____1.call(this,state_32988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25537__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25537__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto__,msg_hist,msg_names,msg))
})();
var state__25600__auto__ = (function (){var statearr_33030 = f__25599__auto__.call(null);
(statearr_33030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto__);

return statearr_33030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto__,msg_hist,msg_names,msg))
);

return c__25598__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25598__auto___33127 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto___33127,ch){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto___33127,ch){
return (function (state_33110){
var state_val_33111 = (state_33110[(1)]);
if((state_val_33111 === (8))){
var inst_33102 = (state_33110[(2)]);
var state_33110__$1 = (function (){var statearr_33112 = state_33110;
(statearr_33112[(7)] = inst_33102);

return statearr_33112;
})();
var statearr_33113_33128 = state_33110__$1;
(statearr_33113_33128[(2)] = null);

(statearr_33113_33128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (7))){
var inst_33106 = (state_33110[(2)]);
var state_33110__$1 = state_33110;
var statearr_33114_33129 = state_33110__$1;
(statearr_33114_33129[(2)] = inst_33106);

(statearr_33114_33129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (6))){
var state_33110__$1 = state_33110;
var statearr_33115_33130 = state_33110__$1;
(statearr_33115_33130[(2)] = null);

(statearr_33115_33130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (5))){
var inst_33098 = (state_33110[(8)]);
var inst_33100 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33098);
var state_33110__$1 = state_33110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33110__$1,(8),inst_33100);
} else {
if((state_val_33111 === (4))){
var inst_33098 = (state_33110[(8)]);
var inst_33098__$1 = (state_33110[(2)]);
var state_33110__$1 = (function (){var statearr_33116 = state_33110;
(statearr_33116[(8)] = inst_33098__$1);

return statearr_33116;
})();
if(cljs.core.truth_(inst_33098__$1)){
var statearr_33117_33131 = state_33110__$1;
(statearr_33117_33131[(1)] = (5));

} else {
var statearr_33118_33132 = state_33110__$1;
(statearr_33118_33132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (3))){
var inst_33108 = (state_33110[(2)]);
var state_33110__$1 = state_33110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33110__$1,inst_33108);
} else {
if((state_val_33111 === (2))){
var state_33110__$1 = state_33110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33110__$1,(4),ch);
} else {
if((state_val_33111 === (1))){
var state_33110__$1 = state_33110;
var statearr_33119_33133 = state_33110__$1;
(statearr_33119_33133[(2)] = null);

(statearr_33119_33133[(1)] = (2));


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
});})(c__25598__auto___33127,ch))
;
return ((function (switch__25536__auto__,c__25598__auto___33127,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25537__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25537__auto____0 = (function (){
var statearr_33123 = [null,null,null,null,null,null,null,null,null];
(statearr_33123[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25537__auto__);

(statearr_33123[(1)] = (1));

return statearr_33123;
});
var figwheel$client$heads_up_plugin_$_state_machine__25537__auto____1 = (function (state_33110){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_33110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e33124){if((e33124 instanceof Object)){
var ex__25540__auto__ = e33124;
var statearr_33125_33134 = state_33110;
(statearr_33125_33134[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33135 = state_33110;
state_33110 = G__33135;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25537__auto__ = function(state_33110){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25537__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25537__auto____1.call(this,state_33110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25537__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25537__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto___33127,ch))
})();
var state__25600__auto__ = (function (){var statearr_33126 = f__25599__auto__.call(null);
(statearr_33126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto___33127);

return statearr_33126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto___33127,ch))
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
var c__25598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto__){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto__){
return (function (state_33156){
var state_val_33157 = (state_33156[(1)]);
if((state_val_33157 === (2))){
var inst_33153 = (state_33156[(2)]);
var inst_33154 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33156__$1 = (function (){var statearr_33158 = state_33156;
(statearr_33158[(7)] = inst_33153);

return statearr_33158;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33156__$1,inst_33154);
} else {
if((state_val_33157 === (1))){
var inst_33151 = cljs.core.async.timeout.call(null,(3000));
var state_33156__$1 = state_33156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33156__$1,(2),inst_33151);
} else {
return null;
}
}
});})(c__25598__auto__))
;
return ((function (switch__25536__auto__,c__25598__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25537__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25537__auto____0 = (function (){
var statearr_33162 = [null,null,null,null,null,null,null,null];
(statearr_33162[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25537__auto__);

(statearr_33162[(1)] = (1));

return statearr_33162;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25537__auto____1 = (function (state_33156){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_33156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e33163){if((e33163 instanceof Object)){
var ex__25540__auto__ = e33163;
var statearr_33164_33166 = state_33156;
(statearr_33164_33166[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33167 = state_33156;
state_33156 = G__33167;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25537__auto__ = function(state_33156){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25537__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25537__auto____1.call(this,state_33156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25537__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25537__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto__))
})();
var state__25600__auto__ = (function (){var statearr_33165 = f__25599__auto__.call(null);
(statearr_33165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto__);

return statearr_33165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto__))
);

return c__25598__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33168){
var map__33174 = p__33168;
var map__33174__$1 = ((cljs.core.seq_QMARK_.call(null,map__33174))?cljs.core.apply.call(null,cljs.core.hash_map,map__33174):map__33174);
var ed = map__33174__$1;
var cause = cljs.core.get.call(null,map__33174__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var exception_data = cljs.core.get.call(null,map__33174__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__33174__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33175_33179 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33176_33180 = null;
var count__33177_33181 = (0);
var i__33178_33182 = (0);
while(true){
if((i__33178_33182 < count__33177_33181)){
var msg_33183 = cljs.core._nth.call(null,chunk__33176_33180,i__33178_33182);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33183);

var G__33184 = seq__33175_33179;
var G__33185 = chunk__33176_33180;
var G__33186 = count__33177_33181;
var G__33187 = (i__33178_33182 + (1));
seq__33175_33179 = G__33184;
chunk__33176_33180 = G__33185;
count__33177_33181 = G__33186;
i__33178_33182 = G__33187;
continue;
} else {
var temp__4126__auto___33188 = cljs.core.seq.call(null,seq__33175_33179);
if(temp__4126__auto___33188){
var seq__33175_33189__$1 = temp__4126__auto___33188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33175_33189__$1)){
var c__23159__auto___33190 = cljs.core.chunk_first.call(null,seq__33175_33189__$1);
var G__33191 = cljs.core.chunk_rest.call(null,seq__33175_33189__$1);
var G__33192 = c__23159__auto___33190;
var G__33193 = cljs.core.count.call(null,c__23159__auto___33190);
var G__33194 = (0);
seq__33175_33179 = G__33191;
chunk__33176_33180 = G__33192;
count__33177_33181 = G__33193;
i__33178_33182 = G__33194;
continue;
} else {
var msg_33195 = cljs.core.first.call(null,seq__33175_33189__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33195);

var G__33196 = cljs.core.next.call(null,seq__33175_33189__$1);
var G__33197 = null;
var G__33198 = (0);
var G__33199 = (0);
seq__33175_33179 = G__33196;
chunk__33176_33180 = G__33197;
count__33177_33181 = G__33198;
i__33178_33182 = G__33199;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33200){
var map__33202 = p__33200;
var map__33202__$1 = ((cljs.core.seq_QMARK_.call(null,map__33202))?cljs.core.apply.call(null,cljs.core.hash_map,map__33202):map__33202);
var w = map__33202__$1;
var message = cljs.core.get.call(null,map__33202__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__22362__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__22362__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__22362__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33209 = cljs.core.seq.call(null,plugins);
var chunk__33210 = null;
var count__33211 = (0);
var i__33212 = (0);
while(true){
if((i__33212 < count__33211)){
var vec__33213 = cljs.core._nth.call(null,chunk__33210,i__33212);
var k = cljs.core.nth.call(null,vec__33213,(0),null);
var plugin = cljs.core.nth.call(null,vec__33213,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33215 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33209,chunk__33210,count__33211,i__33212,pl_33215,vec__33213,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33215.call(null,msg_hist);
});})(seq__33209,chunk__33210,count__33211,i__33212,pl_33215,vec__33213,k,plugin))
);
} else {
}

var G__33216 = seq__33209;
var G__33217 = chunk__33210;
var G__33218 = count__33211;
var G__33219 = (i__33212 + (1));
seq__33209 = G__33216;
chunk__33210 = G__33217;
count__33211 = G__33218;
i__33212 = G__33219;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__33209);
if(temp__4126__auto__){
var seq__33209__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33209__$1)){
var c__23159__auto__ = cljs.core.chunk_first.call(null,seq__33209__$1);
var G__33220 = cljs.core.chunk_rest.call(null,seq__33209__$1);
var G__33221 = c__23159__auto__;
var G__33222 = cljs.core.count.call(null,c__23159__auto__);
var G__33223 = (0);
seq__33209 = G__33220;
chunk__33210 = G__33221;
count__33211 = G__33222;
i__33212 = G__33223;
continue;
} else {
var vec__33214 = cljs.core.first.call(null,seq__33209__$1);
var k = cljs.core.nth.call(null,vec__33214,(0),null);
var plugin = cljs.core.nth.call(null,vec__33214,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33224 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33209,chunk__33210,count__33211,i__33212,pl_33224,vec__33214,k,plugin,seq__33209__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33224.call(null,msg_hist);
});})(seq__33209,chunk__33210,count__33211,i__33212,pl_33224,vec__33214,k,plugin,seq__33209__$1,temp__4126__auto__))
);
} else {
}

var G__33225 = cljs.core.next.call(null,seq__33209__$1);
var G__33226 = null;
var G__33227 = (0);
var G__33228 = (0);
seq__33209 = G__33225;
chunk__33210 = G__33226;
count__33211 = G__33227;
i__33212 = G__33228;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__33230 = arguments.length;
switch (G__33230) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

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
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

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
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__23414__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__23414__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33233){
var map__33234 = p__33233;
var map__33234__$1 = ((cljs.core.seq_QMARK_.call(null,map__33234))?cljs.core.apply.call(null,cljs.core.hash_map,map__33234):map__33234);
var opts = map__33234__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33232){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33232));
});

//# sourceMappingURL=client.js.map?rel=1436273478826