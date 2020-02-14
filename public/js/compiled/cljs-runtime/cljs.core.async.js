goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37725 = arguments.length;
switch (G__37725) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37726 = (function (f,blockable,meta37727){
this.f = f;
this.blockable = blockable;
this.meta37727 = meta37727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37728,meta37727__$1){
var self__ = this;
var _37728__$1 = this;
return (new cljs.core.async.t_cljs$core$async37726(self__.f,self__.blockable,meta37727__$1));
}));

(cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37728){
var self__ = this;
var _37728__$1 = this;
return self__.meta37727;
}));

(cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37726.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37727","meta37727",-1063632507,null)], null);
}));

(cljs.core.async.t_cljs$core$async37726.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37726");

(cljs.core.async.t_cljs$core$async37726.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37726");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37726.
 */
cljs.core.async.__GT_t_cljs$core$async37726 = (function cljs$core$async$__GT_t_cljs$core$async37726(f__$1,blockable__$1,meta37727){
return (new cljs.core.async.t_cljs$core$async37726(f__$1,blockable__$1,meta37727));
});

}

return (new cljs.core.async.t_cljs$core$async37726(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__37731 = arguments.length;
switch (G__37731) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37733 = arguments.length;
switch (G__37733) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__37735 = arguments.length;
switch (G__37735) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_39165 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39165) : fn1.call(null,val_39165));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39165) : fn1.call(null,val_39165));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__37737 = arguments.length;
switch (G__37737) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___39173 = n;
var x_39174 = (0);
while(true){
if((x_39174 < n__4666__auto___39173)){
(a[x_39174] = x_39174);

var G__39175 = (x_39174 + (1));
x_39174 = G__39175;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37738 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37738 = (function (flag,meta37739){
this.flag = flag;
this.meta37739 = meta37739;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37740,meta37739__$1){
var self__ = this;
var _37740__$1 = this;
return (new cljs.core.async.t_cljs$core$async37738(self__.flag,meta37739__$1));
}));

(cljs.core.async.t_cljs$core$async37738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37740){
var self__ = this;
var _37740__$1 = this;
return self__.meta37739;
}));

(cljs.core.async.t_cljs$core$async37738.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37738.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37738.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37738.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37738.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37739","meta37739",-164172087,null)], null);
}));

(cljs.core.async.t_cljs$core$async37738.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37738.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37738");

(cljs.core.async.t_cljs$core$async37738.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37738");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37738.
 */
cljs.core.async.__GT_t_cljs$core$async37738 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37738(flag__$1,meta37739){
return (new cljs.core.async.t_cljs$core$async37738(flag__$1,meta37739));
});

}

return (new cljs.core.async.t_cljs$core$async37738(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37741 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37741 = (function (flag,cb,meta37742){
this.flag = flag;
this.cb = cb;
this.meta37742 = meta37742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37743,meta37742__$1){
var self__ = this;
var _37743__$1 = this;
return (new cljs.core.async.t_cljs$core$async37741(self__.flag,self__.cb,meta37742__$1));
}));

(cljs.core.async.t_cljs$core$async37741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37743){
var self__ = this;
var _37743__$1 = this;
return self__.meta37742;
}));

(cljs.core.async.t_cljs$core$async37741.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37741.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37742","meta37742",-478368234,null)], null);
}));

(cljs.core.async.t_cljs$core$async37741.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37741");

(cljs.core.async.t_cljs$core$async37741.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37741");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37741.
 */
cljs.core.async.__GT_t_cljs$core$async37741 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37741(flag__$1,cb__$1,meta37742){
return (new cljs.core.async.t_cljs$core$async37741(flag__$1,cb__$1,meta37742));
});

}

return (new cljs.core.async.t_cljs$core$async37741(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37744_SHARP_){
var G__37746 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37744_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37746) : fret.call(null,G__37746));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37745_SHARP_){
var G__37747 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37745_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37747) : fret.call(null,G__37747));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39202 = (i + (1));
i = G__39202;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___39204 = arguments.length;
var i__4790__auto___39205 = (0);
while(true){
if((i__4790__auto___39205 < len__4789__auto___39204)){
args__4795__auto__.push((arguments[i__4790__auto___39205]));

var G__39207 = (i__4790__auto___39205 + (1));
i__4790__auto___39205 = G__39207;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37750){
var map__37751 = p__37750;
var map__37751__$1 = (((((!((map__37751 == null))))?(((((map__37751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37751):map__37751);
var opts = map__37751__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37748){
var G__37749 = cljs.core.first(seq37748);
var seq37748__$1 = cljs.core.next(seq37748);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37749,seq37748__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__37754 = arguments.length;
switch (G__37754) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37665__auto___39222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_37778){
var state_val_37779 = (state_37778[(1)]);
if((state_val_37779 === (7))){
var inst_37774 = (state_37778[(2)]);
var state_37778__$1 = state_37778;
var statearr_37780_39226 = state_37778__$1;
(statearr_37780_39226[(2)] = inst_37774);

(statearr_37780_39226[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (1))){
var state_37778__$1 = state_37778;
var statearr_37781_39228 = state_37778__$1;
(statearr_37781_39228[(2)] = null);

(statearr_37781_39228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (4))){
var inst_37757 = (state_37778[(7)]);
var inst_37757__$1 = (state_37778[(2)]);
var inst_37758 = (inst_37757__$1 == null);
var state_37778__$1 = (function (){var statearr_37782 = state_37778;
(statearr_37782[(7)] = inst_37757__$1);

return statearr_37782;
})();
if(cljs.core.truth_(inst_37758)){
var statearr_37783_39229 = state_37778__$1;
(statearr_37783_39229[(1)] = (5));

} else {
var statearr_37784_39230 = state_37778__$1;
(statearr_37784_39230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (13))){
var state_37778__$1 = state_37778;
var statearr_37785_39233 = state_37778__$1;
(statearr_37785_39233[(2)] = null);

(statearr_37785_39233[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (6))){
var inst_37757 = (state_37778[(7)]);
var state_37778__$1 = state_37778;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37778__$1,(11),to,inst_37757);
} else {
if((state_val_37779 === (3))){
var inst_37776 = (state_37778[(2)]);
var state_37778__$1 = state_37778;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37778__$1,inst_37776);
} else {
if((state_val_37779 === (12))){
var state_37778__$1 = state_37778;
var statearr_37786_39236 = state_37778__$1;
(statearr_37786_39236[(2)] = null);

(statearr_37786_39236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (2))){
var state_37778__$1 = state_37778;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37778__$1,(4),from);
} else {
if((state_val_37779 === (11))){
var inst_37767 = (state_37778[(2)]);
var state_37778__$1 = state_37778;
if(cljs.core.truth_(inst_37767)){
var statearr_37787_39237 = state_37778__$1;
(statearr_37787_39237[(1)] = (12));

} else {
var statearr_37788_39238 = state_37778__$1;
(statearr_37788_39238[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (9))){
var state_37778__$1 = state_37778;
var statearr_37789_39239 = state_37778__$1;
(statearr_37789_39239[(2)] = null);

(statearr_37789_39239[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (5))){
var state_37778__$1 = state_37778;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37790_39242 = state_37778__$1;
(statearr_37790_39242[(1)] = (8));

} else {
var statearr_37791_39244 = state_37778__$1;
(statearr_37791_39244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (14))){
var inst_37772 = (state_37778[(2)]);
var state_37778__$1 = state_37778;
var statearr_37792_39245 = state_37778__$1;
(statearr_37792_39245[(2)] = inst_37772);

(statearr_37792_39245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (10))){
var inst_37764 = (state_37778[(2)]);
var state_37778__$1 = state_37778;
var statearr_37793_39248 = state_37778__$1;
(statearr_37793_39248[(2)] = inst_37764);

(statearr_37793_39248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37779 === (8))){
var inst_37761 = cljs.core.async.close_BANG_(to);
var state_37778__$1 = state_37778;
var statearr_37794_39250 = state_37778__$1;
(statearr_37794_39250[(2)] = inst_37761);

(statearr_37794_39250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37598__auto__ = null;
var cljs$core$async$state_machine__37598__auto____0 = (function (){
var statearr_37795 = [null,null,null,null,null,null,null,null];
(statearr_37795[(0)] = cljs$core$async$state_machine__37598__auto__);

(statearr_37795[(1)] = (1));

return statearr_37795;
});
var cljs$core$async$state_machine__37598__auto____1 = (function (state_37778){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_37778);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e37796){if((e37796 instanceof Object)){
var ex__37601__auto__ = e37796;
var statearr_37797_39253 = state_37778;
(statearr_37797_39253[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37796;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39254 = state_37778;
state_37778 = G__39254;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$state_machine__37598__auto__ = function(state_37778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37598__auto____1.call(this,state_37778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37598__auto____0;
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37598__auto____1;
return cljs$core$async$state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_37798 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_37798[(6)] = c__37665__auto___39222);

return statearr_37798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__37799){
var vec__37800 = p__37799;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37800,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37800,(1),null);
var job = vec__37800;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37665__auto___39259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_37807){
var state_val_37808 = (state_37807[(1)]);
if((state_val_37808 === (1))){
var state_37807__$1 = state_37807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37807__$1,(2),res,v);
} else {
if((state_val_37808 === (2))){
var inst_37804 = (state_37807[(2)]);
var inst_37805 = cljs.core.async.close_BANG_(res);
var state_37807__$1 = (function (){var statearr_37809 = state_37807;
(statearr_37809[(7)] = inst_37804);

return statearr_37809;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37807__$1,inst_37805);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____0 = (function (){
var statearr_37810 = [null,null,null,null,null,null,null,null];
(statearr_37810[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__);

(statearr_37810[(1)] = (1));

return statearr_37810;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____1 = (function (state_37807){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_37807);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e37811){if((e37811 instanceof Object)){
var ex__37601__auto__ = e37811;
var statearr_37812_39272 = state_37807;
(statearr_37812_39272[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37811;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39273 = state_37807;
state_37807 = G__39273;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__ = function(state_37807){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____1.call(this,state_37807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_37813 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_37813[(6)] = c__37665__auto___39259);

return statearr_37813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37814){
var vec__37815 = p__37814;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37815,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37815,(1),null);
var job = vec__37815;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___39278 = n;
var __39279 = (0);
while(true){
if((__39279 < n__4666__auto___39278)){
var G__37818_39280 = type;
var G__37818_39281__$1 = (((G__37818_39280 instanceof cljs.core.Keyword))?G__37818_39280.fqn:null);
switch (G__37818_39281__$1) {
case "compute":
var c__37665__auto___39285 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39279,c__37665__auto___39285,G__37818_39280,G__37818_39281__$1,n__4666__auto___39278,jobs,results,process,async){
return (function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = ((function (__39279,c__37665__auto___39285,G__37818_39280,G__37818_39281__$1,n__4666__auto___39278,jobs,results,process,async){
return (function (state_37831){
var state_val_37832 = (state_37831[(1)]);
if((state_val_37832 === (1))){
var state_37831__$1 = state_37831;
var statearr_37833_39286 = state_37831__$1;
(statearr_37833_39286[(2)] = null);

(statearr_37833_39286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37832 === (2))){
var state_37831__$1 = state_37831;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37831__$1,(4),jobs);
} else {
if((state_val_37832 === (3))){
var inst_37829 = (state_37831[(2)]);
var state_37831__$1 = state_37831;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37831__$1,inst_37829);
} else {
if((state_val_37832 === (4))){
var inst_37821 = (state_37831[(2)]);
var inst_37822 = process(inst_37821);
var state_37831__$1 = state_37831;
if(cljs.core.truth_(inst_37822)){
var statearr_37834_39287 = state_37831__$1;
(statearr_37834_39287[(1)] = (5));

} else {
var statearr_37835_39288 = state_37831__$1;
(statearr_37835_39288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37832 === (5))){
var state_37831__$1 = state_37831;
var statearr_37836_39289 = state_37831__$1;
(statearr_37836_39289[(2)] = null);

(statearr_37836_39289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37832 === (6))){
var state_37831__$1 = state_37831;
var statearr_37837_39290 = state_37831__$1;
(statearr_37837_39290[(2)] = null);

(statearr_37837_39290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37832 === (7))){
var inst_37827 = (state_37831[(2)]);
var state_37831__$1 = state_37831;
var statearr_37838_39291 = state_37831__$1;
(statearr_37838_39291[(2)] = inst_37827);

(statearr_37838_39291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__39279,c__37665__auto___39285,G__37818_39280,G__37818_39281__$1,n__4666__auto___39278,jobs,results,process,async))
;
return ((function (__39279,switch__37597__auto__,c__37665__auto___39285,G__37818_39280,G__37818_39281__$1,n__4666__auto___39278,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____0 = (function (){
var statearr_37839 = [null,null,null,null,null,null,null];
(statearr_37839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__);

(statearr_37839[(1)] = (1));

return statearr_37839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____1 = (function (state_37831){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_37831);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e37840){if((e37840 instanceof Object)){
var ex__37601__auto__ = e37840;
var statearr_37841_39292 = state_37831;
(statearr_37841_39292[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37831);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37840;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39293 = state_37831;
state_37831 = G__39293;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__ = function(state_37831){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____1.call(this,state_37831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__;
})()
;})(__39279,switch__37597__auto__,c__37665__auto___39285,G__37818_39280,G__37818_39281__$1,n__4666__auto___39278,jobs,results,process,async))
})();
var state__37667__auto__ = (function (){var statearr_37842 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_37842[(6)] = c__37665__auto___39285);

return statearr_37842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
});})(__39279,c__37665__auto___39285,G__37818_39280,G__37818_39281__$1,n__4666__auto___39278,jobs,results,process,async))
);


break;
case "async":
var c__37665__auto___39294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39279,c__37665__auto___39294,G__37818_39280,G__37818_39281__$1,n__4666__auto___39278,jobs,results,process,async){
return (function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = ((function (__39279,c__37665__auto___39294,G__37818_39280,G__37818_39281__$1,n__4666__auto___39278,jobs,results,process,async){
return (function (state_37855){
var state_val_37856 = (state_37855[(1)]);
if((state_val_37856 === (1))){
var state_37855__$1 = state_37855;
var statearr_37857_39295 = state_37855__$1;
(statearr_37857_39295[(2)] = null);

(statearr_37857_39295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (2))){
var state_37855__$1 = state_37855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37855__$1,(4),jobs);
} else {
if((state_val_37856 === (3))){
var inst_37853 = (state_37855[(2)]);
var state_37855__$1 = state_37855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37855__$1,inst_37853);
} else {
if((state_val_37856 === (4))){
var inst_37845 = (state_37855[(2)]);
var inst_37846 = async(inst_37845);
var state_37855__$1 = state_37855;
if(cljs.core.truth_(inst_37846)){
var statearr_37858_39296 = state_37855__$1;
(statearr_37858_39296[(1)] = (5));

} else {
var statearr_37859_39300 = state_37855__$1;
(statearr_37859_39300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (5))){
var state_37855__$1 = state_37855;
var statearr_37860_39304 = state_37855__$1;
(statearr_37860_39304[(2)] = null);

(statearr_37860_39304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (6))){
var state_37855__$1 = state_37855;
var statearr_37861_39305 = state_37855__$1;
(statearr_37861_39305[(2)] = null);

(statearr_37861_39305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (7))){
var inst_37851 = (state_37855[(2)]);
var state_37855__$1 = state_37855;
var statearr_37862_39306 = state_37855__$1;
(statearr_37862_39306[(2)] = inst_37851);

(statearr_37862_39306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__39279,c__37665__auto___39294,G__37818_39280,G__37818_39281__$1,n__4666__auto___39278,jobs,results,process,async))
;
return ((function (__39279,switch__37597__auto__,c__37665__auto___39294,G__37818_39280,G__37818_39281__$1,n__4666__auto___39278,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____0 = (function (){
var statearr_37863 = [null,null,null,null,null,null,null];
(statearr_37863[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__);

(statearr_37863[(1)] = (1));

return statearr_37863;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____1 = (function (state_37855){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_37855);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e37864){if((e37864 instanceof Object)){
var ex__37601__auto__ = e37864;
var statearr_37865_39308 = state_37855;
(statearr_37865_39308[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37864;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39310 = state_37855;
state_37855 = G__39310;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__ = function(state_37855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____1.call(this,state_37855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__;
})()
;})(__39279,switch__37597__auto__,c__37665__auto___39294,G__37818_39280,G__37818_39281__$1,n__4666__auto___39278,jobs,results,process,async))
})();
var state__37667__auto__ = (function (){var statearr_37866 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_37866[(6)] = c__37665__auto___39294);

return statearr_37866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
});})(__39279,c__37665__auto___39294,G__37818_39280,G__37818_39281__$1,n__4666__auto___39278,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37818_39281__$1)].join('')));

}

var G__39312 = (__39279 + (1));
__39279 = G__39312;
continue;
} else {
}
break;
}

var c__37665__auto___39313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_37888){
var state_val_37889 = (state_37888[(1)]);
if((state_val_37889 === (7))){
var inst_37884 = (state_37888[(2)]);
var state_37888__$1 = state_37888;
var statearr_37890_39314 = state_37888__$1;
(statearr_37890_39314[(2)] = inst_37884);

(statearr_37890_39314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37889 === (1))){
var state_37888__$1 = state_37888;
var statearr_37891_39315 = state_37888__$1;
(statearr_37891_39315[(2)] = null);

(statearr_37891_39315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37889 === (4))){
var inst_37869 = (state_37888[(7)]);
var inst_37869__$1 = (state_37888[(2)]);
var inst_37870 = (inst_37869__$1 == null);
var state_37888__$1 = (function (){var statearr_37892 = state_37888;
(statearr_37892[(7)] = inst_37869__$1);

return statearr_37892;
})();
if(cljs.core.truth_(inst_37870)){
var statearr_37893_39316 = state_37888__$1;
(statearr_37893_39316[(1)] = (5));

} else {
var statearr_37894_39317 = state_37888__$1;
(statearr_37894_39317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37889 === (6))){
var inst_37869 = (state_37888[(7)]);
var inst_37874 = (state_37888[(8)]);
var inst_37874__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37875 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37876 = [inst_37869,inst_37874__$1];
var inst_37877 = (new cljs.core.PersistentVector(null,2,(5),inst_37875,inst_37876,null));
var state_37888__$1 = (function (){var statearr_37895 = state_37888;
(statearr_37895[(8)] = inst_37874__$1);

return statearr_37895;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37888__$1,(8),jobs,inst_37877);
} else {
if((state_val_37889 === (3))){
var inst_37886 = (state_37888[(2)]);
var state_37888__$1 = state_37888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37888__$1,inst_37886);
} else {
if((state_val_37889 === (2))){
var state_37888__$1 = state_37888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37888__$1,(4),from);
} else {
if((state_val_37889 === (9))){
var inst_37881 = (state_37888[(2)]);
var state_37888__$1 = (function (){var statearr_37896 = state_37888;
(statearr_37896[(9)] = inst_37881);

return statearr_37896;
})();
var statearr_37897_39322 = state_37888__$1;
(statearr_37897_39322[(2)] = null);

(statearr_37897_39322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37889 === (5))){
var inst_37872 = cljs.core.async.close_BANG_(jobs);
var state_37888__$1 = state_37888;
var statearr_37898_39324 = state_37888__$1;
(statearr_37898_39324[(2)] = inst_37872);

(statearr_37898_39324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37889 === (8))){
var inst_37874 = (state_37888[(8)]);
var inst_37879 = (state_37888[(2)]);
var state_37888__$1 = (function (){var statearr_37899 = state_37888;
(statearr_37899[(10)] = inst_37879);

return statearr_37899;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37888__$1,(9),results,inst_37874);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____0 = (function (){
var statearr_37900 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37900[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__);

(statearr_37900[(1)] = (1));

return statearr_37900;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____1 = (function (state_37888){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_37888);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e37901){if((e37901 instanceof Object)){
var ex__37601__auto__ = e37901;
var statearr_37902_39330 = state_37888;
(statearr_37902_39330[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37901;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39331 = state_37888;
state_37888 = G__39331;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__ = function(state_37888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____1.call(this,state_37888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_37903 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_37903[(6)] = c__37665__auto___39313);

return statearr_37903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));


var c__37665__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_37941){
var state_val_37942 = (state_37941[(1)]);
if((state_val_37942 === (7))){
var inst_37937 = (state_37941[(2)]);
var state_37941__$1 = state_37941;
var statearr_37943_39334 = state_37941__$1;
(statearr_37943_39334[(2)] = inst_37937);

(statearr_37943_39334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37942 === (20))){
var state_37941__$1 = state_37941;
var statearr_37944_39335 = state_37941__$1;
(statearr_37944_39335[(2)] = null);

(statearr_37944_39335[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37942 === (1))){
var state_37941__$1 = state_37941;
var statearr_37945_39336 = state_37941__$1;
(statearr_37945_39336[(2)] = null);

(statearr_37945_39336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37942 === (4))){
var inst_37906 = (state_37941[(7)]);
var inst_37906__$1 = (state_37941[(2)]);
var inst_37907 = (inst_37906__$1 == null);
var state_37941__$1 = (function (){var statearr_37946 = state_37941;
(statearr_37946[(7)] = inst_37906__$1);

return statearr_37946;
})();
if(cljs.core.truth_(inst_37907)){
var statearr_37947_39337 = state_37941__$1;
(statearr_37947_39337[(1)] = (5));

} else {
var statearr_37948_39338 = state_37941__$1;
(statearr_37948_39338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37942 === (15))){
var inst_37919 = (state_37941[(8)]);
var state_37941__$1 = state_37941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37941__$1,(18),to,inst_37919);
} else {
if((state_val_37942 === (21))){
var inst_37932 = (state_37941[(2)]);
var state_37941__$1 = state_37941;
var statearr_37949_39340 = state_37941__$1;
(statearr_37949_39340[(2)] = inst_37932);

(statearr_37949_39340[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37942 === (13))){
var inst_37934 = (state_37941[(2)]);
var state_37941__$1 = (function (){var statearr_37950 = state_37941;
(statearr_37950[(9)] = inst_37934);

return statearr_37950;
})();
var statearr_37951_39342 = state_37941__$1;
(statearr_37951_39342[(2)] = null);

(statearr_37951_39342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37942 === (6))){
var inst_37906 = (state_37941[(7)]);
var state_37941__$1 = state_37941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37941__$1,(11),inst_37906);
} else {
if((state_val_37942 === (17))){
var inst_37927 = (state_37941[(2)]);
var state_37941__$1 = state_37941;
if(cljs.core.truth_(inst_37927)){
var statearr_37952_39343 = state_37941__$1;
(statearr_37952_39343[(1)] = (19));

} else {
var statearr_37953_39344 = state_37941__$1;
(statearr_37953_39344[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37942 === (3))){
var inst_37939 = (state_37941[(2)]);
var state_37941__$1 = state_37941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37941__$1,inst_37939);
} else {
if((state_val_37942 === (12))){
var inst_37916 = (state_37941[(10)]);
var state_37941__$1 = state_37941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37941__$1,(14),inst_37916);
} else {
if((state_val_37942 === (2))){
var state_37941__$1 = state_37941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37941__$1,(4),results);
} else {
if((state_val_37942 === (19))){
var state_37941__$1 = state_37941;
var statearr_37954_39345 = state_37941__$1;
(statearr_37954_39345[(2)] = null);

(statearr_37954_39345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37942 === (11))){
var inst_37916 = (state_37941[(2)]);
var state_37941__$1 = (function (){var statearr_37955 = state_37941;
(statearr_37955[(10)] = inst_37916);

return statearr_37955;
})();
var statearr_37956_39347 = state_37941__$1;
(statearr_37956_39347[(2)] = null);

(statearr_37956_39347[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37942 === (9))){
var state_37941__$1 = state_37941;
var statearr_37957_39349 = state_37941__$1;
(statearr_37957_39349[(2)] = null);

(statearr_37957_39349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37942 === (5))){
var state_37941__$1 = state_37941;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37958_39350 = state_37941__$1;
(statearr_37958_39350[(1)] = (8));

} else {
var statearr_37959_39351 = state_37941__$1;
(statearr_37959_39351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37942 === (14))){
var inst_37919 = (state_37941[(8)]);
var inst_37919__$1 = (state_37941[(2)]);
var inst_37920 = (inst_37919__$1 == null);
var inst_37921 = cljs.core.not(inst_37920);
var state_37941__$1 = (function (){var statearr_37960 = state_37941;
(statearr_37960[(8)] = inst_37919__$1);

return statearr_37960;
})();
if(inst_37921){
var statearr_37961_39352 = state_37941__$1;
(statearr_37961_39352[(1)] = (15));

} else {
var statearr_37962_39353 = state_37941__$1;
(statearr_37962_39353[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37942 === (16))){
var state_37941__$1 = state_37941;
var statearr_37963_39354 = state_37941__$1;
(statearr_37963_39354[(2)] = false);

(statearr_37963_39354[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37942 === (10))){
var inst_37913 = (state_37941[(2)]);
var state_37941__$1 = state_37941;
var statearr_37964_39355 = state_37941__$1;
(statearr_37964_39355[(2)] = inst_37913);

(statearr_37964_39355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37942 === (18))){
var inst_37924 = (state_37941[(2)]);
var state_37941__$1 = state_37941;
var statearr_37965_39356 = state_37941__$1;
(statearr_37965_39356[(2)] = inst_37924);

(statearr_37965_39356[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37942 === (8))){
var inst_37910 = cljs.core.async.close_BANG_(to);
var state_37941__$1 = state_37941;
var statearr_37966_39357 = state_37941__$1;
(statearr_37966_39357[(2)] = inst_37910);

(statearr_37966_39357[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____0 = (function (){
var statearr_37967 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37967[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__);

(statearr_37967[(1)] = (1));

return statearr_37967;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____1 = (function (state_37941){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_37941);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e37968){if((e37968 instanceof Object)){
var ex__37601__auto__ = e37968;
var statearr_37969_39360 = state_37941;
(statearr_37969_39360[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37968;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39361 = state_37941;
state_37941 = G__39361;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__ = function(state_37941){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____1.call(this,state_37941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37598__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_37970 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_37970[(6)] = c__37665__auto__);

return statearr_37970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));

return c__37665__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__37972 = arguments.length;
switch (G__37972) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__37974 = arguments.length;
switch (G__37974) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__37976 = arguments.length;
switch (G__37976) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__37665__auto___39377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_38002){
var state_val_38003 = (state_38002[(1)]);
if((state_val_38003 === (7))){
var inst_37998 = (state_38002[(2)]);
var state_38002__$1 = state_38002;
var statearr_38004_39378 = state_38002__$1;
(statearr_38004_39378[(2)] = inst_37998);

(statearr_38004_39378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (1))){
var state_38002__$1 = state_38002;
var statearr_38005_39379 = state_38002__$1;
(statearr_38005_39379[(2)] = null);

(statearr_38005_39379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (4))){
var inst_37979 = (state_38002[(7)]);
var inst_37979__$1 = (state_38002[(2)]);
var inst_37980 = (inst_37979__$1 == null);
var state_38002__$1 = (function (){var statearr_38006 = state_38002;
(statearr_38006[(7)] = inst_37979__$1);

return statearr_38006;
})();
if(cljs.core.truth_(inst_37980)){
var statearr_38007_39380 = state_38002__$1;
(statearr_38007_39380[(1)] = (5));

} else {
var statearr_38008_39381 = state_38002__$1;
(statearr_38008_39381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (13))){
var state_38002__$1 = state_38002;
var statearr_38009_39383 = state_38002__$1;
(statearr_38009_39383[(2)] = null);

(statearr_38009_39383[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (6))){
var inst_37979 = (state_38002[(7)]);
var inst_37985 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37979) : p.call(null,inst_37979));
var state_38002__$1 = state_38002;
if(cljs.core.truth_(inst_37985)){
var statearr_38010_39384 = state_38002__$1;
(statearr_38010_39384[(1)] = (9));

} else {
var statearr_38011_39385 = state_38002__$1;
(statearr_38011_39385[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (3))){
var inst_38000 = (state_38002[(2)]);
var state_38002__$1 = state_38002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38002__$1,inst_38000);
} else {
if((state_val_38003 === (12))){
var state_38002__$1 = state_38002;
var statearr_38012_39386 = state_38002__$1;
(statearr_38012_39386[(2)] = null);

(statearr_38012_39386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (2))){
var state_38002__$1 = state_38002;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38002__$1,(4),ch);
} else {
if((state_val_38003 === (11))){
var inst_37979 = (state_38002[(7)]);
var inst_37989 = (state_38002[(2)]);
var state_38002__$1 = state_38002;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38002__$1,(8),inst_37989,inst_37979);
} else {
if((state_val_38003 === (9))){
var state_38002__$1 = state_38002;
var statearr_38013_39387 = state_38002__$1;
(statearr_38013_39387[(2)] = tc);

(statearr_38013_39387[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (5))){
var inst_37982 = cljs.core.async.close_BANG_(tc);
var inst_37983 = cljs.core.async.close_BANG_(fc);
var state_38002__$1 = (function (){var statearr_38014 = state_38002;
(statearr_38014[(8)] = inst_37982);

return statearr_38014;
})();
var statearr_38015_39388 = state_38002__$1;
(statearr_38015_39388[(2)] = inst_37983);

(statearr_38015_39388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (14))){
var inst_37996 = (state_38002[(2)]);
var state_38002__$1 = state_38002;
var statearr_38016_39389 = state_38002__$1;
(statearr_38016_39389[(2)] = inst_37996);

(statearr_38016_39389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (10))){
var state_38002__$1 = state_38002;
var statearr_38017_39394 = state_38002__$1;
(statearr_38017_39394[(2)] = fc);

(statearr_38017_39394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38003 === (8))){
var inst_37991 = (state_38002[(2)]);
var state_38002__$1 = state_38002;
if(cljs.core.truth_(inst_37991)){
var statearr_38018_39395 = state_38002__$1;
(statearr_38018_39395[(1)] = (12));

} else {
var statearr_38019_39396 = state_38002__$1;
(statearr_38019_39396[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37598__auto__ = null;
var cljs$core$async$state_machine__37598__auto____0 = (function (){
var statearr_38020 = [null,null,null,null,null,null,null,null,null];
(statearr_38020[(0)] = cljs$core$async$state_machine__37598__auto__);

(statearr_38020[(1)] = (1));

return statearr_38020;
});
var cljs$core$async$state_machine__37598__auto____1 = (function (state_38002){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_38002);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e38021){if((e38021 instanceof Object)){
var ex__37601__auto__ = e38021;
var statearr_38022_39400 = state_38002;
(statearr_38022_39400[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38021;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39401 = state_38002;
state_38002 = G__39401;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$state_machine__37598__auto__ = function(state_38002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37598__auto____1.call(this,state_38002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37598__auto____0;
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37598__auto____1;
return cljs$core$async$state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_38023 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_38023[(6)] = c__37665__auto___39377);

return statearr_38023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37665__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_38044){
var state_val_38045 = (state_38044[(1)]);
if((state_val_38045 === (7))){
var inst_38040 = (state_38044[(2)]);
var state_38044__$1 = state_38044;
var statearr_38046_39405 = state_38044__$1;
(statearr_38046_39405[(2)] = inst_38040);

(statearr_38046_39405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (1))){
var inst_38024 = init;
var state_38044__$1 = (function (){var statearr_38047 = state_38044;
(statearr_38047[(7)] = inst_38024);

return statearr_38047;
})();
var statearr_38048_39406 = state_38044__$1;
(statearr_38048_39406[(2)] = null);

(statearr_38048_39406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (4))){
var inst_38027 = (state_38044[(8)]);
var inst_38027__$1 = (state_38044[(2)]);
var inst_38028 = (inst_38027__$1 == null);
var state_38044__$1 = (function (){var statearr_38049 = state_38044;
(statearr_38049[(8)] = inst_38027__$1);

return statearr_38049;
})();
if(cljs.core.truth_(inst_38028)){
var statearr_38050_39410 = state_38044__$1;
(statearr_38050_39410[(1)] = (5));

} else {
var statearr_38051_39411 = state_38044__$1;
(statearr_38051_39411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (6))){
var inst_38027 = (state_38044[(8)]);
var inst_38031 = (state_38044[(9)]);
var inst_38024 = (state_38044[(7)]);
var inst_38031__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_38024,inst_38027) : f.call(null,inst_38024,inst_38027));
var inst_38032 = cljs.core.reduced_QMARK_(inst_38031__$1);
var state_38044__$1 = (function (){var statearr_38052 = state_38044;
(statearr_38052[(9)] = inst_38031__$1);

return statearr_38052;
})();
if(inst_38032){
var statearr_38053_39415 = state_38044__$1;
(statearr_38053_39415[(1)] = (8));

} else {
var statearr_38054_39416 = state_38044__$1;
(statearr_38054_39416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (3))){
var inst_38042 = (state_38044[(2)]);
var state_38044__$1 = state_38044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38044__$1,inst_38042);
} else {
if((state_val_38045 === (2))){
var state_38044__$1 = state_38044;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38044__$1,(4),ch);
} else {
if((state_val_38045 === (9))){
var inst_38031 = (state_38044[(9)]);
var inst_38024 = inst_38031;
var state_38044__$1 = (function (){var statearr_38055 = state_38044;
(statearr_38055[(7)] = inst_38024);

return statearr_38055;
})();
var statearr_38056_39417 = state_38044__$1;
(statearr_38056_39417[(2)] = null);

(statearr_38056_39417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (5))){
var inst_38024 = (state_38044[(7)]);
var state_38044__$1 = state_38044;
var statearr_38057_39419 = state_38044__$1;
(statearr_38057_39419[(2)] = inst_38024);

(statearr_38057_39419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (10))){
var inst_38038 = (state_38044[(2)]);
var state_38044__$1 = state_38044;
var statearr_38058_39421 = state_38044__$1;
(statearr_38058_39421[(2)] = inst_38038);

(statearr_38058_39421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38045 === (8))){
var inst_38031 = (state_38044[(9)]);
var inst_38034 = cljs.core.deref(inst_38031);
var state_38044__$1 = state_38044;
var statearr_38059_39422 = state_38044__$1;
(statearr_38059_39422[(2)] = inst_38034);

(statearr_38059_39422[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__37598__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37598__auto____0 = (function (){
var statearr_38060 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38060[(0)] = cljs$core$async$reduce_$_state_machine__37598__auto__);

(statearr_38060[(1)] = (1));

return statearr_38060;
});
var cljs$core$async$reduce_$_state_machine__37598__auto____1 = (function (state_38044){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_38044);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e38061){if((e38061 instanceof Object)){
var ex__37601__auto__ = e38061;
var statearr_38062_39423 = state_38044;
(statearr_38062_39423[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38061;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39424 = state_38044;
state_38044 = G__39424;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37598__auto__ = function(state_38044){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37598__auto____1.call(this,state_38044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37598__auto____0;
cljs$core$async$reduce_$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37598__auto____1;
return cljs$core$async$reduce_$_state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_38063 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_38063[(6)] = c__37665__auto__);

return statearr_38063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));

return c__37665__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__37665__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_38069){
var state_val_38070 = (state_38069[(1)]);
if((state_val_38070 === (1))){
var inst_38064 = cljs.core.async.reduce(f__$1,init,ch);
var state_38069__$1 = state_38069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38069__$1,(2),inst_38064);
} else {
if((state_val_38070 === (2))){
var inst_38066 = (state_38069[(2)]);
var inst_38067 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_38066) : f__$1.call(null,inst_38066));
var state_38069__$1 = state_38069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38069__$1,inst_38067);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__37598__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37598__auto____0 = (function (){
var statearr_38071 = [null,null,null,null,null,null,null];
(statearr_38071[(0)] = cljs$core$async$transduce_$_state_machine__37598__auto__);

(statearr_38071[(1)] = (1));

return statearr_38071;
});
var cljs$core$async$transduce_$_state_machine__37598__auto____1 = (function (state_38069){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_38069);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e38072){if((e38072 instanceof Object)){
var ex__37601__auto__ = e38072;
var statearr_38073_39435 = state_38069;
(statearr_38073_39435[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38072;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39439 = state_38069;
state_38069 = G__39439;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37598__auto__ = function(state_38069){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37598__auto____1.call(this,state_38069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37598__auto____0;
cljs$core$async$transduce_$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37598__auto____1;
return cljs$core$async$transduce_$_state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_38074 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_38074[(6)] = c__37665__auto__);

return statearr_38074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));

return c__37665__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__38076 = arguments.length;
switch (G__38076) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37665__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_38101){
var state_val_38102 = (state_38101[(1)]);
if((state_val_38102 === (7))){
var inst_38083 = (state_38101[(2)]);
var state_38101__$1 = state_38101;
var statearr_38103_39447 = state_38101__$1;
(statearr_38103_39447[(2)] = inst_38083);

(statearr_38103_39447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (1))){
var inst_38077 = cljs.core.seq(coll);
var inst_38078 = inst_38077;
var state_38101__$1 = (function (){var statearr_38104 = state_38101;
(statearr_38104[(7)] = inst_38078);

return statearr_38104;
})();
var statearr_38105_39451 = state_38101__$1;
(statearr_38105_39451[(2)] = null);

(statearr_38105_39451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (4))){
var inst_38078 = (state_38101[(7)]);
var inst_38081 = cljs.core.first(inst_38078);
var state_38101__$1 = state_38101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38101__$1,(7),ch,inst_38081);
} else {
if((state_val_38102 === (13))){
var inst_38095 = (state_38101[(2)]);
var state_38101__$1 = state_38101;
var statearr_38106_39452 = state_38101__$1;
(statearr_38106_39452[(2)] = inst_38095);

(statearr_38106_39452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (6))){
var inst_38086 = (state_38101[(2)]);
var state_38101__$1 = state_38101;
if(cljs.core.truth_(inst_38086)){
var statearr_38107_39457 = state_38101__$1;
(statearr_38107_39457[(1)] = (8));

} else {
var statearr_38108_39458 = state_38101__$1;
(statearr_38108_39458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (3))){
var inst_38099 = (state_38101[(2)]);
var state_38101__$1 = state_38101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38101__$1,inst_38099);
} else {
if((state_val_38102 === (12))){
var state_38101__$1 = state_38101;
var statearr_38109_39462 = state_38101__$1;
(statearr_38109_39462[(2)] = null);

(statearr_38109_39462[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (2))){
var inst_38078 = (state_38101[(7)]);
var state_38101__$1 = state_38101;
if(cljs.core.truth_(inst_38078)){
var statearr_38110_39466 = state_38101__$1;
(statearr_38110_39466[(1)] = (4));

} else {
var statearr_38111_39467 = state_38101__$1;
(statearr_38111_39467[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (11))){
var inst_38092 = cljs.core.async.close_BANG_(ch);
var state_38101__$1 = state_38101;
var statearr_38112_39468 = state_38101__$1;
(statearr_38112_39468[(2)] = inst_38092);

(statearr_38112_39468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (9))){
var state_38101__$1 = state_38101;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38113_39469 = state_38101__$1;
(statearr_38113_39469[(1)] = (11));

} else {
var statearr_38114_39470 = state_38101__$1;
(statearr_38114_39470[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (5))){
var inst_38078 = (state_38101[(7)]);
var state_38101__$1 = state_38101;
var statearr_38115_39474 = state_38101__$1;
(statearr_38115_39474[(2)] = inst_38078);

(statearr_38115_39474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (10))){
var inst_38097 = (state_38101[(2)]);
var state_38101__$1 = state_38101;
var statearr_38116_39478 = state_38101__$1;
(statearr_38116_39478[(2)] = inst_38097);

(statearr_38116_39478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38102 === (8))){
var inst_38078 = (state_38101[(7)]);
var inst_38088 = cljs.core.next(inst_38078);
var inst_38078__$1 = inst_38088;
var state_38101__$1 = (function (){var statearr_38117 = state_38101;
(statearr_38117[(7)] = inst_38078__$1);

return statearr_38117;
})();
var statearr_38118_39482 = state_38101__$1;
(statearr_38118_39482[(2)] = null);

(statearr_38118_39482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37598__auto__ = null;
var cljs$core$async$state_machine__37598__auto____0 = (function (){
var statearr_38119 = [null,null,null,null,null,null,null,null];
(statearr_38119[(0)] = cljs$core$async$state_machine__37598__auto__);

(statearr_38119[(1)] = (1));

return statearr_38119;
});
var cljs$core$async$state_machine__37598__auto____1 = (function (state_38101){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_38101);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e38120){if((e38120 instanceof Object)){
var ex__37601__auto__ = e38120;
var statearr_38121_39486 = state_38101;
(statearr_38121_39486[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38120;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39487 = state_38101;
state_38101 = G__39487;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$state_machine__37598__auto__ = function(state_38101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37598__auto____1.call(this,state_38101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37598__auto____0;
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37598__auto____1;
return cljs$core$async$state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_38122 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_38122[(6)] = c__37665__auto__);

return statearr_38122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));

return c__37665__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38123 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38123 = (function (ch,cs,meta38124){
this.ch = ch;
this.cs = cs;
this.meta38124 = meta38124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38125,meta38124__$1){
var self__ = this;
var _38125__$1 = this;
return (new cljs.core.async.t_cljs$core$async38123(self__.ch,self__.cs,meta38124__$1));
}));

(cljs.core.async.t_cljs$core$async38123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38125){
var self__ = this;
var _38125__$1 = this;
return self__.meta38124;
}));

(cljs.core.async.t_cljs$core$async38123.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38123.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38123.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38123.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async38123.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async38123.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async38123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38124","meta38124",-1018346057,null)], null);
}));

(cljs.core.async.t_cljs$core$async38123.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38123");

(cljs.core.async.t_cljs$core$async38123.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38123");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38123.
 */
cljs.core.async.__GT_t_cljs$core$async38123 = (function cljs$core$async$mult_$___GT_t_cljs$core$async38123(ch__$1,cs__$1,meta38124){
return (new cljs.core.async.t_cljs$core$async38123(ch__$1,cs__$1,meta38124));
});

}

return (new cljs.core.async.t_cljs$core$async38123(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__37665__auto___39498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_38260){
var state_val_38261 = (state_38260[(1)]);
if((state_val_38261 === (7))){
var inst_38256 = (state_38260[(2)]);
var state_38260__$1 = state_38260;
var statearr_38262_39499 = state_38260__$1;
(statearr_38262_39499[(2)] = inst_38256);

(statearr_38262_39499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (20))){
var inst_38159 = (state_38260[(7)]);
var inst_38171 = cljs.core.first(inst_38159);
var inst_38172 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38171,(0),null);
var inst_38173 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38171,(1),null);
var state_38260__$1 = (function (){var statearr_38263 = state_38260;
(statearr_38263[(8)] = inst_38172);

return statearr_38263;
})();
if(cljs.core.truth_(inst_38173)){
var statearr_38264_39500 = state_38260__$1;
(statearr_38264_39500[(1)] = (22));

} else {
var statearr_38265_39501 = state_38260__$1;
(statearr_38265_39501[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (27))){
var inst_38128 = (state_38260[(9)]);
var inst_38203 = (state_38260[(10)]);
var inst_38201 = (state_38260[(11)]);
var inst_38208 = (state_38260[(12)]);
var inst_38208__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38201,inst_38203);
var inst_38209 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38208__$1,inst_38128,done);
var state_38260__$1 = (function (){var statearr_38266 = state_38260;
(statearr_38266[(12)] = inst_38208__$1);

return statearr_38266;
})();
if(cljs.core.truth_(inst_38209)){
var statearr_38267_39503 = state_38260__$1;
(statearr_38267_39503[(1)] = (30));

} else {
var statearr_38268_39504 = state_38260__$1;
(statearr_38268_39504[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (1))){
var state_38260__$1 = state_38260;
var statearr_38269_39505 = state_38260__$1;
(statearr_38269_39505[(2)] = null);

(statearr_38269_39505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (24))){
var inst_38159 = (state_38260[(7)]);
var inst_38178 = (state_38260[(2)]);
var inst_38179 = cljs.core.next(inst_38159);
var inst_38137 = inst_38179;
var inst_38138 = null;
var inst_38139 = (0);
var inst_38140 = (0);
var state_38260__$1 = (function (){var statearr_38270 = state_38260;
(statearr_38270[(13)] = inst_38178);

(statearr_38270[(14)] = inst_38139);

(statearr_38270[(15)] = inst_38137);

(statearr_38270[(16)] = inst_38140);

(statearr_38270[(17)] = inst_38138);

return statearr_38270;
})();
var statearr_38271_39509 = state_38260__$1;
(statearr_38271_39509[(2)] = null);

(statearr_38271_39509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (39))){
var state_38260__$1 = state_38260;
var statearr_38275_39513 = state_38260__$1;
(statearr_38275_39513[(2)] = null);

(statearr_38275_39513[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (4))){
var inst_38128 = (state_38260[(9)]);
var inst_38128__$1 = (state_38260[(2)]);
var inst_38129 = (inst_38128__$1 == null);
var state_38260__$1 = (function (){var statearr_38276 = state_38260;
(statearr_38276[(9)] = inst_38128__$1);

return statearr_38276;
})();
if(cljs.core.truth_(inst_38129)){
var statearr_38277_39515 = state_38260__$1;
(statearr_38277_39515[(1)] = (5));

} else {
var statearr_38278_39516 = state_38260__$1;
(statearr_38278_39516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (15))){
var inst_38139 = (state_38260[(14)]);
var inst_38137 = (state_38260[(15)]);
var inst_38140 = (state_38260[(16)]);
var inst_38138 = (state_38260[(17)]);
var inst_38155 = (state_38260[(2)]);
var inst_38156 = (inst_38140 + (1));
var tmp38272 = inst_38139;
var tmp38273 = inst_38137;
var tmp38274 = inst_38138;
var inst_38137__$1 = tmp38273;
var inst_38138__$1 = tmp38274;
var inst_38139__$1 = tmp38272;
var inst_38140__$1 = inst_38156;
var state_38260__$1 = (function (){var statearr_38279 = state_38260;
(statearr_38279[(14)] = inst_38139__$1);

(statearr_38279[(15)] = inst_38137__$1);

(statearr_38279[(16)] = inst_38140__$1);

(statearr_38279[(17)] = inst_38138__$1);

(statearr_38279[(18)] = inst_38155);

return statearr_38279;
})();
var statearr_38280_39519 = state_38260__$1;
(statearr_38280_39519[(2)] = null);

(statearr_38280_39519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (21))){
var inst_38182 = (state_38260[(2)]);
var state_38260__$1 = state_38260;
var statearr_38284_39521 = state_38260__$1;
(statearr_38284_39521[(2)] = inst_38182);

(statearr_38284_39521[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (31))){
var inst_38208 = (state_38260[(12)]);
var inst_38212 = done(null);
var inst_38213 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38208);
var state_38260__$1 = (function (){var statearr_38285 = state_38260;
(statearr_38285[(19)] = inst_38212);

return statearr_38285;
})();
var statearr_38286_39522 = state_38260__$1;
(statearr_38286_39522[(2)] = inst_38213);

(statearr_38286_39522[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (32))){
var inst_38203 = (state_38260[(10)]);
var inst_38200 = (state_38260[(20)]);
var inst_38201 = (state_38260[(11)]);
var inst_38202 = (state_38260[(21)]);
var inst_38215 = (state_38260[(2)]);
var inst_38216 = (inst_38203 + (1));
var tmp38281 = inst_38200;
var tmp38282 = inst_38201;
var tmp38283 = inst_38202;
var inst_38200__$1 = tmp38281;
var inst_38201__$1 = tmp38282;
var inst_38202__$1 = tmp38283;
var inst_38203__$1 = inst_38216;
var state_38260__$1 = (function (){var statearr_38287 = state_38260;
(statearr_38287[(10)] = inst_38203__$1);

(statearr_38287[(20)] = inst_38200__$1);

(statearr_38287[(22)] = inst_38215);

(statearr_38287[(11)] = inst_38201__$1);

(statearr_38287[(21)] = inst_38202__$1);

return statearr_38287;
})();
var statearr_38288_39525 = state_38260__$1;
(statearr_38288_39525[(2)] = null);

(statearr_38288_39525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (40))){
var inst_38228 = (state_38260[(23)]);
var inst_38232 = done(null);
var inst_38233 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38228);
var state_38260__$1 = (function (){var statearr_38289 = state_38260;
(statearr_38289[(24)] = inst_38232);

return statearr_38289;
})();
var statearr_38290_39528 = state_38260__$1;
(statearr_38290_39528[(2)] = inst_38233);

(statearr_38290_39528[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (33))){
var inst_38219 = (state_38260[(25)]);
var inst_38221 = cljs.core.chunked_seq_QMARK_(inst_38219);
var state_38260__$1 = state_38260;
if(inst_38221){
var statearr_38291_39532 = state_38260__$1;
(statearr_38291_39532[(1)] = (36));

} else {
var statearr_38292_39533 = state_38260__$1;
(statearr_38292_39533[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (13))){
var inst_38149 = (state_38260[(26)]);
var inst_38152 = cljs.core.async.close_BANG_(inst_38149);
var state_38260__$1 = state_38260;
var statearr_38293_39534 = state_38260__$1;
(statearr_38293_39534[(2)] = inst_38152);

(statearr_38293_39534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (22))){
var inst_38172 = (state_38260[(8)]);
var inst_38175 = cljs.core.async.close_BANG_(inst_38172);
var state_38260__$1 = state_38260;
var statearr_38294_39537 = state_38260__$1;
(statearr_38294_39537[(2)] = inst_38175);

(statearr_38294_39537[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (36))){
var inst_38219 = (state_38260[(25)]);
var inst_38223 = cljs.core.chunk_first(inst_38219);
var inst_38224 = cljs.core.chunk_rest(inst_38219);
var inst_38225 = cljs.core.count(inst_38223);
var inst_38200 = inst_38224;
var inst_38201 = inst_38223;
var inst_38202 = inst_38225;
var inst_38203 = (0);
var state_38260__$1 = (function (){var statearr_38295 = state_38260;
(statearr_38295[(10)] = inst_38203);

(statearr_38295[(20)] = inst_38200);

(statearr_38295[(11)] = inst_38201);

(statearr_38295[(21)] = inst_38202);

return statearr_38295;
})();
var statearr_38296_39541 = state_38260__$1;
(statearr_38296_39541[(2)] = null);

(statearr_38296_39541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (41))){
var inst_38219 = (state_38260[(25)]);
var inst_38235 = (state_38260[(2)]);
var inst_38236 = cljs.core.next(inst_38219);
var inst_38200 = inst_38236;
var inst_38201 = null;
var inst_38202 = (0);
var inst_38203 = (0);
var state_38260__$1 = (function (){var statearr_38297 = state_38260;
(statearr_38297[(10)] = inst_38203);

(statearr_38297[(20)] = inst_38200);

(statearr_38297[(27)] = inst_38235);

(statearr_38297[(11)] = inst_38201);

(statearr_38297[(21)] = inst_38202);

return statearr_38297;
})();
var statearr_38298_39555 = state_38260__$1;
(statearr_38298_39555[(2)] = null);

(statearr_38298_39555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (43))){
var state_38260__$1 = state_38260;
var statearr_38299_39556 = state_38260__$1;
(statearr_38299_39556[(2)] = null);

(statearr_38299_39556[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (29))){
var inst_38244 = (state_38260[(2)]);
var state_38260__$1 = state_38260;
var statearr_38300_39557 = state_38260__$1;
(statearr_38300_39557[(2)] = inst_38244);

(statearr_38300_39557[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (44))){
var inst_38253 = (state_38260[(2)]);
var state_38260__$1 = (function (){var statearr_38301 = state_38260;
(statearr_38301[(28)] = inst_38253);

return statearr_38301;
})();
var statearr_38302_39558 = state_38260__$1;
(statearr_38302_39558[(2)] = null);

(statearr_38302_39558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (6))){
var inst_38192 = (state_38260[(29)]);
var inst_38191 = cljs.core.deref(cs);
var inst_38192__$1 = cljs.core.keys(inst_38191);
var inst_38193 = cljs.core.count(inst_38192__$1);
var inst_38194 = cljs.core.reset_BANG_(dctr,inst_38193);
var inst_38199 = cljs.core.seq(inst_38192__$1);
var inst_38200 = inst_38199;
var inst_38201 = null;
var inst_38202 = (0);
var inst_38203 = (0);
var state_38260__$1 = (function (){var statearr_38303 = state_38260;
(statearr_38303[(10)] = inst_38203);

(statearr_38303[(20)] = inst_38200);

(statearr_38303[(30)] = inst_38194);

(statearr_38303[(11)] = inst_38201);

(statearr_38303[(29)] = inst_38192__$1);

(statearr_38303[(21)] = inst_38202);

return statearr_38303;
})();
var statearr_38304_39560 = state_38260__$1;
(statearr_38304_39560[(2)] = null);

(statearr_38304_39560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (28))){
var inst_38200 = (state_38260[(20)]);
var inst_38219 = (state_38260[(25)]);
var inst_38219__$1 = cljs.core.seq(inst_38200);
var state_38260__$1 = (function (){var statearr_38305 = state_38260;
(statearr_38305[(25)] = inst_38219__$1);

return statearr_38305;
})();
if(inst_38219__$1){
var statearr_38306_39567 = state_38260__$1;
(statearr_38306_39567[(1)] = (33));

} else {
var statearr_38307_39568 = state_38260__$1;
(statearr_38307_39568[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (25))){
var inst_38203 = (state_38260[(10)]);
var inst_38202 = (state_38260[(21)]);
var inst_38205 = (inst_38203 < inst_38202);
var inst_38206 = inst_38205;
var state_38260__$1 = state_38260;
if(cljs.core.truth_(inst_38206)){
var statearr_38308_39569 = state_38260__$1;
(statearr_38308_39569[(1)] = (27));

} else {
var statearr_38309_39570 = state_38260__$1;
(statearr_38309_39570[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (34))){
var state_38260__$1 = state_38260;
var statearr_38310_39571 = state_38260__$1;
(statearr_38310_39571[(2)] = null);

(statearr_38310_39571[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (17))){
var state_38260__$1 = state_38260;
var statearr_38311_39572 = state_38260__$1;
(statearr_38311_39572[(2)] = null);

(statearr_38311_39572[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (3))){
var inst_38258 = (state_38260[(2)]);
var state_38260__$1 = state_38260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38260__$1,inst_38258);
} else {
if((state_val_38261 === (12))){
var inst_38187 = (state_38260[(2)]);
var state_38260__$1 = state_38260;
var statearr_38312_39574 = state_38260__$1;
(statearr_38312_39574[(2)] = inst_38187);

(statearr_38312_39574[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (2))){
var state_38260__$1 = state_38260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38260__$1,(4),ch);
} else {
if((state_val_38261 === (23))){
var state_38260__$1 = state_38260;
var statearr_38313_39575 = state_38260__$1;
(statearr_38313_39575[(2)] = null);

(statearr_38313_39575[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (35))){
var inst_38242 = (state_38260[(2)]);
var state_38260__$1 = state_38260;
var statearr_38314_39576 = state_38260__$1;
(statearr_38314_39576[(2)] = inst_38242);

(statearr_38314_39576[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (19))){
var inst_38159 = (state_38260[(7)]);
var inst_38163 = cljs.core.chunk_first(inst_38159);
var inst_38164 = cljs.core.chunk_rest(inst_38159);
var inst_38165 = cljs.core.count(inst_38163);
var inst_38137 = inst_38164;
var inst_38138 = inst_38163;
var inst_38139 = inst_38165;
var inst_38140 = (0);
var state_38260__$1 = (function (){var statearr_38315 = state_38260;
(statearr_38315[(14)] = inst_38139);

(statearr_38315[(15)] = inst_38137);

(statearr_38315[(16)] = inst_38140);

(statearr_38315[(17)] = inst_38138);

return statearr_38315;
})();
var statearr_38316_39583 = state_38260__$1;
(statearr_38316_39583[(2)] = null);

(statearr_38316_39583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (11))){
var inst_38159 = (state_38260[(7)]);
var inst_38137 = (state_38260[(15)]);
var inst_38159__$1 = cljs.core.seq(inst_38137);
var state_38260__$1 = (function (){var statearr_38317 = state_38260;
(statearr_38317[(7)] = inst_38159__$1);

return statearr_38317;
})();
if(inst_38159__$1){
var statearr_38318_39585 = state_38260__$1;
(statearr_38318_39585[(1)] = (16));

} else {
var statearr_38319_39586 = state_38260__$1;
(statearr_38319_39586[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (9))){
var inst_38189 = (state_38260[(2)]);
var state_38260__$1 = state_38260;
var statearr_38320_39587 = state_38260__$1;
(statearr_38320_39587[(2)] = inst_38189);

(statearr_38320_39587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (5))){
var inst_38135 = cljs.core.deref(cs);
var inst_38136 = cljs.core.seq(inst_38135);
var inst_38137 = inst_38136;
var inst_38138 = null;
var inst_38139 = (0);
var inst_38140 = (0);
var state_38260__$1 = (function (){var statearr_38321 = state_38260;
(statearr_38321[(14)] = inst_38139);

(statearr_38321[(15)] = inst_38137);

(statearr_38321[(16)] = inst_38140);

(statearr_38321[(17)] = inst_38138);

return statearr_38321;
})();
var statearr_38322_39588 = state_38260__$1;
(statearr_38322_39588[(2)] = null);

(statearr_38322_39588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (14))){
var state_38260__$1 = state_38260;
var statearr_38323_39589 = state_38260__$1;
(statearr_38323_39589[(2)] = null);

(statearr_38323_39589[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (45))){
var inst_38250 = (state_38260[(2)]);
var state_38260__$1 = state_38260;
var statearr_38324_39590 = state_38260__$1;
(statearr_38324_39590[(2)] = inst_38250);

(statearr_38324_39590[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (26))){
var inst_38192 = (state_38260[(29)]);
var inst_38246 = (state_38260[(2)]);
var inst_38247 = cljs.core.seq(inst_38192);
var state_38260__$1 = (function (){var statearr_38325 = state_38260;
(statearr_38325[(31)] = inst_38246);

return statearr_38325;
})();
if(inst_38247){
var statearr_38326_39591 = state_38260__$1;
(statearr_38326_39591[(1)] = (42));

} else {
var statearr_38327_39592 = state_38260__$1;
(statearr_38327_39592[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (16))){
var inst_38159 = (state_38260[(7)]);
var inst_38161 = cljs.core.chunked_seq_QMARK_(inst_38159);
var state_38260__$1 = state_38260;
if(inst_38161){
var statearr_38328_39593 = state_38260__$1;
(statearr_38328_39593[(1)] = (19));

} else {
var statearr_38329_39594 = state_38260__$1;
(statearr_38329_39594[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (38))){
var inst_38239 = (state_38260[(2)]);
var state_38260__$1 = state_38260;
var statearr_38330_39595 = state_38260__$1;
(statearr_38330_39595[(2)] = inst_38239);

(statearr_38330_39595[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (30))){
var state_38260__$1 = state_38260;
var statearr_38331_39602 = state_38260__$1;
(statearr_38331_39602[(2)] = null);

(statearr_38331_39602[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (10))){
var inst_38140 = (state_38260[(16)]);
var inst_38138 = (state_38260[(17)]);
var inst_38148 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38138,inst_38140);
var inst_38149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38148,(0),null);
var inst_38150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38148,(1),null);
var state_38260__$1 = (function (){var statearr_38332 = state_38260;
(statearr_38332[(26)] = inst_38149);

return statearr_38332;
})();
if(cljs.core.truth_(inst_38150)){
var statearr_38333_39603 = state_38260__$1;
(statearr_38333_39603[(1)] = (13));

} else {
var statearr_38334_39604 = state_38260__$1;
(statearr_38334_39604[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (18))){
var inst_38185 = (state_38260[(2)]);
var state_38260__$1 = state_38260;
var statearr_38335_39605 = state_38260__$1;
(statearr_38335_39605[(2)] = inst_38185);

(statearr_38335_39605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (42))){
var state_38260__$1 = state_38260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38260__$1,(45),dchan);
} else {
if((state_val_38261 === (37))){
var inst_38128 = (state_38260[(9)]);
var inst_38228 = (state_38260[(23)]);
var inst_38219 = (state_38260[(25)]);
var inst_38228__$1 = cljs.core.first(inst_38219);
var inst_38229 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38228__$1,inst_38128,done);
var state_38260__$1 = (function (){var statearr_38336 = state_38260;
(statearr_38336[(23)] = inst_38228__$1);

return statearr_38336;
})();
if(cljs.core.truth_(inst_38229)){
var statearr_38337_39607 = state_38260__$1;
(statearr_38337_39607[(1)] = (39));

} else {
var statearr_38338_39608 = state_38260__$1;
(statearr_38338_39608[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38261 === (8))){
var inst_38139 = (state_38260[(14)]);
var inst_38140 = (state_38260[(16)]);
var inst_38142 = (inst_38140 < inst_38139);
var inst_38143 = inst_38142;
var state_38260__$1 = state_38260;
if(cljs.core.truth_(inst_38143)){
var statearr_38339_39609 = state_38260__$1;
(statearr_38339_39609[(1)] = (10));

} else {
var statearr_38340_39610 = state_38260__$1;
(statearr_38340_39610[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__37598__auto__ = null;
var cljs$core$async$mult_$_state_machine__37598__auto____0 = (function (){
var statearr_38341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38341[(0)] = cljs$core$async$mult_$_state_machine__37598__auto__);

(statearr_38341[(1)] = (1));

return statearr_38341;
});
var cljs$core$async$mult_$_state_machine__37598__auto____1 = (function (state_38260){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_38260);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e38342){if((e38342 instanceof Object)){
var ex__37601__auto__ = e38342;
var statearr_38343_39612 = state_38260;
(statearr_38343_39612[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38342;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39613 = state_38260;
state_38260 = G__39613;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37598__auto__ = function(state_38260){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37598__auto____1.call(this,state_38260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37598__auto____0;
cljs$core$async$mult_$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37598__auto____1;
return cljs$core$async$mult_$_state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_38344 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_38344[(6)] = c__37665__auto___39498);

return statearr_38344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__38346 = arguments.length;
switch (G__38346) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___39623 = arguments.length;
var i__4790__auto___39624 = (0);
while(true){
if((i__4790__auto___39624 < len__4789__auto___39623)){
args__4795__auto__.push((arguments[i__4790__auto___39624]));

var G__39625 = (i__4790__auto___39624 + (1));
i__4790__auto___39624 = G__39625;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38351){
var map__38352 = p__38351;
var map__38352__$1 = (((((!((map__38352 == null))))?(((((map__38352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38352):map__38352);
var opts = map__38352__$1;
var statearr_38354_39629 = state;
(statearr_38354_39629[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_38355_39630 = state;
(statearr_38355_39630[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_38356_39633 = state;
(statearr_38356_39633[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38347){
var G__38348 = cljs.core.first(seq38347);
var seq38347__$1 = cljs.core.next(seq38347);
var G__38349 = cljs.core.first(seq38347__$1);
var seq38347__$2 = cljs.core.next(seq38347__$1);
var G__38350 = cljs.core.first(seq38347__$2);
var seq38347__$3 = cljs.core.next(seq38347__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38348,G__38349,G__38350,seq38347__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38357 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38358){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38358 = meta38358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38359,meta38358__$1){
var self__ = this;
var _38359__$1 = this;
return (new cljs.core.async.t_cljs$core$async38357(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38358__$1));
}));

(cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38359){
var self__ = this;
var _38359__$1 = this;
return self__.meta38358;
}));

(cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38358","meta38358",-2046943466,null)], null);
}));

(cljs.core.async.t_cljs$core$async38357.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38357");

(cljs.core.async.t_cljs$core$async38357.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38357");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38357.
 */
cljs.core.async.__GT_t_cljs$core$async38357 = (function cljs$core$async$mix_$___GT_t_cljs$core$async38357(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38358){
return (new cljs.core.async.t_cljs$core$async38357(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38358));
});

}

return (new cljs.core.async.t_cljs$core$async38357(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37665__auto___39641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_38461){
var state_val_38462 = (state_38461[(1)]);
if((state_val_38462 === (7))){
var inst_38376 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
var statearr_38463_39643 = state_38461__$1;
(statearr_38463_39643[(2)] = inst_38376);

(statearr_38463_39643[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (20))){
var inst_38388 = (state_38461[(7)]);
var state_38461__$1 = state_38461;
var statearr_38464_39644 = state_38461__$1;
(statearr_38464_39644[(2)] = inst_38388);

(statearr_38464_39644[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (27))){
var state_38461__$1 = state_38461;
var statearr_38465_39645 = state_38461__$1;
(statearr_38465_39645[(2)] = null);

(statearr_38465_39645[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (1))){
var inst_38363 = (state_38461[(8)]);
var inst_38363__$1 = calc_state();
var inst_38365 = (inst_38363__$1 == null);
var inst_38366 = cljs.core.not(inst_38365);
var state_38461__$1 = (function (){var statearr_38466 = state_38461;
(statearr_38466[(8)] = inst_38363__$1);

return statearr_38466;
})();
if(inst_38366){
var statearr_38467_39646 = state_38461__$1;
(statearr_38467_39646[(1)] = (2));

} else {
var statearr_38468_39647 = state_38461__$1;
(statearr_38468_39647[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (24))){
var inst_38421 = (state_38461[(9)]);
var inst_38412 = (state_38461[(10)]);
var inst_38435 = (state_38461[(11)]);
var inst_38435__$1 = (inst_38412.cljs$core$IFn$_invoke$arity$1 ? inst_38412.cljs$core$IFn$_invoke$arity$1(inst_38421) : inst_38412.call(null,inst_38421));
var state_38461__$1 = (function (){var statearr_38469 = state_38461;
(statearr_38469[(11)] = inst_38435__$1);

return statearr_38469;
})();
if(cljs.core.truth_(inst_38435__$1)){
var statearr_38470_39649 = state_38461__$1;
(statearr_38470_39649[(1)] = (29));

} else {
var statearr_38471_39651 = state_38461__$1;
(statearr_38471_39651[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (4))){
var inst_38379 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
if(cljs.core.truth_(inst_38379)){
var statearr_38472_39652 = state_38461__$1;
(statearr_38472_39652[(1)] = (8));

} else {
var statearr_38473_39653 = state_38461__$1;
(statearr_38473_39653[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (15))){
var inst_38406 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
if(cljs.core.truth_(inst_38406)){
var statearr_38474_39658 = state_38461__$1;
(statearr_38474_39658[(1)] = (19));

} else {
var statearr_38475_39659 = state_38461__$1;
(statearr_38475_39659[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (21))){
var inst_38411 = (state_38461[(12)]);
var inst_38411__$1 = (state_38461[(2)]);
var inst_38412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38411__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38411__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38411__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38461__$1 = (function (){var statearr_38476 = state_38461;
(statearr_38476[(13)] = inst_38413);

(statearr_38476[(10)] = inst_38412);

(statearr_38476[(12)] = inst_38411__$1);

return statearr_38476;
})();
return cljs.core.async.ioc_alts_BANG_(state_38461__$1,(22),inst_38414);
} else {
if((state_val_38462 === (31))){
var inst_38443 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
if(cljs.core.truth_(inst_38443)){
var statearr_38477_39660 = state_38461__$1;
(statearr_38477_39660[(1)] = (32));

} else {
var statearr_38478_39661 = state_38461__$1;
(statearr_38478_39661[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (32))){
var inst_38420 = (state_38461[(14)]);
var state_38461__$1 = state_38461;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38461__$1,(35),out,inst_38420);
} else {
if((state_val_38462 === (33))){
var inst_38411 = (state_38461[(12)]);
var inst_38388 = inst_38411;
var state_38461__$1 = (function (){var statearr_38479 = state_38461;
(statearr_38479[(7)] = inst_38388);

return statearr_38479;
})();
var statearr_38480_39663 = state_38461__$1;
(statearr_38480_39663[(2)] = null);

(statearr_38480_39663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (13))){
var inst_38388 = (state_38461[(7)]);
var inst_38395 = inst_38388.cljs$lang$protocol_mask$partition0$;
var inst_38396 = (inst_38395 & (64));
var inst_38397 = inst_38388.cljs$core$ISeq$;
var inst_38398 = (cljs.core.PROTOCOL_SENTINEL === inst_38397);
var inst_38399 = ((inst_38396) || (inst_38398));
var state_38461__$1 = state_38461;
if(cljs.core.truth_(inst_38399)){
var statearr_38481_39664 = state_38461__$1;
(statearr_38481_39664[(1)] = (16));

} else {
var statearr_38482_39665 = state_38461__$1;
(statearr_38482_39665[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (22))){
var inst_38421 = (state_38461[(9)]);
var inst_38420 = (state_38461[(14)]);
var inst_38419 = (state_38461[(2)]);
var inst_38420__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38419,(0),null);
var inst_38421__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38419,(1),null);
var inst_38422 = (inst_38420__$1 == null);
var inst_38423 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38421__$1,change);
var inst_38424 = ((inst_38422) || (inst_38423));
var state_38461__$1 = (function (){var statearr_38483 = state_38461;
(statearr_38483[(9)] = inst_38421__$1);

(statearr_38483[(14)] = inst_38420__$1);

return statearr_38483;
})();
if(cljs.core.truth_(inst_38424)){
var statearr_38484_39673 = state_38461__$1;
(statearr_38484_39673[(1)] = (23));

} else {
var statearr_38485_39674 = state_38461__$1;
(statearr_38485_39674[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (36))){
var inst_38411 = (state_38461[(12)]);
var inst_38388 = inst_38411;
var state_38461__$1 = (function (){var statearr_38486 = state_38461;
(statearr_38486[(7)] = inst_38388);

return statearr_38486;
})();
var statearr_38487_39679 = state_38461__$1;
(statearr_38487_39679[(2)] = null);

(statearr_38487_39679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (29))){
var inst_38435 = (state_38461[(11)]);
var state_38461__$1 = state_38461;
var statearr_38488_39680 = state_38461__$1;
(statearr_38488_39680[(2)] = inst_38435);

(statearr_38488_39680[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (6))){
var state_38461__$1 = state_38461;
var statearr_38489_39684 = state_38461__$1;
(statearr_38489_39684[(2)] = false);

(statearr_38489_39684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (28))){
var inst_38431 = (state_38461[(2)]);
var inst_38432 = calc_state();
var inst_38388 = inst_38432;
var state_38461__$1 = (function (){var statearr_38490 = state_38461;
(statearr_38490[(7)] = inst_38388);

(statearr_38490[(15)] = inst_38431);

return statearr_38490;
})();
var statearr_38491_39685 = state_38461__$1;
(statearr_38491_39685[(2)] = null);

(statearr_38491_39685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (25))){
var inst_38457 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
var statearr_38492_39689 = state_38461__$1;
(statearr_38492_39689[(2)] = inst_38457);

(statearr_38492_39689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (34))){
var inst_38455 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
var statearr_38493_39690 = state_38461__$1;
(statearr_38493_39690[(2)] = inst_38455);

(statearr_38493_39690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (17))){
var state_38461__$1 = state_38461;
var statearr_38494_39691 = state_38461__$1;
(statearr_38494_39691[(2)] = false);

(statearr_38494_39691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (3))){
var state_38461__$1 = state_38461;
var statearr_38495_39693 = state_38461__$1;
(statearr_38495_39693[(2)] = false);

(statearr_38495_39693[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (12))){
var inst_38459 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38461__$1,inst_38459);
} else {
if((state_val_38462 === (2))){
var inst_38363 = (state_38461[(8)]);
var inst_38368 = inst_38363.cljs$lang$protocol_mask$partition0$;
var inst_38369 = (inst_38368 & (64));
var inst_38370 = inst_38363.cljs$core$ISeq$;
var inst_38371 = (cljs.core.PROTOCOL_SENTINEL === inst_38370);
var inst_38372 = ((inst_38369) || (inst_38371));
var state_38461__$1 = state_38461;
if(cljs.core.truth_(inst_38372)){
var statearr_38496_39697 = state_38461__$1;
(statearr_38496_39697[(1)] = (5));

} else {
var statearr_38497_39698 = state_38461__$1;
(statearr_38497_39698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (23))){
var inst_38420 = (state_38461[(14)]);
var inst_38426 = (inst_38420 == null);
var state_38461__$1 = state_38461;
if(cljs.core.truth_(inst_38426)){
var statearr_38498_39700 = state_38461__$1;
(statearr_38498_39700[(1)] = (26));

} else {
var statearr_38499_39701 = state_38461__$1;
(statearr_38499_39701[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (35))){
var inst_38446 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
if(cljs.core.truth_(inst_38446)){
var statearr_38500_39702 = state_38461__$1;
(statearr_38500_39702[(1)] = (36));

} else {
var statearr_38501_39703 = state_38461__$1;
(statearr_38501_39703[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (19))){
var inst_38388 = (state_38461[(7)]);
var inst_38408 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38388);
var state_38461__$1 = state_38461;
var statearr_38502_39704 = state_38461__$1;
(statearr_38502_39704[(2)] = inst_38408);

(statearr_38502_39704[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (11))){
var inst_38388 = (state_38461[(7)]);
var inst_38392 = (inst_38388 == null);
var inst_38393 = cljs.core.not(inst_38392);
var state_38461__$1 = state_38461;
if(inst_38393){
var statearr_38503_39705 = state_38461__$1;
(statearr_38503_39705[(1)] = (13));

} else {
var statearr_38504_39706 = state_38461__$1;
(statearr_38504_39706[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (9))){
var inst_38363 = (state_38461[(8)]);
var state_38461__$1 = state_38461;
var statearr_38505_39707 = state_38461__$1;
(statearr_38505_39707[(2)] = inst_38363);

(statearr_38505_39707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (5))){
var state_38461__$1 = state_38461;
var statearr_38506_39708 = state_38461__$1;
(statearr_38506_39708[(2)] = true);

(statearr_38506_39708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (14))){
var state_38461__$1 = state_38461;
var statearr_38507_39711 = state_38461__$1;
(statearr_38507_39711[(2)] = false);

(statearr_38507_39711[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (26))){
var inst_38421 = (state_38461[(9)]);
var inst_38428 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38421);
var state_38461__$1 = state_38461;
var statearr_38508_39712 = state_38461__$1;
(statearr_38508_39712[(2)] = inst_38428);

(statearr_38508_39712[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (16))){
var state_38461__$1 = state_38461;
var statearr_38509_39713 = state_38461__$1;
(statearr_38509_39713[(2)] = true);

(statearr_38509_39713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (38))){
var inst_38451 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
var statearr_38510_39716 = state_38461__$1;
(statearr_38510_39716[(2)] = inst_38451);

(statearr_38510_39716[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (30))){
var inst_38421 = (state_38461[(9)]);
var inst_38413 = (state_38461[(13)]);
var inst_38412 = (state_38461[(10)]);
var inst_38438 = cljs.core.empty_QMARK_(inst_38412);
var inst_38439 = (inst_38413.cljs$core$IFn$_invoke$arity$1 ? inst_38413.cljs$core$IFn$_invoke$arity$1(inst_38421) : inst_38413.call(null,inst_38421));
var inst_38440 = cljs.core.not(inst_38439);
var inst_38441 = ((inst_38438) && (inst_38440));
var state_38461__$1 = state_38461;
var statearr_38511_39718 = state_38461__$1;
(statearr_38511_39718[(2)] = inst_38441);

(statearr_38511_39718[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (10))){
var inst_38363 = (state_38461[(8)]);
var inst_38384 = (state_38461[(2)]);
var inst_38385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38384,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38384,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38384,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38388 = inst_38363;
var state_38461__$1 = (function (){var statearr_38512 = state_38461;
(statearr_38512[(16)] = inst_38386);

(statearr_38512[(17)] = inst_38385);

(statearr_38512[(18)] = inst_38387);

(statearr_38512[(7)] = inst_38388);

return statearr_38512;
})();
var statearr_38513_39724 = state_38461__$1;
(statearr_38513_39724[(2)] = null);

(statearr_38513_39724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (18))){
var inst_38403 = (state_38461[(2)]);
var state_38461__$1 = state_38461;
var statearr_38514_39725 = state_38461__$1;
(statearr_38514_39725[(2)] = inst_38403);

(statearr_38514_39725[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (37))){
var state_38461__$1 = state_38461;
var statearr_38515_39726 = state_38461__$1;
(statearr_38515_39726[(2)] = null);

(statearr_38515_39726[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38462 === (8))){
var inst_38363 = (state_38461[(8)]);
var inst_38381 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38363);
var state_38461__$1 = state_38461;
var statearr_38516_39728 = state_38461__$1;
(statearr_38516_39728[(2)] = inst_38381);

(statearr_38516_39728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__37598__auto__ = null;
var cljs$core$async$mix_$_state_machine__37598__auto____0 = (function (){
var statearr_38517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38517[(0)] = cljs$core$async$mix_$_state_machine__37598__auto__);

(statearr_38517[(1)] = (1));

return statearr_38517;
});
var cljs$core$async$mix_$_state_machine__37598__auto____1 = (function (state_38461){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_38461);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e38518){if((e38518 instanceof Object)){
var ex__37601__auto__ = e38518;
var statearr_38519_39732 = state_38461;
(statearr_38519_39732[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38518;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39733 = state_38461;
state_38461 = G__39733;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37598__auto__ = function(state_38461){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37598__auto____1.call(this,state_38461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37598__auto____0;
cljs$core$async$mix_$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37598__auto____1;
return cljs$core$async$mix_$_state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_38520 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_38520[(6)] = c__37665__auto___39641);

return statearr_38520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38522 = arguments.length;
switch (G__38522) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__38525 = arguments.length;
switch (G__38525) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__38523_SHARP_){
if(cljs.core.truth_((p1__38523_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38523_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__38523_SHARP_.call(null,topic)))){
return p1__38523_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38523_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38526 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38527){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38527 = meta38527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38528,meta38527__$1){
var self__ = this;
var _38528__$1 = this;
return (new cljs.core.async.t_cljs$core$async38526(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38527__$1));
}));

(cljs.core.async.t_cljs$core$async38526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38528){
var self__ = this;
var _38528__$1 = this;
return self__.meta38527;
}));

(cljs.core.async.t_cljs$core$async38526.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38526.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38526.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38526.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async38526.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async38526.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async38526.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async38526.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38527","meta38527",1352741886,null)], null);
}));

(cljs.core.async.t_cljs$core$async38526.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38526.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38526");

(cljs.core.async.t_cljs$core$async38526.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38526");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38526.
 */
cljs.core.async.__GT_t_cljs$core$async38526 = (function cljs$core$async$__GT_t_cljs$core$async38526(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38527){
return (new cljs.core.async.t_cljs$core$async38526(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38527));
});

}

return (new cljs.core.async.t_cljs$core$async38526(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37665__auto___39754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_38600){
var state_val_38601 = (state_38600[(1)]);
if((state_val_38601 === (7))){
var inst_38596 = (state_38600[(2)]);
var state_38600__$1 = state_38600;
var statearr_38602_39755 = state_38600__$1;
(statearr_38602_39755[(2)] = inst_38596);

(statearr_38602_39755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (20))){
var state_38600__$1 = state_38600;
var statearr_38603_39756 = state_38600__$1;
(statearr_38603_39756[(2)] = null);

(statearr_38603_39756[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (1))){
var state_38600__$1 = state_38600;
var statearr_38604_39757 = state_38600__$1;
(statearr_38604_39757[(2)] = null);

(statearr_38604_39757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (24))){
var inst_38579 = (state_38600[(7)]);
var inst_38588 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38579);
var state_38600__$1 = state_38600;
var statearr_38605_39758 = state_38600__$1;
(statearr_38605_39758[(2)] = inst_38588);

(statearr_38605_39758[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (4))){
var inst_38531 = (state_38600[(8)]);
var inst_38531__$1 = (state_38600[(2)]);
var inst_38532 = (inst_38531__$1 == null);
var state_38600__$1 = (function (){var statearr_38606 = state_38600;
(statearr_38606[(8)] = inst_38531__$1);

return statearr_38606;
})();
if(cljs.core.truth_(inst_38532)){
var statearr_38607_39759 = state_38600__$1;
(statearr_38607_39759[(1)] = (5));

} else {
var statearr_38608_39760 = state_38600__$1;
(statearr_38608_39760[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (15))){
var inst_38573 = (state_38600[(2)]);
var state_38600__$1 = state_38600;
var statearr_38609_39761 = state_38600__$1;
(statearr_38609_39761[(2)] = inst_38573);

(statearr_38609_39761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (21))){
var inst_38593 = (state_38600[(2)]);
var state_38600__$1 = (function (){var statearr_38610 = state_38600;
(statearr_38610[(9)] = inst_38593);

return statearr_38610;
})();
var statearr_38611_39762 = state_38600__$1;
(statearr_38611_39762[(2)] = null);

(statearr_38611_39762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (13))){
var inst_38555 = (state_38600[(10)]);
var inst_38557 = cljs.core.chunked_seq_QMARK_(inst_38555);
var state_38600__$1 = state_38600;
if(inst_38557){
var statearr_38612_39765 = state_38600__$1;
(statearr_38612_39765[(1)] = (16));

} else {
var statearr_38613_39766 = state_38600__$1;
(statearr_38613_39766[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (22))){
var inst_38585 = (state_38600[(2)]);
var state_38600__$1 = state_38600;
if(cljs.core.truth_(inst_38585)){
var statearr_38614_39767 = state_38600__$1;
(statearr_38614_39767[(1)] = (23));

} else {
var statearr_38615_39768 = state_38600__$1;
(statearr_38615_39768[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (6))){
var inst_38531 = (state_38600[(8)]);
var inst_38581 = (state_38600[(11)]);
var inst_38579 = (state_38600[(7)]);
var inst_38579__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_38531) : topic_fn.call(null,inst_38531));
var inst_38580 = cljs.core.deref(mults);
var inst_38581__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38580,inst_38579__$1);
var state_38600__$1 = (function (){var statearr_38616 = state_38600;
(statearr_38616[(11)] = inst_38581__$1);

(statearr_38616[(7)] = inst_38579__$1);

return statearr_38616;
})();
if(cljs.core.truth_(inst_38581__$1)){
var statearr_38617_39769 = state_38600__$1;
(statearr_38617_39769[(1)] = (19));

} else {
var statearr_38618_39770 = state_38600__$1;
(statearr_38618_39770[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (25))){
var inst_38590 = (state_38600[(2)]);
var state_38600__$1 = state_38600;
var statearr_38619_39771 = state_38600__$1;
(statearr_38619_39771[(2)] = inst_38590);

(statearr_38619_39771[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (17))){
var inst_38555 = (state_38600[(10)]);
var inst_38564 = cljs.core.first(inst_38555);
var inst_38565 = cljs.core.async.muxch_STAR_(inst_38564);
var inst_38566 = cljs.core.async.close_BANG_(inst_38565);
var inst_38567 = cljs.core.next(inst_38555);
var inst_38541 = inst_38567;
var inst_38542 = null;
var inst_38543 = (0);
var inst_38544 = (0);
var state_38600__$1 = (function (){var statearr_38620 = state_38600;
(statearr_38620[(12)] = inst_38541);

(statearr_38620[(13)] = inst_38543);

(statearr_38620[(14)] = inst_38544);

(statearr_38620[(15)] = inst_38542);

(statearr_38620[(16)] = inst_38566);

return statearr_38620;
})();
var statearr_38621_39780 = state_38600__$1;
(statearr_38621_39780[(2)] = null);

(statearr_38621_39780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (3))){
var inst_38598 = (state_38600[(2)]);
var state_38600__$1 = state_38600;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38600__$1,inst_38598);
} else {
if((state_val_38601 === (12))){
var inst_38575 = (state_38600[(2)]);
var state_38600__$1 = state_38600;
var statearr_38622_39781 = state_38600__$1;
(statearr_38622_39781[(2)] = inst_38575);

(statearr_38622_39781[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (2))){
var state_38600__$1 = state_38600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38600__$1,(4),ch);
} else {
if((state_val_38601 === (23))){
var state_38600__$1 = state_38600;
var statearr_38623_39782 = state_38600__$1;
(statearr_38623_39782[(2)] = null);

(statearr_38623_39782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (19))){
var inst_38531 = (state_38600[(8)]);
var inst_38581 = (state_38600[(11)]);
var inst_38583 = cljs.core.async.muxch_STAR_(inst_38581);
var state_38600__$1 = state_38600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38600__$1,(22),inst_38583,inst_38531);
} else {
if((state_val_38601 === (11))){
var inst_38541 = (state_38600[(12)]);
var inst_38555 = (state_38600[(10)]);
var inst_38555__$1 = cljs.core.seq(inst_38541);
var state_38600__$1 = (function (){var statearr_38624 = state_38600;
(statearr_38624[(10)] = inst_38555__$1);

return statearr_38624;
})();
if(inst_38555__$1){
var statearr_38625_39784 = state_38600__$1;
(statearr_38625_39784[(1)] = (13));

} else {
var statearr_38626_39785 = state_38600__$1;
(statearr_38626_39785[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (9))){
var inst_38577 = (state_38600[(2)]);
var state_38600__$1 = state_38600;
var statearr_38627_39786 = state_38600__$1;
(statearr_38627_39786[(2)] = inst_38577);

(statearr_38627_39786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (5))){
var inst_38538 = cljs.core.deref(mults);
var inst_38539 = cljs.core.vals(inst_38538);
var inst_38540 = cljs.core.seq(inst_38539);
var inst_38541 = inst_38540;
var inst_38542 = null;
var inst_38543 = (0);
var inst_38544 = (0);
var state_38600__$1 = (function (){var statearr_38628 = state_38600;
(statearr_38628[(12)] = inst_38541);

(statearr_38628[(13)] = inst_38543);

(statearr_38628[(14)] = inst_38544);

(statearr_38628[(15)] = inst_38542);

return statearr_38628;
})();
var statearr_38629_39788 = state_38600__$1;
(statearr_38629_39788[(2)] = null);

(statearr_38629_39788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (14))){
var state_38600__$1 = state_38600;
var statearr_38633_39790 = state_38600__$1;
(statearr_38633_39790[(2)] = null);

(statearr_38633_39790[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (16))){
var inst_38555 = (state_38600[(10)]);
var inst_38559 = cljs.core.chunk_first(inst_38555);
var inst_38560 = cljs.core.chunk_rest(inst_38555);
var inst_38561 = cljs.core.count(inst_38559);
var inst_38541 = inst_38560;
var inst_38542 = inst_38559;
var inst_38543 = inst_38561;
var inst_38544 = (0);
var state_38600__$1 = (function (){var statearr_38634 = state_38600;
(statearr_38634[(12)] = inst_38541);

(statearr_38634[(13)] = inst_38543);

(statearr_38634[(14)] = inst_38544);

(statearr_38634[(15)] = inst_38542);

return statearr_38634;
})();
var statearr_38635_39793 = state_38600__$1;
(statearr_38635_39793[(2)] = null);

(statearr_38635_39793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (10))){
var inst_38541 = (state_38600[(12)]);
var inst_38543 = (state_38600[(13)]);
var inst_38544 = (state_38600[(14)]);
var inst_38542 = (state_38600[(15)]);
var inst_38549 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38542,inst_38544);
var inst_38550 = cljs.core.async.muxch_STAR_(inst_38549);
var inst_38551 = cljs.core.async.close_BANG_(inst_38550);
var inst_38552 = (inst_38544 + (1));
var tmp38630 = inst_38541;
var tmp38631 = inst_38543;
var tmp38632 = inst_38542;
var inst_38541__$1 = tmp38630;
var inst_38542__$1 = tmp38632;
var inst_38543__$1 = tmp38631;
var inst_38544__$1 = inst_38552;
var state_38600__$1 = (function (){var statearr_38636 = state_38600;
(statearr_38636[(12)] = inst_38541__$1);

(statearr_38636[(13)] = inst_38543__$1);

(statearr_38636[(14)] = inst_38544__$1);

(statearr_38636[(17)] = inst_38551);

(statearr_38636[(15)] = inst_38542__$1);

return statearr_38636;
})();
var statearr_38637_39800 = state_38600__$1;
(statearr_38637_39800[(2)] = null);

(statearr_38637_39800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (18))){
var inst_38570 = (state_38600[(2)]);
var state_38600__$1 = state_38600;
var statearr_38638_39802 = state_38600__$1;
(statearr_38638_39802[(2)] = inst_38570);

(statearr_38638_39802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38601 === (8))){
var inst_38543 = (state_38600[(13)]);
var inst_38544 = (state_38600[(14)]);
var inst_38546 = (inst_38544 < inst_38543);
var inst_38547 = inst_38546;
var state_38600__$1 = state_38600;
if(cljs.core.truth_(inst_38547)){
var statearr_38639_39803 = state_38600__$1;
(statearr_38639_39803[(1)] = (10));

} else {
var statearr_38640_39804 = state_38600__$1;
(statearr_38640_39804[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37598__auto__ = null;
var cljs$core$async$state_machine__37598__auto____0 = (function (){
var statearr_38641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38641[(0)] = cljs$core$async$state_machine__37598__auto__);

(statearr_38641[(1)] = (1));

return statearr_38641;
});
var cljs$core$async$state_machine__37598__auto____1 = (function (state_38600){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_38600);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e38642){if((e38642 instanceof Object)){
var ex__37601__auto__ = e38642;
var statearr_38643_39810 = state_38600;
(statearr_38643_39810[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38642;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39812 = state_38600;
state_38600 = G__39812;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$state_machine__37598__auto__ = function(state_38600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37598__auto____1.call(this,state_38600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37598__auto____0;
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37598__auto____1;
return cljs$core$async$state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_38644 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_38644[(6)] = c__37665__auto___39754);

return statearr_38644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__38646 = arguments.length;
switch (G__38646) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__38648 = arguments.length;
switch (G__38648) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__38650 = arguments.length;
switch (G__38650) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__37665__auto___39818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_38689){
var state_val_38690 = (state_38689[(1)]);
if((state_val_38690 === (7))){
var state_38689__$1 = state_38689;
var statearr_38691_39820 = state_38689__$1;
(statearr_38691_39820[(2)] = null);

(statearr_38691_39820[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38690 === (1))){
var state_38689__$1 = state_38689;
var statearr_38692_39821 = state_38689__$1;
(statearr_38692_39821[(2)] = null);

(statearr_38692_39821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38690 === (4))){
var inst_38653 = (state_38689[(7)]);
var inst_38655 = (inst_38653 < cnt);
var state_38689__$1 = state_38689;
if(cljs.core.truth_(inst_38655)){
var statearr_38693_39822 = state_38689__$1;
(statearr_38693_39822[(1)] = (6));

} else {
var statearr_38694_39823 = state_38689__$1;
(statearr_38694_39823[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38690 === (15))){
var inst_38685 = (state_38689[(2)]);
var state_38689__$1 = state_38689;
var statearr_38695_39829 = state_38689__$1;
(statearr_38695_39829[(2)] = inst_38685);

(statearr_38695_39829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38690 === (13))){
var inst_38678 = cljs.core.async.close_BANG_(out);
var state_38689__$1 = state_38689;
var statearr_38696_39832 = state_38689__$1;
(statearr_38696_39832[(2)] = inst_38678);

(statearr_38696_39832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38690 === (6))){
var state_38689__$1 = state_38689;
var statearr_38697_39833 = state_38689__$1;
(statearr_38697_39833[(2)] = null);

(statearr_38697_39833[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38690 === (3))){
var inst_38687 = (state_38689[(2)]);
var state_38689__$1 = state_38689;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38689__$1,inst_38687);
} else {
if((state_val_38690 === (12))){
var inst_38675 = (state_38689[(8)]);
var inst_38675__$1 = (state_38689[(2)]);
var inst_38676 = cljs.core.some(cljs.core.nil_QMARK_,inst_38675__$1);
var state_38689__$1 = (function (){var statearr_38698 = state_38689;
(statearr_38698[(8)] = inst_38675__$1);

return statearr_38698;
})();
if(cljs.core.truth_(inst_38676)){
var statearr_38699_39835 = state_38689__$1;
(statearr_38699_39835[(1)] = (13));

} else {
var statearr_38700_39836 = state_38689__$1;
(statearr_38700_39836[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38690 === (2))){
var inst_38652 = cljs.core.reset_BANG_(dctr,cnt);
var inst_38653 = (0);
var state_38689__$1 = (function (){var statearr_38701 = state_38689;
(statearr_38701[(7)] = inst_38653);

(statearr_38701[(9)] = inst_38652);

return statearr_38701;
})();
var statearr_38702_39837 = state_38689__$1;
(statearr_38702_39837[(2)] = null);

(statearr_38702_39837[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38690 === (11))){
var inst_38653 = (state_38689[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_38689,(10),Object,null,(9));
var inst_38662 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38653) : chs__$1.call(null,inst_38653));
var inst_38663 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38653) : done.call(null,inst_38653));
var inst_38664 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38662,inst_38663);
var state_38689__$1 = state_38689;
var statearr_38703_39839 = state_38689__$1;
(statearr_38703_39839[(2)] = inst_38664);


cljs.core.async.impl.ioc_helpers.process_exception(state_38689__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38690 === (9))){
var inst_38653 = (state_38689[(7)]);
var inst_38666 = (state_38689[(2)]);
var inst_38667 = (inst_38653 + (1));
var inst_38653__$1 = inst_38667;
var state_38689__$1 = (function (){var statearr_38704 = state_38689;
(statearr_38704[(7)] = inst_38653__$1);

(statearr_38704[(10)] = inst_38666);

return statearr_38704;
})();
var statearr_38705_39841 = state_38689__$1;
(statearr_38705_39841[(2)] = null);

(statearr_38705_39841[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38690 === (5))){
var inst_38673 = (state_38689[(2)]);
var state_38689__$1 = (function (){var statearr_38706 = state_38689;
(statearr_38706[(11)] = inst_38673);

return statearr_38706;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38689__$1,(12),dchan);
} else {
if((state_val_38690 === (14))){
var inst_38675 = (state_38689[(8)]);
var inst_38680 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38675);
var state_38689__$1 = state_38689;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38689__$1,(16),out,inst_38680);
} else {
if((state_val_38690 === (16))){
var inst_38682 = (state_38689[(2)]);
var state_38689__$1 = (function (){var statearr_38707 = state_38689;
(statearr_38707[(12)] = inst_38682);

return statearr_38707;
})();
var statearr_38708_39843 = state_38689__$1;
(statearr_38708_39843[(2)] = null);

(statearr_38708_39843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38690 === (10))){
var inst_38657 = (state_38689[(2)]);
var inst_38658 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38689__$1 = (function (){var statearr_38709 = state_38689;
(statearr_38709[(13)] = inst_38657);

return statearr_38709;
})();
var statearr_38710_39844 = state_38689__$1;
(statearr_38710_39844[(2)] = inst_38658);


cljs.core.async.impl.ioc_helpers.process_exception(state_38689__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38690 === (8))){
var inst_38671 = (state_38689[(2)]);
var state_38689__$1 = state_38689;
var statearr_38711_39845 = state_38689__$1;
(statearr_38711_39845[(2)] = inst_38671);

(statearr_38711_39845[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37598__auto__ = null;
var cljs$core$async$state_machine__37598__auto____0 = (function (){
var statearr_38712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38712[(0)] = cljs$core$async$state_machine__37598__auto__);

(statearr_38712[(1)] = (1));

return statearr_38712;
});
var cljs$core$async$state_machine__37598__auto____1 = (function (state_38689){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_38689);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e38713){if((e38713 instanceof Object)){
var ex__37601__auto__ = e38713;
var statearr_38714_39847 = state_38689;
(statearr_38714_39847[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38713;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39848 = state_38689;
state_38689 = G__39848;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$state_machine__37598__auto__ = function(state_38689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37598__auto____1.call(this,state_38689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37598__auto____0;
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37598__auto____1;
return cljs$core$async$state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_38715 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_38715[(6)] = c__37665__auto___39818);

return statearr_38715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__38718 = arguments.length;
switch (G__38718) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37665__auto___39856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_38750){
var state_val_38751 = (state_38750[(1)]);
if((state_val_38751 === (7))){
var inst_38729 = (state_38750[(7)]);
var inst_38730 = (state_38750[(8)]);
var inst_38729__$1 = (state_38750[(2)]);
var inst_38730__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38729__$1,(0),null);
var inst_38731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38729__$1,(1),null);
var inst_38732 = (inst_38730__$1 == null);
var state_38750__$1 = (function (){var statearr_38752 = state_38750;
(statearr_38752[(9)] = inst_38731);

(statearr_38752[(7)] = inst_38729__$1);

(statearr_38752[(8)] = inst_38730__$1);

return statearr_38752;
})();
if(cljs.core.truth_(inst_38732)){
var statearr_38753_39860 = state_38750__$1;
(statearr_38753_39860[(1)] = (8));

} else {
var statearr_38754_39861 = state_38750__$1;
(statearr_38754_39861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (1))){
var inst_38719 = cljs.core.vec(chs);
var inst_38720 = inst_38719;
var state_38750__$1 = (function (){var statearr_38755 = state_38750;
(statearr_38755[(10)] = inst_38720);

return statearr_38755;
})();
var statearr_38756_39863 = state_38750__$1;
(statearr_38756_39863[(2)] = null);

(statearr_38756_39863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (4))){
var inst_38720 = (state_38750[(10)]);
var state_38750__$1 = state_38750;
return cljs.core.async.ioc_alts_BANG_(state_38750__$1,(7),inst_38720);
} else {
if((state_val_38751 === (6))){
var inst_38746 = (state_38750[(2)]);
var state_38750__$1 = state_38750;
var statearr_38757_39866 = state_38750__$1;
(statearr_38757_39866[(2)] = inst_38746);

(statearr_38757_39866[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (3))){
var inst_38748 = (state_38750[(2)]);
var state_38750__$1 = state_38750;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38750__$1,inst_38748);
} else {
if((state_val_38751 === (2))){
var inst_38720 = (state_38750[(10)]);
var inst_38722 = cljs.core.count(inst_38720);
var inst_38723 = (inst_38722 > (0));
var state_38750__$1 = state_38750;
if(cljs.core.truth_(inst_38723)){
var statearr_38759_39867 = state_38750__$1;
(statearr_38759_39867[(1)] = (4));

} else {
var statearr_38760_39868 = state_38750__$1;
(statearr_38760_39868[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (11))){
var inst_38720 = (state_38750[(10)]);
var inst_38739 = (state_38750[(2)]);
var tmp38758 = inst_38720;
var inst_38720__$1 = tmp38758;
var state_38750__$1 = (function (){var statearr_38761 = state_38750;
(statearr_38761[(11)] = inst_38739);

(statearr_38761[(10)] = inst_38720__$1);

return statearr_38761;
})();
var statearr_38762_39869 = state_38750__$1;
(statearr_38762_39869[(2)] = null);

(statearr_38762_39869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (9))){
var inst_38730 = (state_38750[(8)]);
var state_38750__$1 = state_38750;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38750__$1,(11),out,inst_38730);
} else {
if((state_val_38751 === (5))){
var inst_38744 = cljs.core.async.close_BANG_(out);
var state_38750__$1 = state_38750;
var statearr_38763_39870 = state_38750__$1;
(statearr_38763_39870[(2)] = inst_38744);

(statearr_38763_39870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (10))){
var inst_38742 = (state_38750[(2)]);
var state_38750__$1 = state_38750;
var statearr_38764_39871 = state_38750__$1;
(statearr_38764_39871[(2)] = inst_38742);

(statearr_38764_39871[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38751 === (8))){
var inst_38731 = (state_38750[(9)]);
var inst_38729 = (state_38750[(7)]);
var inst_38720 = (state_38750[(10)]);
var inst_38730 = (state_38750[(8)]);
var inst_38734 = (function (){var cs = inst_38720;
var vec__38725 = inst_38729;
var v = inst_38730;
var c = inst_38731;
return (function (p1__38716_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38716_SHARP_);
});
})();
var inst_38735 = cljs.core.filterv(inst_38734,inst_38720);
var inst_38720__$1 = inst_38735;
var state_38750__$1 = (function (){var statearr_38765 = state_38750;
(statearr_38765[(10)] = inst_38720__$1);

return statearr_38765;
})();
var statearr_38766_39875 = state_38750__$1;
(statearr_38766_39875[(2)] = null);

(statearr_38766_39875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37598__auto__ = null;
var cljs$core$async$state_machine__37598__auto____0 = (function (){
var statearr_38767 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38767[(0)] = cljs$core$async$state_machine__37598__auto__);

(statearr_38767[(1)] = (1));

return statearr_38767;
});
var cljs$core$async$state_machine__37598__auto____1 = (function (state_38750){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_38750);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e38768){if((e38768 instanceof Object)){
var ex__37601__auto__ = e38768;
var statearr_38769_39878 = state_38750;
(statearr_38769_39878[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38750);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38768;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39879 = state_38750;
state_38750 = G__39879;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$state_machine__37598__auto__ = function(state_38750){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37598__auto____1.call(this,state_38750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37598__auto____0;
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37598__auto____1;
return cljs$core$async$state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_38770 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_38770[(6)] = c__37665__auto___39856);

return statearr_38770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__38772 = arguments.length;
switch (G__38772) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37665__auto___39883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_38796){
var state_val_38797 = (state_38796[(1)]);
if((state_val_38797 === (7))){
var inst_38778 = (state_38796[(7)]);
var inst_38778__$1 = (state_38796[(2)]);
var inst_38779 = (inst_38778__$1 == null);
var inst_38780 = cljs.core.not(inst_38779);
var state_38796__$1 = (function (){var statearr_38798 = state_38796;
(statearr_38798[(7)] = inst_38778__$1);

return statearr_38798;
})();
if(inst_38780){
var statearr_38799_39884 = state_38796__$1;
(statearr_38799_39884[(1)] = (8));

} else {
var statearr_38800_39886 = state_38796__$1;
(statearr_38800_39886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38797 === (1))){
var inst_38773 = (0);
var state_38796__$1 = (function (){var statearr_38801 = state_38796;
(statearr_38801[(8)] = inst_38773);

return statearr_38801;
})();
var statearr_38802_39887 = state_38796__$1;
(statearr_38802_39887[(2)] = null);

(statearr_38802_39887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38797 === (4))){
var state_38796__$1 = state_38796;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38796__$1,(7),ch);
} else {
if((state_val_38797 === (6))){
var inst_38791 = (state_38796[(2)]);
var state_38796__$1 = state_38796;
var statearr_38803_39889 = state_38796__$1;
(statearr_38803_39889[(2)] = inst_38791);

(statearr_38803_39889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38797 === (3))){
var inst_38793 = (state_38796[(2)]);
var inst_38794 = cljs.core.async.close_BANG_(out);
var state_38796__$1 = (function (){var statearr_38804 = state_38796;
(statearr_38804[(9)] = inst_38793);

return statearr_38804;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38796__$1,inst_38794);
} else {
if((state_val_38797 === (2))){
var inst_38773 = (state_38796[(8)]);
var inst_38775 = (inst_38773 < n);
var state_38796__$1 = state_38796;
if(cljs.core.truth_(inst_38775)){
var statearr_38805_39891 = state_38796__$1;
(statearr_38805_39891[(1)] = (4));

} else {
var statearr_38806_39892 = state_38796__$1;
(statearr_38806_39892[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38797 === (11))){
var inst_38773 = (state_38796[(8)]);
var inst_38783 = (state_38796[(2)]);
var inst_38784 = (inst_38773 + (1));
var inst_38773__$1 = inst_38784;
var state_38796__$1 = (function (){var statearr_38807 = state_38796;
(statearr_38807[(10)] = inst_38783);

(statearr_38807[(8)] = inst_38773__$1);

return statearr_38807;
})();
var statearr_38808_39894 = state_38796__$1;
(statearr_38808_39894[(2)] = null);

(statearr_38808_39894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38797 === (9))){
var state_38796__$1 = state_38796;
var statearr_38809_39898 = state_38796__$1;
(statearr_38809_39898[(2)] = null);

(statearr_38809_39898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38797 === (5))){
var state_38796__$1 = state_38796;
var statearr_38810_39903 = state_38796__$1;
(statearr_38810_39903[(2)] = null);

(statearr_38810_39903[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38797 === (10))){
var inst_38788 = (state_38796[(2)]);
var state_38796__$1 = state_38796;
var statearr_38811_39907 = state_38796__$1;
(statearr_38811_39907[(2)] = inst_38788);

(statearr_38811_39907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38797 === (8))){
var inst_38778 = (state_38796[(7)]);
var state_38796__$1 = state_38796;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38796__$1,(11),out,inst_38778);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37598__auto__ = null;
var cljs$core$async$state_machine__37598__auto____0 = (function (){
var statearr_38812 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38812[(0)] = cljs$core$async$state_machine__37598__auto__);

(statearr_38812[(1)] = (1));

return statearr_38812;
});
var cljs$core$async$state_machine__37598__auto____1 = (function (state_38796){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_38796);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e38813){if((e38813 instanceof Object)){
var ex__37601__auto__ = e38813;
var statearr_38814_39911 = state_38796;
(statearr_38814_39911[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38796);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38813;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39913 = state_38796;
state_38796 = G__39913;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$state_machine__37598__auto__ = function(state_38796){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37598__auto____1.call(this,state_38796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37598__auto____0;
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37598__auto____1;
return cljs$core$async$state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_38815 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_38815[(6)] = c__37665__auto___39883);

return statearr_38815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38817 = (function (f,ch,meta38818){
this.f = f;
this.ch = ch;
this.meta38818 = meta38818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38819,meta38818__$1){
var self__ = this;
var _38819__$1 = this;
return (new cljs.core.async.t_cljs$core$async38817(self__.f,self__.ch,meta38818__$1));
}));

(cljs.core.async.t_cljs$core$async38817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38819){
var self__ = this;
var _38819__$1 = this;
return self__.meta38818;
}));

(cljs.core.async.t_cljs$core$async38817.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38817.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38817.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38817.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38817.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38820 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38820 = (function (f,ch,meta38818,_,fn1,meta38821){
this.f = f;
this.ch = ch;
this.meta38818 = meta38818;
this._ = _;
this.fn1 = fn1;
this.meta38821 = meta38821;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38820.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38822,meta38821__$1){
var self__ = this;
var _38822__$1 = this;
return (new cljs.core.async.t_cljs$core$async38820(self__.f,self__.ch,self__.meta38818,self__._,self__.fn1,meta38821__$1));
}));

(cljs.core.async.t_cljs$core$async38820.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38822){
var self__ = this;
var _38822__$1 = this;
return self__.meta38821;
}));

(cljs.core.async.t_cljs$core$async38820.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38820.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38820.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38820.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38816_SHARP_){
var G__38823 = (((p1__38816_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38816_SHARP_) : self__.f.call(null,p1__38816_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38823) : f1.call(null,G__38823));
});
}));

(cljs.core.async.t_cljs$core$async38820.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38818","meta38818",-776762431,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38817","cljs.core.async/t_cljs$core$async38817",-1668076680,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38821","meta38821",-1412987939,null)], null);
}));

(cljs.core.async.t_cljs$core$async38820.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38820.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38820");

(cljs.core.async.t_cljs$core$async38820.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38820");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38820.
 */
cljs.core.async.__GT_t_cljs$core$async38820 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38820(f__$1,ch__$1,meta38818__$1,___$2,fn1__$1,meta38821){
return (new cljs.core.async.t_cljs$core$async38820(f__$1,ch__$1,meta38818__$1,___$2,fn1__$1,meta38821));
});

}

return (new cljs.core.async.t_cljs$core$async38820(self__.f,self__.ch,self__.meta38818,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38824 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38824) : self__.f.call(null,G__38824));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38817.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38817.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38818","meta38818",-776762431,null)], null);
}));

(cljs.core.async.t_cljs$core$async38817.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38817");

(cljs.core.async.t_cljs$core$async38817.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38817");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38817.
 */
cljs.core.async.__GT_t_cljs$core$async38817 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38817(f__$1,ch__$1,meta38818){
return (new cljs.core.async.t_cljs$core$async38817(f__$1,ch__$1,meta38818));
});

}

return (new cljs.core.async.t_cljs$core$async38817(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38825 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38825 = (function (f,ch,meta38826){
this.f = f;
this.ch = ch;
this.meta38826 = meta38826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38827,meta38826__$1){
var self__ = this;
var _38827__$1 = this;
return (new cljs.core.async.t_cljs$core$async38825(self__.f,self__.ch,meta38826__$1));
}));

(cljs.core.async.t_cljs$core$async38825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38827){
var self__ = this;
var _38827__$1 = this;
return self__.meta38826;
}));

(cljs.core.async.t_cljs$core$async38825.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38825.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38825.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38825.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38825.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38825.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38825.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38826","meta38826",357826295,null)], null);
}));

(cljs.core.async.t_cljs$core$async38825.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38825.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38825");

(cljs.core.async.t_cljs$core$async38825.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38825");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38825.
 */
cljs.core.async.__GT_t_cljs$core$async38825 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38825(f__$1,ch__$1,meta38826){
return (new cljs.core.async.t_cljs$core$async38825(f__$1,ch__$1,meta38826));
});

}

return (new cljs.core.async.t_cljs$core$async38825(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38828 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38828 = (function (p,ch,meta38829){
this.p = p;
this.ch = ch;
this.meta38829 = meta38829;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38830,meta38829__$1){
var self__ = this;
var _38830__$1 = this;
return (new cljs.core.async.t_cljs$core$async38828(self__.p,self__.ch,meta38829__$1));
}));

(cljs.core.async.t_cljs$core$async38828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38830){
var self__ = this;
var _38830__$1 = this;
return self__.meta38829;
}));

(cljs.core.async.t_cljs$core$async38828.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38828.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38828.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38828.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38828.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38828.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38828.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38828.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38829","meta38829",1628892442,null)], null);
}));

(cljs.core.async.t_cljs$core$async38828.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38828.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38828");

(cljs.core.async.t_cljs$core$async38828.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38828");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38828.
 */
cljs.core.async.__GT_t_cljs$core$async38828 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38828(p__$1,ch__$1,meta38829){
return (new cljs.core.async.t_cljs$core$async38828(p__$1,ch__$1,meta38829));
});

}

return (new cljs.core.async.t_cljs$core$async38828(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__38832 = arguments.length;
switch (G__38832) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37665__auto___39952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_38853){
var state_val_38854 = (state_38853[(1)]);
if((state_val_38854 === (7))){
var inst_38849 = (state_38853[(2)]);
var state_38853__$1 = state_38853;
var statearr_38855_39954 = state_38853__$1;
(statearr_38855_39954[(2)] = inst_38849);

(statearr_38855_39954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (1))){
var state_38853__$1 = state_38853;
var statearr_38856_39957 = state_38853__$1;
(statearr_38856_39957[(2)] = null);

(statearr_38856_39957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (4))){
var inst_38835 = (state_38853[(7)]);
var inst_38835__$1 = (state_38853[(2)]);
var inst_38836 = (inst_38835__$1 == null);
var state_38853__$1 = (function (){var statearr_38857 = state_38853;
(statearr_38857[(7)] = inst_38835__$1);

return statearr_38857;
})();
if(cljs.core.truth_(inst_38836)){
var statearr_38858_39958 = state_38853__$1;
(statearr_38858_39958[(1)] = (5));

} else {
var statearr_38859_39962 = state_38853__$1;
(statearr_38859_39962[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (6))){
var inst_38835 = (state_38853[(7)]);
var inst_38840 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38835) : p.call(null,inst_38835));
var state_38853__$1 = state_38853;
if(cljs.core.truth_(inst_38840)){
var statearr_38860_39963 = state_38853__$1;
(statearr_38860_39963[(1)] = (8));

} else {
var statearr_38861_39964 = state_38853__$1;
(statearr_38861_39964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (3))){
var inst_38851 = (state_38853[(2)]);
var state_38853__$1 = state_38853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38853__$1,inst_38851);
} else {
if((state_val_38854 === (2))){
var state_38853__$1 = state_38853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38853__$1,(4),ch);
} else {
if((state_val_38854 === (11))){
var inst_38843 = (state_38853[(2)]);
var state_38853__$1 = state_38853;
var statearr_38862_39965 = state_38853__$1;
(statearr_38862_39965[(2)] = inst_38843);

(statearr_38862_39965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (9))){
var state_38853__$1 = state_38853;
var statearr_38863_39972 = state_38853__$1;
(statearr_38863_39972[(2)] = null);

(statearr_38863_39972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (5))){
var inst_38838 = cljs.core.async.close_BANG_(out);
var state_38853__$1 = state_38853;
var statearr_38864_39973 = state_38853__$1;
(statearr_38864_39973[(2)] = inst_38838);

(statearr_38864_39973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (10))){
var inst_38846 = (state_38853[(2)]);
var state_38853__$1 = (function (){var statearr_38865 = state_38853;
(statearr_38865[(8)] = inst_38846);

return statearr_38865;
})();
var statearr_38866_39974 = state_38853__$1;
(statearr_38866_39974[(2)] = null);

(statearr_38866_39974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38854 === (8))){
var inst_38835 = (state_38853[(7)]);
var state_38853__$1 = state_38853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38853__$1,(11),out,inst_38835);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37598__auto__ = null;
var cljs$core$async$state_machine__37598__auto____0 = (function (){
var statearr_38867 = [null,null,null,null,null,null,null,null,null];
(statearr_38867[(0)] = cljs$core$async$state_machine__37598__auto__);

(statearr_38867[(1)] = (1));

return statearr_38867;
});
var cljs$core$async$state_machine__37598__auto____1 = (function (state_38853){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_38853);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e38868){if((e38868 instanceof Object)){
var ex__37601__auto__ = e38868;
var statearr_38869_39979 = state_38853;
(statearr_38869_39979[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38868;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39980 = state_38853;
state_38853 = G__39980;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$state_machine__37598__auto__ = function(state_38853){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37598__auto____1.call(this,state_38853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37598__auto____0;
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37598__auto____1;
return cljs$core$async$state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_38870 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_38870[(6)] = c__37665__auto___39952);

return statearr_38870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38872 = arguments.length;
switch (G__38872) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37665__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_38934){
var state_val_38935 = (state_38934[(1)]);
if((state_val_38935 === (7))){
var inst_38930 = (state_38934[(2)]);
var state_38934__$1 = state_38934;
var statearr_38936_39992 = state_38934__$1;
(statearr_38936_39992[(2)] = inst_38930);

(statearr_38936_39992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (20))){
var inst_38900 = (state_38934[(7)]);
var inst_38911 = (state_38934[(2)]);
var inst_38912 = cljs.core.next(inst_38900);
var inst_38886 = inst_38912;
var inst_38887 = null;
var inst_38888 = (0);
var inst_38889 = (0);
var state_38934__$1 = (function (){var statearr_38937 = state_38934;
(statearr_38937[(8)] = inst_38911);

(statearr_38937[(9)] = inst_38888);

(statearr_38937[(10)] = inst_38886);

(statearr_38937[(11)] = inst_38889);

(statearr_38937[(12)] = inst_38887);

return statearr_38937;
})();
var statearr_38938_39994 = state_38934__$1;
(statearr_38938_39994[(2)] = null);

(statearr_38938_39994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (1))){
var state_38934__$1 = state_38934;
var statearr_38939_39997 = state_38934__$1;
(statearr_38939_39997[(2)] = null);

(statearr_38939_39997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (4))){
var inst_38875 = (state_38934[(13)]);
var inst_38875__$1 = (state_38934[(2)]);
var inst_38876 = (inst_38875__$1 == null);
var state_38934__$1 = (function (){var statearr_38940 = state_38934;
(statearr_38940[(13)] = inst_38875__$1);

return statearr_38940;
})();
if(cljs.core.truth_(inst_38876)){
var statearr_38941_39999 = state_38934__$1;
(statearr_38941_39999[(1)] = (5));

} else {
var statearr_38942_40000 = state_38934__$1;
(statearr_38942_40000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (15))){
var state_38934__$1 = state_38934;
var statearr_38946_40001 = state_38934__$1;
(statearr_38946_40001[(2)] = null);

(statearr_38946_40001[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (21))){
var state_38934__$1 = state_38934;
var statearr_38947_40002 = state_38934__$1;
(statearr_38947_40002[(2)] = null);

(statearr_38947_40002[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (13))){
var inst_38888 = (state_38934[(9)]);
var inst_38886 = (state_38934[(10)]);
var inst_38889 = (state_38934[(11)]);
var inst_38887 = (state_38934[(12)]);
var inst_38896 = (state_38934[(2)]);
var inst_38897 = (inst_38889 + (1));
var tmp38943 = inst_38888;
var tmp38944 = inst_38886;
var tmp38945 = inst_38887;
var inst_38886__$1 = tmp38944;
var inst_38887__$1 = tmp38945;
var inst_38888__$1 = tmp38943;
var inst_38889__$1 = inst_38897;
var state_38934__$1 = (function (){var statearr_38948 = state_38934;
(statearr_38948[(9)] = inst_38888__$1);

(statearr_38948[(10)] = inst_38886__$1);

(statearr_38948[(11)] = inst_38889__$1);

(statearr_38948[(12)] = inst_38887__$1);

(statearr_38948[(14)] = inst_38896);

return statearr_38948;
})();
var statearr_38949_40007 = state_38934__$1;
(statearr_38949_40007[(2)] = null);

(statearr_38949_40007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (22))){
var state_38934__$1 = state_38934;
var statearr_38950_40011 = state_38934__$1;
(statearr_38950_40011[(2)] = null);

(statearr_38950_40011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (6))){
var inst_38875 = (state_38934[(13)]);
var inst_38884 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38875) : f.call(null,inst_38875));
var inst_38885 = cljs.core.seq(inst_38884);
var inst_38886 = inst_38885;
var inst_38887 = null;
var inst_38888 = (0);
var inst_38889 = (0);
var state_38934__$1 = (function (){var statearr_38951 = state_38934;
(statearr_38951[(9)] = inst_38888);

(statearr_38951[(10)] = inst_38886);

(statearr_38951[(11)] = inst_38889);

(statearr_38951[(12)] = inst_38887);

return statearr_38951;
})();
var statearr_38952_40013 = state_38934__$1;
(statearr_38952_40013[(2)] = null);

(statearr_38952_40013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (17))){
var inst_38900 = (state_38934[(7)]);
var inst_38904 = cljs.core.chunk_first(inst_38900);
var inst_38905 = cljs.core.chunk_rest(inst_38900);
var inst_38906 = cljs.core.count(inst_38904);
var inst_38886 = inst_38905;
var inst_38887 = inst_38904;
var inst_38888 = inst_38906;
var inst_38889 = (0);
var state_38934__$1 = (function (){var statearr_38953 = state_38934;
(statearr_38953[(9)] = inst_38888);

(statearr_38953[(10)] = inst_38886);

(statearr_38953[(11)] = inst_38889);

(statearr_38953[(12)] = inst_38887);

return statearr_38953;
})();
var statearr_38954_40020 = state_38934__$1;
(statearr_38954_40020[(2)] = null);

(statearr_38954_40020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (3))){
var inst_38932 = (state_38934[(2)]);
var state_38934__$1 = state_38934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38934__$1,inst_38932);
} else {
if((state_val_38935 === (12))){
var inst_38920 = (state_38934[(2)]);
var state_38934__$1 = state_38934;
var statearr_38955_40026 = state_38934__$1;
(statearr_38955_40026[(2)] = inst_38920);

(statearr_38955_40026[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (2))){
var state_38934__$1 = state_38934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38934__$1,(4),in$);
} else {
if((state_val_38935 === (23))){
var inst_38928 = (state_38934[(2)]);
var state_38934__$1 = state_38934;
var statearr_38956_40028 = state_38934__$1;
(statearr_38956_40028[(2)] = inst_38928);

(statearr_38956_40028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (19))){
var inst_38915 = (state_38934[(2)]);
var state_38934__$1 = state_38934;
var statearr_38957_40030 = state_38934__$1;
(statearr_38957_40030[(2)] = inst_38915);

(statearr_38957_40030[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (11))){
var inst_38900 = (state_38934[(7)]);
var inst_38886 = (state_38934[(10)]);
var inst_38900__$1 = cljs.core.seq(inst_38886);
var state_38934__$1 = (function (){var statearr_38958 = state_38934;
(statearr_38958[(7)] = inst_38900__$1);

return statearr_38958;
})();
if(inst_38900__$1){
var statearr_38959_40034 = state_38934__$1;
(statearr_38959_40034[(1)] = (14));

} else {
var statearr_38960_40035 = state_38934__$1;
(statearr_38960_40035[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (9))){
var inst_38922 = (state_38934[(2)]);
var inst_38923 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38934__$1 = (function (){var statearr_38961 = state_38934;
(statearr_38961[(15)] = inst_38922);

return statearr_38961;
})();
if(cljs.core.truth_(inst_38923)){
var statearr_38962_40038 = state_38934__$1;
(statearr_38962_40038[(1)] = (21));

} else {
var statearr_38963_40039 = state_38934__$1;
(statearr_38963_40039[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (5))){
var inst_38878 = cljs.core.async.close_BANG_(out);
var state_38934__$1 = state_38934;
var statearr_38964_40041 = state_38934__$1;
(statearr_38964_40041[(2)] = inst_38878);

(statearr_38964_40041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (14))){
var inst_38900 = (state_38934[(7)]);
var inst_38902 = cljs.core.chunked_seq_QMARK_(inst_38900);
var state_38934__$1 = state_38934;
if(inst_38902){
var statearr_38965_40045 = state_38934__$1;
(statearr_38965_40045[(1)] = (17));

} else {
var statearr_38966_40046 = state_38934__$1;
(statearr_38966_40046[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (16))){
var inst_38918 = (state_38934[(2)]);
var state_38934__$1 = state_38934;
var statearr_38967_40047 = state_38934__$1;
(statearr_38967_40047[(2)] = inst_38918);

(statearr_38967_40047[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38935 === (10))){
var inst_38889 = (state_38934[(11)]);
var inst_38887 = (state_38934[(12)]);
var inst_38894 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38887,inst_38889);
var state_38934__$1 = state_38934;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38934__$1,(13),out,inst_38894);
} else {
if((state_val_38935 === (18))){
var inst_38900 = (state_38934[(7)]);
var inst_38909 = cljs.core.first(inst_38900);
var state_38934__$1 = state_38934;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38934__$1,(20),out,inst_38909);
} else {
if((state_val_38935 === (8))){
var inst_38888 = (state_38934[(9)]);
var inst_38889 = (state_38934[(11)]);
var inst_38891 = (inst_38889 < inst_38888);
var inst_38892 = inst_38891;
var state_38934__$1 = state_38934;
if(cljs.core.truth_(inst_38892)){
var statearr_38968_40052 = state_38934__$1;
(statearr_38968_40052[(1)] = (10));

} else {
var statearr_38969_40053 = state_38934__$1;
(statearr_38969_40053[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37598__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37598__auto____0 = (function (){
var statearr_38970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38970[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37598__auto__);

(statearr_38970[(1)] = (1));

return statearr_38970;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37598__auto____1 = (function (state_38934){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_38934);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e38971){if((e38971 instanceof Object)){
var ex__37601__auto__ = e38971;
var statearr_38972_40064 = state_38934;
(statearr_38972_40064[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38971;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40067 = state_38934;
state_38934 = G__40067;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37598__auto__ = function(state_38934){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37598__auto____1.call(this,state_38934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37598__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37598__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_38973 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_38973[(6)] = c__37665__auto__);

return statearr_38973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));

return c__37665__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38975 = arguments.length;
switch (G__38975) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__38977 = arguments.length;
switch (G__38977) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__38979 = arguments.length;
switch (G__38979) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37665__auto___40083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_39003){
var state_val_39004 = (state_39003[(1)]);
if((state_val_39004 === (7))){
var inst_38998 = (state_39003[(2)]);
var state_39003__$1 = state_39003;
var statearr_39005_40086 = state_39003__$1;
(statearr_39005_40086[(2)] = inst_38998);

(statearr_39005_40086[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (1))){
var inst_38980 = null;
var state_39003__$1 = (function (){var statearr_39006 = state_39003;
(statearr_39006[(7)] = inst_38980);

return statearr_39006;
})();
var statearr_39007_40087 = state_39003__$1;
(statearr_39007_40087[(2)] = null);

(statearr_39007_40087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (4))){
var inst_38983 = (state_39003[(8)]);
var inst_38983__$1 = (state_39003[(2)]);
var inst_38984 = (inst_38983__$1 == null);
var inst_38985 = cljs.core.not(inst_38984);
var state_39003__$1 = (function (){var statearr_39008 = state_39003;
(statearr_39008[(8)] = inst_38983__$1);

return statearr_39008;
})();
if(inst_38985){
var statearr_39009_40089 = state_39003__$1;
(statearr_39009_40089[(1)] = (5));

} else {
var statearr_39010_40090 = state_39003__$1;
(statearr_39010_40090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (6))){
var state_39003__$1 = state_39003;
var statearr_39011_40093 = state_39003__$1;
(statearr_39011_40093[(2)] = null);

(statearr_39011_40093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (3))){
var inst_39000 = (state_39003[(2)]);
var inst_39001 = cljs.core.async.close_BANG_(out);
var state_39003__$1 = (function (){var statearr_39012 = state_39003;
(statearr_39012[(9)] = inst_39000);

return statearr_39012;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39003__$1,inst_39001);
} else {
if((state_val_39004 === (2))){
var state_39003__$1 = state_39003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39003__$1,(4),ch);
} else {
if((state_val_39004 === (11))){
var inst_38983 = (state_39003[(8)]);
var inst_38992 = (state_39003[(2)]);
var inst_38980 = inst_38983;
var state_39003__$1 = (function (){var statearr_39013 = state_39003;
(statearr_39013[(7)] = inst_38980);

(statearr_39013[(10)] = inst_38992);

return statearr_39013;
})();
var statearr_39014_40096 = state_39003__$1;
(statearr_39014_40096[(2)] = null);

(statearr_39014_40096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (9))){
var inst_38983 = (state_39003[(8)]);
var state_39003__$1 = state_39003;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39003__$1,(11),out,inst_38983);
} else {
if((state_val_39004 === (5))){
var inst_38980 = (state_39003[(7)]);
var inst_38983 = (state_39003[(8)]);
var inst_38987 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38983,inst_38980);
var state_39003__$1 = state_39003;
if(inst_38987){
var statearr_39016_40100 = state_39003__$1;
(statearr_39016_40100[(1)] = (8));

} else {
var statearr_39017_40101 = state_39003__$1;
(statearr_39017_40101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (10))){
var inst_38995 = (state_39003[(2)]);
var state_39003__$1 = state_39003;
var statearr_39018_40103 = state_39003__$1;
(statearr_39018_40103[(2)] = inst_38995);

(statearr_39018_40103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39004 === (8))){
var inst_38980 = (state_39003[(7)]);
var tmp39015 = inst_38980;
var inst_38980__$1 = tmp39015;
var state_39003__$1 = (function (){var statearr_39019 = state_39003;
(statearr_39019[(7)] = inst_38980__$1);

return statearr_39019;
})();
var statearr_39020_40105 = state_39003__$1;
(statearr_39020_40105[(2)] = null);

(statearr_39020_40105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37598__auto__ = null;
var cljs$core$async$state_machine__37598__auto____0 = (function (){
var statearr_39021 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39021[(0)] = cljs$core$async$state_machine__37598__auto__);

(statearr_39021[(1)] = (1));

return statearr_39021;
});
var cljs$core$async$state_machine__37598__auto____1 = (function (state_39003){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_39003);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e39022){if((e39022 instanceof Object)){
var ex__37601__auto__ = e39022;
var statearr_39023_40111 = state_39003;
(statearr_39023_40111[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39022;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40112 = state_39003;
state_39003 = G__40112;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$state_machine__37598__auto__ = function(state_39003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37598__auto____1.call(this,state_39003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37598__auto____0;
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37598__auto____1;
return cljs$core$async$state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_39024 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_39024[(6)] = c__37665__auto___40083);

return statearr_39024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39026 = arguments.length;
switch (G__39026) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37665__auto___40119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_39064){
var state_val_39065 = (state_39064[(1)]);
if((state_val_39065 === (7))){
var inst_39060 = (state_39064[(2)]);
var state_39064__$1 = state_39064;
var statearr_39066_40122 = state_39064__$1;
(statearr_39066_40122[(2)] = inst_39060);

(statearr_39066_40122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (1))){
var inst_39027 = (new Array(n));
var inst_39028 = inst_39027;
var inst_39029 = (0);
var state_39064__$1 = (function (){var statearr_39067 = state_39064;
(statearr_39067[(7)] = inst_39028);

(statearr_39067[(8)] = inst_39029);

return statearr_39067;
})();
var statearr_39068_40125 = state_39064__$1;
(statearr_39068_40125[(2)] = null);

(statearr_39068_40125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (4))){
var inst_39032 = (state_39064[(9)]);
var inst_39032__$1 = (state_39064[(2)]);
var inst_39033 = (inst_39032__$1 == null);
var inst_39034 = cljs.core.not(inst_39033);
var state_39064__$1 = (function (){var statearr_39069 = state_39064;
(statearr_39069[(9)] = inst_39032__$1);

return statearr_39069;
})();
if(inst_39034){
var statearr_39070_40127 = state_39064__$1;
(statearr_39070_40127[(1)] = (5));

} else {
var statearr_39071_40129 = state_39064__$1;
(statearr_39071_40129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (15))){
var inst_39054 = (state_39064[(2)]);
var state_39064__$1 = state_39064;
var statearr_39072_40131 = state_39064__$1;
(statearr_39072_40131[(2)] = inst_39054);

(statearr_39072_40131[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (13))){
var state_39064__$1 = state_39064;
var statearr_39073_40132 = state_39064__$1;
(statearr_39073_40132[(2)] = null);

(statearr_39073_40132[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (6))){
var inst_39029 = (state_39064[(8)]);
var inst_39050 = (inst_39029 > (0));
var state_39064__$1 = state_39064;
if(cljs.core.truth_(inst_39050)){
var statearr_39074_40136 = state_39064__$1;
(statearr_39074_40136[(1)] = (12));

} else {
var statearr_39075_40137 = state_39064__$1;
(statearr_39075_40137[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (3))){
var inst_39062 = (state_39064[(2)]);
var state_39064__$1 = state_39064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39064__$1,inst_39062);
} else {
if((state_val_39065 === (12))){
var inst_39028 = (state_39064[(7)]);
var inst_39052 = cljs.core.vec(inst_39028);
var state_39064__$1 = state_39064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39064__$1,(15),out,inst_39052);
} else {
if((state_val_39065 === (2))){
var state_39064__$1 = state_39064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39064__$1,(4),ch);
} else {
if((state_val_39065 === (11))){
var inst_39044 = (state_39064[(2)]);
var inst_39045 = (new Array(n));
var inst_39028 = inst_39045;
var inst_39029 = (0);
var state_39064__$1 = (function (){var statearr_39076 = state_39064;
(statearr_39076[(7)] = inst_39028);

(statearr_39076[(8)] = inst_39029);

(statearr_39076[(10)] = inst_39044);

return statearr_39076;
})();
var statearr_39077_40142 = state_39064__$1;
(statearr_39077_40142[(2)] = null);

(statearr_39077_40142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (9))){
var inst_39028 = (state_39064[(7)]);
var inst_39042 = cljs.core.vec(inst_39028);
var state_39064__$1 = state_39064;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39064__$1,(11),out,inst_39042);
} else {
if((state_val_39065 === (5))){
var inst_39028 = (state_39064[(7)]);
var inst_39032 = (state_39064[(9)]);
var inst_39029 = (state_39064[(8)]);
var inst_39037 = (state_39064[(11)]);
var inst_39036 = (inst_39028[inst_39029] = inst_39032);
var inst_39037__$1 = (inst_39029 + (1));
var inst_39038 = (inst_39037__$1 < n);
var state_39064__$1 = (function (){var statearr_39078 = state_39064;
(statearr_39078[(11)] = inst_39037__$1);

(statearr_39078[(12)] = inst_39036);

return statearr_39078;
})();
if(cljs.core.truth_(inst_39038)){
var statearr_39079_40157 = state_39064__$1;
(statearr_39079_40157[(1)] = (8));

} else {
var statearr_39080_40158 = state_39064__$1;
(statearr_39080_40158[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (14))){
var inst_39057 = (state_39064[(2)]);
var inst_39058 = cljs.core.async.close_BANG_(out);
var state_39064__$1 = (function (){var statearr_39082 = state_39064;
(statearr_39082[(13)] = inst_39057);

return statearr_39082;
})();
var statearr_39083_40169 = state_39064__$1;
(statearr_39083_40169[(2)] = inst_39058);

(statearr_39083_40169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (10))){
var inst_39048 = (state_39064[(2)]);
var state_39064__$1 = state_39064;
var statearr_39084_40171 = state_39064__$1;
(statearr_39084_40171[(2)] = inst_39048);

(statearr_39084_40171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39065 === (8))){
var inst_39028 = (state_39064[(7)]);
var inst_39037 = (state_39064[(11)]);
var tmp39081 = inst_39028;
var inst_39028__$1 = tmp39081;
var inst_39029 = inst_39037;
var state_39064__$1 = (function (){var statearr_39085 = state_39064;
(statearr_39085[(7)] = inst_39028__$1);

(statearr_39085[(8)] = inst_39029);

return statearr_39085;
})();
var statearr_39086_40173 = state_39064__$1;
(statearr_39086_40173[(2)] = null);

(statearr_39086_40173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37598__auto__ = null;
var cljs$core$async$state_machine__37598__auto____0 = (function (){
var statearr_39087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39087[(0)] = cljs$core$async$state_machine__37598__auto__);

(statearr_39087[(1)] = (1));

return statearr_39087;
});
var cljs$core$async$state_machine__37598__auto____1 = (function (state_39064){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_39064);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e39088){if((e39088 instanceof Object)){
var ex__37601__auto__ = e39088;
var statearr_39089_40177 = state_39064;
(statearr_39089_40177[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39088;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40179 = state_39064;
state_39064 = G__40179;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$state_machine__37598__auto__ = function(state_39064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37598__auto____1.call(this,state_39064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37598__auto____0;
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37598__auto____1;
return cljs$core$async$state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_39090 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_39090[(6)] = c__37665__auto___40119);

return statearr_39090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39092 = arguments.length;
switch (G__39092) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__37665__auto___40188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37666__auto__ = (function (){var switch__37597__auto__ = (function (state_39134){
var state_val_39135 = (state_39134[(1)]);
if((state_val_39135 === (7))){
var inst_39130 = (state_39134[(2)]);
var state_39134__$1 = state_39134;
var statearr_39136_40193 = state_39134__$1;
(statearr_39136_40193[(2)] = inst_39130);

(statearr_39136_40193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (1))){
var inst_39093 = [];
var inst_39094 = inst_39093;
var inst_39095 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39134__$1 = (function (){var statearr_39137 = state_39134;
(statearr_39137[(7)] = inst_39094);

(statearr_39137[(8)] = inst_39095);

return statearr_39137;
})();
var statearr_39138_40195 = state_39134__$1;
(statearr_39138_40195[(2)] = null);

(statearr_39138_40195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (4))){
var inst_39098 = (state_39134[(9)]);
var inst_39098__$1 = (state_39134[(2)]);
var inst_39099 = (inst_39098__$1 == null);
var inst_39100 = cljs.core.not(inst_39099);
var state_39134__$1 = (function (){var statearr_39139 = state_39134;
(statearr_39139[(9)] = inst_39098__$1);

return statearr_39139;
})();
if(inst_39100){
var statearr_39140_40202 = state_39134__$1;
(statearr_39140_40202[(1)] = (5));

} else {
var statearr_39141_40203 = state_39134__$1;
(statearr_39141_40203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (15))){
var inst_39124 = (state_39134[(2)]);
var state_39134__$1 = state_39134;
var statearr_39142_40205 = state_39134__$1;
(statearr_39142_40205[(2)] = inst_39124);

(statearr_39142_40205[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (13))){
var state_39134__$1 = state_39134;
var statearr_39143_40209 = state_39134__$1;
(statearr_39143_40209[(2)] = null);

(statearr_39143_40209[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (6))){
var inst_39094 = (state_39134[(7)]);
var inst_39119 = inst_39094.length;
var inst_39120 = (inst_39119 > (0));
var state_39134__$1 = state_39134;
if(cljs.core.truth_(inst_39120)){
var statearr_39144_40216 = state_39134__$1;
(statearr_39144_40216[(1)] = (12));

} else {
var statearr_39145_40223 = state_39134__$1;
(statearr_39145_40223[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (3))){
var inst_39132 = (state_39134[(2)]);
var state_39134__$1 = state_39134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39134__$1,inst_39132);
} else {
if((state_val_39135 === (12))){
var inst_39094 = (state_39134[(7)]);
var inst_39122 = cljs.core.vec(inst_39094);
var state_39134__$1 = state_39134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39134__$1,(15),out,inst_39122);
} else {
if((state_val_39135 === (2))){
var state_39134__$1 = state_39134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39134__$1,(4),ch);
} else {
if((state_val_39135 === (11))){
var inst_39102 = (state_39134[(10)]);
var inst_39098 = (state_39134[(9)]);
var inst_39112 = (state_39134[(2)]);
var inst_39113 = [];
var inst_39114 = inst_39113.push(inst_39098);
var inst_39094 = inst_39113;
var inst_39095 = inst_39102;
var state_39134__$1 = (function (){var statearr_39146 = state_39134;
(statearr_39146[(7)] = inst_39094);

(statearr_39146[(11)] = inst_39112);

(statearr_39146[(8)] = inst_39095);

(statearr_39146[(12)] = inst_39114);

return statearr_39146;
})();
var statearr_39147_40237 = state_39134__$1;
(statearr_39147_40237[(2)] = null);

(statearr_39147_40237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (9))){
var inst_39094 = (state_39134[(7)]);
var inst_39110 = cljs.core.vec(inst_39094);
var state_39134__$1 = state_39134;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39134__$1,(11),out,inst_39110);
} else {
if((state_val_39135 === (5))){
var inst_39102 = (state_39134[(10)]);
var inst_39098 = (state_39134[(9)]);
var inst_39095 = (state_39134[(8)]);
var inst_39102__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39098) : f.call(null,inst_39098));
var inst_39103 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39102__$1,inst_39095);
var inst_39104 = cljs.core.keyword_identical_QMARK_(inst_39095,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39105 = ((inst_39103) || (inst_39104));
var state_39134__$1 = (function (){var statearr_39148 = state_39134;
(statearr_39148[(10)] = inst_39102__$1);

return statearr_39148;
})();
if(cljs.core.truth_(inst_39105)){
var statearr_39149_40242 = state_39134__$1;
(statearr_39149_40242[(1)] = (8));

} else {
var statearr_39150_40244 = state_39134__$1;
(statearr_39150_40244[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (14))){
var inst_39127 = (state_39134[(2)]);
var inst_39128 = cljs.core.async.close_BANG_(out);
var state_39134__$1 = (function (){var statearr_39152 = state_39134;
(statearr_39152[(13)] = inst_39127);

return statearr_39152;
})();
var statearr_39153_40248 = state_39134__$1;
(statearr_39153_40248[(2)] = inst_39128);

(statearr_39153_40248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (10))){
var inst_39117 = (state_39134[(2)]);
var state_39134__$1 = state_39134;
var statearr_39154_40249 = state_39134__$1;
(statearr_39154_40249[(2)] = inst_39117);

(statearr_39154_40249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39135 === (8))){
var inst_39094 = (state_39134[(7)]);
var inst_39102 = (state_39134[(10)]);
var inst_39098 = (state_39134[(9)]);
var inst_39107 = inst_39094.push(inst_39098);
var tmp39151 = inst_39094;
var inst_39094__$1 = tmp39151;
var inst_39095 = inst_39102;
var state_39134__$1 = (function (){var statearr_39155 = state_39134;
(statearr_39155[(7)] = inst_39094__$1);

(statearr_39155[(14)] = inst_39107);

(statearr_39155[(8)] = inst_39095);

return statearr_39155;
})();
var statearr_39156_40253 = state_39134__$1;
(statearr_39156_40253[(2)] = null);

(statearr_39156_40253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__37598__auto__ = null;
var cljs$core$async$state_machine__37598__auto____0 = (function (){
var statearr_39157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39157[(0)] = cljs$core$async$state_machine__37598__auto__);

(statearr_39157[(1)] = (1));

return statearr_39157;
});
var cljs$core$async$state_machine__37598__auto____1 = (function (state_39134){
while(true){
var ret_value__37599__auto__ = (function (){try{while(true){
var result__37600__auto__ = switch__37597__auto__(state_39134);
if(cljs.core.keyword_identical_QMARK_(result__37600__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37600__auto__;
}
break;
}
}catch (e39158){if((e39158 instanceof Object)){
var ex__37601__auto__ = e39158;
var statearr_39159_40258 = state_39134;
(statearr_39159_40258[(5)] = ex__37601__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39158;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37599__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40260 = state_39134;
state_39134 = G__40260;
continue;
} else {
return ret_value__37599__auto__;
}
break;
}
});
cljs$core$async$state_machine__37598__auto__ = function(state_39134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37598__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37598__auto____1.call(this,state_39134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37598__auto____0;
cljs$core$async$state_machine__37598__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37598__auto____1;
return cljs$core$async$state_machine__37598__auto__;
})()
})();
var state__37667__auto__ = (function (){var statearr_39160 = (f__37666__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37666__auto__.cljs$core$IFn$_invoke$arity$0() : f__37666__auto__.call(null));
(statearr_39160[(6)] = c__37665__auto___40188);

return statearr_39160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37667__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
