goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_40306 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_40306(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_40308 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_40308(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__39398 = coll;
var G__39399 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__39398,G__39399) : shadow.dom.lazy_native_coll_seq.call(null,G__39398,G__39399));
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
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
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
var G__39427 = arguments.length;
switch (G__39427) {
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
var G__39434 = arguments.length;
switch (G__39434) {
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
var G__39441 = arguments.length;
switch (G__39441) {
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
var G__39446 = arguments.length;
switch (G__39446) {
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
var G__39457 = arguments.length;
switch (G__39457) {
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
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__39475 = arguments.length;
switch (G__39475) {
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
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e39492){if((e39492 instanceof Object)){
var e = e39492;
return console.log("didnt support attachEvent",el,e);
} else {
throw e39492;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__39520 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__39521 = null;
var count__39522 = (0);
var i__39523 = (0);
while(true){
if((i__39523 < count__39522)){
var el = chunk__39521.cljs$core$IIndexed$_nth$arity$2(null,i__39523);
var handler_40362__$1 = ((function (seq__39520,chunk__39521,count__39522,i__39523,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39520,chunk__39521,count__39522,i__39523,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40362__$1);


var G__40364 = seq__39520;
var G__40365 = chunk__39521;
var G__40366 = count__39522;
var G__40367 = (i__39523 + (1));
seq__39520 = G__40364;
chunk__39521 = G__40365;
count__39522 = G__40366;
i__39523 = G__40367;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39520);
if(temp__5735__auto__){
var seq__39520__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39520__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39520__$1);
var G__40369 = cljs.core.chunk_rest(seq__39520__$1);
var G__40370 = c__4556__auto__;
var G__40371 = cljs.core.count(c__4556__auto__);
var G__40372 = (0);
seq__39520 = G__40369;
chunk__39521 = G__40370;
count__39522 = G__40371;
i__39523 = G__40372;
continue;
} else {
var el = cljs.core.first(seq__39520__$1);
var handler_40373__$1 = ((function (seq__39520,chunk__39521,count__39522,i__39523,el,seq__39520__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39520,chunk__39521,count__39522,i__39523,el,seq__39520__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40373__$1);


var G__40376 = cljs.core.next(seq__39520__$1);
var G__40377 = null;
var G__40378 = (0);
var G__40379 = (0);
seq__39520 = G__40376;
chunk__39521 = G__40377;
count__39522 = G__40378;
i__39523 = G__40379;
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
var G__39538 = arguments.length;
switch (G__39538) {
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
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__39548 = cljs.core.seq(events);
var chunk__39549 = null;
var count__39550 = (0);
var i__39551 = (0);
while(true){
if((i__39551 < count__39550)){
var vec__39565 = chunk__39549.cljs$core$IIndexed$_nth$arity$2(null,i__39551);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39565,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39565,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40413 = seq__39548;
var G__40414 = chunk__39549;
var G__40415 = count__39550;
var G__40416 = (i__39551 + (1));
seq__39548 = G__40413;
chunk__39549 = G__40414;
count__39550 = G__40415;
i__39551 = G__40416;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39548);
if(temp__5735__auto__){
var seq__39548__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39548__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39548__$1);
var G__40423 = cljs.core.chunk_rest(seq__39548__$1);
var G__40425 = c__4556__auto__;
var G__40426 = cljs.core.count(c__4556__auto__);
var G__40427 = (0);
seq__39548 = G__40423;
chunk__39549 = G__40425;
count__39550 = G__40426;
i__39551 = G__40427;
continue;
} else {
var vec__39573 = cljs.core.first(seq__39548__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39573,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39573,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40442 = cljs.core.next(seq__39548__$1);
var G__40443 = null;
var G__40444 = (0);
var G__40445 = (0);
seq__39548 = G__40442;
chunk__39549 = G__40443;
count__39550 = G__40444;
i__39551 = G__40445;
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
var seq__39577 = cljs.core.seq(styles);
var chunk__39578 = null;
var count__39579 = (0);
var i__39580 = (0);
while(true){
if((i__39580 < count__39579)){
var vec__39603 = chunk__39578.cljs$core$IIndexed$_nth$arity$2(null,i__39580);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39603,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39603,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40459 = seq__39577;
var G__40460 = chunk__39578;
var G__40461 = count__39579;
var G__40462 = (i__39580 + (1));
seq__39577 = G__40459;
chunk__39578 = G__40460;
count__39579 = G__40461;
i__39580 = G__40462;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39577);
if(temp__5735__auto__){
var seq__39577__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39577__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39577__$1);
var G__40466 = cljs.core.chunk_rest(seq__39577__$1);
var G__40467 = c__4556__auto__;
var G__40468 = cljs.core.count(c__4556__auto__);
var G__40469 = (0);
seq__39577 = G__40466;
chunk__39578 = G__40467;
count__39579 = G__40468;
i__39580 = G__40469;
continue;
} else {
var vec__39609 = cljs.core.first(seq__39577__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39609,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39609,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40485 = cljs.core.next(seq__39577__$1);
var G__40486 = null;
var G__40487 = (0);
var G__40488 = (0);
seq__39577 = G__40485;
chunk__39578 = G__40486;
count__39579 = G__40487;
i__39580 = G__40488;
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
var G__39617_40490 = key;
var G__39617_40491__$1 = (((G__39617_40490 instanceof cljs.core.Keyword))?G__39617_40490.fqn:null);
switch (G__39617_40491__$1) {
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
var ks_40509 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_40509,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_40509,"aria-");
}
})())){
el.setAttribute(ks_40509,value);
} else {
(el[ks_40509] = value);
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
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__39636){
var map__39637 = p__39636;
var map__39637__$1 = (((((!((map__39637 == null))))?(((((map__39637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39637.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39637):map__39637);
var props = map__39637__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39637__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__39643 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39643,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39643,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39643,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__39647 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__39647,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__39647;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__39659 = arguments.length;
switch (G__39659) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__39665){
var vec__39667 = p__39665;
var seq__39668 = cljs.core.seq(vec__39667);
var first__39669 = cljs.core.first(seq__39668);
var seq__39668__$1 = cljs.core.next(seq__39668);
var nn = first__39669;
var first__39669__$1 = cljs.core.first(seq__39668__$1);
var seq__39668__$2 = cljs.core.next(seq__39668__$1);
var np = first__39669__$1;
var nc = seq__39668__$2;
var node = vec__39667;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39670 = nn;
var G__39671 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39670,G__39671) : create_fn.call(null,G__39670,G__39671));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39672 = nn;
var G__39673 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39672,G__39673) : create_fn.call(null,G__39672,G__39673));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__39675 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39675,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39675,(1),null);
var seq__39678_40570 = cljs.core.seq(node_children);
var chunk__39679_40571 = null;
var count__39680_40572 = (0);
var i__39681_40573 = (0);
while(true){
if((i__39681_40573 < count__39680_40572)){
var child_struct_40574 = chunk__39679_40571.cljs$core$IIndexed$_nth$arity$2(null,i__39681_40573);
var children_40576 = shadow.dom.dom_node(child_struct_40574);
if(cljs.core.seq_QMARK_(children_40576)){
var seq__39721_40578 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40576));
var chunk__39723_40579 = null;
var count__39724_40580 = (0);
var i__39725_40581 = (0);
while(true){
if((i__39725_40581 < count__39724_40580)){
var child_40582 = chunk__39723_40579.cljs$core$IIndexed$_nth$arity$2(null,i__39725_40581);
if(cljs.core.truth_(child_40582)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40582);


var G__40586 = seq__39721_40578;
var G__40587 = chunk__39723_40579;
var G__40588 = count__39724_40580;
var G__40589 = (i__39725_40581 + (1));
seq__39721_40578 = G__40586;
chunk__39723_40579 = G__40587;
count__39724_40580 = G__40588;
i__39725_40581 = G__40589;
continue;
} else {
var G__40592 = seq__39721_40578;
var G__40593 = chunk__39723_40579;
var G__40594 = count__39724_40580;
var G__40595 = (i__39725_40581 + (1));
seq__39721_40578 = G__40592;
chunk__39723_40579 = G__40593;
count__39724_40580 = G__40594;
i__39725_40581 = G__40595;
continue;
}
} else {
var temp__5735__auto___40597 = cljs.core.seq(seq__39721_40578);
if(temp__5735__auto___40597){
var seq__39721_40598__$1 = temp__5735__auto___40597;
if(cljs.core.chunked_seq_QMARK_(seq__39721_40598__$1)){
var c__4556__auto___40599 = cljs.core.chunk_first(seq__39721_40598__$1);
var G__40602 = cljs.core.chunk_rest(seq__39721_40598__$1);
var G__40603 = c__4556__auto___40599;
var G__40604 = cljs.core.count(c__4556__auto___40599);
var G__40605 = (0);
seq__39721_40578 = G__40602;
chunk__39723_40579 = G__40603;
count__39724_40580 = G__40604;
i__39725_40581 = G__40605;
continue;
} else {
var child_40606 = cljs.core.first(seq__39721_40598__$1);
if(cljs.core.truth_(child_40606)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40606);


var G__40608 = cljs.core.next(seq__39721_40598__$1);
var G__40609 = null;
var G__40610 = (0);
var G__40611 = (0);
seq__39721_40578 = G__40608;
chunk__39723_40579 = G__40609;
count__39724_40580 = G__40610;
i__39725_40581 = G__40611;
continue;
} else {
var G__40612 = cljs.core.next(seq__39721_40598__$1);
var G__40613 = null;
var G__40614 = (0);
var G__40615 = (0);
seq__39721_40578 = G__40612;
chunk__39723_40579 = G__40613;
count__39724_40580 = G__40614;
i__39725_40581 = G__40615;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40576);
}


var G__40617 = seq__39678_40570;
var G__40618 = chunk__39679_40571;
var G__40619 = count__39680_40572;
var G__40620 = (i__39681_40573 + (1));
seq__39678_40570 = G__40617;
chunk__39679_40571 = G__40618;
count__39680_40572 = G__40619;
i__39681_40573 = G__40620;
continue;
} else {
var temp__5735__auto___40622 = cljs.core.seq(seq__39678_40570);
if(temp__5735__auto___40622){
var seq__39678_40623__$1 = temp__5735__auto___40622;
if(cljs.core.chunked_seq_QMARK_(seq__39678_40623__$1)){
var c__4556__auto___40624 = cljs.core.chunk_first(seq__39678_40623__$1);
var G__40625 = cljs.core.chunk_rest(seq__39678_40623__$1);
var G__40626 = c__4556__auto___40624;
var G__40627 = cljs.core.count(c__4556__auto___40624);
var G__40628 = (0);
seq__39678_40570 = G__40625;
chunk__39679_40571 = G__40626;
count__39680_40572 = G__40627;
i__39681_40573 = G__40628;
continue;
} else {
var child_struct_40629 = cljs.core.first(seq__39678_40623__$1);
var children_40631 = shadow.dom.dom_node(child_struct_40629);
if(cljs.core.seq_QMARK_(children_40631)){
var seq__39744_40632 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40631));
var chunk__39746_40633 = null;
var count__39747_40634 = (0);
var i__39748_40635 = (0);
while(true){
if((i__39748_40635 < count__39747_40634)){
var child_40636 = chunk__39746_40633.cljs$core$IIndexed$_nth$arity$2(null,i__39748_40635);
if(cljs.core.truth_(child_40636)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40636);


var G__40638 = seq__39744_40632;
var G__40639 = chunk__39746_40633;
var G__40640 = count__39747_40634;
var G__40641 = (i__39748_40635 + (1));
seq__39744_40632 = G__40638;
chunk__39746_40633 = G__40639;
count__39747_40634 = G__40640;
i__39748_40635 = G__40641;
continue;
} else {
var G__40642 = seq__39744_40632;
var G__40643 = chunk__39746_40633;
var G__40644 = count__39747_40634;
var G__40645 = (i__39748_40635 + (1));
seq__39744_40632 = G__40642;
chunk__39746_40633 = G__40643;
count__39747_40634 = G__40644;
i__39748_40635 = G__40645;
continue;
}
} else {
var temp__5735__auto___40651__$1 = cljs.core.seq(seq__39744_40632);
if(temp__5735__auto___40651__$1){
var seq__39744_40652__$1 = temp__5735__auto___40651__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39744_40652__$1)){
var c__4556__auto___40653 = cljs.core.chunk_first(seq__39744_40652__$1);
var G__40658 = cljs.core.chunk_rest(seq__39744_40652__$1);
var G__40659 = c__4556__auto___40653;
var G__40660 = cljs.core.count(c__4556__auto___40653);
var G__40661 = (0);
seq__39744_40632 = G__40658;
chunk__39746_40633 = G__40659;
count__39747_40634 = G__40660;
i__39748_40635 = G__40661;
continue;
} else {
var child_40662 = cljs.core.first(seq__39744_40652__$1);
if(cljs.core.truth_(child_40662)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40662);


var G__40663 = cljs.core.next(seq__39744_40652__$1);
var G__40664 = null;
var G__40665 = (0);
var G__40666 = (0);
seq__39744_40632 = G__40663;
chunk__39746_40633 = G__40664;
count__39747_40634 = G__40665;
i__39748_40635 = G__40666;
continue;
} else {
var G__40667 = cljs.core.next(seq__39744_40652__$1);
var G__40668 = null;
var G__40669 = (0);
var G__40670 = (0);
seq__39744_40632 = G__40667;
chunk__39746_40633 = G__40668;
count__39747_40634 = G__40669;
i__39748_40635 = G__40670;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40631);
}


var G__40673 = cljs.core.next(seq__39678_40623__$1);
var G__40674 = null;
var G__40675 = (0);
var G__40676 = (0);
seq__39678_40570 = G__40673;
chunk__39679_40571 = G__40674;
count__39680_40572 = G__40675;
i__39681_40573 = G__40676;
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
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__39797 = cljs.core.seq(node);
var chunk__39798 = null;
var count__39799 = (0);
var i__39800 = (0);
while(true){
if((i__39800 < count__39799)){
var n = chunk__39798.cljs$core$IIndexed$_nth$arity$2(null,i__39800);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40707 = seq__39797;
var G__40708 = chunk__39798;
var G__40709 = count__39799;
var G__40710 = (i__39800 + (1));
seq__39797 = G__40707;
chunk__39798 = G__40708;
count__39799 = G__40709;
i__39800 = G__40710;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39797);
if(temp__5735__auto__){
var seq__39797__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39797__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39797__$1);
var G__40711 = cljs.core.chunk_rest(seq__39797__$1);
var G__40712 = c__4556__auto__;
var G__40713 = cljs.core.count(c__4556__auto__);
var G__40714 = (0);
seq__39797 = G__40711;
chunk__39798 = G__40712;
count__39799 = G__40713;
i__39800 = G__40714;
continue;
} else {
var n = cljs.core.first(seq__39797__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40715 = cljs.core.next(seq__39797__$1);
var G__40716 = null;
var G__40717 = (0);
var G__40718 = (0);
seq__39797 = G__40715;
chunk__39798 = G__40716;
count__39799 = G__40717;
i__39800 = G__40718;
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
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__39816 = arguments.length;
switch (G__39816) {
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
var G__39830 = arguments.length;
switch (G__39830) {
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
var G__39847 = arguments.length;
switch (G__39847) {
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
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___40736 = arguments.length;
var i__4737__auto___40737 = (0);
while(true){
if((i__4737__auto___40737 < len__4736__auto___40736)){
args__4742__auto__.push((arguments[i__4737__auto___40737]));

var G__40742 = (i__4737__auto___40737 + (1));
i__4737__auto___40737 = G__40742;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__39869_40755 = cljs.core.seq(nodes);
var chunk__39870_40756 = null;
var count__39871_40757 = (0);
var i__39872_40758 = (0);
while(true){
if((i__39872_40758 < count__39871_40757)){
var node_40760 = chunk__39870_40756.cljs$core$IIndexed$_nth$arity$2(null,i__39872_40758);
fragment.appendChild(shadow.dom._to_dom(node_40760));


var G__40768 = seq__39869_40755;
var G__40769 = chunk__39870_40756;
var G__40770 = count__39871_40757;
var G__40771 = (i__39872_40758 + (1));
seq__39869_40755 = G__40768;
chunk__39870_40756 = G__40769;
count__39871_40757 = G__40770;
i__39872_40758 = G__40771;
continue;
} else {
var temp__5735__auto___40773 = cljs.core.seq(seq__39869_40755);
if(temp__5735__auto___40773){
var seq__39869_40774__$1 = temp__5735__auto___40773;
if(cljs.core.chunked_seq_QMARK_(seq__39869_40774__$1)){
var c__4556__auto___40779 = cljs.core.chunk_first(seq__39869_40774__$1);
var G__40782 = cljs.core.chunk_rest(seq__39869_40774__$1);
var G__40783 = c__4556__auto___40779;
var G__40784 = cljs.core.count(c__4556__auto___40779);
var G__40785 = (0);
seq__39869_40755 = G__40782;
chunk__39870_40756 = G__40783;
count__39871_40757 = G__40784;
i__39872_40758 = G__40785;
continue;
} else {
var node_40789 = cljs.core.first(seq__39869_40774__$1);
fragment.appendChild(shadow.dom._to_dom(node_40789));


var G__40790 = cljs.core.next(seq__39869_40774__$1);
var G__40791 = null;
var G__40792 = (0);
var G__40793 = (0);
seq__39869_40755 = G__40790;
chunk__39870_40756 = G__40791;
count__39871_40757 = G__40792;
i__39872_40758 = G__40793;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq39867){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39867));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__39889_40795 = cljs.core.seq(scripts);
var chunk__39890_40796 = null;
var count__39891_40797 = (0);
var i__39892_40798 = (0);
while(true){
if((i__39892_40798 < count__39891_40797)){
var vec__39908_40799 = chunk__39890_40796.cljs$core$IIndexed$_nth$arity$2(null,i__39892_40798);
var script_tag_40800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39908_40799,(0),null);
var script_body_40801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39908_40799,(1),null);
eval(script_body_40801);


var G__40802 = seq__39889_40795;
var G__40803 = chunk__39890_40796;
var G__40804 = count__39891_40797;
var G__40805 = (i__39892_40798 + (1));
seq__39889_40795 = G__40802;
chunk__39890_40796 = G__40803;
count__39891_40797 = G__40804;
i__39892_40798 = G__40805;
continue;
} else {
var temp__5735__auto___40814 = cljs.core.seq(seq__39889_40795);
if(temp__5735__auto___40814){
var seq__39889_40821__$1 = temp__5735__auto___40814;
if(cljs.core.chunked_seq_QMARK_(seq__39889_40821__$1)){
var c__4556__auto___40822 = cljs.core.chunk_first(seq__39889_40821__$1);
var G__40823 = cljs.core.chunk_rest(seq__39889_40821__$1);
var G__40824 = c__4556__auto___40822;
var G__40825 = cljs.core.count(c__4556__auto___40822);
var G__40826 = (0);
seq__39889_40795 = G__40823;
chunk__39890_40796 = G__40824;
count__39891_40797 = G__40825;
i__39892_40798 = G__40826;
continue;
} else {
var vec__39915_40827 = cljs.core.first(seq__39889_40821__$1);
var script_tag_40828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39915_40827,(0),null);
var script_body_40829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39915_40827,(1),null);
eval(script_body_40829);


var G__40830 = cljs.core.next(seq__39889_40821__$1);
var G__40831 = null;
var G__40832 = (0);
var G__40833 = (0);
seq__39889_40795 = G__40830;
chunk__39890_40796 = G__40831;
count__39891_40797 = G__40832;
i__39892_40798 = G__40833;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__39923){
var vec__39924 = p__39923;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39924,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39924,(1),null);
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
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__39931 = arguments.length;
switch (G__39931) {
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
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
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
var seq__39949 = cljs.core.seq(style_keys);
var chunk__39950 = null;
var count__39951 = (0);
var i__39953 = (0);
while(true){
if((i__39953 < count__39951)){
var it = chunk__39950.cljs$core$IIndexed$_nth$arity$2(null,i__39953);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40869 = seq__39949;
var G__40870 = chunk__39950;
var G__40871 = count__39951;
var G__40872 = (i__39953 + (1));
seq__39949 = G__40869;
chunk__39950 = G__40870;
count__39951 = G__40871;
i__39953 = G__40872;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__39949);
if(temp__5735__auto__){
var seq__39949__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39949__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__39949__$1);
var G__40877 = cljs.core.chunk_rest(seq__39949__$1);
var G__40878 = c__4556__auto__;
var G__40879 = cljs.core.count(c__4556__auto__);
var G__40880 = (0);
seq__39949 = G__40877;
chunk__39950 = G__40878;
count__39951 = G__40879;
i__39953 = G__40880;
continue;
} else {
var it = cljs.core.first(seq__39949__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40887 = cljs.core.next(seq__39949__$1);
var G__40888 = null;
var G__40889 = (0);
var G__40890 = (0);
seq__39949 = G__40887;
chunk__39950 = G__40888;
count__39951 = G__40889;
i__39953 = G__40890;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k39967,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__39977 = k39967;
var G__39977__$1 = (((G__39977 instanceof cljs.core.Keyword))?G__39977.fqn:null);
switch (G__39977__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39967,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__39984){
var vec__39986 = p__39984;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39986,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39986,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39966){
var self__ = this;
var G__39966__$1 = this;
return (new cljs.core.RecordIter((0),G__39966__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39968,other39969){
var self__ = this;
var this39968__$1 = this;
return (((!((other39969 == null)))) && ((this39968__$1.constructor === other39969.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39968__$1.x,other39969.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39968__$1.y,other39969.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39968__$1.__extmap,other39969.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__39966){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__40020 = cljs.core.keyword_identical_QMARK_;
var expr__40021 = k__4388__auto__;
if(cljs.core.truth_((pred__40020.cljs$core$IFn$_invoke$arity$2 ? pred__40020.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__40021) : pred__40020.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__40021)))){
return (new shadow.dom.Coordinate(G__39966,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40020.cljs$core$IFn$_invoke$arity$2 ? pred__40020.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__40021) : pred__40020.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__40021)))){
return (new shadow.dom.Coordinate(self__.x,G__39966,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__39966),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__39966){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__39966,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__39972){
var extmap__4419__auto__ = (function (){var G__40031 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39972,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__39972)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40031);
} else {
return G__40031;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__39972),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__39972),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k40036,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__40043 = k40036;
var G__40043__$1 = (((G__40043 instanceof cljs.core.Keyword))?G__40043.fqn:null);
switch (G__40043__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40036,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__40049){
var vec__40050 = p__40049;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40050,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40050,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40035){
var self__ = this;
var G__40035__$1 = this;
return (new cljs.core.RecordIter((0),G__40035__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40037,other40038){
var self__ = this;
var this40037__$1 = this;
return (((!((other40038 == null)))) && ((this40037__$1.constructor === other40038.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40037__$1.w,other40038.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40037__$1.h,other40038.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40037__$1.__extmap,other40038.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__40035){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__40061 = cljs.core.keyword_identical_QMARK_;
var expr__40062 = k__4388__auto__;
if(cljs.core.truth_((pred__40061.cljs$core$IFn$_invoke$arity$2 ? pred__40061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__40062) : pred__40061.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__40062)))){
return (new shadow.dom.Size(G__40035,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40061.cljs$core$IFn$_invoke$arity$2 ? pred__40061.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__40062) : pred__40061.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__40062)))){
return (new shadow.dom.Size(self__.w,G__40035,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__40035),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__40035){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__40035,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__40040){
var extmap__4419__auto__ = (function (){var G__40083 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40040,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__40040)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40083);
} else {
return G__40083;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__40040),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__40040),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
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
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__40924 = (i + (1));
var G__40925 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__40924;
ret = G__40925;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40106){
var vec__40107 = p__40106;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40107,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40107,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__40112 = arguments.length;
switch (G__40112) {
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
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

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
var G__40932 = ps;
var G__40933 = (i + (1));
el__$1 = G__40932;
i = G__40933;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
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
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__40142 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40142,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40142,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40142,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__40146_40949 = cljs.core.seq(props);
var chunk__40147_40950 = null;
var count__40148_40951 = (0);
var i__40149_40952 = (0);
while(true){
if((i__40149_40952 < count__40148_40951)){
var vec__40164_40953 = chunk__40147_40950.cljs$core$IIndexed$_nth$arity$2(null,i__40149_40952);
var k_40954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40164_40953,(0),null);
var v_40955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40164_40953,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_40954);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40954),v_40955);


var G__40956 = seq__40146_40949;
var G__40957 = chunk__40147_40950;
var G__40958 = count__40148_40951;
var G__40959 = (i__40149_40952 + (1));
seq__40146_40949 = G__40956;
chunk__40147_40950 = G__40957;
count__40148_40951 = G__40958;
i__40149_40952 = G__40959;
continue;
} else {
var temp__5735__auto___40960 = cljs.core.seq(seq__40146_40949);
if(temp__5735__auto___40960){
var seq__40146_40961__$1 = temp__5735__auto___40960;
if(cljs.core.chunked_seq_QMARK_(seq__40146_40961__$1)){
var c__4556__auto___40962 = cljs.core.chunk_first(seq__40146_40961__$1);
var G__40963 = cljs.core.chunk_rest(seq__40146_40961__$1);
var G__40964 = c__4556__auto___40962;
var G__40965 = cljs.core.count(c__4556__auto___40962);
var G__40966 = (0);
seq__40146_40949 = G__40963;
chunk__40147_40950 = G__40964;
count__40148_40951 = G__40965;
i__40149_40952 = G__40966;
continue;
} else {
var vec__40168_40972 = cljs.core.first(seq__40146_40961__$1);
var k_40973 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40168_40972,(0),null);
var v_40974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40168_40972,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_40973);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40973),v_40974);


var G__40975 = cljs.core.next(seq__40146_40961__$1);
var G__40976 = null;
var G__40977 = (0);
var G__40978 = (0);
seq__40146_40949 = G__40975;
chunk__40147_40950 = G__40976;
count__40148_40951 = G__40977;
i__40149_40952 = G__40978;
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
var vec__40178 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40178,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40178,(1),null);
var seq__40181_40984 = cljs.core.seq(node_children);
var chunk__40183_40985 = null;
var count__40184_40986 = (0);
var i__40185_40987 = (0);
while(true){
if((i__40185_40987 < count__40184_40986)){
var child_struct_40988 = chunk__40183_40985.cljs$core$IIndexed$_nth$arity$2(null,i__40185_40987);
if((!((child_struct_40988 == null)))){
if(typeof child_struct_40988 === 'string'){
var text_40989 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40989),child_struct_40988].join(''));
} else {
var children_40993 = shadow.dom.svg_node(child_struct_40988);
if(cljs.core.seq_QMARK_(children_40993)){
var seq__40220_40994 = cljs.core.seq(children_40993);
var chunk__40222_40995 = null;
var count__40223_40996 = (0);
var i__40224_40997 = (0);
while(true){
if((i__40224_40997 < count__40223_40996)){
var child_40998 = chunk__40222_40995.cljs$core$IIndexed$_nth$arity$2(null,i__40224_40997);
if(cljs.core.truth_(child_40998)){
node.appendChild(child_40998);


var G__40999 = seq__40220_40994;
var G__41000 = chunk__40222_40995;
var G__41001 = count__40223_40996;
var G__41002 = (i__40224_40997 + (1));
seq__40220_40994 = G__40999;
chunk__40222_40995 = G__41000;
count__40223_40996 = G__41001;
i__40224_40997 = G__41002;
continue;
} else {
var G__41004 = seq__40220_40994;
var G__41005 = chunk__40222_40995;
var G__41006 = count__40223_40996;
var G__41007 = (i__40224_40997 + (1));
seq__40220_40994 = G__41004;
chunk__40222_40995 = G__41005;
count__40223_40996 = G__41006;
i__40224_40997 = G__41007;
continue;
}
} else {
var temp__5735__auto___41010 = cljs.core.seq(seq__40220_40994);
if(temp__5735__auto___41010){
var seq__40220_41011__$1 = temp__5735__auto___41010;
if(cljs.core.chunked_seq_QMARK_(seq__40220_41011__$1)){
var c__4556__auto___41012 = cljs.core.chunk_first(seq__40220_41011__$1);
var G__41013 = cljs.core.chunk_rest(seq__40220_41011__$1);
var G__41014 = c__4556__auto___41012;
var G__41015 = cljs.core.count(c__4556__auto___41012);
var G__41016 = (0);
seq__40220_40994 = G__41013;
chunk__40222_40995 = G__41014;
count__40223_40996 = G__41015;
i__40224_40997 = G__41016;
continue;
} else {
var child_41017 = cljs.core.first(seq__40220_41011__$1);
if(cljs.core.truth_(child_41017)){
node.appendChild(child_41017);


var G__41018 = cljs.core.next(seq__40220_41011__$1);
var G__41019 = null;
var G__41020 = (0);
var G__41021 = (0);
seq__40220_40994 = G__41018;
chunk__40222_40995 = G__41019;
count__40223_40996 = G__41020;
i__40224_40997 = G__41021;
continue;
} else {
var G__41022 = cljs.core.next(seq__40220_41011__$1);
var G__41023 = null;
var G__41024 = (0);
var G__41025 = (0);
seq__40220_40994 = G__41022;
chunk__40222_40995 = G__41023;
count__40223_40996 = G__41024;
i__40224_40997 = G__41025;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40993);
}
}


var G__41026 = seq__40181_40984;
var G__41027 = chunk__40183_40985;
var G__41028 = count__40184_40986;
var G__41029 = (i__40185_40987 + (1));
seq__40181_40984 = G__41026;
chunk__40183_40985 = G__41027;
count__40184_40986 = G__41028;
i__40185_40987 = G__41029;
continue;
} else {
var G__41033 = seq__40181_40984;
var G__41034 = chunk__40183_40985;
var G__41035 = count__40184_40986;
var G__41036 = (i__40185_40987 + (1));
seq__40181_40984 = G__41033;
chunk__40183_40985 = G__41034;
count__40184_40986 = G__41035;
i__40185_40987 = G__41036;
continue;
}
} else {
var temp__5735__auto___41038 = cljs.core.seq(seq__40181_40984);
if(temp__5735__auto___41038){
var seq__40181_41040__$1 = temp__5735__auto___41038;
if(cljs.core.chunked_seq_QMARK_(seq__40181_41040__$1)){
var c__4556__auto___41042 = cljs.core.chunk_first(seq__40181_41040__$1);
var G__41043 = cljs.core.chunk_rest(seq__40181_41040__$1);
var G__41044 = c__4556__auto___41042;
var G__41045 = cljs.core.count(c__4556__auto___41042);
var G__41046 = (0);
seq__40181_40984 = G__41043;
chunk__40183_40985 = G__41044;
count__40184_40986 = G__41045;
i__40185_40987 = G__41046;
continue;
} else {
var child_struct_41047 = cljs.core.first(seq__40181_41040__$1);
if((!((child_struct_41047 == null)))){
if(typeof child_struct_41047 === 'string'){
var text_41048 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41048),child_struct_41047].join(''));
} else {
var children_41049 = shadow.dom.svg_node(child_struct_41047);
if(cljs.core.seq_QMARK_(children_41049)){
var seq__40230_41050 = cljs.core.seq(children_41049);
var chunk__40232_41051 = null;
var count__40233_41052 = (0);
var i__40234_41053 = (0);
while(true){
if((i__40234_41053 < count__40233_41052)){
var child_41054 = chunk__40232_41051.cljs$core$IIndexed$_nth$arity$2(null,i__40234_41053);
if(cljs.core.truth_(child_41054)){
node.appendChild(child_41054);


var G__41055 = seq__40230_41050;
var G__41056 = chunk__40232_41051;
var G__41057 = count__40233_41052;
var G__41058 = (i__40234_41053 + (1));
seq__40230_41050 = G__41055;
chunk__40232_41051 = G__41056;
count__40233_41052 = G__41057;
i__40234_41053 = G__41058;
continue;
} else {
var G__41059 = seq__40230_41050;
var G__41060 = chunk__40232_41051;
var G__41061 = count__40233_41052;
var G__41062 = (i__40234_41053 + (1));
seq__40230_41050 = G__41059;
chunk__40232_41051 = G__41060;
count__40233_41052 = G__41061;
i__40234_41053 = G__41062;
continue;
}
} else {
var temp__5735__auto___41063__$1 = cljs.core.seq(seq__40230_41050);
if(temp__5735__auto___41063__$1){
var seq__40230_41064__$1 = temp__5735__auto___41063__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40230_41064__$1)){
var c__4556__auto___41065 = cljs.core.chunk_first(seq__40230_41064__$1);
var G__41066 = cljs.core.chunk_rest(seq__40230_41064__$1);
var G__41067 = c__4556__auto___41065;
var G__41068 = cljs.core.count(c__4556__auto___41065);
var G__41069 = (0);
seq__40230_41050 = G__41066;
chunk__40232_41051 = G__41067;
count__40233_41052 = G__41068;
i__40234_41053 = G__41069;
continue;
} else {
var child_41070 = cljs.core.first(seq__40230_41064__$1);
if(cljs.core.truth_(child_41070)){
node.appendChild(child_41070);


var G__41072 = cljs.core.next(seq__40230_41064__$1);
var G__41073 = null;
var G__41074 = (0);
var G__41075 = (0);
seq__40230_41050 = G__41072;
chunk__40232_41051 = G__41073;
count__40233_41052 = G__41074;
i__40234_41053 = G__41075;
continue;
} else {
var G__41080 = cljs.core.next(seq__40230_41064__$1);
var G__41081 = null;
var G__41082 = (0);
var G__41083 = (0);
seq__40230_41050 = G__41080;
chunk__40232_41051 = G__41081;
count__40233_41052 = G__41082;
i__40234_41053 = G__41083;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41049);
}
}


var G__41084 = cljs.core.next(seq__40181_41040__$1);
var G__41085 = null;
var G__41086 = (0);
var G__41087 = (0);
seq__40181_40984 = G__41084;
chunk__40183_40985 = G__41085;
count__40184_40986 = G__41086;
i__40185_40987 = G__41087;
continue;
} else {
var G__41088 = cljs.core.next(seq__40181_41040__$1);
var G__41089 = null;
var G__41090 = (0);
var G__41091 = (0);
seq__40181_40984 = G__41088;
chunk__40183_40985 = G__41089;
count__40184_40986 = G__41090;
i__40185_40987 = G__41091;
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

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

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

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___41093 = arguments.length;
var i__4737__auto___41094 = (0);
while(true){
if((i__4737__auto___41094 < len__4736__auto___41093)){
args__4742__auto__.push((arguments[i__4737__auto___41094]));

var G__41095 = (i__4737__auto___41094 + (1));
i__4737__auto___41094 = G__41095;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq40244){
var G__40245 = cljs.core.first(seq40244);
var seq40244__$1 = cljs.core.next(seq40244);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40245,seq40244__$1);
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
var G__40247 = arguments.length;
switch (G__40247) {
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
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__36997__auto___41104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_40261){
var state_val_40262 = (state_40261[(1)]);
if((state_val_40262 === (1))){
var state_40261__$1 = state_40261;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40261__$1,(2),once_or_cleanup);
} else {
if((state_val_40262 === (2))){
var inst_40257 = (state_40261[(2)]);
var inst_40259 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40261__$1 = (function (){var statearr_40269 = state_40261;
(statearr_40269[(7)] = inst_40257);

return statearr_40269;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40261__$1,inst_40259);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__36798__auto__ = null;
var shadow$dom$state_machine__36798__auto____0 = (function (){
var statearr_40274 = [null,null,null,null,null,null,null,null];
(statearr_40274[(0)] = shadow$dom$state_machine__36798__auto__);

(statearr_40274[(1)] = (1));

return statearr_40274;
});
var shadow$dom$state_machine__36798__auto____1 = (function (state_40261){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_40261);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e40275){var ex__36801__auto__ = e40275;
var statearr_40276_41110 = state_40261;
(statearr_40276_41110[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_40261[(4)]))){
var statearr_40277_41111 = state_40261;
(statearr_40277_41111[(1)] = cljs.core.first((state_40261[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41112 = state_40261;
state_40261 = G__41112;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
shadow$dom$state_machine__36798__auto__ = function(state_40261){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__36798__auto____0.call(this);
case 1:
return shadow$dom$state_machine__36798__auto____1.call(this,state_40261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__36798__auto____0;
shadow$dom$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__36798__auto____1;
return shadow$dom$state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_40285 = f__36998__auto__();
(statearr_40285[(6)] = c__36997__auto___41104);

return statearr_40285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
