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
var G__37558 = arguments.length;
switch (G__37558) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37561 = (function (f,blockable,meta37562){
this.f = f;
this.blockable = blockable;
this.meta37562 = meta37562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37563,meta37562__$1){
var self__ = this;
var _37563__$1 = this;
return (new cljs.core.async.t_cljs$core$async37561(self__.f,self__.blockable,meta37562__$1));
}));

(cljs.core.async.t_cljs$core$async37561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37563){
var self__ = this;
var _37563__$1 = this;
return self__.meta37562;
}));

(cljs.core.async.t_cljs$core$async37561.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37561.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37561.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37561.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37562","meta37562",-995302129,null)], null);
}));

(cljs.core.async.t_cljs$core$async37561.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37561");

(cljs.core.async.t_cljs$core$async37561.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37561");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37561.
 */
cljs.core.async.__GT_t_cljs$core$async37561 = (function cljs$core$async$__GT_t_cljs$core$async37561(f__$1,blockable__$1,meta37562){
return (new cljs.core.async.t_cljs$core$async37561(f__$1,blockable__$1,meta37562));
});

}

return (new cljs.core.async.t_cljs$core$async37561(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37573 = arguments.length;
switch (G__37573) {
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
var G__37579 = arguments.length;
switch (G__37579) {
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
var G__37584 = arguments.length;
switch (G__37584) {
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
var val_40341 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40341) : fn1.call(null,val_40341));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40341) : fn1.call(null,val_40341));
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
var G__37589 = arguments.length;
switch (G__37589) {
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
var n__4666__auto___40386 = n;
var x_40387 = (0);
while(true){
if((x_40387 < n__4666__auto___40386)){
(a[x_40387] = x_40387);

var G__40393 = (x_40387 + (1));
x_40387 = G__40393;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37600 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37600 = (function (flag,meta37601){
this.flag = flag;
this.meta37601 = meta37601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37602,meta37601__$1){
var self__ = this;
var _37602__$1 = this;
return (new cljs.core.async.t_cljs$core$async37600(self__.flag,meta37601__$1));
}));

(cljs.core.async.t_cljs$core$async37600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37602){
var self__ = this;
var _37602__$1 = this;
return self__.meta37601;
}));

(cljs.core.async.t_cljs$core$async37600.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37600.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37600.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37600.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37601","meta37601",1806693356,null)], null);
}));

(cljs.core.async.t_cljs$core$async37600.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37600");

(cljs.core.async.t_cljs$core$async37600.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37600");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37600.
 */
cljs.core.async.__GT_t_cljs$core$async37600 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37600(flag__$1,meta37601){
return (new cljs.core.async.t_cljs$core$async37600(flag__$1,meta37601));
});

}

return (new cljs.core.async.t_cljs$core$async37600(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37614 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37614 = (function (flag,cb,meta37615){
this.flag = flag;
this.cb = cb;
this.meta37615 = meta37615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37616,meta37615__$1){
var self__ = this;
var _37616__$1 = this;
return (new cljs.core.async.t_cljs$core$async37614(self__.flag,self__.cb,meta37615__$1));
}));

(cljs.core.async.t_cljs$core$async37614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37616){
var self__ = this;
var _37616__$1 = this;
return self__.meta37615;
}));

(cljs.core.async.t_cljs$core$async37614.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37614.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37614.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37614.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37615","meta37615",1854631108,null)], null);
}));

(cljs.core.async.t_cljs$core$async37614.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37614");

(cljs.core.async.t_cljs$core$async37614.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async37614");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37614.
 */
cljs.core.async.__GT_t_cljs$core$async37614 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37614(flag__$1,cb__$1,meta37615){
return (new cljs.core.async.t_cljs$core$async37614(flag__$1,cb__$1,meta37615));
});

}

return (new cljs.core.async.t_cljs$core$async37614(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37623_SHARP_){
var G__37628 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37623_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37628) : fret.call(null,G__37628));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37624_SHARP_){
var G__37629 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37624_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37629) : fret.call(null,G__37629));
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
var G__40432 = (i + (1));
i = G__40432;
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
var len__4789__auto___40444 = arguments.length;
var i__4790__auto___40445 = (0);
while(true){
if((i__4790__auto___40445 < len__4789__auto___40444)){
args__4795__auto__.push((arguments[i__4790__auto___40445]));

var G__40446 = (i__4790__auto___40445 + (1));
i__4790__auto___40445 = G__40446;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37635){
var map__37636 = p__37635;
var map__37636__$1 = (((((!((map__37636 == null))))?(((((map__37636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37636):map__37636);
var opts = map__37636__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37632){
var G__37633 = cljs.core.first(seq37632);
var seq37632__$1 = cljs.core.next(seq37632);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37633,seq37632__$1);
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
var G__37647 = arguments.length;
switch (G__37647) {
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
var c__37470__auto___40460 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_37737){
var state_val_37738 = (state_37737[(1)]);
if((state_val_37738 === (7))){
var inst_37730 = (state_37737[(2)]);
var state_37737__$1 = state_37737;
var statearr_37742_40462 = state_37737__$1;
(statearr_37742_40462[(2)] = inst_37730);

(statearr_37742_40462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37738 === (1))){
var state_37737__$1 = state_37737;
var statearr_37744_40464 = state_37737__$1;
(statearr_37744_40464[(2)] = null);

(statearr_37744_40464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37738 === (4))){
var inst_37689 = (state_37737[(7)]);
var inst_37689__$1 = (state_37737[(2)]);
var inst_37707 = (inst_37689__$1 == null);
var state_37737__$1 = (function (){var statearr_37750 = state_37737;
(statearr_37750[(7)] = inst_37689__$1);

return statearr_37750;
})();
if(cljs.core.truth_(inst_37707)){
var statearr_37752_40467 = state_37737__$1;
(statearr_37752_40467[(1)] = (5));

} else {
var statearr_37753_40468 = state_37737__$1;
(statearr_37753_40468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37738 === (13))){
var state_37737__$1 = state_37737;
var statearr_37755_40469 = state_37737__$1;
(statearr_37755_40469[(2)] = null);

(statearr_37755_40469[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37738 === (6))){
var inst_37689 = (state_37737[(7)]);
var state_37737__$1 = state_37737;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37737__$1,(11),to,inst_37689);
} else {
if((state_val_37738 === (3))){
var inst_37734 = (state_37737[(2)]);
var state_37737__$1 = state_37737;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37737__$1,inst_37734);
} else {
if((state_val_37738 === (12))){
var state_37737__$1 = state_37737;
var statearr_37762_40473 = state_37737__$1;
(statearr_37762_40473[(2)] = null);

(statearr_37762_40473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37738 === (2))){
var state_37737__$1 = state_37737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37737__$1,(4),from);
} else {
if((state_val_37738 === (11))){
var inst_37721 = (state_37737[(2)]);
var state_37737__$1 = state_37737;
if(cljs.core.truth_(inst_37721)){
var statearr_37764_40476 = state_37737__$1;
(statearr_37764_40476[(1)] = (12));

} else {
var statearr_37765_40484 = state_37737__$1;
(statearr_37765_40484[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37738 === (9))){
var state_37737__$1 = state_37737;
var statearr_37766_40486 = state_37737__$1;
(statearr_37766_40486[(2)] = null);

(statearr_37766_40486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37738 === (5))){
var state_37737__$1 = state_37737;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37767_40487 = state_37737__$1;
(statearr_37767_40487[(1)] = (8));

} else {
var statearr_37769_40488 = state_37737__$1;
(statearr_37769_40488[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37738 === (14))){
var inst_37727 = (state_37737[(2)]);
var state_37737__$1 = state_37737;
var statearr_37773_40490 = state_37737__$1;
(statearr_37773_40490[(2)] = inst_37727);

(statearr_37773_40490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37738 === (10))){
var inst_37718 = (state_37737[(2)]);
var state_37737__$1 = state_37737;
var statearr_37777_40491 = state_37737__$1;
(statearr_37777_40491[(2)] = inst_37718);

(statearr_37777_40491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37738 === (8))){
var inst_37715 = cljs.core.async.close_BANG_(to);
var state_37737__$1 = state_37737;
var statearr_37779_40494 = state_37737__$1;
(statearr_37779_40494[(2)] = inst_37715);

(statearr_37779_40494[(1)] = (10));


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
var cljs$core$async$state_machine__37220__auto__ = null;
var cljs$core$async$state_machine__37220__auto____0 = (function (){
var statearr_37781 = [null,null,null,null,null,null,null,null];
(statearr_37781[(0)] = cljs$core$async$state_machine__37220__auto__);

(statearr_37781[(1)] = (1));

return statearr_37781;
});
var cljs$core$async$state_machine__37220__auto____1 = (function (state_37737){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_37737);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e37783){if((e37783 instanceof Object)){
var ex__37223__auto__ = e37783;
var statearr_37784_40497 = state_37737;
(statearr_37784_40497[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37783;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40498 = state_37737;
state_37737 = G__40498;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$state_machine__37220__auto__ = function(state_37737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37220__auto____1.call(this,state_37737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37220__auto____0;
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37220__auto____1;
return cljs$core$async$state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_37787 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_37787[(6)] = c__37470__auto___40460);

return statearr_37787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
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
var process = (function (p__37800){
var vec__37801 = p__37800;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37801,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37801,(1),null);
var job = vec__37801;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__37470__auto___40511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_37811){
var state_val_37812 = (state_37811[(1)]);
if((state_val_37812 === (1))){
var state_37811__$1 = state_37811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37811__$1,(2),res,v);
} else {
if((state_val_37812 === (2))){
var inst_37807 = (state_37811[(2)]);
var inst_37808 = cljs.core.async.close_BANG_(res);
var state_37811__$1 = (function (){var statearr_37818 = state_37811;
(statearr_37818[(7)] = inst_37807);

return statearr_37818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37811__$1,inst_37808);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____0 = (function (){
var statearr_37820 = [null,null,null,null,null,null,null,null];
(statearr_37820[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__);

(statearr_37820[(1)] = (1));

return statearr_37820;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____1 = (function (state_37811){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_37811);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e37821){if((e37821 instanceof Object)){
var ex__37223__auto__ = e37821;
var statearr_37822_40516 = state_37811;
(statearr_37822_40516[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37821;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40518 = state_37811;
state_37811 = G__40518;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__ = function(state_37811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____1.call(this,state_37811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_37825 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_37825[(6)] = c__37470__auto___40511);

return statearr_37825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37829){
var vec__37830 = p__37829;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37830,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37830,(1),null);
var job = vec__37830;
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
var n__4666__auto___40522 = n;
var __40523 = (0);
while(true){
if((__40523 < n__4666__auto___40522)){
var G__37834_40525 = type;
var G__37834_40526__$1 = (((G__37834_40525 instanceof cljs.core.Keyword))?G__37834_40525.fqn:null);
switch (G__37834_40526__$1) {
case "compute":
var c__37470__auto___40533 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40523,c__37470__auto___40533,G__37834_40525,G__37834_40526__$1,n__4666__auto___40522,jobs,results,process,async){
return (function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = ((function (__40523,c__37470__auto___40533,G__37834_40525,G__37834_40526__$1,n__4666__auto___40522,jobs,results,process,async){
return (function (state_37853){
var state_val_37854 = (state_37853[(1)]);
if((state_val_37854 === (1))){
var state_37853__$1 = state_37853;
var statearr_37858_40535 = state_37853__$1;
(statearr_37858_40535[(2)] = null);

(statearr_37858_40535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37854 === (2))){
var state_37853__$1 = state_37853;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37853__$1,(4),jobs);
} else {
if((state_val_37854 === (3))){
var inst_37851 = (state_37853[(2)]);
var state_37853__$1 = state_37853;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37853__$1,inst_37851);
} else {
if((state_val_37854 === (4))){
var inst_37842 = (state_37853[(2)]);
var inst_37843 = process(inst_37842);
var state_37853__$1 = state_37853;
if(cljs.core.truth_(inst_37843)){
var statearr_37862_40542 = state_37853__$1;
(statearr_37862_40542[(1)] = (5));

} else {
var statearr_37863_40543 = state_37853__$1;
(statearr_37863_40543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37854 === (5))){
var state_37853__$1 = state_37853;
var statearr_37865_40545 = state_37853__$1;
(statearr_37865_40545[(2)] = null);

(statearr_37865_40545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37854 === (6))){
var state_37853__$1 = state_37853;
var statearr_37867_40548 = state_37853__$1;
(statearr_37867_40548[(2)] = null);

(statearr_37867_40548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37854 === (7))){
var inst_37849 = (state_37853[(2)]);
var state_37853__$1 = state_37853;
var statearr_37868_40552 = state_37853__$1;
(statearr_37868_40552[(2)] = inst_37849);

(statearr_37868_40552[(1)] = (3));


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
});})(__40523,c__37470__auto___40533,G__37834_40525,G__37834_40526__$1,n__4666__auto___40522,jobs,results,process,async))
;
return ((function (__40523,switch__37219__auto__,c__37470__auto___40533,G__37834_40525,G__37834_40526__$1,n__4666__auto___40522,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____0 = (function (){
var statearr_37871 = [null,null,null,null,null,null,null];
(statearr_37871[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__);

(statearr_37871[(1)] = (1));

return statearr_37871;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____1 = (function (state_37853){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_37853);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e37875){if((e37875 instanceof Object)){
var ex__37223__auto__ = e37875;
var statearr_37876_40553 = state_37853;
(statearr_37876_40553[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37875;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40556 = state_37853;
state_37853 = G__40556;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__ = function(state_37853){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____1.call(this,state_37853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__;
})()
;})(__40523,switch__37219__auto__,c__37470__auto___40533,G__37834_40525,G__37834_40526__$1,n__4666__auto___40522,jobs,results,process,async))
})();
var state__37472__auto__ = (function (){var statearr_37881 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_37881[(6)] = c__37470__auto___40533);

return statearr_37881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
});})(__40523,c__37470__auto___40533,G__37834_40525,G__37834_40526__$1,n__4666__auto___40522,jobs,results,process,async))
);


break;
case "async":
var c__37470__auto___40561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40523,c__37470__auto___40561,G__37834_40525,G__37834_40526__$1,n__4666__auto___40522,jobs,results,process,async){
return (function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = ((function (__40523,c__37470__auto___40561,G__37834_40525,G__37834_40526__$1,n__4666__auto___40522,jobs,results,process,async){
return (function (state_37899){
var state_val_37900 = (state_37899[(1)]);
if((state_val_37900 === (1))){
var state_37899__$1 = state_37899;
var statearr_37902_40563 = state_37899__$1;
(statearr_37902_40563[(2)] = null);

(statearr_37902_40563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37900 === (2))){
var state_37899__$1 = state_37899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37899__$1,(4),jobs);
} else {
if((state_val_37900 === (3))){
var inst_37897 = (state_37899[(2)]);
var state_37899__$1 = state_37899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37899__$1,inst_37897);
} else {
if((state_val_37900 === (4))){
var inst_37888 = (state_37899[(2)]);
var inst_37890 = async(inst_37888);
var state_37899__$1 = state_37899;
if(cljs.core.truth_(inst_37890)){
var statearr_37907_40565 = state_37899__$1;
(statearr_37907_40565[(1)] = (5));

} else {
var statearr_37908_40566 = state_37899__$1;
(statearr_37908_40566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37900 === (5))){
var state_37899__$1 = state_37899;
var statearr_37910_40569 = state_37899__$1;
(statearr_37910_40569[(2)] = null);

(statearr_37910_40569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37900 === (6))){
var state_37899__$1 = state_37899;
var statearr_37911_40571 = state_37899__$1;
(statearr_37911_40571[(2)] = null);

(statearr_37911_40571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37900 === (7))){
var inst_37895 = (state_37899[(2)]);
var state_37899__$1 = state_37899;
var statearr_37914_40573 = state_37899__$1;
(statearr_37914_40573[(2)] = inst_37895);

(statearr_37914_40573[(1)] = (3));


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
});})(__40523,c__37470__auto___40561,G__37834_40525,G__37834_40526__$1,n__4666__auto___40522,jobs,results,process,async))
;
return ((function (__40523,switch__37219__auto__,c__37470__auto___40561,G__37834_40525,G__37834_40526__$1,n__4666__auto___40522,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____0 = (function (){
var statearr_37918 = [null,null,null,null,null,null,null];
(statearr_37918[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__);

(statearr_37918[(1)] = (1));

return statearr_37918;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____1 = (function (state_37899){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_37899);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e37919){if((e37919 instanceof Object)){
var ex__37223__auto__ = e37919;
var statearr_37921_40578 = state_37899;
(statearr_37921_40578[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37919;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40581 = state_37899;
state_37899 = G__40581;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__ = function(state_37899){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____1.call(this,state_37899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__;
})()
;})(__40523,switch__37219__auto__,c__37470__auto___40561,G__37834_40525,G__37834_40526__$1,n__4666__auto___40522,jobs,results,process,async))
})();
var state__37472__auto__ = (function (){var statearr_37924 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_37924[(6)] = c__37470__auto___40561);

return statearr_37924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
});})(__40523,c__37470__auto___40561,G__37834_40525,G__37834_40526__$1,n__4666__auto___40522,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37834_40526__$1)].join('')));

}

var G__40582 = (__40523 + (1));
__40523 = G__40582;
continue;
} else {
}
break;
}

var c__37470__auto___40583 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_37954){
var state_val_37955 = (state_37954[(1)]);
if((state_val_37955 === (7))){
var inst_37950 = (state_37954[(2)]);
var state_37954__$1 = state_37954;
var statearr_37962_40584 = state_37954__$1;
(statearr_37962_40584[(2)] = inst_37950);

(statearr_37962_40584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (1))){
var state_37954__$1 = state_37954;
var statearr_37963_40586 = state_37954__$1;
(statearr_37963_40586[(2)] = null);

(statearr_37963_40586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (4))){
var inst_37929 = (state_37954[(7)]);
var inst_37929__$1 = (state_37954[(2)]);
var inst_37930 = (inst_37929__$1 == null);
var state_37954__$1 = (function (){var statearr_37965 = state_37954;
(statearr_37965[(7)] = inst_37929__$1);

return statearr_37965;
})();
if(cljs.core.truth_(inst_37930)){
var statearr_37968_40597 = state_37954__$1;
(statearr_37968_40597[(1)] = (5));

} else {
var statearr_37971_40598 = state_37954__$1;
(statearr_37971_40598[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (6))){
var inst_37929 = (state_37954[(7)]);
var inst_37935 = (state_37954[(8)]);
var inst_37935__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37938 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37940 = [inst_37929,inst_37935__$1];
var inst_37942 = (new cljs.core.PersistentVector(null,2,(5),inst_37938,inst_37940,null));
var state_37954__$1 = (function (){var statearr_37972 = state_37954;
(statearr_37972[(8)] = inst_37935__$1);

return statearr_37972;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37954__$1,(8),jobs,inst_37942);
} else {
if((state_val_37955 === (3))){
var inst_37952 = (state_37954[(2)]);
var state_37954__$1 = state_37954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37954__$1,inst_37952);
} else {
if((state_val_37955 === (2))){
var state_37954__$1 = state_37954;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37954__$1,(4),from);
} else {
if((state_val_37955 === (9))){
var inst_37947 = (state_37954[(2)]);
var state_37954__$1 = (function (){var statearr_37976 = state_37954;
(statearr_37976[(9)] = inst_37947);

return statearr_37976;
})();
var statearr_37978_40607 = state_37954__$1;
(statearr_37978_40607[(2)] = null);

(statearr_37978_40607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (5))){
var inst_37933 = cljs.core.async.close_BANG_(jobs);
var state_37954__$1 = state_37954;
var statearr_37981_40608 = state_37954__$1;
(statearr_37981_40608[(2)] = inst_37933);

(statearr_37981_40608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37955 === (8))){
var inst_37935 = (state_37954[(8)]);
var inst_37945 = (state_37954[(2)]);
var state_37954__$1 = (function (){var statearr_37984 = state_37954;
(statearr_37984[(10)] = inst_37945);

return statearr_37984;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37954__$1,(9),results,inst_37935);
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
var cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____0 = (function (){
var statearr_37985 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37985[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__);

(statearr_37985[(1)] = (1));

return statearr_37985;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____1 = (function (state_37954){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_37954);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e37987){if((e37987 instanceof Object)){
var ex__37223__auto__ = e37987;
var statearr_37991_40611 = state_37954;
(statearr_37991_40611[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_37954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37987;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40612 = state_37954;
state_37954 = G__40612;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__ = function(state_37954){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____1.call(this,state_37954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_37998 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_37998[(6)] = c__37470__auto___40583);

return statearr_37998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
}));


var c__37470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_38039){
var state_val_38040 = (state_38039[(1)]);
if((state_val_38040 === (7))){
var inst_38035 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
var statearr_38042_40619 = state_38039__$1;
(statearr_38042_40619[(2)] = inst_38035);

(statearr_38042_40619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (20))){
var state_38039__$1 = state_38039;
var statearr_38043_40620 = state_38039__$1;
(statearr_38043_40620[(2)] = null);

(statearr_38043_40620[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (1))){
var state_38039__$1 = state_38039;
var statearr_38044_40621 = state_38039__$1;
(statearr_38044_40621[(2)] = null);

(statearr_38044_40621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (4))){
var inst_38003 = (state_38039[(7)]);
var inst_38003__$1 = (state_38039[(2)]);
var inst_38004 = (inst_38003__$1 == null);
var state_38039__$1 = (function (){var statearr_38049 = state_38039;
(statearr_38049[(7)] = inst_38003__$1);

return statearr_38049;
})();
if(cljs.core.truth_(inst_38004)){
var statearr_38050_40622 = state_38039__$1;
(statearr_38050_40622[(1)] = (5));

} else {
var statearr_38051_40624 = state_38039__$1;
(statearr_38051_40624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (15))){
var inst_38016 = (state_38039[(8)]);
var state_38039__$1 = state_38039;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38039__$1,(18),to,inst_38016);
} else {
if((state_val_38040 === (21))){
var inst_38030 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
var statearr_38053_40626 = state_38039__$1;
(statearr_38053_40626[(2)] = inst_38030);

(statearr_38053_40626[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (13))){
var inst_38032 = (state_38039[(2)]);
var state_38039__$1 = (function (){var statearr_38054 = state_38039;
(statearr_38054[(9)] = inst_38032);

return statearr_38054;
})();
var statearr_38055_40627 = state_38039__$1;
(statearr_38055_40627[(2)] = null);

(statearr_38055_40627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (6))){
var inst_38003 = (state_38039[(7)]);
var state_38039__$1 = state_38039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38039__$1,(11),inst_38003);
} else {
if((state_val_38040 === (17))){
var inst_38025 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
if(cljs.core.truth_(inst_38025)){
var statearr_38059_40628 = state_38039__$1;
(statearr_38059_40628[(1)] = (19));

} else {
var statearr_38060_40629 = state_38039__$1;
(statearr_38060_40629[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (3))){
var inst_38037 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38039__$1,inst_38037);
} else {
if((state_val_38040 === (12))){
var inst_38013 = (state_38039[(10)]);
var state_38039__$1 = state_38039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38039__$1,(14),inst_38013);
} else {
if((state_val_38040 === (2))){
var state_38039__$1 = state_38039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38039__$1,(4),results);
} else {
if((state_val_38040 === (19))){
var state_38039__$1 = state_38039;
var statearr_38062_40632 = state_38039__$1;
(statearr_38062_40632[(2)] = null);

(statearr_38062_40632[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (11))){
var inst_38013 = (state_38039[(2)]);
var state_38039__$1 = (function (){var statearr_38063 = state_38039;
(statearr_38063[(10)] = inst_38013);

return statearr_38063;
})();
var statearr_38064_40633 = state_38039__$1;
(statearr_38064_40633[(2)] = null);

(statearr_38064_40633[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (9))){
var state_38039__$1 = state_38039;
var statearr_38068_40634 = state_38039__$1;
(statearr_38068_40634[(2)] = null);

(statearr_38068_40634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (5))){
var state_38039__$1 = state_38039;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38071_40635 = state_38039__$1;
(statearr_38071_40635[(1)] = (8));

} else {
var statearr_38072_40636 = state_38039__$1;
(statearr_38072_40636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (14))){
var inst_38016 = (state_38039[(8)]);
var inst_38016__$1 = (state_38039[(2)]);
var inst_38018 = (inst_38016__$1 == null);
var inst_38019 = cljs.core.not(inst_38018);
var state_38039__$1 = (function (){var statearr_38073 = state_38039;
(statearr_38073[(8)] = inst_38016__$1);

return statearr_38073;
})();
if(inst_38019){
var statearr_38077_40637 = state_38039__$1;
(statearr_38077_40637[(1)] = (15));

} else {
var statearr_38078_40638 = state_38039__$1;
(statearr_38078_40638[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (16))){
var state_38039__$1 = state_38039;
var statearr_38081_40639 = state_38039__$1;
(statearr_38081_40639[(2)] = false);

(statearr_38081_40639[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (10))){
var inst_38010 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
var statearr_38084_40644 = state_38039__$1;
(statearr_38084_40644[(2)] = inst_38010);

(statearr_38084_40644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (18))){
var inst_38022 = (state_38039[(2)]);
var state_38039__$1 = state_38039;
var statearr_38087_40647 = state_38039__$1;
(statearr_38087_40647[(2)] = inst_38022);

(statearr_38087_40647[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38040 === (8))){
var inst_38007 = cljs.core.async.close_BANG_(to);
var state_38039__$1 = state_38039;
var statearr_38088_40652 = state_38039__$1;
(statearr_38088_40652[(2)] = inst_38007);

(statearr_38088_40652[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____0 = (function (){
var statearr_38090 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38090[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__);

(statearr_38090[(1)] = (1));

return statearr_38090;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____1 = (function (state_38039){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_38039);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e38091){if((e38091 instanceof Object)){
var ex__37223__auto__ = e38091;
var statearr_38092_40654 = state_38039;
(statearr_38092_40654[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38091;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40656 = state_38039;
state_38039 = G__40656;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__ = function(state_38039){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____1.call(this,state_38039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_38093 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_38093[(6)] = c__37470__auto__);

return statearr_38093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
}));

return c__37470__auto__;
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
var G__38095 = arguments.length;
switch (G__38095) {
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
var G__38098 = arguments.length;
switch (G__38098) {
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
var G__38101 = arguments.length;
switch (G__38101) {
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
var c__37470__auto___40686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_38132){
var state_val_38133 = (state_38132[(1)]);
if((state_val_38133 === (7))){
var inst_38128 = (state_38132[(2)]);
var state_38132__$1 = state_38132;
var statearr_38134_40688 = state_38132__$1;
(statearr_38134_40688[(2)] = inst_38128);

(statearr_38134_40688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (1))){
var state_38132__$1 = state_38132;
var statearr_38135_40690 = state_38132__$1;
(statearr_38135_40690[(2)] = null);

(statearr_38135_40690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (4))){
var inst_38109 = (state_38132[(7)]);
var inst_38109__$1 = (state_38132[(2)]);
var inst_38110 = (inst_38109__$1 == null);
var state_38132__$1 = (function (){var statearr_38137 = state_38132;
(statearr_38137[(7)] = inst_38109__$1);

return statearr_38137;
})();
if(cljs.core.truth_(inst_38110)){
var statearr_38139_40691 = state_38132__$1;
(statearr_38139_40691[(1)] = (5));

} else {
var statearr_38140_40692 = state_38132__$1;
(statearr_38140_40692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (13))){
var state_38132__$1 = state_38132;
var statearr_38142_40695 = state_38132__$1;
(statearr_38142_40695[(2)] = null);

(statearr_38142_40695[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (6))){
var inst_38109 = (state_38132[(7)]);
var inst_38115 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38109) : p.call(null,inst_38109));
var state_38132__$1 = state_38132;
if(cljs.core.truth_(inst_38115)){
var statearr_38144_40696 = state_38132__$1;
(statearr_38144_40696[(1)] = (9));

} else {
var statearr_38145_40697 = state_38132__$1;
(statearr_38145_40697[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (3))){
var inst_38130 = (state_38132[(2)]);
var state_38132__$1 = state_38132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38132__$1,inst_38130);
} else {
if((state_val_38133 === (12))){
var state_38132__$1 = state_38132;
var statearr_38147_40703 = state_38132__$1;
(statearr_38147_40703[(2)] = null);

(statearr_38147_40703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (2))){
var state_38132__$1 = state_38132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38132__$1,(4),ch);
} else {
if((state_val_38133 === (11))){
var inst_38109 = (state_38132[(7)]);
var inst_38119 = (state_38132[(2)]);
var state_38132__$1 = state_38132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38132__$1,(8),inst_38119,inst_38109);
} else {
if((state_val_38133 === (9))){
var state_38132__$1 = state_38132;
var statearr_38150_40708 = state_38132__$1;
(statearr_38150_40708[(2)] = tc);

(statearr_38150_40708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (5))){
var inst_38112 = cljs.core.async.close_BANG_(tc);
var inst_38113 = cljs.core.async.close_BANG_(fc);
var state_38132__$1 = (function (){var statearr_38152 = state_38132;
(statearr_38152[(8)] = inst_38112);

return statearr_38152;
})();
var statearr_38153_40710 = state_38132__$1;
(statearr_38153_40710[(2)] = inst_38113);

(statearr_38153_40710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (14))){
var inst_38126 = (state_38132[(2)]);
var state_38132__$1 = state_38132;
var statearr_38154_40711 = state_38132__$1;
(statearr_38154_40711[(2)] = inst_38126);

(statearr_38154_40711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (10))){
var state_38132__$1 = state_38132;
var statearr_38155_40712 = state_38132__$1;
(statearr_38155_40712[(2)] = fc);

(statearr_38155_40712[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38133 === (8))){
var inst_38121 = (state_38132[(2)]);
var state_38132__$1 = state_38132;
if(cljs.core.truth_(inst_38121)){
var statearr_38156_40713 = state_38132__$1;
(statearr_38156_40713[(1)] = (12));

} else {
var statearr_38157_40714 = state_38132__$1;
(statearr_38157_40714[(1)] = (13));

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
var cljs$core$async$state_machine__37220__auto__ = null;
var cljs$core$async$state_machine__37220__auto____0 = (function (){
var statearr_38158 = [null,null,null,null,null,null,null,null,null];
(statearr_38158[(0)] = cljs$core$async$state_machine__37220__auto__);

(statearr_38158[(1)] = (1));

return statearr_38158;
});
var cljs$core$async$state_machine__37220__auto____1 = (function (state_38132){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_38132);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e38161){if((e38161 instanceof Object)){
var ex__37223__auto__ = e38161;
var statearr_38163_40721 = state_38132;
(statearr_38163_40721[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38161;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40722 = state_38132;
state_38132 = G__40722;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$state_machine__37220__auto__ = function(state_38132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37220__auto____1.call(this,state_38132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37220__auto____0;
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37220__auto____1;
return cljs$core$async$state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_38165 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_38165[(6)] = c__37470__auto___40686);

return statearr_38165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
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
var c__37470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_38189){
var state_val_38190 = (state_38189[(1)]);
if((state_val_38190 === (7))){
var inst_38185 = (state_38189[(2)]);
var state_38189__$1 = state_38189;
var statearr_38194_40737 = state_38189__$1;
(statearr_38194_40737[(2)] = inst_38185);

(statearr_38194_40737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38190 === (1))){
var inst_38169 = init;
var state_38189__$1 = (function (){var statearr_38198 = state_38189;
(statearr_38198[(7)] = inst_38169);

return statearr_38198;
})();
var statearr_38199_40741 = state_38189__$1;
(statearr_38199_40741[(2)] = null);

(statearr_38199_40741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38190 === (4))){
var inst_38172 = (state_38189[(8)]);
var inst_38172__$1 = (state_38189[(2)]);
var inst_38173 = (inst_38172__$1 == null);
var state_38189__$1 = (function (){var statearr_38200 = state_38189;
(statearr_38200[(8)] = inst_38172__$1);

return statearr_38200;
})();
if(cljs.core.truth_(inst_38173)){
var statearr_38201_40743 = state_38189__$1;
(statearr_38201_40743[(1)] = (5));

} else {
var statearr_38202_40744 = state_38189__$1;
(statearr_38202_40744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38190 === (6))){
var inst_38176 = (state_38189[(9)]);
var inst_38172 = (state_38189[(8)]);
var inst_38169 = (state_38189[(7)]);
var inst_38176__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_38169,inst_38172) : f.call(null,inst_38169,inst_38172));
var inst_38177 = cljs.core.reduced_QMARK_(inst_38176__$1);
var state_38189__$1 = (function (){var statearr_38203 = state_38189;
(statearr_38203[(9)] = inst_38176__$1);

return statearr_38203;
})();
if(inst_38177){
var statearr_38204_40749 = state_38189__$1;
(statearr_38204_40749[(1)] = (8));

} else {
var statearr_38205_40750 = state_38189__$1;
(statearr_38205_40750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38190 === (3))){
var inst_38187 = (state_38189[(2)]);
var state_38189__$1 = state_38189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38189__$1,inst_38187);
} else {
if((state_val_38190 === (2))){
var state_38189__$1 = state_38189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38189__$1,(4),ch);
} else {
if((state_val_38190 === (9))){
var inst_38176 = (state_38189[(9)]);
var inst_38169 = inst_38176;
var state_38189__$1 = (function (){var statearr_38207 = state_38189;
(statearr_38207[(7)] = inst_38169);

return statearr_38207;
})();
var statearr_38208_40754 = state_38189__$1;
(statearr_38208_40754[(2)] = null);

(statearr_38208_40754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38190 === (5))){
var inst_38169 = (state_38189[(7)]);
var state_38189__$1 = state_38189;
var statearr_38212_40757 = state_38189__$1;
(statearr_38212_40757[(2)] = inst_38169);

(statearr_38212_40757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38190 === (10))){
var inst_38183 = (state_38189[(2)]);
var state_38189__$1 = state_38189;
var statearr_38213_40761 = state_38189__$1;
(statearr_38213_40761[(2)] = inst_38183);

(statearr_38213_40761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38190 === (8))){
var inst_38176 = (state_38189[(9)]);
var inst_38179 = cljs.core.deref(inst_38176);
var state_38189__$1 = state_38189;
var statearr_38215_40764 = state_38189__$1;
(statearr_38215_40764[(2)] = inst_38179);

(statearr_38215_40764[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__37220__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37220__auto____0 = (function (){
var statearr_38218 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38218[(0)] = cljs$core$async$reduce_$_state_machine__37220__auto__);

(statearr_38218[(1)] = (1));

return statearr_38218;
});
var cljs$core$async$reduce_$_state_machine__37220__auto____1 = (function (state_38189){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_38189);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e38220){if((e38220 instanceof Object)){
var ex__37223__auto__ = e38220;
var statearr_38221_40765 = state_38189;
(statearr_38221_40765[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38220;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40766 = state_38189;
state_38189 = G__40766;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37220__auto__ = function(state_38189){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37220__auto____1.call(this,state_38189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37220__auto____0;
cljs$core$async$reduce_$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37220__auto____1;
return cljs$core$async$reduce_$_state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_38223 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_38223[(6)] = c__37470__auto__);

return statearr_38223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
}));

return c__37470__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__37470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_38233){
var state_val_38234 = (state_38233[(1)]);
if((state_val_38234 === (1))){
var inst_38228 = cljs.core.async.reduce(f__$1,init,ch);
var state_38233__$1 = state_38233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38233__$1,(2),inst_38228);
} else {
if((state_val_38234 === (2))){
var inst_38230 = (state_38233[(2)]);
var inst_38231 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_38230) : f__$1.call(null,inst_38230));
var state_38233__$1 = state_38233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38233__$1,inst_38231);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__37220__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37220__auto____0 = (function (){
var statearr_38239 = [null,null,null,null,null,null,null];
(statearr_38239[(0)] = cljs$core$async$transduce_$_state_machine__37220__auto__);

(statearr_38239[(1)] = (1));

return statearr_38239;
});
var cljs$core$async$transduce_$_state_machine__37220__auto____1 = (function (state_38233){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_38233);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e38240){if((e38240 instanceof Object)){
var ex__37223__auto__ = e38240;
var statearr_38243_40780 = state_38233;
(statearr_38243_40780[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38240;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40781 = state_38233;
state_38233 = G__40781;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37220__auto__ = function(state_38233){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37220__auto____1.call(this,state_38233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37220__auto____0;
cljs$core$async$transduce_$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37220__auto____1;
return cljs$core$async$transduce_$_state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_38245 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_38245[(6)] = c__37470__auto__);

return statearr_38245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
}));

return c__37470__auto__;
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
var G__38251 = arguments.length;
switch (G__38251) {
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
var c__37470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_38281){
var state_val_38282 = (state_38281[(1)]);
if((state_val_38282 === (7))){
var inst_38263 = (state_38281[(2)]);
var state_38281__$1 = state_38281;
var statearr_38287_40804 = state_38281__$1;
(statearr_38287_40804[(2)] = inst_38263);

(statearr_38287_40804[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38282 === (1))){
var inst_38253 = cljs.core.seq(coll);
var inst_38254 = inst_38253;
var state_38281__$1 = (function (){var statearr_38289 = state_38281;
(statearr_38289[(7)] = inst_38254);

return statearr_38289;
})();
var statearr_38290_40805 = state_38281__$1;
(statearr_38290_40805[(2)] = null);

(statearr_38290_40805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38282 === (4))){
var inst_38254 = (state_38281[(7)]);
var inst_38261 = cljs.core.first(inst_38254);
var state_38281__$1 = state_38281;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38281__$1,(7),ch,inst_38261);
} else {
if((state_val_38282 === (13))){
var inst_38275 = (state_38281[(2)]);
var state_38281__$1 = state_38281;
var statearr_38292_40809 = state_38281__$1;
(statearr_38292_40809[(2)] = inst_38275);

(statearr_38292_40809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38282 === (6))){
var inst_38266 = (state_38281[(2)]);
var state_38281__$1 = state_38281;
if(cljs.core.truth_(inst_38266)){
var statearr_38297_40810 = state_38281__$1;
(statearr_38297_40810[(1)] = (8));

} else {
var statearr_38298_40811 = state_38281__$1;
(statearr_38298_40811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38282 === (3))){
var inst_38279 = (state_38281[(2)]);
var state_38281__$1 = state_38281;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38281__$1,inst_38279);
} else {
if((state_val_38282 === (12))){
var state_38281__$1 = state_38281;
var statearr_38300_40816 = state_38281__$1;
(statearr_38300_40816[(2)] = null);

(statearr_38300_40816[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38282 === (2))){
var inst_38254 = (state_38281[(7)]);
var state_38281__$1 = state_38281;
if(cljs.core.truth_(inst_38254)){
var statearr_38301_40823 = state_38281__$1;
(statearr_38301_40823[(1)] = (4));

} else {
var statearr_38302_40824 = state_38281__$1;
(statearr_38302_40824[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38282 === (11))){
var inst_38272 = cljs.core.async.close_BANG_(ch);
var state_38281__$1 = state_38281;
var statearr_38306_40826 = state_38281__$1;
(statearr_38306_40826[(2)] = inst_38272);

(statearr_38306_40826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38282 === (9))){
var state_38281__$1 = state_38281;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38308_40827 = state_38281__$1;
(statearr_38308_40827[(1)] = (11));

} else {
var statearr_38309_40829 = state_38281__$1;
(statearr_38309_40829[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38282 === (5))){
var inst_38254 = (state_38281[(7)]);
var state_38281__$1 = state_38281;
var statearr_38311_40833 = state_38281__$1;
(statearr_38311_40833[(2)] = inst_38254);

(statearr_38311_40833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38282 === (10))){
var inst_38277 = (state_38281[(2)]);
var state_38281__$1 = state_38281;
var statearr_38314_40841 = state_38281__$1;
(statearr_38314_40841[(2)] = inst_38277);

(statearr_38314_40841[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38282 === (8))){
var inst_38254 = (state_38281[(7)]);
var inst_38268 = cljs.core.next(inst_38254);
var inst_38254__$1 = inst_38268;
var state_38281__$1 = (function (){var statearr_38316 = state_38281;
(statearr_38316[(7)] = inst_38254__$1);

return statearr_38316;
})();
var statearr_38317_40843 = state_38281__$1;
(statearr_38317_40843[(2)] = null);

(statearr_38317_40843[(1)] = (2));


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
var cljs$core$async$state_machine__37220__auto__ = null;
var cljs$core$async$state_machine__37220__auto____0 = (function (){
var statearr_38320 = [null,null,null,null,null,null,null,null];
(statearr_38320[(0)] = cljs$core$async$state_machine__37220__auto__);

(statearr_38320[(1)] = (1));

return statearr_38320;
});
var cljs$core$async$state_machine__37220__auto____1 = (function (state_38281){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_38281);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e38323){if((e38323 instanceof Object)){
var ex__37223__auto__ = e38323;
var statearr_38325_40850 = state_38281;
(statearr_38325_40850[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38323;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40851 = state_38281;
state_38281 = G__40851;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$state_machine__37220__auto__ = function(state_38281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37220__auto____1.call(this,state_38281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37220__auto____0;
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37220__auto____1;
return cljs$core$async$state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_38327 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_38327[(6)] = c__37470__auto__);

return statearr_38327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
}));

return c__37470__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38357 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38357 = (function (ch,cs,meta38358){
this.ch = ch;
this.cs = cs;
this.meta38358 = meta38358;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38359,meta38358__$1){
var self__ = this;
var _38359__$1 = this;
return (new cljs.core.async.t_cljs$core$async38357(self__.ch,self__.cs,meta38358__$1));
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
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async38357.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async38357.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38358","meta38358",-2046943466,null)], null);
}));

(cljs.core.async.t_cljs$core$async38357.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38357.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38357");

(cljs.core.async.t_cljs$core$async38357.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38357");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38357.
 */
cljs.core.async.__GT_t_cljs$core$async38357 = (function cljs$core$async$mult_$___GT_t_cljs$core$async38357(ch__$1,cs__$1,meta38358){
return (new cljs.core.async.t_cljs$core$async38357(ch__$1,cs__$1,meta38358));
});

}

return (new cljs.core.async.t_cljs$core$async38357(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__37470__auto___40890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_38566){
var state_val_38567 = (state_38566[(1)]);
if((state_val_38567 === (7))){
var inst_38561 = (state_38566[(2)]);
var state_38566__$1 = state_38566;
var statearr_38571_40899 = state_38566__$1;
(statearr_38571_40899[(2)] = inst_38561);

(statearr_38571_40899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (20))){
var inst_38423 = (state_38566[(7)]);
var inst_38447 = cljs.core.first(inst_38423);
var inst_38448 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38447,(0),null);
var inst_38449 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38447,(1),null);
var state_38566__$1 = (function (){var statearr_38573 = state_38566;
(statearr_38573[(8)] = inst_38448);

return statearr_38573;
})();
if(cljs.core.truth_(inst_38449)){
var statearr_38574_40907 = state_38566__$1;
(statearr_38574_40907[(1)] = (22));

} else {
var statearr_38575_40908 = state_38566__$1;
(statearr_38575_40908[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (27))){
var inst_38494 = (state_38566[(9)]);
var inst_38484 = (state_38566[(10)]);
var inst_38486 = (state_38566[(11)]);
var inst_38387 = (state_38566[(12)]);
var inst_38494__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38484,inst_38486);
var inst_38495 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38494__$1,inst_38387,done);
var state_38566__$1 = (function (){var statearr_38581 = state_38566;
(statearr_38581[(9)] = inst_38494__$1);

return statearr_38581;
})();
if(cljs.core.truth_(inst_38495)){
var statearr_38583_40917 = state_38566__$1;
(statearr_38583_40917[(1)] = (30));

} else {
var statearr_38586_40919 = state_38566__$1;
(statearr_38586_40919[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (1))){
var state_38566__$1 = state_38566;
var statearr_38588_40921 = state_38566__$1;
(statearr_38588_40921[(2)] = null);

(statearr_38588_40921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (24))){
var inst_38423 = (state_38566[(7)]);
var inst_38454 = (state_38566[(2)]);
var inst_38455 = cljs.core.next(inst_38423);
var inst_38397 = inst_38455;
var inst_38398 = null;
var inst_38399 = (0);
var inst_38400 = (0);
var state_38566__$1 = (function (){var statearr_38592 = state_38566;
(statearr_38592[(13)] = inst_38400);

(statearr_38592[(14)] = inst_38399);

(statearr_38592[(15)] = inst_38454);

(statearr_38592[(16)] = inst_38397);

(statearr_38592[(17)] = inst_38398);

return statearr_38592;
})();
var statearr_38593_40922 = state_38566__$1;
(statearr_38593_40922[(2)] = null);

(statearr_38593_40922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (39))){
var state_38566__$1 = state_38566;
var statearr_38611_40925 = state_38566__$1;
(statearr_38611_40925[(2)] = null);

(statearr_38611_40925[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (4))){
var inst_38387 = (state_38566[(12)]);
var inst_38387__$1 = (state_38566[(2)]);
var inst_38389 = (inst_38387__$1 == null);
var state_38566__$1 = (function (){var statearr_38613 = state_38566;
(statearr_38613[(12)] = inst_38387__$1);

return statearr_38613;
})();
if(cljs.core.truth_(inst_38389)){
var statearr_38615_40926 = state_38566__$1;
(statearr_38615_40926[(1)] = (5));

} else {
var statearr_38616_40928 = state_38566__$1;
(statearr_38616_40928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (15))){
var inst_38400 = (state_38566[(13)]);
var inst_38399 = (state_38566[(14)]);
var inst_38397 = (state_38566[(16)]);
var inst_38398 = (state_38566[(17)]);
var inst_38418 = (state_38566[(2)]);
var inst_38419 = (inst_38400 + (1));
var tmp38599 = inst_38399;
var tmp38600 = inst_38397;
var tmp38601 = inst_38398;
var inst_38397__$1 = tmp38600;
var inst_38398__$1 = tmp38601;
var inst_38399__$1 = tmp38599;
var inst_38400__$1 = inst_38419;
var state_38566__$1 = (function (){var statearr_38620 = state_38566;
(statearr_38620[(13)] = inst_38400__$1);

(statearr_38620[(14)] = inst_38399__$1);

(statearr_38620[(18)] = inst_38418);

(statearr_38620[(16)] = inst_38397__$1);

(statearr_38620[(17)] = inst_38398__$1);

return statearr_38620;
})();
var statearr_38621_40946 = state_38566__$1;
(statearr_38621_40946[(2)] = null);

(statearr_38621_40946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (21))){
var inst_38458 = (state_38566[(2)]);
var state_38566__$1 = state_38566;
var statearr_38635_40951 = state_38566__$1;
(statearr_38635_40951[(2)] = inst_38458);

(statearr_38635_40951[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (31))){
var inst_38494 = (state_38566[(9)]);
var inst_38498 = done(null);
var inst_38499 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38494);
var state_38566__$1 = (function (){var statearr_38640 = state_38566;
(statearr_38640[(19)] = inst_38498);

return statearr_38640;
})();
var statearr_38642_40954 = state_38566__$1;
(statearr_38642_40954[(2)] = inst_38499);

(statearr_38642_40954[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (32))){
var inst_38483 = (state_38566[(20)]);
var inst_38484 = (state_38566[(10)]);
var inst_38486 = (state_38566[(11)]);
var inst_38485 = (state_38566[(21)]);
var inst_38501 = (state_38566[(2)]);
var inst_38503 = (inst_38486 + (1));
var tmp38627 = inst_38483;
var tmp38628 = inst_38484;
var tmp38629 = inst_38485;
var inst_38483__$1 = tmp38627;
var inst_38484__$1 = tmp38628;
var inst_38485__$1 = tmp38629;
var inst_38486__$1 = inst_38503;
var state_38566__$1 = (function (){var statearr_38649 = state_38566;
(statearr_38649[(22)] = inst_38501);

(statearr_38649[(20)] = inst_38483__$1);

(statearr_38649[(10)] = inst_38484__$1);

(statearr_38649[(11)] = inst_38486__$1);

(statearr_38649[(21)] = inst_38485__$1);

return statearr_38649;
})();
var statearr_38652_40965 = state_38566__$1;
(statearr_38652_40965[(2)] = null);

(statearr_38652_40965[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (40))){
var inst_38525 = (state_38566[(23)]);
var inst_38536 = done(null);
var inst_38537 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38525);
var state_38566__$1 = (function (){var statearr_38662 = state_38566;
(statearr_38662[(24)] = inst_38536);

return statearr_38662;
})();
var statearr_38664_40981 = state_38566__$1;
(statearr_38664_40981[(2)] = inst_38537);

(statearr_38664_40981[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (33))){
var inst_38511 = (state_38566[(25)]);
var inst_38513 = cljs.core.chunked_seq_QMARK_(inst_38511);
var state_38566__$1 = state_38566;
if(inst_38513){
var statearr_38669_40984 = state_38566__$1;
(statearr_38669_40984[(1)] = (36));

} else {
var statearr_38674_40988 = state_38566__$1;
(statearr_38674_40988[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (13))){
var inst_38412 = (state_38566[(26)]);
var inst_38415 = cljs.core.async.close_BANG_(inst_38412);
var state_38566__$1 = state_38566;
var statearr_38678_40989 = state_38566__$1;
(statearr_38678_40989[(2)] = inst_38415);

(statearr_38678_40989[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (22))){
var inst_38448 = (state_38566[(8)]);
var inst_38451 = cljs.core.async.close_BANG_(inst_38448);
var state_38566__$1 = state_38566;
var statearr_38680_40991 = state_38566__$1;
(statearr_38680_40991[(2)] = inst_38451);

(statearr_38680_40991[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (36))){
var inst_38511 = (state_38566[(25)]);
var inst_38520 = cljs.core.chunk_first(inst_38511);
var inst_38521 = cljs.core.chunk_rest(inst_38511);
var inst_38522 = cljs.core.count(inst_38520);
var inst_38483 = inst_38521;
var inst_38484 = inst_38520;
var inst_38485 = inst_38522;
var inst_38486 = (0);
var state_38566__$1 = (function (){var statearr_38686 = state_38566;
(statearr_38686[(20)] = inst_38483);

(statearr_38686[(10)] = inst_38484);

(statearr_38686[(11)] = inst_38486);

(statearr_38686[(21)] = inst_38485);

return statearr_38686;
})();
var statearr_38687_40997 = state_38566__$1;
(statearr_38687_40997[(2)] = null);

(statearr_38687_40997[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (41))){
var inst_38511 = (state_38566[(25)]);
var inst_38539 = (state_38566[(2)]);
var inst_38541 = cljs.core.next(inst_38511);
var inst_38483 = inst_38541;
var inst_38484 = null;
var inst_38485 = (0);
var inst_38486 = (0);
var state_38566__$1 = (function (){var statearr_38692 = state_38566;
(statearr_38692[(20)] = inst_38483);

(statearr_38692[(10)] = inst_38484);

(statearr_38692[(27)] = inst_38539);

(statearr_38692[(11)] = inst_38486);

(statearr_38692[(21)] = inst_38485);

return statearr_38692;
})();
var statearr_38696_41008 = state_38566__$1;
(statearr_38696_41008[(2)] = null);

(statearr_38696_41008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (43))){
var state_38566__$1 = state_38566;
var statearr_38702_41009 = state_38566__$1;
(statearr_38702_41009[(2)] = null);

(statearr_38702_41009[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (29))){
var inst_38549 = (state_38566[(2)]);
var state_38566__$1 = state_38566;
var statearr_38707_41010 = state_38566__$1;
(statearr_38707_41010[(2)] = inst_38549);

(statearr_38707_41010[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (44))){
var inst_38558 = (state_38566[(2)]);
var state_38566__$1 = (function (){var statearr_38709 = state_38566;
(statearr_38709[(28)] = inst_38558);

return statearr_38709;
})();
var statearr_38711_41011 = state_38566__$1;
(statearr_38711_41011[(2)] = null);

(statearr_38711_41011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (6))){
var inst_38475 = (state_38566[(29)]);
var inst_38474 = cljs.core.deref(cs);
var inst_38475__$1 = cljs.core.keys(inst_38474);
var inst_38476 = cljs.core.count(inst_38475__$1);
var inst_38477 = cljs.core.reset_BANG_(dctr,inst_38476);
var inst_38482 = cljs.core.seq(inst_38475__$1);
var inst_38483 = inst_38482;
var inst_38484 = null;
var inst_38485 = (0);
var inst_38486 = (0);
var state_38566__$1 = (function (){var statearr_38721 = state_38566;
(statearr_38721[(20)] = inst_38483);

(statearr_38721[(30)] = inst_38477);

(statearr_38721[(10)] = inst_38484);

(statearr_38721[(11)] = inst_38486);

(statearr_38721[(29)] = inst_38475__$1);

(statearr_38721[(21)] = inst_38485);

return statearr_38721;
})();
var statearr_38724_41013 = state_38566__$1;
(statearr_38724_41013[(2)] = null);

(statearr_38724_41013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (28))){
var inst_38483 = (state_38566[(20)]);
var inst_38511 = (state_38566[(25)]);
var inst_38511__$1 = cljs.core.seq(inst_38483);
var state_38566__$1 = (function (){var statearr_38729 = state_38566;
(statearr_38729[(25)] = inst_38511__$1);

return statearr_38729;
})();
if(inst_38511__$1){
var statearr_38732_41017 = state_38566__$1;
(statearr_38732_41017[(1)] = (33));

} else {
var statearr_38735_41019 = state_38566__$1;
(statearr_38735_41019[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (25))){
var inst_38486 = (state_38566[(11)]);
var inst_38485 = (state_38566[(21)]);
var inst_38490 = (inst_38486 < inst_38485);
var inst_38491 = inst_38490;
var state_38566__$1 = state_38566;
if(cljs.core.truth_(inst_38491)){
var statearr_38737_41020 = state_38566__$1;
(statearr_38737_41020[(1)] = (27));

} else {
var statearr_38741_41021 = state_38566__$1;
(statearr_38741_41021[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (34))){
var state_38566__$1 = state_38566;
var statearr_38745_41028 = state_38566__$1;
(statearr_38745_41028[(2)] = null);

(statearr_38745_41028[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (17))){
var state_38566__$1 = state_38566;
var statearr_38750_41029 = state_38566__$1;
(statearr_38750_41029[(2)] = null);

(statearr_38750_41029[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (3))){
var inst_38563 = (state_38566[(2)]);
var state_38566__$1 = state_38566;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38566__$1,inst_38563);
} else {
if((state_val_38567 === (12))){
var inst_38463 = (state_38566[(2)]);
var state_38566__$1 = state_38566;
var statearr_38757_41031 = state_38566__$1;
(statearr_38757_41031[(2)] = inst_38463);

(statearr_38757_41031[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (2))){
var state_38566__$1 = state_38566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38566__$1,(4),ch);
} else {
if((state_val_38567 === (23))){
var state_38566__$1 = state_38566;
var statearr_38764_41037 = state_38566__$1;
(statearr_38764_41037[(2)] = null);

(statearr_38764_41037[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (35))){
var inst_38547 = (state_38566[(2)]);
var state_38566__$1 = state_38566;
var statearr_38765_41042 = state_38566__$1;
(statearr_38765_41042[(2)] = inst_38547);

(statearr_38765_41042[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (19))){
var inst_38423 = (state_38566[(7)]);
var inst_38432 = cljs.core.chunk_first(inst_38423);
var inst_38433 = cljs.core.chunk_rest(inst_38423);
var inst_38435 = cljs.core.count(inst_38432);
var inst_38397 = inst_38433;
var inst_38398 = inst_38432;
var inst_38399 = inst_38435;
var inst_38400 = (0);
var state_38566__$1 = (function (){var statearr_38778 = state_38566;
(statearr_38778[(13)] = inst_38400);

(statearr_38778[(14)] = inst_38399);

(statearr_38778[(16)] = inst_38397);

(statearr_38778[(17)] = inst_38398);

return statearr_38778;
})();
var statearr_38783_41047 = state_38566__$1;
(statearr_38783_41047[(2)] = null);

(statearr_38783_41047[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (11))){
var inst_38397 = (state_38566[(16)]);
var inst_38423 = (state_38566[(7)]);
var inst_38423__$1 = cljs.core.seq(inst_38397);
var state_38566__$1 = (function (){var statearr_38785 = state_38566;
(statearr_38785[(7)] = inst_38423__$1);

return statearr_38785;
})();
if(inst_38423__$1){
var statearr_38786_41054 = state_38566__$1;
(statearr_38786_41054[(1)] = (16));

} else {
var statearr_38787_41055 = state_38566__$1;
(statearr_38787_41055[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (9))){
var inst_38465 = (state_38566[(2)]);
var state_38566__$1 = state_38566;
var statearr_38793_41056 = state_38566__$1;
(statearr_38793_41056[(2)] = inst_38465);

(statearr_38793_41056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (5))){
var inst_38395 = cljs.core.deref(cs);
var inst_38396 = cljs.core.seq(inst_38395);
var inst_38397 = inst_38396;
var inst_38398 = null;
var inst_38399 = (0);
var inst_38400 = (0);
var state_38566__$1 = (function (){var statearr_38798 = state_38566;
(statearr_38798[(13)] = inst_38400);

(statearr_38798[(14)] = inst_38399);

(statearr_38798[(16)] = inst_38397);

(statearr_38798[(17)] = inst_38398);

return statearr_38798;
})();
var statearr_38803_41060 = state_38566__$1;
(statearr_38803_41060[(2)] = null);

(statearr_38803_41060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (14))){
var state_38566__$1 = state_38566;
var statearr_38806_41065 = state_38566__$1;
(statearr_38806_41065[(2)] = null);

(statearr_38806_41065[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (45))){
var inst_38555 = (state_38566[(2)]);
var state_38566__$1 = state_38566;
var statearr_38807_41067 = state_38566__$1;
(statearr_38807_41067[(2)] = inst_38555);

(statearr_38807_41067[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (26))){
var inst_38475 = (state_38566[(29)]);
var inst_38551 = (state_38566[(2)]);
var inst_38552 = cljs.core.seq(inst_38475);
var state_38566__$1 = (function (){var statearr_38816 = state_38566;
(statearr_38816[(31)] = inst_38551);

return statearr_38816;
})();
if(inst_38552){
var statearr_38819_41069 = state_38566__$1;
(statearr_38819_41069[(1)] = (42));

} else {
var statearr_38821_41070 = state_38566__$1;
(statearr_38821_41070[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (16))){
var inst_38423 = (state_38566[(7)]);
var inst_38425 = cljs.core.chunked_seq_QMARK_(inst_38423);
var state_38566__$1 = state_38566;
if(inst_38425){
var statearr_38825_41073 = state_38566__$1;
(statearr_38825_41073[(1)] = (19));

} else {
var statearr_38826_41075 = state_38566__$1;
(statearr_38826_41075[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (38))){
var inst_38544 = (state_38566[(2)]);
var state_38566__$1 = state_38566;
var statearr_38827_41076 = state_38566__$1;
(statearr_38827_41076[(2)] = inst_38544);

(statearr_38827_41076[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (30))){
var state_38566__$1 = state_38566;
var statearr_38830_41079 = state_38566__$1;
(statearr_38830_41079[(2)] = null);

(statearr_38830_41079[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (10))){
var inst_38400 = (state_38566[(13)]);
var inst_38398 = (state_38566[(17)]);
var inst_38411 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38398,inst_38400);
var inst_38412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38411,(0),null);
var inst_38413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38411,(1),null);
var state_38566__$1 = (function (){var statearr_38831 = state_38566;
(statearr_38831[(26)] = inst_38412);

return statearr_38831;
})();
if(cljs.core.truth_(inst_38413)){
var statearr_38832_41089 = state_38566__$1;
(statearr_38832_41089[(1)] = (13));

} else {
var statearr_38837_41091 = state_38566__$1;
(statearr_38837_41091[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (18))){
var inst_38461 = (state_38566[(2)]);
var state_38566__$1 = state_38566;
var statearr_38842_41101 = state_38566__$1;
(statearr_38842_41101[(2)] = inst_38461);

(statearr_38842_41101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (42))){
var state_38566__$1 = state_38566;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38566__$1,(45),dchan);
} else {
if((state_val_38567 === (37))){
var inst_38387 = (state_38566[(12)]);
var inst_38511 = (state_38566[(25)]);
var inst_38525 = (state_38566[(23)]);
var inst_38525__$1 = cljs.core.first(inst_38511);
var inst_38528 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38525__$1,inst_38387,done);
var state_38566__$1 = (function (){var statearr_38843 = state_38566;
(statearr_38843[(23)] = inst_38525__$1);

return statearr_38843;
})();
if(cljs.core.truth_(inst_38528)){
var statearr_38847_41108 = state_38566__$1;
(statearr_38847_41108[(1)] = (39));

} else {
var statearr_38849_41109 = state_38566__$1;
(statearr_38849_41109[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38567 === (8))){
var inst_38400 = (state_38566[(13)]);
var inst_38399 = (state_38566[(14)]);
var inst_38402 = (inst_38400 < inst_38399);
var inst_38403 = inst_38402;
var state_38566__$1 = state_38566;
if(cljs.core.truth_(inst_38403)){
var statearr_38850_41112 = state_38566__$1;
(statearr_38850_41112[(1)] = (10));

} else {
var statearr_38854_41113 = state_38566__$1;
(statearr_38854_41113[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__37220__auto__ = null;
var cljs$core$async$mult_$_state_machine__37220__auto____0 = (function (){
var statearr_38856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38856[(0)] = cljs$core$async$mult_$_state_machine__37220__auto__);

(statearr_38856[(1)] = (1));

return statearr_38856;
});
var cljs$core$async$mult_$_state_machine__37220__auto____1 = (function (state_38566){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_38566);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e38861){if((e38861 instanceof Object)){
var ex__37223__auto__ = e38861;
var statearr_38862_41128 = state_38566;
(statearr_38862_41128[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38861;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41130 = state_38566;
state_38566 = G__41130;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37220__auto__ = function(state_38566){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37220__auto____1.call(this,state_38566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37220__auto____0;
cljs$core$async$mult_$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37220__auto____1;
return cljs$core$async$mult_$_state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_38865 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_38865[(6)] = c__37470__auto___40890);

return statearr_38865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
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
var G__38867 = arguments.length;
switch (G__38867) {
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
var len__4789__auto___41238 = arguments.length;
var i__4790__auto___41239 = (0);
while(true){
if((i__4790__auto___41239 < len__4789__auto___41238)){
args__4795__auto__.push((arguments[i__4790__auto___41239]));

var G__41240 = (i__4790__auto___41239 + (1));
i__4790__auto___41239 = G__41240;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38885){
var map__38886 = p__38885;
var map__38886__$1 = (((((!((map__38886 == null))))?(((((map__38886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38886):map__38886);
var opts = map__38886__$1;
var statearr_38888_41254 = state;
(statearr_38888_41254[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_38889_41255 = state;
(statearr_38889_41255[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_38890_41256 = state;
(statearr_38890_41256[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38881){
var G__38882 = cljs.core.first(seq38881);
var seq38881__$1 = cljs.core.next(seq38881);
var G__38883 = cljs.core.first(seq38881__$1);
var seq38881__$2 = cljs.core.next(seq38881__$1);
var G__38884 = cljs.core.first(seq38881__$2);
var seq38881__$3 = cljs.core.next(seq38881__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38882,G__38883,G__38884,seq38881__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38893 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38893 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38894){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38894 = meta38894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38895,meta38894__$1){
var self__ = this;
var _38895__$1 = this;
return (new cljs.core.async.t_cljs$core$async38893(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38894__$1));
}));

(cljs.core.async.t_cljs$core$async38893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38895){
var self__ = this;
var _38895__$1 = this;
return self__.meta38894;
}));

(cljs.core.async.t_cljs$core$async38893.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38893.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async38893.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38893.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38893.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38893.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38893.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38893.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38894","meta38894",779742255,null)], null);
}));

(cljs.core.async.t_cljs$core$async38893.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38893");

(cljs.core.async.t_cljs$core$async38893.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async38893");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38893.
 */
cljs.core.async.__GT_t_cljs$core$async38893 = (function cljs$core$async$mix_$___GT_t_cljs$core$async38893(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38894){
return (new cljs.core.async.t_cljs$core$async38893(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38894));
});

}

return (new cljs.core.async.t_cljs$core$async38893(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37470__auto___41318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_39013){
var state_val_39014 = (state_39013[(1)]);
if((state_val_39014 === (7))){
var inst_38923 = (state_39013[(2)]);
var state_39013__$1 = state_39013;
var statearr_39019_41326 = state_39013__$1;
(statearr_39019_41326[(2)] = inst_38923);

(statearr_39019_41326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (20))){
var inst_38935 = (state_39013[(7)]);
var state_39013__$1 = state_39013;
var statearr_39020_41331 = state_39013__$1;
(statearr_39020_41331[(2)] = inst_38935);

(statearr_39020_41331[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (27))){
var state_39013__$1 = state_39013;
var statearr_39021_41332 = state_39013__$1;
(statearr_39021_41332[(2)] = null);

(statearr_39021_41332[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (1))){
var inst_38909 = (state_39013[(8)]);
var inst_38909__$1 = calc_state();
var inst_38912 = (inst_38909__$1 == null);
var inst_38913 = cljs.core.not(inst_38912);
var state_39013__$1 = (function (){var statearr_39023 = state_39013;
(statearr_39023[(8)] = inst_38909__$1);

return statearr_39023;
})();
if(inst_38913){
var statearr_39024_41342 = state_39013__$1;
(statearr_39024_41342[(1)] = (2));

} else {
var statearr_39025_41343 = state_39013__$1;
(statearr_39025_41343[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (24))){
var inst_38959 = (state_39013[(9)]);
var inst_38968 = (state_39013[(10)]);
var inst_38982 = (state_39013[(11)]);
var inst_38982__$1 = (inst_38959.cljs$core$IFn$_invoke$arity$1 ? inst_38959.cljs$core$IFn$_invoke$arity$1(inst_38968) : inst_38959.call(null,inst_38968));
var state_39013__$1 = (function (){var statearr_39026 = state_39013;
(statearr_39026[(11)] = inst_38982__$1);

return statearr_39026;
})();
if(cljs.core.truth_(inst_38982__$1)){
var statearr_39027_41356 = state_39013__$1;
(statearr_39027_41356[(1)] = (29));

} else {
var statearr_39028_41357 = state_39013__$1;
(statearr_39028_41357[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (4))){
var inst_38926 = (state_39013[(2)]);
var state_39013__$1 = state_39013;
if(cljs.core.truth_(inst_38926)){
var statearr_39029_41363 = state_39013__$1;
(statearr_39029_41363[(1)] = (8));

} else {
var statearr_39031_41366 = state_39013__$1;
(statearr_39031_41366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (15))){
var inst_38953 = (state_39013[(2)]);
var state_39013__$1 = state_39013;
if(cljs.core.truth_(inst_38953)){
var statearr_39032_41373 = state_39013__$1;
(statearr_39032_41373[(1)] = (19));

} else {
var statearr_39033_41374 = state_39013__$1;
(statearr_39033_41374[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (21))){
var inst_38958 = (state_39013[(12)]);
var inst_38958__$1 = (state_39013[(2)]);
var inst_38959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38958__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38958__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38958__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39013__$1 = (function (){var statearr_39035 = state_39013;
(statearr_39035[(13)] = inst_38960);

(statearr_39035[(12)] = inst_38958__$1);

(statearr_39035[(9)] = inst_38959);

return statearr_39035;
})();
return cljs.core.async.ioc_alts_BANG_(state_39013__$1,(22),inst_38961);
} else {
if((state_val_39014 === (31))){
var inst_38993 = (state_39013[(2)]);
var state_39013__$1 = state_39013;
if(cljs.core.truth_(inst_38993)){
var statearr_39039_41375 = state_39013__$1;
(statearr_39039_41375[(1)] = (32));

} else {
var statearr_39040_41376 = state_39013__$1;
(statearr_39040_41376[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (32))){
var inst_38967 = (state_39013[(14)]);
var state_39013__$1 = state_39013;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39013__$1,(35),out,inst_38967);
} else {
if((state_val_39014 === (33))){
var inst_38958 = (state_39013[(12)]);
var inst_38935 = inst_38958;
var state_39013__$1 = (function (){var statearr_39049 = state_39013;
(statearr_39049[(7)] = inst_38935);

return statearr_39049;
})();
var statearr_39050_41381 = state_39013__$1;
(statearr_39050_41381[(2)] = null);

(statearr_39050_41381[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (13))){
var inst_38935 = (state_39013[(7)]);
var inst_38942 = inst_38935.cljs$lang$protocol_mask$partition0$;
var inst_38943 = (inst_38942 & (64));
var inst_38944 = inst_38935.cljs$core$ISeq$;
var inst_38945 = (cljs.core.PROTOCOL_SENTINEL === inst_38944);
var inst_38946 = ((inst_38943) || (inst_38945));
var state_39013__$1 = state_39013;
if(cljs.core.truth_(inst_38946)){
var statearr_39051_41384 = state_39013__$1;
(statearr_39051_41384[(1)] = (16));

} else {
var statearr_39052_41385 = state_39013__$1;
(statearr_39052_41385[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (22))){
var inst_38968 = (state_39013[(10)]);
var inst_38967 = (state_39013[(14)]);
var inst_38966 = (state_39013[(2)]);
var inst_38967__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38966,(0),null);
var inst_38968__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38966,(1),null);
var inst_38969 = (inst_38967__$1 == null);
var inst_38970 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38968__$1,change);
var inst_38971 = ((inst_38969) || (inst_38970));
var state_39013__$1 = (function (){var statearr_39053 = state_39013;
(statearr_39053[(10)] = inst_38968__$1);

(statearr_39053[(14)] = inst_38967__$1);

return statearr_39053;
})();
if(cljs.core.truth_(inst_38971)){
var statearr_39054_41392 = state_39013__$1;
(statearr_39054_41392[(1)] = (23));

} else {
var statearr_39055_41393 = state_39013__$1;
(statearr_39055_41393[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (36))){
var inst_38958 = (state_39013[(12)]);
var inst_38935 = inst_38958;
var state_39013__$1 = (function (){var statearr_39056 = state_39013;
(statearr_39056[(7)] = inst_38935);

return statearr_39056;
})();
var statearr_39059_41395 = state_39013__$1;
(statearr_39059_41395[(2)] = null);

(statearr_39059_41395[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (29))){
var inst_38982 = (state_39013[(11)]);
var state_39013__$1 = state_39013;
var statearr_39060_41396 = state_39013__$1;
(statearr_39060_41396[(2)] = inst_38982);

(statearr_39060_41396[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (6))){
var state_39013__$1 = state_39013;
var statearr_39067_41399 = state_39013__$1;
(statearr_39067_41399[(2)] = false);

(statearr_39067_41399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (28))){
var inst_38978 = (state_39013[(2)]);
var inst_38979 = calc_state();
var inst_38935 = inst_38979;
var state_39013__$1 = (function (){var statearr_39075 = state_39013;
(statearr_39075[(7)] = inst_38935);

(statearr_39075[(15)] = inst_38978);

return statearr_39075;
})();
var statearr_39076_41400 = state_39013__$1;
(statearr_39076_41400[(2)] = null);

(statearr_39076_41400[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (25))){
var inst_39008 = (state_39013[(2)]);
var state_39013__$1 = state_39013;
var statearr_39077_41401 = state_39013__$1;
(statearr_39077_41401[(2)] = inst_39008);

(statearr_39077_41401[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (34))){
var inst_39006 = (state_39013[(2)]);
var state_39013__$1 = state_39013;
var statearr_39084_41403 = state_39013__$1;
(statearr_39084_41403[(2)] = inst_39006);

(statearr_39084_41403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (17))){
var state_39013__$1 = state_39013;
var statearr_39085_41404 = state_39013__$1;
(statearr_39085_41404[(2)] = false);

(statearr_39085_41404[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (3))){
var state_39013__$1 = state_39013;
var statearr_39086_41405 = state_39013__$1;
(statearr_39086_41405[(2)] = false);

(statearr_39086_41405[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (12))){
var inst_39010 = (state_39013[(2)]);
var state_39013__$1 = state_39013;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39013__$1,inst_39010);
} else {
if((state_val_39014 === (2))){
var inst_38909 = (state_39013[(8)]);
var inst_38915 = inst_38909.cljs$lang$protocol_mask$partition0$;
var inst_38916 = (inst_38915 & (64));
var inst_38917 = inst_38909.cljs$core$ISeq$;
var inst_38918 = (cljs.core.PROTOCOL_SENTINEL === inst_38917);
var inst_38919 = ((inst_38916) || (inst_38918));
var state_39013__$1 = state_39013;
if(cljs.core.truth_(inst_38919)){
var statearr_39091_41410 = state_39013__$1;
(statearr_39091_41410[(1)] = (5));

} else {
var statearr_39095_41411 = state_39013__$1;
(statearr_39095_41411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (23))){
var inst_38967 = (state_39013[(14)]);
var inst_38973 = (inst_38967 == null);
var state_39013__$1 = state_39013;
if(cljs.core.truth_(inst_38973)){
var statearr_39099_41412 = state_39013__$1;
(statearr_39099_41412[(1)] = (26));

} else {
var statearr_39100_41413 = state_39013__$1;
(statearr_39100_41413[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (35))){
var inst_38997 = (state_39013[(2)]);
var state_39013__$1 = state_39013;
if(cljs.core.truth_(inst_38997)){
var statearr_39103_41414 = state_39013__$1;
(statearr_39103_41414[(1)] = (36));

} else {
var statearr_39104_41415 = state_39013__$1;
(statearr_39104_41415[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (19))){
var inst_38935 = (state_39013[(7)]);
var inst_38955 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38935);
var state_39013__$1 = state_39013;
var statearr_39108_41416 = state_39013__$1;
(statearr_39108_41416[(2)] = inst_38955);

(statearr_39108_41416[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (11))){
var inst_38935 = (state_39013[(7)]);
var inst_38939 = (inst_38935 == null);
var inst_38940 = cljs.core.not(inst_38939);
var state_39013__$1 = state_39013;
if(inst_38940){
var statearr_39109_41421 = state_39013__$1;
(statearr_39109_41421[(1)] = (13));

} else {
var statearr_39110_41422 = state_39013__$1;
(statearr_39110_41422[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (9))){
var inst_38909 = (state_39013[(8)]);
var state_39013__$1 = state_39013;
var statearr_39111_41423 = state_39013__$1;
(statearr_39111_41423[(2)] = inst_38909);

(statearr_39111_41423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (5))){
var state_39013__$1 = state_39013;
var statearr_39112_41425 = state_39013__$1;
(statearr_39112_41425[(2)] = true);

(statearr_39112_41425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (14))){
var state_39013__$1 = state_39013;
var statearr_39113_41426 = state_39013__$1;
(statearr_39113_41426[(2)] = false);

(statearr_39113_41426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (26))){
var inst_38968 = (state_39013[(10)]);
var inst_38975 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38968);
var state_39013__$1 = state_39013;
var statearr_39114_41429 = state_39013__$1;
(statearr_39114_41429[(2)] = inst_38975);

(statearr_39114_41429[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (16))){
var state_39013__$1 = state_39013;
var statearr_39115_41432 = state_39013__$1;
(statearr_39115_41432[(2)] = true);

(statearr_39115_41432[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (38))){
var inst_39002 = (state_39013[(2)]);
var state_39013__$1 = state_39013;
var statearr_39117_41434 = state_39013__$1;
(statearr_39117_41434[(2)] = inst_39002);

(statearr_39117_41434[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (30))){
var inst_38960 = (state_39013[(13)]);
var inst_38959 = (state_39013[(9)]);
var inst_38968 = (state_39013[(10)]);
var inst_38988 = cljs.core.empty_QMARK_(inst_38959);
var inst_38989 = (inst_38960.cljs$core$IFn$_invoke$arity$1 ? inst_38960.cljs$core$IFn$_invoke$arity$1(inst_38968) : inst_38960.call(null,inst_38968));
var inst_38990 = cljs.core.not(inst_38989);
var inst_38991 = ((inst_38988) && (inst_38990));
var state_39013__$1 = state_39013;
var statearr_39122_41441 = state_39013__$1;
(statearr_39122_41441[(2)] = inst_38991);

(statearr_39122_41441[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (10))){
var inst_38909 = (state_39013[(8)]);
var inst_38931 = (state_39013[(2)]);
var inst_38932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38931,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38931,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38934 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38931,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38935 = inst_38909;
var state_39013__$1 = (function (){var statearr_39124 = state_39013;
(statearr_39124[(7)] = inst_38935);

(statearr_39124[(16)] = inst_38934);

(statearr_39124[(17)] = inst_38932);

(statearr_39124[(18)] = inst_38933);

return statearr_39124;
})();
var statearr_39125_41444 = state_39013__$1;
(statearr_39125_41444[(2)] = null);

(statearr_39125_41444[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (18))){
var inst_38950 = (state_39013[(2)]);
var state_39013__$1 = state_39013;
var statearr_39128_41445 = state_39013__$1;
(statearr_39128_41445[(2)] = inst_38950);

(statearr_39128_41445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (37))){
var state_39013__$1 = state_39013;
var statearr_39129_41448 = state_39013__$1;
(statearr_39129_41448[(2)] = null);

(statearr_39129_41448[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39014 === (8))){
var inst_38909 = (state_39013[(8)]);
var inst_38928 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38909);
var state_39013__$1 = state_39013;
var statearr_39133_41456 = state_39013__$1;
(statearr_39133_41456[(2)] = inst_38928);

(statearr_39133_41456[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__37220__auto__ = null;
var cljs$core$async$mix_$_state_machine__37220__auto____0 = (function (){
var statearr_39134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39134[(0)] = cljs$core$async$mix_$_state_machine__37220__auto__);

(statearr_39134[(1)] = (1));

return statearr_39134;
});
var cljs$core$async$mix_$_state_machine__37220__auto____1 = (function (state_39013){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_39013);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e39135){if((e39135 instanceof Object)){
var ex__37223__auto__ = e39135;
var statearr_39136_41462 = state_39013;
(statearr_39136_41462[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39013);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39135;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41463 = state_39013;
state_39013 = G__41463;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37220__auto__ = function(state_39013){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37220__auto____1.call(this,state_39013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37220__auto____0;
cljs$core$async$mix_$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37220__auto____1;
return cljs$core$async$mix_$_state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_39141 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_39141[(6)] = c__37470__auto___41318);

return statearr_39141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
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
var G__39157 = arguments.length;
switch (G__39157) {
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
var G__39160 = arguments.length;
switch (G__39160) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__39158_SHARP_){
if(cljs.core.truth_((p1__39158_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39158_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__39158_SHARP_.call(null,topic)))){
return p1__39158_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39158_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39161 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39161 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39162){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39162 = meta39162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39163,meta39162__$1){
var self__ = this;
var _39163__$1 = this;
return (new cljs.core.async.t_cljs$core$async39161(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39162__$1));
}));

(cljs.core.async.t_cljs$core$async39161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39163){
var self__ = this;
var _39163__$1 = this;
return self__.meta39162;
}));

(cljs.core.async.t_cljs$core$async39161.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39161.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async39161.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39161.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async39161.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async39161.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async39161.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async39161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39162","meta39162",-90447446,null)], null);
}));

(cljs.core.async.t_cljs$core$async39161.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39161");

(cljs.core.async.t_cljs$core$async39161.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39161");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39161.
 */
cljs.core.async.__GT_t_cljs$core$async39161 = (function cljs$core$async$__GT_t_cljs$core$async39161(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39162){
return (new cljs.core.async.t_cljs$core$async39161(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39162));
});

}

return (new cljs.core.async.t_cljs$core$async39161(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37470__auto___41522 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_39259){
var state_val_39260 = (state_39259[(1)]);
if((state_val_39260 === (7))){
var inst_39255 = (state_39259[(2)]);
var state_39259__$1 = state_39259;
var statearr_39261_41528 = state_39259__$1;
(statearr_39261_41528[(2)] = inst_39255);

(statearr_39261_41528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (20))){
var state_39259__$1 = state_39259;
var statearr_39262_41529 = state_39259__$1;
(statearr_39262_41529[(2)] = null);

(statearr_39262_41529[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (1))){
var state_39259__$1 = state_39259;
var statearr_39263_41530 = state_39259__$1;
(statearr_39263_41530[(2)] = null);

(statearr_39263_41530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (24))){
var inst_39235 = (state_39259[(7)]);
var inst_39247 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_39235);
var state_39259__$1 = state_39259;
var statearr_39265_41532 = state_39259__$1;
(statearr_39265_41532[(2)] = inst_39247);

(statearr_39265_41532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (4))){
var inst_39179 = (state_39259[(8)]);
var inst_39179__$1 = (state_39259[(2)]);
var inst_39184 = (inst_39179__$1 == null);
var state_39259__$1 = (function (){var statearr_39266 = state_39259;
(statearr_39266[(8)] = inst_39179__$1);

return statearr_39266;
})();
if(cljs.core.truth_(inst_39184)){
var statearr_39268_41536 = state_39259__$1;
(statearr_39268_41536[(1)] = (5));

} else {
var statearr_39272_41537 = state_39259__$1;
(statearr_39272_41537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (15))){
var inst_39229 = (state_39259[(2)]);
var state_39259__$1 = state_39259;
var statearr_39276_41539 = state_39259__$1;
(statearr_39276_41539[(2)] = inst_39229);

(statearr_39276_41539[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (21))){
var inst_39252 = (state_39259[(2)]);
var state_39259__$1 = (function (){var statearr_39277 = state_39259;
(statearr_39277[(9)] = inst_39252);

return statearr_39277;
})();
var statearr_39278_41545 = state_39259__$1;
(statearr_39278_41545[(2)] = null);

(statearr_39278_41545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (13))){
var inst_39207 = (state_39259[(10)]);
var inst_39210 = cljs.core.chunked_seq_QMARK_(inst_39207);
var state_39259__$1 = state_39259;
if(inst_39210){
var statearr_39283_41547 = state_39259__$1;
(statearr_39283_41547[(1)] = (16));

} else {
var statearr_39284_41553 = state_39259__$1;
(statearr_39284_41553[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (22))){
var inst_39244 = (state_39259[(2)]);
var state_39259__$1 = state_39259;
if(cljs.core.truth_(inst_39244)){
var statearr_39285_41559 = state_39259__$1;
(statearr_39285_41559[(1)] = (23));

} else {
var statearr_39286_41560 = state_39259__$1;
(statearr_39286_41560[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (6))){
var inst_39179 = (state_39259[(8)]);
var inst_39240 = (state_39259[(11)]);
var inst_39235 = (state_39259[(7)]);
var inst_39235__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39179) : topic_fn.call(null,inst_39179));
var inst_39239 = cljs.core.deref(mults);
var inst_39240__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39239,inst_39235__$1);
var state_39259__$1 = (function (){var statearr_39287 = state_39259;
(statearr_39287[(11)] = inst_39240__$1);

(statearr_39287[(7)] = inst_39235__$1);

return statearr_39287;
})();
if(cljs.core.truth_(inst_39240__$1)){
var statearr_39288_41561 = state_39259__$1;
(statearr_39288_41561[(1)] = (19));

} else {
var statearr_39289_41563 = state_39259__$1;
(statearr_39289_41563[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (25))){
var inst_39249 = (state_39259[(2)]);
var state_39259__$1 = state_39259;
var statearr_39290_41567 = state_39259__$1;
(statearr_39290_41567[(2)] = inst_39249);

(statearr_39290_41567[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (17))){
var inst_39207 = (state_39259[(10)]);
var inst_39219 = cljs.core.first(inst_39207);
var inst_39220 = cljs.core.async.muxch_STAR_(inst_39219);
var inst_39221 = cljs.core.async.close_BANG_(inst_39220);
var inst_39223 = cljs.core.next(inst_39207);
var inst_39193 = inst_39223;
var inst_39194 = null;
var inst_39195 = (0);
var inst_39196 = (0);
var state_39259__$1 = (function (){var statearr_39291 = state_39259;
(statearr_39291[(12)] = inst_39195);

(statearr_39291[(13)] = inst_39221);

(statearr_39291[(14)] = inst_39193);

(statearr_39291[(15)] = inst_39194);

(statearr_39291[(16)] = inst_39196);

return statearr_39291;
})();
var statearr_39296_41590 = state_39259__$1;
(statearr_39296_41590[(2)] = null);

(statearr_39296_41590[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (3))){
var inst_39257 = (state_39259[(2)]);
var state_39259__$1 = state_39259;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39259__$1,inst_39257);
} else {
if((state_val_39260 === (12))){
var inst_39231 = (state_39259[(2)]);
var state_39259__$1 = state_39259;
var statearr_39297_41596 = state_39259__$1;
(statearr_39297_41596[(2)] = inst_39231);

(statearr_39297_41596[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (2))){
var state_39259__$1 = state_39259;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39259__$1,(4),ch);
} else {
if((state_val_39260 === (23))){
var state_39259__$1 = state_39259;
var statearr_39298_41597 = state_39259__$1;
(statearr_39298_41597[(2)] = null);

(statearr_39298_41597[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (19))){
var inst_39179 = (state_39259[(8)]);
var inst_39240 = (state_39259[(11)]);
var inst_39242 = cljs.core.async.muxch_STAR_(inst_39240);
var state_39259__$1 = state_39259;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39259__$1,(22),inst_39242,inst_39179);
} else {
if((state_val_39260 === (11))){
var inst_39193 = (state_39259[(14)]);
var inst_39207 = (state_39259[(10)]);
var inst_39207__$1 = cljs.core.seq(inst_39193);
var state_39259__$1 = (function (){var statearr_39301 = state_39259;
(statearr_39301[(10)] = inst_39207__$1);

return statearr_39301;
})();
if(inst_39207__$1){
var statearr_39302_41598 = state_39259__$1;
(statearr_39302_41598[(1)] = (13));

} else {
var statearr_39303_41599 = state_39259__$1;
(statearr_39303_41599[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (9))){
var inst_39233 = (state_39259[(2)]);
var state_39259__$1 = state_39259;
var statearr_39305_41600 = state_39259__$1;
(statearr_39305_41600[(2)] = inst_39233);

(statearr_39305_41600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (5))){
var inst_39190 = cljs.core.deref(mults);
var inst_39191 = cljs.core.vals(inst_39190);
var inst_39192 = cljs.core.seq(inst_39191);
var inst_39193 = inst_39192;
var inst_39194 = null;
var inst_39195 = (0);
var inst_39196 = (0);
var state_39259__$1 = (function (){var statearr_39306 = state_39259;
(statearr_39306[(12)] = inst_39195);

(statearr_39306[(14)] = inst_39193);

(statearr_39306[(15)] = inst_39194);

(statearr_39306[(16)] = inst_39196);

return statearr_39306;
})();
var statearr_39310_41602 = state_39259__$1;
(statearr_39310_41602[(2)] = null);

(statearr_39310_41602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (14))){
var state_39259__$1 = state_39259;
var statearr_39314_41603 = state_39259__$1;
(statearr_39314_41603[(2)] = null);

(statearr_39314_41603[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (16))){
var inst_39207 = (state_39259[(10)]);
var inst_39213 = cljs.core.chunk_first(inst_39207);
var inst_39215 = cljs.core.chunk_rest(inst_39207);
var inst_39216 = cljs.core.count(inst_39213);
var inst_39193 = inst_39215;
var inst_39194 = inst_39213;
var inst_39195 = inst_39216;
var inst_39196 = (0);
var state_39259__$1 = (function (){var statearr_39315 = state_39259;
(statearr_39315[(12)] = inst_39195);

(statearr_39315[(14)] = inst_39193);

(statearr_39315[(15)] = inst_39194);

(statearr_39315[(16)] = inst_39196);

return statearr_39315;
})();
var statearr_39317_41607 = state_39259__$1;
(statearr_39317_41607[(2)] = null);

(statearr_39317_41607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (10))){
var inst_39195 = (state_39259[(12)]);
var inst_39193 = (state_39259[(14)]);
var inst_39194 = (state_39259[(15)]);
var inst_39196 = (state_39259[(16)]);
var inst_39201 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39194,inst_39196);
var inst_39202 = cljs.core.async.muxch_STAR_(inst_39201);
var inst_39203 = cljs.core.async.close_BANG_(inst_39202);
var inst_39204 = (inst_39196 + (1));
var tmp39311 = inst_39195;
var tmp39312 = inst_39193;
var tmp39313 = inst_39194;
var inst_39193__$1 = tmp39312;
var inst_39194__$1 = tmp39313;
var inst_39195__$1 = tmp39311;
var inst_39196__$1 = inst_39204;
var state_39259__$1 = (function (){var statearr_39320 = state_39259;
(statearr_39320[(12)] = inst_39195__$1);

(statearr_39320[(17)] = inst_39203);

(statearr_39320[(14)] = inst_39193__$1);

(statearr_39320[(15)] = inst_39194__$1);

(statearr_39320[(16)] = inst_39196__$1);

return statearr_39320;
})();
var statearr_39321_41609 = state_39259__$1;
(statearr_39321_41609[(2)] = null);

(statearr_39321_41609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (18))){
var inst_39226 = (state_39259[(2)]);
var state_39259__$1 = state_39259;
var statearr_39325_41613 = state_39259__$1;
(statearr_39325_41613[(2)] = inst_39226);

(statearr_39325_41613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39260 === (8))){
var inst_39195 = (state_39259[(12)]);
var inst_39196 = (state_39259[(16)]);
var inst_39198 = (inst_39196 < inst_39195);
var inst_39199 = inst_39198;
var state_39259__$1 = state_39259;
if(cljs.core.truth_(inst_39199)){
var statearr_39326_41614 = state_39259__$1;
(statearr_39326_41614[(1)] = (10));

} else {
var statearr_39327_41615 = state_39259__$1;
(statearr_39327_41615[(1)] = (11));

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
var cljs$core$async$state_machine__37220__auto__ = null;
var cljs$core$async$state_machine__37220__auto____0 = (function (){
var statearr_39328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39328[(0)] = cljs$core$async$state_machine__37220__auto__);

(statearr_39328[(1)] = (1));

return statearr_39328;
});
var cljs$core$async$state_machine__37220__auto____1 = (function (state_39259){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_39259);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e39329){if((e39329 instanceof Object)){
var ex__37223__auto__ = e39329;
var statearr_39330_41617 = state_39259;
(statearr_39330_41617[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39329;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41618 = state_39259;
state_39259 = G__41618;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$state_machine__37220__auto__ = function(state_39259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37220__auto____1.call(this,state_39259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37220__auto____0;
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37220__auto____1;
return cljs$core$async$state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_39331 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_39331[(6)] = c__37470__auto___41522);

return statearr_39331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
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
var G__39333 = arguments.length;
switch (G__39333) {
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
var G__39337 = arguments.length;
switch (G__39337) {
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
var G__39342 = arguments.length;
switch (G__39342) {
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
var c__37470__auto___41639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_39384){
var state_val_39385 = (state_39384[(1)]);
if((state_val_39385 === (7))){
var state_39384__$1 = state_39384;
var statearr_39389_41640 = state_39384__$1;
(statearr_39389_41640[(2)] = null);

(statearr_39389_41640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39385 === (1))){
var state_39384__$1 = state_39384;
var statearr_39390_41641 = state_39384__$1;
(statearr_39390_41641[(2)] = null);

(statearr_39390_41641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39385 === (4))){
var inst_39345 = (state_39384[(7)]);
var inst_39348 = (inst_39345 < cnt);
var state_39384__$1 = state_39384;
if(cljs.core.truth_(inst_39348)){
var statearr_39391_41642 = state_39384__$1;
(statearr_39391_41642[(1)] = (6));

} else {
var statearr_39392_41643 = state_39384__$1;
(statearr_39392_41643[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39385 === (15))){
var inst_39380 = (state_39384[(2)]);
var state_39384__$1 = state_39384;
var statearr_39393_41646 = state_39384__$1;
(statearr_39393_41646[(2)] = inst_39380);

(statearr_39393_41646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39385 === (13))){
var inst_39373 = cljs.core.async.close_BANG_(out);
var state_39384__$1 = state_39384;
var statearr_39394_41647 = state_39384__$1;
(statearr_39394_41647[(2)] = inst_39373);

(statearr_39394_41647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39385 === (6))){
var state_39384__$1 = state_39384;
var statearr_39395_41648 = state_39384__$1;
(statearr_39395_41648[(2)] = null);

(statearr_39395_41648[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39385 === (3))){
var inst_39382 = (state_39384[(2)]);
var state_39384__$1 = state_39384;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39384__$1,inst_39382);
} else {
if((state_val_39385 === (12))){
var inst_39370 = (state_39384[(8)]);
var inst_39370__$1 = (state_39384[(2)]);
var inst_39371 = cljs.core.some(cljs.core.nil_QMARK_,inst_39370__$1);
var state_39384__$1 = (function (){var statearr_39400 = state_39384;
(statearr_39400[(8)] = inst_39370__$1);

return statearr_39400;
})();
if(cljs.core.truth_(inst_39371)){
var statearr_39401_41651 = state_39384__$1;
(statearr_39401_41651[(1)] = (13));

} else {
var statearr_39402_41652 = state_39384__$1;
(statearr_39402_41652[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39385 === (2))){
var inst_39344 = cljs.core.reset_BANG_(dctr,cnt);
var inst_39345 = (0);
var state_39384__$1 = (function (){var statearr_39403 = state_39384;
(statearr_39403[(7)] = inst_39345);

(statearr_39403[(9)] = inst_39344);

return statearr_39403;
})();
var statearr_39404_41656 = state_39384__$1;
(statearr_39404_41656[(2)] = null);

(statearr_39404_41656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39385 === (11))){
var inst_39345 = (state_39384[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_39384,(10),Object,null,(9));
var inst_39357 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39345) : chs__$1.call(null,inst_39345));
var inst_39358 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39345) : done.call(null,inst_39345));
var inst_39359 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39357,inst_39358);
var state_39384__$1 = state_39384;
var statearr_39405_41657 = state_39384__$1;
(statearr_39405_41657[(2)] = inst_39359);


cljs.core.async.impl.ioc_helpers.process_exception(state_39384__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39385 === (9))){
var inst_39345 = (state_39384[(7)]);
var inst_39361 = (state_39384[(2)]);
var inst_39362 = (inst_39345 + (1));
var inst_39345__$1 = inst_39362;
var state_39384__$1 = (function (){var statearr_39406 = state_39384;
(statearr_39406[(10)] = inst_39361);

(statearr_39406[(7)] = inst_39345__$1);

return statearr_39406;
})();
var statearr_39407_41659 = state_39384__$1;
(statearr_39407_41659[(2)] = null);

(statearr_39407_41659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39385 === (5))){
var inst_39368 = (state_39384[(2)]);
var state_39384__$1 = (function (){var statearr_39408 = state_39384;
(statearr_39408[(11)] = inst_39368);

return statearr_39408;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39384__$1,(12),dchan);
} else {
if((state_val_39385 === (14))){
var inst_39370 = (state_39384[(8)]);
var inst_39375 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39370);
var state_39384__$1 = state_39384;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39384__$1,(16),out,inst_39375);
} else {
if((state_val_39385 === (16))){
var inst_39377 = (state_39384[(2)]);
var state_39384__$1 = (function (){var statearr_39409 = state_39384;
(statearr_39409[(12)] = inst_39377);

return statearr_39409;
})();
var statearr_39410_41666 = state_39384__$1;
(statearr_39410_41666[(2)] = null);

(statearr_39410_41666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39385 === (10))){
var inst_39352 = (state_39384[(2)]);
var inst_39353 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_39384__$1 = (function (){var statearr_39411 = state_39384;
(statearr_39411[(13)] = inst_39352);

return statearr_39411;
})();
var statearr_39412_41668 = state_39384__$1;
(statearr_39412_41668[(2)] = inst_39353);


cljs.core.async.impl.ioc_helpers.process_exception(state_39384__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39385 === (8))){
var inst_39366 = (state_39384[(2)]);
var state_39384__$1 = state_39384;
var statearr_39421_41672 = state_39384__$1;
(statearr_39421_41672[(2)] = inst_39366);

(statearr_39421_41672[(1)] = (5));


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
var cljs$core$async$state_machine__37220__auto__ = null;
var cljs$core$async$state_machine__37220__auto____0 = (function (){
var statearr_39429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39429[(0)] = cljs$core$async$state_machine__37220__auto__);

(statearr_39429[(1)] = (1));

return statearr_39429;
});
var cljs$core$async$state_machine__37220__auto____1 = (function (state_39384){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_39384);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e39436){if((e39436 instanceof Object)){
var ex__37223__auto__ = e39436;
var statearr_39437_41677 = state_39384;
(statearr_39437_41677[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39436;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41678 = state_39384;
state_39384 = G__41678;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$state_machine__37220__auto__ = function(state_39384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37220__auto____1.call(this,state_39384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37220__auto____0;
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37220__auto____1;
return cljs$core$async$state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_39438 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_39438[(6)] = c__37470__auto___41639);

return statearr_39438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
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
var G__39455 = arguments.length;
switch (G__39455) {
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
var c__37470__auto___41693 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_39502){
var state_val_39503 = (state_39502[(1)]);
if((state_val_39503 === (7))){
var inst_39477 = (state_39502[(7)]);
var inst_39478 = (state_39502[(8)]);
var inst_39477__$1 = (state_39502[(2)]);
var inst_39478__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39477__$1,(0),null);
var inst_39479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39477__$1,(1),null);
var inst_39480 = (inst_39478__$1 == null);
var state_39502__$1 = (function (){var statearr_39504 = state_39502;
(statearr_39504[(9)] = inst_39479);

(statearr_39504[(7)] = inst_39477__$1);

(statearr_39504[(8)] = inst_39478__$1);

return statearr_39504;
})();
if(cljs.core.truth_(inst_39480)){
var statearr_39505_41697 = state_39502__$1;
(statearr_39505_41697[(1)] = (8));

} else {
var statearr_39509_41698 = state_39502__$1;
(statearr_39509_41698[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39503 === (1))){
var inst_39465 = cljs.core.vec(chs);
var inst_39466 = inst_39465;
var state_39502__$1 = (function (){var statearr_39510 = state_39502;
(statearr_39510[(10)] = inst_39466);

return statearr_39510;
})();
var statearr_39511_41699 = state_39502__$1;
(statearr_39511_41699[(2)] = null);

(statearr_39511_41699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39503 === (4))){
var inst_39466 = (state_39502[(10)]);
var state_39502__$1 = state_39502;
return cljs.core.async.ioc_alts_BANG_(state_39502__$1,(7),inst_39466);
} else {
if((state_val_39503 === (6))){
var inst_39498 = (state_39502[(2)]);
var state_39502__$1 = state_39502;
var statearr_39512_41703 = state_39502__$1;
(statearr_39512_41703[(2)] = inst_39498);

(statearr_39512_41703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39503 === (3))){
var inst_39500 = (state_39502[(2)]);
var state_39502__$1 = state_39502;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39502__$1,inst_39500);
} else {
if((state_val_39503 === (2))){
var inst_39466 = (state_39502[(10)]);
var inst_39470 = cljs.core.count(inst_39466);
var inst_39471 = (inst_39470 > (0));
var state_39502__$1 = state_39502;
if(cljs.core.truth_(inst_39471)){
var statearr_39514_41707 = state_39502__$1;
(statearr_39514_41707[(1)] = (4));

} else {
var statearr_39515_41708 = state_39502__$1;
(statearr_39515_41708[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39503 === (11))){
var inst_39466 = (state_39502[(10)]);
var inst_39491 = (state_39502[(2)]);
var tmp39513 = inst_39466;
var inst_39466__$1 = tmp39513;
var state_39502__$1 = (function (){var statearr_39516 = state_39502;
(statearr_39516[(11)] = inst_39491);

(statearr_39516[(10)] = inst_39466__$1);

return statearr_39516;
})();
var statearr_39517_41713 = state_39502__$1;
(statearr_39517_41713[(2)] = null);

(statearr_39517_41713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39503 === (9))){
var inst_39478 = (state_39502[(8)]);
var state_39502__$1 = state_39502;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39502__$1,(11),out,inst_39478);
} else {
if((state_val_39503 === (5))){
var inst_39496 = cljs.core.async.close_BANG_(out);
var state_39502__$1 = state_39502;
var statearr_39522_41717 = state_39502__$1;
(statearr_39522_41717[(2)] = inst_39496);

(statearr_39522_41717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39503 === (10))){
var inst_39494 = (state_39502[(2)]);
var state_39502__$1 = state_39502;
var statearr_39524_41724 = state_39502__$1;
(statearr_39524_41724[(2)] = inst_39494);

(statearr_39524_41724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39503 === (8))){
var inst_39479 = (state_39502[(9)]);
var inst_39477 = (state_39502[(7)]);
var inst_39478 = (state_39502[(8)]);
var inst_39466 = (state_39502[(10)]);
var inst_39485 = (function (){var cs = inst_39466;
var vec__39473 = inst_39477;
var v = inst_39478;
var c = inst_39479;
return (function (p1__39447_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39447_SHARP_);
});
})();
var inst_39487 = cljs.core.filterv(inst_39485,inst_39466);
var inst_39466__$1 = inst_39487;
var state_39502__$1 = (function (){var statearr_39526 = state_39502;
(statearr_39526[(10)] = inst_39466__$1);

return statearr_39526;
})();
var statearr_39527_41731 = state_39502__$1;
(statearr_39527_41731[(2)] = null);

(statearr_39527_41731[(1)] = (2));


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
var cljs$core$async$state_machine__37220__auto__ = null;
var cljs$core$async$state_machine__37220__auto____0 = (function (){
var statearr_39529 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39529[(0)] = cljs$core$async$state_machine__37220__auto__);

(statearr_39529[(1)] = (1));

return statearr_39529;
});
var cljs$core$async$state_machine__37220__auto____1 = (function (state_39502){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_39502);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e39532){if((e39532 instanceof Object)){
var ex__37223__auto__ = e39532;
var statearr_39533_41732 = state_39502;
(statearr_39533_41732[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41733 = state_39502;
state_39502 = G__41733;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$state_machine__37220__auto__ = function(state_39502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37220__auto____1.call(this,state_39502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37220__auto____0;
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37220__auto____1;
return cljs$core$async$state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_39536 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_39536[(6)] = c__37470__auto___41693);

return statearr_39536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
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
var G__39538 = arguments.length;
switch (G__39538) {
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
var c__37470__auto___41744 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_39564){
var state_val_39565 = (state_39564[(1)]);
if((state_val_39565 === (7))){
var inst_39544 = (state_39564[(7)]);
var inst_39544__$1 = (state_39564[(2)]);
var inst_39545 = (inst_39544__$1 == null);
var inst_39546 = cljs.core.not(inst_39545);
var state_39564__$1 = (function (){var statearr_39567 = state_39564;
(statearr_39567[(7)] = inst_39544__$1);

return statearr_39567;
})();
if(inst_39546){
var statearr_39568_41745 = state_39564__$1;
(statearr_39568_41745[(1)] = (8));

} else {
var statearr_39570_41746 = state_39564__$1;
(statearr_39570_41746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (1))){
var inst_39539 = (0);
var state_39564__$1 = (function (){var statearr_39573 = state_39564;
(statearr_39573[(8)] = inst_39539);

return statearr_39573;
})();
var statearr_39574_41750 = state_39564__$1;
(statearr_39574_41750[(2)] = null);

(statearr_39574_41750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (4))){
var state_39564__$1 = state_39564;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39564__$1,(7),ch);
} else {
if((state_val_39565 === (6))){
var inst_39557 = (state_39564[(2)]);
var state_39564__$1 = state_39564;
var statearr_39576_41751 = state_39564__$1;
(statearr_39576_41751[(2)] = inst_39557);

(statearr_39576_41751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (3))){
var inst_39559 = (state_39564[(2)]);
var inst_39561 = cljs.core.async.close_BANG_(out);
var state_39564__$1 = (function (){var statearr_39585 = state_39564;
(statearr_39585[(9)] = inst_39559);

return statearr_39585;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39564__$1,inst_39561);
} else {
if((state_val_39565 === (2))){
var inst_39539 = (state_39564[(8)]);
var inst_39541 = (inst_39539 < n);
var state_39564__$1 = state_39564;
if(cljs.core.truth_(inst_39541)){
var statearr_39586_41753 = state_39564__$1;
(statearr_39586_41753[(1)] = (4));

} else {
var statearr_39591_41754 = state_39564__$1;
(statearr_39591_41754[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (11))){
var inst_39539 = (state_39564[(8)]);
var inst_39549 = (state_39564[(2)]);
var inst_39550 = (inst_39539 + (1));
var inst_39539__$1 = inst_39550;
var state_39564__$1 = (function (){var statearr_39592 = state_39564;
(statearr_39592[(8)] = inst_39539__$1);

(statearr_39592[(10)] = inst_39549);

return statearr_39592;
})();
var statearr_39593_41755 = state_39564__$1;
(statearr_39593_41755[(2)] = null);

(statearr_39593_41755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (9))){
var state_39564__$1 = state_39564;
var statearr_39594_41756 = state_39564__$1;
(statearr_39594_41756[(2)] = null);

(statearr_39594_41756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (5))){
var state_39564__$1 = state_39564;
var statearr_39597_41763 = state_39564__$1;
(statearr_39597_41763[(2)] = null);

(statearr_39597_41763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (10))){
var inst_39554 = (state_39564[(2)]);
var state_39564__$1 = state_39564;
var statearr_39598_41766 = state_39564__$1;
(statearr_39598_41766[(2)] = inst_39554);

(statearr_39598_41766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39565 === (8))){
var inst_39544 = (state_39564[(7)]);
var state_39564__$1 = state_39564;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39564__$1,(11),out,inst_39544);
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
var cljs$core$async$state_machine__37220__auto__ = null;
var cljs$core$async$state_machine__37220__auto____0 = (function (){
var statearr_39599 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39599[(0)] = cljs$core$async$state_machine__37220__auto__);

(statearr_39599[(1)] = (1));

return statearr_39599;
});
var cljs$core$async$state_machine__37220__auto____1 = (function (state_39564){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_39564);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e39600){if((e39600 instanceof Object)){
var ex__37223__auto__ = e39600;
var statearr_39601_41769 = state_39564;
(statearr_39601_41769[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39600;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41770 = state_39564;
state_39564 = G__41770;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$state_machine__37220__auto__ = function(state_39564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37220__auto____1.call(this,state_39564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37220__auto____0;
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37220__auto____1;
return cljs$core$async$state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_39602 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_39602[(6)] = c__37470__auto___41744);

return statearr_39602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39604 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39604 = (function (f,ch,meta39605){
this.f = f;
this.ch = ch;
this.meta39605 = meta39605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39606,meta39605__$1){
var self__ = this;
var _39606__$1 = this;
return (new cljs.core.async.t_cljs$core$async39604(self__.f,self__.ch,meta39605__$1));
}));

(cljs.core.async.t_cljs$core$async39604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39606){
var self__ = this;
var _39606__$1 = this;
return self__.meta39605;
}));

(cljs.core.async.t_cljs$core$async39604.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39604.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39604.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39604.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39604.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39609 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39609 = (function (f,ch,meta39605,_,fn1,meta39610){
this.f = f;
this.ch = ch;
this.meta39605 = meta39605;
this._ = _;
this.fn1 = fn1;
this.meta39610 = meta39610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39611,meta39610__$1){
var self__ = this;
var _39611__$1 = this;
return (new cljs.core.async.t_cljs$core$async39609(self__.f,self__.ch,self__.meta39605,self__._,self__.fn1,meta39610__$1));
}));

(cljs.core.async.t_cljs$core$async39609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39611){
var self__ = this;
var _39611__$1 = this;
return self__.meta39610;
}));

(cljs.core.async.t_cljs$core$async39609.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async39609.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async39609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__39603_SHARP_){
var G__39617 = (((p1__39603_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__39603_SHARP_) : self__.f.call(null,p1__39603_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__39617) : f1.call(null,G__39617));
});
}));

(cljs.core.async.t_cljs$core$async39609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39605","meta39605",316283763,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39604","cljs.core.async/t_cljs$core$async39604",-671812740,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39610","meta39610",-1517481693,null)], null);
}));

(cljs.core.async.t_cljs$core$async39609.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39609");

(cljs.core.async.t_cljs$core$async39609.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39609");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39609.
 */
cljs.core.async.__GT_t_cljs$core$async39609 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39609(f__$1,ch__$1,meta39605__$1,___$2,fn1__$1,meta39610){
return (new cljs.core.async.t_cljs$core$async39609(f__$1,ch__$1,meta39605__$1,___$2,fn1__$1,meta39610));
});

}

return (new cljs.core.async.t_cljs$core$async39609(self__.f,self__.ch,self__.meta39605,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__39624 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__39624) : self__.f.call(null,G__39624));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async39604.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39604.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async39604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39605","meta39605",316283763,null)], null);
}));

(cljs.core.async.t_cljs$core$async39604.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39604");

(cljs.core.async.t_cljs$core$async39604.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39604");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39604.
 */
cljs.core.async.__GT_t_cljs$core$async39604 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39604(f__$1,ch__$1,meta39605){
return (new cljs.core.async.t_cljs$core$async39604(f__$1,ch__$1,meta39605));
});

}

return (new cljs.core.async.t_cljs$core$async39604(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39646 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39646 = (function (f,ch,meta39647){
this.f = f;
this.ch = ch;
this.meta39647 = meta39647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39648,meta39647__$1){
var self__ = this;
var _39648__$1 = this;
return (new cljs.core.async.t_cljs$core$async39646(self__.f,self__.ch,meta39647__$1));
}));

(cljs.core.async.t_cljs$core$async39646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39648){
var self__ = this;
var _39648__$1 = this;
return self__.meta39647;
}));

(cljs.core.async.t_cljs$core$async39646.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39646.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39646.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39646.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39646.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39646.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async39646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39647","meta39647",2062244759,null)], null);
}));

(cljs.core.async.t_cljs$core$async39646.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39646");

(cljs.core.async.t_cljs$core$async39646.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39646");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39646.
 */
cljs.core.async.__GT_t_cljs$core$async39646 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39646(f__$1,ch__$1,meta39647){
return (new cljs.core.async.t_cljs$core$async39646(f__$1,ch__$1,meta39647));
});

}

return (new cljs.core.async.t_cljs$core$async39646(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39663 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39663 = (function (p,ch,meta39664){
this.p = p;
this.ch = ch;
this.meta39664 = meta39664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async39663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39665,meta39664__$1){
var self__ = this;
var _39665__$1 = this;
return (new cljs.core.async.t_cljs$core$async39663(self__.p,self__.ch,meta39664__$1));
}));

(cljs.core.async.t_cljs$core$async39663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39665){
var self__ = this;
var _39665__$1 = this;
return self__.meta39664;
}));

(cljs.core.async.t_cljs$core$async39663.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39663.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39663.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async39663.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39663.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async39663.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async39663.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async39663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39664","meta39664",652003304,null)], null);
}));

(cljs.core.async.t_cljs$core$async39663.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async39663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39663");

(cljs.core.async.t_cljs$core$async39663.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async39663");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39663.
 */
cljs.core.async.__GT_t_cljs$core$async39663 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39663(p__$1,ch__$1,meta39664){
return (new cljs.core.async.t_cljs$core$async39663(p__$1,ch__$1,meta39664));
});

}

return (new cljs.core.async.t_cljs$core$async39663(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39725 = arguments.length;
switch (G__39725) {
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
var c__37470__auto___41831 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_39758){
var state_val_39759 = (state_39758[(1)]);
if((state_val_39759 === (7))){
var inst_39752 = (state_39758[(2)]);
var state_39758__$1 = state_39758;
var statearr_39772_41836 = state_39758__$1;
(statearr_39772_41836[(2)] = inst_39752);

(statearr_39772_41836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39759 === (1))){
var state_39758__$1 = state_39758;
var statearr_39776_41838 = state_39758__$1;
(statearr_39776_41838[(2)] = null);

(statearr_39776_41838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39759 === (4))){
var inst_39736 = (state_39758[(7)]);
var inst_39736__$1 = (state_39758[(2)]);
var inst_39737 = (inst_39736__$1 == null);
var state_39758__$1 = (function (){var statearr_39782 = state_39758;
(statearr_39782[(7)] = inst_39736__$1);

return statearr_39782;
})();
if(cljs.core.truth_(inst_39737)){
var statearr_39783_41845 = state_39758__$1;
(statearr_39783_41845[(1)] = (5));

} else {
var statearr_39784_41846 = state_39758__$1;
(statearr_39784_41846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39759 === (6))){
var inst_39736 = (state_39758[(7)]);
var inst_39742 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39736) : p.call(null,inst_39736));
var state_39758__$1 = state_39758;
if(cljs.core.truth_(inst_39742)){
var statearr_39785_41848 = state_39758__$1;
(statearr_39785_41848[(1)] = (8));

} else {
var statearr_39788_41849 = state_39758__$1;
(statearr_39788_41849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39759 === (3))){
var inst_39754 = (state_39758[(2)]);
var state_39758__$1 = state_39758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39758__$1,inst_39754);
} else {
if((state_val_39759 === (2))){
var state_39758__$1 = state_39758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39758__$1,(4),ch);
} else {
if((state_val_39759 === (11))){
var inst_39745 = (state_39758[(2)]);
var state_39758__$1 = state_39758;
var statearr_39792_41857 = state_39758__$1;
(statearr_39792_41857[(2)] = inst_39745);

(statearr_39792_41857[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39759 === (9))){
var state_39758__$1 = state_39758;
var statearr_39793_41858 = state_39758__$1;
(statearr_39793_41858[(2)] = null);

(statearr_39793_41858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39759 === (5))){
var inst_39739 = cljs.core.async.close_BANG_(out);
var state_39758__$1 = state_39758;
var statearr_39794_41859 = state_39758__$1;
(statearr_39794_41859[(2)] = inst_39739);

(statearr_39794_41859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39759 === (10))){
var inst_39749 = (state_39758[(2)]);
var state_39758__$1 = (function (){var statearr_39795 = state_39758;
(statearr_39795[(8)] = inst_39749);

return statearr_39795;
})();
var statearr_39796_41860 = state_39758__$1;
(statearr_39796_41860[(2)] = null);

(statearr_39796_41860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39759 === (8))){
var inst_39736 = (state_39758[(7)]);
var state_39758__$1 = state_39758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39758__$1,(11),out,inst_39736);
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
var cljs$core$async$state_machine__37220__auto__ = null;
var cljs$core$async$state_machine__37220__auto____0 = (function (){
var statearr_39797 = [null,null,null,null,null,null,null,null,null];
(statearr_39797[(0)] = cljs$core$async$state_machine__37220__auto__);

(statearr_39797[(1)] = (1));

return statearr_39797;
});
var cljs$core$async$state_machine__37220__auto____1 = (function (state_39758){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_39758);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e39798){if((e39798 instanceof Object)){
var ex__37223__auto__ = e39798;
var statearr_39799_41862 = state_39758;
(statearr_39799_41862[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39798;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41864 = state_39758;
state_39758 = G__41864;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$state_machine__37220__auto__ = function(state_39758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37220__auto____1.call(this,state_39758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37220__auto____0;
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37220__auto____1;
return cljs$core$async$state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_39802 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_39802[(6)] = c__37470__auto___41831);

return statearr_39802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39804 = arguments.length;
switch (G__39804) {
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
var c__37470__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_39874){
var state_val_39875 = (state_39874[(1)]);
if((state_val_39875 === (7))){
var inst_39866 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
var statearr_39890_41870 = state_39874__$1;
(statearr_39890_41870[(2)] = inst_39866);

(statearr_39890_41870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (20))){
var inst_39833 = (state_39874[(7)]);
var inst_39847 = (state_39874[(2)]);
var inst_39848 = cljs.core.next(inst_39833);
var inst_39818 = inst_39848;
var inst_39819 = null;
var inst_39820 = (0);
var inst_39821 = (0);
var state_39874__$1 = (function (){var statearr_39892 = state_39874;
(statearr_39892[(8)] = inst_39847);

(statearr_39892[(9)] = inst_39819);

(statearr_39892[(10)] = inst_39820);

(statearr_39892[(11)] = inst_39821);

(statearr_39892[(12)] = inst_39818);

return statearr_39892;
})();
var statearr_39893_41872 = state_39874__$1;
(statearr_39893_41872[(2)] = null);

(statearr_39893_41872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (1))){
var state_39874__$1 = state_39874;
var statearr_39894_41873 = state_39874__$1;
(statearr_39894_41873[(2)] = null);

(statearr_39894_41873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (4))){
var inst_39807 = (state_39874[(13)]);
var inst_39807__$1 = (state_39874[(2)]);
var inst_39808 = (inst_39807__$1 == null);
var state_39874__$1 = (function (){var statearr_39897 = state_39874;
(statearr_39897[(13)] = inst_39807__$1);

return statearr_39897;
})();
if(cljs.core.truth_(inst_39808)){
var statearr_39898_41876 = state_39874__$1;
(statearr_39898_41876[(1)] = (5));

} else {
var statearr_39899_41877 = state_39874__$1;
(statearr_39899_41877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (15))){
var state_39874__$1 = state_39874;
var statearr_39903_41878 = state_39874__$1;
(statearr_39903_41878[(2)] = null);

(statearr_39903_41878[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (21))){
var state_39874__$1 = state_39874;
var statearr_39904_41879 = state_39874__$1;
(statearr_39904_41879[(2)] = null);

(statearr_39904_41879[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (13))){
var inst_39819 = (state_39874[(9)]);
var inst_39820 = (state_39874[(10)]);
var inst_39821 = (state_39874[(11)]);
var inst_39818 = (state_39874[(12)]);
var inst_39829 = (state_39874[(2)]);
var inst_39830 = (inst_39821 + (1));
var tmp39900 = inst_39819;
var tmp39901 = inst_39820;
var tmp39902 = inst_39818;
var inst_39818__$1 = tmp39902;
var inst_39819__$1 = tmp39900;
var inst_39820__$1 = tmp39901;
var inst_39821__$1 = inst_39830;
var state_39874__$1 = (function (){var statearr_39906 = state_39874;
(statearr_39906[(9)] = inst_39819__$1);

(statearr_39906[(10)] = inst_39820__$1);

(statearr_39906[(11)] = inst_39821__$1);

(statearr_39906[(12)] = inst_39818__$1);

(statearr_39906[(14)] = inst_39829);

return statearr_39906;
})();
var statearr_39909_41881 = state_39874__$1;
(statearr_39909_41881[(2)] = null);

(statearr_39909_41881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (22))){
var state_39874__$1 = state_39874;
var statearr_39910_41882 = state_39874__$1;
(statearr_39910_41882[(2)] = null);

(statearr_39910_41882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (6))){
var inst_39807 = (state_39874[(13)]);
var inst_39816 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39807) : f.call(null,inst_39807));
var inst_39817 = cljs.core.seq(inst_39816);
var inst_39818 = inst_39817;
var inst_39819 = null;
var inst_39820 = (0);
var inst_39821 = (0);
var state_39874__$1 = (function (){var statearr_39911 = state_39874;
(statearr_39911[(9)] = inst_39819);

(statearr_39911[(10)] = inst_39820);

(statearr_39911[(11)] = inst_39821);

(statearr_39911[(12)] = inst_39818);

return statearr_39911;
})();
var statearr_39913_41884 = state_39874__$1;
(statearr_39913_41884[(2)] = null);

(statearr_39913_41884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (17))){
var inst_39833 = (state_39874[(7)]);
var inst_39837 = cljs.core.chunk_first(inst_39833);
var inst_39839 = cljs.core.chunk_rest(inst_39833);
var inst_39840 = cljs.core.count(inst_39837);
var inst_39818 = inst_39839;
var inst_39819 = inst_39837;
var inst_39820 = inst_39840;
var inst_39821 = (0);
var state_39874__$1 = (function (){var statearr_39915 = state_39874;
(statearr_39915[(9)] = inst_39819);

(statearr_39915[(10)] = inst_39820);

(statearr_39915[(11)] = inst_39821);

(statearr_39915[(12)] = inst_39818);

return statearr_39915;
})();
var statearr_39916_41888 = state_39874__$1;
(statearr_39916_41888[(2)] = null);

(statearr_39916_41888[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (3))){
var inst_39868 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39874__$1,inst_39868);
} else {
if((state_val_39875 === (12))){
var inst_39856 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
var statearr_39917_41890 = state_39874__$1;
(statearr_39917_41890[(2)] = inst_39856);

(statearr_39917_41890[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (2))){
var state_39874__$1 = state_39874;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39874__$1,(4),in$);
} else {
if((state_val_39875 === (23))){
var inst_39864 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
var statearr_39918_41893 = state_39874__$1;
(statearr_39918_41893[(2)] = inst_39864);

(statearr_39918_41893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (19))){
var inst_39851 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
var statearr_39920_41894 = state_39874__$1;
(statearr_39920_41894[(2)] = inst_39851);

(statearr_39920_41894[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (11))){
var inst_39818 = (state_39874[(12)]);
var inst_39833 = (state_39874[(7)]);
var inst_39833__$1 = cljs.core.seq(inst_39818);
var state_39874__$1 = (function (){var statearr_39921 = state_39874;
(statearr_39921[(7)] = inst_39833__$1);

return statearr_39921;
})();
if(inst_39833__$1){
var statearr_39922_41900 = state_39874__$1;
(statearr_39922_41900[(1)] = (14));

} else {
var statearr_39923_41904 = state_39874__$1;
(statearr_39923_41904[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (9))){
var inst_39858 = (state_39874[(2)]);
var inst_39859 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_39874__$1 = (function (){var statearr_39924 = state_39874;
(statearr_39924[(15)] = inst_39858);

return statearr_39924;
})();
if(cljs.core.truth_(inst_39859)){
var statearr_39926_41915 = state_39874__$1;
(statearr_39926_41915[(1)] = (21));

} else {
var statearr_39929_41916 = state_39874__$1;
(statearr_39929_41916[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (5))){
var inst_39810 = cljs.core.async.close_BANG_(out);
var state_39874__$1 = state_39874;
var statearr_39932_41919 = state_39874__$1;
(statearr_39932_41919[(2)] = inst_39810);

(statearr_39932_41919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (14))){
var inst_39833 = (state_39874[(7)]);
var inst_39835 = cljs.core.chunked_seq_QMARK_(inst_39833);
var state_39874__$1 = state_39874;
if(inst_39835){
var statearr_39933_41927 = state_39874__$1;
(statearr_39933_41927[(1)] = (17));

} else {
var statearr_39934_41931 = state_39874__$1;
(statearr_39934_41931[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (16))){
var inst_39854 = (state_39874[(2)]);
var state_39874__$1 = state_39874;
var statearr_39936_41934 = state_39874__$1;
(statearr_39936_41934[(2)] = inst_39854);

(statearr_39936_41934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39875 === (10))){
var inst_39819 = (state_39874[(9)]);
var inst_39821 = (state_39874[(11)]);
var inst_39827 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39819,inst_39821);
var state_39874__$1 = state_39874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39874__$1,(13),out,inst_39827);
} else {
if((state_val_39875 === (18))){
var inst_39833 = (state_39874[(7)]);
var inst_39845 = cljs.core.first(inst_39833);
var state_39874__$1 = state_39874;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39874__$1,(20),out,inst_39845);
} else {
if((state_val_39875 === (8))){
var inst_39820 = (state_39874[(10)]);
var inst_39821 = (state_39874[(11)]);
var inst_39823 = (inst_39821 < inst_39820);
var inst_39824 = inst_39823;
var state_39874__$1 = state_39874;
if(cljs.core.truth_(inst_39824)){
var statearr_39937_41936 = state_39874__$1;
(statearr_39937_41936[(1)] = (10));

} else {
var statearr_39938_41937 = state_39874__$1;
(statearr_39938_41937[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__37220__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37220__auto____0 = (function (){
var statearr_39939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39939[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37220__auto__);

(statearr_39939[(1)] = (1));

return statearr_39939;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37220__auto____1 = (function (state_39874){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_39874);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e39940){if((e39940 instanceof Object)){
var ex__37223__auto__ = e39940;
var statearr_39941_41944 = state_39874;
(statearr_39941_41944[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39940;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41950 = state_39874;
state_39874 = G__41950;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37220__auto__ = function(state_39874){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37220__auto____1.call(this,state_39874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37220__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37220__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_39954 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_39954[(6)] = c__37470__auto__);

return statearr_39954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
}));

return c__37470__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39957 = arguments.length;
switch (G__39957) {
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
var G__39959 = arguments.length;
switch (G__39959) {
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
var G__39962 = arguments.length;
switch (G__39962) {
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
var c__37470__auto___41993 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_39996){
var state_val_39997 = (state_39996[(1)]);
if((state_val_39997 === (7))){
var inst_39991 = (state_39996[(2)]);
var state_39996__$1 = state_39996;
var statearr_40004_41995 = state_39996__$1;
(statearr_40004_41995[(2)] = inst_39991);

(statearr_40004_41995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39997 === (1))){
var inst_39968 = null;
var state_39996__$1 = (function (){var statearr_40009 = state_39996;
(statearr_40009[(7)] = inst_39968);

return statearr_40009;
})();
var statearr_40010_41996 = state_39996__$1;
(statearr_40010_41996[(2)] = null);

(statearr_40010_41996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39997 === (4))){
var inst_39974 = (state_39996[(8)]);
var inst_39974__$1 = (state_39996[(2)]);
var inst_39975 = (inst_39974__$1 == null);
var inst_39976 = cljs.core.not(inst_39975);
var state_39996__$1 = (function (){var statearr_40011 = state_39996;
(statearr_40011[(8)] = inst_39974__$1);

return statearr_40011;
})();
if(inst_39976){
var statearr_40015_42000 = state_39996__$1;
(statearr_40015_42000[(1)] = (5));

} else {
var statearr_40016_42002 = state_39996__$1;
(statearr_40016_42002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39997 === (6))){
var state_39996__$1 = state_39996;
var statearr_40017_42004 = state_39996__$1;
(statearr_40017_42004[(2)] = null);

(statearr_40017_42004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39997 === (3))){
var inst_39993 = (state_39996[(2)]);
var inst_39994 = cljs.core.async.close_BANG_(out);
var state_39996__$1 = (function (){var statearr_40020 = state_39996;
(statearr_40020[(9)] = inst_39993);

return statearr_40020;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39996__$1,inst_39994);
} else {
if((state_val_39997 === (2))){
var state_39996__$1 = state_39996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39996__$1,(4),ch);
} else {
if((state_val_39997 === (11))){
var inst_39974 = (state_39996[(8)]);
var inst_39983 = (state_39996[(2)]);
var inst_39968 = inst_39974;
var state_39996__$1 = (function (){var statearr_40023 = state_39996;
(statearr_40023[(10)] = inst_39983);

(statearr_40023[(7)] = inst_39968);

return statearr_40023;
})();
var statearr_40024_42008 = state_39996__$1;
(statearr_40024_42008[(2)] = null);

(statearr_40024_42008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39997 === (9))){
var inst_39974 = (state_39996[(8)]);
var state_39996__$1 = state_39996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39996__$1,(11),out,inst_39974);
} else {
if((state_val_39997 === (5))){
var inst_39968 = (state_39996[(7)]);
var inst_39974 = (state_39996[(8)]);
var inst_39978 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39974,inst_39968);
var state_39996__$1 = state_39996;
if(inst_39978){
var statearr_40026_42014 = state_39996__$1;
(statearr_40026_42014[(1)] = (8));

} else {
var statearr_40027_42015 = state_39996__$1;
(statearr_40027_42015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39997 === (10))){
var inst_39988 = (state_39996[(2)]);
var state_39996__$1 = state_39996;
var statearr_40028_42016 = state_39996__$1;
(statearr_40028_42016[(2)] = inst_39988);

(statearr_40028_42016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39997 === (8))){
var inst_39968 = (state_39996[(7)]);
var tmp40025 = inst_39968;
var inst_39968__$1 = tmp40025;
var state_39996__$1 = (function (){var statearr_40029 = state_39996;
(statearr_40029[(7)] = inst_39968__$1);

return statearr_40029;
})();
var statearr_40030_42017 = state_39996__$1;
(statearr_40030_42017[(2)] = null);

(statearr_40030_42017[(1)] = (2));


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
var cljs$core$async$state_machine__37220__auto__ = null;
var cljs$core$async$state_machine__37220__auto____0 = (function (){
var statearr_40031 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40031[(0)] = cljs$core$async$state_machine__37220__auto__);

(statearr_40031[(1)] = (1));

return statearr_40031;
});
var cljs$core$async$state_machine__37220__auto____1 = (function (state_39996){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_39996);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e40033){if((e40033 instanceof Object)){
var ex__37223__auto__ = e40033;
var statearr_40041_42024 = state_39996;
(statearr_40041_42024[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40033;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42025 = state_39996;
state_39996 = G__42025;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$state_machine__37220__auto__ = function(state_39996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37220__auto____1.call(this,state_39996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37220__auto____0;
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37220__auto____1;
return cljs$core$async$state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_40042 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_40042[(6)] = c__37470__auto___41993);

return statearr_40042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40055 = arguments.length;
switch (G__40055) {
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
var c__37470__auto___42035 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_40106){
var state_val_40107 = (state_40106[(1)]);
if((state_val_40107 === (7))){
var inst_40102 = (state_40106[(2)]);
var state_40106__$1 = state_40106;
var statearr_40110_42039 = state_40106__$1;
(statearr_40110_42039[(2)] = inst_40102);

(statearr_40110_42039[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40107 === (1))){
var inst_40060 = (new Array(n));
var inst_40061 = inst_40060;
var inst_40062 = (0);
var state_40106__$1 = (function (){var statearr_40111 = state_40106;
(statearr_40111[(7)] = inst_40062);

(statearr_40111[(8)] = inst_40061);

return statearr_40111;
})();
var statearr_40115_42041 = state_40106__$1;
(statearr_40115_42041[(2)] = null);

(statearr_40115_42041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40107 === (4))){
var inst_40065 = (state_40106[(9)]);
var inst_40065__$1 = (state_40106[(2)]);
var inst_40066 = (inst_40065__$1 == null);
var inst_40067 = cljs.core.not(inst_40066);
var state_40106__$1 = (function (){var statearr_40123 = state_40106;
(statearr_40123[(9)] = inst_40065__$1);

return statearr_40123;
})();
if(inst_40067){
var statearr_40124_42053 = state_40106__$1;
(statearr_40124_42053[(1)] = (5));

} else {
var statearr_40125_42058 = state_40106__$1;
(statearr_40125_42058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40107 === (15))){
var inst_40096 = (state_40106[(2)]);
var state_40106__$1 = state_40106;
var statearr_40126_42060 = state_40106__$1;
(statearr_40126_42060[(2)] = inst_40096);

(statearr_40126_42060[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40107 === (13))){
var state_40106__$1 = state_40106;
var statearr_40127_42070 = state_40106__$1;
(statearr_40127_42070[(2)] = null);

(statearr_40127_42070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40107 === (6))){
var inst_40062 = (state_40106[(7)]);
var inst_40092 = (inst_40062 > (0));
var state_40106__$1 = state_40106;
if(cljs.core.truth_(inst_40092)){
var statearr_40130_42076 = state_40106__$1;
(statearr_40130_42076[(1)] = (12));

} else {
var statearr_40131_42081 = state_40106__$1;
(statearr_40131_42081[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40107 === (3))){
var inst_40104 = (state_40106[(2)]);
var state_40106__$1 = state_40106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40106__$1,inst_40104);
} else {
if((state_val_40107 === (12))){
var inst_40061 = (state_40106[(8)]);
var inst_40094 = cljs.core.vec(inst_40061);
var state_40106__$1 = state_40106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40106__$1,(15),out,inst_40094);
} else {
if((state_val_40107 === (2))){
var state_40106__$1 = state_40106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40106__$1,(4),ch);
} else {
if((state_val_40107 === (11))){
var inst_40086 = (state_40106[(2)]);
var inst_40087 = (new Array(n));
var inst_40061 = inst_40087;
var inst_40062 = (0);
var state_40106__$1 = (function (){var statearr_40136 = state_40106;
(statearr_40136[(7)] = inst_40062);

(statearr_40136[(10)] = inst_40086);

(statearr_40136[(8)] = inst_40061);

return statearr_40136;
})();
var statearr_40137_42108 = state_40106__$1;
(statearr_40137_42108[(2)] = null);

(statearr_40137_42108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40107 === (9))){
var inst_40061 = (state_40106[(8)]);
var inst_40084 = cljs.core.vec(inst_40061);
var state_40106__$1 = state_40106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40106__$1,(11),out,inst_40084);
} else {
if((state_val_40107 === (5))){
var inst_40070 = (state_40106[(11)]);
var inst_40062 = (state_40106[(7)]);
var inst_40065 = (state_40106[(9)]);
var inst_40061 = (state_40106[(8)]);
var inst_40069 = (inst_40061[inst_40062] = inst_40065);
var inst_40070__$1 = (inst_40062 + (1));
var inst_40075 = (inst_40070__$1 < n);
var state_40106__$1 = (function (){var statearr_40139 = state_40106;
(statearr_40139[(11)] = inst_40070__$1);

(statearr_40139[(12)] = inst_40069);

return statearr_40139;
})();
if(cljs.core.truth_(inst_40075)){
var statearr_40140_42128 = state_40106__$1;
(statearr_40140_42128[(1)] = (8));

} else {
var statearr_40142_42131 = state_40106__$1;
(statearr_40142_42131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40107 === (14))){
var inst_40099 = (state_40106[(2)]);
var inst_40100 = cljs.core.async.close_BANG_(out);
var state_40106__$1 = (function (){var statearr_40144 = state_40106;
(statearr_40144[(13)] = inst_40099);

return statearr_40144;
})();
var statearr_40145_42145 = state_40106__$1;
(statearr_40145_42145[(2)] = inst_40100);

(statearr_40145_42145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40107 === (10))){
var inst_40090 = (state_40106[(2)]);
var state_40106__$1 = state_40106;
var statearr_40153_42154 = state_40106__$1;
(statearr_40153_42154[(2)] = inst_40090);

(statearr_40153_42154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40107 === (8))){
var inst_40070 = (state_40106[(11)]);
var inst_40061 = (state_40106[(8)]);
var tmp40143 = inst_40061;
var inst_40061__$1 = tmp40143;
var inst_40062 = inst_40070;
var state_40106__$1 = (function (){var statearr_40156 = state_40106;
(statearr_40156[(7)] = inst_40062);

(statearr_40156[(8)] = inst_40061__$1);

return statearr_40156;
})();
var statearr_40157_42160 = state_40106__$1;
(statearr_40157_42160[(2)] = null);

(statearr_40157_42160[(1)] = (2));


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
var cljs$core$async$state_machine__37220__auto__ = null;
var cljs$core$async$state_machine__37220__auto____0 = (function (){
var statearr_40159 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40159[(0)] = cljs$core$async$state_machine__37220__auto__);

(statearr_40159[(1)] = (1));

return statearr_40159;
});
var cljs$core$async$state_machine__37220__auto____1 = (function (state_40106){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_40106);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e40160){if((e40160 instanceof Object)){
var ex__37223__auto__ = e40160;
var statearr_40161_42161 = state_40106;
(statearr_40161_42161[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40160;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42165 = state_40106;
state_40106 = G__42165;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$state_machine__37220__auto__ = function(state_40106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37220__auto____1.call(this,state_40106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37220__auto____0;
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37220__auto____1;
return cljs$core$async$state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_40162 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_40162[(6)] = c__37470__auto___42035);

return statearr_40162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40168 = arguments.length;
switch (G__40168) {
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
var c__37470__auto___42191 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__37471__auto__ = (function (){var switch__37219__auto__ = (function (state_40217){
var state_val_40218 = (state_40217[(1)]);
if((state_val_40218 === (7))){
var inst_40212 = (state_40217[(2)]);
var state_40217__$1 = state_40217;
var statearr_40222_42193 = state_40217__$1;
(statearr_40222_42193[(2)] = inst_40212);

(statearr_40222_42193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (1))){
var inst_40174 = [];
var inst_40175 = inst_40174;
var inst_40176 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40217__$1 = (function (){var statearr_40223 = state_40217;
(statearr_40223[(7)] = inst_40175);

(statearr_40223[(8)] = inst_40176);

return statearr_40223;
})();
var statearr_40224_42198 = state_40217__$1;
(statearr_40224_42198[(2)] = null);

(statearr_40224_42198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (4))){
var inst_40179 = (state_40217[(9)]);
var inst_40179__$1 = (state_40217[(2)]);
var inst_40180 = (inst_40179__$1 == null);
var inst_40181 = cljs.core.not(inst_40180);
var state_40217__$1 = (function (){var statearr_40225 = state_40217;
(statearr_40225[(9)] = inst_40179__$1);

return statearr_40225;
})();
if(inst_40181){
var statearr_40226_42202 = state_40217__$1;
(statearr_40226_42202[(1)] = (5));

} else {
var statearr_40227_42204 = state_40217__$1;
(statearr_40227_42204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (15))){
var inst_40206 = (state_40217[(2)]);
var state_40217__$1 = state_40217;
var statearr_40228_42216 = state_40217__$1;
(statearr_40228_42216[(2)] = inst_40206);

(statearr_40228_42216[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (13))){
var state_40217__$1 = state_40217;
var statearr_40233_42219 = state_40217__$1;
(statearr_40233_42219[(2)] = null);

(statearr_40233_42219[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (6))){
var inst_40175 = (state_40217[(7)]);
var inst_40201 = inst_40175.length;
var inst_40202 = (inst_40201 > (0));
var state_40217__$1 = state_40217;
if(cljs.core.truth_(inst_40202)){
var statearr_40235_42223 = state_40217__$1;
(statearr_40235_42223[(1)] = (12));

} else {
var statearr_40236_42224 = state_40217__$1;
(statearr_40236_42224[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (3))){
var inst_40214 = (state_40217[(2)]);
var state_40217__$1 = state_40217;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40217__$1,inst_40214);
} else {
if((state_val_40218 === (12))){
var inst_40175 = (state_40217[(7)]);
var inst_40204 = cljs.core.vec(inst_40175);
var state_40217__$1 = state_40217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40217__$1,(15),out,inst_40204);
} else {
if((state_val_40218 === (2))){
var state_40217__$1 = state_40217;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40217__$1,(4),ch);
} else {
if((state_val_40218 === (11))){
var inst_40183 = (state_40217[(10)]);
var inst_40179 = (state_40217[(9)]);
var inst_40194 = (state_40217[(2)]);
var inst_40195 = [];
var inst_40196 = inst_40195.push(inst_40179);
var inst_40175 = inst_40195;
var inst_40176 = inst_40183;
var state_40217__$1 = (function (){var statearr_40241 = state_40217;
(statearr_40241[(11)] = inst_40196);

(statearr_40241[(7)] = inst_40175);

(statearr_40241[(8)] = inst_40176);

(statearr_40241[(12)] = inst_40194);

return statearr_40241;
})();
var statearr_40242_42235 = state_40217__$1;
(statearr_40242_42235[(2)] = null);

(statearr_40242_42235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (9))){
var inst_40175 = (state_40217[(7)]);
var inst_40192 = cljs.core.vec(inst_40175);
var state_40217__$1 = state_40217;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40217__$1,(11),out,inst_40192);
} else {
if((state_val_40218 === (5))){
var inst_40183 = (state_40217[(10)]);
var inst_40176 = (state_40217[(8)]);
var inst_40179 = (state_40217[(9)]);
var inst_40183__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40179) : f.call(null,inst_40179));
var inst_40184 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40183__$1,inst_40176);
var inst_40185 = cljs.core.keyword_identical_QMARK_(inst_40176,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40186 = ((inst_40184) || (inst_40185));
var state_40217__$1 = (function (){var statearr_40258 = state_40217;
(statearr_40258[(10)] = inst_40183__$1);

return statearr_40258;
})();
if(cljs.core.truth_(inst_40186)){
var statearr_40262_42249 = state_40217__$1;
(statearr_40262_42249[(1)] = (8));

} else {
var statearr_40264_42251 = state_40217__$1;
(statearr_40264_42251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (14))){
var inst_40209 = (state_40217[(2)]);
var inst_40210 = cljs.core.async.close_BANG_(out);
var state_40217__$1 = (function (){var statearr_40266 = state_40217;
(statearr_40266[(13)] = inst_40209);

return statearr_40266;
})();
var statearr_40267_42257 = state_40217__$1;
(statearr_40267_42257[(2)] = inst_40210);

(statearr_40267_42257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (10))){
var inst_40199 = (state_40217[(2)]);
var state_40217__$1 = state_40217;
var statearr_40272_42267 = state_40217__$1;
(statearr_40272_42267[(2)] = inst_40199);

(statearr_40272_42267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40218 === (8))){
var inst_40175 = (state_40217[(7)]);
var inst_40183 = (state_40217[(10)]);
var inst_40179 = (state_40217[(9)]);
var inst_40188 = inst_40175.push(inst_40179);
var tmp40265 = inst_40175;
var inst_40175__$1 = tmp40265;
var inst_40176 = inst_40183;
var state_40217__$1 = (function (){var statearr_40273 = state_40217;
(statearr_40273[(7)] = inst_40175__$1);

(statearr_40273[(8)] = inst_40176);

(statearr_40273[(14)] = inst_40188);

return statearr_40273;
})();
var statearr_40274_42277 = state_40217__$1;
(statearr_40274_42277[(2)] = null);

(statearr_40274_42277[(1)] = (2));


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
var cljs$core$async$state_machine__37220__auto__ = null;
var cljs$core$async$state_machine__37220__auto____0 = (function (){
var statearr_40283 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40283[(0)] = cljs$core$async$state_machine__37220__auto__);

(statearr_40283[(1)] = (1));

return statearr_40283;
});
var cljs$core$async$state_machine__37220__auto____1 = (function (state_40217){
while(true){
var ret_value__37221__auto__ = (function (){try{while(true){
var result__37222__auto__ = switch__37219__auto__(state_40217);
if(cljs.core.keyword_identical_QMARK_(result__37222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37222__auto__;
}
break;
}
}catch (e40284){if((e40284 instanceof Object)){
var ex__37223__auto__ = e40284;
var statearr_40285_42292 = state_40217;
(statearr_40285_42292[(5)] = ex__37223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40284;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__37221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42300 = state_40217;
state_40217 = G__42300;
continue;
} else {
return ret_value__37221__auto__;
}
break;
}
});
cljs$core$async$state_machine__37220__auto__ = function(state_40217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37220__auto____1.call(this,state_40217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37220__auto____0;
cljs$core$async$state_machine__37220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37220__auto____1;
return cljs$core$async$state_machine__37220__auto__;
})()
})();
var state__37472__auto__ = (function (){var statearr_40292 = (f__37471__auto__.cljs$core$IFn$_invoke$arity$0 ? f__37471__auto__.cljs$core$IFn$_invoke$arity$0() : f__37471__auto__.call(null));
(statearr_40292[(6)] = c__37470__auto___42191);

return statearr_40292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__37472__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
