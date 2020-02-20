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
return cljs.core.cons((coll[idx]),(function (){var G__46888 = coll;
var G__46889 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__46888,G__46889) : shadow.dom.lazy_native_coll_seq.call(null,G__46888,G__46889));
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
var G__46916 = arguments.length;
switch (G__46916) {
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
var G__46927 = arguments.length;
switch (G__46927) {
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
var G__46932 = arguments.length;
switch (G__46932) {
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
var G__46935 = arguments.length;
switch (G__46935) {
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
var G__46945 = arguments.length;
switch (G__46945) {
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
var G__46947 = document;
var G__46948 = shadow.dom.dom_node(el);
return goog.dom.contains(G__46947,G__46948);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__46950 = shadow.dom.dom_node(parent);
var G__46951 = shadow.dom.dom_node(el);
return goog.dom.contains(G__46950,G__46951);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__46954 = shadow.dom.dom_node(el);
var G__46955 = cls;
return goog.dom.classlist.add(G__46954,G__46955);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__46959 = shadow.dom.dom_node(el);
var G__46960 = cls;
return goog.dom.classlist.remove(G__46959,G__46960);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__46964 = arguments.length;
switch (G__46964) {
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
var G__46965 = shadow.dom.dom_node(el);
var G__46966 = cls;
return goog.dom.classlist.toggle(G__46965,G__46966);
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
}catch (e46971){if((e46971 instanceof Object)){
var e = e46971;
return console.log("didnt support attachEvent",el,e);
} else {
throw e46971;

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
var seq__46978 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__46979 = null;
var count__46980 = (0);
var i__46981 = (0);
while(true){
if((i__46981 < count__46980)){
var el = chunk__46979.cljs$core$IIndexed$_nth$arity$2(null,i__46981);
var handler_47734__$1 = ((function (seq__46978,chunk__46979,count__46980,i__46981,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46978,chunk__46979,count__46980,i__46981,el))
;
var G__46990_47736 = el;
var G__46991_47737 = cljs.core.name(ev);
var G__46992_47738 = handler_47734__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__46990_47736,G__46991_47737,G__46992_47738) : shadow.dom.dom_listen.call(null,G__46990_47736,G__46991_47737,G__46992_47738));


var G__47742 = seq__46978;
var G__47743 = chunk__46979;
var G__47744 = count__46980;
var G__47745 = (i__46981 + (1));
seq__46978 = G__47742;
chunk__46979 = G__47743;
count__46980 = G__47744;
i__46981 = G__47745;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__46978);
if(temp__5735__auto__){
var seq__46978__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46978__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__46978__$1);
var G__47746 = cljs.core.chunk_rest(seq__46978__$1);
var G__47747 = c__4609__auto__;
var G__47748 = cljs.core.count(c__4609__auto__);
var G__47749 = (0);
seq__46978 = G__47746;
chunk__46979 = G__47747;
count__46980 = G__47748;
i__46981 = G__47749;
continue;
} else {
var el = cljs.core.first(seq__46978__$1);
var handler_47751__$1 = ((function (seq__46978,chunk__46979,count__46980,i__46981,el,seq__46978__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__46978,chunk__46979,count__46980,i__46981,el,seq__46978__$1,temp__5735__auto__))
;
var G__46995_47754 = el;
var G__46996_47755 = cljs.core.name(ev);
var G__46997_47756 = handler_47751__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__46995_47754,G__46996_47755,G__46997_47756) : shadow.dom.dom_listen.call(null,G__46995_47754,G__46996_47755,G__46997_47756));


var G__47759 = cljs.core.next(seq__46978__$1);
var G__47760 = null;
var G__47761 = (0);
var G__47762 = (0);
seq__46978 = G__47759;
chunk__46979 = G__47760;
count__46980 = G__47761;
i__46981 = G__47762;
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
var G__47000 = arguments.length;
switch (G__47000) {
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
var G__47004 = shadow.dom.dom_node(el);
var G__47005 = cljs.core.name(ev);
var G__47006 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47004,G__47005,G__47006) : shadow.dom.dom_listen.call(null,G__47004,G__47005,G__47006));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__47010 = shadow.dom.dom_node(el);
var G__47011 = cljs.core.name(ev);
var G__47012 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__47010,G__47011,G__47012) : shadow.dom.dom_listen_remove.call(null,G__47010,G__47011,G__47012));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47015 = cljs.core.seq(events);
var chunk__47016 = null;
var count__47017 = (0);
var i__47018 = (0);
while(true){
if((i__47018 < count__47017)){
var vec__47031 = chunk__47016.cljs$core$IIndexed$_nth$arity$2(null,i__47018);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47031,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47031,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47777 = seq__47015;
var G__47778 = chunk__47016;
var G__47779 = count__47017;
var G__47780 = (i__47018 + (1));
seq__47015 = G__47777;
chunk__47016 = G__47778;
count__47017 = G__47779;
i__47018 = G__47780;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47015);
if(temp__5735__auto__){
var seq__47015__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47015__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47015__$1);
var G__47783 = cljs.core.chunk_rest(seq__47015__$1);
var G__47784 = c__4609__auto__;
var G__47785 = cljs.core.count(c__4609__auto__);
var G__47786 = (0);
seq__47015 = G__47783;
chunk__47016 = G__47784;
count__47017 = G__47785;
i__47018 = G__47786;
continue;
} else {
var vec__47036 = cljs.core.first(seq__47015__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47036,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47036,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__47788 = cljs.core.next(seq__47015__$1);
var G__47789 = null;
var G__47790 = (0);
var G__47791 = (0);
seq__47015 = G__47788;
chunk__47016 = G__47789;
count__47017 = G__47790;
i__47018 = G__47791;
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
var seq__47039 = cljs.core.seq(styles);
var chunk__47040 = null;
var count__47041 = (0);
var i__47042 = (0);
while(true){
if((i__47042 < count__47041)){
var vec__47056 = chunk__47040.cljs$core$IIndexed$_nth$arity$2(null,i__47042);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47056,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47056,(1),null);
var G__47059_47793 = dom;
var G__47060_47794 = cljs.core.name(k);
var G__47061_47795 = (((v == null))?"":v);
goog.style.setStyle(G__47059_47793,G__47060_47794,G__47061_47795);


var G__47799 = seq__47039;
var G__47800 = chunk__47040;
var G__47801 = count__47041;
var G__47802 = (i__47042 + (1));
seq__47039 = G__47799;
chunk__47040 = G__47800;
count__47041 = G__47801;
i__47042 = G__47802;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47039);
if(temp__5735__auto__){
var seq__47039__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47039__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47039__$1);
var G__47803 = cljs.core.chunk_rest(seq__47039__$1);
var G__47804 = c__4609__auto__;
var G__47805 = cljs.core.count(c__4609__auto__);
var G__47806 = (0);
seq__47039 = G__47803;
chunk__47040 = G__47804;
count__47041 = G__47805;
i__47042 = G__47806;
continue;
} else {
var vec__47062 = cljs.core.first(seq__47039__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47062,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47062,(1),null);
var G__47065_47808 = dom;
var G__47066_47809 = cljs.core.name(k);
var G__47067_47810 = (((v == null))?"":v);
goog.style.setStyle(G__47065_47808,G__47066_47809,G__47067_47810);


var G__47811 = cljs.core.next(seq__47039__$1);
var G__47812 = null;
var G__47813 = (0);
var G__47814 = (0);
seq__47039 = G__47811;
chunk__47040 = G__47812;
count__47041 = G__47813;
i__47042 = G__47814;
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
var G__47069_47816 = key;
var G__47069_47817__$1 = (((G__47069_47816 instanceof cljs.core.Keyword))?G__47069_47816.fqn:null);
switch (G__47069_47817__$1) {
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
var ks_47825 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_47825,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_47825,"aria-");
}
})())){
el.setAttribute(ks_47825,value);
} else {
(el[ks_47825] = value);
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
var G__47073 = shadow.dom.dom_node(el);
var G__47074 = cls;
return goog.dom.classlist.contains(G__47073,G__47074);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__47087){
var map__47088 = p__47087;
var map__47088__$1 = (((((!((map__47088 == null))))?(((((map__47088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47088):map__47088);
var props = map__47088__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47088__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__47091 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47091,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47091,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47091,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__47096 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__47096,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__47096;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__47099 = arguments.length;
switch (G__47099) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__47108){
var vec__47109 = p__47108;
var seq__47110 = cljs.core.seq(vec__47109);
var first__47111 = cljs.core.first(seq__47110);
var seq__47110__$1 = cljs.core.next(seq__47110);
var nn = first__47111;
var first__47111__$1 = cljs.core.first(seq__47110__$1);
var seq__47110__$2 = cljs.core.next(seq__47110__$1);
var np = first__47111__$1;
var nc = seq__47110__$2;
var node = vec__47109;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47114 = nn;
var G__47115 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47114,G__47115) : create_fn.call(null,G__47114,G__47115));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__47117 = nn;
var G__47118 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__47117,G__47118) : create_fn.call(null,G__47117,G__47118));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__47121 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47121,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47121,(1),null);
var seq__47125_47855 = cljs.core.seq(node_children);
var chunk__47126_47856 = null;
var count__47127_47857 = (0);
var i__47128_47858 = (0);
while(true){
if((i__47128_47858 < count__47127_47857)){
var child_struct_47859 = chunk__47126_47856.cljs$core$IIndexed$_nth$arity$2(null,i__47128_47858);
var children_47860 = shadow.dom.dom_node(child_struct_47859);
if(cljs.core.seq_QMARK_(children_47860)){
var seq__47166_47861 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47860));
var chunk__47168_47862 = null;
var count__47169_47863 = (0);
var i__47170_47864 = (0);
while(true){
if((i__47170_47864 < count__47169_47863)){
var child_47866 = chunk__47168_47862.cljs$core$IIndexed$_nth$arity$2(null,i__47170_47864);
if(cljs.core.truth_(child_47866)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47866);


var G__47867 = seq__47166_47861;
var G__47868 = chunk__47168_47862;
var G__47869 = count__47169_47863;
var G__47870 = (i__47170_47864 + (1));
seq__47166_47861 = G__47867;
chunk__47168_47862 = G__47868;
count__47169_47863 = G__47869;
i__47170_47864 = G__47870;
continue;
} else {
var G__47872 = seq__47166_47861;
var G__47873 = chunk__47168_47862;
var G__47874 = count__47169_47863;
var G__47875 = (i__47170_47864 + (1));
seq__47166_47861 = G__47872;
chunk__47168_47862 = G__47873;
count__47169_47863 = G__47874;
i__47170_47864 = G__47875;
continue;
}
} else {
var temp__5735__auto___47878 = cljs.core.seq(seq__47166_47861);
if(temp__5735__auto___47878){
var seq__47166_47879__$1 = temp__5735__auto___47878;
if(cljs.core.chunked_seq_QMARK_(seq__47166_47879__$1)){
var c__4609__auto___47880 = cljs.core.chunk_first(seq__47166_47879__$1);
var G__47881 = cljs.core.chunk_rest(seq__47166_47879__$1);
var G__47882 = c__4609__auto___47880;
var G__47883 = cljs.core.count(c__4609__auto___47880);
var G__47884 = (0);
seq__47166_47861 = G__47881;
chunk__47168_47862 = G__47882;
count__47169_47863 = G__47883;
i__47170_47864 = G__47884;
continue;
} else {
var child_47886 = cljs.core.first(seq__47166_47879__$1);
if(cljs.core.truth_(child_47886)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47886);


var G__47889 = cljs.core.next(seq__47166_47879__$1);
var G__47890 = null;
var G__47891 = (0);
var G__47892 = (0);
seq__47166_47861 = G__47889;
chunk__47168_47862 = G__47890;
count__47169_47863 = G__47891;
i__47170_47864 = G__47892;
continue;
} else {
var G__47894 = cljs.core.next(seq__47166_47879__$1);
var G__47895 = null;
var G__47896 = (0);
var G__47897 = (0);
seq__47166_47861 = G__47894;
chunk__47168_47862 = G__47895;
count__47169_47863 = G__47896;
i__47170_47864 = G__47897;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47860);
}


var G__47898 = seq__47125_47855;
var G__47899 = chunk__47126_47856;
var G__47900 = count__47127_47857;
var G__47901 = (i__47128_47858 + (1));
seq__47125_47855 = G__47898;
chunk__47126_47856 = G__47899;
count__47127_47857 = G__47900;
i__47128_47858 = G__47901;
continue;
} else {
var temp__5735__auto___47902 = cljs.core.seq(seq__47125_47855);
if(temp__5735__auto___47902){
var seq__47125_47905__$1 = temp__5735__auto___47902;
if(cljs.core.chunked_seq_QMARK_(seq__47125_47905__$1)){
var c__4609__auto___47907 = cljs.core.chunk_first(seq__47125_47905__$1);
var G__47908 = cljs.core.chunk_rest(seq__47125_47905__$1);
var G__47909 = c__4609__auto___47907;
var G__47910 = cljs.core.count(c__4609__auto___47907);
var G__47911 = (0);
seq__47125_47855 = G__47908;
chunk__47126_47856 = G__47909;
count__47127_47857 = G__47910;
i__47128_47858 = G__47911;
continue;
} else {
var child_struct_47913 = cljs.core.first(seq__47125_47905__$1);
var children_47914 = shadow.dom.dom_node(child_struct_47913);
if(cljs.core.seq_QMARK_(children_47914)){
var seq__47180_47915 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_47914));
var chunk__47182_47916 = null;
var count__47183_47917 = (0);
var i__47184_47918 = (0);
while(true){
if((i__47184_47918 < count__47183_47917)){
var child_47921 = chunk__47182_47916.cljs$core$IIndexed$_nth$arity$2(null,i__47184_47918);
if(cljs.core.truth_(child_47921)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47921);


var G__47923 = seq__47180_47915;
var G__47924 = chunk__47182_47916;
var G__47925 = count__47183_47917;
var G__47926 = (i__47184_47918 + (1));
seq__47180_47915 = G__47923;
chunk__47182_47916 = G__47924;
count__47183_47917 = G__47925;
i__47184_47918 = G__47926;
continue;
} else {
var G__47927 = seq__47180_47915;
var G__47928 = chunk__47182_47916;
var G__47929 = count__47183_47917;
var G__47930 = (i__47184_47918 + (1));
seq__47180_47915 = G__47927;
chunk__47182_47916 = G__47928;
count__47183_47917 = G__47929;
i__47184_47918 = G__47930;
continue;
}
} else {
var temp__5735__auto___47932__$1 = cljs.core.seq(seq__47180_47915);
if(temp__5735__auto___47932__$1){
var seq__47180_47934__$1 = temp__5735__auto___47932__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47180_47934__$1)){
var c__4609__auto___47936 = cljs.core.chunk_first(seq__47180_47934__$1);
var G__47937 = cljs.core.chunk_rest(seq__47180_47934__$1);
var G__47938 = c__4609__auto___47936;
var G__47939 = cljs.core.count(c__4609__auto___47936);
var G__47940 = (0);
seq__47180_47915 = G__47937;
chunk__47182_47916 = G__47938;
count__47183_47917 = G__47939;
i__47184_47918 = G__47940;
continue;
} else {
var child_47941 = cljs.core.first(seq__47180_47934__$1);
if(cljs.core.truth_(child_47941)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_47941);


var G__47942 = cljs.core.next(seq__47180_47934__$1);
var G__47943 = null;
var G__47944 = (0);
var G__47945 = (0);
seq__47180_47915 = G__47942;
chunk__47182_47916 = G__47943;
count__47183_47917 = G__47944;
i__47184_47918 = G__47945;
continue;
} else {
var G__47946 = cljs.core.next(seq__47180_47934__$1);
var G__47947 = null;
var G__47948 = (0);
var G__47949 = (0);
seq__47180_47915 = G__47946;
chunk__47182_47916 = G__47947;
count__47183_47917 = G__47948;
i__47184_47918 = G__47949;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_47914);
}


var G__47951 = cljs.core.next(seq__47125_47905__$1);
var G__47952 = null;
var G__47953 = (0);
var G__47954 = (0);
seq__47125_47855 = G__47951;
chunk__47126_47856 = G__47952;
count__47127_47857 = G__47953;
i__47128_47858 = G__47954;
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
var G__47194 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__47194);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__47200 = cljs.core.seq(node);
var chunk__47201 = null;
var count__47202 = (0);
var i__47203 = (0);
while(true){
if((i__47203 < count__47202)){
var n = chunk__47201.cljs$core$IIndexed$_nth$arity$2(null,i__47203);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47962 = seq__47200;
var G__47963 = chunk__47201;
var G__47964 = count__47202;
var G__47965 = (i__47203 + (1));
seq__47200 = G__47962;
chunk__47201 = G__47963;
count__47202 = G__47964;
i__47203 = G__47965;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47200);
if(temp__5735__auto__){
var seq__47200__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47200__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47200__$1);
var G__47967 = cljs.core.chunk_rest(seq__47200__$1);
var G__47968 = c__4609__auto__;
var G__47969 = cljs.core.count(c__4609__auto__);
var G__47970 = (0);
seq__47200 = G__47967;
chunk__47201 = G__47968;
count__47202 = G__47969;
i__47203 = G__47970;
continue;
} else {
var n = cljs.core.first(seq__47200__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__47973 = cljs.core.next(seq__47200__$1);
var G__47974 = null;
var G__47975 = (0);
var G__47976 = (0);
seq__47200 = G__47973;
chunk__47201 = G__47974;
count__47202 = G__47975;
i__47203 = G__47976;
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
var G__47205 = shadow.dom.dom_node(new$);
var G__47206 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__47205,G__47206);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__47208 = arguments.length;
switch (G__47208) {
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
var G__47211 = arguments.length;
switch (G__47211) {
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
var G__47219 = arguments.length;
switch (G__47219) {
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
var len__4789__auto___48001 = arguments.length;
var i__4790__auto___48002 = (0);
while(true){
if((i__4790__auto___48002 < len__4789__auto___48001)){
args__4795__auto__.push((arguments[i__4790__auto___48002]));

var G__48003 = (i__4790__auto___48002 + (1));
i__4790__auto___48002 = G__48003;
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
var seq__47241_48007 = cljs.core.seq(nodes);
var chunk__47242_48008 = null;
var count__47243_48009 = (0);
var i__47244_48010 = (0);
while(true){
if((i__47244_48010 < count__47243_48009)){
var node_48015 = chunk__47242_48008.cljs$core$IIndexed$_nth$arity$2(null,i__47244_48010);
fragment.appendChild(shadow.dom._to_dom(node_48015));


var G__48016 = seq__47241_48007;
var G__48017 = chunk__47242_48008;
var G__48018 = count__47243_48009;
var G__48019 = (i__47244_48010 + (1));
seq__47241_48007 = G__48016;
chunk__47242_48008 = G__48017;
count__47243_48009 = G__48018;
i__47244_48010 = G__48019;
continue;
} else {
var temp__5735__auto___48020 = cljs.core.seq(seq__47241_48007);
if(temp__5735__auto___48020){
var seq__47241_48021__$1 = temp__5735__auto___48020;
if(cljs.core.chunked_seq_QMARK_(seq__47241_48021__$1)){
var c__4609__auto___48024 = cljs.core.chunk_first(seq__47241_48021__$1);
var G__48025 = cljs.core.chunk_rest(seq__47241_48021__$1);
var G__48026 = c__4609__auto___48024;
var G__48027 = cljs.core.count(c__4609__auto___48024);
var G__48028 = (0);
seq__47241_48007 = G__48025;
chunk__47242_48008 = G__48026;
count__47243_48009 = G__48027;
i__47244_48010 = G__48028;
continue;
} else {
var node_48030 = cljs.core.first(seq__47241_48021__$1);
fragment.appendChild(shadow.dom._to_dom(node_48030));


var G__48031 = cljs.core.next(seq__47241_48021__$1);
var G__48032 = null;
var G__48033 = (0);
var G__48034 = (0);
seq__47241_48007 = G__48031;
chunk__47242_48008 = G__48032;
count__47243_48009 = G__48033;
i__47244_48010 = G__48034;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq47235){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq47235));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__47255_48035 = cljs.core.seq(scripts);
var chunk__47256_48036 = null;
var count__47257_48037 = (0);
var i__47258_48038 = (0);
while(true){
if((i__47258_48038 < count__47257_48037)){
var vec__47274_48039 = chunk__47256_48036.cljs$core$IIndexed$_nth$arity$2(null,i__47258_48038);
var script_tag_48040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47274_48039,(0),null);
var script_body_48041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47274_48039,(1),null);
eval(script_body_48041);


var G__48043 = seq__47255_48035;
var G__48045 = chunk__47256_48036;
var G__48046 = count__47257_48037;
var G__48047 = (i__47258_48038 + (1));
seq__47255_48035 = G__48043;
chunk__47256_48036 = G__48045;
count__47257_48037 = G__48046;
i__47258_48038 = G__48047;
continue;
} else {
var temp__5735__auto___48049 = cljs.core.seq(seq__47255_48035);
if(temp__5735__auto___48049){
var seq__47255_48050__$1 = temp__5735__auto___48049;
if(cljs.core.chunked_seq_QMARK_(seq__47255_48050__$1)){
var c__4609__auto___48051 = cljs.core.chunk_first(seq__47255_48050__$1);
var G__48052 = cljs.core.chunk_rest(seq__47255_48050__$1);
var G__48053 = c__4609__auto___48051;
var G__48054 = cljs.core.count(c__4609__auto___48051);
var G__48055 = (0);
seq__47255_48035 = G__48052;
chunk__47256_48036 = G__48053;
count__47257_48037 = G__48054;
i__47258_48038 = G__48055;
continue;
} else {
var vec__47280_48056 = cljs.core.first(seq__47255_48050__$1);
var script_tag_48057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47280_48056,(0),null);
var script_body_48058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47280_48056,(1),null);
eval(script_body_48058);


var G__48059 = cljs.core.next(seq__47255_48050__$1);
var G__48060 = null;
var G__48061 = (0);
var G__48062 = (0);
seq__47255_48035 = G__48059;
chunk__47256_48036 = G__48060;
count__47257_48037 = G__48061;
i__47258_48038 = G__48062;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__47283){
var vec__47284 = p__47283;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47284,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47284,(1),null);
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
var G__47292 = shadow.dom.dom_node(el);
var G__47293 = cls;
return goog.dom.getAncestorByClass(G__47292,G__47293);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__47297 = arguments.length;
switch (G__47297) {
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
var G__47299 = shadow.dom.dom_node(el);
var G__47300 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__47299,G__47300);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__47301 = shadow.dom.dom_node(el);
var G__47302 = cljs.core.name(tag);
var G__47303 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__47301,G__47302,G__47303);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__47305 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__47305);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__47307 = shadow.dom.dom_node(dom);
var G__47308 = value;
return goog.dom.forms.setValue(G__47307,G__47308);
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
var seq__47311 = cljs.core.seq(style_keys);
var chunk__47312 = null;
var count__47313 = (0);
var i__47314 = (0);
while(true){
if((i__47314 < count__47313)){
var it = chunk__47312.cljs$core$IIndexed$_nth$arity$2(null,i__47314);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48067 = seq__47311;
var G__48068 = chunk__47312;
var G__48069 = count__47313;
var G__48070 = (i__47314 + (1));
seq__47311 = G__48067;
chunk__47312 = G__48068;
count__47313 = G__48069;
i__47314 = G__48070;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47311);
if(temp__5735__auto__){
var seq__47311__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47311__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47311__$1);
var G__48074 = cljs.core.chunk_rest(seq__47311__$1);
var G__48075 = c__4609__auto__;
var G__48076 = cljs.core.count(c__4609__auto__);
var G__48077 = (0);
seq__47311 = G__48074;
chunk__47312 = G__48075;
count__47313 = G__48076;
i__47314 = G__48077;
continue;
} else {
var it = cljs.core.first(seq__47311__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48078 = cljs.core.next(seq__47311__$1);
var G__48079 = null;
var G__48080 = (0);
var G__48081 = (0);
seq__47311 = G__48078;
chunk__47312 = G__48079;
count__47313 = G__48080;
i__47314 = G__48081;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k47316,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__47324 = k47316;
var G__47324__$1 = (((G__47324 instanceof cljs.core.Keyword))?G__47324.fqn:null);
switch (G__47324__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47316,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__47329){
var vec__47331 = p__47329;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47331,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47331,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47315){
var self__ = this;
var G__47315__$1 = this;
return (new cljs.core.RecordIter((0),G__47315__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__47344 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__47344(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47317,other47318){
var self__ = this;
var this47317__$1 = this;
return (((!((other47318 == null)))) && ((this47317__$1.constructor === other47318.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47317__$1.x,other47318.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47317__$1.y,other47318.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47317__$1.__extmap,other47318.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__47315){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__47352 = cljs.core.keyword_identical_QMARK_;
var expr__47353 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__47355 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__47356 = expr__47353;
return (pred__47352.cljs$core$IFn$_invoke$arity$2 ? pred__47352.cljs$core$IFn$_invoke$arity$2(G__47355,G__47356) : pred__47352.call(null,G__47355,G__47356));
})())){
return (new shadow.dom.Coordinate(G__47315,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__47357 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__47358 = expr__47353;
return (pred__47352.cljs$core$IFn$_invoke$arity$2 ? pred__47352.cljs$core$IFn$_invoke$arity$2(G__47357,G__47358) : pred__47352.call(null,G__47357,G__47358));
})())){
return (new shadow.dom.Coordinate(self__.x,G__47315,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__47315),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__47315){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__47315,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__47320){
var extmap__4478__auto__ = (function (){var G__47368 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47320,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__47320)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47368);
} else {
return G__47368;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__47320),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__47320),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__47372 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__47372);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__47375 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__47375);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__47377 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__47377);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k47379,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__47389 = k47379;
var G__47389__$1 = (((G__47389 instanceof cljs.core.Keyword))?G__47389.fqn:null);
switch (G__47389__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47379,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__47393){
var vec__47394 = p__47393;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47394,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47394,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47378){
var self__ = this;
var G__47378__$1 = this;
return (new cljs.core.RecordIter((0),G__47378__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__47403 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__47403(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47380,other47381){
var self__ = this;
var this47380__$1 = this;
return (((!((other47381 == null)))) && ((this47380__$1.constructor === other47381.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47380__$1.w,other47381.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47380__$1.h,other47381.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47380__$1.__extmap,other47381.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__47378){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__47408 = cljs.core.keyword_identical_QMARK_;
var expr__47409 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__47411 = new cljs.core.Keyword(null,"w","w",354169001);
var G__47412 = expr__47409;
return (pred__47408.cljs$core$IFn$_invoke$arity$2 ? pred__47408.cljs$core$IFn$_invoke$arity$2(G__47411,G__47412) : pred__47408.call(null,G__47411,G__47412));
})())){
return (new shadow.dom.Size(G__47378,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__47414 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__47415 = expr__47409;
return (pred__47408.cljs$core$IFn$_invoke$arity$2 ? pred__47408.cljs$core$IFn$_invoke$arity$2(G__47414,G__47415) : pred__47408.call(null,G__47414,G__47415));
})())){
return (new shadow.dom.Size(self__.w,G__47378,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__47378),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__47378){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__47378,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__47382){
var extmap__4478__auto__ = (function (){var G__47424 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47382,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__47382)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47424);
} else {
return G__47424;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__47382),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__47382),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__47431 = shadow.dom.dom_node(el);
return goog.style.getSize(G__47431);
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
var G__48108 = (i + (1));
var G__48109 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48108;
ret = G__48109;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47446){
var vec__47447 = p__47446;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47447,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47447,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__47452 = arguments.length;
switch (G__47452) {
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
var G__47462_48114 = new_node;
var G__47463_48115 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__47462_48114,G__47463_48115);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__47465_48116 = new_node;
var G__47466_48117 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__47465_48116,G__47466_48117);

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
var G__48118 = ps;
var G__48119 = (i + (1));
el__$1 = G__48118;
i = G__48119;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__47468 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__47468);
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
var G__47470 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__47470);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__47471 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__47471);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__47473 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47473,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47473,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47473,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__47476_48122 = cljs.core.seq(props);
var chunk__47477_48123 = null;
var count__47478_48124 = (0);
var i__47479_48125 = (0);
while(true){
if((i__47479_48125 < count__47478_48124)){
var vec__47487_48126 = chunk__47477_48123.cljs$core$IIndexed$_nth$arity$2(null,i__47479_48125);
var k_48127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47487_48126,(0),null);
var v_48128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47487_48126,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48127);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48127),v_48128);


var G__48129 = seq__47476_48122;
var G__48130 = chunk__47477_48123;
var G__48131 = count__47478_48124;
var G__48132 = (i__47479_48125 + (1));
seq__47476_48122 = G__48129;
chunk__47477_48123 = G__48130;
count__47478_48124 = G__48131;
i__47479_48125 = G__48132;
continue;
} else {
var temp__5735__auto___48133 = cljs.core.seq(seq__47476_48122);
if(temp__5735__auto___48133){
var seq__47476_48134__$1 = temp__5735__auto___48133;
if(cljs.core.chunked_seq_QMARK_(seq__47476_48134__$1)){
var c__4609__auto___48135 = cljs.core.chunk_first(seq__47476_48134__$1);
var G__48136 = cljs.core.chunk_rest(seq__47476_48134__$1);
var G__48137 = c__4609__auto___48135;
var G__48138 = cljs.core.count(c__4609__auto___48135);
var G__48139 = (0);
seq__47476_48122 = G__48136;
chunk__47477_48123 = G__48137;
count__47478_48124 = G__48138;
i__47479_48125 = G__48139;
continue;
} else {
var vec__47492_48141 = cljs.core.first(seq__47476_48134__$1);
var k_48142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47492_48141,(0),null);
var v_48143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47492_48141,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48142);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48142),v_48143);


var G__48144 = cljs.core.next(seq__47476_48134__$1);
var G__48145 = null;
var G__48146 = (0);
var G__48147 = (0);
seq__47476_48122 = G__48144;
chunk__47477_48123 = G__48145;
count__47478_48124 = G__48146;
i__47479_48125 = G__48147;
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
var vec__47502 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47502,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47502,(1),null);
var seq__47505_48153 = cljs.core.seq(node_children);
var chunk__47507_48154 = null;
var count__47508_48155 = (0);
var i__47509_48156 = (0);
while(true){
if((i__47509_48156 < count__47508_48155)){
var child_struct_48157 = chunk__47507_48154.cljs$core$IIndexed$_nth$arity$2(null,i__47509_48156);
if((!((child_struct_48157 == null)))){
if(typeof child_struct_48157 === 'string'){
var text_48158 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48158),child_struct_48157].join(''));
} else {
var children_48159 = shadow.dom.svg_node(child_struct_48157);
if(cljs.core.seq_QMARK_(children_48159)){
var seq__47554_48160 = cljs.core.seq(children_48159);
var chunk__47556_48161 = null;
var count__47557_48162 = (0);
var i__47558_48163 = (0);
while(true){
if((i__47558_48163 < count__47557_48162)){
var child_48164 = chunk__47556_48161.cljs$core$IIndexed$_nth$arity$2(null,i__47558_48163);
if(cljs.core.truth_(child_48164)){
node.appendChild(child_48164);


var G__48166 = seq__47554_48160;
var G__48167 = chunk__47556_48161;
var G__48168 = count__47557_48162;
var G__48169 = (i__47558_48163 + (1));
seq__47554_48160 = G__48166;
chunk__47556_48161 = G__48167;
count__47557_48162 = G__48168;
i__47558_48163 = G__48169;
continue;
} else {
var G__48170 = seq__47554_48160;
var G__48171 = chunk__47556_48161;
var G__48172 = count__47557_48162;
var G__48173 = (i__47558_48163 + (1));
seq__47554_48160 = G__48170;
chunk__47556_48161 = G__48171;
count__47557_48162 = G__48172;
i__47558_48163 = G__48173;
continue;
}
} else {
var temp__5735__auto___48174 = cljs.core.seq(seq__47554_48160);
if(temp__5735__auto___48174){
var seq__47554_48175__$1 = temp__5735__auto___48174;
if(cljs.core.chunked_seq_QMARK_(seq__47554_48175__$1)){
var c__4609__auto___48176 = cljs.core.chunk_first(seq__47554_48175__$1);
var G__48177 = cljs.core.chunk_rest(seq__47554_48175__$1);
var G__48178 = c__4609__auto___48176;
var G__48179 = cljs.core.count(c__4609__auto___48176);
var G__48180 = (0);
seq__47554_48160 = G__48177;
chunk__47556_48161 = G__48178;
count__47557_48162 = G__48179;
i__47558_48163 = G__48180;
continue;
} else {
var child_48182 = cljs.core.first(seq__47554_48175__$1);
if(cljs.core.truth_(child_48182)){
node.appendChild(child_48182);


var G__48186 = cljs.core.next(seq__47554_48175__$1);
var G__48187 = null;
var G__48188 = (0);
var G__48189 = (0);
seq__47554_48160 = G__48186;
chunk__47556_48161 = G__48187;
count__47557_48162 = G__48188;
i__47558_48163 = G__48189;
continue;
} else {
var G__48190 = cljs.core.next(seq__47554_48175__$1);
var G__48191 = null;
var G__48192 = (0);
var G__48193 = (0);
seq__47554_48160 = G__48190;
chunk__47556_48161 = G__48191;
count__47557_48162 = G__48192;
i__47558_48163 = G__48193;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48159);
}
}


var G__48194 = seq__47505_48153;
var G__48195 = chunk__47507_48154;
var G__48196 = count__47508_48155;
var G__48197 = (i__47509_48156 + (1));
seq__47505_48153 = G__48194;
chunk__47507_48154 = G__48195;
count__47508_48155 = G__48196;
i__47509_48156 = G__48197;
continue;
} else {
var G__48198 = seq__47505_48153;
var G__48199 = chunk__47507_48154;
var G__48200 = count__47508_48155;
var G__48201 = (i__47509_48156 + (1));
seq__47505_48153 = G__48198;
chunk__47507_48154 = G__48199;
count__47508_48155 = G__48200;
i__47509_48156 = G__48201;
continue;
}
} else {
var temp__5735__auto___48202 = cljs.core.seq(seq__47505_48153);
if(temp__5735__auto___48202){
var seq__47505_48203__$1 = temp__5735__auto___48202;
if(cljs.core.chunked_seq_QMARK_(seq__47505_48203__$1)){
var c__4609__auto___48204 = cljs.core.chunk_first(seq__47505_48203__$1);
var G__48205 = cljs.core.chunk_rest(seq__47505_48203__$1);
var G__48206 = c__4609__auto___48204;
var G__48207 = cljs.core.count(c__4609__auto___48204);
var G__48208 = (0);
seq__47505_48153 = G__48205;
chunk__47507_48154 = G__48206;
count__47508_48155 = G__48207;
i__47509_48156 = G__48208;
continue;
} else {
var child_struct_48209 = cljs.core.first(seq__47505_48203__$1);
if((!((child_struct_48209 == null)))){
if(typeof child_struct_48209 === 'string'){
var text_48210 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48210),child_struct_48209].join(''));
} else {
var children_48211 = shadow.dom.svg_node(child_struct_48209);
if(cljs.core.seq_QMARK_(children_48211)){
var seq__47581_48212 = cljs.core.seq(children_48211);
var chunk__47583_48213 = null;
var count__47584_48214 = (0);
var i__47585_48215 = (0);
while(true){
if((i__47585_48215 < count__47584_48214)){
var child_48216 = chunk__47583_48213.cljs$core$IIndexed$_nth$arity$2(null,i__47585_48215);
if(cljs.core.truth_(child_48216)){
node.appendChild(child_48216);


var G__48217 = seq__47581_48212;
var G__48218 = chunk__47583_48213;
var G__48219 = count__47584_48214;
var G__48220 = (i__47585_48215 + (1));
seq__47581_48212 = G__48217;
chunk__47583_48213 = G__48218;
count__47584_48214 = G__48219;
i__47585_48215 = G__48220;
continue;
} else {
var G__48221 = seq__47581_48212;
var G__48222 = chunk__47583_48213;
var G__48223 = count__47584_48214;
var G__48224 = (i__47585_48215 + (1));
seq__47581_48212 = G__48221;
chunk__47583_48213 = G__48222;
count__47584_48214 = G__48223;
i__47585_48215 = G__48224;
continue;
}
} else {
var temp__5735__auto___48225__$1 = cljs.core.seq(seq__47581_48212);
if(temp__5735__auto___48225__$1){
var seq__47581_48226__$1 = temp__5735__auto___48225__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47581_48226__$1)){
var c__4609__auto___48227 = cljs.core.chunk_first(seq__47581_48226__$1);
var G__48228 = cljs.core.chunk_rest(seq__47581_48226__$1);
var G__48229 = c__4609__auto___48227;
var G__48230 = cljs.core.count(c__4609__auto___48227);
var G__48231 = (0);
seq__47581_48212 = G__48228;
chunk__47583_48213 = G__48229;
count__47584_48214 = G__48230;
i__47585_48215 = G__48231;
continue;
} else {
var child_48232 = cljs.core.first(seq__47581_48226__$1);
if(cljs.core.truth_(child_48232)){
node.appendChild(child_48232);


var G__48233 = cljs.core.next(seq__47581_48226__$1);
var G__48234 = null;
var G__48235 = (0);
var G__48236 = (0);
seq__47581_48212 = G__48233;
chunk__47583_48213 = G__48234;
count__47584_48214 = G__48235;
i__47585_48215 = G__48236;
continue;
} else {
var G__48238 = cljs.core.next(seq__47581_48226__$1);
var G__48239 = null;
var G__48240 = (0);
var G__48241 = (0);
seq__47581_48212 = G__48238;
chunk__47583_48213 = G__48239;
count__47584_48214 = G__48240;
i__47585_48215 = G__48241;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48211);
}
}


var G__48242 = cljs.core.next(seq__47505_48203__$1);
var G__48243 = null;
var G__48244 = (0);
var G__48245 = (0);
seq__47505_48153 = G__48242;
chunk__47507_48154 = G__48243;
count__47508_48155 = G__48244;
i__47509_48156 = G__48245;
continue;
} else {
var G__48246 = cljs.core.next(seq__47505_48203__$1);
var G__48247 = null;
var G__48248 = (0);
var G__48249 = (0);
seq__47505_48153 = G__48246;
chunk__47507_48154 = G__48247;
count__47508_48155 = G__48248;
i__47509_48156 = G__48249;
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

var G__47603_48250 = shadow.dom._to_svg;
var G__47604_48251 = "string";
var G__47605_48252 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__47603_48250,G__47604_48251,G__47605_48252);

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

var G__47612_48253 = shadow.dom._to_svg;
var G__47613_48254 = "null";
var G__47614_48255 = (function (_){
return null;
});
goog.object.set(G__47612_48253,G__47613_48254,G__47614_48255);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48256 = arguments.length;
var i__4790__auto___48257 = (0);
while(true){
if((i__4790__auto___48257 < len__4789__auto___48256)){
args__4795__auto__.push((arguments[i__4790__auto___48257]));

var G__48258 = (i__4790__auto___48257 + (1));
i__4790__auto___48257 = G__48258;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq47617){
var G__47618 = cljs.core.first(seq47617);
var seq47617__$1 = cljs.core.next(seq47617);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47618,seq47617__$1);
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
var G__47633 = arguments.length;
switch (G__47633) {
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
var G__47642_48267 = shadow.dom.dom_node(el);
var G__47643_48268 = cljs.core.name(event);
var G__47644_48269 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47642_48267,G__47643_48268,G__47644_48269) : shadow.dom.dom_listen.call(null,G__47642_48267,G__47643_48268,G__47644_48269));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__45238__auto___48270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_47652){
var state_val_47654 = (state_47652[(1)]);
if((state_val_47654 === (1))){
var state_47652__$1 = state_47652;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47652__$1,(2),once_or_cleanup);
} else {
if((state_val_47654 === (2))){
var inst_47649 = (state_47652[(2)]);
var inst_47650 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_47652__$1 = (function (){var statearr_47658 = state_47652;
(statearr_47658[(7)] = inst_47649);

return statearr_47658;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47652__$1,inst_47650);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45171__auto__ = null;
var shadow$dom$state_machine__45171__auto____0 = (function (){
var statearr_47663 = [null,null,null,null,null,null,null,null];
(statearr_47663[(0)] = shadow$dom$state_machine__45171__auto__);

(statearr_47663[(1)] = (1));

return statearr_47663;
});
var shadow$dom$state_machine__45171__auto____1 = (function (state_47652){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_47652);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e47665){if((e47665 instanceof Object)){
var ex__45174__auto__ = e47665;
var statearr_47666_48273 = state_47652;
(statearr_47666_48273[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47665;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48274 = state_47652;
state_47652 = G__48274;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
shadow$dom$state_machine__45171__auto__ = function(state_47652){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45171__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45171__auto____1.call(this,state_47652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45171__auto____0;
shadow$dom$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45171__auto____1;
return shadow$dom$state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_47669 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_47669[(6)] = c__45238__auto___48270);

return statearr_47669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
