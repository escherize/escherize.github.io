// Compiled by ClojureScript 0.0-3211 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__23414__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__23414__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__33361_33369 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__33362_33370 = null;
var count__33363_33371 = (0);
var i__33364_33372 = (0);
while(true){
if((i__33364_33372 < count__33363_33371)){
var k_33373 = cljs.core._nth.call(null,chunk__33362_33370,i__33364_33372);
e.setAttribute(cljs.core.name.call(null,k_33373),cljs.core.get.call(null,attrs,k_33373));

var G__33374 = seq__33361_33369;
var G__33375 = chunk__33362_33370;
var G__33376 = count__33363_33371;
var G__33377 = (i__33364_33372 + (1));
seq__33361_33369 = G__33374;
chunk__33362_33370 = G__33375;
count__33363_33371 = G__33376;
i__33364_33372 = G__33377;
continue;
} else {
var temp__4126__auto___33378 = cljs.core.seq.call(null,seq__33361_33369);
if(temp__4126__auto___33378){
var seq__33361_33379__$1 = temp__4126__auto___33378;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33361_33379__$1)){
var c__23159__auto___33380 = cljs.core.chunk_first.call(null,seq__33361_33379__$1);
var G__33381 = cljs.core.chunk_rest.call(null,seq__33361_33379__$1);
var G__33382 = c__23159__auto___33380;
var G__33383 = cljs.core.count.call(null,c__23159__auto___33380);
var G__33384 = (0);
seq__33361_33369 = G__33381;
chunk__33362_33370 = G__33382;
count__33363_33371 = G__33383;
i__33364_33372 = G__33384;
continue;
} else {
var k_33385 = cljs.core.first.call(null,seq__33361_33379__$1);
e.setAttribute(cljs.core.name.call(null,k_33385),cljs.core.get.call(null,attrs,k_33385));

var G__33386 = cljs.core.next.call(null,seq__33361_33379__$1);
var G__33387 = null;
var G__33388 = (0);
var G__33389 = (0);
seq__33361_33369 = G__33386;
chunk__33362_33370 = G__33387;
count__33363_33371 = G__33388;
i__33364_33372 = G__33389;
continue;
}
} else {
}
}
break;
}

var seq__33365_33390 = cljs.core.seq.call(null,children);
var chunk__33366_33391 = null;
var count__33367_33392 = (0);
var i__33368_33393 = (0);
while(true){
if((i__33368_33393 < count__33367_33392)){
var ch_33394 = cljs.core._nth.call(null,chunk__33366_33391,i__33368_33393);
e.appendChild(ch_33394);

var G__33395 = seq__33365_33390;
var G__33396 = chunk__33366_33391;
var G__33397 = count__33367_33392;
var G__33398 = (i__33368_33393 + (1));
seq__33365_33390 = G__33395;
chunk__33366_33391 = G__33396;
count__33367_33392 = G__33397;
i__33368_33393 = G__33398;
continue;
} else {
var temp__4126__auto___33399 = cljs.core.seq.call(null,seq__33365_33390);
if(temp__4126__auto___33399){
var seq__33365_33400__$1 = temp__4126__auto___33399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33365_33400__$1)){
var c__23159__auto___33401 = cljs.core.chunk_first.call(null,seq__33365_33400__$1);
var G__33402 = cljs.core.chunk_rest.call(null,seq__33365_33400__$1);
var G__33403 = c__23159__auto___33401;
var G__33404 = cljs.core.count.call(null,c__23159__auto___33401);
var G__33405 = (0);
seq__33365_33390 = G__33402;
chunk__33366_33391 = G__33403;
count__33367_33392 = G__33404;
i__33368_33393 = G__33405;
continue;
} else {
var ch_33406 = cljs.core.first.call(null,seq__33365_33400__$1);
e.appendChild(ch_33406);

var G__33407 = cljs.core.next.call(null,seq__33365_33400__$1);
var G__33408 = null;
var G__33409 = (0);
var G__33410 = (0);
seq__33365_33390 = G__33407;
chunk__33366_33391 = G__33408;
count__33367_33392 = G__33409;
i__33368_33393 = G__33410;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq33358){
var G__33359 = cljs.core.first.call(null,seq33358);
var seq33358__$1 = cljs.core.next.call(null,seq33358);
var G__33360 = cljs.core.first.call(null,seq33358__$1);
var seq33358__$2 = cljs.core.next.call(null,seq33358__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__33359,G__33360,seq33358__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__23269__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__23270__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__23271__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__23272__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__23273__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__23269__auto__,prefer_table__23270__auto__,method_cache__23271__auto__,cached_hierarchy__23272__auto__,hierarchy__23273__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__23269__auto__,prefer_table__23270__auto__,method_cache__23271__auto__,cached_hierarchy__23272__auto__,hierarchy__23273__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__23273__auto__,method_table__23269__auto__,prefer_table__23270__auto__,method_cache__23271__auto__,cached_hierarchy__23272__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_33411 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_33411.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_33411.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_33411.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_33411);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__33412,st_map){
var map__33416 = p__33412;
var map__33416__$1 = ((cljs.core.seq_QMARK_.call(null,map__33416))?cljs.core.apply.call(null,cljs.core.hash_map,map__33416):map__33416);
var container_el = cljs.core.get.call(null,map__33416__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__33416,map__33416__$1,container_el){
return (function (p__33417){
var vec__33418 = p__33417;
var k = cljs.core.nth.call(null,vec__33418,(0),null);
var v = cljs.core.nth.call(null,vec__33418,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__33416,map__33416__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__33419,dom_str){
var map__33421 = p__33419;
var map__33421__$1 = ((cljs.core.seq_QMARK_.call(null,map__33421))?cljs.core.apply.call(null,cljs.core.hash_map,map__33421):map__33421);
var c = map__33421__$1;
var content_area_el = cljs.core.get.call(null,map__33421__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__33422){
var map__33424 = p__33422;
var map__33424__$1 = ((cljs.core.seq_QMARK_.call(null,map__33424))?cljs.core.apply.call(null,cljs.core.hash_map,map__33424):map__33424);
var content_area_el = cljs.core.get.call(null,map__33424__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__25598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto__){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto__){
return (function (state_33466){
var state_val_33467 = (state_33466[(1)]);
if((state_val_33467 === (2))){
var inst_33451 = (state_33466[(7)]);
var inst_33460 = (state_33466[(2)]);
var inst_33461 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_33462 = ["auto"];
var inst_33463 = cljs.core.PersistentHashMap.fromArrays(inst_33461,inst_33462);
var inst_33464 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33451,inst_33463);
var state_33466__$1 = (function (){var statearr_33468 = state_33466;
(statearr_33468[(8)] = inst_33460);

return statearr_33468;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33466__$1,inst_33464);
} else {
if((state_val_33467 === (1))){
var inst_33451 = (state_33466[(7)]);
var inst_33451__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_33452 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_33453 = ["10px","10px","100%","68px","1.0"];
var inst_33454 = cljs.core.PersistentHashMap.fromArrays(inst_33452,inst_33453);
var inst_33455 = cljs.core.merge.call(null,inst_33454,style);
var inst_33456 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33451__$1,inst_33455);
var inst_33457 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_33451__$1,msg);
var inst_33458 = cljs.core.async.timeout.call(null,(300));
var state_33466__$1 = (function (){var statearr_33469 = state_33466;
(statearr_33469[(7)] = inst_33451__$1);

(statearr_33469[(9)] = inst_33456);

(statearr_33469[(10)] = inst_33457);

return statearr_33469;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33466__$1,(2),inst_33458);
} else {
return null;
}
}
});})(c__25598__auto__))
;
return ((function (switch__25536__auto__,c__25598__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__25537__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__25537__auto____0 = (function (){
var statearr_33473 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33473[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__25537__auto__);

(statearr_33473[(1)] = (1));

return statearr_33473;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__25537__auto____1 = (function (state_33466){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_33466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e33474){if((e33474 instanceof Object)){
var ex__25540__auto__ = e33474;
var statearr_33475_33477 = state_33466;
(statearr_33475_33477[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33478 = state_33466;
state_33466 = G__33478;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__25537__auto__ = function(state_33466){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__25537__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__25537__auto____1.call(this,state_33466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__25537__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__25537__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto__))
})();
var state__25600__auto__ = (function (){var statearr_33476 = f__25599__auto__.call(null);
(statearr_33476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto__);

return statearr_33476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto__))
);

return c__25598__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__33480 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__33480,(0),null);
var ln = cljs.core.nth.call(null,vec__33480,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__33483 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__33483,(0),null);
var file_line = cljs.core.nth.call(null,vec__33483,(1),null);
var file_column = cljs.core.nth.call(null,vec__33483,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__33483,file_name,file_line,file_column){
return (function (p1__33481_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__33481_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__33483,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__22374__auto__ = file_line;
if(cljs.core.truth_(or__22374__auto__)){
return or__22374__auto__;
} else {
var and__22362__auto__ = cause;
if(cljs.core.truth_(and__22362__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__22362__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__33485 = figwheel.client.heads_up.ensure_container.call(null);
var map__33485__$1 = ((cljs.core.seq_QMARK_.call(null,map__33485))?cljs.core.apply.call(null,cljs.core.hash_map,map__33485):map__33485);
var content_area_el = cljs.core.get.call(null,map__33485__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__25598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto__){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto__){
return (function (state_33532){
var state_val_33533 = (state_33532[(1)]);
if((state_val_33533 === (3))){
var inst_33515 = (state_33532[(7)]);
var inst_33529 = (state_33532[(2)]);
var inst_33530 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_33515,"");
var state_33532__$1 = (function (){var statearr_33534 = state_33532;
(statearr_33534[(8)] = inst_33529);

return statearr_33534;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33532__$1,inst_33530);
} else {
if((state_val_33533 === (2))){
var inst_33515 = (state_33532[(7)]);
var inst_33522 = (state_33532[(2)]);
var inst_33523 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_33524 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_33525 = cljs.core.PersistentHashMap.fromArrays(inst_33523,inst_33524);
var inst_33526 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33515,inst_33525);
var inst_33527 = cljs.core.async.timeout.call(null,(200));
var state_33532__$1 = (function (){var statearr_33535 = state_33532;
(statearr_33535[(9)] = inst_33526);

(statearr_33535[(10)] = inst_33522);

return statearr_33535;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33532__$1,(3),inst_33527);
} else {
if((state_val_33533 === (1))){
var inst_33515 = (state_33532[(7)]);
var inst_33515__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_33516 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_33517 = ["0.0"];
var inst_33518 = cljs.core.PersistentHashMap.fromArrays(inst_33516,inst_33517);
var inst_33519 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_33515__$1,inst_33518);
var inst_33520 = cljs.core.async.timeout.call(null,(300));
var state_33532__$1 = (function (){var statearr_33536 = state_33532;
(statearr_33536[(11)] = inst_33519);

(statearr_33536[(7)] = inst_33515__$1);

return statearr_33536;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33532__$1,(2),inst_33520);
} else {
return null;
}
}
}
});})(c__25598__auto__))
;
return ((function (switch__25536__auto__,c__25598__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__25537__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__25537__auto____0 = (function (){
var statearr_33540 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33540[(0)] = figwheel$client$heads_up$clear_$_state_machine__25537__auto__);

(statearr_33540[(1)] = (1));

return statearr_33540;
});
var figwheel$client$heads_up$clear_$_state_machine__25537__auto____1 = (function (state_33532){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_33532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e33541){if((e33541 instanceof Object)){
var ex__25540__auto__ = e33541;
var statearr_33542_33544 = state_33532;
(statearr_33542_33544[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33545 = state_33532;
state_33532 = G__33545;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__25537__auto__ = function(state_33532){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__25537__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__25537__auto____1.call(this,state_33532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__25537__auto____0;
figwheel$client$heads_up$clear_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__25537__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto__))
})();
var state__25600__auto__ = (function (){var statearr_33543 = f__25599__auto__.call(null);
(statearr_33543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto__);

return statearr_33543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto__))
);

return c__25598__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__25598__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25598__auto__){
return (function (){
var f__25599__auto__ = (function (){var switch__25536__auto__ = ((function (c__25598__auto__){
return (function (state_33577){
var state_val_33578 = (state_33577[(1)]);
if((state_val_33578 === (4))){
var inst_33575 = (state_33577[(2)]);
var state_33577__$1 = state_33577;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33577__$1,inst_33575);
} else {
if((state_val_33578 === (3))){
var inst_33572 = (state_33577[(2)]);
var inst_33573 = figwheel.client.heads_up.clear.call(null);
var state_33577__$1 = (function (){var statearr_33579 = state_33577;
(statearr_33579[(7)] = inst_33572);

return statearr_33579;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33577__$1,(4),inst_33573);
} else {
if((state_val_33578 === (2))){
var inst_33569 = (state_33577[(2)]);
var inst_33570 = cljs.core.async.timeout.call(null,(400));
var state_33577__$1 = (function (){var statearr_33580 = state_33577;
(statearr_33580[(8)] = inst_33569);

return statearr_33580;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33577__$1,(3),inst_33570);
} else {
if((state_val_33578 === (1))){
var inst_33567 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_33577__$1 = state_33577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33577__$1,(2),inst_33567);
} else {
return null;
}
}
}
}
});})(c__25598__auto__))
;
return ((function (switch__25536__auto__,c__25598__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__25537__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__25537__auto____0 = (function (){
var statearr_33584 = [null,null,null,null,null,null,null,null,null];
(statearr_33584[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__25537__auto__);

(statearr_33584[(1)] = (1));

return statearr_33584;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__25537__auto____1 = (function (state_33577){
while(true){
var ret_value__25538__auto__ = (function (){try{while(true){
var result__25539__auto__ = switch__25536__auto__.call(null,state_33577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25539__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25539__auto__;
}
break;
}
}catch (e33585){if((e33585 instanceof Object)){
var ex__25540__auto__ = e33585;
var statearr_33586_33588 = state_33577;
(statearr_33586_33588[(5)] = ex__25540__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25538__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33589 = state_33577;
state_33577 = G__33589;
continue;
} else {
return ret_value__25538__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__25537__auto__ = function(state_33577){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__25537__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__25537__auto____1.call(this,state_33577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__25537__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__25537__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__25537__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__25537__auto__;
})()
;})(switch__25536__auto__,c__25598__auto__))
})();
var state__25600__auto__ = (function (){var statearr_33587 = f__25599__auto__.call(null);
(statearr_33587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25598__auto__);

return statearr_33587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25600__auto__);
});})(c__25598__auto__))
);

return c__25598__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1436273479516