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
return cljs.core.cons((coll[idx]),(function (){var G__40061 = coll;
var G__40062 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__40061,G__40062) : shadow.dom.lazy_native_coll_seq.call(null,G__40061,G__40062));
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
var G__40090 = arguments.length;
switch (G__40090) {
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
var G__40094 = arguments.length;
switch (G__40094) {
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
var G__40101 = arguments.length;
switch (G__40101) {
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
var G__40110 = arguments.length;
switch (G__40110) {
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
var G__40120 = arguments.length;
switch (G__40120) {
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
var G__40122 = document;
var G__40123 = shadow.dom.dom_node(el);
return goog.dom.contains(G__40122,G__40123);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__40125 = shadow.dom.dom_node(parent);
var G__40126 = shadow.dom.dom_node(el);
return goog.dom.contains(G__40125,G__40126);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__40128 = shadow.dom.dom_node(el);
var G__40129 = cls;
return goog.dom.classlist.add(G__40128,G__40129);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__40131 = shadow.dom.dom_node(el);
var G__40132 = cls;
return goog.dom.classlist.remove(G__40131,G__40132);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__40135 = arguments.length;
switch (G__40135) {
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
var G__40137 = shadow.dom.dom_node(el);
var G__40138 = cls;
return goog.dom.classlist.toggle(G__40137,G__40138);
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
}catch (e40140){if((e40140 instanceof Object)){
var e = e40140;
return console.log("didnt support attachEvent",el,e);
} else {
throw e40140;

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
var seq__40147 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__40148 = null;
var count__40149 = (0);
var i__40150 = (0);
while(true){
if((i__40150 < count__40149)){
var el = chunk__40148.cljs$core$IIndexed$_nth$arity$2(null,i__40150);
var handler_40885__$1 = ((function (seq__40147,chunk__40148,count__40149,i__40150,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40147,chunk__40148,count__40149,i__40150,el))
;
var G__40166_40887 = el;
var G__40167_40888 = cljs.core.name(ev);
var G__40168_40889 = handler_40885__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40166_40887,G__40167_40888,G__40168_40889) : shadow.dom.dom_listen.call(null,G__40166_40887,G__40167_40888,G__40168_40889));


var G__40890 = seq__40147;
var G__40891 = chunk__40148;
var G__40892 = count__40149;
var G__40893 = (i__40150 + (1));
seq__40147 = G__40890;
chunk__40148 = G__40891;
count__40149 = G__40892;
i__40150 = G__40893;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40147);
if(temp__5735__auto__){
var seq__40147__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40147__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40147__$1);
var G__40894 = cljs.core.chunk_rest(seq__40147__$1);
var G__40895 = c__4550__auto__;
var G__40896 = cljs.core.count(c__4550__auto__);
var G__40897 = (0);
seq__40147 = G__40894;
chunk__40148 = G__40895;
count__40149 = G__40896;
i__40150 = G__40897;
continue;
} else {
var el = cljs.core.first(seq__40147__$1);
var handler_40898__$1 = ((function (seq__40147,chunk__40148,count__40149,i__40150,el,seq__40147__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40147,chunk__40148,count__40149,i__40150,el,seq__40147__$1,temp__5735__auto__))
;
var G__40171_40900 = el;
var G__40172_40901 = cljs.core.name(ev);
var G__40173_40902 = handler_40898__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40171_40900,G__40172_40901,G__40173_40902) : shadow.dom.dom_listen.call(null,G__40171_40900,G__40172_40901,G__40173_40902));


var G__40904 = cljs.core.next(seq__40147__$1);
var G__40905 = null;
var G__40906 = (0);
var G__40907 = (0);
seq__40147 = G__40904;
chunk__40148 = G__40905;
count__40149 = G__40906;
i__40150 = G__40907;
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
var G__40178 = arguments.length;
switch (G__40178) {
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
var G__40189 = shadow.dom.dom_node(el);
var G__40190 = cljs.core.name(ev);
var G__40191 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40189,G__40190,G__40191) : shadow.dom.dom_listen.call(null,G__40189,G__40190,G__40191));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__40195 = shadow.dom.dom_node(el);
var G__40196 = cljs.core.name(ev);
var G__40197 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__40195,G__40196,G__40197) : shadow.dom.dom_listen_remove.call(null,G__40195,G__40196,G__40197));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__40204 = cljs.core.seq(events);
var chunk__40205 = null;
var count__40206 = (0);
var i__40207 = (0);
while(true){
if((i__40207 < count__40206)){
var vec__40220 = chunk__40205.cljs$core$IIndexed$_nth$arity$2(null,i__40207);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40220,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40220,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40913 = seq__40204;
var G__40914 = chunk__40205;
var G__40915 = count__40206;
var G__40916 = (i__40207 + (1));
seq__40204 = G__40913;
chunk__40205 = G__40914;
count__40206 = G__40915;
i__40207 = G__40916;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40204);
if(temp__5735__auto__){
var seq__40204__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40204__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40204__$1);
var G__40919 = cljs.core.chunk_rest(seq__40204__$1);
var G__40920 = c__4550__auto__;
var G__40921 = cljs.core.count(c__4550__auto__);
var G__40922 = (0);
seq__40204 = G__40919;
chunk__40205 = G__40920;
count__40206 = G__40921;
i__40207 = G__40922;
continue;
} else {
var vec__40226 = cljs.core.first(seq__40204__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40226,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40226,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__40925 = cljs.core.next(seq__40204__$1);
var G__40926 = null;
var G__40927 = (0);
var G__40928 = (0);
seq__40204 = G__40925;
chunk__40205 = G__40926;
count__40206 = G__40927;
i__40207 = G__40928;
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
var seq__40234 = cljs.core.seq(styles);
var chunk__40235 = null;
var count__40236 = (0);
var i__40237 = (0);
while(true){
if((i__40237 < count__40236)){
var vec__40266 = chunk__40235.cljs$core$IIndexed$_nth$arity$2(null,i__40237);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40266,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40266,(1),null);
var G__40269_40931 = dom;
var G__40270_40932 = cljs.core.name(k);
var G__40271_40933 = (((v == null))?"":v);
goog.style.setStyle(G__40269_40931,G__40270_40932,G__40271_40933);


var G__40934 = seq__40234;
var G__40935 = chunk__40235;
var G__40936 = count__40236;
var G__40937 = (i__40237 + (1));
seq__40234 = G__40934;
chunk__40235 = G__40935;
count__40236 = G__40936;
i__40237 = G__40937;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40234);
if(temp__5735__auto__){
var seq__40234__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40234__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40234__$1);
var G__40939 = cljs.core.chunk_rest(seq__40234__$1);
var G__40940 = c__4550__auto__;
var G__40941 = cljs.core.count(c__4550__auto__);
var G__40942 = (0);
seq__40234 = G__40939;
chunk__40235 = G__40940;
count__40236 = G__40941;
i__40237 = G__40942;
continue;
} else {
var vec__40278 = cljs.core.first(seq__40234__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40278,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40278,(1),null);
var G__40282_40944 = dom;
var G__40283_40945 = cljs.core.name(k);
var G__40284_40946 = (((v == null))?"":v);
goog.style.setStyle(G__40282_40944,G__40283_40945,G__40284_40946);


var G__40947 = cljs.core.next(seq__40234__$1);
var G__40948 = null;
var G__40949 = (0);
var G__40950 = (0);
seq__40234 = G__40947;
chunk__40235 = G__40948;
count__40236 = G__40949;
i__40237 = G__40950;
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
var G__40289_40953 = key;
var G__40289_40954__$1 = (((G__40289_40953 instanceof cljs.core.Keyword))?G__40289_40953.fqn:null);
switch (G__40289_40954__$1) {
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
var ks_40960 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_40960,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_40960,"aria-");
}
})())){
el.setAttribute(ks_40960,value);
} else {
(el[ks_40960] = value);
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
var G__40299 = shadow.dom.dom_node(el);
var G__40300 = cls;
return goog.dom.classlist.contains(G__40299,G__40300);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__40311){
var map__40312 = p__40311;
var map__40312__$1 = (((((!((map__40312 == null))))?(((((map__40312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40312):map__40312);
var props = map__40312__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40312__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__40317 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40317,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40317,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40317,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__40321 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__40321,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__40321;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__40330 = arguments.length;
switch (G__40330) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__40348){
var vec__40349 = p__40348;
var seq__40350 = cljs.core.seq(vec__40349);
var first__40351 = cljs.core.first(seq__40350);
var seq__40350__$1 = cljs.core.next(seq__40350);
var nn = first__40351;
var first__40351__$1 = cljs.core.first(seq__40350__$1);
var seq__40350__$2 = cljs.core.next(seq__40350__$1);
var np = first__40351__$1;
var nc = seq__40350__$2;
var node = vec__40349;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40354 = nn;
var G__40355 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40354,G__40355) : create_fn.call(null,G__40354,G__40355));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40357 = nn;
var G__40358 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40357,G__40358) : create_fn.call(null,G__40357,G__40358));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__40362 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40362,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40362,(1),null);
var seq__40365_40980 = cljs.core.seq(node_children);
var chunk__40366_40981 = null;
var count__40367_40982 = (0);
var i__40368_40983 = (0);
while(true){
if((i__40368_40983 < count__40367_40982)){
var child_struct_40984 = chunk__40366_40981.cljs$core$IIndexed$_nth$arity$2(null,i__40368_40983);
var children_40986 = shadow.dom.dom_node(child_struct_40984);
if(cljs.core.seq_QMARK_(children_40986)){
var seq__40410_40987 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_40986));
var chunk__40412_40988 = null;
var count__40413_40989 = (0);
var i__40414_40990 = (0);
while(true){
if((i__40414_40990 < count__40413_40989)){
var child_40993 = chunk__40412_40988.cljs$core$IIndexed$_nth$arity$2(null,i__40414_40990);
if(cljs.core.truth_(child_40993)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_40993);


var G__40994 = seq__40410_40987;
var G__40995 = chunk__40412_40988;
var G__40996 = count__40413_40989;
var G__40997 = (i__40414_40990 + (1));
seq__40410_40987 = G__40994;
chunk__40412_40988 = G__40995;
count__40413_40989 = G__40996;
i__40414_40990 = G__40997;
continue;
} else {
var G__40998 = seq__40410_40987;
var G__40999 = chunk__40412_40988;
var G__41000 = count__40413_40989;
var G__41001 = (i__40414_40990 + (1));
seq__40410_40987 = G__40998;
chunk__40412_40988 = G__40999;
count__40413_40989 = G__41000;
i__40414_40990 = G__41001;
continue;
}
} else {
var temp__5735__auto___41003 = cljs.core.seq(seq__40410_40987);
if(temp__5735__auto___41003){
var seq__40410_41004__$1 = temp__5735__auto___41003;
if(cljs.core.chunked_seq_QMARK_(seq__40410_41004__$1)){
var c__4550__auto___41005 = cljs.core.chunk_first(seq__40410_41004__$1);
var G__41007 = cljs.core.chunk_rest(seq__40410_41004__$1);
var G__41008 = c__4550__auto___41005;
var G__41009 = cljs.core.count(c__4550__auto___41005);
var G__41010 = (0);
seq__40410_40987 = G__41007;
chunk__40412_40988 = G__41008;
count__40413_40989 = G__41009;
i__40414_40990 = G__41010;
continue;
} else {
var child_41011 = cljs.core.first(seq__40410_41004__$1);
if(cljs.core.truth_(child_41011)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41011);


var G__41012 = cljs.core.next(seq__40410_41004__$1);
var G__41013 = null;
var G__41014 = (0);
var G__41015 = (0);
seq__40410_40987 = G__41012;
chunk__40412_40988 = G__41013;
count__40413_40989 = G__41014;
i__40414_40990 = G__41015;
continue;
} else {
var G__41017 = cljs.core.next(seq__40410_41004__$1);
var G__41018 = null;
var G__41019 = (0);
var G__41020 = (0);
seq__40410_40987 = G__41017;
chunk__40412_40988 = G__41018;
count__40413_40989 = G__41019;
i__40414_40990 = G__41020;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_40986);
}


var G__41023 = seq__40365_40980;
var G__41024 = chunk__40366_40981;
var G__41025 = count__40367_40982;
var G__41026 = (i__40368_40983 + (1));
seq__40365_40980 = G__41023;
chunk__40366_40981 = G__41024;
count__40367_40982 = G__41025;
i__40368_40983 = G__41026;
continue;
} else {
var temp__5735__auto___41027 = cljs.core.seq(seq__40365_40980);
if(temp__5735__auto___41027){
var seq__40365_41028__$1 = temp__5735__auto___41027;
if(cljs.core.chunked_seq_QMARK_(seq__40365_41028__$1)){
var c__4550__auto___41029 = cljs.core.chunk_first(seq__40365_41028__$1);
var G__41030 = cljs.core.chunk_rest(seq__40365_41028__$1);
var G__41031 = c__4550__auto___41029;
var G__41032 = cljs.core.count(c__4550__auto___41029);
var G__41033 = (0);
seq__40365_40980 = G__41030;
chunk__40366_40981 = G__41031;
count__40367_40982 = G__41032;
i__40368_40983 = G__41033;
continue;
} else {
var child_struct_41034 = cljs.core.first(seq__40365_41028__$1);
var children_41036 = shadow.dom.dom_node(child_struct_41034);
if(cljs.core.seq_QMARK_(children_41036)){
var seq__40429_41038 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_41036));
var chunk__40431_41039 = null;
var count__40432_41040 = (0);
var i__40433_41041 = (0);
while(true){
if((i__40433_41041 < count__40432_41040)){
var child_41044 = chunk__40431_41039.cljs$core$IIndexed$_nth$arity$2(null,i__40433_41041);
if(cljs.core.truth_(child_41044)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41044);


var G__41046 = seq__40429_41038;
var G__41047 = chunk__40431_41039;
var G__41048 = count__40432_41040;
var G__41049 = (i__40433_41041 + (1));
seq__40429_41038 = G__41046;
chunk__40431_41039 = G__41047;
count__40432_41040 = G__41048;
i__40433_41041 = G__41049;
continue;
} else {
var G__41050 = seq__40429_41038;
var G__41051 = chunk__40431_41039;
var G__41052 = count__40432_41040;
var G__41053 = (i__40433_41041 + (1));
seq__40429_41038 = G__41050;
chunk__40431_41039 = G__41051;
count__40432_41040 = G__41052;
i__40433_41041 = G__41053;
continue;
}
} else {
var temp__5735__auto___41054__$1 = cljs.core.seq(seq__40429_41038);
if(temp__5735__auto___41054__$1){
var seq__40429_41056__$1 = temp__5735__auto___41054__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40429_41056__$1)){
var c__4550__auto___41058 = cljs.core.chunk_first(seq__40429_41056__$1);
var G__41059 = cljs.core.chunk_rest(seq__40429_41056__$1);
var G__41060 = c__4550__auto___41058;
var G__41061 = cljs.core.count(c__4550__auto___41058);
var G__41062 = (0);
seq__40429_41038 = G__41059;
chunk__40431_41039 = G__41060;
count__40432_41040 = G__41061;
i__40433_41041 = G__41062;
continue;
} else {
var child_41063 = cljs.core.first(seq__40429_41056__$1);
if(cljs.core.truth_(child_41063)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41063);


var G__41065 = cljs.core.next(seq__40429_41056__$1);
var G__41066 = null;
var G__41067 = (0);
var G__41068 = (0);
seq__40429_41038 = G__41065;
chunk__40431_41039 = G__41066;
count__40432_41040 = G__41067;
i__40433_41041 = G__41068;
continue;
} else {
var G__41070 = cljs.core.next(seq__40429_41056__$1);
var G__41071 = null;
var G__41072 = (0);
var G__41073 = (0);
seq__40429_41038 = G__41070;
chunk__40431_41039 = G__41071;
count__40432_41040 = G__41072;
i__40433_41041 = G__41073;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_41036);
}


var G__41074 = cljs.core.next(seq__40365_41028__$1);
var G__41075 = null;
var G__41076 = (0);
var G__41077 = (0);
seq__40365_40980 = G__41074;
chunk__40366_40981 = G__41075;
count__40367_40982 = G__41076;
i__40368_40983 = G__41077;
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
var G__40452 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__40452);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__40455 = cljs.core.seq(node);
var chunk__40456 = null;
var count__40457 = (0);
var i__40458 = (0);
while(true){
if((i__40458 < count__40457)){
var n = chunk__40456.cljs$core$IIndexed$_nth$arity$2(null,i__40458);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__41079 = seq__40455;
var G__41080 = chunk__40456;
var G__41081 = count__40457;
var G__41082 = (i__40458 + (1));
seq__40455 = G__41079;
chunk__40456 = G__41080;
count__40457 = G__41081;
i__40458 = G__41082;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40455);
if(temp__5735__auto__){
var seq__40455__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40455__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40455__$1);
var G__41086 = cljs.core.chunk_rest(seq__40455__$1);
var G__41087 = c__4550__auto__;
var G__41088 = cljs.core.count(c__4550__auto__);
var G__41089 = (0);
seq__40455 = G__41086;
chunk__40456 = G__41087;
count__40457 = G__41088;
i__40458 = G__41089;
continue;
} else {
var n = cljs.core.first(seq__40455__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__41090 = cljs.core.next(seq__40455__$1);
var G__41091 = null;
var G__41092 = (0);
var G__41093 = (0);
seq__40455 = G__41090;
chunk__40456 = G__41091;
count__40457 = G__41092;
i__40458 = G__41093;
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
var G__40461 = shadow.dom.dom_node(new$);
var G__40462 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__40461,G__40462);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__40467 = arguments.length;
switch (G__40467) {
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
var G__40472 = arguments.length;
switch (G__40472) {
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
var G__40485 = arguments.length;
switch (G__40485) {
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
var len__4730__auto___41103 = arguments.length;
var i__4731__auto___41104 = (0);
while(true){
if((i__4731__auto___41104 < len__4730__auto___41103)){
args__4736__auto__.push((arguments[i__4731__auto___41104]));

var G__41105 = (i__4731__auto___41104 + (1));
i__4731__auto___41104 = G__41105;
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
var seq__40499_41106 = cljs.core.seq(nodes);
var chunk__40500_41107 = null;
var count__40501_41108 = (0);
var i__40502_41109 = (0);
while(true){
if((i__40502_41109 < count__40501_41108)){
var node_41110 = chunk__40500_41107.cljs$core$IIndexed$_nth$arity$2(null,i__40502_41109);
fragment.appendChild(shadow.dom._to_dom(node_41110));


var G__41111 = seq__40499_41106;
var G__41112 = chunk__40500_41107;
var G__41113 = count__40501_41108;
var G__41114 = (i__40502_41109 + (1));
seq__40499_41106 = G__41111;
chunk__40500_41107 = G__41112;
count__40501_41108 = G__41113;
i__40502_41109 = G__41114;
continue;
} else {
var temp__5735__auto___41119 = cljs.core.seq(seq__40499_41106);
if(temp__5735__auto___41119){
var seq__40499_41120__$1 = temp__5735__auto___41119;
if(cljs.core.chunked_seq_QMARK_(seq__40499_41120__$1)){
var c__4550__auto___41121 = cljs.core.chunk_first(seq__40499_41120__$1);
var G__41122 = cljs.core.chunk_rest(seq__40499_41120__$1);
var G__41123 = c__4550__auto___41121;
var G__41124 = cljs.core.count(c__4550__auto___41121);
var G__41125 = (0);
seq__40499_41106 = G__41122;
chunk__40500_41107 = G__41123;
count__40501_41108 = G__41124;
i__40502_41109 = G__41125;
continue;
} else {
var node_41126 = cljs.core.first(seq__40499_41120__$1);
fragment.appendChild(shadow.dom._to_dom(node_41126));


var G__41127 = cljs.core.next(seq__40499_41120__$1);
var G__41128 = null;
var G__41129 = (0);
var G__41130 = (0);
seq__40499_41106 = G__41127;
chunk__40500_41107 = G__41128;
count__40501_41108 = G__41129;
i__40502_41109 = G__41130;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq40494){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40494));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__40515_41131 = cljs.core.seq(scripts);
var chunk__40516_41132 = null;
var count__40517_41133 = (0);
var i__40518_41134 = (0);
while(true){
if((i__40518_41134 < count__40517_41133)){
var vec__40529_41135 = chunk__40516_41132.cljs$core$IIndexed$_nth$arity$2(null,i__40518_41134);
var script_tag_41136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40529_41135,(0),null);
var script_body_41137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40529_41135,(1),null);
eval(script_body_41137);


var G__41138 = seq__40515_41131;
var G__41139 = chunk__40516_41132;
var G__41140 = count__40517_41133;
var G__41141 = (i__40518_41134 + (1));
seq__40515_41131 = G__41138;
chunk__40516_41132 = G__41139;
count__40517_41133 = G__41140;
i__40518_41134 = G__41141;
continue;
} else {
var temp__5735__auto___41142 = cljs.core.seq(seq__40515_41131);
if(temp__5735__auto___41142){
var seq__40515_41143__$1 = temp__5735__auto___41142;
if(cljs.core.chunked_seq_QMARK_(seq__40515_41143__$1)){
var c__4550__auto___41144 = cljs.core.chunk_first(seq__40515_41143__$1);
var G__41145 = cljs.core.chunk_rest(seq__40515_41143__$1);
var G__41146 = c__4550__auto___41144;
var G__41147 = cljs.core.count(c__4550__auto___41144);
var G__41148 = (0);
seq__40515_41131 = G__41145;
chunk__40516_41132 = G__41146;
count__40517_41133 = G__41147;
i__40518_41134 = G__41148;
continue;
} else {
var vec__40536_41149 = cljs.core.first(seq__40515_41143__$1);
var script_tag_41150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40536_41149,(0),null);
var script_body_41151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40536_41149,(1),null);
eval(script_body_41151);


var G__41152 = cljs.core.next(seq__40515_41143__$1);
var G__41153 = null;
var G__41154 = (0);
var G__41155 = (0);
seq__40515_41131 = G__41152;
chunk__40516_41132 = G__41153;
count__40517_41133 = G__41154;
i__40518_41134 = G__41155;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__40539){
var vec__40540 = p__40539;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40540,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40540,(1),null);
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
var G__40549 = shadow.dom.dom_node(el);
var G__40550 = cls;
return goog.dom.getAncestorByClass(G__40549,G__40550);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__40556 = arguments.length;
switch (G__40556) {
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
var G__40558 = shadow.dom.dom_node(el);
var G__40559 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__40558,G__40559);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__40561 = shadow.dom.dom_node(el);
var G__40562 = cljs.core.name(tag);
var G__40563 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__40561,G__40562,G__40563);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__40567 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__40567);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__40570 = shadow.dom.dom_node(dom);
var G__40571 = value;
return goog.dom.forms.setValue(G__40570,G__40571);
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
var seq__40584 = cljs.core.seq(style_keys);
var chunk__40585 = null;
var count__40586 = (0);
var i__40587 = (0);
while(true){
if((i__40587 < count__40586)){
var it = chunk__40585.cljs$core$IIndexed$_nth$arity$2(null,i__40587);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41164 = seq__40584;
var G__41165 = chunk__40585;
var G__41166 = count__40586;
var G__41167 = (i__40587 + (1));
seq__40584 = G__41164;
chunk__40585 = G__41165;
count__40586 = G__41166;
i__40587 = G__41167;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40584);
if(temp__5735__auto__){
var seq__40584__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40584__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40584__$1);
var G__41168 = cljs.core.chunk_rest(seq__40584__$1);
var G__41169 = c__4550__auto__;
var G__41170 = cljs.core.count(c__4550__auto__);
var G__41171 = (0);
seq__40584 = G__41168;
chunk__40585 = G__41169;
count__40586 = G__41170;
i__40587 = G__41171;
continue;
} else {
var it = cljs.core.first(seq__40584__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41172 = cljs.core.next(seq__40584__$1);
var G__41173 = null;
var G__41174 = (0);
var G__41175 = (0);
seq__40584 = G__41172;
chunk__40585 = G__41173;
count__40586 = G__41174;
i__40587 = G__41175;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k40593,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__40603 = k40593;
var G__40603__$1 = (((G__40603 instanceof cljs.core.Keyword))?G__40603.fqn:null);
switch (G__40603__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40593,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__40606){
var vec__40607 = p__40606;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40607,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40607,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40592){
var self__ = this;
var G__40592__$1 = this;
return (new cljs.core.RecordIter((0),G__40592__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__40615 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__40615(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40594,other40595){
var self__ = this;
var this40594__$1 = this;
return (((!((other40595 == null)))) && ((this40594__$1.constructor === other40595.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40594__$1.x,other40595.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40594__$1.y,other40595.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40594__$1.__extmap,other40595.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__40592){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__40617 = cljs.core.keyword_identical_QMARK_;
var expr__40618 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__40620 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__40621 = expr__40618;
return (pred__40617.cljs$core$IFn$_invoke$arity$2 ? pred__40617.cljs$core$IFn$_invoke$arity$2(G__40620,G__40621) : pred__40617.call(null,G__40620,G__40621));
})())){
return (new shadow.dom.Coordinate(G__40592,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40622 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__40623 = expr__40618;
return (pred__40617.cljs$core$IFn$_invoke$arity$2 ? pred__40617.cljs$core$IFn$_invoke$arity$2(G__40622,G__40623) : pred__40617.call(null,G__40622,G__40623));
})())){
return (new shadow.dom.Coordinate(self__.x,G__40592,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__40592),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__40592){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__40592,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__40600){
var extmap__4424__auto__ = (function (){var G__40624 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40600,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__40600)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40624);
} else {
return G__40624;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__40600),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__40600),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__40625 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__40625);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__40626 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__40626);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__40628 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__40628);
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k40632,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__40642 = k40632;
var G__40642__$1 = (((G__40642 instanceof cljs.core.Keyword))?G__40642.fqn:null);
switch (G__40642__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40632,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__40645){
var vec__40647 = p__40645;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40647,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40647,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40631){
var self__ = this;
var G__40631__$1 = this;
return (new cljs.core.RecordIter((0),G__40631__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__40657 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__40657(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40633,other40634){
var self__ = this;
var this40633__$1 = this;
return (((!((other40634 == null)))) && ((this40633__$1.constructor === other40634.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40633__$1.w,other40634.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40633__$1.h,other40634.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40633__$1.__extmap,other40634.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__40631){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__40663 = cljs.core.keyword_identical_QMARK_;
var expr__40664 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__40666 = new cljs.core.Keyword(null,"w","w",354169001);
var G__40667 = expr__40664;
return (pred__40663.cljs$core$IFn$_invoke$arity$2 ? pred__40663.cljs$core$IFn$_invoke$arity$2(G__40666,G__40667) : pred__40663.call(null,G__40666,G__40667));
})())){
return (new shadow.dom.Size(G__40631,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40668 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__40669 = expr__40664;
return (pred__40663.cljs$core$IFn$_invoke$arity$2 ? pred__40663.cljs$core$IFn$_invoke$arity$2(G__40668,G__40669) : pred__40663.call(null,G__40668,G__40669));
})())){
return (new shadow.dom.Size(self__.w,G__40631,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__40631),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__40631){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__40631,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__40637){
var extmap__4424__auto__ = (function (){var G__40677 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40637,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__40637)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40677);
} else {
return G__40677;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__40637),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__40637),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__40679 = shadow.dom.dom_node(el);
return goog.style.getSize(G__40679);
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
var G__41239 = (i + (1));
var G__41240 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__41239;
ret = G__41240;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__40694){
var vec__40695 = p__40694;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40695,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40695,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__40704 = arguments.length;
switch (G__40704) {
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
var G__40711_41246 = new_node;
var G__40712_41247 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__40711_41246,G__40712_41247);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__40715_41248 = new_node;
var G__40716_41249 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__40715_41248,G__40716_41249);

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
var G__41250 = ps;
var G__41251 = (i + (1));
el__$1 = G__41250;
i = G__41251;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__40721 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__40721);
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
var G__40726 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__40726);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__40729 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__40729);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__40731 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40731,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40731,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40731,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__40735_41256 = cljs.core.seq(props);
var chunk__40736_41257 = null;
var count__40737_41258 = (0);
var i__40738_41259 = (0);
while(true){
if((i__40738_41259 < count__40737_41258)){
var vec__40747_41260 = chunk__40736_41257.cljs$core$IIndexed$_nth$arity$2(null,i__40738_41259);
var k_41261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40747_41260,(0),null);
var v_41262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40747_41260,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_41261);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41261),v_41262);


var G__41264 = seq__40735_41256;
var G__41265 = chunk__40736_41257;
var G__41266 = count__40737_41258;
var G__41267 = (i__40738_41259 + (1));
seq__40735_41256 = G__41264;
chunk__40736_41257 = G__41265;
count__40737_41258 = G__41266;
i__40738_41259 = G__41267;
continue;
} else {
var temp__5735__auto___41268 = cljs.core.seq(seq__40735_41256);
if(temp__5735__auto___41268){
var seq__40735_41269__$1 = temp__5735__auto___41268;
if(cljs.core.chunked_seq_QMARK_(seq__40735_41269__$1)){
var c__4550__auto___41270 = cljs.core.chunk_first(seq__40735_41269__$1);
var G__41271 = cljs.core.chunk_rest(seq__40735_41269__$1);
var G__41272 = c__4550__auto___41270;
var G__41273 = cljs.core.count(c__4550__auto___41270);
var G__41274 = (0);
seq__40735_41256 = G__41271;
chunk__40736_41257 = G__41272;
count__40737_41258 = G__41273;
i__40738_41259 = G__41274;
continue;
} else {
var vec__40752_41275 = cljs.core.first(seq__40735_41269__$1);
var k_41276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40752_41275,(0),null);
var v_41277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40752_41275,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_41276);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41276),v_41277);


var G__41278 = cljs.core.next(seq__40735_41269__$1);
var G__41279 = null;
var G__41280 = (0);
var G__41281 = (0);
seq__40735_41256 = G__41278;
chunk__40736_41257 = G__41279;
count__40737_41258 = G__41280;
i__40738_41259 = G__41281;
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
var vec__40764 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40764,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40764,(1),null);
var seq__40768_41282 = cljs.core.seq(node_children);
var chunk__40770_41283 = null;
var count__40771_41284 = (0);
var i__40772_41285 = (0);
while(true){
if((i__40772_41285 < count__40771_41284)){
var child_struct_41286 = chunk__40770_41283.cljs$core$IIndexed$_nth$arity$2(null,i__40772_41285);
if((!((child_struct_41286 == null)))){
if(typeof child_struct_41286 === 'string'){
var text_41287 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41287),child_struct_41286].join(''));
} else {
var children_41288 = shadow.dom.svg_node(child_struct_41286);
if(cljs.core.seq_QMARK_(children_41288)){
var seq__40789_41289 = cljs.core.seq(children_41288);
var chunk__40791_41290 = null;
var count__40792_41291 = (0);
var i__40793_41292 = (0);
while(true){
if((i__40793_41292 < count__40792_41291)){
var child_41294 = chunk__40791_41290.cljs$core$IIndexed$_nth$arity$2(null,i__40793_41292);
if(cljs.core.truth_(child_41294)){
node.appendChild(child_41294);


var G__41296 = seq__40789_41289;
var G__41297 = chunk__40791_41290;
var G__41298 = count__40792_41291;
var G__41299 = (i__40793_41292 + (1));
seq__40789_41289 = G__41296;
chunk__40791_41290 = G__41297;
count__40792_41291 = G__41298;
i__40793_41292 = G__41299;
continue;
} else {
var G__41300 = seq__40789_41289;
var G__41301 = chunk__40791_41290;
var G__41302 = count__40792_41291;
var G__41303 = (i__40793_41292 + (1));
seq__40789_41289 = G__41300;
chunk__40791_41290 = G__41301;
count__40792_41291 = G__41302;
i__40793_41292 = G__41303;
continue;
}
} else {
var temp__5735__auto___41304 = cljs.core.seq(seq__40789_41289);
if(temp__5735__auto___41304){
var seq__40789_41305__$1 = temp__5735__auto___41304;
if(cljs.core.chunked_seq_QMARK_(seq__40789_41305__$1)){
var c__4550__auto___41306 = cljs.core.chunk_first(seq__40789_41305__$1);
var G__41307 = cljs.core.chunk_rest(seq__40789_41305__$1);
var G__41308 = c__4550__auto___41306;
var G__41309 = cljs.core.count(c__4550__auto___41306);
var G__41310 = (0);
seq__40789_41289 = G__41307;
chunk__40791_41290 = G__41308;
count__40792_41291 = G__41309;
i__40793_41292 = G__41310;
continue;
} else {
var child_41311 = cljs.core.first(seq__40789_41305__$1);
if(cljs.core.truth_(child_41311)){
node.appendChild(child_41311);


var G__41312 = cljs.core.next(seq__40789_41305__$1);
var G__41313 = null;
var G__41314 = (0);
var G__41315 = (0);
seq__40789_41289 = G__41312;
chunk__40791_41290 = G__41313;
count__40792_41291 = G__41314;
i__40793_41292 = G__41315;
continue;
} else {
var G__41317 = cljs.core.next(seq__40789_41305__$1);
var G__41318 = null;
var G__41319 = (0);
var G__41320 = (0);
seq__40789_41289 = G__41317;
chunk__40791_41290 = G__41318;
count__40792_41291 = G__41319;
i__40793_41292 = G__41320;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41288);
}
}


var G__41323 = seq__40768_41282;
var G__41324 = chunk__40770_41283;
var G__41325 = count__40771_41284;
var G__41326 = (i__40772_41285 + (1));
seq__40768_41282 = G__41323;
chunk__40770_41283 = G__41324;
count__40771_41284 = G__41325;
i__40772_41285 = G__41326;
continue;
} else {
var G__41328 = seq__40768_41282;
var G__41329 = chunk__40770_41283;
var G__41330 = count__40771_41284;
var G__41331 = (i__40772_41285 + (1));
seq__40768_41282 = G__41328;
chunk__40770_41283 = G__41329;
count__40771_41284 = G__41330;
i__40772_41285 = G__41331;
continue;
}
} else {
var temp__5735__auto___41332 = cljs.core.seq(seq__40768_41282);
if(temp__5735__auto___41332){
var seq__40768_41333__$1 = temp__5735__auto___41332;
if(cljs.core.chunked_seq_QMARK_(seq__40768_41333__$1)){
var c__4550__auto___41334 = cljs.core.chunk_first(seq__40768_41333__$1);
var G__41335 = cljs.core.chunk_rest(seq__40768_41333__$1);
var G__41336 = c__4550__auto___41334;
var G__41337 = cljs.core.count(c__4550__auto___41334);
var G__41338 = (0);
seq__40768_41282 = G__41335;
chunk__40770_41283 = G__41336;
count__40771_41284 = G__41337;
i__40772_41285 = G__41338;
continue;
} else {
var child_struct_41339 = cljs.core.first(seq__40768_41333__$1);
if((!((child_struct_41339 == null)))){
if(typeof child_struct_41339 === 'string'){
var text_41341 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41341),child_struct_41339].join(''));
} else {
var children_41342 = shadow.dom.svg_node(child_struct_41339);
if(cljs.core.seq_QMARK_(children_41342)){
var seq__40795_41347 = cljs.core.seq(children_41342);
var chunk__40797_41348 = null;
var count__40798_41349 = (0);
var i__40799_41350 = (0);
while(true){
if((i__40799_41350 < count__40798_41349)){
var child_41351 = chunk__40797_41348.cljs$core$IIndexed$_nth$arity$2(null,i__40799_41350);
if(cljs.core.truth_(child_41351)){
node.appendChild(child_41351);


var G__41353 = seq__40795_41347;
var G__41354 = chunk__40797_41348;
var G__41355 = count__40798_41349;
var G__41356 = (i__40799_41350 + (1));
seq__40795_41347 = G__41353;
chunk__40797_41348 = G__41354;
count__40798_41349 = G__41355;
i__40799_41350 = G__41356;
continue;
} else {
var G__41357 = seq__40795_41347;
var G__41358 = chunk__40797_41348;
var G__41359 = count__40798_41349;
var G__41360 = (i__40799_41350 + (1));
seq__40795_41347 = G__41357;
chunk__40797_41348 = G__41358;
count__40798_41349 = G__41359;
i__40799_41350 = G__41360;
continue;
}
} else {
var temp__5735__auto___41361__$1 = cljs.core.seq(seq__40795_41347);
if(temp__5735__auto___41361__$1){
var seq__40795_41362__$1 = temp__5735__auto___41361__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40795_41362__$1)){
var c__4550__auto___41363 = cljs.core.chunk_first(seq__40795_41362__$1);
var G__41364 = cljs.core.chunk_rest(seq__40795_41362__$1);
var G__41365 = c__4550__auto___41363;
var G__41366 = cljs.core.count(c__4550__auto___41363);
var G__41367 = (0);
seq__40795_41347 = G__41364;
chunk__40797_41348 = G__41365;
count__40798_41349 = G__41366;
i__40799_41350 = G__41367;
continue;
} else {
var child_41368 = cljs.core.first(seq__40795_41362__$1);
if(cljs.core.truth_(child_41368)){
node.appendChild(child_41368);


var G__41369 = cljs.core.next(seq__40795_41362__$1);
var G__41370 = null;
var G__41371 = (0);
var G__41372 = (0);
seq__40795_41347 = G__41369;
chunk__40797_41348 = G__41370;
count__40798_41349 = G__41371;
i__40799_41350 = G__41372;
continue;
} else {
var G__41375 = cljs.core.next(seq__40795_41362__$1);
var G__41376 = null;
var G__41377 = (0);
var G__41378 = (0);
seq__40795_41347 = G__41375;
chunk__40797_41348 = G__41376;
count__40798_41349 = G__41377;
i__40799_41350 = G__41378;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41342);
}
}


var G__41380 = cljs.core.next(seq__40768_41333__$1);
var G__41381 = null;
var G__41382 = (0);
var G__41383 = (0);
seq__40768_41282 = G__41380;
chunk__40770_41283 = G__41381;
count__40771_41284 = G__41382;
i__40772_41285 = G__41383;
continue;
} else {
var G__41384 = cljs.core.next(seq__40768_41333__$1);
var G__41385 = null;
var G__41386 = (0);
var G__41387 = (0);
seq__40768_41282 = G__41384;
chunk__40770_41283 = G__41385;
count__40771_41284 = G__41386;
i__40772_41285 = G__41387;
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

var G__40801_41388 = shadow.dom._to_svg;
var G__40802_41389 = "string";
var G__40803_41390 = ((function (G__40801_41388,G__40802_41389){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__40801_41388,G__40802_41389))
;
goog.object.set(G__40801_41388,G__40802_41389,G__40803_41390);

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

var G__40808_41395 = shadow.dom._to_svg;
var G__40809_41396 = "null";
var G__40810_41397 = ((function (G__40808_41395,G__40809_41396){
return (function (_){
return null;
});})(G__40808_41395,G__40809_41396))
;
goog.object.set(G__40808_41395,G__40809_41396,G__40810_41397);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41398 = arguments.length;
var i__4731__auto___41399 = (0);
while(true){
if((i__4731__auto___41399 < len__4730__auto___41398)){
args__4736__auto__.push((arguments[i__4731__auto___41399]));

var G__41400 = (i__4731__auto___41399 + (1));
i__4731__auto___41399 = G__41400;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq40814){
var G__40815 = cljs.core.first(seq40814);
var seq40814__$1 = cljs.core.next(seq40814);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40815,seq40814__$1);
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
var G__40822 = arguments.length;
switch (G__40822) {
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
var G__40826_41403 = shadow.dom.dom_node(el);
var G__40827_41404 = cljs.core.name(event);
var G__40828_41405 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40826_41403,G__40827_41404,G__40828_41405) : shadow.dom.dom_listen.call(null,G__40826_41403,G__40827_41404,G__40828_41405));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__38428__auto___41406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto___41406,buf,chan,event_fn){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto___41406,buf,chan,event_fn){
return (function (state_40833){
var state_val_40834 = (state_40833[(1)]);
if((state_val_40834 === (1))){
var state_40833__$1 = state_40833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40833__$1,(2),once_or_cleanup);
} else {
if((state_val_40834 === (2))){
var inst_40830 = (state_40833[(2)]);
var inst_40831 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_40833__$1 = (function (){var statearr_40838 = state_40833;
(statearr_40838[(7)] = inst_40830);

return statearr_40838;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40833__$1,inst_40831);
} else {
return null;
}
}
});})(c__38428__auto___41406,buf,chan,event_fn))
;
return ((function (switch__38327__auto__,c__38428__auto___41406,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__38328__auto__ = null;
var shadow$dom$state_machine__38328__auto____0 = (function (){
var statearr_40842 = [null,null,null,null,null,null,null,null];
(statearr_40842[(0)] = shadow$dom$state_machine__38328__auto__);

(statearr_40842[(1)] = (1));

return statearr_40842;
});
var shadow$dom$state_machine__38328__auto____1 = (function (state_40833){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_40833);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e40844){if((e40844 instanceof Object)){
var ex__38331__auto__ = e40844;
var statearr_40845_41410 = state_40833;
(statearr_40845_41410[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40844;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41413 = state_40833;
state_40833 = G__41413;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
shadow$dom$state_machine__38328__auto__ = function(state_40833){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__38328__auto____0.call(this);
case 1:
return shadow$dom$state_machine__38328__auto____1.call(this,state_40833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__38328__auto____0;
shadow$dom$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__38328__auto____1;
return shadow$dom$state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto___41406,buf,chan,event_fn))
})();
var state__38430__auto__ = (function (){var statearr_40848 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_40848[(6)] = c__38428__auto___41406);

return statearr_40848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto___41406,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
