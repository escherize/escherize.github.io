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
return cljs.core.cons((coll[idx]),(function (){var G__47920 = coll;
var G__47921 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47920,G__47921) : shadow.dom.lazy_native_coll_seq.call(null,G__47920,G__47921));
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
var G__47973 = arguments.length;
switch (G__47973) {
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
var G__47989 = arguments.length;
switch (G__47989) {
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
var G__48007 = arguments.length;
switch (G__48007) {
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
var G__48019 = arguments.length;
switch (G__48019) {
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
var G__48033 = arguments.length;
switch (G__48033) {
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
var G__48036 = document;
var G__48037 = shadow.dom.dom_node(el);
return goog.dom.contains(G__48036,G__48037);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__48040 = shadow.dom.dom_node(parent);
var G__48041 = shadow.dom.dom_node(el);
return goog.dom.contains(G__48040,G__48041);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__48050 = shadow.dom.dom_node(el);
var G__48051 = cls;
return goog.dom.classlist.add(G__48050,G__48051);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__48056 = shadow.dom.dom_node(el);
var G__48057 = cls;
return goog.dom.classlist.remove(G__48056,G__48057);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__48061 = arguments.length;
switch (G__48061) {
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
var G__48067 = shadow.dom.dom_node(el);
var G__48068 = cls;
return goog.dom.classlist.toggle(G__48067,G__48068);
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
}catch (e48091){if((e48091 instanceof Object)){
var e = e48091;
return console.log("didnt support attachEvent",el,e);
} else {
throw e48091;

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
var seq__48117 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__48119 = null;
var count__48120 = (0);
var i__48121 = (0);
while(true){
if((i__48121 < count__48120)){
var el = chunk__48119.cljs$core$IIndexed$_nth$arity$2(null,i__48121);
var handler_49647__$1 = ((function (seq__48117,chunk__48119,count__48120,i__48121,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48117,chunk__48119,count__48120,i__48121,el))
;
var G__48154_49649 = el;
var G__48155_49650 = cljs.core.name(ev);
var G__48156_49651 = handler_49647__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48154_49649,G__48155_49650,G__48156_49651) : shadow.dom.dom_listen.call(null,G__48154_49649,G__48155_49650,G__48156_49651));


var G__49653 = seq__48117;
var G__49654 = chunk__48119;
var G__49655 = count__48120;
var G__49656 = (i__48121 + (1));
seq__48117 = G__49653;
chunk__48119 = G__49654;
count__48120 = G__49655;
i__48121 = G__49656;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48117);
if(temp__5735__auto__){
var seq__48117__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48117__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48117__$1);
var G__49661 = cljs.core.chunk_rest(seq__48117__$1);
var G__49662 = c__4550__auto__;
var G__49663 = cljs.core.count(c__4550__auto__);
var G__49664 = (0);
seq__48117 = G__49661;
chunk__48119 = G__49662;
count__48120 = G__49663;
i__48121 = G__49664;
continue;
} else {
var el = cljs.core.first(seq__48117__$1);
var handler_49666__$1 = ((function (seq__48117,chunk__48119,count__48120,i__48121,el,seq__48117__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48117,chunk__48119,count__48120,i__48121,el,seq__48117__$1,temp__5735__auto__))
;
var G__48172_49667 = el;
var G__48173_49668 = cljs.core.name(ev);
var G__48175_49669 = handler_49666__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48172_49667,G__48173_49668,G__48175_49669) : shadow.dom.dom_listen.call(null,G__48172_49667,G__48173_49668,G__48175_49669));


var G__49670 = cljs.core.next(seq__48117__$1);
var G__49671 = null;
var G__49672 = (0);
var G__49673 = (0);
seq__48117 = G__49670;
chunk__48119 = G__49671;
count__48120 = G__49672;
i__48121 = G__49673;
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
var G__48190 = arguments.length;
switch (G__48190) {
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
var G__48197 = shadow.dom.dom_node(el);
var G__48198 = cljs.core.name(ev);
var G__48199 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48197,G__48198,G__48199) : shadow.dom.dom_listen.call(null,G__48197,G__48198,G__48199));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__48201 = shadow.dom.dom_node(el);
var G__48202 = cljs.core.name(ev);
var G__48203 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__48201,G__48202,G__48203) : shadow.dom.dom_listen_remove.call(null,G__48201,G__48202,G__48203));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__48213 = cljs.core.seq(events);
var chunk__48214 = null;
var count__48215 = (0);
var i__48216 = (0);
while(true){
if((i__48216 < count__48215)){
var vec__48241 = chunk__48214.cljs$core$IIndexed$_nth$arity$2(null,i__48216);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48241,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48241,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49694 = seq__48213;
var G__49695 = chunk__48214;
var G__49696 = count__48215;
var G__49697 = (i__48216 + (1));
seq__48213 = G__49694;
chunk__48214 = G__49695;
count__48215 = G__49696;
i__48216 = G__49697;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48213);
if(temp__5735__auto__){
var seq__48213__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48213__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48213__$1);
var G__49699 = cljs.core.chunk_rest(seq__48213__$1);
var G__49700 = c__4550__auto__;
var G__49701 = cljs.core.count(c__4550__auto__);
var G__49702 = (0);
seq__48213 = G__49699;
chunk__48214 = G__49700;
count__48215 = G__49701;
i__48216 = G__49702;
continue;
} else {
var vec__48249 = cljs.core.first(seq__48213__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48249,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48249,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49703 = cljs.core.next(seq__48213__$1);
var G__49704 = null;
var G__49705 = (0);
var G__49706 = (0);
seq__48213 = G__49703;
chunk__48214 = G__49704;
count__48215 = G__49705;
i__48216 = G__49706;
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
var seq__48254 = cljs.core.seq(styles);
var chunk__48255 = null;
var count__48256 = (0);
var i__48257 = (0);
while(true){
if((i__48257 < count__48256)){
var vec__48280 = chunk__48255.cljs$core$IIndexed$_nth$arity$2(null,i__48257);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48280,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48280,(1),null);
var G__48287_49709 = dom;
var G__48288_49710 = cljs.core.name(k);
var G__48289_49711 = (((v == null))?"":v);
goog.style.setStyle(G__48287_49709,G__48288_49710,G__48289_49711);


var G__49712 = seq__48254;
var G__49713 = chunk__48255;
var G__49714 = count__48256;
var G__49715 = (i__48257 + (1));
seq__48254 = G__49712;
chunk__48255 = G__49713;
count__48256 = G__49714;
i__48257 = G__49715;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48254);
if(temp__5735__auto__){
var seq__48254__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48254__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48254__$1);
var G__49716 = cljs.core.chunk_rest(seq__48254__$1);
var G__49717 = c__4550__auto__;
var G__49718 = cljs.core.count(c__4550__auto__);
var G__49719 = (0);
seq__48254 = G__49716;
chunk__48255 = G__49717;
count__48256 = G__49718;
i__48257 = G__49719;
continue;
} else {
var vec__48304 = cljs.core.first(seq__48254__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48304,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48304,(1),null);
var G__48307_49724 = dom;
var G__48308_49725 = cljs.core.name(k);
var G__48309_49726 = (((v == null))?"":v);
goog.style.setStyle(G__48307_49724,G__48308_49725,G__48309_49726);


var G__49731 = cljs.core.next(seq__48254__$1);
var G__49732 = null;
var G__49733 = (0);
var G__49734 = (0);
seq__48254 = G__49731;
chunk__48255 = G__49732;
count__48256 = G__49733;
i__48257 = G__49734;
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
var G__48315_49741 = key;
var G__48315_49742__$1 = (((G__48315_49741 instanceof cljs.core.Keyword))?G__48315_49741.fqn:null);
switch (G__48315_49742__$1) {
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
var ks_49772 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_49772,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_49772,"aria-");
}
})())){
el.setAttribute(ks_49772,value);
} else {
(el[ks_49772] = value);
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
var G__48339 = shadow.dom.dom_node(el);
var G__48340 = cls;
return goog.dom.classlist.contains(G__48339,G__48340);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48359){
var map__48360 = p__48359;
var map__48360__$1 = (((((!((map__48360 == null))))?(((((map__48360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48360):map__48360);
var props = map__48360__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48360__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48371 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48371,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48371,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48371,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48378 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48378,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48378;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48390 = arguments.length;
switch (G__48390) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48405){
var vec__48407 = p__48405;
var seq__48408 = cljs.core.seq(vec__48407);
var first__48409 = cljs.core.first(seq__48408);
var seq__48408__$1 = cljs.core.next(seq__48408);
var nn = first__48409;
var first__48409__$1 = cljs.core.first(seq__48408__$1);
var seq__48408__$2 = cljs.core.next(seq__48408__$1);
var np = first__48409__$1;
var nc = seq__48408__$2;
var node = vec__48407;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48411 = nn;
var G__48412 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48411,G__48412) : create_fn.call(null,G__48411,G__48412));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48413 = nn;
var G__48414 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48413,G__48414) : create_fn.call(null,G__48413,G__48414));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48423 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48423,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48423,(1),null);
var seq__48434_49809 = cljs.core.seq(node_children);
var chunk__48435_49810 = null;
var count__48436_49811 = (0);
var i__48437_49812 = (0);
while(true){
if((i__48437_49812 < count__48436_49811)){
var child_struct_49814 = chunk__48435_49810.cljs$core$IIndexed$_nth$arity$2(null,i__48437_49812);
var children_49815 = shadow.dom.dom_node(child_struct_49814);
if(cljs.core.seq_QMARK_(children_49815)){
var seq__48547_49816 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49815));
var chunk__48549_49817 = null;
var count__48550_49818 = (0);
var i__48551_49819 = (0);
while(true){
if((i__48551_49819 < count__48550_49818)){
var child_49820 = chunk__48549_49817.cljs$core$IIndexed$_nth$arity$2(null,i__48551_49819);
if(cljs.core.truth_(child_49820)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49820);


var G__49821 = seq__48547_49816;
var G__49822 = chunk__48549_49817;
var G__49823 = count__48550_49818;
var G__49824 = (i__48551_49819 + (1));
seq__48547_49816 = G__49821;
chunk__48549_49817 = G__49822;
count__48550_49818 = G__49823;
i__48551_49819 = G__49824;
continue;
} else {
var G__49829 = seq__48547_49816;
var G__49830 = chunk__48549_49817;
var G__49831 = count__48550_49818;
var G__49832 = (i__48551_49819 + (1));
seq__48547_49816 = G__49829;
chunk__48549_49817 = G__49830;
count__48550_49818 = G__49831;
i__48551_49819 = G__49832;
continue;
}
} else {
var temp__5735__auto___49833 = cljs.core.seq(seq__48547_49816);
if(temp__5735__auto___49833){
var seq__48547_49834__$1 = temp__5735__auto___49833;
if(cljs.core.chunked_seq_QMARK_(seq__48547_49834__$1)){
var c__4550__auto___49835 = cljs.core.chunk_first(seq__48547_49834__$1);
var G__49836 = cljs.core.chunk_rest(seq__48547_49834__$1);
var G__49837 = c__4550__auto___49835;
var G__49838 = cljs.core.count(c__4550__auto___49835);
var G__49839 = (0);
seq__48547_49816 = G__49836;
chunk__48549_49817 = G__49837;
count__48550_49818 = G__49838;
i__48551_49819 = G__49839;
continue;
} else {
var child_49847 = cljs.core.first(seq__48547_49834__$1);
if(cljs.core.truth_(child_49847)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49847);


var G__49848 = cljs.core.next(seq__48547_49834__$1);
var G__49849 = null;
var G__49850 = (0);
var G__49851 = (0);
seq__48547_49816 = G__49848;
chunk__48549_49817 = G__49849;
count__48550_49818 = G__49850;
i__48551_49819 = G__49851;
continue;
} else {
var G__49857 = cljs.core.next(seq__48547_49834__$1);
var G__49858 = null;
var G__49859 = (0);
var G__49860 = (0);
seq__48547_49816 = G__49857;
chunk__48549_49817 = G__49858;
count__48550_49818 = G__49859;
i__48551_49819 = G__49860;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49815);
}


var G__49861 = seq__48434_49809;
var G__49862 = chunk__48435_49810;
var G__49863 = count__48436_49811;
var G__49864 = (i__48437_49812 + (1));
seq__48434_49809 = G__49861;
chunk__48435_49810 = G__49862;
count__48436_49811 = G__49863;
i__48437_49812 = G__49864;
continue;
} else {
var temp__5735__auto___49866 = cljs.core.seq(seq__48434_49809);
if(temp__5735__auto___49866){
var seq__48434_49867__$1 = temp__5735__auto___49866;
if(cljs.core.chunked_seq_QMARK_(seq__48434_49867__$1)){
var c__4550__auto___49868 = cljs.core.chunk_first(seq__48434_49867__$1);
var G__49869 = cljs.core.chunk_rest(seq__48434_49867__$1);
var G__49870 = c__4550__auto___49868;
var G__49871 = cljs.core.count(c__4550__auto___49868);
var G__49872 = (0);
seq__48434_49809 = G__49869;
chunk__48435_49810 = G__49870;
count__48436_49811 = G__49871;
i__48437_49812 = G__49872;
continue;
} else {
var child_struct_49875 = cljs.core.first(seq__48434_49867__$1);
var children_49876 = shadow.dom.dom_node(child_struct_49875);
if(cljs.core.seq_QMARK_(children_49876)){
var seq__48601_49881 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49876));
var chunk__48603_49882 = null;
var count__48604_49883 = (0);
var i__48605_49884 = (0);
while(true){
if((i__48605_49884 < count__48604_49883)){
var child_49885 = chunk__48603_49882.cljs$core$IIndexed$_nth$arity$2(null,i__48605_49884);
if(cljs.core.truth_(child_49885)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49885);


var G__49886 = seq__48601_49881;
var G__49887 = chunk__48603_49882;
var G__49888 = count__48604_49883;
var G__49889 = (i__48605_49884 + (1));
seq__48601_49881 = G__49886;
chunk__48603_49882 = G__49887;
count__48604_49883 = G__49888;
i__48605_49884 = G__49889;
continue;
} else {
var G__49890 = seq__48601_49881;
var G__49891 = chunk__48603_49882;
var G__49892 = count__48604_49883;
var G__49893 = (i__48605_49884 + (1));
seq__48601_49881 = G__49890;
chunk__48603_49882 = G__49891;
count__48604_49883 = G__49892;
i__48605_49884 = G__49893;
continue;
}
} else {
var temp__5735__auto___49894__$1 = cljs.core.seq(seq__48601_49881);
if(temp__5735__auto___49894__$1){
var seq__48601_49895__$1 = temp__5735__auto___49894__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48601_49895__$1)){
var c__4550__auto___49897 = cljs.core.chunk_first(seq__48601_49895__$1);
var G__49898 = cljs.core.chunk_rest(seq__48601_49895__$1);
var G__49899 = c__4550__auto___49897;
var G__49900 = cljs.core.count(c__4550__auto___49897);
var G__49901 = (0);
seq__48601_49881 = G__49898;
chunk__48603_49882 = G__49899;
count__48604_49883 = G__49900;
i__48605_49884 = G__49901;
continue;
} else {
var child_49902 = cljs.core.first(seq__48601_49895__$1);
if(cljs.core.truth_(child_49902)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49902);


var G__49903 = cljs.core.next(seq__48601_49895__$1);
var G__49904 = null;
var G__49905 = (0);
var G__49906 = (0);
seq__48601_49881 = G__49903;
chunk__48603_49882 = G__49904;
count__48604_49883 = G__49905;
i__48605_49884 = G__49906;
continue;
} else {
var G__49907 = cljs.core.next(seq__48601_49895__$1);
var G__49908 = null;
var G__49909 = (0);
var G__49910 = (0);
seq__48601_49881 = G__49907;
chunk__48603_49882 = G__49908;
count__48604_49883 = G__49909;
i__48605_49884 = G__49910;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49876);
}


var G__49911 = cljs.core.next(seq__48434_49867__$1);
var G__49912 = null;
var G__49913 = (0);
var G__49914 = (0);
seq__48434_49809 = G__49911;
chunk__48435_49810 = G__49912;
count__48436_49811 = G__49913;
i__48437_49812 = G__49914;
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
var G__48716 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__48716);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48728 = cljs.core.seq(node);
var chunk__48729 = null;
var count__48730 = (0);
var i__48731 = (0);
while(true){
if((i__48731 < count__48730)){
var n = chunk__48729.cljs$core$IIndexed$_nth$arity$2(null,i__48731);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49921 = seq__48728;
var G__49922 = chunk__48729;
var G__49923 = count__48730;
var G__49924 = (i__48731 + (1));
seq__48728 = G__49921;
chunk__48729 = G__49922;
count__48730 = G__49923;
i__48731 = G__49924;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48728);
if(temp__5735__auto__){
var seq__48728__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48728__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__48728__$1);
var G__49925 = cljs.core.chunk_rest(seq__48728__$1);
var G__49926 = c__4550__auto__;
var G__49927 = cljs.core.count(c__4550__auto__);
var G__49928 = (0);
seq__48728 = G__49925;
chunk__48729 = G__49926;
count__48730 = G__49927;
i__48731 = G__49928;
continue;
} else {
var n = cljs.core.first(seq__48728__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49933 = cljs.core.next(seq__48728__$1);
var G__49934 = null;
var G__49935 = (0);
var G__49936 = (0);
seq__48728 = G__49933;
chunk__48729 = G__49934;
count__48730 = G__49935;
i__48731 = G__49936;
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
var G__48767 = shadow.dom.dom_node(new$);
var G__48768 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__48767,G__48768);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48790 = arguments.length;
switch (G__48790) {
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
var G__48825 = arguments.length;
switch (G__48825) {
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
var G__48908 = arguments.length;
switch (G__48908) {
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
var len__4730__auto___49950 = arguments.length;
var i__4731__auto___49951 = (0);
while(true){
if((i__4731__auto___49951 < len__4730__auto___49950)){
args__4736__auto__.push((arguments[i__4731__auto___49951]));

var G__49952 = (i__4731__auto___49951 + (1));
i__4731__auto___49951 = G__49952;
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
var seq__49031_49957 = cljs.core.seq(nodes);
var chunk__49032_49958 = null;
var count__49033_49959 = (0);
var i__49034_49960 = (0);
while(true){
if((i__49034_49960 < count__49033_49959)){
var node_49961 = chunk__49032_49958.cljs$core$IIndexed$_nth$arity$2(null,i__49034_49960);
fragment.appendChild(shadow.dom._to_dom(node_49961));


var G__49962 = seq__49031_49957;
var G__49963 = chunk__49032_49958;
var G__49964 = count__49033_49959;
var G__49965 = (i__49034_49960 + (1));
seq__49031_49957 = G__49962;
chunk__49032_49958 = G__49963;
count__49033_49959 = G__49964;
i__49034_49960 = G__49965;
continue;
} else {
var temp__5735__auto___49966 = cljs.core.seq(seq__49031_49957);
if(temp__5735__auto___49966){
var seq__49031_49967__$1 = temp__5735__auto___49966;
if(cljs.core.chunked_seq_QMARK_(seq__49031_49967__$1)){
var c__4550__auto___49968 = cljs.core.chunk_first(seq__49031_49967__$1);
var G__49969 = cljs.core.chunk_rest(seq__49031_49967__$1);
var G__49970 = c__4550__auto___49968;
var G__49971 = cljs.core.count(c__4550__auto___49968);
var G__49972 = (0);
seq__49031_49957 = G__49969;
chunk__49032_49958 = G__49970;
count__49033_49959 = G__49971;
i__49034_49960 = G__49972;
continue;
} else {
var node_49973 = cljs.core.first(seq__49031_49967__$1);
fragment.appendChild(shadow.dom._to_dom(node_49973));


var G__49974 = cljs.core.next(seq__49031_49967__$1);
var G__49975 = null;
var G__49976 = (0);
var G__49977 = (0);
seq__49031_49957 = G__49974;
chunk__49032_49958 = G__49975;
count__49033_49959 = G__49976;
i__49034_49960 = G__49977;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq49014){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49014));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__49068_49987 = cljs.core.seq(scripts);
var chunk__49069_49988 = null;
var count__49070_49989 = (0);
var i__49071_49990 = (0);
while(true){
if((i__49071_49990 < count__49070_49989)){
var vec__49090_49994 = chunk__49069_49988.cljs$core$IIndexed$_nth$arity$2(null,i__49071_49990);
var script_tag_49995 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49090_49994,(0),null);
var script_body_49996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49090_49994,(1),null);
eval(script_body_49996);


var G__49997 = seq__49068_49987;
var G__49998 = chunk__49069_49988;
var G__49999 = count__49070_49989;
var G__50000 = (i__49071_49990 + (1));
seq__49068_49987 = G__49997;
chunk__49069_49988 = G__49998;
count__49070_49989 = G__49999;
i__49071_49990 = G__50000;
continue;
} else {
var temp__5735__auto___50001 = cljs.core.seq(seq__49068_49987);
if(temp__5735__auto___50001){
var seq__49068_50002__$1 = temp__5735__auto___50001;
if(cljs.core.chunked_seq_QMARK_(seq__49068_50002__$1)){
var c__4550__auto___50003 = cljs.core.chunk_first(seq__49068_50002__$1);
var G__50004 = cljs.core.chunk_rest(seq__49068_50002__$1);
var G__50005 = c__4550__auto___50003;
var G__50006 = cljs.core.count(c__4550__auto___50003);
var G__50007 = (0);
seq__49068_49987 = G__50004;
chunk__49069_49988 = G__50005;
count__49070_49989 = G__50006;
i__49071_49990 = G__50007;
continue;
} else {
var vec__49102_50008 = cljs.core.first(seq__49068_50002__$1);
var script_tag_50009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49102_50008,(0),null);
var script_body_50010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49102_50008,(1),null);
eval(script_body_50010);


var G__50011 = cljs.core.next(seq__49068_50002__$1);
var G__50012 = null;
var G__50013 = (0);
var G__50014 = (0);
seq__49068_49987 = G__50011;
chunk__49069_49988 = G__50012;
count__49070_49989 = G__50013;
i__49071_49990 = G__50014;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__49106){
var vec__49111 = p__49106;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49111,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49111,(1),null);
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
var G__49126 = shadow.dom.dom_node(el);
var G__49127 = cls;
return goog.dom.getAncestorByClass(G__49126,G__49127);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__49130 = arguments.length;
switch (G__49130) {
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
var G__49134 = shadow.dom.dom_node(el);
var G__49135 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__49134,G__49135);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__49138 = shadow.dom.dom_node(el);
var G__49139 = cljs.core.name(tag);
var G__49140 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__49138,G__49139,G__49140);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__49145 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__49145);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__49150 = shadow.dom.dom_node(dom);
var G__49151 = value;
return goog.dom.forms.setValue(G__49150,G__49151);
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
var seq__49183 = cljs.core.seq(style_keys);
var chunk__49184 = null;
var count__49185 = (0);
var i__49186 = (0);
while(true){
if((i__49186 < count__49185)){
var it = chunk__49184.cljs$core$IIndexed$_nth$arity$2(null,i__49186);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50032 = seq__49183;
var G__50033 = chunk__49184;
var G__50034 = count__49185;
var G__50035 = (i__49186 + (1));
seq__49183 = G__50032;
chunk__49184 = G__50033;
count__49185 = G__50034;
i__49186 = G__50035;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49183);
if(temp__5735__auto__){
var seq__49183__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49183__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__49183__$1);
var G__50037 = cljs.core.chunk_rest(seq__49183__$1);
var G__50038 = c__4550__auto__;
var G__50039 = cljs.core.count(c__4550__auto__);
var G__50040 = (0);
seq__49183 = G__50037;
chunk__49184 = G__50038;
count__49185 = G__50039;
i__49186 = G__50040;
continue;
} else {
var it = cljs.core.first(seq__49183__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50045 = cljs.core.next(seq__49183__$1);
var G__50046 = null;
var G__50047 = (0);
var G__50048 = (0);
seq__49183 = G__50045;
chunk__49184 = G__50046;
count__49185 = G__50047;
i__49186 = G__50048;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49197,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49206 = k49197;
var G__49206__$1 = (((G__49206 instanceof cljs.core.Keyword))?G__49206.fqn:null);
switch (G__49206__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49197,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49213){
var vec__49214 = p__49213;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49214,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49214,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49196){
var self__ = this;
var G__49196__$1 = this;
return (new cljs.core.RecordIter((0),G__49196__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__49229 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49229(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49198,other49199){
var self__ = this;
var this49198__$1 = this;
return (((!((other49199 == null)))) && ((this49198__$1.constructor === other49199.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49198__$1.x,other49199.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49198__$1.y,other49199.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49198__$1.__extmap,other49199.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49196){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49245 = cljs.core.keyword_identical_QMARK_;
var expr__49246 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49249 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__49250 = expr__49246;
return (pred__49245.cljs$core$IFn$_invoke$arity$2 ? pred__49245.cljs$core$IFn$_invoke$arity$2(G__49249,G__49250) : pred__49245.call(null,G__49249,G__49250));
})())){
return (new shadow.dom.Coordinate(G__49196,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49251 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__49252 = expr__49246;
return (pred__49245.cljs$core$IFn$_invoke$arity$2 ? pred__49245.cljs$core$IFn$_invoke$arity$2(G__49251,G__49252) : pred__49245.call(null,G__49251,G__49252));
})())){
return (new shadow.dom.Coordinate(self__.x,G__49196,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49196),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49196){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__49196,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__49204){
var extmap__4424__auto__ = (function (){var G__49266 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49204,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__49204)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49266);
} else {
return G__49266;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__49204),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__49204),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__49271 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__49271);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__49273 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__49273);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__49274 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__49274);
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k49281,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__49303 = k49281;
var G__49303__$1 = (((G__49303 instanceof cljs.core.Keyword))?G__49303.fqn:null);
switch (G__49303__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49281,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__49310){
var vec__49313 = p__49310;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49313,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49313,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49280){
var self__ = this;
var G__49280__$1 = this;
return (new cljs.core.RecordIter((0),G__49280__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__49345 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__49345(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49282,other49283){
var self__ = this;
var this49282__$1 = this;
return (((!((other49283 == null)))) && ((this49282__$1.constructor === other49283.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49282__$1.w,other49283.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49282__$1.h,other49283.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49282__$1.__extmap,other49283.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__49280){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__49353 = cljs.core.keyword_identical_QMARK_;
var expr__49354 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__49356 = new cljs.core.Keyword(null,"w","w",354169001);
var G__49357 = expr__49354;
return (pred__49353.cljs$core$IFn$_invoke$arity$2 ? pred__49353.cljs$core$IFn$_invoke$arity$2(G__49356,G__49357) : pred__49353.call(null,G__49356,G__49357));
})())){
return (new shadow.dom.Size(G__49280,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__49359 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__49360 = expr__49354;
return (pred__49353.cljs$core$IFn$_invoke$arity$2 ? pred__49353.cljs$core$IFn$_invoke$arity$2(G__49359,G__49360) : pred__49353.call(null,G__49359,G__49360));
})())){
return (new shadow.dom.Size(self__.w,G__49280,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__49280),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__49280){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__49280,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__49285){
var extmap__4424__auto__ = (function (){var G__49384 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49285,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__49285)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49384);
} else {
return G__49384;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__49285),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__49285),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__49396 = shadow.dom.dom_node(el);
return goog.style.getSize(G__49396);
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
var G__50148 = (i + (1));
var G__50149 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__50148;
ret = G__50149;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49423){
var vec__49424 = p__49423;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49424,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49424,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__49432 = arguments.length;
switch (G__49432) {
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
var G__49440_50159 = new_node;
var G__49441_50160 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__49440_50159,G__49441_50160);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__49443_50161 = new_node;
var G__49444_50162 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__49443_50161,G__49444_50162);

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
var G__50169 = ps;
var G__50170 = (i + (1));
el__$1 = G__50169;
i = G__50170;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__49454 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__49454);
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
var G__49460 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__49460);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__49461 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__49461);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__49462 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49462,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49462,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49462,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__49465_50176 = cljs.core.seq(props);
var chunk__49466_50177 = null;
var count__49467_50178 = (0);
var i__49468_50179 = (0);
while(true){
if((i__49468_50179 < count__49467_50178)){
var vec__49476_50180 = chunk__49466_50177.cljs$core$IIndexed$_nth$arity$2(null,i__49468_50179);
var k_50181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49476_50180,(0),null);
var v_50182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49476_50180,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_50181);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50181),v_50182);


var G__50184 = seq__49465_50176;
var G__50185 = chunk__49466_50177;
var G__50186 = count__49467_50178;
var G__50187 = (i__49468_50179 + (1));
seq__49465_50176 = G__50184;
chunk__49466_50177 = G__50185;
count__49467_50178 = G__50186;
i__49468_50179 = G__50187;
continue;
} else {
var temp__5735__auto___50188 = cljs.core.seq(seq__49465_50176);
if(temp__5735__auto___50188){
var seq__49465_50189__$1 = temp__5735__auto___50188;
if(cljs.core.chunked_seq_QMARK_(seq__49465_50189__$1)){
var c__4550__auto___50190 = cljs.core.chunk_first(seq__49465_50189__$1);
var G__50191 = cljs.core.chunk_rest(seq__49465_50189__$1);
var G__50192 = c__4550__auto___50190;
var G__50193 = cljs.core.count(c__4550__auto___50190);
var G__50194 = (0);
seq__49465_50176 = G__50191;
chunk__49466_50177 = G__50192;
count__49467_50178 = G__50193;
i__49468_50179 = G__50194;
continue;
} else {
var vec__49490_50195 = cljs.core.first(seq__49465_50189__$1);
var k_50196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49490_50195,(0),null);
var v_50197 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49490_50195,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_50196);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50196),v_50197);


var G__50200 = cljs.core.next(seq__49465_50189__$1);
var G__50201 = null;
var G__50202 = (0);
var G__50203 = (0);
seq__49465_50176 = G__50200;
chunk__49466_50177 = G__50201;
count__49467_50178 = G__50202;
i__49468_50179 = G__50203;
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
var vec__49498 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49498,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49498,(1),null);
var seq__49501_50204 = cljs.core.seq(node_children);
var chunk__49503_50205 = null;
var count__49504_50206 = (0);
var i__49505_50207 = (0);
while(true){
if((i__49505_50207 < count__49504_50206)){
var child_struct_50208 = chunk__49503_50205.cljs$core$IIndexed$_nth$arity$2(null,i__49505_50207);
if((!((child_struct_50208 == null)))){
if(typeof child_struct_50208 === 'string'){
var text_50209 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50209),child_struct_50208].join(''));
} else {
var children_50210 = shadow.dom.svg_node(child_struct_50208);
if(cljs.core.seq_QMARK_(children_50210)){
var seq__49542_50211 = cljs.core.seq(children_50210);
var chunk__49544_50212 = null;
var count__49545_50213 = (0);
var i__49546_50214 = (0);
while(true){
if((i__49546_50214 < count__49545_50213)){
var child_50215 = chunk__49544_50212.cljs$core$IIndexed$_nth$arity$2(null,i__49546_50214);
if(cljs.core.truth_(child_50215)){
node.appendChild(child_50215);


var G__50216 = seq__49542_50211;
var G__50217 = chunk__49544_50212;
var G__50218 = count__49545_50213;
var G__50219 = (i__49546_50214 + (1));
seq__49542_50211 = G__50216;
chunk__49544_50212 = G__50217;
count__49545_50213 = G__50218;
i__49546_50214 = G__50219;
continue;
} else {
var G__50220 = seq__49542_50211;
var G__50221 = chunk__49544_50212;
var G__50222 = count__49545_50213;
var G__50223 = (i__49546_50214 + (1));
seq__49542_50211 = G__50220;
chunk__49544_50212 = G__50221;
count__49545_50213 = G__50222;
i__49546_50214 = G__50223;
continue;
}
} else {
var temp__5735__auto___50224 = cljs.core.seq(seq__49542_50211);
if(temp__5735__auto___50224){
var seq__49542_50228__$1 = temp__5735__auto___50224;
if(cljs.core.chunked_seq_QMARK_(seq__49542_50228__$1)){
var c__4550__auto___50231 = cljs.core.chunk_first(seq__49542_50228__$1);
var G__50232 = cljs.core.chunk_rest(seq__49542_50228__$1);
var G__50233 = c__4550__auto___50231;
var G__50234 = cljs.core.count(c__4550__auto___50231);
var G__50235 = (0);
seq__49542_50211 = G__50232;
chunk__49544_50212 = G__50233;
count__49545_50213 = G__50234;
i__49546_50214 = G__50235;
continue;
} else {
var child_50238 = cljs.core.first(seq__49542_50228__$1);
if(cljs.core.truth_(child_50238)){
node.appendChild(child_50238);


var G__50239 = cljs.core.next(seq__49542_50228__$1);
var G__50240 = null;
var G__50241 = (0);
var G__50242 = (0);
seq__49542_50211 = G__50239;
chunk__49544_50212 = G__50240;
count__49545_50213 = G__50241;
i__49546_50214 = G__50242;
continue;
} else {
var G__50243 = cljs.core.next(seq__49542_50228__$1);
var G__50244 = null;
var G__50245 = (0);
var G__50246 = (0);
seq__49542_50211 = G__50243;
chunk__49544_50212 = G__50244;
count__49545_50213 = G__50245;
i__49546_50214 = G__50246;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50210);
}
}


var G__50247 = seq__49501_50204;
var G__50248 = chunk__49503_50205;
var G__50249 = count__49504_50206;
var G__50250 = (i__49505_50207 + (1));
seq__49501_50204 = G__50247;
chunk__49503_50205 = G__50248;
count__49504_50206 = G__50249;
i__49505_50207 = G__50250;
continue;
} else {
var G__50251 = seq__49501_50204;
var G__50252 = chunk__49503_50205;
var G__50253 = count__49504_50206;
var G__50254 = (i__49505_50207 + (1));
seq__49501_50204 = G__50251;
chunk__49503_50205 = G__50252;
count__49504_50206 = G__50253;
i__49505_50207 = G__50254;
continue;
}
} else {
var temp__5735__auto___50255 = cljs.core.seq(seq__49501_50204);
if(temp__5735__auto___50255){
var seq__49501_50256__$1 = temp__5735__auto___50255;
if(cljs.core.chunked_seq_QMARK_(seq__49501_50256__$1)){
var c__4550__auto___50257 = cljs.core.chunk_first(seq__49501_50256__$1);
var G__50259 = cljs.core.chunk_rest(seq__49501_50256__$1);
var G__50260 = c__4550__auto___50257;
var G__50261 = cljs.core.count(c__4550__auto___50257);
var G__50262 = (0);
seq__49501_50204 = G__50259;
chunk__49503_50205 = G__50260;
count__49504_50206 = G__50261;
i__49505_50207 = G__50262;
continue;
} else {
var child_struct_50263 = cljs.core.first(seq__49501_50256__$1);
if((!((child_struct_50263 == null)))){
if(typeof child_struct_50263 === 'string'){
var text_50264 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50264),child_struct_50263].join(''));
} else {
var children_50265 = shadow.dom.svg_node(child_struct_50263);
if(cljs.core.seq_QMARK_(children_50265)){
var seq__49549_50266 = cljs.core.seq(children_50265);
var chunk__49551_50267 = null;
var count__49552_50268 = (0);
var i__49553_50269 = (0);
while(true){
if((i__49553_50269 < count__49552_50268)){
var child_50270 = chunk__49551_50267.cljs$core$IIndexed$_nth$arity$2(null,i__49553_50269);
if(cljs.core.truth_(child_50270)){
node.appendChild(child_50270);


var G__50271 = seq__49549_50266;
var G__50272 = chunk__49551_50267;
var G__50273 = count__49552_50268;
var G__50274 = (i__49553_50269 + (1));
seq__49549_50266 = G__50271;
chunk__49551_50267 = G__50272;
count__49552_50268 = G__50273;
i__49553_50269 = G__50274;
continue;
} else {
var G__50275 = seq__49549_50266;
var G__50276 = chunk__49551_50267;
var G__50277 = count__49552_50268;
var G__50278 = (i__49553_50269 + (1));
seq__49549_50266 = G__50275;
chunk__49551_50267 = G__50276;
count__49552_50268 = G__50277;
i__49553_50269 = G__50278;
continue;
}
} else {
var temp__5735__auto___50279__$1 = cljs.core.seq(seq__49549_50266);
if(temp__5735__auto___50279__$1){
var seq__49549_50280__$1 = temp__5735__auto___50279__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49549_50280__$1)){
var c__4550__auto___50281 = cljs.core.chunk_first(seq__49549_50280__$1);
var G__50282 = cljs.core.chunk_rest(seq__49549_50280__$1);
var G__50283 = c__4550__auto___50281;
var G__50284 = cljs.core.count(c__4550__auto___50281);
var G__50285 = (0);
seq__49549_50266 = G__50282;
chunk__49551_50267 = G__50283;
count__49552_50268 = G__50284;
i__49553_50269 = G__50285;
continue;
} else {
var child_50286 = cljs.core.first(seq__49549_50280__$1);
if(cljs.core.truth_(child_50286)){
node.appendChild(child_50286);


var G__50287 = cljs.core.next(seq__49549_50280__$1);
var G__50288 = null;
var G__50289 = (0);
var G__50290 = (0);
seq__49549_50266 = G__50287;
chunk__49551_50267 = G__50288;
count__49552_50268 = G__50289;
i__49553_50269 = G__50290;
continue;
} else {
var G__50291 = cljs.core.next(seq__49549_50280__$1);
var G__50292 = null;
var G__50293 = (0);
var G__50294 = (0);
seq__49549_50266 = G__50291;
chunk__49551_50267 = G__50292;
count__49552_50268 = G__50293;
i__49553_50269 = G__50294;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50265);
}
}


var G__50296 = cljs.core.next(seq__49501_50256__$1);
var G__50297 = null;
var G__50298 = (0);
var G__50299 = (0);
seq__49501_50204 = G__50296;
chunk__49503_50205 = G__50297;
count__49504_50206 = G__50298;
i__49505_50207 = G__50299;
continue;
} else {
var G__50300 = cljs.core.next(seq__49501_50256__$1);
var G__50301 = null;
var G__50302 = (0);
var G__50303 = (0);
seq__49501_50204 = G__50300;
chunk__49503_50205 = G__50301;
count__49504_50206 = G__50302;
i__49505_50207 = G__50303;
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

var G__49557_50304 = shadow.dom._to_svg;
var G__49558_50305 = "string";
var G__49559_50306 = ((function (G__49557_50304,G__49558_50305){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__49557_50304,G__49558_50305))
;
goog.object.set(G__49557_50304,G__49558_50305,G__49559_50306);

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

var G__49563_50309 = shadow.dom._to_svg;
var G__49564_50310 = "null";
var G__49565_50311 = ((function (G__49563_50309,G__49564_50310){
return (function (_){
return null;
});})(G__49563_50309,G__49564_50310))
;
goog.object.set(G__49563_50309,G__49564_50310,G__49565_50311);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___50314 = arguments.length;
var i__4731__auto___50315 = (0);
while(true){
if((i__4731__auto___50315 < len__4730__auto___50314)){
args__4736__auto__.push((arguments[i__4731__auto___50315]));

var G__50316 = (i__4731__auto___50315 + (1));
i__4731__auto___50315 = G__50316;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq49567){
var G__49568 = cljs.core.first(seq49567);
var seq49567__$1 = cljs.core.next(seq49567);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49568,seq49567__$1);
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
var G__49579 = arguments.length;
switch (G__49579) {
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
var G__49582_50322 = shadow.dom.dom_node(el);
var G__49583_50323 = cljs.core.name(event);
var G__49584_50324 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__49582_50322,G__49583_50323,G__49584_50324) : shadow.dom.dom_listen.call(null,G__49582_50322,G__49583_50323,G__49584_50324));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__44468__auto___50325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto___50325,buf,chan,event_fn){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto___50325,buf,chan,event_fn){
return (function (state_49589){
var state_val_49590 = (state_49589[(1)]);
if((state_val_49590 === (1))){
var state_49589__$1 = state_49589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49589__$1,(2),once_or_cleanup);
} else {
if((state_val_49590 === (2))){
var inst_49586 = (state_49589[(2)]);
var inst_49587 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_49589__$1 = (function (){var statearr_49594 = state_49589;
(statearr_49594[(7)] = inst_49586);

return statearr_49594;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49589__$1,inst_49587);
} else {
return null;
}
}
});})(c__44468__auto___50325,buf,chan,event_fn))
;
return ((function (switch__43975__auto__,c__44468__auto___50325,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__43976__auto__ = null;
var shadow$dom$state_machine__43976__auto____0 = (function (){
var statearr_49596 = [null,null,null,null,null,null,null,null];
(statearr_49596[(0)] = shadow$dom$state_machine__43976__auto__);

(statearr_49596[(1)] = (1));

return statearr_49596;
});
var shadow$dom$state_machine__43976__auto____1 = (function (state_49589){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_49589);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e49601){if((e49601 instanceof Object)){
var ex__43979__auto__ = e49601;
var statearr_49602_50327 = state_49589;
(statearr_49602_50327[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_49589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49601;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50328 = state_49589;
state_49589 = G__50328;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
shadow$dom$state_machine__43976__auto__ = function(state_49589){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__43976__auto____0.call(this);
case 1:
return shadow$dom$state_machine__43976__auto____1.call(this,state_49589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__43976__auto____0;
shadow$dom$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__43976__auto____1;
return shadow$dom$state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto___50325,buf,chan,event_fn))
})();
var state__44470__auto__ = (function (){var statearr_49604 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_49604[(6)] = c__44468__auto___50325);

return statearr_49604;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto___50325,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
