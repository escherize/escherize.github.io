goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_40227 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_40227(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_40240 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_40240(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__39251 = coll;
var G__39252 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__39251,G__39252) : shadow.dom.lazy_native_coll_seq.call(null,G__39251,G__39252));
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
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
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
var G__39284 = arguments.length;
switch (G__39284) {
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
var G__39306 = arguments.length;
switch (G__39306) {
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
var G__39316 = arguments.length;
switch (G__39316) {
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
var G__39327 = arguments.length;
switch (G__39327) {
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
var G__39338 = arguments.length;
switch (G__39338) {
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
var G__39361 = arguments.length;
switch (G__39361) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e39368){if((e39368 instanceof Object)){
var e = e39368;
return console.log("didnt support attachEvent",el,e);
} else {
throw e39368;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__39379 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__39380 = null;
var count__39381 = (0);
var i__39382 = (0);
while(true){
if((i__39382 < count__39381)){
var el = chunk__39380.cljs$core$IIndexed$_nth$arity$2(null,i__39382);
var handler_40342__$1 = ((function (seq__39379,chunk__39380,count__39381,i__39382,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39379,chunk__39380,count__39381,i__39382,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40342__$1);


var G__40347 = seq__39379;
var G__40348 = chunk__39380;
var G__40349 = count__39381;
var G__40350 = (i__39382 + (1));
seq__39379 = G__40347;
chunk__39380 = G__40348;
count__39381 = G__40349;
i__39382 = G__40350;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39379);
if(temp__5753__auto__){
var seq__39379__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39379__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39379__$1);
var G__40351 = cljs.core.chunk_rest(seq__39379__$1);
var G__40352 = c__4638__auto__;
var G__40353 = cljs.core.count(c__4638__auto__);
var G__40354 = (0);
seq__39379 = G__40351;
chunk__39380 = G__40352;
count__39381 = G__40353;
i__39382 = G__40354;
continue;
} else {
var el = cljs.core.first(seq__39379__$1);
var handler_40355__$1 = ((function (seq__39379,chunk__39380,count__39381,i__39382,el,seq__39379__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__39379,chunk__39380,count__39381,i__39382,el,seq__39379__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_40355__$1);


var G__40356 = cljs.core.next(seq__39379__$1);
var G__40357 = null;
var G__40358 = (0);
var G__40359 = (0);
seq__39379 = G__40356;
chunk__39380 = G__40357;
count__39381 = G__40358;
i__39382 = G__40359;
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
var G__39402 = arguments.length;
switch (G__39402) {
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
var seq__39423 = cljs.core.seq(events);
var chunk__39424 = null;
var count__39425 = (0);
var i__39426 = (0);
while(true){
if((i__39426 < count__39425)){
var vec__39446 = chunk__39424.cljs$core$IIndexed$_nth$arity$2(null,i__39426);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39446,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39446,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40361 = seq__39423;
var G__40362 = chunk__39424;
var G__40363 = count__39425;
var G__40364 = (i__39426 + (1));
seq__39423 = G__40361;
chunk__39424 = G__40362;
count__39425 = G__40363;
i__39426 = G__40364;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39423);
if(temp__5753__auto__){
var seq__39423__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39423__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39423__$1);
var G__40365 = cljs.core.chunk_rest(seq__39423__$1);
var G__40366 = c__4638__auto__;
var G__40367 = cljs.core.count(c__4638__auto__);
var G__40368 = (0);
seq__39423 = G__40365;
chunk__39424 = G__40366;
count__39425 = G__40367;
i__39426 = G__40368;
continue;
} else {
var vec__39451 = cljs.core.first(seq__39423__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39451,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39451,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40369 = cljs.core.next(seq__39423__$1);
var G__40370 = null;
var G__40371 = (0);
var G__40372 = (0);
seq__39423 = G__40369;
chunk__39424 = G__40370;
count__39425 = G__40371;
i__39426 = G__40372;
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
var seq__39468 = cljs.core.seq(styles);
var chunk__39469 = null;
var count__39470 = (0);
var i__39471 = (0);
while(true){
if((i__39471 < count__39470)){
var vec__39499 = chunk__39469.cljs$core$IIndexed$_nth$arity$2(null,i__39471);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39499,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39499,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40373 = seq__39468;
var G__40374 = chunk__39469;
var G__40375 = count__39470;
var G__40376 = (i__39471 + (1));
seq__39468 = G__40373;
chunk__39469 = G__40374;
count__39470 = G__40375;
i__39471 = G__40376;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39468);
if(temp__5753__auto__){
var seq__39468__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39468__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39468__$1);
var G__40378 = cljs.core.chunk_rest(seq__39468__$1);
var G__40379 = c__4638__auto__;
var G__40380 = cljs.core.count(c__4638__auto__);
var G__40381 = (0);
seq__39468 = G__40378;
chunk__39469 = G__40379;
count__39470 = G__40380;
i__39471 = G__40381;
continue;
} else {
var vec__39504 = cljs.core.first(seq__39468__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39504,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39504,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__40382 = cljs.core.next(seq__39468__$1);
var G__40383 = null;
var G__40384 = (0);
var G__40385 = (0);
seq__39468 = G__40382;
chunk__39469 = G__40383;
count__39470 = G__40384;
i__39471 = G__40385;
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
var G__39509_40386 = key;
var G__39509_40387__$1 = (((G__39509_40386 instanceof cljs.core.Keyword))?G__39509_40386.fqn:null);
switch (G__39509_40387__$1) {
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
var ks_40390 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_40390,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_40390,"aria-");
}
})())){
el.setAttribute(ks_40390,value);
} else {
(el[ks_40390] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__39534){
var map__39536 = p__39534;
var map__39536__$1 = cljs.core.__destructure_map(map__39536);
var props = map__39536__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39536__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__39540 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39540,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39540,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39540,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__39554 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__39554,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__39554;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__39561 = arguments.length;
switch (G__39561) {
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
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
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
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__39573){
var vec__39574 = p__39573;
var seq__39575 = cljs.core.seq(vec__39574);
var first__39576 = cljs.core.first(seq__39575);
var seq__39575__$1 = cljs.core.next(seq__39575);
var nn = first__39576;
var first__39576__$1 = cljs.core.first(seq__39575__$1);
var seq__39575__$2 = cljs.core.next(seq__39575__$1);
var np = first__39576__$1;
var nc = seq__39575__$2;
var node = vec__39574;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39580 = nn;
var G__39581 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39580,G__39581) : create_fn.call(null,G__39580,G__39581));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__39584 = nn;
var G__39585 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__39584,G__39585) : create_fn.call(null,G__39584,G__39585));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__39590 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39590,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39590,(1),null);
var seq__39595_40405 = cljs.core.seq(node_children);
var chunk__39596_40406 = null;
var count__39597_40407 = (0);
var i__39598_40408 = (0);
while(true){
if((i__39598_40408 < count__39597_40407)){
var child_struct_40410 = chunk__39596_40406.cljs$core$IIndexed$_nth$arity$2(null,i__39598_40408);
var children_40411 = shadow.dom.dom_node(child_struct_40410);
if(cljs.core.seq_QMARK_(children_40411)){
var seq__39644_40412 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40411));
var chunk__39646_40413 = null;
var count__39647_40414 = (0);
var i__39648_40415 = (0);
while(true){
if((i__39648_40415 < count__39647_40414)){
var child_40417 = chunk__39646_40413.cljs$core$IIndexed$_nth$arity$2(null,i__39648_40415);
if(cljs.core.truth_(child_40417)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40417);


var G__40418 = seq__39644_40412;
var G__40419 = chunk__39646_40413;
var G__40420 = count__39647_40414;
var G__40421 = (i__39648_40415 + (1));
seq__39644_40412 = G__40418;
chunk__39646_40413 = G__40419;
count__39647_40414 = G__40420;
i__39648_40415 = G__40421;
continue;
} else {
var G__40422 = seq__39644_40412;
var G__40423 = chunk__39646_40413;
var G__40424 = count__39647_40414;
var G__40425 = (i__39648_40415 + (1));
seq__39644_40412 = G__40422;
chunk__39646_40413 = G__40423;
count__39647_40414 = G__40424;
i__39648_40415 = G__40425;
continue;
}
} else {
var temp__5753__auto___40427 = cljs.core.seq(seq__39644_40412);
if(temp__5753__auto___40427){
var seq__39644_40428__$1 = temp__5753__auto___40427;
if(cljs.core.chunked_seq_QMARK_(seq__39644_40428__$1)){
var c__4638__auto___40429 = cljs.core.chunk_first(seq__39644_40428__$1);
var G__40430 = cljs.core.chunk_rest(seq__39644_40428__$1);
var G__40431 = c__4638__auto___40429;
var G__40432 = cljs.core.count(c__4638__auto___40429);
var G__40433 = (0);
seq__39644_40412 = G__40430;
chunk__39646_40413 = G__40431;
count__39647_40414 = G__40432;
i__39648_40415 = G__40433;
continue;
} else {
var child_40434 = cljs.core.first(seq__39644_40428__$1);
if(cljs.core.truth_(child_40434)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40434);


var G__40435 = cljs.core.next(seq__39644_40428__$1);
var G__40436 = null;
var G__40437 = (0);
var G__40438 = (0);
seq__39644_40412 = G__40435;
chunk__39646_40413 = G__40436;
count__39647_40414 = G__40437;
i__39648_40415 = G__40438;
continue;
} else {
var G__40439 = cljs.core.next(seq__39644_40428__$1);
var G__40440 = null;
var G__40441 = (0);
var G__40442 = (0);
seq__39644_40412 = G__40439;
chunk__39646_40413 = G__40440;
count__39647_40414 = G__40441;
i__39648_40415 = G__40442;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40411);
}


var G__40443 = seq__39595_40405;
var G__40444 = chunk__39596_40406;
var G__40445 = count__39597_40407;
var G__40446 = (i__39598_40408 + (1));
seq__39595_40405 = G__40443;
chunk__39596_40406 = G__40444;
count__39597_40407 = G__40445;
i__39598_40408 = G__40446;
continue;
} else {
var temp__5753__auto___40447 = cljs.core.seq(seq__39595_40405);
if(temp__5753__auto___40447){
var seq__39595_40448__$1 = temp__5753__auto___40447;
if(cljs.core.chunked_seq_QMARK_(seq__39595_40448__$1)){
var c__4638__auto___40449 = cljs.core.chunk_first(seq__39595_40448__$1);
var G__40450 = cljs.core.chunk_rest(seq__39595_40448__$1);
var G__40451 = c__4638__auto___40449;
var G__40452 = cljs.core.count(c__4638__auto___40449);
var G__40453 = (0);
seq__39595_40405 = G__40450;
chunk__39596_40406 = G__40451;
count__39597_40407 = G__40452;
i__39598_40408 = G__40453;
continue;
} else {
var child_struct_40457 = cljs.core.first(seq__39595_40448__$1);
var children_40458 = shadow.dom.dom_node(child_struct_40457);
if(cljs.core.seq_QMARK_(children_40458)){
var seq__39650_40459 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40458));
var chunk__39653_40460 = null;
var count__39654_40461 = (0);
var i__39655_40462 = (0);
while(true){
if((i__39655_40462 < count__39654_40461)){
var child_40464 = chunk__39653_40460.cljs$core$IIndexed$_nth$arity$2(null,i__39655_40462);
if(cljs.core.truth_(child_40464)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40464);


var G__40465 = seq__39650_40459;
var G__40466 = chunk__39653_40460;
var G__40467 = count__39654_40461;
var G__40468 = (i__39655_40462 + (1));
seq__39650_40459 = G__40465;
chunk__39653_40460 = G__40466;
count__39654_40461 = G__40467;
i__39655_40462 = G__40468;
continue;
} else {
var G__40469 = seq__39650_40459;
var G__40470 = chunk__39653_40460;
var G__40471 = count__39654_40461;
var G__40472 = (i__39655_40462 + (1));
seq__39650_40459 = G__40469;
chunk__39653_40460 = G__40470;
count__39654_40461 = G__40471;
i__39655_40462 = G__40472;
continue;
}
} else {
var temp__5753__auto___40473__$1 = cljs.core.seq(seq__39650_40459);
if(temp__5753__auto___40473__$1){
var seq__39650_40474__$1 = temp__5753__auto___40473__$1;
if(cljs.core.chunked_seq_QMARK_(seq__39650_40474__$1)){
var c__4638__auto___40475 = cljs.core.chunk_first(seq__39650_40474__$1);
var G__40476 = cljs.core.chunk_rest(seq__39650_40474__$1);
var G__40477 = c__4638__auto___40475;
var G__40478 = cljs.core.count(c__4638__auto___40475);
var G__40479 = (0);
seq__39650_40459 = G__40476;
chunk__39653_40460 = G__40477;
count__39654_40461 = G__40478;
i__39655_40462 = G__40479;
continue;
} else {
var child_40480 = cljs.core.first(seq__39650_40474__$1);
if(cljs.core.truth_(child_40480)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40480);


var G__40481 = cljs.core.next(seq__39650_40474__$1);
var G__40482 = null;
var G__40483 = (0);
var G__40484 = (0);
seq__39650_40459 = G__40481;
chunk__39653_40460 = G__40482;
count__39654_40461 = G__40483;
i__39655_40462 = G__40484;
continue;
} else {
var G__40485 = cljs.core.next(seq__39650_40474__$1);
var G__40486 = null;
var G__40487 = (0);
var G__40488 = (0);
seq__39650_40459 = G__40485;
chunk__39653_40460 = G__40486;
count__39654_40461 = G__40487;
i__39655_40462 = G__40488;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40458);
}


var G__40489 = cljs.core.next(seq__39595_40448__$1);
var G__40490 = null;
var G__40491 = (0);
var G__40492 = (0);
seq__39595_40405 = G__40489;
chunk__39596_40406 = G__40490;
count__39597_40407 = G__40491;
i__39598_40408 = G__40492;
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
var seq__39712 = cljs.core.seq(node);
var chunk__39713 = null;
var count__39714 = (0);
var i__39715 = (0);
while(true){
if((i__39715 < count__39714)){
var n = chunk__39713.cljs$core$IIndexed$_nth$arity$2(null,i__39715);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40500 = seq__39712;
var G__40501 = chunk__39713;
var G__40502 = count__39714;
var G__40503 = (i__39715 + (1));
seq__39712 = G__40500;
chunk__39713 = G__40501;
count__39714 = G__40502;
i__39715 = G__40503;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39712);
if(temp__5753__auto__){
var seq__39712__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39712__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39712__$1);
var G__40505 = cljs.core.chunk_rest(seq__39712__$1);
var G__40506 = c__4638__auto__;
var G__40507 = cljs.core.count(c__4638__auto__);
var G__40508 = (0);
seq__39712 = G__40505;
chunk__39713 = G__40506;
count__39714 = G__40507;
i__39715 = G__40508;
continue;
} else {
var n = cljs.core.first(seq__39712__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__40510 = cljs.core.next(seq__39712__$1);
var G__40511 = null;
var G__40512 = (0);
var G__40513 = (0);
seq__39712 = G__40510;
chunk__39713 = G__40511;
count__39714 = G__40512;
i__39715 = G__40513;
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
var G__39735 = arguments.length;
switch (G__39735) {
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
var G__39739 = arguments.length;
switch (G__39739) {
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
var G__39766 = arguments.length;
switch (G__39766) {
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
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
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
var args__4824__auto__ = [];
var len__4818__auto___40527 = arguments.length;
var i__4819__auto___40528 = (0);
while(true){
if((i__4819__auto___40528 < len__4818__auto___40527)){
args__4824__auto__.push((arguments[i__4819__auto___40528]));

var G__40529 = (i__4819__auto___40528 + (1));
i__4819__auto___40528 = G__40529;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__39801_40530 = cljs.core.seq(nodes);
var chunk__39802_40531 = null;
var count__39803_40532 = (0);
var i__39804_40533 = (0);
while(true){
if((i__39804_40533 < count__39803_40532)){
var node_40535 = chunk__39802_40531.cljs$core$IIndexed$_nth$arity$2(null,i__39804_40533);
fragment.appendChild(shadow.dom._to_dom(node_40535));


var G__40536 = seq__39801_40530;
var G__40537 = chunk__39802_40531;
var G__40538 = count__39803_40532;
var G__40539 = (i__39804_40533 + (1));
seq__39801_40530 = G__40536;
chunk__39802_40531 = G__40537;
count__39803_40532 = G__40538;
i__39804_40533 = G__40539;
continue;
} else {
var temp__5753__auto___40540 = cljs.core.seq(seq__39801_40530);
if(temp__5753__auto___40540){
var seq__39801_40541__$1 = temp__5753__auto___40540;
if(cljs.core.chunked_seq_QMARK_(seq__39801_40541__$1)){
var c__4638__auto___40542 = cljs.core.chunk_first(seq__39801_40541__$1);
var G__40543 = cljs.core.chunk_rest(seq__39801_40541__$1);
var G__40544 = c__4638__auto___40542;
var G__40545 = cljs.core.count(c__4638__auto___40542);
var G__40546 = (0);
seq__39801_40530 = G__40543;
chunk__39802_40531 = G__40544;
count__39803_40532 = G__40545;
i__39804_40533 = G__40546;
continue;
} else {
var node_40547 = cljs.core.first(seq__39801_40541__$1);
fragment.appendChild(shadow.dom._to_dom(node_40547));


var G__40548 = cljs.core.next(seq__39801_40541__$1);
var G__40549 = null;
var G__40550 = (0);
var G__40551 = (0);
seq__39801_40530 = G__40548;
chunk__39802_40531 = G__40549;
count__39803_40532 = G__40550;
i__39804_40533 = G__40551;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq39795){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39795));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__39822_40553 = cljs.core.seq(scripts);
var chunk__39823_40554 = null;
var count__39824_40555 = (0);
var i__39825_40556 = (0);
while(true){
if((i__39825_40556 < count__39824_40555)){
var vec__39844_40561 = chunk__39823_40554.cljs$core$IIndexed$_nth$arity$2(null,i__39825_40556);
var script_tag_40562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39844_40561,(0),null);
var script_body_40563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39844_40561,(1),null);
eval(script_body_40563);


var G__40566 = seq__39822_40553;
var G__40567 = chunk__39823_40554;
var G__40568 = count__39824_40555;
var G__40569 = (i__39825_40556 + (1));
seq__39822_40553 = G__40566;
chunk__39823_40554 = G__40567;
count__39824_40555 = G__40568;
i__39825_40556 = G__40569;
continue;
} else {
var temp__5753__auto___40570 = cljs.core.seq(seq__39822_40553);
if(temp__5753__auto___40570){
var seq__39822_40575__$1 = temp__5753__auto___40570;
if(cljs.core.chunked_seq_QMARK_(seq__39822_40575__$1)){
var c__4638__auto___40576 = cljs.core.chunk_first(seq__39822_40575__$1);
var G__40577 = cljs.core.chunk_rest(seq__39822_40575__$1);
var G__40578 = c__4638__auto___40576;
var G__40579 = cljs.core.count(c__4638__auto___40576);
var G__40580 = (0);
seq__39822_40553 = G__40577;
chunk__39823_40554 = G__40578;
count__39824_40555 = G__40579;
i__39825_40556 = G__40580;
continue;
} else {
var vec__39850_40581 = cljs.core.first(seq__39822_40575__$1);
var script_tag_40582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39850_40581,(0),null);
var script_body_40583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39850_40581,(1),null);
eval(script_body_40583);


var G__40584 = cljs.core.next(seq__39822_40575__$1);
var G__40585 = null;
var G__40586 = (0);
var G__40587 = (0);
seq__39822_40553 = G__40584;
chunk__39823_40554 = G__40585;
count__39824_40555 = G__40586;
i__39825_40556 = G__40587;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__39860){
var vec__39862 = p__39860;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39862,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39862,(1),null);
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
var G__39879 = arguments.length;
switch (G__39879) {
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
var seq__39909 = cljs.core.seq(style_keys);
var chunk__39910 = null;
var count__39911 = (0);
var i__39912 = (0);
while(true){
if((i__39912 < count__39911)){
var it = chunk__39910.cljs$core$IIndexed$_nth$arity$2(null,i__39912);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40613 = seq__39909;
var G__40614 = chunk__39910;
var G__40615 = count__39911;
var G__40616 = (i__39912 + (1));
seq__39909 = G__40613;
chunk__39910 = G__40614;
count__39911 = G__40615;
i__39912 = G__40616;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39909);
if(temp__5753__auto__){
var seq__39909__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39909__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__39909__$1);
var G__40617 = cljs.core.chunk_rest(seq__39909__$1);
var G__40618 = c__4638__auto__;
var G__40619 = cljs.core.count(c__4638__auto__);
var G__40620 = (0);
seq__39909 = G__40617;
chunk__39910 = G__40618;
count__39911 = G__40619;
i__39912 = G__40620;
continue;
} else {
var it = cljs.core.first(seq__39909__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__40622 = cljs.core.next(seq__39909__$1);
var G__40623 = null;
var G__40624 = (0);
var G__40625 = (0);
seq__39909 = G__40622;
chunk__39910 = G__40623;
count__39911 = G__40624;
i__39912 = G__40625;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k39927,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__39932 = k39927;
var G__39932__$1 = (((G__39932 instanceof cljs.core.Keyword))?G__39932.fqn:null);
switch (G__39932__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k39927,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__39939){
var vec__39940 = p__39939;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39940,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39940,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__39926){
var self__ = this;
var G__39926__$1 = this;
return (new cljs.core.RecordIter((0),G__39926__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this39928,other39929){
var self__ = this;
var this39928__$1 = this;
return (((!((other39929 == null)))) && ((((this39928__$1.constructor === other39929.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39928__$1.x,other39929.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39928__$1.y,other39929.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this39928__$1.__extmap,other39929.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k39927){
var self__ = this;
var this__4468__auto____$1 = this;
var G__39980 = k39927;
var G__39980__$1 = (((G__39980 instanceof cljs.core.Keyword))?G__39980.fqn:null);
switch (G__39980__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k39927);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__39926){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__39983 = cljs.core.keyword_identical_QMARK_;
var expr__39984 = k__4470__auto__;
if(cljs.core.truth_((pred__39983.cljs$core$IFn$_invoke$arity$2 ? pred__39983.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__39984) : pred__39983.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__39984)))){
return (new shadow.dom.Coordinate(G__39926,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__39983.cljs$core$IFn$_invoke$arity$2 ? pred__39983.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__39984) : pred__39983.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__39984)))){
return (new shadow.dom.Coordinate(self__.x,G__39926,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__39926),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__39926){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__39926,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__39930){
var extmap__4501__auto__ = (function (){var G__40002 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__39930,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__39930)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40002);
} else {
return G__40002;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__39930),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__39930),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k40011,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__40022 = k40011;
var G__40022__$1 = (((G__40022 instanceof cljs.core.Keyword))?G__40022.fqn:null);
switch (G__40022__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40011,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__40027){
var vec__40028 = p__40027;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40028,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40028,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40010){
var self__ = this;
var G__40010__$1 = this;
return (new cljs.core.RecordIter((0),G__40010__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40012,other40013){
var self__ = this;
var this40012__$1 = this;
return (((!((other40013 == null)))) && ((((this40012__$1.constructor === other40013.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40012__$1.w,other40013.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40012__$1.h,other40013.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40012__$1.__extmap,other40013.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k40011){
var self__ = this;
var this__4468__auto____$1 = this;
var G__40062 = k40011;
var G__40062__$1 = (((G__40062 instanceof cljs.core.Keyword))?G__40062.fqn:null);
switch (G__40062__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k40011);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__40010){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__40067 = cljs.core.keyword_identical_QMARK_;
var expr__40068 = k__4470__auto__;
if(cljs.core.truth_((pred__40067.cljs$core$IFn$_invoke$arity$2 ? pred__40067.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__40068) : pred__40067.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__40068)))){
return (new shadow.dom.Size(G__40010,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__40067.cljs$core$IFn$_invoke$arity$2 ? pred__40067.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__40068) : pred__40067.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__40068)))){
return (new shadow.dom.Size(self__.w,G__40010,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__40010),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__40010){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__40010,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__40015){
var extmap__4501__auto__ = (function (){var G__40089 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40015,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__40015)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40089);
} else {
return G__40089;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__40015),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__40015),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__40722 = (i + (1));
var G__40723 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__40722;
ret = G__40723;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40104){
var vec__40105 = p__40104;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40105,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40105,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__40109 = arguments.length;
switch (G__40109) {
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
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
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
var G__40733 = ps;
var G__40734 = (i + (1));
el__$1 = G__40733;
i = G__40734;
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
var vec__40118 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40118,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40118,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40118,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__40121_40740 = cljs.core.seq(props);
var chunk__40122_40741 = null;
var count__40123_40742 = (0);
var i__40124_40743 = (0);
while(true){
if((i__40124_40743 < count__40123_40742)){
var vec__40134_40744 = chunk__40122_40741.cljs$core$IIndexed$_nth$arity$2(null,i__40124_40743);
var k_40745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40134_40744,(0),null);
var v_40746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40134_40744,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_40745);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40745),v_40746);


var G__40747 = seq__40121_40740;
var G__40748 = chunk__40122_40741;
var G__40749 = count__40123_40742;
var G__40750 = (i__40124_40743 + (1));
seq__40121_40740 = G__40747;
chunk__40122_40741 = G__40748;
count__40123_40742 = G__40749;
i__40124_40743 = G__40750;
continue;
} else {
var temp__5753__auto___40751 = cljs.core.seq(seq__40121_40740);
if(temp__5753__auto___40751){
var seq__40121_40752__$1 = temp__5753__auto___40751;
if(cljs.core.chunked_seq_QMARK_(seq__40121_40752__$1)){
var c__4638__auto___40753 = cljs.core.chunk_first(seq__40121_40752__$1);
var G__40754 = cljs.core.chunk_rest(seq__40121_40752__$1);
var G__40755 = c__4638__auto___40753;
var G__40756 = cljs.core.count(c__4638__auto___40753);
var G__40757 = (0);
seq__40121_40740 = G__40754;
chunk__40122_40741 = G__40755;
count__40123_40742 = G__40756;
i__40124_40743 = G__40757;
continue;
} else {
var vec__40137_40759 = cljs.core.first(seq__40121_40752__$1);
var k_40760 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40137_40759,(0),null);
var v_40761 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40137_40759,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_40760);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_40760),v_40761);


var G__40766 = cljs.core.next(seq__40121_40752__$1);
var G__40767 = null;
var G__40768 = (0);
var G__40769 = (0);
seq__40121_40740 = G__40766;
chunk__40122_40741 = G__40767;
count__40123_40742 = G__40768;
i__40124_40743 = G__40769;
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
var vec__40141 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40141,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40141,(1),null);
var seq__40144_40770 = cljs.core.seq(node_children);
var chunk__40146_40771 = null;
var count__40147_40772 = (0);
var i__40148_40773 = (0);
while(true){
if((i__40148_40773 < count__40147_40772)){
var child_struct_40775 = chunk__40146_40771.cljs$core$IIndexed$_nth$arity$2(null,i__40148_40773);
if((!((child_struct_40775 == null)))){
if(typeof child_struct_40775 === 'string'){
var text_40776 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40776),child_struct_40775].join(''));
} else {
var children_40777 = shadow.dom.svg_node(child_struct_40775);
if(cljs.core.seq_QMARK_(children_40777)){
var seq__40165_40778 = cljs.core.seq(children_40777);
var chunk__40167_40779 = null;
var count__40168_40780 = (0);
var i__40169_40781 = (0);
while(true){
if((i__40169_40781 < count__40168_40780)){
var child_40782 = chunk__40167_40779.cljs$core$IIndexed$_nth$arity$2(null,i__40169_40781);
if(cljs.core.truth_(child_40782)){
node.appendChild(child_40782);


var G__40786 = seq__40165_40778;
var G__40787 = chunk__40167_40779;
var G__40788 = count__40168_40780;
var G__40789 = (i__40169_40781 + (1));
seq__40165_40778 = G__40786;
chunk__40167_40779 = G__40787;
count__40168_40780 = G__40788;
i__40169_40781 = G__40789;
continue;
} else {
var G__40794 = seq__40165_40778;
var G__40795 = chunk__40167_40779;
var G__40796 = count__40168_40780;
var G__40797 = (i__40169_40781 + (1));
seq__40165_40778 = G__40794;
chunk__40167_40779 = G__40795;
count__40168_40780 = G__40796;
i__40169_40781 = G__40797;
continue;
}
} else {
var temp__5753__auto___40798 = cljs.core.seq(seq__40165_40778);
if(temp__5753__auto___40798){
var seq__40165_40799__$1 = temp__5753__auto___40798;
if(cljs.core.chunked_seq_QMARK_(seq__40165_40799__$1)){
var c__4638__auto___40800 = cljs.core.chunk_first(seq__40165_40799__$1);
var G__40801 = cljs.core.chunk_rest(seq__40165_40799__$1);
var G__40802 = c__4638__auto___40800;
var G__40803 = cljs.core.count(c__4638__auto___40800);
var G__40804 = (0);
seq__40165_40778 = G__40801;
chunk__40167_40779 = G__40802;
count__40168_40780 = G__40803;
i__40169_40781 = G__40804;
continue;
} else {
var child_40805 = cljs.core.first(seq__40165_40799__$1);
if(cljs.core.truth_(child_40805)){
node.appendChild(child_40805);


var G__40806 = cljs.core.next(seq__40165_40799__$1);
var G__40807 = null;
var G__40808 = (0);
var G__40809 = (0);
seq__40165_40778 = G__40806;
chunk__40167_40779 = G__40807;
count__40168_40780 = G__40808;
i__40169_40781 = G__40809;
continue;
} else {
var G__40810 = cljs.core.next(seq__40165_40799__$1);
var G__40811 = null;
var G__40812 = (0);
var G__40813 = (0);
seq__40165_40778 = G__40810;
chunk__40167_40779 = G__40811;
count__40168_40780 = G__40812;
i__40169_40781 = G__40813;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40777);
}
}


var G__40814 = seq__40144_40770;
var G__40815 = chunk__40146_40771;
var G__40816 = count__40147_40772;
var G__40817 = (i__40148_40773 + (1));
seq__40144_40770 = G__40814;
chunk__40146_40771 = G__40815;
count__40147_40772 = G__40816;
i__40148_40773 = G__40817;
continue;
} else {
var G__40818 = seq__40144_40770;
var G__40819 = chunk__40146_40771;
var G__40820 = count__40147_40772;
var G__40821 = (i__40148_40773 + (1));
seq__40144_40770 = G__40818;
chunk__40146_40771 = G__40819;
count__40147_40772 = G__40820;
i__40148_40773 = G__40821;
continue;
}
} else {
var temp__5753__auto___40822 = cljs.core.seq(seq__40144_40770);
if(temp__5753__auto___40822){
var seq__40144_40823__$1 = temp__5753__auto___40822;
if(cljs.core.chunked_seq_QMARK_(seq__40144_40823__$1)){
var c__4638__auto___40824 = cljs.core.chunk_first(seq__40144_40823__$1);
var G__40825 = cljs.core.chunk_rest(seq__40144_40823__$1);
var G__40826 = c__4638__auto___40824;
var G__40827 = cljs.core.count(c__4638__auto___40824);
var G__40828 = (0);
seq__40144_40770 = G__40825;
chunk__40146_40771 = G__40826;
count__40147_40772 = G__40827;
i__40148_40773 = G__40828;
continue;
} else {
var child_struct_40829 = cljs.core.first(seq__40144_40823__$1);
if((!((child_struct_40829 == null)))){
if(typeof child_struct_40829 === 'string'){
var text_40831 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_40831),child_struct_40829].join(''));
} else {
var children_40835 = shadow.dom.svg_node(child_struct_40829);
if(cljs.core.seq_QMARK_(children_40835)){
var seq__40179_40836 = cljs.core.seq(children_40835);
var chunk__40181_40837 = null;
var count__40182_40838 = (0);
var i__40183_40839 = (0);
while(true){
if((i__40183_40839 < count__40182_40838)){
var child_40840 = chunk__40181_40837.cljs$core$IIndexed$_nth$arity$2(null,i__40183_40839);
if(cljs.core.truth_(child_40840)){
node.appendChild(child_40840);


var G__40841 = seq__40179_40836;
var G__40842 = chunk__40181_40837;
var G__40843 = count__40182_40838;
var G__40844 = (i__40183_40839 + (1));
seq__40179_40836 = G__40841;
chunk__40181_40837 = G__40842;
count__40182_40838 = G__40843;
i__40183_40839 = G__40844;
continue;
} else {
var G__40848 = seq__40179_40836;
var G__40849 = chunk__40181_40837;
var G__40850 = count__40182_40838;
var G__40851 = (i__40183_40839 + (1));
seq__40179_40836 = G__40848;
chunk__40181_40837 = G__40849;
count__40182_40838 = G__40850;
i__40183_40839 = G__40851;
continue;
}
} else {
var temp__5753__auto___40852__$1 = cljs.core.seq(seq__40179_40836);
if(temp__5753__auto___40852__$1){
var seq__40179_40857__$1 = temp__5753__auto___40852__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40179_40857__$1)){
var c__4638__auto___40858 = cljs.core.chunk_first(seq__40179_40857__$1);
var G__40859 = cljs.core.chunk_rest(seq__40179_40857__$1);
var G__40860 = c__4638__auto___40858;
var G__40861 = cljs.core.count(c__4638__auto___40858);
var G__40862 = (0);
seq__40179_40836 = G__40859;
chunk__40181_40837 = G__40860;
count__40182_40838 = G__40861;
i__40183_40839 = G__40862;
continue;
} else {
var child_40864 = cljs.core.first(seq__40179_40857__$1);
if(cljs.core.truth_(child_40864)){
node.appendChild(child_40864);


var G__40865 = cljs.core.next(seq__40179_40857__$1);
var G__40866 = null;
var G__40867 = (0);
var G__40868 = (0);
seq__40179_40836 = G__40865;
chunk__40181_40837 = G__40866;
count__40182_40838 = G__40867;
i__40183_40839 = G__40868;
continue;
} else {
var G__40869 = cljs.core.next(seq__40179_40857__$1);
var G__40870 = null;
var G__40871 = (0);
var G__40872 = (0);
seq__40179_40836 = G__40869;
chunk__40181_40837 = G__40870;
count__40182_40838 = G__40871;
i__40183_40839 = G__40872;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_40835);
}
}


var G__40873 = cljs.core.next(seq__40144_40823__$1);
var G__40874 = null;
var G__40875 = (0);
var G__40876 = (0);
seq__40144_40770 = G__40873;
chunk__40146_40771 = G__40874;
count__40147_40772 = G__40875;
i__40148_40773 = G__40876;
continue;
} else {
var G__40877 = cljs.core.next(seq__40144_40823__$1);
var G__40878 = null;
var G__40879 = (0);
var G__40880 = (0);
seq__40144_40770 = G__40877;
chunk__40146_40771 = G__40878;
count__40147_40772 = G__40879;
i__40148_40773 = G__40880;
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
var args__4824__auto__ = [];
var len__4818__auto___40883 = arguments.length;
var i__4819__auto___40884 = (0);
while(true){
if((i__4819__auto___40884 < len__4818__auto___40883)){
args__4824__auto__.push((arguments[i__4819__auto___40884]));

var G__40885 = (i__4819__auto___40884 + (1));
i__4819__auto___40884 = G__40885;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq40186){
var G__40187 = cljs.core.first(seq40186);
var seq40186__$1 = cljs.core.next(seq40186);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40187,seq40186__$1);
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
var G__40194 = arguments.length;
switch (G__40194) {
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

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__36947__auto___40890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_40202){
var state_val_40203 = (state_40202[(1)]);
if((state_val_40203 === (1))){
var state_40202__$1 = state_40202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40202__$1,(2),once_or_cleanup);
} else {
if((state_val_40203 === (2))){
var inst_40199 = (state_40202[(2)]);
var inst_40200 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40202__$1 = (function (){var statearr_40211 = state_40202;
(statearr_40211[(7)] = inst_40199);

return statearr_40211;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40202__$1,inst_40200);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__36766__auto__ = null;
var shadow$dom$state_machine__36766__auto____0 = (function (){
var statearr_40212 = [null,null,null,null,null,null,null,null];
(statearr_40212[(0)] = shadow$dom$state_machine__36766__auto__);

(statearr_40212[(1)] = (1));

return statearr_40212;
});
var shadow$dom$state_machine__36766__auto____1 = (function (state_40202){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_40202);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e40213){var ex__36769__auto__ = e40213;
var statearr_40214_40891 = state_40202;
(statearr_40214_40891[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_40202[(4)]))){
var statearr_40215_40892 = state_40202;
(statearr_40215_40892[(1)] = cljs.core.first((state_40202[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40893 = state_40202;
state_40202 = G__40893;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
shadow$dom$state_machine__36766__auto__ = function(state_40202){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__36766__auto____0.call(this);
case 1:
return shadow$dom$state_machine__36766__auto____1.call(this,state_40202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__36766__auto____0;
shadow$dom$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__36766__auto____1;
return shadow$dom$state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_40217 = f__36948__auto__();
(statearr_40217[(6)] = c__36947__auto___40890);

return statearr_40217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
