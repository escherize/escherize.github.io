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
var G__33911 = arguments.length;
switch (G__33911) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33912 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33912 = (function (f,blockable,meta33913){
this.f = f;
this.blockable = blockable;
this.meta33913 = meta33913;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33912.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33914,meta33913__$1){
var self__ = this;
var _33914__$1 = this;
return (new cljs.core.async.t_cljs$core$async33912(self__.f,self__.blockable,meta33913__$1));
});

cljs.core.async.t_cljs$core$async33912.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33914){
var self__ = this;
var _33914__$1 = this;
return self__.meta33913;
});

cljs.core.async.t_cljs$core$async33912.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33912.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33912.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33912.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33912.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33913","meta33913",-1334928395,null)], null);
});

cljs.core.async.t_cljs$core$async33912.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33912.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33912";

cljs.core.async.t_cljs$core$async33912.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33912");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33912.
 */
cljs.core.async.__GT_t_cljs$core$async33912 = (function cljs$core$async$__GT_t_cljs$core$async33912(f__$1,blockable__$1,meta33913){
return (new cljs.core.async.t_cljs$core$async33912(f__$1,blockable__$1,meta33913));
});

}

return (new cljs.core.async.t_cljs$core$async33912(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
var G__33917 = arguments.length;
switch (G__33917) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33919 = arguments.length;
switch (G__33919) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__33921 = arguments.length;
switch (G__33921) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35351 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35351) : fn1.call(null,val_35351));
} else {
cljs.core.async.impl.dispatch.run(((function (val_35351,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35351) : fn1.call(null,val_35351));
});})(val_35351,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

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
var G__33923 = arguments.length;
switch (G__33923) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___35353 = n;
var x_35354 = (0);
while(true){
if((x_35354 < n__4607__auto___35353)){
(a[x_35354] = x_35354);

var G__35355 = (x_35354 + (1));
x_35354 = G__35355;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33924 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33924 = (function (flag,meta33925){
this.flag = flag;
this.meta33925 = meta33925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33926,meta33925__$1){
var self__ = this;
var _33926__$1 = this;
return (new cljs.core.async.t_cljs$core$async33924(self__.flag,meta33925__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33926){
var self__ = this;
var _33926__$1 = this;
return self__.meta33925;
});})(flag))
;

cljs.core.async.t_cljs$core$async33924.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33924.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33924.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33924.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33924.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33925","meta33925",2011001015,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33924";

cljs.core.async.t_cljs$core$async33924.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33924");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33924.
 */
cljs.core.async.__GT_t_cljs$core$async33924 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33924(flag__$1,meta33925){
return (new cljs.core.async.t_cljs$core$async33924(flag__$1,meta33925));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33924(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33927 = (function (flag,cb,meta33928){
this.flag = flag;
this.cb = cb;
this.meta33928 = meta33928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33929,meta33928__$1){
var self__ = this;
var _33929__$1 = this;
return (new cljs.core.async.t_cljs$core$async33927(self__.flag,self__.cb,meta33928__$1));
});

cljs.core.async.t_cljs$core$async33927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33929){
var self__ = this;
var _33929__$1 = this;
return self__.meta33928;
});

cljs.core.async.t_cljs$core$async33927.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33927.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async33927.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33927.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33928","meta33928",-108449810,null)], null);
});

cljs.core.async.t_cljs$core$async33927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33927";

cljs.core.async.t_cljs$core$async33927.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33927");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33927.
 */
cljs.core.async.__GT_t_cljs$core$async33927 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33927(flag__$1,cb__$1,meta33928){
return (new cljs.core.async.t_cljs$core$async33927(flag__$1,cb__$1,meta33928));
});

}

return (new cljs.core.async.t_cljs$core$async33927(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33930_SHARP_){
var G__33932 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33930_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33932) : fret.call(null,G__33932));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33931_SHARP_){
var G__33933 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33931_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33933) : fret.call(null,G__33933));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35371 = (i + (1));
i = G__35371;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___35376 = arguments.length;
var i__4731__auto___35377 = (0);
while(true){
if((i__4731__auto___35377 < len__4730__auto___35376)){
args__4736__auto__.push((arguments[i__4731__auto___35377]));

var G__35378 = (i__4731__auto___35377 + (1));
i__4731__auto___35377 = G__35378;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33936){
var map__33937 = p__33936;
var map__33937__$1 = (((((!((map__33937 == null))))?(((((map__33937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33937.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33937):map__33937);
var opts = map__33937__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33934){
var G__33935 = cljs.core.first(seq33934);
var seq33934__$1 = cljs.core.next(seq33934);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33935,seq33934__$1);
});

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
var G__33940 = arguments.length;
switch (G__33940) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33853__auto___35393 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto___35393){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto___35393){
return (function (state_33964){
var state_val_33965 = (state_33964[(1)]);
if((state_val_33965 === (7))){
var inst_33960 = (state_33964[(2)]);
var state_33964__$1 = state_33964;
var statearr_33966_35395 = state_33964__$1;
(statearr_33966_35395[(2)] = inst_33960);

(statearr_33966_35395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (1))){
var state_33964__$1 = state_33964;
var statearr_33967_35396 = state_33964__$1;
(statearr_33967_35396[(2)] = null);

(statearr_33967_35396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (4))){
var inst_33943 = (state_33964[(7)]);
var inst_33943__$1 = (state_33964[(2)]);
var inst_33944 = (inst_33943__$1 == null);
var state_33964__$1 = (function (){var statearr_33968 = state_33964;
(statearr_33968[(7)] = inst_33943__$1);

return statearr_33968;
})();
if(cljs.core.truth_(inst_33944)){
var statearr_33969_35398 = state_33964__$1;
(statearr_33969_35398[(1)] = (5));

} else {
var statearr_33970_35400 = state_33964__$1;
(statearr_33970_35400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (13))){
var state_33964__$1 = state_33964;
var statearr_33971_35401 = state_33964__$1;
(statearr_33971_35401[(2)] = null);

(statearr_33971_35401[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (6))){
var inst_33943 = (state_33964[(7)]);
var state_33964__$1 = state_33964;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33964__$1,(11),to,inst_33943);
} else {
if((state_val_33965 === (3))){
var inst_33962 = (state_33964[(2)]);
var state_33964__$1 = state_33964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33964__$1,inst_33962);
} else {
if((state_val_33965 === (12))){
var state_33964__$1 = state_33964;
var statearr_33972_35405 = state_33964__$1;
(statearr_33972_35405[(2)] = null);

(statearr_33972_35405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (2))){
var state_33964__$1 = state_33964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33964__$1,(4),from);
} else {
if((state_val_33965 === (11))){
var inst_33953 = (state_33964[(2)]);
var state_33964__$1 = state_33964;
if(cljs.core.truth_(inst_33953)){
var statearr_33973_35407 = state_33964__$1;
(statearr_33973_35407[(1)] = (12));

} else {
var statearr_33974_35408 = state_33964__$1;
(statearr_33974_35408[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (9))){
var state_33964__$1 = state_33964;
var statearr_33975_35412 = state_33964__$1;
(statearr_33975_35412[(2)] = null);

(statearr_33975_35412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (5))){
var state_33964__$1 = state_33964;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33976_35413 = state_33964__$1;
(statearr_33976_35413[(1)] = (8));

} else {
var statearr_33977_35415 = state_33964__$1;
(statearr_33977_35415[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (14))){
var inst_33958 = (state_33964[(2)]);
var state_33964__$1 = state_33964;
var statearr_33978_35416 = state_33964__$1;
(statearr_33978_35416[(2)] = inst_33958);

(statearr_33978_35416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (10))){
var inst_33950 = (state_33964[(2)]);
var state_33964__$1 = state_33964;
var statearr_33979_35417 = state_33964__$1;
(statearr_33979_35417[(2)] = inst_33950);

(statearr_33979_35417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33965 === (8))){
var inst_33947 = cljs.core.async.close_BANG_(to);
var state_33964__$1 = state_33964;
var statearr_33980_35419 = state_33964__$1;
(statearr_33980_35419[(2)] = inst_33947);

(statearr_33980_35419[(1)] = (10));


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
});})(c__33853__auto___35393))
;
return ((function (switch__33674__auto__,c__33853__auto___35393){
return (function() {
var cljs$core$async$state_machine__33675__auto__ = null;
var cljs$core$async$state_machine__33675__auto____0 = (function (){
var statearr_33981 = [null,null,null,null,null,null,null,null];
(statearr_33981[(0)] = cljs$core$async$state_machine__33675__auto__);

(statearr_33981[(1)] = (1));

return statearr_33981;
});
var cljs$core$async$state_machine__33675__auto____1 = (function (state_33964){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_33964);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e33982){if((e33982 instanceof Object)){
var ex__33678__auto__ = e33982;
var statearr_33983_35426 = state_33964;
(statearr_33983_35426[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33982;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35427 = state_33964;
state_33964 = G__35427;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$state_machine__33675__auto__ = function(state_33964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33675__auto____1.call(this,state_33964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33675__auto____0;
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33675__auto____1;
return cljs$core$async$state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto___35393))
})();
var state__33855__auto__ = (function (){var statearr_33984 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_33984[(6)] = c__33853__auto___35393);

return statearr_33984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto___35393))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__33985){
var vec__33986 = p__33985;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33986,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33986,(1),null);
var job = vec__33986;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33853__auto___35433 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto___35433,res,vec__33986,v,p,job,jobs,results){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto___35433,res,vec__33986,v,p,job,jobs,results){
return (function (state_33993){
var state_val_33994 = (state_33993[(1)]);
if((state_val_33994 === (1))){
var state_33993__$1 = state_33993;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33993__$1,(2),res,v);
} else {
if((state_val_33994 === (2))){
var inst_33990 = (state_33993[(2)]);
var inst_33991 = cljs.core.async.close_BANG_(res);
var state_33993__$1 = (function (){var statearr_33995 = state_33993;
(statearr_33995[(7)] = inst_33990);

return statearr_33995;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33993__$1,inst_33991);
} else {
return null;
}
}
});})(c__33853__auto___35433,res,vec__33986,v,p,job,jobs,results))
;
return ((function (switch__33674__auto__,c__33853__auto___35433,res,vec__33986,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____0 = (function (){
var statearr_33996 = [null,null,null,null,null,null,null,null];
(statearr_33996[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__);

(statearr_33996[(1)] = (1));

return statearr_33996;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____1 = (function (state_33993){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_33993);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e33997){if((e33997 instanceof Object)){
var ex__33678__auto__ = e33997;
var statearr_33998_35439 = state_33993;
(statearr_33998_35439[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33997;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35443 = state_33993;
state_33993 = G__35443;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__ = function(state_33993){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____1.call(this,state_33993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto___35433,res,vec__33986,v,p,job,jobs,results))
})();
var state__33855__auto__ = (function (){var statearr_33999 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_33999[(6)] = c__33853__auto___35433);

return statearr_33999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto___35433,res,vec__33986,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34000){
var vec__34001 = p__34000;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34001,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34001,(1),null);
var job = vec__34001;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___35445 = n;
var __35447 = (0);
while(true){
if((__35447 < n__4607__auto___35445)){
var G__34004_35449 = type;
var G__34004_35450__$1 = (((G__34004_35449 instanceof cljs.core.Keyword))?G__34004_35449.fqn:null);
switch (G__34004_35450__$1) {
case "compute":
var c__33853__auto___35453 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35447,c__33853__auto___35453,G__34004_35449,G__34004_35450__$1,n__4607__auto___35445,jobs,results,process,async){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (__35447,c__33853__auto___35453,G__34004_35449,G__34004_35450__$1,n__4607__auto___35445,jobs,results,process,async){
return (function (state_34017){
var state_val_34018 = (state_34017[(1)]);
if((state_val_34018 === (1))){
var state_34017__$1 = state_34017;
var statearr_34019_35454 = state_34017__$1;
(statearr_34019_35454[(2)] = null);

(statearr_34019_35454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (2))){
var state_34017__$1 = state_34017;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34017__$1,(4),jobs);
} else {
if((state_val_34018 === (3))){
var inst_34015 = (state_34017[(2)]);
var state_34017__$1 = state_34017;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34017__$1,inst_34015);
} else {
if((state_val_34018 === (4))){
var inst_34007 = (state_34017[(2)]);
var inst_34008 = process(inst_34007);
var state_34017__$1 = state_34017;
if(cljs.core.truth_(inst_34008)){
var statearr_34020_35464 = state_34017__$1;
(statearr_34020_35464[(1)] = (5));

} else {
var statearr_34021_35465 = state_34017__$1;
(statearr_34021_35465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (5))){
var state_34017__$1 = state_34017;
var statearr_34022_35467 = state_34017__$1;
(statearr_34022_35467[(2)] = null);

(statearr_34022_35467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (6))){
var state_34017__$1 = state_34017;
var statearr_34023_35469 = state_34017__$1;
(statearr_34023_35469[(2)] = null);

(statearr_34023_35469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (7))){
var inst_34013 = (state_34017[(2)]);
var state_34017__$1 = state_34017;
var statearr_34024_35471 = state_34017__$1;
(statearr_34024_35471[(2)] = inst_34013);

(statearr_34024_35471[(1)] = (3));


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
});})(__35447,c__33853__auto___35453,G__34004_35449,G__34004_35450__$1,n__4607__auto___35445,jobs,results,process,async))
;
return ((function (__35447,switch__33674__auto__,c__33853__auto___35453,G__34004_35449,G__34004_35450__$1,n__4607__auto___35445,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____0 = (function (){
var statearr_34025 = [null,null,null,null,null,null,null];
(statearr_34025[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__);

(statearr_34025[(1)] = (1));

return statearr_34025;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____1 = (function (state_34017){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_34017);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e34026){if((e34026 instanceof Object)){
var ex__33678__auto__ = e34026;
var statearr_34027_35474 = state_34017;
(statearr_34027_35474[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34026;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35477 = state_34017;
state_34017 = G__35477;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__ = function(state_34017){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____1.call(this,state_34017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__;
})()
;})(__35447,switch__33674__auto__,c__33853__auto___35453,G__34004_35449,G__34004_35450__$1,n__4607__auto___35445,jobs,results,process,async))
})();
var state__33855__auto__ = (function (){var statearr_34028 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_34028[(6)] = c__33853__auto___35453);

return statearr_34028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(__35447,c__33853__auto___35453,G__34004_35449,G__34004_35450__$1,n__4607__auto___35445,jobs,results,process,async))
);


break;
case "async":
var c__33853__auto___35480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35447,c__33853__auto___35480,G__34004_35449,G__34004_35450__$1,n__4607__auto___35445,jobs,results,process,async){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (__35447,c__33853__auto___35480,G__34004_35449,G__34004_35450__$1,n__4607__auto___35445,jobs,results,process,async){
return (function (state_34041){
var state_val_34042 = (state_34041[(1)]);
if((state_val_34042 === (1))){
var state_34041__$1 = state_34041;
var statearr_34043_35481 = state_34041__$1;
(statearr_34043_35481[(2)] = null);

(statearr_34043_35481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (2))){
var state_34041__$1 = state_34041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34041__$1,(4),jobs);
} else {
if((state_val_34042 === (3))){
var inst_34039 = (state_34041[(2)]);
var state_34041__$1 = state_34041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34041__$1,inst_34039);
} else {
if((state_val_34042 === (4))){
var inst_34031 = (state_34041[(2)]);
var inst_34032 = async(inst_34031);
var state_34041__$1 = state_34041;
if(cljs.core.truth_(inst_34032)){
var statearr_34044_35482 = state_34041__$1;
(statearr_34044_35482[(1)] = (5));

} else {
var statearr_34045_35483 = state_34041__$1;
(statearr_34045_35483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (5))){
var state_34041__$1 = state_34041;
var statearr_34046_35484 = state_34041__$1;
(statearr_34046_35484[(2)] = null);

(statearr_34046_35484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (6))){
var state_34041__$1 = state_34041;
var statearr_34047_35485 = state_34041__$1;
(statearr_34047_35485[(2)] = null);

(statearr_34047_35485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (7))){
var inst_34037 = (state_34041[(2)]);
var state_34041__$1 = state_34041;
var statearr_34048_35486 = state_34041__$1;
(statearr_34048_35486[(2)] = inst_34037);

(statearr_34048_35486[(1)] = (3));


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
});})(__35447,c__33853__auto___35480,G__34004_35449,G__34004_35450__$1,n__4607__auto___35445,jobs,results,process,async))
;
return ((function (__35447,switch__33674__auto__,c__33853__auto___35480,G__34004_35449,G__34004_35450__$1,n__4607__auto___35445,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____0 = (function (){
var statearr_34049 = [null,null,null,null,null,null,null];
(statearr_34049[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__);

(statearr_34049[(1)] = (1));

return statearr_34049;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____1 = (function (state_34041){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_34041);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e34050){if((e34050 instanceof Object)){
var ex__33678__auto__ = e34050;
var statearr_34051_35487 = state_34041;
(statearr_34051_35487[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34050;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35488 = state_34041;
state_34041 = G__35488;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__ = function(state_34041){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____1.call(this,state_34041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__;
})()
;})(__35447,switch__33674__auto__,c__33853__auto___35480,G__34004_35449,G__34004_35450__$1,n__4607__auto___35445,jobs,results,process,async))
})();
var state__33855__auto__ = (function (){var statearr_34052 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_34052[(6)] = c__33853__auto___35480);

return statearr_34052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(__35447,c__33853__auto___35480,G__34004_35449,G__34004_35450__$1,n__4607__auto___35445,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34004_35450__$1)].join('')));

}

var G__35489 = (__35447 + (1));
__35447 = G__35489;
continue;
} else {
}
break;
}

var c__33853__auto___35490 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto___35490,jobs,results,process,async){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto___35490,jobs,results,process,async){
return (function (state_34074){
var state_val_34075 = (state_34074[(1)]);
if((state_val_34075 === (7))){
var inst_34070 = (state_34074[(2)]);
var state_34074__$1 = state_34074;
var statearr_34076_35492 = state_34074__$1;
(statearr_34076_35492[(2)] = inst_34070);

(statearr_34076_35492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (1))){
var state_34074__$1 = state_34074;
var statearr_34077_35496 = state_34074__$1;
(statearr_34077_35496[(2)] = null);

(statearr_34077_35496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (4))){
var inst_34055 = (state_34074[(7)]);
var inst_34055__$1 = (state_34074[(2)]);
var inst_34056 = (inst_34055__$1 == null);
var state_34074__$1 = (function (){var statearr_34078 = state_34074;
(statearr_34078[(7)] = inst_34055__$1);

return statearr_34078;
})();
if(cljs.core.truth_(inst_34056)){
var statearr_34079_35497 = state_34074__$1;
(statearr_34079_35497[(1)] = (5));

} else {
var statearr_34080_35498 = state_34074__$1;
(statearr_34080_35498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (6))){
var inst_34055 = (state_34074[(7)]);
var inst_34060 = (state_34074[(8)]);
var inst_34060__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_34061 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34062 = [inst_34055,inst_34060__$1];
var inst_34063 = (new cljs.core.PersistentVector(null,2,(5),inst_34061,inst_34062,null));
var state_34074__$1 = (function (){var statearr_34081 = state_34074;
(statearr_34081[(8)] = inst_34060__$1);

return statearr_34081;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34074__$1,(8),jobs,inst_34063);
} else {
if((state_val_34075 === (3))){
var inst_34072 = (state_34074[(2)]);
var state_34074__$1 = state_34074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34074__$1,inst_34072);
} else {
if((state_val_34075 === (2))){
var state_34074__$1 = state_34074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34074__$1,(4),from);
} else {
if((state_val_34075 === (9))){
var inst_34067 = (state_34074[(2)]);
var state_34074__$1 = (function (){var statearr_34082 = state_34074;
(statearr_34082[(9)] = inst_34067);

return statearr_34082;
})();
var statearr_34083_35502 = state_34074__$1;
(statearr_34083_35502[(2)] = null);

(statearr_34083_35502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (5))){
var inst_34058 = cljs.core.async.close_BANG_(jobs);
var state_34074__$1 = state_34074;
var statearr_34084_35504 = state_34074__$1;
(statearr_34084_35504[(2)] = inst_34058);

(statearr_34084_35504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34075 === (8))){
var inst_34060 = (state_34074[(8)]);
var inst_34065 = (state_34074[(2)]);
var state_34074__$1 = (function (){var statearr_34085 = state_34074;
(statearr_34085[(10)] = inst_34065);

return statearr_34085;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34074__$1,(9),results,inst_34060);
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
});})(c__33853__auto___35490,jobs,results,process,async))
;
return ((function (switch__33674__auto__,c__33853__auto___35490,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____0 = (function (){
var statearr_34086 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34086[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__);

(statearr_34086[(1)] = (1));

return statearr_34086;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____1 = (function (state_34074){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_34074);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e34087){if((e34087 instanceof Object)){
var ex__33678__auto__ = e34087;
var statearr_34088_35506 = state_34074;
(statearr_34088_35506[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34087;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35507 = state_34074;
state_34074 = G__35507;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__ = function(state_34074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____1.call(this,state_34074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto___35490,jobs,results,process,async))
})();
var state__33855__auto__ = (function (){var statearr_34089 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_34089[(6)] = c__33853__auto___35490);

return statearr_34089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto___35490,jobs,results,process,async))
);


var c__33853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto__,jobs,results,process,async){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto__,jobs,results,process,async){
return (function (state_34127){
var state_val_34128 = (state_34127[(1)]);
if((state_val_34128 === (7))){
var inst_34123 = (state_34127[(2)]);
var state_34127__$1 = state_34127;
var statearr_34129_35511 = state_34127__$1;
(statearr_34129_35511[(2)] = inst_34123);

(statearr_34129_35511[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (20))){
var state_34127__$1 = state_34127;
var statearr_34130_35513 = state_34127__$1;
(statearr_34130_35513[(2)] = null);

(statearr_34130_35513[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (1))){
var state_34127__$1 = state_34127;
var statearr_34131_35514 = state_34127__$1;
(statearr_34131_35514[(2)] = null);

(statearr_34131_35514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (4))){
var inst_34092 = (state_34127[(7)]);
var inst_34092__$1 = (state_34127[(2)]);
var inst_34093 = (inst_34092__$1 == null);
var state_34127__$1 = (function (){var statearr_34132 = state_34127;
(statearr_34132[(7)] = inst_34092__$1);

return statearr_34132;
})();
if(cljs.core.truth_(inst_34093)){
var statearr_34133_35515 = state_34127__$1;
(statearr_34133_35515[(1)] = (5));

} else {
var statearr_34134_35516 = state_34127__$1;
(statearr_34134_35516[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (15))){
var inst_34105 = (state_34127[(8)]);
var state_34127__$1 = state_34127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34127__$1,(18),to,inst_34105);
} else {
if((state_val_34128 === (21))){
var inst_34118 = (state_34127[(2)]);
var state_34127__$1 = state_34127;
var statearr_34135_35519 = state_34127__$1;
(statearr_34135_35519[(2)] = inst_34118);

(statearr_34135_35519[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (13))){
var inst_34120 = (state_34127[(2)]);
var state_34127__$1 = (function (){var statearr_34136 = state_34127;
(statearr_34136[(9)] = inst_34120);

return statearr_34136;
})();
var statearr_34137_35521 = state_34127__$1;
(statearr_34137_35521[(2)] = null);

(statearr_34137_35521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (6))){
var inst_34092 = (state_34127[(7)]);
var state_34127__$1 = state_34127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34127__$1,(11),inst_34092);
} else {
if((state_val_34128 === (17))){
var inst_34113 = (state_34127[(2)]);
var state_34127__$1 = state_34127;
if(cljs.core.truth_(inst_34113)){
var statearr_34138_35522 = state_34127__$1;
(statearr_34138_35522[(1)] = (19));

} else {
var statearr_34139_35523 = state_34127__$1;
(statearr_34139_35523[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (3))){
var inst_34125 = (state_34127[(2)]);
var state_34127__$1 = state_34127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34127__$1,inst_34125);
} else {
if((state_val_34128 === (12))){
var inst_34102 = (state_34127[(10)]);
var state_34127__$1 = state_34127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34127__$1,(14),inst_34102);
} else {
if((state_val_34128 === (2))){
var state_34127__$1 = state_34127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34127__$1,(4),results);
} else {
if((state_val_34128 === (19))){
var state_34127__$1 = state_34127;
var statearr_34140_35525 = state_34127__$1;
(statearr_34140_35525[(2)] = null);

(statearr_34140_35525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (11))){
var inst_34102 = (state_34127[(2)]);
var state_34127__$1 = (function (){var statearr_34141 = state_34127;
(statearr_34141[(10)] = inst_34102);

return statearr_34141;
})();
var statearr_34142_35526 = state_34127__$1;
(statearr_34142_35526[(2)] = null);

(statearr_34142_35526[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (9))){
var state_34127__$1 = state_34127;
var statearr_34143_35527 = state_34127__$1;
(statearr_34143_35527[(2)] = null);

(statearr_34143_35527[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (5))){
var state_34127__$1 = state_34127;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34144_35529 = state_34127__$1;
(statearr_34144_35529[(1)] = (8));

} else {
var statearr_34145_35530 = state_34127__$1;
(statearr_34145_35530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (14))){
var inst_34107 = (state_34127[(11)]);
var inst_34105 = (state_34127[(8)]);
var inst_34105__$1 = (state_34127[(2)]);
var inst_34106 = (inst_34105__$1 == null);
var inst_34107__$1 = cljs.core.not(inst_34106);
var state_34127__$1 = (function (){var statearr_34146 = state_34127;
(statearr_34146[(11)] = inst_34107__$1);

(statearr_34146[(8)] = inst_34105__$1);

return statearr_34146;
})();
if(inst_34107__$1){
var statearr_34147_35532 = state_34127__$1;
(statearr_34147_35532[(1)] = (15));

} else {
var statearr_34148_35533 = state_34127__$1;
(statearr_34148_35533[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (16))){
var inst_34107 = (state_34127[(11)]);
var state_34127__$1 = state_34127;
var statearr_34149_35534 = state_34127__$1;
(statearr_34149_35534[(2)] = inst_34107);

(statearr_34149_35534[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (10))){
var inst_34099 = (state_34127[(2)]);
var state_34127__$1 = state_34127;
var statearr_34150_35535 = state_34127__$1;
(statearr_34150_35535[(2)] = inst_34099);

(statearr_34150_35535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (18))){
var inst_34110 = (state_34127[(2)]);
var state_34127__$1 = state_34127;
var statearr_34151_35536 = state_34127__$1;
(statearr_34151_35536[(2)] = inst_34110);

(statearr_34151_35536[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34128 === (8))){
var inst_34096 = cljs.core.async.close_BANG_(to);
var state_34127__$1 = state_34127;
var statearr_34152_35537 = state_34127__$1;
(statearr_34152_35537[(2)] = inst_34096);

(statearr_34152_35537[(1)] = (10));


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
});})(c__33853__auto__,jobs,results,process,async))
;
return ((function (switch__33674__auto__,c__33853__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____0 = (function (){
var statearr_34153 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34153[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__);

(statearr_34153[(1)] = (1));

return statearr_34153;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____1 = (function (state_34127){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_34127);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e34154){if((e34154 instanceof Object)){
var ex__33678__auto__ = e34154;
var statearr_34155_35540 = state_34127;
(statearr_34155_35540[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34154;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35541 = state_34127;
state_34127 = G__35541;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__ = function(state_34127){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____1.call(this,state_34127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33675__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto__,jobs,results,process,async))
})();
var state__33855__auto__ = (function (){var statearr_34156 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_34156[(6)] = c__33853__auto__);

return statearr_34156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto__,jobs,results,process,async))
);

return c__33853__auto__;
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
var G__34158 = arguments.length;
switch (G__34158) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__34160 = arguments.length;
switch (G__34160) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__34162 = arguments.length;
switch (G__34162) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33853__auto___35547 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto___35547,tc,fc){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto___35547,tc,fc){
return (function (state_34188){
var state_val_34189 = (state_34188[(1)]);
if((state_val_34189 === (7))){
var inst_34184 = (state_34188[(2)]);
var state_34188__$1 = state_34188;
var statearr_34190_35548 = state_34188__$1;
(statearr_34190_35548[(2)] = inst_34184);

(statearr_34190_35548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34189 === (1))){
var state_34188__$1 = state_34188;
var statearr_34191_35549 = state_34188__$1;
(statearr_34191_35549[(2)] = null);

(statearr_34191_35549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34189 === (4))){
var inst_34165 = (state_34188[(7)]);
var inst_34165__$1 = (state_34188[(2)]);
var inst_34166 = (inst_34165__$1 == null);
var state_34188__$1 = (function (){var statearr_34192 = state_34188;
(statearr_34192[(7)] = inst_34165__$1);

return statearr_34192;
})();
if(cljs.core.truth_(inst_34166)){
var statearr_34193_35550 = state_34188__$1;
(statearr_34193_35550[(1)] = (5));

} else {
var statearr_34194_35552 = state_34188__$1;
(statearr_34194_35552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34189 === (13))){
var state_34188__$1 = state_34188;
var statearr_34195_35553 = state_34188__$1;
(statearr_34195_35553[(2)] = null);

(statearr_34195_35553[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34189 === (6))){
var inst_34165 = (state_34188[(7)]);
var inst_34171 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34165) : p.call(null,inst_34165));
var state_34188__$1 = state_34188;
if(cljs.core.truth_(inst_34171)){
var statearr_34196_35555 = state_34188__$1;
(statearr_34196_35555[(1)] = (9));

} else {
var statearr_34197_35556 = state_34188__$1;
(statearr_34197_35556[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34189 === (3))){
var inst_34186 = (state_34188[(2)]);
var state_34188__$1 = state_34188;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34188__$1,inst_34186);
} else {
if((state_val_34189 === (12))){
var state_34188__$1 = state_34188;
var statearr_34198_35557 = state_34188__$1;
(statearr_34198_35557[(2)] = null);

(statearr_34198_35557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34189 === (2))){
var state_34188__$1 = state_34188;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34188__$1,(4),ch);
} else {
if((state_val_34189 === (11))){
var inst_34165 = (state_34188[(7)]);
var inst_34175 = (state_34188[(2)]);
var state_34188__$1 = state_34188;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34188__$1,(8),inst_34175,inst_34165);
} else {
if((state_val_34189 === (9))){
var state_34188__$1 = state_34188;
var statearr_34199_35558 = state_34188__$1;
(statearr_34199_35558[(2)] = tc);

(statearr_34199_35558[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34189 === (5))){
var inst_34168 = cljs.core.async.close_BANG_(tc);
var inst_34169 = cljs.core.async.close_BANG_(fc);
var state_34188__$1 = (function (){var statearr_34200 = state_34188;
(statearr_34200[(8)] = inst_34168);

return statearr_34200;
})();
var statearr_34201_35559 = state_34188__$1;
(statearr_34201_35559[(2)] = inst_34169);

(statearr_34201_35559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34189 === (14))){
var inst_34182 = (state_34188[(2)]);
var state_34188__$1 = state_34188;
var statearr_34202_35560 = state_34188__$1;
(statearr_34202_35560[(2)] = inst_34182);

(statearr_34202_35560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34189 === (10))){
var state_34188__$1 = state_34188;
var statearr_34203_35562 = state_34188__$1;
(statearr_34203_35562[(2)] = fc);

(statearr_34203_35562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34189 === (8))){
var inst_34177 = (state_34188[(2)]);
var state_34188__$1 = state_34188;
if(cljs.core.truth_(inst_34177)){
var statearr_34204_35564 = state_34188__$1;
(statearr_34204_35564[(1)] = (12));

} else {
var statearr_34205_35565 = state_34188__$1;
(statearr_34205_35565[(1)] = (13));

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
});})(c__33853__auto___35547,tc,fc))
;
return ((function (switch__33674__auto__,c__33853__auto___35547,tc,fc){
return (function() {
var cljs$core$async$state_machine__33675__auto__ = null;
var cljs$core$async$state_machine__33675__auto____0 = (function (){
var statearr_34206 = [null,null,null,null,null,null,null,null,null];
(statearr_34206[(0)] = cljs$core$async$state_machine__33675__auto__);

(statearr_34206[(1)] = (1));

return statearr_34206;
});
var cljs$core$async$state_machine__33675__auto____1 = (function (state_34188){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_34188);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e34207){if((e34207 instanceof Object)){
var ex__33678__auto__ = e34207;
var statearr_34208_35568 = state_34188;
(statearr_34208_35568[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34207;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35569 = state_34188;
state_34188 = G__35569;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$state_machine__33675__auto__ = function(state_34188){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33675__auto____1.call(this,state_34188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33675__auto____0;
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33675__auto____1;
return cljs$core$async$state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto___35547,tc,fc))
})();
var state__33855__auto__ = (function (){var statearr_34209 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_34209[(6)] = c__33853__auto___35547);

return statearr_34209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto___35547,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto__){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto__){
return (function (state_34230){
var state_val_34231 = (state_34230[(1)]);
if((state_val_34231 === (7))){
var inst_34226 = (state_34230[(2)]);
var state_34230__$1 = state_34230;
var statearr_34232_35574 = state_34230__$1;
(statearr_34232_35574[(2)] = inst_34226);

(statearr_34232_35574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34231 === (1))){
var inst_34210 = init;
var state_34230__$1 = (function (){var statearr_34233 = state_34230;
(statearr_34233[(7)] = inst_34210);

return statearr_34233;
})();
var statearr_34234_35577 = state_34230__$1;
(statearr_34234_35577[(2)] = null);

(statearr_34234_35577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34231 === (4))){
var inst_34213 = (state_34230[(8)]);
var inst_34213__$1 = (state_34230[(2)]);
var inst_34214 = (inst_34213__$1 == null);
var state_34230__$1 = (function (){var statearr_34235 = state_34230;
(statearr_34235[(8)] = inst_34213__$1);

return statearr_34235;
})();
if(cljs.core.truth_(inst_34214)){
var statearr_34236_35580 = state_34230__$1;
(statearr_34236_35580[(1)] = (5));

} else {
var statearr_34237_35581 = state_34230__$1;
(statearr_34237_35581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34231 === (6))){
var inst_34210 = (state_34230[(7)]);
var inst_34213 = (state_34230[(8)]);
var inst_34217 = (state_34230[(9)]);
var inst_34217__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34210,inst_34213) : f.call(null,inst_34210,inst_34213));
var inst_34218 = cljs.core.reduced_QMARK_(inst_34217__$1);
var state_34230__$1 = (function (){var statearr_34238 = state_34230;
(statearr_34238[(9)] = inst_34217__$1);

return statearr_34238;
})();
if(inst_34218){
var statearr_34239_35582 = state_34230__$1;
(statearr_34239_35582[(1)] = (8));

} else {
var statearr_34240_35583 = state_34230__$1;
(statearr_34240_35583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34231 === (3))){
var inst_34228 = (state_34230[(2)]);
var state_34230__$1 = state_34230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34230__$1,inst_34228);
} else {
if((state_val_34231 === (2))){
var state_34230__$1 = state_34230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34230__$1,(4),ch);
} else {
if((state_val_34231 === (9))){
var inst_34217 = (state_34230[(9)]);
var inst_34210 = inst_34217;
var state_34230__$1 = (function (){var statearr_34241 = state_34230;
(statearr_34241[(7)] = inst_34210);

return statearr_34241;
})();
var statearr_34242_35586 = state_34230__$1;
(statearr_34242_35586[(2)] = null);

(statearr_34242_35586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34231 === (5))){
var inst_34210 = (state_34230[(7)]);
var state_34230__$1 = state_34230;
var statearr_34243_35587 = state_34230__$1;
(statearr_34243_35587[(2)] = inst_34210);

(statearr_34243_35587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34231 === (10))){
var inst_34224 = (state_34230[(2)]);
var state_34230__$1 = state_34230;
var statearr_34244_35588 = state_34230__$1;
(statearr_34244_35588[(2)] = inst_34224);

(statearr_34244_35588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34231 === (8))){
var inst_34217 = (state_34230[(9)]);
var inst_34220 = cljs.core.deref(inst_34217);
var state_34230__$1 = state_34230;
var statearr_34245_35589 = state_34230__$1;
(statearr_34245_35589[(2)] = inst_34220);

(statearr_34245_35589[(1)] = (10));


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
});})(c__33853__auto__))
;
return ((function (switch__33674__auto__,c__33853__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33675__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33675__auto____0 = (function (){
var statearr_34246 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34246[(0)] = cljs$core$async$reduce_$_state_machine__33675__auto__);

(statearr_34246[(1)] = (1));

return statearr_34246;
});
var cljs$core$async$reduce_$_state_machine__33675__auto____1 = (function (state_34230){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_34230);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e34247){if((e34247 instanceof Object)){
var ex__33678__auto__ = e34247;
var statearr_34248_35591 = state_34230;
(statearr_34248_35591[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34247;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35592 = state_34230;
state_34230 = G__35592;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33675__auto__ = function(state_34230){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33675__auto____1.call(this,state_34230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33675__auto____0;
cljs$core$async$reduce_$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33675__auto____1;
return cljs$core$async$reduce_$_state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto__))
})();
var state__33855__auto__ = (function (){var statearr_34249 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_34249[(6)] = c__33853__auto__);

return statearr_34249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto__))
);

return c__33853__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto__,f__$1){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto__,f__$1){
return (function (state_34255){
var state_val_34256 = (state_34255[(1)]);
if((state_val_34256 === (1))){
var inst_34250 = cljs.core.async.reduce(f__$1,init,ch);
var state_34255__$1 = state_34255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34255__$1,(2),inst_34250);
} else {
if((state_val_34256 === (2))){
var inst_34252 = (state_34255[(2)]);
var inst_34253 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34252) : f__$1.call(null,inst_34252));
var state_34255__$1 = state_34255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34255__$1,inst_34253);
} else {
return null;
}
}
});})(c__33853__auto__,f__$1))
;
return ((function (switch__33674__auto__,c__33853__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33675__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33675__auto____0 = (function (){
var statearr_34257 = [null,null,null,null,null,null,null];
(statearr_34257[(0)] = cljs$core$async$transduce_$_state_machine__33675__auto__);

(statearr_34257[(1)] = (1));

return statearr_34257;
});
var cljs$core$async$transduce_$_state_machine__33675__auto____1 = (function (state_34255){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_34255);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e34258){if((e34258 instanceof Object)){
var ex__33678__auto__ = e34258;
var statearr_34259_35600 = state_34255;
(statearr_34259_35600[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34258;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35601 = state_34255;
state_34255 = G__35601;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33675__auto__ = function(state_34255){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33675__auto____1.call(this,state_34255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33675__auto____0;
cljs$core$async$transduce_$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33675__auto____1;
return cljs$core$async$transduce_$_state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto__,f__$1))
})();
var state__33855__auto__ = (function (){var statearr_34260 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_34260[(6)] = c__33853__auto__);

return statearr_34260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto__,f__$1))
);

return c__33853__auto__;
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
var G__34262 = arguments.length;
switch (G__34262) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto__){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto__){
return (function (state_34287){
var state_val_34288 = (state_34287[(1)]);
if((state_val_34288 === (7))){
var inst_34269 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
var statearr_34289_35609 = state_34287__$1;
(statearr_34289_35609[(2)] = inst_34269);

(statearr_34289_35609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (1))){
var inst_34263 = cljs.core.seq(coll);
var inst_34264 = inst_34263;
var state_34287__$1 = (function (){var statearr_34290 = state_34287;
(statearr_34290[(7)] = inst_34264);

return statearr_34290;
})();
var statearr_34291_35610 = state_34287__$1;
(statearr_34291_35610[(2)] = null);

(statearr_34291_35610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (4))){
var inst_34264 = (state_34287[(7)]);
var inst_34267 = cljs.core.first(inst_34264);
var state_34287__$1 = state_34287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34287__$1,(7),ch,inst_34267);
} else {
if((state_val_34288 === (13))){
var inst_34281 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
var statearr_34292_35614 = state_34287__$1;
(statearr_34292_35614[(2)] = inst_34281);

(statearr_34292_35614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (6))){
var inst_34272 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
if(cljs.core.truth_(inst_34272)){
var statearr_34293_35615 = state_34287__$1;
(statearr_34293_35615[(1)] = (8));

} else {
var statearr_34294_35616 = state_34287__$1;
(statearr_34294_35616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (3))){
var inst_34285 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34287__$1,inst_34285);
} else {
if((state_val_34288 === (12))){
var state_34287__$1 = state_34287;
var statearr_34295_35618 = state_34287__$1;
(statearr_34295_35618[(2)] = null);

(statearr_34295_35618[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (2))){
var inst_34264 = (state_34287[(7)]);
var state_34287__$1 = state_34287;
if(cljs.core.truth_(inst_34264)){
var statearr_34296_35620 = state_34287__$1;
(statearr_34296_35620[(1)] = (4));

} else {
var statearr_34297_35621 = state_34287__$1;
(statearr_34297_35621[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (11))){
var inst_34278 = cljs.core.async.close_BANG_(ch);
var state_34287__$1 = state_34287;
var statearr_34298_35622 = state_34287__$1;
(statearr_34298_35622[(2)] = inst_34278);

(statearr_34298_35622[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (9))){
var state_34287__$1 = state_34287;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34299_35623 = state_34287__$1;
(statearr_34299_35623[(1)] = (11));

} else {
var statearr_34300_35626 = state_34287__$1;
(statearr_34300_35626[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (5))){
var inst_34264 = (state_34287[(7)]);
var state_34287__$1 = state_34287;
var statearr_34301_35627 = state_34287__$1;
(statearr_34301_35627[(2)] = inst_34264);

(statearr_34301_35627[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (10))){
var inst_34283 = (state_34287[(2)]);
var state_34287__$1 = state_34287;
var statearr_34302_35628 = state_34287__$1;
(statearr_34302_35628[(2)] = inst_34283);

(statearr_34302_35628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34288 === (8))){
var inst_34264 = (state_34287[(7)]);
var inst_34274 = cljs.core.next(inst_34264);
var inst_34264__$1 = inst_34274;
var state_34287__$1 = (function (){var statearr_34303 = state_34287;
(statearr_34303[(7)] = inst_34264__$1);

return statearr_34303;
})();
var statearr_34304_35634 = state_34287__$1;
(statearr_34304_35634[(2)] = null);

(statearr_34304_35634[(1)] = (2));


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
});})(c__33853__auto__))
;
return ((function (switch__33674__auto__,c__33853__auto__){
return (function() {
var cljs$core$async$state_machine__33675__auto__ = null;
var cljs$core$async$state_machine__33675__auto____0 = (function (){
var statearr_34305 = [null,null,null,null,null,null,null,null];
(statearr_34305[(0)] = cljs$core$async$state_machine__33675__auto__);

(statearr_34305[(1)] = (1));

return statearr_34305;
});
var cljs$core$async$state_machine__33675__auto____1 = (function (state_34287){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_34287);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e34306){if((e34306 instanceof Object)){
var ex__33678__auto__ = e34306;
var statearr_34307_35640 = state_34287;
(statearr_34307_35640[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34306;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35645 = state_34287;
state_34287 = G__35645;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$state_machine__33675__auto__ = function(state_34287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33675__auto____1.call(this,state_34287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33675__auto____0;
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33675__auto____1;
return cljs$core$async$state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto__))
})();
var state__33855__auto__ = (function (){var statearr_34308 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_34308[(6)] = c__33853__auto__);

return statearr_34308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto__))
);

return c__33853__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

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
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34309 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34309 = (function (ch,cs,meta34310){
this.ch = ch;
this.cs = cs;
this.meta34310 = meta34310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34311,meta34310__$1){
var self__ = this;
var _34311__$1 = this;
return (new cljs.core.async.t_cljs$core$async34309(self__.ch,self__.cs,meta34310__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34309.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34311){
var self__ = this;
var _34311__$1 = this;
return self__.meta34310;
});})(cs))
;

cljs.core.async.t_cljs$core$async34309.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34309.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34309.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34309.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34309.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34309.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34309.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34310","meta34310",797402916,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34309.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34309";

cljs.core.async.t_cljs$core$async34309.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34309");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34309.
 */
cljs.core.async.__GT_t_cljs$core$async34309 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34309(ch__$1,cs__$1,meta34310){
return (new cljs.core.async.t_cljs$core$async34309(ch__$1,cs__$1,meta34310));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34309(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33853__auto___35705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto___35705,cs,m,dchan,dctr,done){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto___35705,cs,m,dchan,dctr,done){
return (function (state_34446){
var state_val_34447 = (state_34446[(1)]);
if((state_val_34447 === (7))){
var inst_34442 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34448_35707 = state_34446__$1;
(statearr_34448_35707[(2)] = inst_34442);

(statearr_34448_35707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (20))){
var inst_34345 = (state_34446[(7)]);
var inst_34357 = cljs.core.first(inst_34345);
var inst_34358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34357,(0),null);
var inst_34359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34357,(1),null);
var state_34446__$1 = (function (){var statearr_34449 = state_34446;
(statearr_34449[(8)] = inst_34358);

return statearr_34449;
})();
if(cljs.core.truth_(inst_34359)){
var statearr_34450_35713 = state_34446__$1;
(statearr_34450_35713[(1)] = (22));

} else {
var statearr_34451_35714 = state_34446__$1;
(statearr_34451_35714[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (27))){
var inst_34389 = (state_34446[(9)]);
var inst_34387 = (state_34446[(10)]);
var inst_34394 = (state_34446[(11)]);
var inst_34314 = (state_34446[(12)]);
var inst_34394__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34387,inst_34389);
var inst_34395 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34394__$1,inst_34314,done);
var state_34446__$1 = (function (){var statearr_34452 = state_34446;
(statearr_34452[(11)] = inst_34394__$1);

return statearr_34452;
})();
if(cljs.core.truth_(inst_34395)){
var statearr_34453_35716 = state_34446__$1;
(statearr_34453_35716[(1)] = (30));

} else {
var statearr_34454_35718 = state_34446__$1;
(statearr_34454_35718[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (1))){
var state_34446__$1 = state_34446;
var statearr_34455_35720 = state_34446__$1;
(statearr_34455_35720[(2)] = null);

(statearr_34455_35720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (24))){
var inst_34345 = (state_34446[(7)]);
var inst_34364 = (state_34446[(2)]);
var inst_34365 = cljs.core.next(inst_34345);
var inst_34323 = inst_34365;
var inst_34324 = null;
var inst_34325 = (0);
var inst_34326 = (0);
var state_34446__$1 = (function (){var statearr_34456 = state_34446;
(statearr_34456[(13)] = inst_34364);

(statearr_34456[(14)] = inst_34325);

(statearr_34456[(15)] = inst_34324);

(statearr_34456[(16)] = inst_34326);

(statearr_34456[(17)] = inst_34323);

return statearr_34456;
})();
var statearr_34457_35723 = state_34446__$1;
(statearr_34457_35723[(2)] = null);

(statearr_34457_35723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (39))){
var state_34446__$1 = state_34446;
var statearr_34461_35725 = state_34446__$1;
(statearr_34461_35725[(2)] = null);

(statearr_34461_35725[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (4))){
var inst_34314 = (state_34446[(12)]);
var inst_34314__$1 = (state_34446[(2)]);
var inst_34315 = (inst_34314__$1 == null);
var state_34446__$1 = (function (){var statearr_34462 = state_34446;
(statearr_34462[(12)] = inst_34314__$1);

return statearr_34462;
})();
if(cljs.core.truth_(inst_34315)){
var statearr_34463_35728 = state_34446__$1;
(statearr_34463_35728[(1)] = (5));

} else {
var statearr_34464_35729 = state_34446__$1;
(statearr_34464_35729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (15))){
var inst_34325 = (state_34446[(14)]);
var inst_34324 = (state_34446[(15)]);
var inst_34326 = (state_34446[(16)]);
var inst_34323 = (state_34446[(17)]);
var inst_34341 = (state_34446[(2)]);
var inst_34342 = (inst_34326 + (1));
var tmp34458 = inst_34325;
var tmp34459 = inst_34324;
var tmp34460 = inst_34323;
var inst_34323__$1 = tmp34460;
var inst_34324__$1 = tmp34459;
var inst_34325__$1 = tmp34458;
var inst_34326__$1 = inst_34342;
var state_34446__$1 = (function (){var statearr_34465 = state_34446;
(statearr_34465[(18)] = inst_34341);

(statearr_34465[(14)] = inst_34325__$1);

(statearr_34465[(15)] = inst_34324__$1);

(statearr_34465[(16)] = inst_34326__$1);

(statearr_34465[(17)] = inst_34323__$1);

return statearr_34465;
})();
var statearr_34466_35735 = state_34446__$1;
(statearr_34466_35735[(2)] = null);

(statearr_34466_35735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (21))){
var inst_34368 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34470_35737 = state_34446__$1;
(statearr_34470_35737[(2)] = inst_34368);

(statearr_34470_35737[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (31))){
var inst_34394 = (state_34446[(11)]);
var inst_34398 = done(null);
var inst_34399 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34394);
var state_34446__$1 = (function (){var statearr_34471 = state_34446;
(statearr_34471[(19)] = inst_34398);

return statearr_34471;
})();
var statearr_34472_35740 = state_34446__$1;
(statearr_34472_35740[(2)] = inst_34399);

(statearr_34472_35740[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (32))){
var inst_34389 = (state_34446[(9)]);
var inst_34388 = (state_34446[(20)]);
var inst_34387 = (state_34446[(10)]);
var inst_34386 = (state_34446[(21)]);
var inst_34401 = (state_34446[(2)]);
var inst_34402 = (inst_34389 + (1));
var tmp34467 = inst_34388;
var tmp34468 = inst_34387;
var tmp34469 = inst_34386;
var inst_34386__$1 = tmp34469;
var inst_34387__$1 = tmp34468;
var inst_34388__$1 = tmp34467;
var inst_34389__$1 = inst_34402;
var state_34446__$1 = (function (){var statearr_34473 = state_34446;
(statearr_34473[(9)] = inst_34389__$1);

(statearr_34473[(20)] = inst_34388__$1);

(statearr_34473[(10)] = inst_34387__$1);

(statearr_34473[(22)] = inst_34401);

(statearr_34473[(21)] = inst_34386__$1);

return statearr_34473;
})();
var statearr_34474_35744 = state_34446__$1;
(statearr_34474_35744[(2)] = null);

(statearr_34474_35744[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (40))){
var inst_34414 = (state_34446[(23)]);
var inst_34418 = done(null);
var inst_34419 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34414);
var state_34446__$1 = (function (){var statearr_34475 = state_34446;
(statearr_34475[(24)] = inst_34418);

return statearr_34475;
})();
var statearr_34476_35747 = state_34446__$1;
(statearr_34476_35747[(2)] = inst_34419);

(statearr_34476_35747[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (33))){
var inst_34405 = (state_34446[(25)]);
var inst_34407 = cljs.core.chunked_seq_QMARK_(inst_34405);
var state_34446__$1 = state_34446;
if(inst_34407){
var statearr_34477_35750 = state_34446__$1;
(statearr_34477_35750[(1)] = (36));

} else {
var statearr_34478_35751 = state_34446__$1;
(statearr_34478_35751[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (13))){
var inst_34335 = (state_34446[(26)]);
var inst_34338 = cljs.core.async.close_BANG_(inst_34335);
var state_34446__$1 = state_34446;
var statearr_34479_35754 = state_34446__$1;
(statearr_34479_35754[(2)] = inst_34338);

(statearr_34479_35754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (22))){
var inst_34358 = (state_34446[(8)]);
var inst_34361 = cljs.core.async.close_BANG_(inst_34358);
var state_34446__$1 = state_34446;
var statearr_34480_35756 = state_34446__$1;
(statearr_34480_35756[(2)] = inst_34361);

(statearr_34480_35756[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (36))){
var inst_34405 = (state_34446[(25)]);
var inst_34409 = cljs.core.chunk_first(inst_34405);
var inst_34410 = cljs.core.chunk_rest(inst_34405);
var inst_34411 = cljs.core.count(inst_34409);
var inst_34386 = inst_34410;
var inst_34387 = inst_34409;
var inst_34388 = inst_34411;
var inst_34389 = (0);
var state_34446__$1 = (function (){var statearr_34481 = state_34446;
(statearr_34481[(9)] = inst_34389);

(statearr_34481[(20)] = inst_34388);

(statearr_34481[(10)] = inst_34387);

(statearr_34481[(21)] = inst_34386);

return statearr_34481;
})();
var statearr_34482_35760 = state_34446__$1;
(statearr_34482_35760[(2)] = null);

(statearr_34482_35760[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (41))){
var inst_34405 = (state_34446[(25)]);
var inst_34421 = (state_34446[(2)]);
var inst_34422 = cljs.core.next(inst_34405);
var inst_34386 = inst_34422;
var inst_34387 = null;
var inst_34388 = (0);
var inst_34389 = (0);
var state_34446__$1 = (function (){var statearr_34483 = state_34446;
(statearr_34483[(9)] = inst_34389);

(statearr_34483[(27)] = inst_34421);

(statearr_34483[(20)] = inst_34388);

(statearr_34483[(10)] = inst_34387);

(statearr_34483[(21)] = inst_34386);

return statearr_34483;
})();
var statearr_34484_35767 = state_34446__$1;
(statearr_34484_35767[(2)] = null);

(statearr_34484_35767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (43))){
var state_34446__$1 = state_34446;
var statearr_34485_35770 = state_34446__$1;
(statearr_34485_35770[(2)] = null);

(statearr_34485_35770[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (29))){
var inst_34430 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34486_35771 = state_34446__$1;
(statearr_34486_35771[(2)] = inst_34430);

(statearr_34486_35771[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (44))){
var inst_34439 = (state_34446[(2)]);
var state_34446__$1 = (function (){var statearr_34487 = state_34446;
(statearr_34487[(28)] = inst_34439);

return statearr_34487;
})();
var statearr_34488_35773 = state_34446__$1;
(statearr_34488_35773[(2)] = null);

(statearr_34488_35773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (6))){
var inst_34378 = (state_34446[(29)]);
var inst_34377 = cljs.core.deref(cs);
var inst_34378__$1 = cljs.core.keys(inst_34377);
var inst_34379 = cljs.core.count(inst_34378__$1);
var inst_34380 = cljs.core.reset_BANG_(dctr,inst_34379);
var inst_34385 = cljs.core.seq(inst_34378__$1);
var inst_34386 = inst_34385;
var inst_34387 = null;
var inst_34388 = (0);
var inst_34389 = (0);
var state_34446__$1 = (function (){var statearr_34489 = state_34446;
(statearr_34489[(30)] = inst_34380);

(statearr_34489[(9)] = inst_34389);

(statearr_34489[(20)] = inst_34388);

(statearr_34489[(10)] = inst_34387);

(statearr_34489[(29)] = inst_34378__$1);

(statearr_34489[(21)] = inst_34386);

return statearr_34489;
})();
var statearr_34490_35776 = state_34446__$1;
(statearr_34490_35776[(2)] = null);

(statearr_34490_35776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (28))){
var inst_34405 = (state_34446[(25)]);
var inst_34386 = (state_34446[(21)]);
var inst_34405__$1 = cljs.core.seq(inst_34386);
var state_34446__$1 = (function (){var statearr_34491 = state_34446;
(statearr_34491[(25)] = inst_34405__$1);

return statearr_34491;
})();
if(inst_34405__$1){
var statearr_34492_35779 = state_34446__$1;
(statearr_34492_35779[(1)] = (33));

} else {
var statearr_34493_35780 = state_34446__$1;
(statearr_34493_35780[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (25))){
var inst_34389 = (state_34446[(9)]);
var inst_34388 = (state_34446[(20)]);
var inst_34391 = (inst_34389 < inst_34388);
var inst_34392 = inst_34391;
var state_34446__$1 = state_34446;
if(cljs.core.truth_(inst_34392)){
var statearr_34494_35783 = state_34446__$1;
(statearr_34494_35783[(1)] = (27));

} else {
var statearr_34495_35784 = state_34446__$1;
(statearr_34495_35784[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (34))){
var state_34446__$1 = state_34446;
var statearr_34496_35785 = state_34446__$1;
(statearr_34496_35785[(2)] = null);

(statearr_34496_35785[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (17))){
var state_34446__$1 = state_34446;
var statearr_34497_35786 = state_34446__$1;
(statearr_34497_35786[(2)] = null);

(statearr_34497_35786[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (3))){
var inst_34444 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34446__$1,inst_34444);
} else {
if((state_val_34447 === (12))){
var inst_34373 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34498_35788 = state_34446__$1;
(statearr_34498_35788[(2)] = inst_34373);

(statearr_34498_35788[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (2))){
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34446__$1,(4),ch);
} else {
if((state_val_34447 === (23))){
var state_34446__$1 = state_34446;
var statearr_34499_35789 = state_34446__$1;
(statearr_34499_35789[(2)] = null);

(statearr_34499_35789[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (35))){
var inst_34428 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34500_35792 = state_34446__$1;
(statearr_34500_35792[(2)] = inst_34428);

(statearr_34500_35792[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (19))){
var inst_34345 = (state_34446[(7)]);
var inst_34349 = cljs.core.chunk_first(inst_34345);
var inst_34350 = cljs.core.chunk_rest(inst_34345);
var inst_34351 = cljs.core.count(inst_34349);
var inst_34323 = inst_34350;
var inst_34324 = inst_34349;
var inst_34325 = inst_34351;
var inst_34326 = (0);
var state_34446__$1 = (function (){var statearr_34501 = state_34446;
(statearr_34501[(14)] = inst_34325);

(statearr_34501[(15)] = inst_34324);

(statearr_34501[(16)] = inst_34326);

(statearr_34501[(17)] = inst_34323);

return statearr_34501;
})();
var statearr_34502_35796 = state_34446__$1;
(statearr_34502_35796[(2)] = null);

(statearr_34502_35796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (11))){
var inst_34345 = (state_34446[(7)]);
var inst_34323 = (state_34446[(17)]);
var inst_34345__$1 = cljs.core.seq(inst_34323);
var state_34446__$1 = (function (){var statearr_34503 = state_34446;
(statearr_34503[(7)] = inst_34345__$1);

return statearr_34503;
})();
if(inst_34345__$1){
var statearr_34504_35801 = state_34446__$1;
(statearr_34504_35801[(1)] = (16));

} else {
var statearr_34505_35804 = state_34446__$1;
(statearr_34505_35804[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (9))){
var inst_34375 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34506_35807 = state_34446__$1;
(statearr_34506_35807[(2)] = inst_34375);

(statearr_34506_35807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (5))){
var inst_34321 = cljs.core.deref(cs);
var inst_34322 = cljs.core.seq(inst_34321);
var inst_34323 = inst_34322;
var inst_34324 = null;
var inst_34325 = (0);
var inst_34326 = (0);
var state_34446__$1 = (function (){var statearr_34507 = state_34446;
(statearr_34507[(14)] = inst_34325);

(statearr_34507[(15)] = inst_34324);

(statearr_34507[(16)] = inst_34326);

(statearr_34507[(17)] = inst_34323);

return statearr_34507;
})();
var statearr_34508_35812 = state_34446__$1;
(statearr_34508_35812[(2)] = null);

(statearr_34508_35812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (14))){
var state_34446__$1 = state_34446;
var statearr_34509_35817 = state_34446__$1;
(statearr_34509_35817[(2)] = null);

(statearr_34509_35817[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (45))){
var inst_34436 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34510_35822 = state_34446__$1;
(statearr_34510_35822[(2)] = inst_34436);

(statearr_34510_35822[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (26))){
var inst_34378 = (state_34446[(29)]);
var inst_34432 = (state_34446[(2)]);
var inst_34433 = cljs.core.seq(inst_34378);
var state_34446__$1 = (function (){var statearr_34511 = state_34446;
(statearr_34511[(31)] = inst_34432);

return statearr_34511;
})();
if(inst_34433){
var statearr_34512_35831 = state_34446__$1;
(statearr_34512_35831[(1)] = (42));

} else {
var statearr_34513_35832 = state_34446__$1;
(statearr_34513_35832[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (16))){
var inst_34345 = (state_34446[(7)]);
var inst_34347 = cljs.core.chunked_seq_QMARK_(inst_34345);
var state_34446__$1 = state_34446;
if(inst_34347){
var statearr_34514_35835 = state_34446__$1;
(statearr_34514_35835[(1)] = (19));

} else {
var statearr_34515_35836 = state_34446__$1;
(statearr_34515_35836[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (38))){
var inst_34425 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34516_35837 = state_34446__$1;
(statearr_34516_35837[(2)] = inst_34425);

(statearr_34516_35837[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (30))){
var state_34446__$1 = state_34446;
var statearr_34517_35839 = state_34446__$1;
(statearr_34517_35839[(2)] = null);

(statearr_34517_35839[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (10))){
var inst_34324 = (state_34446[(15)]);
var inst_34326 = (state_34446[(16)]);
var inst_34334 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34324,inst_34326);
var inst_34335 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34334,(0),null);
var inst_34336 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34334,(1),null);
var state_34446__$1 = (function (){var statearr_34518 = state_34446;
(statearr_34518[(26)] = inst_34335);

return statearr_34518;
})();
if(cljs.core.truth_(inst_34336)){
var statearr_34519_35844 = state_34446__$1;
(statearr_34519_35844[(1)] = (13));

} else {
var statearr_34520_35845 = state_34446__$1;
(statearr_34520_35845[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (18))){
var inst_34371 = (state_34446[(2)]);
var state_34446__$1 = state_34446;
var statearr_34521_35846 = state_34446__$1;
(statearr_34521_35846[(2)] = inst_34371);

(statearr_34521_35846[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (42))){
var state_34446__$1 = state_34446;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34446__$1,(45),dchan);
} else {
if((state_val_34447 === (37))){
var inst_34405 = (state_34446[(25)]);
var inst_34314 = (state_34446[(12)]);
var inst_34414 = (state_34446[(23)]);
var inst_34414__$1 = cljs.core.first(inst_34405);
var inst_34415 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34414__$1,inst_34314,done);
var state_34446__$1 = (function (){var statearr_34522 = state_34446;
(statearr_34522[(23)] = inst_34414__$1);

return statearr_34522;
})();
if(cljs.core.truth_(inst_34415)){
var statearr_34523_35847 = state_34446__$1;
(statearr_34523_35847[(1)] = (39));

} else {
var statearr_34524_35848 = state_34446__$1;
(statearr_34524_35848[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34447 === (8))){
var inst_34325 = (state_34446[(14)]);
var inst_34326 = (state_34446[(16)]);
var inst_34328 = (inst_34326 < inst_34325);
var inst_34329 = inst_34328;
var state_34446__$1 = state_34446;
if(cljs.core.truth_(inst_34329)){
var statearr_34525_35849 = state_34446__$1;
(statearr_34525_35849[(1)] = (10));

} else {
var statearr_34526_35850 = state_34446__$1;
(statearr_34526_35850[(1)] = (11));

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
});})(c__33853__auto___35705,cs,m,dchan,dctr,done))
;
return ((function (switch__33674__auto__,c__33853__auto___35705,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33675__auto__ = null;
var cljs$core$async$mult_$_state_machine__33675__auto____0 = (function (){
var statearr_34527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34527[(0)] = cljs$core$async$mult_$_state_machine__33675__auto__);

(statearr_34527[(1)] = (1));

return statearr_34527;
});
var cljs$core$async$mult_$_state_machine__33675__auto____1 = (function (state_34446){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_34446);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e34528){if((e34528 instanceof Object)){
var ex__33678__auto__ = e34528;
var statearr_34529_35857 = state_34446;
(statearr_34529_35857[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34528;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35859 = state_34446;
state_34446 = G__35859;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33675__auto__ = function(state_34446){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33675__auto____1.call(this,state_34446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33675__auto____0;
cljs$core$async$mult_$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33675__auto____1;
return cljs$core$async$mult_$_state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto___35705,cs,m,dchan,dctr,done))
})();
var state__33855__auto__ = (function (){var statearr_34530 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_34530[(6)] = c__33853__auto___35705);

return statearr_34530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto___35705,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34532 = arguments.length;
switch (G__34532) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
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
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35872 = arguments.length;
var i__4731__auto___35873 = (0);
while(true){
if((i__4731__auto___35873 < len__4730__auto___35872)){
args__4736__auto__.push((arguments[i__4731__auto___35873]));

var G__35874 = (i__4731__auto___35873 + (1));
i__4731__auto___35873 = G__35874;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34537){
var map__34538 = p__34537;
var map__34538__$1 = (((((!((map__34538 == null))))?(((((map__34538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34538):map__34538);
var opts = map__34538__$1;
var statearr_34540_35881 = state;
(statearr_34540_35881[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__34538,map__34538__$1,opts){
return (function (val){
var statearr_34541_35882 = state;
(statearr_34541_35882[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__34538,map__34538__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34542_35883 = state;
(statearr_34542_35883[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34533){
var G__34534 = cljs.core.first(seq34533);
var seq34533__$1 = cljs.core.next(seq34533);
var G__34535 = cljs.core.first(seq34533__$1);
var seq34533__$2 = cljs.core.next(seq34533__$1);
var G__34536 = cljs.core.first(seq34533__$2);
var seq34533__$3 = cljs.core.next(seq34533__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34534,G__34535,G__34536,seq34533__$3);
});

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
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34543 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34543 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34544){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34544 = meta34544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34545,meta34544__$1){
var self__ = this;
var _34545__$1 = this;
return (new cljs.core.async.t_cljs$core$async34543(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34544__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34543.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34545){
var self__ = this;
var _34545__$1 = this;
return self__.meta34544;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34543.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34543.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34543.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34543.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34543.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34543.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34543.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34543.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34543.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34544","meta34544",501997045,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34543.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34543";

cljs.core.async.t_cljs$core$async34543.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34543");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34543.
 */
cljs.core.async.__GT_t_cljs$core$async34543 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34543(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34544){
return (new cljs.core.async.t_cljs$core$async34543(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34544));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34543(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33853__auto___35894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto___35894,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto___35894,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34647){
var state_val_34648 = (state_34647[(1)]);
if((state_val_34648 === (7))){
var inst_34562 = (state_34647[(2)]);
var state_34647__$1 = state_34647;
var statearr_34649_35897 = state_34647__$1;
(statearr_34649_35897[(2)] = inst_34562);

(statearr_34649_35897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (20))){
var inst_34574 = (state_34647[(7)]);
var state_34647__$1 = state_34647;
var statearr_34650_35898 = state_34647__$1;
(statearr_34650_35898[(2)] = inst_34574);

(statearr_34650_35898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (27))){
var state_34647__$1 = state_34647;
var statearr_34651_35899 = state_34647__$1;
(statearr_34651_35899[(2)] = null);

(statearr_34651_35899[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (1))){
var inst_34549 = (state_34647[(8)]);
var inst_34549__$1 = calc_state();
var inst_34551 = (inst_34549__$1 == null);
var inst_34552 = cljs.core.not(inst_34551);
var state_34647__$1 = (function (){var statearr_34652 = state_34647;
(statearr_34652[(8)] = inst_34549__$1);

return statearr_34652;
})();
if(inst_34552){
var statearr_34653_35903 = state_34647__$1;
(statearr_34653_35903[(1)] = (2));

} else {
var statearr_34654_35904 = state_34647__$1;
(statearr_34654_35904[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (24))){
var inst_34621 = (state_34647[(9)]);
var inst_34607 = (state_34647[(10)]);
var inst_34598 = (state_34647[(11)]);
var inst_34621__$1 = (inst_34598.cljs$core$IFn$_invoke$arity$1 ? inst_34598.cljs$core$IFn$_invoke$arity$1(inst_34607) : inst_34598.call(null,inst_34607));
var state_34647__$1 = (function (){var statearr_34655 = state_34647;
(statearr_34655[(9)] = inst_34621__$1);

return statearr_34655;
})();
if(cljs.core.truth_(inst_34621__$1)){
var statearr_34656_35910 = state_34647__$1;
(statearr_34656_35910[(1)] = (29));

} else {
var statearr_34657_35911 = state_34647__$1;
(statearr_34657_35911[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (4))){
var inst_34565 = (state_34647[(2)]);
var state_34647__$1 = state_34647;
if(cljs.core.truth_(inst_34565)){
var statearr_34658_35912 = state_34647__$1;
(statearr_34658_35912[(1)] = (8));

} else {
var statearr_34659_35913 = state_34647__$1;
(statearr_34659_35913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (15))){
var inst_34592 = (state_34647[(2)]);
var state_34647__$1 = state_34647;
if(cljs.core.truth_(inst_34592)){
var statearr_34660_35914 = state_34647__$1;
(statearr_34660_35914[(1)] = (19));

} else {
var statearr_34661_35915 = state_34647__$1;
(statearr_34661_35915[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (21))){
var inst_34597 = (state_34647[(12)]);
var inst_34597__$1 = (state_34647[(2)]);
var inst_34598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34597__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34597__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34597__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34647__$1 = (function (){var statearr_34662 = state_34647;
(statearr_34662[(13)] = inst_34599);

(statearr_34662[(11)] = inst_34598);

(statearr_34662[(12)] = inst_34597__$1);

return statearr_34662;
})();
return cljs.core.async.ioc_alts_BANG_(state_34647__$1,(22),inst_34600);
} else {
if((state_val_34648 === (31))){
var inst_34629 = (state_34647[(2)]);
var state_34647__$1 = state_34647;
if(cljs.core.truth_(inst_34629)){
var statearr_34663_35919 = state_34647__$1;
(statearr_34663_35919[(1)] = (32));

} else {
var statearr_34664_35920 = state_34647__$1;
(statearr_34664_35920[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (32))){
var inst_34606 = (state_34647[(14)]);
var state_34647__$1 = state_34647;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34647__$1,(35),out,inst_34606);
} else {
if((state_val_34648 === (33))){
var inst_34597 = (state_34647[(12)]);
var inst_34574 = inst_34597;
var state_34647__$1 = (function (){var statearr_34665 = state_34647;
(statearr_34665[(7)] = inst_34574);

return statearr_34665;
})();
var statearr_34666_35921 = state_34647__$1;
(statearr_34666_35921[(2)] = null);

(statearr_34666_35921[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (13))){
var inst_34574 = (state_34647[(7)]);
var inst_34581 = inst_34574.cljs$lang$protocol_mask$partition0$;
var inst_34582 = (inst_34581 & (64));
var inst_34583 = inst_34574.cljs$core$ISeq$;
var inst_34584 = (cljs.core.PROTOCOL_SENTINEL === inst_34583);
var inst_34585 = ((inst_34582) || (inst_34584));
var state_34647__$1 = state_34647;
if(cljs.core.truth_(inst_34585)){
var statearr_34667_35926 = state_34647__$1;
(statearr_34667_35926[(1)] = (16));

} else {
var statearr_34668_35927 = state_34647__$1;
(statearr_34668_35927[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (22))){
var inst_34607 = (state_34647[(10)]);
var inst_34606 = (state_34647[(14)]);
var inst_34605 = (state_34647[(2)]);
var inst_34606__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34605,(0),null);
var inst_34607__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34605,(1),null);
var inst_34608 = (inst_34606__$1 == null);
var inst_34609 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34607__$1,change);
var inst_34610 = ((inst_34608) || (inst_34609));
var state_34647__$1 = (function (){var statearr_34669 = state_34647;
(statearr_34669[(10)] = inst_34607__$1);

(statearr_34669[(14)] = inst_34606__$1);

return statearr_34669;
})();
if(cljs.core.truth_(inst_34610)){
var statearr_34670_35928 = state_34647__$1;
(statearr_34670_35928[(1)] = (23));

} else {
var statearr_34671_35929 = state_34647__$1;
(statearr_34671_35929[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (36))){
var inst_34597 = (state_34647[(12)]);
var inst_34574 = inst_34597;
var state_34647__$1 = (function (){var statearr_34672 = state_34647;
(statearr_34672[(7)] = inst_34574);

return statearr_34672;
})();
var statearr_34673_35930 = state_34647__$1;
(statearr_34673_35930[(2)] = null);

(statearr_34673_35930[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (29))){
var inst_34621 = (state_34647[(9)]);
var state_34647__$1 = state_34647;
var statearr_34674_35931 = state_34647__$1;
(statearr_34674_35931[(2)] = inst_34621);

(statearr_34674_35931[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (6))){
var state_34647__$1 = state_34647;
var statearr_34675_35935 = state_34647__$1;
(statearr_34675_35935[(2)] = false);

(statearr_34675_35935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (28))){
var inst_34617 = (state_34647[(2)]);
var inst_34618 = calc_state();
var inst_34574 = inst_34618;
var state_34647__$1 = (function (){var statearr_34676 = state_34647;
(statearr_34676[(7)] = inst_34574);

(statearr_34676[(15)] = inst_34617);

return statearr_34676;
})();
var statearr_34677_35937 = state_34647__$1;
(statearr_34677_35937[(2)] = null);

(statearr_34677_35937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (25))){
var inst_34643 = (state_34647[(2)]);
var state_34647__$1 = state_34647;
var statearr_34678_35939 = state_34647__$1;
(statearr_34678_35939[(2)] = inst_34643);

(statearr_34678_35939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (34))){
var inst_34641 = (state_34647[(2)]);
var state_34647__$1 = state_34647;
var statearr_34679_35941 = state_34647__$1;
(statearr_34679_35941[(2)] = inst_34641);

(statearr_34679_35941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (17))){
var state_34647__$1 = state_34647;
var statearr_34680_35944 = state_34647__$1;
(statearr_34680_35944[(2)] = false);

(statearr_34680_35944[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (3))){
var state_34647__$1 = state_34647;
var statearr_34681_35947 = state_34647__$1;
(statearr_34681_35947[(2)] = false);

(statearr_34681_35947[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (12))){
var inst_34645 = (state_34647[(2)]);
var state_34647__$1 = state_34647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34647__$1,inst_34645);
} else {
if((state_val_34648 === (2))){
var inst_34549 = (state_34647[(8)]);
var inst_34554 = inst_34549.cljs$lang$protocol_mask$partition0$;
var inst_34555 = (inst_34554 & (64));
var inst_34556 = inst_34549.cljs$core$ISeq$;
var inst_34557 = (cljs.core.PROTOCOL_SENTINEL === inst_34556);
var inst_34558 = ((inst_34555) || (inst_34557));
var state_34647__$1 = state_34647;
if(cljs.core.truth_(inst_34558)){
var statearr_34682_35948 = state_34647__$1;
(statearr_34682_35948[(1)] = (5));

} else {
var statearr_34683_35949 = state_34647__$1;
(statearr_34683_35949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (23))){
var inst_34606 = (state_34647[(14)]);
var inst_34612 = (inst_34606 == null);
var state_34647__$1 = state_34647;
if(cljs.core.truth_(inst_34612)){
var statearr_34684_35953 = state_34647__$1;
(statearr_34684_35953[(1)] = (26));

} else {
var statearr_34685_35954 = state_34647__$1;
(statearr_34685_35954[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (35))){
var inst_34632 = (state_34647[(2)]);
var state_34647__$1 = state_34647;
if(cljs.core.truth_(inst_34632)){
var statearr_34686_35955 = state_34647__$1;
(statearr_34686_35955[(1)] = (36));

} else {
var statearr_34687_35957 = state_34647__$1;
(statearr_34687_35957[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (19))){
var inst_34574 = (state_34647[(7)]);
var inst_34594 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34574);
var state_34647__$1 = state_34647;
var statearr_34688_35958 = state_34647__$1;
(statearr_34688_35958[(2)] = inst_34594);

(statearr_34688_35958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (11))){
var inst_34574 = (state_34647[(7)]);
var inst_34578 = (inst_34574 == null);
var inst_34579 = cljs.core.not(inst_34578);
var state_34647__$1 = state_34647;
if(inst_34579){
var statearr_34689_35961 = state_34647__$1;
(statearr_34689_35961[(1)] = (13));

} else {
var statearr_34690_35962 = state_34647__$1;
(statearr_34690_35962[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (9))){
var inst_34549 = (state_34647[(8)]);
var state_34647__$1 = state_34647;
var statearr_34691_35965 = state_34647__$1;
(statearr_34691_35965[(2)] = inst_34549);

(statearr_34691_35965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (5))){
var state_34647__$1 = state_34647;
var statearr_34692_35966 = state_34647__$1;
(statearr_34692_35966[(2)] = true);

(statearr_34692_35966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (14))){
var state_34647__$1 = state_34647;
var statearr_34693_35967 = state_34647__$1;
(statearr_34693_35967[(2)] = false);

(statearr_34693_35967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (26))){
var inst_34607 = (state_34647[(10)]);
var inst_34614 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34607);
var state_34647__$1 = state_34647;
var statearr_34694_35968 = state_34647__$1;
(statearr_34694_35968[(2)] = inst_34614);

(statearr_34694_35968[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (16))){
var state_34647__$1 = state_34647;
var statearr_34695_35969 = state_34647__$1;
(statearr_34695_35969[(2)] = true);

(statearr_34695_35969[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (38))){
var inst_34637 = (state_34647[(2)]);
var state_34647__$1 = state_34647;
var statearr_34696_35970 = state_34647__$1;
(statearr_34696_35970[(2)] = inst_34637);

(statearr_34696_35970[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (30))){
var inst_34599 = (state_34647[(13)]);
var inst_34607 = (state_34647[(10)]);
var inst_34598 = (state_34647[(11)]);
var inst_34624 = cljs.core.empty_QMARK_(inst_34598);
var inst_34625 = (inst_34599.cljs$core$IFn$_invoke$arity$1 ? inst_34599.cljs$core$IFn$_invoke$arity$1(inst_34607) : inst_34599.call(null,inst_34607));
var inst_34626 = cljs.core.not(inst_34625);
var inst_34627 = ((inst_34624) && (inst_34626));
var state_34647__$1 = state_34647;
var statearr_34697_35971 = state_34647__$1;
(statearr_34697_35971[(2)] = inst_34627);

(statearr_34697_35971[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (10))){
var inst_34549 = (state_34647[(8)]);
var inst_34570 = (state_34647[(2)]);
var inst_34571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34570,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34570,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34573 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34570,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34574 = inst_34549;
var state_34647__$1 = (function (){var statearr_34698 = state_34647;
(statearr_34698[(16)] = inst_34571);

(statearr_34698[(7)] = inst_34574);

(statearr_34698[(17)] = inst_34572);

(statearr_34698[(18)] = inst_34573);

return statearr_34698;
})();
var statearr_34699_35973 = state_34647__$1;
(statearr_34699_35973[(2)] = null);

(statearr_34699_35973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (18))){
var inst_34589 = (state_34647[(2)]);
var state_34647__$1 = state_34647;
var statearr_34700_35974 = state_34647__$1;
(statearr_34700_35974[(2)] = inst_34589);

(statearr_34700_35974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (37))){
var state_34647__$1 = state_34647;
var statearr_34701_35975 = state_34647__$1;
(statearr_34701_35975[(2)] = null);

(statearr_34701_35975[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34648 === (8))){
var inst_34549 = (state_34647[(8)]);
var inst_34567 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34549);
var state_34647__$1 = state_34647;
var statearr_34702_35976 = state_34647__$1;
(statearr_34702_35976[(2)] = inst_34567);

(statearr_34702_35976[(1)] = (10));


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
});})(c__33853__auto___35894,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33674__auto__,c__33853__auto___35894,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33675__auto__ = null;
var cljs$core$async$mix_$_state_machine__33675__auto____0 = (function (){
var statearr_34703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34703[(0)] = cljs$core$async$mix_$_state_machine__33675__auto__);

(statearr_34703[(1)] = (1));

return statearr_34703;
});
var cljs$core$async$mix_$_state_machine__33675__auto____1 = (function (state_34647){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_34647);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e34704){if((e34704 instanceof Object)){
var ex__33678__auto__ = e34704;
var statearr_34705_35981 = state_34647;
(statearr_34705_35981[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34704;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35982 = state_34647;
state_34647 = G__35982;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33675__auto__ = function(state_34647){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33675__auto____1.call(this,state_34647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33675__auto____0;
cljs$core$async$mix_$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33675__auto____1;
return cljs$core$async$mix_$_state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto___35894,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33855__auto__ = (function (){var statearr_34706 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_34706[(6)] = c__33853__auto___35894);

return statearr_34706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto___35894,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


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
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
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
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34708 = arguments.length;
switch (G__34708) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__34711 = arguments.length;
switch (G__34711) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__34709_SHARP_){
if(cljs.core.truth_((p1__34709_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34709_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34709_SHARP_.call(null,topic)))){
return p1__34709_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34709_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34712 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34713){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34713 = meta34713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34714,meta34713__$1){
var self__ = this;
var _34714__$1 = this;
return (new cljs.core.async.t_cljs$core$async34712(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34713__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34712.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34714){
var self__ = this;
var _34714__$1 = this;
return self__.meta34713;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34712.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34712.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34712.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34712.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34712.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34712.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34712.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34712.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34713","meta34713",-159488635,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34712.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34712";

cljs.core.async.t_cljs$core$async34712.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34712");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34712.
 */
cljs.core.async.__GT_t_cljs$core$async34712 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34712(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34713){
return (new cljs.core.async.t_cljs$core$async34712(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34713));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34712(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33853__auto___36018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto___36018,mults,ensure_mult,p){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto___36018,mults,ensure_mult,p){
return (function (state_34786){
var state_val_34787 = (state_34786[(1)]);
if((state_val_34787 === (7))){
var inst_34782 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
var statearr_34788_36021 = state_34786__$1;
(statearr_34788_36021[(2)] = inst_34782);

(statearr_34788_36021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (20))){
var state_34786__$1 = state_34786;
var statearr_34789_36023 = state_34786__$1;
(statearr_34789_36023[(2)] = null);

(statearr_34789_36023[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (1))){
var state_34786__$1 = state_34786;
var statearr_34790_36024 = state_34786__$1;
(statearr_34790_36024[(2)] = null);

(statearr_34790_36024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (24))){
var inst_34765 = (state_34786[(7)]);
var inst_34774 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34765);
var state_34786__$1 = state_34786;
var statearr_34791_36027 = state_34786__$1;
(statearr_34791_36027[(2)] = inst_34774);

(statearr_34791_36027[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (4))){
var inst_34717 = (state_34786[(8)]);
var inst_34717__$1 = (state_34786[(2)]);
var inst_34718 = (inst_34717__$1 == null);
var state_34786__$1 = (function (){var statearr_34792 = state_34786;
(statearr_34792[(8)] = inst_34717__$1);

return statearr_34792;
})();
if(cljs.core.truth_(inst_34718)){
var statearr_34793_36029 = state_34786__$1;
(statearr_34793_36029[(1)] = (5));

} else {
var statearr_34794_36030 = state_34786__$1;
(statearr_34794_36030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (15))){
var inst_34759 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
var statearr_34795_36031 = state_34786__$1;
(statearr_34795_36031[(2)] = inst_34759);

(statearr_34795_36031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (21))){
var inst_34779 = (state_34786[(2)]);
var state_34786__$1 = (function (){var statearr_34796 = state_34786;
(statearr_34796[(9)] = inst_34779);

return statearr_34796;
})();
var statearr_34797_36032 = state_34786__$1;
(statearr_34797_36032[(2)] = null);

(statearr_34797_36032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (13))){
var inst_34741 = (state_34786[(10)]);
var inst_34743 = cljs.core.chunked_seq_QMARK_(inst_34741);
var state_34786__$1 = state_34786;
if(inst_34743){
var statearr_34798_36037 = state_34786__$1;
(statearr_34798_36037[(1)] = (16));

} else {
var statearr_34799_36038 = state_34786__$1;
(statearr_34799_36038[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (22))){
var inst_34771 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
if(cljs.core.truth_(inst_34771)){
var statearr_34800_36039 = state_34786__$1;
(statearr_34800_36039[(1)] = (23));

} else {
var statearr_34801_36040 = state_34786__$1;
(statearr_34801_36040[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (6))){
var inst_34767 = (state_34786[(11)]);
var inst_34717 = (state_34786[(8)]);
var inst_34765 = (state_34786[(7)]);
var inst_34765__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34717) : topic_fn.call(null,inst_34717));
var inst_34766 = cljs.core.deref(mults);
var inst_34767__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34766,inst_34765__$1);
var state_34786__$1 = (function (){var statearr_34802 = state_34786;
(statearr_34802[(11)] = inst_34767__$1);

(statearr_34802[(7)] = inst_34765__$1);

return statearr_34802;
})();
if(cljs.core.truth_(inst_34767__$1)){
var statearr_34803_36042 = state_34786__$1;
(statearr_34803_36042[(1)] = (19));

} else {
var statearr_34804_36043 = state_34786__$1;
(statearr_34804_36043[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (25))){
var inst_34776 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
var statearr_34805_36044 = state_34786__$1;
(statearr_34805_36044[(2)] = inst_34776);

(statearr_34805_36044[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (17))){
var inst_34741 = (state_34786[(10)]);
var inst_34750 = cljs.core.first(inst_34741);
var inst_34751 = cljs.core.async.muxch_STAR_(inst_34750);
var inst_34752 = cljs.core.async.close_BANG_(inst_34751);
var inst_34753 = cljs.core.next(inst_34741);
var inst_34727 = inst_34753;
var inst_34728 = null;
var inst_34729 = (0);
var inst_34730 = (0);
var state_34786__$1 = (function (){var statearr_34806 = state_34786;
(statearr_34806[(12)] = inst_34727);

(statearr_34806[(13)] = inst_34730);

(statearr_34806[(14)] = inst_34728);

(statearr_34806[(15)] = inst_34752);

(statearr_34806[(16)] = inst_34729);

return statearr_34806;
})();
var statearr_34807_36049 = state_34786__$1;
(statearr_34807_36049[(2)] = null);

(statearr_34807_36049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (3))){
var inst_34784 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34786__$1,inst_34784);
} else {
if((state_val_34787 === (12))){
var inst_34761 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
var statearr_34808_36051 = state_34786__$1;
(statearr_34808_36051[(2)] = inst_34761);

(statearr_34808_36051[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (2))){
var state_34786__$1 = state_34786;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34786__$1,(4),ch);
} else {
if((state_val_34787 === (23))){
var state_34786__$1 = state_34786;
var statearr_34809_36052 = state_34786__$1;
(statearr_34809_36052[(2)] = null);

(statearr_34809_36052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (19))){
var inst_34767 = (state_34786[(11)]);
var inst_34717 = (state_34786[(8)]);
var inst_34769 = cljs.core.async.muxch_STAR_(inst_34767);
var state_34786__$1 = state_34786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34786__$1,(22),inst_34769,inst_34717);
} else {
if((state_val_34787 === (11))){
var inst_34727 = (state_34786[(12)]);
var inst_34741 = (state_34786[(10)]);
var inst_34741__$1 = cljs.core.seq(inst_34727);
var state_34786__$1 = (function (){var statearr_34810 = state_34786;
(statearr_34810[(10)] = inst_34741__$1);

return statearr_34810;
})();
if(inst_34741__$1){
var statearr_34811_36053 = state_34786__$1;
(statearr_34811_36053[(1)] = (13));

} else {
var statearr_34812_36054 = state_34786__$1;
(statearr_34812_36054[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (9))){
var inst_34763 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
var statearr_34813_36056 = state_34786__$1;
(statearr_34813_36056[(2)] = inst_34763);

(statearr_34813_36056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (5))){
var inst_34724 = cljs.core.deref(mults);
var inst_34725 = cljs.core.vals(inst_34724);
var inst_34726 = cljs.core.seq(inst_34725);
var inst_34727 = inst_34726;
var inst_34728 = null;
var inst_34729 = (0);
var inst_34730 = (0);
var state_34786__$1 = (function (){var statearr_34814 = state_34786;
(statearr_34814[(12)] = inst_34727);

(statearr_34814[(13)] = inst_34730);

(statearr_34814[(14)] = inst_34728);

(statearr_34814[(16)] = inst_34729);

return statearr_34814;
})();
var statearr_34815_36057 = state_34786__$1;
(statearr_34815_36057[(2)] = null);

(statearr_34815_36057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (14))){
var state_34786__$1 = state_34786;
var statearr_34819_36059 = state_34786__$1;
(statearr_34819_36059[(2)] = null);

(statearr_34819_36059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (16))){
var inst_34741 = (state_34786[(10)]);
var inst_34745 = cljs.core.chunk_first(inst_34741);
var inst_34746 = cljs.core.chunk_rest(inst_34741);
var inst_34747 = cljs.core.count(inst_34745);
var inst_34727 = inst_34746;
var inst_34728 = inst_34745;
var inst_34729 = inst_34747;
var inst_34730 = (0);
var state_34786__$1 = (function (){var statearr_34820 = state_34786;
(statearr_34820[(12)] = inst_34727);

(statearr_34820[(13)] = inst_34730);

(statearr_34820[(14)] = inst_34728);

(statearr_34820[(16)] = inst_34729);

return statearr_34820;
})();
var statearr_34821_36063 = state_34786__$1;
(statearr_34821_36063[(2)] = null);

(statearr_34821_36063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (10))){
var inst_34727 = (state_34786[(12)]);
var inst_34730 = (state_34786[(13)]);
var inst_34728 = (state_34786[(14)]);
var inst_34729 = (state_34786[(16)]);
var inst_34735 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34728,inst_34730);
var inst_34736 = cljs.core.async.muxch_STAR_(inst_34735);
var inst_34737 = cljs.core.async.close_BANG_(inst_34736);
var inst_34738 = (inst_34730 + (1));
var tmp34816 = inst_34727;
var tmp34817 = inst_34728;
var tmp34818 = inst_34729;
var inst_34727__$1 = tmp34816;
var inst_34728__$1 = tmp34817;
var inst_34729__$1 = tmp34818;
var inst_34730__$1 = inst_34738;
var state_34786__$1 = (function (){var statearr_34822 = state_34786;
(statearr_34822[(12)] = inst_34727__$1);

(statearr_34822[(13)] = inst_34730__$1);

(statearr_34822[(17)] = inst_34737);

(statearr_34822[(14)] = inst_34728__$1);

(statearr_34822[(16)] = inst_34729__$1);

return statearr_34822;
})();
var statearr_34823_36064 = state_34786__$1;
(statearr_34823_36064[(2)] = null);

(statearr_34823_36064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (18))){
var inst_34756 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
var statearr_34824_36065 = state_34786__$1;
(statearr_34824_36065[(2)] = inst_34756);

(statearr_34824_36065[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (8))){
var inst_34730 = (state_34786[(13)]);
var inst_34729 = (state_34786[(16)]);
var inst_34732 = (inst_34730 < inst_34729);
var inst_34733 = inst_34732;
var state_34786__$1 = state_34786;
if(cljs.core.truth_(inst_34733)){
var statearr_34825_36066 = state_34786__$1;
(statearr_34825_36066[(1)] = (10));

} else {
var statearr_34826_36067 = state_34786__$1;
(statearr_34826_36067[(1)] = (11));

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
});})(c__33853__auto___36018,mults,ensure_mult,p))
;
return ((function (switch__33674__auto__,c__33853__auto___36018,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33675__auto__ = null;
var cljs$core$async$state_machine__33675__auto____0 = (function (){
var statearr_34827 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34827[(0)] = cljs$core$async$state_machine__33675__auto__);

(statearr_34827[(1)] = (1));

return statearr_34827;
});
var cljs$core$async$state_machine__33675__auto____1 = (function (state_34786){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_34786);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e34828){if((e34828 instanceof Object)){
var ex__33678__auto__ = e34828;
var statearr_34829_36069 = state_34786;
(statearr_34829_36069[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34828;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36070 = state_34786;
state_34786 = G__36070;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$state_machine__33675__auto__ = function(state_34786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33675__auto____1.call(this,state_34786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33675__auto____0;
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33675__auto____1;
return cljs$core$async$state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto___36018,mults,ensure_mult,p))
})();
var state__33855__auto__ = (function (){var statearr_34830 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_34830[(6)] = c__33853__auto___36018);

return statearr_34830;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto___36018,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34832 = arguments.length;
switch (G__34832) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

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
var G__34834 = arguments.length;
switch (G__34834) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__34836 = arguments.length;
switch (G__34836) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33853__auto___36081 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto___36081,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto___36081,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34875){
var state_val_34876 = (state_34875[(1)]);
if((state_val_34876 === (7))){
var state_34875__$1 = state_34875;
var statearr_34877_36082 = state_34875__$1;
(statearr_34877_36082[(2)] = null);

(statearr_34877_36082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (1))){
var state_34875__$1 = state_34875;
var statearr_34878_36083 = state_34875__$1;
(statearr_34878_36083[(2)] = null);

(statearr_34878_36083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (4))){
var inst_34839 = (state_34875[(7)]);
var inst_34841 = (inst_34839 < cnt);
var state_34875__$1 = state_34875;
if(cljs.core.truth_(inst_34841)){
var statearr_34879_36084 = state_34875__$1;
(statearr_34879_36084[(1)] = (6));

} else {
var statearr_34880_36085 = state_34875__$1;
(statearr_34880_36085[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (15))){
var inst_34871 = (state_34875[(2)]);
var state_34875__$1 = state_34875;
var statearr_34881_36087 = state_34875__$1;
(statearr_34881_36087[(2)] = inst_34871);

(statearr_34881_36087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (13))){
var inst_34864 = cljs.core.async.close_BANG_(out);
var state_34875__$1 = state_34875;
var statearr_34882_36088 = state_34875__$1;
(statearr_34882_36088[(2)] = inst_34864);

(statearr_34882_36088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (6))){
var state_34875__$1 = state_34875;
var statearr_34883_36089 = state_34875__$1;
(statearr_34883_36089[(2)] = null);

(statearr_34883_36089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (3))){
var inst_34873 = (state_34875[(2)]);
var state_34875__$1 = state_34875;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34875__$1,inst_34873);
} else {
if((state_val_34876 === (12))){
var inst_34861 = (state_34875[(8)]);
var inst_34861__$1 = (state_34875[(2)]);
var inst_34862 = cljs.core.some(cljs.core.nil_QMARK_,inst_34861__$1);
var state_34875__$1 = (function (){var statearr_34884 = state_34875;
(statearr_34884[(8)] = inst_34861__$1);

return statearr_34884;
})();
if(cljs.core.truth_(inst_34862)){
var statearr_34885_36091 = state_34875__$1;
(statearr_34885_36091[(1)] = (13));

} else {
var statearr_34886_36092 = state_34875__$1;
(statearr_34886_36092[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (2))){
var inst_34838 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34839 = (0);
var state_34875__$1 = (function (){var statearr_34887 = state_34875;
(statearr_34887[(9)] = inst_34838);

(statearr_34887[(7)] = inst_34839);

return statearr_34887;
})();
var statearr_34888_36094 = state_34875__$1;
(statearr_34888_36094[(2)] = null);

(statearr_34888_36094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (11))){
var inst_34839 = (state_34875[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_34875,(10),Object,null,(9));
var inst_34848 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34839) : chs__$1.call(null,inst_34839));
var inst_34849 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34839) : done.call(null,inst_34839));
var inst_34850 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34848,inst_34849);
var state_34875__$1 = state_34875;
var statearr_34889_36096 = state_34875__$1;
(statearr_34889_36096[(2)] = inst_34850);


cljs.core.async.impl.ioc_helpers.process_exception(state_34875__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (9))){
var inst_34839 = (state_34875[(7)]);
var inst_34852 = (state_34875[(2)]);
var inst_34853 = (inst_34839 + (1));
var inst_34839__$1 = inst_34853;
var state_34875__$1 = (function (){var statearr_34890 = state_34875;
(statearr_34890[(10)] = inst_34852);

(statearr_34890[(7)] = inst_34839__$1);

return statearr_34890;
})();
var statearr_34891_36101 = state_34875__$1;
(statearr_34891_36101[(2)] = null);

(statearr_34891_36101[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (5))){
var inst_34859 = (state_34875[(2)]);
var state_34875__$1 = (function (){var statearr_34892 = state_34875;
(statearr_34892[(11)] = inst_34859);

return statearr_34892;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34875__$1,(12),dchan);
} else {
if((state_val_34876 === (14))){
var inst_34861 = (state_34875[(8)]);
var inst_34866 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34861);
var state_34875__$1 = state_34875;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34875__$1,(16),out,inst_34866);
} else {
if((state_val_34876 === (16))){
var inst_34868 = (state_34875[(2)]);
var state_34875__$1 = (function (){var statearr_34893 = state_34875;
(statearr_34893[(12)] = inst_34868);

return statearr_34893;
})();
var statearr_34894_36103 = state_34875__$1;
(statearr_34894_36103[(2)] = null);

(statearr_34894_36103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (10))){
var inst_34843 = (state_34875[(2)]);
var inst_34844 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34875__$1 = (function (){var statearr_34895 = state_34875;
(statearr_34895[(13)] = inst_34843);

return statearr_34895;
})();
var statearr_34896_36104 = state_34875__$1;
(statearr_34896_36104[(2)] = inst_34844);


cljs.core.async.impl.ioc_helpers.process_exception(state_34875__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34876 === (8))){
var inst_34857 = (state_34875[(2)]);
var state_34875__$1 = state_34875;
var statearr_34897_36106 = state_34875__$1;
(statearr_34897_36106[(2)] = inst_34857);

(statearr_34897_36106[(1)] = (5));


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
});})(c__33853__auto___36081,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33674__auto__,c__33853__auto___36081,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33675__auto__ = null;
var cljs$core$async$state_machine__33675__auto____0 = (function (){
var statearr_34898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34898[(0)] = cljs$core$async$state_machine__33675__auto__);

(statearr_34898[(1)] = (1));

return statearr_34898;
});
var cljs$core$async$state_machine__33675__auto____1 = (function (state_34875){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_34875);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e34899){if((e34899 instanceof Object)){
var ex__33678__auto__ = e34899;
var statearr_34900_36111 = state_34875;
(statearr_34900_36111[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34899;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36112 = state_34875;
state_34875 = G__36112;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$state_machine__33675__auto__ = function(state_34875){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33675__auto____1.call(this,state_34875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33675__auto____0;
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33675__auto____1;
return cljs$core$async$state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto___36081,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33855__auto__ = (function (){var statearr_34901 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_34901[(6)] = c__33853__auto___36081);

return statearr_34901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto___36081,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34904 = arguments.length;
switch (G__34904) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33853__auto___36114 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto___36114,out){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto___36114,out){
return (function (state_34936){
var state_val_34937 = (state_34936[(1)]);
if((state_val_34937 === (7))){
var inst_34915 = (state_34936[(7)]);
var inst_34916 = (state_34936[(8)]);
var inst_34915__$1 = (state_34936[(2)]);
var inst_34916__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34915__$1,(0),null);
var inst_34917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34915__$1,(1),null);
var inst_34918 = (inst_34916__$1 == null);
var state_34936__$1 = (function (){var statearr_34938 = state_34936;
(statearr_34938[(7)] = inst_34915__$1);

(statearr_34938[(8)] = inst_34916__$1);

(statearr_34938[(9)] = inst_34917);

return statearr_34938;
})();
if(cljs.core.truth_(inst_34918)){
var statearr_34939_36115 = state_34936__$1;
(statearr_34939_36115[(1)] = (8));

} else {
var statearr_34940_36116 = state_34936__$1;
(statearr_34940_36116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (1))){
var inst_34905 = cljs.core.vec(chs);
var inst_34906 = inst_34905;
var state_34936__$1 = (function (){var statearr_34941 = state_34936;
(statearr_34941[(10)] = inst_34906);

return statearr_34941;
})();
var statearr_34942_36117 = state_34936__$1;
(statearr_34942_36117[(2)] = null);

(statearr_34942_36117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (4))){
var inst_34906 = (state_34936[(10)]);
var state_34936__$1 = state_34936;
return cljs.core.async.ioc_alts_BANG_(state_34936__$1,(7),inst_34906);
} else {
if((state_val_34937 === (6))){
var inst_34932 = (state_34936[(2)]);
var state_34936__$1 = state_34936;
var statearr_34943_36118 = state_34936__$1;
(statearr_34943_36118[(2)] = inst_34932);

(statearr_34943_36118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (3))){
var inst_34934 = (state_34936[(2)]);
var state_34936__$1 = state_34936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34936__$1,inst_34934);
} else {
if((state_val_34937 === (2))){
var inst_34906 = (state_34936[(10)]);
var inst_34908 = cljs.core.count(inst_34906);
var inst_34909 = (inst_34908 > (0));
var state_34936__$1 = state_34936;
if(cljs.core.truth_(inst_34909)){
var statearr_34945_36120 = state_34936__$1;
(statearr_34945_36120[(1)] = (4));

} else {
var statearr_34946_36121 = state_34936__$1;
(statearr_34946_36121[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (11))){
var inst_34906 = (state_34936[(10)]);
var inst_34925 = (state_34936[(2)]);
var tmp34944 = inst_34906;
var inst_34906__$1 = tmp34944;
var state_34936__$1 = (function (){var statearr_34947 = state_34936;
(statearr_34947[(11)] = inst_34925);

(statearr_34947[(10)] = inst_34906__$1);

return statearr_34947;
})();
var statearr_34948_36122 = state_34936__$1;
(statearr_34948_36122[(2)] = null);

(statearr_34948_36122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (9))){
var inst_34916 = (state_34936[(8)]);
var state_34936__$1 = state_34936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34936__$1,(11),out,inst_34916);
} else {
if((state_val_34937 === (5))){
var inst_34930 = cljs.core.async.close_BANG_(out);
var state_34936__$1 = state_34936;
var statearr_34949_36123 = state_34936__$1;
(statearr_34949_36123[(2)] = inst_34930);

(statearr_34949_36123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (10))){
var inst_34928 = (state_34936[(2)]);
var state_34936__$1 = state_34936;
var statearr_34950_36124 = state_34936__$1;
(statearr_34950_36124[(2)] = inst_34928);

(statearr_34950_36124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (8))){
var inst_34906 = (state_34936[(10)]);
var inst_34915 = (state_34936[(7)]);
var inst_34916 = (state_34936[(8)]);
var inst_34917 = (state_34936[(9)]);
var inst_34920 = (function (){var cs = inst_34906;
var vec__34911 = inst_34915;
var v = inst_34916;
var c = inst_34917;
return ((function (cs,vec__34911,v,c,inst_34906,inst_34915,inst_34916,inst_34917,state_val_34937,c__33853__auto___36114,out){
return (function (p1__34902_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34902_SHARP_);
});
;})(cs,vec__34911,v,c,inst_34906,inst_34915,inst_34916,inst_34917,state_val_34937,c__33853__auto___36114,out))
})();
var inst_34921 = cljs.core.filterv(inst_34920,inst_34906);
var inst_34906__$1 = inst_34921;
var state_34936__$1 = (function (){var statearr_34951 = state_34936;
(statearr_34951[(10)] = inst_34906__$1);

return statearr_34951;
})();
var statearr_34952_36132 = state_34936__$1;
(statearr_34952_36132[(2)] = null);

(statearr_34952_36132[(1)] = (2));


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
});})(c__33853__auto___36114,out))
;
return ((function (switch__33674__auto__,c__33853__auto___36114,out){
return (function() {
var cljs$core$async$state_machine__33675__auto__ = null;
var cljs$core$async$state_machine__33675__auto____0 = (function (){
var statearr_34953 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34953[(0)] = cljs$core$async$state_machine__33675__auto__);

(statearr_34953[(1)] = (1));

return statearr_34953;
});
var cljs$core$async$state_machine__33675__auto____1 = (function (state_34936){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_34936);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e34954){if((e34954 instanceof Object)){
var ex__33678__auto__ = e34954;
var statearr_34955_36133 = state_34936;
(statearr_34955_36133[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34954;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36134 = state_34936;
state_34936 = G__36134;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$state_machine__33675__auto__ = function(state_34936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33675__auto____1.call(this,state_34936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33675__auto____0;
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33675__auto____1;
return cljs$core$async$state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto___36114,out))
})();
var state__33855__auto__ = (function (){var statearr_34956 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_34956[(6)] = c__33853__auto___36114);

return statearr_34956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto___36114,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

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
var G__34958 = arguments.length;
switch (G__34958) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33853__auto___36136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto___36136,out){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto___36136,out){
return (function (state_34982){
var state_val_34983 = (state_34982[(1)]);
if((state_val_34983 === (7))){
var inst_34964 = (state_34982[(7)]);
var inst_34964__$1 = (state_34982[(2)]);
var inst_34965 = (inst_34964__$1 == null);
var inst_34966 = cljs.core.not(inst_34965);
var state_34982__$1 = (function (){var statearr_34984 = state_34982;
(statearr_34984[(7)] = inst_34964__$1);

return statearr_34984;
})();
if(inst_34966){
var statearr_34985_36137 = state_34982__$1;
(statearr_34985_36137[(1)] = (8));

} else {
var statearr_34986_36139 = state_34982__$1;
(statearr_34986_36139[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (1))){
var inst_34959 = (0);
var state_34982__$1 = (function (){var statearr_34987 = state_34982;
(statearr_34987[(8)] = inst_34959);

return statearr_34987;
})();
var statearr_34988_36142 = state_34982__$1;
(statearr_34988_36142[(2)] = null);

(statearr_34988_36142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (4))){
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34982__$1,(7),ch);
} else {
if((state_val_34983 === (6))){
var inst_34977 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_34989_36143 = state_34982__$1;
(statearr_34989_36143[(2)] = inst_34977);

(statearr_34989_36143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (3))){
var inst_34979 = (state_34982[(2)]);
var inst_34980 = cljs.core.async.close_BANG_(out);
var state_34982__$1 = (function (){var statearr_34990 = state_34982;
(statearr_34990[(9)] = inst_34979);

return statearr_34990;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34982__$1,inst_34980);
} else {
if((state_val_34983 === (2))){
var inst_34959 = (state_34982[(8)]);
var inst_34961 = (inst_34959 < n);
var state_34982__$1 = state_34982;
if(cljs.core.truth_(inst_34961)){
var statearr_34991_36144 = state_34982__$1;
(statearr_34991_36144[(1)] = (4));

} else {
var statearr_34992_36146 = state_34982__$1;
(statearr_34992_36146[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (11))){
var inst_34959 = (state_34982[(8)]);
var inst_34969 = (state_34982[(2)]);
var inst_34970 = (inst_34959 + (1));
var inst_34959__$1 = inst_34970;
var state_34982__$1 = (function (){var statearr_34993 = state_34982;
(statearr_34993[(10)] = inst_34969);

(statearr_34993[(8)] = inst_34959__$1);

return statearr_34993;
})();
var statearr_34994_36147 = state_34982__$1;
(statearr_34994_36147[(2)] = null);

(statearr_34994_36147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (9))){
var state_34982__$1 = state_34982;
var statearr_34995_36148 = state_34982__$1;
(statearr_34995_36148[(2)] = null);

(statearr_34995_36148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (5))){
var state_34982__$1 = state_34982;
var statearr_34996_36149 = state_34982__$1;
(statearr_34996_36149[(2)] = null);

(statearr_34996_36149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (10))){
var inst_34974 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_34997_36150 = state_34982__$1;
(statearr_34997_36150[(2)] = inst_34974);

(statearr_34997_36150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (8))){
var inst_34964 = (state_34982[(7)]);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34982__$1,(11),out,inst_34964);
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
});})(c__33853__auto___36136,out))
;
return ((function (switch__33674__auto__,c__33853__auto___36136,out){
return (function() {
var cljs$core$async$state_machine__33675__auto__ = null;
var cljs$core$async$state_machine__33675__auto____0 = (function (){
var statearr_34998 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34998[(0)] = cljs$core$async$state_machine__33675__auto__);

(statearr_34998[(1)] = (1));

return statearr_34998;
});
var cljs$core$async$state_machine__33675__auto____1 = (function (state_34982){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_34982);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e34999){if((e34999 instanceof Object)){
var ex__33678__auto__ = e34999;
var statearr_35000_36152 = state_34982;
(statearr_35000_36152[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34999;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36153 = state_34982;
state_34982 = G__36153;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$state_machine__33675__auto__ = function(state_34982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33675__auto____1.call(this,state_34982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33675__auto____0;
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33675__auto____1;
return cljs$core$async$state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto___36136,out))
})();
var state__33855__auto__ = (function (){var statearr_35001 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_35001[(6)] = c__33853__auto___36136);

return statearr_35001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto___36136,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35003 = (function (f,ch,meta35004){
this.f = f;
this.ch = ch;
this.meta35004 = meta35004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35005,meta35004__$1){
var self__ = this;
var _35005__$1 = this;
return (new cljs.core.async.t_cljs$core$async35003(self__.f,self__.ch,meta35004__$1));
});

cljs.core.async.t_cljs$core$async35003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35005){
var self__ = this;
var _35005__$1 = this;
return self__.meta35004;
});

cljs.core.async.t_cljs$core$async35003.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35003.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async35003.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async35003.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35003.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35006 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35006 = (function (f,ch,meta35004,_,fn1,meta35007){
this.f = f;
this.ch = ch;
this.meta35004 = meta35004;
this._ = _;
this.fn1 = fn1;
this.meta35007 = meta35007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35008,meta35007__$1){
var self__ = this;
var _35008__$1 = this;
return (new cljs.core.async.t_cljs$core$async35006(self__.f,self__.ch,self__.meta35004,self__._,self__.fn1,meta35007__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35008){
var self__ = this;
var _35008__$1 = this;
return self__.meta35007;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35006.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35006.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35006.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35006.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35002_SHARP_){
var G__35009 = (((p1__35002_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35002_SHARP_) : self__.f.call(null,p1__35002_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35009) : f1.call(null,G__35009));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35006.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35004","meta35004",-427243858,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35003","cljs.core.async/t_cljs$core$async35003",1045259854,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35007","meta35007",843836071,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35006.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35006";

cljs.core.async.t_cljs$core$async35006.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async35006");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35006.
 */
cljs.core.async.__GT_t_cljs$core$async35006 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35006(f__$1,ch__$1,meta35004__$1,___$2,fn1__$1,meta35007){
return (new cljs.core.async.t_cljs$core$async35006(f__$1,ch__$1,meta35004__$1,___$2,fn1__$1,meta35007));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35006(self__.f,self__.ch,self__.meta35004,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35010 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35010) : self__.f.call(null,G__35010));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35003.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35003.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35003.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35004","meta35004",-427243858,null)], null);
});

cljs.core.async.t_cljs$core$async35003.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35003";

cljs.core.async.t_cljs$core$async35003.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async35003");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35003.
 */
cljs.core.async.__GT_t_cljs$core$async35003 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35003(f__$1,ch__$1,meta35004){
return (new cljs.core.async.t_cljs$core$async35003(f__$1,ch__$1,meta35004));
});

}

return (new cljs.core.async.t_cljs$core$async35003(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35011 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35011 = (function (f,ch,meta35012){
this.f = f;
this.ch = ch;
this.meta35012 = meta35012;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35013,meta35012__$1){
var self__ = this;
var _35013__$1 = this;
return (new cljs.core.async.t_cljs$core$async35011(self__.f,self__.ch,meta35012__$1));
});

cljs.core.async.t_cljs$core$async35011.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35013){
var self__ = this;
var _35013__$1 = this;
return self__.meta35012;
});

cljs.core.async.t_cljs$core$async35011.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35011.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async35011.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35011.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35011.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35011.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async35011.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35012","meta35012",-1025951994,null)], null);
});

cljs.core.async.t_cljs$core$async35011.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35011.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35011";

cljs.core.async.t_cljs$core$async35011.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async35011");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35011.
 */
cljs.core.async.__GT_t_cljs$core$async35011 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35011(f__$1,ch__$1,meta35012){
return (new cljs.core.async.t_cljs$core$async35011(f__$1,ch__$1,meta35012));
});

}

return (new cljs.core.async.t_cljs$core$async35011(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35014 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35014 = (function (p,ch,meta35015){
this.p = p;
this.ch = ch;
this.meta35015 = meta35015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35016,meta35015__$1){
var self__ = this;
var _35016__$1 = this;
return (new cljs.core.async.t_cljs$core$async35014(self__.p,self__.ch,meta35015__$1));
});

cljs.core.async.t_cljs$core$async35014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35016){
var self__ = this;
var _35016__$1 = this;
return self__.meta35015;
});

cljs.core.async.t_cljs$core$async35014.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35014.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async35014.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async35014.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35014.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35014.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35014.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35015","meta35015",1186865732,null)], null);
});

cljs.core.async.t_cljs$core$async35014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35014";

cljs.core.async.t_cljs$core$async35014.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async35014");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35014.
 */
cljs.core.async.__GT_t_cljs$core$async35014 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35014(p__$1,ch__$1,meta35015){
return (new cljs.core.async.t_cljs$core$async35014(p__$1,ch__$1,meta35015));
});

}

return (new cljs.core.async.t_cljs$core$async35014(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35018 = arguments.length;
switch (G__35018) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33853__auto___36172 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto___36172,out){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto___36172,out){
return (function (state_35039){
var state_val_35040 = (state_35039[(1)]);
if((state_val_35040 === (7))){
var inst_35035 = (state_35039[(2)]);
var state_35039__$1 = state_35039;
var statearr_35041_36173 = state_35039__$1;
(statearr_35041_36173[(2)] = inst_35035);

(statearr_35041_36173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (1))){
var state_35039__$1 = state_35039;
var statearr_35042_36177 = state_35039__$1;
(statearr_35042_36177[(2)] = null);

(statearr_35042_36177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (4))){
var inst_35021 = (state_35039[(7)]);
var inst_35021__$1 = (state_35039[(2)]);
var inst_35022 = (inst_35021__$1 == null);
var state_35039__$1 = (function (){var statearr_35043 = state_35039;
(statearr_35043[(7)] = inst_35021__$1);

return statearr_35043;
})();
if(cljs.core.truth_(inst_35022)){
var statearr_35044_36178 = state_35039__$1;
(statearr_35044_36178[(1)] = (5));

} else {
var statearr_35045_36179 = state_35039__$1;
(statearr_35045_36179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (6))){
var inst_35021 = (state_35039[(7)]);
var inst_35026 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35021) : p.call(null,inst_35021));
var state_35039__$1 = state_35039;
if(cljs.core.truth_(inst_35026)){
var statearr_35046_36180 = state_35039__$1;
(statearr_35046_36180[(1)] = (8));

} else {
var statearr_35047_36181 = state_35039__$1;
(statearr_35047_36181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (3))){
var inst_35037 = (state_35039[(2)]);
var state_35039__$1 = state_35039;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35039__$1,inst_35037);
} else {
if((state_val_35040 === (2))){
var state_35039__$1 = state_35039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35039__$1,(4),ch);
} else {
if((state_val_35040 === (11))){
var inst_35029 = (state_35039[(2)]);
var state_35039__$1 = state_35039;
var statearr_35048_36182 = state_35039__$1;
(statearr_35048_36182[(2)] = inst_35029);

(statearr_35048_36182[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (9))){
var state_35039__$1 = state_35039;
var statearr_35049_36183 = state_35039__$1;
(statearr_35049_36183[(2)] = null);

(statearr_35049_36183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (5))){
var inst_35024 = cljs.core.async.close_BANG_(out);
var state_35039__$1 = state_35039;
var statearr_35050_36184 = state_35039__$1;
(statearr_35050_36184[(2)] = inst_35024);

(statearr_35050_36184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (10))){
var inst_35032 = (state_35039[(2)]);
var state_35039__$1 = (function (){var statearr_35051 = state_35039;
(statearr_35051[(8)] = inst_35032);

return statearr_35051;
})();
var statearr_35052_36185 = state_35039__$1;
(statearr_35052_36185[(2)] = null);

(statearr_35052_36185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (8))){
var inst_35021 = (state_35039[(7)]);
var state_35039__$1 = state_35039;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35039__$1,(11),out,inst_35021);
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
});})(c__33853__auto___36172,out))
;
return ((function (switch__33674__auto__,c__33853__auto___36172,out){
return (function() {
var cljs$core$async$state_machine__33675__auto__ = null;
var cljs$core$async$state_machine__33675__auto____0 = (function (){
var statearr_35053 = [null,null,null,null,null,null,null,null,null];
(statearr_35053[(0)] = cljs$core$async$state_machine__33675__auto__);

(statearr_35053[(1)] = (1));

return statearr_35053;
});
var cljs$core$async$state_machine__33675__auto____1 = (function (state_35039){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_35039);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e35054){if((e35054 instanceof Object)){
var ex__33678__auto__ = e35054;
var statearr_35055_36186 = state_35039;
(statearr_35055_36186[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35054;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36187 = state_35039;
state_35039 = G__36187;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$state_machine__33675__auto__ = function(state_35039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33675__auto____1.call(this,state_35039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33675__auto____0;
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33675__auto____1;
return cljs$core$async$state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto___36172,out))
})();
var state__33855__auto__ = (function (){var statearr_35056 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_35056[(6)] = c__33853__auto___36172);

return statearr_35056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto___36172,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35058 = arguments.length;
switch (G__35058) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33853__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto__){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto__){
return (function (state_35120){
var state_val_35121 = (state_35120[(1)]);
if((state_val_35121 === (7))){
var inst_35116 = (state_35120[(2)]);
var state_35120__$1 = state_35120;
var statearr_35122_36193 = state_35120__$1;
(statearr_35122_36193[(2)] = inst_35116);

(statearr_35122_36193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35121 === (20))){
var inst_35086 = (state_35120[(7)]);
var inst_35097 = (state_35120[(2)]);
var inst_35098 = cljs.core.next(inst_35086);
var inst_35072 = inst_35098;
var inst_35073 = null;
var inst_35074 = (0);
var inst_35075 = (0);
var state_35120__$1 = (function (){var statearr_35123 = state_35120;
(statearr_35123[(8)] = inst_35097);

(statearr_35123[(9)] = inst_35074);

(statearr_35123[(10)] = inst_35072);

(statearr_35123[(11)] = inst_35073);

(statearr_35123[(12)] = inst_35075);

return statearr_35123;
})();
var statearr_35124_36197 = state_35120__$1;
(statearr_35124_36197[(2)] = null);

(statearr_35124_36197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35121 === (1))){
var state_35120__$1 = state_35120;
var statearr_35125_36198 = state_35120__$1;
(statearr_35125_36198[(2)] = null);

(statearr_35125_36198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35121 === (4))){
var inst_35061 = (state_35120[(13)]);
var inst_35061__$1 = (state_35120[(2)]);
var inst_35062 = (inst_35061__$1 == null);
var state_35120__$1 = (function (){var statearr_35126 = state_35120;
(statearr_35126[(13)] = inst_35061__$1);

return statearr_35126;
})();
if(cljs.core.truth_(inst_35062)){
var statearr_35127_36209 = state_35120__$1;
(statearr_35127_36209[(1)] = (5));

} else {
var statearr_35128_36225 = state_35120__$1;
(statearr_35128_36225[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35121 === (15))){
var state_35120__$1 = state_35120;
var statearr_35132_36226 = state_35120__$1;
(statearr_35132_36226[(2)] = null);

(statearr_35132_36226[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35121 === (21))){
var state_35120__$1 = state_35120;
var statearr_35133_36227 = state_35120__$1;
(statearr_35133_36227[(2)] = null);

(statearr_35133_36227[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35121 === (13))){
var inst_35074 = (state_35120[(9)]);
var inst_35072 = (state_35120[(10)]);
var inst_35073 = (state_35120[(11)]);
var inst_35075 = (state_35120[(12)]);
var inst_35082 = (state_35120[(2)]);
var inst_35083 = (inst_35075 + (1));
var tmp35129 = inst_35074;
var tmp35130 = inst_35072;
var tmp35131 = inst_35073;
var inst_35072__$1 = tmp35130;
var inst_35073__$1 = tmp35131;
var inst_35074__$1 = tmp35129;
var inst_35075__$1 = inst_35083;
var state_35120__$1 = (function (){var statearr_35134 = state_35120;
(statearr_35134[(9)] = inst_35074__$1);

(statearr_35134[(10)] = inst_35072__$1);

(statearr_35134[(11)] = inst_35073__$1);

(statearr_35134[(12)] = inst_35075__$1);

(statearr_35134[(14)] = inst_35082);

return statearr_35134;
})();
var statearr_35135_36228 = state_35120__$1;
(statearr_35135_36228[(2)] = null);

(statearr_35135_36228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35121 === (22))){
var state_35120__$1 = state_35120;
var statearr_35136_36229 = state_35120__$1;
(statearr_35136_36229[(2)] = null);

(statearr_35136_36229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35121 === (6))){
var inst_35061 = (state_35120[(13)]);
var inst_35070 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35061) : f.call(null,inst_35061));
var inst_35071 = cljs.core.seq(inst_35070);
var inst_35072 = inst_35071;
var inst_35073 = null;
var inst_35074 = (0);
var inst_35075 = (0);
var state_35120__$1 = (function (){var statearr_35137 = state_35120;
(statearr_35137[(9)] = inst_35074);

(statearr_35137[(10)] = inst_35072);

(statearr_35137[(11)] = inst_35073);

(statearr_35137[(12)] = inst_35075);

return statearr_35137;
})();
var statearr_35138_36230 = state_35120__$1;
(statearr_35138_36230[(2)] = null);

(statearr_35138_36230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35121 === (17))){
var inst_35086 = (state_35120[(7)]);
var inst_35090 = cljs.core.chunk_first(inst_35086);
var inst_35091 = cljs.core.chunk_rest(inst_35086);
var inst_35092 = cljs.core.count(inst_35090);
var inst_35072 = inst_35091;
var inst_35073 = inst_35090;
var inst_35074 = inst_35092;
var inst_35075 = (0);
var state_35120__$1 = (function (){var statearr_35139 = state_35120;
(statearr_35139[(9)] = inst_35074);

(statearr_35139[(10)] = inst_35072);

(statearr_35139[(11)] = inst_35073);

(statearr_35139[(12)] = inst_35075);

return statearr_35139;
})();
var statearr_35140_36237 = state_35120__$1;
(statearr_35140_36237[(2)] = null);

(statearr_35140_36237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35121 === (3))){
var inst_35118 = (state_35120[(2)]);
var state_35120__$1 = state_35120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35120__$1,inst_35118);
} else {
if((state_val_35121 === (12))){
var inst_35106 = (state_35120[(2)]);
var state_35120__$1 = state_35120;
var statearr_35141_36238 = state_35120__$1;
(statearr_35141_36238[(2)] = inst_35106);

(statearr_35141_36238[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35121 === (2))){
var state_35120__$1 = state_35120;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35120__$1,(4),in$);
} else {
if((state_val_35121 === (23))){
var inst_35114 = (state_35120[(2)]);
var state_35120__$1 = state_35120;
var statearr_35142_36239 = state_35120__$1;
(statearr_35142_36239[(2)] = inst_35114);

(statearr_35142_36239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35121 === (19))){
var inst_35101 = (state_35120[(2)]);
var state_35120__$1 = state_35120;
var statearr_35143_36240 = state_35120__$1;
(statearr_35143_36240[(2)] = inst_35101);

(statearr_35143_36240[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35121 === (11))){
var inst_35072 = (state_35120[(10)]);
var inst_35086 = (state_35120[(7)]);
var inst_35086__$1 = cljs.core.seq(inst_35072);
var state_35120__$1 = (function (){var statearr_35144 = state_35120;
(statearr_35144[(7)] = inst_35086__$1);

return statearr_35144;
})();
if(inst_35086__$1){
var statearr_35145_36241 = state_35120__$1;
(statearr_35145_36241[(1)] = (14));

} else {
var statearr_35146_36242 = state_35120__$1;
(statearr_35146_36242[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35121 === (9))){
var inst_35108 = (state_35120[(2)]);
var inst_35109 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35120__$1 = (function (){var statearr_35147 = state_35120;
(statearr_35147[(15)] = inst_35108);

return statearr_35147;
})();
if(cljs.core.truth_(inst_35109)){
var statearr_35148_36243 = state_35120__$1;
(statearr_35148_36243[(1)] = (21));

} else {
var statearr_35149_36244 = state_35120__$1;
(statearr_35149_36244[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35121 === (5))){
var inst_35064 = cljs.core.async.close_BANG_(out);
var state_35120__$1 = state_35120;
var statearr_35150_36251 = state_35120__$1;
(statearr_35150_36251[(2)] = inst_35064);

(statearr_35150_36251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35121 === (14))){
var inst_35086 = (state_35120[(7)]);
var inst_35088 = cljs.core.chunked_seq_QMARK_(inst_35086);
var state_35120__$1 = state_35120;
if(inst_35088){
var statearr_35151_36252 = state_35120__$1;
(statearr_35151_36252[(1)] = (17));

} else {
var statearr_35152_36253 = state_35120__$1;
(statearr_35152_36253[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35121 === (16))){
var inst_35104 = (state_35120[(2)]);
var state_35120__$1 = state_35120;
var statearr_35153_36254 = state_35120__$1;
(statearr_35153_36254[(2)] = inst_35104);

(statearr_35153_36254[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35121 === (10))){
var inst_35073 = (state_35120[(11)]);
var inst_35075 = (state_35120[(12)]);
var inst_35080 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35073,inst_35075);
var state_35120__$1 = state_35120;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35120__$1,(13),out,inst_35080);
} else {
if((state_val_35121 === (18))){
var inst_35086 = (state_35120[(7)]);
var inst_35095 = cljs.core.first(inst_35086);
var state_35120__$1 = state_35120;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35120__$1,(20),out,inst_35095);
} else {
if((state_val_35121 === (8))){
var inst_35074 = (state_35120[(9)]);
var inst_35075 = (state_35120[(12)]);
var inst_35077 = (inst_35075 < inst_35074);
var inst_35078 = inst_35077;
var state_35120__$1 = state_35120;
if(cljs.core.truth_(inst_35078)){
var statearr_35154_36255 = state_35120__$1;
(statearr_35154_36255[(1)] = (10));

} else {
var statearr_35155_36256 = state_35120__$1;
(statearr_35155_36256[(1)] = (11));

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
});})(c__33853__auto__))
;
return ((function (switch__33674__auto__,c__33853__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33675__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33675__auto____0 = (function (){
var statearr_35156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35156[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33675__auto__);

(statearr_35156[(1)] = (1));

return statearr_35156;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33675__auto____1 = (function (state_35120){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_35120);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e35157){if((e35157 instanceof Object)){
var ex__33678__auto__ = e35157;
var statearr_35158_36257 = state_35120;
(statearr_35158_36257[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35157;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36258 = state_35120;
state_35120 = G__36258;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33675__auto__ = function(state_35120){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33675__auto____1.call(this,state_35120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33675__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33675__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto__))
})();
var state__33855__auto__ = (function (){var statearr_35159 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_35159[(6)] = c__33853__auto__);

return statearr_35159;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto__))
);

return c__33853__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35161 = arguments.length;
switch (G__35161) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35163 = arguments.length;
switch (G__35163) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35165 = arguments.length;
switch (G__35165) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33853__auto___36268 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto___36268,out){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto___36268,out){
return (function (state_35189){
var state_val_35190 = (state_35189[(1)]);
if((state_val_35190 === (7))){
var inst_35184 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
var statearr_35191_36269 = state_35189__$1;
(statearr_35191_36269[(2)] = inst_35184);

(statearr_35191_36269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (1))){
var inst_35166 = null;
var state_35189__$1 = (function (){var statearr_35192 = state_35189;
(statearr_35192[(7)] = inst_35166);

return statearr_35192;
})();
var statearr_35193_36270 = state_35189__$1;
(statearr_35193_36270[(2)] = null);

(statearr_35193_36270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (4))){
var inst_35169 = (state_35189[(8)]);
var inst_35169__$1 = (state_35189[(2)]);
var inst_35170 = (inst_35169__$1 == null);
var inst_35171 = cljs.core.not(inst_35170);
var state_35189__$1 = (function (){var statearr_35194 = state_35189;
(statearr_35194[(8)] = inst_35169__$1);

return statearr_35194;
})();
if(inst_35171){
var statearr_35195_36271 = state_35189__$1;
(statearr_35195_36271[(1)] = (5));

} else {
var statearr_35196_36272 = state_35189__$1;
(statearr_35196_36272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (6))){
var state_35189__$1 = state_35189;
var statearr_35197_36273 = state_35189__$1;
(statearr_35197_36273[(2)] = null);

(statearr_35197_36273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (3))){
var inst_35186 = (state_35189[(2)]);
var inst_35187 = cljs.core.async.close_BANG_(out);
var state_35189__$1 = (function (){var statearr_35198 = state_35189;
(statearr_35198[(9)] = inst_35186);

return statearr_35198;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35189__$1,inst_35187);
} else {
if((state_val_35190 === (2))){
var state_35189__$1 = state_35189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35189__$1,(4),ch);
} else {
if((state_val_35190 === (11))){
var inst_35169 = (state_35189[(8)]);
var inst_35178 = (state_35189[(2)]);
var inst_35166 = inst_35169;
var state_35189__$1 = (function (){var statearr_35199 = state_35189;
(statearr_35199[(7)] = inst_35166);

(statearr_35199[(10)] = inst_35178);

return statearr_35199;
})();
var statearr_35200_36274 = state_35189__$1;
(statearr_35200_36274[(2)] = null);

(statearr_35200_36274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (9))){
var inst_35169 = (state_35189[(8)]);
var state_35189__$1 = state_35189;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35189__$1,(11),out,inst_35169);
} else {
if((state_val_35190 === (5))){
var inst_35166 = (state_35189[(7)]);
var inst_35169 = (state_35189[(8)]);
var inst_35173 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35169,inst_35166);
var state_35189__$1 = state_35189;
if(inst_35173){
var statearr_35202_36278 = state_35189__$1;
(statearr_35202_36278[(1)] = (8));

} else {
var statearr_35203_36279 = state_35189__$1;
(statearr_35203_36279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (10))){
var inst_35181 = (state_35189[(2)]);
var state_35189__$1 = state_35189;
var statearr_35204_36280 = state_35189__$1;
(statearr_35204_36280[(2)] = inst_35181);

(statearr_35204_36280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35190 === (8))){
var inst_35166 = (state_35189[(7)]);
var tmp35201 = inst_35166;
var inst_35166__$1 = tmp35201;
var state_35189__$1 = (function (){var statearr_35205 = state_35189;
(statearr_35205[(7)] = inst_35166__$1);

return statearr_35205;
})();
var statearr_35206_36281 = state_35189__$1;
(statearr_35206_36281[(2)] = null);

(statearr_35206_36281[(1)] = (2));


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
});})(c__33853__auto___36268,out))
;
return ((function (switch__33674__auto__,c__33853__auto___36268,out){
return (function() {
var cljs$core$async$state_machine__33675__auto__ = null;
var cljs$core$async$state_machine__33675__auto____0 = (function (){
var statearr_35207 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35207[(0)] = cljs$core$async$state_machine__33675__auto__);

(statearr_35207[(1)] = (1));

return statearr_35207;
});
var cljs$core$async$state_machine__33675__auto____1 = (function (state_35189){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_35189);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e35208){if((e35208 instanceof Object)){
var ex__33678__auto__ = e35208;
var statearr_35209_36282 = state_35189;
(statearr_35209_36282[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35189);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35208;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36283 = state_35189;
state_35189 = G__36283;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$state_machine__33675__auto__ = function(state_35189){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33675__auto____1.call(this,state_35189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33675__auto____0;
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33675__auto____1;
return cljs$core$async$state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto___36268,out))
})();
var state__33855__auto__ = (function (){var statearr_35210 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_35210[(6)] = c__33853__auto___36268);

return statearr_35210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto___36268,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35212 = arguments.length;
switch (G__35212) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33853__auto___36291 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto___36291,out){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto___36291,out){
return (function (state_35250){
var state_val_35251 = (state_35250[(1)]);
if((state_val_35251 === (7))){
var inst_35246 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
var statearr_35252_36292 = state_35250__$1;
(statearr_35252_36292[(2)] = inst_35246);

(statearr_35252_36292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (1))){
var inst_35213 = (new Array(n));
var inst_35214 = inst_35213;
var inst_35215 = (0);
var state_35250__$1 = (function (){var statearr_35253 = state_35250;
(statearr_35253[(7)] = inst_35215);

(statearr_35253[(8)] = inst_35214);

return statearr_35253;
})();
var statearr_35254_36294 = state_35250__$1;
(statearr_35254_36294[(2)] = null);

(statearr_35254_36294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (4))){
var inst_35218 = (state_35250[(9)]);
var inst_35218__$1 = (state_35250[(2)]);
var inst_35219 = (inst_35218__$1 == null);
var inst_35220 = cljs.core.not(inst_35219);
var state_35250__$1 = (function (){var statearr_35255 = state_35250;
(statearr_35255[(9)] = inst_35218__$1);

return statearr_35255;
})();
if(inst_35220){
var statearr_35256_36295 = state_35250__$1;
(statearr_35256_36295[(1)] = (5));

} else {
var statearr_35257_36296 = state_35250__$1;
(statearr_35257_36296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (15))){
var inst_35240 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
var statearr_35258_36298 = state_35250__$1;
(statearr_35258_36298[(2)] = inst_35240);

(statearr_35258_36298[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (13))){
var state_35250__$1 = state_35250;
var statearr_35259_36300 = state_35250__$1;
(statearr_35259_36300[(2)] = null);

(statearr_35259_36300[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (6))){
var inst_35215 = (state_35250[(7)]);
var inst_35236 = (inst_35215 > (0));
var state_35250__$1 = state_35250;
if(cljs.core.truth_(inst_35236)){
var statearr_35260_36301 = state_35250__$1;
(statearr_35260_36301[(1)] = (12));

} else {
var statearr_35261_36302 = state_35250__$1;
(statearr_35261_36302[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (3))){
var inst_35248 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35250__$1,inst_35248);
} else {
if((state_val_35251 === (12))){
var inst_35214 = (state_35250[(8)]);
var inst_35238 = cljs.core.vec(inst_35214);
var state_35250__$1 = state_35250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35250__$1,(15),out,inst_35238);
} else {
if((state_val_35251 === (2))){
var state_35250__$1 = state_35250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35250__$1,(4),ch);
} else {
if((state_val_35251 === (11))){
var inst_35230 = (state_35250[(2)]);
var inst_35231 = (new Array(n));
var inst_35214 = inst_35231;
var inst_35215 = (0);
var state_35250__$1 = (function (){var statearr_35262 = state_35250;
(statearr_35262[(7)] = inst_35215);

(statearr_35262[(10)] = inst_35230);

(statearr_35262[(8)] = inst_35214);

return statearr_35262;
})();
var statearr_35263_36303 = state_35250__$1;
(statearr_35263_36303[(2)] = null);

(statearr_35263_36303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (9))){
var inst_35214 = (state_35250[(8)]);
var inst_35228 = cljs.core.vec(inst_35214);
var state_35250__$1 = state_35250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35250__$1,(11),out,inst_35228);
} else {
if((state_val_35251 === (5))){
var inst_35215 = (state_35250[(7)]);
var inst_35218 = (state_35250[(9)]);
var inst_35214 = (state_35250[(8)]);
var inst_35223 = (state_35250[(11)]);
var inst_35222 = (inst_35214[inst_35215] = inst_35218);
var inst_35223__$1 = (inst_35215 + (1));
var inst_35224 = (inst_35223__$1 < n);
var state_35250__$1 = (function (){var statearr_35264 = state_35250;
(statearr_35264[(11)] = inst_35223__$1);

(statearr_35264[(12)] = inst_35222);

return statearr_35264;
})();
if(cljs.core.truth_(inst_35224)){
var statearr_35265_36307 = state_35250__$1;
(statearr_35265_36307[(1)] = (8));

} else {
var statearr_35266_36310 = state_35250__$1;
(statearr_35266_36310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (14))){
var inst_35243 = (state_35250[(2)]);
var inst_35244 = cljs.core.async.close_BANG_(out);
var state_35250__$1 = (function (){var statearr_35268 = state_35250;
(statearr_35268[(13)] = inst_35243);

return statearr_35268;
})();
var statearr_35269_36315 = state_35250__$1;
(statearr_35269_36315[(2)] = inst_35244);

(statearr_35269_36315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (10))){
var inst_35234 = (state_35250[(2)]);
var state_35250__$1 = state_35250;
var statearr_35270_36316 = state_35250__$1;
(statearr_35270_36316[(2)] = inst_35234);

(statearr_35270_36316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35251 === (8))){
var inst_35214 = (state_35250[(8)]);
var inst_35223 = (state_35250[(11)]);
var tmp35267 = inst_35214;
var inst_35214__$1 = tmp35267;
var inst_35215 = inst_35223;
var state_35250__$1 = (function (){var statearr_35271 = state_35250;
(statearr_35271[(7)] = inst_35215);

(statearr_35271[(8)] = inst_35214__$1);

return statearr_35271;
})();
var statearr_35272_36328 = state_35250__$1;
(statearr_35272_36328[(2)] = null);

(statearr_35272_36328[(1)] = (2));


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
});})(c__33853__auto___36291,out))
;
return ((function (switch__33674__auto__,c__33853__auto___36291,out){
return (function() {
var cljs$core$async$state_machine__33675__auto__ = null;
var cljs$core$async$state_machine__33675__auto____0 = (function (){
var statearr_35273 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35273[(0)] = cljs$core$async$state_machine__33675__auto__);

(statearr_35273[(1)] = (1));

return statearr_35273;
});
var cljs$core$async$state_machine__33675__auto____1 = (function (state_35250){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_35250);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e35274){if((e35274 instanceof Object)){
var ex__33678__auto__ = e35274;
var statearr_35275_36329 = state_35250;
(statearr_35275_36329[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35274;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36330 = state_35250;
state_35250 = G__36330;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$state_machine__33675__auto__ = function(state_35250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33675__auto____1.call(this,state_35250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33675__auto____0;
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33675__auto____1;
return cljs$core$async$state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto___36291,out))
})();
var state__33855__auto__ = (function (){var statearr_35276 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_35276[(6)] = c__33853__auto___36291);

return statearr_35276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto___36291,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35278 = arguments.length;
switch (G__35278) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33853__auto___36332 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33853__auto___36332,out){
return (function (){
var f__33854__auto__ = (function (){var switch__33674__auto__ = ((function (c__33853__auto___36332,out){
return (function (state_35320){
var state_val_35321 = (state_35320[(1)]);
if((state_val_35321 === (7))){
var inst_35316 = (state_35320[(2)]);
var state_35320__$1 = state_35320;
var statearr_35322_36333 = state_35320__$1;
(statearr_35322_36333[(2)] = inst_35316);

(statearr_35322_36333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (1))){
var inst_35279 = [];
var inst_35280 = inst_35279;
var inst_35281 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35320__$1 = (function (){var statearr_35323 = state_35320;
(statearr_35323[(7)] = inst_35280);

(statearr_35323[(8)] = inst_35281);

return statearr_35323;
})();
var statearr_35324_36334 = state_35320__$1;
(statearr_35324_36334[(2)] = null);

(statearr_35324_36334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (4))){
var inst_35284 = (state_35320[(9)]);
var inst_35284__$1 = (state_35320[(2)]);
var inst_35285 = (inst_35284__$1 == null);
var inst_35286 = cljs.core.not(inst_35285);
var state_35320__$1 = (function (){var statearr_35325 = state_35320;
(statearr_35325[(9)] = inst_35284__$1);

return statearr_35325;
})();
if(inst_35286){
var statearr_35326_36335 = state_35320__$1;
(statearr_35326_36335[(1)] = (5));

} else {
var statearr_35327_36336 = state_35320__$1;
(statearr_35327_36336[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (15))){
var inst_35310 = (state_35320[(2)]);
var state_35320__$1 = state_35320;
var statearr_35328_36337 = state_35320__$1;
(statearr_35328_36337[(2)] = inst_35310);

(statearr_35328_36337[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (13))){
var state_35320__$1 = state_35320;
var statearr_35329_36338 = state_35320__$1;
(statearr_35329_36338[(2)] = null);

(statearr_35329_36338[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (6))){
var inst_35280 = (state_35320[(7)]);
var inst_35305 = inst_35280.length;
var inst_35306 = (inst_35305 > (0));
var state_35320__$1 = state_35320;
if(cljs.core.truth_(inst_35306)){
var statearr_35330_36339 = state_35320__$1;
(statearr_35330_36339[(1)] = (12));

} else {
var statearr_35331_36340 = state_35320__$1;
(statearr_35331_36340[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (3))){
var inst_35318 = (state_35320[(2)]);
var state_35320__$1 = state_35320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35320__$1,inst_35318);
} else {
if((state_val_35321 === (12))){
var inst_35280 = (state_35320[(7)]);
var inst_35308 = cljs.core.vec(inst_35280);
var state_35320__$1 = state_35320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35320__$1,(15),out,inst_35308);
} else {
if((state_val_35321 === (2))){
var state_35320__$1 = state_35320;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35320__$1,(4),ch);
} else {
if((state_val_35321 === (11))){
var inst_35284 = (state_35320[(9)]);
var inst_35288 = (state_35320[(10)]);
var inst_35298 = (state_35320[(2)]);
var inst_35299 = [];
var inst_35300 = inst_35299.push(inst_35284);
var inst_35280 = inst_35299;
var inst_35281 = inst_35288;
var state_35320__$1 = (function (){var statearr_35332 = state_35320;
(statearr_35332[(11)] = inst_35298);

(statearr_35332[(7)] = inst_35280);

(statearr_35332[(8)] = inst_35281);

(statearr_35332[(12)] = inst_35300);

return statearr_35332;
})();
var statearr_35333_36341 = state_35320__$1;
(statearr_35333_36341[(2)] = null);

(statearr_35333_36341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (9))){
var inst_35280 = (state_35320[(7)]);
var inst_35296 = cljs.core.vec(inst_35280);
var state_35320__$1 = state_35320;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35320__$1,(11),out,inst_35296);
} else {
if((state_val_35321 === (5))){
var inst_35284 = (state_35320[(9)]);
var inst_35288 = (state_35320[(10)]);
var inst_35281 = (state_35320[(8)]);
var inst_35288__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35284) : f.call(null,inst_35284));
var inst_35289 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35288__$1,inst_35281);
var inst_35290 = cljs.core.keyword_identical_QMARK_(inst_35281,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35291 = ((inst_35289) || (inst_35290));
var state_35320__$1 = (function (){var statearr_35334 = state_35320;
(statearr_35334[(10)] = inst_35288__$1);

return statearr_35334;
})();
if(cljs.core.truth_(inst_35291)){
var statearr_35335_36343 = state_35320__$1;
(statearr_35335_36343[(1)] = (8));

} else {
var statearr_35336_36344 = state_35320__$1;
(statearr_35336_36344[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (14))){
var inst_35313 = (state_35320[(2)]);
var inst_35314 = cljs.core.async.close_BANG_(out);
var state_35320__$1 = (function (){var statearr_35338 = state_35320;
(statearr_35338[(13)] = inst_35313);

return statearr_35338;
})();
var statearr_35339_36346 = state_35320__$1;
(statearr_35339_36346[(2)] = inst_35314);

(statearr_35339_36346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (10))){
var inst_35303 = (state_35320[(2)]);
var state_35320__$1 = state_35320;
var statearr_35340_36347 = state_35320__$1;
(statearr_35340_36347[(2)] = inst_35303);

(statearr_35340_36347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35321 === (8))){
var inst_35284 = (state_35320[(9)]);
var inst_35288 = (state_35320[(10)]);
var inst_35280 = (state_35320[(7)]);
var inst_35293 = inst_35280.push(inst_35284);
var tmp35337 = inst_35280;
var inst_35280__$1 = tmp35337;
var inst_35281 = inst_35288;
var state_35320__$1 = (function (){var statearr_35341 = state_35320;
(statearr_35341[(14)] = inst_35293);

(statearr_35341[(7)] = inst_35280__$1);

(statearr_35341[(8)] = inst_35281);

return statearr_35341;
})();
var statearr_35342_36349 = state_35320__$1;
(statearr_35342_36349[(2)] = null);

(statearr_35342_36349[(1)] = (2));


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
});})(c__33853__auto___36332,out))
;
return ((function (switch__33674__auto__,c__33853__auto___36332,out){
return (function() {
var cljs$core$async$state_machine__33675__auto__ = null;
var cljs$core$async$state_machine__33675__auto____0 = (function (){
var statearr_35343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35343[(0)] = cljs$core$async$state_machine__33675__auto__);

(statearr_35343[(1)] = (1));

return statearr_35343;
});
var cljs$core$async$state_machine__33675__auto____1 = (function (state_35320){
while(true){
var ret_value__33676__auto__ = (function (){try{while(true){
var result__33677__auto__ = switch__33674__auto__(state_35320);
if(cljs.core.keyword_identical_QMARK_(result__33677__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33677__auto__;
}
break;
}
}catch (e35344){if((e35344 instanceof Object)){
var ex__33678__auto__ = e35344;
var statearr_35345_36351 = state_35320;
(statearr_35345_36351[(5)] = ex__33678__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35344;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33676__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36352 = state_35320;
state_35320 = G__36352;
continue;
} else {
return ret_value__33676__auto__;
}
break;
}
});
cljs$core$async$state_machine__33675__auto__ = function(state_35320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33675__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33675__auto____1.call(this,state_35320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33675__auto____0;
cljs$core$async$state_machine__33675__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33675__auto____1;
return cljs$core$async$state_machine__33675__auto__;
})()
;})(switch__33674__auto__,c__33853__auto___36332,out))
})();
var state__33855__auto__ = (function (){var statearr_35346 = (f__33854__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33854__auto__.cljs$core$IFn$_invoke$arity$0() : f__33854__auto__.call(null));
(statearr_35346[(6)] = c__33853__auto___36332);

return statearr_35346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33855__auto__);
});})(c__33853__auto___36332,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
