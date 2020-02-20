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
var G__45298 = arguments.length;
switch (G__45298) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45299 = (function (f,blockable,meta45300){
this.f = f;
this.blockable = blockable;
this.meta45300 = meta45300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45301,meta45300__$1){
var self__ = this;
var _45301__$1 = this;
return (new cljs.core.async.t_cljs$core$async45299(self__.f,self__.blockable,meta45300__$1));
}));

(cljs.core.async.t_cljs$core$async45299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45301){
var self__ = this;
var _45301__$1 = this;
return self__.meta45300;
}));

(cljs.core.async.t_cljs$core$async45299.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45299.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async45299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async45299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta45300","meta45300",898687909,null)], null);
}));

(cljs.core.async.t_cljs$core$async45299.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45299");

(cljs.core.async.t_cljs$core$async45299.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async45299");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45299.
 */
cljs.core.async.__GT_t_cljs$core$async45299 = (function cljs$core$async$__GT_t_cljs$core$async45299(f__$1,blockable__$1,meta45300){
return (new cljs.core.async.t_cljs$core$async45299(f__$1,blockable__$1,meta45300));
});

}

return (new cljs.core.async.t_cljs$core$async45299(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45304 = arguments.length;
switch (G__45304) {
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
var G__45306 = arguments.length;
switch (G__45306) {
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
var G__45308 = arguments.length;
switch (G__45308) {
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
var val_46738 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46738) : fn1.call(null,val_46738));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_46738) : fn1.call(null,val_46738));
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
var G__45310 = arguments.length;
switch (G__45310) {
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
var n__4666__auto___46744 = n;
var x_46746 = (0);
while(true){
if((x_46746 < n__4666__auto___46744)){
(a[x_46746] = x_46746);

var G__46747 = (x_46746 + (1));
x_46746 = G__46747;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45311 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45311 = (function (flag,meta45312){
this.flag = flag;
this.meta45312 = meta45312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45313,meta45312__$1){
var self__ = this;
var _45313__$1 = this;
return (new cljs.core.async.t_cljs$core$async45311(self__.flag,meta45312__$1));
}));

(cljs.core.async.t_cljs$core$async45311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45313){
var self__ = this;
var _45313__$1 = this;
return self__.meta45312;
}));

(cljs.core.async.t_cljs$core$async45311.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45311.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45311.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45311.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async45311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta45312","meta45312",503023181,null)], null);
}));

(cljs.core.async.t_cljs$core$async45311.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45311");

(cljs.core.async.t_cljs$core$async45311.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async45311");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45311.
 */
cljs.core.async.__GT_t_cljs$core$async45311 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async45311(flag__$1,meta45312){
return (new cljs.core.async.t_cljs$core$async45311(flag__$1,meta45312));
});

}

return (new cljs.core.async.t_cljs$core$async45311(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45314 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45314 = (function (flag,cb,meta45315){
this.flag = flag;
this.cb = cb;
this.meta45315 = meta45315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45316,meta45315__$1){
var self__ = this;
var _45316__$1 = this;
return (new cljs.core.async.t_cljs$core$async45314(self__.flag,self__.cb,meta45315__$1));
}));

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45316){
var self__ = this;
var _45316__$1 = this;
return self__.meta45315;
}));

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async45314.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async45314.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta45315","meta45315",1200231910,null)], null);
}));

(cljs.core.async.t_cljs$core$async45314.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45314");

(cljs.core.async.t_cljs$core$async45314.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async45314");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45314.
 */
cljs.core.async.__GT_t_cljs$core$async45314 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async45314(flag__$1,cb__$1,meta45315){
return (new cljs.core.async.t_cljs$core$async45314(flag__$1,cb__$1,meta45315));
});

}

return (new cljs.core.async.t_cljs$core$async45314(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__45317_SHARP_){
var G__45319 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45317_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45319) : fret.call(null,G__45319));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__45318_SHARP_){
var G__45320 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__45318_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__45320) : fret.call(null,G__45320));
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
var G__46760 = (i + (1));
i = G__46760;
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
var len__4789__auto___46763 = arguments.length;
var i__4790__auto___46764 = (0);
while(true){
if((i__4790__auto___46764 < len__4789__auto___46763)){
args__4795__auto__.push((arguments[i__4790__auto___46764]));

var G__46765 = (i__4790__auto___46764 + (1));
i__4790__auto___46764 = G__46765;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__45323){
var map__45324 = p__45323;
var map__45324__$1 = (((((!((map__45324 == null))))?(((((map__45324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45324):map__45324);
var opts = map__45324__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq45321){
var G__45322 = cljs.core.first(seq45321);
var seq45321__$1 = cljs.core.next(seq45321);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45322,seq45321__$1);
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
var G__45327 = arguments.length;
switch (G__45327) {
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
var c__45238__auto___46778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_45351){
var state_val_45352 = (state_45351[(1)]);
if((state_val_45352 === (7))){
var inst_45347 = (state_45351[(2)]);
var state_45351__$1 = state_45351;
var statearr_45353_46780 = state_45351__$1;
(statearr_45353_46780[(2)] = inst_45347);

(statearr_45353_46780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (1))){
var state_45351__$1 = state_45351;
var statearr_45354_46782 = state_45351__$1;
(statearr_45354_46782[(2)] = null);

(statearr_45354_46782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (4))){
var inst_45330 = (state_45351[(7)]);
var inst_45330__$1 = (state_45351[(2)]);
var inst_45331 = (inst_45330__$1 == null);
var state_45351__$1 = (function (){var statearr_45355 = state_45351;
(statearr_45355[(7)] = inst_45330__$1);

return statearr_45355;
})();
if(cljs.core.truth_(inst_45331)){
var statearr_45356_46784 = state_45351__$1;
(statearr_45356_46784[(1)] = (5));

} else {
var statearr_45357_46785 = state_45351__$1;
(statearr_45357_46785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (13))){
var state_45351__$1 = state_45351;
var statearr_45358_46786 = state_45351__$1;
(statearr_45358_46786[(2)] = null);

(statearr_45358_46786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (6))){
var inst_45330 = (state_45351[(7)]);
var state_45351__$1 = state_45351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45351__$1,(11),to,inst_45330);
} else {
if((state_val_45352 === (3))){
var inst_45349 = (state_45351[(2)]);
var state_45351__$1 = state_45351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45351__$1,inst_45349);
} else {
if((state_val_45352 === (12))){
var state_45351__$1 = state_45351;
var statearr_45359_46787 = state_45351__$1;
(statearr_45359_46787[(2)] = null);

(statearr_45359_46787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (2))){
var state_45351__$1 = state_45351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45351__$1,(4),from);
} else {
if((state_val_45352 === (11))){
var inst_45340 = (state_45351[(2)]);
var state_45351__$1 = state_45351;
if(cljs.core.truth_(inst_45340)){
var statearr_45360_46790 = state_45351__$1;
(statearr_45360_46790[(1)] = (12));

} else {
var statearr_45361_46791 = state_45351__$1;
(statearr_45361_46791[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (9))){
var state_45351__$1 = state_45351;
var statearr_45362_46794 = state_45351__$1;
(statearr_45362_46794[(2)] = null);

(statearr_45362_46794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (5))){
var state_45351__$1 = state_45351;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45363_46795 = state_45351__$1;
(statearr_45363_46795[(1)] = (8));

} else {
var statearr_45364_46797 = state_45351__$1;
(statearr_45364_46797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (14))){
var inst_45345 = (state_45351[(2)]);
var state_45351__$1 = state_45351;
var statearr_45365_46798 = state_45351__$1;
(statearr_45365_46798[(2)] = inst_45345);

(statearr_45365_46798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (10))){
var inst_45337 = (state_45351[(2)]);
var state_45351__$1 = state_45351;
var statearr_45366_46803 = state_45351__$1;
(statearr_45366_46803[(2)] = inst_45337);

(statearr_45366_46803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45352 === (8))){
var inst_45334 = cljs.core.async.close_BANG_(to);
var state_45351__$1 = state_45351;
var statearr_45367_46805 = state_45351__$1;
(statearr_45367_46805[(2)] = inst_45334);

(statearr_45367_46805[(1)] = (10));


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
var cljs$core$async$state_machine__45171__auto__ = null;
var cljs$core$async$state_machine__45171__auto____0 = (function (){
var statearr_45368 = [null,null,null,null,null,null,null,null];
(statearr_45368[(0)] = cljs$core$async$state_machine__45171__auto__);

(statearr_45368[(1)] = (1));

return statearr_45368;
});
var cljs$core$async$state_machine__45171__auto____1 = (function (state_45351){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_45351);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e45369){if((e45369 instanceof Object)){
var ex__45174__auto__ = e45369;
var statearr_45370_46808 = state_45351;
(statearr_45370_46808[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45369;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46809 = state_45351;
state_45351 = G__46809;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$state_machine__45171__auto__ = function(state_45351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45171__auto____1.call(this,state_45351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45171__auto____0;
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45171__auto____1;
return cljs$core$async$state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_45371 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_45371[(6)] = c__45238__auto___46778);

return statearr_45371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
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
var process = (function (p__45372){
var vec__45373 = p__45372;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45373,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45373,(1),null);
var job = vec__45373;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45238__auto___46816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_45380){
var state_val_45381 = (state_45380[(1)]);
if((state_val_45381 === (1))){
var state_45380__$1 = state_45380;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45380__$1,(2),res,v);
} else {
if((state_val_45381 === (2))){
var inst_45377 = (state_45380[(2)]);
var inst_45378 = cljs.core.async.close_BANG_(res);
var state_45380__$1 = (function (){var statearr_45382 = state_45380;
(statearr_45382[(7)] = inst_45377);

return statearr_45382;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45380__$1,inst_45378);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____0 = (function (){
var statearr_45383 = [null,null,null,null,null,null,null,null];
(statearr_45383[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__);

(statearr_45383[(1)] = (1));

return statearr_45383;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____1 = (function (state_45380){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_45380);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e45384){if((e45384 instanceof Object)){
var ex__45174__auto__ = e45384;
var statearr_45385_46821 = state_45380;
(statearr_45385_46821[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45384;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46822 = state_45380;
state_45380 = G__46822;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__ = function(state_45380){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____1.call(this,state_45380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_45386 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_45386[(6)] = c__45238__auto___46816);

return statearr_45386;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__45387){
var vec__45388 = p__45387;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45388,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45388,(1),null);
var job = vec__45388;
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
var n__4666__auto___46827 = n;
var __46828 = (0);
while(true){
if((__46828 < n__4666__auto___46827)){
var G__45391_46830 = type;
var G__45391_46831__$1 = (((G__45391_46830 instanceof cljs.core.Keyword))?G__45391_46830.fqn:null);
switch (G__45391_46831__$1) {
case "compute":
var c__45238__auto___46833 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46828,c__45238__auto___46833,G__45391_46830,G__45391_46831__$1,n__4666__auto___46827,jobs,results,process,async){
return (function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = ((function (__46828,c__45238__auto___46833,G__45391_46830,G__45391_46831__$1,n__4666__auto___46827,jobs,results,process,async){
return (function (state_45404){
var state_val_45405 = (state_45404[(1)]);
if((state_val_45405 === (1))){
var state_45404__$1 = state_45404;
var statearr_45406_46837 = state_45404__$1;
(statearr_45406_46837[(2)] = null);

(statearr_45406_46837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45405 === (2))){
var state_45404__$1 = state_45404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45404__$1,(4),jobs);
} else {
if((state_val_45405 === (3))){
var inst_45402 = (state_45404[(2)]);
var state_45404__$1 = state_45404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45404__$1,inst_45402);
} else {
if((state_val_45405 === (4))){
var inst_45394 = (state_45404[(2)]);
var inst_45395 = process(inst_45394);
var state_45404__$1 = state_45404;
if(cljs.core.truth_(inst_45395)){
var statearr_45407_46838 = state_45404__$1;
(statearr_45407_46838[(1)] = (5));

} else {
var statearr_45408_46839 = state_45404__$1;
(statearr_45408_46839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45405 === (5))){
var state_45404__$1 = state_45404;
var statearr_45409_46840 = state_45404__$1;
(statearr_45409_46840[(2)] = null);

(statearr_45409_46840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45405 === (6))){
var state_45404__$1 = state_45404;
var statearr_45410_46842 = state_45404__$1;
(statearr_45410_46842[(2)] = null);

(statearr_45410_46842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45405 === (7))){
var inst_45400 = (state_45404[(2)]);
var state_45404__$1 = state_45404;
var statearr_45411_46845 = state_45404__$1;
(statearr_45411_46845[(2)] = inst_45400);

(statearr_45411_46845[(1)] = (3));


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
});})(__46828,c__45238__auto___46833,G__45391_46830,G__45391_46831__$1,n__4666__auto___46827,jobs,results,process,async))
;
return ((function (__46828,switch__45170__auto__,c__45238__auto___46833,G__45391_46830,G__45391_46831__$1,n__4666__auto___46827,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____0 = (function (){
var statearr_45412 = [null,null,null,null,null,null,null];
(statearr_45412[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__);

(statearr_45412[(1)] = (1));

return statearr_45412;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____1 = (function (state_45404){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_45404);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e45413){if((e45413 instanceof Object)){
var ex__45174__auto__ = e45413;
var statearr_45414_46849 = state_45404;
(statearr_45414_46849[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45413;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46857 = state_45404;
state_45404 = G__46857;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__ = function(state_45404){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____1.call(this,state_45404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__;
})()
;})(__46828,switch__45170__auto__,c__45238__auto___46833,G__45391_46830,G__45391_46831__$1,n__4666__auto___46827,jobs,results,process,async))
})();
var state__45240__auto__ = (function (){var statearr_45415 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_45415[(6)] = c__45238__auto___46833);

return statearr_45415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
});})(__46828,c__45238__auto___46833,G__45391_46830,G__45391_46831__$1,n__4666__auto___46827,jobs,results,process,async))
);


break;
case "async":
var c__45238__auto___46858 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__46828,c__45238__auto___46858,G__45391_46830,G__45391_46831__$1,n__4666__auto___46827,jobs,results,process,async){
return (function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = ((function (__46828,c__45238__auto___46858,G__45391_46830,G__45391_46831__$1,n__4666__auto___46827,jobs,results,process,async){
return (function (state_45428){
var state_val_45429 = (state_45428[(1)]);
if((state_val_45429 === (1))){
var state_45428__$1 = state_45428;
var statearr_45430_46862 = state_45428__$1;
(statearr_45430_46862[(2)] = null);

(statearr_45430_46862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45429 === (2))){
var state_45428__$1 = state_45428;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45428__$1,(4),jobs);
} else {
if((state_val_45429 === (3))){
var inst_45426 = (state_45428[(2)]);
var state_45428__$1 = state_45428;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45428__$1,inst_45426);
} else {
if((state_val_45429 === (4))){
var inst_45418 = (state_45428[(2)]);
var inst_45419 = async(inst_45418);
var state_45428__$1 = state_45428;
if(cljs.core.truth_(inst_45419)){
var statearr_45431_46865 = state_45428__$1;
(statearr_45431_46865[(1)] = (5));

} else {
var statearr_45432_46866 = state_45428__$1;
(statearr_45432_46866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45429 === (5))){
var state_45428__$1 = state_45428;
var statearr_45433_46867 = state_45428__$1;
(statearr_45433_46867[(2)] = null);

(statearr_45433_46867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45429 === (6))){
var state_45428__$1 = state_45428;
var statearr_45434_46868 = state_45428__$1;
(statearr_45434_46868[(2)] = null);

(statearr_45434_46868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45429 === (7))){
var inst_45424 = (state_45428[(2)]);
var state_45428__$1 = state_45428;
var statearr_45435_46871 = state_45428__$1;
(statearr_45435_46871[(2)] = inst_45424);

(statearr_45435_46871[(1)] = (3));


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
});})(__46828,c__45238__auto___46858,G__45391_46830,G__45391_46831__$1,n__4666__auto___46827,jobs,results,process,async))
;
return ((function (__46828,switch__45170__auto__,c__45238__auto___46858,G__45391_46830,G__45391_46831__$1,n__4666__auto___46827,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____0 = (function (){
var statearr_45436 = [null,null,null,null,null,null,null];
(statearr_45436[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__);

(statearr_45436[(1)] = (1));

return statearr_45436;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____1 = (function (state_45428){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_45428);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e45437){if((e45437 instanceof Object)){
var ex__45174__auto__ = e45437;
var statearr_45438_46874 = state_45428;
(statearr_45438_46874[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45437;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46875 = state_45428;
state_45428 = G__46875;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__ = function(state_45428){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____1.call(this,state_45428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__;
})()
;})(__46828,switch__45170__auto__,c__45238__auto___46858,G__45391_46830,G__45391_46831__$1,n__4666__auto___46827,jobs,results,process,async))
})();
var state__45240__auto__ = (function (){var statearr_45439 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_45439[(6)] = c__45238__auto___46858);

return statearr_45439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
});})(__46828,c__45238__auto___46858,G__45391_46830,G__45391_46831__$1,n__4666__auto___46827,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45391_46831__$1)].join('')));

}

var G__46876 = (__46828 + (1));
__46828 = G__46876;
continue;
} else {
}
break;
}

var c__45238__auto___46877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_45461){
var state_val_45462 = (state_45461[(1)]);
if((state_val_45462 === (7))){
var inst_45457 = (state_45461[(2)]);
var state_45461__$1 = state_45461;
var statearr_45463_46878 = state_45461__$1;
(statearr_45463_46878[(2)] = inst_45457);

(statearr_45463_46878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (1))){
var state_45461__$1 = state_45461;
var statearr_45464_46879 = state_45461__$1;
(statearr_45464_46879[(2)] = null);

(statearr_45464_46879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (4))){
var inst_45442 = (state_45461[(7)]);
var inst_45442__$1 = (state_45461[(2)]);
var inst_45443 = (inst_45442__$1 == null);
var state_45461__$1 = (function (){var statearr_45465 = state_45461;
(statearr_45465[(7)] = inst_45442__$1);

return statearr_45465;
})();
if(cljs.core.truth_(inst_45443)){
var statearr_45466_46880 = state_45461__$1;
(statearr_45466_46880[(1)] = (5));

} else {
var statearr_45467_46881 = state_45461__$1;
(statearr_45467_46881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (6))){
var inst_45442 = (state_45461[(7)]);
var inst_45447 = (state_45461[(8)]);
var inst_45447__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_45448 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45449 = [inst_45442,inst_45447__$1];
var inst_45450 = (new cljs.core.PersistentVector(null,2,(5),inst_45448,inst_45449,null));
var state_45461__$1 = (function (){var statearr_45468 = state_45461;
(statearr_45468[(8)] = inst_45447__$1);

return statearr_45468;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45461__$1,(8),jobs,inst_45450);
} else {
if((state_val_45462 === (3))){
var inst_45459 = (state_45461[(2)]);
var state_45461__$1 = state_45461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45461__$1,inst_45459);
} else {
if((state_val_45462 === (2))){
var state_45461__$1 = state_45461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45461__$1,(4),from);
} else {
if((state_val_45462 === (9))){
var inst_45454 = (state_45461[(2)]);
var state_45461__$1 = (function (){var statearr_45469 = state_45461;
(statearr_45469[(9)] = inst_45454);

return statearr_45469;
})();
var statearr_45470_46886 = state_45461__$1;
(statearr_45470_46886[(2)] = null);

(statearr_45470_46886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (5))){
var inst_45445 = cljs.core.async.close_BANG_(jobs);
var state_45461__$1 = state_45461;
var statearr_45471_46887 = state_45461__$1;
(statearr_45471_46887[(2)] = inst_45445);

(statearr_45471_46887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45462 === (8))){
var inst_45447 = (state_45461[(8)]);
var inst_45452 = (state_45461[(2)]);
var state_45461__$1 = (function (){var statearr_45472 = state_45461;
(statearr_45472[(10)] = inst_45452);

return statearr_45472;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45461__$1,(9),results,inst_45447);
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
var cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____0 = (function (){
var statearr_45473 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45473[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__);

(statearr_45473[(1)] = (1));

return statearr_45473;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____1 = (function (state_45461){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_45461);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e45474){if((e45474 instanceof Object)){
var ex__45174__auto__ = e45474;
var statearr_45475_46891 = state_45461;
(statearr_45475_46891[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45474;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46893 = state_45461;
state_45461 = G__46893;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__ = function(state_45461){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____1.call(this,state_45461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_45476 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_45476[(6)] = c__45238__auto___46877);

return statearr_45476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
}));


var c__45238__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_45514){
var state_val_45515 = (state_45514[(1)]);
if((state_val_45515 === (7))){
var inst_45510 = (state_45514[(2)]);
var state_45514__$1 = state_45514;
var statearr_45516_46895 = state_45514__$1;
(statearr_45516_46895[(2)] = inst_45510);

(statearr_45516_46895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45515 === (20))){
var state_45514__$1 = state_45514;
var statearr_45517_46896 = state_45514__$1;
(statearr_45517_46896[(2)] = null);

(statearr_45517_46896[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45515 === (1))){
var state_45514__$1 = state_45514;
var statearr_45518_46897 = state_45514__$1;
(statearr_45518_46897[(2)] = null);

(statearr_45518_46897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45515 === (4))){
var inst_45479 = (state_45514[(7)]);
var inst_45479__$1 = (state_45514[(2)]);
var inst_45480 = (inst_45479__$1 == null);
var state_45514__$1 = (function (){var statearr_45519 = state_45514;
(statearr_45519[(7)] = inst_45479__$1);

return statearr_45519;
})();
if(cljs.core.truth_(inst_45480)){
var statearr_45520_46898 = state_45514__$1;
(statearr_45520_46898[(1)] = (5));

} else {
var statearr_45521_46899 = state_45514__$1;
(statearr_45521_46899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45515 === (15))){
var inst_45492 = (state_45514[(8)]);
var state_45514__$1 = state_45514;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45514__$1,(18),to,inst_45492);
} else {
if((state_val_45515 === (21))){
var inst_45505 = (state_45514[(2)]);
var state_45514__$1 = state_45514;
var statearr_45522_46902 = state_45514__$1;
(statearr_45522_46902[(2)] = inst_45505);

(statearr_45522_46902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45515 === (13))){
var inst_45507 = (state_45514[(2)]);
var state_45514__$1 = (function (){var statearr_45523 = state_45514;
(statearr_45523[(9)] = inst_45507);

return statearr_45523;
})();
var statearr_45524_46904 = state_45514__$1;
(statearr_45524_46904[(2)] = null);

(statearr_45524_46904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45515 === (6))){
var inst_45479 = (state_45514[(7)]);
var state_45514__$1 = state_45514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45514__$1,(11),inst_45479);
} else {
if((state_val_45515 === (17))){
var inst_45500 = (state_45514[(2)]);
var state_45514__$1 = state_45514;
if(cljs.core.truth_(inst_45500)){
var statearr_45525_46905 = state_45514__$1;
(statearr_45525_46905[(1)] = (19));

} else {
var statearr_45526_46906 = state_45514__$1;
(statearr_45526_46906[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45515 === (3))){
var inst_45512 = (state_45514[(2)]);
var state_45514__$1 = state_45514;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45514__$1,inst_45512);
} else {
if((state_val_45515 === (12))){
var inst_45489 = (state_45514[(10)]);
var state_45514__$1 = state_45514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45514__$1,(14),inst_45489);
} else {
if((state_val_45515 === (2))){
var state_45514__$1 = state_45514;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45514__$1,(4),results);
} else {
if((state_val_45515 === (19))){
var state_45514__$1 = state_45514;
var statearr_45527_46909 = state_45514__$1;
(statearr_45527_46909[(2)] = null);

(statearr_45527_46909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45515 === (11))){
var inst_45489 = (state_45514[(2)]);
var state_45514__$1 = (function (){var statearr_45528 = state_45514;
(statearr_45528[(10)] = inst_45489);

return statearr_45528;
})();
var statearr_45529_46912 = state_45514__$1;
(statearr_45529_46912[(2)] = null);

(statearr_45529_46912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45515 === (9))){
var state_45514__$1 = state_45514;
var statearr_45530_46915 = state_45514__$1;
(statearr_45530_46915[(2)] = null);

(statearr_45530_46915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45515 === (5))){
var state_45514__$1 = state_45514;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45531_46917 = state_45514__$1;
(statearr_45531_46917[(1)] = (8));

} else {
var statearr_45532_46918 = state_45514__$1;
(statearr_45532_46918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45515 === (14))){
var inst_45492 = (state_45514[(8)]);
var inst_45492__$1 = (state_45514[(2)]);
var inst_45493 = (inst_45492__$1 == null);
var inst_45494 = cljs.core.not(inst_45493);
var state_45514__$1 = (function (){var statearr_45533 = state_45514;
(statearr_45533[(8)] = inst_45492__$1);

return statearr_45533;
})();
if(inst_45494){
var statearr_45534_46919 = state_45514__$1;
(statearr_45534_46919[(1)] = (15));

} else {
var statearr_45535_46920 = state_45514__$1;
(statearr_45535_46920[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45515 === (16))){
var state_45514__$1 = state_45514;
var statearr_45536_46921 = state_45514__$1;
(statearr_45536_46921[(2)] = false);

(statearr_45536_46921[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45515 === (10))){
var inst_45486 = (state_45514[(2)]);
var state_45514__$1 = state_45514;
var statearr_45537_46922 = state_45514__$1;
(statearr_45537_46922[(2)] = inst_45486);

(statearr_45537_46922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45515 === (18))){
var inst_45497 = (state_45514[(2)]);
var state_45514__$1 = state_45514;
var statearr_45538_46923 = state_45514__$1;
(statearr_45538_46923[(2)] = inst_45497);

(statearr_45538_46923[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45515 === (8))){
var inst_45483 = cljs.core.async.close_BANG_(to);
var state_45514__$1 = state_45514;
var statearr_45539_46924 = state_45514__$1;
(statearr_45539_46924[(2)] = inst_45483);

(statearr_45539_46924[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____0 = (function (){
var statearr_45540 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45540[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__);

(statearr_45540[(1)] = (1));

return statearr_45540;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____1 = (function (state_45514){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_45514);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e45541){if((e45541 instanceof Object)){
var ex__45174__auto__ = e45541;
var statearr_45542_46926 = state_45514;
(statearr_45542_46926[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45541;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46928 = state_45514;
state_45514 = G__46928;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__ = function(state_45514){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____1.call(this,state_45514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45171__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_45543 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_45543[(6)] = c__45238__auto__);

return statearr_45543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
}));

return c__45238__auto__;
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
var G__45545 = arguments.length;
switch (G__45545) {
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
var G__45547 = arguments.length;
switch (G__45547) {
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
var G__45549 = arguments.length;
switch (G__45549) {
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
var c__45238__auto___46936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_45575){
var state_val_45576 = (state_45575[(1)]);
if((state_val_45576 === (7))){
var inst_45571 = (state_45575[(2)]);
var state_45575__$1 = state_45575;
var statearr_45577_46937 = state_45575__$1;
(statearr_45577_46937[(2)] = inst_45571);

(statearr_45577_46937[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (1))){
var state_45575__$1 = state_45575;
var statearr_45578_46938 = state_45575__$1;
(statearr_45578_46938[(2)] = null);

(statearr_45578_46938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (4))){
var inst_45552 = (state_45575[(7)]);
var inst_45552__$1 = (state_45575[(2)]);
var inst_45553 = (inst_45552__$1 == null);
var state_45575__$1 = (function (){var statearr_45579 = state_45575;
(statearr_45579[(7)] = inst_45552__$1);

return statearr_45579;
})();
if(cljs.core.truth_(inst_45553)){
var statearr_45580_46939 = state_45575__$1;
(statearr_45580_46939[(1)] = (5));

} else {
var statearr_45581_46940 = state_45575__$1;
(statearr_45581_46940[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (13))){
var state_45575__$1 = state_45575;
var statearr_45582_46941 = state_45575__$1;
(statearr_45582_46941[(2)] = null);

(statearr_45582_46941[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (6))){
var inst_45552 = (state_45575[(7)]);
var inst_45558 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45552) : p.call(null,inst_45552));
var state_45575__$1 = state_45575;
if(cljs.core.truth_(inst_45558)){
var statearr_45583_46942 = state_45575__$1;
(statearr_45583_46942[(1)] = (9));

} else {
var statearr_45584_46944 = state_45575__$1;
(statearr_45584_46944[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (3))){
var inst_45573 = (state_45575[(2)]);
var state_45575__$1 = state_45575;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45575__$1,inst_45573);
} else {
if((state_val_45576 === (12))){
var state_45575__$1 = state_45575;
var statearr_45585_46946 = state_45575__$1;
(statearr_45585_46946[(2)] = null);

(statearr_45585_46946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (2))){
var state_45575__$1 = state_45575;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45575__$1,(4),ch);
} else {
if((state_val_45576 === (11))){
var inst_45552 = (state_45575[(7)]);
var inst_45562 = (state_45575[(2)]);
var state_45575__$1 = state_45575;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45575__$1,(8),inst_45562,inst_45552);
} else {
if((state_val_45576 === (9))){
var state_45575__$1 = state_45575;
var statearr_45586_46949 = state_45575__$1;
(statearr_45586_46949[(2)] = tc);

(statearr_45586_46949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (5))){
var inst_45555 = cljs.core.async.close_BANG_(tc);
var inst_45556 = cljs.core.async.close_BANG_(fc);
var state_45575__$1 = (function (){var statearr_45587 = state_45575;
(statearr_45587[(8)] = inst_45555);

return statearr_45587;
})();
var statearr_45588_46952 = state_45575__$1;
(statearr_45588_46952[(2)] = inst_45556);

(statearr_45588_46952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (14))){
var inst_45569 = (state_45575[(2)]);
var state_45575__$1 = state_45575;
var statearr_45589_46953 = state_45575__$1;
(statearr_45589_46953[(2)] = inst_45569);

(statearr_45589_46953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (10))){
var state_45575__$1 = state_45575;
var statearr_45590_46956 = state_45575__$1;
(statearr_45590_46956[(2)] = fc);

(statearr_45590_46956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45576 === (8))){
var inst_45564 = (state_45575[(2)]);
var state_45575__$1 = state_45575;
if(cljs.core.truth_(inst_45564)){
var statearr_45591_46957 = state_45575__$1;
(statearr_45591_46957[(1)] = (12));

} else {
var statearr_45592_46958 = state_45575__$1;
(statearr_45592_46958[(1)] = (13));

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
var cljs$core$async$state_machine__45171__auto__ = null;
var cljs$core$async$state_machine__45171__auto____0 = (function (){
var statearr_45593 = [null,null,null,null,null,null,null,null,null];
(statearr_45593[(0)] = cljs$core$async$state_machine__45171__auto__);

(statearr_45593[(1)] = (1));

return statearr_45593;
});
var cljs$core$async$state_machine__45171__auto____1 = (function (state_45575){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_45575);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e45594){if((e45594 instanceof Object)){
var ex__45174__auto__ = e45594;
var statearr_45595_46961 = state_45575;
(statearr_45595_46961[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45594;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46963 = state_45575;
state_45575 = G__46963;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$state_machine__45171__auto__ = function(state_45575){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45171__auto____1.call(this,state_45575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45171__auto____0;
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45171__auto____1;
return cljs$core$async$state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_45596 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_45596[(6)] = c__45238__auto___46936);

return statearr_45596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
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
var c__45238__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_45617){
var state_val_45618 = (state_45617[(1)]);
if((state_val_45618 === (7))){
var inst_45613 = (state_45617[(2)]);
var state_45617__$1 = state_45617;
var statearr_45619_46967 = state_45617__$1;
(statearr_45619_46967[(2)] = inst_45613);

(statearr_45619_46967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45618 === (1))){
var inst_45597 = init;
var state_45617__$1 = (function (){var statearr_45620 = state_45617;
(statearr_45620[(7)] = inst_45597);

return statearr_45620;
})();
var statearr_45621_46968 = state_45617__$1;
(statearr_45621_46968[(2)] = null);

(statearr_45621_46968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45618 === (4))){
var inst_45600 = (state_45617[(8)]);
var inst_45600__$1 = (state_45617[(2)]);
var inst_45601 = (inst_45600__$1 == null);
var state_45617__$1 = (function (){var statearr_45622 = state_45617;
(statearr_45622[(8)] = inst_45600__$1);

return statearr_45622;
})();
if(cljs.core.truth_(inst_45601)){
var statearr_45623_46969 = state_45617__$1;
(statearr_45623_46969[(1)] = (5));

} else {
var statearr_45624_46970 = state_45617__$1;
(statearr_45624_46970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45618 === (6))){
var inst_45597 = (state_45617[(7)]);
var inst_45604 = (state_45617[(9)]);
var inst_45600 = (state_45617[(8)]);
var inst_45604__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_45597,inst_45600) : f.call(null,inst_45597,inst_45600));
var inst_45605 = cljs.core.reduced_QMARK_(inst_45604__$1);
var state_45617__$1 = (function (){var statearr_45625 = state_45617;
(statearr_45625[(9)] = inst_45604__$1);

return statearr_45625;
})();
if(inst_45605){
var statearr_45626_46972 = state_45617__$1;
(statearr_45626_46972[(1)] = (8));

} else {
var statearr_45627_46973 = state_45617__$1;
(statearr_45627_46973[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45618 === (3))){
var inst_45615 = (state_45617[(2)]);
var state_45617__$1 = state_45617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45617__$1,inst_45615);
} else {
if((state_val_45618 === (2))){
var state_45617__$1 = state_45617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45617__$1,(4),ch);
} else {
if((state_val_45618 === (9))){
var inst_45604 = (state_45617[(9)]);
var inst_45597 = inst_45604;
var state_45617__$1 = (function (){var statearr_45628 = state_45617;
(statearr_45628[(7)] = inst_45597);

return statearr_45628;
})();
var statearr_45629_46974 = state_45617__$1;
(statearr_45629_46974[(2)] = null);

(statearr_45629_46974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45618 === (5))){
var inst_45597 = (state_45617[(7)]);
var state_45617__$1 = state_45617;
var statearr_45630_46975 = state_45617__$1;
(statearr_45630_46975[(2)] = inst_45597);

(statearr_45630_46975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45618 === (10))){
var inst_45611 = (state_45617[(2)]);
var state_45617__$1 = state_45617;
var statearr_45631_46976 = state_45617__$1;
(statearr_45631_46976[(2)] = inst_45611);

(statearr_45631_46976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45618 === (8))){
var inst_45604 = (state_45617[(9)]);
var inst_45607 = cljs.core.deref(inst_45604);
var state_45617__$1 = state_45617;
var statearr_45632_46977 = state_45617__$1;
(statearr_45632_46977[(2)] = inst_45607);

(statearr_45632_46977[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__45171__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45171__auto____0 = (function (){
var statearr_45633 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45633[(0)] = cljs$core$async$reduce_$_state_machine__45171__auto__);

(statearr_45633[(1)] = (1));

return statearr_45633;
});
var cljs$core$async$reduce_$_state_machine__45171__auto____1 = (function (state_45617){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_45617);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e45634){if((e45634 instanceof Object)){
var ex__45174__auto__ = e45634;
var statearr_45635_46982 = state_45617;
(statearr_45635_46982[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45634;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46983 = state_45617;
state_45617 = G__46983;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45171__auto__ = function(state_45617){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45171__auto____1.call(this,state_45617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45171__auto____0;
cljs$core$async$reduce_$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45171__auto____1;
return cljs$core$async$reduce_$_state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_45636 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_45636[(6)] = c__45238__auto__);

return statearr_45636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
}));

return c__45238__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45238__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_45642){
var state_val_45643 = (state_45642[(1)]);
if((state_val_45643 === (1))){
var inst_45637 = cljs.core.async.reduce(f__$1,init,ch);
var state_45642__$1 = state_45642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45642__$1,(2),inst_45637);
} else {
if((state_val_45643 === (2))){
var inst_45639 = (state_45642[(2)]);
var inst_45640 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_45639) : f__$1.call(null,inst_45639));
var state_45642__$1 = state_45642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45642__$1,inst_45640);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45171__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45171__auto____0 = (function (){
var statearr_45644 = [null,null,null,null,null,null,null];
(statearr_45644[(0)] = cljs$core$async$transduce_$_state_machine__45171__auto__);

(statearr_45644[(1)] = (1));

return statearr_45644;
});
var cljs$core$async$transduce_$_state_machine__45171__auto____1 = (function (state_45642){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_45642);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e45645){if((e45645 instanceof Object)){
var ex__45174__auto__ = e45645;
var statearr_45646_46993 = state_45642;
(statearr_45646_46993[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45645;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46994 = state_45642;
state_45642 = G__46994;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45171__auto__ = function(state_45642){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45171__auto____1.call(this,state_45642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45171__auto____0;
cljs$core$async$transduce_$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45171__auto____1;
return cljs$core$async$transduce_$_state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_45647 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_45647[(6)] = c__45238__auto__);

return statearr_45647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
}));

return c__45238__auto__;
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
var G__45649 = arguments.length;
switch (G__45649) {
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
var c__45238__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_45674){
var state_val_45675 = (state_45674[(1)]);
if((state_val_45675 === (7))){
var inst_45656 = (state_45674[(2)]);
var state_45674__$1 = state_45674;
var statearr_45676_47001 = state_45674__$1;
(statearr_45676_47001[(2)] = inst_45656);

(statearr_45676_47001[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45675 === (1))){
var inst_45650 = cljs.core.seq(coll);
var inst_45651 = inst_45650;
var state_45674__$1 = (function (){var statearr_45677 = state_45674;
(statearr_45677[(7)] = inst_45651);

return statearr_45677;
})();
var statearr_45678_47002 = state_45674__$1;
(statearr_45678_47002[(2)] = null);

(statearr_45678_47002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45675 === (4))){
var inst_45651 = (state_45674[(7)]);
var inst_45654 = cljs.core.first(inst_45651);
var state_45674__$1 = state_45674;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45674__$1,(7),ch,inst_45654);
} else {
if((state_val_45675 === (13))){
var inst_45668 = (state_45674[(2)]);
var state_45674__$1 = state_45674;
var statearr_45679_47003 = state_45674__$1;
(statearr_45679_47003[(2)] = inst_45668);

(statearr_45679_47003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45675 === (6))){
var inst_45659 = (state_45674[(2)]);
var state_45674__$1 = state_45674;
if(cljs.core.truth_(inst_45659)){
var statearr_45680_47007 = state_45674__$1;
(statearr_45680_47007[(1)] = (8));

} else {
var statearr_45681_47008 = state_45674__$1;
(statearr_45681_47008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45675 === (3))){
var inst_45672 = (state_45674[(2)]);
var state_45674__$1 = state_45674;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45674__$1,inst_45672);
} else {
if((state_val_45675 === (12))){
var state_45674__$1 = state_45674;
var statearr_45682_47009 = state_45674__$1;
(statearr_45682_47009[(2)] = null);

(statearr_45682_47009[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45675 === (2))){
var inst_45651 = (state_45674[(7)]);
var state_45674__$1 = state_45674;
if(cljs.core.truth_(inst_45651)){
var statearr_45683_47013 = state_45674__$1;
(statearr_45683_47013[(1)] = (4));

} else {
var statearr_45684_47014 = state_45674__$1;
(statearr_45684_47014[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45675 === (11))){
var inst_45665 = cljs.core.async.close_BANG_(ch);
var state_45674__$1 = state_45674;
var statearr_45685_47019 = state_45674__$1;
(statearr_45685_47019[(2)] = inst_45665);

(statearr_45685_47019[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45675 === (9))){
var state_45674__$1 = state_45674;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45686_47023 = state_45674__$1;
(statearr_45686_47023[(1)] = (11));

} else {
var statearr_45687_47024 = state_45674__$1;
(statearr_45687_47024[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45675 === (5))){
var inst_45651 = (state_45674[(7)]);
var state_45674__$1 = state_45674;
var statearr_45688_47025 = state_45674__$1;
(statearr_45688_47025[(2)] = inst_45651);

(statearr_45688_47025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45675 === (10))){
var inst_45670 = (state_45674[(2)]);
var state_45674__$1 = state_45674;
var statearr_45689_47026 = state_45674__$1;
(statearr_45689_47026[(2)] = inst_45670);

(statearr_45689_47026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45675 === (8))){
var inst_45651 = (state_45674[(7)]);
var inst_45661 = cljs.core.next(inst_45651);
var inst_45651__$1 = inst_45661;
var state_45674__$1 = (function (){var statearr_45690 = state_45674;
(statearr_45690[(7)] = inst_45651__$1);

return statearr_45690;
})();
var statearr_45691_47030 = state_45674__$1;
(statearr_45691_47030[(2)] = null);

(statearr_45691_47030[(1)] = (2));


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
var cljs$core$async$state_machine__45171__auto__ = null;
var cljs$core$async$state_machine__45171__auto____0 = (function (){
var statearr_45692 = [null,null,null,null,null,null,null,null];
(statearr_45692[(0)] = cljs$core$async$state_machine__45171__auto__);

(statearr_45692[(1)] = (1));

return statearr_45692;
});
var cljs$core$async$state_machine__45171__auto____1 = (function (state_45674){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_45674);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e45693){if((e45693 instanceof Object)){
var ex__45174__auto__ = e45693;
var statearr_45694_47034 = state_45674;
(statearr_45694_47034[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45693;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47035 = state_45674;
state_45674 = G__47035;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$state_machine__45171__auto__ = function(state_45674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45171__auto____1.call(this,state_45674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45171__auto____0;
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45171__auto____1;
return cljs$core$async$state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_45695 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_45695[(6)] = c__45238__auto__);

return statearr_45695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
}));

return c__45238__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45696 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45696 = (function (ch,cs,meta45697){
this.ch = ch;
this.cs = cs;
this.meta45697 = meta45697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45698,meta45697__$1){
var self__ = this;
var _45698__$1 = this;
return (new cljs.core.async.t_cljs$core$async45696(self__.ch,self__.cs,meta45697__$1));
}));

(cljs.core.async.t_cljs$core$async45696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45698){
var self__ = this;
var _45698__$1 = this;
return self__.meta45697;
}));

(cljs.core.async.t_cljs$core$async45696.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45696.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async45696.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45696.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async45696.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async45696.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async45696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45697","meta45697",-1221131674,null)], null);
}));

(cljs.core.async.t_cljs$core$async45696.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45696");

(cljs.core.async.t_cljs$core$async45696.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async45696");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45696.
 */
cljs.core.async.__GT_t_cljs$core$async45696 = (function cljs$core$async$mult_$___GT_t_cljs$core$async45696(ch__$1,cs__$1,meta45697){
return (new cljs.core.async.t_cljs$core$async45696(ch__$1,cs__$1,meta45697));
});

}

return (new cljs.core.async.t_cljs$core$async45696(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__45238__auto___47070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_45833){
var state_val_45834 = (state_45833[(1)]);
if((state_val_45834 === (7))){
var inst_45829 = (state_45833[(2)]);
var state_45833__$1 = state_45833;
var statearr_45835_47071 = state_45833__$1;
(statearr_45835_47071[(2)] = inst_45829);

(statearr_45835_47071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (20))){
var inst_45732 = (state_45833[(7)]);
var inst_45744 = cljs.core.first(inst_45732);
var inst_45745 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45744,(0),null);
var inst_45746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45744,(1),null);
var state_45833__$1 = (function (){var statearr_45836 = state_45833;
(statearr_45836[(8)] = inst_45745);

return statearr_45836;
})();
if(cljs.core.truth_(inst_45746)){
var statearr_45837_47072 = state_45833__$1;
(statearr_45837_47072[(1)] = (22));

} else {
var statearr_45838_47075 = state_45833__$1;
(statearr_45838_47075[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (27))){
var inst_45776 = (state_45833[(9)]);
var inst_45774 = (state_45833[(10)]);
var inst_45701 = (state_45833[(11)]);
var inst_45781 = (state_45833[(12)]);
var inst_45781__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45774,inst_45776);
var inst_45782 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45781__$1,inst_45701,done);
var state_45833__$1 = (function (){var statearr_45839 = state_45833;
(statearr_45839[(12)] = inst_45781__$1);

return statearr_45839;
})();
if(cljs.core.truth_(inst_45782)){
var statearr_45840_47077 = state_45833__$1;
(statearr_45840_47077[(1)] = (30));

} else {
var statearr_45841_47078 = state_45833__$1;
(statearr_45841_47078[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (1))){
var state_45833__$1 = state_45833;
var statearr_45842_47079 = state_45833__$1;
(statearr_45842_47079[(2)] = null);

(statearr_45842_47079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (24))){
var inst_45732 = (state_45833[(7)]);
var inst_45751 = (state_45833[(2)]);
var inst_45752 = cljs.core.next(inst_45732);
var inst_45710 = inst_45752;
var inst_45711 = null;
var inst_45712 = (0);
var inst_45713 = (0);
var state_45833__$1 = (function (){var statearr_45843 = state_45833;
(statearr_45843[(13)] = inst_45710);

(statearr_45843[(14)] = inst_45711);

(statearr_45843[(15)] = inst_45751);

(statearr_45843[(16)] = inst_45713);

(statearr_45843[(17)] = inst_45712);

return statearr_45843;
})();
var statearr_45844_47082 = state_45833__$1;
(statearr_45844_47082[(2)] = null);

(statearr_45844_47082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (39))){
var state_45833__$1 = state_45833;
var statearr_45848_47083 = state_45833__$1;
(statearr_45848_47083[(2)] = null);

(statearr_45848_47083[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (4))){
var inst_45701 = (state_45833[(11)]);
var inst_45701__$1 = (state_45833[(2)]);
var inst_45702 = (inst_45701__$1 == null);
var state_45833__$1 = (function (){var statearr_45849 = state_45833;
(statearr_45849[(11)] = inst_45701__$1);

return statearr_45849;
})();
if(cljs.core.truth_(inst_45702)){
var statearr_45850_47084 = state_45833__$1;
(statearr_45850_47084[(1)] = (5));

} else {
var statearr_45851_47086 = state_45833__$1;
(statearr_45851_47086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (15))){
var inst_45710 = (state_45833[(13)]);
var inst_45711 = (state_45833[(14)]);
var inst_45713 = (state_45833[(16)]);
var inst_45712 = (state_45833[(17)]);
var inst_45728 = (state_45833[(2)]);
var inst_45729 = (inst_45713 + (1));
var tmp45845 = inst_45710;
var tmp45846 = inst_45711;
var tmp45847 = inst_45712;
var inst_45710__$1 = tmp45845;
var inst_45711__$1 = tmp45846;
var inst_45712__$1 = tmp45847;
var inst_45713__$1 = inst_45729;
var state_45833__$1 = (function (){var statearr_45852 = state_45833;
(statearr_45852[(13)] = inst_45710__$1);

(statearr_45852[(14)] = inst_45711__$1);

(statearr_45852[(16)] = inst_45713__$1);

(statearr_45852[(17)] = inst_45712__$1);

(statearr_45852[(18)] = inst_45728);

return statearr_45852;
})();
var statearr_45853_47090 = state_45833__$1;
(statearr_45853_47090[(2)] = null);

(statearr_45853_47090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (21))){
var inst_45755 = (state_45833[(2)]);
var state_45833__$1 = state_45833;
var statearr_45857_47095 = state_45833__$1;
(statearr_45857_47095[(2)] = inst_45755);

(statearr_45857_47095[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (31))){
var inst_45781 = (state_45833[(12)]);
var inst_45785 = done(null);
var inst_45786 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45781);
var state_45833__$1 = (function (){var statearr_45858 = state_45833;
(statearr_45858[(19)] = inst_45785);

return statearr_45858;
})();
var statearr_45859_47097 = state_45833__$1;
(statearr_45859_47097[(2)] = inst_45786);

(statearr_45859_47097[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (32))){
var inst_45776 = (state_45833[(9)]);
var inst_45773 = (state_45833[(20)]);
var inst_45775 = (state_45833[(21)]);
var inst_45774 = (state_45833[(10)]);
var inst_45788 = (state_45833[(2)]);
var inst_45789 = (inst_45776 + (1));
var tmp45854 = inst_45773;
var tmp45855 = inst_45775;
var tmp45856 = inst_45774;
var inst_45773__$1 = tmp45854;
var inst_45774__$1 = tmp45856;
var inst_45775__$1 = tmp45855;
var inst_45776__$1 = inst_45789;
var state_45833__$1 = (function (){var statearr_45860 = state_45833;
(statearr_45860[(9)] = inst_45776__$1);

(statearr_45860[(20)] = inst_45773__$1);

(statearr_45860[(21)] = inst_45775__$1);

(statearr_45860[(10)] = inst_45774__$1);

(statearr_45860[(22)] = inst_45788);

return statearr_45860;
})();
var statearr_45861_47100 = state_45833__$1;
(statearr_45861_47100[(2)] = null);

(statearr_45861_47100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (40))){
var inst_45801 = (state_45833[(23)]);
var inst_45805 = done(null);
var inst_45806 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45801);
var state_45833__$1 = (function (){var statearr_45862 = state_45833;
(statearr_45862[(24)] = inst_45805);

return statearr_45862;
})();
var statearr_45863_47101 = state_45833__$1;
(statearr_45863_47101[(2)] = inst_45806);

(statearr_45863_47101[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (33))){
var inst_45792 = (state_45833[(25)]);
var inst_45794 = cljs.core.chunked_seq_QMARK_(inst_45792);
var state_45833__$1 = state_45833;
if(inst_45794){
var statearr_45864_47102 = state_45833__$1;
(statearr_45864_47102[(1)] = (36));

} else {
var statearr_45865_47104 = state_45833__$1;
(statearr_45865_47104[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (13))){
var inst_45722 = (state_45833[(26)]);
var inst_45725 = cljs.core.async.close_BANG_(inst_45722);
var state_45833__$1 = state_45833;
var statearr_45866_47105 = state_45833__$1;
(statearr_45866_47105[(2)] = inst_45725);

(statearr_45866_47105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (22))){
var inst_45745 = (state_45833[(8)]);
var inst_45748 = cljs.core.async.close_BANG_(inst_45745);
var state_45833__$1 = state_45833;
var statearr_45867_47106 = state_45833__$1;
(statearr_45867_47106[(2)] = inst_45748);

(statearr_45867_47106[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (36))){
var inst_45792 = (state_45833[(25)]);
var inst_45796 = cljs.core.chunk_first(inst_45792);
var inst_45797 = cljs.core.chunk_rest(inst_45792);
var inst_45798 = cljs.core.count(inst_45796);
var inst_45773 = inst_45797;
var inst_45774 = inst_45796;
var inst_45775 = inst_45798;
var inst_45776 = (0);
var state_45833__$1 = (function (){var statearr_45868 = state_45833;
(statearr_45868[(9)] = inst_45776);

(statearr_45868[(20)] = inst_45773);

(statearr_45868[(21)] = inst_45775);

(statearr_45868[(10)] = inst_45774);

return statearr_45868;
})();
var statearr_45869_47107 = state_45833__$1;
(statearr_45869_47107[(2)] = null);

(statearr_45869_47107[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (41))){
var inst_45792 = (state_45833[(25)]);
var inst_45808 = (state_45833[(2)]);
var inst_45809 = cljs.core.next(inst_45792);
var inst_45773 = inst_45809;
var inst_45774 = null;
var inst_45775 = (0);
var inst_45776 = (0);
var state_45833__$1 = (function (){var statearr_45870 = state_45833;
(statearr_45870[(9)] = inst_45776);

(statearr_45870[(20)] = inst_45773);

(statearr_45870[(21)] = inst_45775);

(statearr_45870[(10)] = inst_45774);

(statearr_45870[(27)] = inst_45808);

return statearr_45870;
})();
var statearr_45871_47112 = state_45833__$1;
(statearr_45871_47112[(2)] = null);

(statearr_45871_47112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (43))){
var state_45833__$1 = state_45833;
var statearr_45872_47113 = state_45833__$1;
(statearr_45872_47113[(2)] = null);

(statearr_45872_47113[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (29))){
var inst_45817 = (state_45833[(2)]);
var state_45833__$1 = state_45833;
var statearr_45873_47116 = state_45833__$1;
(statearr_45873_47116[(2)] = inst_45817);

(statearr_45873_47116[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (44))){
var inst_45826 = (state_45833[(2)]);
var state_45833__$1 = (function (){var statearr_45874 = state_45833;
(statearr_45874[(28)] = inst_45826);

return statearr_45874;
})();
var statearr_45875_47119 = state_45833__$1;
(statearr_45875_47119[(2)] = null);

(statearr_45875_47119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (6))){
var inst_45765 = (state_45833[(29)]);
var inst_45764 = cljs.core.deref(cs);
var inst_45765__$1 = cljs.core.keys(inst_45764);
var inst_45766 = cljs.core.count(inst_45765__$1);
var inst_45767 = cljs.core.reset_BANG_(dctr,inst_45766);
var inst_45772 = cljs.core.seq(inst_45765__$1);
var inst_45773 = inst_45772;
var inst_45774 = null;
var inst_45775 = (0);
var inst_45776 = (0);
var state_45833__$1 = (function (){var statearr_45876 = state_45833;
(statearr_45876[(9)] = inst_45776);

(statearr_45876[(20)] = inst_45773);

(statearr_45876[(21)] = inst_45775);

(statearr_45876[(10)] = inst_45774);

(statearr_45876[(29)] = inst_45765__$1);

(statearr_45876[(30)] = inst_45767);

return statearr_45876;
})();
var statearr_45877_47124 = state_45833__$1;
(statearr_45877_47124[(2)] = null);

(statearr_45877_47124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (28))){
var inst_45773 = (state_45833[(20)]);
var inst_45792 = (state_45833[(25)]);
var inst_45792__$1 = cljs.core.seq(inst_45773);
var state_45833__$1 = (function (){var statearr_45878 = state_45833;
(statearr_45878[(25)] = inst_45792__$1);

return statearr_45878;
})();
if(inst_45792__$1){
var statearr_45879_47135 = state_45833__$1;
(statearr_45879_47135[(1)] = (33));

} else {
var statearr_45880_47136 = state_45833__$1;
(statearr_45880_47136[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (25))){
var inst_45776 = (state_45833[(9)]);
var inst_45775 = (state_45833[(21)]);
var inst_45778 = (inst_45776 < inst_45775);
var inst_45779 = inst_45778;
var state_45833__$1 = state_45833;
if(cljs.core.truth_(inst_45779)){
var statearr_45881_47137 = state_45833__$1;
(statearr_45881_47137[(1)] = (27));

} else {
var statearr_45882_47138 = state_45833__$1;
(statearr_45882_47138[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (34))){
var state_45833__$1 = state_45833;
var statearr_45883_47139 = state_45833__$1;
(statearr_45883_47139[(2)] = null);

(statearr_45883_47139[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (17))){
var state_45833__$1 = state_45833;
var statearr_45884_47140 = state_45833__$1;
(statearr_45884_47140[(2)] = null);

(statearr_45884_47140[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (3))){
var inst_45831 = (state_45833[(2)]);
var state_45833__$1 = state_45833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45833__$1,inst_45831);
} else {
if((state_val_45834 === (12))){
var inst_45760 = (state_45833[(2)]);
var state_45833__$1 = state_45833;
var statearr_45885_47142 = state_45833__$1;
(statearr_45885_47142[(2)] = inst_45760);

(statearr_45885_47142[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (2))){
var state_45833__$1 = state_45833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45833__$1,(4),ch);
} else {
if((state_val_45834 === (23))){
var state_45833__$1 = state_45833;
var statearr_45886_47143 = state_45833__$1;
(statearr_45886_47143[(2)] = null);

(statearr_45886_47143[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (35))){
var inst_45815 = (state_45833[(2)]);
var state_45833__$1 = state_45833;
var statearr_45887_47144 = state_45833__$1;
(statearr_45887_47144[(2)] = inst_45815);

(statearr_45887_47144[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (19))){
var inst_45732 = (state_45833[(7)]);
var inst_45736 = cljs.core.chunk_first(inst_45732);
var inst_45737 = cljs.core.chunk_rest(inst_45732);
var inst_45738 = cljs.core.count(inst_45736);
var inst_45710 = inst_45737;
var inst_45711 = inst_45736;
var inst_45712 = inst_45738;
var inst_45713 = (0);
var state_45833__$1 = (function (){var statearr_45888 = state_45833;
(statearr_45888[(13)] = inst_45710);

(statearr_45888[(14)] = inst_45711);

(statearr_45888[(16)] = inst_45713);

(statearr_45888[(17)] = inst_45712);

return statearr_45888;
})();
var statearr_45889_47145 = state_45833__$1;
(statearr_45889_47145[(2)] = null);

(statearr_45889_47145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (11))){
var inst_45710 = (state_45833[(13)]);
var inst_45732 = (state_45833[(7)]);
var inst_45732__$1 = cljs.core.seq(inst_45710);
var state_45833__$1 = (function (){var statearr_45890 = state_45833;
(statearr_45890[(7)] = inst_45732__$1);

return statearr_45890;
})();
if(inst_45732__$1){
var statearr_45891_47152 = state_45833__$1;
(statearr_45891_47152[(1)] = (16));

} else {
var statearr_45892_47154 = state_45833__$1;
(statearr_45892_47154[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (9))){
var inst_45762 = (state_45833[(2)]);
var state_45833__$1 = state_45833;
var statearr_45893_47155 = state_45833__$1;
(statearr_45893_47155[(2)] = inst_45762);

(statearr_45893_47155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (5))){
var inst_45708 = cljs.core.deref(cs);
var inst_45709 = cljs.core.seq(inst_45708);
var inst_45710 = inst_45709;
var inst_45711 = null;
var inst_45712 = (0);
var inst_45713 = (0);
var state_45833__$1 = (function (){var statearr_45894 = state_45833;
(statearr_45894[(13)] = inst_45710);

(statearr_45894[(14)] = inst_45711);

(statearr_45894[(16)] = inst_45713);

(statearr_45894[(17)] = inst_45712);

return statearr_45894;
})();
var statearr_45895_47156 = state_45833__$1;
(statearr_45895_47156[(2)] = null);

(statearr_45895_47156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (14))){
var state_45833__$1 = state_45833;
var statearr_45896_47157 = state_45833__$1;
(statearr_45896_47157[(2)] = null);

(statearr_45896_47157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (45))){
var inst_45823 = (state_45833[(2)]);
var state_45833__$1 = state_45833;
var statearr_45897_47158 = state_45833__$1;
(statearr_45897_47158[(2)] = inst_45823);

(statearr_45897_47158[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (26))){
var inst_45765 = (state_45833[(29)]);
var inst_45819 = (state_45833[(2)]);
var inst_45820 = cljs.core.seq(inst_45765);
var state_45833__$1 = (function (){var statearr_45898 = state_45833;
(statearr_45898[(31)] = inst_45819);

return statearr_45898;
})();
if(inst_45820){
var statearr_45899_47159 = state_45833__$1;
(statearr_45899_47159[(1)] = (42));

} else {
var statearr_45900_47160 = state_45833__$1;
(statearr_45900_47160[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (16))){
var inst_45732 = (state_45833[(7)]);
var inst_45734 = cljs.core.chunked_seq_QMARK_(inst_45732);
var state_45833__$1 = state_45833;
if(inst_45734){
var statearr_45901_47161 = state_45833__$1;
(statearr_45901_47161[(1)] = (19));

} else {
var statearr_45902_47162 = state_45833__$1;
(statearr_45902_47162[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (38))){
var inst_45812 = (state_45833[(2)]);
var state_45833__$1 = state_45833;
var statearr_45903_47163 = state_45833__$1;
(statearr_45903_47163[(2)] = inst_45812);

(statearr_45903_47163[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (30))){
var state_45833__$1 = state_45833;
var statearr_45904_47165 = state_45833__$1;
(statearr_45904_47165[(2)] = null);

(statearr_45904_47165[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (10))){
var inst_45711 = (state_45833[(14)]);
var inst_45713 = (state_45833[(16)]);
var inst_45721 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45711,inst_45713);
var inst_45722 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45721,(0),null);
var inst_45723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45721,(1),null);
var state_45833__$1 = (function (){var statearr_45905 = state_45833;
(statearr_45905[(26)] = inst_45722);

return statearr_45905;
})();
if(cljs.core.truth_(inst_45723)){
var statearr_45906_47172 = state_45833__$1;
(statearr_45906_47172[(1)] = (13));

} else {
var statearr_45907_47173 = state_45833__$1;
(statearr_45907_47173[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (18))){
var inst_45758 = (state_45833[(2)]);
var state_45833__$1 = state_45833;
var statearr_45908_47174 = state_45833__$1;
(statearr_45908_47174[(2)] = inst_45758);

(statearr_45908_47174[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (42))){
var state_45833__$1 = state_45833;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45833__$1,(45),dchan);
} else {
if((state_val_45834 === (37))){
var inst_45701 = (state_45833[(11)]);
var inst_45801 = (state_45833[(23)]);
var inst_45792 = (state_45833[(25)]);
var inst_45801__$1 = cljs.core.first(inst_45792);
var inst_45802 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45801__$1,inst_45701,done);
var state_45833__$1 = (function (){var statearr_45909 = state_45833;
(statearr_45909[(23)] = inst_45801__$1);

return statearr_45909;
})();
if(cljs.core.truth_(inst_45802)){
var statearr_45910_47175 = state_45833__$1;
(statearr_45910_47175[(1)] = (39));

} else {
var statearr_45911_47176 = state_45833__$1;
(statearr_45911_47176[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45834 === (8))){
var inst_45713 = (state_45833[(16)]);
var inst_45712 = (state_45833[(17)]);
var inst_45715 = (inst_45713 < inst_45712);
var inst_45716 = inst_45715;
var state_45833__$1 = state_45833;
if(cljs.core.truth_(inst_45716)){
var statearr_45912_47178 = state_45833__$1;
(statearr_45912_47178[(1)] = (10));

} else {
var statearr_45913_47179 = state_45833__$1;
(statearr_45913_47179[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__45171__auto__ = null;
var cljs$core$async$mult_$_state_machine__45171__auto____0 = (function (){
var statearr_45914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45914[(0)] = cljs$core$async$mult_$_state_machine__45171__auto__);

(statearr_45914[(1)] = (1));

return statearr_45914;
});
var cljs$core$async$mult_$_state_machine__45171__auto____1 = (function (state_45833){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_45833);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e45915){if((e45915 instanceof Object)){
var ex__45174__auto__ = e45915;
var statearr_45916_47186 = state_45833;
(statearr_45916_47186[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45915;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47187 = state_45833;
state_45833 = G__47187;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45171__auto__ = function(state_45833){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45171__auto____1.call(this,state_45833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45171__auto____0;
cljs$core$async$mult_$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45171__auto____1;
return cljs$core$async$mult_$_state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_45917 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_45917[(6)] = c__45238__auto___47070);

return statearr_45917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
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
var G__45919 = arguments.length;
switch (G__45919) {
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
var len__4789__auto___47191 = arguments.length;
var i__4790__auto___47192 = (0);
while(true){
if((i__4790__auto___47192 < len__4789__auto___47191)){
args__4795__auto__.push((arguments[i__4790__auto___47192]));

var G__47193 = (i__4790__auto___47192 + (1));
i__4790__auto___47192 = G__47193;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45924){
var map__45925 = p__45924;
var map__45925__$1 = (((((!((map__45925 == null))))?(((((map__45925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45925.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45925):map__45925);
var opts = map__45925__$1;
var statearr_45927_47196 = state;
(statearr_45927_47196[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_45928_47198 = state;
(statearr_45928_47198[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_45929_47199 = state;
(statearr_45929_47199[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45920){
var G__45921 = cljs.core.first(seq45920);
var seq45920__$1 = cljs.core.next(seq45920);
var G__45922 = cljs.core.first(seq45920__$1);
var seq45920__$2 = cljs.core.next(seq45920__$1);
var G__45923 = cljs.core.first(seq45920__$2);
var seq45920__$3 = cljs.core.next(seq45920__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45921,G__45922,G__45923,seq45920__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45930 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45930 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45931){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45931 = meta45931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async45930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45932,meta45931__$1){
var self__ = this;
var _45932__$1 = this;
return (new cljs.core.async.t_cljs$core$async45930(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45931__$1));
}));

(cljs.core.async.t_cljs$core$async45930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45932){
var self__ = this;
var _45932__$1 = this;
return self__.meta45931;
}));

(cljs.core.async.t_cljs$core$async45930.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45930.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async45930.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async45930.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45930.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45930.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45930.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45930.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async45930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45931","meta45931",1526450340,null)], null);
}));

(cljs.core.async.t_cljs$core$async45930.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async45930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45930");

(cljs.core.async.t_cljs$core$async45930.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async45930");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45930.
 */
cljs.core.async.__GT_t_cljs$core$async45930 = (function cljs$core$async$mix_$___GT_t_cljs$core$async45930(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45931){
return (new cljs.core.async.t_cljs$core$async45930(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45931));
});

}

return (new cljs.core.async.t_cljs$core$async45930(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45238__auto___47213 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_46034){
var state_val_46035 = (state_46034[(1)]);
if((state_val_46035 === (7))){
var inst_45949 = (state_46034[(2)]);
var state_46034__$1 = state_46034;
var statearr_46036_47214 = state_46034__$1;
(statearr_46036_47214[(2)] = inst_45949);

(statearr_46036_47214[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (20))){
var inst_45961 = (state_46034[(7)]);
var state_46034__$1 = state_46034;
var statearr_46037_47215 = state_46034__$1;
(statearr_46037_47215[(2)] = inst_45961);

(statearr_46037_47215[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (27))){
var state_46034__$1 = state_46034;
var statearr_46038_47216 = state_46034__$1;
(statearr_46038_47216[(2)] = null);

(statearr_46038_47216[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (1))){
var inst_45936 = (state_46034[(8)]);
var inst_45936__$1 = calc_state();
var inst_45938 = (inst_45936__$1 == null);
var inst_45939 = cljs.core.not(inst_45938);
var state_46034__$1 = (function (){var statearr_46039 = state_46034;
(statearr_46039[(8)] = inst_45936__$1);

return statearr_46039;
})();
if(inst_45939){
var statearr_46040_47218 = state_46034__$1;
(statearr_46040_47218[(1)] = (2));

} else {
var statearr_46041_47220 = state_46034__$1;
(statearr_46041_47220[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (24))){
var inst_45985 = (state_46034[(9)]);
var inst_45994 = (state_46034[(10)]);
var inst_46008 = (state_46034[(11)]);
var inst_46008__$1 = (inst_45985.cljs$core$IFn$_invoke$arity$1 ? inst_45985.cljs$core$IFn$_invoke$arity$1(inst_45994) : inst_45985.call(null,inst_45994));
var state_46034__$1 = (function (){var statearr_46042 = state_46034;
(statearr_46042[(11)] = inst_46008__$1);

return statearr_46042;
})();
if(cljs.core.truth_(inst_46008__$1)){
var statearr_46043_47222 = state_46034__$1;
(statearr_46043_47222[(1)] = (29));

} else {
var statearr_46044_47223 = state_46034__$1;
(statearr_46044_47223[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (4))){
var inst_45952 = (state_46034[(2)]);
var state_46034__$1 = state_46034;
if(cljs.core.truth_(inst_45952)){
var statearr_46045_47224 = state_46034__$1;
(statearr_46045_47224[(1)] = (8));

} else {
var statearr_46046_47225 = state_46034__$1;
(statearr_46046_47225[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (15))){
var inst_45979 = (state_46034[(2)]);
var state_46034__$1 = state_46034;
if(cljs.core.truth_(inst_45979)){
var statearr_46047_47226 = state_46034__$1;
(statearr_46047_47226[(1)] = (19));

} else {
var statearr_46048_47227 = state_46034__$1;
(statearr_46048_47227[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (21))){
var inst_45984 = (state_46034[(12)]);
var inst_45984__$1 = (state_46034[(2)]);
var inst_45985 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45984__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45986 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45984__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45984__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46034__$1 = (function (){var statearr_46049 = state_46034;
(statearr_46049[(12)] = inst_45984__$1);

(statearr_46049[(9)] = inst_45985);

(statearr_46049[(13)] = inst_45986);

return statearr_46049;
})();
return cljs.core.async.ioc_alts_BANG_(state_46034__$1,(22),inst_45987);
} else {
if((state_val_46035 === (31))){
var inst_46016 = (state_46034[(2)]);
var state_46034__$1 = state_46034;
if(cljs.core.truth_(inst_46016)){
var statearr_46050_47228 = state_46034__$1;
(statearr_46050_47228[(1)] = (32));

} else {
var statearr_46051_47229 = state_46034__$1;
(statearr_46051_47229[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (32))){
var inst_45993 = (state_46034[(14)]);
var state_46034__$1 = state_46034;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46034__$1,(35),out,inst_45993);
} else {
if((state_val_46035 === (33))){
var inst_45984 = (state_46034[(12)]);
var inst_45961 = inst_45984;
var state_46034__$1 = (function (){var statearr_46052 = state_46034;
(statearr_46052[(7)] = inst_45961);

return statearr_46052;
})();
var statearr_46053_47231 = state_46034__$1;
(statearr_46053_47231[(2)] = null);

(statearr_46053_47231[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (13))){
var inst_45961 = (state_46034[(7)]);
var inst_45968 = inst_45961.cljs$lang$protocol_mask$partition0$;
var inst_45969 = (inst_45968 & (64));
var inst_45970 = inst_45961.cljs$core$ISeq$;
var inst_45971 = (cljs.core.PROTOCOL_SENTINEL === inst_45970);
var inst_45972 = ((inst_45969) || (inst_45971));
var state_46034__$1 = state_46034;
if(cljs.core.truth_(inst_45972)){
var statearr_46054_47232 = state_46034__$1;
(statearr_46054_47232[(1)] = (16));

} else {
var statearr_46055_47233 = state_46034__$1;
(statearr_46055_47233[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (22))){
var inst_45993 = (state_46034[(14)]);
var inst_45994 = (state_46034[(10)]);
var inst_45992 = (state_46034[(2)]);
var inst_45993__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45992,(0),null);
var inst_45994__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45992,(1),null);
var inst_45995 = (inst_45993__$1 == null);
var inst_45996 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45994__$1,change);
var inst_45997 = ((inst_45995) || (inst_45996));
var state_46034__$1 = (function (){var statearr_46056 = state_46034;
(statearr_46056[(14)] = inst_45993__$1);

(statearr_46056[(10)] = inst_45994__$1);

return statearr_46056;
})();
if(cljs.core.truth_(inst_45997)){
var statearr_46057_47234 = state_46034__$1;
(statearr_46057_47234[(1)] = (23));

} else {
var statearr_46058_47236 = state_46034__$1;
(statearr_46058_47236[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (36))){
var inst_45984 = (state_46034[(12)]);
var inst_45961 = inst_45984;
var state_46034__$1 = (function (){var statearr_46059 = state_46034;
(statearr_46059[(7)] = inst_45961);

return statearr_46059;
})();
var statearr_46060_47237 = state_46034__$1;
(statearr_46060_47237[(2)] = null);

(statearr_46060_47237[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (29))){
var inst_46008 = (state_46034[(11)]);
var state_46034__$1 = state_46034;
var statearr_46061_47238 = state_46034__$1;
(statearr_46061_47238[(2)] = inst_46008);

(statearr_46061_47238[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (6))){
var state_46034__$1 = state_46034;
var statearr_46062_47240 = state_46034__$1;
(statearr_46062_47240[(2)] = false);

(statearr_46062_47240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (28))){
var inst_46004 = (state_46034[(2)]);
var inst_46005 = calc_state();
var inst_45961 = inst_46005;
var state_46034__$1 = (function (){var statearr_46063 = state_46034;
(statearr_46063[(7)] = inst_45961);

(statearr_46063[(15)] = inst_46004);

return statearr_46063;
})();
var statearr_46064_47245 = state_46034__$1;
(statearr_46064_47245[(2)] = null);

(statearr_46064_47245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (25))){
var inst_46030 = (state_46034[(2)]);
var state_46034__$1 = state_46034;
var statearr_46065_47246 = state_46034__$1;
(statearr_46065_47246[(2)] = inst_46030);

(statearr_46065_47246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (34))){
var inst_46028 = (state_46034[(2)]);
var state_46034__$1 = state_46034;
var statearr_46066_47247 = state_46034__$1;
(statearr_46066_47247[(2)] = inst_46028);

(statearr_46066_47247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (17))){
var state_46034__$1 = state_46034;
var statearr_46067_47248 = state_46034__$1;
(statearr_46067_47248[(2)] = false);

(statearr_46067_47248[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (3))){
var state_46034__$1 = state_46034;
var statearr_46068_47249 = state_46034__$1;
(statearr_46068_47249[(2)] = false);

(statearr_46068_47249[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (12))){
var inst_46032 = (state_46034[(2)]);
var state_46034__$1 = state_46034;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46034__$1,inst_46032);
} else {
if((state_val_46035 === (2))){
var inst_45936 = (state_46034[(8)]);
var inst_45941 = inst_45936.cljs$lang$protocol_mask$partition0$;
var inst_45942 = (inst_45941 & (64));
var inst_45943 = inst_45936.cljs$core$ISeq$;
var inst_45944 = (cljs.core.PROTOCOL_SENTINEL === inst_45943);
var inst_45945 = ((inst_45942) || (inst_45944));
var state_46034__$1 = state_46034;
if(cljs.core.truth_(inst_45945)){
var statearr_46069_47251 = state_46034__$1;
(statearr_46069_47251[(1)] = (5));

} else {
var statearr_46070_47252 = state_46034__$1;
(statearr_46070_47252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (23))){
var inst_45993 = (state_46034[(14)]);
var inst_45999 = (inst_45993 == null);
var state_46034__$1 = state_46034;
if(cljs.core.truth_(inst_45999)){
var statearr_46071_47253 = state_46034__$1;
(statearr_46071_47253[(1)] = (26));

} else {
var statearr_46072_47254 = state_46034__$1;
(statearr_46072_47254[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (35))){
var inst_46019 = (state_46034[(2)]);
var state_46034__$1 = state_46034;
if(cljs.core.truth_(inst_46019)){
var statearr_46073_47259 = state_46034__$1;
(statearr_46073_47259[(1)] = (36));

} else {
var statearr_46074_47260 = state_46034__$1;
(statearr_46074_47260[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (19))){
var inst_45961 = (state_46034[(7)]);
var inst_45981 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45961);
var state_46034__$1 = state_46034;
var statearr_46075_47264 = state_46034__$1;
(statearr_46075_47264[(2)] = inst_45981);

(statearr_46075_47264[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (11))){
var inst_45961 = (state_46034[(7)]);
var inst_45965 = (inst_45961 == null);
var inst_45966 = cljs.core.not(inst_45965);
var state_46034__$1 = state_46034;
if(inst_45966){
var statearr_46076_47266 = state_46034__$1;
(statearr_46076_47266[(1)] = (13));

} else {
var statearr_46077_47267 = state_46034__$1;
(statearr_46077_47267[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (9))){
var inst_45936 = (state_46034[(8)]);
var state_46034__$1 = state_46034;
var statearr_46078_47271 = state_46034__$1;
(statearr_46078_47271[(2)] = inst_45936);

(statearr_46078_47271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (5))){
var state_46034__$1 = state_46034;
var statearr_46079_47272 = state_46034__$1;
(statearr_46079_47272[(2)] = true);

(statearr_46079_47272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (14))){
var state_46034__$1 = state_46034;
var statearr_46080_47273 = state_46034__$1;
(statearr_46080_47273[(2)] = false);

(statearr_46080_47273[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (26))){
var inst_45994 = (state_46034[(10)]);
var inst_46001 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45994);
var state_46034__$1 = state_46034;
var statearr_46081_47277 = state_46034__$1;
(statearr_46081_47277[(2)] = inst_46001);

(statearr_46081_47277[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (16))){
var state_46034__$1 = state_46034;
var statearr_46082_47278 = state_46034__$1;
(statearr_46082_47278[(2)] = true);

(statearr_46082_47278[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (38))){
var inst_46024 = (state_46034[(2)]);
var state_46034__$1 = state_46034;
var statearr_46083_47279 = state_46034__$1;
(statearr_46083_47279[(2)] = inst_46024);

(statearr_46083_47279[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (30))){
var inst_45985 = (state_46034[(9)]);
var inst_45994 = (state_46034[(10)]);
var inst_45986 = (state_46034[(13)]);
var inst_46011 = cljs.core.empty_QMARK_(inst_45985);
var inst_46012 = (inst_45986.cljs$core$IFn$_invoke$arity$1 ? inst_45986.cljs$core$IFn$_invoke$arity$1(inst_45994) : inst_45986.call(null,inst_45994));
var inst_46013 = cljs.core.not(inst_46012);
var inst_46014 = ((inst_46011) && (inst_46013));
var state_46034__$1 = state_46034;
var statearr_46084_47287 = state_46034__$1;
(statearr_46084_47287[(2)] = inst_46014);

(statearr_46084_47287[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (10))){
var inst_45936 = (state_46034[(8)]);
var inst_45957 = (state_46034[(2)]);
var inst_45958 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45957,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45957,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45957,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45961 = inst_45936;
var state_46034__$1 = (function (){var statearr_46085 = state_46034;
(statearr_46085[(16)] = inst_45960);

(statearr_46085[(17)] = inst_45958);

(statearr_46085[(7)] = inst_45961);

(statearr_46085[(18)] = inst_45959);

return statearr_46085;
})();
var statearr_46086_47288 = state_46034__$1;
(statearr_46086_47288[(2)] = null);

(statearr_46086_47288[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (18))){
var inst_45976 = (state_46034[(2)]);
var state_46034__$1 = state_46034;
var statearr_46087_47289 = state_46034__$1;
(statearr_46087_47289[(2)] = inst_45976);

(statearr_46087_47289[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (37))){
var state_46034__$1 = state_46034;
var statearr_46088_47290 = state_46034__$1;
(statearr_46088_47290[(2)] = null);

(statearr_46088_47290[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46035 === (8))){
var inst_45936 = (state_46034[(8)]);
var inst_45954 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45936);
var state_46034__$1 = state_46034;
var statearr_46089_47291 = state_46034__$1;
(statearr_46089_47291[(2)] = inst_45954);

(statearr_46089_47291[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__45171__auto__ = null;
var cljs$core$async$mix_$_state_machine__45171__auto____0 = (function (){
var statearr_46090 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46090[(0)] = cljs$core$async$mix_$_state_machine__45171__auto__);

(statearr_46090[(1)] = (1));

return statearr_46090;
});
var cljs$core$async$mix_$_state_machine__45171__auto____1 = (function (state_46034){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_46034);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e46091){if((e46091 instanceof Object)){
var ex__45174__auto__ = e46091;
var statearr_46092_47294 = state_46034;
(statearr_46092_47294[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46091;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47295 = state_46034;
state_46034 = G__47295;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45171__auto__ = function(state_46034){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45171__auto____1.call(this,state_46034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45171__auto____0;
cljs$core$async$mix_$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45171__auto____1;
return cljs$core$async$mix_$_state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_46093 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_46093[(6)] = c__45238__auto___47213);

return statearr_46093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
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
var G__46095 = arguments.length;
switch (G__46095) {
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
var G__46098 = arguments.length;
switch (G__46098) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46096_SHARP_){
if(cljs.core.truth_((p1__46096_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46096_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46096_SHARP_.call(null,topic)))){
return p1__46096_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46096_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46099 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46100){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46100 = meta46100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46101,meta46100__$1){
var self__ = this;
var _46101__$1 = this;
return (new cljs.core.async.t_cljs$core$async46099(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46100__$1));
}));

(cljs.core.async.t_cljs$core$async46099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46101){
var self__ = this;
var _46101__$1 = this;
return self__.meta46100;
}));

(cljs.core.async.t_cljs$core$async46099.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46099.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46099.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46099.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46099.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async46099.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46099.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46100","meta46100",-1896470028,null)], null);
}));

(cljs.core.async.t_cljs$core$async46099.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46099");

(cljs.core.async.t_cljs$core$async46099.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46099");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46099.
 */
cljs.core.async.__GT_t_cljs$core$async46099 = (function cljs$core$async$__GT_t_cljs$core$async46099(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46100){
return (new cljs.core.async.t_cljs$core$async46099(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46100));
});

}

return (new cljs.core.async.t_cljs$core$async46099(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45238__auto___47321 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_46173){
var state_val_46174 = (state_46173[(1)]);
if((state_val_46174 === (7))){
var inst_46169 = (state_46173[(2)]);
var state_46173__$1 = state_46173;
var statearr_46175_47322 = state_46173__$1;
(statearr_46175_47322[(2)] = inst_46169);

(statearr_46175_47322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (20))){
var state_46173__$1 = state_46173;
var statearr_46176_47323 = state_46173__$1;
(statearr_46176_47323[(2)] = null);

(statearr_46176_47323[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (1))){
var state_46173__$1 = state_46173;
var statearr_46177_47325 = state_46173__$1;
(statearr_46177_47325[(2)] = null);

(statearr_46177_47325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (24))){
var inst_46152 = (state_46173[(7)]);
var inst_46161 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_46152);
var state_46173__$1 = state_46173;
var statearr_46178_47326 = state_46173__$1;
(statearr_46178_47326[(2)] = inst_46161);

(statearr_46178_47326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (4))){
var inst_46104 = (state_46173[(8)]);
var inst_46104__$1 = (state_46173[(2)]);
var inst_46105 = (inst_46104__$1 == null);
var state_46173__$1 = (function (){var statearr_46179 = state_46173;
(statearr_46179[(8)] = inst_46104__$1);

return statearr_46179;
})();
if(cljs.core.truth_(inst_46105)){
var statearr_46180_47328 = state_46173__$1;
(statearr_46180_47328[(1)] = (5));

} else {
var statearr_46181_47330 = state_46173__$1;
(statearr_46181_47330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (15))){
var inst_46146 = (state_46173[(2)]);
var state_46173__$1 = state_46173;
var statearr_46182_47334 = state_46173__$1;
(statearr_46182_47334[(2)] = inst_46146);

(statearr_46182_47334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (21))){
var inst_46166 = (state_46173[(2)]);
var state_46173__$1 = (function (){var statearr_46183 = state_46173;
(statearr_46183[(9)] = inst_46166);

return statearr_46183;
})();
var statearr_46184_47335 = state_46173__$1;
(statearr_46184_47335[(2)] = null);

(statearr_46184_47335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (13))){
var inst_46128 = (state_46173[(10)]);
var inst_46130 = cljs.core.chunked_seq_QMARK_(inst_46128);
var state_46173__$1 = state_46173;
if(inst_46130){
var statearr_46185_47336 = state_46173__$1;
(statearr_46185_47336[(1)] = (16));

} else {
var statearr_46186_47337 = state_46173__$1;
(statearr_46186_47337[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (22))){
var inst_46158 = (state_46173[(2)]);
var state_46173__$1 = state_46173;
if(cljs.core.truth_(inst_46158)){
var statearr_46187_47338 = state_46173__$1;
(statearr_46187_47338[(1)] = (23));

} else {
var statearr_46188_47339 = state_46173__$1;
(statearr_46188_47339[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (6))){
var inst_46104 = (state_46173[(8)]);
var inst_46154 = (state_46173[(11)]);
var inst_46152 = (state_46173[(7)]);
var inst_46152__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_46104) : topic_fn.call(null,inst_46104));
var inst_46153 = cljs.core.deref(mults);
var inst_46154__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46153,inst_46152__$1);
var state_46173__$1 = (function (){var statearr_46189 = state_46173;
(statearr_46189[(11)] = inst_46154__$1);

(statearr_46189[(7)] = inst_46152__$1);

return statearr_46189;
})();
if(cljs.core.truth_(inst_46154__$1)){
var statearr_46190_47341 = state_46173__$1;
(statearr_46190_47341[(1)] = (19));

} else {
var statearr_46191_47342 = state_46173__$1;
(statearr_46191_47342[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (25))){
var inst_46163 = (state_46173[(2)]);
var state_46173__$1 = state_46173;
var statearr_46192_47343 = state_46173__$1;
(statearr_46192_47343[(2)] = inst_46163);

(statearr_46192_47343[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (17))){
var inst_46128 = (state_46173[(10)]);
var inst_46137 = cljs.core.first(inst_46128);
var inst_46138 = cljs.core.async.muxch_STAR_(inst_46137);
var inst_46139 = cljs.core.async.close_BANG_(inst_46138);
var inst_46140 = cljs.core.next(inst_46128);
var inst_46114 = inst_46140;
var inst_46115 = null;
var inst_46116 = (0);
var inst_46117 = (0);
var state_46173__$1 = (function (){var statearr_46193 = state_46173;
(statearr_46193[(12)] = inst_46116);

(statearr_46193[(13)] = inst_46139);

(statearr_46193[(14)] = inst_46114);

(statearr_46193[(15)] = inst_46115);

(statearr_46193[(16)] = inst_46117);

return statearr_46193;
})();
var statearr_46194_47345 = state_46173__$1;
(statearr_46194_47345[(2)] = null);

(statearr_46194_47345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (3))){
var inst_46171 = (state_46173[(2)]);
var state_46173__$1 = state_46173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46173__$1,inst_46171);
} else {
if((state_val_46174 === (12))){
var inst_46148 = (state_46173[(2)]);
var state_46173__$1 = state_46173;
var statearr_46195_47346 = state_46173__$1;
(statearr_46195_47346[(2)] = inst_46148);

(statearr_46195_47346[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (2))){
var state_46173__$1 = state_46173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46173__$1,(4),ch);
} else {
if((state_val_46174 === (23))){
var state_46173__$1 = state_46173;
var statearr_46196_47348 = state_46173__$1;
(statearr_46196_47348[(2)] = null);

(statearr_46196_47348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (19))){
var inst_46104 = (state_46173[(8)]);
var inst_46154 = (state_46173[(11)]);
var inst_46156 = cljs.core.async.muxch_STAR_(inst_46154);
var state_46173__$1 = state_46173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46173__$1,(22),inst_46156,inst_46104);
} else {
if((state_val_46174 === (11))){
var inst_46128 = (state_46173[(10)]);
var inst_46114 = (state_46173[(14)]);
var inst_46128__$1 = cljs.core.seq(inst_46114);
var state_46173__$1 = (function (){var statearr_46197 = state_46173;
(statearr_46197[(10)] = inst_46128__$1);

return statearr_46197;
})();
if(inst_46128__$1){
var statearr_46198_47349 = state_46173__$1;
(statearr_46198_47349[(1)] = (13));

} else {
var statearr_46199_47350 = state_46173__$1;
(statearr_46199_47350[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (9))){
var inst_46150 = (state_46173[(2)]);
var state_46173__$1 = state_46173;
var statearr_46200_47351 = state_46173__$1;
(statearr_46200_47351[(2)] = inst_46150);

(statearr_46200_47351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (5))){
var inst_46111 = cljs.core.deref(mults);
var inst_46112 = cljs.core.vals(inst_46111);
var inst_46113 = cljs.core.seq(inst_46112);
var inst_46114 = inst_46113;
var inst_46115 = null;
var inst_46116 = (0);
var inst_46117 = (0);
var state_46173__$1 = (function (){var statearr_46201 = state_46173;
(statearr_46201[(12)] = inst_46116);

(statearr_46201[(14)] = inst_46114);

(statearr_46201[(15)] = inst_46115);

(statearr_46201[(16)] = inst_46117);

return statearr_46201;
})();
var statearr_46202_47359 = state_46173__$1;
(statearr_46202_47359[(2)] = null);

(statearr_46202_47359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (14))){
var state_46173__$1 = state_46173;
var statearr_46206_47361 = state_46173__$1;
(statearr_46206_47361[(2)] = null);

(statearr_46206_47361[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (16))){
var inst_46128 = (state_46173[(10)]);
var inst_46132 = cljs.core.chunk_first(inst_46128);
var inst_46133 = cljs.core.chunk_rest(inst_46128);
var inst_46134 = cljs.core.count(inst_46132);
var inst_46114 = inst_46133;
var inst_46115 = inst_46132;
var inst_46116 = inst_46134;
var inst_46117 = (0);
var state_46173__$1 = (function (){var statearr_46207 = state_46173;
(statearr_46207[(12)] = inst_46116);

(statearr_46207[(14)] = inst_46114);

(statearr_46207[(15)] = inst_46115);

(statearr_46207[(16)] = inst_46117);

return statearr_46207;
})();
var statearr_46208_47362 = state_46173__$1;
(statearr_46208_47362[(2)] = null);

(statearr_46208_47362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (10))){
var inst_46116 = (state_46173[(12)]);
var inst_46114 = (state_46173[(14)]);
var inst_46115 = (state_46173[(15)]);
var inst_46117 = (state_46173[(16)]);
var inst_46122 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46115,inst_46117);
var inst_46123 = cljs.core.async.muxch_STAR_(inst_46122);
var inst_46124 = cljs.core.async.close_BANG_(inst_46123);
var inst_46125 = (inst_46117 + (1));
var tmp46203 = inst_46116;
var tmp46204 = inst_46114;
var tmp46205 = inst_46115;
var inst_46114__$1 = tmp46204;
var inst_46115__$1 = tmp46205;
var inst_46116__$1 = tmp46203;
var inst_46117__$1 = inst_46125;
var state_46173__$1 = (function (){var statearr_46209 = state_46173;
(statearr_46209[(17)] = inst_46124);

(statearr_46209[(12)] = inst_46116__$1);

(statearr_46209[(14)] = inst_46114__$1);

(statearr_46209[(15)] = inst_46115__$1);

(statearr_46209[(16)] = inst_46117__$1);

return statearr_46209;
})();
var statearr_46210_47363 = state_46173__$1;
(statearr_46210_47363[(2)] = null);

(statearr_46210_47363[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (18))){
var inst_46143 = (state_46173[(2)]);
var state_46173__$1 = state_46173;
var statearr_46211_47364 = state_46173__$1;
(statearr_46211_47364[(2)] = inst_46143);

(statearr_46211_47364[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46174 === (8))){
var inst_46116 = (state_46173[(12)]);
var inst_46117 = (state_46173[(16)]);
var inst_46119 = (inst_46117 < inst_46116);
var inst_46120 = inst_46119;
var state_46173__$1 = state_46173;
if(cljs.core.truth_(inst_46120)){
var statearr_46212_47365 = state_46173__$1;
(statearr_46212_47365[(1)] = (10));

} else {
var statearr_46213_47366 = state_46173__$1;
(statearr_46213_47366[(1)] = (11));

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
var cljs$core$async$state_machine__45171__auto__ = null;
var cljs$core$async$state_machine__45171__auto____0 = (function (){
var statearr_46214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46214[(0)] = cljs$core$async$state_machine__45171__auto__);

(statearr_46214[(1)] = (1));

return statearr_46214;
});
var cljs$core$async$state_machine__45171__auto____1 = (function (state_46173){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_46173);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e46215){if((e46215 instanceof Object)){
var ex__45174__auto__ = e46215;
var statearr_46216_47369 = state_46173;
(statearr_46216_47369[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46215;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47370 = state_46173;
state_46173 = G__47370;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$state_machine__45171__auto__ = function(state_46173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45171__auto____1.call(this,state_46173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45171__auto____0;
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45171__auto____1;
return cljs$core$async$state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_46217 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_46217[(6)] = c__45238__auto___47321);

return statearr_46217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
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
var G__46219 = arguments.length;
switch (G__46219) {
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
var G__46221 = arguments.length;
switch (G__46221) {
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
var G__46223 = arguments.length;
switch (G__46223) {
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
var c__45238__auto___47383 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_46262){
var state_val_46263 = (state_46262[(1)]);
if((state_val_46263 === (7))){
var state_46262__$1 = state_46262;
var statearr_46264_47384 = state_46262__$1;
(statearr_46264_47384[(2)] = null);

(statearr_46264_47384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (1))){
var state_46262__$1 = state_46262;
var statearr_46265_47385 = state_46262__$1;
(statearr_46265_47385[(2)] = null);

(statearr_46265_47385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (4))){
var inst_46226 = (state_46262[(7)]);
var inst_46228 = (inst_46226 < cnt);
var state_46262__$1 = state_46262;
if(cljs.core.truth_(inst_46228)){
var statearr_46266_47386 = state_46262__$1;
(statearr_46266_47386[(1)] = (6));

} else {
var statearr_46267_47388 = state_46262__$1;
(statearr_46267_47388[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (15))){
var inst_46258 = (state_46262[(2)]);
var state_46262__$1 = state_46262;
var statearr_46268_47390 = state_46262__$1;
(statearr_46268_47390[(2)] = inst_46258);

(statearr_46268_47390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (13))){
var inst_46251 = cljs.core.async.close_BANG_(out);
var state_46262__$1 = state_46262;
var statearr_46269_47391 = state_46262__$1;
(statearr_46269_47391[(2)] = inst_46251);

(statearr_46269_47391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (6))){
var state_46262__$1 = state_46262;
var statearr_46270_47392 = state_46262__$1;
(statearr_46270_47392[(2)] = null);

(statearr_46270_47392[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (3))){
var inst_46260 = (state_46262[(2)]);
var state_46262__$1 = state_46262;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46262__$1,inst_46260);
} else {
if((state_val_46263 === (12))){
var inst_46248 = (state_46262[(8)]);
var inst_46248__$1 = (state_46262[(2)]);
var inst_46249 = cljs.core.some(cljs.core.nil_QMARK_,inst_46248__$1);
var state_46262__$1 = (function (){var statearr_46271 = state_46262;
(statearr_46271[(8)] = inst_46248__$1);

return statearr_46271;
})();
if(cljs.core.truth_(inst_46249)){
var statearr_46272_47397 = state_46262__$1;
(statearr_46272_47397[(1)] = (13));

} else {
var statearr_46273_47398 = state_46262__$1;
(statearr_46273_47398[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (2))){
var inst_46225 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46226 = (0);
var state_46262__$1 = (function (){var statearr_46274 = state_46262;
(statearr_46274[(7)] = inst_46226);

(statearr_46274[(9)] = inst_46225);

return statearr_46274;
})();
var statearr_46275_47399 = state_46262__$1;
(statearr_46275_47399[(2)] = null);

(statearr_46275_47399[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (11))){
var inst_46226 = (state_46262[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_46262,(10),Object,null,(9));
var inst_46235 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46226) : chs__$1.call(null,inst_46226));
var inst_46236 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46226) : done.call(null,inst_46226));
var inst_46237 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46235,inst_46236);
var state_46262__$1 = state_46262;
var statearr_46276_47401 = state_46262__$1;
(statearr_46276_47401[(2)] = inst_46237);


cljs.core.async.impl.ioc_helpers.process_exception(state_46262__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (9))){
var inst_46226 = (state_46262[(7)]);
var inst_46239 = (state_46262[(2)]);
var inst_46240 = (inst_46226 + (1));
var inst_46226__$1 = inst_46240;
var state_46262__$1 = (function (){var statearr_46277 = state_46262;
(statearr_46277[(7)] = inst_46226__$1);

(statearr_46277[(10)] = inst_46239);

return statearr_46277;
})();
var statearr_46278_47402 = state_46262__$1;
(statearr_46278_47402[(2)] = null);

(statearr_46278_47402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (5))){
var inst_46246 = (state_46262[(2)]);
var state_46262__$1 = (function (){var statearr_46279 = state_46262;
(statearr_46279[(11)] = inst_46246);

return statearr_46279;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46262__$1,(12),dchan);
} else {
if((state_val_46263 === (14))){
var inst_46248 = (state_46262[(8)]);
var inst_46253 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46248);
var state_46262__$1 = state_46262;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46262__$1,(16),out,inst_46253);
} else {
if((state_val_46263 === (16))){
var inst_46255 = (state_46262[(2)]);
var state_46262__$1 = (function (){var statearr_46280 = state_46262;
(statearr_46280[(12)] = inst_46255);

return statearr_46280;
})();
var statearr_46281_47404 = state_46262__$1;
(statearr_46281_47404[(2)] = null);

(statearr_46281_47404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (10))){
var inst_46230 = (state_46262[(2)]);
var inst_46231 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46262__$1 = (function (){var statearr_46282 = state_46262;
(statearr_46282[(13)] = inst_46230);

return statearr_46282;
})();
var statearr_46283_47406 = state_46262__$1;
(statearr_46283_47406[(2)] = inst_46231);


cljs.core.async.impl.ioc_helpers.process_exception(state_46262__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46263 === (8))){
var inst_46244 = (state_46262[(2)]);
var state_46262__$1 = state_46262;
var statearr_46284_47407 = state_46262__$1;
(statearr_46284_47407[(2)] = inst_46244);

(statearr_46284_47407[(1)] = (5));


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
var cljs$core$async$state_machine__45171__auto__ = null;
var cljs$core$async$state_machine__45171__auto____0 = (function (){
var statearr_46285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46285[(0)] = cljs$core$async$state_machine__45171__auto__);

(statearr_46285[(1)] = (1));

return statearr_46285;
});
var cljs$core$async$state_machine__45171__auto____1 = (function (state_46262){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_46262);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e46286){if((e46286 instanceof Object)){
var ex__45174__auto__ = e46286;
var statearr_46287_47413 = state_46262;
(statearr_46287_47413[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46286;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47416 = state_46262;
state_46262 = G__47416;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$state_machine__45171__auto__ = function(state_46262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45171__auto____1.call(this,state_46262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45171__auto____0;
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45171__auto____1;
return cljs$core$async$state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_46288 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_46288[(6)] = c__45238__auto___47383);

return statearr_46288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
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
var G__46291 = arguments.length;
switch (G__46291) {
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
var c__45238__auto___47419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_46323){
var state_val_46324 = (state_46323[(1)]);
if((state_val_46324 === (7))){
var inst_46303 = (state_46323[(7)]);
var inst_46302 = (state_46323[(8)]);
var inst_46302__$1 = (state_46323[(2)]);
var inst_46303__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46302__$1,(0),null);
var inst_46304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46302__$1,(1),null);
var inst_46305 = (inst_46303__$1 == null);
var state_46323__$1 = (function (){var statearr_46325 = state_46323;
(statearr_46325[(7)] = inst_46303__$1);

(statearr_46325[(9)] = inst_46304);

(statearr_46325[(8)] = inst_46302__$1);

return statearr_46325;
})();
if(cljs.core.truth_(inst_46305)){
var statearr_46326_47420 = state_46323__$1;
(statearr_46326_47420[(1)] = (8));

} else {
var statearr_46327_47421 = state_46323__$1;
(statearr_46327_47421[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46324 === (1))){
var inst_46292 = cljs.core.vec(chs);
var inst_46293 = inst_46292;
var state_46323__$1 = (function (){var statearr_46328 = state_46323;
(statearr_46328[(10)] = inst_46293);

return statearr_46328;
})();
var statearr_46329_47422 = state_46323__$1;
(statearr_46329_47422[(2)] = null);

(statearr_46329_47422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46324 === (4))){
var inst_46293 = (state_46323[(10)]);
var state_46323__$1 = state_46323;
return cljs.core.async.ioc_alts_BANG_(state_46323__$1,(7),inst_46293);
} else {
if((state_val_46324 === (6))){
var inst_46319 = (state_46323[(2)]);
var state_46323__$1 = state_46323;
var statearr_46330_47423 = state_46323__$1;
(statearr_46330_47423[(2)] = inst_46319);

(statearr_46330_47423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46324 === (3))){
var inst_46321 = (state_46323[(2)]);
var state_46323__$1 = state_46323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46323__$1,inst_46321);
} else {
if((state_val_46324 === (2))){
var inst_46293 = (state_46323[(10)]);
var inst_46295 = cljs.core.count(inst_46293);
var inst_46296 = (inst_46295 > (0));
var state_46323__$1 = state_46323;
if(cljs.core.truth_(inst_46296)){
var statearr_46332_47426 = state_46323__$1;
(statearr_46332_47426[(1)] = (4));

} else {
var statearr_46333_47427 = state_46323__$1;
(statearr_46333_47427[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46324 === (11))){
var inst_46293 = (state_46323[(10)]);
var inst_46312 = (state_46323[(2)]);
var tmp46331 = inst_46293;
var inst_46293__$1 = tmp46331;
var state_46323__$1 = (function (){var statearr_46334 = state_46323;
(statearr_46334[(11)] = inst_46312);

(statearr_46334[(10)] = inst_46293__$1);

return statearr_46334;
})();
var statearr_46335_47428 = state_46323__$1;
(statearr_46335_47428[(2)] = null);

(statearr_46335_47428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46324 === (9))){
var inst_46303 = (state_46323[(7)]);
var state_46323__$1 = state_46323;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46323__$1,(11),out,inst_46303);
} else {
if((state_val_46324 === (5))){
var inst_46317 = cljs.core.async.close_BANG_(out);
var state_46323__$1 = state_46323;
var statearr_46336_47429 = state_46323__$1;
(statearr_46336_47429[(2)] = inst_46317);

(statearr_46336_47429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46324 === (10))){
var inst_46315 = (state_46323[(2)]);
var state_46323__$1 = state_46323;
var statearr_46337_47430 = state_46323__$1;
(statearr_46337_47430[(2)] = inst_46315);

(statearr_46337_47430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46324 === (8))){
var inst_46303 = (state_46323[(7)]);
var inst_46304 = (state_46323[(9)]);
var inst_46302 = (state_46323[(8)]);
var inst_46293 = (state_46323[(10)]);
var inst_46307 = (function (){var cs = inst_46293;
var vec__46298 = inst_46302;
var v = inst_46303;
var c = inst_46304;
return (function (p1__46289_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46289_SHARP_);
});
})();
var inst_46308 = cljs.core.filterv(inst_46307,inst_46293);
var inst_46293__$1 = inst_46308;
var state_46323__$1 = (function (){var statearr_46338 = state_46323;
(statearr_46338[(10)] = inst_46293__$1);

return statearr_46338;
})();
var statearr_46339_47432 = state_46323__$1;
(statearr_46339_47432[(2)] = null);

(statearr_46339_47432[(1)] = (2));


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
var cljs$core$async$state_machine__45171__auto__ = null;
var cljs$core$async$state_machine__45171__auto____0 = (function (){
var statearr_46340 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46340[(0)] = cljs$core$async$state_machine__45171__auto__);

(statearr_46340[(1)] = (1));

return statearr_46340;
});
var cljs$core$async$state_machine__45171__auto____1 = (function (state_46323){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_46323);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e46341){if((e46341 instanceof Object)){
var ex__45174__auto__ = e46341;
var statearr_46342_47434 = state_46323;
(statearr_46342_47434[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46341;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47435 = state_46323;
state_46323 = G__47435;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$state_machine__45171__auto__ = function(state_46323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45171__auto____1.call(this,state_46323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45171__auto____0;
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45171__auto____1;
return cljs$core$async$state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_46343 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_46343[(6)] = c__45238__auto___47419);

return statearr_46343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
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
var G__46345 = arguments.length;
switch (G__46345) {
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
var c__45238__auto___47437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_46369){
var state_val_46370 = (state_46369[(1)]);
if((state_val_46370 === (7))){
var inst_46351 = (state_46369[(7)]);
var inst_46351__$1 = (state_46369[(2)]);
var inst_46352 = (inst_46351__$1 == null);
var inst_46353 = cljs.core.not(inst_46352);
var state_46369__$1 = (function (){var statearr_46371 = state_46369;
(statearr_46371[(7)] = inst_46351__$1);

return statearr_46371;
})();
if(inst_46353){
var statearr_46372_47443 = state_46369__$1;
(statearr_46372_47443[(1)] = (8));

} else {
var statearr_46373_47444 = state_46369__$1;
(statearr_46373_47444[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (1))){
var inst_46346 = (0);
var state_46369__$1 = (function (){var statearr_46374 = state_46369;
(statearr_46374[(8)] = inst_46346);

return statearr_46374;
})();
var statearr_46375_47445 = state_46369__$1;
(statearr_46375_47445[(2)] = null);

(statearr_46375_47445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (4))){
var state_46369__$1 = state_46369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46369__$1,(7),ch);
} else {
if((state_val_46370 === (6))){
var inst_46364 = (state_46369[(2)]);
var state_46369__$1 = state_46369;
var statearr_46376_47450 = state_46369__$1;
(statearr_46376_47450[(2)] = inst_46364);

(statearr_46376_47450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (3))){
var inst_46366 = (state_46369[(2)]);
var inst_46367 = cljs.core.async.close_BANG_(out);
var state_46369__$1 = (function (){var statearr_46377 = state_46369;
(statearr_46377[(9)] = inst_46366);

return statearr_46377;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46369__$1,inst_46367);
} else {
if((state_val_46370 === (2))){
var inst_46346 = (state_46369[(8)]);
var inst_46348 = (inst_46346 < n);
var state_46369__$1 = state_46369;
if(cljs.core.truth_(inst_46348)){
var statearr_46378_47454 = state_46369__$1;
(statearr_46378_47454[(1)] = (4));

} else {
var statearr_46379_47455 = state_46369__$1;
(statearr_46379_47455[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (11))){
var inst_46346 = (state_46369[(8)]);
var inst_46356 = (state_46369[(2)]);
var inst_46357 = (inst_46346 + (1));
var inst_46346__$1 = inst_46357;
var state_46369__$1 = (function (){var statearr_46380 = state_46369;
(statearr_46380[(10)] = inst_46356);

(statearr_46380[(8)] = inst_46346__$1);

return statearr_46380;
})();
var statearr_46381_47456 = state_46369__$1;
(statearr_46381_47456[(2)] = null);

(statearr_46381_47456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (9))){
var state_46369__$1 = state_46369;
var statearr_46382_47457 = state_46369__$1;
(statearr_46382_47457[(2)] = null);

(statearr_46382_47457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (5))){
var state_46369__$1 = state_46369;
var statearr_46383_47458 = state_46369__$1;
(statearr_46383_47458[(2)] = null);

(statearr_46383_47458[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (10))){
var inst_46361 = (state_46369[(2)]);
var state_46369__$1 = state_46369;
var statearr_46384_47459 = state_46369__$1;
(statearr_46384_47459[(2)] = inst_46361);

(statearr_46384_47459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46370 === (8))){
var inst_46351 = (state_46369[(7)]);
var state_46369__$1 = state_46369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46369__$1,(11),out,inst_46351);
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
var cljs$core$async$state_machine__45171__auto__ = null;
var cljs$core$async$state_machine__45171__auto____0 = (function (){
var statearr_46385 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46385[(0)] = cljs$core$async$state_machine__45171__auto__);

(statearr_46385[(1)] = (1));

return statearr_46385;
});
var cljs$core$async$state_machine__45171__auto____1 = (function (state_46369){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_46369);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e46386){if((e46386 instanceof Object)){
var ex__45174__auto__ = e46386;
var statearr_46387_47461 = state_46369;
(statearr_46387_47461[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46386;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47464 = state_46369;
state_46369 = G__47464;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$state_machine__45171__auto__ = function(state_46369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45171__auto____1.call(this,state_46369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45171__auto____0;
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45171__auto____1;
return cljs$core$async$state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_46388 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_46388[(6)] = c__45238__auto___47437);

return statearr_46388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46390 = (function (f,ch,meta46391){
this.f = f;
this.ch = ch;
this.meta46391 = meta46391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46392,meta46391__$1){
var self__ = this;
var _46392__$1 = this;
return (new cljs.core.async.t_cljs$core$async46390(self__.f,self__.ch,meta46391__$1));
}));

(cljs.core.async.t_cljs$core$async46390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46392){
var self__ = this;
var _46392__$1 = this;
return self__.meta46391;
}));

(cljs.core.async.t_cljs$core$async46390.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46390.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46390.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46390.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46390.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46393 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46393 = (function (f,ch,meta46391,_,fn1,meta46394){
this.f = f;
this.ch = ch;
this.meta46391 = meta46391;
this._ = _;
this.fn1 = fn1;
this.meta46394 = meta46394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46395,meta46394__$1){
var self__ = this;
var _46395__$1 = this;
return (new cljs.core.async.t_cljs$core$async46393(self__.f,self__.ch,self__.meta46391,self__._,self__.fn1,meta46394__$1));
}));

(cljs.core.async.t_cljs$core$async46393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46395){
var self__ = this;
var _46395__$1 = this;
return self__.meta46394;
}));

(cljs.core.async.t_cljs$core$async46393.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46393.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async46393.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46393.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__46389_SHARP_){
var G__46396 = (((p1__46389_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46389_SHARP_) : self__.f.call(null,p1__46389_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46396) : f1.call(null,G__46396));
});
}));

(cljs.core.async.t_cljs$core$async46393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46391","meta46391",-755844461,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46390","cljs.core.async/t_cljs$core$async46390",-385360536,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46394","meta46394",1055863026,null)], null);
}));

(cljs.core.async.t_cljs$core$async46393.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46393");

(cljs.core.async.t_cljs$core$async46393.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46393");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46393.
 */
cljs.core.async.__GT_t_cljs$core$async46393 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46393(f__$1,ch__$1,meta46391__$1,___$2,fn1__$1,meta46394){
return (new cljs.core.async.t_cljs$core$async46393(f__$1,ch__$1,meta46391__$1,___$2,fn1__$1,meta46394));
});

}

return (new cljs.core.async.t_cljs$core$async46393(self__.f,self__.ch,self__.meta46391,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46397 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46397) : self__.f.call(null,G__46397));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async46390.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46390.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async46390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46391","meta46391",-755844461,null)], null);
}));

(cljs.core.async.t_cljs$core$async46390.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46390");

(cljs.core.async.t_cljs$core$async46390.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46390");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46390.
 */
cljs.core.async.__GT_t_cljs$core$async46390 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46390(f__$1,ch__$1,meta46391){
return (new cljs.core.async.t_cljs$core$async46390(f__$1,ch__$1,meta46391));
});

}

return (new cljs.core.async.t_cljs$core$async46390(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46398 = (function (f,ch,meta46399){
this.f = f;
this.ch = ch;
this.meta46399 = meta46399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46400,meta46399__$1){
var self__ = this;
var _46400__$1 = this;
return (new cljs.core.async.t_cljs$core$async46398(self__.f,self__.ch,meta46399__$1));
}));

(cljs.core.async.t_cljs$core$async46398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46400){
var self__ = this;
var _46400__$1 = this;
return self__.meta46399;
}));

(cljs.core.async.t_cljs$core$async46398.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46398.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46398.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46398.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46398.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46398.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async46398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46399","meta46399",87929249,null)], null);
}));

(cljs.core.async.t_cljs$core$async46398.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46398");

(cljs.core.async.t_cljs$core$async46398.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46398");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46398.
 */
cljs.core.async.__GT_t_cljs$core$async46398 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46398(f__$1,ch__$1,meta46399){
return (new cljs.core.async.t_cljs$core$async46398(f__$1,ch__$1,meta46399));
});

}

return (new cljs.core.async.t_cljs$core$async46398(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46401 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46401 = (function (p,ch,meta46402){
this.p = p;
this.ch = ch;
this.meta46402 = meta46402;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46403,meta46402__$1){
var self__ = this;
var _46403__$1 = this;
return (new cljs.core.async.t_cljs$core$async46401(self__.p,self__.ch,meta46402__$1));
}));

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46403){
var self__ = this;
var _46403__$1 = this;
return self__.meta46402;
}));

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46401.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async46401.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46402","meta46402",634878410,null)], null);
}));

(cljs.core.async.t_cljs$core$async46401.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46401.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46401");

(cljs.core.async.t_cljs$core$async46401.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46401");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46401.
 */
cljs.core.async.__GT_t_cljs$core$async46401 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46401(p__$1,ch__$1,meta46402){
return (new cljs.core.async.t_cljs$core$async46401(p__$1,ch__$1,meta46402));
});

}

return (new cljs.core.async.t_cljs$core$async46401(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46405 = arguments.length;
switch (G__46405) {
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
var c__45238__auto___47497 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_46426){
var state_val_46427 = (state_46426[(1)]);
if((state_val_46427 === (7))){
var inst_46422 = (state_46426[(2)]);
var state_46426__$1 = state_46426;
var statearr_46428_47498 = state_46426__$1;
(statearr_46428_47498[(2)] = inst_46422);

(statearr_46428_47498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (1))){
var state_46426__$1 = state_46426;
var statearr_46429_47501 = state_46426__$1;
(statearr_46429_47501[(2)] = null);

(statearr_46429_47501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (4))){
var inst_46408 = (state_46426[(7)]);
var inst_46408__$1 = (state_46426[(2)]);
var inst_46409 = (inst_46408__$1 == null);
var state_46426__$1 = (function (){var statearr_46430 = state_46426;
(statearr_46430[(7)] = inst_46408__$1);

return statearr_46430;
})();
if(cljs.core.truth_(inst_46409)){
var statearr_46431_47511 = state_46426__$1;
(statearr_46431_47511[(1)] = (5));

} else {
var statearr_46432_47512 = state_46426__$1;
(statearr_46432_47512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (6))){
var inst_46408 = (state_46426[(7)]);
var inst_46413 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46408) : p.call(null,inst_46408));
var state_46426__$1 = state_46426;
if(cljs.core.truth_(inst_46413)){
var statearr_46433_47513 = state_46426__$1;
(statearr_46433_47513[(1)] = (8));

} else {
var statearr_46434_47514 = state_46426__$1;
(statearr_46434_47514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (3))){
var inst_46424 = (state_46426[(2)]);
var state_46426__$1 = state_46426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46426__$1,inst_46424);
} else {
if((state_val_46427 === (2))){
var state_46426__$1 = state_46426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46426__$1,(4),ch);
} else {
if((state_val_46427 === (11))){
var inst_46416 = (state_46426[(2)]);
var state_46426__$1 = state_46426;
var statearr_46435_47521 = state_46426__$1;
(statearr_46435_47521[(2)] = inst_46416);

(statearr_46435_47521[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (9))){
var state_46426__$1 = state_46426;
var statearr_46436_47522 = state_46426__$1;
(statearr_46436_47522[(2)] = null);

(statearr_46436_47522[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (5))){
var inst_46411 = cljs.core.async.close_BANG_(out);
var state_46426__$1 = state_46426;
var statearr_46437_47523 = state_46426__$1;
(statearr_46437_47523[(2)] = inst_46411);

(statearr_46437_47523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (10))){
var inst_46419 = (state_46426[(2)]);
var state_46426__$1 = (function (){var statearr_46438 = state_46426;
(statearr_46438[(8)] = inst_46419);

return statearr_46438;
})();
var statearr_46439_47524 = state_46426__$1;
(statearr_46439_47524[(2)] = null);

(statearr_46439_47524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46427 === (8))){
var inst_46408 = (state_46426[(7)]);
var state_46426__$1 = state_46426;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46426__$1,(11),out,inst_46408);
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
var cljs$core$async$state_machine__45171__auto__ = null;
var cljs$core$async$state_machine__45171__auto____0 = (function (){
var statearr_46440 = [null,null,null,null,null,null,null,null,null];
(statearr_46440[(0)] = cljs$core$async$state_machine__45171__auto__);

(statearr_46440[(1)] = (1));

return statearr_46440;
});
var cljs$core$async$state_machine__45171__auto____1 = (function (state_46426){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_46426);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e46441){if((e46441 instanceof Object)){
var ex__45174__auto__ = e46441;
var statearr_46442_47525 = state_46426;
(statearr_46442_47525[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47526 = state_46426;
state_46426 = G__47526;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$state_machine__45171__auto__ = function(state_46426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45171__auto____1.call(this,state_46426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45171__auto____0;
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45171__auto____1;
return cljs$core$async$state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_46443 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_46443[(6)] = c__45238__auto___47497);

return statearr_46443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46445 = arguments.length;
switch (G__46445) {
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
var c__45238__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_46507){
var state_val_46508 = (state_46507[(1)]);
if((state_val_46508 === (7))){
var inst_46503 = (state_46507[(2)]);
var state_46507__$1 = state_46507;
var statearr_46509_47536 = state_46507__$1;
(statearr_46509_47536[(2)] = inst_46503);

(statearr_46509_47536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46508 === (20))){
var inst_46473 = (state_46507[(7)]);
var inst_46484 = (state_46507[(2)]);
var inst_46485 = cljs.core.next(inst_46473);
var inst_46459 = inst_46485;
var inst_46460 = null;
var inst_46461 = (0);
var inst_46462 = (0);
var state_46507__$1 = (function (){var statearr_46510 = state_46507;
(statearr_46510[(8)] = inst_46461);

(statearr_46510[(9)] = inst_46462);

(statearr_46510[(10)] = inst_46484);

(statearr_46510[(11)] = inst_46460);

(statearr_46510[(12)] = inst_46459);

return statearr_46510;
})();
var statearr_46511_47540 = state_46507__$1;
(statearr_46511_47540[(2)] = null);

(statearr_46511_47540[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46508 === (1))){
var state_46507__$1 = state_46507;
var statearr_46512_47541 = state_46507__$1;
(statearr_46512_47541[(2)] = null);

(statearr_46512_47541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46508 === (4))){
var inst_46448 = (state_46507[(13)]);
var inst_46448__$1 = (state_46507[(2)]);
var inst_46449 = (inst_46448__$1 == null);
var state_46507__$1 = (function (){var statearr_46513 = state_46507;
(statearr_46513[(13)] = inst_46448__$1);

return statearr_46513;
})();
if(cljs.core.truth_(inst_46449)){
var statearr_46514_47542 = state_46507__$1;
(statearr_46514_47542[(1)] = (5));

} else {
var statearr_46515_47543 = state_46507__$1;
(statearr_46515_47543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46508 === (15))){
var state_46507__$1 = state_46507;
var statearr_46519_47546 = state_46507__$1;
(statearr_46519_47546[(2)] = null);

(statearr_46519_47546[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46508 === (21))){
var state_46507__$1 = state_46507;
var statearr_46520_47548 = state_46507__$1;
(statearr_46520_47548[(2)] = null);

(statearr_46520_47548[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46508 === (13))){
var inst_46461 = (state_46507[(8)]);
var inst_46462 = (state_46507[(9)]);
var inst_46460 = (state_46507[(11)]);
var inst_46459 = (state_46507[(12)]);
var inst_46469 = (state_46507[(2)]);
var inst_46470 = (inst_46462 + (1));
var tmp46516 = inst_46461;
var tmp46517 = inst_46460;
var tmp46518 = inst_46459;
var inst_46459__$1 = tmp46518;
var inst_46460__$1 = tmp46517;
var inst_46461__$1 = tmp46516;
var inst_46462__$1 = inst_46470;
var state_46507__$1 = (function (){var statearr_46521 = state_46507;
(statearr_46521[(8)] = inst_46461__$1);

(statearr_46521[(9)] = inst_46462__$1);

(statearr_46521[(11)] = inst_46460__$1);

(statearr_46521[(12)] = inst_46459__$1);

(statearr_46521[(14)] = inst_46469);

return statearr_46521;
})();
var statearr_46522_47552 = state_46507__$1;
(statearr_46522_47552[(2)] = null);

(statearr_46522_47552[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46508 === (22))){
var state_46507__$1 = state_46507;
var statearr_46523_47553 = state_46507__$1;
(statearr_46523_47553[(2)] = null);

(statearr_46523_47553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46508 === (6))){
var inst_46448 = (state_46507[(13)]);
var inst_46457 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46448) : f.call(null,inst_46448));
var inst_46458 = cljs.core.seq(inst_46457);
var inst_46459 = inst_46458;
var inst_46460 = null;
var inst_46461 = (0);
var inst_46462 = (0);
var state_46507__$1 = (function (){var statearr_46524 = state_46507;
(statearr_46524[(8)] = inst_46461);

(statearr_46524[(9)] = inst_46462);

(statearr_46524[(11)] = inst_46460);

(statearr_46524[(12)] = inst_46459);

return statearr_46524;
})();
var statearr_46525_47560 = state_46507__$1;
(statearr_46525_47560[(2)] = null);

(statearr_46525_47560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46508 === (17))){
var inst_46473 = (state_46507[(7)]);
var inst_46477 = cljs.core.chunk_first(inst_46473);
var inst_46478 = cljs.core.chunk_rest(inst_46473);
var inst_46479 = cljs.core.count(inst_46477);
var inst_46459 = inst_46478;
var inst_46460 = inst_46477;
var inst_46461 = inst_46479;
var inst_46462 = (0);
var state_46507__$1 = (function (){var statearr_46526 = state_46507;
(statearr_46526[(8)] = inst_46461);

(statearr_46526[(9)] = inst_46462);

(statearr_46526[(11)] = inst_46460);

(statearr_46526[(12)] = inst_46459);

return statearr_46526;
})();
var statearr_46527_47561 = state_46507__$1;
(statearr_46527_47561[(2)] = null);

(statearr_46527_47561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46508 === (3))){
var inst_46505 = (state_46507[(2)]);
var state_46507__$1 = state_46507;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46507__$1,inst_46505);
} else {
if((state_val_46508 === (12))){
var inst_46493 = (state_46507[(2)]);
var state_46507__$1 = state_46507;
var statearr_46528_47562 = state_46507__$1;
(statearr_46528_47562[(2)] = inst_46493);

(statearr_46528_47562[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46508 === (2))){
var state_46507__$1 = state_46507;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46507__$1,(4),in$);
} else {
if((state_val_46508 === (23))){
var inst_46501 = (state_46507[(2)]);
var state_46507__$1 = state_46507;
var statearr_46529_47563 = state_46507__$1;
(statearr_46529_47563[(2)] = inst_46501);

(statearr_46529_47563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46508 === (19))){
var inst_46488 = (state_46507[(2)]);
var state_46507__$1 = state_46507;
var statearr_46530_47564 = state_46507__$1;
(statearr_46530_47564[(2)] = inst_46488);

(statearr_46530_47564[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46508 === (11))){
var inst_46459 = (state_46507[(12)]);
var inst_46473 = (state_46507[(7)]);
var inst_46473__$1 = cljs.core.seq(inst_46459);
var state_46507__$1 = (function (){var statearr_46531 = state_46507;
(statearr_46531[(7)] = inst_46473__$1);

return statearr_46531;
})();
if(inst_46473__$1){
var statearr_46532_47566 = state_46507__$1;
(statearr_46532_47566[(1)] = (14));

} else {
var statearr_46533_47567 = state_46507__$1;
(statearr_46533_47567[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46508 === (9))){
var inst_46495 = (state_46507[(2)]);
var inst_46496 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46507__$1 = (function (){var statearr_46534 = state_46507;
(statearr_46534[(15)] = inst_46495);

return statearr_46534;
})();
if(cljs.core.truth_(inst_46496)){
var statearr_46535_47570 = state_46507__$1;
(statearr_46535_47570[(1)] = (21));

} else {
var statearr_46536_47572 = state_46507__$1;
(statearr_46536_47572[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46508 === (5))){
var inst_46451 = cljs.core.async.close_BANG_(out);
var state_46507__$1 = state_46507;
var statearr_46537_47573 = state_46507__$1;
(statearr_46537_47573[(2)] = inst_46451);

(statearr_46537_47573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46508 === (14))){
var inst_46473 = (state_46507[(7)]);
var inst_46475 = cljs.core.chunked_seq_QMARK_(inst_46473);
var state_46507__$1 = state_46507;
if(inst_46475){
var statearr_46538_47575 = state_46507__$1;
(statearr_46538_47575[(1)] = (17));

} else {
var statearr_46539_47576 = state_46507__$1;
(statearr_46539_47576[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46508 === (16))){
var inst_46491 = (state_46507[(2)]);
var state_46507__$1 = state_46507;
var statearr_46540_47580 = state_46507__$1;
(statearr_46540_47580[(2)] = inst_46491);

(statearr_46540_47580[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46508 === (10))){
var inst_46462 = (state_46507[(9)]);
var inst_46460 = (state_46507[(11)]);
var inst_46467 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46460,inst_46462);
var state_46507__$1 = state_46507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46507__$1,(13),out,inst_46467);
} else {
if((state_val_46508 === (18))){
var inst_46473 = (state_46507[(7)]);
var inst_46482 = cljs.core.first(inst_46473);
var state_46507__$1 = state_46507;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46507__$1,(20),out,inst_46482);
} else {
if((state_val_46508 === (8))){
var inst_46461 = (state_46507[(8)]);
var inst_46462 = (state_46507[(9)]);
var inst_46464 = (inst_46462 < inst_46461);
var inst_46465 = inst_46464;
var state_46507__$1 = state_46507;
if(cljs.core.truth_(inst_46465)){
var statearr_46541_47591 = state_46507__$1;
(statearr_46541_47591[(1)] = (10));

} else {
var statearr_46542_47592 = state_46507__$1;
(statearr_46542_47592[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__45171__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45171__auto____0 = (function (){
var statearr_46543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46543[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45171__auto__);

(statearr_46543[(1)] = (1));

return statearr_46543;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45171__auto____1 = (function (state_46507){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_46507);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e46544){if((e46544 instanceof Object)){
var ex__45174__auto__ = e46544;
var statearr_46545_47596 = state_46507;
(statearr_46545_47596[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46544;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47598 = state_46507;
state_46507 = G__47598;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45171__auto__ = function(state_46507){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45171__auto____1.call(this,state_46507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45171__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45171__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_46546 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_46546[(6)] = c__45238__auto__);

return statearr_46546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
}));

return c__45238__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46548 = arguments.length;
switch (G__46548) {
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
var G__46550 = arguments.length;
switch (G__46550) {
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
var G__46552 = arguments.length;
switch (G__46552) {
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
var c__45238__auto___47619 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_46576){
var state_val_46577 = (state_46576[(1)]);
if((state_val_46577 === (7))){
var inst_46571 = (state_46576[(2)]);
var state_46576__$1 = state_46576;
var statearr_46578_47623 = state_46576__$1;
(statearr_46578_47623[(2)] = inst_46571);

(statearr_46578_47623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46577 === (1))){
var inst_46553 = null;
var state_46576__$1 = (function (){var statearr_46579 = state_46576;
(statearr_46579[(7)] = inst_46553);

return statearr_46579;
})();
var statearr_46580_47624 = state_46576__$1;
(statearr_46580_47624[(2)] = null);

(statearr_46580_47624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46577 === (4))){
var inst_46556 = (state_46576[(8)]);
var inst_46556__$1 = (state_46576[(2)]);
var inst_46557 = (inst_46556__$1 == null);
var inst_46558 = cljs.core.not(inst_46557);
var state_46576__$1 = (function (){var statearr_46581 = state_46576;
(statearr_46581[(8)] = inst_46556__$1);

return statearr_46581;
})();
if(inst_46558){
var statearr_46582_47626 = state_46576__$1;
(statearr_46582_47626[(1)] = (5));

} else {
var statearr_46583_47627 = state_46576__$1;
(statearr_46583_47627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46577 === (6))){
var state_46576__$1 = state_46576;
var statearr_46584_47630 = state_46576__$1;
(statearr_46584_47630[(2)] = null);

(statearr_46584_47630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46577 === (3))){
var inst_46573 = (state_46576[(2)]);
var inst_46574 = cljs.core.async.close_BANG_(out);
var state_46576__$1 = (function (){var statearr_46585 = state_46576;
(statearr_46585[(9)] = inst_46573);

return statearr_46585;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46576__$1,inst_46574);
} else {
if((state_val_46577 === (2))){
var state_46576__$1 = state_46576;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46576__$1,(4),ch);
} else {
if((state_val_46577 === (11))){
var inst_46556 = (state_46576[(8)]);
var inst_46565 = (state_46576[(2)]);
var inst_46553 = inst_46556;
var state_46576__$1 = (function (){var statearr_46586 = state_46576;
(statearr_46586[(7)] = inst_46553);

(statearr_46586[(10)] = inst_46565);

return statearr_46586;
})();
var statearr_46587_47638 = state_46576__$1;
(statearr_46587_47638[(2)] = null);

(statearr_46587_47638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46577 === (9))){
var inst_46556 = (state_46576[(8)]);
var state_46576__$1 = state_46576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46576__$1,(11),out,inst_46556);
} else {
if((state_val_46577 === (5))){
var inst_46553 = (state_46576[(7)]);
var inst_46556 = (state_46576[(8)]);
var inst_46560 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46556,inst_46553);
var state_46576__$1 = state_46576;
if(inst_46560){
var statearr_46589_47640 = state_46576__$1;
(statearr_46589_47640[(1)] = (8));

} else {
var statearr_46590_47641 = state_46576__$1;
(statearr_46590_47641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46577 === (10))){
var inst_46568 = (state_46576[(2)]);
var state_46576__$1 = state_46576;
var statearr_46591_47645 = state_46576__$1;
(statearr_46591_47645[(2)] = inst_46568);

(statearr_46591_47645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46577 === (8))){
var inst_46553 = (state_46576[(7)]);
var tmp46588 = inst_46553;
var inst_46553__$1 = tmp46588;
var state_46576__$1 = (function (){var statearr_46592 = state_46576;
(statearr_46592[(7)] = inst_46553__$1);

return statearr_46592;
})();
var statearr_46593_47653 = state_46576__$1;
(statearr_46593_47653[(2)] = null);

(statearr_46593_47653[(1)] = (2));


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
var cljs$core$async$state_machine__45171__auto__ = null;
var cljs$core$async$state_machine__45171__auto____0 = (function (){
var statearr_46594 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46594[(0)] = cljs$core$async$state_machine__45171__auto__);

(statearr_46594[(1)] = (1));

return statearr_46594;
});
var cljs$core$async$state_machine__45171__auto____1 = (function (state_46576){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_46576);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e46595){if((e46595 instanceof Object)){
var ex__45174__auto__ = e46595;
var statearr_46596_47657 = state_46576;
(statearr_46596_47657[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46595;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47659 = state_46576;
state_46576 = G__47659;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$state_machine__45171__auto__ = function(state_46576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45171__auto____1.call(this,state_46576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45171__auto____0;
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45171__auto____1;
return cljs$core$async$state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_46597 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_46597[(6)] = c__45238__auto___47619);

return statearr_46597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46599 = arguments.length;
switch (G__46599) {
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
var c__45238__auto___47668 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_46637){
var state_val_46638 = (state_46637[(1)]);
if((state_val_46638 === (7))){
var inst_46633 = (state_46637[(2)]);
var state_46637__$1 = state_46637;
var statearr_46639_47672 = state_46637__$1;
(statearr_46639_47672[(2)] = inst_46633);

(statearr_46639_47672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (1))){
var inst_46600 = (new Array(n));
var inst_46601 = inst_46600;
var inst_46602 = (0);
var state_46637__$1 = (function (){var statearr_46640 = state_46637;
(statearr_46640[(7)] = inst_46601);

(statearr_46640[(8)] = inst_46602);

return statearr_46640;
})();
var statearr_46641_47674 = state_46637__$1;
(statearr_46641_47674[(2)] = null);

(statearr_46641_47674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (4))){
var inst_46605 = (state_46637[(9)]);
var inst_46605__$1 = (state_46637[(2)]);
var inst_46606 = (inst_46605__$1 == null);
var inst_46607 = cljs.core.not(inst_46606);
var state_46637__$1 = (function (){var statearr_46642 = state_46637;
(statearr_46642[(9)] = inst_46605__$1);

return statearr_46642;
})();
if(inst_46607){
var statearr_46643_47675 = state_46637__$1;
(statearr_46643_47675[(1)] = (5));

} else {
var statearr_46644_47677 = state_46637__$1;
(statearr_46644_47677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (15))){
var inst_46627 = (state_46637[(2)]);
var state_46637__$1 = state_46637;
var statearr_46645_47678 = state_46637__$1;
(statearr_46645_47678[(2)] = inst_46627);

(statearr_46645_47678[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (13))){
var state_46637__$1 = state_46637;
var statearr_46646_47680 = state_46637__$1;
(statearr_46646_47680[(2)] = null);

(statearr_46646_47680[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (6))){
var inst_46602 = (state_46637[(8)]);
var inst_46623 = (inst_46602 > (0));
var state_46637__$1 = state_46637;
if(cljs.core.truth_(inst_46623)){
var statearr_46647_47683 = state_46637__$1;
(statearr_46647_47683[(1)] = (12));

} else {
var statearr_46648_47684 = state_46637__$1;
(statearr_46648_47684[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (3))){
var inst_46635 = (state_46637[(2)]);
var state_46637__$1 = state_46637;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46637__$1,inst_46635);
} else {
if((state_val_46638 === (12))){
var inst_46601 = (state_46637[(7)]);
var inst_46625 = cljs.core.vec(inst_46601);
var state_46637__$1 = state_46637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46637__$1,(15),out,inst_46625);
} else {
if((state_val_46638 === (2))){
var state_46637__$1 = state_46637;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46637__$1,(4),ch);
} else {
if((state_val_46638 === (11))){
var inst_46617 = (state_46637[(2)]);
var inst_46618 = (new Array(n));
var inst_46601 = inst_46618;
var inst_46602 = (0);
var state_46637__$1 = (function (){var statearr_46649 = state_46637;
(statearr_46649[(7)] = inst_46601);

(statearr_46649[(10)] = inst_46617);

(statearr_46649[(8)] = inst_46602);

return statearr_46649;
})();
var statearr_46650_47689 = state_46637__$1;
(statearr_46650_47689[(2)] = null);

(statearr_46650_47689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (9))){
var inst_46601 = (state_46637[(7)]);
var inst_46615 = cljs.core.vec(inst_46601);
var state_46637__$1 = state_46637;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46637__$1,(11),out,inst_46615);
} else {
if((state_val_46638 === (5))){
var inst_46605 = (state_46637[(9)]);
var inst_46601 = (state_46637[(7)]);
var inst_46610 = (state_46637[(11)]);
var inst_46602 = (state_46637[(8)]);
var inst_46609 = (inst_46601[inst_46602] = inst_46605);
var inst_46610__$1 = (inst_46602 + (1));
var inst_46611 = (inst_46610__$1 < n);
var state_46637__$1 = (function (){var statearr_46651 = state_46637;
(statearr_46651[(12)] = inst_46609);

(statearr_46651[(11)] = inst_46610__$1);

return statearr_46651;
})();
if(cljs.core.truth_(inst_46611)){
var statearr_46652_47691 = state_46637__$1;
(statearr_46652_47691[(1)] = (8));

} else {
var statearr_46653_47692 = state_46637__$1;
(statearr_46653_47692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (14))){
var inst_46630 = (state_46637[(2)]);
var inst_46631 = cljs.core.async.close_BANG_(out);
var state_46637__$1 = (function (){var statearr_46655 = state_46637;
(statearr_46655[(13)] = inst_46630);

return statearr_46655;
})();
var statearr_46656_47695 = state_46637__$1;
(statearr_46656_47695[(2)] = inst_46631);

(statearr_46656_47695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (10))){
var inst_46621 = (state_46637[(2)]);
var state_46637__$1 = state_46637;
var statearr_46657_47697 = state_46637__$1;
(statearr_46657_47697[(2)] = inst_46621);

(statearr_46657_47697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46638 === (8))){
var inst_46601 = (state_46637[(7)]);
var inst_46610 = (state_46637[(11)]);
var tmp46654 = inst_46601;
var inst_46601__$1 = tmp46654;
var inst_46602 = inst_46610;
var state_46637__$1 = (function (){var statearr_46658 = state_46637;
(statearr_46658[(7)] = inst_46601__$1);

(statearr_46658[(8)] = inst_46602);

return statearr_46658;
})();
var statearr_46659_47699 = state_46637__$1;
(statearr_46659_47699[(2)] = null);

(statearr_46659_47699[(1)] = (2));


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
var cljs$core$async$state_machine__45171__auto__ = null;
var cljs$core$async$state_machine__45171__auto____0 = (function (){
var statearr_46660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46660[(0)] = cljs$core$async$state_machine__45171__auto__);

(statearr_46660[(1)] = (1));

return statearr_46660;
});
var cljs$core$async$state_machine__45171__auto____1 = (function (state_46637){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_46637);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e46661){if((e46661 instanceof Object)){
var ex__45174__auto__ = e46661;
var statearr_46662_47703 = state_46637;
(statearr_46662_47703[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46661;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47707 = state_46637;
state_46637 = G__47707;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$state_machine__45171__auto__ = function(state_46637){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45171__auto____1.call(this,state_46637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45171__auto____0;
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45171__auto____1;
return cljs$core$async$state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_46663 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_46663[(6)] = c__45238__auto___47668);

return statearr_46663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46665 = arguments.length;
switch (G__46665) {
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
var c__45238__auto___47714 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45239__auto__ = (function (){var switch__45170__auto__ = (function (state_46707){
var state_val_46708 = (state_46707[(1)]);
if((state_val_46708 === (7))){
var inst_46703 = (state_46707[(2)]);
var state_46707__$1 = state_46707;
var statearr_46709_47716 = state_46707__$1;
(statearr_46709_47716[(2)] = inst_46703);

(statearr_46709_47716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46708 === (1))){
var inst_46666 = [];
var inst_46667 = inst_46666;
var inst_46668 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46707__$1 = (function (){var statearr_46710 = state_46707;
(statearr_46710[(7)] = inst_46667);

(statearr_46710[(8)] = inst_46668);

return statearr_46710;
})();
var statearr_46711_47718 = state_46707__$1;
(statearr_46711_47718[(2)] = null);

(statearr_46711_47718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46708 === (4))){
var inst_46671 = (state_46707[(9)]);
var inst_46671__$1 = (state_46707[(2)]);
var inst_46672 = (inst_46671__$1 == null);
var inst_46673 = cljs.core.not(inst_46672);
var state_46707__$1 = (function (){var statearr_46712 = state_46707;
(statearr_46712[(9)] = inst_46671__$1);

return statearr_46712;
})();
if(inst_46673){
var statearr_46713_47722 = state_46707__$1;
(statearr_46713_47722[(1)] = (5));

} else {
var statearr_46714_47724 = state_46707__$1;
(statearr_46714_47724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46708 === (15))){
var inst_46697 = (state_46707[(2)]);
var state_46707__$1 = state_46707;
var statearr_46715_47725 = state_46707__$1;
(statearr_46715_47725[(2)] = inst_46697);

(statearr_46715_47725[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46708 === (13))){
var state_46707__$1 = state_46707;
var statearr_46716_47727 = state_46707__$1;
(statearr_46716_47727[(2)] = null);

(statearr_46716_47727[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46708 === (6))){
var inst_46667 = (state_46707[(7)]);
var inst_46692 = inst_46667.length;
var inst_46693 = (inst_46692 > (0));
var state_46707__$1 = state_46707;
if(cljs.core.truth_(inst_46693)){
var statearr_46717_47728 = state_46707__$1;
(statearr_46717_47728[(1)] = (12));

} else {
var statearr_46718_47730 = state_46707__$1;
(statearr_46718_47730[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46708 === (3))){
var inst_46705 = (state_46707[(2)]);
var state_46707__$1 = state_46707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46707__$1,inst_46705);
} else {
if((state_val_46708 === (12))){
var inst_46667 = (state_46707[(7)]);
var inst_46695 = cljs.core.vec(inst_46667);
var state_46707__$1 = state_46707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46707__$1,(15),out,inst_46695);
} else {
if((state_val_46708 === (2))){
var state_46707__$1 = state_46707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46707__$1,(4),ch);
} else {
if((state_val_46708 === (11))){
var inst_46675 = (state_46707[(10)]);
var inst_46671 = (state_46707[(9)]);
var inst_46685 = (state_46707[(2)]);
var inst_46686 = [];
var inst_46687 = inst_46686.push(inst_46671);
var inst_46667 = inst_46686;
var inst_46668 = inst_46675;
var state_46707__$1 = (function (){var statearr_46719 = state_46707;
(statearr_46719[(11)] = inst_46687);

(statearr_46719[(12)] = inst_46685);

(statearr_46719[(7)] = inst_46667);

(statearr_46719[(8)] = inst_46668);

return statearr_46719;
})();
var statearr_46720_47735 = state_46707__$1;
(statearr_46720_47735[(2)] = null);

(statearr_46720_47735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46708 === (9))){
var inst_46667 = (state_46707[(7)]);
var inst_46683 = cljs.core.vec(inst_46667);
var state_46707__$1 = state_46707;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46707__$1,(11),out,inst_46683);
} else {
if((state_val_46708 === (5))){
var inst_46668 = (state_46707[(8)]);
var inst_46675 = (state_46707[(10)]);
var inst_46671 = (state_46707[(9)]);
var inst_46675__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46671) : f.call(null,inst_46671));
var inst_46676 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46675__$1,inst_46668);
var inst_46677 = cljs.core.keyword_identical_QMARK_(inst_46668,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46678 = ((inst_46676) || (inst_46677));
var state_46707__$1 = (function (){var statearr_46721 = state_46707;
(statearr_46721[(10)] = inst_46675__$1);

return statearr_46721;
})();
if(cljs.core.truth_(inst_46678)){
var statearr_46722_47752 = state_46707__$1;
(statearr_46722_47752[(1)] = (8));

} else {
var statearr_46723_47753 = state_46707__$1;
(statearr_46723_47753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46708 === (14))){
var inst_46700 = (state_46707[(2)]);
var inst_46701 = cljs.core.async.close_BANG_(out);
var state_46707__$1 = (function (){var statearr_46725 = state_46707;
(statearr_46725[(13)] = inst_46700);

return statearr_46725;
})();
var statearr_46726_47763 = state_46707__$1;
(statearr_46726_47763[(2)] = inst_46701);

(statearr_46726_47763[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46708 === (10))){
var inst_46690 = (state_46707[(2)]);
var state_46707__$1 = state_46707;
var statearr_46727_47766 = state_46707__$1;
(statearr_46727_47766[(2)] = inst_46690);

(statearr_46727_47766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46708 === (8))){
var inst_46667 = (state_46707[(7)]);
var inst_46675 = (state_46707[(10)]);
var inst_46671 = (state_46707[(9)]);
var inst_46680 = inst_46667.push(inst_46671);
var tmp46724 = inst_46667;
var inst_46667__$1 = tmp46724;
var inst_46668 = inst_46675;
var state_46707__$1 = (function (){var statearr_46728 = state_46707;
(statearr_46728[(7)] = inst_46667__$1);

(statearr_46728[(8)] = inst_46668);

(statearr_46728[(14)] = inst_46680);

return statearr_46728;
})();
var statearr_46729_47768 = state_46707__$1;
(statearr_46729_47768[(2)] = null);

(statearr_46729_47768[(1)] = (2));


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
var cljs$core$async$state_machine__45171__auto__ = null;
var cljs$core$async$state_machine__45171__auto____0 = (function (){
var statearr_46730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46730[(0)] = cljs$core$async$state_machine__45171__auto__);

(statearr_46730[(1)] = (1));

return statearr_46730;
});
var cljs$core$async$state_machine__45171__auto____1 = (function (state_46707){
while(true){
var ret_value__45172__auto__ = (function (){try{while(true){
var result__45173__auto__ = switch__45170__auto__(state_46707);
if(cljs.core.keyword_identical_QMARK_(result__45173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45173__auto__;
}
break;
}
}catch (e46731){if((e46731 instanceof Object)){
var ex__45174__auto__ = e46731;
var statearr_46732_47772 = state_46707;
(statearr_46732_47772[(5)] = ex__45174__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46707);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46731;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47773 = state_46707;
state_46707 = G__47773;
continue;
} else {
return ret_value__45172__auto__;
}
break;
}
});
cljs$core$async$state_machine__45171__auto__ = function(state_46707){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45171__auto____1.call(this,state_46707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45171__auto____0;
cljs$core$async$state_machine__45171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45171__auto____1;
return cljs$core$async$state_machine__45171__auto__;
})()
})();
var state__45240__auto__ = (function (){var statearr_46733 = (f__45239__auto__.cljs$core$IFn$_invoke$arity$0 ? f__45239__auto__.cljs$core$IFn$_invoke$arity$0() : f__45239__auto__.call(null));
(statearr_46733[(6)] = c__45238__auto___47714);

return statearr_46733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45240__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
