goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35499 = coll;
var G__35500 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35499,G__35500) : shadow.dom.lazy_native_coll_seq.call(null,G__35499,G__35500));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35531 = arguments.length;
switch (G__35531) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35539 = arguments.length;
switch (G__35539) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35545 = arguments.length;
switch (G__35545) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35554 = arguments.length;
switch (G__35554) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35563 = arguments.length;
switch (G__35563) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__35566 = document;
var G__35567 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35566,G__35567);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__35570 = shadow.dom.dom_node(parent);
var G__35571 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35570,G__35571);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__35572 = shadow.dom.dom_node(el);
var G__35573 = cls;
return goog.dom.classlist.add(G__35572,G__35573);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__35575 = shadow.dom.dom_node(el);
var G__35576 = cls;
return goog.dom.classlist.remove(G__35575,G__35576);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35579 = arguments.length;
switch (G__35579) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__35584 = shadow.dom.dom_node(el);
var G__35585 = cls;
return goog.dom.classlist.toggle(G__35584,G__35585);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35590){if((e35590 instanceof Object)){
var e = e35590;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35590;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35593 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35594 = null;
var count__35595 = (0);
var i__35596 = (0);
while(true){
if((i__35596 < count__35595)){
var el = chunk__35594.cljs$core$IIndexed$_nth$arity$2(null,i__35596);
var handler_36360__$1 = ((function (seq__35593,chunk__35594,count__35595,i__35596,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35593,chunk__35594,count__35595,i__35596,el))
;
var G__35606_36362 = el;
var G__35607_36363 = cljs.core.name(ev);
var G__35608_36364 = handler_36360__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35606_36362,G__35607_36363,G__35608_36364) : shadow.dom.dom_listen.call(null,G__35606_36362,G__35607_36363,G__35608_36364));


var G__36365 = seq__35593;
var G__36366 = chunk__35594;
var G__36367 = count__35595;
var G__36368 = (i__35596 + (1));
seq__35593 = G__36365;
chunk__35594 = G__36366;
count__35595 = G__36367;
i__35596 = G__36368;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35593);
if(temp__5735__auto__){
var seq__35593__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35593__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35593__$1);
var G__36376 = cljs.core.chunk_rest(seq__35593__$1);
var G__36377 = c__4550__auto__;
var G__36378 = cljs.core.count(c__4550__auto__);
var G__36379 = (0);
seq__35593 = G__36376;
chunk__35594 = G__36377;
count__35595 = G__36378;
i__35596 = G__36379;
continue;
} else {
var el = cljs.core.first(seq__35593__$1);
var handler_36387__$1 = ((function (seq__35593,chunk__35594,count__35595,i__35596,el,seq__35593__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35593,chunk__35594,count__35595,i__35596,el,seq__35593__$1,temp__5735__auto__))
;
var G__35611_36388 = el;
var G__35612_36389 = cljs.core.name(ev);
var G__35613_36390 = handler_36387__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35611_36388,G__35612_36389,G__35613_36390) : shadow.dom.dom_listen.call(null,G__35611_36388,G__35612_36389,G__35613_36390));


var G__36391 = cljs.core.next(seq__35593__$1);
var G__36392 = null;
var G__36393 = (0);
var G__36394 = (0);
seq__35593 = G__36391;
chunk__35594 = G__36392;
count__35595 = G__36393;
i__35596 = G__36394;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35619 = arguments.length;
switch (G__35619) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__35630 = shadow.dom.dom_node(el);
var G__35631 = cljs.core.name(ev);
var G__35632 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35630,G__35631,G__35632) : shadow.dom.dom_listen.call(null,G__35630,G__35631,G__35632));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__35637 = shadow.dom.dom_node(el);
var G__35638 = cljs.core.name(ev);
var G__35639 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__35637,G__35638,G__35639) : shadow.dom.dom_listen_remove.call(null,G__35637,G__35638,G__35639));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35641 = cljs.core.seq(events);
var chunk__35642 = null;
var count__35643 = (0);
var i__35644 = (0);
while(true){
if((i__35644 < count__35643)){
var vec__35656 = chunk__35642.cljs$core$IIndexed$_nth$arity$2(null,i__35644);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35656,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35656,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36411 = seq__35641;
var G__36412 = chunk__35642;
var G__36413 = count__35643;
var G__36414 = (i__35644 + (1));
seq__35641 = G__36411;
chunk__35642 = G__36412;
count__35643 = G__36413;
i__35644 = G__36414;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35641);
if(temp__5735__auto__){
var seq__35641__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35641__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35641__$1);
var G__36417 = cljs.core.chunk_rest(seq__35641__$1);
var G__36418 = c__4550__auto__;
var G__36419 = cljs.core.count(c__4550__auto__);
var G__36420 = (0);
seq__35641 = G__36417;
chunk__35642 = G__36418;
count__35643 = G__36419;
i__35644 = G__36420;
continue;
} else {
var vec__35660 = cljs.core.first(seq__35641__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35660,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35660,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36424 = cljs.core.next(seq__35641__$1);
var G__36425 = null;
var G__36426 = (0);
var G__36427 = (0);
seq__35641 = G__36424;
chunk__35642 = G__36425;
count__35643 = G__36426;
i__35644 = G__36427;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35667 = cljs.core.seq(styles);
var chunk__35668 = null;
var count__35669 = (0);
var i__35670 = (0);
while(true){
if((i__35670 < count__35669)){
var vec__35688 = chunk__35668.cljs$core$IIndexed$_nth$arity$2(null,i__35670);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35688,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35688,(1),null);
var G__35692_36432 = dom;
var G__35693_36433 = cljs.core.name(k);
var G__35694_36434 = (((v == null))?"":v);
goog.style.setStyle(G__35692_36432,G__35693_36433,G__35694_36434);


var G__36436 = seq__35667;
var G__36437 = chunk__35668;
var G__36438 = count__35669;
var G__36439 = (i__35670 + (1));
seq__35667 = G__36436;
chunk__35668 = G__36437;
count__35669 = G__36438;
i__35670 = G__36439;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35667);
if(temp__5735__auto__){
var seq__35667__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35667__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35667__$1);
var G__36440 = cljs.core.chunk_rest(seq__35667__$1);
var G__36441 = c__4550__auto__;
var G__36442 = cljs.core.count(c__4550__auto__);
var G__36443 = (0);
seq__35667 = G__36440;
chunk__35668 = G__36441;
count__35669 = G__36442;
i__35670 = G__36443;
continue;
} else {
var vec__35697 = cljs.core.first(seq__35667__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35697,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35697,(1),null);
var G__35702_36444 = dom;
var G__35703_36445 = cljs.core.name(k);
var G__35704_36446 = (((v == null))?"":v);
goog.style.setStyle(G__35702_36444,G__35703_36445,G__35704_36446);


var G__36450 = cljs.core.next(seq__35667__$1);
var G__36451 = null;
var G__36452 = (0);
var G__36453 = (0);
seq__35667 = G__36450;
chunk__35668 = G__36451;
count__35669 = G__36452;
i__35670 = G__36453;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35708_36454 = key;
var G__35708_36455__$1 = (((G__35708_36454 instanceof cljs.core.Keyword))?G__35708_36454.fqn:null);
switch (G__35708_36455__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36463 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_36463,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_36463,"aria-");
}
})())){
el.setAttribute(ks_36463,value);
} else {
(el[ks_36463] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__35733 = shadow.dom.dom_node(el);
var G__35734 = cls;
return goog.dom.classlist.contains(G__35733,G__35734);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35755){
var map__35757 = p__35755;
var map__35757__$1 = (((((!((map__35757 == null))))?(((((map__35757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35757):map__35757);
var props = map__35757__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35757__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35761 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35761,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35766 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35766,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35766;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35774 = arguments.length;
switch (G__35774) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35795){
var vec__35797 = p__35795;
var seq__35798 = cljs.core.seq(vec__35797);
var first__35799 = cljs.core.first(seq__35798);
var seq__35798__$1 = cljs.core.next(seq__35798);
var nn = first__35799;
var first__35799__$1 = cljs.core.first(seq__35798__$1);
var seq__35798__$2 = cljs.core.next(seq__35798__$1);
var np = first__35799__$1;
var nc = seq__35798__$2;
var node = vec__35797;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35802 = nn;
var G__35803 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35802,G__35803) : create_fn.call(null,G__35802,G__35803));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35808 = nn;
var G__35809 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35808,G__35809) : create_fn.call(null,G__35808,G__35809));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35813 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35813,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35813,(1),null);
var seq__35818_36481 = cljs.core.seq(node_children);
var chunk__35819_36482 = null;
var count__35820_36483 = (0);
var i__35821_36484 = (0);
while(true){
if((i__35821_36484 < count__35820_36483)){
var child_struct_36485 = chunk__35819_36482.cljs$core$IIndexed$_nth$arity$2(null,i__35821_36484);
var children_36486 = shadow.dom.dom_node(child_struct_36485);
if(cljs.core.seq_QMARK_(children_36486)){
var seq__35866_36487 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36486));
var chunk__35868_36488 = null;
var count__35869_36489 = (0);
var i__35870_36490 = (0);
while(true){
if((i__35870_36490 < count__35869_36489)){
var child_36491 = chunk__35868_36488.cljs$core$IIndexed$_nth$arity$2(null,i__35870_36490);
if(cljs.core.truth_(child_36491)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36491);


var G__36492 = seq__35866_36487;
var G__36493 = chunk__35868_36488;
var G__36494 = count__35869_36489;
var G__36495 = (i__35870_36490 + (1));
seq__35866_36487 = G__36492;
chunk__35868_36488 = G__36493;
count__35869_36489 = G__36494;
i__35870_36490 = G__36495;
continue;
} else {
var G__36496 = seq__35866_36487;
var G__36497 = chunk__35868_36488;
var G__36498 = count__35869_36489;
var G__36499 = (i__35870_36490 + (1));
seq__35866_36487 = G__36496;
chunk__35868_36488 = G__36497;
count__35869_36489 = G__36498;
i__35870_36490 = G__36499;
continue;
}
} else {
var temp__5735__auto___36500 = cljs.core.seq(seq__35866_36487);
if(temp__5735__auto___36500){
var seq__35866_36501__$1 = temp__5735__auto___36500;
if(cljs.core.chunked_seq_QMARK_(seq__35866_36501__$1)){
var c__4550__auto___36505 = cljs.core.chunk_first(seq__35866_36501__$1);
var G__36506 = cljs.core.chunk_rest(seq__35866_36501__$1);
var G__36507 = c__4550__auto___36505;
var G__36508 = cljs.core.count(c__4550__auto___36505);
var G__36509 = (0);
seq__35866_36487 = G__36506;
chunk__35868_36488 = G__36507;
count__35869_36489 = G__36508;
i__35870_36490 = G__36509;
continue;
} else {
var child_36510 = cljs.core.first(seq__35866_36501__$1);
if(cljs.core.truth_(child_36510)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36510);


var G__36511 = cljs.core.next(seq__35866_36501__$1);
var G__36512 = null;
var G__36513 = (0);
var G__36514 = (0);
seq__35866_36487 = G__36511;
chunk__35868_36488 = G__36512;
count__35869_36489 = G__36513;
i__35870_36490 = G__36514;
continue;
} else {
var G__36515 = cljs.core.next(seq__35866_36501__$1);
var G__36516 = null;
var G__36517 = (0);
var G__36518 = (0);
seq__35866_36487 = G__36515;
chunk__35868_36488 = G__36516;
count__35869_36489 = G__36517;
i__35870_36490 = G__36518;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36486);
}


var G__36519 = seq__35818_36481;
var G__36520 = chunk__35819_36482;
var G__36521 = count__35820_36483;
var G__36522 = (i__35821_36484 + (1));
seq__35818_36481 = G__36519;
chunk__35819_36482 = G__36520;
count__35820_36483 = G__36521;
i__35821_36484 = G__36522;
continue;
} else {
var temp__5735__auto___36526 = cljs.core.seq(seq__35818_36481);
if(temp__5735__auto___36526){
var seq__35818_36527__$1 = temp__5735__auto___36526;
if(cljs.core.chunked_seq_QMARK_(seq__35818_36527__$1)){
var c__4550__auto___36528 = cljs.core.chunk_first(seq__35818_36527__$1);
var G__36529 = cljs.core.chunk_rest(seq__35818_36527__$1);
var G__36530 = c__4550__auto___36528;
var G__36531 = cljs.core.count(c__4550__auto___36528);
var G__36532 = (0);
seq__35818_36481 = G__36529;
chunk__35819_36482 = G__36530;
count__35820_36483 = G__36531;
i__35821_36484 = G__36532;
continue;
} else {
var child_struct_36534 = cljs.core.first(seq__35818_36527__$1);
var children_36535 = shadow.dom.dom_node(child_struct_36534);
if(cljs.core.seq_QMARK_(children_36535)){
var seq__35875_36536 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36535));
var chunk__35877_36537 = null;
var count__35878_36538 = (0);
var i__35879_36539 = (0);
while(true){
if((i__35879_36539 < count__35878_36538)){
var child_36542 = chunk__35877_36537.cljs$core$IIndexed$_nth$arity$2(null,i__35879_36539);
if(cljs.core.truth_(child_36542)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36542);


var G__36543 = seq__35875_36536;
var G__36544 = chunk__35877_36537;
var G__36545 = count__35878_36538;
var G__36546 = (i__35879_36539 + (1));
seq__35875_36536 = G__36543;
chunk__35877_36537 = G__36544;
count__35878_36538 = G__36545;
i__35879_36539 = G__36546;
continue;
} else {
var G__36547 = seq__35875_36536;
var G__36548 = chunk__35877_36537;
var G__36549 = count__35878_36538;
var G__36550 = (i__35879_36539 + (1));
seq__35875_36536 = G__36547;
chunk__35877_36537 = G__36548;
count__35878_36538 = G__36549;
i__35879_36539 = G__36550;
continue;
}
} else {
var temp__5735__auto___36551__$1 = cljs.core.seq(seq__35875_36536);
if(temp__5735__auto___36551__$1){
var seq__35875_36552__$1 = temp__5735__auto___36551__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35875_36552__$1)){
var c__4550__auto___36553 = cljs.core.chunk_first(seq__35875_36552__$1);
var G__36554 = cljs.core.chunk_rest(seq__35875_36552__$1);
var G__36555 = c__4550__auto___36553;
var G__36556 = cljs.core.count(c__4550__auto___36553);
var G__36557 = (0);
seq__35875_36536 = G__36554;
chunk__35877_36537 = G__36555;
count__35878_36538 = G__36556;
i__35879_36539 = G__36557;
continue;
} else {
var child_36560 = cljs.core.first(seq__35875_36552__$1);
if(cljs.core.truth_(child_36560)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36560);


var G__36561 = cljs.core.next(seq__35875_36552__$1);
var G__36562 = null;
var G__36563 = (0);
var G__36564 = (0);
seq__35875_36536 = G__36561;
chunk__35877_36537 = G__36562;
count__35878_36538 = G__36563;
i__35879_36539 = G__36564;
continue;
} else {
var G__36565 = cljs.core.next(seq__35875_36552__$1);
var G__36566 = null;
var G__36567 = (0);
var G__36568 = (0);
seq__35875_36536 = G__36565;
chunk__35877_36537 = G__36566;
count__35878_36538 = G__36567;
i__35879_36539 = G__36568;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36535);
}


var G__36569 = cljs.core.next(seq__35818_36527__$1);
var G__36570 = null;
var G__36572 = (0);
var G__36573 = (0);
seq__35818_36481 = G__36569;
chunk__35819_36482 = G__36570;
count__35820_36483 = G__36572;
i__35821_36484 = G__36573;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__35884 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35884);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35886 = cljs.core.seq(node);
var chunk__35887 = null;
var count__35888 = (0);
var i__35889 = (0);
while(true){
if((i__35889 < count__35888)){
var n = chunk__35887.cljs$core$IIndexed$_nth$arity$2(null,i__35889);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36585 = seq__35886;
var G__36586 = chunk__35887;
var G__36587 = count__35888;
var G__36588 = (i__35889 + (1));
seq__35886 = G__36585;
chunk__35887 = G__36586;
count__35888 = G__36587;
i__35889 = G__36588;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35886);
if(temp__5735__auto__){
var seq__35886__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35886__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35886__$1);
var G__36589 = cljs.core.chunk_rest(seq__35886__$1);
var G__36590 = c__4550__auto__;
var G__36591 = cljs.core.count(c__4550__auto__);
var G__36592 = (0);
seq__35886 = G__36589;
chunk__35887 = G__36590;
count__35888 = G__36591;
i__35889 = G__36592;
continue;
} else {
var n = cljs.core.first(seq__35886__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36593 = cljs.core.next(seq__35886__$1);
var G__36594 = null;
var G__36595 = (0);
var G__36596 = (0);
seq__35886 = G__36593;
chunk__35887 = G__36594;
count__35888 = G__36595;
i__35889 = G__36596;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__35900 = shadow.dom.dom_node(new$);
var G__35901 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35900,G__35901);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35908 = arguments.length;
switch (G__35908) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35918 = arguments.length;
switch (G__35918) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35940 = arguments.length;
switch (G__35940) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36620 = arguments.length;
var i__4731__auto___36621 = (0);
while(true){
if((i__4731__auto___36621 < len__4730__auto___36620)){
args__4736__auto__.push((arguments[i__4731__auto___36621]));

var G__36624 = (i__4731__auto___36621 + (1));
i__4731__auto___36621 = G__36624;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35977_36625 = cljs.core.seq(nodes);
var chunk__35978_36626 = null;
var count__35979_36627 = (0);
var i__35980_36628 = (0);
while(true){
if((i__35980_36628 < count__35979_36627)){
var node_36629 = chunk__35978_36626.cljs$core$IIndexed$_nth$arity$2(null,i__35980_36628);
fragment.appendChild(shadow.dom._to_dom(node_36629));


var G__36630 = seq__35977_36625;
var G__36631 = chunk__35978_36626;
var G__36632 = count__35979_36627;
var G__36633 = (i__35980_36628 + (1));
seq__35977_36625 = G__36630;
chunk__35978_36626 = G__36631;
count__35979_36627 = G__36632;
i__35980_36628 = G__36633;
continue;
} else {
var temp__5735__auto___36634 = cljs.core.seq(seq__35977_36625);
if(temp__5735__auto___36634){
var seq__35977_36635__$1 = temp__5735__auto___36634;
if(cljs.core.chunked_seq_QMARK_(seq__35977_36635__$1)){
var c__4550__auto___36636 = cljs.core.chunk_first(seq__35977_36635__$1);
var G__36637 = cljs.core.chunk_rest(seq__35977_36635__$1);
var G__36638 = c__4550__auto___36636;
var G__36639 = cljs.core.count(c__4550__auto___36636);
var G__36640 = (0);
seq__35977_36625 = G__36637;
chunk__35978_36626 = G__36638;
count__35979_36627 = G__36639;
i__35980_36628 = G__36640;
continue;
} else {
var node_36641 = cljs.core.first(seq__35977_36635__$1);
fragment.appendChild(shadow.dom._to_dom(node_36641));


var G__36642 = cljs.core.next(seq__35977_36635__$1);
var G__36643 = null;
var G__36644 = (0);
var G__36645 = (0);
seq__35977_36625 = G__36642;
chunk__35978_36626 = G__36643;
count__35979_36627 = G__36644;
i__35980_36628 = G__36645;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq35972){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35972));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35983_36650 = cljs.core.seq(scripts);
var chunk__35984_36651 = null;
var count__35985_36652 = (0);
var i__35986_36653 = (0);
while(true){
if((i__35986_36653 < count__35985_36652)){
var vec__35993_36661 = chunk__35984_36651.cljs$core$IIndexed$_nth$arity$2(null,i__35986_36653);
var script_tag_36662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35993_36661,(0),null);
var script_body_36663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35993_36661,(1),null);
eval(script_body_36663);


var G__36664 = seq__35983_36650;
var G__36665 = chunk__35984_36651;
var G__36666 = count__35985_36652;
var G__36667 = (i__35986_36653 + (1));
seq__35983_36650 = G__36664;
chunk__35984_36651 = G__36665;
count__35985_36652 = G__36666;
i__35986_36653 = G__36667;
continue;
} else {
var temp__5735__auto___36672 = cljs.core.seq(seq__35983_36650);
if(temp__5735__auto___36672){
var seq__35983_36673__$1 = temp__5735__auto___36672;
if(cljs.core.chunked_seq_QMARK_(seq__35983_36673__$1)){
var c__4550__auto___36674 = cljs.core.chunk_first(seq__35983_36673__$1);
var G__36675 = cljs.core.chunk_rest(seq__35983_36673__$1);
var G__36676 = c__4550__auto___36674;
var G__36677 = cljs.core.count(c__4550__auto___36674);
var G__36678 = (0);
seq__35983_36650 = G__36675;
chunk__35984_36651 = G__36676;
count__35985_36652 = G__36677;
i__35986_36653 = G__36678;
continue;
} else {
var vec__35997_36680 = cljs.core.first(seq__35983_36673__$1);
var script_tag_36681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35997_36680,(0),null);
var script_body_36682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35997_36680,(1),null);
eval(script_body_36682);


var G__36683 = cljs.core.next(seq__35983_36673__$1);
var G__36684 = null;
var G__36685 = (0);
var G__36686 = (0);
seq__35983_36650 = G__36683;
chunk__35984_36651 = G__36684;
count__35985_36652 = G__36685;
i__35986_36653 = G__36686;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__36000){
var vec__36001 = p__36000;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36001,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36001,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__36005 = shadow.dom.dom_node(el);
var G__36006 = cls;
return goog.dom.getAncestorByClass(G__36005,G__36006);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__36008 = arguments.length;
switch (G__36008) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__36009 = shadow.dom.dom_node(el);
var G__36010 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__36009,G__36010);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__36014 = shadow.dom.dom_node(el);
var G__36015 = cljs.core.name(tag);
var G__36016 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__36014,G__36015,G__36016);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__36017 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__36017);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__36019 = shadow.dom.dom_node(dom);
var G__36020 = value;
return goog.dom.forms.setValue(G__36019,G__36020);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__36033 = cljs.core.seq(style_keys);
var chunk__36034 = null;
var count__36035 = (0);
var i__36036 = (0);
while(true){
if((i__36036 < count__36035)){
var it = chunk__36034.cljs$core$IIndexed$_nth$arity$2(null,i__36036);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36695 = seq__36033;
var G__36696 = chunk__36034;
var G__36697 = count__36035;
var G__36698 = (i__36036 + (1));
seq__36033 = G__36695;
chunk__36034 = G__36696;
count__36035 = G__36697;
i__36036 = G__36698;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36033);
if(temp__5735__auto__){
var seq__36033__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36033__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36033__$1);
var G__36700 = cljs.core.chunk_rest(seq__36033__$1);
var G__36701 = c__4550__auto__;
var G__36702 = cljs.core.count(c__4550__auto__);
var G__36703 = (0);
seq__36033 = G__36700;
chunk__36034 = G__36701;
count__36035 = G__36702;
i__36036 = G__36703;
continue;
} else {
var it = cljs.core.first(seq__36033__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36704 = cljs.core.next(seq__36033__$1);
var G__36705 = null;
var G__36706 = (0);
var G__36707 = (0);
seq__36033 = G__36704;
chunk__36034 = G__36705;
count__36035 = G__36706;
i__36036 = G__36707;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k36046,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__36055 = k36046;
var G__36055__$1 = (((G__36055 instanceof cljs.core.Keyword))?G__36055.fqn:null);
switch (G__36055__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36046,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__36058){
var vec__36060 = p__36058;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36060,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36060,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36045){
var self__ = this;
var G__36045__$1 = this;
return (new cljs.core.RecordIter((0),G__36045__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__36068 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__36068(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36047,other36048){
var self__ = this;
var this36047__$1 = this;
return (((!((other36048 == null)))) && ((this36047__$1.constructor === other36048.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36047__$1.x,other36048.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36047__$1.y,other36048.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36047__$1.__extmap,other36048.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__36045){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__36073 = cljs.core.keyword_identical_QMARK_;
var expr__36074 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__36076 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__36077 = expr__36074;
return (pred__36073.cljs$core$IFn$_invoke$arity$2 ? pred__36073.cljs$core$IFn$_invoke$arity$2(G__36076,G__36077) : pred__36073.call(null,G__36076,G__36077));
})())){
return (new shadow.dom.Coordinate(G__36045,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36078 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__36079 = expr__36074;
return (pred__36073.cljs$core$IFn$_invoke$arity$2 ? pred__36073.cljs$core$IFn$_invoke$arity$2(G__36078,G__36079) : pred__36073.call(null,G__36078,G__36079));
})())){
return (new shadow.dom.Coordinate(self__.x,G__36045,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__36045),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__36045){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36045,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36050){
var extmap__4424__auto__ = (function (){var G__36086 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36050,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36050)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36086);
} else {
return G__36086;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36050),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36050),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__36090 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__36090);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__36093 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__36093);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__36095 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__36095);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k36098,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__36105 = k36098;
var G__36105__$1 = (((G__36105 instanceof cljs.core.Keyword))?G__36105.fqn:null);
switch (G__36105__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36098,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__36107){
var vec__36108 = p__36107;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36108,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36108,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36097){
var self__ = this;
var G__36097__$1 = this;
return (new cljs.core.RecordIter((0),G__36097__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__36119 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__36119(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36099,other36100){
var self__ = this;
var this36099__$1 = this;
return (((!((other36100 == null)))) && ((this36099__$1.constructor === other36100.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36099__$1.w,other36100.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36099__$1.h,other36100.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36099__$1.__extmap,other36100.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__36097){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__36125 = cljs.core.keyword_identical_QMARK_;
var expr__36126 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__36128 = new cljs.core.Keyword(null,"w","w",354169001);
var G__36129 = expr__36126;
return (pred__36125.cljs$core$IFn$_invoke$arity$2 ? pred__36125.cljs$core$IFn$_invoke$arity$2(G__36128,G__36129) : pred__36125.call(null,G__36128,G__36129));
})())){
return (new shadow.dom.Size(G__36097,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__36130 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__36131 = expr__36126;
return (pred__36125.cljs$core$IFn$_invoke$arity$2 ? pred__36125.cljs$core$IFn$_invoke$arity$2(G__36130,G__36131) : pred__36125.call(null,G__36130,G__36131));
})())){
return (new shadow.dom.Size(self__.w,G__36097,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__36097),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__36097){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36097,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36102){
var extmap__4424__auto__ = (function (){var G__36138 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36102,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36102)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36138);
} else {
return G__36138;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36102),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36102),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__36145 = shadow.dom.dom_node(el);
return goog.style.getSize(G__36145);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__36747 = (i + (1));
var G__36748 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36747;
ret = G__36748;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36158){
var vec__36159 = p__36158;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36159,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36159,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36163 = arguments.length;
switch (G__36163) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__36164_36758 = new_node;
var G__36165_36759 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__36164_36758,G__36165_36759);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__36166_36760 = new_node;
var G__36167_36761 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__36166_36760,G__36167_36761);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36770 = ps;
var G__36771 = (i + (1));
el__$1 = G__36770;
i = G__36771;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__36168 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__36168);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__36169 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__36169);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__36171 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__36171);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__36174 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36174,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36174,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36174,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36189_36777 = cljs.core.seq(props);
var chunk__36190_36778 = null;
var count__36191_36779 = (0);
var i__36192_36780 = (0);
while(true){
if((i__36192_36780 < count__36191_36779)){
var vec__36202_36781 = chunk__36190_36778.cljs$core$IIndexed$_nth$arity$2(null,i__36192_36780);
var k_36782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36202_36781,(0),null);
var v_36783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36202_36781,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_36782);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36782),v_36783);


var G__36784 = seq__36189_36777;
var G__36785 = chunk__36190_36778;
var G__36786 = count__36191_36779;
var G__36787 = (i__36192_36780 + (1));
seq__36189_36777 = G__36784;
chunk__36190_36778 = G__36785;
count__36191_36779 = G__36786;
i__36192_36780 = G__36787;
continue;
} else {
var temp__5735__auto___36788 = cljs.core.seq(seq__36189_36777);
if(temp__5735__auto___36788){
var seq__36189_36789__$1 = temp__5735__auto___36788;
if(cljs.core.chunked_seq_QMARK_(seq__36189_36789__$1)){
var c__4550__auto___36790 = cljs.core.chunk_first(seq__36189_36789__$1);
var G__36791 = cljs.core.chunk_rest(seq__36189_36789__$1);
var G__36792 = c__4550__auto___36790;
var G__36793 = cljs.core.count(c__4550__auto___36790);
var G__36794 = (0);
seq__36189_36777 = G__36791;
chunk__36190_36778 = G__36792;
count__36191_36779 = G__36793;
i__36192_36780 = G__36794;
continue;
} else {
var vec__36205_36795 = cljs.core.first(seq__36189_36789__$1);
var k_36796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36205_36795,(0),null);
var v_36797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36205_36795,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36796);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36796),v_36797);


var G__36802 = cljs.core.next(seq__36189_36789__$1);
var G__36803 = null;
var G__36804 = (0);
var G__36805 = (0);
seq__36189_36777 = G__36802;
chunk__36190_36778 = G__36803;
count__36191_36779 = G__36804;
i__36192_36780 = G__36805;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__36210 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36210,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36210,(1),null);
var seq__36213_36806 = cljs.core.seq(node_children);
var chunk__36215_36807 = null;
var count__36216_36808 = (0);
var i__36217_36809 = (0);
while(true){
if((i__36217_36809 < count__36216_36808)){
var child_struct_36810 = chunk__36215_36807.cljs$core$IIndexed$_nth$arity$2(null,i__36217_36809);
if((!((child_struct_36810 == null)))){
if(typeof child_struct_36810 === 'string'){
var text_36811 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36811),child_struct_36810].join(''));
} else {
var children_36812 = shadow.dom.svg_node(child_struct_36810);
if(cljs.core.seq_QMARK_(children_36812)){
var seq__36245_36813 = cljs.core.seq(children_36812);
var chunk__36247_36814 = null;
var count__36248_36815 = (0);
var i__36249_36816 = (0);
while(true){
if((i__36249_36816 < count__36248_36815)){
var child_36817 = chunk__36247_36814.cljs$core$IIndexed$_nth$arity$2(null,i__36249_36816);
if(cljs.core.truth_(child_36817)){
node.appendChild(child_36817);


var G__36819 = seq__36245_36813;
var G__36820 = chunk__36247_36814;
var G__36821 = count__36248_36815;
var G__36822 = (i__36249_36816 + (1));
seq__36245_36813 = G__36819;
chunk__36247_36814 = G__36820;
count__36248_36815 = G__36821;
i__36249_36816 = G__36822;
continue;
} else {
var G__36823 = seq__36245_36813;
var G__36824 = chunk__36247_36814;
var G__36825 = count__36248_36815;
var G__36826 = (i__36249_36816 + (1));
seq__36245_36813 = G__36823;
chunk__36247_36814 = G__36824;
count__36248_36815 = G__36825;
i__36249_36816 = G__36826;
continue;
}
} else {
var temp__5735__auto___36827 = cljs.core.seq(seq__36245_36813);
if(temp__5735__auto___36827){
var seq__36245_36828__$1 = temp__5735__auto___36827;
if(cljs.core.chunked_seq_QMARK_(seq__36245_36828__$1)){
var c__4550__auto___36829 = cljs.core.chunk_first(seq__36245_36828__$1);
var G__36833 = cljs.core.chunk_rest(seq__36245_36828__$1);
var G__36834 = c__4550__auto___36829;
var G__36835 = cljs.core.count(c__4550__auto___36829);
var G__36836 = (0);
seq__36245_36813 = G__36833;
chunk__36247_36814 = G__36834;
count__36248_36815 = G__36835;
i__36249_36816 = G__36836;
continue;
} else {
var child_36837 = cljs.core.first(seq__36245_36828__$1);
if(cljs.core.truth_(child_36837)){
node.appendChild(child_36837);


var G__36838 = cljs.core.next(seq__36245_36828__$1);
var G__36839 = null;
var G__36840 = (0);
var G__36841 = (0);
seq__36245_36813 = G__36838;
chunk__36247_36814 = G__36839;
count__36248_36815 = G__36840;
i__36249_36816 = G__36841;
continue;
} else {
var G__36842 = cljs.core.next(seq__36245_36828__$1);
var G__36843 = null;
var G__36844 = (0);
var G__36845 = (0);
seq__36245_36813 = G__36842;
chunk__36247_36814 = G__36843;
count__36248_36815 = G__36844;
i__36249_36816 = G__36845;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36812);
}
}


var G__36853 = seq__36213_36806;
var G__36854 = chunk__36215_36807;
var G__36855 = count__36216_36808;
var G__36856 = (i__36217_36809 + (1));
seq__36213_36806 = G__36853;
chunk__36215_36807 = G__36854;
count__36216_36808 = G__36855;
i__36217_36809 = G__36856;
continue;
} else {
var G__36860 = seq__36213_36806;
var G__36861 = chunk__36215_36807;
var G__36862 = count__36216_36808;
var G__36863 = (i__36217_36809 + (1));
seq__36213_36806 = G__36860;
chunk__36215_36807 = G__36861;
count__36216_36808 = G__36862;
i__36217_36809 = G__36863;
continue;
}
} else {
var temp__5735__auto___36864 = cljs.core.seq(seq__36213_36806);
if(temp__5735__auto___36864){
var seq__36213_36865__$1 = temp__5735__auto___36864;
if(cljs.core.chunked_seq_QMARK_(seq__36213_36865__$1)){
var c__4550__auto___36866 = cljs.core.chunk_first(seq__36213_36865__$1);
var G__36867 = cljs.core.chunk_rest(seq__36213_36865__$1);
var G__36868 = c__4550__auto___36866;
var G__36869 = cljs.core.count(c__4550__auto___36866);
var G__36870 = (0);
seq__36213_36806 = G__36867;
chunk__36215_36807 = G__36868;
count__36216_36808 = G__36869;
i__36217_36809 = G__36870;
continue;
} else {
var child_struct_36871 = cljs.core.first(seq__36213_36865__$1);
if((!((child_struct_36871 == null)))){
if(typeof child_struct_36871 === 'string'){
var text_36872 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36872),child_struct_36871].join(''));
} else {
var children_36873 = shadow.dom.svg_node(child_struct_36871);
if(cljs.core.seq_QMARK_(children_36873)){
var seq__36261_36877 = cljs.core.seq(children_36873);
var chunk__36263_36878 = null;
var count__36264_36879 = (0);
var i__36265_36880 = (0);
while(true){
if((i__36265_36880 < count__36264_36879)){
var child_36881 = chunk__36263_36878.cljs$core$IIndexed$_nth$arity$2(null,i__36265_36880);
if(cljs.core.truth_(child_36881)){
node.appendChild(child_36881);


var G__36882 = seq__36261_36877;
var G__36883 = chunk__36263_36878;
var G__36884 = count__36264_36879;
var G__36885 = (i__36265_36880 + (1));
seq__36261_36877 = G__36882;
chunk__36263_36878 = G__36883;
count__36264_36879 = G__36884;
i__36265_36880 = G__36885;
continue;
} else {
var G__36886 = seq__36261_36877;
var G__36887 = chunk__36263_36878;
var G__36888 = count__36264_36879;
var G__36889 = (i__36265_36880 + (1));
seq__36261_36877 = G__36886;
chunk__36263_36878 = G__36887;
count__36264_36879 = G__36888;
i__36265_36880 = G__36889;
continue;
}
} else {
var temp__5735__auto___36890__$1 = cljs.core.seq(seq__36261_36877);
if(temp__5735__auto___36890__$1){
var seq__36261_36891__$1 = temp__5735__auto___36890__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36261_36891__$1)){
var c__4550__auto___36895 = cljs.core.chunk_first(seq__36261_36891__$1);
var G__36896 = cljs.core.chunk_rest(seq__36261_36891__$1);
var G__36897 = c__4550__auto___36895;
var G__36898 = cljs.core.count(c__4550__auto___36895);
var G__36899 = (0);
seq__36261_36877 = G__36896;
chunk__36263_36878 = G__36897;
count__36264_36879 = G__36898;
i__36265_36880 = G__36899;
continue;
} else {
var child_36900 = cljs.core.first(seq__36261_36891__$1);
if(cljs.core.truth_(child_36900)){
node.appendChild(child_36900);


var G__36901 = cljs.core.next(seq__36261_36891__$1);
var G__36902 = null;
var G__36903 = (0);
var G__36904 = (0);
seq__36261_36877 = G__36901;
chunk__36263_36878 = G__36902;
count__36264_36879 = G__36903;
i__36265_36880 = G__36904;
continue;
} else {
var G__36905 = cljs.core.next(seq__36261_36891__$1);
var G__36906 = null;
var G__36907 = (0);
var G__36908 = (0);
seq__36261_36877 = G__36905;
chunk__36263_36878 = G__36906;
count__36264_36879 = G__36907;
i__36265_36880 = G__36908;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36873);
}
}


var G__36909 = cljs.core.next(seq__36213_36865__$1);
var G__36910 = null;
var G__36911 = (0);
var G__36912 = (0);
seq__36213_36806 = G__36909;
chunk__36215_36807 = G__36910;
count__36216_36808 = G__36911;
i__36217_36809 = G__36912;
continue;
} else {
var G__36913 = cljs.core.next(seq__36213_36865__$1);
var G__36914 = null;
var G__36915 = (0);
var G__36916 = (0);
seq__36213_36806 = G__36913;
chunk__36215_36807 = G__36914;
count__36216_36808 = G__36915;
i__36217_36809 = G__36916;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__36275_36920 = shadow.dom._to_svg;
var G__36276_36921 = "string";
var G__36277_36922 = ((function (G__36275_36920,G__36276_36921){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__36275_36920,G__36276_36921))
;
goog.object.set(G__36275_36920,G__36276_36921,G__36277_36922);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__36284_36924 = shadow.dom._to_svg;
var G__36285_36925 = "null";
var G__36286_36926 = ((function (G__36284_36924,G__36285_36925){
return (function (_){
return null;
});})(G__36284_36924,G__36285_36925))
;
goog.object.set(G__36284_36924,G__36285_36925,G__36286_36926);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36928 = arguments.length;
var i__4731__auto___36929 = (0);
while(true){
if((i__4731__auto___36929 < len__4730__auto___36928)){
args__4736__auto__.push((arguments[i__4731__auto___36929]));

var G__36931 = (i__4731__auto___36929 + (1));
i__4731__auto___36929 = G__36931;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq36288){
var G__36289 = cljs.core.first(seq36288);
var seq36288__$1 = cljs.core.next(seq36288);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36289,seq36288__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36299 = arguments.length;
switch (G__36299) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__36304_36934 = shadow.dom.dom_node(el);
var G__36305_36935 = cljs.core.name(event);
var G__36306_36936 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__36304_36934,G__36305_36935,G__36306_36936) : shadow.dom.dom_listen.call(null,G__36304_36934,G__36305_36935,G__36306_36936));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__33853__auto___36939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto___36939,buf,chan,event_fn){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto___36939,buf,chan,event_fn){
return (function (state_36313){
var state_val_36314 = (state_36313[(1)]);
if((state_val_36314 === (1))){
var state_36313__$1 = state_36313;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36313__$1,(2),once_or_cleanup);
} else {
if((state_val_36314 === (2))){
var inst_36309 = (state_36313[(2)]);
var inst_36311 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36313__$1 = (function (){var statearr_36317 = state_36313;
(statearr_36317[(7)] = inst_36309);

return statearr_36317;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36313__$1,inst_36311);
} else {
return null;
}
}
});})(c__33853__auto___36939,buf,chan,event_fn))
;
return ((function (switch__33674__auto__,c__33853__auto___36939,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__33675__auto__ = null;
var shadow$dom$state_machine__33675__auto____0 = (function (){
var statearr_36324 = [null,null,null,null,null,null,null,null];
(statearr_36324[(0)] = shadow$dom$state_machine__33675__auto__);

(statearr_36324[(1)] = (1));

return statearr_36324;
});
var shadow$dom$state_machine__33675__auto____1 = (function (state_36313){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_36313);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e36325){if((e36325 instanceof Object)){
var ex__33678__auto__ = e36325;
var statearr_36326_36949 = state_36313;
(statearr_36326_36949[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36325;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36950 = state_36313;
state_36313 = G__36950;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
shadow$dom$state_machine__33675__auto__ = function(state_36313){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33675__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33675__auto____1.call(this,state_36313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33675__auto____0;
shadow$dom$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33675__auto____1;
return shadow$dom$state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto___36939,buf,chan,event_fn))
})();
var state__33855__auto__ = (function (){var statearr_36327 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_36327[(6)] = c__33853__auto___36939);

return statearr_36327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto___36939,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
