// Compiled by ClojureScript 0.0-3211 {}
goog.provide('reagent.impl.batching');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('reagent.impl.util');
goog.require('reagent.ratom');
goog.require('reagent.interop');
goog.require('reagent.debug');
if(typeof reagent.impl.batching.mount_count !== 'undefined'){
} else {
reagent.impl.batching.mount_count = (0);
}
reagent.impl.batching.next_mount_count = (function reagent$impl$batching$next_mount_count(){
return reagent.impl.batching.mount_count = (reagent.impl.batching.mount_count + (1));
});
reagent.impl.batching.fake_raf = (function reagent$impl$batching$fake_raf(f){
return setTimeout(f,(16));
});
reagent.impl.batching.next_tick = ((cljs.core.not.call(null,reagent.impl.util.is_client))?reagent.impl.batching.fake_raf:(function (){var w = window;
var or__22374__auto__ = (w["requestAnimationFrame"]);
if(cljs.core.truth_(or__22374__auto__)){
return or__22374__auto__;
} else {
var or__22374__auto____$1 = (w["webkitRequestAnimationFrame"]);
if(cljs.core.truth_(or__22374__auto____$1)){
return or__22374__auto____$1;
} else {
var or__22374__auto____$2 = (w["mozRequestAnimationFrame"]);
if(cljs.core.truth_(or__22374__auto____$2)){
return or__22374__auto____$2;
} else {
var or__22374__auto____$3 = (w["msRequestAnimationFrame"]);
if(cljs.core.truth_(or__22374__auto____$3)){
return or__22374__auto____$3;
} else {
return reagent.impl.batching.fake_raf;
}
}
}
}
})());
reagent.impl.batching.compare_mount_order = (function reagent$impl$batching$compare_mount_order(c1,c2){
return ((c1["cljsMountOrder"]) - (c2["cljsMountOrder"]));
});
reagent.impl.batching.run_queue = (function reagent$impl$batching$run_queue(a){
a.sort(reagent.impl.batching.compare_mount_order);

var n__23259__auto__ = a.length;
var i = (0);
while(true){
if((i < n__23259__auto__)){
var c_29451 = (a[i]);
if(cljs.core.truth_((c_29451["cljsIsDirty"]))){
(c_29451["forceUpdate"])();
} else {
}

var G__29452 = (i + (1));
i = G__29452;
continue;
} else {
return null;
}
break;
}
});
reagent.impl.batching.run_funs = (function reagent$impl$batching$run_funs(a){
var n__23259__auto__ = a.length;
var i = (0);
while(true){
if((i < n__23259__auto__)){
(a[i]).call(null);

var G__29453 = (i + (1));
i = G__29453;
continue;
} else {
return null;
}
break;
}
});

/**
* @constructor
*/
reagent.impl.batching.RenderQueue = (function (queue,scheduled_QMARK_,after_render){
this.queue = queue;
this.scheduled_QMARK_ = scheduled_QMARK_;
this.after_render = after_render;
})
reagent.impl.batching.RenderQueue.prototype.queue_render = (function (c){
var self__ = this;
var this$ = this;
self__.queue.push(c);

return this$.schedule();
});

reagent.impl.batching.RenderQueue.prototype.add_after_render = (function (f){
var self__ = this;
var _ = this;
return self__.after_render.push(f);
});

reagent.impl.batching.RenderQueue.prototype.schedule = (function (){
var self__ = this;
var this$ = this;
if(cljs.core.truth_(self__.scheduled_QMARK_)){
return null;
} else {
self__.scheduled_QMARK_ = true;

return reagent.impl.batching.next_tick.call(null,((function (this$){
return (function (){
return this$.run_queue();
});})(this$))
);
}
});

reagent.impl.batching.RenderQueue.prototype.run_queue = (function (){
var self__ = this;
var _ = this;
var q = self__.queue;
var aq = self__.after_render;
self__.queue = [];

self__.after_render = [];

self__.scheduled_QMARK_ = false;

reagent.impl.batching.run_queue.call(null,q);

return reagent.impl.batching.run_funs.call(null,aq);
});

reagent.impl.batching.RenderQueue.cljs$lang$type = true;

reagent.impl.batching.RenderQueue.cljs$lang$ctorStr = "reagent.impl.batching/RenderQueue";

reagent.impl.batching.RenderQueue.cljs$lang$ctorPrWriter = (function (this__22953__auto__,writer__22954__auto__,opt__22955__auto__){
return cljs.core._write.call(null,writer__22954__auto__,"reagent.impl.batching/RenderQueue");
});

reagent.impl.batching.__GT_RenderQueue = (function reagent$impl$batching$__GT_RenderQueue(queue,scheduled_QMARK_,after_render){
return (new reagent.impl.batching.RenderQueue(queue,scheduled_QMARK_,after_render));
});

reagent.impl.batching.render_queue = (new reagent.impl.batching.RenderQueue([],false,[]));
reagent.impl.batching.flush = (function reagent$impl$batching$flush(){
return reagent.impl.batching.render_queue.run_queue();
});
reagent.impl.batching.queue_render = (function reagent$impl$batching$queue_render(c){
(c["cljsIsDirty"] = true);

return reagent.impl.batching.render_queue.queue_render(c);
});
reagent.impl.batching.mark_rendered = (function reagent$impl$batching$mark_rendered(c){
return (c["cljsIsDirty"] = false);
});
reagent.impl.batching.do_after_flush = (function reagent$impl$batching$do_after_flush(f){
return reagent.impl.batching.render_queue.add_after_render(f);
});
reagent.impl.batching.do_later = (function reagent$impl$batching$do_later(f){
reagent.impl.batching.do_after_flush.call(null,f);

return reagent.impl.batching.render_queue.schedule();
});
reagent.impl.batching.is_reagent_component = (function reagent$impl$batching$is_reagent_component(c){
var G__29455 = c;
var G__29455__$1 = (((G__29455 == null))?null:(G__29455["props"]));
var G__29455__$2 = (((G__29455__$1 == null))?null:(G__29455__$1["argv"]));
return G__29455__$2;
});
reagent.impl.batching.run_reactively = (function reagent$impl$batching$run_reactively(c,run){
if(cljs.core.truth_(reagent.impl.batching.is_reagent_component.call(null,c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"is-reagent-component","is-reagent-component",-1856228005,null),new cljs.core.Symbol(null,"c","c",-122660552,null))))].join('')));
}

reagent.impl.batching.mark_rendered.call(null,c);

var rat = (c["cljsRatom"]);
if((rat == null)){
var res = reagent.ratom.capture_derefed.call(null,run,c);
var derefed = reagent.ratom.captured.call(null,c);
if(!((derefed == null))){
(c["cljsRatom"] = reagent.ratom.make_reaction.call(null,run,new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),((function (res,derefed,rat){
return (function (){
return reagent.impl.batching.queue_render.call(null,c);
});})(res,derefed,rat))
,new cljs.core.Keyword(null,"derefed","derefed",590684583),derefed));
} else {
}

return res;
} else {
return reagent.ratom.run.call(null,rat);
}
});
reagent.impl.batching.dispose = (function reagent$impl$batching$dispose(c){
var G__29457_29458 = (c["cljsRatom"]);
var G__29457_29459__$1 = (((G__29457_29458 == null))?null:reagent.ratom.dispose_BANG_.call(null,G__29457_29458));

return reagent.impl.batching.mark_rendered.call(null,c);
});

//# sourceMappingURL=batching.js.map?rel=1436273474078