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
var G__33723 = arguments.length;
switch (G__33723) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33724 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33724 = (function (f,blockable,meta33725){
this.f = f;
this.blockable = blockable;
this.meta33725 = meta33725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33726,meta33725__$1){
var self__ = this;
var _33726__$1 = this;
return (new cljs.core.async.t_cljs$core$async33724(self__.f,self__.blockable,meta33725__$1));
});

cljs.core.async.t_cljs$core$async33724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33726){
var self__ = this;
var _33726__$1 = this;
return self__.meta33725;
});

cljs.core.async.t_cljs$core$async33724.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33724.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33724.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33724.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33725","meta33725",711706748,null)], null);
});

cljs.core.async.t_cljs$core$async33724.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33724";

cljs.core.async.t_cljs$core$async33724.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33724");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33724.
 */
cljs.core.async.__GT_t_cljs$core$async33724 = (function cljs$core$async$__GT_t_cljs$core$async33724(f__$1,blockable__$1,meta33725){
return (new cljs.core.async.t_cljs$core$async33724(f__$1,blockable__$1,meta33725));
});

}

return (new cljs.core.async.t_cljs$core$async33724(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33732 = arguments.length;
switch (G__33732) {
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
var G__33734 = arguments.length;
switch (G__33734) {
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
var G__33736 = arguments.length;
switch (G__33736) {
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
var val_36518 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36518) : fn1.call(null,val_36518));
} else {
cljs.core.async.impl.dispatch.run(((function (val_36518,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_36518) : fn1.call(null,val_36518));
});})(val_36518,ret))
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
var G__33740 = arguments.length;
switch (G__33740) {
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
var n__4607__auto___36542 = n;
var x_36543 = (0);
while(true){
if((x_36543 < n__4607__auto___36542)){
(a[x_36543] = x_36543);

var G__36544 = (x_36543 + (1));
x_36543 = G__36544;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33741 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33741 = (function (flag,meta33742){
this.flag = flag;
this.meta33742 = meta33742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33743,meta33742__$1){
var self__ = this;
var _33743__$1 = this;
return (new cljs.core.async.t_cljs$core$async33741(self__.flag,meta33742__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33743){
var self__ = this;
var _33743__$1 = this;
return self__.meta33742;
});})(flag))
;

cljs.core.async.t_cljs$core$async33741.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33741.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33741.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33742","meta33742",-497414680,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33741.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33741";

cljs.core.async.t_cljs$core$async33741.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33741");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33741.
 */
cljs.core.async.__GT_t_cljs$core$async33741 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33741(flag__$1,meta33742){
return (new cljs.core.async.t_cljs$core$async33741(flag__$1,meta33742));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33741(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33744 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33744 = (function (flag,cb,meta33745){
this.flag = flag;
this.cb = cb;
this.meta33745 = meta33745;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33746,meta33745__$1){
var self__ = this;
var _33746__$1 = this;
return (new cljs.core.async.t_cljs$core$async33744(self__.flag,self__.cb,meta33745__$1));
});

cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33746){
var self__ = this;
var _33746__$1 = this;
return self__.meta33745;
});

cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33744.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33744.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33745","meta33745",1309077386,null)], null);
});

cljs.core.async.t_cljs$core$async33744.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33744.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33744";

cljs.core.async.t_cljs$core$async33744.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33744");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33744.
 */
cljs.core.async.__GT_t_cljs$core$async33744 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33744(flag__$1,cb__$1,meta33745){
return (new cljs.core.async.t_cljs$core$async33744(flag__$1,cb__$1,meta33745));
});

}

return (new cljs.core.async.t_cljs$core$async33744(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33751_SHARP_){
var G__33755 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33751_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33755) : fret.call(null,G__33755));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33752_SHARP_){
var G__33756 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33752_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33756) : fret.call(null,G__33756));
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
var G__36576 = (i + (1));
i = G__36576;
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
var len__4730__auto___36586 = arguments.length;
var i__4731__auto___36588 = (0);
while(true){
if((i__4731__auto___36588 < len__4730__auto___36586)){
args__4736__auto__.push((arguments[i__4731__auto___36588]));

var G__36589 = (i__4731__auto___36588 + (1));
i__4731__auto___36588 = G__36589;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33760){
var map__33761 = p__33760;
var map__33761__$1 = (((((!((map__33761 == null))))?(((((map__33761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33761):map__33761);
var opts = map__33761__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33757){
var G__33758 = cljs.core.first(seq33757);
var seq33757__$1 = cljs.core.next(seq33757);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33758,seq33757__$1);
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
var G__33772 = arguments.length;
switch (G__33772) {
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
var c__33642__auto___36600 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto___36600){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto___36600){
return (function (state_33826){
var state_val_33827 = (state_33826[(1)]);
if((state_val_33827 === (7))){
var inst_33818 = (state_33826[(2)]);
var state_33826__$1 = state_33826;
var statearr_33831_36604 = state_33826__$1;
(statearr_33831_36604[(2)] = inst_33818);

(statearr_33831_36604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (1))){
var state_33826__$1 = state_33826;
var statearr_33833_36605 = state_33826__$1;
(statearr_33833_36605[(2)] = null);

(statearr_33833_36605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (4))){
var inst_33797 = (state_33826[(7)]);
var inst_33797__$1 = (state_33826[(2)]);
var inst_33802 = (inst_33797__$1 == null);
var state_33826__$1 = (function (){var statearr_33834 = state_33826;
(statearr_33834[(7)] = inst_33797__$1);

return statearr_33834;
})();
if(cljs.core.truth_(inst_33802)){
var statearr_33835_36606 = state_33826__$1;
(statearr_33835_36606[(1)] = (5));

} else {
var statearr_33836_36609 = state_33826__$1;
(statearr_33836_36609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (13))){
var state_33826__$1 = state_33826;
var statearr_33839_36614 = state_33826__$1;
(statearr_33839_36614[(2)] = null);

(statearr_33839_36614[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (6))){
var inst_33797 = (state_33826[(7)]);
var state_33826__$1 = state_33826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33826__$1,(11),to,inst_33797);
} else {
if((state_val_33827 === (3))){
var inst_33824 = (state_33826[(2)]);
var state_33826__$1 = state_33826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33826__$1,inst_33824);
} else {
if((state_val_33827 === (12))){
var state_33826__$1 = state_33826;
var statearr_33840_36616 = state_33826__$1;
(statearr_33840_36616[(2)] = null);

(statearr_33840_36616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (2))){
var state_33826__$1 = state_33826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33826__$1,(4),from);
} else {
if((state_val_33827 === (11))){
var inst_33811 = (state_33826[(2)]);
var state_33826__$1 = state_33826;
if(cljs.core.truth_(inst_33811)){
var statearr_33841_36620 = state_33826__$1;
(statearr_33841_36620[(1)] = (12));

} else {
var statearr_33842_36621 = state_33826__$1;
(statearr_33842_36621[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (9))){
var state_33826__$1 = state_33826;
var statearr_33843_36623 = state_33826__$1;
(statearr_33843_36623[(2)] = null);

(statearr_33843_36623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (5))){
var state_33826__$1 = state_33826;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33848_36624 = state_33826__$1;
(statearr_33848_36624[(1)] = (8));

} else {
var statearr_33850_36625 = state_33826__$1;
(statearr_33850_36625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (14))){
var inst_33816 = (state_33826[(2)]);
var state_33826__$1 = state_33826;
var statearr_33851_36627 = state_33826__$1;
(statearr_33851_36627[(2)] = inst_33816);

(statearr_33851_36627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (10))){
var inst_33808 = (state_33826[(2)]);
var state_33826__$1 = state_33826;
var statearr_33852_36628 = state_33826__$1;
(statearr_33852_36628[(2)] = inst_33808);

(statearr_33852_36628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33827 === (8))){
var inst_33805 = cljs.core.async.close_BANG_(to);
var state_33826__$1 = state_33826;
var statearr_33853_36629 = state_33826__$1;
(statearr_33853_36629[(2)] = inst_33805);

(statearr_33853_36629[(1)] = (10));


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
});})(c__33642__auto___36600))
;
return ((function (switch__33308__auto__,c__33642__auto___36600){
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_33854 = [null,null,null,null,null,null,null,null];
(statearr_33854[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_33854[(1)] = (1));

return statearr_33854;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_33826){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_33826);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e33855){if((e33855 instanceof Object)){
var ex__33312__auto__ = e33855;
var statearr_33856_36635 = state_33826;
(statearr_33856_36635[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33855;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36636 = state_33826;
state_33826 = G__36636;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_33826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_33826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto___36600))
})();
var state__33644__auto__ = (function (){var statearr_33857 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_33857[(6)] = c__33642__auto___36600);

return statearr_33857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto___36600))
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
return (function (p__33860){
var vec__33861 = p__33860;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33861,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33861,(1),null);
var job = vec__33861;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33642__auto___36641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto___36641,res,vec__33861,v,p,job,jobs,results){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto___36641,res,vec__33861,v,p,job,jobs,results){
return (function (state_33868){
var state_val_33869 = (state_33868[(1)]);
if((state_val_33869 === (1))){
var state_33868__$1 = state_33868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33868__$1,(2),res,v);
} else {
if((state_val_33869 === (2))){
var inst_33865 = (state_33868[(2)]);
var inst_33866 = cljs.core.async.close_BANG_(res);
var state_33868__$1 = (function (){var statearr_33871 = state_33868;
(statearr_33871[(7)] = inst_33865);

return statearr_33871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33868__$1,inst_33866);
} else {
return null;
}
}
});})(c__33642__auto___36641,res,vec__33861,v,p,job,jobs,results))
;
return ((function (switch__33308__auto__,c__33642__auto___36641,res,vec__33861,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0 = (function (){
var statearr_33875 = [null,null,null,null,null,null,null,null];
(statearr_33875[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__);

(statearr_33875[(1)] = (1));

return statearr_33875;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1 = (function (state_33868){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_33868);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e33877){if((e33877 instanceof Object)){
var ex__33312__auto__ = e33877;
var statearr_33878_36646 = state_33868;
(statearr_33878_36646[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33877;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36647 = state_33868;
state_33868 = G__36647;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = function(state_33868){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1.call(this,state_33868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto___36641,res,vec__33861,v,p,job,jobs,results))
})();
var state__33644__auto__ = (function (){var statearr_33882 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_33882[(6)] = c__33642__auto___36641);

return statearr_33882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto___36641,res,vec__33861,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33884){
var vec__33888 = p__33884;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33888,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33888,(1),null);
var job = vec__33888;
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
var n__4607__auto___36652 = n;
var __36653 = (0);
while(true){
if((__36653 < n__4607__auto___36652)){
var G__33894_36654 = type;
var G__33894_36655__$1 = (((G__33894_36654 instanceof cljs.core.Keyword))?G__33894_36654.fqn:null);
switch (G__33894_36655__$1) {
case "compute":
var c__33642__auto___36657 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36653,c__33642__auto___36657,G__33894_36654,G__33894_36655__$1,n__4607__auto___36652,jobs,results,process,async){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (__36653,c__33642__auto___36657,G__33894_36654,G__33894_36655__$1,n__4607__auto___36652,jobs,results,process,async){
return (function (state_33907){
var state_val_33908 = (state_33907[(1)]);
if((state_val_33908 === (1))){
var state_33907__$1 = state_33907;
var statearr_33909_36658 = state_33907__$1;
(statearr_33909_36658[(2)] = null);

(statearr_33909_36658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (2))){
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33907__$1,(4),jobs);
} else {
if((state_val_33908 === (3))){
var inst_33905 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33907__$1,inst_33905);
} else {
if((state_val_33908 === (4))){
var inst_33897 = (state_33907[(2)]);
var inst_33898 = process(inst_33897);
var state_33907__$1 = state_33907;
if(cljs.core.truth_(inst_33898)){
var statearr_33914_36659 = state_33907__$1;
(statearr_33914_36659[(1)] = (5));

} else {
var statearr_33915_36660 = state_33907__$1;
(statearr_33915_36660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (5))){
var state_33907__$1 = state_33907;
var statearr_33922_36662 = state_33907__$1;
(statearr_33922_36662[(2)] = null);

(statearr_33922_36662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (6))){
var state_33907__$1 = state_33907;
var statearr_33923_36663 = state_33907__$1;
(statearr_33923_36663[(2)] = null);

(statearr_33923_36663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33908 === (7))){
var inst_33903 = (state_33907[(2)]);
var state_33907__$1 = state_33907;
var statearr_33924_36664 = state_33907__$1;
(statearr_33924_36664[(2)] = inst_33903);

(statearr_33924_36664[(1)] = (3));


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
});})(__36653,c__33642__auto___36657,G__33894_36654,G__33894_36655__$1,n__4607__auto___36652,jobs,results,process,async))
;
return ((function (__36653,switch__33308__auto__,c__33642__auto___36657,G__33894_36654,G__33894_36655__$1,n__4607__auto___36652,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0 = (function (){
var statearr_33929 = [null,null,null,null,null,null,null];
(statearr_33929[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__);

(statearr_33929[(1)] = (1));

return statearr_33929;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1 = (function (state_33907){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_33907);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e33930){if((e33930 instanceof Object)){
var ex__33312__auto__ = e33930;
var statearr_33931_36667 = state_33907;
(statearr_33931_36667[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33930;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36668 = state_33907;
state_33907 = G__36668;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = function(state_33907){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1.call(this,state_33907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__;
})()
;})(__36653,switch__33308__auto__,c__33642__auto___36657,G__33894_36654,G__33894_36655__$1,n__4607__auto___36652,jobs,results,process,async))
})();
var state__33644__auto__ = (function (){var statearr_33932 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_33932[(6)] = c__33642__auto___36657);

return statearr_33932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(__36653,c__33642__auto___36657,G__33894_36654,G__33894_36655__$1,n__4607__auto___36652,jobs,results,process,async))
);


break;
case "async":
var c__33642__auto___36670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__36653,c__33642__auto___36670,G__33894_36654,G__33894_36655__$1,n__4607__auto___36652,jobs,results,process,async){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (__36653,c__33642__auto___36670,G__33894_36654,G__33894_36655__$1,n__4607__auto___36652,jobs,results,process,async){
return (function (state_33946){
var state_val_33947 = (state_33946[(1)]);
if((state_val_33947 === (1))){
var state_33946__$1 = state_33946;
var statearr_33948_36671 = state_33946__$1;
(statearr_33948_36671[(2)] = null);

(statearr_33948_36671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33947 === (2))){
var state_33946__$1 = state_33946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33946__$1,(4),jobs);
} else {
if((state_val_33947 === (3))){
var inst_33944 = (state_33946[(2)]);
var state_33946__$1 = state_33946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33946__$1,inst_33944);
} else {
if((state_val_33947 === (4))){
var inst_33936 = (state_33946[(2)]);
var inst_33937 = async(inst_33936);
var state_33946__$1 = state_33946;
if(cljs.core.truth_(inst_33937)){
var statearr_33949_36674 = state_33946__$1;
(statearr_33949_36674[(1)] = (5));

} else {
var statearr_33950_36676 = state_33946__$1;
(statearr_33950_36676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33947 === (5))){
var state_33946__$1 = state_33946;
var statearr_33951_36677 = state_33946__$1;
(statearr_33951_36677[(2)] = null);

(statearr_33951_36677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33947 === (6))){
var state_33946__$1 = state_33946;
var statearr_33952_36678 = state_33946__$1;
(statearr_33952_36678[(2)] = null);

(statearr_33952_36678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33947 === (7))){
var inst_33942 = (state_33946[(2)]);
var state_33946__$1 = state_33946;
var statearr_33953_36680 = state_33946__$1;
(statearr_33953_36680[(2)] = inst_33942);

(statearr_33953_36680[(1)] = (3));


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
});})(__36653,c__33642__auto___36670,G__33894_36654,G__33894_36655__$1,n__4607__auto___36652,jobs,results,process,async))
;
return ((function (__36653,switch__33308__auto__,c__33642__auto___36670,G__33894_36654,G__33894_36655__$1,n__4607__auto___36652,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0 = (function (){
var statearr_33957 = [null,null,null,null,null,null,null];
(statearr_33957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__);

(statearr_33957[(1)] = (1));

return statearr_33957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1 = (function (state_33946){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_33946);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e33960){if((e33960 instanceof Object)){
var ex__33312__auto__ = e33960;
var statearr_33961_36683 = state_33946;
(statearr_33961_36683[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33960;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36689 = state_33946;
state_33946 = G__36689;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = function(state_33946){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1.call(this,state_33946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__;
})()
;})(__36653,switch__33308__auto__,c__33642__auto___36670,G__33894_36654,G__33894_36655__$1,n__4607__auto___36652,jobs,results,process,async))
})();
var state__33644__auto__ = (function (){var statearr_33962 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_33962[(6)] = c__33642__auto___36670);

return statearr_33962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(__36653,c__33642__auto___36670,G__33894_36654,G__33894_36655__$1,n__4607__auto___36652,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33894_36655__$1)].join('')));

}

var G__36690 = (__36653 + (1));
__36653 = G__36690;
continue;
} else {
}
break;
}

var c__33642__auto___36691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto___36691,jobs,results,process,async){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto___36691,jobs,results,process,async){
return (function (state_33986){
var state_val_33987 = (state_33986[(1)]);
if((state_val_33987 === (7))){
var inst_33982 = (state_33986[(2)]);
var state_33986__$1 = state_33986;
var statearr_33988_36693 = state_33986__$1;
(statearr_33988_36693[(2)] = inst_33982);

(statearr_33988_36693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (1))){
var state_33986__$1 = state_33986;
var statearr_33989_36695 = state_33986__$1;
(statearr_33989_36695[(2)] = null);

(statearr_33989_36695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (4))){
var inst_33965 = (state_33986[(7)]);
var inst_33965__$1 = (state_33986[(2)]);
var inst_33966 = (inst_33965__$1 == null);
var state_33986__$1 = (function (){var statearr_33992 = state_33986;
(statearr_33992[(7)] = inst_33965__$1);

return statearr_33992;
})();
if(cljs.core.truth_(inst_33966)){
var statearr_33993_36698 = state_33986__$1;
(statearr_33993_36698[(1)] = (5));

} else {
var statearr_33994_36699 = state_33986__$1;
(statearr_33994_36699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (6))){
var inst_33965 = (state_33986[(7)]);
var inst_33970 = (state_33986[(8)]);
var inst_33970__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33973 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33974 = [inst_33965,inst_33970__$1];
var inst_33975 = (new cljs.core.PersistentVector(null,2,(5),inst_33973,inst_33974,null));
var state_33986__$1 = (function (){var statearr_33995 = state_33986;
(statearr_33995[(8)] = inst_33970__$1);

return statearr_33995;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33986__$1,(8),jobs,inst_33975);
} else {
if((state_val_33987 === (3))){
var inst_33984 = (state_33986[(2)]);
var state_33986__$1 = state_33986;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33986__$1,inst_33984);
} else {
if((state_val_33987 === (2))){
var state_33986__$1 = state_33986;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33986__$1,(4),from);
} else {
if((state_val_33987 === (9))){
var inst_33979 = (state_33986[(2)]);
var state_33986__$1 = (function (){var statearr_33996 = state_33986;
(statearr_33996[(9)] = inst_33979);

return statearr_33996;
})();
var statearr_33997_36710 = state_33986__$1;
(statearr_33997_36710[(2)] = null);

(statearr_33997_36710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (5))){
var inst_33968 = cljs.core.async.close_BANG_(jobs);
var state_33986__$1 = state_33986;
var statearr_33998_36714 = state_33986__$1;
(statearr_33998_36714[(2)] = inst_33968);

(statearr_33998_36714[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33987 === (8))){
var inst_33970 = (state_33986[(8)]);
var inst_33977 = (state_33986[(2)]);
var state_33986__$1 = (function (){var statearr_34000 = state_33986;
(statearr_34000[(10)] = inst_33977);

return statearr_34000;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33986__$1,(9),results,inst_33970);
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
});})(c__33642__auto___36691,jobs,results,process,async))
;
return ((function (switch__33308__auto__,c__33642__auto___36691,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0 = (function (){
var statearr_34001 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34001[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__);

(statearr_34001[(1)] = (1));

return statearr_34001;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1 = (function (state_33986){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_33986);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e34003){if((e34003 instanceof Object)){
var ex__33312__auto__ = e34003;
var statearr_34004_36717 = state_33986;
(statearr_34004_36717[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33986);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34003;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36720 = state_33986;
state_33986 = G__36720;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = function(state_33986){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1.call(this,state_33986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto___36691,jobs,results,process,async))
})();
var state__33644__auto__ = (function (){var statearr_34010 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_34010[(6)] = c__33642__auto___36691);

return statearr_34010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto___36691,jobs,results,process,async))
);


var c__33642__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto__,jobs,results,process,async){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto__,jobs,results,process,async){
return (function (state_34054){
var state_val_34055 = (state_34054[(1)]);
if((state_val_34055 === (7))){
var inst_34049 = (state_34054[(2)]);
var state_34054__$1 = state_34054;
var statearr_34057_36725 = state_34054__$1;
(statearr_34057_36725[(2)] = inst_34049);

(statearr_34057_36725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (20))){
var state_34054__$1 = state_34054;
var statearr_34058_36726 = state_34054__$1;
(statearr_34058_36726[(2)] = null);

(statearr_34058_36726[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (1))){
var state_34054__$1 = state_34054;
var statearr_34059_36729 = state_34054__$1;
(statearr_34059_36729[(2)] = null);

(statearr_34059_36729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (4))){
var inst_34017 = (state_34054[(7)]);
var inst_34017__$1 = (state_34054[(2)]);
var inst_34018 = (inst_34017__$1 == null);
var state_34054__$1 = (function (){var statearr_34060 = state_34054;
(statearr_34060[(7)] = inst_34017__$1);

return statearr_34060;
})();
if(cljs.core.truth_(inst_34018)){
var statearr_34061_36732 = state_34054__$1;
(statearr_34061_36732[(1)] = (5));

} else {
var statearr_34062_36733 = state_34054__$1;
(statearr_34062_36733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (15))){
var inst_34031 = (state_34054[(8)]);
var state_34054__$1 = state_34054;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34054__$1,(18),to,inst_34031);
} else {
if((state_val_34055 === (21))){
var inst_34044 = (state_34054[(2)]);
var state_34054__$1 = state_34054;
var statearr_34064_36736 = state_34054__$1;
(statearr_34064_36736[(2)] = inst_34044);

(statearr_34064_36736[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (13))){
var inst_34046 = (state_34054[(2)]);
var state_34054__$1 = (function (){var statearr_34067 = state_34054;
(statearr_34067[(9)] = inst_34046);

return statearr_34067;
})();
var statearr_34071_36739 = state_34054__$1;
(statearr_34071_36739[(2)] = null);

(statearr_34071_36739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (6))){
var inst_34017 = (state_34054[(7)]);
var state_34054__$1 = state_34054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34054__$1,(11),inst_34017);
} else {
if((state_val_34055 === (17))){
var inst_34039 = (state_34054[(2)]);
var state_34054__$1 = state_34054;
if(cljs.core.truth_(inst_34039)){
var statearr_34072_36741 = state_34054__$1;
(statearr_34072_36741[(1)] = (19));

} else {
var statearr_34073_36744 = state_34054__$1;
(statearr_34073_36744[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (3))){
var inst_34051 = (state_34054[(2)]);
var state_34054__$1 = state_34054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34054__$1,inst_34051);
} else {
if((state_val_34055 === (12))){
var inst_34027 = (state_34054[(10)]);
var state_34054__$1 = state_34054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34054__$1,(14),inst_34027);
} else {
if((state_val_34055 === (2))){
var state_34054__$1 = state_34054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34054__$1,(4),results);
} else {
if((state_val_34055 === (19))){
var state_34054__$1 = state_34054;
var statearr_34074_36747 = state_34054__$1;
(statearr_34074_36747[(2)] = null);

(statearr_34074_36747[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (11))){
var inst_34027 = (state_34054[(2)]);
var state_34054__$1 = (function (){var statearr_34075 = state_34054;
(statearr_34075[(10)] = inst_34027);

return statearr_34075;
})();
var statearr_34076_36751 = state_34054__$1;
(statearr_34076_36751[(2)] = null);

(statearr_34076_36751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (9))){
var state_34054__$1 = state_34054;
var statearr_34077_36752 = state_34054__$1;
(statearr_34077_36752[(2)] = null);

(statearr_34077_36752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (5))){
var state_34054__$1 = state_34054;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34078_36754 = state_34054__$1;
(statearr_34078_36754[(1)] = (8));

} else {
var statearr_34079_36755 = state_34054__$1;
(statearr_34079_36755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (14))){
var inst_34033 = (state_34054[(11)]);
var inst_34031 = (state_34054[(8)]);
var inst_34031__$1 = (state_34054[(2)]);
var inst_34032 = (inst_34031__$1 == null);
var inst_34033__$1 = cljs.core.not(inst_34032);
var state_34054__$1 = (function (){var statearr_34081 = state_34054;
(statearr_34081[(11)] = inst_34033__$1);

(statearr_34081[(8)] = inst_34031__$1);

return statearr_34081;
})();
if(inst_34033__$1){
var statearr_34082_36759 = state_34054__$1;
(statearr_34082_36759[(1)] = (15));

} else {
var statearr_34083_36761 = state_34054__$1;
(statearr_34083_36761[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (16))){
var inst_34033 = (state_34054[(11)]);
var state_34054__$1 = state_34054;
var statearr_34084_36762 = state_34054__$1;
(statearr_34084_36762[(2)] = inst_34033);

(statearr_34084_36762[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (10))){
var inst_34024 = (state_34054[(2)]);
var state_34054__$1 = state_34054;
var statearr_34085_36765 = state_34054__$1;
(statearr_34085_36765[(2)] = inst_34024);

(statearr_34085_36765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (18))){
var inst_34036 = (state_34054[(2)]);
var state_34054__$1 = state_34054;
var statearr_34086_36767 = state_34054__$1;
(statearr_34086_36767[(2)] = inst_34036);

(statearr_34086_36767[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34055 === (8))){
var inst_34021 = cljs.core.async.close_BANG_(to);
var state_34054__$1 = state_34054;
var statearr_34092_36768 = state_34054__$1;
(statearr_34092_36768[(2)] = inst_34021);

(statearr_34092_36768[(1)] = (10));


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
});})(c__33642__auto__,jobs,results,process,async))
;
return ((function (switch__33308__auto__,c__33642__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0 = (function (){
var statearr_34093 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34093[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__);

(statearr_34093[(1)] = (1));

return statearr_34093;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1 = (function (state_34054){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_34054);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e34094){if((e34094 instanceof Object)){
var ex__33312__auto__ = e34094;
var statearr_34095_36776 = state_34054;
(statearr_34095_36776[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34094;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36777 = state_34054;
state_34054 = G__36777;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__ = function(state_34054){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1.call(this,state_34054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33309__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto__,jobs,results,process,async))
})();
var state__33644__auto__ = (function (){var statearr_34096 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_34096[(6)] = c__33642__auto__);

return statearr_34096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto__,jobs,results,process,async))
);

return c__33642__auto__;
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
var G__34108 = arguments.length;
switch (G__34108) {
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
var G__34117 = arguments.length;
switch (G__34117) {
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
var G__34127 = arguments.length;
switch (G__34127) {
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
var c__33642__auto___36790 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto___36790,tc,fc){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto___36790,tc,fc){
return (function (state_34154){
var state_val_34155 = (state_34154[(1)]);
if((state_val_34155 === (7))){
var inst_34150 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34161_36792 = state_34154__$1;
(statearr_34161_36792[(2)] = inst_34150);

(statearr_34161_36792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (1))){
var state_34154__$1 = state_34154;
var statearr_34166_36795 = state_34154__$1;
(statearr_34166_36795[(2)] = null);

(statearr_34166_36795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (4))){
var inst_34131 = (state_34154[(7)]);
var inst_34131__$1 = (state_34154[(2)]);
var inst_34132 = (inst_34131__$1 == null);
var state_34154__$1 = (function (){var statearr_34167 = state_34154;
(statearr_34167[(7)] = inst_34131__$1);

return statearr_34167;
})();
if(cljs.core.truth_(inst_34132)){
var statearr_34168_36797 = state_34154__$1;
(statearr_34168_36797[(1)] = (5));

} else {
var statearr_34169_36798 = state_34154__$1;
(statearr_34169_36798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (13))){
var state_34154__$1 = state_34154;
var statearr_34170_36799 = state_34154__$1;
(statearr_34170_36799[(2)] = null);

(statearr_34170_36799[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (6))){
var inst_34131 = (state_34154[(7)]);
var inst_34137 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34131) : p.call(null,inst_34131));
var state_34154__$1 = state_34154;
if(cljs.core.truth_(inst_34137)){
var statearr_34171_36804 = state_34154__$1;
(statearr_34171_36804[(1)] = (9));

} else {
var statearr_34172_36805 = state_34154__$1;
(statearr_34172_36805[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (3))){
var inst_34152 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34154__$1,inst_34152);
} else {
if((state_val_34155 === (12))){
var state_34154__$1 = state_34154;
var statearr_34173_36807 = state_34154__$1;
(statearr_34173_36807[(2)] = null);

(statearr_34173_36807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (2))){
var state_34154__$1 = state_34154;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34154__$1,(4),ch);
} else {
if((state_val_34155 === (11))){
var inst_34131 = (state_34154[(7)]);
var inst_34141 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34154__$1,(8),inst_34141,inst_34131);
} else {
if((state_val_34155 === (9))){
var state_34154__$1 = state_34154;
var statearr_34180_36811 = state_34154__$1;
(statearr_34180_36811[(2)] = tc);

(statearr_34180_36811[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (5))){
var inst_34134 = cljs.core.async.close_BANG_(tc);
var inst_34135 = cljs.core.async.close_BANG_(fc);
var state_34154__$1 = (function (){var statearr_34189 = state_34154;
(statearr_34189[(8)] = inst_34134);

return statearr_34189;
})();
var statearr_34190_36812 = state_34154__$1;
(statearr_34190_36812[(2)] = inst_34135);

(statearr_34190_36812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (14))){
var inst_34148 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
var statearr_34195_36815 = state_34154__$1;
(statearr_34195_36815[(2)] = inst_34148);

(statearr_34195_36815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (10))){
var state_34154__$1 = state_34154;
var statearr_34196_36816 = state_34154__$1;
(statearr_34196_36816[(2)] = fc);

(statearr_34196_36816[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34155 === (8))){
var inst_34143 = (state_34154[(2)]);
var state_34154__$1 = state_34154;
if(cljs.core.truth_(inst_34143)){
var statearr_34197_36820 = state_34154__$1;
(statearr_34197_36820[(1)] = (12));

} else {
var statearr_34198_36823 = state_34154__$1;
(statearr_34198_36823[(1)] = (13));

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
});})(c__33642__auto___36790,tc,fc))
;
return ((function (switch__33308__auto__,c__33642__auto___36790,tc,fc){
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_34199 = [null,null,null,null,null,null,null,null,null];
(statearr_34199[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_34199[(1)] = (1));

return statearr_34199;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_34154){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_34154);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e34200){if((e34200 instanceof Object)){
var ex__33312__auto__ = e34200;
var statearr_34201_36827 = state_34154;
(statearr_34201_36827[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34200;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36830 = state_34154;
state_34154 = G__36830;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_34154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_34154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto___36790,tc,fc))
})();
var state__33644__auto__ = (function (){var statearr_34202 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_34202[(6)] = c__33642__auto___36790);

return statearr_34202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto___36790,tc,fc))
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
var c__33642__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto__){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto__){
return (function (state_34226){
var state_val_34227 = (state_34226[(1)]);
if((state_val_34227 === (7))){
var inst_34222 = (state_34226[(2)]);
var state_34226__$1 = state_34226;
var statearr_34232_36842 = state_34226__$1;
(statearr_34232_36842[(2)] = inst_34222);

(statearr_34232_36842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34227 === (1))){
var inst_34204 = init;
var state_34226__$1 = (function (){var statearr_34239 = state_34226;
(statearr_34239[(7)] = inst_34204);

return statearr_34239;
})();
var statearr_34248_36845 = state_34226__$1;
(statearr_34248_36845[(2)] = null);

(statearr_34248_36845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34227 === (4))){
var inst_34207 = (state_34226[(8)]);
var inst_34207__$1 = (state_34226[(2)]);
var inst_34208 = (inst_34207__$1 == null);
var state_34226__$1 = (function (){var statearr_34249 = state_34226;
(statearr_34249[(8)] = inst_34207__$1);

return statearr_34249;
})();
if(cljs.core.truth_(inst_34208)){
var statearr_34251_36847 = state_34226__$1;
(statearr_34251_36847[(1)] = (5));

} else {
var statearr_34252_36849 = state_34226__$1;
(statearr_34252_36849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34227 === (6))){
var inst_34211 = (state_34226[(9)]);
var inst_34207 = (state_34226[(8)]);
var inst_34204 = (state_34226[(7)]);
var inst_34211__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34204,inst_34207) : f.call(null,inst_34204,inst_34207));
var inst_34212 = cljs.core.reduced_QMARK_(inst_34211__$1);
var state_34226__$1 = (function (){var statearr_34253 = state_34226;
(statearr_34253[(9)] = inst_34211__$1);

return statearr_34253;
})();
if(inst_34212){
var statearr_34255_36852 = state_34226__$1;
(statearr_34255_36852[(1)] = (8));

} else {
var statearr_34259_36853 = state_34226__$1;
(statearr_34259_36853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34227 === (3))){
var inst_34224 = (state_34226[(2)]);
var state_34226__$1 = state_34226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34226__$1,inst_34224);
} else {
if((state_val_34227 === (2))){
var state_34226__$1 = state_34226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34226__$1,(4),ch);
} else {
if((state_val_34227 === (9))){
var inst_34211 = (state_34226[(9)]);
var inst_34204 = inst_34211;
var state_34226__$1 = (function (){var statearr_34260 = state_34226;
(statearr_34260[(7)] = inst_34204);

return statearr_34260;
})();
var statearr_34261_36854 = state_34226__$1;
(statearr_34261_36854[(2)] = null);

(statearr_34261_36854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34227 === (5))){
var inst_34204 = (state_34226[(7)]);
var state_34226__$1 = state_34226;
var statearr_34262_36864 = state_34226__$1;
(statearr_34262_36864[(2)] = inst_34204);

(statearr_34262_36864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34227 === (10))){
var inst_34218 = (state_34226[(2)]);
var state_34226__$1 = state_34226;
var statearr_34263_36868 = state_34226__$1;
(statearr_34263_36868[(2)] = inst_34218);

(statearr_34263_36868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34227 === (8))){
var inst_34211 = (state_34226[(9)]);
var inst_34214 = cljs.core.deref(inst_34211);
var state_34226__$1 = state_34226;
var statearr_34264_36870 = state_34226__$1;
(statearr_34264_36870[(2)] = inst_34214);

(statearr_34264_36870[(1)] = (10));


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
});})(c__33642__auto__))
;
return ((function (switch__33308__auto__,c__33642__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33309__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33309__auto____0 = (function (){
var statearr_34265 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34265[(0)] = cljs$core$async$reduce_$_state_machine__33309__auto__);

(statearr_34265[(1)] = (1));

return statearr_34265;
});
var cljs$core$async$reduce_$_state_machine__33309__auto____1 = (function (state_34226){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_34226);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e34266){if((e34266 instanceof Object)){
var ex__33312__auto__ = e34266;
var statearr_34267_36878 = state_34226;
(statearr_34267_36878[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34266;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36882 = state_34226;
state_34226 = G__36882;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33309__auto__ = function(state_34226){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33309__auto____1.call(this,state_34226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33309__auto____0;
cljs$core$async$reduce_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33309__auto____1;
return cljs$core$async$reduce_$_state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto__))
})();
var state__33644__auto__ = (function (){var statearr_34269 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_34269[(6)] = c__33642__auto__);

return statearr_34269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto__))
);

return c__33642__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33642__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto__,f__$1){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto__,f__$1){
return (function (state_34275){
var state_val_34276 = (state_34275[(1)]);
if((state_val_34276 === (1))){
var inst_34270 = cljs.core.async.reduce(f__$1,init,ch);
var state_34275__$1 = state_34275;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34275__$1,(2),inst_34270);
} else {
if((state_val_34276 === (2))){
var inst_34272 = (state_34275[(2)]);
var inst_34273 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34272) : f__$1.call(null,inst_34272));
var state_34275__$1 = state_34275;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34275__$1,inst_34273);
} else {
return null;
}
}
});})(c__33642__auto__,f__$1))
;
return ((function (switch__33308__auto__,c__33642__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33309__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33309__auto____0 = (function (){
var statearr_34283 = [null,null,null,null,null,null,null];
(statearr_34283[(0)] = cljs$core$async$transduce_$_state_machine__33309__auto__);

(statearr_34283[(1)] = (1));

return statearr_34283;
});
var cljs$core$async$transduce_$_state_machine__33309__auto____1 = (function (state_34275){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_34275);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e34288){if((e34288 instanceof Object)){
var ex__33312__auto__ = e34288;
var statearr_34291_36911 = state_34275;
(statearr_34291_36911[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34288;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36912 = state_34275;
state_34275 = G__36912;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33309__auto__ = function(state_34275){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33309__auto____1.call(this,state_34275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33309__auto____0;
cljs$core$async$transduce_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33309__auto____1;
return cljs$core$async$transduce_$_state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto__,f__$1))
})();
var state__33644__auto__ = (function (){var statearr_34294 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_34294[(6)] = c__33642__auto__);

return statearr_34294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto__,f__$1))
);

return c__33642__auto__;
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
var G__34296 = arguments.length;
switch (G__34296) {
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
var c__33642__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto__){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto__){
return (function (state_34328){
var state_val_34329 = (state_34328[(1)]);
if((state_val_34329 === (7))){
var inst_34307 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34330_36925 = state_34328__$1;
(statearr_34330_36925[(2)] = inst_34307);

(statearr_34330_36925[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (1))){
var inst_34300 = cljs.core.seq(coll);
var inst_34301 = inst_34300;
var state_34328__$1 = (function (){var statearr_34331 = state_34328;
(statearr_34331[(7)] = inst_34301);

return statearr_34331;
})();
var statearr_34332_36931 = state_34328__$1;
(statearr_34332_36931[(2)] = null);

(statearr_34332_36931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (4))){
var inst_34301 = (state_34328[(7)]);
var inst_34305 = cljs.core.first(inst_34301);
var state_34328__$1 = state_34328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34328__$1,(7),ch,inst_34305);
} else {
if((state_val_34329 === (13))){
var inst_34322 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34333_36936 = state_34328__$1;
(statearr_34333_36936[(2)] = inst_34322);

(statearr_34333_36936[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (6))){
var inst_34311 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
if(cljs.core.truth_(inst_34311)){
var statearr_34334_36943 = state_34328__$1;
(statearr_34334_36943[(1)] = (8));

} else {
var statearr_34335_36946 = state_34328__$1;
(statearr_34335_36946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (3))){
var inst_34326 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34328__$1,inst_34326);
} else {
if((state_val_34329 === (12))){
var state_34328__$1 = state_34328;
var statearr_34336_36951 = state_34328__$1;
(statearr_34336_36951[(2)] = null);

(statearr_34336_36951[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (2))){
var inst_34301 = (state_34328[(7)]);
var state_34328__$1 = state_34328;
if(cljs.core.truth_(inst_34301)){
var statearr_34337_36952 = state_34328__$1;
(statearr_34337_36952[(1)] = (4));

} else {
var statearr_34339_36954 = state_34328__$1;
(statearr_34339_36954[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (11))){
var inst_34319 = cljs.core.async.close_BANG_(ch);
var state_34328__$1 = state_34328;
var statearr_34343_36956 = state_34328__$1;
(statearr_34343_36956[(2)] = inst_34319);

(statearr_34343_36956[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (9))){
var state_34328__$1 = state_34328;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34344_36957 = state_34328__$1;
(statearr_34344_36957[(1)] = (11));

} else {
var statearr_34345_36961 = state_34328__$1;
(statearr_34345_36961[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (5))){
var inst_34301 = (state_34328[(7)]);
var state_34328__$1 = state_34328;
var statearr_34346_36965 = state_34328__$1;
(statearr_34346_36965[(2)] = inst_34301);

(statearr_34346_36965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (10))){
var inst_34324 = (state_34328[(2)]);
var state_34328__$1 = state_34328;
var statearr_34347_36970 = state_34328__$1;
(statearr_34347_36970[(2)] = inst_34324);

(statearr_34347_36970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34329 === (8))){
var inst_34301 = (state_34328[(7)]);
var inst_34314 = cljs.core.next(inst_34301);
var inst_34301__$1 = inst_34314;
var state_34328__$1 = (function (){var statearr_34348 = state_34328;
(statearr_34348[(7)] = inst_34301__$1);

return statearr_34348;
})();
var statearr_34349_36972 = state_34328__$1;
(statearr_34349_36972[(2)] = null);

(statearr_34349_36972[(1)] = (2));


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
});})(c__33642__auto__))
;
return ((function (switch__33308__auto__,c__33642__auto__){
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_34353 = [null,null,null,null,null,null,null,null];
(statearr_34353[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_34353[(1)] = (1));

return statearr_34353;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_34328){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_34328);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e34354){if((e34354 instanceof Object)){
var ex__33312__auto__ = e34354;
var statearr_34355_36978 = state_34328;
(statearr_34355_36978[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34354;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36985 = state_34328;
state_34328 = G__36985;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_34328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_34328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto__))
})();
var state__33644__auto__ = (function (){var statearr_34358 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_34358[(6)] = c__33642__auto__);

return statearr_34358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto__))
);

return c__33642__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34371 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34371 = (function (ch,cs,meta34372){
this.ch = ch;
this.cs = cs;
this.meta34372 = meta34372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34373,meta34372__$1){
var self__ = this;
var _34373__$1 = this;
return (new cljs.core.async.t_cljs$core$async34371(self__.ch,self__.cs,meta34372__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34373){
var self__ = this;
var _34373__$1 = this;
return self__.meta34372;
});})(cs))
;

cljs.core.async.t_cljs$core$async34371.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34371.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34371.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34371.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34371.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34371.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34372","meta34372",-1262033844,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34371.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34371";

cljs.core.async.t_cljs$core$async34371.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34371");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34371.
 */
cljs.core.async.__GT_t_cljs$core$async34371 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34371(ch__$1,cs__$1,meta34372){
return (new cljs.core.async.t_cljs$core$async34371(ch__$1,cs__$1,meta34372));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34371(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33642__auto___37041 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto___37041,cs,m,dchan,dctr,done){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto___37041,cs,m,dchan,dctr,done){
return (function (state_34550){
var state_val_34555 = (state_34550[(1)]);
if((state_val_34555 === (7))){
var inst_34546 = (state_34550[(2)]);
var state_34550__$1 = state_34550;
var statearr_34569_37046 = state_34550__$1;
(statearr_34569_37046[(2)] = inst_34546);

(statearr_34569_37046[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (20))){
var inst_34413 = (state_34550[(7)]);
var inst_34430 = cljs.core.first(inst_34413);
var inst_34431 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34430,(0),null);
var inst_34436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34430,(1),null);
var state_34550__$1 = (function (){var statearr_34575 = state_34550;
(statearr_34575[(8)] = inst_34431);

return statearr_34575;
})();
if(cljs.core.truth_(inst_34436)){
var statearr_34577_37049 = state_34550__$1;
(statearr_34577_37049[(1)] = (22));

} else {
var statearr_34578_37050 = state_34550__$1;
(statearr_34578_37050[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (27))){
var inst_34377 = (state_34550[(9)]);
var inst_34485 = (state_34550[(10)]);
var inst_34477 = (state_34550[(11)]);
var inst_34479 = (state_34550[(12)]);
var inst_34485__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34477,inst_34479);
var inst_34486 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34485__$1,inst_34377,done);
var state_34550__$1 = (function (){var statearr_34579 = state_34550;
(statearr_34579[(10)] = inst_34485__$1);

return statearr_34579;
})();
if(cljs.core.truth_(inst_34486)){
var statearr_34580_37055 = state_34550__$1;
(statearr_34580_37055[(1)] = (30));

} else {
var statearr_34581_37056 = state_34550__$1;
(statearr_34581_37056[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (1))){
var state_34550__$1 = state_34550;
var statearr_34582_37057 = state_34550__$1;
(statearr_34582_37057[(2)] = null);

(statearr_34582_37057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (24))){
var inst_34413 = (state_34550[(7)]);
var inst_34442 = (state_34550[(2)]);
var inst_34443 = cljs.core.next(inst_34413);
var inst_34386 = inst_34443;
var inst_34387 = null;
var inst_34388 = (0);
var inst_34389 = (0);
var state_34550__$1 = (function (){var statearr_34584 = state_34550;
(statearr_34584[(13)] = inst_34389);

(statearr_34584[(14)] = inst_34388);

(statearr_34584[(15)] = inst_34387);

(statearr_34584[(16)] = inst_34386);

(statearr_34584[(17)] = inst_34442);

return statearr_34584;
})();
var statearr_34585_37063 = state_34550__$1;
(statearr_34585_37063[(2)] = null);

(statearr_34585_37063[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (39))){
var state_34550__$1 = state_34550;
var statearr_34594_37065 = state_34550__$1;
(statearr_34594_37065[(2)] = null);

(statearr_34594_37065[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (4))){
var inst_34377 = (state_34550[(9)]);
var inst_34377__$1 = (state_34550[(2)]);
var inst_34378 = (inst_34377__$1 == null);
var state_34550__$1 = (function (){var statearr_34595 = state_34550;
(statearr_34595[(9)] = inst_34377__$1);

return statearr_34595;
})();
if(cljs.core.truth_(inst_34378)){
var statearr_34598_37067 = state_34550__$1;
(statearr_34598_37067[(1)] = (5));

} else {
var statearr_34599_37071 = state_34550__$1;
(statearr_34599_37071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (15))){
var inst_34389 = (state_34550[(13)]);
var inst_34388 = (state_34550[(14)]);
var inst_34387 = (state_34550[(15)]);
var inst_34386 = (state_34550[(16)]);
var inst_34406 = (state_34550[(2)]);
var inst_34409 = (inst_34389 + (1));
var tmp34589 = inst_34388;
var tmp34590 = inst_34387;
var tmp34591 = inst_34386;
var inst_34386__$1 = tmp34591;
var inst_34387__$1 = tmp34590;
var inst_34388__$1 = tmp34589;
var inst_34389__$1 = inst_34409;
var state_34550__$1 = (function (){var statearr_34610 = state_34550;
(statearr_34610[(13)] = inst_34389__$1);

(statearr_34610[(14)] = inst_34388__$1);

(statearr_34610[(15)] = inst_34387__$1);

(statearr_34610[(16)] = inst_34386__$1);

(statearr_34610[(18)] = inst_34406);

return statearr_34610;
})();
var statearr_34611_37073 = state_34550__$1;
(statearr_34611_37073[(2)] = null);

(statearr_34611_37073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (21))){
var inst_34447 = (state_34550[(2)]);
var state_34550__$1 = state_34550;
var statearr_34616_37077 = state_34550__$1;
(statearr_34616_37077[(2)] = inst_34447);

(statearr_34616_37077[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (31))){
var inst_34485 = (state_34550[(10)]);
var inst_34493 = done(null);
var inst_34498 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34485);
var state_34550__$1 = (function (){var statearr_34618 = state_34550;
(statearr_34618[(19)] = inst_34493);

return statearr_34618;
})();
var statearr_34620_37081 = state_34550__$1;
(statearr_34620_37081[(2)] = inst_34498);

(statearr_34620_37081[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (32))){
var inst_34478 = (state_34550[(20)]);
var inst_34476 = (state_34550[(21)]);
var inst_34477 = (state_34550[(11)]);
var inst_34479 = (state_34550[(12)]);
var inst_34500 = (state_34550[(2)]);
var inst_34505 = (inst_34479 + (1));
var tmp34612 = inst_34478;
var tmp34613 = inst_34476;
var tmp34614 = inst_34477;
var inst_34476__$1 = tmp34613;
var inst_34477__$1 = tmp34614;
var inst_34478__$1 = tmp34612;
var inst_34479__$1 = inst_34505;
var state_34550__$1 = (function (){var statearr_34625 = state_34550;
(statearr_34625[(20)] = inst_34478__$1);

(statearr_34625[(21)] = inst_34476__$1);

(statearr_34625[(11)] = inst_34477__$1);

(statearr_34625[(12)] = inst_34479__$1);

(statearr_34625[(22)] = inst_34500);

return statearr_34625;
})();
var statearr_34627_37093 = state_34550__$1;
(statearr_34627_37093[(2)] = null);

(statearr_34627_37093[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (40))){
var inst_34518 = (state_34550[(23)]);
var inst_34522 = done(null);
var inst_34523 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34518);
var state_34550__$1 = (function (){var statearr_34634 = state_34550;
(statearr_34634[(24)] = inst_34522);

return statearr_34634;
})();
var statearr_34635_37097 = state_34550__$1;
(statearr_34635_37097[(2)] = inst_34523);

(statearr_34635_37097[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (33))){
var inst_34508 = (state_34550[(25)]);
var inst_34510 = cljs.core.chunked_seq_QMARK_(inst_34508);
var state_34550__$1 = state_34550;
if(inst_34510){
var statearr_34638_37100 = state_34550__$1;
(statearr_34638_37100[(1)] = (36));

} else {
var statearr_34640_37101 = state_34550__$1;
(statearr_34640_37101[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (13))){
var inst_34399 = (state_34550[(26)]);
var inst_34402 = cljs.core.async.close_BANG_(inst_34399);
var state_34550__$1 = state_34550;
var statearr_34643_37106 = state_34550__$1;
(statearr_34643_37106[(2)] = inst_34402);

(statearr_34643_37106[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (22))){
var inst_34431 = (state_34550[(8)]);
var inst_34438 = cljs.core.async.close_BANG_(inst_34431);
var state_34550__$1 = state_34550;
var statearr_34647_37110 = state_34550__$1;
(statearr_34647_37110[(2)] = inst_34438);

(statearr_34647_37110[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (36))){
var inst_34508 = (state_34550[(25)]);
var inst_34512 = cljs.core.chunk_first(inst_34508);
var inst_34513 = cljs.core.chunk_rest(inst_34508);
var inst_34515 = cljs.core.count(inst_34512);
var inst_34476 = inst_34513;
var inst_34477 = inst_34512;
var inst_34478 = inst_34515;
var inst_34479 = (0);
var state_34550__$1 = (function (){var statearr_34651 = state_34550;
(statearr_34651[(20)] = inst_34478);

(statearr_34651[(21)] = inst_34476);

(statearr_34651[(11)] = inst_34477);

(statearr_34651[(12)] = inst_34479);

return statearr_34651;
})();
var statearr_34653_37114 = state_34550__$1;
(statearr_34653_37114[(2)] = null);

(statearr_34653_37114[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (41))){
var inst_34508 = (state_34550[(25)]);
var inst_34525 = (state_34550[(2)]);
var inst_34526 = cljs.core.next(inst_34508);
var inst_34476 = inst_34526;
var inst_34477 = null;
var inst_34478 = (0);
var inst_34479 = (0);
var state_34550__$1 = (function (){var statearr_34654 = state_34550;
(statearr_34654[(27)] = inst_34525);

(statearr_34654[(20)] = inst_34478);

(statearr_34654[(21)] = inst_34476);

(statearr_34654[(11)] = inst_34477);

(statearr_34654[(12)] = inst_34479);

return statearr_34654;
})();
var statearr_34664_37122 = state_34550__$1;
(statearr_34664_37122[(2)] = null);

(statearr_34664_37122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (43))){
var state_34550__$1 = state_34550;
var statearr_34666_37126 = state_34550__$1;
(statearr_34666_37126[(2)] = null);

(statearr_34666_37126[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (29))){
var inst_34534 = (state_34550[(2)]);
var state_34550__$1 = state_34550;
var statearr_34667_37128 = state_34550__$1;
(statearr_34667_37128[(2)] = inst_34534);

(statearr_34667_37128[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (44))){
var inst_34543 = (state_34550[(2)]);
var state_34550__$1 = (function (){var statearr_34668 = state_34550;
(statearr_34668[(28)] = inst_34543);

return statearr_34668;
})();
var statearr_34669_37131 = state_34550__$1;
(statearr_34669_37131[(2)] = null);

(statearr_34669_37131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (6))){
var inst_34463 = (state_34550[(29)]);
var inst_34462 = cljs.core.deref(cs);
var inst_34463__$1 = cljs.core.keys(inst_34462);
var inst_34465 = cljs.core.count(inst_34463__$1);
var inst_34466 = cljs.core.reset_BANG_(dctr,inst_34465);
var inst_34475 = cljs.core.seq(inst_34463__$1);
var inst_34476 = inst_34475;
var inst_34477 = null;
var inst_34478 = (0);
var inst_34479 = (0);
var state_34550__$1 = (function (){var statearr_34679 = state_34550;
(statearr_34679[(30)] = inst_34466);

(statearr_34679[(29)] = inst_34463__$1);

(statearr_34679[(20)] = inst_34478);

(statearr_34679[(21)] = inst_34476);

(statearr_34679[(11)] = inst_34477);

(statearr_34679[(12)] = inst_34479);

return statearr_34679;
})();
var statearr_34680_37146 = state_34550__$1;
(statearr_34680_37146[(2)] = null);

(statearr_34680_37146[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (28))){
var inst_34476 = (state_34550[(21)]);
var inst_34508 = (state_34550[(25)]);
var inst_34508__$1 = cljs.core.seq(inst_34476);
var state_34550__$1 = (function (){var statearr_34681 = state_34550;
(statearr_34681[(25)] = inst_34508__$1);

return statearr_34681;
})();
if(inst_34508__$1){
var statearr_34682_37150 = state_34550__$1;
(statearr_34682_37150[(1)] = (33));

} else {
var statearr_34683_37151 = state_34550__$1;
(statearr_34683_37151[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (25))){
var inst_34478 = (state_34550[(20)]);
var inst_34479 = (state_34550[(12)]);
var inst_34482 = (inst_34479 < inst_34478);
var inst_34483 = inst_34482;
var state_34550__$1 = state_34550;
if(cljs.core.truth_(inst_34483)){
var statearr_34684_37152 = state_34550__$1;
(statearr_34684_37152[(1)] = (27));

} else {
var statearr_34685_37156 = state_34550__$1;
(statearr_34685_37156[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (34))){
var state_34550__$1 = state_34550;
var statearr_34686_37157 = state_34550__$1;
(statearr_34686_37157[(2)] = null);

(statearr_34686_37157[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (17))){
var state_34550__$1 = state_34550;
var statearr_34687_37158 = state_34550__$1;
(statearr_34687_37158[(2)] = null);

(statearr_34687_37158[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (3))){
var inst_34548 = (state_34550[(2)]);
var state_34550__$1 = state_34550;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34550__$1,inst_34548);
} else {
if((state_val_34555 === (12))){
var inst_34453 = (state_34550[(2)]);
var state_34550__$1 = state_34550;
var statearr_34692_37166 = state_34550__$1;
(statearr_34692_37166[(2)] = inst_34453);

(statearr_34692_37166[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (2))){
var state_34550__$1 = state_34550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34550__$1,(4),ch);
} else {
if((state_val_34555 === (23))){
var state_34550__$1 = state_34550;
var statearr_34693_37170 = state_34550__$1;
(statearr_34693_37170[(2)] = null);

(statearr_34693_37170[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (35))){
var inst_34532 = (state_34550[(2)]);
var state_34550__$1 = state_34550;
var statearr_34701_37171 = state_34550__$1;
(statearr_34701_37171[(2)] = inst_34532);

(statearr_34701_37171[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (19))){
var inst_34413 = (state_34550[(7)]);
var inst_34417 = cljs.core.chunk_first(inst_34413);
var inst_34422 = cljs.core.chunk_rest(inst_34413);
var inst_34423 = cljs.core.count(inst_34417);
var inst_34386 = inst_34422;
var inst_34387 = inst_34417;
var inst_34388 = inst_34423;
var inst_34389 = (0);
var state_34550__$1 = (function (){var statearr_34703 = state_34550;
(statearr_34703[(13)] = inst_34389);

(statearr_34703[(14)] = inst_34388);

(statearr_34703[(15)] = inst_34387);

(statearr_34703[(16)] = inst_34386);

return statearr_34703;
})();
var statearr_34707_37178 = state_34550__$1;
(statearr_34707_37178[(2)] = null);

(statearr_34707_37178[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (11))){
var inst_34386 = (state_34550[(16)]);
var inst_34413 = (state_34550[(7)]);
var inst_34413__$1 = cljs.core.seq(inst_34386);
var state_34550__$1 = (function (){var statearr_34713 = state_34550;
(statearr_34713[(7)] = inst_34413__$1);

return statearr_34713;
})();
if(inst_34413__$1){
var statearr_34714_37185 = state_34550__$1;
(statearr_34714_37185[(1)] = (16));

} else {
var statearr_34715_37186 = state_34550__$1;
(statearr_34715_37186[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (9))){
var inst_34455 = (state_34550[(2)]);
var state_34550__$1 = state_34550;
var statearr_34721_37187 = state_34550__$1;
(statearr_34721_37187[(2)] = inst_34455);

(statearr_34721_37187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (5))){
var inst_34384 = cljs.core.deref(cs);
var inst_34385 = cljs.core.seq(inst_34384);
var inst_34386 = inst_34385;
var inst_34387 = null;
var inst_34388 = (0);
var inst_34389 = (0);
var state_34550__$1 = (function (){var statearr_34727 = state_34550;
(statearr_34727[(13)] = inst_34389);

(statearr_34727[(14)] = inst_34388);

(statearr_34727[(15)] = inst_34387);

(statearr_34727[(16)] = inst_34386);

return statearr_34727;
})();
var statearr_34728_37188 = state_34550__$1;
(statearr_34728_37188[(2)] = null);

(statearr_34728_37188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (14))){
var state_34550__$1 = state_34550;
var statearr_34730_37192 = state_34550__$1;
(statearr_34730_37192[(2)] = null);

(statearr_34730_37192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (45))){
var inst_34540 = (state_34550[(2)]);
var state_34550__$1 = state_34550;
var statearr_34731_37196 = state_34550__$1;
(statearr_34731_37196[(2)] = inst_34540);

(statearr_34731_37196[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (26))){
var inst_34463 = (state_34550[(29)]);
var inst_34536 = (state_34550[(2)]);
var inst_34537 = cljs.core.seq(inst_34463);
var state_34550__$1 = (function (){var statearr_34732 = state_34550;
(statearr_34732[(31)] = inst_34536);

return statearr_34732;
})();
if(inst_34537){
var statearr_34733_37197 = state_34550__$1;
(statearr_34733_37197[(1)] = (42));

} else {
var statearr_34735_37198 = state_34550__$1;
(statearr_34735_37198[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (16))){
var inst_34413 = (state_34550[(7)]);
var inst_34415 = cljs.core.chunked_seq_QMARK_(inst_34413);
var state_34550__$1 = state_34550;
if(inst_34415){
var statearr_34739_37199 = state_34550__$1;
(statearr_34739_37199[(1)] = (19));

} else {
var statearr_34740_37200 = state_34550__$1;
(statearr_34740_37200[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (38))){
var inst_34529 = (state_34550[(2)]);
var state_34550__$1 = state_34550;
var statearr_34745_37201 = state_34550__$1;
(statearr_34745_37201[(2)] = inst_34529);

(statearr_34745_37201[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (30))){
var state_34550__$1 = state_34550;
var statearr_34746_37202 = state_34550__$1;
(statearr_34746_37202[(2)] = null);

(statearr_34746_37202[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (10))){
var inst_34389 = (state_34550[(13)]);
var inst_34387 = (state_34550[(15)]);
var inst_34398 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34387,inst_34389);
var inst_34399 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34398,(0),null);
var inst_34400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34398,(1),null);
var state_34550__$1 = (function (){var statearr_34752 = state_34550;
(statearr_34752[(26)] = inst_34399);

return statearr_34752;
})();
if(cljs.core.truth_(inst_34400)){
var statearr_34759_37204 = state_34550__$1;
(statearr_34759_37204[(1)] = (13));

} else {
var statearr_34765_37206 = state_34550__$1;
(statearr_34765_37206[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (18))){
var inst_34450 = (state_34550[(2)]);
var state_34550__$1 = state_34550;
var statearr_34766_37207 = state_34550__$1;
(statearr_34766_37207[(2)] = inst_34450);

(statearr_34766_37207[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (42))){
var state_34550__$1 = state_34550;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34550__$1,(45),dchan);
} else {
if((state_val_34555 === (37))){
var inst_34377 = (state_34550[(9)]);
var inst_34518 = (state_34550[(23)]);
var inst_34508 = (state_34550[(25)]);
var inst_34518__$1 = cljs.core.first(inst_34508);
var inst_34519 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34518__$1,inst_34377,done);
var state_34550__$1 = (function (){var statearr_34772 = state_34550;
(statearr_34772[(23)] = inst_34518__$1);

return statearr_34772;
})();
if(cljs.core.truth_(inst_34519)){
var statearr_34773_37208 = state_34550__$1;
(statearr_34773_37208[(1)] = (39));

} else {
var statearr_34774_37209 = state_34550__$1;
(statearr_34774_37209[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (8))){
var inst_34389 = (state_34550[(13)]);
var inst_34388 = (state_34550[(14)]);
var inst_34391 = (inst_34389 < inst_34388);
var inst_34393 = inst_34391;
var state_34550__$1 = state_34550;
if(cljs.core.truth_(inst_34393)){
var statearr_34775_37210 = state_34550__$1;
(statearr_34775_37210[(1)] = (10));

} else {
var statearr_34777_37211 = state_34550__$1;
(statearr_34777_37211[(1)] = (11));

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
});})(c__33642__auto___37041,cs,m,dchan,dctr,done))
;
return ((function (switch__33308__auto__,c__33642__auto___37041,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33309__auto__ = null;
var cljs$core$async$mult_$_state_machine__33309__auto____0 = (function (){
var statearr_34778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34778[(0)] = cljs$core$async$mult_$_state_machine__33309__auto__);

(statearr_34778[(1)] = (1));

return statearr_34778;
});
var cljs$core$async$mult_$_state_machine__33309__auto____1 = (function (state_34550){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_34550);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e34779){if((e34779 instanceof Object)){
var ex__33312__auto__ = e34779;
var statearr_34780_37218 = state_34550;
(statearr_34780_37218[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34779;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37219 = state_34550;
state_34550 = G__37219;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33309__auto__ = function(state_34550){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33309__auto____1.call(this,state_34550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33309__auto____0;
cljs$core$async$mult_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33309__auto____1;
return cljs$core$async$mult_$_state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto___37041,cs,m,dchan,dctr,done))
})();
var state__33644__auto__ = (function (){var statearr_34786 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_34786[(6)] = c__33642__auto___37041);

return statearr_34786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto___37041,cs,m,dchan,dctr,done))
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
var G__34790 = arguments.length;
switch (G__34790) {
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
var len__4730__auto___37233 = arguments.length;
var i__4731__auto___37234 = (0);
while(true){
if((i__4731__auto___37234 < len__4730__auto___37233)){
args__4736__auto__.push((arguments[i__4731__auto___37234]));

var G__37235 = (i__4731__auto___37234 + (1));
i__4731__auto___37234 = G__37235;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34813){
var map__34814 = p__34813;
var map__34814__$1 = (((((!((map__34814 == null))))?(((((map__34814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34814):map__34814);
var opts = map__34814__$1;
var statearr_34819_37241 = state;
(statearr_34819_37241[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__34814,map__34814__$1,opts){
return (function (val){
var statearr_34820_37246 = state;
(statearr_34820_37246[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__34814,map__34814__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34821_37247 = state;
(statearr_34821_37247[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34806){
var G__34807 = cljs.core.first(seq34806);
var seq34806__$1 = cljs.core.next(seq34806);
var G__34808 = cljs.core.first(seq34806__$1);
var seq34806__$2 = cljs.core.next(seq34806__$1);
var G__34809 = cljs.core.first(seq34806__$2);
var seq34806__$3 = cljs.core.next(seq34806__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34807,G__34808,G__34809,seq34806__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34829 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34829 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34830){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34830 = meta34830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34831,meta34830__$1){
var self__ = this;
var _34831__$1 = this;
return (new cljs.core.async.t_cljs$core$async34829(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34830__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34831){
var self__ = this;
var _34831__$1 = this;
return self__.meta34830;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async34829.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34830","meta34830",1334682322,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34829";

cljs.core.async.t_cljs$core$async34829.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34829");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34829.
 */
cljs.core.async.__GT_t_cljs$core$async34829 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34829(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34830){
return (new cljs.core.async.t_cljs$core$async34829(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34830));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34829(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33642__auto___37376 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto___37376,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto___37376,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34947){
var state_val_34948 = (state_34947[(1)]);
if((state_val_34948 === (7))){
var inst_34856 = (state_34947[(2)]);
var state_34947__$1 = state_34947;
var statearr_34949_37385 = state_34947__$1;
(statearr_34949_37385[(2)] = inst_34856);

(statearr_34949_37385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (20))){
var inst_34869 = (state_34947[(7)]);
var state_34947__$1 = state_34947;
var statearr_34950_37388 = state_34947__$1;
(statearr_34950_37388[(2)] = inst_34869);

(statearr_34950_37388[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (27))){
var state_34947__$1 = state_34947;
var statearr_34951_37390 = state_34947__$1;
(statearr_34951_37390[(2)] = null);

(statearr_34951_37390[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (1))){
var inst_34843 = (state_34947[(8)]);
var inst_34843__$1 = calc_state();
var inst_34845 = (inst_34843__$1 == null);
var inst_34846 = cljs.core.not(inst_34845);
var state_34947__$1 = (function (){var statearr_34952 = state_34947;
(statearr_34952[(8)] = inst_34843__$1);

return statearr_34952;
})();
if(inst_34846){
var statearr_34953_37395 = state_34947__$1;
(statearr_34953_37395[(1)] = (2));

} else {
var statearr_34954_37397 = state_34947__$1;
(statearr_34954_37397[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (24))){
var inst_34918 = (state_34947[(9)]);
var inst_34893 = (state_34947[(10)]);
var inst_34902 = (state_34947[(11)]);
var inst_34918__$1 = (inst_34893.cljs$core$IFn$_invoke$arity$1 ? inst_34893.cljs$core$IFn$_invoke$arity$1(inst_34902) : inst_34893.call(null,inst_34902));
var state_34947__$1 = (function (){var statearr_34956 = state_34947;
(statearr_34956[(9)] = inst_34918__$1);

return statearr_34956;
})();
if(cljs.core.truth_(inst_34918__$1)){
var statearr_34958_37399 = state_34947__$1;
(statearr_34958_37399[(1)] = (29));

} else {
var statearr_34959_37400 = state_34947__$1;
(statearr_34959_37400[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (4))){
var inst_34860 = (state_34947[(2)]);
var state_34947__$1 = state_34947;
if(cljs.core.truth_(inst_34860)){
var statearr_34961_37401 = state_34947__$1;
(statearr_34961_37401[(1)] = (8));

} else {
var statearr_34962_37402 = state_34947__$1;
(statearr_34962_37402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (15))){
var inst_34887 = (state_34947[(2)]);
var state_34947__$1 = state_34947;
if(cljs.core.truth_(inst_34887)){
var statearr_34963_37409 = state_34947__$1;
(statearr_34963_37409[(1)] = (19));

} else {
var statearr_34964_37410 = state_34947__$1;
(statearr_34964_37410[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (21))){
var inst_34892 = (state_34947[(12)]);
var inst_34892__$1 = (state_34947[(2)]);
var inst_34893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34892__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34892__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34892__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34947__$1 = (function (){var statearr_34965 = state_34947;
(statearr_34965[(12)] = inst_34892__$1);

(statearr_34965[(10)] = inst_34893);

(statearr_34965[(13)] = inst_34894);

return statearr_34965;
})();
return cljs.core.async.ioc_alts_BANG_(state_34947__$1,(22),inst_34895);
} else {
if((state_val_34948 === (31))){
var inst_34927 = (state_34947[(2)]);
var state_34947__$1 = state_34947;
if(cljs.core.truth_(inst_34927)){
var statearr_34971_37411 = state_34947__$1;
(statearr_34971_37411[(1)] = (32));

} else {
var statearr_34974_37412 = state_34947__$1;
(statearr_34974_37412[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (32))){
var inst_34901 = (state_34947[(14)]);
var state_34947__$1 = state_34947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34947__$1,(35),out,inst_34901);
} else {
if((state_val_34948 === (33))){
var inst_34892 = (state_34947[(12)]);
var inst_34869 = inst_34892;
var state_34947__$1 = (function (){var statearr_34977 = state_34947;
(statearr_34977[(7)] = inst_34869);

return statearr_34977;
})();
var statearr_34978_37414 = state_34947__$1;
(statearr_34978_37414[(2)] = null);

(statearr_34978_37414[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (13))){
var inst_34869 = (state_34947[(7)]);
var inst_34876 = inst_34869.cljs$lang$protocol_mask$partition0$;
var inst_34877 = (inst_34876 & (64));
var inst_34878 = inst_34869.cljs$core$ISeq$;
var inst_34879 = (cljs.core.PROTOCOL_SENTINEL === inst_34878);
var inst_34880 = ((inst_34877) || (inst_34879));
var state_34947__$1 = state_34947;
if(cljs.core.truth_(inst_34880)){
var statearr_34979_37419 = state_34947__$1;
(statearr_34979_37419[(1)] = (16));

} else {
var statearr_34980_37420 = state_34947__$1;
(statearr_34980_37420[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (22))){
var inst_34901 = (state_34947[(14)]);
var inst_34902 = (state_34947[(11)]);
var inst_34900 = (state_34947[(2)]);
var inst_34901__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34900,(0),null);
var inst_34902__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34900,(1),null);
var inst_34904 = (inst_34901__$1 == null);
var inst_34905 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34902__$1,change);
var inst_34906 = ((inst_34904) || (inst_34905));
var state_34947__$1 = (function (){var statearr_34984 = state_34947;
(statearr_34984[(14)] = inst_34901__$1);

(statearr_34984[(11)] = inst_34902__$1);

return statearr_34984;
})();
if(cljs.core.truth_(inst_34906)){
var statearr_34986_37433 = state_34947__$1;
(statearr_34986_37433[(1)] = (23));

} else {
var statearr_34988_37434 = state_34947__$1;
(statearr_34988_37434[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (36))){
var inst_34892 = (state_34947[(12)]);
var inst_34869 = inst_34892;
var state_34947__$1 = (function (){var statearr_34989 = state_34947;
(statearr_34989[(7)] = inst_34869);

return statearr_34989;
})();
var statearr_34990_37436 = state_34947__$1;
(statearr_34990_37436[(2)] = null);

(statearr_34990_37436[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (29))){
var inst_34918 = (state_34947[(9)]);
var state_34947__$1 = state_34947;
var statearr_34992_37438 = state_34947__$1;
(statearr_34992_37438[(2)] = inst_34918);

(statearr_34992_37438[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (6))){
var state_34947__$1 = state_34947;
var statearr_34998_37439 = state_34947__$1;
(statearr_34998_37439[(2)] = false);

(statearr_34998_37439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (28))){
var inst_34913 = (state_34947[(2)]);
var inst_34914 = calc_state();
var inst_34869 = inst_34914;
var state_34947__$1 = (function (){var statearr_35000 = state_34947;
(statearr_35000[(7)] = inst_34869);

(statearr_35000[(15)] = inst_34913);

return statearr_35000;
})();
var statearr_35001_37440 = state_34947__$1;
(statearr_35001_37440[(2)] = null);

(statearr_35001_37440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (25))){
var inst_34943 = (state_34947[(2)]);
var state_34947__$1 = state_34947;
var statearr_35005_37441 = state_34947__$1;
(statearr_35005_37441[(2)] = inst_34943);

(statearr_35005_37441[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (34))){
var inst_34941 = (state_34947[(2)]);
var state_34947__$1 = state_34947;
var statearr_35006_37443 = state_34947__$1;
(statearr_35006_37443[(2)] = inst_34941);

(statearr_35006_37443[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (17))){
var state_34947__$1 = state_34947;
var statearr_35008_37444 = state_34947__$1;
(statearr_35008_37444[(2)] = false);

(statearr_35008_37444[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (3))){
var state_34947__$1 = state_34947;
var statearr_35016_37445 = state_34947__$1;
(statearr_35016_37445[(2)] = false);

(statearr_35016_37445[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (12))){
var inst_34945 = (state_34947[(2)]);
var state_34947__$1 = state_34947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34947__$1,inst_34945);
} else {
if((state_val_34948 === (2))){
var inst_34843 = (state_34947[(8)]);
var inst_34848 = inst_34843.cljs$lang$protocol_mask$partition0$;
var inst_34849 = (inst_34848 & (64));
var inst_34850 = inst_34843.cljs$core$ISeq$;
var inst_34851 = (cljs.core.PROTOCOL_SENTINEL === inst_34850);
var inst_34852 = ((inst_34849) || (inst_34851));
var state_34947__$1 = state_34947;
if(cljs.core.truth_(inst_34852)){
var statearr_35027_37452 = state_34947__$1;
(statearr_35027_37452[(1)] = (5));

} else {
var statearr_35028_37453 = state_34947__$1;
(statearr_35028_37453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (23))){
var inst_34901 = (state_34947[(14)]);
var inst_34908 = (inst_34901 == null);
var state_34947__$1 = state_34947;
if(cljs.core.truth_(inst_34908)){
var statearr_35032_37454 = state_34947__$1;
(statearr_35032_37454[(1)] = (26));

} else {
var statearr_35033_37455 = state_34947__$1;
(statearr_35033_37455[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (35))){
var inst_34932 = (state_34947[(2)]);
var state_34947__$1 = state_34947;
if(cljs.core.truth_(inst_34932)){
var statearr_35034_37457 = state_34947__$1;
(statearr_35034_37457[(1)] = (36));

} else {
var statearr_35035_37458 = state_34947__$1;
(statearr_35035_37458[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (19))){
var inst_34869 = (state_34947[(7)]);
var inst_34889 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34869);
var state_34947__$1 = state_34947;
var statearr_35036_37459 = state_34947__$1;
(statearr_35036_37459[(2)] = inst_34889);

(statearr_35036_37459[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (11))){
var inst_34869 = (state_34947[(7)]);
var inst_34873 = (inst_34869 == null);
var inst_34874 = cljs.core.not(inst_34873);
var state_34947__$1 = state_34947;
if(inst_34874){
var statearr_35037_37461 = state_34947__$1;
(statearr_35037_37461[(1)] = (13));

} else {
var statearr_35040_37466 = state_34947__$1;
(statearr_35040_37466[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (9))){
var inst_34843 = (state_34947[(8)]);
var state_34947__$1 = state_34947;
var statearr_35044_37467 = state_34947__$1;
(statearr_35044_37467[(2)] = inst_34843);

(statearr_35044_37467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (5))){
var state_34947__$1 = state_34947;
var statearr_35047_37473 = state_34947__$1;
(statearr_35047_37473[(2)] = true);

(statearr_35047_37473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (14))){
var state_34947__$1 = state_34947;
var statearr_35048_37474 = state_34947__$1;
(statearr_35048_37474[(2)] = false);

(statearr_35048_37474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (26))){
var inst_34902 = (state_34947[(11)]);
var inst_34910 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34902);
var state_34947__$1 = state_34947;
var statearr_35049_37475 = state_34947__$1;
(statearr_35049_37475[(2)] = inst_34910);

(statearr_35049_37475[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (16))){
var state_34947__$1 = state_34947;
var statearr_35050_37477 = state_34947__$1;
(statearr_35050_37477[(2)] = true);

(statearr_35050_37477[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (38))){
var inst_34937 = (state_34947[(2)]);
var state_34947__$1 = state_34947;
var statearr_35053_37478 = state_34947__$1;
(statearr_35053_37478[(2)] = inst_34937);

(statearr_35053_37478[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (30))){
var inst_34893 = (state_34947[(10)]);
var inst_34902 = (state_34947[(11)]);
var inst_34894 = (state_34947[(13)]);
var inst_34921 = cljs.core.empty_QMARK_(inst_34893);
var inst_34923 = (inst_34894.cljs$core$IFn$_invoke$arity$1 ? inst_34894.cljs$core$IFn$_invoke$arity$1(inst_34902) : inst_34894.call(null,inst_34902));
var inst_34924 = cljs.core.not(inst_34923);
var inst_34925 = ((inst_34921) && (inst_34924));
var state_34947__$1 = state_34947;
var statearr_35054_37480 = state_34947__$1;
(statearr_35054_37480[(2)] = inst_34925);

(statearr_35054_37480[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (10))){
var inst_34843 = (state_34947[(8)]);
var inst_34865 = (state_34947[(2)]);
var inst_34866 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34865,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34867 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34865,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34868 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34865,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34869 = inst_34843;
var state_34947__$1 = (function (){var statearr_35055 = state_34947;
(statearr_35055[(7)] = inst_34869);

(statearr_35055[(16)] = inst_34866);

(statearr_35055[(17)] = inst_34868);

(statearr_35055[(18)] = inst_34867);

return statearr_35055;
})();
var statearr_35056_37484 = state_34947__$1;
(statearr_35056_37484[(2)] = null);

(statearr_35056_37484[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (18))){
var inst_34884 = (state_34947[(2)]);
var state_34947__$1 = state_34947;
var statearr_35058_37490 = state_34947__$1;
(statearr_35058_37490[(2)] = inst_34884);

(statearr_35058_37490[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (37))){
var state_34947__$1 = state_34947;
var statearr_35062_37491 = state_34947__$1;
(statearr_35062_37491[(2)] = null);

(statearr_35062_37491[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (8))){
var inst_34843 = (state_34947[(8)]);
var inst_34862 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34843);
var state_34947__$1 = state_34947;
var statearr_35063_37493 = state_34947__$1;
(statearr_35063_37493[(2)] = inst_34862);

(statearr_35063_37493[(1)] = (10));


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
});})(c__33642__auto___37376,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33308__auto__,c__33642__auto___37376,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33309__auto__ = null;
var cljs$core$async$mix_$_state_machine__33309__auto____0 = (function (){
var statearr_35088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35088[(0)] = cljs$core$async$mix_$_state_machine__33309__auto__);

(statearr_35088[(1)] = (1));

return statearr_35088;
});
var cljs$core$async$mix_$_state_machine__33309__auto____1 = (function (state_34947){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_34947);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e35089){if((e35089 instanceof Object)){
var ex__33312__auto__ = e35089;
var statearr_35090_37506 = state_34947;
(statearr_35090_37506[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35089;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37510 = state_34947;
state_34947 = G__37510;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33309__auto__ = function(state_34947){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33309__auto____1.call(this,state_34947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33309__auto____0;
cljs$core$async$mix_$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33309__auto____1;
return cljs$core$async$mix_$_state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto___37376,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33644__auto__ = (function (){var statearr_35113 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_35113[(6)] = c__33642__auto___37376);

return statearr_35113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto___37376,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__35142 = arguments.length;
switch (G__35142) {
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
var G__35161 = arguments.length;
switch (G__35161) {
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
return (function (p1__35156_SHARP_){
if(cljs.core.truth_((p1__35156_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__35156_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__35156_SHARP_.call(null,topic)))){
return p1__35156_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__35156_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35165 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35165 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35166){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35166 = meta35166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35167,meta35166__$1){
var self__ = this;
var _35167__$1 = this;
return (new cljs.core.async.t_cljs$core$async35165(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35166__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35165.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35167){
var self__ = this;
var _35167__$1 = this;
return self__.meta35166;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35165.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35165.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35165.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35165.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35165.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35165.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35165.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35165.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35166","meta35166",-2071438913,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35165.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35165.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35165";

cljs.core.async.t_cljs$core$async35165.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async35165");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35165.
 */
cljs.core.async.__GT_t_cljs$core$async35165 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35165(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35166){
return (new cljs.core.async.t_cljs$core$async35165(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35166));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35165(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33642__auto___37605 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto___37605,mults,ensure_mult,p){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto___37605,mults,ensure_mult,p){
return (function (state_35260){
var state_val_35261 = (state_35260[(1)]);
if((state_val_35261 === (7))){
var inst_35254 = (state_35260[(2)]);
var state_35260__$1 = state_35260;
var statearr_35264_37606 = state_35260__$1;
(statearr_35264_37606[(2)] = inst_35254);

(statearr_35264_37606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (20))){
var state_35260__$1 = state_35260;
var statearr_35265_37615 = state_35260__$1;
(statearr_35265_37615[(2)] = null);

(statearr_35265_37615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (1))){
var state_35260__$1 = state_35260;
var statearr_35267_37617 = state_35260__$1;
(statearr_35267_37617[(2)] = null);

(statearr_35267_37617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (24))){
var inst_35237 = (state_35260[(7)]);
var inst_35246 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_35237);
var state_35260__$1 = state_35260;
var statearr_35268_37623 = state_35260__$1;
(statearr_35268_37623[(2)] = inst_35246);

(statearr_35268_37623[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (4))){
var inst_35186 = (state_35260[(8)]);
var inst_35186__$1 = (state_35260[(2)]);
var inst_35187 = (inst_35186__$1 == null);
var state_35260__$1 = (function (){var statearr_35269 = state_35260;
(statearr_35269[(8)] = inst_35186__$1);

return statearr_35269;
})();
if(cljs.core.truth_(inst_35187)){
var statearr_35270_37624 = state_35260__$1;
(statearr_35270_37624[(1)] = (5));

} else {
var statearr_35271_37625 = state_35260__$1;
(statearr_35271_37625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (15))){
var inst_35231 = (state_35260[(2)]);
var state_35260__$1 = state_35260;
var statearr_35272_37626 = state_35260__$1;
(statearr_35272_37626[(2)] = inst_35231);

(statearr_35272_37626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (21))){
var inst_35251 = (state_35260[(2)]);
var state_35260__$1 = (function (){var statearr_35273 = state_35260;
(statearr_35273[(9)] = inst_35251);

return statearr_35273;
})();
var statearr_35274_37627 = state_35260__$1;
(statearr_35274_37627[(2)] = null);

(statearr_35274_37627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (13))){
var inst_35212 = (state_35260[(10)]);
var inst_35215 = cljs.core.chunked_seq_QMARK_(inst_35212);
var state_35260__$1 = state_35260;
if(inst_35215){
var statearr_35275_37628 = state_35260__$1;
(statearr_35275_37628[(1)] = (16));

} else {
var statearr_35276_37629 = state_35260__$1;
(statearr_35276_37629[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (22))){
var inst_35243 = (state_35260[(2)]);
var state_35260__$1 = state_35260;
if(cljs.core.truth_(inst_35243)){
var statearr_35277_37632 = state_35260__$1;
(statearr_35277_37632[(1)] = (23));

} else {
var statearr_35278_37633 = state_35260__$1;
(statearr_35278_37633[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (6))){
var inst_35239 = (state_35260[(11)]);
var inst_35237 = (state_35260[(7)]);
var inst_35186 = (state_35260[(8)]);
var inst_35237__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_35186) : topic_fn.call(null,inst_35186));
var inst_35238 = cljs.core.deref(mults);
var inst_35239__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_35238,inst_35237__$1);
var state_35260__$1 = (function (){var statearr_35284 = state_35260;
(statearr_35284[(11)] = inst_35239__$1);

(statearr_35284[(7)] = inst_35237__$1);

return statearr_35284;
})();
if(cljs.core.truth_(inst_35239__$1)){
var statearr_35285_37636 = state_35260__$1;
(statearr_35285_37636[(1)] = (19));

} else {
var statearr_35286_37637 = state_35260__$1;
(statearr_35286_37637[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (25))){
var inst_35248 = (state_35260[(2)]);
var state_35260__$1 = state_35260;
var statearr_35287_37641 = state_35260__$1;
(statearr_35287_37641[(2)] = inst_35248);

(statearr_35287_37641[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (17))){
var inst_35212 = (state_35260[(10)]);
var inst_35222 = cljs.core.first(inst_35212);
var inst_35223 = cljs.core.async.muxch_STAR_(inst_35222);
var inst_35224 = cljs.core.async.close_BANG_(inst_35223);
var inst_35225 = cljs.core.next(inst_35212);
var inst_35196 = inst_35225;
var inst_35197 = null;
var inst_35198 = (0);
var inst_35199 = (0);
var state_35260__$1 = (function (){var statearr_35293 = state_35260;
(statearr_35293[(12)] = inst_35198);

(statearr_35293[(13)] = inst_35224);

(statearr_35293[(14)] = inst_35196);

(statearr_35293[(15)] = inst_35199);

(statearr_35293[(16)] = inst_35197);

return statearr_35293;
})();
var statearr_35298_37648 = state_35260__$1;
(statearr_35298_37648[(2)] = null);

(statearr_35298_37648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (3))){
var inst_35256 = (state_35260[(2)]);
var state_35260__$1 = state_35260;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35260__$1,inst_35256);
} else {
if((state_val_35261 === (12))){
var inst_35233 = (state_35260[(2)]);
var state_35260__$1 = state_35260;
var statearr_35299_37650 = state_35260__$1;
(statearr_35299_37650[(2)] = inst_35233);

(statearr_35299_37650[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (2))){
var state_35260__$1 = state_35260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35260__$1,(4),ch);
} else {
if((state_val_35261 === (23))){
var state_35260__$1 = state_35260;
var statearr_35307_37653 = state_35260__$1;
(statearr_35307_37653[(2)] = null);

(statearr_35307_37653[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (19))){
var inst_35239 = (state_35260[(11)]);
var inst_35186 = (state_35260[(8)]);
var inst_35241 = cljs.core.async.muxch_STAR_(inst_35239);
var state_35260__$1 = state_35260;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35260__$1,(22),inst_35241,inst_35186);
} else {
if((state_val_35261 === (11))){
var inst_35212 = (state_35260[(10)]);
var inst_35196 = (state_35260[(14)]);
var inst_35212__$1 = cljs.core.seq(inst_35196);
var state_35260__$1 = (function (){var statearr_35309 = state_35260;
(statearr_35309[(10)] = inst_35212__$1);

return statearr_35309;
})();
if(inst_35212__$1){
var statearr_35310_37654 = state_35260__$1;
(statearr_35310_37654[(1)] = (13));

} else {
var statearr_35311_37655 = state_35260__$1;
(statearr_35311_37655[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (9))){
var inst_35235 = (state_35260[(2)]);
var state_35260__$1 = state_35260;
var statearr_35312_37661 = state_35260__$1;
(statearr_35312_37661[(2)] = inst_35235);

(statearr_35312_37661[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (5))){
var inst_35193 = cljs.core.deref(mults);
var inst_35194 = cljs.core.vals(inst_35193);
var inst_35195 = cljs.core.seq(inst_35194);
var inst_35196 = inst_35195;
var inst_35197 = null;
var inst_35198 = (0);
var inst_35199 = (0);
var state_35260__$1 = (function (){var statearr_35315 = state_35260;
(statearr_35315[(12)] = inst_35198);

(statearr_35315[(14)] = inst_35196);

(statearr_35315[(15)] = inst_35199);

(statearr_35315[(16)] = inst_35197);

return statearr_35315;
})();
var statearr_35317_37670 = state_35260__$1;
(statearr_35317_37670[(2)] = null);

(statearr_35317_37670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (14))){
var state_35260__$1 = state_35260;
var statearr_35324_37672 = state_35260__$1;
(statearr_35324_37672[(2)] = null);

(statearr_35324_37672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (16))){
var inst_35212 = (state_35260[(10)]);
var inst_35217 = cljs.core.chunk_first(inst_35212);
var inst_35218 = cljs.core.chunk_rest(inst_35212);
var inst_35219 = cljs.core.count(inst_35217);
var inst_35196 = inst_35218;
var inst_35197 = inst_35217;
var inst_35198 = inst_35219;
var inst_35199 = (0);
var state_35260__$1 = (function (){var statearr_35327 = state_35260;
(statearr_35327[(12)] = inst_35198);

(statearr_35327[(14)] = inst_35196);

(statearr_35327[(15)] = inst_35199);

(statearr_35327[(16)] = inst_35197);

return statearr_35327;
})();
var statearr_35328_37673 = state_35260__$1;
(statearr_35328_37673[(2)] = null);

(statearr_35328_37673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (10))){
var inst_35198 = (state_35260[(12)]);
var inst_35196 = (state_35260[(14)]);
var inst_35199 = (state_35260[(15)]);
var inst_35197 = (state_35260[(16)]);
var inst_35205 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_35197,inst_35199);
var inst_35207 = cljs.core.async.muxch_STAR_(inst_35205);
var inst_35208 = cljs.core.async.close_BANG_(inst_35207);
var inst_35209 = (inst_35199 + (1));
var tmp35320 = inst_35198;
var tmp35321 = inst_35196;
var tmp35322 = inst_35197;
var inst_35196__$1 = tmp35321;
var inst_35197__$1 = tmp35322;
var inst_35198__$1 = tmp35320;
var inst_35199__$1 = inst_35209;
var state_35260__$1 = (function (){var statearr_35334 = state_35260;
(statearr_35334[(17)] = inst_35208);

(statearr_35334[(12)] = inst_35198__$1);

(statearr_35334[(14)] = inst_35196__$1);

(statearr_35334[(15)] = inst_35199__$1);

(statearr_35334[(16)] = inst_35197__$1);

return statearr_35334;
})();
var statearr_35338_37681 = state_35260__$1;
(statearr_35338_37681[(2)] = null);

(statearr_35338_37681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (18))){
var inst_35228 = (state_35260[(2)]);
var state_35260__$1 = state_35260;
var statearr_35339_37686 = state_35260__$1;
(statearr_35339_37686[(2)] = inst_35228);

(statearr_35339_37686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (8))){
var inst_35198 = (state_35260[(12)]);
var inst_35199 = (state_35260[(15)]);
var inst_35201 = (inst_35199 < inst_35198);
var inst_35202 = inst_35201;
var state_35260__$1 = state_35260;
if(cljs.core.truth_(inst_35202)){
var statearr_35341_37687 = state_35260__$1;
(statearr_35341_37687[(1)] = (10));

} else {
var statearr_35342_37688 = state_35260__$1;
(statearr_35342_37688[(1)] = (11));

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
});})(c__33642__auto___37605,mults,ensure_mult,p))
;
return ((function (switch__33308__auto__,c__33642__auto___37605,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_35345 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35345[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_35345[(1)] = (1));

return statearr_35345;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_35260){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_35260);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e35348){if((e35348 instanceof Object)){
var ex__33312__auto__ = e35348;
var statearr_35352_37700 = state_35260;
(statearr_35352_37700[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35348;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37704 = state_35260;
state_35260 = G__37704;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_35260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_35260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto___37605,mults,ensure_mult,p))
})();
var state__33644__auto__ = (function (){var statearr_35353 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_35353[(6)] = c__33642__auto___37605);

return statearr_35353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto___37605,mults,ensure_mult,p))
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
var G__35363 = arguments.length;
switch (G__35363) {
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
var G__35383 = arguments.length;
switch (G__35383) {
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
var G__35391 = arguments.length;
switch (G__35391) {
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
var c__33642__auto___37715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto___37715,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto___37715,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35467){
var state_val_35468 = (state_35467[(1)]);
if((state_val_35468 === (7))){
var state_35467__$1 = state_35467;
var statearr_35472_37720 = state_35467__$1;
(statearr_35472_37720[(2)] = null);

(statearr_35472_37720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35468 === (1))){
var state_35467__$1 = state_35467;
var statearr_35473_37721 = state_35467__$1;
(statearr_35473_37721[(2)] = null);

(statearr_35473_37721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35468 === (4))){
var inst_35428 = (state_35467[(7)]);
var inst_35431 = (inst_35428 < cnt);
var state_35467__$1 = state_35467;
if(cljs.core.truth_(inst_35431)){
var statearr_35476_37722 = state_35467__$1;
(statearr_35476_37722[(1)] = (6));

} else {
var statearr_35478_37723 = state_35467__$1;
(statearr_35478_37723[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35468 === (15))){
var inst_35462 = (state_35467[(2)]);
var state_35467__$1 = state_35467;
var statearr_35479_37724 = state_35467__$1;
(statearr_35479_37724[(2)] = inst_35462);

(statearr_35479_37724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35468 === (13))){
var inst_35455 = cljs.core.async.close_BANG_(out);
var state_35467__$1 = state_35467;
var statearr_35482_37725 = state_35467__$1;
(statearr_35482_37725[(2)] = inst_35455);

(statearr_35482_37725[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35468 === (6))){
var state_35467__$1 = state_35467;
var statearr_35483_37726 = state_35467__$1;
(statearr_35483_37726[(2)] = null);

(statearr_35483_37726[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35468 === (3))){
var inst_35464 = (state_35467[(2)]);
var state_35467__$1 = state_35467;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35467__$1,inst_35464);
} else {
if((state_val_35468 === (12))){
var inst_35452 = (state_35467[(8)]);
var inst_35452__$1 = (state_35467[(2)]);
var inst_35453 = cljs.core.some(cljs.core.nil_QMARK_,inst_35452__$1);
var state_35467__$1 = (function (){var statearr_35494 = state_35467;
(statearr_35494[(8)] = inst_35452__$1);

return statearr_35494;
})();
if(cljs.core.truth_(inst_35453)){
var statearr_35496_37728 = state_35467__$1;
(statearr_35496_37728[(1)] = (13));

} else {
var statearr_35497_37729 = state_35467__$1;
(statearr_35497_37729[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35468 === (2))){
var inst_35416 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35428 = (0);
var state_35467__$1 = (function (){var statearr_35502 = state_35467;
(statearr_35502[(7)] = inst_35428);

(statearr_35502[(9)] = inst_35416);

return statearr_35502;
})();
var statearr_35504_37730 = state_35467__$1;
(statearr_35504_37730[(2)] = null);

(statearr_35504_37730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35468 === (11))){
var inst_35428 = (state_35467[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_35467,(10),Object,null,(9));
var inst_35438 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35428) : chs__$1.call(null,inst_35428));
var inst_35439 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35428) : done.call(null,inst_35428));
var inst_35440 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35438,inst_35439);
var state_35467__$1 = state_35467;
var statearr_35506_37731 = state_35467__$1;
(statearr_35506_37731[(2)] = inst_35440);


cljs.core.async.impl.ioc_helpers.process_exception(state_35467__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35468 === (9))){
var inst_35428 = (state_35467[(7)]);
var inst_35442 = (state_35467[(2)]);
var inst_35443 = (inst_35428 + (1));
var inst_35428__$1 = inst_35443;
var state_35467__$1 = (function (){var statearr_35512 = state_35467;
(statearr_35512[(7)] = inst_35428__$1);

(statearr_35512[(10)] = inst_35442);

return statearr_35512;
})();
var statearr_35516_37733 = state_35467__$1;
(statearr_35516_37733[(2)] = null);

(statearr_35516_37733[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35468 === (5))){
var inst_35450 = (state_35467[(2)]);
var state_35467__$1 = (function (){var statearr_35520 = state_35467;
(statearr_35520[(11)] = inst_35450);

return statearr_35520;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35467__$1,(12),dchan);
} else {
if((state_val_35468 === (14))){
var inst_35452 = (state_35467[(8)]);
var inst_35457 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35452);
var state_35467__$1 = state_35467;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35467__$1,(16),out,inst_35457);
} else {
if((state_val_35468 === (16))){
var inst_35459 = (state_35467[(2)]);
var state_35467__$1 = (function (){var statearr_35521 = state_35467;
(statearr_35521[(12)] = inst_35459);

return statearr_35521;
})();
var statearr_35522_37734 = state_35467__$1;
(statearr_35522_37734[(2)] = null);

(statearr_35522_37734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35468 === (10))){
var inst_35433 = (state_35467[(2)]);
var inst_35434 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35467__$1 = (function (){var statearr_35524 = state_35467;
(statearr_35524[(13)] = inst_35433);

return statearr_35524;
})();
var statearr_35525_37735 = state_35467__$1;
(statearr_35525_37735[(2)] = inst_35434);


cljs.core.async.impl.ioc_helpers.process_exception(state_35467__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35468 === (8))){
var inst_35448 = (state_35467[(2)]);
var state_35467__$1 = state_35467;
var statearr_35528_37736 = state_35467__$1;
(statearr_35528_37736[(2)] = inst_35448);

(statearr_35528_37736[(1)] = (5));


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
});})(c__33642__auto___37715,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33308__auto__,c__33642__auto___37715,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_35531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35531[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_35531[(1)] = (1));

return statearr_35531;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_35467){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_35467);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e35533){if((e35533 instanceof Object)){
var ex__33312__auto__ = e35533;
var statearr_35535_37738 = state_35467;
(statearr_35535_37738[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35533;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37740 = state_35467;
state_35467 = G__37740;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_35467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_35467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto___37715,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33644__auto__ = (function (){var statearr_35538 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_35538[(6)] = c__33642__auto___37715);

return statearr_35538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto___37715,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35548 = arguments.length;
switch (G__35548) {
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
var c__33642__auto___37743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto___37743,out){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto___37743,out){
return (function (state_35584){
var state_val_35585 = (state_35584[(1)]);
if((state_val_35585 === (7))){
var inst_35564 = (state_35584[(7)]);
var inst_35563 = (state_35584[(8)]);
var inst_35563__$1 = (state_35584[(2)]);
var inst_35564__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35563__$1,(0),null);
var inst_35565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35563__$1,(1),null);
var inst_35566 = (inst_35564__$1 == null);
var state_35584__$1 = (function (){var statearr_35590 = state_35584;
(statearr_35590[(7)] = inst_35564__$1);

(statearr_35590[(8)] = inst_35563__$1);

(statearr_35590[(9)] = inst_35565);

return statearr_35590;
})();
if(cljs.core.truth_(inst_35566)){
var statearr_35596_37750 = state_35584__$1;
(statearr_35596_37750[(1)] = (8));

} else {
var statearr_35597_37753 = state_35584__$1;
(statearr_35597_37753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35585 === (1))){
var inst_35551 = cljs.core.vec(chs);
var inst_35552 = inst_35551;
var state_35584__$1 = (function (){var statearr_35601 = state_35584;
(statearr_35601[(10)] = inst_35552);

return statearr_35601;
})();
var statearr_35602_37765 = state_35584__$1;
(statearr_35602_37765[(2)] = null);

(statearr_35602_37765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35585 === (4))){
var inst_35552 = (state_35584[(10)]);
var state_35584__$1 = state_35584;
return cljs.core.async.ioc_alts_BANG_(state_35584__$1,(7),inst_35552);
} else {
if((state_val_35585 === (6))){
var inst_35580 = (state_35584[(2)]);
var state_35584__$1 = state_35584;
var statearr_35603_37767 = state_35584__$1;
(statearr_35603_37767[(2)] = inst_35580);

(statearr_35603_37767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35585 === (3))){
var inst_35582 = (state_35584[(2)]);
var state_35584__$1 = state_35584;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35584__$1,inst_35582);
} else {
if((state_val_35585 === (2))){
var inst_35552 = (state_35584[(10)]);
var inst_35554 = cljs.core.count(inst_35552);
var inst_35555 = (inst_35554 > (0));
var state_35584__$1 = state_35584;
if(cljs.core.truth_(inst_35555)){
var statearr_35608_37770 = state_35584__$1;
(statearr_35608_37770[(1)] = (4));

} else {
var statearr_35610_37771 = state_35584__$1;
(statearr_35610_37771[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35585 === (11))){
var inst_35552 = (state_35584[(10)]);
var inst_35573 = (state_35584[(2)]);
var tmp35605 = inst_35552;
var inst_35552__$1 = tmp35605;
var state_35584__$1 = (function (){var statearr_35613 = state_35584;
(statearr_35613[(10)] = inst_35552__$1);

(statearr_35613[(11)] = inst_35573);

return statearr_35613;
})();
var statearr_35614_37772 = state_35584__$1;
(statearr_35614_37772[(2)] = null);

(statearr_35614_37772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35585 === (9))){
var inst_35564 = (state_35584[(7)]);
var state_35584__$1 = state_35584;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35584__$1,(11),out,inst_35564);
} else {
if((state_val_35585 === (5))){
var inst_35578 = cljs.core.async.close_BANG_(out);
var state_35584__$1 = state_35584;
var statearr_35617_37773 = state_35584__$1;
(statearr_35617_37773[(2)] = inst_35578);

(statearr_35617_37773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35585 === (10))){
var inst_35576 = (state_35584[(2)]);
var state_35584__$1 = state_35584;
var statearr_35619_37774 = state_35584__$1;
(statearr_35619_37774[(2)] = inst_35576);

(statearr_35619_37774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35585 === (8))){
var inst_35552 = (state_35584[(10)]);
var inst_35564 = (state_35584[(7)]);
var inst_35563 = (state_35584[(8)]);
var inst_35565 = (state_35584[(9)]);
var inst_35568 = (function (){var cs = inst_35552;
var vec__35557 = inst_35563;
var v = inst_35564;
var c = inst_35565;
return ((function (cs,vec__35557,v,c,inst_35552,inst_35564,inst_35563,inst_35565,state_val_35585,c__33642__auto___37743,out){
return (function (p1__35543_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35543_SHARP_);
});
;})(cs,vec__35557,v,c,inst_35552,inst_35564,inst_35563,inst_35565,state_val_35585,c__33642__auto___37743,out))
})();
var inst_35569 = cljs.core.filterv(inst_35568,inst_35552);
var inst_35552__$1 = inst_35569;
var state_35584__$1 = (function (){var statearr_35620 = state_35584;
(statearr_35620[(10)] = inst_35552__$1);

return statearr_35620;
})();
var statearr_35623_37779 = state_35584__$1;
(statearr_35623_37779[(2)] = null);

(statearr_35623_37779[(1)] = (2));


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
});})(c__33642__auto___37743,out))
;
return ((function (switch__33308__auto__,c__33642__auto___37743,out){
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_35624 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35624[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_35624[(1)] = (1));

return statearr_35624;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_35584){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_35584);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e35625){if((e35625 instanceof Object)){
var ex__33312__auto__ = e35625;
var statearr_35626_37781 = state_35584;
(statearr_35626_37781[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35625;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37782 = state_35584;
state_35584 = G__37782;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_35584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_35584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto___37743,out))
})();
var state__33644__auto__ = (function (){var statearr_35631 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_35631[(6)] = c__33642__auto___37743);

return statearr_35631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto___37743,out))
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
var G__35649 = arguments.length;
switch (G__35649) {
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
var c__33642__auto___37791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto___37791,out){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto___37791,out){
return (function (state_35679){
var state_val_35680 = (state_35679[(1)]);
if((state_val_35680 === (7))){
var inst_35659 = (state_35679[(7)]);
var inst_35659__$1 = (state_35679[(2)]);
var inst_35662 = (inst_35659__$1 == null);
var inst_35663 = cljs.core.not(inst_35662);
var state_35679__$1 = (function (){var statearr_35681 = state_35679;
(statearr_35681[(7)] = inst_35659__$1);

return statearr_35681;
})();
if(inst_35663){
var statearr_35682_37792 = state_35679__$1;
(statearr_35682_37792[(1)] = (8));

} else {
var statearr_35683_37794 = state_35679__$1;
(statearr_35683_37794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35680 === (1))){
var inst_35653 = (0);
var state_35679__$1 = (function (){var statearr_35684 = state_35679;
(statearr_35684[(8)] = inst_35653);

return statearr_35684;
})();
var statearr_35685_37796 = state_35679__$1;
(statearr_35685_37796[(2)] = null);

(statearr_35685_37796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35680 === (4))){
var state_35679__$1 = state_35679;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35679__$1,(7),ch);
} else {
if((state_val_35680 === (6))){
var inst_35674 = (state_35679[(2)]);
var state_35679__$1 = state_35679;
var statearr_35688_37797 = state_35679__$1;
(statearr_35688_37797[(2)] = inst_35674);

(statearr_35688_37797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35680 === (3))){
var inst_35676 = (state_35679[(2)]);
var inst_35677 = cljs.core.async.close_BANG_(out);
var state_35679__$1 = (function (){var statearr_35692 = state_35679;
(statearr_35692[(9)] = inst_35676);

return statearr_35692;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35679__$1,inst_35677);
} else {
if((state_val_35680 === (2))){
var inst_35653 = (state_35679[(8)]);
var inst_35655 = (inst_35653 < n);
var state_35679__$1 = state_35679;
if(cljs.core.truth_(inst_35655)){
var statearr_35697_37804 = state_35679__$1;
(statearr_35697_37804[(1)] = (4));

} else {
var statearr_35698_37805 = state_35679__$1;
(statearr_35698_37805[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35680 === (11))){
var inst_35653 = (state_35679[(8)]);
var inst_35666 = (state_35679[(2)]);
var inst_35667 = (inst_35653 + (1));
var inst_35653__$1 = inst_35667;
var state_35679__$1 = (function (){var statearr_35701 = state_35679;
(statearr_35701[(10)] = inst_35666);

(statearr_35701[(8)] = inst_35653__$1);

return statearr_35701;
})();
var statearr_35703_37807 = state_35679__$1;
(statearr_35703_37807[(2)] = null);

(statearr_35703_37807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35680 === (9))){
var state_35679__$1 = state_35679;
var statearr_35705_37809 = state_35679__$1;
(statearr_35705_37809[(2)] = null);

(statearr_35705_37809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35680 === (5))){
var state_35679__$1 = state_35679;
var statearr_35706_37811 = state_35679__$1;
(statearr_35706_37811[(2)] = null);

(statearr_35706_37811[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35680 === (10))){
var inst_35671 = (state_35679[(2)]);
var state_35679__$1 = state_35679;
var statearr_35707_37812 = state_35679__$1;
(statearr_35707_37812[(2)] = inst_35671);

(statearr_35707_37812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35680 === (8))){
var inst_35659 = (state_35679[(7)]);
var state_35679__$1 = state_35679;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35679__$1,(11),out,inst_35659);
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
});})(c__33642__auto___37791,out))
;
return ((function (switch__33308__auto__,c__33642__auto___37791,out){
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_35714 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35714[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_35714[(1)] = (1));

return statearr_35714;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_35679){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_35679);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e35722){if((e35722 instanceof Object)){
var ex__33312__auto__ = e35722;
var statearr_35723_37816 = state_35679;
(statearr_35723_37816[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35722;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37826 = state_35679;
state_35679 = G__37826;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_35679){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_35679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto___37791,out))
})();
var state__33644__auto__ = (function (){var statearr_35725 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_35725[(6)] = c__33642__auto___37791);

return statearr_35725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto___37791,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35729 = (function (f,ch,meta35730){
this.f = f;
this.ch = ch;
this.meta35730 = meta35730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35731,meta35730__$1){
var self__ = this;
var _35731__$1 = this;
return (new cljs.core.async.t_cljs$core$async35729(self__.f,self__.ch,meta35730__$1));
});

cljs.core.async.t_cljs$core$async35729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35731){
var self__ = this;
var _35731__$1 = this;
return self__.meta35730;
});

cljs.core.async.t_cljs$core$async35729.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35729.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async35729.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async35729.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35729.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35736 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35736 = (function (f,ch,meta35730,_,fn1,meta35737){
this.f = f;
this.ch = ch;
this.meta35730 = meta35730;
this._ = _;
this.fn1 = fn1;
this.meta35737 = meta35737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35738,meta35737__$1){
var self__ = this;
var _35738__$1 = this;
return (new cljs.core.async.t_cljs$core$async35736(self__.f,self__.ch,self__.meta35730,self__._,self__.fn1,meta35737__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35736.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35738){
var self__ = this;
var _35738__$1 = this;
return self__.meta35737;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35736.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35736.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35736.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35736.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35726_SHARP_){
var G__35752 = (((p1__35726_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35726_SHARP_) : self__.f.call(null,p1__35726_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35752) : f1.call(null,G__35752));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35736.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35730","meta35730",-1083709739,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35729","cljs.core.async/t_cljs$core$async35729",205897355,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35737","meta35737",1582199354,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35736.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35736";

cljs.core.async.t_cljs$core$async35736.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async35736");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35736.
 */
cljs.core.async.__GT_t_cljs$core$async35736 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35736(f__$1,ch__$1,meta35730__$1,___$2,fn1__$1,meta35737){
return (new cljs.core.async.t_cljs$core$async35736(f__$1,ch__$1,meta35730__$1,___$2,fn1__$1,meta35737));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35736(self__.f,self__.ch,self__.meta35730,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35763 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35763) : self__.f.call(null,G__35763));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35729.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35729.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35730","meta35730",-1083709739,null)], null);
});

cljs.core.async.t_cljs$core$async35729.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35729";

cljs.core.async.t_cljs$core$async35729.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async35729");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35729.
 */
cljs.core.async.__GT_t_cljs$core$async35729 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35729(f__$1,ch__$1,meta35730){
return (new cljs.core.async.t_cljs$core$async35729(f__$1,ch__$1,meta35730));
});

}

return (new cljs.core.async.t_cljs$core$async35729(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35791 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35791 = (function (f,ch,meta35792){
this.f = f;
this.ch = ch;
this.meta35792 = meta35792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35793,meta35792__$1){
var self__ = this;
var _35793__$1 = this;
return (new cljs.core.async.t_cljs$core$async35791(self__.f,self__.ch,meta35792__$1));
});

cljs.core.async.t_cljs$core$async35791.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35793){
var self__ = this;
var _35793__$1 = this;
return self__.meta35792;
});

cljs.core.async.t_cljs$core$async35791.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35791.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async35791.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35791.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35791.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35791.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async35791.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35792","meta35792",-1475297327,null)], null);
});

cljs.core.async.t_cljs$core$async35791.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35791";

cljs.core.async.t_cljs$core$async35791.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async35791");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35791.
 */
cljs.core.async.__GT_t_cljs$core$async35791 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35791(f__$1,ch__$1,meta35792){
return (new cljs.core.async.t_cljs$core$async35791(f__$1,ch__$1,meta35792));
});

}

return (new cljs.core.async.t_cljs$core$async35791(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async35817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35817 = (function (p,ch,meta35818){
this.p = p;
this.ch = ch;
this.meta35818 = meta35818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35819,meta35818__$1){
var self__ = this;
var _35819__$1 = this;
return (new cljs.core.async.t_cljs$core$async35817(self__.p,self__.ch,meta35818__$1));
});

cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35819){
var self__ = this;
var _35819__$1 = this;
return self__.meta35818;
});

cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35817.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35818","meta35818",135183639,null)], null);
});

cljs.core.async.t_cljs$core$async35817.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35817.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35817";

cljs.core.async.t_cljs$core$async35817.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async35817");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35817.
 */
cljs.core.async.__GT_t_cljs$core$async35817 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35817(p__$1,ch__$1,meta35818){
return (new cljs.core.async.t_cljs$core$async35817(p__$1,ch__$1,meta35818));
});

}

return (new cljs.core.async.t_cljs$core$async35817(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35883 = arguments.length;
switch (G__35883) {
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
var c__33642__auto___37857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto___37857,out){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto___37857,out){
return (function (state_35927){
var state_val_35928 = (state_35927[(1)]);
if((state_val_35928 === (7))){
var inst_35919 = (state_35927[(2)]);
var state_35927__$1 = state_35927;
var statearr_35949_37858 = state_35927__$1;
(statearr_35949_37858[(2)] = inst_35919);

(statearr_35949_37858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (1))){
var state_35927__$1 = state_35927;
var statearr_35953_37860 = state_35927__$1;
(statearr_35953_37860[(2)] = null);

(statearr_35953_37860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (4))){
var inst_35903 = (state_35927[(7)]);
var inst_35903__$1 = (state_35927[(2)]);
var inst_35905 = (inst_35903__$1 == null);
var state_35927__$1 = (function (){var statearr_35961 = state_35927;
(statearr_35961[(7)] = inst_35903__$1);

return statearr_35961;
})();
if(cljs.core.truth_(inst_35905)){
var statearr_35964_37862 = state_35927__$1;
(statearr_35964_37862[(1)] = (5));

} else {
var statearr_35969_37863 = state_35927__$1;
(statearr_35969_37863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (6))){
var inst_35903 = (state_35927[(7)]);
var inst_35909 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35903) : p.call(null,inst_35903));
var state_35927__$1 = state_35927;
if(cljs.core.truth_(inst_35909)){
var statearr_35974_37864 = state_35927__$1;
(statearr_35974_37864[(1)] = (8));

} else {
var statearr_35975_37865 = state_35927__$1;
(statearr_35975_37865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (3))){
var inst_35924 = (state_35927[(2)]);
var state_35927__$1 = state_35927;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35927__$1,inst_35924);
} else {
if((state_val_35928 === (2))){
var state_35927__$1 = state_35927;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35927__$1,(4),ch);
} else {
if((state_val_35928 === (11))){
var inst_35913 = (state_35927[(2)]);
var state_35927__$1 = state_35927;
var statearr_35979_37866 = state_35927__$1;
(statearr_35979_37866[(2)] = inst_35913);

(statearr_35979_37866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (9))){
var state_35927__$1 = state_35927;
var statearr_35980_37867 = state_35927__$1;
(statearr_35980_37867[(2)] = null);

(statearr_35980_37867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (5))){
var inst_35907 = cljs.core.async.close_BANG_(out);
var state_35927__$1 = state_35927;
var statearr_35981_37868 = state_35927__$1;
(statearr_35981_37868[(2)] = inst_35907);

(statearr_35981_37868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (10))){
var inst_35916 = (state_35927[(2)]);
var state_35927__$1 = (function (){var statearr_35982 = state_35927;
(statearr_35982[(8)] = inst_35916);

return statearr_35982;
})();
var statearr_35983_37869 = state_35927__$1;
(statearr_35983_37869[(2)] = null);

(statearr_35983_37869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35928 === (8))){
var inst_35903 = (state_35927[(7)]);
var state_35927__$1 = state_35927;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35927__$1,(11),out,inst_35903);
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
});})(c__33642__auto___37857,out))
;
return ((function (switch__33308__auto__,c__33642__auto___37857,out){
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_35984 = [null,null,null,null,null,null,null,null,null];
(statearr_35984[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_35984[(1)] = (1));

return statearr_35984;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_35927){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_35927);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e35987){if((e35987 instanceof Object)){
var ex__33312__auto__ = e35987;
var statearr_35988_37870 = state_35927;
(statearr_35988_37870[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35987;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37871 = state_35927;
state_35927 = G__37871;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_35927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_35927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto___37857,out))
})();
var state__33644__auto__ = (function (){var statearr_35989 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_35989[(6)] = c__33642__auto___37857);

return statearr_35989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto___37857,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35993 = arguments.length;
switch (G__35993) {
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
var c__33642__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto__){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto__){
return (function (state_36065){
var state_val_36066 = (state_36065[(1)]);
if((state_val_36066 === (7))){
var inst_36060 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
var statearr_36075_37877 = state_36065__$1;
(statearr_36075_37877[(2)] = inst_36060);

(statearr_36075_37877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (20))){
var inst_36027 = (state_36065[(7)]);
var inst_36040 = (state_36065[(2)]);
var inst_36041 = cljs.core.next(inst_36027);
var inst_36011 = inst_36041;
var inst_36012 = null;
var inst_36013 = (0);
var inst_36014 = (0);
var state_36065__$1 = (function (){var statearr_36076 = state_36065;
(statearr_36076[(8)] = inst_36012);

(statearr_36076[(9)] = inst_36013);

(statearr_36076[(10)] = inst_36014);

(statearr_36076[(11)] = inst_36040);

(statearr_36076[(12)] = inst_36011);

return statearr_36076;
})();
var statearr_36078_37878 = state_36065__$1;
(statearr_36078_37878[(2)] = null);

(statearr_36078_37878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (1))){
var state_36065__$1 = state_36065;
var statearr_36080_37879 = state_36065__$1;
(statearr_36080_37879[(2)] = null);

(statearr_36080_37879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (4))){
var inst_36000 = (state_36065[(13)]);
var inst_36000__$1 = (state_36065[(2)]);
var inst_36001 = (inst_36000__$1 == null);
var state_36065__$1 = (function (){var statearr_36082 = state_36065;
(statearr_36082[(13)] = inst_36000__$1);

return statearr_36082;
})();
if(cljs.core.truth_(inst_36001)){
var statearr_36083_37880 = state_36065__$1;
(statearr_36083_37880[(1)] = (5));

} else {
var statearr_36084_37881 = state_36065__$1;
(statearr_36084_37881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (15))){
var state_36065__$1 = state_36065;
var statearr_36089_37882 = state_36065__$1;
(statearr_36089_37882[(2)] = null);

(statearr_36089_37882[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (21))){
var state_36065__$1 = state_36065;
var statearr_36090_37883 = state_36065__$1;
(statearr_36090_37883[(2)] = null);

(statearr_36090_37883[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (13))){
var inst_36012 = (state_36065[(8)]);
var inst_36013 = (state_36065[(9)]);
var inst_36014 = (state_36065[(10)]);
var inst_36011 = (state_36065[(12)]);
var inst_36021 = (state_36065[(2)]);
var inst_36023 = (inst_36014 + (1));
var tmp36086 = inst_36012;
var tmp36087 = inst_36013;
var tmp36088 = inst_36011;
var inst_36011__$1 = tmp36088;
var inst_36012__$1 = tmp36086;
var inst_36013__$1 = tmp36087;
var inst_36014__$1 = inst_36023;
var state_36065__$1 = (function (){var statearr_36091 = state_36065;
(statearr_36091[(8)] = inst_36012__$1);

(statearr_36091[(9)] = inst_36013__$1);

(statearr_36091[(14)] = inst_36021);

(statearr_36091[(10)] = inst_36014__$1);

(statearr_36091[(12)] = inst_36011__$1);

return statearr_36091;
})();
var statearr_36097_37884 = state_36065__$1;
(statearr_36097_37884[(2)] = null);

(statearr_36097_37884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (22))){
var state_36065__$1 = state_36065;
var statearr_36102_37886 = state_36065__$1;
(statearr_36102_37886[(2)] = null);

(statearr_36102_37886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (6))){
var inst_36000 = (state_36065[(13)]);
var inst_36009 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36000) : f.call(null,inst_36000));
var inst_36010 = cljs.core.seq(inst_36009);
var inst_36011 = inst_36010;
var inst_36012 = null;
var inst_36013 = (0);
var inst_36014 = (0);
var state_36065__$1 = (function (){var statearr_36106 = state_36065;
(statearr_36106[(8)] = inst_36012);

(statearr_36106[(9)] = inst_36013);

(statearr_36106[(10)] = inst_36014);

(statearr_36106[(12)] = inst_36011);

return statearr_36106;
})();
var statearr_36108_37890 = state_36065__$1;
(statearr_36108_37890[(2)] = null);

(statearr_36108_37890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (17))){
var inst_36027 = (state_36065[(7)]);
var inst_36031 = cljs.core.chunk_first(inst_36027);
var inst_36032 = cljs.core.chunk_rest(inst_36027);
var inst_36034 = cljs.core.count(inst_36031);
var inst_36011 = inst_36032;
var inst_36012 = inst_36031;
var inst_36013 = inst_36034;
var inst_36014 = (0);
var state_36065__$1 = (function (){var statearr_36112 = state_36065;
(statearr_36112[(8)] = inst_36012);

(statearr_36112[(9)] = inst_36013);

(statearr_36112[(10)] = inst_36014);

(statearr_36112[(12)] = inst_36011);

return statearr_36112;
})();
var statearr_36116_37891 = state_36065__$1;
(statearr_36116_37891[(2)] = null);

(statearr_36116_37891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (3))){
var inst_36063 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36065__$1,inst_36063);
} else {
if((state_val_36066 === (12))){
var inst_36049 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
var statearr_36122_37893 = state_36065__$1;
(statearr_36122_37893[(2)] = inst_36049);

(statearr_36122_37893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (2))){
var state_36065__$1 = state_36065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36065__$1,(4),in$);
} else {
if((state_val_36066 === (23))){
var inst_36058 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
var statearr_36129_37897 = state_36065__$1;
(statearr_36129_37897[(2)] = inst_36058);

(statearr_36129_37897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (19))){
var inst_36044 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
var statearr_36131_37901 = state_36065__$1;
(statearr_36131_37901[(2)] = inst_36044);

(statearr_36131_37901[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (11))){
var inst_36027 = (state_36065[(7)]);
var inst_36011 = (state_36065[(12)]);
var inst_36027__$1 = cljs.core.seq(inst_36011);
var state_36065__$1 = (function (){var statearr_36136 = state_36065;
(statearr_36136[(7)] = inst_36027__$1);

return statearr_36136;
})();
if(inst_36027__$1){
var statearr_36137_37902 = state_36065__$1;
(statearr_36137_37902[(1)] = (14));

} else {
var statearr_36138_37906 = state_36065__$1;
(statearr_36138_37906[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (9))){
var inst_36051 = (state_36065[(2)]);
var inst_36052 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_36065__$1 = (function (){var statearr_36140 = state_36065;
(statearr_36140[(15)] = inst_36051);

return statearr_36140;
})();
if(cljs.core.truth_(inst_36052)){
var statearr_36142_37907 = state_36065__$1;
(statearr_36142_37907[(1)] = (21));

} else {
var statearr_36143_37912 = state_36065__$1;
(statearr_36143_37912[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (5))){
var inst_36003 = cljs.core.async.close_BANG_(out);
var state_36065__$1 = state_36065;
var statearr_36144_37916 = state_36065__$1;
(statearr_36144_37916[(2)] = inst_36003);

(statearr_36144_37916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (14))){
var inst_36027 = (state_36065[(7)]);
var inst_36029 = cljs.core.chunked_seq_QMARK_(inst_36027);
var state_36065__$1 = state_36065;
if(inst_36029){
var statearr_36145_37917 = state_36065__$1;
(statearr_36145_37917[(1)] = (17));

} else {
var statearr_36155_37918 = state_36065__$1;
(statearr_36155_37918[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (16))){
var inst_36047 = (state_36065[(2)]);
var state_36065__$1 = state_36065;
var statearr_36156_37922 = state_36065__$1;
(statearr_36156_37922[(2)] = inst_36047);

(statearr_36156_37922[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36066 === (10))){
var inst_36012 = (state_36065[(8)]);
var inst_36014 = (state_36065[(10)]);
var inst_36019 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_36012,inst_36014);
var state_36065__$1 = state_36065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36065__$1,(13),out,inst_36019);
} else {
if((state_val_36066 === (18))){
var inst_36027 = (state_36065[(7)]);
var inst_36038 = cljs.core.first(inst_36027);
var state_36065__$1 = state_36065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36065__$1,(20),out,inst_36038);
} else {
if((state_val_36066 === (8))){
var inst_36013 = (state_36065[(9)]);
var inst_36014 = (state_36065[(10)]);
var inst_36016 = (inst_36014 < inst_36013);
var inst_36017 = inst_36016;
var state_36065__$1 = state_36065;
if(cljs.core.truth_(inst_36017)){
var statearr_36161_37926 = state_36065__$1;
(statearr_36161_37926[(1)] = (10));

} else {
var statearr_36162_37927 = state_36065__$1;
(statearr_36162_37927[(1)] = (11));

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
});})(c__33642__auto__))
;
return ((function (switch__33308__auto__,c__33642__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33309__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33309__auto____0 = (function (){
var statearr_36164 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36164[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33309__auto__);

(statearr_36164[(1)] = (1));

return statearr_36164;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33309__auto____1 = (function (state_36065){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_36065);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e36165){if((e36165 instanceof Object)){
var ex__33312__auto__ = e36165;
var statearr_36166_37931 = state_36065;
(statearr_36166_37931[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36165;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37933 = state_36065;
state_36065 = G__37933;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33309__auto__ = function(state_36065){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33309__auto____1.call(this,state_36065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33309__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33309__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto__))
})();
var state__33644__auto__ = (function (){var statearr_36171 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_36171[(6)] = c__33642__auto__);

return statearr_36171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto__))
);

return c__33642__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36178 = arguments.length;
switch (G__36178) {
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
var G__36191 = arguments.length;
switch (G__36191) {
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
var G__36194 = arguments.length;
switch (G__36194) {
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
var c__33642__auto___37964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto___37964,out){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto___37964,out){
return (function (state_36222){
var state_val_36223 = (state_36222[(1)]);
if((state_val_36223 === (7))){
var inst_36217 = (state_36222[(2)]);
var state_36222__$1 = state_36222;
var statearr_36226_37967 = state_36222__$1;
(statearr_36226_37967[(2)] = inst_36217);

(statearr_36226_37967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (1))){
var inst_36197 = null;
var state_36222__$1 = (function (){var statearr_36227 = state_36222;
(statearr_36227[(7)] = inst_36197);

return statearr_36227;
})();
var statearr_36228_37974 = state_36222__$1;
(statearr_36228_37974[(2)] = null);

(statearr_36228_37974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (4))){
var inst_36201 = (state_36222[(8)]);
var inst_36201__$1 = (state_36222[(2)]);
var inst_36202 = (inst_36201__$1 == null);
var inst_36203 = cljs.core.not(inst_36202);
var state_36222__$1 = (function (){var statearr_36231 = state_36222;
(statearr_36231[(8)] = inst_36201__$1);

return statearr_36231;
})();
if(inst_36203){
var statearr_36232_37977 = state_36222__$1;
(statearr_36232_37977[(1)] = (5));

} else {
var statearr_36234_37979 = state_36222__$1;
(statearr_36234_37979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (6))){
var state_36222__$1 = state_36222;
var statearr_36238_37981 = state_36222__$1;
(statearr_36238_37981[(2)] = null);

(statearr_36238_37981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (3))){
var inst_36219 = (state_36222[(2)]);
var inst_36220 = cljs.core.async.close_BANG_(out);
var state_36222__$1 = (function (){var statearr_36241 = state_36222;
(statearr_36241[(9)] = inst_36219);

return statearr_36241;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36222__$1,inst_36220);
} else {
if((state_val_36223 === (2))){
var state_36222__$1 = state_36222;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36222__$1,(4),ch);
} else {
if((state_val_36223 === (11))){
var inst_36201 = (state_36222[(8)]);
var inst_36211 = (state_36222[(2)]);
var inst_36197 = inst_36201;
var state_36222__$1 = (function (){var statearr_36243 = state_36222;
(statearr_36243[(10)] = inst_36211);

(statearr_36243[(7)] = inst_36197);

return statearr_36243;
})();
var statearr_36244_37982 = state_36222__$1;
(statearr_36244_37982[(2)] = null);

(statearr_36244_37982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (9))){
var inst_36201 = (state_36222[(8)]);
var state_36222__$1 = state_36222;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36222__$1,(11),out,inst_36201);
} else {
if((state_val_36223 === (5))){
var inst_36201 = (state_36222[(8)]);
var inst_36197 = (state_36222[(7)]);
var inst_36205 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36201,inst_36197);
var state_36222__$1 = state_36222;
if(inst_36205){
var statearr_36249_37989 = state_36222__$1;
(statearr_36249_37989[(1)] = (8));

} else {
var statearr_36251_37990 = state_36222__$1;
(statearr_36251_37990[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (10))){
var inst_36214 = (state_36222[(2)]);
var state_36222__$1 = state_36222;
var statearr_36254_37991 = state_36222__$1;
(statearr_36254_37991[(2)] = inst_36214);

(statearr_36254_37991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36223 === (8))){
var inst_36197 = (state_36222[(7)]);
var tmp36247 = inst_36197;
var inst_36197__$1 = tmp36247;
var state_36222__$1 = (function (){var statearr_36255 = state_36222;
(statearr_36255[(7)] = inst_36197__$1);

return statearr_36255;
})();
var statearr_36257_37992 = state_36222__$1;
(statearr_36257_37992[(2)] = null);

(statearr_36257_37992[(1)] = (2));


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
});})(c__33642__auto___37964,out))
;
return ((function (switch__33308__auto__,c__33642__auto___37964,out){
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_36258 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36258[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_36258[(1)] = (1));

return statearr_36258;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_36222){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_36222);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e36260){if((e36260 instanceof Object)){
var ex__33312__auto__ = e36260;
var statearr_36261_37996 = state_36222;
(statearr_36261_37996[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36222);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36260;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38000 = state_36222;
state_36222 = G__38000;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_36222){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_36222);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto___37964,out))
})();
var state__33644__auto__ = (function (){var statearr_36262 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_36262[(6)] = c__33642__auto___37964);

return statearr_36262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto___37964,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36264 = arguments.length;
switch (G__36264) {
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
var c__33642__auto___38008 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto___38008,out){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto___38008,out){
return (function (state_36308){
var state_val_36309 = (state_36308[(1)]);
if((state_val_36309 === (7))){
var inst_36304 = (state_36308[(2)]);
var state_36308__$1 = state_36308;
var statearr_36312_38009 = state_36308__$1;
(statearr_36312_38009[(2)] = inst_36304);

(statearr_36312_38009[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (1))){
var inst_36270 = (new Array(n));
var inst_36271 = inst_36270;
var inst_36272 = (0);
var state_36308__$1 = (function (){var statearr_36313 = state_36308;
(statearr_36313[(7)] = inst_36271);

(statearr_36313[(8)] = inst_36272);

return statearr_36313;
})();
var statearr_36314_38010 = state_36308__$1;
(statearr_36314_38010[(2)] = null);

(statearr_36314_38010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (4))){
var inst_36275 = (state_36308[(9)]);
var inst_36275__$1 = (state_36308[(2)]);
var inst_36276 = (inst_36275__$1 == null);
var inst_36277 = cljs.core.not(inst_36276);
var state_36308__$1 = (function (){var statearr_36315 = state_36308;
(statearr_36315[(9)] = inst_36275__$1);

return statearr_36315;
})();
if(inst_36277){
var statearr_36316_38012 = state_36308__$1;
(statearr_36316_38012[(1)] = (5));

} else {
var statearr_36317_38013 = state_36308__$1;
(statearr_36317_38013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (15))){
var inst_36298 = (state_36308[(2)]);
var state_36308__$1 = state_36308;
var statearr_36318_38014 = state_36308__$1;
(statearr_36318_38014[(2)] = inst_36298);

(statearr_36318_38014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (13))){
var state_36308__$1 = state_36308;
var statearr_36319_38018 = state_36308__$1;
(statearr_36319_38018[(2)] = null);

(statearr_36319_38018[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (6))){
var inst_36272 = (state_36308[(8)]);
var inst_36293 = (inst_36272 > (0));
var state_36308__$1 = state_36308;
if(cljs.core.truth_(inst_36293)){
var statearr_36321_38019 = state_36308__$1;
(statearr_36321_38019[(1)] = (12));

} else {
var statearr_36324_38020 = state_36308__$1;
(statearr_36324_38020[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (3))){
var inst_36306 = (state_36308[(2)]);
var state_36308__$1 = state_36308;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36308__$1,inst_36306);
} else {
if((state_val_36309 === (12))){
var inst_36271 = (state_36308[(7)]);
var inst_36295 = cljs.core.vec(inst_36271);
var state_36308__$1 = state_36308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36308__$1,(15),out,inst_36295);
} else {
if((state_val_36309 === (2))){
var state_36308__$1 = state_36308;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36308__$1,(4),ch);
} else {
if((state_val_36309 === (11))){
var inst_36287 = (state_36308[(2)]);
var inst_36288 = (new Array(n));
var inst_36271 = inst_36288;
var inst_36272 = (0);
var state_36308__$1 = (function (){var statearr_36330 = state_36308;
(statearr_36330[(7)] = inst_36271);

(statearr_36330[(10)] = inst_36287);

(statearr_36330[(8)] = inst_36272);

return statearr_36330;
})();
var statearr_36333_38025 = state_36308__$1;
(statearr_36333_38025[(2)] = null);

(statearr_36333_38025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (9))){
var inst_36271 = (state_36308[(7)]);
var inst_36285 = cljs.core.vec(inst_36271);
var state_36308__$1 = state_36308;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36308__$1,(11),out,inst_36285);
} else {
if((state_val_36309 === (5))){
var inst_36275 = (state_36308[(9)]);
var inst_36271 = (state_36308[(7)]);
var inst_36280 = (state_36308[(11)]);
var inst_36272 = (state_36308[(8)]);
var inst_36279 = (inst_36271[inst_36272] = inst_36275);
var inst_36280__$1 = (inst_36272 + (1));
var inst_36281 = (inst_36280__$1 < n);
var state_36308__$1 = (function (){var statearr_36334 = state_36308;
(statearr_36334[(12)] = inst_36279);

(statearr_36334[(11)] = inst_36280__$1);

return statearr_36334;
})();
if(cljs.core.truth_(inst_36281)){
var statearr_36336_38030 = state_36308__$1;
(statearr_36336_38030[(1)] = (8));

} else {
var statearr_36337_38031 = state_36308__$1;
(statearr_36337_38031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (14))){
var inst_36301 = (state_36308[(2)]);
var inst_36302 = cljs.core.async.close_BANG_(out);
var state_36308__$1 = (function (){var statearr_36339 = state_36308;
(statearr_36339[(13)] = inst_36301);

return statearr_36339;
})();
var statearr_36340_38032 = state_36308__$1;
(statearr_36340_38032[(2)] = inst_36302);

(statearr_36340_38032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (10))){
var inst_36291 = (state_36308[(2)]);
var state_36308__$1 = state_36308;
var statearr_36341_38033 = state_36308__$1;
(statearr_36341_38033[(2)] = inst_36291);

(statearr_36341_38033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36309 === (8))){
var inst_36271 = (state_36308[(7)]);
var inst_36280 = (state_36308[(11)]);
var tmp36338 = inst_36271;
var inst_36271__$1 = tmp36338;
var inst_36272 = inst_36280;
var state_36308__$1 = (function (){var statearr_36344 = state_36308;
(statearr_36344[(7)] = inst_36271__$1);

(statearr_36344[(8)] = inst_36272);

return statearr_36344;
})();
var statearr_36345_38036 = state_36308__$1;
(statearr_36345_38036[(2)] = null);

(statearr_36345_38036[(1)] = (2));


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
});})(c__33642__auto___38008,out))
;
return ((function (switch__33308__auto__,c__33642__auto___38008,out){
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_36350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36350[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_36350[(1)] = (1));

return statearr_36350;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_36308){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_36308);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e36353){if((e36353 instanceof Object)){
var ex__33312__auto__ = e36353;
var statearr_36358_38041 = state_36308;
(statearr_36358_38041[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36353;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38043 = state_36308;
state_36308 = G__38043;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_36308){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_36308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto___38008,out))
})();
var state__33644__auto__ = (function (){var statearr_36362 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_36362[(6)] = c__33642__auto___38008);

return statearr_36362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto___38008,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36375 = arguments.length;
switch (G__36375) {
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
var c__33642__auto___38046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33642__auto___38046,out){
return (function (){
var f__33643__auto__ = (function (){var switch__33308__auto__ = ((function (c__33642__auto___38046,out){
return (function (state_36436){
var state_val_36437 = (state_36436[(1)]);
if((state_val_36437 === (7))){
var inst_36432 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36445_38052 = state_36436__$1;
(statearr_36445_38052[(2)] = inst_36432);

(statearr_36445_38052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (1))){
var inst_36387 = [];
var inst_36388 = inst_36387;
var inst_36389 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36436__$1 = (function (){var statearr_36450 = state_36436;
(statearr_36450[(7)] = inst_36389);

(statearr_36450[(8)] = inst_36388);

return statearr_36450;
})();
var statearr_36452_38057 = state_36436__$1;
(statearr_36452_38057[(2)] = null);

(statearr_36452_38057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (4))){
var inst_36393 = (state_36436[(9)]);
var inst_36393__$1 = (state_36436[(2)]);
var inst_36394 = (inst_36393__$1 == null);
var inst_36395 = cljs.core.not(inst_36394);
var state_36436__$1 = (function (){var statearr_36453 = state_36436;
(statearr_36453[(9)] = inst_36393__$1);

return statearr_36453;
})();
if(inst_36395){
var statearr_36458_38061 = state_36436__$1;
(statearr_36458_38061[(1)] = (5));

} else {
var statearr_36462_38062 = state_36436__$1;
(statearr_36462_38062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (15))){
var inst_36425 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36464_38066 = state_36436__$1;
(statearr_36464_38066[(2)] = inst_36425);

(statearr_36464_38066[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (13))){
var state_36436__$1 = state_36436;
var statearr_36465_38068 = state_36436__$1;
(statearr_36465_38068[(2)] = null);

(statearr_36465_38068[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (6))){
var inst_36388 = (state_36436[(8)]);
var inst_36418 = inst_36388.length;
var inst_36419 = (inst_36418 > (0));
var state_36436__$1 = state_36436;
if(cljs.core.truth_(inst_36419)){
var statearr_36470_38070 = state_36436__$1;
(statearr_36470_38070[(1)] = (12));

} else {
var statearr_36471_38071 = state_36436__$1;
(statearr_36471_38071[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (3))){
var inst_36434 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
return cljs.core.async.impl.ioc_helpers.return_chan(state_36436__$1,inst_36434);
} else {
if((state_val_36437 === (12))){
var inst_36388 = (state_36436[(8)]);
var inst_36423 = cljs.core.vec(inst_36388);
var state_36436__$1 = state_36436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36436__$1,(15),out,inst_36423);
} else {
if((state_val_36437 === (2))){
var state_36436__$1 = state_36436;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36436__$1,(4),ch);
} else {
if((state_val_36437 === (11))){
var inst_36393 = (state_36436[(9)]);
var inst_36397 = (state_36436[(10)]);
var inst_36410 = (state_36436[(2)]);
var inst_36411 = [];
var inst_36412 = inst_36411.push(inst_36393);
var inst_36388 = inst_36411;
var inst_36389 = inst_36397;
var state_36436__$1 = (function (){var statearr_36473 = state_36436;
(statearr_36473[(11)] = inst_36410);

(statearr_36473[(12)] = inst_36412);

(statearr_36473[(7)] = inst_36389);

(statearr_36473[(8)] = inst_36388);

return statearr_36473;
})();
var statearr_36474_38072 = state_36436__$1;
(statearr_36474_38072[(2)] = null);

(statearr_36474_38072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (9))){
var inst_36388 = (state_36436[(8)]);
var inst_36408 = cljs.core.vec(inst_36388);
var state_36436__$1 = state_36436;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_36436__$1,(11),out,inst_36408);
} else {
if((state_val_36437 === (5))){
var inst_36393 = (state_36436[(9)]);
var inst_36397 = (state_36436[(10)]);
var inst_36389 = (state_36436[(7)]);
var inst_36397__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_36393) : f.call(null,inst_36393));
var inst_36398 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_36397__$1,inst_36389);
var inst_36399 = cljs.core.keyword_identical_QMARK_(inst_36389,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36400 = ((inst_36398) || (inst_36399));
var state_36436__$1 = (function (){var statearr_36475 = state_36436;
(statearr_36475[(10)] = inst_36397__$1);

return statearr_36475;
})();
if(cljs.core.truth_(inst_36400)){
var statearr_36476_38073 = state_36436__$1;
(statearr_36476_38073[(1)] = (8));

} else {
var statearr_36477_38074 = state_36436__$1;
(statearr_36477_38074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (14))){
var inst_36428 = (state_36436[(2)]);
var inst_36429 = cljs.core.async.close_BANG_(out);
var state_36436__$1 = (function (){var statearr_36480 = state_36436;
(statearr_36480[(13)] = inst_36428);

return statearr_36480;
})();
var statearr_36481_38075 = state_36436__$1;
(statearr_36481_38075[(2)] = inst_36429);

(statearr_36481_38075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (10))){
var inst_36415 = (state_36436[(2)]);
var state_36436__$1 = state_36436;
var statearr_36482_38076 = state_36436__$1;
(statearr_36482_38076[(2)] = inst_36415);

(statearr_36482_38076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36437 === (8))){
var inst_36393 = (state_36436[(9)]);
var inst_36397 = (state_36436[(10)]);
var inst_36388 = (state_36436[(8)]);
var inst_36402 = inst_36388.push(inst_36393);
var tmp36478 = inst_36388;
var inst_36388__$1 = tmp36478;
var inst_36389 = inst_36397;
var state_36436__$1 = (function (){var statearr_36483 = state_36436;
(statearr_36483[(7)] = inst_36389);

(statearr_36483[(8)] = inst_36388__$1);

(statearr_36483[(14)] = inst_36402);

return statearr_36483;
})();
var statearr_36484_38077 = state_36436__$1;
(statearr_36484_38077[(2)] = null);

(statearr_36484_38077[(1)] = (2));


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
});})(c__33642__auto___38046,out))
;
return ((function (switch__33308__auto__,c__33642__auto___38046,out){
return (function() {
var cljs$core$async$state_machine__33309__auto__ = null;
var cljs$core$async$state_machine__33309__auto____0 = (function (){
var statearr_36489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36489[(0)] = cljs$core$async$state_machine__33309__auto__);

(statearr_36489[(1)] = (1));

return statearr_36489;
});
var cljs$core$async$state_machine__33309__auto____1 = (function (state_36436){
while(true){
var ret_value__33310__auto__ = (function (){try{while(true){
var result__33311__auto__ = switch__33308__auto__(state_36436);
if(cljs.core.keyword_identical_QMARK_(result__33311__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33311__auto__;
}
break;
}
}catch (e36490){if((e36490 instanceof Object)){
var ex__33312__auto__ = e36490;
var statearr_36491_38081 = state_36436;
(statearr_36491_38081[(5)] = ex__33312__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_36436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36490;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33310__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38083 = state_36436;
state_36436 = G__38083;
continue;
} else {
return ret_value__33310__auto__;
}
break;
}
});
cljs$core$async$state_machine__33309__auto__ = function(state_36436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33309__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33309__auto____1.call(this,state_36436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33309__auto____0;
cljs$core$async$state_machine__33309__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33309__auto____1;
return cljs$core$async$state_machine__33309__auto__;
})()
;})(switch__33308__auto__,c__33642__auto___38046,out))
})();
var state__33644__auto__ = (function (){var statearr_36492 = (f__33643__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33643__auto__.cljs$core$IFn$_invoke$arity$0() : f__33643__auto__.call(null));
(statearr_36492[(6)] = c__33642__auto___38046);

return statearr_36492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33644__auto__);
});})(c__33642__auto___38046,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
