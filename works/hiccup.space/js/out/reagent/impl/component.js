// Compiled by ClojureScript 0.0-3291 {:static-fns true, :optimize-constants true}
goog.provide('reagent.impl.component');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
reagent.impl.component.state_atom = (function reagent$impl$component$state_atom(this$){
var sa = (this$["cljsState"]);
if(!((sa == null))){
return sa;
} else {
return (this$["cljsState"] = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(null));
}
});
reagent.impl.component.as_element = (function reagent$impl$component$as_element(x){
var G__10553 = x;
return reagent.impl.template.as_element(G__10553);
});
reagent.impl.component.do_render = (function reagent$impl$component$do_render(c){
var _STAR_current_component_STAR_10568 = reagent.impl.component._STAR_current_component_STAR_;
reagent.impl.component._STAR_current_component_STAR_ = c;

try{var f = (c["cljsRender"]);
var _ = ((cljs.core.ifn_QMARK_(f))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')))})());
var p = (c["props"]);
var res = ((((c["reagentRender"]) == null))?(function (){var G__10569 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10569) : f.call(null,G__10569));
})():(function (){var argv = (p["argv"]);
var n = cljs.core.count(argv);
var G__10570 = n;
switch (G__10570) {
case (1):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (2):
var G__10571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10571) : f.call(null,G__10571));

break;
case (3):
var G__10572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__10573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10572,G__10573) : f.call(null,G__10572,G__10573));

break;
case (4):
var G__10574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__10575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__10576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__10574,G__10575,G__10576) : f.call(null,G__10574,G__10575,G__10576));

break;
case (5):
var G__10577 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(1));
var G__10578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(2));
var G__10579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(3));
var G__10580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(argv,(4));
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__10577,G__10578,G__10579,G__10580) : f.call(null,G__10577,G__10578,G__10579,G__10580));

break;
default:
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(argv,(1)));

}
})());
if(cljs.core.vector_QMARK_(res)){
return reagent.impl.component.as_element(res);
} else {
if(cljs.core.ifn_QMARK_(res)){
(c["cljsRender"] = res);

return reagent$impl$component$do_render(c);
} else {
return res;
}
}
}finally {reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR_10568;
}});
reagent.impl.component.static_fns = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$render,(function (){
var c = this;
if(cljs.core.not(reagent.impl.component._STAR_non_reactive_STAR_)){
return reagent.impl.batching.run_reactively(c,((function (c){
return (function (){
return reagent.impl.component.do_render(c);
});})(c))
);
} else {
return reagent.impl.component.do_render(c);
}
})], null);
reagent.impl.component.custom_wrapper = (function reagent$impl$component$custom_wrapper(key,f){
var G__10597 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__10597) {
case "getDefaultProps":
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("getDefaultProps not supported yet"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));


break;
case "getInitialState":
return ((function (G__10597){
return (function (){
var c = this;
var G__10598 = reagent.impl.component.state_atom(c);
var G__10599 = (function (){var G__10600 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10600) : f.call(null,G__10600));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10598,G__10599) : cljs.core.reset_BANG_.call(null,G__10598,G__10599));
});
;})(G__10597))

break;
case "componentWillReceiveProps":
return ((function (G__10597){
return (function (props){
var c = this;
var G__10601 = c;
var G__10602 = (props["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10601,G__10602) : f.call(null,G__10601,G__10602));
});
;})(G__10597))

break;
case "shouldComponentUpdate":
return ((function (G__10597){
return (function (nextprops,nextstate){
var or__4309__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
var c = this;
var old_argv = (c["props"]["argv"]);
var new_argv = (nextprops["argv"]);
if((f == null)){
return ((old_argv == null)) || ((new_argv == null)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_argv,new_argv));
} else {
var G__10603 = c;
var G__10604 = old_argv;
var G__10605 = new_argv;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__10603,G__10604,G__10605) : f.call(null,G__10603,G__10604,G__10605));
}
}
});
;})(G__10597))

break;
case "componentWillUpdate":
return ((function (G__10597){
return (function (nextprops){
var c = this;
var G__10606 = c;
var G__10607 = (nextprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10606,G__10607) : f.call(null,G__10606,G__10607));
});
;})(G__10597))

break;
case "componentDidUpdate":
return ((function (G__10597){
return (function (oldprops){
var c = this;
var G__10608 = c;
var G__10609 = (oldprops["argv"]);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10608,G__10609) : f.call(null,G__10608,G__10609));
});
;})(G__10597))

break;
case "componentWillMount":
return ((function (G__10597){
return (function (){
var c = this;
(c["cljsMountOrder"] = reagent.impl.batching.next_mount_count());

if((f == null)){
return null;
} else {
var G__10610 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10610) : f.call(null,G__10610));
}
});
;})(G__10597))

break;
case "componentWillUnmount":
return ((function (G__10597){
return (function (){
var c = this;
reagent.impl.batching.dispose(c);

if((f == null)){
return null;
} else {
var G__10611 = c;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10611) : f.call(null,G__10611));
}
});
;})(G__10597))

break;
default:
return null;

}
});
reagent.impl.component.default_wrapper = (function reagent$impl$component$default_wrapper(f){
if(cljs.core.ifn_QMARK_(f)){
return (function() { 
var G__10613__delegate = function (args){
var c = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,c,args);
};
var G__10613 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10614__i = 0, G__10614__a = new Array(arguments.length -  0);
while (G__10614__i < G__10614__a.length) {G__10614__a[G__10614__i] = arguments[G__10614__i + 0]; ++G__10614__i;}
  args = new cljs.core.IndexedSeq(G__10614__a,0);
} 
return G__10613__delegate.call(this,args);};
G__10613.cljs$lang$maxFixedArity = 0;
G__10613.cljs$lang$applyTo = (function (arglist__10615){
var args = cljs.core.seq(arglist__10615);
return G__10613__delegate(args);
});
G__10613.cljs$core$IFn$_invoke$arity$variadic = G__10613__delegate;
return G__10613;
})()
;
} else {
return f;
}
});
reagent.impl.component.dont_wrap = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$cljsRender,null,cljs.core.constant$keyword$reagentRender,null,cljs.core.constant$keyword$render,null,cljs.core.constant$keyword$cljsName,null], null), null);
reagent.impl.component.dont_bind = (function reagent$impl$component$dont_bind(f){
if(cljs.core.fn_QMARK_(f)){
var G__10617 = f;
(G__10617["__reactDontBind"] = true);

return G__10617;
} else {
return f;
}
});
reagent.impl.component.get_wrapper = (function reagent$impl$component$get_wrapper(key,f,name){
if(cljs.core.truth_((function (){var G__10619 = key;
return (reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dont_wrap.cljs$core$IFn$_invoke$arity$1(G__10619) : reagent.impl.component.dont_wrap.call(null,G__10619));
})())){
return reagent.impl.component.dont_bind(f);
} else {
var wrap = reagent.impl.component.custom_wrapper(key,f);
if(cljs.core.truth_((function (){var and__4297__auto__ = wrap;
if(cljs.core.truth_(and__4297__auto__)){
return f;
} else {
return and__4297__auto__;
}
})())){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Expected function in "),cljs.core.str(name),cljs.core.str(key),cljs.core.str(" but got "),cljs.core.str(f)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"f","f",43394975,null))], 0)))].join('')));
}
} else {
}

var or__4309__auto__ = wrap;
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return reagent.impl.component.default_wrapper(f);
}
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$shouldComponentUpdate,null,cljs.core.constant$keyword$componentWillMount,null,cljs.core.constant$keyword$componentWillUnmount,null], null);
reagent.impl.component.dash_to_camel = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.component.camelify_map_keys = (function reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv((function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var G__10621 = k;
return (reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.component.dash_to_camel.cljs$core$IFn$_invoke$arity$1(G__10621) : reagent.impl.component.dash_to_camel.call(null,G__10621));
})()),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([reagent.impl.component.obligatory,fun_map], 0));
});
reagent.impl.component.add_render = (function reagent$impl$component$add_render(fun_map,render_f,name){
var fm = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(fun_map,cljs.core.constant$keyword$cljsRender,render_f,cljs.core.array_seq([cljs.core.constant$keyword$render,cljs.core.constant$keyword$render.cljs$core$IFn$_invoke$arity$1(reagent.impl.component.static_fns)], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fm,cljs.core.constant$keyword$cljsName,((function (fm){
return (function (){
return name;
});})(fm))
);

});
reagent.impl.component.fun_name = (function reagent$impl$component$fun_name(f){
var or__4309__auto__ = (function (){var and__4297__auto__ = cljs.core.fn_QMARK_(f);
if(and__4297__auto__){
var or__4309__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return (f["name"]);
}
} else {
return and__4297__auto__;
}
})();
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
var or__4309__auto____$1 = (function (){var and__4297__auto__ = (function (){var G__10629 = f;
if(G__10629){
var bit__4976__auto__ = (G__10629.cljs$lang$protocol_mask$partition1$ & (4096));
if((bit__4976__auto__) || (G__10629.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
})();
if(and__4297__auto__){
return cljs.core.name(f);
} else {
return and__4297__auto__;
}
})();
if(cljs.core.truth_(or__4309__auto____$1)){
return or__4309__auto____$1;
} else {
var m = cljs.core.meta(f);
if(cljs.core.map_QMARK_(m)){
return cljs.core.constant$keyword$name.cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
});
reagent.impl.component.wrap_funs = (function reagent$impl$component$wrap_funs(fmap){
var fun_map = (function (){var temp__4425__auto__ = cljs.core.constant$keyword$componentFunction.cljs$core$IFn$_invoke$arity$1(fmap);
if((temp__4425__auto__ == null)){
return fmap;
} else {
var cf = temp__4425__auto__;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fmap,cljs.core.constant$keyword$reagentRender,cf),cljs.core.constant$keyword$componentFunction);
}
})();
var render_fun = (function (){var or__4309__auto__ = cljs.core.constant$keyword$reagentRender.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return cljs.core.constant$keyword$render.cljs$core$IFn$_invoke$arity$1(fun_map);
}
})();
var _ = ((cljs.core.ifn_QMARK_(render_fun))?null:(function(){throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Render must be a function, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([render_fun], 0)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Symbol(null,"render-fun","render-fun",-1209513086,null))], 0)))].join('')))})());
var name = [cljs.core.str((function (){var or__4309__auto__ = cljs.core.constant$keyword$displayName.cljs$core$IFn$_invoke$arity$1(fun_map);
if(cljs.core.truth_(or__4309__auto__)){
return or__4309__auto__;
} else {
return reagent.impl.component.fun_name(render_fun);
}
})())].join('');
var name_SINGLEQUOTE_ = ((cljs.core.empty_QMARK_(name))?[cljs.core.str(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("reagent"))].join(''):name);
var fmap__$1 = reagent.impl.component.add_render(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fun_map,cljs.core.constant$keyword$displayName,name_SINGLEQUOTE_),render_fun,name_SINGLEQUOTE_);
return cljs.core.reduce_kv(((function (fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1){
return (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,reagent.impl.component.get_wrapper(k,v,name_SINGLEQUOTE_));
});})(fun_map,render_fun,_,name,name_SINGLEQUOTE_,fmap__$1))
,cljs.core.PersistentArrayMap.EMPTY,fmap__$1);
});
reagent.impl.component.map_to_js = (function reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv((function (o,k,v){
var G__10631 = o;
(G__10631[cljs.core.name(k)] = v);

return G__10631;
}),{},m);
});
reagent.impl.component.cljsify = (function reagent$impl$component$cljsify(body){
return reagent.impl.component.map_to_js(reagent.impl.component.wrap_funs(reagent.impl.component.add_obligatory(reagent.impl.component.camelify_map_keys(body))));
});
reagent.impl.component.create_class = (function reagent$impl$component$create_class(body){
if(cljs.core.map_QMARK_(body)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"body","body",-408674142,null))], 0)))].join('')));
}

var spec = reagent.impl.component.cljsify(body);
var res = (React["createClass"])(spec);
var f = ((function (spec,res){
return (function() { 
var G__10632__delegate = function (args){
return reagent.impl.component.as_element(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,res,args));
};
var G__10632 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10633__i = 0, G__10633__a = new Array(arguments.length -  0);
while (G__10633__i < G__10633__a.length) {G__10633__a[G__10633__i] = arguments[G__10633__i + 0]; ++G__10633__i;}
  args = new cljs.core.IndexedSeq(G__10633__a,0);
} 
return G__10632__delegate.call(this,args);};
G__10632.cljs$lang$maxFixedArity = 0;
G__10632.cljs$lang$applyTo = (function (arglist__10634){
var args = cljs.core.seq(arglist__10634);
return G__10632__delegate(args);
});
G__10632.cljs$core$IFn$_invoke$arity$variadic = G__10632__delegate;
return G__10632;
})()
;})(spec,res))
;
reagent.impl.util.cache_react_class(f,res);

reagent.impl.util.cache_react_class(res,res);

return f;
});
reagent.impl.component.comp_name = (function reagent$impl$component$comp_name(){
var n = (function (){var G__10636 = reagent.impl.component._STAR_current_component_STAR_;
var G__10636__$1 = (((G__10636 == null))?null:(G__10636["cljsName"])());
return G__10636__$1;
})();
if(!(cljs.core.empty_QMARK_(n))){
return [cljs.core.str(" (in "),cljs.core.str(n),cljs.core.str(")")].join('');
} else {
return "";
}

});
reagent.impl.component.shallow_obj_to_map = (function reagent$impl$component$shallow_obj_to_map(o){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5063__auto__ = (function reagent$impl$component$shallow_obj_to_map_$_iter__10643(s__10644){
return (new cljs.core.LazySeq(null,(function (){
var s__10644__$1 = s__10644;
while(true){
var temp__4423__auto__ = cljs.core.seq(s__10644__$1);
if(temp__4423__auto__){
var s__10644__$2 = temp__4423__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10644__$2)){
var c__5061__auto__ = cljs.core.chunk_first(s__10644__$2);
var size__5062__auto__ = cljs.core.count(c__5061__auto__);
var b__10646 = cljs.core.chunk_buffer(size__5062__auto__);
if((function (){var i__10645 = (0);
while(true){
if((i__10645 < size__5062__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5061__auto__,i__10645);
cljs.core.chunk_append(b__10646,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null));

var G__10649 = (i__10645 + (1));
i__10645 = G__10649;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10646),reagent$impl$component$shallow_obj_to_map_$_iter__10643(cljs.core.chunk_rest(s__10644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10646),null);
}
} else {
var k = cljs.core.first(s__10644__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),(o[k])], null),reagent$impl$component$shallow_obj_to_map_$_iter__10643(cljs.core.rest(s__10644__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5063__auto__(cljs.core.js_keys(o));
})());
});
reagent.impl.component.elem_counter = (0);
reagent.impl.component.reactify_component = (function reagent$impl$component$reactify_component(comp){
return (React["createClass"])({"displayName": "react-wrapper", "render": (function (){
var this$ = this;
return reagent.impl.component.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(reagent.impl.component.shallow_obj_to_map((this$["props"])),cljs.core.constant$keyword$_DASH_elem_DASH_count,reagent.impl.component.elem_counter = (reagent.impl.component.elem_counter + (1)))], null));
})});
});
