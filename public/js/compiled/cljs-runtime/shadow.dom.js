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
return cljs.core.cons((coll[idx]),(function (){var G__40579 = coll;
var G__40580 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__40579,G__40580) : shadow.dom.lazy_native_coll_seq.call(null,G__40579,G__40580));
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
var G__40618 = arguments.length;
switch (G__40618) {
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
var G__40625 = arguments.length;
switch (G__40625) {
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
var G__40631 = arguments.length;
switch (G__40631) {
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
var G__40648 = arguments.length;
switch (G__40648) {
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
var G__40663 = arguments.length;
switch (G__40663) {
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
var G__40668 = document;
var G__40669 = shadow.dom.dom_node(el);
return goog.dom.contains(G__40668,G__40669);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__40673 = shadow.dom.dom_node(parent);
var G__40674 = shadow.dom.dom_node(el);
return goog.dom.contains(G__40673,G__40674);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__40675 = shadow.dom.dom_node(el);
var G__40676 = cls;
return goog.dom.classlist.add(G__40675,G__40676);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__40681 = shadow.dom.dom_node(el);
var G__40682 = cls;
return goog.dom.classlist.remove(G__40681,G__40682);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__40689 = arguments.length;
switch (G__40689) {
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
var G__40693 = shadow.dom.dom_node(el);
var G__40694 = cls;
return goog.dom.classlist.toggle(G__40693,G__40694);
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
}catch (e40707){if((e40707 instanceof Object)){
var e = e40707;
return console.log("didnt support attachEvent",el,e);
} else {
throw e40707;

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
var seq__40715 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__40716 = null;
var count__40717 = (0);
var i__40718 = (0);
while(true){
if((i__40718 < count__40717)){
var el = chunk__40716.cljs$core$IIndexed$_nth$arity$2(null,i__40718);
var handler_41899__$1 = ((function (seq__40715,chunk__40716,count__40717,i__40718,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40715,chunk__40716,count__40717,i__40718,el))
;
var G__40745_41901 = el;
var G__40746_41902 = cljs.core.name(ev);
var G__40747_41903 = handler_41899__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40745_41901,G__40746_41902,G__40747_41903) : shadow.dom.dom_listen.call(null,G__40745_41901,G__40746_41902,G__40747_41903));


var G__41905 = seq__40715;
var G__41906 = chunk__40716;
var G__41907 = count__40717;
var G__41908 = (i__40718 + (1));
seq__40715 = G__41905;
chunk__40716 = G__41906;
count__40717 = G__41907;
i__40718 = G__41908;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40715);
if(temp__5735__auto__){
var seq__40715__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40715__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40715__$1);
var G__41911 = cljs.core.chunk_rest(seq__40715__$1);
var G__41912 = c__4609__auto__;
var G__41913 = cljs.core.count(c__4609__auto__);
var G__41914 = (0);
seq__40715 = G__41911;
chunk__40716 = G__41912;
count__40717 = G__41913;
i__40718 = G__41914;
continue;
} else {
var el = cljs.core.first(seq__40715__$1);
var handler_41917__$1 = ((function (seq__40715,chunk__40716,count__40717,i__40718,el,seq__40715__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40715,chunk__40716,count__40717,i__40718,el,seq__40715__$1,temp__5735__auto__))
;
var G__40751_41920 = el;
var G__40752_41921 = cljs.core.name(ev);
var G__40753_41922 = handler_41917__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40751_41920,G__40752_41921,G__40753_41922) : shadow.dom.dom_listen.call(null,G__40751_41920,G__40752_41921,G__40753_41922));


var G__41923 = cljs.core.next(seq__40715__$1);
var G__41924 = null;
var G__41925 = (0);
var G__41926 = (0);
seq__40715 = G__41923;
chunk__40716 = G__41924;
count__40717 = G__41925;
i__40718 = G__41926;
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
var G__40763 = arguments.length;
switch (G__40763) {
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
var G__40769 = shadow.dom.dom_node(el);
var G__40770 = cljs.core.name(ev);
var G__40771 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40769,G__40770,G__40771) : shadow.dom.dom_listen.call(null,G__40769,G__40770,G__40771));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__40772 = shadow.dom.dom_node(el);
var G__40773 = cljs.core.name(ev);
var G__40774 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__40772,G__40773,G__40774) : shadow.dom.dom_listen_remove.call(null,G__40772,G__40773,G__40774));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__40776 = cljs.core.seq(events);
var chunk__40777 = null;
var count__40778 = (0);
var i__40779 = (0);
while(true){
if((i__40779 < count__40778)){
var vec__40799 = chunk__40777.cljs$core$IIndexed$_nth$arity$2(null,i__40779);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40799,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40799,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__41945 = seq__40776;
var G__41946 = chunk__40777;
var G__41947 = count__40778;
var G__41948 = (i__40779 + (1));
seq__40776 = G__41945;
chunk__40777 = G__41946;
count__40778 = G__41947;
i__40779 = G__41948;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40776);
if(temp__5735__auto__){
var seq__40776__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40776__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40776__$1);
var G__41951 = cljs.core.chunk_rest(seq__40776__$1);
var G__41952 = c__4609__auto__;
var G__41953 = cljs.core.count(c__4609__auto__);
var G__41954 = (0);
seq__40776 = G__41951;
chunk__40777 = G__41952;
count__40778 = G__41953;
i__40779 = G__41954;
continue;
} else {
var vec__40806 = cljs.core.first(seq__40776__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40806,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40806,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__41959 = cljs.core.next(seq__40776__$1);
var G__41960 = null;
var G__41961 = (0);
var G__41962 = (0);
seq__40776 = G__41959;
chunk__40777 = G__41960;
count__40778 = G__41961;
i__40779 = G__41962;
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
var seq__40812 = cljs.core.seq(styles);
var chunk__40813 = null;
var count__40814 = (0);
var i__40815 = (0);
while(true){
if((i__40815 < count__40814)){
var vec__40844 = chunk__40813.cljs$core$IIndexed$_nth$arity$2(null,i__40815);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40844,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40844,(1),null);
var G__40847_41965 = dom;
var G__40848_41966 = cljs.core.name(k);
var G__40849_41967 = (((v == null))?"":v);
goog.style.setStyle(G__40847_41965,G__40848_41966,G__40849_41967);


var G__41969 = seq__40812;
var G__41970 = chunk__40813;
var G__41971 = count__40814;
var G__41972 = (i__40815 + (1));
seq__40812 = G__41969;
chunk__40813 = G__41970;
count__40814 = G__41971;
i__40815 = G__41972;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40812);
if(temp__5735__auto__){
var seq__40812__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40812__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__40812__$1);
var G__41974 = cljs.core.chunk_rest(seq__40812__$1);
var G__41975 = c__4609__auto__;
var G__41976 = cljs.core.count(c__4609__auto__);
var G__41977 = (0);
seq__40812 = G__41974;
chunk__40813 = G__41975;
count__40814 = G__41976;
i__40815 = G__41977;
continue;
} else {
var vec__40852 = cljs.core.first(seq__40812__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40852,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40852,(1),null);
var G__40855_41979 = dom;
var G__40856_41980 = cljs.core.name(k);
var G__40857_41981 = (((v == null))?"":v);
goog.style.setStyle(G__40855_41979,G__40856_41980,G__40857_41981);


var G__41983 = cljs.core.next(seq__40812__$1);
var G__41984 = null;
var G__41985 = (0);
var G__41986 = (0);
seq__40812 = G__41983;
chunk__40813 = G__41984;
count__40814 = G__41985;
i__40815 = G__41986;
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
var G__40860_41987 = key;
var G__40860_41988__$1 = (((G__40860_41987 instanceof cljs.core.Keyword))?G__40860_41987.fqn:null);
switch (G__40860_41988__$1) {
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
var ks_42001 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_42001,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_42001,"aria-");
}
})())){
el.setAttribute(ks_42001,value);
} else {
(el[ks_42001] = value);
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
var G__40877 = shadow.dom.dom_node(el);
var G__40878 = cls;
return goog.dom.classlist.contains(G__40877,G__40878);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__40889){
var map__40891 = p__40889;
var map__40891__$1 = (((((!((map__40891 == null))))?(((((map__40891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40891):map__40891);
var props = map__40891__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40891__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__40904 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40904,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40904,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40904,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__40909 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__40909,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__40909;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__40920 = arguments.length;
switch (G__40920) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__40945){
var vec__40948 = p__40945;
var seq__40949 = cljs.core.seq(vec__40948);
var first__40950 = cljs.core.first(seq__40949);
var seq__40949__$1 = cljs.core.next(seq__40949);
var nn = first__40950;
var first__40950__$1 = cljs.core.first(seq__40949__$1);
var seq__40949__$2 = cljs.core.next(seq__40949__$1);
var np = first__40950__$1;
var nc = seq__40949__$2;
var node = vec__40948;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40952 = nn;
var G__40953 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40952,G__40953) : create_fn.call(null,G__40952,G__40953));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40955 = nn;
var G__40956 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40955,G__40956) : create_fn.call(null,G__40955,G__40956));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__40962 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40962,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40962,(1),null);
var seq__40967_42043 = cljs.core.seq(node_children);
var chunk__40968_42044 = null;
var count__40969_42045 = (0);
var i__40970_42046 = (0);
while(true){
if((i__40970_42046 < count__40969_42045)){
var child_struct_42049 = chunk__40968_42044.cljs$core$IIndexed$_nth$arity$2(null,i__40970_42046);
var children_42052 = shadow.dom.dom_node(child_struct_42049);
if(cljs.core.seq_QMARK_(children_42052)){
var seq__41022_42054 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_42052));
var chunk__41024_42055 = null;
var count__41025_42056 = (0);
var i__41026_42057 = (0);
while(true){
if((i__41026_42057 < count__41025_42056)){
var child_42059 = chunk__41024_42055.cljs$core$IIndexed$_nth$arity$2(null,i__41026_42057);
if(cljs.core.truth_(child_42059)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42059);


var G__42061 = seq__41022_42054;
var G__42062 = chunk__41024_42055;
var G__42063 = count__41025_42056;
var G__42064 = (i__41026_42057 + (1));
seq__41022_42054 = G__42061;
chunk__41024_42055 = G__42062;
count__41025_42056 = G__42063;
i__41026_42057 = G__42064;
continue;
} else {
var G__42066 = seq__41022_42054;
var G__42067 = chunk__41024_42055;
var G__42068 = count__41025_42056;
var G__42069 = (i__41026_42057 + (1));
seq__41022_42054 = G__42066;
chunk__41024_42055 = G__42067;
count__41025_42056 = G__42068;
i__41026_42057 = G__42069;
continue;
}
} else {
var temp__5735__auto___42072 = cljs.core.seq(seq__41022_42054);
if(temp__5735__auto___42072){
var seq__41022_42074__$1 = temp__5735__auto___42072;
if(cljs.core.chunked_seq_QMARK_(seq__41022_42074__$1)){
var c__4609__auto___42075 = cljs.core.chunk_first(seq__41022_42074__$1);
var G__42077 = cljs.core.chunk_rest(seq__41022_42074__$1);
var G__42078 = c__4609__auto___42075;
var G__42079 = cljs.core.count(c__4609__auto___42075);
var G__42080 = (0);
seq__41022_42054 = G__42077;
chunk__41024_42055 = G__42078;
count__41025_42056 = G__42079;
i__41026_42057 = G__42080;
continue;
} else {
var child_42084 = cljs.core.first(seq__41022_42074__$1);
if(cljs.core.truth_(child_42084)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42084);


var G__42085 = cljs.core.next(seq__41022_42074__$1);
var G__42086 = null;
var G__42087 = (0);
var G__42088 = (0);
seq__41022_42054 = G__42085;
chunk__41024_42055 = G__42086;
count__41025_42056 = G__42087;
i__41026_42057 = G__42088;
continue;
} else {
var G__42089 = cljs.core.next(seq__41022_42074__$1);
var G__42090 = null;
var G__42091 = (0);
var G__42092 = (0);
seq__41022_42054 = G__42089;
chunk__41024_42055 = G__42090;
count__41025_42056 = G__42091;
i__41026_42057 = G__42092;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_42052);
}


var G__42095 = seq__40967_42043;
var G__42096 = chunk__40968_42044;
var G__42097 = count__40969_42045;
var G__42098 = (i__40970_42046 + (1));
seq__40967_42043 = G__42095;
chunk__40968_42044 = G__42096;
count__40969_42045 = G__42097;
i__40970_42046 = G__42098;
continue;
} else {
var temp__5735__auto___42100 = cljs.core.seq(seq__40967_42043);
if(temp__5735__auto___42100){
var seq__40967_42101__$1 = temp__5735__auto___42100;
if(cljs.core.chunked_seq_QMARK_(seq__40967_42101__$1)){
var c__4609__auto___42103 = cljs.core.chunk_first(seq__40967_42101__$1);
var G__42104 = cljs.core.chunk_rest(seq__40967_42101__$1);
var G__42105 = c__4609__auto___42103;
var G__42106 = cljs.core.count(c__4609__auto___42103);
var G__42107 = (0);
seq__40967_42043 = G__42104;
chunk__40968_42044 = G__42105;
count__40969_42045 = G__42106;
i__40970_42046 = G__42107;
continue;
} else {
var child_struct_42109 = cljs.core.first(seq__40967_42101__$1);
var children_42110 = shadow.dom.dom_node(child_struct_42109);
if(cljs.core.seq_QMARK_(children_42110)){
var seq__41048_42111 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_42110));
var chunk__41050_42112 = null;
var count__41051_42113 = (0);
var i__41052_42114 = (0);
while(true){
if((i__41052_42114 < count__41051_42113)){
var child_42115 = chunk__41050_42112.cljs$core$IIndexed$_nth$arity$2(null,i__41052_42114);
if(cljs.core.truth_(child_42115)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42115);


var G__42119 = seq__41048_42111;
var G__42120 = chunk__41050_42112;
var G__42121 = count__41051_42113;
var G__42122 = (i__41052_42114 + (1));
seq__41048_42111 = G__42119;
chunk__41050_42112 = G__42120;
count__41051_42113 = G__42121;
i__41052_42114 = G__42122;
continue;
} else {
var G__42123 = seq__41048_42111;
var G__42124 = chunk__41050_42112;
var G__42125 = count__41051_42113;
var G__42126 = (i__41052_42114 + (1));
seq__41048_42111 = G__42123;
chunk__41050_42112 = G__42124;
count__41051_42113 = G__42125;
i__41052_42114 = G__42126;
continue;
}
} else {
var temp__5735__auto___42129__$1 = cljs.core.seq(seq__41048_42111);
if(temp__5735__auto___42129__$1){
var seq__41048_42130__$1 = temp__5735__auto___42129__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41048_42130__$1)){
var c__4609__auto___42133 = cljs.core.chunk_first(seq__41048_42130__$1);
var G__42135 = cljs.core.chunk_rest(seq__41048_42130__$1);
var G__42136 = c__4609__auto___42133;
var G__42137 = cljs.core.count(c__4609__auto___42133);
var G__42138 = (0);
seq__41048_42111 = G__42135;
chunk__41050_42112 = G__42136;
count__41051_42113 = G__42137;
i__41052_42114 = G__42138;
continue;
} else {
var child_42140 = cljs.core.first(seq__41048_42130__$1);
if(cljs.core.truth_(child_42140)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_42140);


var G__42146 = cljs.core.next(seq__41048_42130__$1);
var G__42147 = null;
var G__42148 = (0);
var G__42149 = (0);
seq__41048_42111 = G__42146;
chunk__41050_42112 = G__42147;
count__41051_42113 = G__42148;
i__41052_42114 = G__42149;
continue;
} else {
var G__42150 = cljs.core.next(seq__41048_42130__$1);
var G__42151 = null;
var G__42152 = (0);
var G__42153 = (0);
seq__41048_42111 = G__42150;
chunk__41050_42112 = G__42151;
count__41051_42113 = G__42152;
i__41052_42114 = G__42153;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_42110);
}


var G__42155 = cljs.core.next(seq__40967_42101__$1);
var G__42156 = null;
var G__42157 = (0);
var G__42158 = (0);
seq__40967_42043 = G__42155;
chunk__40968_42044 = G__42156;
count__40969_42045 = G__42157;
i__40970_42046 = G__42158;
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
var G__41104 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__41104);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__41114 = cljs.core.seq(node);
var chunk__41115 = null;
var count__41116 = (0);
var i__41117 = (0);
while(true){
if((i__41117 < count__41116)){
var n = chunk__41115.cljs$core$IIndexed$_nth$arity$2(null,i__41117);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__42171 = seq__41114;
var G__42172 = chunk__41115;
var G__42173 = count__41116;
var G__42174 = (i__41117 + (1));
seq__41114 = G__42171;
chunk__41115 = G__42172;
count__41116 = G__42173;
i__41117 = G__42174;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41114);
if(temp__5735__auto__){
var seq__41114__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41114__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41114__$1);
var G__42182 = cljs.core.chunk_rest(seq__41114__$1);
var G__42183 = c__4609__auto__;
var G__42184 = cljs.core.count(c__4609__auto__);
var G__42185 = (0);
seq__41114 = G__42182;
chunk__41115 = G__42183;
count__41116 = G__42184;
i__41117 = G__42185;
continue;
} else {
var n = cljs.core.first(seq__41114__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__42186 = cljs.core.next(seq__41114__$1);
var G__42187 = null;
var G__42188 = (0);
var G__42189 = (0);
seq__41114 = G__42186;
chunk__41115 = G__42187;
count__41116 = G__42188;
i__41117 = G__42189;
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
var G__41138 = shadow.dom.dom_node(new$);
var G__41139 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__41138,G__41139);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__41148 = arguments.length;
switch (G__41148) {
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
var G__41162 = arguments.length;
switch (G__41162) {
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
var G__41225 = arguments.length;
switch (G__41225) {
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
var len__4789__auto___42241 = arguments.length;
var i__4790__auto___42242 = (0);
while(true){
if((i__4790__auto___42242 < len__4789__auto___42241)){
args__4795__auto__.push((arguments[i__4790__auto___42242]));

var G__42244 = (i__4790__auto___42242 + (1));
i__4790__auto___42242 = G__42244;
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
var seq__41286_42245 = cljs.core.seq(nodes);
var chunk__41287_42246 = null;
var count__41288_42247 = (0);
var i__41289_42248 = (0);
while(true){
if((i__41289_42248 < count__41288_42247)){
var node_42250 = chunk__41287_42246.cljs$core$IIndexed$_nth$arity$2(null,i__41289_42248);
fragment.appendChild(shadow.dom._to_dom(node_42250));


var G__42252 = seq__41286_42245;
var G__42253 = chunk__41287_42246;
var G__42254 = count__41288_42247;
var G__42255 = (i__41289_42248 + (1));
seq__41286_42245 = G__42252;
chunk__41287_42246 = G__42253;
count__41288_42247 = G__42254;
i__41289_42248 = G__42255;
continue;
} else {
var temp__5735__auto___42256 = cljs.core.seq(seq__41286_42245);
if(temp__5735__auto___42256){
var seq__41286_42258__$1 = temp__5735__auto___42256;
if(cljs.core.chunked_seq_QMARK_(seq__41286_42258__$1)){
var c__4609__auto___42260 = cljs.core.chunk_first(seq__41286_42258__$1);
var G__42261 = cljs.core.chunk_rest(seq__41286_42258__$1);
var G__42262 = c__4609__auto___42260;
var G__42263 = cljs.core.count(c__4609__auto___42260);
var G__42264 = (0);
seq__41286_42245 = G__42261;
chunk__41287_42246 = G__42262;
count__41288_42247 = G__42263;
i__41289_42248 = G__42264;
continue;
} else {
var node_42268 = cljs.core.first(seq__41286_42258__$1);
fragment.appendChild(shadow.dom._to_dom(node_42268));


var G__42270 = cljs.core.next(seq__41286_42258__$1);
var G__42271 = null;
var G__42272 = (0);
var G__42273 = (0);
seq__41286_42245 = G__42270;
chunk__41287_42246 = G__42271;
count__41288_42247 = G__42272;
i__41289_42248 = G__42273;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq41283){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41283));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__41319_42278 = cljs.core.seq(scripts);
var chunk__41320_42279 = null;
var count__41321_42280 = (0);
var i__41322_42281 = (0);
while(true){
if((i__41322_42281 < count__41321_42280)){
var vec__41338_42282 = chunk__41320_42279.cljs$core$IIndexed$_nth$arity$2(null,i__41322_42281);
var script_tag_42283 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41338_42282,(0),null);
var script_body_42284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41338_42282,(1),null);
eval(script_body_42284);


var G__42287 = seq__41319_42278;
var G__42288 = chunk__41320_42279;
var G__42289 = count__41321_42280;
var G__42290 = (i__41322_42281 + (1));
seq__41319_42278 = G__42287;
chunk__41320_42279 = G__42288;
count__41321_42280 = G__42289;
i__41322_42281 = G__42290;
continue;
} else {
var temp__5735__auto___42291 = cljs.core.seq(seq__41319_42278);
if(temp__5735__auto___42291){
var seq__41319_42294__$1 = temp__5735__auto___42291;
if(cljs.core.chunked_seq_QMARK_(seq__41319_42294__$1)){
var c__4609__auto___42295 = cljs.core.chunk_first(seq__41319_42294__$1);
var G__42296 = cljs.core.chunk_rest(seq__41319_42294__$1);
var G__42297 = c__4609__auto___42295;
var G__42298 = cljs.core.count(c__4609__auto___42295);
var G__42299 = (0);
seq__41319_42278 = G__42296;
chunk__41320_42279 = G__42297;
count__41321_42280 = G__42298;
i__41322_42281 = G__42299;
continue;
} else {
var vec__41348_42302 = cljs.core.first(seq__41319_42294__$1);
var script_tag_42303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41348_42302,(0),null);
var script_body_42304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41348_42302,(1),null);
eval(script_body_42304);


var G__42305 = cljs.core.next(seq__41319_42294__$1);
var G__42306 = null;
var G__42307 = (0);
var G__42308 = (0);
seq__41319_42278 = G__42305;
chunk__41320_42279 = G__42306;
count__41321_42280 = G__42307;
i__41322_42281 = G__42308;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__41358){
var vec__41359 = p__41358;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41359,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41359,(1),null);
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
var G__41379 = shadow.dom.dom_node(el);
var G__41380 = cls;
return goog.dom.getAncestorByClass(G__41379,G__41380);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__41383 = arguments.length;
switch (G__41383) {
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
var G__41387 = shadow.dom.dom_node(el);
var G__41388 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__41387,G__41388);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__41389 = shadow.dom.dom_node(el);
var G__41390 = cljs.core.name(tag);
var G__41391 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__41389,G__41390,G__41391);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__41394 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__41394);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__41397 = shadow.dom.dom_node(dom);
var G__41398 = value;
return goog.dom.forms.setValue(G__41397,G__41398);
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
var seq__41406 = cljs.core.seq(style_keys);
var chunk__41407 = null;
var count__41408 = (0);
var i__41409 = (0);
while(true){
if((i__41409 < count__41408)){
var it = chunk__41407.cljs$core$IIndexed$_nth$arity$2(null,i__41409);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__42330 = seq__41406;
var G__42331 = chunk__41407;
var G__42332 = count__41408;
var G__42333 = (i__41409 + (1));
seq__41406 = G__42330;
chunk__41407 = G__42331;
count__41408 = G__42332;
i__41409 = G__42333;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__41406);
if(temp__5735__auto__){
var seq__41406__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__41406__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__41406__$1);
var G__42335 = cljs.core.chunk_rest(seq__41406__$1);
var G__42336 = c__4609__auto__;
var G__42337 = cljs.core.count(c__4609__auto__);
var G__42338 = (0);
seq__41406 = G__42335;
chunk__41407 = G__42336;
count__41408 = G__42337;
i__41409 = G__42338;
continue;
} else {
var it = cljs.core.first(seq__41406__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__42341 = cljs.core.next(seq__41406__$1);
var G__42342 = null;
var G__42343 = (0);
var G__42344 = (0);
seq__41406 = G__42341;
chunk__41407 = G__42342;
count__41408 = G__42343;
i__41409 = G__42344;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k41418,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__41433 = k41418;
var G__41433__$1 = (((G__41433 instanceof cljs.core.Keyword))?G__41433.fqn:null);
switch (G__41433__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41418,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__41435){
var vec__41438 = p__41435;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41438,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41438,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41417){
var self__ = this;
var G__41417__$1 = this;
return (new cljs.core.RecordIter((0),G__41417__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__41461 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__41461(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41419,other41420){
var self__ = this;
var this41419__$1 = this;
return (((!((other41420 == null)))) && ((this41419__$1.constructor === other41420.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41419__$1.x,other41420.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41419__$1.y,other41420.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41419__$1.__extmap,other41420.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__41417){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__41473 = cljs.core.keyword_identical_QMARK_;
var expr__41474 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__41476 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__41477 = expr__41474;
return (pred__41473.cljs$core$IFn$_invoke$arity$2 ? pred__41473.cljs$core$IFn$_invoke$arity$2(G__41476,G__41477) : pred__41473.call(null,G__41476,G__41477));
})())){
return (new shadow.dom.Coordinate(G__41417,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__41478 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__41479 = expr__41474;
return (pred__41473.cljs$core$IFn$_invoke$arity$2 ? pred__41473.cljs$core$IFn$_invoke$arity$2(G__41478,G__41479) : pred__41473.call(null,G__41478,G__41479));
})())){
return (new shadow.dom.Coordinate(self__.x,G__41417,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__41417),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__41417){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__41417,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__41424){
var extmap__4478__auto__ = (function (){var G__41484 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41424,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__41424)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41484);
} else {
return G__41484;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__41424),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__41424),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__41485 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__41485);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__41495 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__41495);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__41497 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__41497);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k41509,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__41513 = k41509;
var G__41513__$1 = (((G__41513 instanceof cljs.core.Keyword))?G__41513.fqn:null);
switch (G__41513__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41509,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__41514){
var vec__41516 = p__41514;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41516,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41516,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41508){
var self__ = this;
var G__41508__$1 = this;
return (new cljs.core.RecordIter((0),G__41508__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__41546 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__41546(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41510,other41511){
var self__ = this;
var this41510__$1 = this;
return (((!((other41511 == null)))) && ((this41510__$1.constructor === other41511.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41510__$1.w,other41511.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41510__$1.h,other41511.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41510__$1.__extmap,other41511.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__41508){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__41573 = cljs.core.keyword_identical_QMARK_;
var expr__41574 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__41576 = new cljs.core.Keyword(null,"w","w",354169001);
var G__41577 = expr__41574;
return (pred__41573.cljs$core$IFn$_invoke$arity$2 ? pred__41573.cljs$core$IFn$_invoke$arity$2(G__41576,G__41577) : pred__41573.call(null,G__41576,G__41577));
})())){
return (new shadow.dom.Size(G__41508,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__41583 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__41584 = expr__41574;
return (pred__41573.cljs$core$IFn$_invoke$arity$2 ? pred__41573.cljs$core$IFn$_invoke$arity$2(G__41583,G__41584) : pred__41573.call(null,G__41583,G__41584));
})())){
return (new shadow.dom.Size(self__.w,G__41508,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__41508),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__41508){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__41508,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__41512){
var extmap__4478__auto__ = (function (){var G__41601 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__41512,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__41512)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41601);
} else {
return G__41601;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__41512),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__41512),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__41608 = shadow.dom.dom_node(el);
return goog.style.getSize(G__41608);
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
var G__42444 = (i + (1));
var G__42445 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__42444;
ret = G__42445;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41624){
var vec__41625 = p__41624;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41625,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41625,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__41635 = arguments.length;
switch (G__41635) {
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
var G__41644_42450 = new_node;
var G__41645_42451 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__41644_42450,G__41645_42451);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__41649_42457 = new_node;
var G__41650_42458 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__41649_42457,G__41650_42458);

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
var G__42463 = ps;
var G__42464 = (i + (1));
el__$1 = G__42463;
i = G__42464;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__41658 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__41658);
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
var G__41667 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__41667);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__41675 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__41675);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__41679 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41679,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41679,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41679,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__41683_42481 = cljs.core.seq(props);
var chunk__41684_42482 = null;
var count__41685_42483 = (0);
var i__41686_42484 = (0);
while(true){
if((i__41686_42484 < count__41685_42483)){
var vec__41700_42492 = chunk__41684_42482.cljs$core$IIndexed$_nth$arity$2(null,i__41686_42484);
var k_42493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41700_42492,(0),null);
var v_42494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41700_42492,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_42493);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42493),v_42494);


var G__42495 = seq__41683_42481;
var G__42496 = chunk__41684_42482;
var G__42497 = count__41685_42483;
var G__42498 = (i__41686_42484 + (1));
seq__41683_42481 = G__42495;
chunk__41684_42482 = G__42496;
count__41685_42483 = G__42497;
i__41686_42484 = G__42498;
continue;
} else {
var temp__5735__auto___42499 = cljs.core.seq(seq__41683_42481);
if(temp__5735__auto___42499){
var seq__41683_42500__$1 = temp__5735__auto___42499;
if(cljs.core.chunked_seq_QMARK_(seq__41683_42500__$1)){
var c__4609__auto___42501 = cljs.core.chunk_first(seq__41683_42500__$1);
var G__42502 = cljs.core.chunk_rest(seq__41683_42500__$1);
var G__42503 = c__4609__auto___42501;
var G__42504 = cljs.core.count(c__4609__auto___42501);
var G__42505 = (0);
seq__41683_42481 = G__42502;
chunk__41684_42482 = G__42503;
count__41685_42483 = G__42504;
i__41686_42484 = G__42505;
continue;
} else {
var vec__41704_42508 = cljs.core.first(seq__41683_42500__$1);
var k_42509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41704_42508,(0),null);
var v_42510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41704_42508,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_42509);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_42509),v_42510);


var G__42512 = cljs.core.next(seq__41683_42500__$1);
var G__42513 = null;
var G__42514 = (0);
var G__42515 = (0);
seq__41683_42481 = G__42512;
chunk__41684_42482 = G__42513;
count__41685_42483 = G__42514;
i__41686_42484 = G__42515;
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
var vec__41714 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41714,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41714,(1),null);
var seq__41718_42518 = cljs.core.seq(node_children);
var chunk__41720_42519 = null;
var count__41721_42520 = (0);
var i__41722_42521 = (0);
while(true){
if((i__41722_42521 < count__41721_42520)){
var child_struct_42522 = chunk__41720_42519.cljs$core$IIndexed$_nth$arity$2(null,i__41722_42521);
if((!((child_struct_42522 == null)))){
if(typeof child_struct_42522 === 'string'){
var text_42524 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_42524),child_struct_42522].join(''));
} else {
var children_42525 = shadow.dom.svg_node(child_struct_42522);
if(cljs.core.seq_QMARK_(children_42525)){
var seq__41757_42526 = cljs.core.seq(children_42525);
var chunk__41759_42527 = null;
var count__41760_42529 = (0);
var i__41761_42530 = (0);
while(true){
if((i__41761_42530 < count__41760_42529)){
var child_42531 = chunk__41759_42527.cljs$core$IIndexed$_nth$arity$2(null,i__41761_42530);
if(cljs.core.truth_(child_42531)){
node.appendChild(child_42531);


var G__42535 = seq__41757_42526;
var G__42536 = chunk__41759_42527;
var G__42537 = count__41760_42529;
var G__42538 = (i__41761_42530 + (1));
seq__41757_42526 = G__42535;
chunk__41759_42527 = G__42536;
count__41760_42529 = G__42537;
i__41761_42530 = G__42538;
continue;
} else {
var G__42541 = seq__41757_42526;
var G__42542 = chunk__41759_42527;
var G__42543 = count__41760_42529;
var G__42544 = (i__41761_42530 + (1));
seq__41757_42526 = G__42541;
chunk__41759_42527 = G__42542;
count__41760_42529 = G__42543;
i__41761_42530 = G__42544;
continue;
}
} else {
var temp__5735__auto___42545 = cljs.core.seq(seq__41757_42526);
if(temp__5735__auto___42545){
var seq__41757_42548__$1 = temp__5735__auto___42545;
if(cljs.core.chunked_seq_QMARK_(seq__41757_42548__$1)){
var c__4609__auto___42549 = cljs.core.chunk_first(seq__41757_42548__$1);
var G__42550 = cljs.core.chunk_rest(seq__41757_42548__$1);
var G__42551 = c__4609__auto___42549;
var G__42552 = cljs.core.count(c__4609__auto___42549);
var G__42553 = (0);
seq__41757_42526 = G__42550;
chunk__41759_42527 = G__42551;
count__41760_42529 = G__42552;
i__41761_42530 = G__42553;
continue;
} else {
var child_42554 = cljs.core.first(seq__41757_42548__$1);
if(cljs.core.truth_(child_42554)){
node.appendChild(child_42554);


var G__42556 = cljs.core.next(seq__41757_42548__$1);
var G__42557 = null;
var G__42558 = (0);
var G__42559 = (0);
seq__41757_42526 = G__42556;
chunk__41759_42527 = G__42557;
count__41760_42529 = G__42558;
i__41761_42530 = G__42559;
continue;
} else {
var G__42560 = cljs.core.next(seq__41757_42548__$1);
var G__42561 = null;
var G__42562 = (0);
var G__42563 = (0);
seq__41757_42526 = G__42560;
chunk__41759_42527 = G__42561;
count__41760_42529 = G__42562;
i__41761_42530 = G__42563;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_42525);
}
}


var G__42564 = seq__41718_42518;
var G__42565 = chunk__41720_42519;
var G__42566 = count__41721_42520;
var G__42567 = (i__41722_42521 + (1));
seq__41718_42518 = G__42564;
chunk__41720_42519 = G__42565;
count__41721_42520 = G__42566;
i__41722_42521 = G__42567;
continue;
} else {
var G__42570 = seq__41718_42518;
var G__42571 = chunk__41720_42519;
var G__42572 = count__41721_42520;
var G__42573 = (i__41722_42521 + (1));
seq__41718_42518 = G__42570;
chunk__41720_42519 = G__42571;
count__41721_42520 = G__42572;
i__41722_42521 = G__42573;
continue;
}
} else {
var temp__5735__auto___42575 = cljs.core.seq(seq__41718_42518);
if(temp__5735__auto___42575){
var seq__41718_42576__$1 = temp__5735__auto___42575;
if(cljs.core.chunked_seq_QMARK_(seq__41718_42576__$1)){
var c__4609__auto___42577 = cljs.core.chunk_first(seq__41718_42576__$1);
var G__42578 = cljs.core.chunk_rest(seq__41718_42576__$1);
var G__42579 = c__4609__auto___42577;
var G__42580 = cljs.core.count(c__4609__auto___42577);
var G__42581 = (0);
seq__41718_42518 = G__42578;
chunk__41720_42519 = G__42579;
count__41721_42520 = G__42580;
i__41722_42521 = G__42581;
continue;
} else {
var child_struct_42590 = cljs.core.first(seq__41718_42576__$1);
if((!((child_struct_42590 == null)))){
if(typeof child_struct_42590 === 'string'){
var text_42592 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_42592),child_struct_42590].join(''));
} else {
var children_42594 = shadow.dom.svg_node(child_struct_42590);
if(cljs.core.seq_QMARK_(children_42594)){
var seq__41778_42596 = cljs.core.seq(children_42594);
var chunk__41780_42597 = null;
var count__41781_42598 = (0);
var i__41782_42599 = (0);
while(true){
if((i__41782_42599 < count__41781_42598)){
var child_42604 = chunk__41780_42597.cljs$core$IIndexed$_nth$arity$2(null,i__41782_42599);
if(cljs.core.truth_(child_42604)){
node.appendChild(child_42604);


var G__42605 = seq__41778_42596;
var G__42606 = chunk__41780_42597;
var G__42607 = count__41781_42598;
var G__42608 = (i__41782_42599 + (1));
seq__41778_42596 = G__42605;
chunk__41780_42597 = G__42606;
count__41781_42598 = G__42607;
i__41782_42599 = G__42608;
continue;
} else {
var G__42609 = seq__41778_42596;
var G__42610 = chunk__41780_42597;
var G__42611 = count__41781_42598;
var G__42612 = (i__41782_42599 + (1));
seq__41778_42596 = G__42609;
chunk__41780_42597 = G__42610;
count__41781_42598 = G__42611;
i__41782_42599 = G__42612;
continue;
}
} else {
var temp__5735__auto___42616__$1 = cljs.core.seq(seq__41778_42596);
if(temp__5735__auto___42616__$1){
var seq__41778_42619__$1 = temp__5735__auto___42616__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41778_42619__$1)){
var c__4609__auto___42620 = cljs.core.chunk_first(seq__41778_42619__$1);
var G__42621 = cljs.core.chunk_rest(seq__41778_42619__$1);
var G__42622 = c__4609__auto___42620;
var G__42623 = cljs.core.count(c__4609__auto___42620);
var G__42624 = (0);
seq__41778_42596 = G__42621;
chunk__41780_42597 = G__42622;
count__41781_42598 = G__42623;
i__41782_42599 = G__42624;
continue;
} else {
var child_42626 = cljs.core.first(seq__41778_42619__$1);
if(cljs.core.truth_(child_42626)){
node.appendChild(child_42626);


var G__42628 = cljs.core.next(seq__41778_42619__$1);
var G__42629 = null;
var G__42630 = (0);
var G__42631 = (0);
seq__41778_42596 = G__42628;
chunk__41780_42597 = G__42629;
count__41781_42598 = G__42630;
i__41782_42599 = G__42631;
continue;
} else {
var G__42632 = cljs.core.next(seq__41778_42619__$1);
var G__42633 = null;
var G__42634 = (0);
var G__42635 = (0);
seq__41778_42596 = G__42632;
chunk__41780_42597 = G__42633;
count__41781_42598 = G__42634;
i__41782_42599 = G__42635;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_42594);
}
}


var G__42636 = cljs.core.next(seq__41718_42576__$1);
var G__42637 = null;
var G__42638 = (0);
var G__42639 = (0);
seq__41718_42518 = G__42636;
chunk__41720_42519 = G__42637;
count__41721_42520 = G__42638;
i__41722_42521 = G__42639;
continue;
} else {
var G__42641 = cljs.core.next(seq__41718_42576__$1);
var G__42642 = null;
var G__42643 = (0);
var G__42644 = (0);
seq__41718_42518 = G__42641;
chunk__41720_42519 = G__42642;
count__41721_42520 = G__42643;
i__41722_42521 = G__42644;
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

var G__41787_42645 = shadow.dom._to_svg;
var G__41788_42646 = "string";
var G__41789_42647 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__41787_42645,G__41788_42646,G__41789_42647);

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

var G__41791_42662 = shadow.dom._to_svg;
var G__41792_42663 = "null";
var G__41793_42664 = (function (_){
return null;
});
goog.object.set(G__41791_42662,G__41792_42663,G__41793_42664);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___42668 = arguments.length;
var i__4790__auto___42669 = (0);
while(true){
if((i__4790__auto___42669 < len__4789__auto___42668)){
args__4795__auto__.push((arguments[i__4790__auto___42669]));

var G__42672 = (i__4790__auto___42669 + (1));
i__4790__auto___42669 = G__42672;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq41796){
var G__41797 = cljs.core.first(seq41796);
var seq41796__$1 = cljs.core.next(seq41796);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41797,seq41796__$1);
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
var G__41807 = arguments.length;
switch (G__41807) {
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
var G__41818_42703 = shadow.dom.dom_node(el);
var G__41819_42704 = cljs.core.name(event);
var G__41820_42705 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__41818_42703,G__41819_42704,G__41820_42705) : shadow.dom.dom_listen.call(null,G__41818_42703,G__41819_42704,G__41820_42705));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__37470__auto___42712 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_41828){
var state_val_41829 = (state_41828[(1)]);
if((state_val_41829 === (1))){
var state_41828__$1 = state_41828;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41828__$1,(2),once_or_cleanup);
} else {
if((state_val_41829 === (2))){
var inst_41825 = (state_41828[(2)]);
var inst_41826 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_41828__$1 = (function (){var statearr_41835 = state_41828;
(statearr_41835[(7)] = inst_41825);

return statearr_41835;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41828__$1,inst_41826);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__37220__auto__ = null;
var shadow$dom$state_machine__37220__auto____0 = (function (){
var statearr_41837 = [null,null,null,null,null,null,null,null];
(statearr_41837[(0)] = shadow$dom$state_machine__37220__auto__);

(statearr_41837[(1)] = (1));

return statearr_41837;
});
var shadow$dom$state_machine__37220__auto____1 = (function (state_41828){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_41828);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e41843){if((e41843 instanceof Object)){
var ex__37223__auto__ = e41843;
var statearr_41844_42715 = state_41828;
(statearr_41844_42715[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41843;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42716 = state_41828;
state_41828 = G__42716;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
shadow$dom$state_machine__37220__auto__ = function(state_41828){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__37220__auto____0.call(this);
case 1:
return shadow$dom$state_machine__37220__auto____1.call(this,state_41828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__37220__auto____0;
shadow$dom$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__37220__auto____1;
return shadow$dom$state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_41847 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_41847[(6)] = c__37470__auto___42712);

return statearr_41847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
