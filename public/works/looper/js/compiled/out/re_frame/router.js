// Compiled by ClojureScript 0.0-3211 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('reagent.core');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__25598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto__){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto__){
return (function (state_29911){
var state_val_29912 = (state_29911[(1)]);
if((state_val_29912 === (7))){
var inst_29896 = (state_29911[(2)]);
var state_29911__$1 = (function (){var statearr_29913 = state_29911;
(statearr_29913[(7)] = inst_29896);

return statearr_29913;
})();
var statearr_29914_29934 = state_29911__$1;
(statearr_29914_29934[(2)] = null);

(statearr_29914_29934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (1))){
var state_29911__$1 = state_29911;
var statearr_29915_29935 = state_29911__$1;
(statearr_29915_29935[(2)] = null);

(statearr_29915_29935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (4))){
var inst_29883 = (state_29911[(8)]);
var inst_29883__$1 = (state_29911[(2)]);
var inst_29884 = cljs.core.meta.call(null,inst_29883__$1);
var inst_29885 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_29884);
var state_29911__$1 = (function (){var statearr_29916 = state_29911;
(statearr_29916[(8)] = inst_29883__$1);

return statearr_29916;
})();
if(cljs.core.truth_(inst_29885)){
var statearr_29917_29936 = state_29911__$1;
(statearr_29917_29936[(1)] = (5));

} else {
var statearr_29918_29937 = state_29911__$1;
(statearr_29918_29937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (6))){
var inst_29892 = cljs.core.async.timeout.call(null,(0));
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(9),inst_29892);
} else {
if((state_val_29912 === (3))){
var inst_29909 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29911__$1,inst_29909);
} else {
if((state_val_29912 === (12))){
var inst_29883 = (state_29911[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29911,(11),Object,null,(10));
var inst_29904 = re_frame.handlers.handle.call(null,inst_29883);
var state_29911__$1 = state_29911;
var statearr_29919_29938 = state_29911__$1;
(statearr_29919_29938[(2)] = inst_29904);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29911__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (2))){
var state_29911__$1 = state_29911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_29912 === (11))){
var inst_29897 = (state_29911[(2)]);
var inst_29898 = re_frame.router.purge_chan.call(null);
var inst_29899 = re_frame$router$router_loop.call(null);
var inst_29900 = (function(){throw inst_29897})();
var state_29911__$1 = (function (){var statearr_29920 = state_29911;
(statearr_29920[(9)] = inst_29899);

(statearr_29920[(10)] = inst_29898);

return statearr_29920;
})();
var statearr_29921_29939 = state_29911__$1;
(statearr_29921_29939[(2)] = inst_29900);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29911__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (9))){
var inst_29894 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29922_29940 = state_29911__$1;
(statearr_29922_29940[(2)] = inst_29894);

(statearr_29922_29940[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (5))){
var inst_29887 = reagent.core.flush.call(null);
var inst_29888 = cljs.core.async.timeout.call(null,(20));
var state_29911__$1 = (function (){var statearr_29923 = state_29911;
(statearr_29923[(11)] = inst_29887);

return statearr_29923;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29911__$1,(8),inst_29888);
} else {
if((state_val_29912 === (10))){
var inst_29906 = (state_29911[(2)]);
var state_29911__$1 = (function (){var statearr_29924 = state_29911;
(statearr_29924[(12)] = inst_29906);

return statearr_29924;
})();
var statearr_29925_29941 = state_29911__$1;
(statearr_29925_29941[(2)] = null);

(statearr_29925_29941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29912 === (8))){
var inst_29890 = (state_29911[(2)]);
var state_29911__$1 = state_29911;
var statearr_29926_29942 = state_29911__$1;
(statearr_29926_29942[(2)] = inst_29890);

(statearr_29926_29942[(1)] = (7));


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
});})(c__25598__auto__))
;
return ((function (switch__25536__auto__,c__25598__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__25537__auto__ = null;
var re_frame$router$router_loop_$_state_machine__25537__auto____0 = (function (){
var statearr_29930 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29930[(0)] = re_frame$router$router_loop_$_state_machine__25537__auto__);

(statearr_29930[(1)] = (1));

return statearr_29930;
});
var re_frame$router$router_loop_$_state_machine__25537__auto____1 = (function (state_29911){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_29911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e29931){if((e29931 instanceof Object)){
var ex__25540__auto__ = e29931;
var statearr_29932_29943 = state_29911;
(statearr_29932_29943[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29944 = state_29911;
state_29911 = G__29944;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__25537__auto__ = function(state_29911){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__25537__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__25537__auto____1.call(this,state_29911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__25537__auto____0;
re_frame$router$router_loop_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__25537__auto____1;
return re_frame$router$router_loop_$_state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto__))
})();
var state__25600__auto__ = (function (){var statearr_29933 = f__25599__auto__.call(null);
(statearr_29933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto__);

return statearr_29933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto__))
);

return c__25598__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 * Usage example:
 * (dispatch [:delete-item 42])
 * 
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 * use of core.async/chan.
 * 
 * Usage example:
 * (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map?rel=1436273475440