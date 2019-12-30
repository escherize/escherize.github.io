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
var G__44570 = arguments.length;
switch (G__44570) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44571 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44571 = (function (f,blockable,meta44572){
this.f = f;
this.blockable = blockable;
this.meta44572 = meta44572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44573,meta44572__$1){
var self__ = this;
var _44573__$1 = this;
return (new cljs.core.async.t_cljs$core$async44571(self__.f,self__.blockable,meta44572__$1));
});

cljs.core.async.t_cljs$core$async44571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44573){
var self__ = this;
var _44573__$1 = this;
return self__.meta44572;
});

cljs.core.async.t_cljs$core$async44571.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44571.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44572","meta44572",-2022408629,null)], null);
});

cljs.core.async.t_cljs$core$async44571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44571";

cljs.core.async.t_cljs$core$async44571.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44571");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44571.
 */
cljs.core.async.__GT_t_cljs$core$async44571 = (function cljs$core$async$__GT_t_cljs$core$async44571(f__$1,blockable__$1,meta44572){
return (new cljs.core.async.t_cljs$core$async44571(f__$1,blockable__$1,meta44572));
});

}

return (new cljs.core.async.t_cljs$core$async44571(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44578 = arguments.length;
switch (G__44578) {
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
var G__44609 = arguments.length;
switch (G__44609) {
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
var G__44637 = arguments.length;
switch (G__44637) {
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
var val_47187 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47187) : fn1.call(null,val_47187));
} else {
cljs.core.async.impl.dispatch.run(((function (val_47187,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47187) : fn1.call(null,val_47187));
});})(val_47187,ret))
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
var G__44640 = arguments.length;
switch (G__44640) {
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
var n__4607__auto___47192 = n;
var x_47193 = (0);
while(true){
if((x_47193 < n__4607__auto___47192)){
(a[x_47193] = x_47193);

var G__47194 = (x_47193 + (1));
x_47193 = G__47194;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44641 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44641 = (function (flag,meta44642){
this.flag = flag;
this.meta44642 = meta44642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44643,meta44642__$1){
var self__ = this;
var _44643__$1 = this;
return (new cljs.core.async.t_cljs$core$async44641(self__.flag,meta44642__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44643){
var self__ = this;
var _44643__$1 = this;
return self__.meta44642;
});})(flag))
;

cljs.core.async.t_cljs$core$async44641.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44641.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44641.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44641.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44641.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44642","meta44642",-1722675422,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44641";

cljs.core.async.t_cljs$core$async44641.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44641");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44641.
 */
cljs.core.async.__GT_t_cljs$core$async44641 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44641(flag__$1,meta44642){
return (new cljs.core.async.t_cljs$core$async44641(flag__$1,meta44642));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44641(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44650 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44650 = (function (flag,cb,meta44651){
this.flag = flag;
this.cb = cb;
this.meta44651 = meta44651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44652,meta44651__$1){
var self__ = this;
var _44652__$1 = this;
return (new cljs.core.async.t_cljs$core$async44650(self__.flag,self__.cb,meta44651__$1));
});

cljs.core.async.t_cljs$core$async44650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44652){
var self__ = this;
var _44652__$1 = this;
return self__.meta44651;
});

cljs.core.async.t_cljs$core$async44650.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44650.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async44650.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44650.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44651","meta44651",-518867863,null)], null);
});

cljs.core.async.t_cljs$core$async44650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44650";

cljs.core.async.t_cljs$core$async44650.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async44650");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44650.
 */
cljs.core.async.__GT_t_cljs$core$async44650 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44650(flag__$1,cb__$1,meta44651){
return (new cljs.core.async.t_cljs$core$async44650(flag__$1,cb__$1,meta44651));
});

}

return (new cljs.core.async.t_cljs$core$async44650(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__44653_SHARP_){
var G__44660 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44653_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44660) : fret.call(null,G__44660));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44654_SHARP_){
var G__44662 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44654_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__44662) : fret.call(null,G__44662));
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
var G__47209 = (i + (1));
i = G__47209;
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
var len__4730__auto___47210 = arguments.length;
var i__4731__auto___47211 = (0);
while(true){
if((i__4731__auto___47211 < len__4730__auto___47210)){
args__4736__auto__.push((arguments[i__4731__auto___47211]));

var G__47212 = (i__4731__auto___47211 + (1));
i__4731__auto___47211 = G__47212;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44670){
var map__44671 = p__44670;
var map__44671__$1 = (((((!((map__44671 == null))))?(((((map__44671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44671):map__44671);
var opts = map__44671__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44667){
var G__44668 = cljs.core.first(seq44667);
var seq44667__$1 = cljs.core.next(seq44667);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44668,seq44667__$1);
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
var G__44682 = arguments.length;
switch (G__44682) {
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
var c__44468__auto___47218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto___47218){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto___47218){
return (function (state_44726){
var state_val_44727 = (state_44726[(1)]);
if((state_val_44727 === (7))){
var inst_44722 = (state_44726[(2)]);
var state_44726__$1 = state_44726;
var statearr_44736_47219 = state_44726__$1;
(statearr_44736_47219[(2)] = inst_44722);

(statearr_44736_47219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44727 === (1))){
var state_44726__$1 = state_44726;
var statearr_44740_47220 = state_44726__$1;
(statearr_44740_47220[(2)] = null);

(statearr_44740_47220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44727 === (4))){
var inst_44701 = (state_44726[(7)]);
var inst_44701__$1 = (state_44726[(2)]);
var inst_44704 = (inst_44701__$1 == null);
var state_44726__$1 = (function (){var statearr_44741 = state_44726;
(statearr_44741[(7)] = inst_44701__$1);

return statearr_44741;
})();
if(cljs.core.truth_(inst_44704)){
var statearr_44742_47223 = state_44726__$1;
(statearr_44742_47223[(1)] = (5));

} else {
var statearr_44743_47230 = state_44726__$1;
(statearr_44743_47230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44727 === (13))){
var state_44726__$1 = state_44726;
var statearr_44744_47231 = state_44726__$1;
(statearr_44744_47231[(2)] = null);

(statearr_44744_47231[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44727 === (6))){
var inst_44701 = (state_44726[(7)]);
var state_44726__$1 = state_44726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44726__$1,(11),to,inst_44701);
} else {
if((state_val_44727 === (3))){
var inst_44724 = (state_44726[(2)]);
var state_44726__$1 = state_44726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44726__$1,inst_44724);
} else {
if((state_val_44727 === (12))){
var state_44726__$1 = state_44726;
var statearr_44745_47234 = state_44726__$1;
(statearr_44745_47234[(2)] = null);

(statearr_44745_47234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44727 === (2))){
var state_44726__$1 = state_44726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44726__$1,(4),from);
} else {
if((state_val_44727 === (11))){
var inst_44714 = (state_44726[(2)]);
var state_44726__$1 = state_44726;
if(cljs.core.truth_(inst_44714)){
var statearr_44746_47238 = state_44726__$1;
(statearr_44746_47238[(1)] = (12));

} else {
var statearr_44747_47239 = state_44726__$1;
(statearr_44747_47239[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44727 === (9))){
var state_44726__$1 = state_44726;
var statearr_44748_47240 = state_44726__$1;
(statearr_44748_47240[(2)] = null);

(statearr_44748_47240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44727 === (5))){
var state_44726__$1 = state_44726;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44749_47244 = state_44726__$1;
(statearr_44749_47244[(1)] = (8));

} else {
var statearr_44750_47245 = state_44726__$1;
(statearr_44750_47245[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44727 === (14))){
var inst_44720 = (state_44726[(2)]);
var state_44726__$1 = state_44726;
var statearr_44751_47248 = state_44726__$1;
(statearr_44751_47248[(2)] = inst_44720);

(statearr_44751_47248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44727 === (10))){
var inst_44711 = (state_44726[(2)]);
var state_44726__$1 = state_44726;
var statearr_44752_47252 = state_44726__$1;
(statearr_44752_47252[(2)] = inst_44711);

(statearr_44752_47252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44727 === (8))){
var inst_44707 = cljs.core.async.close_BANG_(to);
var state_44726__$1 = state_44726;
var statearr_44753_47256 = state_44726__$1;
(statearr_44753_47256[(2)] = inst_44707);

(statearr_44753_47256[(1)] = (10));


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
});})(c__44468__auto___47218))
;
return ((function (switch__43975__auto__,c__44468__auto___47218){
return (function() {
var cljs$core$async$state_machine__43976__auto__ = null;
var cljs$core$async$state_machine__43976__auto____0 = (function (){
var statearr_44754 = [null,null,null,null,null,null,null,null];
(statearr_44754[(0)] = cljs$core$async$state_machine__43976__auto__);

(statearr_44754[(1)] = (1));

return statearr_44754;
});
var cljs$core$async$state_machine__43976__auto____1 = (function (state_44726){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_44726);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e44755){if((e44755 instanceof Object)){
var ex__43979__auto__ = e44755;
var statearr_44756_47263 = state_44726;
(statearr_44756_47263[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44755;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47269 = state_44726;
state_44726 = G__47269;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$state_machine__43976__auto__ = function(state_44726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43976__auto____1.call(this,state_44726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43976__auto____0;
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43976__auto____1;
return cljs$core$async$state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto___47218))
})();
var state__44470__auto__ = (function (){var statearr_44757 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_44757[(6)] = c__44468__auto___47218);

return statearr_44757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto___47218))
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
return (function (p__44765){
var vec__44767 = p__44765;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44767,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44767,(1),null);
var job = vec__44767;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__44468__auto___47272 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto___47272,res,vec__44767,v,p,job,jobs,results){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto___47272,res,vec__44767,v,p,job,jobs,results){
return (function (state_44777){
var state_val_44778 = (state_44777[(1)]);
if((state_val_44778 === (1))){
var state_44777__$1 = state_44777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44777__$1,(2),res,v);
} else {
if((state_val_44778 === (2))){
var inst_44774 = (state_44777[(2)]);
var inst_44775 = cljs.core.async.close_BANG_(res);
var state_44777__$1 = (function (){var statearr_44779 = state_44777;
(statearr_44779[(7)] = inst_44774);

return statearr_44779;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44777__$1,inst_44775);
} else {
return null;
}
}
});})(c__44468__auto___47272,res,vec__44767,v,p,job,jobs,results))
;
return ((function (switch__43975__auto__,c__44468__auto___47272,res,vec__44767,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____0 = (function (){
var statearr_44780 = [null,null,null,null,null,null,null,null];
(statearr_44780[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__);

(statearr_44780[(1)] = (1));

return statearr_44780;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____1 = (function (state_44777){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_44777);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e44781){if((e44781 instanceof Object)){
var ex__43979__auto__ = e44781;
var statearr_44782_47282 = state_44777;
(statearr_44782_47282[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44781;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47287 = state_44777;
state_44777 = G__47287;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__ = function(state_44777){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____1.call(this,state_44777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto___47272,res,vec__44767,v,p,job,jobs,results))
})();
var state__44470__auto__ = (function (){var statearr_44783 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_44783[(6)] = c__44468__auto___47272);

return statearr_44783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto___47272,res,vec__44767,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44787){
var vec__44788 = p__44787;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44788,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44788,(1),null);
var job = vec__44788;
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
var n__4607__auto___47289 = n;
var __47290 = (0);
while(true){
if((__47290 < n__4607__auto___47289)){
var G__44791_47291 = type;
var G__44791_47292__$1 = (((G__44791_47291 instanceof cljs.core.Keyword))?G__44791_47291.fqn:null);
switch (G__44791_47292__$1) {
case "compute":
var c__44468__auto___47294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47290,c__44468__auto___47294,G__44791_47291,G__44791_47292__$1,n__4607__auto___47289,jobs,results,process,async){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (__47290,c__44468__auto___47294,G__44791_47291,G__44791_47292__$1,n__4607__auto___47289,jobs,results,process,async){
return (function (state_44806){
var state_val_44807 = (state_44806[(1)]);
if((state_val_44807 === (1))){
var state_44806__$1 = state_44806;
var statearr_44808_47295 = state_44806__$1;
(statearr_44808_47295[(2)] = null);

(statearr_44808_47295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44807 === (2))){
var state_44806__$1 = state_44806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44806__$1,(4),jobs);
} else {
if((state_val_44807 === (3))){
var inst_44804 = (state_44806[(2)]);
var state_44806__$1 = state_44806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44806__$1,inst_44804);
} else {
if((state_val_44807 === (4))){
var inst_44795 = (state_44806[(2)]);
var inst_44797 = process(inst_44795);
var state_44806__$1 = state_44806;
if(cljs.core.truth_(inst_44797)){
var statearr_44809_47300 = state_44806__$1;
(statearr_44809_47300[(1)] = (5));

} else {
var statearr_44810_47301 = state_44806__$1;
(statearr_44810_47301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44807 === (5))){
var state_44806__$1 = state_44806;
var statearr_44811_47302 = state_44806__$1;
(statearr_44811_47302[(2)] = null);

(statearr_44811_47302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44807 === (6))){
var state_44806__$1 = state_44806;
var statearr_44813_47304 = state_44806__$1;
(statearr_44813_47304[(2)] = null);

(statearr_44813_47304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44807 === (7))){
var inst_44802 = (state_44806[(2)]);
var state_44806__$1 = state_44806;
var statearr_44814_47307 = state_44806__$1;
(statearr_44814_47307[(2)] = inst_44802);

(statearr_44814_47307[(1)] = (3));


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
});})(__47290,c__44468__auto___47294,G__44791_47291,G__44791_47292__$1,n__4607__auto___47289,jobs,results,process,async))
;
return ((function (__47290,switch__43975__auto__,c__44468__auto___47294,G__44791_47291,G__44791_47292__$1,n__4607__auto___47289,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____0 = (function (){
var statearr_44815 = [null,null,null,null,null,null,null];
(statearr_44815[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__);

(statearr_44815[(1)] = (1));

return statearr_44815;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____1 = (function (state_44806){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_44806);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e44819){if((e44819 instanceof Object)){
var ex__43979__auto__ = e44819;
var statearr_44820_47313 = state_44806;
(statearr_44820_47313[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44819;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47314 = state_44806;
state_44806 = G__47314;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__ = function(state_44806){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____1.call(this,state_44806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__;
})()
;})(__47290,switch__43975__auto__,c__44468__auto___47294,G__44791_47291,G__44791_47292__$1,n__4607__auto___47289,jobs,results,process,async))
})();
var state__44470__auto__ = (function (){var statearr_44821 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_44821[(6)] = c__44468__auto___47294);

return statearr_44821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(__47290,c__44468__auto___47294,G__44791_47291,G__44791_47292__$1,n__4607__auto___47289,jobs,results,process,async))
);


break;
case "async":
var c__44468__auto___47317 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47290,c__44468__auto___47317,G__44791_47291,G__44791_47292__$1,n__4607__auto___47289,jobs,results,process,async){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (__47290,c__44468__auto___47317,G__44791_47291,G__44791_47292__$1,n__4607__auto___47289,jobs,results,process,async){
return (function (state_44839){
var state_val_44840 = (state_44839[(1)]);
if((state_val_44840 === (1))){
var state_44839__$1 = state_44839;
var statearr_44848_47320 = state_44839__$1;
(statearr_44848_47320[(2)] = null);

(statearr_44848_47320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44840 === (2))){
var state_44839__$1 = state_44839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44839__$1,(4),jobs);
} else {
if((state_val_44840 === (3))){
var inst_44837 = (state_44839[(2)]);
var state_44839__$1 = state_44839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44839__$1,inst_44837);
} else {
if((state_val_44840 === (4))){
var inst_44827 = (state_44839[(2)]);
var inst_44828 = async(inst_44827);
var state_44839__$1 = state_44839;
if(cljs.core.truth_(inst_44828)){
var statearr_44849_47325 = state_44839__$1;
(statearr_44849_47325[(1)] = (5));

} else {
var statearr_44850_47326 = state_44839__$1;
(statearr_44850_47326[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44840 === (5))){
var state_44839__$1 = state_44839;
var statearr_44852_47327 = state_44839__$1;
(statearr_44852_47327[(2)] = null);

(statearr_44852_47327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44840 === (6))){
var state_44839__$1 = state_44839;
var statearr_44858_47328 = state_44839__$1;
(statearr_44858_47328[(2)] = null);

(statearr_44858_47328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44840 === (7))){
var inst_44834 = (state_44839[(2)]);
var state_44839__$1 = state_44839;
var statearr_44859_47329 = state_44839__$1;
(statearr_44859_47329[(2)] = inst_44834);

(statearr_44859_47329[(1)] = (3));


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
});})(__47290,c__44468__auto___47317,G__44791_47291,G__44791_47292__$1,n__4607__auto___47289,jobs,results,process,async))
;
return ((function (__47290,switch__43975__auto__,c__44468__auto___47317,G__44791_47291,G__44791_47292__$1,n__4607__auto___47289,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____0 = (function (){
var statearr_44860 = [null,null,null,null,null,null,null];
(statearr_44860[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__);

(statearr_44860[(1)] = (1));

return statearr_44860;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____1 = (function (state_44839){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_44839);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e44861){if((e44861 instanceof Object)){
var ex__43979__auto__ = e44861;
var statearr_44863_47331 = state_44839;
(statearr_44863_47331[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44861;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47332 = state_44839;
state_44839 = G__47332;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__ = function(state_44839){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____1.call(this,state_44839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__;
})()
;})(__47290,switch__43975__auto__,c__44468__auto___47317,G__44791_47291,G__44791_47292__$1,n__4607__auto___47289,jobs,results,process,async))
})();
var state__44470__auto__ = (function (){var statearr_44864 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_44864[(6)] = c__44468__auto___47317);

return statearr_44864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(__47290,c__44468__auto___47317,G__44791_47291,G__44791_47292__$1,n__4607__auto___47289,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44791_47292__$1)].join('')));

}

var G__47333 = (__47290 + (1));
__47290 = G__47333;
continue;
} else {
}
break;
}

var c__44468__auto___47334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto___47334,jobs,results,process,async){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto___47334,jobs,results,process,async){
return (function (state_44888){
var state_val_44889 = (state_44888[(1)]);
if((state_val_44889 === (7))){
var inst_44884 = (state_44888[(2)]);
var state_44888__$1 = state_44888;
var statearr_44891_47336 = state_44888__$1;
(statearr_44891_47336[(2)] = inst_44884);

(statearr_44891_47336[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44889 === (1))){
var state_44888__$1 = state_44888;
var statearr_44892_47337 = state_44888__$1;
(statearr_44892_47337[(2)] = null);

(statearr_44892_47337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44889 === (4))){
var inst_44867 = (state_44888[(7)]);
var inst_44867__$1 = (state_44888[(2)]);
var inst_44868 = (inst_44867__$1 == null);
var state_44888__$1 = (function (){var statearr_44893 = state_44888;
(statearr_44893[(7)] = inst_44867__$1);

return statearr_44893;
})();
if(cljs.core.truth_(inst_44868)){
var statearr_44895_47340 = state_44888__$1;
(statearr_44895_47340[(1)] = (5));

} else {
var statearr_44896_47341 = state_44888__$1;
(statearr_44896_47341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44889 === (6))){
var inst_44872 = (state_44888[(8)]);
var inst_44867 = (state_44888[(7)]);
var inst_44872__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_44875 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44876 = [inst_44867,inst_44872__$1];
var inst_44877 = (new cljs.core.PersistentVector(null,2,(5),inst_44875,inst_44876,null));
var state_44888__$1 = (function (){var statearr_44899 = state_44888;
(statearr_44899[(8)] = inst_44872__$1);

return statearr_44899;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44888__$1,(8),jobs,inst_44877);
} else {
if((state_val_44889 === (3))){
var inst_44886 = (state_44888[(2)]);
var state_44888__$1 = state_44888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44888__$1,inst_44886);
} else {
if((state_val_44889 === (2))){
var state_44888__$1 = state_44888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44888__$1,(4),from);
} else {
if((state_val_44889 === (9))){
var inst_44881 = (state_44888[(2)]);
var state_44888__$1 = (function (){var statearr_44903 = state_44888;
(statearr_44903[(9)] = inst_44881);

return statearr_44903;
})();
var statearr_44904_47344 = state_44888__$1;
(statearr_44904_47344[(2)] = null);

(statearr_44904_47344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44889 === (5))){
var inst_44870 = cljs.core.async.close_BANG_(jobs);
var state_44888__$1 = state_44888;
var statearr_44905_47346 = state_44888__$1;
(statearr_44905_47346[(2)] = inst_44870);

(statearr_44905_47346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44889 === (8))){
var inst_44872 = (state_44888[(8)]);
var inst_44879 = (state_44888[(2)]);
var state_44888__$1 = (function (){var statearr_44906 = state_44888;
(statearr_44906[(10)] = inst_44879);

return statearr_44906;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44888__$1,(9),results,inst_44872);
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
});})(c__44468__auto___47334,jobs,results,process,async))
;
return ((function (switch__43975__auto__,c__44468__auto___47334,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____0 = (function (){
var statearr_44907 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44907[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__);

(statearr_44907[(1)] = (1));

return statearr_44907;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____1 = (function (state_44888){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_44888);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e44909){if((e44909 instanceof Object)){
var ex__43979__auto__ = e44909;
var statearr_44910_47353 = state_44888;
(statearr_44910_47353[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44909;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47355 = state_44888;
state_44888 = G__47355;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__ = function(state_44888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____1.call(this,state_44888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto___47334,jobs,results,process,async))
})();
var state__44470__auto__ = (function (){var statearr_44916 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_44916[(6)] = c__44468__auto___47334);

return statearr_44916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto___47334,jobs,results,process,async))
);


var c__44468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto__,jobs,results,process,async){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto__,jobs,results,process,async){
return (function (state_44956){
var state_val_44957 = (state_44956[(1)]);
if((state_val_44957 === (7))){
var inst_44951 = (state_44956[(2)]);
var state_44956__$1 = state_44956;
var statearr_44959_47358 = state_44956__$1;
(statearr_44959_47358[(2)] = inst_44951);

(statearr_44959_47358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (20))){
var state_44956__$1 = state_44956;
var statearr_44964_47359 = state_44956__$1;
(statearr_44964_47359[(2)] = null);

(statearr_44964_47359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (1))){
var state_44956__$1 = state_44956;
var statearr_44965_47362 = state_44956__$1;
(statearr_44965_47362[(2)] = null);

(statearr_44965_47362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (4))){
var inst_44919 = (state_44956[(7)]);
var inst_44919__$1 = (state_44956[(2)]);
var inst_44920 = (inst_44919__$1 == null);
var state_44956__$1 = (function (){var statearr_44966 = state_44956;
(statearr_44966[(7)] = inst_44919__$1);

return statearr_44966;
})();
if(cljs.core.truth_(inst_44920)){
var statearr_44967_47363 = state_44956__$1;
(statearr_44967_47363[(1)] = (5));

} else {
var statearr_44968_47365 = state_44956__$1;
(statearr_44968_47365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (15))){
var inst_44932 = (state_44956[(8)]);
var state_44956__$1 = state_44956;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44956__$1,(18),to,inst_44932);
} else {
if((state_val_44957 === (21))){
var inst_44946 = (state_44956[(2)]);
var state_44956__$1 = state_44956;
var statearr_44969_47368 = state_44956__$1;
(statearr_44969_47368[(2)] = inst_44946);

(statearr_44969_47368[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (13))){
var inst_44948 = (state_44956[(2)]);
var state_44956__$1 = (function (){var statearr_44970 = state_44956;
(statearr_44970[(9)] = inst_44948);

return statearr_44970;
})();
var statearr_44971_47370 = state_44956__$1;
(statearr_44971_47370[(2)] = null);

(statearr_44971_47370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (6))){
var inst_44919 = (state_44956[(7)]);
var state_44956__$1 = state_44956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44956__$1,(11),inst_44919);
} else {
if((state_val_44957 === (17))){
var inst_44941 = (state_44956[(2)]);
var state_44956__$1 = state_44956;
if(cljs.core.truth_(inst_44941)){
var statearr_44972_47371 = state_44956__$1;
(statearr_44972_47371[(1)] = (19));

} else {
var statearr_44973_47373 = state_44956__$1;
(statearr_44973_47373[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (3))){
var inst_44953 = (state_44956[(2)]);
var state_44956__$1 = state_44956;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44956__$1,inst_44953);
} else {
if((state_val_44957 === (12))){
var inst_44929 = (state_44956[(10)]);
var state_44956__$1 = state_44956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44956__$1,(14),inst_44929);
} else {
if((state_val_44957 === (2))){
var state_44956__$1 = state_44956;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44956__$1,(4),results);
} else {
if((state_val_44957 === (19))){
var state_44956__$1 = state_44956;
var statearr_44974_47374 = state_44956__$1;
(statearr_44974_47374[(2)] = null);

(statearr_44974_47374[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (11))){
var inst_44929 = (state_44956[(2)]);
var state_44956__$1 = (function (){var statearr_44976 = state_44956;
(statearr_44976[(10)] = inst_44929);

return statearr_44976;
})();
var statearr_44977_47375 = state_44956__$1;
(statearr_44977_47375[(2)] = null);

(statearr_44977_47375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (9))){
var state_44956__$1 = state_44956;
var statearr_44978_47377 = state_44956__$1;
(statearr_44978_47377[(2)] = null);

(statearr_44978_47377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (5))){
var state_44956__$1 = state_44956;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44979_47378 = state_44956__$1;
(statearr_44979_47378[(1)] = (8));

} else {
var statearr_44980_47379 = state_44956__$1;
(statearr_44980_47379[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (14))){
var inst_44932 = (state_44956[(8)]);
var inst_44934 = (state_44956[(11)]);
var inst_44932__$1 = (state_44956[(2)]);
var inst_44933 = (inst_44932__$1 == null);
var inst_44934__$1 = cljs.core.not(inst_44933);
var state_44956__$1 = (function (){var statearr_44981 = state_44956;
(statearr_44981[(8)] = inst_44932__$1);

(statearr_44981[(11)] = inst_44934__$1);

return statearr_44981;
})();
if(inst_44934__$1){
var statearr_44982_47380 = state_44956__$1;
(statearr_44982_47380[(1)] = (15));

} else {
var statearr_44983_47381 = state_44956__$1;
(statearr_44983_47381[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (16))){
var inst_44934 = (state_44956[(11)]);
var state_44956__$1 = state_44956;
var statearr_44984_47382 = state_44956__$1;
(statearr_44984_47382[(2)] = inst_44934);

(statearr_44984_47382[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (10))){
var inst_44926 = (state_44956[(2)]);
var state_44956__$1 = state_44956;
var statearr_44985_47383 = state_44956__$1;
(statearr_44985_47383[(2)] = inst_44926);

(statearr_44985_47383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (18))){
var inst_44938 = (state_44956[(2)]);
var state_44956__$1 = state_44956;
var statearr_44986_47384 = state_44956__$1;
(statearr_44986_47384[(2)] = inst_44938);

(statearr_44986_47384[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44957 === (8))){
var inst_44923 = cljs.core.async.close_BANG_(to);
var state_44956__$1 = state_44956;
var statearr_44992_47386 = state_44956__$1;
(statearr_44992_47386[(2)] = inst_44923);

(statearr_44992_47386[(1)] = (10));


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
});})(c__44468__auto__,jobs,results,process,async))
;
return ((function (switch__43975__auto__,c__44468__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____0 = (function (){
var statearr_44993 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44993[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__);

(statearr_44993[(1)] = (1));

return statearr_44993;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____1 = (function (state_44956){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_44956);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e44994){if((e44994 instanceof Object)){
var ex__43979__auto__ = e44994;
var statearr_44995_47391 = state_44956;
(statearr_44995_47391[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_44956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44994;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47392 = state_44956;
state_44956 = G__47392;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__ = function(state_44956){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____1.call(this,state_44956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43976__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto__,jobs,results,process,async))
})();
var state__44470__auto__ = (function (){var statearr_44998 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_44998[(6)] = c__44468__auto__);

return statearr_44998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto__,jobs,results,process,async))
);

return c__44468__auto__;
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
var G__45004 = arguments.length;
switch (G__45004) {
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
var G__45016 = arguments.length;
switch (G__45016) {
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
var G__45024 = arguments.length;
switch (G__45024) {
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
var c__44468__auto___47406 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto___47406,tc,fc){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto___47406,tc,fc){
return (function (state_45053){
var state_val_45054 = (state_45053[(1)]);
if((state_val_45054 === (7))){
var inst_45049 = (state_45053[(2)]);
var state_45053__$1 = state_45053;
var statearr_45055_47408 = state_45053__$1;
(statearr_45055_47408[(2)] = inst_45049);

(statearr_45055_47408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (1))){
var state_45053__$1 = state_45053;
var statearr_45060_47411 = state_45053__$1;
(statearr_45060_47411[(2)] = null);

(statearr_45060_47411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (4))){
var inst_45030 = (state_45053[(7)]);
var inst_45030__$1 = (state_45053[(2)]);
var inst_45031 = (inst_45030__$1 == null);
var state_45053__$1 = (function (){var statearr_45062 = state_45053;
(statearr_45062[(7)] = inst_45030__$1);

return statearr_45062;
})();
if(cljs.core.truth_(inst_45031)){
var statearr_45063_47412 = state_45053__$1;
(statearr_45063_47412[(1)] = (5));

} else {
var statearr_45064_47413 = state_45053__$1;
(statearr_45064_47413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (13))){
var state_45053__$1 = state_45053;
var statearr_45065_47414 = state_45053__$1;
(statearr_45065_47414[(2)] = null);

(statearr_45065_47414[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (6))){
var inst_45030 = (state_45053[(7)]);
var inst_45036 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_45030) : p.call(null,inst_45030));
var state_45053__$1 = state_45053;
if(cljs.core.truth_(inst_45036)){
var statearr_45066_47416 = state_45053__$1;
(statearr_45066_47416[(1)] = (9));

} else {
var statearr_45067_47417 = state_45053__$1;
(statearr_45067_47417[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (3))){
var inst_45051 = (state_45053[(2)]);
var state_45053__$1 = state_45053;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45053__$1,inst_45051);
} else {
if((state_val_45054 === (12))){
var state_45053__$1 = state_45053;
var statearr_45068_47418 = state_45053__$1;
(statearr_45068_47418[(2)] = null);

(statearr_45068_47418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (2))){
var state_45053__$1 = state_45053;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45053__$1,(4),ch);
} else {
if((state_val_45054 === (11))){
var inst_45030 = (state_45053[(7)]);
var inst_45040 = (state_45053[(2)]);
var state_45053__$1 = state_45053;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45053__$1,(8),inst_45040,inst_45030);
} else {
if((state_val_45054 === (9))){
var state_45053__$1 = state_45053;
var statearr_45070_47420 = state_45053__$1;
(statearr_45070_47420[(2)] = tc);

(statearr_45070_47420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (5))){
var inst_45033 = cljs.core.async.close_BANG_(tc);
var inst_45034 = cljs.core.async.close_BANG_(fc);
var state_45053__$1 = (function (){var statearr_45071 = state_45053;
(statearr_45071[(8)] = inst_45033);

return statearr_45071;
})();
var statearr_45075_47422 = state_45053__$1;
(statearr_45075_47422[(2)] = inst_45034);

(statearr_45075_47422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (14))){
var inst_45047 = (state_45053[(2)]);
var state_45053__$1 = state_45053;
var statearr_45078_47426 = state_45053__$1;
(statearr_45078_47426[(2)] = inst_45047);

(statearr_45078_47426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (10))){
var state_45053__$1 = state_45053;
var statearr_45079_47429 = state_45053__$1;
(statearr_45079_47429[(2)] = fc);

(statearr_45079_47429[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45054 === (8))){
var inst_45042 = (state_45053[(2)]);
var state_45053__$1 = state_45053;
if(cljs.core.truth_(inst_45042)){
var statearr_45080_47430 = state_45053__$1;
(statearr_45080_47430[(1)] = (12));

} else {
var statearr_45081_47431 = state_45053__$1;
(statearr_45081_47431[(1)] = (13));

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
});})(c__44468__auto___47406,tc,fc))
;
return ((function (switch__43975__auto__,c__44468__auto___47406,tc,fc){
return (function() {
var cljs$core$async$state_machine__43976__auto__ = null;
var cljs$core$async$state_machine__43976__auto____0 = (function (){
var statearr_45083 = [null,null,null,null,null,null,null,null,null];
(statearr_45083[(0)] = cljs$core$async$state_machine__43976__auto__);

(statearr_45083[(1)] = (1));

return statearr_45083;
});
var cljs$core$async$state_machine__43976__auto____1 = (function (state_45053){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_45053);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e45084){if((e45084 instanceof Object)){
var ex__43979__auto__ = e45084;
var statearr_45087_47439 = state_45053;
(statearr_45087_47439[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45084;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47441 = state_45053;
state_45053 = G__47441;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$state_machine__43976__auto__ = function(state_45053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43976__auto____1.call(this,state_45053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43976__auto____0;
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43976__auto____1;
return cljs$core$async$state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto___47406,tc,fc))
})();
var state__44470__auto__ = (function (){var statearr_45091 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_45091[(6)] = c__44468__auto___47406);

return statearr_45091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto___47406,tc,fc))
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
var c__44468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto__){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto__){
return (function (state_45118){
var state_val_45119 = (state_45118[(1)]);
if((state_val_45119 === (7))){
var inst_45113 = (state_45118[(2)]);
var state_45118__$1 = state_45118;
var statearr_45120_47453 = state_45118__$1;
(statearr_45120_47453[(2)] = inst_45113);

(statearr_45120_47453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45119 === (1))){
var inst_45093 = init;
var state_45118__$1 = (function (){var statearr_45122 = state_45118;
(statearr_45122[(7)] = inst_45093);

return statearr_45122;
})();
var statearr_45123_47459 = state_45118__$1;
(statearr_45123_47459[(2)] = null);

(statearr_45123_47459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45119 === (4))){
var inst_45096 = (state_45118[(8)]);
var inst_45096__$1 = (state_45118[(2)]);
var inst_45097 = (inst_45096__$1 == null);
var state_45118__$1 = (function (){var statearr_45126 = state_45118;
(statearr_45126[(8)] = inst_45096__$1);

return statearr_45126;
})();
if(cljs.core.truth_(inst_45097)){
var statearr_45127_47462 = state_45118__$1;
(statearr_45127_47462[(1)] = (5));

} else {
var statearr_45129_47463 = state_45118__$1;
(statearr_45129_47463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45119 === (6))){
var inst_45093 = (state_45118[(7)]);
var inst_45096 = (state_45118[(8)]);
var inst_45104 = (state_45118[(9)]);
var inst_45104__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_45093,inst_45096) : f.call(null,inst_45093,inst_45096));
var inst_45105 = cljs.core.reduced_QMARK_(inst_45104__$1);
var state_45118__$1 = (function (){var statearr_45134 = state_45118;
(statearr_45134[(9)] = inst_45104__$1);

return statearr_45134;
})();
if(inst_45105){
var statearr_45137_47469 = state_45118__$1;
(statearr_45137_47469[(1)] = (8));

} else {
var statearr_45138_47470 = state_45118__$1;
(statearr_45138_47470[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45119 === (3))){
var inst_45115 = (state_45118[(2)]);
var state_45118__$1 = state_45118;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45118__$1,inst_45115);
} else {
if((state_val_45119 === (2))){
var state_45118__$1 = state_45118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45118__$1,(4),ch);
} else {
if((state_val_45119 === (9))){
var inst_45104 = (state_45118[(9)]);
var inst_45093 = inst_45104;
var state_45118__$1 = (function (){var statearr_45139 = state_45118;
(statearr_45139[(7)] = inst_45093);

return statearr_45139;
})();
var statearr_45140_47475 = state_45118__$1;
(statearr_45140_47475[(2)] = null);

(statearr_45140_47475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45119 === (5))){
var inst_45093 = (state_45118[(7)]);
var state_45118__$1 = state_45118;
var statearr_45141_47479 = state_45118__$1;
(statearr_45141_47479[(2)] = inst_45093);

(statearr_45141_47479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45119 === (10))){
var inst_45111 = (state_45118[(2)]);
var state_45118__$1 = state_45118;
var statearr_45142_47481 = state_45118__$1;
(statearr_45142_47481[(2)] = inst_45111);

(statearr_45142_47481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45119 === (8))){
var inst_45104 = (state_45118[(9)]);
var inst_45107 = cljs.core.deref(inst_45104);
var state_45118__$1 = state_45118;
var statearr_45143_47488 = state_45118__$1;
(statearr_45143_47488[(2)] = inst_45107);

(statearr_45143_47488[(1)] = (10));


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
});})(c__44468__auto__))
;
return ((function (switch__43975__auto__,c__44468__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__43976__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43976__auto____0 = (function (){
var statearr_45144 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45144[(0)] = cljs$core$async$reduce_$_state_machine__43976__auto__);

(statearr_45144[(1)] = (1));

return statearr_45144;
});
var cljs$core$async$reduce_$_state_machine__43976__auto____1 = (function (state_45118){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_45118);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e45148){if((e45148 instanceof Object)){
var ex__43979__auto__ = e45148;
var statearr_45149_47494 = state_45118;
(statearr_45149_47494[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45148;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47498 = state_45118;
state_45118 = G__47498;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43976__auto__ = function(state_45118){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43976__auto____1.call(this,state_45118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43976__auto____0;
cljs$core$async$reduce_$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43976__auto____1;
return cljs$core$async$reduce_$_state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto__))
})();
var state__44470__auto__ = (function (){var statearr_45150 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_45150[(6)] = c__44468__auto__);

return statearr_45150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto__))
);

return c__44468__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__44468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto__,f__$1){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto__,f__$1){
return (function (state_45156){
var state_val_45157 = (state_45156[(1)]);
if((state_val_45157 === (1))){
var inst_45151 = cljs.core.async.reduce(f__$1,init,ch);
var state_45156__$1 = state_45156;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45156__$1,(2),inst_45151);
} else {
if((state_val_45157 === (2))){
var inst_45153 = (state_45156[(2)]);
var inst_45154 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_45153) : f__$1.call(null,inst_45153));
var state_45156__$1 = state_45156;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45156__$1,inst_45154);
} else {
return null;
}
}
});})(c__44468__auto__,f__$1))
;
return ((function (switch__43975__auto__,c__44468__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__43976__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43976__auto____0 = (function (){
var statearr_45165 = [null,null,null,null,null,null,null];
(statearr_45165[(0)] = cljs$core$async$transduce_$_state_machine__43976__auto__);

(statearr_45165[(1)] = (1));

return statearr_45165;
});
var cljs$core$async$transduce_$_state_machine__43976__auto____1 = (function (state_45156){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_45156);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e45166){if((e45166 instanceof Object)){
var ex__43979__auto__ = e45166;
var statearr_45167_47508 = state_45156;
(statearr_45167_47508[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45166;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47510 = state_45156;
state_45156 = G__47510;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43976__auto__ = function(state_45156){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43976__auto____1.call(this,state_45156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43976__auto____0;
cljs$core$async$transduce_$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43976__auto____1;
return cljs$core$async$transduce_$_state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto__,f__$1))
})();
var state__44470__auto__ = (function (){var statearr_45168 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_45168[(6)] = c__44468__auto__);

return statearr_45168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto__,f__$1))
);

return c__44468__auto__;
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
var G__45170 = arguments.length;
switch (G__45170) {
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
var c__44468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto__){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto__){
return (function (state_45200){
var state_val_45201 = (state_45200[(1)]);
if((state_val_45201 === (7))){
var inst_45182 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
var statearr_45203_47513 = state_45200__$1;
(statearr_45203_47513[(2)] = inst_45182);

(statearr_45203_47513[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (1))){
var inst_45172 = cljs.core.seq(coll);
var inst_45173 = inst_45172;
var state_45200__$1 = (function (){var statearr_45204 = state_45200;
(statearr_45204[(7)] = inst_45173);

return statearr_45204;
})();
var statearr_45205_47515 = state_45200__$1;
(statearr_45205_47515[(2)] = null);

(statearr_45205_47515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (4))){
var inst_45173 = (state_45200[(7)]);
var inst_45180 = cljs.core.first(inst_45173);
var state_45200__$1 = state_45200;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45200__$1,(7),ch,inst_45180);
} else {
if((state_val_45201 === (13))){
var inst_45194 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
var statearr_45207_47519 = state_45200__$1;
(statearr_45207_47519[(2)] = inst_45194);

(statearr_45207_47519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (6))){
var inst_45185 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
if(cljs.core.truth_(inst_45185)){
var statearr_45208_47520 = state_45200__$1;
(statearr_45208_47520[(1)] = (8));

} else {
var statearr_45209_47521 = state_45200__$1;
(statearr_45209_47521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (3))){
var inst_45198 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45200__$1,inst_45198);
} else {
if((state_val_45201 === (12))){
var state_45200__$1 = state_45200;
var statearr_45215_47522 = state_45200__$1;
(statearr_45215_47522[(2)] = null);

(statearr_45215_47522[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (2))){
var inst_45173 = (state_45200[(7)]);
var state_45200__$1 = state_45200;
if(cljs.core.truth_(inst_45173)){
var statearr_45216_47523 = state_45200__$1;
(statearr_45216_47523[(1)] = (4));

} else {
var statearr_45217_47524 = state_45200__$1;
(statearr_45217_47524[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (11))){
var inst_45191 = cljs.core.async.close_BANG_(ch);
var state_45200__$1 = state_45200;
var statearr_45218_47526 = state_45200__$1;
(statearr_45218_47526[(2)] = inst_45191);

(statearr_45218_47526[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (9))){
var state_45200__$1 = state_45200;
if(cljs.core.truth_(close_QMARK_)){
var statearr_45219_47527 = state_45200__$1;
(statearr_45219_47527[(1)] = (11));

} else {
var statearr_45220_47528 = state_45200__$1;
(statearr_45220_47528[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (5))){
var inst_45173 = (state_45200[(7)]);
var state_45200__$1 = state_45200;
var statearr_45221_47529 = state_45200__$1;
(statearr_45221_47529[(2)] = inst_45173);

(statearr_45221_47529[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (10))){
var inst_45196 = (state_45200[(2)]);
var state_45200__$1 = state_45200;
var statearr_45222_47530 = state_45200__$1;
(statearr_45222_47530[(2)] = inst_45196);

(statearr_45222_47530[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45201 === (8))){
var inst_45173 = (state_45200[(7)]);
var inst_45187 = cljs.core.next(inst_45173);
var inst_45173__$1 = inst_45187;
var state_45200__$1 = (function (){var statearr_45223 = state_45200;
(statearr_45223[(7)] = inst_45173__$1);

return statearr_45223;
})();
var statearr_45224_47532 = state_45200__$1;
(statearr_45224_47532[(2)] = null);

(statearr_45224_47532[(1)] = (2));


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
});})(c__44468__auto__))
;
return ((function (switch__43975__auto__,c__44468__auto__){
return (function() {
var cljs$core$async$state_machine__43976__auto__ = null;
var cljs$core$async$state_machine__43976__auto____0 = (function (){
var statearr_45227 = [null,null,null,null,null,null,null,null];
(statearr_45227[(0)] = cljs$core$async$state_machine__43976__auto__);

(statearr_45227[(1)] = (1));

return statearr_45227;
});
var cljs$core$async$state_machine__43976__auto____1 = (function (state_45200){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_45200);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e45229){if((e45229 instanceof Object)){
var ex__43979__auto__ = e45229;
var statearr_45230_47538 = state_45200;
(statearr_45230_47538[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45229;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47540 = state_45200;
state_45200 = G__47540;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$state_machine__43976__auto__ = function(state_45200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43976__auto____1.call(this,state_45200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43976__auto____0;
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43976__auto____1;
return cljs$core$async$state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto__))
})();
var state__44470__auto__ = (function (){var statearr_45232 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_45232[(6)] = c__44468__auto__);

return statearr_45232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto__))
);

return c__44468__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45256 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45256 = (function (ch,cs,meta45257){
this.ch = ch;
this.cs = cs;
this.meta45257 = meta45257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45258,meta45257__$1){
var self__ = this;
var _45258__$1 = this;
return (new cljs.core.async.t_cljs$core$async45256(self__.ch,self__.cs,meta45257__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async45256.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45258){
var self__ = this;
var _45258__$1 = this;
return self__.meta45257;
});})(cs))
;

cljs.core.async.t_cljs$core$async45256.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45256.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async45256.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45256.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45256.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45256.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async45256.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta45257","meta45257",-78046512,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async45256.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45256";

cljs.core.async.t_cljs$core$async45256.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async45256");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45256.
 */
cljs.core.async.__GT_t_cljs$core$async45256 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async45256(ch__$1,cs__$1,meta45257){
return (new cljs.core.async.t_cljs$core$async45256(ch__$1,cs__$1,meta45257));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async45256(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__44468__auto___47576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto___47576,cs,m,dchan,dctr,done){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto___47576,cs,m,dchan,dctr,done){
return (function (state_45405){
var state_val_45406 = (state_45405[(1)]);
if((state_val_45406 === (7))){
var inst_45400 = (state_45405[(2)]);
var state_45405__$1 = state_45405;
var statearr_45408_47583 = state_45405__$1;
(statearr_45408_47583[(2)] = inst_45400);

(statearr_45408_47583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (20))){
var inst_45303 = (state_45405[(7)]);
var inst_45315 = cljs.core.first(inst_45303);
var inst_45316 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45315,(0),null);
var inst_45317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45315,(1),null);
var state_45405__$1 = (function (){var statearr_45409 = state_45405;
(statearr_45409[(8)] = inst_45316);

return statearr_45409;
})();
if(cljs.core.truth_(inst_45317)){
var statearr_45410_47586 = state_45405__$1;
(statearr_45410_47586[(1)] = (22));

} else {
var statearr_45412_47587 = state_45405__$1;
(statearr_45412_47587[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (27))){
var inst_45352 = (state_45405[(9)]);
var inst_45270 = (state_45405[(10)]);
var inst_45347 = (state_45405[(11)]);
var inst_45345 = (state_45405[(12)]);
var inst_45352__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45345,inst_45347);
var inst_45353 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45352__$1,inst_45270,done);
var state_45405__$1 = (function (){var statearr_45414 = state_45405;
(statearr_45414[(9)] = inst_45352__$1);

return statearr_45414;
})();
if(cljs.core.truth_(inst_45353)){
var statearr_45415_47593 = state_45405__$1;
(statearr_45415_47593[(1)] = (30));

} else {
var statearr_45416_47594 = state_45405__$1;
(statearr_45416_47594[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (1))){
var state_45405__$1 = state_45405;
var statearr_45417_47596 = state_45405__$1;
(statearr_45417_47596[(2)] = null);

(statearr_45417_47596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (24))){
var inst_45303 = (state_45405[(7)]);
var inst_45322 = (state_45405[(2)]);
var inst_45323 = cljs.core.next(inst_45303);
var inst_45281 = inst_45323;
var inst_45282 = null;
var inst_45283 = (0);
var inst_45284 = (0);
var state_45405__$1 = (function (){var statearr_45418 = state_45405;
(statearr_45418[(13)] = inst_45322);

(statearr_45418[(14)] = inst_45282);

(statearr_45418[(15)] = inst_45283);

(statearr_45418[(16)] = inst_45284);

(statearr_45418[(17)] = inst_45281);

return statearr_45418;
})();
var statearr_45419_47598 = state_45405__$1;
(statearr_45419_47598[(2)] = null);

(statearr_45419_47598[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (39))){
var state_45405__$1 = state_45405;
var statearr_45423_47600 = state_45405__$1;
(statearr_45423_47600[(2)] = null);

(statearr_45423_47600[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (4))){
var inst_45270 = (state_45405[(10)]);
var inst_45270__$1 = (state_45405[(2)]);
var inst_45272 = (inst_45270__$1 == null);
var state_45405__$1 = (function (){var statearr_45424 = state_45405;
(statearr_45424[(10)] = inst_45270__$1);

return statearr_45424;
})();
if(cljs.core.truth_(inst_45272)){
var statearr_45425_47604 = state_45405__$1;
(statearr_45425_47604[(1)] = (5));

} else {
var statearr_45426_47606 = state_45405__$1;
(statearr_45426_47606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (15))){
var inst_45282 = (state_45405[(14)]);
var inst_45283 = (state_45405[(15)]);
var inst_45284 = (state_45405[(16)]);
var inst_45281 = (state_45405[(17)]);
var inst_45299 = (state_45405[(2)]);
var inst_45300 = (inst_45284 + (1));
var tmp45420 = inst_45282;
var tmp45421 = inst_45283;
var tmp45422 = inst_45281;
var inst_45281__$1 = tmp45422;
var inst_45282__$1 = tmp45420;
var inst_45283__$1 = tmp45421;
var inst_45284__$1 = inst_45300;
var state_45405__$1 = (function (){var statearr_45428 = state_45405;
(statearr_45428[(18)] = inst_45299);

(statearr_45428[(14)] = inst_45282__$1);

(statearr_45428[(15)] = inst_45283__$1);

(statearr_45428[(16)] = inst_45284__$1);

(statearr_45428[(17)] = inst_45281__$1);

return statearr_45428;
})();
var statearr_45429_47611 = state_45405__$1;
(statearr_45429_47611[(2)] = null);

(statearr_45429_47611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (21))){
var inst_45326 = (state_45405[(2)]);
var state_45405__$1 = state_45405;
var statearr_45433_47614 = state_45405__$1;
(statearr_45433_47614[(2)] = inst_45326);

(statearr_45433_47614[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (31))){
var inst_45352 = (state_45405[(9)]);
var inst_45356 = done(null);
var inst_45357 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45352);
var state_45405__$1 = (function (){var statearr_45434 = state_45405;
(statearr_45434[(19)] = inst_45356);

return statearr_45434;
})();
var statearr_45439_47620 = state_45405__$1;
(statearr_45439_47620[(2)] = inst_45357);

(statearr_45439_47620[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (32))){
var inst_45347 = (state_45405[(11)]);
var inst_45345 = (state_45405[(12)]);
var inst_45344 = (state_45405[(20)]);
var inst_45346 = (state_45405[(21)]);
var inst_45359 = (state_45405[(2)]);
var inst_45360 = (inst_45347 + (1));
var tmp45430 = inst_45345;
var tmp45431 = inst_45344;
var tmp45432 = inst_45346;
var inst_45344__$1 = tmp45431;
var inst_45345__$1 = tmp45430;
var inst_45346__$1 = tmp45432;
var inst_45347__$1 = inst_45360;
var state_45405__$1 = (function (){var statearr_45447 = state_45405;
(statearr_45447[(22)] = inst_45359);

(statearr_45447[(11)] = inst_45347__$1);

(statearr_45447[(12)] = inst_45345__$1);

(statearr_45447[(20)] = inst_45344__$1);

(statearr_45447[(21)] = inst_45346__$1);

return statearr_45447;
})();
var statearr_45455_47629 = state_45405__$1;
(statearr_45455_47629[(2)] = null);

(statearr_45455_47629[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (40))){
var inst_45372 = (state_45405[(23)]);
var inst_45376 = done(null);
var inst_45377 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_45372);
var state_45405__$1 = (function (){var statearr_45461 = state_45405;
(statearr_45461[(24)] = inst_45376);

return statearr_45461;
})();
var statearr_45462_47632 = state_45405__$1;
(statearr_45462_47632[(2)] = inst_45377);

(statearr_45462_47632[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (33))){
var inst_45363 = (state_45405[(25)]);
var inst_45365 = cljs.core.chunked_seq_QMARK_(inst_45363);
var state_45405__$1 = state_45405;
if(inst_45365){
var statearr_45468_47634 = state_45405__$1;
(statearr_45468_47634[(1)] = (36));

} else {
var statearr_45469_47635 = state_45405__$1;
(statearr_45469_47635[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (13))){
var inst_45293 = (state_45405[(26)]);
var inst_45296 = cljs.core.async.close_BANG_(inst_45293);
var state_45405__$1 = state_45405;
var statearr_45475_47636 = state_45405__$1;
(statearr_45475_47636[(2)] = inst_45296);

(statearr_45475_47636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (22))){
var inst_45316 = (state_45405[(8)]);
var inst_45319 = cljs.core.async.close_BANG_(inst_45316);
var state_45405__$1 = state_45405;
var statearr_45480_47642 = state_45405__$1;
(statearr_45480_47642[(2)] = inst_45319);

(statearr_45480_47642[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (36))){
var inst_45363 = (state_45405[(25)]);
var inst_45367 = cljs.core.chunk_first(inst_45363);
var inst_45368 = cljs.core.chunk_rest(inst_45363);
var inst_45369 = cljs.core.count(inst_45367);
var inst_45344 = inst_45368;
var inst_45345 = inst_45367;
var inst_45346 = inst_45369;
var inst_45347 = (0);
var state_45405__$1 = (function (){var statearr_45481 = state_45405;
(statearr_45481[(11)] = inst_45347);

(statearr_45481[(12)] = inst_45345);

(statearr_45481[(20)] = inst_45344);

(statearr_45481[(21)] = inst_45346);

return statearr_45481;
})();
var statearr_45482_47645 = state_45405__$1;
(statearr_45482_47645[(2)] = null);

(statearr_45482_47645[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (41))){
var inst_45363 = (state_45405[(25)]);
var inst_45379 = (state_45405[(2)]);
var inst_45380 = cljs.core.next(inst_45363);
var inst_45344 = inst_45380;
var inst_45345 = null;
var inst_45346 = (0);
var inst_45347 = (0);
var state_45405__$1 = (function (){var statearr_45483 = state_45405;
(statearr_45483[(11)] = inst_45347);

(statearr_45483[(12)] = inst_45345);

(statearr_45483[(27)] = inst_45379);

(statearr_45483[(20)] = inst_45344);

(statearr_45483[(21)] = inst_45346);

return statearr_45483;
})();
var statearr_45484_47649 = state_45405__$1;
(statearr_45484_47649[(2)] = null);

(statearr_45484_47649[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (43))){
var state_45405__$1 = state_45405;
var statearr_45486_47651 = state_45405__$1;
(statearr_45486_47651[(2)] = null);

(statearr_45486_47651[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (29))){
var inst_45388 = (state_45405[(2)]);
var state_45405__$1 = state_45405;
var statearr_45487_47652 = state_45405__$1;
(statearr_45487_47652[(2)] = inst_45388);

(statearr_45487_47652[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (44))){
var inst_45397 = (state_45405[(2)]);
var state_45405__$1 = (function (){var statearr_45488 = state_45405;
(statearr_45488[(28)] = inst_45397);

return statearr_45488;
})();
var statearr_45489_47653 = state_45405__$1;
(statearr_45489_47653[(2)] = null);

(statearr_45489_47653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (6))){
var inst_45336 = (state_45405[(29)]);
var inst_45335 = cljs.core.deref(cs);
var inst_45336__$1 = cljs.core.keys(inst_45335);
var inst_45337 = cljs.core.count(inst_45336__$1);
var inst_45338 = cljs.core.reset_BANG_(dctr,inst_45337);
var inst_45343 = cljs.core.seq(inst_45336__$1);
var inst_45344 = inst_45343;
var inst_45345 = null;
var inst_45346 = (0);
var inst_45347 = (0);
var state_45405__$1 = (function (){var statearr_45493 = state_45405;
(statearr_45493[(29)] = inst_45336__$1);

(statearr_45493[(30)] = inst_45338);

(statearr_45493[(11)] = inst_45347);

(statearr_45493[(12)] = inst_45345);

(statearr_45493[(20)] = inst_45344);

(statearr_45493[(21)] = inst_45346);

return statearr_45493;
})();
var statearr_45498_47661 = state_45405__$1;
(statearr_45498_47661[(2)] = null);

(statearr_45498_47661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (28))){
var inst_45363 = (state_45405[(25)]);
var inst_45344 = (state_45405[(20)]);
var inst_45363__$1 = cljs.core.seq(inst_45344);
var state_45405__$1 = (function (){var statearr_45504 = state_45405;
(statearr_45504[(25)] = inst_45363__$1);

return statearr_45504;
})();
if(inst_45363__$1){
var statearr_45507_47663 = state_45405__$1;
(statearr_45507_47663[(1)] = (33));

} else {
var statearr_45509_47664 = state_45405__$1;
(statearr_45509_47664[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (25))){
var inst_45347 = (state_45405[(11)]);
var inst_45346 = (state_45405[(21)]);
var inst_45349 = (inst_45347 < inst_45346);
var inst_45350 = inst_45349;
var state_45405__$1 = state_45405;
if(cljs.core.truth_(inst_45350)){
var statearr_45519_47668 = state_45405__$1;
(statearr_45519_47668[(1)] = (27));

} else {
var statearr_45520_47669 = state_45405__$1;
(statearr_45520_47669[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (34))){
var state_45405__$1 = state_45405;
var statearr_45521_47670 = state_45405__$1;
(statearr_45521_47670[(2)] = null);

(statearr_45521_47670[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (17))){
var state_45405__$1 = state_45405;
var statearr_45523_47671 = state_45405__$1;
(statearr_45523_47671[(2)] = null);

(statearr_45523_47671[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (3))){
var inst_45402 = (state_45405[(2)]);
var state_45405__$1 = state_45405;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45405__$1,inst_45402);
} else {
if((state_val_45406 === (12))){
var inst_45331 = (state_45405[(2)]);
var state_45405__$1 = state_45405;
var statearr_45525_47673 = state_45405__$1;
(statearr_45525_47673[(2)] = inst_45331);

(statearr_45525_47673[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (2))){
var state_45405__$1 = state_45405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45405__$1,(4),ch);
} else {
if((state_val_45406 === (23))){
var state_45405__$1 = state_45405;
var statearr_45526_47674 = state_45405__$1;
(statearr_45526_47674[(2)] = null);

(statearr_45526_47674[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (35))){
var inst_45386 = (state_45405[(2)]);
var state_45405__$1 = state_45405;
var statearr_45527_47676 = state_45405__$1;
(statearr_45527_47676[(2)] = inst_45386);

(statearr_45527_47676[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (19))){
var inst_45303 = (state_45405[(7)]);
var inst_45307 = cljs.core.chunk_first(inst_45303);
var inst_45308 = cljs.core.chunk_rest(inst_45303);
var inst_45309 = cljs.core.count(inst_45307);
var inst_45281 = inst_45308;
var inst_45282 = inst_45307;
var inst_45283 = inst_45309;
var inst_45284 = (0);
var state_45405__$1 = (function (){var statearr_45528 = state_45405;
(statearr_45528[(14)] = inst_45282);

(statearr_45528[(15)] = inst_45283);

(statearr_45528[(16)] = inst_45284);

(statearr_45528[(17)] = inst_45281);

return statearr_45528;
})();
var statearr_45530_47681 = state_45405__$1;
(statearr_45530_47681[(2)] = null);

(statearr_45530_47681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (11))){
var inst_45303 = (state_45405[(7)]);
var inst_45281 = (state_45405[(17)]);
var inst_45303__$1 = cljs.core.seq(inst_45281);
var state_45405__$1 = (function (){var statearr_45531 = state_45405;
(statearr_45531[(7)] = inst_45303__$1);

return statearr_45531;
})();
if(inst_45303__$1){
var statearr_45532_47683 = state_45405__$1;
(statearr_45532_47683[(1)] = (16));

} else {
var statearr_45533_47684 = state_45405__$1;
(statearr_45533_47684[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (9))){
var inst_45333 = (state_45405[(2)]);
var state_45405__$1 = state_45405;
var statearr_45534_47687 = state_45405__$1;
(statearr_45534_47687[(2)] = inst_45333);

(statearr_45534_47687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (5))){
var inst_45279 = cljs.core.deref(cs);
var inst_45280 = cljs.core.seq(inst_45279);
var inst_45281 = inst_45280;
var inst_45282 = null;
var inst_45283 = (0);
var inst_45284 = (0);
var state_45405__$1 = (function (){var statearr_45539 = state_45405;
(statearr_45539[(14)] = inst_45282);

(statearr_45539[(15)] = inst_45283);

(statearr_45539[(16)] = inst_45284);

(statearr_45539[(17)] = inst_45281);

return statearr_45539;
})();
var statearr_45541_47689 = state_45405__$1;
(statearr_45541_47689[(2)] = null);

(statearr_45541_47689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (14))){
var state_45405__$1 = state_45405;
var statearr_45542_47690 = state_45405__$1;
(statearr_45542_47690[(2)] = null);

(statearr_45542_47690[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (45))){
var inst_45394 = (state_45405[(2)]);
var state_45405__$1 = state_45405;
var statearr_45543_47691 = state_45405__$1;
(statearr_45543_47691[(2)] = inst_45394);

(statearr_45543_47691[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (26))){
var inst_45336 = (state_45405[(29)]);
var inst_45390 = (state_45405[(2)]);
var inst_45391 = cljs.core.seq(inst_45336);
var state_45405__$1 = (function (){var statearr_45545 = state_45405;
(statearr_45545[(31)] = inst_45390);

return statearr_45545;
})();
if(inst_45391){
var statearr_45546_47693 = state_45405__$1;
(statearr_45546_47693[(1)] = (42));

} else {
var statearr_45547_47694 = state_45405__$1;
(statearr_45547_47694[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (16))){
var inst_45303 = (state_45405[(7)]);
var inst_45305 = cljs.core.chunked_seq_QMARK_(inst_45303);
var state_45405__$1 = state_45405;
if(inst_45305){
var statearr_45548_47695 = state_45405__$1;
(statearr_45548_47695[(1)] = (19));

} else {
var statearr_45552_47696 = state_45405__$1;
(statearr_45552_47696[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (38))){
var inst_45383 = (state_45405[(2)]);
var state_45405__$1 = state_45405;
var statearr_45555_47699 = state_45405__$1;
(statearr_45555_47699[(2)] = inst_45383);

(statearr_45555_47699[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (30))){
var state_45405__$1 = state_45405;
var statearr_45557_47700 = state_45405__$1;
(statearr_45557_47700[(2)] = null);

(statearr_45557_47700[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (10))){
var inst_45282 = (state_45405[(14)]);
var inst_45284 = (state_45405[(16)]);
var inst_45292 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45282,inst_45284);
var inst_45293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45292,(0),null);
var inst_45294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45292,(1),null);
var state_45405__$1 = (function (){var statearr_45558 = state_45405;
(statearr_45558[(26)] = inst_45293);

return statearr_45558;
})();
if(cljs.core.truth_(inst_45294)){
var statearr_45559_47702 = state_45405__$1;
(statearr_45559_47702[(1)] = (13));

} else {
var statearr_45560_47703 = state_45405__$1;
(statearr_45560_47703[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (18))){
var inst_45329 = (state_45405[(2)]);
var state_45405__$1 = state_45405;
var statearr_45562_47705 = state_45405__$1;
(statearr_45562_47705[(2)] = inst_45329);

(statearr_45562_47705[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (42))){
var state_45405__$1 = state_45405;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45405__$1,(45),dchan);
} else {
if((state_val_45406 === (37))){
var inst_45363 = (state_45405[(25)]);
var inst_45372 = (state_45405[(23)]);
var inst_45270 = (state_45405[(10)]);
var inst_45372__$1 = cljs.core.first(inst_45363);
var inst_45373 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_45372__$1,inst_45270,done);
var state_45405__$1 = (function (){var statearr_45565 = state_45405;
(statearr_45565[(23)] = inst_45372__$1);

return statearr_45565;
})();
if(cljs.core.truth_(inst_45373)){
var statearr_45567_47709 = state_45405__$1;
(statearr_45567_47709[(1)] = (39));

} else {
var statearr_45568_47710 = state_45405__$1;
(statearr_45568_47710[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45406 === (8))){
var inst_45283 = (state_45405[(15)]);
var inst_45284 = (state_45405[(16)]);
var inst_45286 = (inst_45284 < inst_45283);
var inst_45287 = inst_45286;
var state_45405__$1 = state_45405;
if(cljs.core.truth_(inst_45287)){
var statearr_45570_47711 = state_45405__$1;
(statearr_45570_47711[(1)] = (10));

} else {
var statearr_45572_47712 = state_45405__$1;
(statearr_45572_47712[(1)] = (11));

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
});})(c__44468__auto___47576,cs,m,dchan,dctr,done))
;
return ((function (switch__43975__auto__,c__44468__auto___47576,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__43976__auto__ = null;
var cljs$core$async$mult_$_state_machine__43976__auto____0 = (function (){
var statearr_45579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45579[(0)] = cljs$core$async$mult_$_state_machine__43976__auto__);

(statearr_45579[(1)] = (1));

return statearr_45579;
});
var cljs$core$async$mult_$_state_machine__43976__auto____1 = (function (state_45405){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_45405);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e45587){if((e45587 instanceof Object)){
var ex__43979__auto__ = e45587;
var statearr_45589_47713 = state_45405;
(statearr_45589_47713[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45587;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47714 = state_45405;
state_45405 = G__47714;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43976__auto__ = function(state_45405){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43976__auto____1.call(this,state_45405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43976__auto____0;
cljs$core$async$mult_$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43976__auto____1;
return cljs$core$async$mult_$_state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto___47576,cs,m,dchan,dctr,done))
})();
var state__44470__auto__ = (function (){var statearr_45593 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_45593[(6)] = c__44468__auto___47576);

return statearr_45593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto___47576,cs,m,dchan,dctr,done))
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
var G__45595 = arguments.length;
switch (G__45595) {
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
var len__4730__auto___47726 = arguments.length;
var i__4731__auto___47727 = (0);
while(true){
if((i__4731__auto___47727 < len__4730__auto___47726)){
args__4736__auto__.push((arguments[i__4731__auto___47727]));

var G__47728 = (i__4731__auto___47727 + (1));
i__4731__auto___47727 = G__47728;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45630){
var map__45631 = p__45630;
var map__45631__$1 = (((((!((map__45631 == null))))?(((((map__45631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45631):map__45631);
var opts = map__45631__$1;
var statearr_45634_47734 = state;
(statearr_45634_47734[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__45631,map__45631__$1,opts){
return (function (val){
var statearr_45638_47735 = state;
(statearr_45638_47735[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__45631,map__45631__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_45639_47737 = state;
(statearr_45639_47737[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45625){
var G__45626 = cljs.core.first(seq45625);
var seq45625__$1 = cljs.core.next(seq45625);
var G__45627 = cljs.core.first(seq45625__$1);
var seq45625__$2 = cljs.core.next(seq45625__$1);
var G__45628 = cljs.core.first(seq45625__$2);
var seq45625__$3 = cljs.core.next(seq45625__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45626,G__45627,G__45628,seq45625__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45664 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45665){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45665 = meta45665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45666,meta45665__$1){
var self__ = this;
var _45666__$1 = this;
return (new cljs.core.async.t_cljs$core$async45664(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45665__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45666){
var self__ = this;
var _45666__$1 = this;
return self__.meta45665;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45664.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45664.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45664.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45664.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45664.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45664.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45664.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45664.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async45664.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45665","meta45665",1963335522,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45664.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45664";

cljs.core.async.t_cljs$core$async45664.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async45664");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45664.
 */
cljs.core.async.__GT_t_cljs$core$async45664 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async45664(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45665){
return (new cljs.core.async.t_cljs$core$async45664(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45665));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async45664(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44468__auto___47770 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto___47770,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto___47770,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_45807){
var state_val_45808 = (state_45807[(1)]);
if((state_val_45808 === (7))){
var inst_45716 = (state_45807[(2)]);
var state_45807__$1 = state_45807;
var statearr_45812_47775 = state_45807__$1;
(statearr_45812_47775[(2)] = inst_45716);

(statearr_45812_47775[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (20))){
var inst_45729 = (state_45807[(7)]);
var state_45807__$1 = state_45807;
var statearr_45814_47776 = state_45807__$1;
(statearr_45814_47776[(2)] = inst_45729);

(statearr_45814_47776[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (27))){
var state_45807__$1 = state_45807;
var statearr_45815_47777 = state_45807__$1;
(statearr_45815_47777[(2)] = null);

(statearr_45815_47777[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (1))){
var inst_45703 = (state_45807[(8)]);
var inst_45703__$1 = calc_state();
var inst_45705 = (inst_45703__$1 == null);
var inst_45706 = cljs.core.not(inst_45705);
var state_45807__$1 = (function (){var statearr_45816 = state_45807;
(statearr_45816[(8)] = inst_45703__$1);

return statearr_45816;
})();
if(inst_45706){
var statearr_45817_47782 = state_45807__$1;
(statearr_45817_47782[(1)] = (2));

} else {
var statearr_45818_47783 = state_45807__$1;
(statearr_45818_47783[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (24))){
var inst_45763 = (state_45807[(9)]);
var inst_45780 = (state_45807[(10)]);
var inst_45754 = (state_45807[(11)]);
var inst_45780__$1 = (inst_45754.cljs$core$IFn$_invoke$arity$1 ? inst_45754.cljs$core$IFn$_invoke$arity$1(inst_45763) : inst_45754.call(null,inst_45763));
var state_45807__$1 = (function (){var statearr_45820 = state_45807;
(statearr_45820[(10)] = inst_45780__$1);

return statearr_45820;
})();
if(cljs.core.truth_(inst_45780__$1)){
var statearr_45823_47785 = state_45807__$1;
(statearr_45823_47785[(1)] = (29));

} else {
var statearr_45824_47786 = state_45807__$1;
(statearr_45824_47786[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (4))){
var inst_45719 = (state_45807[(2)]);
var state_45807__$1 = state_45807;
if(cljs.core.truth_(inst_45719)){
var statearr_45825_47790 = state_45807__$1;
(statearr_45825_47790[(1)] = (8));

} else {
var statearr_45826_47791 = state_45807__$1;
(statearr_45826_47791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (15))){
var inst_45748 = (state_45807[(2)]);
var state_45807__$1 = state_45807;
if(cljs.core.truth_(inst_45748)){
var statearr_45827_47792 = state_45807__$1;
(statearr_45827_47792[(1)] = (19));

} else {
var statearr_45828_47793 = state_45807__$1;
(statearr_45828_47793[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (21))){
var inst_45753 = (state_45807[(12)]);
var inst_45753__$1 = (state_45807[(2)]);
var inst_45754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45753__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45753__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45753__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45807__$1 = (function (){var statearr_45829 = state_45807;
(statearr_45829[(13)] = inst_45755);

(statearr_45829[(11)] = inst_45754);

(statearr_45829[(12)] = inst_45753__$1);

return statearr_45829;
})();
return cljs.core.async.ioc_alts_BANG_(state_45807__$1,(22),inst_45756);
} else {
if((state_val_45808 === (31))){
var inst_45788 = (state_45807[(2)]);
var state_45807__$1 = state_45807;
if(cljs.core.truth_(inst_45788)){
var statearr_45830_47798 = state_45807__$1;
(statearr_45830_47798[(1)] = (32));

} else {
var statearr_45831_47799 = state_45807__$1;
(statearr_45831_47799[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (32))){
var inst_45762 = (state_45807[(14)]);
var state_45807__$1 = state_45807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_45807__$1,(35),out,inst_45762);
} else {
if((state_val_45808 === (33))){
var inst_45753 = (state_45807[(12)]);
var inst_45729 = inst_45753;
var state_45807__$1 = (function (){var statearr_45835 = state_45807;
(statearr_45835[(7)] = inst_45729);

return statearr_45835;
})();
var statearr_45836_47805 = state_45807__$1;
(statearr_45836_47805[(2)] = null);

(statearr_45836_47805[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (13))){
var inst_45729 = (state_45807[(7)]);
var inst_45736 = inst_45729.cljs$lang$protocol_mask$partition0$;
var inst_45737 = (inst_45736 & (64));
var inst_45739 = inst_45729.cljs$core$ISeq$;
var inst_45740 = (cljs.core.PROTOCOL_SENTINEL === inst_45739);
var inst_45741 = ((inst_45737) || (inst_45740));
var state_45807__$1 = state_45807;
if(cljs.core.truth_(inst_45741)){
var statearr_45838_47808 = state_45807__$1;
(statearr_45838_47808[(1)] = (16));

} else {
var statearr_45841_47809 = state_45807__$1;
(statearr_45841_47809[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (22))){
var inst_45762 = (state_45807[(14)]);
var inst_45763 = (state_45807[(9)]);
var inst_45761 = (state_45807[(2)]);
var inst_45762__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45761,(0),null);
var inst_45763__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_45761,(1),null);
var inst_45764 = (inst_45762__$1 == null);
var inst_45765 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_45763__$1,change);
var inst_45766 = ((inst_45764) || (inst_45765));
var state_45807__$1 = (function (){var statearr_45842 = state_45807;
(statearr_45842[(14)] = inst_45762__$1);

(statearr_45842[(9)] = inst_45763__$1);

return statearr_45842;
})();
if(cljs.core.truth_(inst_45766)){
var statearr_45843_47810 = state_45807__$1;
(statearr_45843_47810[(1)] = (23));

} else {
var statearr_45844_47811 = state_45807__$1;
(statearr_45844_47811[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (36))){
var inst_45753 = (state_45807[(12)]);
var inst_45729 = inst_45753;
var state_45807__$1 = (function (){var statearr_45845 = state_45807;
(statearr_45845[(7)] = inst_45729);

return statearr_45845;
})();
var statearr_45846_47814 = state_45807__$1;
(statearr_45846_47814[(2)] = null);

(statearr_45846_47814[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (29))){
var inst_45780 = (state_45807[(10)]);
var state_45807__$1 = state_45807;
var statearr_45847_47816 = state_45807__$1;
(statearr_45847_47816[(2)] = inst_45780);

(statearr_45847_47816[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (6))){
var state_45807__$1 = state_45807;
var statearr_45848_47817 = state_45807__$1;
(statearr_45848_47817[(2)] = false);

(statearr_45848_47817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (28))){
var inst_45773 = (state_45807[(2)]);
var inst_45774 = calc_state();
var inst_45729 = inst_45774;
var state_45807__$1 = (function (){var statearr_45849 = state_45807;
(statearr_45849[(15)] = inst_45773);

(statearr_45849[(7)] = inst_45729);

return statearr_45849;
})();
var statearr_45850_47820 = state_45807__$1;
(statearr_45850_47820[(2)] = null);

(statearr_45850_47820[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (25))){
var inst_45802 = (state_45807[(2)]);
var state_45807__$1 = state_45807;
var statearr_45851_47823 = state_45807__$1;
(statearr_45851_47823[(2)] = inst_45802);

(statearr_45851_47823[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (34))){
var inst_45800 = (state_45807[(2)]);
var state_45807__$1 = state_45807;
var statearr_45852_47824 = state_45807__$1;
(statearr_45852_47824[(2)] = inst_45800);

(statearr_45852_47824[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (17))){
var state_45807__$1 = state_45807;
var statearr_45854_47825 = state_45807__$1;
(statearr_45854_47825[(2)] = false);

(statearr_45854_47825[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (3))){
var state_45807__$1 = state_45807;
var statearr_45855_47826 = state_45807__$1;
(statearr_45855_47826[(2)] = false);

(statearr_45855_47826[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (12))){
var inst_45805 = (state_45807[(2)]);
var state_45807__$1 = state_45807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_45807__$1,inst_45805);
} else {
if((state_val_45808 === (2))){
var inst_45703 = (state_45807[(8)]);
var inst_45708 = inst_45703.cljs$lang$protocol_mask$partition0$;
var inst_45709 = (inst_45708 & (64));
var inst_45710 = inst_45703.cljs$core$ISeq$;
var inst_45711 = (cljs.core.PROTOCOL_SENTINEL === inst_45710);
var inst_45712 = ((inst_45709) || (inst_45711));
var state_45807__$1 = state_45807;
if(cljs.core.truth_(inst_45712)){
var statearr_45859_47829 = state_45807__$1;
(statearr_45859_47829[(1)] = (5));

} else {
var statearr_45861_47830 = state_45807__$1;
(statearr_45861_47830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (23))){
var inst_45762 = (state_45807[(14)]);
var inst_45768 = (inst_45762 == null);
var state_45807__$1 = state_45807;
if(cljs.core.truth_(inst_45768)){
var statearr_45862_47831 = state_45807__$1;
(statearr_45862_47831[(1)] = (26));

} else {
var statearr_45863_47833 = state_45807__$1;
(statearr_45863_47833[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (35))){
var inst_45791 = (state_45807[(2)]);
var state_45807__$1 = state_45807;
if(cljs.core.truth_(inst_45791)){
var statearr_45865_47835 = state_45807__$1;
(statearr_45865_47835[(1)] = (36));

} else {
var statearr_45866_47837 = state_45807__$1;
(statearr_45866_47837[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (19))){
var inst_45729 = (state_45807[(7)]);
var inst_45750 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45729);
var state_45807__$1 = state_45807;
var statearr_45867_47839 = state_45807__$1;
(statearr_45867_47839[(2)] = inst_45750);

(statearr_45867_47839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (11))){
var inst_45729 = (state_45807[(7)]);
var inst_45733 = (inst_45729 == null);
var inst_45734 = cljs.core.not(inst_45733);
var state_45807__$1 = state_45807;
if(inst_45734){
var statearr_45871_47844 = state_45807__$1;
(statearr_45871_47844[(1)] = (13));

} else {
var statearr_45872_47845 = state_45807__$1;
(statearr_45872_47845[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (9))){
var inst_45703 = (state_45807[(8)]);
var state_45807__$1 = state_45807;
var statearr_45873_47846 = state_45807__$1;
(statearr_45873_47846[(2)] = inst_45703);

(statearr_45873_47846[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (5))){
var state_45807__$1 = state_45807;
var statearr_45876_47847 = state_45807__$1;
(statearr_45876_47847[(2)] = true);

(statearr_45876_47847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (14))){
var state_45807__$1 = state_45807;
var statearr_45877_47848 = state_45807__$1;
(statearr_45877_47848[(2)] = false);

(statearr_45877_47848[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (26))){
var inst_45763 = (state_45807[(9)]);
var inst_45770 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_45763);
var state_45807__$1 = state_45807;
var statearr_45881_47850 = state_45807__$1;
(statearr_45881_47850[(2)] = inst_45770);

(statearr_45881_47850[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (16))){
var state_45807__$1 = state_45807;
var statearr_45882_47855 = state_45807__$1;
(statearr_45882_47855[(2)] = true);

(statearr_45882_47855[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (38))){
var inst_45796 = (state_45807[(2)]);
var state_45807__$1 = state_45807;
var statearr_45883_47857 = state_45807__$1;
(statearr_45883_47857[(2)] = inst_45796);

(statearr_45883_47857[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (30))){
var inst_45763 = (state_45807[(9)]);
var inst_45755 = (state_45807[(13)]);
var inst_45754 = (state_45807[(11)]);
var inst_45783 = cljs.core.empty_QMARK_(inst_45754);
var inst_45784 = (inst_45755.cljs$core$IFn$_invoke$arity$1 ? inst_45755.cljs$core$IFn$_invoke$arity$1(inst_45763) : inst_45755.call(null,inst_45763));
var inst_45785 = cljs.core.not(inst_45784);
var inst_45786 = ((inst_45783) && (inst_45785));
var state_45807__$1 = state_45807;
var statearr_45885_47861 = state_45807__$1;
(statearr_45885_47861[(2)] = inst_45786);

(statearr_45885_47861[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (10))){
var inst_45703 = (state_45807[(8)]);
var inst_45725 = (state_45807[(2)]);
var inst_45726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45725,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45725,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45725,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45729 = inst_45703;
var state_45807__$1 = (function (){var statearr_45886 = state_45807;
(statearr_45886[(16)] = inst_45726);

(statearr_45886[(17)] = inst_45728);

(statearr_45886[(18)] = inst_45727);

(statearr_45886[(7)] = inst_45729);

return statearr_45886;
})();
var statearr_45887_47862 = state_45807__$1;
(statearr_45887_47862[(2)] = null);

(statearr_45887_47862[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (18))){
var inst_45745 = (state_45807[(2)]);
var state_45807__$1 = state_45807;
var statearr_45888_47865 = state_45807__$1;
(statearr_45888_47865[(2)] = inst_45745);

(statearr_45888_47865[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (37))){
var state_45807__$1 = state_45807;
var statearr_45889_47867 = state_45807__$1;
(statearr_45889_47867[(2)] = null);

(statearr_45889_47867[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45808 === (8))){
var inst_45703 = (state_45807[(8)]);
var inst_45721 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_45703);
var state_45807__$1 = state_45807;
var statearr_45890_47868 = state_45807__$1;
(statearr_45890_47868[(2)] = inst_45721);

(statearr_45890_47868[(1)] = (10));


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
});})(c__44468__auto___47770,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__43975__auto__,c__44468__auto___47770,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__43976__auto__ = null;
var cljs$core$async$mix_$_state_machine__43976__auto____0 = (function (){
var statearr_45894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45894[(0)] = cljs$core$async$mix_$_state_machine__43976__auto__);

(statearr_45894[(1)] = (1));

return statearr_45894;
});
var cljs$core$async$mix_$_state_machine__43976__auto____1 = (function (state_45807){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_45807);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e45895){if((e45895 instanceof Object)){
var ex__43979__auto__ = e45895;
var statearr_45896_47882 = state_45807;
(statearr_45896_47882[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45895;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47883 = state_45807;
state_45807 = G__47883;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43976__auto__ = function(state_45807){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43976__auto____1.call(this,state_45807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43976__auto____0;
cljs$core$async$mix_$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43976__auto____1;
return cljs$core$async$mix_$_state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto___47770,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__44470__auto__ = (function (){var statearr_45897 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_45897[(6)] = c__44468__auto___47770);

return statearr_45897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto___47770,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__45908 = arguments.length;
switch (G__45908) {
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
var G__45912 = arguments.length;
switch (G__45912) {
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
return (function (p1__45910_SHARP_){
if(cljs.core.truth_((p1__45910_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__45910_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__45910_SHARP_.call(null,topic)))){
return p1__45910_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__45910_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45914 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45914 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45915){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45915 = meta45915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45916,meta45915__$1){
var self__ = this;
var _45916__$1 = this;
return (new cljs.core.async.t_cljs$core$async45914(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45915__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45916){
var self__ = this;
var _45916__$1 = this;
return self__.meta45915;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45914.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45914.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45914.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45914.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45914.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async45914.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45914.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45914.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45915","meta45915",373829005,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45914.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45914";

cljs.core.async.t_cljs$core$async45914.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async45914");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45914.
 */
cljs.core.async.__GT_t_cljs$core$async45914 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async45914(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45915){
return (new cljs.core.async.t_cljs$core$async45914(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45915));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async45914(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__44468__auto___47952 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto___47952,mults,ensure_mult,p){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto___47952,mults,ensure_mult,p){
return (function (state_46007){
var state_val_46008 = (state_46007[(1)]);
if((state_val_46008 === (7))){
var inst_46003 = (state_46007[(2)]);
var state_46007__$1 = state_46007;
var statearr_46015_47955 = state_46007__$1;
(statearr_46015_47955[(2)] = inst_46003);

(statearr_46015_47955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (20))){
var state_46007__$1 = state_46007;
var statearr_46016_47958 = state_46007__$1;
(statearr_46016_47958[(2)] = null);

(statearr_46016_47958[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (1))){
var state_46007__$1 = state_46007;
var statearr_46018_47961 = state_46007__$1;
(statearr_46018_47961[(2)] = null);

(statearr_46018_47961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (24))){
var inst_45986 = (state_46007[(7)]);
var inst_45995 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_45986);
var state_46007__$1 = state_46007;
var statearr_46021_47963 = state_46007__$1;
(statearr_46021_47963[(2)] = inst_45995);

(statearr_46021_47963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (4))){
var inst_45936 = (state_46007[(8)]);
var inst_45936__$1 = (state_46007[(2)]);
var inst_45937 = (inst_45936__$1 == null);
var state_46007__$1 = (function (){var statearr_46024 = state_46007;
(statearr_46024[(8)] = inst_45936__$1);

return statearr_46024;
})();
if(cljs.core.truth_(inst_45937)){
var statearr_46027_47964 = state_46007__$1;
(statearr_46027_47964[(1)] = (5));

} else {
var statearr_46028_47966 = state_46007__$1;
(statearr_46028_47966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (15))){
var inst_45980 = (state_46007[(2)]);
var state_46007__$1 = state_46007;
var statearr_46033_47971 = state_46007__$1;
(statearr_46033_47971[(2)] = inst_45980);

(statearr_46033_47971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (21))){
var inst_46000 = (state_46007[(2)]);
var state_46007__$1 = (function (){var statearr_46034 = state_46007;
(statearr_46034[(9)] = inst_46000);

return statearr_46034;
})();
var statearr_46035_47976 = state_46007__$1;
(statearr_46035_47976[(2)] = null);

(statearr_46035_47976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (13))){
var inst_45960 = (state_46007[(10)]);
var inst_45962 = cljs.core.chunked_seq_QMARK_(inst_45960);
var state_46007__$1 = state_46007;
if(inst_45962){
var statearr_46036_47979 = state_46007__$1;
(statearr_46036_47979[(1)] = (16));

} else {
var statearr_46037_47980 = state_46007__$1;
(statearr_46037_47980[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (22))){
var inst_45992 = (state_46007[(2)]);
var state_46007__$1 = state_46007;
if(cljs.core.truth_(inst_45992)){
var statearr_46041_47981 = state_46007__$1;
(statearr_46041_47981[(1)] = (23));

} else {
var statearr_46044_47983 = state_46007__$1;
(statearr_46044_47983[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (6))){
var inst_45988 = (state_46007[(11)]);
var inst_45986 = (state_46007[(7)]);
var inst_45936 = (state_46007[(8)]);
var inst_45986__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_45936) : topic_fn.call(null,inst_45936));
var inst_45987 = cljs.core.deref(mults);
var inst_45988__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_45987,inst_45986__$1);
var state_46007__$1 = (function (){var statearr_46053 = state_46007;
(statearr_46053[(11)] = inst_45988__$1);

(statearr_46053[(7)] = inst_45986__$1);

return statearr_46053;
})();
if(cljs.core.truth_(inst_45988__$1)){
var statearr_46054_47988 = state_46007__$1;
(statearr_46054_47988[(1)] = (19));

} else {
var statearr_46055_47990 = state_46007__$1;
(statearr_46055_47990[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (25))){
var inst_45997 = (state_46007[(2)]);
var state_46007__$1 = state_46007;
var statearr_46060_47999 = state_46007__$1;
(statearr_46060_47999[(2)] = inst_45997);

(statearr_46060_47999[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (17))){
var inst_45960 = (state_46007[(10)]);
var inst_45970 = cljs.core.first(inst_45960);
var inst_45971 = cljs.core.async.muxch_STAR_(inst_45970);
var inst_45972 = cljs.core.async.close_BANG_(inst_45971);
var inst_45974 = cljs.core.next(inst_45960);
var inst_45946 = inst_45974;
var inst_45947 = null;
var inst_45948 = (0);
var inst_45949 = (0);
var state_46007__$1 = (function (){var statearr_46061 = state_46007;
(statearr_46061[(12)] = inst_45947);

(statearr_46061[(13)] = inst_45946);

(statearr_46061[(14)] = inst_45948);

(statearr_46061[(15)] = inst_45972);

(statearr_46061[(16)] = inst_45949);

return statearr_46061;
})();
var statearr_46063_48002 = state_46007__$1;
(statearr_46063_48002[(2)] = null);

(statearr_46063_48002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (3))){
var inst_46005 = (state_46007[(2)]);
var state_46007__$1 = state_46007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46007__$1,inst_46005);
} else {
if((state_val_46008 === (12))){
var inst_45982 = (state_46007[(2)]);
var state_46007__$1 = state_46007;
var statearr_46068_48004 = state_46007__$1;
(statearr_46068_48004[(2)] = inst_45982);

(statearr_46068_48004[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (2))){
var state_46007__$1 = state_46007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46007__$1,(4),ch);
} else {
if((state_val_46008 === (23))){
var state_46007__$1 = state_46007;
var statearr_46069_48008 = state_46007__$1;
(statearr_46069_48008[(2)] = null);

(statearr_46069_48008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (19))){
var inst_45988 = (state_46007[(11)]);
var inst_45936 = (state_46007[(8)]);
var inst_45990 = cljs.core.async.muxch_STAR_(inst_45988);
var state_46007__$1 = state_46007;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46007__$1,(22),inst_45990,inst_45936);
} else {
if((state_val_46008 === (11))){
var inst_45960 = (state_46007[(10)]);
var inst_45946 = (state_46007[(13)]);
var inst_45960__$1 = cljs.core.seq(inst_45946);
var state_46007__$1 = (function (){var statearr_46073 = state_46007;
(statearr_46073[(10)] = inst_45960__$1);

return statearr_46073;
})();
if(inst_45960__$1){
var statearr_46074_48014 = state_46007__$1;
(statearr_46074_48014[(1)] = (13));

} else {
var statearr_46075_48015 = state_46007__$1;
(statearr_46075_48015[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (9))){
var inst_45984 = (state_46007[(2)]);
var state_46007__$1 = state_46007;
var statearr_46080_48017 = state_46007__$1;
(statearr_46080_48017[(2)] = inst_45984);

(statearr_46080_48017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (5))){
var inst_45943 = cljs.core.deref(mults);
var inst_45944 = cljs.core.vals(inst_45943);
var inst_45945 = cljs.core.seq(inst_45944);
var inst_45946 = inst_45945;
var inst_45947 = null;
var inst_45948 = (0);
var inst_45949 = (0);
var state_46007__$1 = (function (){var statearr_46081 = state_46007;
(statearr_46081[(12)] = inst_45947);

(statearr_46081[(13)] = inst_45946);

(statearr_46081[(14)] = inst_45948);

(statearr_46081[(16)] = inst_45949);

return statearr_46081;
})();
var statearr_46086_48020 = state_46007__$1;
(statearr_46086_48020[(2)] = null);

(statearr_46086_48020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (14))){
var state_46007__$1 = state_46007;
var statearr_46090_48021 = state_46007__$1;
(statearr_46090_48021[(2)] = null);

(statearr_46090_48021[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (16))){
var inst_45960 = (state_46007[(10)]);
var inst_45964 = cljs.core.chunk_first(inst_45960);
var inst_45965 = cljs.core.chunk_rest(inst_45960);
var inst_45966 = cljs.core.count(inst_45964);
var inst_45946 = inst_45965;
var inst_45947 = inst_45964;
var inst_45948 = inst_45966;
var inst_45949 = (0);
var state_46007__$1 = (function (){var statearr_46094 = state_46007;
(statearr_46094[(12)] = inst_45947);

(statearr_46094[(13)] = inst_45946);

(statearr_46094[(14)] = inst_45948);

(statearr_46094[(16)] = inst_45949);

return statearr_46094;
})();
var statearr_46095_48025 = state_46007__$1;
(statearr_46095_48025[(2)] = null);

(statearr_46095_48025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (10))){
var inst_45947 = (state_46007[(12)]);
var inst_45946 = (state_46007[(13)]);
var inst_45948 = (state_46007[(14)]);
var inst_45949 = (state_46007[(16)]);
var inst_45954 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_45947,inst_45949);
var inst_45955 = cljs.core.async.muxch_STAR_(inst_45954);
var inst_45956 = cljs.core.async.close_BANG_(inst_45955);
var inst_45957 = (inst_45949 + (1));
var tmp46087 = inst_45947;
var tmp46088 = inst_45946;
var tmp46089 = inst_45948;
var inst_45946__$1 = tmp46088;
var inst_45947__$1 = tmp46087;
var inst_45948__$1 = tmp46089;
var inst_45949__$1 = inst_45957;
var state_46007__$1 = (function (){var statearr_46099 = state_46007;
(statearr_46099[(12)] = inst_45947__$1);

(statearr_46099[(13)] = inst_45946__$1);

(statearr_46099[(14)] = inst_45948__$1);

(statearr_46099[(17)] = inst_45956);

(statearr_46099[(16)] = inst_45949__$1);

return statearr_46099;
})();
var statearr_46100_48028 = state_46007__$1;
(statearr_46100_48028[(2)] = null);

(statearr_46100_48028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (18))){
var inst_45977 = (state_46007[(2)]);
var state_46007__$1 = state_46007;
var statearr_46101_48029 = state_46007__$1;
(statearr_46101_48029[(2)] = inst_45977);

(statearr_46101_48029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46008 === (8))){
var inst_45948 = (state_46007[(14)]);
var inst_45949 = (state_46007[(16)]);
var inst_45951 = (inst_45949 < inst_45948);
var inst_45952 = inst_45951;
var state_46007__$1 = state_46007;
if(cljs.core.truth_(inst_45952)){
var statearr_46102_48031 = state_46007__$1;
(statearr_46102_48031[(1)] = (10));

} else {
var statearr_46103_48032 = state_46007__$1;
(statearr_46103_48032[(1)] = (11));

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
});})(c__44468__auto___47952,mults,ensure_mult,p))
;
return ((function (switch__43975__auto__,c__44468__auto___47952,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__43976__auto__ = null;
var cljs$core$async$state_machine__43976__auto____0 = (function (){
var statearr_46107 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46107[(0)] = cljs$core$async$state_machine__43976__auto__);

(statearr_46107[(1)] = (1));

return statearr_46107;
});
var cljs$core$async$state_machine__43976__auto____1 = (function (state_46007){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_46007);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e46108){if((e46108 instanceof Object)){
var ex__43979__auto__ = e46108;
var statearr_46109_48035 = state_46007;
(statearr_46109_48035[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46108;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48039 = state_46007;
state_46007 = G__48039;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$state_machine__43976__auto__ = function(state_46007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43976__auto____1.call(this,state_46007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43976__auto____0;
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43976__auto____1;
return cljs$core$async$state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto___47952,mults,ensure_mult,p))
})();
var state__44470__auto__ = (function (){var statearr_46111 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_46111[(6)] = c__44468__auto___47952);

return statearr_46111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto___47952,mults,ensure_mult,p))
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
var G__46115 = arguments.length;
switch (G__46115) {
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
var G__46142 = arguments.length;
switch (G__46142) {
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
var G__46145 = arguments.length;
switch (G__46145) {
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
var c__44468__auto___48083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto___48083,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto___48083,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_46210){
var state_val_46211 = (state_46210[(1)]);
if((state_val_46211 === (7))){
var state_46210__$1 = state_46210;
var statearr_46216_48087 = state_46210__$1;
(statearr_46216_48087[(2)] = null);

(statearr_46216_48087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46211 === (1))){
var state_46210__$1 = state_46210;
var statearr_46217_48090 = state_46210__$1;
(statearr_46217_48090[(2)] = null);

(statearr_46217_48090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46211 === (4))){
var inst_46160 = (state_46210[(7)]);
var inst_46162 = (inst_46160 < cnt);
var state_46210__$1 = state_46210;
if(cljs.core.truth_(inst_46162)){
var statearr_46218_48093 = state_46210__$1;
(statearr_46218_48093[(1)] = (6));

} else {
var statearr_46219_48094 = state_46210__$1;
(statearr_46219_48094[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46211 === (15))){
var inst_46205 = (state_46210[(2)]);
var state_46210__$1 = state_46210;
var statearr_46220_48095 = state_46210__$1;
(statearr_46220_48095[(2)] = inst_46205);

(statearr_46220_48095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46211 === (13))){
var inst_46197 = cljs.core.async.close_BANG_(out);
var state_46210__$1 = state_46210;
var statearr_46221_48096 = state_46210__$1;
(statearr_46221_48096[(2)] = inst_46197);

(statearr_46221_48096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46211 === (6))){
var state_46210__$1 = state_46210;
var statearr_46227_48110 = state_46210__$1;
(statearr_46227_48110[(2)] = null);

(statearr_46227_48110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46211 === (3))){
var inst_46207 = (state_46210[(2)]);
var state_46210__$1 = state_46210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46210__$1,inst_46207);
} else {
if((state_val_46211 === (12))){
var inst_46194 = (state_46210[(8)]);
var inst_46194__$1 = (state_46210[(2)]);
var inst_46195 = cljs.core.some(cljs.core.nil_QMARK_,inst_46194__$1);
var state_46210__$1 = (function (){var statearr_46235 = state_46210;
(statearr_46235[(8)] = inst_46194__$1);

return statearr_46235;
})();
if(cljs.core.truth_(inst_46195)){
var statearr_46237_48115 = state_46210__$1;
(statearr_46237_48115[(1)] = (13));

} else {
var statearr_46238_48116 = state_46210__$1;
(statearr_46238_48116[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46211 === (2))){
var inst_46159 = cljs.core.reset_BANG_(dctr,cnt);
var inst_46160 = (0);
var state_46210__$1 = (function (){var statearr_46240 = state_46210;
(statearr_46240[(7)] = inst_46160);

(statearr_46240[(9)] = inst_46159);

return statearr_46240;
})();
var statearr_46241_48134 = state_46210__$1;
(statearr_46241_48134[(2)] = null);

(statearr_46241_48134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46211 === (11))){
var inst_46160 = (state_46210[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_46210,(10),Object,null,(9));
var inst_46180 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_46160) : chs__$1.call(null,inst_46160));
var inst_46181 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_46160) : done.call(null,inst_46160));
var inst_46182 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_46180,inst_46181);
var state_46210__$1 = state_46210;
var statearr_46243_48141 = state_46210__$1;
(statearr_46243_48141[(2)] = inst_46182);


cljs.core.async.impl.ioc_helpers.process_exception(state_46210__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46211 === (9))){
var inst_46160 = (state_46210[(7)]);
var inst_46184 = (state_46210[(2)]);
var inst_46186 = (inst_46160 + (1));
var inst_46160__$1 = inst_46186;
var state_46210__$1 = (function (){var statearr_46244 = state_46210;
(statearr_46244[(7)] = inst_46160__$1);

(statearr_46244[(10)] = inst_46184);

return statearr_46244;
})();
var statearr_46245_48148 = state_46210__$1;
(statearr_46245_48148[(2)] = null);

(statearr_46245_48148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46211 === (5))){
var inst_46192 = (state_46210[(2)]);
var state_46210__$1 = (function (){var statearr_46246 = state_46210;
(statearr_46246[(11)] = inst_46192);

return statearr_46246;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46210__$1,(12),dchan);
} else {
if((state_val_46211 === (14))){
var inst_46194 = (state_46210[(8)]);
var inst_46200 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_46194);
var state_46210__$1 = state_46210;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46210__$1,(16),out,inst_46200);
} else {
if((state_val_46211 === (16))){
var inst_46202 = (state_46210[(2)]);
var state_46210__$1 = (function (){var statearr_46247 = state_46210;
(statearr_46247[(12)] = inst_46202);

return statearr_46247;
})();
var statearr_46248_48161 = state_46210__$1;
(statearr_46248_48161[(2)] = null);

(statearr_46248_48161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46211 === (10))){
var inst_46168 = (state_46210[(2)]);
var inst_46169 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_46210__$1 = (function (){var statearr_46251 = state_46210;
(statearr_46251[(13)] = inst_46168);

return statearr_46251;
})();
var statearr_46252_48166 = state_46210__$1;
(statearr_46252_48166[(2)] = inst_46169);


cljs.core.async.impl.ioc_helpers.process_exception(state_46210__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46211 === (8))){
var inst_46190 = (state_46210[(2)]);
var state_46210__$1 = state_46210;
var statearr_46255_48174 = state_46210__$1;
(statearr_46255_48174[(2)] = inst_46190);

(statearr_46255_48174[(1)] = (5));


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
});})(c__44468__auto___48083,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__43975__auto__,c__44468__auto___48083,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__43976__auto__ = null;
var cljs$core$async$state_machine__43976__auto____0 = (function (){
var statearr_46260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46260[(0)] = cljs$core$async$state_machine__43976__auto__);

(statearr_46260[(1)] = (1));

return statearr_46260;
});
var cljs$core$async$state_machine__43976__auto____1 = (function (state_46210){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_46210);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e46261){if((e46261 instanceof Object)){
var ex__43979__auto__ = e46261;
var statearr_46262_48191 = state_46210;
(statearr_46262_48191[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46261;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48193 = state_46210;
state_46210 = G__48193;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$state_machine__43976__auto__ = function(state_46210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43976__auto____1.call(this,state_46210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43976__auto____0;
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43976__auto____1;
return cljs$core$async$state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto___48083,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__44470__auto__ = (function (){var statearr_46264 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_46264[(6)] = c__44468__auto___48083);

return statearr_46264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto___48083,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__46270 = arguments.length;
switch (G__46270) {
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
var c__44468__auto___48200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto___48200,out){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto___48200,out){
return (function (state_46305){
var state_val_46306 = (state_46305[(1)]);
if((state_val_46306 === (7))){
var inst_46284 = (state_46305[(7)]);
var inst_46283 = (state_46305[(8)]);
var inst_46283__$1 = (state_46305[(2)]);
var inst_46284__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46283__$1,(0),null);
var inst_46285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46283__$1,(1),null);
var inst_46286 = (inst_46284__$1 == null);
var state_46305__$1 = (function (){var statearr_46308 = state_46305;
(statearr_46308[(7)] = inst_46284__$1);

(statearr_46308[(8)] = inst_46283__$1);

(statearr_46308[(9)] = inst_46285);

return statearr_46308;
})();
if(cljs.core.truth_(inst_46286)){
var statearr_46309_48210 = state_46305__$1;
(statearr_46309_48210[(1)] = (8));

} else {
var statearr_46310_48211 = state_46305__$1;
(statearr_46310_48211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46306 === (1))){
var inst_46272 = cljs.core.vec(chs);
var inst_46273 = inst_46272;
var state_46305__$1 = (function (){var statearr_46312 = state_46305;
(statearr_46312[(10)] = inst_46273);

return statearr_46312;
})();
var statearr_46313_48217 = state_46305__$1;
(statearr_46313_48217[(2)] = null);

(statearr_46313_48217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46306 === (4))){
var inst_46273 = (state_46305[(10)]);
var state_46305__$1 = state_46305;
return cljs.core.async.ioc_alts_BANG_(state_46305__$1,(7),inst_46273);
} else {
if((state_val_46306 === (6))){
var inst_46301 = (state_46305[(2)]);
var state_46305__$1 = state_46305;
var statearr_46314_48224 = state_46305__$1;
(statearr_46314_48224[(2)] = inst_46301);

(statearr_46314_48224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46306 === (3))){
var inst_46303 = (state_46305[(2)]);
var state_46305__$1 = state_46305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46305__$1,inst_46303);
} else {
if((state_val_46306 === (2))){
var inst_46273 = (state_46305[(10)]);
var inst_46276 = cljs.core.count(inst_46273);
var inst_46277 = (inst_46276 > (0));
var state_46305__$1 = state_46305;
if(cljs.core.truth_(inst_46277)){
var statearr_46317_48239 = state_46305__$1;
(statearr_46317_48239[(1)] = (4));

} else {
var statearr_46319_48240 = state_46305__$1;
(statearr_46319_48240[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46306 === (11))){
var inst_46273 = (state_46305[(10)]);
var inst_46294 = (state_46305[(2)]);
var tmp46315 = inst_46273;
var inst_46273__$1 = tmp46315;
var state_46305__$1 = (function (){var statearr_46321 = state_46305;
(statearr_46321[(10)] = inst_46273__$1);

(statearr_46321[(11)] = inst_46294);

return statearr_46321;
})();
var statearr_46324_48248 = state_46305__$1;
(statearr_46324_48248[(2)] = null);

(statearr_46324_48248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46306 === (9))){
var inst_46284 = (state_46305[(7)]);
var state_46305__$1 = state_46305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46305__$1,(11),out,inst_46284);
} else {
if((state_val_46306 === (5))){
var inst_46299 = cljs.core.async.close_BANG_(out);
var state_46305__$1 = state_46305;
var statearr_46326_48252 = state_46305__$1;
(statearr_46326_48252[(2)] = inst_46299);

(statearr_46326_48252[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46306 === (10))){
var inst_46297 = (state_46305[(2)]);
var state_46305__$1 = state_46305;
var statearr_46327_48253 = state_46305__$1;
(statearr_46327_48253[(2)] = inst_46297);

(statearr_46327_48253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46306 === (8))){
var inst_46273 = (state_46305[(10)]);
var inst_46284 = (state_46305[(7)]);
var inst_46283 = (state_46305[(8)]);
var inst_46285 = (state_46305[(9)]);
var inst_46289 = (function (){var cs = inst_46273;
var vec__46279 = inst_46283;
var v = inst_46284;
var c = inst_46285;
return ((function (cs,vec__46279,v,c,inst_46273,inst_46284,inst_46283,inst_46285,state_val_46306,c__44468__auto___48200,out){
return (function (p1__46268_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__46268_SHARP_);
});
;})(cs,vec__46279,v,c,inst_46273,inst_46284,inst_46283,inst_46285,state_val_46306,c__44468__auto___48200,out))
})();
var inst_46290 = cljs.core.filterv(inst_46289,inst_46273);
var inst_46273__$1 = inst_46290;
var state_46305__$1 = (function (){var statearr_46328 = state_46305;
(statearr_46328[(10)] = inst_46273__$1);

return statearr_46328;
})();
var statearr_46329_48264 = state_46305__$1;
(statearr_46329_48264[(2)] = null);

(statearr_46329_48264[(1)] = (2));


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
});})(c__44468__auto___48200,out))
;
return ((function (switch__43975__auto__,c__44468__auto___48200,out){
return (function() {
var cljs$core$async$state_machine__43976__auto__ = null;
var cljs$core$async$state_machine__43976__auto____0 = (function (){
var statearr_46335 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46335[(0)] = cljs$core$async$state_machine__43976__auto__);

(statearr_46335[(1)] = (1));

return statearr_46335;
});
var cljs$core$async$state_machine__43976__auto____1 = (function (state_46305){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_46305);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e46336){if((e46336 instanceof Object)){
var ex__43979__auto__ = e46336;
var statearr_46337_48274 = state_46305;
(statearr_46337_48274[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46336;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48285 = state_46305;
state_46305 = G__48285;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$state_machine__43976__auto__ = function(state_46305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43976__auto____1.call(this,state_46305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43976__auto____0;
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43976__auto____1;
return cljs$core$async$state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto___48200,out))
})();
var state__44470__auto__ = (function (){var statearr_46338 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_46338[(6)] = c__44468__auto___48200);

return statearr_46338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto___48200,out))
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__44468__auto___48312 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto___48312,out){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto___48312,out){
return (function (state_46373){
var state_val_46374 = (state_46373[(1)]);
if((state_val_46374 === (7))){
var inst_46355 = (state_46373[(7)]);
var inst_46355__$1 = (state_46373[(2)]);
var inst_46356 = (inst_46355__$1 == null);
var inst_46357 = cljs.core.not(inst_46356);
var state_46373__$1 = (function (){var statearr_46379 = state_46373;
(statearr_46379[(7)] = inst_46355__$1);

return statearr_46379;
})();
if(inst_46357){
var statearr_46381_48316 = state_46373__$1;
(statearr_46381_48316[(1)] = (8));

} else {
var statearr_46383_48317 = state_46373__$1;
(statearr_46383_48317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46374 === (1))){
var inst_46350 = (0);
var state_46373__$1 = (function (){var statearr_46384 = state_46373;
(statearr_46384[(8)] = inst_46350);

return statearr_46384;
})();
var statearr_46385_48318 = state_46373__$1;
(statearr_46385_48318[(2)] = null);

(statearr_46385_48318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46374 === (4))){
var state_46373__$1 = state_46373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46373__$1,(7),ch);
} else {
if((state_val_46374 === (6))){
var inst_46368 = (state_46373[(2)]);
var state_46373__$1 = state_46373;
var statearr_46388_48319 = state_46373__$1;
(statearr_46388_48319[(2)] = inst_46368);

(statearr_46388_48319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46374 === (3))){
var inst_46370 = (state_46373[(2)]);
var inst_46371 = cljs.core.async.close_BANG_(out);
var state_46373__$1 = (function (){var statearr_46391 = state_46373;
(statearr_46391[(9)] = inst_46370);

return statearr_46391;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46373__$1,inst_46371);
} else {
if((state_val_46374 === (2))){
var inst_46350 = (state_46373[(8)]);
var inst_46352 = (inst_46350 < n);
var state_46373__$1 = state_46373;
if(cljs.core.truth_(inst_46352)){
var statearr_46392_48320 = state_46373__$1;
(statearr_46392_48320[(1)] = (4));

} else {
var statearr_46393_48321 = state_46373__$1;
(statearr_46393_48321[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46374 === (11))){
var inst_46350 = (state_46373[(8)]);
var inst_46360 = (state_46373[(2)]);
var inst_46361 = (inst_46350 + (1));
var inst_46350__$1 = inst_46361;
var state_46373__$1 = (function (){var statearr_46394 = state_46373;
(statearr_46394[(8)] = inst_46350__$1);

(statearr_46394[(10)] = inst_46360);

return statearr_46394;
})();
var statearr_46395_48324 = state_46373__$1;
(statearr_46395_48324[(2)] = null);

(statearr_46395_48324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46374 === (9))){
var state_46373__$1 = state_46373;
var statearr_46396_48325 = state_46373__$1;
(statearr_46396_48325[(2)] = null);

(statearr_46396_48325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46374 === (5))){
var state_46373__$1 = state_46373;
var statearr_46397_48326 = state_46373__$1;
(statearr_46397_48326[(2)] = null);

(statearr_46397_48326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46374 === (10))){
var inst_46365 = (state_46373[(2)]);
var state_46373__$1 = state_46373;
var statearr_46399_48330 = state_46373__$1;
(statearr_46399_48330[(2)] = inst_46365);

(statearr_46399_48330[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46374 === (8))){
var inst_46355 = (state_46373[(7)]);
var state_46373__$1 = state_46373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46373__$1,(11),out,inst_46355);
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
});})(c__44468__auto___48312,out))
;
return ((function (switch__43975__auto__,c__44468__auto___48312,out){
return (function() {
var cljs$core$async$state_machine__43976__auto__ = null;
var cljs$core$async$state_machine__43976__auto____0 = (function (){
var statearr_46404 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46404[(0)] = cljs$core$async$state_machine__43976__auto__);

(statearr_46404[(1)] = (1));

return statearr_46404;
});
var cljs$core$async$state_machine__43976__auto____1 = (function (state_46373){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_46373);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e46407){if((e46407 instanceof Object)){
var ex__43979__auto__ = e46407;
var statearr_46409_48336 = state_46373;
(statearr_46409_48336[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46407;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48338 = state_46373;
state_46373 = G__48338;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$state_machine__43976__auto__ = function(state_46373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43976__auto____1.call(this,state_46373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43976__auto____0;
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43976__auto____1;
return cljs$core$async$state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto___48312,out))
})();
var state__44470__auto__ = (function (){var statearr_46411 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_46411[(6)] = c__44468__auto___48312);

return statearr_46411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto___48312,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46415 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46415 = (function (f,ch,meta46416){
this.f = f;
this.ch = ch;
this.meta46416 = meta46416;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46415.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46417,meta46416__$1){
var self__ = this;
var _46417__$1 = this;
return (new cljs.core.async.t_cljs$core$async46415(self__.f,self__.ch,meta46416__$1));
});

cljs.core.async.t_cljs$core$async46415.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46417){
var self__ = this;
var _46417__$1 = this;
return self__.meta46416;
});

cljs.core.async.t_cljs$core$async46415.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46415.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async46415.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async46415.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46415.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46426 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46426 = (function (f,ch,meta46416,_,fn1,meta46427){
this.f = f;
this.ch = ch;
this.meta46416 = meta46416;
this._ = _;
this.fn1 = fn1;
this.meta46427 = meta46427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_46428,meta46427__$1){
var self__ = this;
var _46428__$1 = this;
return (new cljs.core.async.t_cljs$core$async46426(self__.f,self__.ch,self__.meta46416,self__._,self__.fn1,meta46427__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async46426.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_46428){
var self__ = this;
var _46428__$1 = this;
return self__.meta46427;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46426.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46426.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46426.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async46426.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__46412_SHARP_){
var G__46443 = (((p1__46412_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__46412_SHARP_) : self__.f.call(null,p1__46412_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__46443) : f1.call(null,G__46443));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async46426.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46416","meta46416",-25708144,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async46415","cljs.core.async/t_cljs$core$async46415",1332795002,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta46427","meta46427",-1552900824,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async46426.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46426";

cljs.core.async.t_cljs$core$async46426.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46426");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46426.
 */
cljs.core.async.__GT_t_cljs$core$async46426 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46426(f__$1,ch__$1,meta46416__$1,___$2,fn1__$1,meta46427){
return (new cljs.core.async.t_cljs$core$async46426(f__$1,ch__$1,meta46416__$1,___$2,fn1__$1,meta46427));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async46426(self__.f,self__.ch,self__.meta46416,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__46460 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__46460) : self__.f.call(null,G__46460));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async46415.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46415.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async46415.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46416","meta46416",-25708144,null)], null);
});

cljs.core.async.t_cljs$core$async46415.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46415.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46415";

cljs.core.async.t_cljs$core$async46415.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46415");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46415.
 */
cljs.core.async.__GT_t_cljs$core$async46415 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async46415(f__$1,ch__$1,meta46416){
return (new cljs.core.async.t_cljs$core$async46415(f__$1,ch__$1,meta46416));
});

}

return (new cljs.core.async.t_cljs$core$async46415(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46467 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46467 = (function (f,ch,meta46468){
this.f = f;
this.ch = ch;
this.meta46468 = meta46468;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46469,meta46468__$1){
var self__ = this;
var _46469__$1 = this;
return (new cljs.core.async.t_cljs$core$async46467(self__.f,self__.ch,meta46468__$1));
});

cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46469){
var self__ = this;
var _46469__$1 = this;
return self__.meta46468;
});

cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46467.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async46467.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46468","meta46468",-750954904,null)], null);
});

cljs.core.async.t_cljs$core$async46467.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46467.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46467";

cljs.core.async.t_cljs$core$async46467.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46467");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46467.
 */
cljs.core.async.__GT_t_cljs$core$async46467 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async46467(f__$1,ch__$1,meta46468){
return (new cljs.core.async.t_cljs$core$async46467(f__$1,ch__$1,meta46468));
});

}

return (new cljs.core.async.t_cljs$core$async46467(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46501 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46501 = (function (p,ch,meta46502){
this.p = p;
this.ch = ch;
this.meta46502 = meta46502;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async46501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46503,meta46502__$1){
var self__ = this;
var _46503__$1 = this;
return (new cljs.core.async.t_cljs$core$async46501(self__.p,self__.ch,meta46502__$1));
});

cljs.core.async.t_cljs$core$async46501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46503){
var self__ = this;
var _46503__$1 = this;
return self__.meta46502;
});

cljs.core.async.t_cljs$core$async46501.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46501.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async46501.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async46501.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46501.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async46501.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async46501.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async46501.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta46502","meta46502",-177117173,null)], null);
});

cljs.core.async.t_cljs$core$async46501.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async46501.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46501";

cljs.core.async.t_cljs$core$async46501.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async46501");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46501.
 */
cljs.core.async.__GT_t_cljs$core$async46501 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async46501(p__$1,ch__$1,meta46502){
return (new cljs.core.async.t_cljs$core$async46501(p__$1,ch__$1,meta46502));
});

}

return (new cljs.core.async.t_cljs$core$async46501(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46513 = arguments.length;
switch (G__46513) {
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
var c__44468__auto___48458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto___48458,out){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto___48458,out){
return (function (state_46539){
var state_val_46540 = (state_46539[(1)]);
if((state_val_46540 === (7))){
var inst_46535 = (state_46539[(2)]);
var state_46539__$1 = state_46539;
var statearr_46545_48463 = state_46539__$1;
(statearr_46545_48463[(2)] = inst_46535);

(statearr_46545_48463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46540 === (1))){
var state_46539__$1 = state_46539;
var statearr_46546_48465 = state_46539__$1;
(statearr_46546_48465[(2)] = null);

(statearr_46546_48465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46540 === (4))){
var inst_46519 = (state_46539[(7)]);
var inst_46519__$1 = (state_46539[(2)]);
var inst_46520 = (inst_46519__$1 == null);
var state_46539__$1 = (function (){var statearr_46547 = state_46539;
(statearr_46547[(7)] = inst_46519__$1);

return statearr_46547;
})();
if(cljs.core.truth_(inst_46520)){
var statearr_46548_48470 = state_46539__$1;
(statearr_46548_48470[(1)] = (5));

} else {
var statearr_46551_48472 = state_46539__$1;
(statearr_46551_48472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46540 === (6))){
var inst_46519 = (state_46539[(7)]);
var inst_46525 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46519) : p.call(null,inst_46519));
var state_46539__$1 = state_46539;
if(cljs.core.truth_(inst_46525)){
var statearr_46553_48480 = state_46539__$1;
(statearr_46553_48480[(1)] = (8));

} else {
var statearr_46554_48481 = state_46539__$1;
(statearr_46554_48481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46540 === (3))){
var inst_46537 = (state_46539[(2)]);
var state_46539__$1 = state_46539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46539__$1,inst_46537);
} else {
if((state_val_46540 === (2))){
var state_46539__$1 = state_46539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46539__$1,(4),ch);
} else {
if((state_val_46540 === (11))){
var inst_46529 = (state_46539[(2)]);
var state_46539__$1 = state_46539;
var statearr_46557_48488 = state_46539__$1;
(statearr_46557_48488[(2)] = inst_46529);

(statearr_46557_48488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46540 === (9))){
var state_46539__$1 = state_46539;
var statearr_46561_48499 = state_46539__$1;
(statearr_46561_48499[(2)] = null);

(statearr_46561_48499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46540 === (5))){
var inst_46523 = cljs.core.async.close_BANG_(out);
var state_46539__$1 = state_46539;
var statearr_46562_48504 = state_46539__$1;
(statearr_46562_48504[(2)] = inst_46523);

(statearr_46562_48504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46540 === (10))){
var inst_46532 = (state_46539[(2)]);
var state_46539__$1 = (function (){var statearr_46564 = state_46539;
(statearr_46564[(8)] = inst_46532);

return statearr_46564;
})();
var statearr_46565_48512 = state_46539__$1;
(statearr_46565_48512[(2)] = null);

(statearr_46565_48512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46540 === (8))){
var inst_46519 = (state_46539[(7)]);
var state_46539__$1 = state_46539;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46539__$1,(11),out,inst_46519);
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
});})(c__44468__auto___48458,out))
;
return ((function (switch__43975__auto__,c__44468__auto___48458,out){
return (function() {
var cljs$core$async$state_machine__43976__auto__ = null;
var cljs$core$async$state_machine__43976__auto____0 = (function (){
var statearr_46571 = [null,null,null,null,null,null,null,null,null];
(statearr_46571[(0)] = cljs$core$async$state_machine__43976__auto__);

(statearr_46571[(1)] = (1));

return statearr_46571;
});
var cljs$core$async$state_machine__43976__auto____1 = (function (state_46539){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_46539);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e46573){if((e46573 instanceof Object)){
var ex__43979__auto__ = e46573;
var statearr_46574_48523 = state_46539;
(statearr_46574_48523[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46573;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48529 = state_46539;
state_46539 = G__48529;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$state_machine__43976__auto__ = function(state_46539){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43976__auto____1.call(this,state_46539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43976__auto____0;
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43976__auto____1;
return cljs$core$async$state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto___48458,out))
})();
var state__44470__auto__ = (function (){var statearr_46577 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_46577[(6)] = c__44468__auto___48458);

return statearr_46577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto___48458,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__46589 = arguments.length;
switch (G__46589) {
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
var c__44468__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto__){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto__){
return (function (state_46666){
var state_val_46667 = (state_46666[(1)]);
if((state_val_46667 === (7))){
var inst_46662 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
var statearr_46670_48569 = state_46666__$1;
(statearr_46670_48569[(2)] = inst_46662);

(statearr_46670_48569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (20))){
var inst_46632 = (state_46666[(7)]);
var inst_46643 = (state_46666[(2)]);
var inst_46644 = cljs.core.next(inst_46632);
var inst_46616 = inst_46644;
var inst_46617 = null;
var inst_46618 = (0);
var inst_46619 = (0);
var state_46666__$1 = (function (){var statearr_46674 = state_46666;
(statearr_46674[(8)] = inst_46618);

(statearr_46674[(9)] = inst_46643);

(statearr_46674[(10)] = inst_46617);

(statearr_46674[(11)] = inst_46619);

(statearr_46674[(12)] = inst_46616);

return statearr_46674;
})();
var statearr_46676_48582 = state_46666__$1;
(statearr_46676_48582[(2)] = null);

(statearr_46676_48582[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (1))){
var state_46666__$1 = state_46666;
var statearr_46678_48585 = state_46666__$1;
(statearr_46678_48585[(2)] = null);

(statearr_46678_48585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (4))){
var inst_46605 = (state_46666[(13)]);
var inst_46605__$1 = (state_46666[(2)]);
var inst_46606 = (inst_46605__$1 == null);
var state_46666__$1 = (function (){var statearr_46679 = state_46666;
(statearr_46679[(13)] = inst_46605__$1);

return statearr_46679;
})();
if(cljs.core.truth_(inst_46606)){
var statearr_46680_48591 = state_46666__$1;
(statearr_46680_48591[(1)] = (5));

} else {
var statearr_46681_48596 = state_46666__$1;
(statearr_46681_48596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (15))){
var state_46666__$1 = state_46666;
var statearr_46690_48600 = state_46666__$1;
(statearr_46690_48600[(2)] = null);

(statearr_46690_48600[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (21))){
var state_46666__$1 = state_46666;
var statearr_46694_48609 = state_46666__$1;
(statearr_46694_48609[(2)] = null);

(statearr_46694_48609[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (13))){
var inst_46618 = (state_46666[(8)]);
var inst_46617 = (state_46666[(10)]);
var inst_46619 = (state_46666[(11)]);
var inst_46616 = (state_46666[(12)]);
var inst_46627 = (state_46666[(2)]);
var inst_46628 = (inst_46619 + (1));
var tmp46683 = inst_46618;
var tmp46684 = inst_46617;
var tmp46685 = inst_46616;
var inst_46616__$1 = tmp46685;
var inst_46617__$1 = tmp46684;
var inst_46618__$1 = tmp46683;
var inst_46619__$1 = inst_46628;
var state_46666__$1 = (function (){var statearr_46695 = state_46666;
(statearr_46695[(8)] = inst_46618__$1);

(statearr_46695[(10)] = inst_46617__$1);

(statearr_46695[(11)] = inst_46619__$1);

(statearr_46695[(14)] = inst_46627);

(statearr_46695[(12)] = inst_46616__$1);

return statearr_46695;
})();
var statearr_46697_48632 = state_46666__$1;
(statearr_46697_48632[(2)] = null);

(statearr_46697_48632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (22))){
var state_46666__$1 = state_46666;
var statearr_46699_48643 = state_46666__$1;
(statearr_46699_48643[(2)] = null);

(statearr_46699_48643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (6))){
var inst_46605 = (state_46666[(13)]);
var inst_46614 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_46605) : f.call(null,inst_46605));
var inst_46615 = cljs.core.seq(inst_46614);
var inst_46616 = inst_46615;
var inst_46617 = null;
var inst_46618 = (0);
var inst_46619 = (0);
var state_46666__$1 = (function (){var statearr_46701 = state_46666;
(statearr_46701[(8)] = inst_46618);

(statearr_46701[(10)] = inst_46617);

(statearr_46701[(11)] = inst_46619);

(statearr_46701[(12)] = inst_46616);

return statearr_46701;
})();
var statearr_46702_48662 = state_46666__$1;
(statearr_46702_48662[(2)] = null);

(statearr_46702_48662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (17))){
var inst_46632 = (state_46666[(7)]);
var inst_46636 = cljs.core.chunk_first(inst_46632);
var inst_46637 = cljs.core.chunk_rest(inst_46632);
var inst_46638 = cljs.core.count(inst_46636);
var inst_46616 = inst_46637;
var inst_46617 = inst_46636;
var inst_46618 = inst_46638;
var inst_46619 = (0);
var state_46666__$1 = (function (){var statearr_46704 = state_46666;
(statearr_46704[(8)] = inst_46618);

(statearr_46704[(10)] = inst_46617);

(statearr_46704[(11)] = inst_46619);

(statearr_46704[(12)] = inst_46616);

return statearr_46704;
})();
var statearr_46706_48666 = state_46666__$1;
(statearr_46706_48666[(2)] = null);

(statearr_46706_48666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (3))){
var inst_46664 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46666__$1,inst_46664);
} else {
if((state_val_46667 === (12))){
var inst_46652 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
var statearr_46709_48677 = state_46666__$1;
(statearr_46709_48677[(2)] = inst_46652);

(statearr_46709_48677[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (2))){
var state_46666__$1 = state_46666;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46666__$1,(4),in$);
} else {
if((state_val_46667 === (23))){
var inst_46660 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
var statearr_46710_48681 = state_46666__$1;
(statearr_46710_48681[(2)] = inst_46660);

(statearr_46710_48681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (19))){
var inst_46647 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
var statearr_46713_48686 = state_46666__$1;
(statearr_46713_48686[(2)] = inst_46647);

(statearr_46713_48686[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (11))){
var inst_46632 = (state_46666[(7)]);
var inst_46616 = (state_46666[(12)]);
var inst_46632__$1 = cljs.core.seq(inst_46616);
var state_46666__$1 = (function (){var statearr_46714 = state_46666;
(statearr_46714[(7)] = inst_46632__$1);

return statearr_46714;
})();
if(inst_46632__$1){
var statearr_46715_48698 = state_46666__$1;
(statearr_46715_48698[(1)] = (14));

} else {
var statearr_46716_48700 = state_46666__$1;
(statearr_46716_48700[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (9))){
var inst_46654 = (state_46666[(2)]);
var inst_46655 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_46666__$1 = (function (){var statearr_46717 = state_46666;
(statearr_46717[(15)] = inst_46654);

return statearr_46717;
})();
if(cljs.core.truth_(inst_46655)){
var statearr_46718_48704 = state_46666__$1;
(statearr_46718_48704[(1)] = (21));

} else {
var statearr_46719_48705 = state_46666__$1;
(statearr_46719_48705[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (5))){
var inst_46608 = cljs.core.async.close_BANG_(out);
var state_46666__$1 = state_46666;
var statearr_46722_48711 = state_46666__$1;
(statearr_46722_48711[(2)] = inst_46608);

(statearr_46722_48711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (14))){
var inst_46632 = (state_46666[(7)]);
var inst_46634 = cljs.core.chunked_seq_QMARK_(inst_46632);
var state_46666__$1 = state_46666;
if(inst_46634){
var statearr_46723_48715 = state_46666__$1;
(statearr_46723_48715[(1)] = (17));

} else {
var statearr_46724_48717 = state_46666__$1;
(statearr_46724_48717[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (16))){
var inst_46650 = (state_46666[(2)]);
var state_46666__$1 = state_46666;
var statearr_46727_48718 = state_46666__$1;
(statearr_46727_48718[(2)] = inst_46650);

(statearr_46727_48718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46667 === (10))){
var inst_46617 = (state_46666[(10)]);
var inst_46619 = (state_46666[(11)]);
var inst_46625 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46617,inst_46619);
var state_46666__$1 = state_46666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46666__$1,(13),out,inst_46625);
} else {
if((state_val_46667 === (18))){
var inst_46632 = (state_46666[(7)]);
var inst_46641 = cljs.core.first(inst_46632);
var state_46666__$1 = state_46666;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46666__$1,(20),out,inst_46641);
} else {
if((state_val_46667 === (8))){
var inst_46618 = (state_46666[(8)]);
var inst_46619 = (state_46666[(11)]);
var inst_46621 = (inst_46619 < inst_46618);
var inst_46622 = inst_46621;
var state_46666__$1 = state_46666;
if(cljs.core.truth_(inst_46622)){
var statearr_46733_48740 = state_46666__$1;
(statearr_46733_48740[(1)] = (10));

} else {
var statearr_46734_48744 = state_46666__$1;
(statearr_46734_48744[(1)] = (11));

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
});})(c__44468__auto__))
;
return ((function (switch__43975__auto__,c__44468__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43976__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43976__auto____0 = (function (){
var statearr_46744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46744[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43976__auto__);

(statearr_46744[(1)] = (1));

return statearr_46744;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43976__auto____1 = (function (state_46666){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_46666);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e46745){if((e46745 instanceof Object)){
var ex__43979__auto__ = e46745;
var statearr_46747_48756 = state_46666;
(statearr_46747_48756[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46745;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48757 = state_46666;
state_46666 = G__48757;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43976__auto__ = function(state_46666){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43976__auto____1.call(this,state_46666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43976__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43976__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto__))
})();
var state__44470__auto__ = (function (){var statearr_46750 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_46750[(6)] = c__44468__auto__);

return statearr_46750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto__))
);

return c__44468__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__46755 = arguments.length;
switch (G__46755) {
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
var G__46760 = arguments.length;
switch (G__46760) {
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
var G__46766 = arguments.length;
switch (G__46766) {
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
var c__44468__auto___48824 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto___48824,out){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto___48824,out){
return (function (state_46798){
var state_val_46799 = (state_46798[(1)]);
if((state_val_46799 === (7))){
var inst_46791 = (state_46798[(2)]);
var state_46798__$1 = state_46798;
var statearr_46804_48833 = state_46798__$1;
(statearr_46804_48833[(2)] = inst_46791);

(statearr_46804_48833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46799 === (1))){
var inst_46770 = null;
var state_46798__$1 = (function (){var statearr_46805 = state_46798;
(statearr_46805[(7)] = inst_46770);

return statearr_46805;
})();
var statearr_46806_48834 = state_46798__$1;
(statearr_46806_48834[(2)] = null);

(statearr_46806_48834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46799 === (4))){
var inst_46774 = (state_46798[(8)]);
var inst_46774__$1 = (state_46798[(2)]);
var inst_46776 = (inst_46774__$1 == null);
var inst_46777 = cljs.core.not(inst_46776);
var state_46798__$1 = (function (){var statearr_46812 = state_46798;
(statearr_46812[(8)] = inst_46774__$1);

return statearr_46812;
})();
if(inst_46777){
var statearr_46820_48847 = state_46798__$1;
(statearr_46820_48847[(1)] = (5));

} else {
var statearr_46821_48852 = state_46798__$1;
(statearr_46821_48852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46799 === (6))){
var state_46798__$1 = state_46798;
var statearr_46822_48853 = state_46798__$1;
(statearr_46822_48853[(2)] = null);

(statearr_46822_48853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46799 === (3))){
var inst_46794 = (state_46798[(2)]);
var inst_46795 = cljs.core.async.close_BANG_(out);
var state_46798__$1 = (function (){var statearr_46823 = state_46798;
(statearr_46823[(9)] = inst_46794);

return statearr_46823;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46798__$1,inst_46795);
} else {
if((state_val_46799 === (2))){
var state_46798__$1 = state_46798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46798__$1,(4),ch);
} else {
if((state_val_46799 === (11))){
var inst_46774 = (state_46798[(8)]);
var inst_46785 = (state_46798[(2)]);
var inst_46770 = inst_46774;
var state_46798__$1 = (function (){var statearr_46825 = state_46798;
(statearr_46825[(10)] = inst_46785);

(statearr_46825[(7)] = inst_46770);

return statearr_46825;
})();
var statearr_46826_48873 = state_46798__$1;
(statearr_46826_48873[(2)] = null);

(statearr_46826_48873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46799 === (9))){
var inst_46774 = (state_46798[(8)]);
var state_46798__$1 = state_46798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46798__$1,(11),out,inst_46774);
} else {
if((state_val_46799 === (5))){
var inst_46774 = (state_46798[(8)]);
var inst_46770 = (state_46798[(7)]);
var inst_46779 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46774,inst_46770);
var state_46798__$1 = state_46798;
if(inst_46779){
var statearr_46830_48888 = state_46798__$1;
(statearr_46830_48888[(1)] = (8));

} else {
var statearr_46831_48896 = state_46798__$1;
(statearr_46831_48896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46799 === (10))){
var inst_46788 = (state_46798[(2)]);
var state_46798__$1 = state_46798;
var statearr_46833_48902 = state_46798__$1;
(statearr_46833_48902[(2)] = inst_46788);

(statearr_46833_48902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46799 === (8))){
var inst_46770 = (state_46798[(7)]);
var tmp46828 = inst_46770;
var inst_46770__$1 = tmp46828;
var state_46798__$1 = (function (){var statearr_46835 = state_46798;
(statearr_46835[(7)] = inst_46770__$1);

return statearr_46835;
})();
var statearr_46836_48915 = state_46798__$1;
(statearr_46836_48915[(2)] = null);

(statearr_46836_48915[(1)] = (2));


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
});})(c__44468__auto___48824,out))
;
return ((function (switch__43975__auto__,c__44468__auto___48824,out){
return (function() {
var cljs$core$async$state_machine__43976__auto__ = null;
var cljs$core$async$state_machine__43976__auto____0 = (function (){
var statearr_46837 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46837[(0)] = cljs$core$async$state_machine__43976__auto__);

(statearr_46837[(1)] = (1));

return statearr_46837;
});
var cljs$core$async$state_machine__43976__auto____1 = (function (state_46798){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_46798);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e46838){if((e46838 instanceof Object)){
var ex__43979__auto__ = e46838;
var statearr_46839_48938 = state_46798;
(statearr_46839_48938[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46838;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48945 = state_46798;
state_46798 = G__48945;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$state_machine__43976__auto__ = function(state_46798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43976__auto____1.call(this,state_46798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43976__auto____0;
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43976__auto____1;
return cljs$core$async$state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto___48824,out))
})();
var state__44470__auto__ = (function (){var statearr_46841 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_46841[(6)] = c__44468__auto___48824);

return statearr_46841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto___48824,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46855 = arguments.length;
switch (G__46855) {
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
var c__44468__auto___48980 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto___48980,out){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto___48980,out){
return (function (state_46899){
var state_val_46904 = (state_46899[(1)]);
if((state_val_46904 === (7))){
var inst_46894 = (state_46899[(2)]);
var state_46899__$1 = state_46899;
var statearr_46912_48985 = state_46899__$1;
(statearr_46912_48985[(2)] = inst_46894);

(statearr_46912_48985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (1))){
var inst_46860 = (new Array(n));
var inst_46861 = inst_46860;
var inst_46862 = (0);
var state_46899__$1 = (function (){var statearr_46916 = state_46899;
(statearr_46916[(7)] = inst_46862);

(statearr_46916[(8)] = inst_46861);

return statearr_46916;
})();
var statearr_46918_48994 = state_46899__$1;
(statearr_46918_48994[(2)] = null);

(statearr_46918_48994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (4))){
var inst_46865 = (state_46899[(9)]);
var inst_46865__$1 = (state_46899[(2)]);
var inst_46866 = (inst_46865__$1 == null);
var inst_46867 = cljs.core.not(inst_46866);
var state_46899__$1 = (function (){var statearr_46921 = state_46899;
(statearr_46921[(9)] = inst_46865__$1);

return statearr_46921;
})();
if(inst_46867){
var statearr_46923_48999 = state_46899__$1;
(statearr_46923_48999[(1)] = (5));

} else {
var statearr_46926_49000 = state_46899__$1;
(statearr_46926_49000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (15))){
var inst_46888 = (state_46899[(2)]);
var state_46899__$1 = state_46899;
var statearr_46932_49008 = state_46899__$1;
(statearr_46932_49008[(2)] = inst_46888);

(statearr_46932_49008[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (13))){
var state_46899__$1 = state_46899;
var statearr_46938_49015 = state_46899__$1;
(statearr_46938_49015[(2)] = null);

(statearr_46938_49015[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (6))){
var inst_46862 = (state_46899[(7)]);
var inst_46884 = (inst_46862 > (0));
var state_46899__$1 = state_46899;
if(cljs.core.truth_(inst_46884)){
var statearr_46947_49016 = state_46899__$1;
(statearr_46947_49016[(1)] = (12));

} else {
var statearr_46948_49018 = state_46899__$1;
(statearr_46948_49018[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (3))){
var inst_46896 = (state_46899[(2)]);
var state_46899__$1 = state_46899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46899__$1,inst_46896);
} else {
if((state_val_46904 === (12))){
var inst_46861 = (state_46899[(8)]);
var inst_46886 = cljs.core.vec(inst_46861);
var state_46899__$1 = state_46899;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46899__$1,(15),out,inst_46886);
} else {
if((state_val_46904 === (2))){
var state_46899__$1 = state_46899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46899__$1,(4),ch);
} else {
if((state_val_46904 === (11))){
var inst_46877 = (state_46899[(2)]);
var inst_46878 = (new Array(n));
var inst_46861 = inst_46878;
var inst_46862 = (0);
var state_46899__$1 = (function (){var statearr_46961 = state_46899;
(statearr_46961[(10)] = inst_46877);

(statearr_46961[(7)] = inst_46862);

(statearr_46961[(8)] = inst_46861);

return statearr_46961;
})();
var statearr_46962_49036 = state_46899__$1;
(statearr_46962_49036[(2)] = null);

(statearr_46962_49036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (9))){
var inst_46861 = (state_46899[(8)]);
var inst_46875 = cljs.core.vec(inst_46861);
var state_46899__$1 = state_46899;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46899__$1,(11),out,inst_46875);
} else {
if((state_val_46904 === (5))){
var inst_46865 = (state_46899[(9)]);
var inst_46870 = (state_46899[(11)]);
var inst_46862 = (state_46899[(7)]);
var inst_46861 = (state_46899[(8)]);
var inst_46869 = (inst_46861[inst_46862] = inst_46865);
var inst_46870__$1 = (inst_46862 + (1));
var inst_46871 = (inst_46870__$1 < n);
var state_46899__$1 = (function (){var statearr_46963 = state_46899;
(statearr_46963[(12)] = inst_46869);

(statearr_46963[(11)] = inst_46870__$1);

return statearr_46963;
})();
if(cljs.core.truth_(inst_46871)){
var statearr_46964_49045 = state_46899__$1;
(statearr_46964_49045[(1)] = (8));

} else {
var statearr_46965_49046 = state_46899__$1;
(statearr_46965_49046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (14))){
var inst_46891 = (state_46899[(2)]);
var inst_46892 = cljs.core.async.close_BANG_(out);
var state_46899__$1 = (function (){var statearr_46967 = state_46899;
(statearr_46967[(13)] = inst_46891);

return statearr_46967;
})();
var statearr_46968_49047 = state_46899__$1;
(statearr_46968_49047[(2)] = inst_46892);

(statearr_46968_49047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (10))){
var inst_46882 = (state_46899[(2)]);
var state_46899__$1 = state_46899;
var statearr_46971_49057 = state_46899__$1;
(statearr_46971_49057[(2)] = inst_46882);

(statearr_46971_49057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46904 === (8))){
var inst_46870 = (state_46899[(11)]);
var inst_46861 = (state_46899[(8)]);
var tmp46966 = inst_46861;
var inst_46861__$1 = tmp46966;
var inst_46862 = inst_46870;
var state_46899__$1 = (function (){var statearr_46972 = state_46899;
(statearr_46972[(7)] = inst_46862);

(statearr_46972[(8)] = inst_46861__$1);

return statearr_46972;
})();
var statearr_46973_49059 = state_46899__$1;
(statearr_46973_49059[(2)] = null);

(statearr_46973_49059[(1)] = (2));


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
});})(c__44468__auto___48980,out))
;
return ((function (switch__43975__auto__,c__44468__auto___48980,out){
return (function() {
var cljs$core$async$state_machine__43976__auto__ = null;
var cljs$core$async$state_machine__43976__auto____0 = (function (){
var statearr_46974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46974[(0)] = cljs$core$async$state_machine__43976__auto__);

(statearr_46974[(1)] = (1));

return statearr_46974;
});
var cljs$core$async$state_machine__43976__auto____1 = (function (state_46899){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_46899);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e46975){if((e46975 instanceof Object)){
var ex__43979__auto__ = e46975;
var statearr_46976_49067 = state_46899;
(statearr_46976_49067[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46975;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49073 = state_46899;
state_46899 = G__49073;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$state_machine__43976__auto__ = function(state_46899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43976__auto____1.call(this,state_46899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43976__auto____0;
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43976__auto____1;
return cljs$core$async$state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto___48980,out))
})();
var state__44470__auto__ = (function (){var statearr_46979 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_46979[(6)] = c__44468__auto___48980);

return statearr_46979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto___48980,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46998 = arguments.length;
switch (G__46998) {
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
var c__44468__auto___49095 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__44468__auto___49095,out){
return (function (){
var f__44469__auto__ = (function (){var switch__43975__auto__ = ((function (c__44468__auto___49095,out){
return (function (state_47045){
var state_val_47046 = (state_47045[(1)]);
if((state_val_47046 === (7))){
var inst_47040 = (state_47045[(2)]);
var state_47045__$1 = state_47045;
var statearr_47055_49101 = state_47045__$1;
(statearr_47055_49101[(2)] = inst_47040);

(statearr_47055_49101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47046 === (1))){
var inst_47003 = [];
var inst_47004 = inst_47003;
var inst_47005 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47045__$1 = (function (){var statearr_47059 = state_47045;
(statearr_47059[(7)] = inst_47004);

(statearr_47059[(8)] = inst_47005);

return statearr_47059;
})();
var statearr_47060_49105 = state_47045__$1;
(statearr_47060_49105[(2)] = null);

(statearr_47060_49105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47046 === (4))){
var inst_47008 = (state_47045[(9)]);
var inst_47008__$1 = (state_47045[(2)]);
var inst_47009 = (inst_47008__$1 == null);
var inst_47010 = cljs.core.not(inst_47009);
var state_47045__$1 = (function (){var statearr_47064 = state_47045;
(statearr_47064[(9)] = inst_47008__$1);

return statearr_47064;
})();
if(inst_47010){
var statearr_47069_49114 = state_47045__$1;
(statearr_47069_49114[(1)] = (5));

} else {
var statearr_47072_49115 = state_47045__$1;
(statearr_47072_49115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47046 === (15))){
var inst_47034 = (state_47045[(2)]);
var state_47045__$1 = state_47045;
var statearr_47078_49116 = state_47045__$1;
(statearr_47078_49116[(2)] = inst_47034);

(statearr_47078_49116[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47046 === (13))){
var state_47045__$1 = state_47045;
var statearr_47082_49117 = state_47045__$1;
(statearr_47082_49117[(2)] = null);

(statearr_47082_49117[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47046 === (6))){
var inst_47004 = (state_47045[(7)]);
var inst_47029 = inst_47004.length;
var inst_47030 = (inst_47029 > (0));
var state_47045__$1 = state_47045;
if(cljs.core.truth_(inst_47030)){
var statearr_47086_49118 = state_47045__$1;
(statearr_47086_49118[(1)] = (12));

} else {
var statearr_47090_49119 = state_47045__$1;
(statearr_47090_49119[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47046 === (3))){
var inst_47042 = (state_47045[(2)]);
var state_47045__$1 = state_47045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47045__$1,inst_47042);
} else {
if((state_val_47046 === (12))){
var inst_47004 = (state_47045[(7)]);
var inst_47032 = cljs.core.vec(inst_47004);
var state_47045__$1 = state_47045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47045__$1,(15),out,inst_47032);
} else {
if((state_val_47046 === (2))){
var state_47045__$1 = state_47045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47045__$1,(4),ch);
} else {
if((state_val_47046 === (11))){
var inst_47008 = (state_47045[(9)]);
var inst_47012 = (state_47045[(10)]);
var inst_47022 = (state_47045[(2)]);
var inst_47023 = [];
var inst_47024 = inst_47023.push(inst_47008);
var inst_47004 = inst_47023;
var inst_47005 = inst_47012;
var state_47045__$1 = (function (){var statearr_47102 = state_47045;
(statearr_47102[(7)] = inst_47004);

(statearr_47102[(8)] = inst_47005);

(statearr_47102[(11)] = inst_47022);

(statearr_47102[(12)] = inst_47024);

return statearr_47102;
})();
var statearr_47106_49129 = state_47045__$1;
(statearr_47106_49129[(2)] = null);

(statearr_47106_49129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47046 === (9))){
var inst_47004 = (state_47045[(7)]);
var inst_47020 = cljs.core.vec(inst_47004);
var state_47045__$1 = state_47045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47045__$1,(11),out,inst_47020);
} else {
if((state_val_47046 === (5))){
var inst_47005 = (state_47045[(8)]);
var inst_47008 = (state_47045[(9)]);
var inst_47012 = (state_47045[(10)]);
var inst_47012__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47008) : f.call(null,inst_47008));
var inst_47013 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47012__$1,inst_47005);
var inst_47014 = cljs.core.keyword_identical_QMARK_(inst_47005,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47015 = ((inst_47013) || (inst_47014));
var state_47045__$1 = (function (){var statearr_47116 = state_47045;
(statearr_47116[(10)] = inst_47012__$1);

return statearr_47116;
})();
if(cljs.core.truth_(inst_47015)){
var statearr_47118_49136 = state_47045__$1;
(statearr_47118_49136[(1)] = (8));

} else {
var statearr_47120_49137 = state_47045__$1;
(statearr_47120_49137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47046 === (14))){
var inst_47037 = (state_47045[(2)]);
var inst_47038 = cljs.core.async.close_BANG_(out);
var state_47045__$1 = (function (){var statearr_47127 = state_47045;
(statearr_47127[(13)] = inst_47037);

return statearr_47127;
})();
var statearr_47131_49141 = state_47045__$1;
(statearr_47131_49141[(2)] = inst_47038);

(statearr_47131_49141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47046 === (10))){
var inst_47027 = (state_47045[(2)]);
var state_47045__$1 = state_47045;
var statearr_47133_49144 = state_47045__$1;
(statearr_47133_49144[(2)] = inst_47027);

(statearr_47133_49144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47046 === (8))){
var inst_47004 = (state_47045[(7)]);
var inst_47008 = (state_47045[(9)]);
var inst_47012 = (state_47045[(10)]);
var inst_47017 = inst_47004.push(inst_47008);
var tmp47121 = inst_47004;
var inst_47004__$1 = tmp47121;
var inst_47005 = inst_47012;
var state_47045__$1 = (function (){var statearr_47139 = state_47045;
(statearr_47139[(7)] = inst_47004__$1);

(statearr_47139[(8)] = inst_47005);

(statearr_47139[(14)] = inst_47017);

return statearr_47139;
})();
var statearr_47144_49146 = state_47045__$1;
(statearr_47144_49146[(2)] = null);

(statearr_47144_49146[(1)] = (2));


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
});})(c__44468__auto___49095,out))
;
return ((function (switch__43975__auto__,c__44468__auto___49095,out){
return (function() {
var cljs$core$async$state_machine__43976__auto__ = null;
var cljs$core$async$state_machine__43976__auto____0 = (function (){
var statearr_47152 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47152[(0)] = cljs$core$async$state_machine__43976__auto__);

(statearr_47152[(1)] = (1));

return statearr_47152;
});
var cljs$core$async$state_machine__43976__auto____1 = (function (state_47045){
while(true){
var ret_value__43977__auto__ = (function (){try{while(true){
var result__43978__auto__ = switch__43975__auto__(state_47045);
if(cljs.core.keyword_identical_QMARK_(result__43978__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43978__auto__;
}
break;
}
}catch (e47157){if((e47157 instanceof Object)){
var ex__43979__auto__ = e47157;
var statearr_47159_49152 = state_47045;
(statearr_47159_49152[(5)] = ex__43979__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47157;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__43977__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49154 = state_47045;
state_47045 = G__49154;
continue;
} else {
return ret_value__43977__auto__;
}
break;
}
});
cljs$core$async$state_machine__43976__auto__ = function(state_47045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43976__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43976__auto____1.call(this,state_47045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43976__auto____0;
cljs$core$async$state_machine__43976__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43976__auto____1;
return cljs$core$async$state_machine__43976__auto__;
})()
;})(switch__43975__auto__,c__44468__auto___49095,out))
})();
var state__44470__auto__ = (function (){var statearr_47171 = (f__44469__auto__.cljs$core$IFn$_invoke$arity$0 ? f__44469__auto__.cljs$core$IFn$_invoke$arity$0() : f__44469__auto__.call(null));
(statearr_47171[(6)] = c__44468__auto___49095);

return statearr_47171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__44470__auto__);
});})(c__44468__auto___49095,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
