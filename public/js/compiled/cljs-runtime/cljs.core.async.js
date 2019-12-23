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
var G__38488 = arguments.length;
switch (G__38488) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38489 = (function (f,blockable,meta38490){
this.f = f;
this.blockable = blockable;
this.meta38490 = meta38490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38491,meta38490__$1){
var self__ = this;
var _38491__$1 = this;
return (new cljs.core.async.t_cljs$core$async38489(self__.f,self__.blockable,meta38490__$1));
});

cljs.core.async.t_cljs$core$async38489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38491){
var self__ = this;
var _38491__$1 = this;
return self__.meta38490;
});

cljs.core.async.t_cljs$core$async38489.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38489.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38489.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async38489.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async38489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38490","meta38490",714930169,null)], null);
});

cljs.core.async.t_cljs$core$async38489.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38489";

cljs.core.async.t_cljs$core$async38489.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async38489");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38489.
 */
cljs.core.async.__GT_t_cljs$core$async38489 = (function cljs$core$async$__GT_t_cljs$core$async38489(f__$1,blockable__$1,meta38490){
return (new cljs.core.async.t_cljs$core$async38489(f__$1,blockable__$1,meta38490));
});

}

return (new cljs.core.async.t_cljs$core$async38489(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38494 = arguments.length;
switch (G__38494) {
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
var G__38496 = arguments.length;
switch (G__38496) {
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
var G__38498 = arguments.length;
switch (G__38498) {
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
var val_39934 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39934) : fn1.call(null,val_39934));
} else {
cljs.core.async.impl.dispatch.run(((function (val_39934,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39934) : fn1.call(null,val_39934));
});})(val_39934,ret))
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
var G__38500 = arguments.length;
switch (G__38500) {
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
var n__4607__auto___39941 = n;
var x_39942 = (0);
while(true){
if((x_39942 < n__4607__auto___39941)){
(a[x_39942] = x_39942);

var G__39943 = (x_39942 + (1));
x_39942 = G__39943;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38501 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38501 = (function (flag,meta38502){
this.flag = flag;
this.meta38502 = meta38502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38503,meta38502__$1){
var self__ = this;
var _38503__$1 = this;
return (new cljs.core.async.t_cljs$core$async38501(self__.flag,meta38502__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async38501.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38503){
var self__ = this;
var _38503__$1 = this;
return self__.meta38502;
});})(flag))
;

cljs.core.async.t_cljs$core$async38501.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38501.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async38501.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38501.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38501.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38502","meta38502",1453002890,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async38501.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38501";

cljs.core.async.t_cljs$core$async38501.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async38501");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38501.
 */
cljs.core.async.__GT_t_cljs$core$async38501 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38501(flag__$1,meta38502){
return (new cljs.core.async.t_cljs$core$async38501(flag__$1,meta38502));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async38501(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38504 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38504 = (function (flag,cb,meta38505){
this.flag = flag;
this.cb = cb;
this.meta38505 = meta38505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38506,meta38505__$1){
var self__ = this;
var _38506__$1 = this;
return (new cljs.core.async.t_cljs$core$async38504(self__.flag,self__.cb,meta38505__$1));
});

cljs.core.async.t_cljs$core$async38504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38506){
var self__ = this;
var _38506__$1 = this;
return self__.meta38505;
});

cljs.core.async.t_cljs$core$async38504.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38504.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async38504.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38504.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async38504.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38505","meta38505",-1130208369,null)], null);
});

cljs.core.async.t_cljs$core$async38504.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38504";

cljs.core.async.t_cljs$core$async38504.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async38504");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38504.
 */
cljs.core.async.__GT_t_cljs$core$async38504 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38504(flag__$1,cb__$1,meta38505){
return (new cljs.core.async.t_cljs$core$async38504(flag__$1,cb__$1,meta38505));
});

}

return (new cljs.core.async.t_cljs$core$async38504(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__38507_SHARP_){
var G__38509 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38507_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38509) : fret.call(null,G__38509));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38508_SHARP_){
var G__38510 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38508_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__38510) : fret.call(null,G__38510));
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
var G__39970 = (i + (1));
i = G__39970;
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
var len__4730__auto___39972 = arguments.length;
var i__4731__auto___39973 = (0);
while(true){
if((i__4731__auto___39973 < len__4730__auto___39972)){
args__4736__auto__.push((arguments[i__4731__auto___39973]));

var G__39975 = (i__4731__auto___39973 + (1));
i__4731__auto___39973 = G__39975;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38513){
var map__38514 = p__38513;
var map__38514__$1 = (((((!((map__38514 == null))))?(((((map__38514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38514):map__38514);
var opts = map__38514__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38511){
var G__38512 = cljs.core.first(seq38511);
var seq38511__$1 = cljs.core.next(seq38511);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38512,seq38511__$1);
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
var G__38517 = arguments.length;
switch (G__38517) {
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
var c__38428__auto___39985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto___39985){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto___39985){
return (function (state_38541){
var state_val_38542 = (state_38541[(1)]);
if((state_val_38542 === (7))){
var inst_38537 = (state_38541[(2)]);
var state_38541__$1 = state_38541;
var statearr_38543_39989 = state_38541__$1;
(statearr_38543_39989[(2)] = inst_38537);

(statearr_38543_39989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38542 === (1))){
var state_38541__$1 = state_38541;
var statearr_38544_39990 = state_38541__$1;
(statearr_38544_39990[(2)] = null);

(statearr_38544_39990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38542 === (4))){
var inst_38520 = (state_38541[(7)]);
var inst_38520__$1 = (state_38541[(2)]);
var inst_38521 = (inst_38520__$1 == null);
var state_38541__$1 = (function (){var statearr_38545 = state_38541;
(statearr_38545[(7)] = inst_38520__$1);

return statearr_38545;
})();
if(cljs.core.truth_(inst_38521)){
var statearr_38546_39991 = state_38541__$1;
(statearr_38546_39991[(1)] = (5));

} else {
var statearr_38547_39992 = state_38541__$1;
(statearr_38547_39992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38542 === (13))){
var state_38541__$1 = state_38541;
var statearr_38548_39994 = state_38541__$1;
(statearr_38548_39994[(2)] = null);

(statearr_38548_39994[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38542 === (6))){
var inst_38520 = (state_38541[(7)]);
var state_38541__$1 = state_38541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38541__$1,(11),to,inst_38520);
} else {
if((state_val_38542 === (3))){
var inst_38539 = (state_38541[(2)]);
var state_38541__$1 = state_38541;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38541__$1,inst_38539);
} else {
if((state_val_38542 === (12))){
var state_38541__$1 = state_38541;
var statearr_38549_39995 = state_38541__$1;
(statearr_38549_39995[(2)] = null);

(statearr_38549_39995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38542 === (2))){
var state_38541__$1 = state_38541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38541__$1,(4),from);
} else {
if((state_val_38542 === (11))){
var inst_38530 = (state_38541[(2)]);
var state_38541__$1 = state_38541;
if(cljs.core.truth_(inst_38530)){
var statearr_38550_39996 = state_38541__$1;
(statearr_38550_39996[(1)] = (12));

} else {
var statearr_38551_39998 = state_38541__$1;
(statearr_38551_39998[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38542 === (9))){
var state_38541__$1 = state_38541;
var statearr_38552_40000 = state_38541__$1;
(statearr_38552_40000[(2)] = null);

(statearr_38552_40000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38542 === (5))){
var state_38541__$1 = state_38541;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38553_40001 = state_38541__$1;
(statearr_38553_40001[(1)] = (8));

} else {
var statearr_38554_40004 = state_38541__$1;
(statearr_38554_40004[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38542 === (14))){
var inst_38535 = (state_38541[(2)]);
var state_38541__$1 = state_38541;
var statearr_38555_40005 = state_38541__$1;
(statearr_38555_40005[(2)] = inst_38535);

(statearr_38555_40005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38542 === (10))){
var inst_38527 = (state_38541[(2)]);
var state_38541__$1 = state_38541;
var statearr_38556_40006 = state_38541__$1;
(statearr_38556_40006[(2)] = inst_38527);

(statearr_38556_40006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38542 === (8))){
var inst_38524 = cljs.core.async.close_BANG_(to);
var state_38541__$1 = state_38541;
var statearr_38557_40007 = state_38541__$1;
(statearr_38557_40007[(2)] = inst_38524);

(statearr_38557_40007[(1)] = (10));


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
});})(c__38428__auto___39985))
;
return ((function (switch__38327__auto__,c__38428__auto___39985){
return (function() {
var cljs$core$async$state_machine__38328__auto__ = null;
var cljs$core$async$state_machine__38328__auto____0 = (function (){
var statearr_38558 = [null,null,null,null,null,null,null,null];
(statearr_38558[(0)] = cljs$core$async$state_machine__38328__auto__);

(statearr_38558[(1)] = (1));

return statearr_38558;
});
var cljs$core$async$state_machine__38328__auto____1 = (function (state_38541){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_38541);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e38559){if((e38559 instanceof Object)){
var ex__38331__auto__ = e38559;
var statearr_38560_40011 = state_38541;
(statearr_38560_40011[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38559;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40014 = state_38541;
state_38541 = G__40014;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$state_machine__38328__auto__ = function(state_38541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38328__auto____1.call(this,state_38541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38328__auto____0;
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38328__auto____1;
return cljs$core$async$state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto___39985))
})();
var state__38430__auto__ = (function (){var statearr_38561 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_38561[(6)] = c__38428__auto___39985);

return statearr_38561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto___39985))
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
return (function (p__38562){
var vec__38563 = p__38562;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38563,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38563,(1),null);
var job = vec__38563;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__38428__auto___40021 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto___40021,res,vec__38563,v,p,job,jobs,results){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto___40021,res,vec__38563,v,p,job,jobs,results){
return (function (state_38570){
var state_val_38571 = (state_38570[(1)]);
if((state_val_38571 === (1))){
var state_38570__$1 = state_38570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38570__$1,(2),res,v);
} else {
if((state_val_38571 === (2))){
var inst_38567 = (state_38570[(2)]);
var inst_38568 = cljs.core.async.close_BANG_(res);
var state_38570__$1 = (function (){var statearr_38572 = state_38570;
(statearr_38572[(7)] = inst_38567);

return statearr_38572;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38570__$1,inst_38568);
} else {
return null;
}
}
});})(c__38428__auto___40021,res,vec__38563,v,p,job,jobs,results))
;
return ((function (switch__38327__auto__,c__38428__auto___40021,res,vec__38563,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____0 = (function (){
var statearr_38573 = [null,null,null,null,null,null,null,null];
(statearr_38573[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__);

(statearr_38573[(1)] = (1));

return statearr_38573;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____1 = (function (state_38570){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_38570);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e38574){if((e38574 instanceof Object)){
var ex__38331__auto__ = e38574;
var statearr_38575_40037 = state_38570;
(statearr_38575_40037[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38574;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40038 = state_38570;
state_38570 = G__40038;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__ = function(state_38570){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____1.call(this,state_38570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto___40021,res,vec__38563,v,p,job,jobs,results))
})();
var state__38430__auto__ = (function (){var statearr_38576 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_38576[(6)] = c__38428__auto___40021);

return statearr_38576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto___40021,res,vec__38563,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__38577){
var vec__38578 = p__38577;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38578,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38578,(1),null);
var job = vec__38578;
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
var n__4607__auto___40043 = n;
var __40044 = (0);
while(true){
if((__40044 < n__4607__auto___40043)){
var G__38581_40045 = type;
var G__38581_40046__$1 = (((G__38581_40045 instanceof cljs.core.Keyword))?G__38581_40045.fqn:null);
switch (G__38581_40046__$1) {
case "compute":
var c__38428__auto___40048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40044,c__38428__auto___40048,G__38581_40045,G__38581_40046__$1,n__4607__auto___40043,jobs,results,process,async){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (__40044,c__38428__auto___40048,G__38581_40045,G__38581_40046__$1,n__4607__auto___40043,jobs,results,process,async){
return (function (state_38594){
var state_val_38595 = (state_38594[(1)]);
if((state_val_38595 === (1))){
var state_38594__$1 = state_38594;
var statearr_38596_40049 = state_38594__$1;
(statearr_38596_40049[(2)] = null);

(statearr_38596_40049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38595 === (2))){
var state_38594__$1 = state_38594;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38594__$1,(4),jobs);
} else {
if((state_val_38595 === (3))){
var inst_38592 = (state_38594[(2)]);
var state_38594__$1 = state_38594;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38594__$1,inst_38592);
} else {
if((state_val_38595 === (4))){
var inst_38584 = (state_38594[(2)]);
var inst_38585 = process(inst_38584);
var state_38594__$1 = state_38594;
if(cljs.core.truth_(inst_38585)){
var statearr_38597_40050 = state_38594__$1;
(statearr_38597_40050[(1)] = (5));

} else {
var statearr_38598_40051 = state_38594__$1;
(statearr_38598_40051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38595 === (5))){
var state_38594__$1 = state_38594;
var statearr_38599_40052 = state_38594__$1;
(statearr_38599_40052[(2)] = null);

(statearr_38599_40052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38595 === (6))){
var state_38594__$1 = state_38594;
var statearr_38600_40053 = state_38594__$1;
(statearr_38600_40053[(2)] = null);

(statearr_38600_40053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38595 === (7))){
var inst_38590 = (state_38594[(2)]);
var state_38594__$1 = state_38594;
var statearr_38601_40054 = state_38594__$1;
(statearr_38601_40054[(2)] = inst_38590);

(statearr_38601_40054[(1)] = (3));


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
});})(__40044,c__38428__auto___40048,G__38581_40045,G__38581_40046__$1,n__4607__auto___40043,jobs,results,process,async))
;
return ((function (__40044,switch__38327__auto__,c__38428__auto___40048,G__38581_40045,G__38581_40046__$1,n__4607__auto___40043,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____0 = (function (){
var statearr_38602 = [null,null,null,null,null,null,null];
(statearr_38602[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__);

(statearr_38602[(1)] = (1));

return statearr_38602;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____1 = (function (state_38594){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_38594);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e38603){if((e38603 instanceof Object)){
var ex__38331__auto__ = e38603;
var statearr_38604_40059 = state_38594;
(statearr_38604_40059[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38603;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40060 = state_38594;
state_38594 = G__40060;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__ = function(state_38594){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____1.call(this,state_38594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__;
})()
;})(__40044,switch__38327__auto__,c__38428__auto___40048,G__38581_40045,G__38581_40046__$1,n__4607__auto___40043,jobs,results,process,async))
})();
var state__38430__auto__ = (function (){var statearr_38605 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_38605[(6)] = c__38428__auto___40048);

return statearr_38605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(__40044,c__38428__auto___40048,G__38581_40045,G__38581_40046__$1,n__4607__auto___40043,jobs,results,process,async))
);


break;
case "async":
var c__38428__auto___40064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40044,c__38428__auto___40064,G__38581_40045,G__38581_40046__$1,n__4607__auto___40043,jobs,results,process,async){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (__40044,c__38428__auto___40064,G__38581_40045,G__38581_40046__$1,n__4607__auto___40043,jobs,results,process,async){
return (function (state_38618){
var state_val_38619 = (state_38618[(1)]);
if((state_val_38619 === (1))){
var state_38618__$1 = state_38618;
var statearr_38620_40066 = state_38618__$1;
(statearr_38620_40066[(2)] = null);

(statearr_38620_40066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (2))){
var state_38618__$1 = state_38618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38618__$1,(4),jobs);
} else {
if((state_val_38619 === (3))){
var inst_38616 = (state_38618[(2)]);
var state_38618__$1 = state_38618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38618__$1,inst_38616);
} else {
if((state_val_38619 === (4))){
var inst_38608 = (state_38618[(2)]);
var inst_38609 = async(inst_38608);
var state_38618__$1 = state_38618;
if(cljs.core.truth_(inst_38609)){
var statearr_38621_40068 = state_38618__$1;
(statearr_38621_40068[(1)] = (5));

} else {
var statearr_38622_40069 = state_38618__$1;
(statearr_38622_40069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (5))){
var state_38618__$1 = state_38618;
var statearr_38623_40070 = state_38618__$1;
(statearr_38623_40070[(2)] = null);

(statearr_38623_40070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (6))){
var state_38618__$1 = state_38618;
var statearr_38624_40071 = state_38618__$1;
(statearr_38624_40071[(2)] = null);

(statearr_38624_40071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38619 === (7))){
var inst_38614 = (state_38618[(2)]);
var state_38618__$1 = state_38618;
var statearr_38625_40072 = state_38618__$1;
(statearr_38625_40072[(2)] = inst_38614);

(statearr_38625_40072[(1)] = (3));


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
});})(__40044,c__38428__auto___40064,G__38581_40045,G__38581_40046__$1,n__4607__auto___40043,jobs,results,process,async))
;
return ((function (__40044,switch__38327__auto__,c__38428__auto___40064,G__38581_40045,G__38581_40046__$1,n__4607__auto___40043,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____0 = (function (){
var statearr_38626 = [null,null,null,null,null,null,null];
(statearr_38626[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__);

(statearr_38626[(1)] = (1));

return statearr_38626;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____1 = (function (state_38618){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_38618);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e38627){if((e38627 instanceof Object)){
var ex__38331__auto__ = e38627;
var statearr_38628_40076 = state_38618;
(statearr_38628_40076[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38627;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40077 = state_38618;
state_38618 = G__40077;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__ = function(state_38618){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____1.call(this,state_38618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__;
})()
;})(__40044,switch__38327__auto__,c__38428__auto___40064,G__38581_40045,G__38581_40046__$1,n__4607__auto___40043,jobs,results,process,async))
})();
var state__38430__auto__ = (function (){var statearr_38629 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_38629[(6)] = c__38428__auto___40064);

return statearr_38629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(__40044,c__38428__auto___40064,G__38581_40045,G__38581_40046__$1,n__4607__auto___40043,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38581_40046__$1)].join('')));

}

var G__40079 = (__40044 + (1));
__40044 = G__40079;
continue;
} else {
}
break;
}

var c__38428__auto___40080 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto___40080,jobs,results,process,async){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto___40080,jobs,results,process,async){
return (function (state_38651){
var state_val_38652 = (state_38651[(1)]);
if((state_val_38652 === (7))){
var inst_38647 = (state_38651[(2)]);
var state_38651__$1 = state_38651;
var statearr_38653_40081 = state_38651__$1;
(statearr_38653_40081[(2)] = inst_38647);

(statearr_38653_40081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38652 === (1))){
var state_38651__$1 = state_38651;
var statearr_38654_40086 = state_38651__$1;
(statearr_38654_40086[(2)] = null);

(statearr_38654_40086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38652 === (4))){
var inst_38632 = (state_38651[(7)]);
var inst_38632__$1 = (state_38651[(2)]);
var inst_38633 = (inst_38632__$1 == null);
var state_38651__$1 = (function (){var statearr_38655 = state_38651;
(statearr_38655[(7)] = inst_38632__$1);

return statearr_38655;
})();
if(cljs.core.truth_(inst_38633)){
var statearr_38656_40087 = state_38651__$1;
(statearr_38656_40087[(1)] = (5));

} else {
var statearr_38657_40088 = state_38651__$1;
(statearr_38657_40088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38652 === (6))){
var inst_38632 = (state_38651[(7)]);
var inst_38637 = (state_38651[(8)]);
var inst_38637__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_38638 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38639 = [inst_38632,inst_38637__$1];
var inst_38640 = (new cljs.core.PersistentVector(null,2,(5),inst_38638,inst_38639,null));
var state_38651__$1 = (function (){var statearr_38658 = state_38651;
(statearr_38658[(8)] = inst_38637__$1);

return statearr_38658;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38651__$1,(8),jobs,inst_38640);
} else {
if((state_val_38652 === (3))){
var inst_38649 = (state_38651[(2)]);
var state_38651__$1 = state_38651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38651__$1,inst_38649);
} else {
if((state_val_38652 === (2))){
var state_38651__$1 = state_38651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38651__$1,(4),from);
} else {
if((state_val_38652 === (9))){
var inst_38644 = (state_38651[(2)]);
var state_38651__$1 = (function (){var statearr_38659 = state_38651;
(statearr_38659[(9)] = inst_38644);

return statearr_38659;
})();
var statearr_38660_40091 = state_38651__$1;
(statearr_38660_40091[(2)] = null);

(statearr_38660_40091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38652 === (5))){
var inst_38635 = cljs.core.async.close_BANG_(jobs);
var state_38651__$1 = state_38651;
var statearr_38661_40092 = state_38651__$1;
(statearr_38661_40092[(2)] = inst_38635);

(statearr_38661_40092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38652 === (8))){
var inst_38637 = (state_38651[(8)]);
var inst_38642 = (state_38651[(2)]);
var state_38651__$1 = (function (){var statearr_38662 = state_38651;
(statearr_38662[(10)] = inst_38642);

return statearr_38662;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38651__$1,(9),results,inst_38637);
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
});})(c__38428__auto___40080,jobs,results,process,async))
;
return ((function (switch__38327__auto__,c__38428__auto___40080,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____0 = (function (){
var statearr_38663 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38663[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__);

(statearr_38663[(1)] = (1));

return statearr_38663;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____1 = (function (state_38651){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_38651);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e38664){if((e38664 instanceof Object)){
var ex__38331__auto__ = e38664;
var statearr_38665_40095 = state_38651;
(statearr_38665_40095[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38664;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40096 = state_38651;
state_38651 = G__40096;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__ = function(state_38651){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____1.call(this,state_38651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto___40080,jobs,results,process,async))
})();
var state__38430__auto__ = (function (){var statearr_38666 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_38666[(6)] = c__38428__auto___40080);

return statearr_38666;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto___40080,jobs,results,process,async))
);


var c__38428__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto__,jobs,results,process,async){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto__,jobs,results,process,async){
return (function (state_38704){
var state_val_38705 = (state_38704[(1)]);
if((state_val_38705 === (7))){
var inst_38700 = (state_38704[(2)]);
var state_38704__$1 = state_38704;
var statearr_38706_40097 = state_38704__$1;
(statearr_38706_40097[(2)] = inst_38700);

(statearr_38706_40097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (20))){
var state_38704__$1 = state_38704;
var statearr_38707_40098 = state_38704__$1;
(statearr_38707_40098[(2)] = null);

(statearr_38707_40098[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (1))){
var state_38704__$1 = state_38704;
var statearr_38708_40100 = state_38704__$1;
(statearr_38708_40100[(2)] = null);

(statearr_38708_40100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (4))){
var inst_38669 = (state_38704[(7)]);
var inst_38669__$1 = (state_38704[(2)]);
var inst_38670 = (inst_38669__$1 == null);
var state_38704__$1 = (function (){var statearr_38709 = state_38704;
(statearr_38709[(7)] = inst_38669__$1);

return statearr_38709;
})();
if(cljs.core.truth_(inst_38670)){
var statearr_38710_40102 = state_38704__$1;
(statearr_38710_40102[(1)] = (5));

} else {
var statearr_38711_40103 = state_38704__$1;
(statearr_38711_40103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (15))){
var inst_38682 = (state_38704[(8)]);
var state_38704__$1 = state_38704;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38704__$1,(18),to,inst_38682);
} else {
if((state_val_38705 === (21))){
var inst_38695 = (state_38704[(2)]);
var state_38704__$1 = state_38704;
var statearr_38712_40104 = state_38704__$1;
(statearr_38712_40104[(2)] = inst_38695);

(statearr_38712_40104[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (13))){
var inst_38697 = (state_38704[(2)]);
var state_38704__$1 = (function (){var statearr_38713 = state_38704;
(statearr_38713[(9)] = inst_38697);

return statearr_38713;
})();
var statearr_38714_40105 = state_38704__$1;
(statearr_38714_40105[(2)] = null);

(statearr_38714_40105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (6))){
var inst_38669 = (state_38704[(7)]);
var state_38704__$1 = state_38704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38704__$1,(11),inst_38669);
} else {
if((state_val_38705 === (17))){
var inst_38690 = (state_38704[(2)]);
var state_38704__$1 = state_38704;
if(cljs.core.truth_(inst_38690)){
var statearr_38715_40106 = state_38704__$1;
(statearr_38715_40106[(1)] = (19));

} else {
var statearr_38716_40107 = state_38704__$1;
(statearr_38716_40107[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (3))){
var inst_38702 = (state_38704[(2)]);
var state_38704__$1 = state_38704;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38704__$1,inst_38702);
} else {
if((state_val_38705 === (12))){
var inst_38679 = (state_38704[(10)]);
var state_38704__$1 = state_38704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38704__$1,(14),inst_38679);
} else {
if((state_val_38705 === (2))){
var state_38704__$1 = state_38704;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38704__$1,(4),results);
} else {
if((state_val_38705 === (19))){
var state_38704__$1 = state_38704;
var statearr_38717_40109 = state_38704__$1;
(statearr_38717_40109[(2)] = null);

(statearr_38717_40109[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (11))){
var inst_38679 = (state_38704[(2)]);
var state_38704__$1 = (function (){var statearr_38718 = state_38704;
(statearr_38718[(10)] = inst_38679);

return statearr_38718;
})();
var statearr_38719_40111 = state_38704__$1;
(statearr_38719_40111[(2)] = null);

(statearr_38719_40111[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (9))){
var state_38704__$1 = state_38704;
var statearr_38720_40112 = state_38704__$1;
(statearr_38720_40112[(2)] = null);

(statearr_38720_40112[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (5))){
var state_38704__$1 = state_38704;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38721_40113 = state_38704__$1;
(statearr_38721_40113[(1)] = (8));

} else {
var statearr_38722_40114 = state_38704__$1;
(statearr_38722_40114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (14))){
var inst_38684 = (state_38704[(11)]);
var inst_38682 = (state_38704[(8)]);
var inst_38682__$1 = (state_38704[(2)]);
var inst_38683 = (inst_38682__$1 == null);
var inst_38684__$1 = cljs.core.not(inst_38683);
var state_38704__$1 = (function (){var statearr_38723 = state_38704;
(statearr_38723[(11)] = inst_38684__$1);

(statearr_38723[(8)] = inst_38682__$1);

return statearr_38723;
})();
if(inst_38684__$1){
var statearr_38724_40115 = state_38704__$1;
(statearr_38724_40115[(1)] = (15));

} else {
var statearr_38725_40116 = state_38704__$1;
(statearr_38725_40116[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (16))){
var inst_38684 = (state_38704[(11)]);
var state_38704__$1 = state_38704;
var statearr_38726_40117 = state_38704__$1;
(statearr_38726_40117[(2)] = inst_38684);

(statearr_38726_40117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (10))){
var inst_38676 = (state_38704[(2)]);
var state_38704__$1 = state_38704;
var statearr_38727_40119 = state_38704__$1;
(statearr_38727_40119[(2)] = inst_38676);

(statearr_38727_40119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (18))){
var inst_38687 = (state_38704[(2)]);
var state_38704__$1 = state_38704;
var statearr_38728_40121 = state_38704__$1;
(statearr_38728_40121[(2)] = inst_38687);

(statearr_38728_40121[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38705 === (8))){
var inst_38673 = cljs.core.async.close_BANG_(to);
var state_38704__$1 = state_38704;
var statearr_38729_40124 = state_38704__$1;
(statearr_38729_40124[(2)] = inst_38673);

(statearr_38729_40124[(1)] = (10));


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
});})(c__38428__auto__,jobs,results,process,async))
;
return ((function (switch__38327__auto__,c__38428__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____0 = (function (){
var statearr_38730 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38730[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__);

(statearr_38730[(1)] = (1));

return statearr_38730;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____1 = (function (state_38704){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_38704);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e38731){if((e38731 instanceof Object)){
var ex__38331__auto__ = e38731;
var statearr_38732_40127 = state_38704;
(statearr_38732_40127[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38731;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40130 = state_38704;
state_38704 = G__40130;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__ = function(state_38704){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____1.call(this,state_38704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38328__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto__,jobs,results,process,async))
})();
var state__38430__auto__ = (function (){var statearr_38733 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_38733[(6)] = c__38428__auto__);

return statearr_38733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto__,jobs,results,process,async))
);

return c__38428__auto__;
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
var G__38735 = arguments.length;
switch (G__38735) {
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
var G__38737 = arguments.length;
switch (G__38737) {
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
var G__38739 = arguments.length;
switch (G__38739) {
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
var c__38428__auto___40141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto___40141,tc,fc){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto___40141,tc,fc){
return (function (state_38765){
var state_val_38766 = (state_38765[(1)]);
if((state_val_38766 === (7))){
var inst_38761 = (state_38765[(2)]);
var state_38765__$1 = state_38765;
var statearr_38767_40142 = state_38765__$1;
(statearr_38767_40142[(2)] = inst_38761);

(statearr_38767_40142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38766 === (1))){
var state_38765__$1 = state_38765;
var statearr_38768_40143 = state_38765__$1;
(statearr_38768_40143[(2)] = null);

(statearr_38768_40143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38766 === (4))){
var inst_38742 = (state_38765[(7)]);
var inst_38742__$1 = (state_38765[(2)]);
var inst_38743 = (inst_38742__$1 == null);
var state_38765__$1 = (function (){var statearr_38769 = state_38765;
(statearr_38769[(7)] = inst_38742__$1);

return statearr_38769;
})();
if(cljs.core.truth_(inst_38743)){
var statearr_38770_40144 = state_38765__$1;
(statearr_38770_40144[(1)] = (5));

} else {
var statearr_38771_40145 = state_38765__$1;
(statearr_38771_40145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38766 === (13))){
var state_38765__$1 = state_38765;
var statearr_38772_40146 = state_38765__$1;
(statearr_38772_40146[(2)] = null);

(statearr_38772_40146[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38766 === (6))){
var inst_38742 = (state_38765[(7)]);
var inst_38748 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38742) : p.call(null,inst_38742));
var state_38765__$1 = state_38765;
if(cljs.core.truth_(inst_38748)){
var statearr_38773_40151 = state_38765__$1;
(statearr_38773_40151[(1)] = (9));

} else {
var statearr_38774_40152 = state_38765__$1;
(statearr_38774_40152[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38766 === (3))){
var inst_38763 = (state_38765[(2)]);
var state_38765__$1 = state_38765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38765__$1,inst_38763);
} else {
if((state_val_38766 === (12))){
var state_38765__$1 = state_38765;
var statearr_38775_40156 = state_38765__$1;
(statearr_38775_40156[(2)] = null);

(statearr_38775_40156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38766 === (2))){
var state_38765__$1 = state_38765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38765__$1,(4),ch);
} else {
if((state_val_38766 === (11))){
var inst_38742 = (state_38765[(7)]);
var inst_38752 = (state_38765[(2)]);
var state_38765__$1 = state_38765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38765__$1,(8),inst_38752,inst_38742);
} else {
if((state_val_38766 === (9))){
var state_38765__$1 = state_38765;
var statearr_38776_40157 = state_38765__$1;
(statearr_38776_40157[(2)] = tc);

(statearr_38776_40157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38766 === (5))){
var inst_38745 = cljs.core.async.close_BANG_(tc);
var inst_38746 = cljs.core.async.close_BANG_(fc);
var state_38765__$1 = (function (){var statearr_38777 = state_38765;
(statearr_38777[(8)] = inst_38745);

return statearr_38777;
})();
var statearr_38778_40158 = state_38765__$1;
(statearr_38778_40158[(2)] = inst_38746);

(statearr_38778_40158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38766 === (14))){
var inst_38759 = (state_38765[(2)]);
var state_38765__$1 = state_38765;
var statearr_38779_40159 = state_38765__$1;
(statearr_38779_40159[(2)] = inst_38759);

(statearr_38779_40159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38766 === (10))){
var state_38765__$1 = state_38765;
var statearr_38780_40160 = state_38765__$1;
(statearr_38780_40160[(2)] = fc);

(statearr_38780_40160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38766 === (8))){
var inst_38754 = (state_38765[(2)]);
var state_38765__$1 = state_38765;
if(cljs.core.truth_(inst_38754)){
var statearr_38781_40164 = state_38765__$1;
(statearr_38781_40164[(1)] = (12));

} else {
var statearr_38782_40165 = state_38765__$1;
(statearr_38782_40165[(1)] = (13));

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
});})(c__38428__auto___40141,tc,fc))
;
return ((function (switch__38327__auto__,c__38428__auto___40141,tc,fc){
return (function() {
var cljs$core$async$state_machine__38328__auto__ = null;
var cljs$core$async$state_machine__38328__auto____0 = (function (){
var statearr_38783 = [null,null,null,null,null,null,null,null,null];
(statearr_38783[(0)] = cljs$core$async$state_machine__38328__auto__);

(statearr_38783[(1)] = (1));

return statearr_38783;
});
var cljs$core$async$state_machine__38328__auto____1 = (function (state_38765){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_38765);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e38784){if((e38784 instanceof Object)){
var ex__38331__auto__ = e38784;
var statearr_38785_40169 = state_38765;
(statearr_38785_40169[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38784;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40170 = state_38765;
state_38765 = G__40170;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$state_machine__38328__auto__ = function(state_38765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38328__auto____1.call(this,state_38765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38328__auto____0;
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38328__auto____1;
return cljs$core$async$state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto___40141,tc,fc))
})();
var state__38430__auto__ = (function (){var statearr_38786 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_38786[(6)] = c__38428__auto___40141);

return statearr_38786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto___40141,tc,fc))
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
var c__38428__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto__){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto__){
return (function (state_38807){
var state_val_38808 = (state_38807[(1)]);
if((state_val_38808 === (7))){
var inst_38803 = (state_38807[(2)]);
var state_38807__$1 = state_38807;
var statearr_38809_40174 = state_38807__$1;
(statearr_38809_40174[(2)] = inst_38803);

(statearr_38809_40174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38808 === (1))){
var inst_38787 = init;
var state_38807__$1 = (function (){var statearr_38810 = state_38807;
(statearr_38810[(7)] = inst_38787);

return statearr_38810;
})();
var statearr_38811_40175 = state_38807__$1;
(statearr_38811_40175[(2)] = null);

(statearr_38811_40175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38808 === (4))){
var inst_38790 = (state_38807[(8)]);
var inst_38790__$1 = (state_38807[(2)]);
var inst_38791 = (inst_38790__$1 == null);
var state_38807__$1 = (function (){var statearr_38812 = state_38807;
(statearr_38812[(8)] = inst_38790__$1);

return statearr_38812;
})();
if(cljs.core.truth_(inst_38791)){
var statearr_38813_40177 = state_38807__$1;
(statearr_38813_40177[(1)] = (5));

} else {
var statearr_38814_40179 = state_38807__$1;
(statearr_38814_40179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38808 === (6))){
var inst_38787 = (state_38807[(7)]);
var inst_38790 = (state_38807[(8)]);
var inst_38794 = (state_38807[(9)]);
var inst_38794__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_38787,inst_38790) : f.call(null,inst_38787,inst_38790));
var inst_38795 = cljs.core.reduced_QMARK_(inst_38794__$1);
var state_38807__$1 = (function (){var statearr_38815 = state_38807;
(statearr_38815[(9)] = inst_38794__$1);

return statearr_38815;
})();
if(inst_38795){
var statearr_38816_40180 = state_38807__$1;
(statearr_38816_40180[(1)] = (8));

} else {
var statearr_38817_40181 = state_38807__$1;
(statearr_38817_40181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38808 === (3))){
var inst_38805 = (state_38807[(2)]);
var state_38807__$1 = state_38807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38807__$1,inst_38805);
} else {
if((state_val_38808 === (2))){
var state_38807__$1 = state_38807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38807__$1,(4),ch);
} else {
if((state_val_38808 === (9))){
var inst_38794 = (state_38807[(9)]);
var inst_38787 = inst_38794;
var state_38807__$1 = (function (){var statearr_38818 = state_38807;
(statearr_38818[(7)] = inst_38787);

return statearr_38818;
})();
var statearr_38819_40184 = state_38807__$1;
(statearr_38819_40184[(2)] = null);

(statearr_38819_40184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38808 === (5))){
var inst_38787 = (state_38807[(7)]);
var state_38807__$1 = state_38807;
var statearr_38820_40185 = state_38807__$1;
(statearr_38820_40185[(2)] = inst_38787);

(statearr_38820_40185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38808 === (10))){
var inst_38801 = (state_38807[(2)]);
var state_38807__$1 = state_38807;
var statearr_38821_40187 = state_38807__$1;
(statearr_38821_40187[(2)] = inst_38801);

(statearr_38821_40187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38808 === (8))){
var inst_38794 = (state_38807[(9)]);
var inst_38797 = cljs.core.deref(inst_38794);
var state_38807__$1 = state_38807;
var statearr_38822_40192 = state_38807__$1;
(statearr_38822_40192[(2)] = inst_38797);

(statearr_38822_40192[(1)] = (10));


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
});})(c__38428__auto__))
;
return ((function (switch__38327__auto__,c__38428__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38328__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38328__auto____0 = (function (){
var statearr_38823 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38823[(0)] = cljs$core$async$reduce_$_state_machine__38328__auto__);

(statearr_38823[(1)] = (1));

return statearr_38823;
});
var cljs$core$async$reduce_$_state_machine__38328__auto____1 = (function (state_38807){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_38807);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e38824){if((e38824 instanceof Object)){
var ex__38331__auto__ = e38824;
var statearr_38825_40198 = state_38807;
(statearr_38825_40198[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38824;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40200 = state_38807;
state_38807 = G__40200;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38328__auto__ = function(state_38807){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38328__auto____1.call(this,state_38807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38328__auto____0;
cljs$core$async$reduce_$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38328__auto____1;
return cljs$core$async$reduce_$_state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto__))
})();
var state__38430__auto__ = (function (){var statearr_38826 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_38826[(6)] = c__38428__auto__);

return statearr_38826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto__))
);

return c__38428__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__38428__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto__,f__$1){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto__,f__$1){
return (function (state_38832){
var state_val_38833 = (state_38832[(1)]);
if((state_val_38833 === (1))){
var inst_38827 = cljs.core.async.reduce(f__$1,init,ch);
var state_38832__$1 = state_38832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38832__$1,(2),inst_38827);
} else {
if((state_val_38833 === (2))){
var inst_38829 = (state_38832[(2)]);
var inst_38830 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_38829) : f__$1.call(null,inst_38829));
var state_38832__$1 = state_38832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38832__$1,inst_38830);
} else {
return null;
}
}
});})(c__38428__auto__,f__$1))
;
return ((function (switch__38327__auto__,c__38428__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__38328__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38328__auto____0 = (function (){
var statearr_38834 = [null,null,null,null,null,null,null];
(statearr_38834[(0)] = cljs$core$async$transduce_$_state_machine__38328__auto__);

(statearr_38834[(1)] = (1));

return statearr_38834;
});
var cljs$core$async$transduce_$_state_machine__38328__auto____1 = (function (state_38832){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_38832);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e38835){if((e38835 instanceof Object)){
var ex__38331__auto__ = e38835;
var statearr_38836_40219 = state_38832;
(statearr_38836_40219[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38835;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40223 = state_38832;
state_38832 = G__40223;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38328__auto__ = function(state_38832){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38328__auto____1.call(this,state_38832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38328__auto____0;
cljs$core$async$transduce_$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38328__auto____1;
return cljs$core$async$transduce_$_state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto__,f__$1))
})();
var state__38430__auto__ = (function (){var statearr_38837 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_38837[(6)] = c__38428__auto__);

return statearr_38837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto__,f__$1))
);

return c__38428__auto__;
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
var G__38839 = arguments.length;
switch (G__38839) {
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
var c__38428__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto__){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto__){
return (function (state_38864){
var state_val_38865 = (state_38864[(1)]);
if((state_val_38865 === (7))){
var inst_38846 = (state_38864[(2)]);
var state_38864__$1 = state_38864;
var statearr_38866_40231 = state_38864__$1;
(statearr_38866_40231[(2)] = inst_38846);

(statearr_38866_40231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38865 === (1))){
var inst_38840 = cljs.core.seq(coll);
var inst_38841 = inst_38840;
var state_38864__$1 = (function (){var statearr_38867 = state_38864;
(statearr_38867[(7)] = inst_38841);

return statearr_38867;
})();
var statearr_38868_40238 = state_38864__$1;
(statearr_38868_40238[(2)] = null);

(statearr_38868_40238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38865 === (4))){
var inst_38841 = (state_38864[(7)]);
var inst_38844 = cljs.core.first(inst_38841);
var state_38864__$1 = state_38864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38864__$1,(7),ch,inst_38844);
} else {
if((state_val_38865 === (13))){
var inst_38858 = (state_38864[(2)]);
var state_38864__$1 = state_38864;
var statearr_38869_40242 = state_38864__$1;
(statearr_38869_40242[(2)] = inst_38858);

(statearr_38869_40242[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38865 === (6))){
var inst_38849 = (state_38864[(2)]);
var state_38864__$1 = state_38864;
if(cljs.core.truth_(inst_38849)){
var statearr_38870_40246 = state_38864__$1;
(statearr_38870_40246[(1)] = (8));

} else {
var statearr_38871_40248 = state_38864__$1;
(statearr_38871_40248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38865 === (3))){
var inst_38862 = (state_38864[(2)]);
var state_38864__$1 = state_38864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38864__$1,inst_38862);
} else {
if((state_val_38865 === (12))){
var state_38864__$1 = state_38864;
var statearr_38872_40249 = state_38864__$1;
(statearr_38872_40249[(2)] = null);

(statearr_38872_40249[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38865 === (2))){
var inst_38841 = (state_38864[(7)]);
var state_38864__$1 = state_38864;
if(cljs.core.truth_(inst_38841)){
var statearr_38873_40252 = state_38864__$1;
(statearr_38873_40252[(1)] = (4));

} else {
var statearr_38874_40256 = state_38864__$1;
(statearr_38874_40256[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38865 === (11))){
var inst_38855 = cljs.core.async.close_BANG_(ch);
var state_38864__$1 = state_38864;
var statearr_38875_40262 = state_38864__$1;
(statearr_38875_40262[(2)] = inst_38855);

(statearr_38875_40262[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38865 === (9))){
var state_38864__$1 = state_38864;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38876_40263 = state_38864__$1;
(statearr_38876_40263[(1)] = (11));

} else {
var statearr_38877_40265 = state_38864__$1;
(statearr_38877_40265[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38865 === (5))){
var inst_38841 = (state_38864[(7)]);
var state_38864__$1 = state_38864;
var statearr_38878_40272 = state_38864__$1;
(statearr_38878_40272[(2)] = inst_38841);

(statearr_38878_40272[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38865 === (10))){
var inst_38860 = (state_38864[(2)]);
var state_38864__$1 = state_38864;
var statearr_38879_40275 = state_38864__$1;
(statearr_38879_40275[(2)] = inst_38860);

(statearr_38879_40275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38865 === (8))){
var inst_38841 = (state_38864[(7)]);
var inst_38851 = cljs.core.next(inst_38841);
var inst_38841__$1 = inst_38851;
var state_38864__$1 = (function (){var statearr_38880 = state_38864;
(statearr_38880[(7)] = inst_38841__$1);

return statearr_38880;
})();
var statearr_38881_40281 = state_38864__$1;
(statearr_38881_40281[(2)] = null);

(statearr_38881_40281[(1)] = (2));


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
});})(c__38428__auto__))
;
return ((function (switch__38327__auto__,c__38428__auto__){
return (function() {
var cljs$core$async$state_machine__38328__auto__ = null;
var cljs$core$async$state_machine__38328__auto____0 = (function (){
var statearr_38882 = [null,null,null,null,null,null,null,null];
(statearr_38882[(0)] = cljs$core$async$state_machine__38328__auto__);

(statearr_38882[(1)] = (1));

return statearr_38882;
});
var cljs$core$async$state_machine__38328__auto____1 = (function (state_38864){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_38864);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e38883){if((e38883 instanceof Object)){
var ex__38331__auto__ = e38883;
var statearr_38884_40288 = state_38864;
(statearr_38884_40288[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_38864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38883;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40292 = state_38864;
state_38864 = G__40292;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$state_machine__38328__auto__ = function(state_38864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38328__auto____1.call(this,state_38864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38328__auto____0;
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38328__auto____1;
return cljs$core$async$state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto__))
})();
var state__38430__auto__ = (function (){var statearr_38885 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_38885[(6)] = c__38428__auto__);

return statearr_38885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto__))
);

return c__38428__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38886 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38886 = (function (ch,cs,meta38887){
this.ch = ch;
this.cs = cs;
this.meta38887 = meta38887;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38888,meta38887__$1){
var self__ = this;
var _38888__$1 = this;
return (new cljs.core.async.t_cljs$core$async38886(self__.ch,self__.cs,meta38887__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38888){
var self__ = this;
var _38888__$1 = this;
return self__.meta38887;
});})(cs))
;

cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38886.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38886.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38887","meta38887",199987112,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38886.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38886.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38886";

cljs.core.async.t_cljs$core$async38886.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async38886");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38886.
 */
cljs.core.async.__GT_t_cljs$core$async38886 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38886(ch__$1,cs__$1,meta38887){
return (new cljs.core.async.t_cljs$core$async38886(ch__$1,cs__$1,meta38887));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38886(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__38428__auto___40320 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto___40320,cs,m,dchan,dctr,done){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto___40320,cs,m,dchan,dctr,done){
return (function (state_39023){
var state_val_39024 = (state_39023[(1)]);
if((state_val_39024 === (7))){
var inst_39019 = (state_39023[(2)]);
var state_39023__$1 = state_39023;
var statearr_39025_40322 = state_39023__$1;
(statearr_39025_40322[(2)] = inst_39019);

(statearr_39025_40322[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (20))){
var inst_38922 = (state_39023[(7)]);
var inst_38934 = cljs.core.first(inst_38922);
var inst_38935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38934,(0),null);
var inst_38936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38934,(1),null);
var state_39023__$1 = (function (){var statearr_39026 = state_39023;
(statearr_39026[(8)] = inst_38935);

return statearr_39026;
})();
if(cljs.core.truth_(inst_38936)){
var statearr_39027_40325 = state_39023__$1;
(statearr_39027_40325[(1)] = (22));

} else {
var statearr_39028_40326 = state_39023__$1;
(statearr_39028_40326[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (27))){
var inst_38964 = (state_39023[(9)]);
var inst_38966 = (state_39023[(10)]);
var inst_38891 = (state_39023[(11)]);
var inst_38971 = (state_39023[(12)]);
var inst_38971__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38964,inst_38966);
var inst_38972 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38971__$1,inst_38891,done);
var state_39023__$1 = (function (){var statearr_39029 = state_39023;
(statearr_39029[(12)] = inst_38971__$1);

return statearr_39029;
})();
if(cljs.core.truth_(inst_38972)){
var statearr_39030_40331 = state_39023__$1;
(statearr_39030_40331[(1)] = (30));

} else {
var statearr_39031_40332 = state_39023__$1;
(statearr_39031_40332[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (1))){
var state_39023__$1 = state_39023;
var statearr_39032_40334 = state_39023__$1;
(statearr_39032_40334[(2)] = null);

(statearr_39032_40334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (24))){
var inst_38922 = (state_39023[(7)]);
var inst_38941 = (state_39023[(2)]);
var inst_38942 = cljs.core.next(inst_38922);
var inst_38900 = inst_38942;
var inst_38901 = null;
var inst_38902 = (0);
var inst_38903 = (0);
var state_39023__$1 = (function (){var statearr_39033 = state_39023;
(statearr_39033[(13)] = inst_38900);

(statearr_39033[(14)] = inst_38901);

(statearr_39033[(15)] = inst_38941);

(statearr_39033[(16)] = inst_38903);

(statearr_39033[(17)] = inst_38902);

return statearr_39033;
})();
var statearr_39034_40337 = state_39023__$1;
(statearr_39034_40337[(2)] = null);

(statearr_39034_40337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (39))){
var state_39023__$1 = state_39023;
var statearr_39038_40338 = state_39023__$1;
(statearr_39038_40338[(2)] = null);

(statearr_39038_40338[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (4))){
var inst_38891 = (state_39023[(11)]);
var inst_38891__$1 = (state_39023[(2)]);
var inst_38892 = (inst_38891__$1 == null);
var state_39023__$1 = (function (){var statearr_39039 = state_39023;
(statearr_39039[(11)] = inst_38891__$1);

return statearr_39039;
})();
if(cljs.core.truth_(inst_38892)){
var statearr_39040_40341 = state_39023__$1;
(statearr_39040_40341[(1)] = (5));

} else {
var statearr_39041_40342 = state_39023__$1;
(statearr_39041_40342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (15))){
var inst_38900 = (state_39023[(13)]);
var inst_38901 = (state_39023[(14)]);
var inst_38903 = (state_39023[(16)]);
var inst_38902 = (state_39023[(17)]);
var inst_38918 = (state_39023[(2)]);
var inst_38919 = (inst_38903 + (1));
var tmp39035 = inst_38900;
var tmp39036 = inst_38901;
var tmp39037 = inst_38902;
var inst_38900__$1 = tmp39035;
var inst_38901__$1 = tmp39036;
var inst_38902__$1 = tmp39037;
var inst_38903__$1 = inst_38919;
var state_39023__$1 = (function (){var statearr_39042 = state_39023;
(statearr_39042[(13)] = inst_38900__$1);

(statearr_39042[(18)] = inst_38918);

(statearr_39042[(14)] = inst_38901__$1);

(statearr_39042[(16)] = inst_38903__$1);

(statearr_39042[(17)] = inst_38902__$1);

return statearr_39042;
})();
var statearr_39043_40352 = state_39023__$1;
(statearr_39043_40352[(2)] = null);

(statearr_39043_40352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (21))){
var inst_38945 = (state_39023[(2)]);
var state_39023__$1 = state_39023;
var statearr_39047_40353 = state_39023__$1;
(statearr_39047_40353[(2)] = inst_38945);

(statearr_39047_40353[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (31))){
var inst_38971 = (state_39023[(12)]);
var inst_38975 = done(null);
var inst_38976 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38971);
var state_39023__$1 = (function (){var statearr_39048 = state_39023;
(statearr_39048[(19)] = inst_38975);

return statearr_39048;
})();
var statearr_39049_40359 = state_39023__$1;
(statearr_39049_40359[(2)] = inst_38976);

(statearr_39049_40359[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (32))){
var inst_38963 = (state_39023[(20)]);
var inst_38964 = (state_39023[(9)]);
var inst_38966 = (state_39023[(10)]);
var inst_38965 = (state_39023[(21)]);
var inst_38978 = (state_39023[(2)]);
var inst_38979 = (inst_38966 + (1));
var tmp39044 = inst_38963;
var tmp39045 = inst_38964;
var tmp39046 = inst_38965;
var inst_38963__$1 = tmp39044;
var inst_38964__$1 = tmp39045;
var inst_38965__$1 = tmp39046;
var inst_38966__$1 = inst_38979;
var state_39023__$1 = (function (){var statearr_39050 = state_39023;
(statearr_39050[(20)] = inst_38963__$1);

(statearr_39050[(22)] = inst_38978);

(statearr_39050[(9)] = inst_38964__$1);

(statearr_39050[(10)] = inst_38966__$1);

(statearr_39050[(21)] = inst_38965__$1);

return statearr_39050;
})();
var statearr_39051_40377 = state_39023__$1;
(statearr_39051_40377[(2)] = null);

(statearr_39051_40377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (40))){
var inst_38991 = (state_39023[(23)]);
var inst_38995 = done(null);
var inst_38996 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_38991);
var state_39023__$1 = (function (){var statearr_39052 = state_39023;
(statearr_39052[(24)] = inst_38995);

return statearr_39052;
})();
var statearr_39053_40379 = state_39023__$1;
(statearr_39053_40379[(2)] = inst_38996);

(statearr_39053_40379[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (33))){
var inst_38982 = (state_39023[(25)]);
var inst_38984 = cljs.core.chunked_seq_QMARK_(inst_38982);
var state_39023__$1 = state_39023;
if(inst_38984){
var statearr_39054_40380 = state_39023__$1;
(statearr_39054_40380[(1)] = (36));

} else {
var statearr_39055_40381 = state_39023__$1;
(statearr_39055_40381[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (13))){
var inst_38912 = (state_39023[(26)]);
var inst_38915 = cljs.core.async.close_BANG_(inst_38912);
var state_39023__$1 = state_39023;
var statearr_39056_40384 = state_39023__$1;
(statearr_39056_40384[(2)] = inst_38915);

(statearr_39056_40384[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (22))){
var inst_38935 = (state_39023[(8)]);
var inst_38938 = cljs.core.async.close_BANG_(inst_38935);
var state_39023__$1 = state_39023;
var statearr_39057_40387 = state_39023__$1;
(statearr_39057_40387[(2)] = inst_38938);

(statearr_39057_40387[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (36))){
var inst_38982 = (state_39023[(25)]);
var inst_38986 = cljs.core.chunk_first(inst_38982);
var inst_38987 = cljs.core.chunk_rest(inst_38982);
var inst_38988 = cljs.core.count(inst_38986);
var inst_38963 = inst_38987;
var inst_38964 = inst_38986;
var inst_38965 = inst_38988;
var inst_38966 = (0);
var state_39023__$1 = (function (){var statearr_39058 = state_39023;
(statearr_39058[(20)] = inst_38963);

(statearr_39058[(9)] = inst_38964);

(statearr_39058[(10)] = inst_38966);

(statearr_39058[(21)] = inst_38965);

return statearr_39058;
})();
var statearr_39059_40388 = state_39023__$1;
(statearr_39059_40388[(2)] = null);

(statearr_39059_40388[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (41))){
var inst_38982 = (state_39023[(25)]);
var inst_38998 = (state_39023[(2)]);
var inst_38999 = cljs.core.next(inst_38982);
var inst_38963 = inst_38999;
var inst_38964 = null;
var inst_38965 = (0);
var inst_38966 = (0);
var state_39023__$1 = (function (){var statearr_39060 = state_39023;
(statearr_39060[(20)] = inst_38963);

(statearr_39060[(9)] = inst_38964);

(statearr_39060[(10)] = inst_38966);

(statearr_39060[(27)] = inst_38998);

(statearr_39060[(21)] = inst_38965);

return statearr_39060;
})();
var statearr_39061_40390 = state_39023__$1;
(statearr_39061_40390[(2)] = null);

(statearr_39061_40390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (43))){
var state_39023__$1 = state_39023;
var statearr_39062_40393 = state_39023__$1;
(statearr_39062_40393[(2)] = null);

(statearr_39062_40393[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (29))){
var inst_39007 = (state_39023[(2)]);
var state_39023__$1 = state_39023;
var statearr_39063_40399 = state_39023__$1;
(statearr_39063_40399[(2)] = inst_39007);

(statearr_39063_40399[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (44))){
var inst_39016 = (state_39023[(2)]);
var state_39023__$1 = (function (){var statearr_39064 = state_39023;
(statearr_39064[(28)] = inst_39016);

return statearr_39064;
})();
var statearr_39065_40403 = state_39023__$1;
(statearr_39065_40403[(2)] = null);

(statearr_39065_40403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (6))){
var inst_38955 = (state_39023[(29)]);
var inst_38954 = cljs.core.deref(cs);
var inst_38955__$1 = cljs.core.keys(inst_38954);
var inst_38956 = cljs.core.count(inst_38955__$1);
var inst_38957 = cljs.core.reset_BANG_(dctr,inst_38956);
var inst_38962 = cljs.core.seq(inst_38955__$1);
var inst_38963 = inst_38962;
var inst_38964 = null;
var inst_38965 = (0);
var inst_38966 = (0);
var state_39023__$1 = (function (){var statearr_39066 = state_39023;
(statearr_39066[(20)] = inst_38963);

(statearr_39066[(9)] = inst_38964);

(statearr_39066[(10)] = inst_38966);

(statearr_39066[(29)] = inst_38955__$1);

(statearr_39066[(30)] = inst_38957);

(statearr_39066[(21)] = inst_38965);

return statearr_39066;
})();
var statearr_39067_40404 = state_39023__$1;
(statearr_39067_40404[(2)] = null);

(statearr_39067_40404[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (28))){
var inst_38963 = (state_39023[(20)]);
var inst_38982 = (state_39023[(25)]);
var inst_38982__$1 = cljs.core.seq(inst_38963);
var state_39023__$1 = (function (){var statearr_39068 = state_39023;
(statearr_39068[(25)] = inst_38982__$1);

return statearr_39068;
})();
if(inst_38982__$1){
var statearr_39069_40405 = state_39023__$1;
(statearr_39069_40405[(1)] = (33));

} else {
var statearr_39070_40406 = state_39023__$1;
(statearr_39070_40406[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (25))){
var inst_38966 = (state_39023[(10)]);
var inst_38965 = (state_39023[(21)]);
var inst_38968 = (inst_38966 < inst_38965);
var inst_38969 = inst_38968;
var state_39023__$1 = state_39023;
if(cljs.core.truth_(inst_38969)){
var statearr_39071_40407 = state_39023__$1;
(statearr_39071_40407[(1)] = (27));

} else {
var statearr_39072_40408 = state_39023__$1;
(statearr_39072_40408[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (34))){
var state_39023__$1 = state_39023;
var statearr_39073_40409 = state_39023__$1;
(statearr_39073_40409[(2)] = null);

(statearr_39073_40409[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (17))){
var state_39023__$1 = state_39023;
var statearr_39074_40416 = state_39023__$1;
(statearr_39074_40416[(2)] = null);

(statearr_39074_40416[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (3))){
var inst_39021 = (state_39023[(2)]);
var state_39023__$1 = state_39023;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39023__$1,inst_39021);
} else {
if((state_val_39024 === (12))){
var inst_38950 = (state_39023[(2)]);
var state_39023__$1 = state_39023;
var statearr_39075_40417 = state_39023__$1;
(statearr_39075_40417[(2)] = inst_38950);

(statearr_39075_40417[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (2))){
var state_39023__$1 = state_39023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39023__$1,(4),ch);
} else {
if((state_val_39024 === (23))){
var state_39023__$1 = state_39023;
var statearr_39076_40422 = state_39023__$1;
(statearr_39076_40422[(2)] = null);

(statearr_39076_40422[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (35))){
var inst_39005 = (state_39023[(2)]);
var state_39023__$1 = state_39023;
var statearr_39077_40425 = state_39023__$1;
(statearr_39077_40425[(2)] = inst_39005);

(statearr_39077_40425[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (19))){
var inst_38922 = (state_39023[(7)]);
var inst_38926 = cljs.core.chunk_first(inst_38922);
var inst_38927 = cljs.core.chunk_rest(inst_38922);
var inst_38928 = cljs.core.count(inst_38926);
var inst_38900 = inst_38927;
var inst_38901 = inst_38926;
var inst_38902 = inst_38928;
var inst_38903 = (0);
var state_39023__$1 = (function (){var statearr_39078 = state_39023;
(statearr_39078[(13)] = inst_38900);

(statearr_39078[(14)] = inst_38901);

(statearr_39078[(16)] = inst_38903);

(statearr_39078[(17)] = inst_38902);

return statearr_39078;
})();
var statearr_39079_40426 = state_39023__$1;
(statearr_39079_40426[(2)] = null);

(statearr_39079_40426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (11))){
var inst_38900 = (state_39023[(13)]);
var inst_38922 = (state_39023[(7)]);
var inst_38922__$1 = cljs.core.seq(inst_38900);
var state_39023__$1 = (function (){var statearr_39080 = state_39023;
(statearr_39080[(7)] = inst_38922__$1);

return statearr_39080;
})();
if(inst_38922__$1){
var statearr_39081_40427 = state_39023__$1;
(statearr_39081_40427[(1)] = (16));

} else {
var statearr_39082_40428 = state_39023__$1;
(statearr_39082_40428[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (9))){
var inst_38952 = (state_39023[(2)]);
var state_39023__$1 = state_39023;
var statearr_39083_40435 = state_39023__$1;
(statearr_39083_40435[(2)] = inst_38952);

(statearr_39083_40435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (5))){
var inst_38898 = cljs.core.deref(cs);
var inst_38899 = cljs.core.seq(inst_38898);
var inst_38900 = inst_38899;
var inst_38901 = null;
var inst_38902 = (0);
var inst_38903 = (0);
var state_39023__$1 = (function (){var statearr_39084 = state_39023;
(statearr_39084[(13)] = inst_38900);

(statearr_39084[(14)] = inst_38901);

(statearr_39084[(16)] = inst_38903);

(statearr_39084[(17)] = inst_38902);

return statearr_39084;
})();
var statearr_39085_40436 = state_39023__$1;
(statearr_39085_40436[(2)] = null);

(statearr_39085_40436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (14))){
var state_39023__$1 = state_39023;
var statearr_39086_40437 = state_39023__$1;
(statearr_39086_40437[(2)] = null);

(statearr_39086_40437[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (45))){
var inst_39013 = (state_39023[(2)]);
var state_39023__$1 = state_39023;
var statearr_39087_40438 = state_39023__$1;
(statearr_39087_40438[(2)] = inst_39013);

(statearr_39087_40438[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (26))){
var inst_38955 = (state_39023[(29)]);
var inst_39009 = (state_39023[(2)]);
var inst_39010 = cljs.core.seq(inst_38955);
var state_39023__$1 = (function (){var statearr_39088 = state_39023;
(statearr_39088[(31)] = inst_39009);

return statearr_39088;
})();
if(inst_39010){
var statearr_39089_40439 = state_39023__$1;
(statearr_39089_40439[(1)] = (42));

} else {
var statearr_39090_40440 = state_39023__$1;
(statearr_39090_40440[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (16))){
var inst_38922 = (state_39023[(7)]);
var inst_38924 = cljs.core.chunked_seq_QMARK_(inst_38922);
var state_39023__$1 = state_39023;
if(inst_38924){
var statearr_39091_40441 = state_39023__$1;
(statearr_39091_40441[(1)] = (19));

} else {
var statearr_39092_40442 = state_39023__$1;
(statearr_39092_40442[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (38))){
var inst_39002 = (state_39023[(2)]);
var state_39023__$1 = state_39023;
var statearr_39093_40443 = state_39023__$1;
(statearr_39093_40443[(2)] = inst_39002);

(statearr_39093_40443[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (30))){
var state_39023__$1 = state_39023;
var statearr_39094_40444 = state_39023__$1;
(statearr_39094_40444[(2)] = null);

(statearr_39094_40444[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (10))){
var inst_38901 = (state_39023[(14)]);
var inst_38903 = (state_39023[(16)]);
var inst_38911 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_38901,inst_38903);
var inst_38912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38911,(0),null);
var inst_38913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38911,(1),null);
var state_39023__$1 = (function (){var statearr_39095 = state_39023;
(statearr_39095[(26)] = inst_38912);

return statearr_39095;
})();
if(cljs.core.truth_(inst_38913)){
var statearr_39096_40445 = state_39023__$1;
(statearr_39096_40445[(1)] = (13));

} else {
var statearr_39097_40446 = state_39023__$1;
(statearr_39097_40446[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (18))){
var inst_38948 = (state_39023[(2)]);
var state_39023__$1 = state_39023;
var statearr_39098_40447 = state_39023__$1;
(statearr_39098_40447[(2)] = inst_38948);

(statearr_39098_40447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (42))){
var state_39023__$1 = state_39023;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39023__$1,(45),dchan);
} else {
if((state_val_39024 === (37))){
var inst_38991 = (state_39023[(23)]);
var inst_38891 = (state_39023[(11)]);
var inst_38982 = (state_39023[(25)]);
var inst_38991__$1 = cljs.core.first(inst_38982);
var inst_38992 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_38991__$1,inst_38891,done);
var state_39023__$1 = (function (){var statearr_39099 = state_39023;
(statearr_39099[(23)] = inst_38991__$1);

return statearr_39099;
})();
if(cljs.core.truth_(inst_38992)){
var statearr_39100_40448 = state_39023__$1;
(statearr_39100_40448[(1)] = (39));

} else {
var statearr_39101_40449 = state_39023__$1;
(statearr_39101_40449[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39024 === (8))){
var inst_38903 = (state_39023[(16)]);
var inst_38902 = (state_39023[(17)]);
var inst_38905 = (inst_38903 < inst_38902);
var inst_38906 = inst_38905;
var state_39023__$1 = state_39023;
if(cljs.core.truth_(inst_38906)){
var statearr_39102_40450 = state_39023__$1;
(statearr_39102_40450[(1)] = (10));

} else {
var statearr_39103_40451 = state_39023__$1;
(statearr_39103_40451[(1)] = (11));

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
});})(c__38428__auto___40320,cs,m,dchan,dctr,done))
;
return ((function (switch__38327__auto__,c__38428__auto___40320,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38328__auto__ = null;
var cljs$core$async$mult_$_state_machine__38328__auto____0 = (function (){
var statearr_39104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39104[(0)] = cljs$core$async$mult_$_state_machine__38328__auto__);

(statearr_39104[(1)] = (1));

return statearr_39104;
});
var cljs$core$async$mult_$_state_machine__38328__auto____1 = (function (state_39023){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_39023);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e39105){if((e39105 instanceof Object)){
var ex__38331__auto__ = e39105;
var statearr_39106_40454 = state_39023;
(statearr_39106_40454[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39105;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40459 = state_39023;
state_39023 = G__40459;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38328__auto__ = function(state_39023){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38328__auto____1.call(this,state_39023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38328__auto____0;
cljs$core$async$mult_$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38328__auto____1;
return cljs$core$async$mult_$_state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto___40320,cs,m,dchan,dctr,done))
})();
var state__38430__auto__ = (function (){var statearr_39107 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_39107[(6)] = c__38428__auto___40320);

return statearr_39107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto___40320,cs,m,dchan,dctr,done))
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
var G__39109 = arguments.length;
switch (G__39109) {
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
var len__4730__auto___40473 = arguments.length;
var i__4731__auto___40474 = (0);
while(true){
if((i__4731__auto___40474 < len__4730__auto___40473)){
args__4736__auto__.push((arguments[i__4731__auto___40474]));

var G__40476 = (i__4731__auto___40474 + (1));
i__4731__auto___40474 = G__40476;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39114){
var map__39115 = p__39114;
var map__39115__$1 = (((((!((map__39115 == null))))?(((((map__39115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39115):map__39115);
var opts = map__39115__$1;
var statearr_39117_40480 = state;
(statearr_39117_40480[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__39115,map__39115__$1,opts){
return (function (val){
var statearr_39118_40481 = state;
(statearr_39118_40481[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__39115,map__39115__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_39119_40482 = state;
(statearr_39119_40482[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39110){
var G__39111 = cljs.core.first(seq39110);
var seq39110__$1 = cljs.core.next(seq39110);
var G__39112 = cljs.core.first(seq39110__$1);
var seq39110__$2 = cljs.core.next(seq39110__$1);
var G__39113 = cljs.core.first(seq39110__$2);
var seq39110__$3 = cljs.core.next(seq39110__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39111,G__39112,G__39113,seq39110__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39120 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39120 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39121){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39121 = meta39121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39122,meta39121__$1){
var self__ = this;
var _39122__$1 = this;
return (new cljs.core.async.t_cljs$core$async39120(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39121__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39120.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39122){
var self__ = this;
var _39122__$1 = this;
return self__.meta39121;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39120.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39120.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39120.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39120.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39120.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39120.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39120.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39120.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async39120.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39121","meta39121",-178630475,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39120.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39120";

cljs.core.async.t_cljs$core$async39120.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39120");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39120.
 */
cljs.core.async.__GT_t_cljs$core$async39120 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39120(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39121){
return (new cljs.core.async.t_cljs$core$async39120(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39121));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39120(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38428__auto___40511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto___40511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto___40511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39224){
var state_val_39225 = (state_39224[(1)]);
if((state_val_39225 === (7))){
var inst_39139 = (state_39224[(2)]);
var state_39224__$1 = state_39224;
var statearr_39226_40512 = state_39224__$1;
(statearr_39226_40512[(2)] = inst_39139);

(statearr_39226_40512[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (20))){
var inst_39151 = (state_39224[(7)]);
var state_39224__$1 = state_39224;
var statearr_39227_40513 = state_39224__$1;
(statearr_39227_40513[(2)] = inst_39151);

(statearr_39227_40513[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (27))){
var state_39224__$1 = state_39224;
var statearr_39228_40514 = state_39224__$1;
(statearr_39228_40514[(2)] = null);

(statearr_39228_40514[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (1))){
var inst_39126 = (state_39224[(8)]);
var inst_39126__$1 = calc_state();
var inst_39128 = (inst_39126__$1 == null);
var inst_39129 = cljs.core.not(inst_39128);
var state_39224__$1 = (function (){var statearr_39229 = state_39224;
(statearr_39229[(8)] = inst_39126__$1);

return statearr_39229;
})();
if(inst_39129){
var statearr_39230_40522 = state_39224__$1;
(statearr_39230_40522[(1)] = (2));

} else {
var statearr_39231_40523 = state_39224__$1;
(statearr_39231_40523[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (24))){
var inst_39198 = (state_39224[(9)]);
var inst_39175 = (state_39224[(10)]);
var inst_39184 = (state_39224[(11)]);
var inst_39198__$1 = (inst_39175.cljs$core$IFn$_invoke$arity$1 ? inst_39175.cljs$core$IFn$_invoke$arity$1(inst_39184) : inst_39175.call(null,inst_39184));
var state_39224__$1 = (function (){var statearr_39232 = state_39224;
(statearr_39232[(9)] = inst_39198__$1);

return statearr_39232;
})();
if(cljs.core.truth_(inst_39198__$1)){
var statearr_39233_40527 = state_39224__$1;
(statearr_39233_40527[(1)] = (29));

} else {
var statearr_39234_40528 = state_39224__$1;
(statearr_39234_40528[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (4))){
var inst_39142 = (state_39224[(2)]);
var state_39224__$1 = state_39224;
if(cljs.core.truth_(inst_39142)){
var statearr_39235_40532 = state_39224__$1;
(statearr_39235_40532[(1)] = (8));

} else {
var statearr_39236_40533 = state_39224__$1;
(statearr_39236_40533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (15))){
var inst_39169 = (state_39224[(2)]);
var state_39224__$1 = state_39224;
if(cljs.core.truth_(inst_39169)){
var statearr_39237_40534 = state_39224__$1;
(statearr_39237_40534[(1)] = (19));

} else {
var statearr_39238_40535 = state_39224__$1;
(statearr_39238_40535[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (21))){
var inst_39174 = (state_39224[(12)]);
var inst_39174__$1 = (state_39224[(2)]);
var inst_39175 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39174__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39174__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39174__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39224__$1 = (function (){var statearr_39239 = state_39224;
(statearr_39239[(12)] = inst_39174__$1);

(statearr_39239[(10)] = inst_39175);

(statearr_39239[(13)] = inst_39176);

return statearr_39239;
})();
return cljs.core.async.ioc_alts_BANG_(state_39224__$1,(22),inst_39177);
} else {
if((state_val_39225 === (31))){
var inst_39206 = (state_39224[(2)]);
var state_39224__$1 = state_39224;
if(cljs.core.truth_(inst_39206)){
var statearr_39240_40543 = state_39224__$1;
(statearr_39240_40543[(1)] = (32));

} else {
var statearr_39241_40544 = state_39224__$1;
(statearr_39241_40544[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (32))){
var inst_39183 = (state_39224[(14)]);
var state_39224__$1 = state_39224;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39224__$1,(35),out,inst_39183);
} else {
if((state_val_39225 === (33))){
var inst_39174 = (state_39224[(12)]);
var inst_39151 = inst_39174;
var state_39224__$1 = (function (){var statearr_39242 = state_39224;
(statearr_39242[(7)] = inst_39151);

return statearr_39242;
})();
var statearr_39243_40545 = state_39224__$1;
(statearr_39243_40545[(2)] = null);

(statearr_39243_40545[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (13))){
var inst_39151 = (state_39224[(7)]);
var inst_39158 = inst_39151.cljs$lang$protocol_mask$partition0$;
var inst_39159 = (inst_39158 & (64));
var inst_39160 = inst_39151.cljs$core$ISeq$;
var inst_39161 = (cljs.core.PROTOCOL_SENTINEL === inst_39160);
var inst_39162 = ((inst_39159) || (inst_39161));
var state_39224__$1 = state_39224;
if(cljs.core.truth_(inst_39162)){
var statearr_39244_40546 = state_39224__$1;
(statearr_39244_40546[(1)] = (16));

} else {
var statearr_39245_40547 = state_39224__$1;
(statearr_39245_40547[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (22))){
var inst_39183 = (state_39224[(14)]);
var inst_39184 = (state_39224[(11)]);
var inst_39182 = (state_39224[(2)]);
var inst_39183__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39182,(0),null);
var inst_39184__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39182,(1),null);
var inst_39185 = (inst_39183__$1 == null);
var inst_39186 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39184__$1,change);
var inst_39187 = ((inst_39185) || (inst_39186));
var state_39224__$1 = (function (){var statearr_39246 = state_39224;
(statearr_39246[(14)] = inst_39183__$1);

(statearr_39246[(11)] = inst_39184__$1);

return statearr_39246;
})();
if(cljs.core.truth_(inst_39187)){
var statearr_39247_40548 = state_39224__$1;
(statearr_39247_40548[(1)] = (23));

} else {
var statearr_39248_40551 = state_39224__$1;
(statearr_39248_40551[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (36))){
var inst_39174 = (state_39224[(12)]);
var inst_39151 = inst_39174;
var state_39224__$1 = (function (){var statearr_39249 = state_39224;
(statearr_39249[(7)] = inst_39151);

return statearr_39249;
})();
var statearr_39250_40552 = state_39224__$1;
(statearr_39250_40552[(2)] = null);

(statearr_39250_40552[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (29))){
var inst_39198 = (state_39224[(9)]);
var state_39224__$1 = state_39224;
var statearr_39251_40553 = state_39224__$1;
(statearr_39251_40553[(2)] = inst_39198);

(statearr_39251_40553[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (6))){
var state_39224__$1 = state_39224;
var statearr_39252_40555 = state_39224__$1;
(statearr_39252_40555[(2)] = false);

(statearr_39252_40555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (28))){
var inst_39194 = (state_39224[(2)]);
var inst_39195 = calc_state();
var inst_39151 = inst_39195;
var state_39224__$1 = (function (){var statearr_39253 = state_39224;
(statearr_39253[(15)] = inst_39194);

(statearr_39253[(7)] = inst_39151);

return statearr_39253;
})();
var statearr_39254_40557 = state_39224__$1;
(statearr_39254_40557[(2)] = null);

(statearr_39254_40557[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (25))){
var inst_39220 = (state_39224[(2)]);
var state_39224__$1 = state_39224;
var statearr_39255_40560 = state_39224__$1;
(statearr_39255_40560[(2)] = inst_39220);

(statearr_39255_40560[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (34))){
var inst_39218 = (state_39224[(2)]);
var state_39224__$1 = state_39224;
var statearr_39256_40564 = state_39224__$1;
(statearr_39256_40564[(2)] = inst_39218);

(statearr_39256_40564[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (17))){
var state_39224__$1 = state_39224;
var statearr_39257_40565 = state_39224__$1;
(statearr_39257_40565[(2)] = false);

(statearr_39257_40565[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (3))){
var state_39224__$1 = state_39224;
var statearr_39258_40566 = state_39224__$1;
(statearr_39258_40566[(2)] = false);

(statearr_39258_40566[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (12))){
var inst_39222 = (state_39224[(2)]);
var state_39224__$1 = state_39224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39224__$1,inst_39222);
} else {
if((state_val_39225 === (2))){
var inst_39126 = (state_39224[(8)]);
var inst_39131 = inst_39126.cljs$lang$protocol_mask$partition0$;
var inst_39132 = (inst_39131 & (64));
var inst_39133 = inst_39126.cljs$core$ISeq$;
var inst_39134 = (cljs.core.PROTOCOL_SENTINEL === inst_39133);
var inst_39135 = ((inst_39132) || (inst_39134));
var state_39224__$1 = state_39224;
if(cljs.core.truth_(inst_39135)){
var statearr_39259_40568 = state_39224__$1;
(statearr_39259_40568[(1)] = (5));

} else {
var statearr_39260_40569 = state_39224__$1;
(statearr_39260_40569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (23))){
var inst_39183 = (state_39224[(14)]);
var inst_39189 = (inst_39183 == null);
var state_39224__$1 = state_39224;
if(cljs.core.truth_(inst_39189)){
var statearr_39261_40572 = state_39224__$1;
(statearr_39261_40572[(1)] = (26));

} else {
var statearr_39262_40573 = state_39224__$1;
(statearr_39262_40573[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (35))){
var inst_39209 = (state_39224[(2)]);
var state_39224__$1 = state_39224;
if(cljs.core.truth_(inst_39209)){
var statearr_39263_40574 = state_39224__$1;
(statearr_39263_40574[(1)] = (36));

} else {
var statearr_39264_40575 = state_39224__$1;
(statearr_39264_40575[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (19))){
var inst_39151 = (state_39224[(7)]);
var inst_39171 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39151);
var state_39224__$1 = state_39224;
var statearr_39265_40576 = state_39224__$1;
(statearr_39265_40576[(2)] = inst_39171);

(statearr_39265_40576[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (11))){
var inst_39151 = (state_39224[(7)]);
var inst_39155 = (inst_39151 == null);
var inst_39156 = cljs.core.not(inst_39155);
var state_39224__$1 = state_39224;
if(inst_39156){
var statearr_39266_40577 = state_39224__$1;
(statearr_39266_40577[(1)] = (13));

} else {
var statearr_39267_40578 = state_39224__$1;
(statearr_39267_40578[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (9))){
var inst_39126 = (state_39224[(8)]);
var state_39224__$1 = state_39224;
var statearr_39268_40579 = state_39224__$1;
(statearr_39268_40579[(2)] = inst_39126);

(statearr_39268_40579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (5))){
var state_39224__$1 = state_39224;
var statearr_39269_40580 = state_39224__$1;
(statearr_39269_40580[(2)] = true);

(statearr_39269_40580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (14))){
var state_39224__$1 = state_39224;
var statearr_39270_40581 = state_39224__$1;
(statearr_39270_40581[(2)] = false);

(statearr_39270_40581[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (26))){
var inst_39184 = (state_39224[(11)]);
var inst_39191 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_39184);
var state_39224__$1 = state_39224;
var statearr_39271_40582 = state_39224__$1;
(statearr_39271_40582[(2)] = inst_39191);

(statearr_39271_40582[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (16))){
var state_39224__$1 = state_39224;
var statearr_39272_40583 = state_39224__$1;
(statearr_39272_40583[(2)] = true);

(statearr_39272_40583[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (38))){
var inst_39214 = (state_39224[(2)]);
var state_39224__$1 = state_39224;
var statearr_39273_40588 = state_39224__$1;
(statearr_39273_40588[(2)] = inst_39214);

(statearr_39273_40588[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (30))){
var inst_39175 = (state_39224[(10)]);
var inst_39176 = (state_39224[(13)]);
var inst_39184 = (state_39224[(11)]);
var inst_39201 = cljs.core.empty_QMARK_(inst_39175);
var inst_39202 = (inst_39176.cljs$core$IFn$_invoke$arity$1 ? inst_39176.cljs$core$IFn$_invoke$arity$1(inst_39184) : inst_39176.call(null,inst_39184));
var inst_39203 = cljs.core.not(inst_39202);
var inst_39204 = ((inst_39201) && (inst_39203));
var state_39224__$1 = state_39224;
var statearr_39274_40589 = state_39224__$1;
(statearr_39274_40589[(2)] = inst_39204);

(statearr_39274_40589[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (10))){
var inst_39126 = (state_39224[(8)]);
var inst_39147 = (state_39224[(2)]);
var inst_39148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39147,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39149 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39147,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39147,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39151 = inst_39126;
var state_39224__$1 = (function (){var statearr_39275 = state_39224;
(statearr_39275[(16)] = inst_39148);

(statearr_39275[(17)] = inst_39150);

(statearr_39275[(7)] = inst_39151);

(statearr_39275[(18)] = inst_39149);

return statearr_39275;
})();
var statearr_39276_40590 = state_39224__$1;
(statearr_39276_40590[(2)] = null);

(statearr_39276_40590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (18))){
var inst_39166 = (state_39224[(2)]);
var state_39224__$1 = state_39224;
var statearr_39277_40591 = state_39224__$1;
(statearr_39277_40591[(2)] = inst_39166);

(statearr_39277_40591[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (37))){
var state_39224__$1 = state_39224;
var statearr_39278_40596 = state_39224__$1;
(statearr_39278_40596[(2)] = null);

(statearr_39278_40596[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39225 === (8))){
var inst_39126 = (state_39224[(8)]);
var inst_39144 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39126);
var state_39224__$1 = state_39224;
var statearr_39279_40601 = state_39224__$1;
(statearr_39279_40601[(2)] = inst_39144);

(statearr_39279_40601[(1)] = (10));


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
});})(c__38428__auto___40511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38327__auto__,c__38428__auto___40511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38328__auto__ = null;
var cljs$core$async$mix_$_state_machine__38328__auto____0 = (function (){
var statearr_39280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39280[(0)] = cljs$core$async$mix_$_state_machine__38328__auto__);

(statearr_39280[(1)] = (1));

return statearr_39280;
});
var cljs$core$async$mix_$_state_machine__38328__auto____1 = (function (state_39224){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_39224);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e39281){if((e39281 instanceof Object)){
var ex__38331__auto__ = e39281;
var statearr_39282_40602 = state_39224;
(statearr_39282_40602[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39281;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40604 = state_39224;
state_39224 = G__40604;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38328__auto__ = function(state_39224){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38328__auto____1.call(this,state_39224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38328__auto____0;
cljs$core$async$mix_$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38328__auto____1;
return cljs$core$async$mix_$_state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto___40511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38430__auto__ = (function (){var statearr_39283 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_39283[(6)] = c__38428__auto___40511);

return statearr_39283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto___40511,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__39285 = arguments.length;
switch (G__39285) {
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
var G__39288 = arguments.length;
switch (G__39288) {
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
return (function (p1__39286_SHARP_){
if(cljs.core.truth_((p1__39286_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39286_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__39286_SHARP_.call(null,topic)))){
return p1__39286_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39286_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39289 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39289 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39290){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39290 = meta39290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39291,meta39290__$1){
var self__ = this;
var _39291__$1 = this;
return (new cljs.core.async.t_cljs$core$async39289(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39290__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39289.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39291){
var self__ = this;
var _39291__$1 = this;
return self__.meta39290;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39289.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39289.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39289.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39289.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39289.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async39289.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39289.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39289.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39290","meta39290",-1996807544,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39289.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39289";

cljs.core.async.t_cljs$core$async39289.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39289");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39289.
 */
cljs.core.async.__GT_t_cljs$core$async39289 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39289(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39290){
return (new cljs.core.async.t_cljs$core$async39289(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39290));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39289(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38428__auto___40627 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto___40627,mults,ensure_mult,p){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto___40627,mults,ensure_mult,p){
return (function (state_39363){
var state_val_39364 = (state_39363[(1)]);
if((state_val_39364 === (7))){
var inst_39359 = (state_39363[(2)]);
var state_39363__$1 = state_39363;
var statearr_39365_40629 = state_39363__$1;
(statearr_39365_40629[(2)] = inst_39359);

(statearr_39365_40629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (20))){
var state_39363__$1 = state_39363;
var statearr_39366_40630 = state_39363__$1;
(statearr_39366_40630[(2)] = null);

(statearr_39366_40630[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (1))){
var state_39363__$1 = state_39363;
var statearr_39367_40635 = state_39363__$1;
(statearr_39367_40635[(2)] = null);

(statearr_39367_40635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (24))){
var inst_39342 = (state_39363[(7)]);
var inst_39351 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_39342);
var state_39363__$1 = state_39363;
var statearr_39368_40636 = state_39363__$1;
(statearr_39368_40636[(2)] = inst_39351);

(statearr_39368_40636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (4))){
var inst_39294 = (state_39363[(8)]);
var inst_39294__$1 = (state_39363[(2)]);
var inst_39295 = (inst_39294__$1 == null);
var state_39363__$1 = (function (){var statearr_39369 = state_39363;
(statearr_39369[(8)] = inst_39294__$1);

return statearr_39369;
})();
if(cljs.core.truth_(inst_39295)){
var statearr_39370_40638 = state_39363__$1;
(statearr_39370_40638[(1)] = (5));

} else {
var statearr_39371_40639 = state_39363__$1;
(statearr_39371_40639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (15))){
var inst_39336 = (state_39363[(2)]);
var state_39363__$1 = state_39363;
var statearr_39372_40640 = state_39363__$1;
(statearr_39372_40640[(2)] = inst_39336);

(statearr_39372_40640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (21))){
var inst_39356 = (state_39363[(2)]);
var state_39363__$1 = (function (){var statearr_39373 = state_39363;
(statearr_39373[(9)] = inst_39356);

return statearr_39373;
})();
var statearr_39374_40641 = state_39363__$1;
(statearr_39374_40641[(2)] = null);

(statearr_39374_40641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (13))){
var inst_39318 = (state_39363[(10)]);
var inst_39320 = cljs.core.chunked_seq_QMARK_(inst_39318);
var state_39363__$1 = state_39363;
if(inst_39320){
var statearr_39375_40643 = state_39363__$1;
(statearr_39375_40643[(1)] = (16));

} else {
var statearr_39376_40644 = state_39363__$1;
(statearr_39376_40644[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (22))){
var inst_39348 = (state_39363[(2)]);
var state_39363__$1 = state_39363;
if(cljs.core.truth_(inst_39348)){
var statearr_39377_40646 = state_39363__$1;
(statearr_39377_40646[(1)] = (23));

} else {
var statearr_39378_40650 = state_39363__$1;
(statearr_39378_40650[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (6))){
var inst_39342 = (state_39363[(7)]);
var inst_39294 = (state_39363[(8)]);
var inst_39344 = (state_39363[(11)]);
var inst_39342__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39294) : topic_fn.call(null,inst_39294));
var inst_39343 = cljs.core.deref(mults);
var inst_39344__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39343,inst_39342__$1);
var state_39363__$1 = (function (){var statearr_39379 = state_39363;
(statearr_39379[(7)] = inst_39342__$1);

(statearr_39379[(11)] = inst_39344__$1);

return statearr_39379;
})();
if(cljs.core.truth_(inst_39344__$1)){
var statearr_39380_40651 = state_39363__$1;
(statearr_39380_40651[(1)] = (19));

} else {
var statearr_39381_40652 = state_39363__$1;
(statearr_39381_40652[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (25))){
var inst_39353 = (state_39363[(2)]);
var state_39363__$1 = state_39363;
var statearr_39382_40653 = state_39363__$1;
(statearr_39382_40653[(2)] = inst_39353);

(statearr_39382_40653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (17))){
var inst_39318 = (state_39363[(10)]);
var inst_39327 = cljs.core.first(inst_39318);
var inst_39328 = cljs.core.async.muxch_STAR_(inst_39327);
var inst_39329 = cljs.core.async.close_BANG_(inst_39328);
var inst_39330 = cljs.core.next(inst_39318);
var inst_39304 = inst_39330;
var inst_39305 = null;
var inst_39306 = (0);
var inst_39307 = (0);
var state_39363__$1 = (function (){var statearr_39383 = state_39363;
(statearr_39383[(12)] = inst_39305);

(statearr_39383[(13)] = inst_39304);

(statearr_39383[(14)] = inst_39329);

(statearr_39383[(15)] = inst_39306);

(statearr_39383[(16)] = inst_39307);

return statearr_39383;
})();
var statearr_39384_40654 = state_39363__$1;
(statearr_39384_40654[(2)] = null);

(statearr_39384_40654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (3))){
var inst_39361 = (state_39363[(2)]);
var state_39363__$1 = state_39363;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39363__$1,inst_39361);
} else {
if((state_val_39364 === (12))){
var inst_39338 = (state_39363[(2)]);
var state_39363__$1 = state_39363;
var statearr_39385_40655 = state_39363__$1;
(statearr_39385_40655[(2)] = inst_39338);

(statearr_39385_40655[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (2))){
var state_39363__$1 = state_39363;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39363__$1,(4),ch);
} else {
if((state_val_39364 === (23))){
var state_39363__$1 = state_39363;
var statearr_39386_40656 = state_39363__$1;
(statearr_39386_40656[(2)] = null);

(statearr_39386_40656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (19))){
var inst_39294 = (state_39363[(8)]);
var inst_39344 = (state_39363[(11)]);
var inst_39346 = cljs.core.async.muxch_STAR_(inst_39344);
var state_39363__$1 = state_39363;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39363__$1,(22),inst_39346,inst_39294);
} else {
if((state_val_39364 === (11))){
var inst_39304 = (state_39363[(13)]);
var inst_39318 = (state_39363[(10)]);
var inst_39318__$1 = cljs.core.seq(inst_39304);
var state_39363__$1 = (function (){var statearr_39387 = state_39363;
(statearr_39387[(10)] = inst_39318__$1);

return statearr_39387;
})();
if(inst_39318__$1){
var statearr_39388_40658 = state_39363__$1;
(statearr_39388_40658[(1)] = (13));

} else {
var statearr_39389_40659 = state_39363__$1;
(statearr_39389_40659[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (9))){
var inst_39340 = (state_39363[(2)]);
var state_39363__$1 = state_39363;
var statearr_39390_40660 = state_39363__$1;
(statearr_39390_40660[(2)] = inst_39340);

(statearr_39390_40660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (5))){
var inst_39301 = cljs.core.deref(mults);
var inst_39302 = cljs.core.vals(inst_39301);
var inst_39303 = cljs.core.seq(inst_39302);
var inst_39304 = inst_39303;
var inst_39305 = null;
var inst_39306 = (0);
var inst_39307 = (0);
var state_39363__$1 = (function (){var statearr_39391 = state_39363;
(statearr_39391[(12)] = inst_39305);

(statearr_39391[(13)] = inst_39304);

(statearr_39391[(15)] = inst_39306);

(statearr_39391[(16)] = inst_39307);

return statearr_39391;
})();
var statearr_39392_40661 = state_39363__$1;
(statearr_39392_40661[(2)] = null);

(statearr_39392_40661[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (14))){
var state_39363__$1 = state_39363;
var statearr_39396_40662 = state_39363__$1;
(statearr_39396_40662[(2)] = null);

(statearr_39396_40662[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (16))){
var inst_39318 = (state_39363[(10)]);
var inst_39322 = cljs.core.chunk_first(inst_39318);
var inst_39323 = cljs.core.chunk_rest(inst_39318);
var inst_39324 = cljs.core.count(inst_39322);
var inst_39304 = inst_39323;
var inst_39305 = inst_39322;
var inst_39306 = inst_39324;
var inst_39307 = (0);
var state_39363__$1 = (function (){var statearr_39397 = state_39363;
(statearr_39397[(12)] = inst_39305);

(statearr_39397[(13)] = inst_39304);

(statearr_39397[(15)] = inst_39306);

(statearr_39397[(16)] = inst_39307);

return statearr_39397;
})();
var statearr_39398_40670 = state_39363__$1;
(statearr_39398_40670[(2)] = null);

(statearr_39398_40670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (10))){
var inst_39305 = (state_39363[(12)]);
var inst_39304 = (state_39363[(13)]);
var inst_39306 = (state_39363[(15)]);
var inst_39307 = (state_39363[(16)]);
var inst_39312 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39305,inst_39307);
var inst_39313 = cljs.core.async.muxch_STAR_(inst_39312);
var inst_39314 = cljs.core.async.close_BANG_(inst_39313);
var inst_39315 = (inst_39307 + (1));
var tmp39393 = inst_39305;
var tmp39394 = inst_39304;
var tmp39395 = inst_39306;
var inst_39304__$1 = tmp39394;
var inst_39305__$1 = tmp39393;
var inst_39306__$1 = tmp39395;
var inst_39307__$1 = inst_39315;
var state_39363__$1 = (function (){var statearr_39399 = state_39363;
(statearr_39399[(12)] = inst_39305__$1);

(statearr_39399[(13)] = inst_39304__$1);

(statearr_39399[(17)] = inst_39314);

(statearr_39399[(15)] = inst_39306__$1);

(statearr_39399[(16)] = inst_39307__$1);

return statearr_39399;
})();
var statearr_39400_40671 = state_39363__$1;
(statearr_39400_40671[(2)] = null);

(statearr_39400_40671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (18))){
var inst_39333 = (state_39363[(2)]);
var state_39363__$1 = state_39363;
var statearr_39401_40672 = state_39363__$1;
(statearr_39401_40672[(2)] = inst_39333);

(statearr_39401_40672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39364 === (8))){
var inst_39306 = (state_39363[(15)]);
var inst_39307 = (state_39363[(16)]);
var inst_39309 = (inst_39307 < inst_39306);
var inst_39310 = inst_39309;
var state_39363__$1 = state_39363;
if(cljs.core.truth_(inst_39310)){
var statearr_39402_40673 = state_39363__$1;
(statearr_39402_40673[(1)] = (10));

} else {
var statearr_39403_40674 = state_39363__$1;
(statearr_39403_40674[(1)] = (11));

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
});})(c__38428__auto___40627,mults,ensure_mult,p))
;
return ((function (switch__38327__auto__,c__38428__auto___40627,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38328__auto__ = null;
var cljs$core$async$state_machine__38328__auto____0 = (function (){
var statearr_39404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39404[(0)] = cljs$core$async$state_machine__38328__auto__);

(statearr_39404[(1)] = (1));

return statearr_39404;
});
var cljs$core$async$state_machine__38328__auto____1 = (function (state_39363){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_39363);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e39405){if((e39405 instanceof Object)){
var ex__38331__auto__ = e39405;
var statearr_39406_40675 = state_39363;
(statearr_39406_40675[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39405;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40676 = state_39363;
state_39363 = G__40676;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$state_machine__38328__auto__ = function(state_39363){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38328__auto____1.call(this,state_39363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38328__auto____0;
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38328__auto____1;
return cljs$core$async$state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto___40627,mults,ensure_mult,p))
})();
var state__38430__auto__ = (function (){var statearr_39407 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_39407[(6)] = c__38428__auto___40627);

return statearr_39407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto___40627,mults,ensure_mult,p))
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
var G__39409 = arguments.length;
switch (G__39409) {
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
var G__39411 = arguments.length;
switch (G__39411) {
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
var G__39413 = arguments.length;
switch (G__39413) {
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
var c__38428__auto___40682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto___40682,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto___40682,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39452){
var state_val_39453 = (state_39452[(1)]);
if((state_val_39453 === (7))){
var state_39452__$1 = state_39452;
var statearr_39454_40683 = state_39452__$1;
(statearr_39454_40683[(2)] = null);

(statearr_39454_40683[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39453 === (1))){
var state_39452__$1 = state_39452;
var statearr_39455_40684 = state_39452__$1;
(statearr_39455_40684[(2)] = null);

(statearr_39455_40684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39453 === (4))){
var inst_39416 = (state_39452[(7)]);
var inst_39418 = (inst_39416 < cnt);
var state_39452__$1 = state_39452;
if(cljs.core.truth_(inst_39418)){
var statearr_39456_40685 = state_39452__$1;
(statearr_39456_40685[(1)] = (6));

} else {
var statearr_39457_40686 = state_39452__$1;
(statearr_39457_40686[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39453 === (15))){
var inst_39448 = (state_39452[(2)]);
var state_39452__$1 = state_39452;
var statearr_39458_40687 = state_39452__$1;
(statearr_39458_40687[(2)] = inst_39448);

(statearr_39458_40687[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39453 === (13))){
var inst_39441 = cljs.core.async.close_BANG_(out);
var state_39452__$1 = state_39452;
var statearr_39459_40689 = state_39452__$1;
(statearr_39459_40689[(2)] = inst_39441);

(statearr_39459_40689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39453 === (6))){
var state_39452__$1 = state_39452;
var statearr_39460_40693 = state_39452__$1;
(statearr_39460_40693[(2)] = null);

(statearr_39460_40693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39453 === (3))){
var inst_39450 = (state_39452[(2)]);
var state_39452__$1 = state_39452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39452__$1,inst_39450);
} else {
if((state_val_39453 === (12))){
var inst_39438 = (state_39452[(8)]);
var inst_39438__$1 = (state_39452[(2)]);
var inst_39439 = cljs.core.some(cljs.core.nil_QMARK_,inst_39438__$1);
var state_39452__$1 = (function (){var statearr_39461 = state_39452;
(statearr_39461[(8)] = inst_39438__$1);

return statearr_39461;
})();
if(cljs.core.truth_(inst_39439)){
var statearr_39462_40700 = state_39452__$1;
(statearr_39462_40700[(1)] = (13));

} else {
var statearr_39463_40701 = state_39452__$1;
(statearr_39463_40701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39453 === (2))){
var inst_39415 = cljs.core.reset_BANG_(dctr,cnt);
var inst_39416 = (0);
var state_39452__$1 = (function (){var statearr_39464 = state_39452;
(statearr_39464[(9)] = inst_39415);

(statearr_39464[(7)] = inst_39416);

return statearr_39464;
})();
var statearr_39465_40703 = state_39452__$1;
(statearr_39465_40703[(2)] = null);

(statearr_39465_40703[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39453 === (11))){
var inst_39416 = (state_39452[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_39452,(10),Object,null,(9));
var inst_39425 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39416) : chs__$1.call(null,inst_39416));
var inst_39426 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39416) : done.call(null,inst_39416));
var inst_39427 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39425,inst_39426);
var state_39452__$1 = state_39452;
var statearr_39466_40705 = state_39452__$1;
(statearr_39466_40705[(2)] = inst_39427);


cljs.core.async.impl.ioc_helpers.process_exception(state_39452__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39453 === (9))){
var inst_39416 = (state_39452[(7)]);
var inst_39429 = (state_39452[(2)]);
var inst_39430 = (inst_39416 + (1));
var inst_39416__$1 = inst_39430;
var state_39452__$1 = (function (){var statearr_39467 = state_39452;
(statearr_39467[(7)] = inst_39416__$1);

(statearr_39467[(10)] = inst_39429);

return statearr_39467;
})();
var statearr_39468_40706 = state_39452__$1;
(statearr_39468_40706[(2)] = null);

(statearr_39468_40706[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39453 === (5))){
var inst_39436 = (state_39452[(2)]);
var state_39452__$1 = (function (){var statearr_39469 = state_39452;
(statearr_39469[(11)] = inst_39436);

return statearr_39469;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39452__$1,(12),dchan);
} else {
if((state_val_39453 === (14))){
var inst_39438 = (state_39452[(8)]);
var inst_39443 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39438);
var state_39452__$1 = state_39452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39452__$1,(16),out,inst_39443);
} else {
if((state_val_39453 === (16))){
var inst_39445 = (state_39452[(2)]);
var state_39452__$1 = (function (){var statearr_39470 = state_39452;
(statearr_39470[(12)] = inst_39445);

return statearr_39470;
})();
var statearr_39471_40707 = state_39452__$1;
(statearr_39471_40707[(2)] = null);

(statearr_39471_40707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39453 === (10))){
var inst_39420 = (state_39452[(2)]);
var inst_39421 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_39452__$1 = (function (){var statearr_39472 = state_39452;
(statearr_39472[(13)] = inst_39420);

return statearr_39472;
})();
var statearr_39473_40708 = state_39452__$1;
(statearr_39473_40708[(2)] = inst_39421);


cljs.core.async.impl.ioc_helpers.process_exception(state_39452__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39453 === (8))){
var inst_39434 = (state_39452[(2)]);
var state_39452__$1 = state_39452;
var statearr_39474_40709 = state_39452__$1;
(statearr_39474_40709[(2)] = inst_39434);

(statearr_39474_40709[(1)] = (5));


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
});})(c__38428__auto___40682,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38327__auto__,c__38428__auto___40682,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38328__auto__ = null;
var cljs$core$async$state_machine__38328__auto____0 = (function (){
var statearr_39475 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39475[(0)] = cljs$core$async$state_machine__38328__auto__);

(statearr_39475[(1)] = (1));

return statearr_39475;
});
var cljs$core$async$state_machine__38328__auto____1 = (function (state_39452){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_39452);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e39476){if((e39476 instanceof Object)){
var ex__38331__auto__ = e39476;
var statearr_39477_40710 = state_39452;
(statearr_39477_40710[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39476;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40713 = state_39452;
state_39452 = G__40713;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$state_machine__38328__auto__ = function(state_39452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38328__auto____1.call(this,state_39452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38328__auto____0;
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38328__auto____1;
return cljs$core$async$state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto___40682,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38430__auto__ = (function (){var statearr_39478 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_39478[(6)] = c__38428__auto___40682);

return statearr_39478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto___40682,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__39481 = arguments.length;
switch (G__39481) {
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
var c__38428__auto___40718 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto___40718,out){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto___40718,out){
return (function (state_39513){
var state_val_39514 = (state_39513[(1)]);
if((state_val_39514 === (7))){
var inst_39493 = (state_39513[(7)]);
var inst_39492 = (state_39513[(8)]);
var inst_39492__$1 = (state_39513[(2)]);
var inst_39493__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39492__$1,(0),null);
var inst_39494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39492__$1,(1),null);
var inst_39495 = (inst_39493__$1 == null);
var state_39513__$1 = (function (){var statearr_39515 = state_39513;
(statearr_39515[(7)] = inst_39493__$1);

(statearr_39515[(8)] = inst_39492__$1);

(statearr_39515[(9)] = inst_39494);

return statearr_39515;
})();
if(cljs.core.truth_(inst_39495)){
var statearr_39516_40719 = state_39513__$1;
(statearr_39516_40719[(1)] = (8));

} else {
var statearr_39517_40720 = state_39513__$1;
(statearr_39517_40720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (1))){
var inst_39482 = cljs.core.vec(chs);
var inst_39483 = inst_39482;
var state_39513__$1 = (function (){var statearr_39518 = state_39513;
(statearr_39518[(10)] = inst_39483);

return statearr_39518;
})();
var statearr_39519_40722 = state_39513__$1;
(statearr_39519_40722[(2)] = null);

(statearr_39519_40722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (4))){
var inst_39483 = (state_39513[(10)]);
var state_39513__$1 = state_39513;
return cljs.core.async.ioc_alts_BANG_(state_39513__$1,(7),inst_39483);
} else {
if((state_val_39514 === (6))){
var inst_39509 = (state_39513[(2)]);
var state_39513__$1 = state_39513;
var statearr_39520_40723 = state_39513__$1;
(statearr_39520_40723[(2)] = inst_39509);

(statearr_39520_40723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (3))){
var inst_39511 = (state_39513[(2)]);
var state_39513__$1 = state_39513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39513__$1,inst_39511);
} else {
if((state_val_39514 === (2))){
var inst_39483 = (state_39513[(10)]);
var inst_39485 = cljs.core.count(inst_39483);
var inst_39486 = (inst_39485 > (0));
var state_39513__$1 = state_39513;
if(cljs.core.truth_(inst_39486)){
var statearr_39522_40724 = state_39513__$1;
(statearr_39522_40724[(1)] = (4));

} else {
var statearr_39523_40725 = state_39513__$1;
(statearr_39523_40725[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (11))){
var inst_39483 = (state_39513[(10)]);
var inst_39502 = (state_39513[(2)]);
var tmp39521 = inst_39483;
var inst_39483__$1 = tmp39521;
var state_39513__$1 = (function (){var statearr_39524 = state_39513;
(statearr_39524[(11)] = inst_39502);

(statearr_39524[(10)] = inst_39483__$1);

return statearr_39524;
})();
var statearr_39525_40727 = state_39513__$1;
(statearr_39525_40727[(2)] = null);

(statearr_39525_40727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (9))){
var inst_39493 = (state_39513[(7)]);
var state_39513__$1 = state_39513;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39513__$1,(11),out,inst_39493);
} else {
if((state_val_39514 === (5))){
var inst_39507 = cljs.core.async.close_BANG_(out);
var state_39513__$1 = state_39513;
var statearr_39526_40728 = state_39513__$1;
(statearr_39526_40728[(2)] = inst_39507);

(statearr_39526_40728[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (10))){
var inst_39505 = (state_39513[(2)]);
var state_39513__$1 = state_39513;
var statearr_39527_40730 = state_39513__$1;
(statearr_39527_40730[(2)] = inst_39505);

(statearr_39527_40730[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39514 === (8))){
var inst_39493 = (state_39513[(7)]);
var inst_39492 = (state_39513[(8)]);
var inst_39494 = (state_39513[(9)]);
var inst_39483 = (state_39513[(10)]);
var inst_39497 = (function (){var cs = inst_39483;
var vec__39488 = inst_39492;
var v = inst_39493;
var c = inst_39494;
return ((function (cs,vec__39488,v,c,inst_39493,inst_39492,inst_39494,inst_39483,state_val_39514,c__38428__auto___40718,out){
return (function (p1__39479_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39479_SHARP_);
});
;})(cs,vec__39488,v,c,inst_39493,inst_39492,inst_39494,inst_39483,state_val_39514,c__38428__auto___40718,out))
})();
var inst_39498 = cljs.core.filterv(inst_39497,inst_39483);
var inst_39483__$1 = inst_39498;
var state_39513__$1 = (function (){var statearr_39528 = state_39513;
(statearr_39528[(10)] = inst_39483__$1);

return statearr_39528;
})();
var statearr_39529_40734 = state_39513__$1;
(statearr_39529_40734[(2)] = null);

(statearr_39529_40734[(1)] = (2));


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
});})(c__38428__auto___40718,out))
;
return ((function (switch__38327__auto__,c__38428__auto___40718,out){
return (function() {
var cljs$core$async$state_machine__38328__auto__ = null;
var cljs$core$async$state_machine__38328__auto____0 = (function (){
var statearr_39530 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39530[(0)] = cljs$core$async$state_machine__38328__auto__);

(statearr_39530[(1)] = (1));

return statearr_39530;
});
var cljs$core$async$state_machine__38328__auto____1 = (function (state_39513){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_39513);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e39531){if((e39531 instanceof Object)){
var ex__38331__auto__ = e39531;
var statearr_39532_40742 = state_39513;
(statearr_39532_40742[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39531;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40746 = state_39513;
state_39513 = G__40746;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$state_machine__38328__auto__ = function(state_39513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38328__auto____1.call(this,state_39513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38328__auto____0;
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38328__auto____1;
return cljs$core$async$state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto___40718,out))
})();
var state__38430__auto__ = (function (){var statearr_39533 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_39533[(6)] = c__38428__auto___40718);

return statearr_39533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto___40718,out))
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
var G__39535 = arguments.length;
switch (G__39535) {
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
var c__38428__auto___40751 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto___40751,out){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto___40751,out){
return (function (state_39559){
var state_val_39560 = (state_39559[(1)]);
if((state_val_39560 === (7))){
var inst_39541 = (state_39559[(7)]);
var inst_39541__$1 = (state_39559[(2)]);
var inst_39542 = (inst_39541__$1 == null);
var inst_39543 = cljs.core.not(inst_39542);
var state_39559__$1 = (function (){var statearr_39561 = state_39559;
(statearr_39561[(7)] = inst_39541__$1);

return statearr_39561;
})();
if(inst_39543){
var statearr_39562_40755 = state_39559__$1;
(statearr_39562_40755[(1)] = (8));

} else {
var statearr_39563_40756 = state_39559__$1;
(statearr_39563_40756[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39560 === (1))){
var inst_39536 = (0);
var state_39559__$1 = (function (){var statearr_39564 = state_39559;
(statearr_39564[(8)] = inst_39536);

return statearr_39564;
})();
var statearr_39565_40757 = state_39559__$1;
(statearr_39565_40757[(2)] = null);

(statearr_39565_40757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39560 === (4))){
var state_39559__$1 = state_39559;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39559__$1,(7),ch);
} else {
if((state_val_39560 === (6))){
var inst_39554 = (state_39559[(2)]);
var state_39559__$1 = state_39559;
var statearr_39566_40758 = state_39559__$1;
(statearr_39566_40758[(2)] = inst_39554);

(statearr_39566_40758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39560 === (3))){
var inst_39556 = (state_39559[(2)]);
var inst_39557 = cljs.core.async.close_BANG_(out);
var state_39559__$1 = (function (){var statearr_39567 = state_39559;
(statearr_39567[(9)] = inst_39556);

return statearr_39567;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39559__$1,inst_39557);
} else {
if((state_val_39560 === (2))){
var inst_39536 = (state_39559[(8)]);
var inst_39538 = (inst_39536 < n);
var state_39559__$1 = state_39559;
if(cljs.core.truth_(inst_39538)){
var statearr_39568_40760 = state_39559__$1;
(statearr_39568_40760[(1)] = (4));

} else {
var statearr_39569_40761 = state_39559__$1;
(statearr_39569_40761[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39560 === (11))){
var inst_39536 = (state_39559[(8)]);
var inst_39546 = (state_39559[(2)]);
var inst_39547 = (inst_39536 + (1));
var inst_39536__$1 = inst_39547;
var state_39559__$1 = (function (){var statearr_39570 = state_39559;
(statearr_39570[(10)] = inst_39546);

(statearr_39570[(8)] = inst_39536__$1);

return statearr_39570;
})();
var statearr_39571_40762 = state_39559__$1;
(statearr_39571_40762[(2)] = null);

(statearr_39571_40762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39560 === (9))){
var state_39559__$1 = state_39559;
var statearr_39572_40763 = state_39559__$1;
(statearr_39572_40763[(2)] = null);

(statearr_39572_40763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39560 === (5))){
var state_39559__$1 = state_39559;
var statearr_39573_40767 = state_39559__$1;
(statearr_39573_40767[(2)] = null);

(statearr_39573_40767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39560 === (10))){
var inst_39551 = (state_39559[(2)]);
var state_39559__$1 = state_39559;
var statearr_39574_40774 = state_39559__$1;
(statearr_39574_40774[(2)] = inst_39551);

(statearr_39574_40774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39560 === (8))){
var inst_39541 = (state_39559[(7)]);
var state_39559__$1 = state_39559;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39559__$1,(11),out,inst_39541);
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
});})(c__38428__auto___40751,out))
;
return ((function (switch__38327__auto__,c__38428__auto___40751,out){
return (function() {
var cljs$core$async$state_machine__38328__auto__ = null;
var cljs$core$async$state_machine__38328__auto____0 = (function (){
var statearr_39575 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39575[(0)] = cljs$core$async$state_machine__38328__auto__);

(statearr_39575[(1)] = (1));

return statearr_39575;
});
var cljs$core$async$state_machine__38328__auto____1 = (function (state_39559){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_39559);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e39576){if((e39576 instanceof Object)){
var ex__38331__auto__ = e39576;
var statearr_39577_40781 = state_39559;
(statearr_39577_40781[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39576;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40782 = state_39559;
state_39559 = G__40782;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$state_machine__38328__auto__ = function(state_39559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38328__auto____1.call(this,state_39559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38328__auto____0;
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38328__auto____1;
return cljs$core$async$state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto___40751,out))
})();
var state__38430__auto__ = (function (){var statearr_39578 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_39578[(6)] = c__38428__auto___40751);

return statearr_39578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto___40751,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39580 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39580 = (function (f,ch,meta39581){
this.f = f;
this.ch = ch;
this.meta39581 = meta39581;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39582,meta39581__$1){
var self__ = this;
var _39582__$1 = this;
return (new cljs.core.async.t_cljs$core$async39580(self__.f,self__.ch,meta39581__$1));
});

cljs.core.async.t_cljs$core$async39580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39582){
var self__ = this;
var _39582__$1 = this;
return self__.meta39581;
});

cljs.core.async.t_cljs$core$async39580.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39580.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async39580.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async39580.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39580.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39583 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39583 = (function (f,ch,meta39581,_,fn1,meta39584){
this.f = f;
this.ch = ch;
this.meta39581 = meta39581;
this._ = _;
this.fn1 = fn1;
this.meta39584 = meta39584;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39585,meta39584__$1){
var self__ = this;
var _39585__$1 = this;
return (new cljs.core.async.t_cljs$core$async39583(self__.f,self__.ch,self__.meta39581,self__._,self__.fn1,meta39584__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39585){
var self__ = this;
var _39585__$1 = this;
return self__.meta39584;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39583.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39583.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39583.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39583.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39579_SHARP_){
var G__39586 = (((p1__39579_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__39579_SHARP_) : self__.f.call(null,p1__39579_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__39586) : f1.call(null,G__39586));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39583.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39581","meta39581",1545742805,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39580","cljs.core.async/t_cljs$core$async39580",-538024620,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39584","meta39584",1603595694,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39583.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39583.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39583";

cljs.core.async.t_cljs$core$async39583.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39583");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39583.
 */
cljs.core.async.__GT_t_cljs$core$async39583 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39583(f__$1,ch__$1,meta39581__$1,___$2,fn1__$1,meta39584){
return (new cljs.core.async.t_cljs$core$async39583(f__$1,ch__$1,meta39581__$1,___$2,fn1__$1,meta39584));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39583(self__.f,self__.ch,self__.meta39581,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__39587 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__39587) : self__.f.call(null,G__39587));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async39580.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39580.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39580.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39581","meta39581",1545742805,null)], null);
});

cljs.core.async.t_cljs$core$async39580.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39580.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39580";

cljs.core.async.t_cljs$core$async39580.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39580");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39580.
 */
cljs.core.async.__GT_t_cljs$core$async39580 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39580(f__$1,ch__$1,meta39581){
return (new cljs.core.async.t_cljs$core$async39580(f__$1,ch__$1,meta39581));
});

}

return (new cljs.core.async.t_cljs$core$async39580(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39588 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39588 = (function (f,ch,meta39589){
this.f = f;
this.ch = ch;
this.meta39589 = meta39589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39590,meta39589__$1){
var self__ = this;
var _39590__$1 = this;
return (new cljs.core.async.t_cljs$core$async39588(self__.f,self__.ch,meta39589__$1));
});

cljs.core.async.t_cljs$core$async39588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39590){
var self__ = this;
var _39590__$1 = this;
return self__.meta39589;
});

cljs.core.async.t_cljs$core$async39588.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39588.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async39588.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39588.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39588.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39588.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async39588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39589","meta39589",-1298150423,null)], null);
});

cljs.core.async.t_cljs$core$async39588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39588";

cljs.core.async.t_cljs$core$async39588.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39588");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39588.
 */
cljs.core.async.__GT_t_cljs$core$async39588 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39588(f__$1,ch__$1,meta39589){
return (new cljs.core.async.t_cljs$core$async39588(f__$1,ch__$1,meta39589));
});

}

return (new cljs.core.async.t_cljs$core$async39588(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39591 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39591 = (function (p,ch,meta39592){
this.p = p;
this.ch = ch;
this.meta39592 = meta39592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39593,meta39592__$1){
var self__ = this;
var _39593__$1 = this;
return (new cljs.core.async.t_cljs$core$async39591(self__.p,self__.ch,meta39592__$1));
});

cljs.core.async.t_cljs$core$async39591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39593){
var self__ = this;
var _39593__$1 = this;
return self__.meta39592;
});

cljs.core.async.t_cljs$core$async39591.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39591.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async39591.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async39591.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39591.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39591.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39591.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39591.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39592","meta39592",200969448,null)], null);
});

cljs.core.async.t_cljs$core$async39591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39591";

cljs.core.async.t_cljs$core$async39591.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39591");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39591.
 */
cljs.core.async.__GT_t_cljs$core$async39591 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39591(p__$1,ch__$1,meta39592){
return (new cljs.core.async.t_cljs$core$async39591(p__$1,ch__$1,meta39592));
});

}

return (new cljs.core.async.t_cljs$core$async39591(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39595 = arguments.length;
switch (G__39595) {
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
var c__38428__auto___40805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto___40805,out){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto___40805,out){
return (function (state_39616){
var state_val_39617 = (state_39616[(1)]);
if((state_val_39617 === (7))){
var inst_39612 = (state_39616[(2)]);
var state_39616__$1 = state_39616;
var statearr_39618_40806 = state_39616__$1;
(statearr_39618_40806[(2)] = inst_39612);

(statearr_39618_40806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39617 === (1))){
var state_39616__$1 = state_39616;
var statearr_39619_40807 = state_39616__$1;
(statearr_39619_40807[(2)] = null);

(statearr_39619_40807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39617 === (4))){
var inst_39598 = (state_39616[(7)]);
var inst_39598__$1 = (state_39616[(2)]);
var inst_39599 = (inst_39598__$1 == null);
var state_39616__$1 = (function (){var statearr_39620 = state_39616;
(statearr_39620[(7)] = inst_39598__$1);

return statearr_39620;
})();
if(cljs.core.truth_(inst_39599)){
var statearr_39621_40811 = state_39616__$1;
(statearr_39621_40811[(1)] = (5));

} else {
var statearr_39622_40812 = state_39616__$1;
(statearr_39622_40812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39617 === (6))){
var inst_39598 = (state_39616[(7)]);
var inst_39603 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39598) : p.call(null,inst_39598));
var state_39616__$1 = state_39616;
if(cljs.core.truth_(inst_39603)){
var statearr_39623_40813 = state_39616__$1;
(statearr_39623_40813[(1)] = (8));

} else {
var statearr_39624_40816 = state_39616__$1;
(statearr_39624_40816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39617 === (3))){
var inst_39614 = (state_39616[(2)]);
var state_39616__$1 = state_39616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39616__$1,inst_39614);
} else {
if((state_val_39617 === (2))){
var state_39616__$1 = state_39616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39616__$1,(4),ch);
} else {
if((state_val_39617 === (11))){
var inst_39606 = (state_39616[(2)]);
var state_39616__$1 = state_39616;
var statearr_39625_40817 = state_39616__$1;
(statearr_39625_40817[(2)] = inst_39606);

(statearr_39625_40817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39617 === (9))){
var state_39616__$1 = state_39616;
var statearr_39626_40818 = state_39616__$1;
(statearr_39626_40818[(2)] = null);

(statearr_39626_40818[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39617 === (5))){
var inst_39601 = cljs.core.async.close_BANG_(out);
var state_39616__$1 = state_39616;
var statearr_39627_40819 = state_39616__$1;
(statearr_39627_40819[(2)] = inst_39601);

(statearr_39627_40819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39617 === (10))){
var inst_39609 = (state_39616[(2)]);
var state_39616__$1 = (function (){var statearr_39628 = state_39616;
(statearr_39628[(8)] = inst_39609);

return statearr_39628;
})();
var statearr_39629_40820 = state_39616__$1;
(statearr_39629_40820[(2)] = null);

(statearr_39629_40820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39617 === (8))){
var inst_39598 = (state_39616[(7)]);
var state_39616__$1 = state_39616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39616__$1,(11),out,inst_39598);
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
});})(c__38428__auto___40805,out))
;
return ((function (switch__38327__auto__,c__38428__auto___40805,out){
return (function() {
var cljs$core$async$state_machine__38328__auto__ = null;
var cljs$core$async$state_machine__38328__auto____0 = (function (){
var statearr_39630 = [null,null,null,null,null,null,null,null,null];
(statearr_39630[(0)] = cljs$core$async$state_machine__38328__auto__);

(statearr_39630[(1)] = (1));

return statearr_39630;
});
var cljs$core$async$state_machine__38328__auto____1 = (function (state_39616){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_39616);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e39631){if((e39631 instanceof Object)){
var ex__38331__auto__ = e39631;
var statearr_39632_40823 = state_39616;
(statearr_39632_40823[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39616);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39631;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40824 = state_39616;
state_39616 = G__40824;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$state_machine__38328__auto__ = function(state_39616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38328__auto____1.call(this,state_39616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38328__auto____0;
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38328__auto____1;
return cljs$core$async$state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto___40805,out))
})();
var state__38430__auto__ = (function (){var statearr_39633 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_39633[(6)] = c__38428__auto___40805);

return statearr_39633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto___40805,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39635 = arguments.length;
switch (G__39635) {
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
var c__38428__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto__){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto__){
return (function (state_39697){
var state_val_39698 = (state_39697[(1)]);
if((state_val_39698 === (7))){
var inst_39693 = (state_39697[(2)]);
var state_39697__$1 = state_39697;
var statearr_39699_40835 = state_39697__$1;
(statearr_39699_40835[(2)] = inst_39693);

(statearr_39699_40835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (20))){
var inst_39663 = (state_39697[(7)]);
var inst_39674 = (state_39697[(2)]);
var inst_39675 = cljs.core.next(inst_39663);
var inst_39649 = inst_39675;
var inst_39650 = null;
var inst_39651 = (0);
var inst_39652 = (0);
var state_39697__$1 = (function (){var statearr_39700 = state_39697;
(statearr_39700[(8)] = inst_39650);

(statearr_39700[(9)] = inst_39674);

(statearr_39700[(10)] = inst_39652);

(statearr_39700[(11)] = inst_39651);

(statearr_39700[(12)] = inst_39649);

return statearr_39700;
})();
var statearr_39701_40836 = state_39697__$1;
(statearr_39701_40836[(2)] = null);

(statearr_39701_40836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (1))){
var state_39697__$1 = state_39697;
var statearr_39702_40837 = state_39697__$1;
(statearr_39702_40837[(2)] = null);

(statearr_39702_40837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (4))){
var inst_39638 = (state_39697[(13)]);
var inst_39638__$1 = (state_39697[(2)]);
var inst_39639 = (inst_39638__$1 == null);
var state_39697__$1 = (function (){var statearr_39703 = state_39697;
(statearr_39703[(13)] = inst_39638__$1);

return statearr_39703;
})();
if(cljs.core.truth_(inst_39639)){
var statearr_39704_40839 = state_39697__$1;
(statearr_39704_40839[(1)] = (5));

} else {
var statearr_39705_40840 = state_39697__$1;
(statearr_39705_40840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (15))){
var state_39697__$1 = state_39697;
var statearr_39709_40841 = state_39697__$1;
(statearr_39709_40841[(2)] = null);

(statearr_39709_40841[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (21))){
var state_39697__$1 = state_39697;
var statearr_39710_40843 = state_39697__$1;
(statearr_39710_40843[(2)] = null);

(statearr_39710_40843[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (13))){
var inst_39650 = (state_39697[(8)]);
var inst_39652 = (state_39697[(10)]);
var inst_39651 = (state_39697[(11)]);
var inst_39649 = (state_39697[(12)]);
var inst_39659 = (state_39697[(2)]);
var inst_39660 = (inst_39652 + (1));
var tmp39706 = inst_39650;
var tmp39707 = inst_39651;
var tmp39708 = inst_39649;
var inst_39649__$1 = tmp39708;
var inst_39650__$1 = tmp39706;
var inst_39651__$1 = tmp39707;
var inst_39652__$1 = inst_39660;
var state_39697__$1 = (function (){var statearr_39711 = state_39697;
(statearr_39711[(8)] = inst_39650__$1);

(statearr_39711[(10)] = inst_39652__$1);

(statearr_39711[(11)] = inst_39651__$1);

(statearr_39711[(12)] = inst_39649__$1);

(statearr_39711[(14)] = inst_39659);

return statearr_39711;
})();
var statearr_39712_40846 = state_39697__$1;
(statearr_39712_40846[(2)] = null);

(statearr_39712_40846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (22))){
var state_39697__$1 = state_39697;
var statearr_39713_40847 = state_39697__$1;
(statearr_39713_40847[(2)] = null);

(statearr_39713_40847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (6))){
var inst_39638 = (state_39697[(13)]);
var inst_39647 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39638) : f.call(null,inst_39638));
var inst_39648 = cljs.core.seq(inst_39647);
var inst_39649 = inst_39648;
var inst_39650 = null;
var inst_39651 = (0);
var inst_39652 = (0);
var state_39697__$1 = (function (){var statearr_39714 = state_39697;
(statearr_39714[(8)] = inst_39650);

(statearr_39714[(10)] = inst_39652);

(statearr_39714[(11)] = inst_39651);

(statearr_39714[(12)] = inst_39649);

return statearr_39714;
})();
var statearr_39715_40849 = state_39697__$1;
(statearr_39715_40849[(2)] = null);

(statearr_39715_40849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (17))){
var inst_39663 = (state_39697[(7)]);
var inst_39667 = cljs.core.chunk_first(inst_39663);
var inst_39668 = cljs.core.chunk_rest(inst_39663);
var inst_39669 = cljs.core.count(inst_39667);
var inst_39649 = inst_39668;
var inst_39650 = inst_39667;
var inst_39651 = inst_39669;
var inst_39652 = (0);
var state_39697__$1 = (function (){var statearr_39716 = state_39697;
(statearr_39716[(8)] = inst_39650);

(statearr_39716[(10)] = inst_39652);

(statearr_39716[(11)] = inst_39651);

(statearr_39716[(12)] = inst_39649);

return statearr_39716;
})();
var statearr_39717_40850 = state_39697__$1;
(statearr_39717_40850[(2)] = null);

(statearr_39717_40850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (3))){
var inst_39695 = (state_39697[(2)]);
var state_39697__$1 = state_39697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39697__$1,inst_39695);
} else {
if((state_val_39698 === (12))){
var inst_39683 = (state_39697[(2)]);
var state_39697__$1 = state_39697;
var statearr_39718_40851 = state_39697__$1;
(statearr_39718_40851[(2)] = inst_39683);

(statearr_39718_40851[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (2))){
var state_39697__$1 = state_39697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39697__$1,(4),in$);
} else {
if((state_val_39698 === (23))){
var inst_39691 = (state_39697[(2)]);
var state_39697__$1 = state_39697;
var statearr_39719_40852 = state_39697__$1;
(statearr_39719_40852[(2)] = inst_39691);

(statearr_39719_40852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (19))){
var inst_39678 = (state_39697[(2)]);
var state_39697__$1 = state_39697;
var statearr_39720_40853 = state_39697__$1;
(statearr_39720_40853[(2)] = inst_39678);

(statearr_39720_40853[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (11))){
var inst_39649 = (state_39697[(12)]);
var inst_39663 = (state_39697[(7)]);
var inst_39663__$1 = cljs.core.seq(inst_39649);
var state_39697__$1 = (function (){var statearr_39721 = state_39697;
(statearr_39721[(7)] = inst_39663__$1);

return statearr_39721;
})();
if(inst_39663__$1){
var statearr_39722_40854 = state_39697__$1;
(statearr_39722_40854[(1)] = (14));

} else {
var statearr_39723_40855 = state_39697__$1;
(statearr_39723_40855[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (9))){
var inst_39685 = (state_39697[(2)]);
var inst_39686 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_39697__$1 = (function (){var statearr_39724 = state_39697;
(statearr_39724[(15)] = inst_39685);

return statearr_39724;
})();
if(cljs.core.truth_(inst_39686)){
var statearr_39725_40856 = state_39697__$1;
(statearr_39725_40856[(1)] = (21));

} else {
var statearr_39726_40857 = state_39697__$1;
(statearr_39726_40857[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (5))){
var inst_39641 = cljs.core.async.close_BANG_(out);
var state_39697__$1 = state_39697;
var statearr_39727_40858 = state_39697__$1;
(statearr_39727_40858[(2)] = inst_39641);

(statearr_39727_40858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (14))){
var inst_39663 = (state_39697[(7)]);
var inst_39665 = cljs.core.chunked_seq_QMARK_(inst_39663);
var state_39697__$1 = state_39697;
if(inst_39665){
var statearr_39728_40859 = state_39697__$1;
(statearr_39728_40859[(1)] = (17));

} else {
var statearr_39729_40860 = state_39697__$1;
(statearr_39729_40860[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (16))){
var inst_39681 = (state_39697[(2)]);
var state_39697__$1 = state_39697;
var statearr_39730_40861 = state_39697__$1;
(statearr_39730_40861[(2)] = inst_39681);

(statearr_39730_40861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39698 === (10))){
var inst_39650 = (state_39697[(8)]);
var inst_39652 = (state_39697[(10)]);
var inst_39657 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39650,inst_39652);
var state_39697__$1 = state_39697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39697__$1,(13),out,inst_39657);
} else {
if((state_val_39698 === (18))){
var inst_39663 = (state_39697[(7)]);
var inst_39672 = cljs.core.first(inst_39663);
var state_39697__$1 = state_39697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39697__$1,(20),out,inst_39672);
} else {
if((state_val_39698 === (8))){
var inst_39652 = (state_39697[(10)]);
var inst_39651 = (state_39697[(11)]);
var inst_39654 = (inst_39652 < inst_39651);
var inst_39655 = inst_39654;
var state_39697__$1 = state_39697;
if(cljs.core.truth_(inst_39655)){
var statearr_39731_40862 = state_39697__$1;
(statearr_39731_40862[(1)] = (10));

} else {
var statearr_39732_40863 = state_39697__$1;
(statearr_39732_40863[(1)] = (11));

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
});})(c__38428__auto__))
;
return ((function (switch__38327__auto__,c__38428__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38328__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38328__auto____0 = (function (){
var statearr_39733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39733[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38328__auto__);

(statearr_39733[(1)] = (1));

return statearr_39733;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38328__auto____1 = (function (state_39697){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_39697);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e39734){if((e39734 instanceof Object)){
var ex__38331__auto__ = e39734;
var statearr_39735_40864 = state_39697;
(statearr_39735_40864[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39697);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39734;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40865 = state_39697;
state_39697 = G__40865;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38328__auto__ = function(state_39697){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38328__auto____1.call(this,state_39697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38328__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38328__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto__))
})();
var state__38430__auto__ = (function (){var statearr_39736 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_39736[(6)] = c__38428__auto__);

return statearr_39736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto__))
);

return c__38428__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39738 = arguments.length;
switch (G__39738) {
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
var G__39740 = arguments.length;
switch (G__39740) {
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
var G__39742 = arguments.length;
switch (G__39742) {
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
var c__38428__auto___40873 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto___40873,out){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto___40873,out){
return (function (state_39766){
var state_val_39767 = (state_39766[(1)]);
if((state_val_39767 === (7))){
var inst_39761 = (state_39766[(2)]);
var state_39766__$1 = state_39766;
var statearr_39768_40875 = state_39766__$1;
(statearr_39768_40875[(2)] = inst_39761);

(statearr_39768_40875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39767 === (1))){
var inst_39743 = null;
var state_39766__$1 = (function (){var statearr_39769 = state_39766;
(statearr_39769[(7)] = inst_39743);

return statearr_39769;
})();
var statearr_39770_40876 = state_39766__$1;
(statearr_39770_40876[(2)] = null);

(statearr_39770_40876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39767 === (4))){
var inst_39746 = (state_39766[(8)]);
var inst_39746__$1 = (state_39766[(2)]);
var inst_39747 = (inst_39746__$1 == null);
var inst_39748 = cljs.core.not(inst_39747);
var state_39766__$1 = (function (){var statearr_39771 = state_39766;
(statearr_39771[(8)] = inst_39746__$1);

return statearr_39771;
})();
if(inst_39748){
var statearr_39772_40877 = state_39766__$1;
(statearr_39772_40877[(1)] = (5));

} else {
var statearr_39773_40878 = state_39766__$1;
(statearr_39773_40878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39767 === (6))){
var state_39766__$1 = state_39766;
var statearr_39774_40880 = state_39766__$1;
(statearr_39774_40880[(2)] = null);

(statearr_39774_40880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39767 === (3))){
var inst_39763 = (state_39766[(2)]);
var inst_39764 = cljs.core.async.close_BANG_(out);
var state_39766__$1 = (function (){var statearr_39775 = state_39766;
(statearr_39775[(9)] = inst_39763);

return statearr_39775;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39766__$1,inst_39764);
} else {
if((state_val_39767 === (2))){
var state_39766__$1 = state_39766;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39766__$1,(4),ch);
} else {
if((state_val_39767 === (11))){
var inst_39746 = (state_39766[(8)]);
var inst_39755 = (state_39766[(2)]);
var inst_39743 = inst_39746;
var state_39766__$1 = (function (){var statearr_39776 = state_39766;
(statearr_39776[(7)] = inst_39743);

(statearr_39776[(10)] = inst_39755);

return statearr_39776;
})();
var statearr_39777_40881 = state_39766__$1;
(statearr_39777_40881[(2)] = null);

(statearr_39777_40881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39767 === (9))){
var inst_39746 = (state_39766[(8)]);
var state_39766__$1 = state_39766;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39766__$1,(11),out,inst_39746);
} else {
if((state_val_39767 === (5))){
var inst_39743 = (state_39766[(7)]);
var inst_39746 = (state_39766[(8)]);
var inst_39750 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39746,inst_39743);
var state_39766__$1 = state_39766;
if(inst_39750){
var statearr_39779_40882 = state_39766__$1;
(statearr_39779_40882[(1)] = (8));

} else {
var statearr_39780_40883 = state_39766__$1;
(statearr_39780_40883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39767 === (10))){
var inst_39758 = (state_39766[(2)]);
var state_39766__$1 = state_39766;
var statearr_39781_40884 = state_39766__$1;
(statearr_39781_40884[(2)] = inst_39758);

(statearr_39781_40884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39767 === (8))){
var inst_39743 = (state_39766[(7)]);
var tmp39778 = inst_39743;
var inst_39743__$1 = tmp39778;
var state_39766__$1 = (function (){var statearr_39782 = state_39766;
(statearr_39782[(7)] = inst_39743__$1);

return statearr_39782;
})();
var statearr_39783_40886 = state_39766__$1;
(statearr_39783_40886[(2)] = null);

(statearr_39783_40886[(1)] = (2));


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
});})(c__38428__auto___40873,out))
;
return ((function (switch__38327__auto__,c__38428__auto___40873,out){
return (function() {
var cljs$core$async$state_machine__38328__auto__ = null;
var cljs$core$async$state_machine__38328__auto____0 = (function (){
var statearr_39784 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39784[(0)] = cljs$core$async$state_machine__38328__auto__);

(statearr_39784[(1)] = (1));

return statearr_39784;
});
var cljs$core$async$state_machine__38328__auto____1 = (function (state_39766){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_39766);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e39785){if((e39785 instanceof Object)){
var ex__38331__auto__ = e39785;
var statearr_39786_40899 = state_39766;
(statearr_39786_40899[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39766);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39785;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40903 = state_39766;
state_39766 = G__40903;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$state_machine__38328__auto__ = function(state_39766){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38328__auto____1.call(this,state_39766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38328__auto____0;
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38328__auto____1;
return cljs$core$async$state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto___40873,out))
})();
var state__38430__auto__ = (function (){var statearr_39787 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_39787[(6)] = c__38428__auto___40873);

return statearr_39787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto___40873,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39789 = arguments.length;
switch (G__39789) {
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
var c__38428__auto___40910 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto___40910,out){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto___40910,out){
return (function (state_39827){
var state_val_39828 = (state_39827[(1)]);
if((state_val_39828 === (7))){
var inst_39823 = (state_39827[(2)]);
var state_39827__$1 = state_39827;
var statearr_39829_40911 = state_39827__$1;
(statearr_39829_40911[(2)] = inst_39823);

(statearr_39829_40911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (1))){
var inst_39790 = (new Array(n));
var inst_39791 = inst_39790;
var inst_39792 = (0);
var state_39827__$1 = (function (){var statearr_39830 = state_39827;
(statearr_39830[(7)] = inst_39791);

(statearr_39830[(8)] = inst_39792);

return statearr_39830;
})();
var statearr_39831_40912 = state_39827__$1;
(statearr_39831_40912[(2)] = null);

(statearr_39831_40912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (4))){
var inst_39795 = (state_39827[(9)]);
var inst_39795__$1 = (state_39827[(2)]);
var inst_39796 = (inst_39795__$1 == null);
var inst_39797 = cljs.core.not(inst_39796);
var state_39827__$1 = (function (){var statearr_39832 = state_39827;
(statearr_39832[(9)] = inst_39795__$1);

return statearr_39832;
})();
if(inst_39797){
var statearr_39833_40917 = state_39827__$1;
(statearr_39833_40917[(1)] = (5));

} else {
var statearr_39834_40918 = state_39827__$1;
(statearr_39834_40918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (15))){
var inst_39817 = (state_39827[(2)]);
var state_39827__$1 = state_39827;
var statearr_39835_40923 = state_39827__$1;
(statearr_39835_40923[(2)] = inst_39817);

(statearr_39835_40923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (13))){
var state_39827__$1 = state_39827;
var statearr_39836_40924 = state_39827__$1;
(statearr_39836_40924[(2)] = null);

(statearr_39836_40924[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (6))){
var inst_39792 = (state_39827[(8)]);
var inst_39813 = (inst_39792 > (0));
var state_39827__$1 = state_39827;
if(cljs.core.truth_(inst_39813)){
var statearr_39837_40929 = state_39827__$1;
(statearr_39837_40929[(1)] = (12));

} else {
var statearr_39838_40930 = state_39827__$1;
(statearr_39838_40930[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (3))){
var inst_39825 = (state_39827[(2)]);
var state_39827__$1 = state_39827;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39827__$1,inst_39825);
} else {
if((state_val_39828 === (12))){
var inst_39791 = (state_39827[(7)]);
var inst_39815 = cljs.core.vec(inst_39791);
var state_39827__$1 = state_39827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39827__$1,(15),out,inst_39815);
} else {
if((state_val_39828 === (2))){
var state_39827__$1 = state_39827;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39827__$1,(4),ch);
} else {
if((state_val_39828 === (11))){
var inst_39807 = (state_39827[(2)]);
var inst_39808 = (new Array(n));
var inst_39791 = inst_39808;
var inst_39792 = (0);
var state_39827__$1 = (function (){var statearr_39839 = state_39827;
(statearr_39839[(7)] = inst_39791);

(statearr_39839[(8)] = inst_39792);

(statearr_39839[(10)] = inst_39807);

return statearr_39839;
})();
var statearr_39840_40938 = state_39827__$1;
(statearr_39840_40938[(2)] = null);

(statearr_39840_40938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (9))){
var inst_39791 = (state_39827[(7)]);
var inst_39805 = cljs.core.vec(inst_39791);
var state_39827__$1 = state_39827;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39827__$1,(11),out,inst_39805);
} else {
if((state_val_39828 === (5))){
var inst_39791 = (state_39827[(7)]);
var inst_39792 = (state_39827[(8)]);
var inst_39795 = (state_39827[(9)]);
var inst_39800 = (state_39827[(11)]);
var inst_39799 = (inst_39791[inst_39792] = inst_39795);
var inst_39800__$1 = (inst_39792 + (1));
var inst_39801 = (inst_39800__$1 < n);
var state_39827__$1 = (function (){var statearr_39841 = state_39827;
(statearr_39841[(12)] = inst_39799);

(statearr_39841[(11)] = inst_39800__$1);

return statearr_39841;
})();
if(cljs.core.truth_(inst_39801)){
var statearr_39842_40951 = state_39827__$1;
(statearr_39842_40951[(1)] = (8));

} else {
var statearr_39843_40952 = state_39827__$1;
(statearr_39843_40952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (14))){
var inst_39820 = (state_39827[(2)]);
var inst_39821 = cljs.core.async.close_BANG_(out);
var state_39827__$1 = (function (){var statearr_39845 = state_39827;
(statearr_39845[(13)] = inst_39820);

return statearr_39845;
})();
var statearr_39846_40956 = state_39827__$1;
(statearr_39846_40956[(2)] = inst_39821);

(statearr_39846_40956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (10))){
var inst_39811 = (state_39827[(2)]);
var state_39827__$1 = state_39827;
var statearr_39847_40957 = state_39827__$1;
(statearr_39847_40957[(2)] = inst_39811);

(statearr_39847_40957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39828 === (8))){
var inst_39791 = (state_39827[(7)]);
var inst_39800 = (state_39827[(11)]);
var tmp39844 = inst_39791;
var inst_39791__$1 = tmp39844;
var inst_39792 = inst_39800;
var state_39827__$1 = (function (){var statearr_39848 = state_39827;
(statearr_39848[(7)] = inst_39791__$1);

(statearr_39848[(8)] = inst_39792);

return statearr_39848;
})();
var statearr_39849_40959 = state_39827__$1;
(statearr_39849_40959[(2)] = null);

(statearr_39849_40959[(1)] = (2));


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
});})(c__38428__auto___40910,out))
;
return ((function (switch__38327__auto__,c__38428__auto___40910,out){
return (function() {
var cljs$core$async$state_machine__38328__auto__ = null;
var cljs$core$async$state_machine__38328__auto____0 = (function (){
var statearr_39850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39850[(0)] = cljs$core$async$state_machine__38328__auto__);

(statearr_39850[(1)] = (1));

return statearr_39850;
});
var cljs$core$async$state_machine__38328__auto____1 = (function (state_39827){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_39827);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e39851){if((e39851 instanceof Object)){
var ex__38331__auto__ = e39851;
var statearr_39852_40962 = state_39827;
(statearr_39852_40962[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39851;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40964 = state_39827;
state_39827 = G__40964;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$state_machine__38328__auto__ = function(state_39827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38328__auto____1.call(this,state_39827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38328__auto____0;
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38328__auto____1;
return cljs$core$async$state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto___40910,out))
})();
var state__38430__auto__ = (function (){var statearr_39853 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_39853[(6)] = c__38428__auto___40910);

return statearr_39853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto___40910,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39855 = arguments.length;
switch (G__39855) {
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
var c__38428__auto___40966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38428__auto___40966,out){
return (function (){
var f__38429__auto__ = (function (){var switch__38327__auto__ = ((function (c__38428__auto___40966,out){
return (function (state_39897){
var state_val_39898 = (state_39897[(1)]);
if((state_val_39898 === (7))){
var inst_39893 = (state_39897[(2)]);
var state_39897__$1 = state_39897;
var statearr_39899_40967 = state_39897__$1;
(statearr_39899_40967[(2)] = inst_39893);

(statearr_39899_40967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39898 === (1))){
var inst_39856 = [];
var inst_39857 = inst_39856;
var inst_39858 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39897__$1 = (function (){var statearr_39900 = state_39897;
(statearr_39900[(7)] = inst_39858);

(statearr_39900[(8)] = inst_39857);

return statearr_39900;
})();
var statearr_39901_40968 = state_39897__$1;
(statearr_39901_40968[(2)] = null);

(statearr_39901_40968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39898 === (4))){
var inst_39861 = (state_39897[(9)]);
var inst_39861__$1 = (state_39897[(2)]);
var inst_39862 = (inst_39861__$1 == null);
var inst_39863 = cljs.core.not(inst_39862);
var state_39897__$1 = (function (){var statearr_39902 = state_39897;
(statearr_39902[(9)] = inst_39861__$1);

return statearr_39902;
})();
if(inst_39863){
var statearr_39903_40969 = state_39897__$1;
(statearr_39903_40969[(1)] = (5));

} else {
var statearr_39904_40971 = state_39897__$1;
(statearr_39904_40971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39898 === (15))){
var inst_39887 = (state_39897[(2)]);
var state_39897__$1 = state_39897;
var statearr_39905_40972 = state_39897__$1;
(statearr_39905_40972[(2)] = inst_39887);

(statearr_39905_40972[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39898 === (13))){
var state_39897__$1 = state_39897;
var statearr_39906_40973 = state_39897__$1;
(statearr_39906_40973[(2)] = null);

(statearr_39906_40973[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39898 === (6))){
var inst_39857 = (state_39897[(8)]);
var inst_39882 = inst_39857.length;
var inst_39883 = (inst_39882 > (0));
var state_39897__$1 = state_39897;
if(cljs.core.truth_(inst_39883)){
var statearr_39907_40974 = state_39897__$1;
(statearr_39907_40974[(1)] = (12));

} else {
var statearr_39908_40975 = state_39897__$1;
(statearr_39908_40975[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39898 === (3))){
var inst_39895 = (state_39897[(2)]);
var state_39897__$1 = state_39897;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39897__$1,inst_39895);
} else {
if((state_val_39898 === (12))){
var inst_39857 = (state_39897[(8)]);
var inst_39885 = cljs.core.vec(inst_39857);
var state_39897__$1 = state_39897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39897__$1,(15),out,inst_39885);
} else {
if((state_val_39898 === (2))){
var state_39897__$1 = state_39897;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39897__$1,(4),ch);
} else {
if((state_val_39898 === (11))){
var inst_39865 = (state_39897[(10)]);
var inst_39861 = (state_39897[(9)]);
var inst_39875 = (state_39897[(2)]);
var inst_39876 = [];
var inst_39877 = inst_39876.push(inst_39861);
var inst_39857 = inst_39876;
var inst_39858 = inst_39865;
var state_39897__$1 = (function (){var statearr_39909 = state_39897;
(statearr_39909[(7)] = inst_39858);

(statearr_39909[(11)] = inst_39877);

(statearr_39909[(8)] = inst_39857);

(statearr_39909[(12)] = inst_39875);

return statearr_39909;
})();
var statearr_39910_40978 = state_39897__$1;
(statearr_39910_40978[(2)] = null);

(statearr_39910_40978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39898 === (9))){
var inst_39857 = (state_39897[(8)]);
var inst_39873 = cljs.core.vec(inst_39857);
var state_39897__$1 = state_39897;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39897__$1,(11),out,inst_39873);
} else {
if((state_val_39898 === (5))){
var inst_39858 = (state_39897[(7)]);
var inst_39865 = (state_39897[(10)]);
var inst_39861 = (state_39897[(9)]);
var inst_39865__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39861) : f.call(null,inst_39861));
var inst_39866 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39865__$1,inst_39858);
var inst_39867 = cljs.core.keyword_identical_QMARK_(inst_39858,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39868 = ((inst_39866) || (inst_39867));
var state_39897__$1 = (function (){var statearr_39911 = state_39897;
(statearr_39911[(10)] = inst_39865__$1);

return statearr_39911;
})();
if(cljs.core.truth_(inst_39868)){
var statearr_39912_40991 = state_39897__$1;
(statearr_39912_40991[(1)] = (8));

} else {
var statearr_39913_40992 = state_39897__$1;
(statearr_39913_40992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39898 === (14))){
var inst_39890 = (state_39897[(2)]);
var inst_39891 = cljs.core.async.close_BANG_(out);
var state_39897__$1 = (function (){var statearr_39915 = state_39897;
(statearr_39915[(13)] = inst_39890);

return statearr_39915;
})();
var statearr_39916_41002 = state_39897__$1;
(statearr_39916_41002[(2)] = inst_39891);

(statearr_39916_41002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39898 === (10))){
var inst_39880 = (state_39897[(2)]);
var state_39897__$1 = state_39897;
var statearr_39917_41006 = state_39897__$1;
(statearr_39917_41006[(2)] = inst_39880);

(statearr_39917_41006[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39898 === (8))){
var inst_39865 = (state_39897[(10)]);
var inst_39857 = (state_39897[(8)]);
var inst_39861 = (state_39897[(9)]);
var inst_39870 = inst_39857.push(inst_39861);
var tmp39914 = inst_39857;
var inst_39857__$1 = tmp39914;
var inst_39858 = inst_39865;
var state_39897__$1 = (function (){var statearr_39918 = state_39897;
(statearr_39918[(7)] = inst_39858);

(statearr_39918[(14)] = inst_39870);

(statearr_39918[(8)] = inst_39857__$1);

return statearr_39918;
})();
var statearr_39919_41022 = state_39897__$1;
(statearr_39919_41022[(2)] = null);

(statearr_39919_41022[(1)] = (2));


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
});})(c__38428__auto___40966,out))
;
return ((function (switch__38327__auto__,c__38428__auto___40966,out){
return (function() {
var cljs$core$async$state_machine__38328__auto__ = null;
var cljs$core$async$state_machine__38328__auto____0 = (function (){
var statearr_39920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39920[(0)] = cljs$core$async$state_machine__38328__auto__);

(statearr_39920[(1)] = (1));

return statearr_39920;
});
var cljs$core$async$state_machine__38328__auto____1 = (function (state_39897){
while(true){
var ret_value__38329__auto__ = (function (){try{while(true){
var result__38330__auto__ = switch__38327__auto__(state_39897);
if(cljs.core.keyword_identical_QMARK_(result__38330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38330__auto__;
}
break;
}
}catch (e39921){if((e39921 instanceof Object)){
var ex__38331__auto__ = e39921;
var statearr_39922_41043 = state_39897;
(statearr_39922_41043[(5)] = ex__38331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39921;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41045 = state_39897;
state_39897 = G__41045;
continue;
} else {
return ret_value__38329__auto__;
}
break;
}
});
cljs$core$async$state_machine__38328__auto__ = function(state_39897){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38328__auto____1.call(this,state_39897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38328__auto____0;
cljs$core$async$state_machine__38328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38328__auto____1;
return cljs$core$async$state_machine__38328__auto__;
})()
;})(switch__38327__auto__,c__38428__auto___40966,out))
})();
var state__38430__auto__ = (function (){var statearr_39923 = (f__38429__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38429__auto__.cljs$core$IFn$_invoke$arity$0() : f__38429__auto__.call(null));
(statearr_39923[(6)] = c__38428__auto___40966);

return statearr_39923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38430__auto__);
});})(c__38428__auto___40966,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
