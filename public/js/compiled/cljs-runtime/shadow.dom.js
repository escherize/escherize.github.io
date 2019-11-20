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
return cljs.core.cons((coll[idx]),(function (){var G__36879 = coll;
var G__36880 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__36879,G__36880) : shadow.dom.lazy_native_coll_seq.call(null,G__36879,G__36880));
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
var G__36949 = arguments.length;
switch (G__36949) {
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
var G__36962 = arguments.length;
switch (G__36962) {
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
var G__36975 = arguments.length;
switch (G__36975) {
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
var G__36990 = arguments.length;
switch (G__36990) {
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
var G__37013 = arguments.length;
switch (G__37013) {
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
var G__37017 = document;
var G__37018 = shadow.dom.dom_node(el);
return goog.dom.contains(G__37017,G__37018);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__37019 = shadow.dom.dom_node(parent);
var G__37020 = shadow.dom.dom_node(el);
return goog.dom.contains(G__37019,G__37020);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__37029 = shadow.dom.dom_node(el);
var G__37030 = cls;
return goog.dom.classlist.add(G__37029,G__37030);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__37033 = shadow.dom.dom_node(el);
var G__37034 = cls;
return goog.dom.classlist.remove(G__37033,G__37034);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__37036 = arguments.length;
switch (G__37036) {
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
var G__37037 = shadow.dom.dom_node(el);
var G__37038 = cls;
return goog.dom.classlist.toggle(G__37037,G__37038);
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
}catch (e37048){if((e37048 instanceof Object)){
var e = e37048;
return console.log("didnt support attachEvent",el,e);
} else {
throw e37048;

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
var seq__37059 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__37060 = null;
var count__37061 = (0);
var i__37062 = (0);
while(true){
if((i__37062 < count__37061)){
var el = chunk__37060.cljs$core$IIndexed$_nth$arity$2(null,i__37062);
var handler_38097__$1 = ((function (seq__37059,chunk__37060,count__37061,i__37062,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37059,chunk__37060,count__37061,i__37062,el))
;
var G__37082_38098 = el;
var G__37083_38099 = cljs.core.name(ev);
var G__37085_38100 = handler_38097__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37082_38098,G__37083_38099,G__37085_38100) : shadow.dom.dom_listen.call(null,G__37082_38098,G__37083_38099,G__37085_38100));


var G__38101 = seq__37059;
var G__38102 = chunk__37060;
var G__38103 = count__37061;
var G__38104 = (i__37062 + (1));
seq__37059 = G__38101;
chunk__37060 = G__38102;
count__37061 = G__38103;
i__37062 = G__38104;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37059);
if(temp__5735__auto__){
var seq__37059__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37059__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37059__$1);
var G__38105 = cljs.core.chunk_rest(seq__37059__$1);
var G__38106 = c__4550__auto__;
var G__38107 = cljs.core.count(c__4550__auto__);
var G__38108 = (0);
seq__37059 = G__38105;
chunk__37060 = G__38106;
count__37061 = G__38107;
i__37062 = G__38108;
continue;
} else {
var el = cljs.core.first(seq__37059__$1);
var handler_38109__$1 = ((function (seq__37059,chunk__37060,count__37061,i__37062,el,seq__37059__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__37059,chunk__37060,count__37061,i__37062,el,seq__37059__$1,temp__5735__auto__))
;
var G__37090_38110 = el;
var G__37091_38111 = cljs.core.name(ev);
var G__37092_38112 = handler_38109__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37090_38110,G__37091_38111,G__37092_38112) : shadow.dom.dom_listen.call(null,G__37090_38110,G__37091_38111,G__37092_38112));


var G__38113 = cljs.core.next(seq__37059__$1);
var G__38114 = null;
var G__38115 = (0);
var G__38116 = (0);
seq__37059 = G__38113;
chunk__37060 = G__38114;
count__37061 = G__38115;
i__37062 = G__38116;
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
var G__37105 = arguments.length;
switch (G__37105) {
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
var G__37115 = shadow.dom.dom_node(el);
var G__37116 = cljs.core.name(ev);
var G__37117 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__37115,G__37116,G__37117) : shadow.dom.dom_listen.call(null,G__37115,G__37116,G__37117));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__37123 = shadow.dom.dom_node(el);
var G__37124 = cljs.core.name(ev);
var G__37125 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__37123,G__37124,G__37125) : shadow.dom.dom_listen_remove.call(null,G__37123,G__37124,G__37125));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__37132 = cljs.core.seq(events);
var chunk__37133 = null;
var count__37134 = (0);
var i__37135 = (0);
while(true){
if((i__37135 < count__37134)){
var vec__37147 = chunk__37133.cljs$core$IIndexed$_nth$arity$2(null,i__37135);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37147,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37147,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38119 = seq__37132;
var G__38120 = chunk__37133;
var G__38121 = count__37134;
var G__38122 = (i__37135 + (1));
seq__37132 = G__38119;
chunk__37133 = G__38120;
count__37134 = G__38121;
i__37135 = G__38122;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37132);
if(temp__5735__auto__){
var seq__37132__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37132__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37132__$1);
var G__38124 = cljs.core.chunk_rest(seq__37132__$1);
var G__38125 = c__4550__auto__;
var G__38126 = cljs.core.count(c__4550__auto__);
var G__38127 = (0);
seq__37132 = G__38124;
chunk__37133 = G__38125;
count__37134 = G__38126;
i__37135 = G__38127;
continue;
} else {
var vec__37153 = cljs.core.first(seq__37132__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37153,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37153,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__38128 = cljs.core.next(seq__37132__$1);
var G__38129 = null;
var G__38130 = (0);
var G__38131 = (0);
seq__37132 = G__38128;
chunk__37133 = G__38129;
count__37134 = G__38130;
i__37135 = G__38131;
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
var seq__37159 = cljs.core.seq(styles);
var chunk__37160 = null;
var count__37161 = (0);
var i__37162 = (0);
while(true){
if((i__37162 < count__37161)){
var vec__37179 = chunk__37160.cljs$core$IIndexed$_nth$arity$2(null,i__37162);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37179,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37179,(1),null);
var G__37182_38136 = dom;
var G__37183_38137 = cljs.core.name(k);
var G__37184_38138 = (((v == null))?"":v);
goog.style.setStyle(G__37182_38136,G__37183_38137,G__37184_38138);


var G__38140 = seq__37159;
var G__38141 = chunk__37160;
var G__38142 = count__37161;
var G__38143 = (i__37162 + (1));
seq__37159 = G__38140;
chunk__37160 = G__38141;
count__37161 = G__38142;
i__37162 = G__38143;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37159);
if(temp__5735__auto__){
var seq__37159__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37159__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37159__$1);
var G__38144 = cljs.core.chunk_rest(seq__37159__$1);
var G__38145 = c__4550__auto__;
var G__38146 = cljs.core.count(c__4550__auto__);
var G__38147 = (0);
seq__37159 = G__38144;
chunk__37160 = G__38145;
count__37161 = G__38146;
i__37162 = G__38147;
continue;
} else {
var vec__37189 = cljs.core.first(seq__37159__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37189,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37189,(1),null);
var G__37193_38149 = dom;
var G__37194_38150 = cljs.core.name(k);
var G__37195_38151 = (((v == null))?"":v);
goog.style.setStyle(G__37193_38149,G__37194_38150,G__37195_38151);


var G__38152 = cljs.core.next(seq__37159__$1);
var G__38153 = null;
var G__38154 = (0);
var G__38155 = (0);
seq__37159 = G__38152;
chunk__37160 = G__38153;
count__37161 = G__38154;
i__37162 = G__38155;
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
var G__37203_38156 = key;
var G__37203_38157__$1 = (((G__37203_38156 instanceof cljs.core.Keyword))?G__37203_38156.fqn:null);
switch (G__37203_38157__$1) {
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
var ks_38170 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_38170,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_38170,"aria-");
}
})())){
el.setAttribute(ks_38170,value);
} else {
(el[ks_38170] = value);
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
var G__37221 = shadow.dom.dom_node(el);
var G__37222 = cls;
return goog.dom.classlist.contains(G__37221,G__37222);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__37230){
var map__37231 = p__37230;
var map__37231__$1 = (((((!((map__37231 == null))))?(((((map__37231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37231):map__37231);
var props = map__37231__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37231__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__37236 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37236,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37236,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37236,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__37240 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__37240,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__37240;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__37250 = arguments.length;
switch (G__37250) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__37259){
var vec__37260 = p__37259;
var seq__37261 = cljs.core.seq(vec__37260);
var first__37262 = cljs.core.first(seq__37261);
var seq__37261__$1 = cljs.core.next(seq__37261);
var nn = first__37262;
var first__37262__$1 = cljs.core.first(seq__37261__$1);
var seq__37261__$2 = cljs.core.next(seq__37261__$1);
var np = first__37262__$1;
var nc = seq__37261__$2;
var node = vec__37260;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37280 = nn;
var G__37281 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37280,G__37281) : create_fn.call(null,G__37280,G__37281));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37286 = nn;
var G__37287 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__37286,G__37287) : create_fn.call(null,G__37286,G__37287));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__37299 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37299,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37299,(1),null);
var seq__37304_38200 = cljs.core.seq(node_children);
var chunk__37305_38201 = null;
var count__37306_38202 = (0);
var i__37308_38203 = (0);
while(true){
if((i__37308_38203 < count__37306_38202)){
var child_struct_38204 = chunk__37305_38201.cljs$core$IIndexed$_nth$arity$2(null,i__37308_38203);
var children_38206 = shadow.dom.dom_node(child_struct_38204);
if(cljs.core.seq_QMARK_(children_38206)){
var seq__37367_38208 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38206));
var chunk__37369_38209 = null;
var count__37370_38210 = (0);
var i__37371_38211 = (0);
while(true){
if((i__37371_38211 < count__37370_38210)){
var child_38212 = chunk__37369_38209.cljs$core$IIndexed$_nth$arity$2(null,i__37371_38211);
if(cljs.core.truth_(child_38212)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38212);


var G__38213 = seq__37367_38208;
var G__38214 = chunk__37369_38209;
var G__38215 = count__37370_38210;
var G__38216 = (i__37371_38211 + (1));
seq__37367_38208 = G__38213;
chunk__37369_38209 = G__38214;
count__37370_38210 = G__38215;
i__37371_38211 = G__38216;
continue;
} else {
var G__38217 = seq__37367_38208;
var G__38218 = chunk__37369_38209;
var G__38219 = count__37370_38210;
var G__38220 = (i__37371_38211 + (1));
seq__37367_38208 = G__38217;
chunk__37369_38209 = G__38218;
count__37370_38210 = G__38219;
i__37371_38211 = G__38220;
continue;
}
} else {
var temp__5735__auto___38221 = cljs.core.seq(seq__37367_38208);
if(temp__5735__auto___38221){
var seq__37367_38222__$1 = temp__5735__auto___38221;
if(cljs.core.chunked_seq_QMARK_(seq__37367_38222__$1)){
var c__4550__auto___38223 = cljs.core.chunk_first(seq__37367_38222__$1);
var G__38224 = cljs.core.chunk_rest(seq__37367_38222__$1);
var G__38225 = c__4550__auto___38223;
var G__38226 = cljs.core.count(c__4550__auto___38223);
var G__38227 = (0);
seq__37367_38208 = G__38224;
chunk__37369_38209 = G__38225;
count__37370_38210 = G__38226;
i__37371_38211 = G__38227;
continue;
} else {
var child_38228 = cljs.core.first(seq__37367_38222__$1);
if(cljs.core.truth_(child_38228)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38228);


var G__38229 = cljs.core.next(seq__37367_38222__$1);
var G__38230 = null;
var G__38231 = (0);
var G__38232 = (0);
seq__37367_38208 = G__38229;
chunk__37369_38209 = G__38230;
count__37370_38210 = G__38231;
i__37371_38211 = G__38232;
continue;
} else {
var G__38233 = cljs.core.next(seq__37367_38222__$1);
var G__38234 = null;
var G__38235 = (0);
var G__38236 = (0);
seq__37367_38208 = G__38233;
chunk__37369_38209 = G__38234;
count__37370_38210 = G__38235;
i__37371_38211 = G__38236;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38206);
}


var G__38237 = seq__37304_38200;
var G__38238 = chunk__37305_38201;
var G__38239 = count__37306_38202;
var G__38240 = (i__37308_38203 + (1));
seq__37304_38200 = G__38237;
chunk__37305_38201 = G__38238;
count__37306_38202 = G__38239;
i__37308_38203 = G__38240;
continue;
} else {
var temp__5735__auto___38241 = cljs.core.seq(seq__37304_38200);
if(temp__5735__auto___38241){
var seq__37304_38242__$1 = temp__5735__auto___38241;
if(cljs.core.chunked_seq_QMARK_(seq__37304_38242__$1)){
var c__4550__auto___38243 = cljs.core.chunk_first(seq__37304_38242__$1);
var G__38244 = cljs.core.chunk_rest(seq__37304_38242__$1);
var G__38245 = c__4550__auto___38243;
var G__38246 = cljs.core.count(c__4550__auto___38243);
var G__38247 = (0);
seq__37304_38200 = G__38244;
chunk__37305_38201 = G__38245;
count__37306_38202 = G__38246;
i__37308_38203 = G__38247;
continue;
} else {
var child_struct_38248 = cljs.core.first(seq__37304_38242__$1);
var children_38249 = shadow.dom.dom_node(child_struct_38248);
if(cljs.core.seq_QMARK_(children_38249)){
var seq__37403_38251 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_38249));
var chunk__37405_38252 = null;
var count__37406_38253 = (0);
var i__37407_38254 = (0);
while(true){
if((i__37407_38254 < count__37406_38253)){
var child_38258 = chunk__37405_38252.cljs$core$IIndexed$_nth$arity$2(null,i__37407_38254);
if(cljs.core.truth_(child_38258)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38258);


var G__38259 = seq__37403_38251;
var G__38260 = chunk__37405_38252;
var G__38261 = count__37406_38253;
var G__38262 = (i__37407_38254 + (1));
seq__37403_38251 = G__38259;
chunk__37405_38252 = G__38260;
count__37406_38253 = G__38261;
i__37407_38254 = G__38262;
continue;
} else {
var G__38263 = seq__37403_38251;
var G__38264 = chunk__37405_38252;
var G__38265 = count__37406_38253;
var G__38266 = (i__37407_38254 + (1));
seq__37403_38251 = G__38263;
chunk__37405_38252 = G__38264;
count__37406_38253 = G__38265;
i__37407_38254 = G__38266;
continue;
}
} else {
var temp__5735__auto___38267__$1 = cljs.core.seq(seq__37403_38251);
if(temp__5735__auto___38267__$1){
var seq__37403_38268__$1 = temp__5735__auto___38267__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37403_38268__$1)){
var c__4550__auto___38269 = cljs.core.chunk_first(seq__37403_38268__$1);
var G__38270 = cljs.core.chunk_rest(seq__37403_38268__$1);
var G__38271 = c__4550__auto___38269;
var G__38272 = cljs.core.count(c__4550__auto___38269);
var G__38273 = (0);
seq__37403_38251 = G__38270;
chunk__37405_38252 = G__38271;
count__37406_38253 = G__38272;
i__37407_38254 = G__38273;
continue;
} else {
var child_38274 = cljs.core.first(seq__37403_38268__$1);
if(cljs.core.truth_(child_38274)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_38274);


var G__38279 = cljs.core.next(seq__37403_38268__$1);
var G__38280 = null;
var G__38281 = (0);
var G__38282 = (0);
seq__37403_38251 = G__38279;
chunk__37405_38252 = G__38280;
count__37406_38253 = G__38281;
i__37407_38254 = G__38282;
continue;
} else {
var G__38283 = cljs.core.next(seq__37403_38268__$1);
var G__38284 = null;
var G__38285 = (0);
var G__38286 = (0);
seq__37403_38251 = G__38283;
chunk__37405_38252 = G__38284;
count__37406_38253 = G__38285;
i__37407_38254 = G__38286;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_38249);
}


var G__38287 = cljs.core.next(seq__37304_38242__$1);
var G__38288 = null;
var G__38289 = (0);
var G__38290 = (0);
seq__37304_38200 = G__38287;
chunk__37305_38201 = G__38288;
count__37306_38202 = G__38289;
i__37308_38203 = G__38290;
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
var G__37456 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__37456);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__37462 = cljs.core.seq(node);
var chunk__37463 = null;
var count__37464 = (0);
var i__37465 = (0);
while(true){
if((i__37465 < count__37464)){
var n = chunk__37463.cljs$core$IIndexed$_nth$arity$2(null,i__37465);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38291 = seq__37462;
var G__38292 = chunk__37463;
var G__38293 = count__37464;
var G__38294 = (i__37465 + (1));
seq__37462 = G__38291;
chunk__37463 = G__38292;
count__37464 = G__38293;
i__37465 = G__38294;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37462);
if(temp__5735__auto__){
var seq__37462__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37462__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37462__$1);
var G__38295 = cljs.core.chunk_rest(seq__37462__$1);
var G__38296 = c__4550__auto__;
var G__38297 = cljs.core.count(c__4550__auto__);
var G__38298 = (0);
seq__37462 = G__38295;
chunk__37463 = G__38296;
count__37464 = G__38297;
i__37465 = G__38298;
continue;
} else {
var n = cljs.core.first(seq__37462__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__38303 = cljs.core.next(seq__37462__$1);
var G__38304 = null;
var G__38305 = (0);
var G__38306 = (0);
seq__37462 = G__38303;
chunk__37463 = G__38304;
count__37464 = G__38305;
i__37465 = G__38306;
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
var G__37487 = shadow.dom.dom_node(new$);
var G__37488 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__37487,G__37488);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__37494 = arguments.length;
switch (G__37494) {
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
var G__37513 = arguments.length;
switch (G__37513) {
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
var G__37523 = arguments.length;
switch (G__37523) {
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
var len__4730__auto___38316 = arguments.length;
var i__4731__auto___38317 = (0);
while(true){
if((i__4731__auto___38317 < len__4730__auto___38316)){
args__4736__auto__.push((arguments[i__4731__auto___38317]));

var G__38318 = (i__4731__auto___38317 + (1));
i__4731__auto___38317 = G__38318;
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
var seq__37552_38322 = cljs.core.seq(nodes);
var chunk__37553_38323 = null;
var count__37554_38324 = (0);
var i__37555_38325 = (0);
while(true){
if((i__37555_38325 < count__37554_38324)){
var node_38329 = chunk__37553_38323.cljs$core$IIndexed$_nth$arity$2(null,i__37555_38325);
fragment.appendChild(shadow.dom._to_dom(node_38329));


var G__38332 = seq__37552_38322;
var G__38333 = chunk__37553_38323;
var G__38334 = count__37554_38324;
var G__38335 = (i__37555_38325 + (1));
seq__37552_38322 = G__38332;
chunk__37553_38323 = G__38333;
count__37554_38324 = G__38334;
i__37555_38325 = G__38335;
continue;
} else {
var temp__5735__auto___38336 = cljs.core.seq(seq__37552_38322);
if(temp__5735__auto___38336){
var seq__37552_38339__$1 = temp__5735__auto___38336;
if(cljs.core.chunked_seq_QMARK_(seq__37552_38339__$1)){
var c__4550__auto___38340 = cljs.core.chunk_first(seq__37552_38339__$1);
var G__38343 = cljs.core.chunk_rest(seq__37552_38339__$1);
var G__38344 = c__4550__auto___38340;
var G__38345 = cljs.core.count(c__4550__auto___38340);
var G__38346 = (0);
seq__37552_38322 = G__38343;
chunk__37553_38323 = G__38344;
count__37554_38324 = G__38345;
i__37555_38325 = G__38346;
continue;
} else {
var node_38349 = cljs.core.first(seq__37552_38339__$1);
fragment.appendChild(shadow.dom._to_dom(node_38349));


var G__38350 = cljs.core.next(seq__37552_38339__$1);
var G__38351 = null;
var G__38352 = (0);
var G__38353 = (0);
seq__37552_38322 = G__38350;
chunk__37553_38323 = G__38351;
count__37554_38324 = G__38352;
i__37555_38325 = G__38353;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq37544){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37544));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__37583_38354 = cljs.core.seq(scripts);
var chunk__37584_38355 = null;
var count__37585_38356 = (0);
var i__37586_38357 = (0);
while(true){
if((i__37586_38357 < count__37585_38356)){
var vec__37599_38358 = chunk__37584_38355.cljs$core$IIndexed$_nth$arity$2(null,i__37586_38357);
var script_tag_38359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37599_38358,(0),null);
var script_body_38360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37599_38358,(1),null);
eval(script_body_38360);


var G__38361 = seq__37583_38354;
var G__38362 = chunk__37584_38355;
var G__38363 = count__37585_38356;
var G__38364 = (i__37586_38357 + (1));
seq__37583_38354 = G__38361;
chunk__37584_38355 = G__38362;
count__37585_38356 = G__38363;
i__37586_38357 = G__38364;
continue;
} else {
var temp__5735__auto___38368 = cljs.core.seq(seq__37583_38354);
if(temp__5735__auto___38368){
var seq__37583_38369__$1 = temp__5735__auto___38368;
if(cljs.core.chunked_seq_QMARK_(seq__37583_38369__$1)){
var c__4550__auto___38370 = cljs.core.chunk_first(seq__37583_38369__$1);
var G__38371 = cljs.core.chunk_rest(seq__37583_38369__$1);
var G__38372 = c__4550__auto___38370;
var G__38373 = cljs.core.count(c__4550__auto___38370);
var G__38374 = (0);
seq__37583_38354 = G__38371;
chunk__37584_38355 = G__38372;
count__37585_38356 = G__38373;
i__37586_38357 = G__38374;
continue;
} else {
var vec__37608_38375 = cljs.core.first(seq__37583_38369__$1);
var script_tag_38376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37608_38375,(0),null);
var script_body_38377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37608_38375,(1),null);
eval(script_body_38377);


var G__38378 = cljs.core.next(seq__37583_38369__$1);
var G__38379 = null;
var G__38380 = (0);
var G__38381 = (0);
seq__37583_38354 = G__38378;
chunk__37584_38355 = G__38379;
count__37585_38356 = G__38380;
i__37586_38357 = G__38381;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__37618){
var vec__37620 = p__37618;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37620,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37620,(1),null);
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
var G__37630 = shadow.dom.dom_node(el);
var G__37631 = cls;
return goog.dom.getAncestorByClass(G__37630,G__37631);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__37635 = arguments.length;
switch (G__37635) {
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
var G__37638 = shadow.dom.dom_node(el);
var G__37639 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__37638,G__37639);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__37642 = shadow.dom.dom_node(el);
var G__37643 = cljs.core.name(tag);
var G__37644 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__37642,G__37643,G__37644);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__37649 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__37649);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__37651 = shadow.dom.dom_node(dom);
var G__37652 = value;
return goog.dom.forms.setValue(G__37651,G__37652);
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
var seq__37682 = cljs.core.seq(style_keys);
var chunk__37683 = null;
var count__37684 = (0);
var i__37685 = (0);
while(true){
if((i__37685 < count__37684)){
var it = chunk__37683.cljs$core$IIndexed$_nth$arity$2(null,i__37685);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38390 = seq__37682;
var G__38391 = chunk__37683;
var G__38392 = count__37684;
var G__38393 = (i__37685 + (1));
seq__37682 = G__38390;
chunk__37683 = G__38391;
count__37684 = G__38392;
i__37685 = G__38393;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37682);
if(temp__5735__auto__){
var seq__37682__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37682__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37682__$1);
var G__38396 = cljs.core.chunk_rest(seq__37682__$1);
var G__38397 = c__4550__auto__;
var G__38398 = cljs.core.count(c__4550__auto__);
var G__38399 = (0);
seq__37682 = G__38396;
chunk__37683 = G__38397;
count__37684 = G__38398;
i__37685 = G__38399;
continue;
} else {
var it = cljs.core.first(seq__37682__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__38400 = cljs.core.next(seq__37682__$1);
var G__38401 = null;
var G__38402 = (0);
var G__38403 = (0);
seq__37682 = G__38400;
chunk__37683 = G__38401;
count__37684 = G__38402;
i__37685 = G__38403;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k37707,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__37713 = k37707;
var G__37713__$1 = (((G__37713 instanceof cljs.core.Keyword))?G__37713.fqn:null);
switch (G__37713__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37707,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__37716){
var vec__37717 = p__37716;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37717,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37717,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37706){
var self__ = this;
var G__37706__$1 = this;
return (new cljs.core.RecordIter((0),G__37706__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__37739 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__37739(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37708,other37709){
var self__ = this;
var this37708__$1 = this;
return (((!((other37709 == null)))) && ((this37708__$1.constructor === other37709.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37708__$1.x,other37709.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37708__$1.y,other37709.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37708__$1.__extmap,other37709.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__37706){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__37747 = cljs.core.keyword_identical_QMARK_;
var expr__37748 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__37751 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__37752 = expr__37748;
return (pred__37747.cljs$core$IFn$_invoke$arity$2 ? pred__37747.cljs$core$IFn$_invoke$arity$2(G__37751,G__37752) : pred__37747.call(null,G__37751,G__37752));
})())){
return (new shadow.dom.Coordinate(G__37706,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37756 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__37757 = expr__37748;
return (pred__37747.cljs$core$IFn$_invoke$arity$2 ? pred__37747.cljs$core$IFn$_invoke$arity$2(G__37756,G__37757) : pred__37747.call(null,G__37756,G__37757));
})())){
return (new shadow.dom.Coordinate(self__.x,G__37706,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__37706),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__37706){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__37706,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__37710){
var extmap__4424__auto__ = (function (){var G__37778 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37710,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__37710)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37778);
} else {
return G__37778;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__37710),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__37710),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__37780 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__37780);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__37783 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__37783);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__37784 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__37784);
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k37786,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__37795 = k37786;
var G__37795__$1 = (((G__37795 instanceof cljs.core.Keyword))?G__37795.fqn:null);
switch (G__37795__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k37786,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__37799){
var vec__37801 = p__37799;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37801,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37801,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__37785){
var self__ = this;
var G__37785__$1 = this;
return (new cljs.core.RecordIter((0),G__37785__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__37815 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__37815(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this37787,other37788){
var self__ = this;
var this37787__$1 = this;
return (((!((other37788 == null)))) && ((this37787__$1.constructor === other37788.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37787__$1.w,other37788.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37787__$1.h,other37788.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this37787__$1.__extmap,other37788.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__37785){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__37832 = cljs.core.keyword_identical_QMARK_;
var expr__37833 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__37835 = new cljs.core.Keyword(null,"w","w",354169001);
var G__37836 = expr__37833;
return (pred__37832.cljs$core$IFn$_invoke$arity$2 ? pred__37832.cljs$core$IFn$_invoke$arity$2(G__37835,G__37836) : pred__37832.call(null,G__37835,G__37836));
})())){
return (new shadow.dom.Size(G__37785,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__37837 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__37838 = expr__37833;
return (pred__37832.cljs$core$IFn$_invoke$arity$2 ? pred__37832.cljs$core$IFn$_invoke$arity$2(G__37837,G__37838) : pred__37832.call(null,G__37837,G__37838));
})())){
return (new shadow.dom.Size(self__.w,G__37785,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__37785),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__37785){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__37785,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__37790){
var extmap__4424__auto__ = (function (){var G__37839 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__37790,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__37790)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__37839);
} else {
return G__37839;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__37790),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__37790),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__37842 = shadow.dom.dom_node(el);
return goog.style.getSize(G__37842);
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
var G__38444 = (i + (1));
var G__38445 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__38444;
ret = G__38445;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__37853){
var vec__37854 = p__37853;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37854,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37854,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__37861 = arguments.length;
switch (G__37861) {
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
var G__37872_38451 = new_node;
var G__37873_38452 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__37872_38451,G__37873_38452);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__37875_38454 = new_node;
var G__37876_38455 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__37875_38454,G__37876_38455);

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
var G__38461 = ps;
var G__38462 = (i + (1));
el__$1 = G__38461;
i = G__38462;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__37885 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__37885);
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
var G__37892 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__37892);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__37896 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__37896);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__37903 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37903,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37903,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37903,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__37908_38473 = cljs.core.seq(props);
var chunk__37909_38474 = null;
var count__37910_38475 = (0);
var i__37911_38476 = (0);
while(true){
if((i__37911_38476 < count__37910_38475)){
var vec__37923_38477 = chunk__37909_38474.cljs$core$IIndexed$_nth$arity$2(null,i__37911_38476);
var k_38478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37923_38477,(0),null);
var v_38479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37923_38477,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_38478);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38478),v_38479);


var G__38480 = seq__37908_38473;
var G__38481 = chunk__37909_38474;
var G__38482 = count__37910_38475;
var G__38483 = (i__37911_38476 + (1));
seq__37908_38473 = G__38480;
chunk__37909_38474 = G__38481;
count__37910_38475 = G__38482;
i__37911_38476 = G__38483;
continue;
} else {
var temp__5735__auto___38485 = cljs.core.seq(seq__37908_38473);
if(temp__5735__auto___38485){
var seq__37908_38486__$1 = temp__5735__auto___38485;
if(cljs.core.chunked_seq_QMARK_(seq__37908_38486__$1)){
var c__4550__auto___38487 = cljs.core.chunk_first(seq__37908_38486__$1);
var G__38488 = cljs.core.chunk_rest(seq__37908_38486__$1);
var G__38489 = c__4550__auto___38487;
var G__38490 = cljs.core.count(c__4550__auto___38487);
var G__38491 = (0);
seq__37908_38473 = G__38488;
chunk__37909_38474 = G__38489;
count__37910_38475 = G__38490;
i__37911_38476 = G__38491;
continue;
} else {
var vec__37928_38492 = cljs.core.first(seq__37908_38486__$1);
var k_38493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37928_38492,(0),null);
var v_38494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37928_38492,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_38493);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_38493),v_38494);


var G__38495 = cljs.core.next(seq__37908_38486__$1);
var G__38496 = null;
var G__38497 = (0);
var G__38498 = (0);
seq__37908_38473 = G__38495;
chunk__37909_38474 = G__38496;
count__37910_38475 = G__38497;
i__37911_38476 = G__38498;
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
var vec__37939 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37939,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37939,(1),null);
var seq__37943_38502 = cljs.core.seq(node_children);
var chunk__37945_38503 = null;
var count__37946_38504 = (0);
var i__37947_38505 = (0);
while(true){
if((i__37947_38505 < count__37946_38504)){
var child_struct_38508 = chunk__37945_38503.cljs$core$IIndexed$_nth$arity$2(null,i__37947_38505);
if((!((child_struct_38508 == null)))){
if(typeof child_struct_38508 === 'string'){
var text_38509 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38509),child_struct_38508].join(''));
} else {
var children_38510 = shadow.dom.svg_node(child_struct_38508);
if(cljs.core.seq_QMARK_(children_38510)){
var seq__37983_38511 = cljs.core.seq(children_38510);
var chunk__37985_38512 = null;
var count__37986_38513 = (0);
var i__37987_38514 = (0);
while(true){
if((i__37987_38514 < count__37986_38513)){
var child_38515 = chunk__37985_38512.cljs$core$IIndexed$_nth$arity$2(null,i__37987_38514);
if(cljs.core.truth_(child_38515)){
node.appendChild(child_38515);


var G__38516 = seq__37983_38511;
var G__38517 = chunk__37985_38512;
var G__38518 = count__37986_38513;
var G__38519 = (i__37987_38514 + (1));
seq__37983_38511 = G__38516;
chunk__37985_38512 = G__38517;
count__37986_38513 = G__38518;
i__37987_38514 = G__38519;
continue;
} else {
var G__38520 = seq__37983_38511;
var G__38521 = chunk__37985_38512;
var G__38522 = count__37986_38513;
var G__38523 = (i__37987_38514 + (1));
seq__37983_38511 = G__38520;
chunk__37985_38512 = G__38521;
count__37986_38513 = G__38522;
i__37987_38514 = G__38523;
continue;
}
} else {
var temp__5735__auto___38524 = cljs.core.seq(seq__37983_38511);
if(temp__5735__auto___38524){
var seq__37983_38525__$1 = temp__5735__auto___38524;
if(cljs.core.chunked_seq_QMARK_(seq__37983_38525__$1)){
var c__4550__auto___38526 = cljs.core.chunk_first(seq__37983_38525__$1);
var G__38527 = cljs.core.chunk_rest(seq__37983_38525__$1);
var G__38528 = c__4550__auto___38526;
var G__38529 = cljs.core.count(c__4550__auto___38526);
var G__38530 = (0);
seq__37983_38511 = G__38527;
chunk__37985_38512 = G__38528;
count__37986_38513 = G__38529;
i__37987_38514 = G__38530;
continue;
} else {
var child_38534 = cljs.core.first(seq__37983_38525__$1);
if(cljs.core.truth_(child_38534)){
node.appendChild(child_38534);


var G__38537 = cljs.core.next(seq__37983_38525__$1);
var G__38538 = null;
var G__38539 = (0);
var G__38540 = (0);
seq__37983_38511 = G__38537;
chunk__37985_38512 = G__38538;
count__37986_38513 = G__38539;
i__37987_38514 = G__38540;
continue;
} else {
var G__38543 = cljs.core.next(seq__37983_38525__$1);
var G__38544 = null;
var G__38545 = (0);
var G__38546 = (0);
seq__37983_38511 = G__38543;
chunk__37985_38512 = G__38544;
count__37986_38513 = G__38545;
i__37987_38514 = G__38546;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38510);
}
}


var G__38547 = seq__37943_38502;
var G__38548 = chunk__37945_38503;
var G__38549 = count__37946_38504;
var G__38550 = (i__37947_38505 + (1));
seq__37943_38502 = G__38547;
chunk__37945_38503 = G__38548;
count__37946_38504 = G__38549;
i__37947_38505 = G__38550;
continue;
} else {
var G__38551 = seq__37943_38502;
var G__38552 = chunk__37945_38503;
var G__38553 = count__37946_38504;
var G__38554 = (i__37947_38505 + (1));
seq__37943_38502 = G__38551;
chunk__37945_38503 = G__38552;
count__37946_38504 = G__38553;
i__37947_38505 = G__38554;
continue;
}
} else {
var temp__5735__auto___38555 = cljs.core.seq(seq__37943_38502);
if(temp__5735__auto___38555){
var seq__37943_38556__$1 = temp__5735__auto___38555;
if(cljs.core.chunked_seq_QMARK_(seq__37943_38556__$1)){
var c__4550__auto___38557 = cljs.core.chunk_first(seq__37943_38556__$1);
var G__38558 = cljs.core.chunk_rest(seq__37943_38556__$1);
var G__38559 = c__4550__auto___38557;
var G__38560 = cljs.core.count(c__4550__auto___38557);
var G__38561 = (0);
seq__37943_38502 = G__38558;
chunk__37945_38503 = G__38559;
count__37946_38504 = G__38560;
i__37947_38505 = G__38561;
continue;
} else {
var child_struct_38562 = cljs.core.first(seq__37943_38556__$1);
if((!((child_struct_38562 == null)))){
if(typeof child_struct_38562 === 'string'){
var text_38563 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_38563),child_struct_38562].join(''));
} else {
var children_38564 = shadow.dom.svg_node(child_struct_38562);
if(cljs.core.seq_QMARK_(children_38564)){
var seq__38001_38565 = cljs.core.seq(children_38564);
var chunk__38004_38566 = null;
var count__38005_38567 = (0);
var i__38006_38568 = (0);
while(true){
if((i__38006_38568 < count__38005_38567)){
var child_38569 = chunk__38004_38566.cljs$core$IIndexed$_nth$arity$2(null,i__38006_38568);
if(cljs.core.truth_(child_38569)){
node.appendChild(child_38569);


var G__38570 = seq__38001_38565;
var G__38571 = chunk__38004_38566;
var G__38572 = count__38005_38567;
var G__38573 = (i__38006_38568 + (1));
seq__38001_38565 = G__38570;
chunk__38004_38566 = G__38571;
count__38005_38567 = G__38572;
i__38006_38568 = G__38573;
continue;
} else {
var G__38574 = seq__38001_38565;
var G__38575 = chunk__38004_38566;
var G__38576 = count__38005_38567;
var G__38577 = (i__38006_38568 + (1));
seq__38001_38565 = G__38574;
chunk__38004_38566 = G__38575;
count__38005_38567 = G__38576;
i__38006_38568 = G__38577;
continue;
}
} else {
var temp__5735__auto___38578__$1 = cljs.core.seq(seq__38001_38565);
if(temp__5735__auto___38578__$1){
var seq__38001_38579__$1 = temp__5735__auto___38578__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38001_38579__$1)){
var c__4550__auto___38580 = cljs.core.chunk_first(seq__38001_38579__$1);
var G__38581 = cljs.core.chunk_rest(seq__38001_38579__$1);
var G__38582 = c__4550__auto___38580;
var G__38583 = cljs.core.count(c__4550__auto___38580);
var G__38584 = (0);
seq__38001_38565 = G__38581;
chunk__38004_38566 = G__38582;
count__38005_38567 = G__38583;
i__38006_38568 = G__38584;
continue;
} else {
var child_38585 = cljs.core.first(seq__38001_38579__$1);
if(cljs.core.truth_(child_38585)){
node.appendChild(child_38585);


var G__38586 = cljs.core.next(seq__38001_38579__$1);
var G__38587 = null;
var G__38588 = (0);
var G__38589 = (0);
seq__38001_38565 = G__38586;
chunk__38004_38566 = G__38587;
count__38005_38567 = G__38588;
i__38006_38568 = G__38589;
continue;
} else {
var G__38590 = cljs.core.next(seq__38001_38579__$1);
var G__38591 = null;
var G__38592 = (0);
var G__38593 = (0);
seq__38001_38565 = G__38590;
chunk__38004_38566 = G__38591;
count__38005_38567 = G__38592;
i__38006_38568 = G__38593;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_38564);
}
}


var G__38595 = cljs.core.next(seq__37943_38556__$1);
var G__38596 = null;
var G__38597 = (0);
var G__38598 = (0);
seq__37943_38502 = G__38595;
chunk__37945_38503 = G__38596;
count__37946_38504 = G__38597;
i__37947_38505 = G__38598;
continue;
} else {
var G__38600 = cljs.core.next(seq__37943_38556__$1);
var G__38601 = null;
var G__38602 = (0);
var G__38603 = (0);
seq__37943_38502 = G__38600;
chunk__37945_38503 = G__38601;
count__37946_38504 = G__38602;
i__37947_38505 = G__38603;
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

var G__38015_38606 = shadow.dom._to_svg;
var G__38016_38607 = "string";
var G__38017_38608 = ((function (G__38015_38606,G__38016_38607){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__38015_38606,G__38016_38607))
;
goog.object.set(G__38015_38606,G__38016_38607,G__38017_38608);

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

var G__38022_38610 = shadow.dom._to_svg;
var G__38023_38611 = "null";
var G__38024_38612 = ((function (G__38022_38610,G__38023_38611){
return (function (_){
return null;
});})(G__38022_38610,G__38023_38611))
;
goog.object.set(G__38022_38610,G__38023_38611,G__38024_38612);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38617 = arguments.length;
var i__4731__auto___38618 = (0);
while(true){
if((i__4731__auto___38618 < len__4730__auto___38617)){
args__4736__auto__.push((arguments[i__4731__auto___38618]));

var G__38619 = (i__4731__auto___38618 + (1));
i__4731__auto___38618 = G__38619;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq38027){
var G__38029 = cljs.core.first(seq38027);
var seq38027__$1 = cljs.core.next(seq38027);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38029,seq38027__$1);
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
var G__38040 = arguments.length;
switch (G__38040) {
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
var G__38047_38621 = shadow.dom.dom_node(el);
var G__38048_38622 = cljs.core.name(event);
var G__38049_38623 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__38047_38621,G__38048_38622,G__38049_38623) : shadow.dom.dom_listen.call(null,G__38047_38621,G__38048_38622,G__38049_38623));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__33642__auto___38624 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto___38624,buf,chan,event_fn){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto___38624,buf,chan,event_fn){
return (function (state_38055){
var state_val_38056 = (state_38055[(1)]);
if((state_val_38056 === (1))){
var state_38055__$1 = state_38055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38055__$1,(2),once_or_cleanup);
} else {
if((state_val_38056 === (2))){
var inst_38051 = (state_38055[(2)]);
var inst_38053 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_38055__$1 = (function (){var statearr_38059 = state_38055;
(statearr_38059[(7)] = inst_38051);

return statearr_38059;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38055__$1,inst_38053);
} else {
return null;
}
}
});})(c__33642__auto___38624,buf,chan,event_fn))
;
return ((function (switch__33308__auto__,c__33642__auto___38624,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__33309__auto__ = null;
var shadow$dom$state_machine__33309__auto____0 = (function (){
var statearr_38063 = [null,null,null,null,null,null,null,null];
(statearr_38063[(0)] = shadow$dom$state_machine__33309__auto__);

(statearr_38063[(1)] = (1));

return statearr_38063;
});
var shadow$dom$state_machine__33309__auto____1 = (function (state_38055){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_38055);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e38064){if((e38064 instanceof Object)){
var ex__33312__auto__ = e38064;
var statearr_38067_38627 = state_38055;
(statearr_38067_38627[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38064;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38628 = state_38055;
state_38055 = G__38628;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
shadow$dom$state_machine__33309__auto__ = function(state_38055){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33309__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33309__auto____1.call(this,state_38055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33309__auto____0;
shadow$dom$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33309__auto____1;
return shadow$dom$state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto___38624,buf,chan,event_fn))
})();
var state__33644__auto__ = (function (){var statearr_38069 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_38069[(6)] = c__33642__auto___38624);

return statearr_38069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto___38624,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
