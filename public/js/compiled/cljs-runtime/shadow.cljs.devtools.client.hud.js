goog.provide('shadow.cljs.devtools.client.hud');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.xhr');
goog.require('shadow.animate');
goog.require('shadow.cljs.devtools.client.env');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.hud.show_progress",true);

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.hud.show_warnings",true);

/** @define {boolean} */
goog.define("shadow.cljs.devtools.client.hud.show_errors",true);
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[shadow.cljs.devtools.client.env.get_url_base(),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__33642__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto__,req){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto__,req){
return (function (state_39196){
var state_val_39197 = (state_39196[(1)]);
if((state_val_39197 === (7))){
var state_39196__$1 = state_39196;
var statearr_39199_39386 = state_39196__$1;
(statearr_39199_39386[(2)] = false);

(statearr_39199_39386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (1))){
var state_39196__$1 = state_39196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39196__$1,(2),req);
} else {
if((state_val_39197 === (4))){
var inst_39155 = (state_39196[(7)]);
var inst_39162 = (inst_39155 == null);
var inst_39163 = cljs.core.not(inst_39162);
var state_39196__$1 = state_39196;
if(inst_39163){
var statearr_39201_39387 = state_39196__$1;
(statearr_39201_39387[(1)] = (6));

} else {
var statearr_39202_39388 = state_39196__$1;
(statearr_39202_39388[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (15))){
var state_39196__$1 = state_39196;
var statearr_39203_39389 = state_39196__$1;
(statearr_39203_39389[(2)] = null);

(statearr_39203_39389[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (13))){
var inst_39155 = (state_39196[(7)]);
var state_39196__$1 = state_39196;
var statearr_39204_39390 = state_39196__$1;
(statearr_39204_39390[(2)] = inst_39155);

(statearr_39204_39390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (6))){
var inst_39155 = (state_39196[(7)]);
var inst_39165 = inst_39155.cljs$lang$protocol_mask$partition0$;
var inst_39166 = (inst_39165 & (64));
var inst_39171 = inst_39155.cljs$core$ISeq$;
var inst_39172 = (cljs.core.PROTOCOL_SENTINEL === inst_39171);
var inst_39173 = ((inst_39166) || (inst_39172));
var state_39196__$1 = state_39196;
if(cljs.core.truth_(inst_39173)){
var statearr_39205_39391 = state_39196__$1;
(statearr_39205_39391[(1)] = (9));

} else {
var statearr_39206_39392 = state_39196__$1;
(statearr_39206_39392[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (17))){
var inst_39192 = (state_39196[(2)]);
var state_39196__$1 = state_39196;
var statearr_39207_39393 = state_39196__$1;
(statearr_39207_39393[(2)] = inst_39192);

(statearr_39207_39393[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (3))){
var state_39196__$1 = state_39196;
var statearr_39208_39394 = state_39196__$1;
(statearr_39208_39394[(2)] = null);

(statearr_39208_39394[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (12))){
var inst_39155 = (state_39196[(7)]);
var inst_39182 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39155);
var state_39196__$1 = state_39196;
var statearr_39212_39395 = state_39196__$1;
(statearr_39212_39395[(2)] = inst_39182);

(statearr_39212_39395[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (2))){
var inst_39155 = (state_39196[(7)]);
var inst_39155__$1 = (state_39196[(2)]);
var inst_39156 = (inst_39155__$1 == null);
var state_39196__$1 = (function (){var statearr_39217 = state_39196;
(statearr_39217[(7)] = inst_39155__$1);

return statearr_39217;
})();
if(cljs.core.truth_(inst_39156)){
var statearr_39219_39396 = state_39196__$1;
(statearr_39219_39396[(1)] = (3));

} else {
var statearr_39220_39397 = state_39196__$1;
(statearr_39220_39397[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (11))){
var inst_39177 = (state_39196[(2)]);
var state_39196__$1 = state_39196;
var statearr_39221_39398 = state_39196__$1;
(statearr_39221_39398[(2)] = inst_39177);

(statearr_39221_39398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (9))){
var state_39196__$1 = state_39196;
var statearr_39222_39399 = state_39196__$1;
(statearr_39222_39399[(2)] = true);

(statearr_39222_39399[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (5))){
var inst_39194 = (state_39196[(2)]);
var state_39196__$1 = state_39196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39196__$1,inst_39194);
} else {
if((state_val_39197 === (14))){
var inst_39185 = (state_39196[(8)]);
var inst_39185__$1 = (state_39196[(2)]);
var inst_39186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39185__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_39187 = (inst_39186 === (0));
var state_39196__$1 = (function (){var statearr_39227 = state_39196;
(statearr_39227[(8)] = inst_39185__$1);

return statearr_39227;
})();
if(cljs.core.truth_(inst_39187)){
var statearr_39228_39400 = state_39196__$1;
(statearr_39228_39400[(1)] = (15));

} else {
var statearr_39229_39401 = state_39196__$1;
(statearr_39229_39401[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (16))){
var inst_39185 = (state_39196[(8)]);
var inst_39190 = console.warn("file open failed",inst_39185);
var state_39196__$1 = state_39196;
var statearr_39230_39402 = state_39196__$1;
(statearr_39230_39402[(2)] = inst_39190);

(statearr_39230_39402[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (10))){
var state_39196__$1 = state_39196;
var statearr_39232_39403 = state_39196__$1;
(statearr_39232_39403[(2)] = false);

(statearr_39232_39403[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39197 === (8))){
var inst_39180 = (state_39196[(2)]);
var state_39196__$1 = state_39196;
if(cljs.core.truth_(inst_39180)){
var statearr_39241_39404 = state_39196__$1;
(statearr_39241_39404[(1)] = (12));

} else {
var statearr_39242_39405 = state_39196__$1;
(statearr_39242_39405[(1)] = (13));

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
});})(c__33642__auto__,req))
;
return ((function (switch__33308__auto__,c__33642__auto__,req){
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__33309__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__33309__auto____0 = (function (){
var statearr_39244 = [null,null,null,null,null,null,null,null,null];
(statearr_39244[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__33309__auto__);

(statearr_39244[(1)] = (1));

return statearr_39244;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__33309__auto____1 = (function (state_39196){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_39196);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e39246){if((e39246 instanceof Object)){
var ex__33312__auto__ = e39246;
var statearr_39251_39406 = state_39196;
(statearr_39251_39406[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39246;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39407 = state_39196;
state_39196 = G__39407;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__33309__auto__ = function(state_39196){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__33309__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__33309__auto____1.call(this,state_39196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__33309__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__33309__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto__,req))
})();
var state__33644__auto__ = (function (){var statearr_39257 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_39257[(6)] = c__33642__auto__);

return statearr_39257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto__,req))
);

return c__33642__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__39271 = arguments.length;
switch (G__39271) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5739__auto___39409 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5739__auto___39409 == null)){
} else {
var x_39410 = temp__5739__auto___39409;
shadow.dom.remove(x_39410);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
});

shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (new cljs.core.Delay((function (){
var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
}),null));
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
if(shadow.cljs.devtools.client.hud.show_progress){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),cljs.core.deref(shadow.cljs.devtools.client.hud.logo_svg)], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
if(shadow.cljs.devtools.client.hud.show_progress){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var container_el = temp__5739__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__33642__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto__,el,container_el,temp__5739__auto__){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto__,el,container_el,temp__5739__auto__){
return (function (state_39310){
var state_val_39311 = (state_39310[(1)]);
if((state_val_39311 === (1))){
var inst_39292 = cljs.core.async.timeout((250));
var state_39310__$1 = state_39310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39310__$1,(2),inst_39292);
} else {
if((state_val_39311 === (2))){
var inst_39297 = (state_39310[(2)]);
var inst_39298 = [el];
var inst_39299 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_39300 = [inst_39299];
var inst_39301 = cljs.core.PersistentHashMap.fromArrays(inst_39298,inst_39300);
var inst_39302 = shadow.animate.start((250),inst_39301);
var state_39310__$1 = (function (){var statearr_39322 = state_39310;
(statearr_39322[(7)] = inst_39297);

return statearr_39322;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39310__$1,(3),inst_39302);
} else {
if((state_val_39311 === (3))){
var inst_39304 = (state_39310[(2)]);
var inst_39308 = shadow.dom.remove(container_el);
var state_39310__$1 = (function (){var statearr_39323 = state_39310;
(statearr_39323[(8)] = inst_39304);

return statearr_39323;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39310__$1,inst_39308);
} else {
return null;
}
}
}
});})(c__33642__auto__,el,container_el,temp__5739__auto__))
;
return ((function (switch__33308__auto__,c__33642__auto__,el,container_el,temp__5739__auto__){
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33309__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33309__auto____0 = (function (){
var statearr_39325 = [null,null,null,null,null,null,null,null,null];
(statearr_39325[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33309__auto__);

(statearr_39325[(1)] = (1));

return statearr_39325;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33309__auto____1 = (function (state_39310){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_39310);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e39326){if((e39326 instanceof Object)){
var ex__33312__auto__ = e39326;
var statearr_39327_39411 = state_39310;
(statearr_39327_39411[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39326;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39412 = state_39310;
state_39310 = G__39412;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33309__auto__ = function(state_39310){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33309__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33309__auto____1.call(this,state_39310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33309__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33309__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto__,el,container_el,temp__5739__auto__))
})();
var state__33644__auto__ = (function (){var statearr_39328 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_39328[(6)] = c__33642__auto__);

return statearr_39328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto__,el,container_el,temp__5739__auto__))
);

return c__33642__auto__;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var el = temp__5739__auto__;
return shadow.dom.remove(el);
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var d = temp__5739__auto__;
return shadow.dom.remove(d);
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4523__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__39329(s__39330){
return (new cljs.core.LazySeq(null,(function (){
var s__39330__$1 = s__39330;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39330__$1);
if(temp__5735__auto__){
var s__39330__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39330__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__39330__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__39332 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__39331 = (0);
while(true){
if((i__39331 < size__4522__auto__)){
var vec__39333 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__39331);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39333,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39333,(1),null);
cljs.core.chunk_append(b__39332,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__39336 = "%4d | %s";
var G__39337 = (((1) + idx) + start_idx);
var G__39338 = text;
return goog.string.format(G__39336,G__39337,G__39338);
})()], null));

var G__39415 = (i__39331 + (1));
i__39331 = G__39415;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39332),shadow$cljs$devtools$client$hud$source_line_html_$_iter__39329(cljs.core.chunk_rest(s__39330__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39332),null);
}
} else {
var vec__39340 = cljs.core.first(s__39330__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39340,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39340,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__39343 = "%4d | %s";
var G__39344 = (((1) + idx) + start_idx);
var G__39345 = text;
return goog.string.format(G__39343,G__39344,G__39345);
})()], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__39329(cljs.core.rest(s__39330__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__39347 = arguments.length;
switch (G__39347) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
});

shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = ((function (sep_len,len){
return (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});})(sep_len,len))
;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep(offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sep((sep_len - (offset + len))))].join('');
});

shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2;

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__39351){
var map__39352 = p__39351;
var map__39352__$1 = (((((!((map__39352 == null))))?(((((map__39352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39352):map__39352);
var warning = map__39352__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39352__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39352__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39352__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39352__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),((function (map__39352,map__39352__$1,warning,resource_name,file,line,column){
return (function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
});})(map__39352,map__39352__$1,warning,resource_name,file,line,column))
], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__39360){
var map__39361 = p__39360;
var map__39361__$1 = (((((!((map__39361 == null))))?(((((map__39361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39361):map__39361);
var warning = map__39361__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39361__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39361__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39361__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39361__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39361__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39361__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__39363 = source_excerpt;
var map__39363__$1 = (((((!((map__39363 == null))))?(((((map__39363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39363):map__39363);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39363__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39363__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39363__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39363__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__4131__auto__ = column;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__39367){
var map__39368 = p__39367;
var map__39368__$1 = (((((!((map__39368 == null))))?(((((map__39368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39368):map__39368);
var msg = map__39368__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39368__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39368__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__39371 = info;
var map__39371__$1 = (((((!((map__39371 == null))))?(((((map__39371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39371):map__39371);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39371__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__39371,map__39371__$1,sources,map__39368,map__39368__$1,msg,type,info){
return (function (p1__39365_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__39365_SHARP_));
});})(map__39371,map__39371__$1,sources,map__39368,map__39368__$1,msg,type,info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827),sources)));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

if(shadow.cljs.devtools.client.hud.show_warnings){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","10000","0px","flex","fixed","monospace","column","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),shadow.cljs.devtools.client.hud.hud_hide], null)], null),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),(function (){var iter__4523__auto__ = ((function (map__39371,map__39371__$1,sources,sources_with_warnings,map__39368,map__39368__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__39374(s__39375){
return (new cljs.core.LazySeq(null,((function (map__39371,map__39371__$1,sources,sources_with_warnings,map__39368,map__39368__$1,msg,type,info){
return (function (){
var s__39375__$1 = s__39375;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__39375__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__39380 = cljs.core.first(xs__6292__auto__);
var map__39380__$1 = (((((!((map__39380 == null))))?(((((map__39380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39380):map__39380);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39380__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4519__auto__ = ((function (s__39375__$1,map__39380,map__39380__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__39371,map__39371__$1,sources,sources_with_warnings,map__39368,map__39368__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__39374_$_iter__39376(s__39377){
return (new cljs.core.LazySeq(null,((function (s__39375__$1,map__39380,map__39380__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__39371,map__39371__$1,sources,sources_with_warnings,map__39368,map__39368__$1,msg,type,info){
return (function (){
var s__39377__$1 = s__39377;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__39377__$1);
if(temp__5735__auto____$1){
var s__39377__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__39377__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__39377__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__39379 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__39378 = (0);
while(true){
if((i__39378 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__39378);
cljs.core.chunk_append(b__39379,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__39436 = (i__39378 + (1));
i__39378 = G__39436;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39379),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__39374_$_iter__39376(cljs.core.chunk_rest(s__39377__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39379),null);
}
} else {
var warning = cljs.core.first(s__39377__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__39374_$_iter__39376(cljs.core.rest(s__39377__$2)));
}
} else {
return null;
}
break;
}
});})(s__39375__$1,map__39380,map__39380__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__39371,map__39371__$1,sources,sources_with_warnings,map__39368,map__39368__$1,msg,type,info))
,null,null));
});})(s__39375__$1,map__39380,map__39380__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__39371,map__39371__$1,sources,sources_with_warnings,map__39368,map__39368__$1,msg,type,info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__39374(cljs.core.rest(s__39375__$1)));
} else {
var G__39437 = cljs.core.rest(s__39375__$1);
s__39375__$1 = G__39437;
continue;
}
} else {
return null;
}
break;
}
});})(map__39371,map__39371__$1,sources,sources_with_warnings,map__39368,map__39368__$1,msg,type,info))
,null,null));
});})(map__39371,map__39371__$1,sources,sources_with_warnings,map__39368,map__39368__$1,msg,type,info))
;
return iter__4523__auto__(sources_with_warnings);
})()], null)], null));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__39383){
var map__39384 = p__39383;
var map__39384__$1 = (((((!((map__39384 == null))))?(((((map__39384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39384):map__39384);
var msg = map__39384__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39384__$1,new cljs.core.Keyword(null,"report","report",1394055010));
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","10000","20px","0px","fixed","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var x = temp__5739__auto__;
return shadow.dom.remove(x);
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_failure = (function shadow$cljs$devtools$client$hud$load_failure(error,task,remaining){
shadow.cljs.devtools.client.hud.load_end();

console.error("reload-failed",error);

return shadow.cljs.devtools.client.hud.connection_error(["[reload failed] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)].join(''));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
