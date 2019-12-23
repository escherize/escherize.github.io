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
return cljs.core.cons((coll[idx]),(function (){var G__35005 = coll;
var G__35006 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35005,G__35006) : shadow.dom.lazy_native_coll_seq.call(null,G__35005,G__35006));
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
var G__35046 = arguments.length;
switch (G__35046) {
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
var G__35062 = arguments.length;
switch (G__35062) {
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
var G__35076 = arguments.length;
switch (G__35076) {
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
var G__35083 = arguments.length;
switch (G__35083) {
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
var G__35086 = arguments.length;
switch (G__35086) {
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
var G__35087 = document;
var G__35088 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35087,G__35088);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__35098 = shadow.dom.dom_node(parent);
var G__35099 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35098,G__35099);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__35101 = shadow.dom.dom_node(el);
var G__35102 = cls;
return goog.dom.classlist.add(G__35101,G__35102);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__35104 = shadow.dom.dom_node(el);
var G__35105 = cls;
return goog.dom.classlist.remove(G__35104,G__35105);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35109 = arguments.length;
switch (G__35109) {
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
var G__35115 = shadow.dom.dom_node(el);
var G__35116 = cls;
return goog.dom.classlist.toggle(G__35115,G__35116);
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
}catch (e35122){if((e35122 instanceof Object)){
var e = e35122;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35122;

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
var seq__35130 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35131 = null;
var count__35132 = (0);
var i__35133 = (0);
while(true){
if((i__35133 < count__35132)){
var el = chunk__35131.cljs$core$IIndexed$_nth$arity$2(null,i__35133);
var handler_35871__$1 = ((function (seq__35130,chunk__35131,count__35132,i__35133,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35130,chunk__35131,count__35132,i__35133,el))
;
var G__35149_35872 = el;
var G__35150_35873 = cljs.core.name(ev);
var G__35151_35874 = handler_35871__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35149_35872,G__35150_35873,G__35151_35874) : shadow.dom.dom_listen.call(null,G__35149_35872,G__35150_35873,G__35151_35874));


var G__35875 = seq__35130;
var G__35876 = chunk__35131;
var G__35878 = count__35132;
var G__35879 = (i__35133 + (1));
seq__35130 = G__35875;
chunk__35131 = G__35876;
count__35132 = G__35878;
i__35133 = G__35879;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35130);
if(temp__5720__auto__){
var seq__35130__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35130__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35130__$1);
var G__35881 = cljs.core.chunk_rest(seq__35130__$1);
var G__35882 = c__4550__auto__;
var G__35883 = cljs.core.count(c__4550__auto__);
var G__35884 = (0);
seq__35130 = G__35881;
chunk__35131 = G__35882;
count__35132 = G__35883;
i__35133 = G__35884;
continue;
} else {
var el = cljs.core.first(seq__35130__$1);
var handler_35885__$1 = ((function (seq__35130,chunk__35131,count__35132,i__35133,el,seq__35130__$1,temp__5720__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35130,chunk__35131,count__35132,i__35133,el,seq__35130__$1,temp__5720__auto__))
;
var G__35154_35886 = el;
var G__35155_35887 = cljs.core.name(ev);
var G__35156_35888 = handler_35885__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35154_35886,G__35155_35887,G__35156_35888) : shadow.dom.dom_listen.call(null,G__35154_35886,G__35155_35887,G__35156_35888));


var G__35889 = cljs.core.next(seq__35130__$1);
var G__35890 = null;
var G__35891 = (0);
var G__35892 = (0);
seq__35130 = G__35889;
chunk__35131 = G__35890;
count__35132 = G__35891;
i__35133 = G__35892;
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
var G__35164 = arguments.length;
switch (G__35164) {
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
var G__35172 = shadow.dom.dom_node(el);
var G__35173 = cljs.core.name(ev);
var G__35174 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35172,G__35173,G__35174) : shadow.dom.dom_listen.call(null,G__35172,G__35173,G__35174));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__35176 = shadow.dom.dom_node(el);
var G__35177 = cljs.core.name(ev);
var G__35178 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__35176,G__35177,G__35178) : shadow.dom.dom_listen_remove.call(null,G__35176,G__35177,G__35178));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35180 = cljs.core.seq(events);
var chunk__35181 = null;
var count__35182 = (0);
var i__35183 = (0);
while(true){
if((i__35183 < count__35182)){
var vec__35192 = chunk__35181.cljs$core$IIndexed$_nth$arity$2(null,i__35183);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35192,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35192,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35896 = seq__35180;
var G__35897 = chunk__35181;
var G__35898 = count__35182;
var G__35899 = (i__35183 + (1));
seq__35180 = G__35896;
chunk__35181 = G__35897;
count__35182 = G__35898;
i__35183 = G__35899;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35180);
if(temp__5720__auto__){
var seq__35180__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35180__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35180__$1);
var G__35900 = cljs.core.chunk_rest(seq__35180__$1);
var G__35901 = c__4550__auto__;
var G__35902 = cljs.core.count(c__4550__auto__);
var G__35903 = (0);
seq__35180 = G__35900;
chunk__35181 = G__35901;
count__35182 = G__35902;
i__35183 = G__35903;
continue;
} else {
var vec__35197 = cljs.core.first(seq__35180__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35197,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35197,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35904 = cljs.core.next(seq__35180__$1);
var G__35905 = null;
var G__35906 = (0);
var G__35907 = (0);
seq__35180 = G__35904;
chunk__35181 = G__35905;
count__35182 = G__35906;
i__35183 = G__35907;
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
var seq__35204 = cljs.core.seq(styles);
var chunk__35205 = null;
var count__35206 = (0);
var i__35207 = (0);
while(true){
if((i__35207 < count__35206)){
var vec__35228 = chunk__35205.cljs$core$IIndexed$_nth$arity$2(null,i__35207);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35228,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35228,(1),null);
var G__35232_35908 = dom;
var G__35233_35909 = cljs.core.name(k);
var G__35234_35910 = (((v == null))?"":v);
goog.style.setStyle(G__35232_35908,G__35233_35909,G__35234_35910);


var G__35911 = seq__35204;
var G__35912 = chunk__35205;
var G__35913 = count__35206;
var G__35914 = (i__35207 + (1));
seq__35204 = G__35911;
chunk__35205 = G__35912;
count__35206 = G__35913;
i__35207 = G__35914;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35204);
if(temp__5720__auto__){
var seq__35204__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35204__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35204__$1);
var G__35915 = cljs.core.chunk_rest(seq__35204__$1);
var G__35916 = c__4550__auto__;
var G__35917 = cljs.core.count(c__4550__auto__);
var G__35918 = (0);
seq__35204 = G__35915;
chunk__35205 = G__35916;
count__35206 = G__35917;
i__35207 = G__35918;
continue;
} else {
var vec__35239 = cljs.core.first(seq__35204__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35239,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35239,(1),null);
var G__35242_35919 = dom;
var G__35243_35920 = cljs.core.name(k);
var G__35244_35921 = (((v == null))?"":v);
goog.style.setStyle(G__35242_35919,G__35243_35920,G__35244_35921);


var G__35922 = cljs.core.next(seq__35204__$1);
var G__35923 = null;
var G__35924 = (0);
var G__35925 = (0);
seq__35204 = G__35922;
chunk__35205 = G__35923;
count__35206 = G__35924;
i__35207 = G__35925;
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
var G__35246_35927 = key;
var G__35246_35928__$1 = (((G__35246_35927 instanceof cljs.core.Keyword))?G__35246_35927.fqn:null);
switch (G__35246_35928__$1) {
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
var ks_35932 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_35932,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_35932,"aria-");
}
})())){
el.setAttribute(ks_35932,value);
} else {
(el[ks_35932] = value);
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
var G__35251 = shadow.dom.dom_node(el);
var G__35252 = cls;
return goog.dom.classlist.contains(G__35251,G__35252);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35259){
var map__35260 = p__35259;
var map__35260__$1 = (((((!((map__35260 == null))))?(((((map__35260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35260.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35260):map__35260);
var props = map__35260__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35260__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35265 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35265,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35265,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35265,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35269 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35269,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35269;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35272 = arguments.length;
switch (G__35272) {
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
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
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
var temp__5720__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5720__auto__)){
var n = temp__5720__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35285){
var vec__35286 = p__35285;
var seq__35287 = cljs.core.seq(vec__35286);
var first__35288 = cljs.core.first(seq__35287);
var seq__35287__$1 = cljs.core.next(seq__35287);
var nn = first__35288;
var first__35288__$1 = cljs.core.first(seq__35287__$1);
var seq__35287__$2 = cljs.core.next(seq__35287__$1);
var np = first__35288__$1;
var nc = seq__35287__$2;
var node = vec__35286;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35291 = nn;
var G__35292 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35291,G__35292) : create_fn.call(null,G__35291,G__35292));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35294 = nn;
var G__35295 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35294,G__35295) : create_fn.call(null,G__35294,G__35295));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35302 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35302,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35302,(1),null);
var seq__35306_35950 = cljs.core.seq(node_children);
var chunk__35307_35951 = null;
var count__35308_35952 = (0);
var i__35309_35953 = (0);
while(true){
if((i__35309_35953 < count__35308_35952)){
var child_struct_35955 = chunk__35307_35951.cljs$core$IIndexed$_nth$arity$2(null,i__35309_35953);
var children_35956 = shadow.dom.dom_node(child_struct_35955);
if(cljs.core.seq_QMARK_(children_35956)){
var seq__35349_35957 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35956));
var chunk__35351_35958 = null;
var count__35352_35959 = (0);
var i__35353_35960 = (0);
while(true){
if((i__35353_35960 < count__35352_35959)){
var child_35964 = chunk__35351_35958.cljs$core$IIndexed$_nth$arity$2(null,i__35353_35960);
if(cljs.core.truth_(child_35964)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35964);


var G__35966 = seq__35349_35957;
var G__35967 = chunk__35351_35958;
var G__35968 = count__35352_35959;
var G__35969 = (i__35353_35960 + (1));
seq__35349_35957 = G__35966;
chunk__35351_35958 = G__35967;
count__35352_35959 = G__35968;
i__35353_35960 = G__35969;
continue;
} else {
var G__35971 = seq__35349_35957;
var G__35972 = chunk__35351_35958;
var G__35973 = count__35352_35959;
var G__35974 = (i__35353_35960 + (1));
seq__35349_35957 = G__35971;
chunk__35351_35958 = G__35972;
count__35352_35959 = G__35973;
i__35353_35960 = G__35974;
continue;
}
} else {
var temp__5720__auto___35975 = cljs.core.seq(seq__35349_35957);
if(temp__5720__auto___35975){
var seq__35349_35976__$1 = temp__5720__auto___35975;
if(cljs.core.chunked_seq_QMARK_(seq__35349_35976__$1)){
var c__4550__auto___35977 = cljs.core.chunk_first(seq__35349_35976__$1);
var G__35978 = cljs.core.chunk_rest(seq__35349_35976__$1);
var G__35979 = c__4550__auto___35977;
var G__35980 = cljs.core.count(c__4550__auto___35977);
var G__35981 = (0);
seq__35349_35957 = G__35978;
chunk__35351_35958 = G__35979;
count__35352_35959 = G__35980;
i__35353_35960 = G__35981;
continue;
} else {
var child_35983 = cljs.core.first(seq__35349_35976__$1);
if(cljs.core.truth_(child_35983)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35983);


var G__35984 = cljs.core.next(seq__35349_35976__$1);
var G__35985 = null;
var G__35986 = (0);
var G__35987 = (0);
seq__35349_35957 = G__35984;
chunk__35351_35958 = G__35985;
count__35352_35959 = G__35986;
i__35353_35960 = G__35987;
continue;
} else {
var G__35988 = cljs.core.next(seq__35349_35976__$1);
var G__35989 = null;
var G__35990 = (0);
var G__35991 = (0);
seq__35349_35957 = G__35988;
chunk__35351_35958 = G__35989;
count__35352_35959 = G__35990;
i__35353_35960 = G__35991;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35956);
}


var G__35993 = seq__35306_35950;
var G__35994 = chunk__35307_35951;
var G__35995 = count__35308_35952;
var G__35996 = (i__35309_35953 + (1));
seq__35306_35950 = G__35993;
chunk__35307_35951 = G__35994;
count__35308_35952 = G__35995;
i__35309_35953 = G__35996;
continue;
} else {
var temp__5720__auto___35997 = cljs.core.seq(seq__35306_35950);
if(temp__5720__auto___35997){
var seq__35306_35998__$1 = temp__5720__auto___35997;
if(cljs.core.chunked_seq_QMARK_(seq__35306_35998__$1)){
var c__4550__auto___35999 = cljs.core.chunk_first(seq__35306_35998__$1);
var G__36000 = cljs.core.chunk_rest(seq__35306_35998__$1);
var G__36001 = c__4550__auto___35999;
var G__36002 = cljs.core.count(c__4550__auto___35999);
var G__36003 = (0);
seq__35306_35950 = G__36000;
chunk__35307_35951 = G__36001;
count__35308_35952 = G__36002;
i__35309_35953 = G__36003;
continue;
} else {
var child_struct_36005 = cljs.core.first(seq__35306_35998__$1);
var children_36006 = shadow.dom.dom_node(child_struct_36005);
if(cljs.core.seq_QMARK_(children_36006)){
var seq__35373_36007 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36006));
var chunk__35375_36008 = null;
var count__35376_36009 = (0);
var i__35377_36010 = (0);
while(true){
if((i__35377_36010 < count__35376_36009)){
var child_36013 = chunk__35375_36008.cljs$core$IIndexed$_nth$arity$2(null,i__35377_36010);
if(cljs.core.truth_(child_36013)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36013);


var G__36017 = seq__35373_36007;
var G__36018 = chunk__35375_36008;
var G__36019 = count__35376_36009;
var G__36020 = (i__35377_36010 + (1));
seq__35373_36007 = G__36017;
chunk__35375_36008 = G__36018;
count__35376_36009 = G__36019;
i__35377_36010 = G__36020;
continue;
} else {
var G__36021 = seq__35373_36007;
var G__36022 = chunk__35375_36008;
var G__36023 = count__35376_36009;
var G__36024 = (i__35377_36010 + (1));
seq__35373_36007 = G__36021;
chunk__35375_36008 = G__36022;
count__35376_36009 = G__36023;
i__35377_36010 = G__36024;
continue;
}
} else {
var temp__5720__auto___36025__$1 = cljs.core.seq(seq__35373_36007);
if(temp__5720__auto___36025__$1){
var seq__35373_36027__$1 = temp__5720__auto___36025__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35373_36027__$1)){
var c__4550__auto___36028 = cljs.core.chunk_first(seq__35373_36027__$1);
var G__36029 = cljs.core.chunk_rest(seq__35373_36027__$1);
var G__36030 = c__4550__auto___36028;
var G__36031 = cljs.core.count(c__4550__auto___36028);
var G__36032 = (0);
seq__35373_36007 = G__36029;
chunk__35375_36008 = G__36030;
count__35376_36009 = G__36031;
i__35377_36010 = G__36032;
continue;
} else {
var child_36033 = cljs.core.first(seq__35373_36027__$1);
if(cljs.core.truth_(child_36033)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36033);


var G__36034 = cljs.core.next(seq__35373_36027__$1);
var G__36035 = null;
var G__36036 = (0);
var G__36037 = (0);
seq__35373_36007 = G__36034;
chunk__35375_36008 = G__36035;
count__35376_36009 = G__36036;
i__35377_36010 = G__36037;
continue;
} else {
var G__36038 = cljs.core.next(seq__35373_36027__$1);
var G__36039 = null;
var G__36040 = (0);
var G__36041 = (0);
seq__35373_36007 = G__36038;
chunk__35375_36008 = G__36039;
count__35376_36009 = G__36040;
i__35377_36010 = G__36041;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36006);
}


var G__36046 = cljs.core.next(seq__35306_35998__$1);
var G__36047 = null;
var G__36048 = (0);
var G__36049 = (0);
seq__35306_35950 = G__36046;
chunk__35307_35951 = G__36047;
count__35308_35952 = G__36048;
i__35309_35953 = G__36049;
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
var G__35410 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35410);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35416 = cljs.core.seq(node);
var chunk__35417 = null;
var count__35418 = (0);
var i__35419 = (0);
while(true){
if((i__35419 < count__35418)){
var n = chunk__35417.cljs$core$IIndexed$_nth$arity$2(null,i__35419);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36055 = seq__35416;
var G__36056 = chunk__35417;
var G__36057 = count__35418;
var G__36058 = (i__35419 + (1));
seq__35416 = G__36055;
chunk__35417 = G__36056;
count__35418 = G__36057;
i__35419 = G__36058;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35416);
if(temp__5720__auto__){
var seq__35416__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35416__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35416__$1);
var G__36060 = cljs.core.chunk_rest(seq__35416__$1);
var G__36061 = c__4550__auto__;
var G__36062 = cljs.core.count(c__4550__auto__);
var G__36063 = (0);
seq__35416 = G__36060;
chunk__35417 = G__36061;
count__35418 = G__36062;
i__35419 = G__36063;
continue;
} else {
var n = cljs.core.first(seq__35416__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36065 = cljs.core.next(seq__35416__$1);
var G__36066 = null;
var G__36067 = (0);
var G__36068 = (0);
seq__35416 = G__36065;
chunk__35417 = G__36066;
count__35418 = G__36067;
i__35419 = G__36068;
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
var G__35429 = shadow.dom.dom_node(new$);
var G__35430 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35429,G__35430);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35434 = arguments.length;
switch (G__35434) {
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
var G__35446 = arguments.length;
switch (G__35446) {
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
var G__35458 = arguments.length;
switch (G__35458) {
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
var len__4730__auto___36094 = arguments.length;
var i__4731__auto___36095 = (0);
while(true){
if((i__4731__auto___36095 < len__4730__auto___36094)){
args__4736__auto__.push((arguments[i__4731__auto___36095]));

var G__36096 = (i__4731__auto___36095 + (1));
i__4731__auto___36095 = G__36096;
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
var seq__35475_36099 = cljs.core.seq(nodes);
var chunk__35476_36100 = null;
var count__35477_36101 = (0);
var i__35478_36102 = (0);
while(true){
if((i__35478_36102 < count__35477_36101)){
var node_36104 = chunk__35476_36100.cljs$core$IIndexed$_nth$arity$2(null,i__35478_36102);
fragment.appendChild(shadow.dom._to_dom(node_36104));


var G__36105 = seq__35475_36099;
var G__36106 = chunk__35476_36100;
var G__36107 = count__35477_36101;
var G__36108 = (i__35478_36102 + (1));
seq__35475_36099 = G__36105;
chunk__35476_36100 = G__36106;
count__35477_36101 = G__36107;
i__35478_36102 = G__36108;
continue;
} else {
var temp__5720__auto___36109 = cljs.core.seq(seq__35475_36099);
if(temp__5720__auto___36109){
var seq__35475_36110__$1 = temp__5720__auto___36109;
if(cljs.core.chunked_seq_QMARK_(seq__35475_36110__$1)){
var c__4550__auto___36111 = cljs.core.chunk_first(seq__35475_36110__$1);
var G__36113 = cljs.core.chunk_rest(seq__35475_36110__$1);
var G__36114 = c__4550__auto___36111;
var G__36115 = cljs.core.count(c__4550__auto___36111);
var G__36116 = (0);
seq__35475_36099 = G__36113;
chunk__35476_36100 = G__36114;
count__35477_36101 = G__36115;
i__35478_36102 = G__36116;
continue;
} else {
var node_36118 = cljs.core.first(seq__35475_36110__$1);
fragment.appendChild(shadow.dom._to_dom(node_36118));


var G__36119 = cljs.core.next(seq__35475_36110__$1);
var G__36120 = null;
var G__36121 = (0);
var G__36122 = (0);
seq__35475_36099 = G__36119;
chunk__35476_36100 = G__36120;
count__35477_36101 = G__36121;
i__35478_36102 = G__36122;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq35473){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35473));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35490_36126 = cljs.core.seq(scripts);
var chunk__35491_36127 = null;
var count__35492_36128 = (0);
var i__35493_36129 = (0);
while(true){
if((i__35493_36129 < count__35492_36128)){
var vec__35503_36133 = chunk__35491_36127.cljs$core$IIndexed$_nth$arity$2(null,i__35493_36129);
var script_tag_36134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35503_36133,(0),null);
var script_body_36135 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35503_36133,(1),null);
eval(script_body_36135);


var G__36137 = seq__35490_36126;
var G__36138 = chunk__35491_36127;
var G__36139 = count__35492_36128;
var G__36140 = (i__35493_36129 + (1));
seq__35490_36126 = G__36137;
chunk__35491_36127 = G__36138;
count__35492_36128 = G__36139;
i__35493_36129 = G__36140;
continue;
} else {
var temp__5720__auto___36141 = cljs.core.seq(seq__35490_36126);
if(temp__5720__auto___36141){
var seq__35490_36142__$1 = temp__5720__auto___36141;
if(cljs.core.chunked_seq_QMARK_(seq__35490_36142__$1)){
var c__4550__auto___36143 = cljs.core.chunk_first(seq__35490_36142__$1);
var G__36144 = cljs.core.chunk_rest(seq__35490_36142__$1);
var G__36145 = c__4550__auto___36143;
var G__36146 = cljs.core.count(c__4550__auto___36143);
var G__36147 = (0);
seq__35490_36126 = G__36144;
chunk__35491_36127 = G__36145;
count__35492_36128 = G__36146;
i__35493_36129 = G__36147;
continue;
} else {
var vec__35509_36148 = cljs.core.first(seq__35490_36142__$1);
var script_tag_36149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35509_36148,(0),null);
var script_body_36150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35509_36148,(1),null);
eval(script_body_36150);


var G__36151 = cljs.core.next(seq__35490_36142__$1);
var G__36152 = null;
var G__36153 = (0);
var G__36154 = (0);
seq__35490_36126 = G__36151;
chunk__35491_36127 = G__36152;
count__35492_36128 = G__36153;
i__35493_36129 = G__36154;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__35515){
var vec__35517 = p__35515;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35517,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35517,(1),null);
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
var G__35530 = shadow.dom.dom_node(el);
var G__35531 = cls;
return goog.dom.getAncestorByClass(G__35530,G__35531);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35539 = arguments.length;
switch (G__35539) {
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
var G__35547 = shadow.dom.dom_node(el);
var G__35548 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__35547,G__35548);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__35550 = shadow.dom.dom_node(el);
var G__35551 = cljs.core.name(tag);
var G__35552 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__35550,G__35551,G__35552);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__35558 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__35558);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__35562 = shadow.dom.dom_node(dom);
var G__35563 = value;
return goog.dom.forms.setValue(G__35562,G__35563);
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
var seq__35579 = cljs.core.seq(style_keys);
var chunk__35580 = null;
var count__35581 = (0);
var i__35582 = (0);
while(true){
if((i__35582 < count__35581)){
var it = chunk__35580.cljs$core$IIndexed$_nth$arity$2(null,i__35582);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36164 = seq__35579;
var G__36165 = chunk__35580;
var G__36166 = count__35581;
var G__36167 = (i__35582 + (1));
seq__35579 = G__36164;
chunk__35580 = G__36165;
count__35581 = G__36166;
i__35582 = G__36167;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq(seq__35579);
if(temp__5720__auto__){
var seq__35579__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35579__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35579__$1);
var G__36170 = cljs.core.chunk_rest(seq__35579__$1);
var G__36171 = c__4550__auto__;
var G__36172 = cljs.core.count(c__4550__auto__);
var G__36173 = (0);
seq__35579 = G__36170;
chunk__35580 = G__36171;
count__35581 = G__36172;
i__35582 = G__36173;
continue;
} else {
var it = cljs.core.first(seq__35579__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36175 = cljs.core.next(seq__35579__$1);
var G__36176 = null;
var G__36177 = (0);
var G__36178 = (0);
seq__35579 = G__36175;
chunk__35580 = G__36176;
count__35581 = G__36177;
i__35582 = G__36178;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35584,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35591 = k35584;
var G__35591__$1 = (((G__35591 instanceof cljs.core.Keyword))?G__35591.fqn:null);
switch (G__35591__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35584,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35593){
var vec__35594 = p__35593;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35594,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35594,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35583){
var self__ = this;
var G__35583__$1 = this;
return (new cljs.core.RecordIter((0),G__35583__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__35599 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35599(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35585,other35586){
var self__ = this;
var this35585__$1 = this;
return (((!((other35586 == null)))) && ((this35585__$1.constructor === other35586.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35585__$1.x,other35586.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35585__$1.y,other35586.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35585__$1.__extmap,other35586.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35583){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35603 = cljs.core.keyword_identical_QMARK_;
var expr__35604 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35606 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__35607 = expr__35604;
return (pred__35603.cljs$core$IFn$_invoke$arity$2 ? pred__35603.cljs$core$IFn$_invoke$arity$2(G__35606,G__35607) : pred__35603.call(null,G__35606,G__35607));
})())){
return (new shadow.dom.Coordinate(G__35583,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35608 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__35609 = expr__35604;
return (pred__35603.cljs$core$IFn$_invoke$arity$2 ? pred__35603.cljs$core$IFn$_invoke$arity$2(G__35608,G__35609) : pred__35603.call(null,G__35608,G__35609));
})())){
return (new shadow.dom.Coordinate(self__.x,G__35583,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35583),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35583){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35583,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35587){
var extmap__4424__auto__ = (function (){var G__35614 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35587,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35587)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35614);
} else {
return G__35614;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35587),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35587),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__35616 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__35616);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__35617 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__35617);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__35621 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__35621);
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35624,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35636 = k35624;
var G__35636__$1 = (((G__35636 instanceof cljs.core.Keyword))?G__35636.fqn:null);
switch (G__35636__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35624,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35637){
var vec__35639 = p__35637;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35639,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35639,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35623){
var self__ = this;
var G__35623__$1 = this;
return (new cljs.core.RecordIter((0),G__35623__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__35649 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35649(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35625,other35626){
var self__ = this;
var this35625__$1 = this;
return (((!((other35626 == null)))) && ((this35625__$1.constructor === other35626.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35625__$1.w,other35626.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35625__$1.h,other35626.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35625__$1.__extmap,other35626.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35623){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35657 = cljs.core.keyword_identical_QMARK_;
var expr__35658 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35661 = new cljs.core.Keyword(null,"w","w",354169001);
var G__35662 = expr__35658;
return (pred__35657.cljs$core$IFn$_invoke$arity$2 ? pred__35657.cljs$core$IFn$_invoke$arity$2(G__35661,G__35662) : pred__35657.call(null,G__35661,G__35662));
})())){
return (new shadow.dom.Size(G__35623,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35664 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__35665 = expr__35658;
return (pred__35657.cljs$core$IFn$_invoke$arity$2 ? pred__35657.cljs$core$IFn$_invoke$arity$2(G__35664,G__35665) : pred__35657.call(null,G__35664,G__35665));
})())){
return (new shadow.dom.Size(self__.w,G__35623,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35623),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35623){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35623,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35629){
var extmap__4424__auto__ = (function (){var G__35679 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35629,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35629)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35679);
} else {
return G__35679;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35629),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35629),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__35681 = shadow.dom.dom_node(el);
return goog.style.getSize(G__35681);
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
var G__36265 = (i + (1));
var G__36266 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36265;
ret = G__36266;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35692){
var vec__35693 = p__35692;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35693,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35693,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35697 = arguments.length;
switch (G__35697) {
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
var G__35699_36276 = new_node;
var G__35700_36277 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__35699_36276,G__35700_36277);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35701_36279 = new_node;
var G__35702_36280 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__35701_36279,G__35702_36280);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5718__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5718__auto__)){
var child = temp__5718__auto__;
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
var G__36287 = ps;
var G__36288 = (i + (1));
el__$1 = G__36287;
i = G__36288;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__35704 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__35704);
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
var G__35705 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__35705);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__35706 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__35706);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35707 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35707,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35707,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35707,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35711_36298 = cljs.core.seq(props);
var chunk__35712_36299 = null;
var count__35713_36300 = (0);
var i__35714_36301 = (0);
while(true){
if((i__35714_36301 < count__35713_36300)){
var vec__35730_36302 = chunk__35712_36299.cljs$core$IIndexed$_nth$arity$2(null,i__35714_36301);
var k_36303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35730_36302,(0),null);
var v_36304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35730_36302,(1),null);
el.setAttributeNS((function (){var temp__5720__auto__ = cljs.core.namespace(k_36303);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36303),v_36304);


var G__36309 = seq__35711_36298;
var G__36310 = chunk__35712_36299;
var G__36311 = count__35713_36300;
var G__36312 = (i__35714_36301 + (1));
seq__35711_36298 = G__36309;
chunk__35712_36299 = G__36310;
count__35713_36300 = G__36311;
i__35714_36301 = G__36312;
continue;
} else {
var temp__5720__auto___36314 = cljs.core.seq(seq__35711_36298);
if(temp__5720__auto___36314){
var seq__35711_36315__$1 = temp__5720__auto___36314;
if(cljs.core.chunked_seq_QMARK_(seq__35711_36315__$1)){
var c__4550__auto___36316 = cljs.core.chunk_first(seq__35711_36315__$1);
var G__36317 = cljs.core.chunk_rest(seq__35711_36315__$1);
var G__36318 = c__4550__auto___36316;
var G__36319 = cljs.core.count(c__4550__auto___36316);
var G__36320 = (0);
seq__35711_36298 = G__36317;
chunk__35712_36299 = G__36318;
count__35713_36300 = G__36319;
i__35714_36301 = G__36320;
continue;
} else {
var vec__35738_36321 = cljs.core.first(seq__35711_36315__$1);
var k_36322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35738_36321,(0),null);
var v_36323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35738_36321,(1),null);
el.setAttributeNS((function (){var temp__5720__auto____$1 = cljs.core.namespace(k_36322);
if(cljs.core.truth_(temp__5720__auto____$1)){
var ns = temp__5720__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36322),v_36323);


var G__36328 = cljs.core.next(seq__35711_36315__$1);
var G__36329 = null;
var G__36330 = (0);
var G__36331 = (0);
seq__35711_36298 = G__36328;
chunk__35712_36299 = G__36329;
count__35713_36300 = G__36330;
i__35714_36301 = G__36331;
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
var vec__35747 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35747,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35747,(1),null);
var seq__35751_36334 = cljs.core.seq(node_children);
var chunk__35753_36335 = null;
var count__35754_36336 = (0);
var i__35755_36337 = (0);
while(true){
if((i__35755_36337 < count__35754_36336)){
var child_struct_36338 = chunk__35753_36335.cljs$core$IIndexed$_nth$arity$2(null,i__35755_36337);
if((!((child_struct_36338 == null)))){
if(typeof child_struct_36338 === 'string'){
var text_36339 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36339),child_struct_36338].join(''));
} else {
var children_36341 = shadow.dom.svg_node(child_struct_36338);
if(cljs.core.seq_QMARK_(children_36341)){
var seq__35782_36342 = cljs.core.seq(children_36341);
var chunk__35784_36343 = null;
var count__35785_36344 = (0);
var i__35786_36345 = (0);
while(true){
if((i__35786_36345 < count__35785_36344)){
var child_36347 = chunk__35784_36343.cljs$core$IIndexed$_nth$arity$2(null,i__35786_36345);
if(cljs.core.truth_(child_36347)){
node.appendChild(child_36347);


var G__36348 = seq__35782_36342;
var G__36349 = chunk__35784_36343;
var G__36350 = count__35785_36344;
var G__36351 = (i__35786_36345 + (1));
seq__35782_36342 = G__36348;
chunk__35784_36343 = G__36349;
count__35785_36344 = G__36350;
i__35786_36345 = G__36351;
continue;
} else {
var G__36352 = seq__35782_36342;
var G__36353 = chunk__35784_36343;
var G__36354 = count__35785_36344;
var G__36355 = (i__35786_36345 + (1));
seq__35782_36342 = G__36352;
chunk__35784_36343 = G__36353;
count__35785_36344 = G__36354;
i__35786_36345 = G__36355;
continue;
}
} else {
var temp__5720__auto___36356 = cljs.core.seq(seq__35782_36342);
if(temp__5720__auto___36356){
var seq__35782_36357__$1 = temp__5720__auto___36356;
if(cljs.core.chunked_seq_QMARK_(seq__35782_36357__$1)){
var c__4550__auto___36358 = cljs.core.chunk_first(seq__35782_36357__$1);
var G__36359 = cljs.core.chunk_rest(seq__35782_36357__$1);
var G__36360 = c__4550__auto___36358;
var G__36361 = cljs.core.count(c__4550__auto___36358);
var G__36362 = (0);
seq__35782_36342 = G__36359;
chunk__35784_36343 = G__36360;
count__35785_36344 = G__36361;
i__35786_36345 = G__36362;
continue;
} else {
var child_36364 = cljs.core.first(seq__35782_36357__$1);
if(cljs.core.truth_(child_36364)){
node.appendChild(child_36364);


var G__36365 = cljs.core.next(seq__35782_36357__$1);
var G__36366 = null;
var G__36367 = (0);
var G__36368 = (0);
seq__35782_36342 = G__36365;
chunk__35784_36343 = G__36366;
count__35785_36344 = G__36367;
i__35786_36345 = G__36368;
continue;
} else {
var G__36369 = cljs.core.next(seq__35782_36357__$1);
var G__36370 = null;
var G__36371 = (0);
var G__36372 = (0);
seq__35782_36342 = G__36369;
chunk__35784_36343 = G__36370;
count__35785_36344 = G__36371;
i__35786_36345 = G__36372;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36341);
}
}


var G__36374 = seq__35751_36334;
var G__36375 = chunk__35753_36335;
var G__36376 = count__35754_36336;
var G__36377 = (i__35755_36337 + (1));
seq__35751_36334 = G__36374;
chunk__35753_36335 = G__36375;
count__35754_36336 = G__36376;
i__35755_36337 = G__36377;
continue;
} else {
var G__36378 = seq__35751_36334;
var G__36379 = chunk__35753_36335;
var G__36380 = count__35754_36336;
var G__36381 = (i__35755_36337 + (1));
seq__35751_36334 = G__36378;
chunk__35753_36335 = G__36379;
count__35754_36336 = G__36380;
i__35755_36337 = G__36381;
continue;
}
} else {
var temp__5720__auto___36382 = cljs.core.seq(seq__35751_36334);
if(temp__5720__auto___36382){
var seq__35751_36383__$1 = temp__5720__auto___36382;
if(cljs.core.chunked_seq_QMARK_(seq__35751_36383__$1)){
var c__4550__auto___36384 = cljs.core.chunk_first(seq__35751_36383__$1);
var G__36388 = cljs.core.chunk_rest(seq__35751_36383__$1);
var G__36389 = c__4550__auto___36384;
var G__36390 = cljs.core.count(c__4550__auto___36384);
var G__36391 = (0);
seq__35751_36334 = G__36388;
chunk__35753_36335 = G__36389;
count__35754_36336 = G__36390;
i__35755_36337 = G__36391;
continue;
} else {
var child_struct_36396 = cljs.core.first(seq__35751_36383__$1);
if((!((child_struct_36396 == null)))){
if(typeof child_struct_36396 === 'string'){
var text_36397 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36397),child_struct_36396].join(''));
} else {
var children_36398 = shadow.dom.svg_node(child_struct_36396);
if(cljs.core.seq_QMARK_(children_36398)){
var seq__35791_36399 = cljs.core.seq(children_36398);
var chunk__35793_36400 = null;
var count__35794_36401 = (0);
var i__35795_36402 = (0);
while(true){
if((i__35795_36402 < count__35794_36401)){
var child_36404 = chunk__35793_36400.cljs$core$IIndexed$_nth$arity$2(null,i__35795_36402);
if(cljs.core.truth_(child_36404)){
node.appendChild(child_36404);


var G__36407 = seq__35791_36399;
var G__36408 = chunk__35793_36400;
var G__36409 = count__35794_36401;
var G__36410 = (i__35795_36402 + (1));
seq__35791_36399 = G__36407;
chunk__35793_36400 = G__36408;
count__35794_36401 = G__36409;
i__35795_36402 = G__36410;
continue;
} else {
var G__36411 = seq__35791_36399;
var G__36412 = chunk__35793_36400;
var G__36413 = count__35794_36401;
var G__36414 = (i__35795_36402 + (1));
seq__35791_36399 = G__36411;
chunk__35793_36400 = G__36412;
count__35794_36401 = G__36413;
i__35795_36402 = G__36414;
continue;
}
} else {
var temp__5720__auto___36415__$1 = cljs.core.seq(seq__35791_36399);
if(temp__5720__auto___36415__$1){
var seq__35791_36416__$1 = temp__5720__auto___36415__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35791_36416__$1)){
var c__4550__auto___36417 = cljs.core.chunk_first(seq__35791_36416__$1);
var G__36418 = cljs.core.chunk_rest(seq__35791_36416__$1);
var G__36419 = c__4550__auto___36417;
var G__36420 = cljs.core.count(c__4550__auto___36417);
var G__36421 = (0);
seq__35791_36399 = G__36418;
chunk__35793_36400 = G__36419;
count__35794_36401 = G__36420;
i__35795_36402 = G__36421;
continue;
} else {
var child_36423 = cljs.core.first(seq__35791_36416__$1);
if(cljs.core.truth_(child_36423)){
node.appendChild(child_36423);


var G__36424 = cljs.core.next(seq__35791_36416__$1);
var G__36425 = null;
var G__36426 = (0);
var G__36427 = (0);
seq__35791_36399 = G__36424;
chunk__35793_36400 = G__36425;
count__35794_36401 = G__36426;
i__35795_36402 = G__36427;
continue;
} else {
var G__36428 = cljs.core.next(seq__35791_36416__$1);
var G__36429 = null;
var G__36430 = (0);
var G__36431 = (0);
seq__35791_36399 = G__36428;
chunk__35793_36400 = G__36429;
count__35794_36401 = G__36430;
i__35795_36402 = G__36431;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36398);
}
}


var G__36432 = cljs.core.next(seq__35751_36383__$1);
var G__36433 = null;
var G__36434 = (0);
var G__36435 = (0);
seq__35751_36334 = G__36432;
chunk__35753_36335 = G__36433;
count__35754_36336 = G__36434;
i__35755_36337 = G__36435;
continue;
} else {
var G__36436 = cljs.core.next(seq__35751_36383__$1);
var G__36437 = null;
var G__36438 = (0);
var G__36439 = (0);
seq__35751_36334 = G__36436;
chunk__35753_36335 = G__36437;
count__35754_36336 = G__36438;
i__35755_36337 = G__36439;
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

var G__35805_36441 = shadow.dom._to_svg;
var G__35806_36442 = "string";
var G__35807_36443 = ((function (G__35805_36441,G__35806_36442){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__35805_36441,G__35806_36442))
;
goog.object.set(G__35805_36441,G__35806_36442,G__35807_36443);

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

var G__35811_36447 = shadow.dom._to_svg;
var G__35812_36448 = "null";
var G__35813_36449 = ((function (G__35811_36447,G__35812_36448){
return (function (_){
return null;
});})(G__35811_36447,G__35812_36448))
;
goog.object.set(G__35811_36447,G__35812_36448,G__35813_36449);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36450 = arguments.length;
var i__4731__auto___36451 = (0);
while(true){
if((i__4731__auto___36451 < len__4730__auto___36450)){
args__4736__auto__.push((arguments[i__4731__auto___36451]));

var G__36452 = (i__4731__auto___36451 + (1));
i__4731__auto___36451 = G__36452;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq35815){
var G__35816 = cljs.core.first(seq35815);
var seq35815__$1 = cljs.core.next(seq35815);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35816,seq35815__$1);
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
var G__35822 = arguments.length;
switch (G__35822) {
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
var G__35825_36454 = shadow.dom.dom_node(el);
var G__35826_36455 = cljs.core.name(event);
var G__35827_36456 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35825_36454,G__35826_36455,G__35827_36456) : shadow.dom.dom_listen.call(null,G__35825_36454,G__35826_36455,G__35827_36456));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__33469__auto___36457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto___36457,buf,chan,event_fn){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto___36457,buf,chan,event_fn){
return (function (state_35833){
var state_val_35834 = (state_35833[(1)]);
if((state_val_35834 === (1))){
var state_35833__$1 = state_35833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35833__$1,(2),once_or_cleanup);
} else {
if((state_val_35834 === (2))){
var inst_35830 = (state_35833[(2)]);
var inst_35831 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35833__$1 = (function (){var statearr_35836 = state_35833;
(statearr_35836[(7)] = inst_35830);

return statearr_35836;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35833__$1,inst_35831);
} else {
return null;
}
}
});})(c__33469__auto___36457,buf,chan,event_fn))
;
return ((function (switch__33368__auto__,c__33469__auto___36457,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__33369__auto__ = null;
var shadow$dom$state_machine__33369__auto____0 = (function (){
var statearr_35838 = [null,null,null,null,null,null,null,null];
(statearr_35838[(0)] = shadow$dom$state_machine__33369__auto__);

(statearr_35838[(1)] = (1));

return statearr_35838;
});
var shadow$dom$state_machine__33369__auto____1 = (function (state_35833){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_35833);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e35840){if((e35840 instanceof Object)){
var ex__33372__auto__ = e35840;
var statearr_35841_36458 = state_35833;
(statearr_35841_36458[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35840;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36459 = state_35833;
state_35833 = G__36459;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
shadow$dom$state_machine__33369__auto__ = function(state_35833){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33369__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33369__auto____1.call(this,state_35833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33369__auto____0;
shadow$dom$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33369__auto____1;
return shadow$dom$state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto___36457,buf,chan,event_fn))
})();
var state__33471__auto__ = (function (){var statearr_35843 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_35843[(6)] = c__33469__auto___36457);

return statearr_35843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto___36457,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
