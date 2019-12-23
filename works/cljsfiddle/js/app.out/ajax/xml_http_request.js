// Compiled by ClojureScript 1.8.34 {:static-fns true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__15572,handler){
var map__15573 = p__15572;
var map__15573__$1 = ((((!((map__15573 == null)))?((((map__15573.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15573.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15573):map__15573);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15573__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__15573__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15573__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__15573,map__15573__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__15571_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__15571_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__15573,map__15573__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___15581 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___15581)){
var response_type_15582 = temp__4425__auto___15581;
this$__$1.responseType = cljs.core.name(response_type_15582);
} else {
}

var seq__15575_15583 = cljs.core.seq(headers);
var chunk__15576_15584 = null;
var count__15577_15585 = (0);
var i__15578_15586 = (0);
while(true){
if((i__15578_15586 < count__15577_15585)){
var vec__15579_15587 = chunk__15576_15584.cljs$core$IIndexed$_nth$arity$2(null,i__15578_15586);
var k_15588 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15579_15587,(0),null);
var v_15589 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15579_15587,(1),null);
this$__$1.setRequestHeader(k_15588,v_15589);

var G__15590 = seq__15575_15583;
var G__15591 = chunk__15576_15584;
var G__15592 = count__15577_15585;
var G__15593 = (i__15578_15586 + (1));
seq__15575_15583 = G__15590;
chunk__15576_15584 = G__15591;
count__15577_15585 = G__15592;
i__15578_15586 = G__15593;
continue;
} else {
var temp__4425__auto___15594 = cljs.core.seq(seq__15575_15583);
if(temp__4425__auto___15594){
var seq__15575_15595__$1 = temp__4425__auto___15594;
if(cljs.core.chunked_seq_QMARK_(seq__15575_15595__$1)){
var c__7320__auto___15596 = cljs.core.chunk_first(seq__15575_15595__$1);
var G__15597 = cljs.core.chunk_rest(seq__15575_15595__$1);
var G__15598 = c__7320__auto___15596;
var G__15599 = cljs.core.count(c__7320__auto___15596);
var G__15600 = (0);
seq__15575_15583 = G__15597;
chunk__15576_15584 = G__15598;
count__15577_15585 = G__15599;
i__15578_15586 = G__15600;
continue;
} else {
var vec__15580_15601 = cljs.core.first(seq__15575_15595__$1);
var k_15602 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15580_15601,(0),null);
var v_15603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15580_15601,(1),null);
this$__$1.setRequestHeader(k_15602,v_15603);

var G__15604 = cljs.core.next(seq__15575_15595__$1);
var G__15605 = null;
var G__15606 = (0);
var G__15607 = (0);
seq__15575_15583 = G__15604;
chunk__15576_15584 = G__15605;
count__15577_15585 = G__15606;
i__15578_15586 = G__15607;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6509__auto__ = body;
if(cljs.core.truth_(or__6509__auto__)){
return or__6509__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
