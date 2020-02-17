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
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
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
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__39298 = coll;
var G__39299 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__39298,G__39299) : shadow.dom.lazy_native_coll_seq.call(null,G__39298,G__39299));
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
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

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
var G__39326 = arguments.length;
switch (G__39326) {
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

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__39333 = arguments.length;
switch (G__39333) {
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

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__39341 = arguments.length;
switch (G__39341) {
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

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__39348 = arguments.length;
switch (G__39348) {
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

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__39359 = arguments.length;
switch (G__39359) {
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

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__39362 = document;
var G__39363 = shadow.dom.dom_node(el);
return goog.dom.contains(G__39362,G__39363);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__39365 = shadow.dom.dom_node(parent);
var G__39366 = shadow.dom.dom_node(el);
return goog.dom.contains(G__39365,G__39366);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__39367 = shadow.dom.dom_node(el);
var G__39368 = cls;
return goog.dom.classlist.add(G__39367,G__39368);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__39370 = shadow.dom.dom_node(el);
var G__39371 = cls;
return goog.dom.classlist.remove(G__39370,G__39371);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__39373 = arguments.length;
switch (G__39373) {
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

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__39375 = shadow.dom.dom_node(el);
var G__39376 = cls;
return goog.dom.classlist.toggle(G__39375,G__39376);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e39382){if((e39382 instanceof Object)){
var e = e39382;
return console.log("didnt support attachEvent",el,e);
} else {
throw e39382;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__39390 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__39391 = null;
var count__39392 = (0);
var i__39393 = (0);
while(true){
if((i__39393 < count__39392)){
var el = chunk__39391.cljs$core$IIndexed$_nth$arity$2(null,i__39393);
var handler_40140__$1 = ((function (seq__39390,chunk__39391,count__39392,i__39393,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39390,chunk__39391,count__39392,i__39393,el))
;
var G__39407_40144 = el;
var G__39408_40145 = cljs.core.name(ev);
var G__39409_40146 = handler_40140__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__39407_40144,G__39408_40145,G__39409_40146) : shadow.dom.dom_listen.call(null,G__39407_40144,G__39408_40145,G__39409_40146));


var G__40147 = seq__39390;
var G__40148 = chunk__39391;
var G__40149 = count__39392;
var G__40150 = (i__39393 + (1));
seq__39390 = G__40147;
chunk__39391 = G__40148;
count__39392 = G__40149;
i__39393 = G__40150;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39390);
if(temp__5735__auto__){
var seq__39390__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39390__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39390__$1);
var G__40151 = cljs.core.chunk_rest(seq__39390__$1);
var G__40152 = c__4609__auto__;
var G__40153 = cljs.core.count(c__4609__auto__);
var G__40154 = (0);
seq__39390 = G__40151;
chunk__39391 = G__40152;
count__39392 = G__40153;
i__39393 = G__40154;
continue;
} else {
var el = cljs.core.first(seq__39390__$1);
var handler_40156__$1 = ((function (seq__39390,chunk__39391,count__39392,i__39393,el,seq__39390__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39390,chunk__39391,count__39392,i__39393,el,seq__39390__$1,temp__5735__auto__))
;
var G__39412_40159 = el;
var G__39413_40160 = cljs.core.name(ev);
var G__39414_40161 = handler_40156__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__39412_40159,G__39413_40160,G__39414_40161) : shadow.dom.dom_listen.call(null,G__39412_40159,G__39413_40160,G__39414_40161));


var G__40165 = cljs.core.next(seq__39390__$1);
var G__40166 = null;
var G__40167 = (0);
var G__40168 = (0);
seq__39390 = G__40165;
chunk__39391 = G__40166;
count__39392 = G__40167;
i__39393 = G__40168;
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
var G__39420 = arguments.length;
switch (G__39420) {
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

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__39425 = shadow.dom.dom_node(el);
var G__39426 = cljs.core.name(ev);
var G__39427 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__39425,G__39426,G__39427) : shadow.dom.dom_listen.call(null,G__39425,G__39426,G__39427));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__39428 = shadow.dom.dom_node(el);
var G__39429 = cljs.core.name(ev);
var G__39430 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__39428,G__39429,G__39430) : shadow.dom.dom_listen_remove.call(null,G__39428,G__39429,G__39430));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__39431 = cljs.core.seq(events);
var chunk__39432 = null;
var count__39433 = (0);
var i__39434 = (0);
while(true){
if((i__39434 < count__39433)){
var vec__39444 = chunk__39432.cljs$core$IIndexed$_nth$arity$2(null,i__39434);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39444,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39444,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40184 = seq__39431;
var G__40185 = chunk__39432;
var G__40186 = count__39433;
var G__40187 = (i__39434 + (1));
seq__39431 = G__40184;
chunk__39432 = G__40185;
count__39433 = G__40186;
i__39434 = G__40187;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39431);
if(temp__5735__auto__){
var seq__39431__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39431__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39431__$1);
var G__40189 = cljs.core.chunk_rest(seq__39431__$1);
var G__40190 = c__4609__auto__;
var G__40191 = cljs.core.count(c__4609__auto__);
var G__40192 = (0);
seq__39431 = G__40189;
chunk__39432 = G__40190;
count__39433 = G__40191;
i__39434 = G__40192;
continue;
} else {
var vec__39448 = cljs.core.first(seq__39431__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39448,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39448,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40196 = cljs.core.next(seq__39431__$1);
var G__40197 = null;
var G__40198 = (0);
var G__40199 = (0);
seq__39431 = G__40196;
chunk__39432 = G__40197;
count__39433 = G__40198;
i__39434 = G__40199;
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
var seq__39453 = cljs.core.seq(styles);
var chunk__39454 = null;
var count__39455 = (0);
var i__39456 = (0);
while(true){
if((i__39456 < count__39455)){
var vec__39479 = chunk__39454.cljs$core$IIndexed$_nth$arity$2(null,i__39456);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39479,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39479,(1),null);
var G__39483_40206 = dom;
var G__39484_40207 = cljs.core.name(k);
var G__39485_40208 = (((v == null))?"":v);
goog.style.setStyle(G__39483_40206,G__39484_40207,G__39485_40208);


var G__40211 = seq__39453;
var G__40212 = chunk__39454;
var G__40213 = count__39455;
var G__40214 = (i__39456 + (1));
seq__39453 = G__40211;
chunk__39454 = G__40212;
count__39455 = G__40213;
i__39456 = G__40214;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39453);
if(temp__5735__auto__){
var seq__39453__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39453__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39453__$1);
var G__40217 = cljs.core.chunk_rest(seq__39453__$1);
var G__40218 = c__4609__auto__;
var G__40219 = cljs.core.count(c__4609__auto__);
var G__40220 = (0);
seq__39453 = G__40217;
chunk__39454 = G__40218;
count__39455 = G__40219;
i__39456 = G__40220;
continue;
} else {
var vec__39488 = cljs.core.first(seq__39453__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39488,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39488,(1),null);
var G__39491_40226 = dom;
var G__39492_40227 = cljs.core.name(k);
var G__39493_40228 = (((v == null))?"":v);
goog.style.setStyle(G__39491_40226,G__39492_40227,G__39493_40228);


var G__40229 = cljs.core.next(seq__39453__$1);
var G__40230 = null;
var G__40231 = (0);
var G__40232 = (0);
seq__39453 = G__40229;
chunk__39454 = G__40230;
count__39455 = G__40231;
i__39456 = G__40232;
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
var G__39494_40234 = key;
var G__39494_40235__$1 = (((G__39494_40234 instanceof cljs.core.Keyword))?G__39494_40234.fqn:null);
switch (G__39494_40235__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

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
var ks_40243 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_40243,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_40243,"aria-");
}
})())){
el.setAttribute(ks_40243,value);
} else {
(el[ks_40243] = value);
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
var G__39496 = shadow.dom.dom_node(el);
var G__39497 = cls;
return goog.dom.classlist.contains(G__39496,G__39497);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__39506){
var map__39507 = p__39506;
var map__39507__$1 = (((((!((map__39507 == null))))?(((((map__39507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39507):map__39507);
var props = map__39507__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39507__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__39510 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39510,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39510,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39510,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__39514 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__39514,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__39514;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__39518 = arguments.length;
switch (G__39518) {
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

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
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
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
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
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__39527){
var vec__39529 = p__39527;
var seq__39530 = cljs.core.seq(vec__39529);
var first__39531 = cljs.core.first(seq__39530);
var seq__39530__$1 = cljs.core.next(seq__39530);
var nn = first__39531;
var first__39531__$1 = cljs.core.first(seq__39530__$1);
var seq__39530__$2 = cljs.core.next(seq__39530__$1);
var np = first__39531__$1;
var nc = seq__39530__$2;
var node = vec__39529;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39535 = nn;
var G__39536 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39535,G__39536) : create_fn.call(null,G__39535,G__39536));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39538 = nn;
var G__39539 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39538,G__39539) : create_fn.call(null,G__39538,G__39539));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__39542 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39542,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39542,(1),null);
var seq__39545_40281 = cljs.core.seq(node_children);
var chunk__39546_40282 = null;
var count__39547_40283 = (0);
var i__39548_40284 = (0);
while(true){
if((i__39548_40284 < count__39547_40283)){
var child_struct_40285 = chunk__39546_40282.cljs$core$IIndexed$_nth$arity$2(null,i__39548_40284);
var children_40286 = shadow.dom.dom_node(child_struct_40285);
if(cljs.core.seq_QMARK_(children_40286)){
var seq__39577_40288 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40286));
var chunk__39579_40289 = null;
var count__39580_40290 = (0);
var i__39581_40291 = (0);
while(true){
if((i__39581_40291 < count__39580_40290)){
var child_40292 = chunk__39579_40289.cljs$core$IIndexed$_nth$arity$2(null,i__39581_40291);
if(cljs.core.truth_(child_40292)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40292);


var G__40293 = seq__39577_40288;
var G__40294 = chunk__39579_40289;
var G__40295 = count__39580_40290;
var G__40296 = (i__39581_40291 + (1));
seq__39577_40288 = G__40293;
chunk__39579_40289 = G__40294;
count__39580_40290 = G__40295;
i__39581_40291 = G__40296;
continue;
} else {
var G__40300 = seq__39577_40288;
var G__40301 = chunk__39579_40289;
var G__40303 = count__39580_40290;
var G__40304 = (i__39581_40291 + (1));
seq__39577_40288 = G__40300;
chunk__39579_40289 = G__40301;
count__39580_40290 = G__40303;
i__39581_40291 = G__40304;
continue;
}
} else {
var temp__5735__auto___40305 = cljs.core.seq(seq__39577_40288);
if(temp__5735__auto___40305){
var seq__39577_40306__$1 = temp__5735__auto___40305;
if(cljs.core.chunked_seq_QMARK_(seq__39577_40306__$1)){
var c__4609__auto___40307 = cljs.core.chunk_first(seq__39577_40306__$1);
var G__40308 = cljs.core.chunk_rest(seq__39577_40306__$1);
var G__40309 = c__4609__auto___40307;
var G__40310 = cljs.core.count(c__4609__auto___40307);
var G__40311 = (0);
seq__39577_40288 = G__40308;
chunk__39579_40289 = G__40309;
count__39580_40290 = G__40310;
i__39581_40291 = G__40311;
continue;
} else {
var child_40312 = cljs.core.first(seq__39577_40306__$1);
if(cljs.core.truth_(child_40312)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40312);


var G__40314 = cljs.core.next(seq__39577_40306__$1);
var G__40315 = null;
var G__40316 = (0);
var G__40317 = (0);
seq__39577_40288 = G__40314;
chunk__39579_40289 = G__40315;
count__39580_40290 = G__40316;
i__39581_40291 = G__40317;
continue;
} else {
var G__40318 = cljs.core.next(seq__39577_40306__$1);
var G__40319 = null;
var G__40320 = (0);
var G__40321 = (0);
seq__39577_40288 = G__40318;
chunk__39579_40289 = G__40319;
count__39580_40290 = G__40320;
i__39581_40291 = G__40321;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40286);
}


var G__40324 = seq__39545_40281;
var G__40325 = chunk__39546_40282;
var G__40326 = count__39547_40283;
var G__40327 = (i__39548_40284 + (1));
seq__39545_40281 = G__40324;
chunk__39546_40282 = G__40325;
count__39547_40283 = G__40326;
i__39548_40284 = G__40327;
continue;
} else {
var temp__5735__auto___40331 = cljs.core.seq(seq__39545_40281);
if(temp__5735__auto___40331){
var seq__39545_40333__$1 = temp__5735__auto___40331;
if(cljs.core.chunked_seq_QMARK_(seq__39545_40333__$1)){
var c__4609__auto___40334 = cljs.core.chunk_first(seq__39545_40333__$1);
var G__40335 = cljs.core.chunk_rest(seq__39545_40333__$1);
var G__40336 = c__4609__auto___40334;
var G__40337 = cljs.core.count(c__4609__auto___40334);
var G__40338 = (0);
seq__39545_40281 = G__40335;
chunk__39546_40282 = G__40336;
count__39547_40283 = G__40337;
i__39548_40284 = G__40338;
continue;
} else {
var child_struct_40339 = cljs.core.first(seq__39545_40333__$1);
var children_40340 = shadow.dom.dom_node(child_struct_40339);
if(cljs.core.seq_QMARK_(children_40340)){
var seq__39596_40342 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40340));
var chunk__39598_40343 = null;
var count__39599_40344 = (0);
var i__39600_40345 = (0);
while(true){
if((i__39600_40345 < count__39599_40344)){
var child_40347 = chunk__39598_40343.cljs$core$IIndexed$_nth$arity$2(null,i__39600_40345);
if(cljs.core.truth_(child_40347)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40347);


var G__40351 = seq__39596_40342;
var G__40352 = chunk__39598_40343;
var G__40353 = count__39599_40344;
var G__40354 = (i__39600_40345 + (1));
seq__39596_40342 = G__40351;
chunk__39598_40343 = G__40352;
count__39599_40344 = G__40353;
i__39600_40345 = G__40354;
continue;
} else {
var G__40356 = seq__39596_40342;
var G__40357 = chunk__39598_40343;
var G__40358 = count__39599_40344;
var G__40359 = (i__39600_40345 + (1));
seq__39596_40342 = G__40356;
chunk__39598_40343 = G__40357;
count__39599_40344 = G__40358;
i__39600_40345 = G__40359;
continue;
}
} else {
var temp__5735__auto___40361__$1 = cljs.core.seq(seq__39596_40342);
if(temp__5735__auto___40361__$1){
var seq__39596_40362__$1 = temp__5735__auto___40361__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39596_40362__$1)){
var c__4609__auto___40363 = cljs.core.chunk_first(seq__39596_40362__$1);
var G__40364 = cljs.core.chunk_rest(seq__39596_40362__$1);
var G__40365 = c__4609__auto___40363;
var G__40366 = cljs.core.count(c__4609__auto___40363);
var G__40367 = (0);
seq__39596_40342 = G__40364;
chunk__39598_40343 = G__40365;
count__39599_40344 = G__40366;
i__39600_40345 = G__40367;
continue;
} else {
var child_40369 = cljs.core.first(seq__39596_40362__$1);
if(cljs.core.truth_(child_40369)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40369);


var G__40370 = cljs.core.next(seq__39596_40362__$1);
var G__40371 = null;
var G__40372 = (0);
var G__40373 = (0);
seq__39596_40342 = G__40370;
chunk__39598_40343 = G__40371;
count__39599_40344 = G__40372;
i__39600_40345 = G__40373;
continue;
} else {
var G__40374 = cljs.core.next(seq__39596_40362__$1);
var G__40375 = null;
var G__40376 = (0);
var G__40377 = (0);
seq__39596_40342 = G__40374;
chunk__39598_40343 = G__40375;
count__39599_40344 = G__40376;
i__39600_40345 = G__40377;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40340);
}


var G__40380 = cljs.core.next(seq__39545_40333__$1);
var G__40381 = null;
var G__40382 = (0);
var G__40383 = (0);
seq__39545_40281 = G__40380;
chunk__39546_40282 = G__40381;
count__39547_40283 = G__40382;
i__39548_40284 = G__40383;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__39616 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__39616);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__39618 = cljs.core.seq(node);
var chunk__39619 = null;
var count__39620 = (0);
var i__39621 = (0);
while(true){
if((i__39621 < count__39620)){
var n = chunk__39619.cljs$core$IIndexed$_nth$arity$2(null,i__39621);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40396 = seq__39618;
var G__40397 = chunk__39619;
var G__40398 = count__39620;
var G__40399 = (i__39621 + (1));
seq__39618 = G__40396;
chunk__39619 = G__40397;
count__39620 = G__40398;
i__39621 = G__40399;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39618);
if(temp__5735__auto__){
var seq__39618__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39618__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39618__$1);
var G__40401 = cljs.core.chunk_rest(seq__39618__$1);
var G__40402 = c__4609__auto__;
var G__40403 = cljs.core.count(c__4609__auto__);
var G__40404 = (0);
seq__39618 = G__40401;
chunk__39619 = G__40402;
count__39620 = G__40403;
i__39621 = G__40404;
continue;
} else {
var n = cljs.core.first(seq__39618__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40408 = cljs.core.next(seq__39618__$1);
var G__40409 = null;
var G__40410 = (0);
var G__40411 = (0);
seq__39618 = G__40408;
chunk__39619 = G__40409;
count__39620 = G__40410;
i__39621 = G__40411;
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
var G__39627 = shadow.dom.dom_node(new$);
var G__39628 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__39627,G__39628);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__39632 = arguments.length;
switch (G__39632) {
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

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__39635 = arguments.length;
switch (G__39635) {
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

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

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
var G__39639 = arguments.length;
switch (G__39639) {
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

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

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
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40435 = arguments.length;
var i__4790__auto___40436 = (0);
while(true){
if((i__4790__auto___40436 < len__4789__auto___40435)){
args__4795__auto__.push((arguments[i__4790__auto___40436]));

var G__40437 = (i__4790__auto___40436 + (1));
i__4790__auto___40436 = G__40437;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__39654_40440 = cljs.core.seq(nodes);
var chunk__39655_40441 = null;
var count__39656_40442 = (0);
var i__39657_40443 = (0);
while(true){
if((i__39657_40443 < count__39656_40442)){
var node_40445 = chunk__39655_40441.cljs$core$IIndexed$_nth$arity$2(null,i__39657_40443);
fragment.appendChild(shadow.dom._to_dom(node_40445));


var G__40446 = seq__39654_40440;
var G__40447 = chunk__39655_40441;
var G__40448 = count__39656_40442;
var G__40449 = (i__39657_40443 + (1));
seq__39654_40440 = G__40446;
chunk__39655_40441 = G__40447;
count__39656_40442 = G__40448;
i__39657_40443 = G__40449;
continue;
} else {
var temp__5735__auto___40450 = cljs.core.seq(seq__39654_40440);
if(temp__5735__auto___40450){
var seq__39654_40451__$1 = temp__5735__auto___40450;
if(cljs.core.chunked_seq_QMARK_(seq__39654_40451__$1)){
var c__4609__auto___40452 = cljs.core.chunk_first(seq__39654_40451__$1);
var G__40453 = cljs.core.chunk_rest(seq__39654_40451__$1);
var G__40454 = c__4609__auto___40452;
var G__40455 = cljs.core.count(c__4609__auto___40452);
var G__40456 = (0);
seq__39654_40440 = G__40453;
chunk__39655_40441 = G__40454;
count__39656_40442 = G__40455;
i__39657_40443 = G__40456;
continue;
} else {
var node_40457 = cljs.core.first(seq__39654_40451__$1);
fragment.appendChild(shadow.dom._to_dom(node_40457));


var G__40458 = cljs.core.next(seq__39654_40451__$1);
var G__40459 = null;
var G__40460 = (0);
var G__40461 = (0);
seq__39654_40440 = G__40458;
chunk__39655_40441 = G__40459;
count__39656_40442 = G__40460;
i__39657_40443 = G__40461;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq39648){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39648));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__39666_40462 = cljs.core.seq(scripts);
var chunk__39667_40463 = null;
var count__39668_40464 = (0);
var i__39669_40465 = (0);
while(true){
if((i__39669_40465 < count__39668_40464)){
var vec__39681_40466 = chunk__39667_40463.cljs$core$IIndexed$_nth$arity$2(null,i__39669_40465);
var script_tag_40467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39681_40466,(0),null);
var script_body_40468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39681_40466,(1),null);
eval(script_body_40468);


var G__40469 = seq__39666_40462;
var G__40470 = chunk__39667_40463;
var G__40471 = count__39668_40464;
var G__40472 = (i__39669_40465 + (1));
seq__39666_40462 = G__40469;
chunk__39667_40463 = G__40470;
count__39668_40464 = G__40471;
i__39669_40465 = G__40472;
continue;
} else {
var temp__5735__auto___40476 = cljs.core.seq(seq__39666_40462);
if(temp__5735__auto___40476){
var seq__39666_40477__$1 = temp__5735__auto___40476;
if(cljs.core.chunked_seq_QMARK_(seq__39666_40477__$1)){
var c__4609__auto___40478 = cljs.core.chunk_first(seq__39666_40477__$1);
var G__40479 = cljs.core.chunk_rest(seq__39666_40477__$1);
var G__40480 = c__4609__auto___40478;
var G__40481 = cljs.core.count(c__4609__auto___40478);
var G__40482 = (0);
seq__39666_40462 = G__40479;
chunk__39667_40463 = G__40480;
count__39668_40464 = G__40481;
i__39669_40465 = G__40482;
continue;
} else {
var vec__39686_40483 = cljs.core.first(seq__39666_40477__$1);
var script_tag_40484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39686_40483,(0),null);
var script_body_40485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39686_40483,(1),null);
eval(script_body_40485);


var G__40486 = cljs.core.next(seq__39666_40477__$1);
var G__40487 = null;
var G__40488 = (0);
var G__40489 = (0);
seq__39666_40462 = G__40486;
chunk__39667_40463 = G__40487;
count__39668_40464 = G__40488;
i__39669_40465 = G__40489;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__39692){
var vec__39694 = p__39692;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39694,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39694,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__39709 = shadow.dom.dom_node(el);
var G__39710 = cls;
return goog.dom.getAncestorByClass(G__39709,G__39710);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__39715 = arguments.length;
switch (G__39715) {
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

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__39719 = shadow.dom.dom_node(el);
var G__39720 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__39719,G__39720);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__39721 = shadow.dom.dom_node(el);
var G__39722 = cljs.core.name(tag);
var G__39723 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__39721,G__39722,G__39723);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__39727 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__39727);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__39730 = shadow.dom.dom_node(dom);
var G__39731 = value;
return goog.dom.forms.setValue(G__39730,G__39731);
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
var seq__39735 = cljs.core.seq(style_keys);
var chunk__39736 = null;
var count__39737 = (0);
var i__39738 = (0);
while(true){
if((i__39738 < count__39737)){
var it = chunk__39736.cljs$core$IIndexed$_nth$arity$2(null,i__39738);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40494 = seq__39735;
var G__40495 = chunk__39736;
var G__40496 = count__39737;
var G__40497 = (i__39738 + (1));
seq__39735 = G__40494;
chunk__39736 = G__40495;
count__39737 = G__40496;
i__39738 = G__40497;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39735);
if(temp__5735__auto__){
var seq__39735__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39735__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__39735__$1);
var G__40498 = cljs.core.chunk_rest(seq__39735__$1);
var G__40499 = c__4609__auto__;
var G__40500 = cljs.core.count(c__4609__auto__);
var G__40501 = (0);
seq__39735 = G__40498;
chunk__39736 = G__40499;
count__39737 = G__40500;
i__39738 = G__40501;
continue;
} else {
var it = cljs.core.first(seq__39735__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40502 = cljs.core.next(seq__39735__$1);
var G__40503 = null;
var G__40504 = (0);
var G__40505 = (0);
seq__39735 = G__40502;
chunk__39736 = G__40503;
count__39737 = G__40504;
i__39738 = G__40505;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k39742,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__39748 = k39742;
var G__39748__$1 = (((G__39748 instanceof cljs.core.Keyword))?G__39748.fqn:null);
switch (G__39748__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39742,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__39749){
var vec__39750 = p__39749;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39750,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39750,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39741){
var self__ = this;
var G__39741__$1 = this;
return (new cljs.core.RecordIter((0),G__39741__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__39764 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__39764(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39743,other39744){
var self__ = this;
var this39743__$1 = this;
return (((!((other39744 == null)))) && ((this39743__$1.constructor === other39744.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39743__$1.x,other39744.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39743__$1.y,other39744.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39743__$1.__extmap,other39744.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__39741){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__39772 = cljs.core.keyword_identical_QMARK_;
var expr__39773 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__39776 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__39777 = expr__39773;
return (pred__39772.cljs$core$IFn$_invoke$arity$2 ? pred__39772.cljs$core$IFn$_invoke$arity$2(G__39776,G__39777) : pred__39772.call(null,G__39776,G__39777));
})())){
return (new shadow.dom.Coordinate(G__39741,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__39778 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__39779 = expr__39773;
return (pred__39772.cljs$core$IFn$_invoke$arity$2 ? pred__39772.cljs$core$IFn$_invoke$arity$2(G__39778,G__39779) : pred__39772.call(null,G__39778,G__39779));
})())){
return (new shadow.dom.Coordinate(self__.x,G__39741,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__39741),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__39741){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__39741,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__39745){
var extmap__4478__auto__ = (function (){var G__39787 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39745,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__39745)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39787);
} else {
return G__39787;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__39745),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__39745),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__39789 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__39789);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__39792 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__39792);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__39794 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__39794);
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k39796,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__39805 = k39796;
var G__39805__$1 = (((G__39805 instanceof cljs.core.Keyword))?G__39805.fqn:null);
switch (G__39805__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39796,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__39806){
var vec__39807 = p__39806;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39807,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39807,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39795){
var self__ = this;
var G__39795__$1 = this;
return (new cljs.core.RecordIter((0),G__39795__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__39817 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__39817(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39797,other39798){
var self__ = this;
var this39797__$1 = this;
return (((!((other39798 == null)))) && ((this39797__$1.constructor === other39798.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39797__$1.w,other39798.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39797__$1.h,other39798.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39797__$1.__extmap,other39798.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__39795){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__39824 = cljs.core.keyword_identical_QMARK_;
var expr__39825 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__39827 = new cljs.core.Keyword(null,"w","w",354169001);
var G__39828 = expr__39825;
return (pred__39824.cljs$core$IFn$_invoke$arity$2 ? pred__39824.cljs$core$IFn$_invoke$arity$2(G__39827,G__39828) : pred__39824.call(null,G__39827,G__39828));
})())){
return (new shadow.dom.Size(G__39795,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__39830 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__39831 = expr__39825;
return (pred__39824.cljs$core$IFn$_invoke$arity$2 ? pred__39824.cljs$core$IFn$_invoke$arity$2(G__39830,G__39831) : pred__39824.call(null,G__39830,G__39831));
})())){
return (new shadow.dom.Size(self__.w,G__39795,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__39795),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__39795){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__39795,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__39799){
var extmap__4478__auto__ = (function (){var G__39838 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39799,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__39799)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__39838);
} else {
return G__39838;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__39799),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__39799),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__39842 = shadow.dom.dom_node(el);
return goog.style.getSize(G__39842);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
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
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__40535 = (i + (1));
var G__40536 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__40535;
ret = G__40536;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39855){
var vec__39857 = p__39855;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39857,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39857,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__39864 = arguments.length;
switch (G__39864) {
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

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__39873_40538 = new_node;
var G__39874_40539 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__39873_40538,G__39874_40539);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__39876_40540 = new_node;
var G__39877_40541 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__39876_40540,G__39877_40541);

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
var G__40544 = ps;
var G__40545 = (i + (1));
el__$1 = G__40544;
i = G__40545;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__39882 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__39882);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__39888 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__39888);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__39890 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__39890);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__39895 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39895,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39895,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39895,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__39899_40547 = cljs.core.seq(props);
var chunk__39900_40548 = null;
var count__39901_40549 = (0);
var i__39902_40550 = (0);
while(true){
if((i__39902_40550 < count__39901_40549)){
var vec__39914_40551 = chunk__39900_40548.cljs$core$IIndexed$_nth$arity$2(null,i__39902_40550);
var k_40552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39914_40551,(0),null);
var v_40553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39914_40551,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_40552);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40552),v_40553);


var G__40554 = seq__39899_40547;
var G__40555 = chunk__39900_40548;
var G__40556 = count__39901_40549;
var G__40557 = (i__39902_40550 + (1));
seq__39899_40547 = G__40554;
chunk__39900_40548 = G__40555;
count__39901_40549 = G__40556;
i__39902_40550 = G__40557;
continue;
} else {
var temp__5735__auto___40558 = cljs.core.seq(seq__39899_40547);
if(temp__5735__auto___40558){
var seq__39899_40559__$1 = temp__5735__auto___40558;
if(cljs.core.chunked_seq_QMARK_(seq__39899_40559__$1)){
var c__4609__auto___40560 = cljs.core.chunk_first(seq__39899_40559__$1);
var G__40561 = cljs.core.chunk_rest(seq__39899_40559__$1);
var G__40562 = c__4609__auto___40560;
var G__40563 = cljs.core.count(c__4609__auto___40560);
var G__40564 = (0);
seq__39899_40547 = G__40561;
chunk__39900_40548 = G__40562;
count__39901_40549 = G__40563;
i__39902_40550 = G__40564;
continue;
} else {
var vec__39919_40565 = cljs.core.first(seq__39899_40559__$1);
var k_40566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39919_40565,(0),null);
var v_40567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39919_40565,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_40566);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40566),v_40567);


var G__40569 = cljs.core.next(seq__39899_40559__$1);
var G__40570 = null;
var G__40571 = (0);
var G__40572 = (0);
seq__39899_40547 = G__40569;
chunk__39900_40548 = G__40570;
count__39901_40549 = G__40571;
i__39902_40550 = G__40572;
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
var vec__39925 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39925,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39925,(1),null);
var seq__39928_40574 = cljs.core.seq(node_children);
var chunk__39930_40575 = null;
var count__39931_40576 = (0);
var i__39932_40577 = (0);
while(true){
if((i__39932_40577 < count__39931_40576)){
var child_struct_40578 = chunk__39930_40575.cljs$core$IIndexed$_nth$arity$2(null,i__39932_40577);
if((!((child_struct_40578 == null)))){
if(typeof child_struct_40578 === 'string'){
var text_40579 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40579),child_struct_40578].join(''));
} else {
var children_40580 = shadow.dom.svg_node(child_struct_40578);
if(cljs.core.seq_QMARK_(children_40580)){
var seq__39966_40581 = cljs.core.seq(children_40580);
var chunk__39968_40582 = null;
var count__39969_40583 = (0);
var i__39970_40584 = (0);
while(true){
if((i__39970_40584 < count__39969_40583)){
var child_40586 = chunk__39968_40582.cljs$core$IIndexed$_nth$arity$2(null,i__39970_40584);
if(cljs.core.truth_(child_40586)){
node.appendChild(child_40586);


var G__40587 = seq__39966_40581;
var G__40588 = chunk__39968_40582;
var G__40589 = count__39969_40583;
var G__40590 = (i__39970_40584 + (1));
seq__39966_40581 = G__40587;
chunk__39968_40582 = G__40588;
count__39969_40583 = G__40589;
i__39970_40584 = G__40590;
continue;
} else {
var G__40591 = seq__39966_40581;
var G__40592 = chunk__39968_40582;
var G__40593 = count__39969_40583;
var G__40594 = (i__39970_40584 + (1));
seq__39966_40581 = G__40591;
chunk__39968_40582 = G__40592;
count__39969_40583 = G__40593;
i__39970_40584 = G__40594;
continue;
}
} else {
var temp__5735__auto___40595 = cljs.core.seq(seq__39966_40581);
if(temp__5735__auto___40595){
var seq__39966_40596__$1 = temp__5735__auto___40595;
if(cljs.core.chunked_seq_QMARK_(seq__39966_40596__$1)){
var c__4609__auto___40597 = cljs.core.chunk_first(seq__39966_40596__$1);
var G__40598 = cljs.core.chunk_rest(seq__39966_40596__$1);
var G__40599 = c__4609__auto___40597;
var G__40600 = cljs.core.count(c__4609__auto___40597);
var G__40601 = (0);
seq__39966_40581 = G__40598;
chunk__39968_40582 = G__40599;
count__39969_40583 = G__40600;
i__39970_40584 = G__40601;
continue;
} else {
var child_40606 = cljs.core.first(seq__39966_40596__$1);
if(cljs.core.truth_(child_40606)){
node.appendChild(child_40606);


var G__40607 = cljs.core.next(seq__39966_40596__$1);
var G__40608 = null;
var G__40609 = (0);
var G__40610 = (0);
seq__39966_40581 = G__40607;
chunk__39968_40582 = G__40608;
count__39969_40583 = G__40609;
i__39970_40584 = G__40610;
continue;
} else {
var G__40611 = cljs.core.next(seq__39966_40596__$1);
var G__40612 = null;
var G__40613 = (0);
var G__40614 = (0);
seq__39966_40581 = G__40611;
chunk__39968_40582 = G__40612;
count__39969_40583 = G__40613;
i__39970_40584 = G__40614;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40580);
}
}


var G__40616 = seq__39928_40574;
var G__40617 = chunk__39930_40575;
var G__40618 = count__39931_40576;
var G__40619 = (i__39932_40577 + (1));
seq__39928_40574 = G__40616;
chunk__39930_40575 = G__40617;
count__39931_40576 = G__40618;
i__39932_40577 = G__40619;
continue;
} else {
var G__40620 = seq__39928_40574;
var G__40621 = chunk__39930_40575;
var G__40622 = count__39931_40576;
var G__40623 = (i__39932_40577 + (1));
seq__39928_40574 = G__40620;
chunk__39930_40575 = G__40621;
count__39931_40576 = G__40622;
i__39932_40577 = G__40623;
continue;
}
} else {
var temp__5735__auto___40624 = cljs.core.seq(seq__39928_40574);
if(temp__5735__auto___40624){
var seq__39928_40625__$1 = temp__5735__auto___40624;
if(cljs.core.chunked_seq_QMARK_(seq__39928_40625__$1)){
var c__4609__auto___40626 = cljs.core.chunk_first(seq__39928_40625__$1);
var G__40627 = cljs.core.chunk_rest(seq__39928_40625__$1);
var G__40628 = c__4609__auto___40626;
var G__40629 = cljs.core.count(c__4609__auto___40626);
var G__40630 = (0);
seq__39928_40574 = G__40627;
chunk__39930_40575 = G__40628;
count__39931_40576 = G__40629;
i__39932_40577 = G__40630;
continue;
} else {
var child_struct_40631 = cljs.core.first(seq__39928_40625__$1);
if((!((child_struct_40631 == null)))){
if(typeof child_struct_40631 === 'string'){
var text_40632 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40632),child_struct_40631].join(''));
} else {
var children_40633 = shadow.dom.svg_node(child_struct_40631);
if(cljs.core.seq_QMARK_(children_40633)){
var seq__39982_40634 = cljs.core.seq(children_40633);
var chunk__39984_40635 = null;
var count__39985_40636 = (0);
var i__39986_40637 = (0);
while(true){
if((i__39986_40637 < count__39985_40636)){
var child_40638 = chunk__39984_40635.cljs$core$IIndexed$_nth$arity$2(null,i__39986_40637);
if(cljs.core.truth_(child_40638)){
node.appendChild(child_40638);


var G__40640 = seq__39982_40634;
var G__40641 = chunk__39984_40635;
var G__40642 = count__39985_40636;
var G__40643 = (i__39986_40637 + (1));
seq__39982_40634 = G__40640;
chunk__39984_40635 = G__40641;
count__39985_40636 = G__40642;
i__39986_40637 = G__40643;
continue;
} else {
var G__40644 = seq__39982_40634;
var G__40645 = chunk__39984_40635;
var G__40646 = count__39985_40636;
var G__40647 = (i__39986_40637 + (1));
seq__39982_40634 = G__40644;
chunk__39984_40635 = G__40645;
count__39985_40636 = G__40646;
i__39986_40637 = G__40647;
continue;
}
} else {
var temp__5735__auto___40648__$1 = cljs.core.seq(seq__39982_40634);
if(temp__5735__auto___40648__$1){
var seq__39982_40649__$1 = temp__5735__auto___40648__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39982_40649__$1)){
var c__4609__auto___40650 = cljs.core.chunk_first(seq__39982_40649__$1);
var G__40651 = cljs.core.chunk_rest(seq__39982_40649__$1);
var G__40652 = c__4609__auto___40650;
var G__40653 = cljs.core.count(c__4609__auto___40650);
var G__40654 = (0);
seq__39982_40634 = G__40651;
chunk__39984_40635 = G__40652;
count__39985_40636 = G__40653;
i__39986_40637 = G__40654;
continue;
} else {
var child_40655 = cljs.core.first(seq__39982_40649__$1);
if(cljs.core.truth_(child_40655)){
node.appendChild(child_40655);


var G__40656 = cljs.core.next(seq__39982_40649__$1);
var G__40657 = null;
var G__40658 = (0);
var G__40659 = (0);
seq__39982_40634 = G__40656;
chunk__39984_40635 = G__40657;
count__39985_40636 = G__40658;
i__39986_40637 = G__40659;
continue;
} else {
var G__40664 = cljs.core.next(seq__39982_40649__$1);
var G__40665 = null;
var G__40666 = (0);
var G__40667 = (0);
seq__39982_40634 = G__40664;
chunk__39984_40635 = G__40665;
count__39985_40636 = G__40666;
i__39986_40637 = G__40667;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40633);
}
}


var G__40668 = cljs.core.next(seq__39928_40625__$1);
var G__40669 = null;
var G__40670 = (0);
var G__40671 = (0);
seq__39928_40574 = G__40668;
chunk__39930_40575 = G__40669;
count__39931_40576 = G__40670;
i__39932_40577 = G__40671;
continue;
} else {
var G__40672 = cljs.core.next(seq__39928_40625__$1);
var G__40673 = null;
var G__40674 = (0);
var G__40675 = (0);
seq__39928_40574 = G__40672;
chunk__39930_40575 = G__40673;
count__39931_40576 = G__40674;
i__39932_40577 = G__40675;
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

var G__40003_40676 = shadow.dom._to_svg;
var G__40004_40677 = "string";
var G__40005_40678 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__40003_40676,G__40004_40677,G__40005_40678);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__40014_40679 = shadow.dom._to_svg;
var G__40015_40680 = "null";
var G__40016_40681 = (function (_){
return null;
});
goog.object.set(G__40014_40679,G__40015_40680,G__40016_40681);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___40682 = arguments.length;
var i__4790__auto___40683 = (0);
while(true){
if((i__4790__auto___40683 < len__4789__auto___40682)){
args__4795__auto__.push((arguments[i__4790__auto___40683]));

var G__40684 = (i__4790__auto___40683 + (1));
i__4790__auto___40683 = G__40684;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq40022){
var G__40023 = cljs.core.first(seq40022);
var seq40022__$1 = cljs.core.next(seq40022);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40023,seq40022__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__40040 = arguments.length;
switch (G__40040) {
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

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__40054_40687 = shadow.dom.dom_node(el);
var G__40055_40688 = cljs.core.name(event);
var G__40056_40689 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40054_40687,G__40055_40688,G__40056_40689) : shadow.dom.dom_listen.call(null,G__40054_40687,G__40055_40688,G__40056_40689));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__37665__auto___40690 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_40062){
var state_val_40063 = (state_40062[(1)]);
if((state_val_40063 === (1))){
var state_40062__$1 = state_40062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40062__$1,(2),once_or_cleanup);
} else {
if((state_val_40063 === (2))){
var inst_40059 = (state_40062[(2)]);
var inst_40060 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40062__$1 = (function (){var statearr_40070 = state_40062;
(statearr_40070[(7)] = inst_40059);

return statearr_40070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40062__$1,inst_40060);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__37598__auto__ = null;
var shadow$dom$state_machine__37598__auto____0 = (function (){
var statearr_40072 = [null,null,null,null,null,null,null,null];
(statearr_40072[(0)] = shadow$dom$state_machine__37598__auto__);

(statearr_40072[(1)] = (1));

return statearr_40072;
});
var shadow$dom$state_machine__37598__auto____1 = (function (state_40062){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_40062);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e40073){if((e40073 instanceof Object)){
var ex__37601__auto__ = e40073;
var statearr_40074_40698 = state_40062;
(statearr_40074_40698[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40073;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40699 = state_40062;
state_40062 = G__40699;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
shadow$dom$state_machine__37598__auto__ = function(state_40062){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__37598__auto____0.call(this);
case 1:
return shadow$dom$state_machine__37598__auto____1.call(this,state_40062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__37598__auto____0;
shadow$dom$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__37598__auto____1;
return shadow$dom$state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_40079 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_40079[(6)] = c__37665__auto___40690);

return statearr_40079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
