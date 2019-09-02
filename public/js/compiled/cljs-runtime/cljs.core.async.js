goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33527 = arguments.length;
switch (G__33527) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33530 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33530 = (function (f,blockable,meta33531){
this.f = f;
this.blockable = blockable;
this.meta33531 = meta33531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33532,meta33531__$1){
var self__ = this;
var _33532__$1 = this;
return (new cljs.core.async.t_cljs$core$async33530(self__.f,self__.blockable,meta33531__$1));
});

cljs.core.async.t_cljs$core$async33530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33532){
var self__ = this;
var _33532__$1 = this;
return self__.meta33531;
});

cljs.core.async.t_cljs$core$async33530.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33530.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33530.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33530.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33530.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33531","meta33531",1576894907,null)], null);
});

cljs.core.async.t_cljs$core$async33530.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33530";

cljs.core.async.t_cljs$core$async33530.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33530");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33530.
 */
cljs.core.async.__GT_t_cljs$core$async33530 = (function cljs$core$async$__GT_t_cljs$core$async33530(f__$1,blockable__$1,meta33531){
return (new cljs.core.async.t_cljs$core$async33530(f__$1,blockable__$1,meta33531));
});

}

return (new cljs.core.async.t_cljs$core$async33530(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33535 = arguments.length;
switch (G__33535) {
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
var G__33537 = arguments.length;
switch (G__33537) {
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
var G__33539 = arguments.length;
switch (G__33539) {
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
var val_34986 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34986) : fn1.call(null,val_34986));
} else {
cljs.core.async.impl.dispatch.run(((function (val_34986,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34986) : fn1.call(null,val_34986));
});})(val_34986,ret))
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
var G__33541 = arguments.length;
switch (G__33541) {
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
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5718__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5718__auto__))
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
var n__4607__auto___34996 = n;
var x_34997 = (0);
while(true){
if((x_34997 < n__4607__auto___34996)){
(a[x_34997] = (0));

var G__34998 = (x_34997 + (1));
x_34997 = G__34998;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__34999 = (i + (1));
i = G__34999;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33542 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33542 = (function (flag,meta33543){
this.flag = flag;
this.meta33543 = meta33543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33544,meta33543__$1){
var self__ = this;
var _33544__$1 = this;
return (new cljs.core.async.t_cljs$core$async33542(self__.flag,meta33543__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33542.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33544){
var self__ = this;
var _33544__$1 = this;
return self__.meta33543;
});})(flag))
;

cljs.core.async.t_cljs$core$async33542.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33542.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33542.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33542.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33542.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33543","meta33543",-2064645679,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33542.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33542.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33542";

cljs.core.async.t_cljs$core$async33542.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33542");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33542.
 */
cljs.core.async.__GT_t_cljs$core$async33542 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33542(flag__$1,meta33543){
return (new cljs.core.async.t_cljs$core$async33542(flag__$1,meta33543));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33542(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33545 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33545 = (function (flag,cb,meta33546){
this.flag = flag;
this.cb = cb;
this.meta33546 = meta33546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33547,meta33546__$1){
var self__ = this;
var _33547__$1 = this;
return (new cljs.core.async.t_cljs$core$async33545(self__.flag,self__.cb,meta33546__$1));
});

cljs.core.async.t_cljs$core$async33545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33547){
var self__ = this;
var _33547__$1 = this;
return self__.meta33546;
});

cljs.core.async.t_cljs$core$async33545.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async33545.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33545.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33546","meta33546",-1942138445,null)], null);
});

cljs.core.async.t_cljs$core$async33545.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33545";

cljs.core.async.t_cljs$core$async33545.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33545");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33545.
 */
cljs.core.async.__GT_t_cljs$core$async33545 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33545(flag__$1,cb__$1,meta33546){
return (new cljs.core.async.t_cljs$core$async33545(flag__$1,cb__$1,meta33546));
});

}

return (new cljs.core.async.t_cljs$core$async33545(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
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
return (function (p1__33548_SHARP_){
var G__33550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33548_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33550) : fret.call(null,G__33550));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33549_SHARP_){
var G__33551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33549_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33551) : fret.call(null,G__33551));
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
var G__35021 = (i + (1));
i = G__35021;
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
var temp__5720__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
var len__4730__auto___35027 = arguments.length;
var i__4731__auto___35028 = (0);
while(true){
if((i__4731__auto___35028 < len__4730__auto___35027)){
args__4736__auto__.push((arguments[i__4731__auto___35028]));

var G__35029 = (i__4731__auto___35028 + (1));
i__4731__auto___35028 = G__35029;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33554){
var map__33555 = p__33554;
var map__33555__$1 = (((((!((map__33555 == null))))?(((((map__33555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33555):map__33555);
var opts = map__33555__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33552){
var G__33553 = cljs.core.first(seq33552);
var seq33552__$1 = cljs.core.next(seq33552);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33553,seq33552__$1);
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
var G__33558 = arguments.length;
switch (G__33558) {
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
var c__33469__auto___35042 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto___35042){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto___35042){
return (function (state_33582){
var state_val_33583 = (state_33582[(1)]);
if((state_val_33583 === (7))){
var inst_33578 = (state_33582[(2)]);
var state_33582__$1 = state_33582;
var statearr_33584_35048 = state_33582__$1;
(statearr_33584_35048[(2)] = inst_33578);

(statearr_33584_35048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (1))){
var state_33582__$1 = state_33582;
var statearr_33585_35049 = state_33582__$1;
(statearr_33585_35049[(2)] = null);

(statearr_33585_35049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (4))){
var inst_33561 = (state_33582[(7)]);
var inst_33561__$1 = (state_33582[(2)]);
var inst_33562 = (inst_33561__$1 == null);
var state_33582__$1 = (function (){var statearr_33586 = state_33582;
(statearr_33586[(7)] = inst_33561__$1);

return statearr_33586;
})();
if(cljs.core.truth_(inst_33562)){
var statearr_33587_35050 = state_33582__$1;
(statearr_33587_35050[(1)] = (5));

} else {
var statearr_33588_35051 = state_33582__$1;
(statearr_33588_35051[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (13))){
var state_33582__$1 = state_33582;
var statearr_33589_35054 = state_33582__$1;
(statearr_33589_35054[(2)] = null);

(statearr_33589_35054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (6))){
var inst_33561 = (state_33582[(7)]);
var state_33582__$1 = state_33582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33582__$1,(11),to,inst_33561);
} else {
if((state_val_33583 === (3))){
var inst_33580 = (state_33582[(2)]);
var state_33582__$1 = state_33582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33582__$1,inst_33580);
} else {
if((state_val_33583 === (12))){
var state_33582__$1 = state_33582;
var statearr_33590_35061 = state_33582__$1;
(statearr_33590_35061[(2)] = null);

(statearr_33590_35061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (2))){
var state_33582__$1 = state_33582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33582__$1,(4),from);
} else {
if((state_val_33583 === (11))){
var inst_33571 = (state_33582[(2)]);
var state_33582__$1 = state_33582;
if(cljs.core.truth_(inst_33571)){
var statearr_33591_35064 = state_33582__$1;
(statearr_33591_35064[(1)] = (12));

} else {
var statearr_33592_35065 = state_33582__$1;
(statearr_33592_35065[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (9))){
var state_33582__$1 = state_33582;
var statearr_33593_35066 = state_33582__$1;
(statearr_33593_35066[(2)] = null);

(statearr_33593_35066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (5))){
var state_33582__$1 = state_33582;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33594_35069 = state_33582__$1;
(statearr_33594_35069[(1)] = (8));

} else {
var statearr_33595_35070 = state_33582__$1;
(statearr_33595_35070[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (14))){
var inst_33576 = (state_33582[(2)]);
var state_33582__$1 = state_33582;
var statearr_33596_35073 = state_33582__$1;
(statearr_33596_35073[(2)] = inst_33576);

(statearr_33596_35073[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (10))){
var inst_33568 = (state_33582[(2)]);
var state_33582__$1 = state_33582;
var statearr_33597_35075 = state_33582__$1;
(statearr_33597_35075[(2)] = inst_33568);

(statearr_33597_35075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33583 === (8))){
var inst_33565 = cljs.core.async.close_BANG_(to);
var state_33582__$1 = state_33582;
var statearr_33598_35077 = state_33582__$1;
(statearr_33598_35077[(2)] = inst_33565);

(statearr_33598_35077[(1)] = (10));


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
});})(c__33469__auto___35042))
;
return ((function (switch__33368__auto__,c__33469__auto___35042){
return (function() {
var cljs$core$async$state_machine__33369__auto__ = null;
var cljs$core$async$state_machine__33369__auto____0 = (function (){
var statearr_33599 = [null,null,null,null,null,null,null,null];
(statearr_33599[(0)] = cljs$core$async$state_machine__33369__auto__);

(statearr_33599[(1)] = (1));

return statearr_33599;
});
var cljs$core$async$state_machine__33369__auto____1 = (function (state_33582){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_33582);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e33600){if((e33600 instanceof Object)){
var ex__33372__auto__ = e33600;
var statearr_33601_35079 = state_33582;
(statearr_33601_35079[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33600;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35080 = state_33582;
state_33582 = G__35080;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$state_machine__33369__auto__ = function(state_33582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33369__auto____1.call(this,state_33582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33369__auto____0;
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33369__auto____1;
return cljs$core$async$state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto___35042))
})();
var state__33471__auto__ = (function (){var statearr_33602 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_33602[(6)] = c__33469__auto___35042);

return statearr_33602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto___35042))
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
return (function (p__33603){
var vec__33604 = p__33603;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33604,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33604,(1),null);
var job = vec__33604;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33469__auto___35084 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto___35084,res,vec__33604,v,p,job,jobs,results){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto___35084,res,vec__33604,v,p,job,jobs,results){
return (function (state_33611){
var state_val_33612 = (state_33611[(1)]);
if((state_val_33612 === (1))){
var state_33611__$1 = state_33611;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33611__$1,(2),res,v);
} else {
if((state_val_33612 === (2))){
var inst_33608 = (state_33611[(2)]);
var inst_33609 = cljs.core.async.close_BANG_(res);
var state_33611__$1 = (function (){var statearr_33613 = state_33611;
(statearr_33613[(7)] = inst_33608);

return statearr_33613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33611__$1,inst_33609);
} else {
return null;
}
}
});})(c__33469__auto___35084,res,vec__33604,v,p,job,jobs,results))
;
return ((function (switch__33368__auto__,c__33469__auto___35084,res,vec__33604,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____0 = (function (){
var statearr_33614 = [null,null,null,null,null,null,null,null];
(statearr_33614[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__);

(statearr_33614[(1)] = (1));

return statearr_33614;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____1 = (function (state_33611){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_33611);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e33615){if((e33615 instanceof Object)){
var ex__33372__auto__ = e33615;
var statearr_33616_35100 = state_33611;
(statearr_33616_35100[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33615;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35103 = state_33611;
state_33611 = G__35103;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__ = function(state_33611){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____1.call(this,state_33611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto___35084,res,vec__33604,v,p,job,jobs,results))
})();
var state__33471__auto__ = (function (){var statearr_33617 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_33617[(6)] = c__33469__auto___35084);

return statearr_33617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto___35084,res,vec__33604,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33618){
var vec__33619 = p__33618;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33619,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33619,(1),null);
var job = vec__33619;
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
var n__4607__auto___35107 = n;
var __35108 = (0);
while(true){
if((__35108 < n__4607__auto___35107)){
var G__33622_35110 = type;
var G__33622_35111__$1 = (((G__33622_35110 instanceof cljs.core.Keyword))?G__33622_35110.fqn:null);
switch (G__33622_35111__$1) {
case "compute":
var c__33469__auto___35113 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35108,c__33469__auto___35113,G__33622_35110,G__33622_35111__$1,n__4607__auto___35107,jobs,results,process,async){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (__35108,c__33469__auto___35113,G__33622_35110,G__33622_35111__$1,n__4607__auto___35107,jobs,results,process,async){
return (function (state_33635){
var state_val_33636 = (state_33635[(1)]);
if((state_val_33636 === (1))){
var state_33635__$1 = state_33635;
var statearr_33637_35114 = state_33635__$1;
(statearr_33637_35114[(2)] = null);

(statearr_33637_35114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (2))){
var state_33635__$1 = state_33635;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33635__$1,(4),jobs);
} else {
if((state_val_33636 === (3))){
var inst_33633 = (state_33635[(2)]);
var state_33635__$1 = state_33635;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33635__$1,inst_33633);
} else {
if((state_val_33636 === (4))){
var inst_33625 = (state_33635[(2)]);
var inst_33626 = process(inst_33625);
var state_33635__$1 = state_33635;
if(cljs.core.truth_(inst_33626)){
var statearr_33638_35117 = state_33635__$1;
(statearr_33638_35117[(1)] = (5));

} else {
var statearr_33639_35118 = state_33635__$1;
(statearr_33639_35118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (5))){
var state_33635__$1 = state_33635;
var statearr_33640_35119 = state_33635__$1;
(statearr_33640_35119[(2)] = null);

(statearr_33640_35119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (6))){
var state_33635__$1 = state_33635;
var statearr_33641_35120 = state_33635__$1;
(statearr_33641_35120[(2)] = null);

(statearr_33641_35120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33636 === (7))){
var inst_33631 = (state_33635[(2)]);
var state_33635__$1 = state_33635;
var statearr_33642_35121 = state_33635__$1;
(statearr_33642_35121[(2)] = inst_33631);

(statearr_33642_35121[(1)] = (3));


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
});})(__35108,c__33469__auto___35113,G__33622_35110,G__33622_35111__$1,n__4607__auto___35107,jobs,results,process,async))
;
return ((function (__35108,switch__33368__auto__,c__33469__auto___35113,G__33622_35110,G__33622_35111__$1,n__4607__auto___35107,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____0 = (function (){
var statearr_33643 = [null,null,null,null,null,null,null];
(statearr_33643[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__);

(statearr_33643[(1)] = (1));

return statearr_33643;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____1 = (function (state_33635){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_33635);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e33644){if((e33644 instanceof Object)){
var ex__33372__auto__ = e33644;
var statearr_33645_35123 = state_33635;
(statearr_33645_35123[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33644;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35124 = state_33635;
state_33635 = G__35124;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__ = function(state_33635){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____1.call(this,state_33635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__;
})()
;})(__35108,switch__33368__auto__,c__33469__auto___35113,G__33622_35110,G__33622_35111__$1,n__4607__auto___35107,jobs,results,process,async))
})();
var state__33471__auto__ = (function (){var statearr_33646 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_33646[(6)] = c__33469__auto___35113);

return statearr_33646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(__35108,c__33469__auto___35113,G__33622_35110,G__33622_35111__$1,n__4607__auto___35107,jobs,results,process,async))
);


break;
case "async":
var c__33469__auto___35125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35108,c__33469__auto___35125,G__33622_35110,G__33622_35111__$1,n__4607__auto___35107,jobs,results,process,async){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (__35108,c__33469__auto___35125,G__33622_35110,G__33622_35111__$1,n__4607__auto___35107,jobs,results,process,async){
return (function (state_33659){
var state_val_33660 = (state_33659[(1)]);
if((state_val_33660 === (1))){
var state_33659__$1 = state_33659;
var statearr_33661_35134 = state_33659__$1;
(statearr_33661_35134[(2)] = null);

(statearr_33661_35134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (2))){
var state_33659__$1 = state_33659;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33659__$1,(4),jobs);
} else {
if((state_val_33660 === (3))){
var inst_33657 = (state_33659[(2)]);
var state_33659__$1 = state_33659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33659__$1,inst_33657);
} else {
if((state_val_33660 === (4))){
var inst_33649 = (state_33659[(2)]);
var inst_33650 = async(inst_33649);
var state_33659__$1 = state_33659;
if(cljs.core.truth_(inst_33650)){
var statearr_33662_35139 = state_33659__$1;
(statearr_33662_35139[(1)] = (5));

} else {
var statearr_33663_35140 = state_33659__$1;
(statearr_33663_35140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (5))){
var state_33659__$1 = state_33659;
var statearr_33664_35141 = state_33659__$1;
(statearr_33664_35141[(2)] = null);

(statearr_33664_35141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (6))){
var state_33659__$1 = state_33659;
var statearr_33665_35146 = state_33659__$1;
(statearr_33665_35146[(2)] = null);

(statearr_33665_35146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33660 === (7))){
var inst_33655 = (state_33659[(2)]);
var state_33659__$1 = state_33659;
var statearr_33666_35147 = state_33659__$1;
(statearr_33666_35147[(2)] = inst_33655);

(statearr_33666_35147[(1)] = (3));


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
});})(__35108,c__33469__auto___35125,G__33622_35110,G__33622_35111__$1,n__4607__auto___35107,jobs,results,process,async))
;
return ((function (__35108,switch__33368__auto__,c__33469__auto___35125,G__33622_35110,G__33622_35111__$1,n__4607__auto___35107,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____0 = (function (){
var statearr_33667 = [null,null,null,null,null,null,null];
(statearr_33667[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__);

(statearr_33667[(1)] = (1));

return statearr_33667;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____1 = (function (state_33659){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_33659);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e33668){if((e33668 instanceof Object)){
var ex__33372__auto__ = e33668;
var statearr_33669_35152 = state_33659;
(statearr_33669_35152[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33668;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35153 = state_33659;
state_33659 = G__35153;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__ = function(state_33659){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____1.call(this,state_33659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__;
})()
;})(__35108,switch__33368__auto__,c__33469__auto___35125,G__33622_35110,G__33622_35111__$1,n__4607__auto___35107,jobs,results,process,async))
})();
var state__33471__auto__ = (function (){var statearr_33670 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_33670[(6)] = c__33469__auto___35125);

return statearr_33670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(__35108,c__33469__auto___35125,G__33622_35110,G__33622_35111__$1,n__4607__auto___35107,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33622_35111__$1)].join('')));

}

var G__35159 = (__35108 + (1));
__35108 = G__35159;
continue;
} else {
}
break;
}

var c__33469__auto___35160 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto___35160,jobs,results,process,async){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto___35160,jobs,results,process,async){
return (function (state_33692){
var state_val_33693 = (state_33692[(1)]);
if((state_val_33693 === (7))){
var inst_33688 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33694_35163 = state_33692__$1;
(statearr_33694_35163[(2)] = inst_33688);

(statearr_33694_35163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (1))){
var state_33692__$1 = state_33692;
var statearr_33695_35166 = state_33692__$1;
(statearr_33695_35166[(2)] = null);

(statearr_33695_35166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (4))){
var inst_33673 = (state_33692[(7)]);
var inst_33673__$1 = (state_33692[(2)]);
var inst_33674 = (inst_33673__$1 == null);
var state_33692__$1 = (function (){var statearr_33696 = state_33692;
(statearr_33696[(7)] = inst_33673__$1);

return statearr_33696;
})();
if(cljs.core.truth_(inst_33674)){
var statearr_33697_35167 = state_33692__$1;
(statearr_33697_35167[(1)] = (5));

} else {
var statearr_33698_35168 = state_33692__$1;
(statearr_33698_35168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (6))){
var inst_33673 = (state_33692[(7)]);
var inst_33678 = (state_33692[(8)]);
var inst_33678__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33679 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33680 = [inst_33673,inst_33678__$1];
var inst_33681 = (new cljs.core.PersistentVector(null,2,(5),inst_33679,inst_33680,null));
var state_33692__$1 = (function (){var statearr_33699 = state_33692;
(statearr_33699[(8)] = inst_33678__$1);

return statearr_33699;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33692__$1,(8),jobs,inst_33681);
} else {
if((state_val_33693 === (3))){
var inst_33690 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33692__$1,inst_33690);
} else {
if((state_val_33693 === (2))){
var state_33692__$1 = state_33692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33692__$1,(4),from);
} else {
if((state_val_33693 === (9))){
var inst_33685 = (state_33692[(2)]);
var state_33692__$1 = (function (){var statearr_33700 = state_33692;
(statearr_33700[(9)] = inst_33685);

return statearr_33700;
})();
var statearr_33701_35175 = state_33692__$1;
(statearr_33701_35175[(2)] = null);

(statearr_33701_35175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (5))){
var inst_33676 = cljs.core.async.close_BANG_(jobs);
var state_33692__$1 = state_33692;
var statearr_33702_35179 = state_33692__$1;
(statearr_33702_35179[(2)] = inst_33676);

(statearr_33702_35179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (8))){
var inst_33678 = (state_33692[(8)]);
var inst_33683 = (state_33692[(2)]);
var state_33692__$1 = (function (){var statearr_33703 = state_33692;
(statearr_33703[(10)] = inst_33683);

return statearr_33703;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33692__$1,(9),results,inst_33678);
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
});})(c__33469__auto___35160,jobs,results,process,async))
;
return ((function (switch__33368__auto__,c__33469__auto___35160,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____0 = (function (){
var statearr_33704 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33704[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__);

(statearr_33704[(1)] = (1));

return statearr_33704;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____1 = (function (state_33692){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_33692);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e33705){if((e33705 instanceof Object)){
var ex__33372__auto__ = e33705;
var statearr_33706_35190 = state_33692;
(statearr_33706_35190[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35191 = state_33692;
state_33692 = G__35191;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__ = function(state_33692){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____1.call(this,state_33692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto___35160,jobs,results,process,async))
})();
var state__33471__auto__ = (function (){var statearr_33707 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_33707[(6)] = c__33469__auto___35160);

return statearr_33707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto___35160,jobs,results,process,async))
);


var c__33469__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto__,jobs,results,process,async){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto__,jobs,results,process,async){
return (function (state_33745){
var state_val_33746 = (state_33745[(1)]);
if((state_val_33746 === (7))){
var inst_33741 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33747_35195 = state_33745__$1;
(statearr_33747_35195[(2)] = inst_33741);

(statearr_33747_35195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (20))){
var state_33745__$1 = state_33745;
var statearr_33748_35196 = state_33745__$1;
(statearr_33748_35196[(2)] = null);

(statearr_33748_35196[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (1))){
var state_33745__$1 = state_33745;
var statearr_33749_35200 = state_33745__$1;
(statearr_33749_35200[(2)] = null);

(statearr_33749_35200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (4))){
var inst_33710 = (state_33745[(7)]);
var inst_33710__$1 = (state_33745[(2)]);
var inst_33711 = (inst_33710__$1 == null);
var state_33745__$1 = (function (){var statearr_33750 = state_33745;
(statearr_33750[(7)] = inst_33710__$1);

return statearr_33750;
})();
if(cljs.core.truth_(inst_33711)){
var statearr_33751_35201 = state_33745__$1;
(statearr_33751_35201[(1)] = (5));

} else {
var statearr_33752_35202 = state_33745__$1;
(statearr_33752_35202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (15))){
var inst_33723 = (state_33745[(8)]);
var state_33745__$1 = state_33745;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33745__$1,(18),to,inst_33723);
} else {
if((state_val_33746 === (21))){
var inst_33736 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33753_35203 = state_33745__$1;
(statearr_33753_35203[(2)] = inst_33736);

(statearr_33753_35203[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (13))){
var inst_33738 = (state_33745[(2)]);
var state_33745__$1 = (function (){var statearr_33754 = state_33745;
(statearr_33754[(9)] = inst_33738);

return statearr_33754;
})();
var statearr_33755_35208 = state_33745__$1;
(statearr_33755_35208[(2)] = null);

(statearr_33755_35208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (6))){
var inst_33710 = (state_33745[(7)]);
var state_33745__$1 = state_33745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33745__$1,(11),inst_33710);
} else {
if((state_val_33746 === (17))){
var inst_33731 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
if(cljs.core.truth_(inst_33731)){
var statearr_33756_35212 = state_33745__$1;
(statearr_33756_35212[(1)] = (19));

} else {
var statearr_33757_35216 = state_33745__$1;
(statearr_33757_35216[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (3))){
var inst_33743 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33745__$1,inst_33743);
} else {
if((state_val_33746 === (12))){
var inst_33720 = (state_33745[(10)]);
var state_33745__$1 = state_33745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33745__$1,(14),inst_33720);
} else {
if((state_val_33746 === (2))){
var state_33745__$1 = state_33745;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33745__$1,(4),results);
} else {
if((state_val_33746 === (19))){
var state_33745__$1 = state_33745;
var statearr_33758_35217 = state_33745__$1;
(statearr_33758_35217[(2)] = null);

(statearr_33758_35217[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (11))){
var inst_33720 = (state_33745[(2)]);
var state_33745__$1 = (function (){var statearr_33759 = state_33745;
(statearr_33759[(10)] = inst_33720);

return statearr_33759;
})();
var statearr_33760_35218 = state_33745__$1;
(statearr_33760_35218[(2)] = null);

(statearr_33760_35218[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (9))){
var state_33745__$1 = state_33745;
var statearr_33761_35222 = state_33745__$1;
(statearr_33761_35222[(2)] = null);

(statearr_33761_35222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (5))){
var state_33745__$1 = state_33745;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33762_35226 = state_33745__$1;
(statearr_33762_35226[(1)] = (8));

} else {
var statearr_33763_35227 = state_33745__$1;
(statearr_33763_35227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (14))){
var inst_33723 = (state_33745[(8)]);
var inst_33725 = (state_33745[(11)]);
var inst_33723__$1 = (state_33745[(2)]);
var inst_33724 = (inst_33723__$1 == null);
var inst_33725__$1 = cljs.core.not(inst_33724);
var state_33745__$1 = (function (){var statearr_33764 = state_33745;
(statearr_33764[(8)] = inst_33723__$1);

(statearr_33764[(11)] = inst_33725__$1);

return statearr_33764;
})();
if(inst_33725__$1){
var statearr_33765_35231 = state_33745__$1;
(statearr_33765_35231[(1)] = (15));

} else {
var statearr_33766_35235 = state_33745__$1;
(statearr_33766_35235[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (16))){
var inst_33725 = (state_33745[(11)]);
var state_33745__$1 = state_33745;
var statearr_33767_35236 = state_33745__$1;
(statearr_33767_35236[(2)] = inst_33725);

(statearr_33767_35236[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (10))){
var inst_33717 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33768_35237 = state_33745__$1;
(statearr_33768_35237[(2)] = inst_33717);

(statearr_33768_35237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (18))){
var inst_33728 = (state_33745[(2)]);
var state_33745__$1 = state_33745;
var statearr_33769_35238 = state_33745__$1;
(statearr_33769_35238[(2)] = inst_33728);

(statearr_33769_35238[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33746 === (8))){
var inst_33714 = cljs.core.async.close_BANG_(to);
var state_33745__$1 = state_33745;
var statearr_33770_35245 = state_33745__$1;
(statearr_33770_35245[(2)] = inst_33714);

(statearr_33770_35245[(1)] = (10));


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
});})(c__33469__auto__,jobs,results,process,async))
;
return ((function (switch__33368__auto__,c__33469__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____0 = (function (){
var statearr_33771 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33771[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__);

(statearr_33771[(1)] = (1));

return statearr_33771;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____1 = (function (state_33745){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_33745);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e33772){if((e33772 instanceof Object)){
var ex__33372__auto__ = e33772;
var statearr_33773_35247 = state_33745;
(statearr_33773_35247[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33772;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35248 = state_33745;
state_33745 = G__35248;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__ = function(state_33745){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____1.call(this,state_33745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33369__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto__,jobs,results,process,async))
})();
var state__33471__auto__ = (function (){var statearr_33774 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_33774[(6)] = c__33469__auto__);

return statearr_33774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto__,jobs,results,process,async))
);

return c__33469__auto__;
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
var G__33776 = arguments.length;
switch (G__33776) {
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
var G__33778 = arguments.length;
switch (G__33778) {
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
var G__33780 = arguments.length;
switch (G__33780) {
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
var c__33469__auto___35254 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto___35254,tc,fc){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto___35254,tc,fc){
return (function (state_33806){
var state_val_33807 = (state_33806[(1)]);
if((state_val_33807 === (7))){
var inst_33802 = (state_33806[(2)]);
var state_33806__$1 = state_33806;
var statearr_33808_35255 = state_33806__$1;
(statearr_33808_35255[(2)] = inst_33802);

(statearr_33808_35255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (1))){
var state_33806__$1 = state_33806;
var statearr_33809_35256 = state_33806__$1;
(statearr_33809_35256[(2)] = null);

(statearr_33809_35256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (4))){
var inst_33783 = (state_33806[(7)]);
var inst_33783__$1 = (state_33806[(2)]);
var inst_33784 = (inst_33783__$1 == null);
var state_33806__$1 = (function (){var statearr_33810 = state_33806;
(statearr_33810[(7)] = inst_33783__$1);

return statearr_33810;
})();
if(cljs.core.truth_(inst_33784)){
var statearr_33811_35257 = state_33806__$1;
(statearr_33811_35257[(1)] = (5));

} else {
var statearr_33812_35258 = state_33806__$1;
(statearr_33812_35258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (13))){
var state_33806__$1 = state_33806;
var statearr_33813_35261 = state_33806__$1;
(statearr_33813_35261[(2)] = null);

(statearr_33813_35261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (6))){
var inst_33783 = (state_33806[(7)]);
var inst_33789 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33783) : p.call(null,inst_33783));
var state_33806__$1 = state_33806;
if(cljs.core.truth_(inst_33789)){
var statearr_33814_35263 = state_33806__$1;
(statearr_33814_35263[(1)] = (9));

} else {
var statearr_33815_35264 = state_33806__$1;
(statearr_33815_35264[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (3))){
var inst_33804 = (state_33806[(2)]);
var state_33806__$1 = state_33806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33806__$1,inst_33804);
} else {
if((state_val_33807 === (12))){
var state_33806__$1 = state_33806;
var statearr_33816_35268 = state_33806__$1;
(statearr_33816_35268[(2)] = null);

(statearr_33816_35268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (2))){
var state_33806__$1 = state_33806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33806__$1,(4),ch);
} else {
if((state_val_33807 === (11))){
var inst_33783 = (state_33806[(7)]);
var inst_33793 = (state_33806[(2)]);
var state_33806__$1 = state_33806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33806__$1,(8),inst_33793,inst_33783);
} else {
if((state_val_33807 === (9))){
var state_33806__$1 = state_33806;
var statearr_33817_35270 = state_33806__$1;
(statearr_33817_35270[(2)] = tc);

(statearr_33817_35270[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (5))){
var inst_33786 = cljs.core.async.close_BANG_(tc);
var inst_33787 = cljs.core.async.close_BANG_(fc);
var state_33806__$1 = (function (){var statearr_33818 = state_33806;
(statearr_33818[(8)] = inst_33786);

return statearr_33818;
})();
var statearr_33819_35273 = state_33806__$1;
(statearr_33819_35273[(2)] = inst_33787);

(statearr_33819_35273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (14))){
var inst_33800 = (state_33806[(2)]);
var state_33806__$1 = state_33806;
var statearr_33820_35274 = state_33806__$1;
(statearr_33820_35274[(2)] = inst_33800);

(statearr_33820_35274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (10))){
var state_33806__$1 = state_33806;
var statearr_33821_35275 = state_33806__$1;
(statearr_33821_35275[(2)] = fc);

(statearr_33821_35275[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (8))){
var inst_33795 = (state_33806[(2)]);
var state_33806__$1 = state_33806;
if(cljs.core.truth_(inst_33795)){
var statearr_33822_35276 = state_33806__$1;
(statearr_33822_35276[(1)] = (12));

} else {
var statearr_33823_35277 = state_33806__$1;
(statearr_33823_35277[(1)] = (13));

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
});})(c__33469__auto___35254,tc,fc))
;
return ((function (switch__33368__auto__,c__33469__auto___35254,tc,fc){
return (function() {
var cljs$core$async$state_machine__33369__auto__ = null;
var cljs$core$async$state_machine__33369__auto____0 = (function (){
var statearr_33824 = [null,null,null,null,null,null,null,null,null];
(statearr_33824[(0)] = cljs$core$async$state_machine__33369__auto__);

(statearr_33824[(1)] = (1));

return statearr_33824;
});
var cljs$core$async$state_machine__33369__auto____1 = (function (state_33806){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_33806);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e33825){if((e33825 instanceof Object)){
var ex__33372__auto__ = e33825;
var statearr_33826_35280 = state_33806;
(statearr_33826_35280[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33825;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35282 = state_33806;
state_33806 = G__35282;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$state_machine__33369__auto__ = function(state_33806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33369__auto____1.call(this,state_33806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33369__auto____0;
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33369__auto____1;
return cljs$core$async$state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto___35254,tc,fc))
})();
var state__33471__auto__ = (function (){var statearr_33827 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_33827[(6)] = c__33469__auto___35254);

return statearr_33827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto___35254,tc,fc))
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
var c__33469__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto__){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto__){
return (function (state_33848){
var state_val_33849 = (state_33848[(1)]);
if((state_val_33849 === (7))){
var inst_33844 = (state_33848[(2)]);
var state_33848__$1 = state_33848;
var statearr_33850_35290 = state_33848__$1;
(statearr_33850_35290[(2)] = inst_33844);

(statearr_33850_35290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (1))){
var inst_33828 = init;
var state_33848__$1 = (function (){var statearr_33851 = state_33848;
(statearr_33851[(7)] = inst_33828);

return statearr_33851;
})();
var statearr_33852_35293 = state_33848__$1;
(statearr_33852_35293[(2)] = null);

(statearr_33852_35293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (4))){
var inst_33831 = (state_33848[(8)]);
var inst_33831__$1 = (state_33848[(2)]);
var inst_33832 = (inst_33831__$1 == null);
var state_33848__$1 = (function (){var statearr_33853 = state_33848;
(statearr_33853[(8)] = inst_33831__$1);

return statearr_33853;
})();
if(cljs.core.truth_(inst_33832)){
var statearr_33854_35297 = state_33848__$1;
(statearr_33854_35297[(1)] = (5));

} else {
var statearr_33855_35298 = state_33848__$1;
(statearr_33855_35298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (6))){
var inst_33831 = (state_33848[(8)]);
var inst_33835 = (state_33848[(9)]);
var inst_33828 = (state_33848[(7)]);
var inst_33835__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33828,inst_33831) : f.call(null,inst_33828,inst_33831));
var inst_33836 = cljs.core.reduced_QMARK_(inst_33835__$1);
var state_33848__$1 = (function (){var statearr_33856 = state_33848;
(statearr_33856[(9)] = inst_33835__$1);

return statearr_33856;
})();
if(inst_33836){
var statearr_33857_35305 = state_33848__$1;
(statearr_33857_35305[(1)] = (8));

} else {
var statearr_33858_35310 = state_33848__$1;
(statearr_33858_35310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (3))){
var inst_33846 = (state_33848[(2)]);
var state_33848__$1 = state_33848;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33848__$1,inst_33846);
} else {
if((state_val_33849 === (2))){
var state_33848__$1 = state_33848;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33848__$1,(4),ch);
} else {
if((state_val_33849 === (9))){
var inst_33835 = (state_33848[(9)]);
var inst_33828 = inst_33835;
var state_33848__$1 = (function (){var statearr_33859 = state_33848;
(statearr_33859[(7)] = inst_33828);

return statearr_33859;
})();
var statearr_33860_35317 = state_33848__$1;
(statearr_33860_35317[(2)] = null);

(statearr_33860_35317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (5))){
var inst_33828 = (state_33848[(7)]);
var state_33848__$1 = state_33848;
var statearr_33861_35319 = state_33848__$1;
(statearr_33861_35319[(2)] = inst_33828);

(statearr_33861_35319[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (10))){
var inst_33842 = (state_33848[(2)]);
var state_33848__$1 = state_33848;
var statearr_33862_35322 = state_33848__$1;
(statearr_33862_35322[(2)] = inst_33842);

(statearr_33862_35322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33849 === (8))){
var inst_33835 = (state_33848[(9)]);
var inst_33838 = cljs.core.deref(inst_33835);
var state_33848__$1 = state_33848;
var statearr_33863_35325 = state_33848__$1;
(statearr_33863_35325[(2)] = inst_33838);

(statearr_33863_35325[(1)] = (10));


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
});})(c__33469__auto__))
;
return ((function (switch__33368__auto__,c__33469__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33369__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33369__auto____0 = (function (){
var statearr_33864 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33864[(0)] = cljs$core$async$reduce_$_state_machine__33369__auto__);

(statearr_33864[(1)] = (1));

return statearr_33864;
});
var cljs$core$async$reduce_$_state_machine__33369__auto____1 = (function (state_33848){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_33848);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e33865){if((e33865 instanceof Object)){
var ex__33372__auto__ = e33865;
var statearr_33866_35329 = state_33848;
(statearr_33866_35329[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33865;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35338 = state_33848;
state_33848 = G__35338;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33369__auto__ = function(state_33848){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33369__auto____1.call(this,state_33848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33369__auto____0;
cljs$core$async$reduce_$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33369__auto____1;
return cljs$core$async$reduce_$_state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto__))
})();
var state__33471__auto__ = (function (){var statearr_33867 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_33867[(6)] = c__33469__auto__);

return statearr_33867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto__))
);

return c__33469__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33469__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto__,f__$1){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto__,f__$1){
return (function (state_33873){
var state_val_33874 = (state_33873[(1)]);
if((state_val_33874 === (1))){
var inst_33868 = cljs.core.async.reduce(f__$1,init,ch);
var state_33873__$1 = state_33873;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33873__$1,(2),inst_33868);
} else {
if((state_val_33874 === (2))){
var inst_33870 = (state_33873[(2)]);
var inst_33871 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33870) : f__$1.call(null,inst_33870));
var state_33873__$1 = state_33873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33873__$1,inst_33871);
} else {
return null;
}
}
});})(c__33469__auto__,f__$1))
;
return ((function (switch__33368__auto__,c__33469__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33369__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33369__auto____0 = (function (){
var statearr_33875 = [null,null,null,null,null,null,null];
(statearr_33875[(0)] = cljs$core$async$transduce_$_state_machine__33369__auto__);

(statearr_33875[(1)] = (1));

return statearr_33875;
});
var cljs$core$async$transduce_$_state_machine__33369__auto____1 = (function (state_33873){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_33873);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e33876){if((e33876 instanceof Object)){
var ex__33372__auto__ = e33876;
var statearr_33877_35344 = state_33873;
(statearr_33877_35344[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33876;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35346 = state_33873;
state_33873 = G__35346;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33369__auto__ = function(state_33873){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33369__auto____1.call(this,state_33873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33369__auto____0;
cljs$core$async$transduce_$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33369__auto____1;
return cljs$core$async$transduce_$_state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto__,f__$1))
})();
var state__33471__auto__ = (function (){var statearr_33878 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_33878[(6)] = c__33469__auto__);

return statearr_33878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto__,f__$1))
);

return c__33469__auto__;
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
var G__33880 = arguments.length;
switch (G__33880) {
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
var c__33469__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto__){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto__){
return (function (state_33905){
var state_val_33906 = (state_33905[(1)]);
if((state_val_33906 === (7))){
var inst_33887 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
var statearr_33907_35363 = state_33905__$1;
(statearr_33907_35363[(2)] = inst_33887);

(statearr_33907_35363[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (1))){
var inst_33881 = cljs.core.seq(coll);
var inst_33882 = inst_33881;
var state_33905__$1 = (function (){var statearr_33908 = state_33905;
(statearr_33908[(7)] = inst_33882);

return statearr_33908;
})();
var statearr_33909_35364 = state_33905__$1;
(statearr_33909_35364[(2)] = null);

(statearr_33909_35364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (4))){
var inst_33882 = (state_33905[(7)]);
var inst_33885 = cljs.core.first(inst_33882);
var state_33905__$1 = state_33905;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33905__$1,(7),ch,inst_33885);
} else {
if((state_val_33906 === (13))){
var inst_33899 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
var statearr_33910_35366 = state_33905__$1;
(statearr_33910_35366[(2)] = inst_33899);

(statearr_33910_35366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (6))){
var inst_33890 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
if(cljs.core.truth_(inst_33890)){
var statearr_33911_35371 = state_33905__$1;
(statearr_33911_35371[(1)] = (8));

} else {
var statearr_33912_35372 = state_33905__$1;
(statearr_33912_35372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (3))){
var inst_33903 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33905__$1,inst_33903);
} else {
if((state_val_33906 === (12))){
var state_33905__$1 = state_33905;
var statearr_33913_35380 = state_33905__$1;
(statearr_33913_35380[(2)] = null);

(statearr_33913_35380[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (2))){
var inst_33882 = (state_33905[(7)]);
var state_33905__$1 = state_33905;
if(cljs.core.truth_(inst_33882)){
var statearr_33914_35381 = state_33905__$1;
(statearr_33914_35381[(1)] = (4));

} else {
var statearr_33915_35383 = state_33905__$1;
(statearr_33915_35383[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (11))){
var inst_33896 = cljs.core.async.close_BANG_(ch);
var state_33905__$1 = state_33905;
var statearr_33916_35384 = state_33905__$1;
(statearr_33916_35384[(2)] = inst_33896);

(statearr_33916_35384[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (9))){
var state_33905__$1 = state_33905;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33917_35385 = state_33905__$1;
(statearr_33917_35385[(1)] = (11));

} else {
var statearr_33918_35386 = state_33905__$1;
(statearr_33918_35386[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (5))){
var inst_33882 = (state_33905[(7)]);
var state_33905__$1 = state_33905;
var statearr_33919_35389 = state_33905__$1;
(statearr_33919_35389[(2)] = inst_33882);

(statearr_33919_35389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (10))){
var inst_33901 = (state_33905[(2)]);
var state_33905__$1 = state_33905;
var statearr_33920_35392 = state_33905__$1;
(statearr_33920_35392[(2)] = inst_33901);

(statearr_33920_35392[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33906 === (8))){
var inst_33882 = (state_33905[(7)]);
var inst_33892 = cljs.core.next(inst_33882);
var inst_33882__$1 = inst_33892;
var state_33905__$1 = (function (){var statearr_33921 = state_33905;
(statearr_33921[(7)] = inst_33882__$1);

return statearr_33921;
})();
var statearr_33922_35394 = state_33905__$1;
(statearr_33922_35394[(2)] = null);

(statearr_33922_35394[(1)] = (2));


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
});})(c__33469__auto__))
;
return ((function (switch__33368__auto__,c__33469__auto__){
return (function() {
var cljs$core$async$state_machine__33369__auto__ = null;
var cljs$core$async$state_machine__33369__auto____0 = (function (){
var statearr_33923 = [null,null,null,null,null,null,null,null];
(statearr_33923[(0)] = cljs$core$async$state_machine__33369__auto__);

(statearr_33923[(1)] = (1));

return statearr_33923;
});
var cljs$core$async$state_machine__33369__auto____1 = (function (state_33905){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_33905);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e33924){if((e33924 instanceof Object)){
var ex__33372__auto__ = e33924;
var statearr_33925_35401 = state_33905;
(statearr_33925_35401[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33905);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33924;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35402 = state_33905;
state_33905 = G__35402;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$state_machine__33369__auto__ = function(state_33905){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33369__auto____1.call(this,state_33905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33369__auto____0;
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33369__auto____1;
return cljs$core$async$state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto__))
})();
var state__33471__auto__ = (function (){var statearr_33926 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_33926[(6)] = c__33469__auto__);

return statearr_33926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto__))
);

return c__33469__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33927 = (function (ch,cs,meta33928){
this.ch = ch;
this.cs = cs;
this.meta33928 = meta33928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33929,meta33928__$1){
var self__ = this;
var _33929__$1 = this;
return (new cljs.core.async.t_cljs$core$async33927(self__.ch,self__.cs,meta33928__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33929){
var self__ = this;
var _33929__$1 = this;
return self__.meta33928;
});})(cs))
;

cljs.core.async.t_cljs$core$async33927.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33927.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33927.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33927.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33927.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33927.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33927.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33928","meta33928",-108449810,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33927";

cljs.core.async.t_cljs$core$async33927.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33927");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33927.
 */
cljs.core.async.__GT_t_cljs$core$async33927 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33927(ch__$1,cs__$1,meta33928){
return (new cljs.core.async.t_cljs$core$async33927(ch__$1,cs__$1,meta33928));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33927(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33469__auto___35438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto___35438,cs,m,dchan,dctr,done){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto___35438,cs,m,dchan,dctr,done){
return (function (state_34064){
var state_val_34065 = (state_34064[(1)]);
if((state_val_34065 === (7))){
var inst_34060 = (state_34064[(2)]);
var state_34064__$1 = state_34064;
var statearr_34066_35439 = state_34064__$1;
(statearr_34066_35439[(2)] = inst_34060);

(statearr_34066_35439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (20))){
var inst_33963 = (state_34064[(7)]);
var inst_33975 = cljs.core.first(inst_33963);
var inst_33976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33975,(0),null);
var inst_33977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33975,(1),null);
var state_34064__$1 = (function (){var statearr_34067 = state_34064;
(statearr_34067[(8)] = inst_33976);

return statearr_34067;
})();
if(cljs.core.truth_(inst_33977)){
var statearr_34068_35444 = state_34064__$1;
(statearr_34068_35444[(1)] = (22));

} else {
var statearr_34069_35445 = state_34064__$1;
(statearr_34069_35445[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (27))){
var inst_34012 = (state_34064[(9)]);
var inst_34007 = (state_34064[(10)]);
var inst_33932 = (state_34064[(11)]);
var inst_34005 = (state_34064[(12)]);
var inst_34012__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34005,inst_34007);
var inst_34013 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34012__$1,inst_33932,done);
var state_34064__$1 = (function (){var statearr_34070 = state_34064;
(statearr_34070[(9)] = inst_34012__$1);

return statearr_34070;
})();
if(cljs.core.truth_(inst_34013)){
var statearr_34071_35449 = state_34064__$1;
(statearr_34071_35449[(1)] = (30));

} else {
var statearr_34072_35450 = state_34064__$1;
(statearr_34072_35450[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (1))){
var state_34064__$1 = state_34064;
var statearr_34073_35451 = state_34064__$1;
(statearr_34073_35451[(2)] = null);

(statearr_34073_35451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (24))){
var inst_33963 = (state_34064[(7)]);
var inst_33982 = (state_34064[(2)]);
var inst_33983 = cljs.core.next(inst_33963);
var inst_33941 = inst_33983;
var inst_33942 = null;
var inst_33943 = (0);
var inst_33944 = (0);
var state_34064__$1 = (function (){var statearr_34074 = state_34064;
(statearr_34074[(13)] = inst_33941);

(statearr_34074[(14)] = inst_33942);

(statearr_34074[(15)] = inst_33944);

(statearr_34074[(16)] = inst_33982);

(statearr_34074[(17)] = inst_33943);

return statearr_34074;
})();
var statearr_34075_35452 = state_34064__$1;
(statearr_34075_35452[(2)] = null);

(statearr_34075_35452[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (39))){
var state_34064__$1 = state_34064;
var statearr_34079_35453 = state_34064__$1;
(statearr_34079_35453[(2)] = null);

(statearr_34079_35453[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (4))){
var inst_33932 = (state_34064[(11)]);
var inst_33932__$1 = (state_34064[(2)]);
var inst_33933 = (inst_33932__$1 == null);
var state_34064__$1 = (function (){var statearr_34080 = state_34064;
(statearr_34080[(11)] = inst_33932__$1);

return statearr_34080;
})();
if(cljs.core.truth_(inst_33933)){
var statearr_34081_35454 = state_34064__$1;
(statearr_34081_35454[(1)] = (5));

} else {
var statearr_34082_35455 = state_34064__$1;
(statearr_34082_35455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (15))){
var inst_33941 = (state_34064[(13)]);
var inst_33942 = (state_34064[(14)]);
var inst_33944 = (state_34064[(15)]);
var inst_33943 = (state_34064[(17)]);
var inst_33959 = (state_34064[(2)]);
var inst_33960 = (inst_33944 + (1));
var tmp34076 = inst_33941;
var tmp34077 = inst_33942;
var tmp34078 = inst_33943;
var inst_33941__$1 = tmp34076;
var inst_33942__$1 = tmp34077;
var inst_33943__$1 = tmp34078;
var inst_33944__$1 = inst_33960;
var state_34064__$1 = (function (){var statearr_34083 = state_34064;
(statearr_34083[(13)] = inst_33941__$1);

(statearr_34083[(14)] = inst_33942__$1);

(statearr_34083[(15)] = inst_33944__$1);

(statearr_34083[(18)] = inst_33959);

(statearr_34083[(17)] = inst_33943__$1);

return statearr_34083;
})();
var statearr_34084_35459 = state_34064__$1;
(statearr_34084_35459[(2)] = null);

(statearr_34084_35459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (21))){
var inst_33986 = (state_34064[(2)]);
var state_34064__$1 = state_34064;
var statearr_34088_35464 = state_34064__$1;
(statearr_34088_35464[(2)] = inst_33986);

(statearr_34088_35464[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (31))){
var inst_34012 = (state_34064[(9)]);
var inst_34016 = done(null);
var inst_34017 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34012);
var state_34064__$1 = (function (){var statearr_34089 = state_34064;
(statearr_34089[(19)] = inst_34016);

return statearr_34089;
})();
var statearr_34090_35466 = state_34064__$1;
(statearr_34090_35466[(2)] = inst_34017);

(statearr_34090_35466[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (32))){
var inst_34007 = (state_34064[(10)]);
var inst_34004 = (state_34064[(20)]);
var inst_34006 = (state_34064[(21)]);
var inst_34005 = (state_34064[(12)]);
var inst_34019 = (state_34064[(2)]);
var inst_34020 = (inst_34007 + (1));
var tmp34085 = inst_34004;
var tmp34086 = inst_34006;
var tmp34087 = inst_34005;
var inst_34004__$1 = tmp34085;
var inst_34005__$1 = tmp34087;
var inst_34006__$1 = tmp34086;
var inst_34007__$1 = inst_34020;
var state_34064__$1 = (function (){var statearr_34091 = state_34064;
(statearr_34091[(10)] = inst_34007__$1);

(statearr_34091[(20)] = inst_34004__$1);

(statearr_34091[(21)] = inst_34006__$1);

(statearr_34091[(12)] = inst_34005__$1);

(statearr_34091[(22)] = inst_34019);

return statearr_34091;
})();
var statearr_34092_35467 = state_34064__$1;
(statearr_34092_35467[(2)] = null);

(statearr_34092_35467[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (40))){
var inst_34032 = (state_34064[(23)]);
var inst_34036 = done(null);
var inst_34037 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34032);
var state_34064__$1 = (function (){var statearr_34093 = state_34064;
(statearr_34093[(24)] = inst_34036);

return statearr_34093;
})();
var statearr_34094_35468 = state_34064__$1;
(statearr_34094_35468[(2)] = inst_34037);

(statearr_34094_35468[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (33))){
var inst_34023 = (state_34064[(25)]);
var inst_34025 = cljs.core.chunked_seq_QMARK_(inst_34023);
var state_34064__$1 = state_34064;
if(inst_34025){
var statearr_34095_35469 = state_34064__$1;
(statearr_34095_35469[(1)] = (36));

} else {
var statearr_34096_35470 = state_34064__$1;
(statearr_34096_35470[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (13))){
var inst_33953 = (state_34064[(26)]);
var inst_33956 = cljs.core.async.close_BANG_(inst_33953);
var state_34064__$1 = state_34064;
var statearr_34097_35471 = state_34064__$1;
(statearr_34097_35471[(2)] = inst_33956);

(statearr_34097_35471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (22))){
var inst_33976 = (state_34064[(8)]);
var inst_33979 = cljs.core.async.close_BANG_(inst_33976);
var state_34064__$1 = state_34064;
var statearr_34098_35472 = state_34064__$1;
(statearr_34098_35472[(2)] = inst_33979);

(statearr_34098_35472[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (36))){
var inst_34023 = (state_34064[(25)]);
var inst_34027 = cljs.core.chunk_first(inst_34023);
var inst_34028 = cljs.core.chunk_rest(inst_34023);
var inst_34029 = cljs.core.count(inst_34027);
var inst_34004 = inst_34028;
var inst_34005 = inst_34027;
var inst_34006 = inst_34029;
var inst_34007 = (0);
var state_34064__$1 = (function (){var statearr_34099 = state_34064;
(statearr_34099[(10)] = inst_34007);

(statearr_34099[(20)] = inst_34004);

(statearr_34099[(21)] = inst_34006);

(statearr_34099[(12)] = inst_34005);

return statearr_34099;
})();
var statearr_34100_35474 = state_34064__$1;
(statearr_34100_35474[(2)] = null);

(statearr_34100_35474[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (41))){
var inst_34023 = (state_34064[(25)]);
var inst_34039 = (state_34064[(2)]);
var inst_34040 = cljs.core.next(inst_34023);
var inst_34004 = inst_34040;
var inst_34005 = null;
var inst_34006 = (0);
var inst_34007 = (0);
var state_34064__$1 = (function (){var statearr_34101 = state_34064;
(statearr_34101[(10)] = inst_34007);

(statearr_34101[(20)] = inst_34004);

(statearr_34101[(27)] = inst_34039);

(statearr_34101[(21)] = inst_34006);

(statearr_34101[(12)] = inst_34005);

return statearr_34101;
})();
var statearr_34102_35479 = state_34064__$1;
(statearr_34102_35479[(2)] = null);

(statearr_34102_35479[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (43))){
var state_34064__$1 = state_34064;
var statearr_34103_35480 = state_34064__$1;
(statearr_34103_35480[(2)] = null);

(statearr_34103_35480[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (29))){
var inst_34048 = (state_34064[(2)]);
var state_34064__$1 = state_34064;
var statearr_34104_35481 = state_34064__$1;
(statearr_34104_35481[(2)] = inst_34048);

(statearr_34104_35481[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (44))){
var inst_34057 = (state_34064[(2)]);
var state_34064__$1 = (function (){var statearr_34105 = state_34064;
(statearr_34105[(28)] = inst_34057);

return statearr_34105;
})();
var statearr_34106_35482 = state_34064__$1;
(statearr_34106_35482[(2)] = null);

(statearr_34106_35482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (6))){
var inst_33996 = (state_34064[(29)]);
var inst_33995 = cljs.core.deref(cs);
var inst_33996__$1 = cljs.core.keys(inst_33995);
var inst_33997 = cljs.core.count(inst_33996__$1);
var inst_33998 = cljs.core.reset_BANG_(dctr,inst_33997);
var inst_34003 = cljs.core.seq(inst_33996__$1);
var inst_34004 = inst_34003;
var inst_34005 = null;
var inst_34006 = (0);
var inst_34007 = (0);
var state_34064__$1 = (function (){var statearr_34107 = state_34064;
(statearr_34107[(10)] = inst_34007);

(statearr_34107[(20)] = inst_34004);

(statearr_34107[(30)] = inst_33998);

(statearr_34107[(29)] = inst_33996__$1);

(statearr_34107[(21)] = inst_34006);

(statearr_34107[(12)] = inst_34005);

return statearr_34107;
})();
var statearr_34108_35483 = state_34064__$1;
(statearr_34108_35483[(2)] = null);

(statearr_34108_35483[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (28))){
var inst_34004 = (state_34064[(20)]);
var inst_34023 = (state_34064[(25)]);
var inst_34023__$1 = cljs.core.seq(inst_34004);
var state_34064__$1 = (function (){var statearr_34109 = state_34064;
(statearr_34109[(25)] = inst_34023__$1);

return statearr_34109;
})();
if(inst_34023__$1){
var statearr_34110_35484 = state_34064__$1;
(statearr_34110_35484[(1)] = (33));

} else {
var statearr_34111_35485 = state_34064__$1;
(statearr_34111_35485[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (25))){
var inst_34007 = (state_34064[(10)]);
var inst_34006 = (state_34064[(21)]);
var inst_34009 = (inst_34007 < inst_34006);
var inst_34010 = inst_34009;
var state_34064__$1 = state_34064;
if(cljs.core.truth_(inst_34010)){
var statearr_34112_35486 = state_34064__$1;
(statearr_34112_35486[(1)] = (27));

} else {
var statearr_34113_35487 = state_34064__$1;
(statearr_34113_35487[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (34))){
var state_34064__$1 = state_34064;
var statearr_34114_35488 = state_34064__$1;
(statearr_34114_35488[(2)] = null);

(statearr_34114_35488[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (17))){
var state_34064__$1 = state_34064;
var statearr_34115_35489 = state_34064__$1;
(statearr_34115_35489[(2)] = null);

(statearr_34115_35489[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (3))){
var inst_34062 = (state_34064[(2)]);
var state_34064__$1 = state_34064;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34064__$1,inst_34062);
} else {
if((state_val_34065 === (12))){
var inst_33991 = (state_34064[(2)]);
var state_34064__$1 = state_34064;
var statearr_34116_35497 = state_34064__$1;
(statearr_34116_35497[(2)] = inst_33991);

(statearr_34116_35497[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (2))){
var state_34064__$1 = state_34064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34064__$1,(4),ch);
} else {
if((state_val_34065 === (23))){
var state_34064__$1 = state_34064;
var statearr_34117_35498 = state_34064__$1;
(statearr_34117_35498[(2)] = null);

(statearr_34117_35498[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (35))){
var inst_34046 = (state_34064[(2)]);
var state_34064__$1 = state_34064;
var statearr_34118_35502 = state_34064__$1;
(statearr_34118_35502[(2)] = inst_34046);

(statearr_34118_35502[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (19))){
var inst_33963 = (state_34064[(7)]);
var inst_33967 = cljs.core.chunk_first(inst_33963);
var inst_33968 = cljs.core.chunk_rest(inst_33963);
var inst_33969 = cljs.core.count(inst_33967);
var inst_33941 = inst_33968;
var inst_33942 = inst_33967;
var inst_33943 = inst_33969;
var inst_33944 = (0);
var state_34064__$1 = (function (){var statearr_34119 = state_34064;
(statearr_34119[(13)] = inst_33941);

(statearr_34119[(14)] = inst_33942);

(statearr_34119[(15)] = inst_33944);

(statearr_34119[(17)] = inst_33943);

return statearr_34119;
})();
var statearr_34120_35512 = state_34064__$1;
(statearr_34120_35512[(2)] = null);

(statearr_34120_35512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (11))){
var inst_33941 = (state_34064[(13)]);
var inst_33963 = (state_34064[(7)]);
var inst_33963__$1 = cljs.core.seq(inst_33941);
var state_34064__$1 = (function (){var statearr_34121 = state_34064;
(statearr_34121[(7)] = inst_33963__$1);

return statearr_34121;
})();
if(inst_33963__$1){
var statearr_34122_35520 = state_34064__$1;
(statearr_34122_35520[(1)] = (16));

} else {
var statearr_34123_35521 = state_34064__$1;
(statearr_34123_35521[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (9))){
var inst_33993 = (state_34064[(2)]);
var state_34064__$1 = state_34064;
var statearr_34124_35522 = state_34064__$1;
(statearr_34124_35522[(2)] = inst_33993);

(statearr_34124_35522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (5))){
var inst_33939 = cljs.core.deref(cs);
var inst_33940 = cljs.core.seq(inst_33939);
var inst_33941 = inst_33940;
var inst_33942 = null;
var inst_33943 = (0);
var inst_33944 = (0);
var state_34064__$1 = (function (){var statearr_34125 = state_34064;
(statearr_34125[(13)] = inst_33941);

(statearr_34125[(14)] = inst_33942);

(statearr_34125[(15)] = inst_33944);

(statearr_34125[(17)] = inst_33943);

return statearr_34125;
})();
var statearr_34126_35526 = state_34064__$1;
(statearr_34126_35526[(2)] = null);

(statearr_34126_35526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (14))){
var state_34064__$1 = state_34064;
var statearr_34127_35528 = state_34064__$1;
(statearr_34127_35528[(2)] = null);

(statearr_34127_35528[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (45))){
var inst_34054 = (state_34064[(2)]);
var state_34064__$1 = state_34064;
var statearr_34128_35529 = state_34064__$1;
(statearr_34128_35529[(2)] = inst_34054);

(statearr_34128_35529[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (26))){
var inst_33996 = (state_34064[(29)]);
var inst_34050 = (state_34064[(2)]);
var inst_34051 = cljs.core.seq(inst_33996);
var state_34064__$1 = (function (){var statearr_34129 = state_34064;
(statearr_34129[(31)] = inst_34050);

return statearr_34129;
})();
if(inst_34051){
var statearr_34130_35532 = state_34064__$1;
(statearr_34130_35532[(1)] = (42));

} else {
var statearr_34131_35534 = state_34064__$1;
(statearr_34131_35534[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (16))){
var inst_33963 = (state_34064[(7)]);
var inst_33965 = cljs.core.chunked_seq_QMARK_(inst_33963);
var state_34064__$1 = state_34064;
if(inst_33965){
var statearr_34132_35535 = state_34064__$1;
(statearr_34132_35535[(1)] = (19));

} else {
var statearr_34133_35536 = state_34064__$1;
(statearr_34133_35536[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (38))){
var inst_34043 = (state_34064[(2)]);
var state_34064__$1 = state_34064;
var statearr_34134_35538 = state_34064__$1;
(statearr_34134_35538[(2)] = inst_34043);

(statearr_34134_35538[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (30))){
var state_34064__$1 = state_34064;
var statearr_34135_35540 = state_34064__$1;
(statearr_34135_35540[(2)] = null);

(statearr_34135_35540[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (10))){
var inst_33942 = (state_34064[(14)]);
var inst_33944 = (state_34064[(15)]);
var inst_33952 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33942,inst_33944);
var inst_33953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33952,(0),null);
var inst_33954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33952,(1),null);
var state_34064__$1 = (function (){var statearr_34136 = state_34064;
(statearr_34136[(26)] = inst_33953);

return statearr_34136;
})();
if(cljs.core.truth_(inst_33954)){
var statearr_34137_35545 = state_34064__$1;
(statearr_34137_35545[(1)] = (13));

} else {
var statearr_34138_35546 = state_34064__$1;
(statearr_34138_35546[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (18))){
var inst_33989 = (state_34064[(2)]);
var state_34064__$1 = state_34064;
var statearr_34139_35549 = state_34064__$1;
(statearr_34139_35549[(2)] = inst_33989);

(statearr_34139_35549[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (42))){
var state_34064__$1 = state_34064;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34064__$1,(45),dchan);
} else {
if((state_val_34065 === (37))){
var inst_34032 = (state_34064[(23)]);
var inst_33932 = (state_34064[(11)]);
var inst_34023 = (state_34064[(25)]);
var inst_34032__$1 = cljs.core.first(inst_34023);
var inst_34033 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34032__$1,inst_33932,done);
var state_34064__$1 = (function (){var statearr_34140 = state_34064;
(statearr_34140[(23)] = inst_34032__$1);

return statearr_34140;
})();
if(cljs.core.truth_(inst_34033)){
var statearr_34141_35553 = state_34064__$1;
(statearr_34141_35553[(1)] = (39));

} else {
var statearr_34142_35554 = state_34064__$1;
(statearr_34142_35554[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (8))){
var inst_33944 = (state_34064[(15)]);
var inst_33943 = (state_34064[(17)]);
var inst_33946 = (inst_33944 < inst_33943);
var inst_33947 = inst_33946;
var state_34064__$1 = state_34064;
if(cljs.core.truth_(inst_33947)){
var statearr_34143_35559 = state_34064__$1;
(statearr_34143_35559[(1)] = (10));

} else {
var statearr_34144_35560 = state_34064__$1;
(statearr_34144_35560[(1)] = (11));

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
});})(c__33469__auto___35438,cs,m,dchan,dctr,done))
;
return ((function (switch__33368__auto__,c__33469__auto___35438,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33369__auto__ = null;
var cljs$core$async$mult_$_state_machine__33369__auto____0 = (function (){
var statearr_34145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34145[(0)] = cljs$core$async$mult_$_state_machine__33369__auto__);

(statearr_34145[(1)] = (1));

return statearr_34145;
});
var cljs$core$async$mult_$_state_machine__33369__auto____1 = (function (state_34064){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_34064);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e34146){if((e34146 instanceof Object)){
var ex__33372__auto__ = e34146;
var statearr_34147_35566 = state_34064;
(statearr_34147_35566[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34146;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35567 = state_34064;
state_34064 = G__35567;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33369__auto__ = function(state_34064){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33369__auto____1.call(this,state_34064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33369__auto____0;
cljs$core$async$mult_$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33369__auto____1;
return cljs$core$async$mult_$_state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto___35438,cs,m,dchan,dctr,done))
})();
var state__33471__auto__ = (function (){var statearr_34148 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_34148[(6)] = c__33469__auto___35438);

return statearr_34148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto___35438,cs,m,dchan,dctr,done))
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
var G__34150 = arguments.length;
switch (G__34150) {
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
var len__4730__auto___35588 = arguments.length;
var i__4731__auto___35589 = (0);
while(true){
if((i__4731__auto___35589 < len__4730__auto___35588)){
args__4736__auto__.push((arguments[i__4731__auto___35589]));

var G__35590 = (i__4731__auto___35589 + (1));
i__4731__auto___35589 = G__35590;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34155){
var map__34156 = p__34155;
var map__34156__$1 = (((((!((map__34156 == null))))?(((((map__34156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34156):map__34156);
var opts = map__34156__$1;
var statearr_34158_35592 = state;
(statearr_34158_35592[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts(((function (map__34156,map__34156__$1,opts){
return (function (val){
var statearr_34159_35597 = state;
(statearr_34159_35597[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__34156,map__34156__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_34160_35598 = state;
(statearr_34160_35598[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34151){
var G__34152 = cljs.core.first(seq34151);
var seq34151__$1 = cljs.core.next(seq34151);
var G__34153 = cljs.core.first(seq34151__$1);
var seq34151__$2 = cljs.core.next(seq34151__$1);
var G__34154 = cljs.core.first(seq34151__$2);
var seq34151__$3 = cljs.core.next(seq34151__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34152,G__34153,G__34154,seq34151__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34161 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34161 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34162){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34162 = meta34162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34163,meta34162__$1){
var self__ = this;
var _34163__$1 = this;
return (new cljs.core.async.t_cljs$core$async34161(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34162__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34161.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34163){
var self__ = this;
var _34163__$1 = this;
return self__.meta34162;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34161.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34161.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34161.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34161.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34161.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34161.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34161.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34161.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async34161.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34162","meta34162",-516019606,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34161.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34161";

cljs.core.async.t_cljs$core$async34161.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34161");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34161.
 */
cljs.core.async.__GT_t_cljs$core$async34161 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34161(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34162){
return (new cljs.core.async.t_cljs$core$async34161(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34162));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34161(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33469__auto___35618 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto___35618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto___35618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34265){
var state_val_34266 = (state_34265[(1)]);
if((state_val_34266 === (7))){
var inst_34180 = (state_34265[(2)]);
var state_34265__$1 = state_34265;
var statearr_34267_35619 = state_34265__$1;
(statearr_34267_35619[(2)] = inst_34180);

(statearr_34267_35619[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (20))){
var inst_34192 = (state_34265[(7)]);
var state_34265__$1 = state_34265;
var statearr_34268_35620 = state_34265__$1;
(statearr_34268_35620[(2)] = inst_34192);

(statearr_34268_35620[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (27))){
var state_34265__$1 = state_34265;
var statearr_34269_35622 = state_34265__$1;
(statearr_34269_35622[(2)] = null);

(statearr_34269_35622[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (1))){
var inst_34167 = (state_34265[(8)]);
var inst_34167__$1 = calc_state();
var inst_34169 = (inst_34167__$1 == null);
var inst_34170 = cljs.core.not(inst_34169);
var state_34265__$1 = (function (){var statearr_34270 = state_34265;
(statearr_34270[(8)] = inst_34167__$1);

return statearr_34270;
})();
if(inst_34170){
var statearr_34271_35627 = state_34265__$1;
(statearr_34271_35627[(1)] = (2));

} else {
var statearr_34272_35628 = state_34265__$1;
(statearr_34272_35628[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (24))){
var inst_34216 = (state_34265[(9)]);
var inst_34239 = (state_34265[(10)]);
var inst_34225 = (state_34265[(11)]);
var inst_34239__$1 = (inst_34216.cljs$core$IFn$_invoke$arity$1 ? inst_34216.cljs$core$IFn$_invoke$arity$1(inst_34225) : inst_34216.call(null,inst_34225));
var state_34265__$1 = (function (){var statearr_34273 = state_34265;
(statearr_34273[(10)] = inst_34239__$1);

return statearr_34273;
})();
if(cljs.core.truth_(inst_34239__$1)){
var statearr_34274_35630 = state_34265__$1;
(statearr_34274_35630[(1)] = (29));

} else {
var statearr_34275_35631 = state_34265__$1;
(statearr_34275_35631[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (4))){
var inst_34183 = (state_34265[(2)]);
var state_34265__$1 = state_34265;
if(cljs.core.truth_(inst_34183)){
var statearr_34276_35632 = state_34265__$1;
(statearr_34276_35632[(1)] = (8));

} else {
var statearr_34277_35633 = state_34265__$1;
(statearr_34277_35633[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (15))){
var inst_34210 = (state_34265[(2)]);
var state_34265__$1 = state_34265;
if(cljs.core.truth_(inst_34210)){
var statearr_34278_35634 = state_34265__$1;
(statearr_34278_35634[(1)] = (19));

} else {
var statearr_34279_35635 = state_34265__$1;
(statearr_34279_35635[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (21))){
var inst_34215 = (state_34265[(12)]);
var inst_34215__$1 = (state_34265[(2)]);
var inst_34216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34215__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34215__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34215__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34265__$1 = (function (){var statearr_34280 = state_34265;
(statearr_34280[(9)] = inst_34216);

(statearr_34280[(13)] = inst_34217);

(statearr_34280[(12)] = inst_34215__$1);

return statearr_34280;
})();
return cljs.core.async.ioc_alts_BANG_(state_34265__$1,(22),inst_34218);
} else {
if((state_val_34266 === (31))){
var inst_34247 = (state_34265[(2)]);
var state_34265__$1 = state_34265;
if(cljs.core.truth_(inst_34247)){
var statearr_34281_35638 = state_34265__$1;
(statearr_34281_35638[(1)] = (32));

} else {
var statearr_34282_35642 = state_34265__$1;
(statearr_34282_35642[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (32))){
var inst_34224 = (state_34265[(14)]);
var state_34265__$1 = state_34265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34265__$1,(35),out,inst_34224);
} else {
if((state_val_34266 === (33))){
var inst_34215 = (state_34265[(12)]);
var inst_34192 = inst_34215;
var state_34265__$1 = (function (){var statearr_34283 = state_34265;
(statearr_34283[(7)] = inst_34192);

return statearr_34283;
})();
var statearr_34284_35643 = state_34265__$1;
(statearr_34284_35643[(2)] = null);

(statearr_34284_35643[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (13))){
var inst_34192 = (state_34265[(7)]);
var inst_34199 = inst_34192.cljs$lang$protocol_mask$partition0$;
var inst_34200 = (inst_34199 & (64));
var inst_34201 = inst_34192.cljs$core$ISeq$;
var inst_34202 = (cljs.core.PROTOCOL_SENTINEL === inst_34201);
var inst_34203 = ((inst_34200) || (inst_34202));
var state_34265__$1 = state_34265;
if(cljs.core.truth_(inst_34203)){
var statearr_34285_35644 = state_34265__$1;
(statearr_34285_35644[(1)] = (16));

} else {
var statearr_34286_35645 = state_34265__$1;
(statearr_34286_35645[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (22))){
var inst_34224 = (state_34265[(14)]);
var inst_34225 = (state_34265[(11)]);
var inst_34223 = (state_34265[(2)]);
var inst_34224__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34223,(0),null);
var inst_34225__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34223,(1),null);
var inst_34226 = (inst_34224__$1 == null);
var inst_34227 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34225__$1,change);
var inst_34228 = ((inst_34226) || (inst_34227));
var state_34265__$1 = (function (){var statearr_34287 = state_34265;
(statearr_34287[(14)] = inst_34224__$1);

(statearr_34287[(11)] = inst_34225__$1);

return statearr_34287;
})();
if(cljs.core.truth_(inst_34228)){
var statearr_34288_35646 = state_34265__$1;
(statearr_34288_35646[(1)] = (23));

} else {
var statearr_34289_35647 = state_34265__$1;
(statearr_34289_35647[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (36))){
var inst_34215 = (state_34265[(12)]);
var inst_34192 = inst_34215;
var state_34265__$1 = (function (){var statearr_34290 = state_34265;
(statearr_34290[(7)] = inst_34192);

return statearr_34290;
})();
var statearr_34291_35648 = state_34265__$1;
(statearr_34291_35648[(2)] = null);

(statearr_34291_35648[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (29))){
var inst_34239 = (state_34265[(10)]);
var state_34265__$1 = state_34265;
var statearr_34292_35650 = state_34265__$1;
(statearr_34292_35650[(2)] = inst_34239);

(statearr_34292_35650[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (6))){
var state_34265__$1 = state_34265;
var statearr_34293_35651 = state_34265__$1;
(statearr_34293_35651[(2)] = false);

(statearr_34293_35651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (28))){
var inst_34235 = (state_34265[(2)]);
var inst_34236 = calc_state();
var inst_34192 = inst_34236;
var state_34265__$1 = (function (){var statearr_34294 = state_34265;
(statearr_34294[(15)] = inst_34235);

(statearr_34294[(7)] = inst_34192);

return statearr_34294;
})();
var statearr_34295_35652 = state_34265__$1;
(statearr_34295_35652[(2)] = null);

(statearr_34295_35652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (25))){
var inst_34261 = (state_34265[(2)]);
var state_34265__$1 = state_34265;
var statearr_34296_35653 = state_34265__$1;
(statearr_34296_35653[(2)] = inst_34261);

(statearr_34296_35653[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (34))){
var inst_34259 = (state_34265[(2)]);
var state_34265__$1 = state_34265;
var statearr_34297_35654 = state_34265__$1;
(statearr_34297_35654[(2)] = inst_34259);

(statearr_34297_35654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (17))){
var state_34265__$1 = state_34265;
var statearr_34298_35655 = state_34265__$1;
(statearr_34298_35655[(2)] = false);

(statearr_34298_35655[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (3))){
var state_34265__$1 = state_34265;
var statearr_34299_35656 = state_34265__$1;
(statearr_34299_35656[(2)] = false);

(statearr_34299_35656[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (12))){
var inst_34263 = (state_34265[(2)]);
var state_34265__$1 = state_34265;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34265__$1,inst_34263);
} else {
if((state_val_34266 === (2))){
var inst_34167 = (state_34265[(8)]);
var inst_34172 = inst_34167.cljs$lang$protocol_mask$partition0$;
var inst_34173 = (inst_34172 & (64));
var inst_34174 = inst_34167.cljs$core$ISeq$;
var inst_34175 = (cljs.core.PROTOCOL_SENTINEL === inst_34174);
var inst_34176 = ((inst_34173) || (inst_34175));
var state_34265__$1 = state_34265;
if(cljs.core.truth_(inst_34176)){
var statearr_34300_35660 = state_34265__$1;
(statearr_34300_35660[(1)] = (5));

} else {
var statearr_34301_35663 = state_34265__$1;
(statearr_34301_35663[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (23))){
var inst_34224 = (state_34265[(14)]);
var inst_34230 = (inst_34224 == null);
var state_34265__$1 = state_34265;
if(cljs.core.truth_(inst_34230)){
var statearr_34302_35666 = state_34265__$1;
(statearr_34302_35666[(1)] = (26));

} else {
var statearr_34303_35667 = state_34265__$1;
(statearr_34303_35667[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (35))){
var inst_34250 = (state_34265[(2)]);
var state_34265__$1 = state_34265;
if(cljs.core.truth_(inst_34250)){
var statearr_34304_35668 = state_34265__$1;
(statearr_34304_35668[(1)] = (36));

} else {
var statearr_34305_35669 = state_34265__$1;
(statearr_34305_35669[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (19))){
var inst_34192 = (state_34265[(7)]);
var inst_34212 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34192);
var state_34265__$1 = state_34265;
var statearr_34306_35670 = state_34265__$1;
(statearr_34306_35670[(2)] = inst_34212);

(statearr_34306_35670[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (11))){
var inst_34192 = (state_34265[(7)]);
var inst_34196 = (inst_34192 == null);
var inst_34197 = cljs.core.not(inst_34196);
var state_34265__$1 = state_34265;
if(inst_34197){
var statearr_34307_35671 = state_34265__$1;
(statearr_34307_35671[(1)] = (13));

} else {
var statearr_34308_35672 = state_34265__$1;
(statearr_34308_35672[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (9))){
var inst_34167 = (state_34265[(8)]);
var state_34265__$1 = state_34265;
var statearr_34309_35673 = state_34265__$1;
(statearr_34309_35673[(2)] = inst_34167);

(statearr_34309_35673[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (5))){
var state_34265__$1 = state_34265;
var statearr_34310_35674 = state_34265__$1;
(statearr_34310_35674[(2)] = true);

(statearr_34310_35674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (14))){
var state_34265__$1 = state_34265;
var statearr_34311_35675 = state_34265__$1;
(statearr_34311_35675[(2)] = false);

(statearr_34311_35675[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (26))){
var inst_34225 = (state_34265[(11)]);
var inst_34232 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34225);
var state_34265__$1 = state_34265;
var statearr_34312_35676 = state_34265__$1;
(statearr_34312_35676[(2)] = inst_34232);

(statearr_34312_35676[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (16))){
var state_34265__$1 = state_34265;
var statearr_34313_35677 = state_34265__$1;
(statearr_34313_35677[(2)] = true);

(statearr_34313_35677[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (38))){
var inst_34255 = (state_34265[(2)]);
var state_34265__$1 = state_34265;
var statearr_34314_35678 = state_34265__$1;
(statearr_34314_35678[(2)] = inst_34255);

(statearr_34314_35678[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (30))){
var inst_34216 = (state_34265[(9)]);
var inst_34217 = (state_34265[(13)]);
var inst_34225 = (state_34265[(11)]);
var inst_34242 = cljs.core.empty_QMARK_(inst_34216);
var inst_34243 = (inst_34217.cljs$core$IFn$_invoke$arity$1 ? inst_34217.cljs$core$IFn$_invoke$arity$1(inst_34225) : inst_34217.call(null,inst_34225));
var inst_34244 = cljs.core.not(inst_34243);
var inst_34245 = ((inst_34242) && (inst_34244));
var state_34265__$1 = state_34265;
var statearr_34315_35680 = state_34265__$1;
(statearr_34315_35680[(2)] = inst_34245);

(statearr_34315_35680[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (10))){
var inst_34167 = (state_34265[(8)]);
var inst_34188 = (state_34265[(2)]);
var inst_34189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34188,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34190 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34188,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34188,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34192 = inst_34167;
var state_34265__$1 = (function (){var statearr_34316 = state_34265;
(statearr_34316[(16)] = inst_34190);

(statearr_34316[(7)] = inst_34192);

(statearr_34316[(17)] = inst_34189);

(statearr_34316[(18)] = inst_34191);

return statearr_34316;
})();
var statearr_34317_35682 = state_34265__$1;
(statearr_34317_35682[(2)] = null);

(statearr_34317_35682[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (18))){
var inst_34207 = (state_34265[(2)]);
var state_34265__$1 = state_34265;
var statearr_34318_35683 = state_34265__$1;
(statearr_34318_35683[(2)] = inst_34207);

(statearr_34318_35683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (37))){
var state_34265__$1 = state_34265;
var statearr_34319_35684 = state_34265__$1;
(statearr_34319_35684[(2)] = null);

(statearr_34319_35684[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34266 === (8))){
var inst_34167 = (state_34265[(8)]);
var inst_34185 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34167);
var state_34265__$1 = state_34265;
var statearr_34320_35685 = state_34265__$1;
(statearr_34320_35685[(2)] = inst_34185);

(statearr_34320_35685[(1)] = (10));


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
});})(c__33469__auto___35618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33368__auto__,c__33469__auto___35618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33369__auto__ = null;
var cljs$core$async$mix_$_state_machine__33369__auto____0 = (function (){
var statearr_34321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34321[(0)] = cljs$core$async$mix_$_state_machine__33369__auto__);

(statearr_34321[(1)] = (1));

return statearr_34321;
});
var cljs$core$async$mix_$_state_machine__33369__auto____1 = (function (state_34265){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_34265);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e34322){if((e34322 instanceof Object)){
var ex__33372__auto__ = e34322;
var statearr_34323_35686 = state_34265;
(statearr_34323_35686[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34322;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35687 = state_34265;
state_34265 = G__35687;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33369__auto__ = function(state_34265){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33369__auto____1.call(this,state_34265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33369__auto____0;
cljs$core$async$mix_$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33369__auto____1;
return cljs$core$async$mix_$_state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto___35618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33471__auto__ = (function (){var statearr_34324 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_34324[(6)] = c__33469__auto___35618);

return statearr_34324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto___35618,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__34326 = arguments.length;
switch (G__34326) {
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
var G__34329 = arguments.length;
switch (G__34329) {
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
return (function (p1__34327_SHARP_){
if(cljs.core.truth_((p1__34327_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34327_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34327_SHARP_.call(null,topic)))){
return p1__34327_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34327_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34330 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34330 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34331){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34331 = meta34331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34332,meta34331__$1){
var self__ = this;
var _34332__$1 = this;
return (new cljs.core.async.t_cljs$core$async34330(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34331__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34330.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34332){
var self__ = this;
var _34332__$1 = this;
return self__.meta34331;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34330.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34330.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34330.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34330.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34330.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34330.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34330.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34330.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34331","meta34331",968197693,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34330.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34330";

cljs.core.async.t_cljs$core$async34330.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34330");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34330.
 */
cljs.core.async.__GT_t_cljs$core$async34330 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34330(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34331){
return (new cljs.core.async.t_cljs$core$async34330(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34331));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34330(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33469__auto___35710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto___35710,mults,ensure_mult,p){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto___35710,mults,ensure_mult,p){
return (function (state_34404){
var state_val_34405 = (state_34404[(1)]);
if((state_val_34405 === (7))){
var inst_34400 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34406_35720 = state_34404__$1;
(statearr_34406_35720[(2)] = inst_34400);

(statearr_34406_35720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (20))){
var state_34404__$1 = state_34404;
var statearr_34407_35721 = state_34404__$1;
(statearr_34407_35721[(2)] = null);

(statearr_34407_35721[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (1))){
var state_34404__$1 = state_34404;
var statearr_34408_35722 = state_34404__$1;
(statearr_34408_35722[(2)] = null);

(statearr_34408_35722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (24))){
var inst_34383 = (state_34404[(7)]);
var inst_34392 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34383);
var state_34404__$1 = state_34404;
var statearr_34409_35723 = state_34404__$1;
(statearr_34409_35723[(2)] = inst_34392);

(statearr_34409_35723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (4))){
var inst_34335 = (state_34404[(8)]);
var inst_34335__$1 = (state_34404[(2)]);
var inst_34336 = (inst_34335__$1 == null);
var state_34404__$1 = (function (){var statearr_34410 = state_34404;
(statearr_34410[(8)] = inst_34335__$1);

return statearr_34410;
})();
if(cljs.core.truth_(inst_34336)){
var statearr_34411_35727 = state_34404__$1;
(statearr_34411_35727[(1)] = (5));

} else {
var statearr_34412_35728 = state_34404__$1;
(statearr_34412_35728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (15))){
var inst_34377 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34413_35729 = state_34404__$1;
(statearr_34413_35729[(2)] = inst_34377);

(statearr_34413_35729[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (21))){
var inst_34397 = (state_34404[(2)]);
var state_34404__$1 = (function (){var statearr_34414 = state_34404;
(statearr_34414[(9)] = inst_34397);

return statearr_34414;
})();
var statearr_34415_35733 = state_34404__$1;
(statearr_34415_35733[(2)] = null);

(statearr_34415_35733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (13))){
var inst_34359 = (state_34404[(10)]);
var inst_34361 = cljs.core.chunked_seq_QMARK_(inst_34359);
var state_34404__$1 = state_34404;
if(inst_34361){
var statearr_34416_35734 = state_34404__$1;
(statearr_34416_35734[(1)] = (16));

} else {
var statearr_34417_35735 = state_34404__$1;
(statearr_34417_35735[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (22))){
var inst_34389 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
if(cljs.core.truth_(inst_34389)){
var statearr_34418_35736 = state_34404__$1;
(statearr_34418_35736[(1)] = (23));

} else {
var statearr_34419_35737 = state_34404__$1;
(statearr_34419_35737[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (6))){
var inst_34383 = (state_34404[(7)]);
var inst_34385 = (state_34404[(11)]);
var inst_34335 = (state_34404[(8)]);
var inst_34383__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34335) : topic_fn.call(null,inst_34335));
var inst_34384 = cljs.core.deref(mults);
var inst_34385__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34384,inst_34383__$1);
var state_34404__$1 = (function (){var statearr_34420 = state_34404;
(statearr_34420[(7)] = inst_34383__$1);

(statearr_34420[(11)] = inst_34385__$1);

return statearr_34420;
})();
if(cljs.core.truth_(inst_34385__$1)){
var statearr_34421_35741 = state_34404__$1;
(statearr_34421_35741[(1)] = (19));

} else {
var statearr_34422_35742 = state_34404__$1;
(statearr_34422_35742[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (25))){
var inst_34394 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34423_35743 = state_34404__$1;
(statearr_34423_35743[(2)] = inst_34394);

(statearr_34423_35743[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (17))){
var inst_34359 = (state_34404[(10)]);
var inst_34368 = cljs.core.first(inst_34359);
var inst_34369 = cljs.core.async.muxch_STAR_(inst_34368);
var inst_34370 = cljs.core.async.close_BANG_(inst_34369);
var inst_34371 = cljs.core.next(inst_34359);
var inst_34345 = inst_34371;
var inst_34346 = null;
var inst_34347 = (0);
var inst_34348 = (0);
var state_34404__$1 = (function (){var statearr_34424 = state_34404;
(statearr_34424[(12)] = inst_34345);

(statearr_34424[(13)] = inst_34346);

(statearr_34424[(14)] = inst_34347);

(statearr_34424[(15)] = inst_34370);

(statearr_34424[(16)] = inst_34348);

return statearr_34424;
})();
var statearr_34425_35746 = state_34404__$1;
(statearr_34425_35746[(2)] = null);

(statearr_34425_35746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (3))){
var inst_34402 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34404__$1,inst_34402);
} else {
if((state_val_34405 === (12))){
var inst_34379 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34426_35750 = state_34404__$1;
(statearr_34426_35750[(2)] = inst_34379);

(statearr_34426_35750[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (2))){
var state_34404__$1 = state_34404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34404__$1,(4),ch);
} else {
if((state_val_34405 === (23))){
var state_34404__$1 = state_34404;
var statearr_34427_35757 = state_34404__$1;
(statearr_34427_35757[(2)] = null);

(statearr_34427_35757[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (19))){
var inst_34385 = (state_34404[(11)]);
var inst_34335 = (state_34404[(8)]);
var inst_34387 = cljs.core.async.muxch_STAR_(inst_34385);
var state_34404__$1 = state_34404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34404__$1,(22),inst_34387,inst_34335);
} else {
if((state_val_34405 === (11))){
var inst_34345 = (state_34404[(12)]);
var inst_34359 = (state_34404[(10)]);
var inst_34359__$1 = cljs.core.seq(inst_34345);
var state_34404__$1 = (function (){var statearr_34428 = state_34404;
(statearr_34428[(10)] = inst_34359__$1);

return statearr_34428;
})();
if(inst_34359__$1){
var statearr_34429_35764 = state_34404__$1;
(statearr_34429_35764[(1)] = (13));

} else {
var statearr_34430_35765 = state_34404__$1;
(statearr_34430_35765[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (9))){
var inst_34381 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34431_35766 = state_34404__$1;
(statearr_34431_35766[(2)] = inst_34381);

(statearr_34431_35766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (5))){
var inst_34342 = cljs.core.deref(mults);
var inst_34343 = cljs.core.vals(inst_34342);
var inst_34344 = cljs.core.seq(inst_34343);
var inst_34345 = inst_34344;
var inst_34346 = null;
var inst_34347 = (0);
var inst_34348 = (0);
var state_34404__$1 = (function (){var statearr_34432 = state_34404;
(statearr_34432[(12)] = inst_34345);

(statearr_34432[(13)] = inst_34346);

(statearr_34432[(14)] = inst_34347);

(statearr_34432[(16)] = inst_34348);

return statearr_34432;
})();
var statearr_34433_35767 = state_34404__$1;
(statearr_34433_35767[(2)] = null);

(statearr_34433_35767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (14))){
var state_34404__$1 = state_34404;
var statearr_34437_35768 = state_34404__$1;
(statearr_34437_35768[(2)] = null);

(statearr_34437_35768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (16))){
var inst_34359 = (state_34404[(10)]);
var inst_34363 = cljs.core.chunk_first(inst_34359);
var inst_34364 = cljs.core.chunk_rest(inst_34359);
var inst_34365 = cljs.core.count(inst_34363);
var inst_34345 = inst_34364;
var inst_34346 = inst_34363;
var inst_34347 = inst_34365;
var inst_34348 = (0);
var state_34404__$1 = (function (){var statearr_34438 = state_34404;
(statearr_34438[(12)] = inst_34345);

(statearr_34438[(13)] = inst_34346);

(statearr_34438[(14)] = inst_34347);

(statearr_34438[(16)] = inst_34348);

return statearr_34438;
})();
var statearr_34439_35769 = state_34404__$1;
(statearr_34439_35769[(2)] = null);

(statearr_34439_35769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (10))){
var inst_34345 = (state_34404[(12)]);
var inst_34346 = (state_34404[(13)]);
var inst_34347 = (state_34404[(14)]);
var inst_34348 = (state_34404[(16)]);
var inst_34353 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34346,inst_34348);
var inst_34354 = cljs.core.async.muxch_STAR_(inst_34353);
var inst_34355 = cljs.core.async.close_BANG_(inst_34354);
var inst_34356 = (inst_34348 + (1));
var tmp34434 = inst_34345;
var tmp34435 = inst_34346;
var tmp34436 = inst_34347;
var inst_34345__$1 = tmp34434;
var inst_34346__$1 = tmp34435;
var inst_34347__$1 = tmp34436;
var inst_34348__$1 = inst_34356;
var state_34404__$1 = (function (){var statearr_34440 = state_34404;
(statearr_34440[(12)] = inst_34345__$1);

(statearr_34440[(13)] = inst_34346__$1);

(statearr_34440[(14)] = inst_34347__$1);

(statearr_34440[(16)] = inst_34348__$1);

(statearr_34440[(17)] = inst_34355);

return statearr_34440;
})();
var statearr_34441_35776 = state_34404__$1;
(statearr_34441_35776[(2)] = null);

(statearr_34441_35776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (18))){
var inst_34374 = (state_34404[(2)]);
var state_34404__$1 = state_34404;
var statearr_34442_35777 = state_34404__$1;
(statearr_34442_35777[(2)] = inst_34374);

(statearr_34442_35777[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34405 === (8))){
var inst_34347 = (state_34404[(14)]);
var inst_34348 = (state_34404[(16)]);
var inst_34350 = (inst_34348 < inst_34347);
var inst_34351 = inst_34350;
var state_34404__$1 = state_34404;
if(cljs.core.truth_(inst_34351)){
var statearr_34443_35778 = state_34404__$1;
(statearr_34443_35778[(1)] = (10));

} else {
var statearr_34444_35779 = state_34404__$1;
(statearr_34444_35779[(1)] = (11));

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
});})(c__33469__auto___35710,mults,ensure_mult,p))
;
return ((function (switch__33368__auto__,c__33469__auto___35710,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33369__auto__ = null;
var cljs$core$async$state_machine__33369__auto____0 = (function (){
var statearr_34445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34445[(0)] = cljs$core$async$state_machine__33369__auto__);

(statearr_34445[(1)] = (1));

return statearr_34445;
});
var cljs$core$async$state_machine__33369__auto____1 = (function (state_34404){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_34404);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e34446){if((e34446 instanceof Object)){
var ex__33372__auto__ = e34446;
var statearr_34447_35780 = state_34404;
(statearr_34447_35780[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34446;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35781 = state_34404;
state_34404 = G__35781;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$state_machine__33369__auto__ = function(state_34404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33369__auto____1.call(this,state_34404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33369__auto____0;
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33369__auto____1;
return cljs$core$async$state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto___35710,mults,ensure_mult,p))
})();
var state__33471__auto__ = (function (){var statearr_34448 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_34448[(6)] = c__33469__auto___35710);

return statearr_34448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto___35710,mults,ensure_mult,p))
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
var G__34450 = arguments.length;
switch (G__34450) {
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
var G__34452 = arguments.length;
switch (G__34452) {
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
var G__34454 = arguments.length;
switch (G__34454) {
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
var c__33469__auto___35797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto___35797,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto___35797,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34493){
var state_val_34494 = (state_34493[(1)]);
if((state_val_34494 === (7))){
var state_34493__$1 = state_34493;
var statearr_34495_35798 = state_34493__$1;
(statearr_34495_35798[(2)] = null);

(statearr_34495_35798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (1))){
var state_34493__$1 = state_34493;
var statearr_34496_35799 = state_34493__$1;
(statearr_34496_35799[(2)] = null);

(statearr_34496_35799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (4))){
var inst_34457 = (state_34493[(7)]);
var inst_34459 = (inst_34457 < cnt);
var state_34493__$1 = state_34493;
if(cljs.core.truth_(inst_34459)){
var statearr_34497_35800 = state_34493__$1;
(statearr_34497_35800[(1)] = (6));

} else {
var statearr_34498_35801 = state_34493__$1;
(statearr_34498_35801[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (15))){
var inst_34489 = (state_34493[(2)]);
var state_34493__$1 = state_34493;
var statearr_34499_35802 = state_34493__$1;
(statearr_34499_35802[(2)] = inst_34489);

(statearr_34499_35802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (13))){
var inst_34482 = cljs.core.async.close_BANG_(out);
var state_34493__$1 = state_34493;
var statearr_34500_35803 = state_34493__$1;
(statearr_34500_35803[(2)] = inst_34482);

(statearr_34500_35803[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (6))){
var state_34493__$1 = state_34493;
var statearr_34501_35804 = state_34493__$1;
(statearr_34501_35804[(2)] = null);

(statearr_34501_35804[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (3))){
var inst_34491 = (state_34493[(2)]);
var state_34493__$1 = state_34493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34493__$1,inst_34491);
} else {
if((state_val_34494 === (12))){
var inst_34479 = (state_34493[(8)]);
var inst_34479__$1 = (state_34493[(2)]);
var inst_34480 = cljs.core.some(cljs.core.nil_QMARK_,inst_34479__$1);
var state_34493__$1 = (function (){var statearr_34502 = state_34493;
(statearr_34502[(8)] = inst_34479__$1);

return statearr_34502;
})();
if(cljs.core.truth_(inst_34480)){
var statearr_34503_35808 = state_34493__$1;
(statearr_34503_35808[(1)] = (13));

} else {
var statearr_34504_35809 = state_34493__$1;
(statearr_34504_35809[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (2))){
var inst_34456 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34457 = (0);
var state_34493__$1 = (function (){var statearr_34505 = state_34493;
(statearr_34505[(7)] = inst_34457);

(statearr_34505[(9)] = inst_34456);

return statearr_34505;
})();
var statearr_34506_35810 = state_34493__$1;
(statearr_34506_35810[(2)] = null);

(statearr_34506_35810[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (11))){
var inst_34457 = (state_34493[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_34493,(10),Object,null,(9));
var inst_34466 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34457) : chs__$1.call(null,inst_34457));
var inst_34467 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34457) : done.call(null,inst_34457));
var inst_34468 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34466,inst_34467);
var state_34493__$1 = state_34493;
var statearr_34507_35814 = state_34493__$1;
(statearr_34507_35814[(2)] = inst_34468);


cljs.core.async.impl.ioc_helpers.process_exception(state_34493__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (9))){
var inst_34457 = (state_34493[(7)]);
var inst_34470 = (state_34493[(2)]);
var inst_34471 = (inst_34457 + (1));
var inst_34457__$1 = inst_34471;
var state_34493__$1 = (function (){var statearr_34508 = state_34493;
(statearr_34508[(10)] = inst_34470);

(statearr_34508[(7)] = inst_34457__$1);

return statearr_34508;
})();
var statearr_34509_35817 = state_34493__$1;
(statearr_34509_35817[(2)] = null);

(statearr_34509_35817[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (5))){
var inst_34477 = (state_34493[(2)]);
var state_34493__$1 = (function (){var statearr_34510 = state_34493;
(statearr_34510[(11)] = inst_34477);

return statearr_34510;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34493__$1,(12),dchan);
} else {
if((state_val_34494 === (14))){
var inst_34479 = (state_34493[(8)]);
var inst_34484 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34479);
var state_34493__$1 = state_34493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34493__$1,(16),out,inst_34484);
} else {
if((state_val_34494 === (16))){
var inst_34486 = (state_34493[(2)]);
var state_34493__$1 = (function (){var statearr_34511 = state_34493;
(statearr_34511[(12)] = inst_34486);

return statearr_34511;
})();
var statearr_34512_35818 = state_34493__$1;
(statearr_34512_35818[(2)] = null);

(statearr_34512_35818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (10))){
var inst_34461 = (state_34493[(2)]);
var inst_34462 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34493__$1 = (function (){var statearr_34513 = state_34493;
(statearr_34513[(13)] = inst_34461);

return statearr_34513;
})();
var statearr_34514_35819 = state_34493__$1;
(statearr_34514_35819[(2)] = inst_34462);


cljs.core.async.impl.ioc_helpers.process_exception(state_34493__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34494 === (8))){
var inst_34475 = (state_34493[(2)]);
var state_34493__$1 = state_34493;
var statearr_34515_35821 = state_34493__$1;
(statearr_34515_35821[(2)] = inst_34475);

(statearr_34515_35821[(1)] = (5));


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
});})(c__33469__auto___35797,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33368__auto__,c__33469__auto___35797,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33369__auto__ = null;
var cljs$core$async$state_machine__33369__auto____0 = (function (){
var statearr_34516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34516[(0)] = cljs$core$async$state_machine__33369__auto__);

(statearr_34516[(1)] = (1));

return statearr_34516;
});
var cljs$core$async$state_machine__33369__auto____1 = (function (state_34493){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_34493);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e34517){if((e34517 instanceof Object)){
var ex__33372__auto__ = e34517;
var statearr_34518_35823 = state_34493;
(statearr_34518_35823[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34517;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35824 = state_34493;
state_34493 = G__35824;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$state_machine__33369__auto__ = function(state_34493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33369__auto____1.call(this,state_34493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33369__auto____0;
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33369__auto____1;
return cljs$core$async$state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto___35797,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33471__auto__ = (function (){var statearr_34519 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_34519[(6)] = c__33469__auto___35797);

return statearr_34519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto___35797,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34522 = arguments.length;
switch (G__34522) {
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
var c__33469__auto___35835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto___35835,out){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto___35835,out){
return (function (state_34554){
var state_val_34555 = (state_34554[(1)]);
if((state_val_34555 === (7))){
var inst_34534 = (state_34554[(7)]);
var inst_34533 = (state_34554[(8)]);
var inst_34533__$1 = (state_34554[(2)]);
var inst_34534__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34533__$1,(0),null);
var inst_34535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34533__$1,(1),null);
var inst_34536 = (inst_34534__$1 == null);
var state_34554__$1 = (function (){var statearr_34556 = state_34554;
(statearr_34556[(9)] = inst_34535);

(statearr_34556[(7)] = inst_34534__$1);

(statearr_34556[(8)] = inst_34533__$1);

return statearr_34556;
})();
if(cljs.core.truth_(inst_34536)){
var statearr_34557_35837 = state_34554__$1;
(statearr_34557_35837[(1)] = (8));

} else {
var statearr_34558_35839 = state_34554__$1;
(statearr_34558_35839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (1))){
var inst_34523 = cljs.core.vec(chs);
var inst_34524 = inst_34523;
var state_34554__$1 = (function (){var statearr_34559 = state_34554;
(statearr_34559[(10)] = inst_34524);

return statearr_34559;
})();
var statearr_34560_35842 = state_34554__$1;
(statearr_34560_35842[(2)] = null);

(statearr_34560_35842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (4))){
var inst_34524 = (state_34554[(10)]);
var state_34554__$1 = state_34554;
return cljs.core.async.ioc_alts_BANG_(state_34554__$1,(7),inst_34524);
} else {
if((state_val_34555 === (6))){
var inst_34550 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
var statearr_34561_35844 = state_34554__$1;
(statearr_34561_35844[(2)] = inst_34550);

(statearr_34561_35844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (3))){
var inst_34552 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34554__$1,inst_34552);
} else {
if((state_val_34555 === (2))){
var inst_34524 = (state_34554[(10)]);
var inst_34526 = cljs.core.count(inst_34524);
var inst_34527 = (inst_34526 > (0));
var state_34554__$1 = state_34554;
if(cljs.core.truth_(inst_34527)){
var statearr_34563_35845 = state_34554__$1;
(statearr_34563_35845[(1)] = (4));

} else {
var statearr_34564_35846 = state_34554__$1;
(statearr_34564_35846[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (11))){
var inst_34524 = (state_34554[(10)]);
var inst_34543 = (state_34554[(2)]);
var tmp34562 = inst_34524;
var inst_34524__$1 = tmp34562;
var state_34554__$1 = (function (){var statearr_34565 = state_34554;
(statearr_34565[(10)] = inst_34524__$1);

(statearr_34565[(11)] = inst_34543);

return statearr_34565;
})();
var statearr_34566_35847 = state_34554__$1;
(statearr_34566_35847[(2)] = null);

(statearr_34566_35847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (9))){
var inst_34534 = (state_34554[(7)]);
var state_34554__$1 = state_34554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34554__$1,(11),out,inst_34534);
} else {
if((state_val_34555 === (5))){
var inst_34548 = cljs.core.async.close_BANG_(out);
var state_34554__$1 = state_34554;
var statearr_34567_35848 = state_34554__$1;
(statearr_34567_35848[(2)] = inst_34548);

(statearr_34567_35848[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (10))){
var inst_34546 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
var statearr_34568_35849 = state_34554__$1;
(statearr_34568_35849[(2)] = inst_34546);

(statearr_34568_35849[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (8))){
var inst_34535 = (state_34554[(9)]);
var inst_34534 = (state_34554[(7)]);
var inst_34524 = (state_34554[(10)]);
var inst_34533 = (state_34554[(8)]);
var inst_34538 = (function (){var cs = inst_34524;
var vec__34529 = inst_34533;
var v = inst_34534;
var c = inst_34535;
return ((function (cs,vec__34529,v,c,inst_34535,inst_34534,inst_34524,inst_34533,state_val_34555,c__33469__auto___35835,out){
return (function (p1__34520_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34520_SHARP_);
});
;})(cs,vec__34529,v,c,inst_34535,inst_34534,inst_34524,inst_34533,state_val_34555,c__33469__auto___35835,out))
})();
var inst_34539 = cljs.core.filterv(inst_34538,inst_34524);
var inst_34524__$1 = inst_34539;
var state_34554__$1 = (function (){var statearr_34569 = state_34554;
(statearr_34569[(10)] = inst_34524__$1);

return statearr_34569;
})();
var statearr_34570_35850 = state_34554__$1;
(statearr_34570_35850[(2)] = null);

(statearr_34570_35850[(1)] = (2));


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
});})(c__33469__auto___35835,out))
;
return ((function (switch__33368__auto__,c__33469__auto___35835,out){
return (function() {
var cljs$core$async$state_machine__33369__auto__ = null;
var cljs$core$async$state_machine__33369__auto____0 = (function (){
var statearr_34571 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34571[(0)] = cljs$core$async$state_machine__33369__auto__);

(statearr_34571[(1)] = (1));

return statearr_34571;
});
var cljs$core$async$state_machine__33369__auto____1 = (function (state_34554){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_34554);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e34572){if((e34572 instanceof Object)){
var ex__33372__auto__ = e34572;
var statearr_34573_35851 = state_34554;
(statearr_34573_35851[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34572;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35852 = state_34554;
state_34554 = G__35852;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$state_machine__33369__auto__ = function(state_34554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33369__auto____1.call(this,state_34554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33369__auto____0;
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33369__auto____1;
return cljs$core$async$state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto___35835,out))
})();
var state__33471__auto__ = (function (){var statearr_34574 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_34574[(6)] = c__33469__auto___35835);

return statearr_34574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto___35835,out))
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
var G__34576 = arguments.length;
switch (G__34576) {
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
var c__33469__auto___35857 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto___35857,out){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto___35857,out){
return (function (state_34600){
var state_val_34601 = (state_34600[(1)]);
if((state_val_34601 === (7))){
var inst_34582 = (state_34600[(7)]);
var inst_34582__$1 = (state_34600[(2)]);
var inst_34583 = (inst_34582__$1 == null);
var inst_34584 = cljs.core.not(inst_34583);
var state_34600__$1 = (function (){var statearr_34602 = state_34600;
(statearr_34602[(7)] = inst_34582__$1);

return statearr_34602;
})();
if(inst_34584){
var statearr_34603_35859 = state_34600__$1;
(statearr_34603_35859[(1)] = (8));

} else {
var statearr_34604_35860 = state_34600__$1;
(statearr_34604_35860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34601 === (1))){
var inst_34577 = (0);
var state_34600__$1 = (function (){var statearr_34605 = state_34600;
(statearr_34605[(8)] = inst_34577);

return statearr_34605;
})();
var statearr_34606_35862 = state_34600__$1;
(statearr_34606_35862[(2)] = null);

(statearr_34606_35862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34601 === (4))){
var state_34600__$1 = state_34600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34600__$1,(7),ch);
} else {
if((state_val_34601 === (6))){
var inst_34595 = (state_34600[(2)]);
var state_34600__$1 = state_34600;
var statearr_34607_35863 = state_34600__$1;
(statearr_34607_35863[(2)] = inst_34595);

(statearr_34607_35863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34601 === (3))){
var inst_34597 = (state_34600[(2)]);
var inst_34598 = cljs.core.async.close_BANG_(out);
var state_34600__$1 = (function (){var statearr_34608 = state_34600;
(statearr_34608[(9)] = inst_34597);

return statearr_34608;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34600__$1,inst_34598);
} else {
if((state_val_34601 === (2))){
var inst_34577 = (state_34600[(8)]);
var inst_34579 = (inst_34577 < n);
var state_34600__$1 = state_34600;
if(cljs.core.truth_(inst_34579)){
var statearr_34609_35865 = state_34600__$1;
(statearr_34609_35865[(1)] = (4));

} else {
var statearr_34610_35866 = state_34600__$1;
(statearr_34610_35866[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34601 === (11))){
var inst_34577 = (state_34600[(8)]);
var inst_34587 = (state_34600[(2)]);
var inst_34588 = (inst_34577 + (1));
var inst_34577__$1 = inst_34588;
var state_34600__$1 = (function (){var statearr_34611 = state_34600;
(statearr_34611[(8)] = inst_34577__$1);

(statearr_34611[(10)] = inst_34587);

return statearr_34611;
})();
var statearr_34612_35867 = state_34600__$1;
(statearr_34612_35867[(2)] = null);

(statearr_34612_35867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34601 === (9))){
var state_34600__$1 = state_34600;
var statearr_34613_35868 = state_34600__$1;
(statearr_34613_35868[(2)] = null);

(statearr_34613_35868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34601 === (5))){
var state_34600__$1 = state_34600;
var statearr_34614_35869 = state_34600__$1;
(statearr_34614_35869[(2)] = null);

(statearr_34614_35869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34601 === (10))){
var inst_34592 = (state_34600[(2)]);
var state_34600__$1 = state_34600;
var statearr_34615_35870 = state_34600__$1;
(statearr_34615_35870[(2)] = inst_34592);

(statearr_34615_35870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34601 === (8))){
var inst_34582 = (state_34600[(7)]);
var state_34600__$1 = state_34600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34600__$1,(11),out,inst_34582);
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
});})(c__33469__auto___35857,out))
;
return ((function (switch__33368__auto__,c__33469__auto___35857,out){
return (function() {
var cljs$core$async$state_machine__33369__auto__ = null;
var cljs$core$async$state_machine__33369__auto____0 = (function (){
var statearr_34616 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34616[(0)] = cljs$core$async$state_machine__33369__auto__);

(statearr_34616[(1)] = (1));

return statearr_34616;
});
var cljs$core$async$state_machine__33369__auto____1 = (function (state_34600){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_34600);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e34617){if((e34617 instanceof Object)){
var ex__33372__auto__ = e34617;
var statearr_34618_35877 = state_34600;
(statearr_34618_35877[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34617;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35880 = state_34600;
state_34600 = G__35880;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$state_machine__33369__auto__ = function(state_34600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33369__auto____1.call(this,state_34600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33369__auto____0;
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33369__auto____1;
return cljs$core$async$state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto___35857,out))
})();
var state__33471__auto__ = (function (){var statearr_34619 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_34619[(6)] = c__33469__auto___35857);

return statearr_34619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto___35857,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34621 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34621 = (function (f,ch,meta34622){
this.f = f;
this.ch = ch;
this.meta34622 = meta34622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34623,meta34622__$1){
var self__ = this;
var _34623__$1 = this;
return (new cljs.core.async.t_cljs$core$async34621(self__.f,self__.ch,meta34622__$1));
});

cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34623){
var self__ = this;
var _34623__$1 = this;
return self__.meta34622;
});

cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34624 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34624 = (function (f,ch,meta34622,_,fn1,meta34625){
this.f = f;
this.ch = ch;
this.meta34622 = meta34622;
this._ = _;
this.fn1 = fn1;
this.meta34625 = meta34625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34626,meta34625__$1){
var self__ = this;
var _34626__$1 = this;
return (new cljs.core.async.t_cljs$core$async34624(self__.f,self__.ch,self__.meta34622,self__._,self__.fn1,meta34625__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34626){
var self__ = this;
var _34626__$1 = this;
return self__.meta34625;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34624.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34620_SHARP_){
var G__34627 = (((p1__34620_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34620_SHARP_) : self__.f.call(null,p1__34620_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34627) : f1.call(null,G__34627));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34624.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34622","meta34622",697153054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34621","cljs.core.async/t_cljs$core$async34621",951968432,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34625","meta34625",1420737460,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34624.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34624";

cljs.core.async.t_cljs$core$async34624.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34624");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34624.
 */
cljs.core.async.__GT_t_cljs$core$async34624 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34624(f__$1,ch__$1,meta34622__$1,___$2,fn1__$1,meta34625){
return (new cljs.core.async.t_cljs$core$async34624(f__$1,ch__$1,meta34622__$1,___$2,fn1__$1,meta34625));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34624(self__.f,self__.ch,self__.meta34622,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34628 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34628) : self__.f.call(null,G__34628));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34621.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34622","meta34622",697153054,null)], null);
});

cljs.core.async.t_cljs$core$async34621.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34621.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34621";

cljs.core.async.t_cljs$core$async34621.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34621");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34621.
 */
cljs.core.async.__GT_t_cljs$core$async34621 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34621(f__$1,ch__$1,meta34622){
return (new cljs.core.async.t_cljs$core$async34621(f__$1,ch__$1,meta34622));
});

}

return (new cljs.core.async.t_cljs$core$async34621(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34629 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34629 = (function (f,ch,meta34630){
this.f = f;
this.ch = ch;
this.meta34630 = meta34630;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34631,meta34630__$1){
var self__ = this;
var _34631__$1 = this;
return (new cljs.core.async.t_cljs$core$async34629(self__.f,self__.ch,meta34630__$1));
});

cljs.core.async.t_cljs$core$async34629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34631){
var self__ = this;
var _34631__$1 = this;
return self__.meta34630;
});

cljs.core.async.t_cljs$core$async34629.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34629.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34629.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34629.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34629.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34629.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async34629.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34630","meta34630",-1080849325,null)], null);
});

cljs.core.async.t_cljs$core$async34629.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34629.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34629";

cljs.core.async.t_cljs$core$async34629.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34629");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34629.
 */
cljs.core.async.__GT_t_cljs$core$async34629 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34629(f__$1,ch__$1,meta34630){
return (new cljs.core.async.t_cljs$core$async34629(f__$1,ch__$1,meta34630));
});

}

return (new cljs.core.async.t_cljs$core$async34629(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34632 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34632 = (function (p,ch,meta34633){
this.p = p;
this.ch = ch;
this.meta34633 = meta34633;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34634,meta34633__$1){
var self__ = this;
var _34634__$1 = this;
return (new cljs.core.async.t_cljs$core$async34632(self__.p,self__.ch,meta34633__$1));
});

cljs.core.async.t_cljs$core$async34632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34634){
var self__ = this;
var _34634__$1 = this;
return self__.meta34633;
});

cljs.core.async.t_cljs$core$async34632.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34632.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34632.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34632.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34632.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34632.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34632.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34632.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34633","meta34633",1427085019,null)], null);
});

cljs.core.async.t_cljs$core$async34632.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34632.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34632";

cljs.core.async.t_cljs$core$async34632.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34632");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34632.
 */
cljs.core.async.__GT_t_cljs$core$async34632 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34632(p__$1,ch__$1,meta34633){
return (new cljs.core.async.t_cljs$core$async34632(p__$1,ch__$1,meta34633));
});

}

return (new cljs.core.async.t_cljs$core$async34632(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34636 = arguments.length;
switch (G__34636) {
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
var c__33469__auto___35939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto___35939,out){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto___35939,out){
return (function (state_34657){
var state_val_34658 = (state_34657[(1)]);
if((state_val_34658 === (7))){
var inst_34653 = (state_34657[(2)]);
var state_34657__$1 = state_34657;
var statearr_34659_35941 = state_34657__$1;
(statearr_34659_35941[(2)] = inst_34653);

(statearr_34659_35941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34658 === (1))){
var state_34657__$1 = state_34657;
var statearr_34660_35942 = state_34657__$1;
(statearr_34660_35942[(2)] = null);

(statearr_34660_35942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34658 === (4))){
var inst_34639 = (state_34657[(7)]);
var inst_34639__$1 = (state_34657[(2)]);
var inst_34640 = (inst_34639__$1 == null);
var state_34657__$1 = (function (){var statearr_34661 = state_34657;
(statearr_34661[(7)] = inst_34639__$1);

return statearr_34661;
})();
if(cljs.core.truth_(inst_34640)){
var statearr_34662_35944 = state_34657__$1;
(statearr_34662_35944[(1)] = (5));

} else {
var statearr_34663_35946 = state_34657__$1;
(statearr_34663_35946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34658 === (6))){
var inst_34639 = (state_34657[(7)]);
var inst_34644 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34639) : p.call(null,inst_34639));
var state_34657__$1 = state_34657;
if(cljs.core.truth_(inst_34644)){
var statearr_34664_35948 = state_34657__$1;
(statearr_34664_35948[(1)] = (8));

} else {
var statearr_34665_35949 = state_34657__$1;
(statearr_34665_35949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34658 === (3))){
var inst_34655 = (state_34657[(2)]);
var state_34657__$1 = state_34657;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34657__$1,inst_34655);
} else {
if((state_val_34658 === (2))){
var state_34657__$1 = state_34657;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34657__$1,(4),ch);
} else {
if((state_val_34658 === (11))){
var inst_34647 = (state_34657[(2)]);
var state_34657__$1 = state_34657;
var statearr_34666_35962 = state_34657__$1;
(statearr_34666_35962[(2)] = inst_34647);

(statearr_34666_35962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34658 === (9))){
var state_34657__$1 = state_34657;
var statearr_34667_35965 = state_34657__$1;
(statearr_34667_35965[(2)] = null);

(statearr_34667_35965[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34658 === (5))){
var inst_34642 = cljs.core.async.close_BANG_(out);
var state_34657__$1 = state_34657;
var statearr_34668_35970 = state_34657__$1;
(statearr_34668_35970[(2)] = inst_34642);

(statearr_34668_35970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34658 === (10))){
var inst_34650 = (state_34657[(2)]);
var state_34657__$1 = (function (){var statearr_34669 = state_34657;
(statearr_34669[(8)] = inst_34650);

return statearr_34669;
})();
var statearr_34670_35982 = state_34657__$1;
(statearr_34670_35982[(2)] = null);

(statearr_34670_35982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34658 === (8))){
var inst_34639 = (state_34657[(7)]);
var state_34657__$1 = state_34657;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34657__$1,(11),out,inst_34639);
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
});})(c__33469__auto___35939,out))
;
return ((function (switch__33368__auto__,c__33469__auto___35939,out){
return (function() {
var cljs$core$async$state_machine__33369__auto__ = null;
var cljs$core$async$state_machine__33369__auto____0 = (function (){
var statearr_34671 = [null,null,null,null,null,null,null,null,null];
(statearr_34671[(0)] = cljs$core$async$state_machine__33369__auto__);

(statearr_34671[(1)] = (1));

return statearr_34671;
});
var cljs$core$async$state_machine__33369__auto____1 = (function (state_34657){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_34657);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e34672){if((e34672 instanceof Object)){
var ex__33372__auto__ = e34672;
var statearr_34673_36004 = state_34657;
(statearr_34673_36004[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34672;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36011 = state_34657;
state_34657 = G__36011;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$state_machine__33369__auto__ = function(state_34657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33369__auto____1.call(this,state_34657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33369__auto____0;
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33369__auto____1;
return cljs$core$async$state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto___35939,out))
})();
var state__33471__auto__ = (function (){var statearr_34674 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_34674[(6)] = c__33469__auto___35939);

return statearr_34674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto___35939,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34676 = arguments.length;
switch (G__34676) {
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
var c__33469__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto__){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto__){
return (function (state_34738){
var state_val_34739 = (state_34738[(1)]);
if((state_val_34739 === (7))){
var inst_34734 = (state_34738[(2)]);
var state_34738__$1 = state_34738;
var statearr_34740_36050 = state_34738__$1;
(statearr_34740_36050[(2)] = inst_34734);

(statearr_34740_36050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (20))){
var inst_34704 = (state_34738[(7)]);
var inst_34715 = (state_34738[(2)]);
var inst_34716 = cljs.core.next(inst_34704);
var inst_34690 = inst_34716;
var inst_34691 = null;
var inst_34692 = (0);
var inst_34693 = (0);
var state_34738__$1 = (function (){var statearr_34741 = state_34738;
(statearr_34741[(8)] = inst_34693);

(statearr_34741[(9)] = inst_34690);

(statearr_34741[(10)] = inst_34692);

(statearr_34741[(11)] = inst_34715);

(statearr_34741[(12)] = inst_34691);

return statearr_34741;
})();
var statearr_34742_36051 = state_34738__$1;
(statearr_34742_36051[(2)] = null);

(statearr_34742_36051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (1))){
var state_34738__$1 = state_34738;
var statearr_34743_36052 = state_34738__$1;
(statearr_34743_36052[(2)] = null);

(statearr_34743_36052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (4))){
var inst_34679 = (state_34738[(13)]);
var inst_34679__$1 = (state_34738[(2)]);
var inst_34680 = (inst_34679__$1 == null);
var state_34738__$1 = (function (){var statearr_34744 = state_34738;
(statearr_34744[(13)] = inst_34679__$1);

return statearr_34744;
})();
if(cljs.core.truth_(inst_34680)){
var statearr_34745_36053 = state_34738__$1;
(statearr_34745_36053[(1)] = (5));

} else {
var statearr_34746_36054 = state_34738__$1;
(statearr_34746_36054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (15))){
var state_34738__$1 = state_34738;
var statearr_34750_36059 = state_34738__$1;
(statearr_34750_36059[(2)] = null);

(statearr_34750_36059[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (21))){
var state_34738__$1 = state_34738;
var statearr_34751_36064 = state_34738__$1;
(statearr_34751_36064[(2)] = null);

(statearr_34751_36064[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (13))){
var inst_34693 = (state_34738[(8)]);
var inst_34690 = (state_34738[(9)]);
var inst_34692 = (state_34738[(10)]);
var inst_34691 = (state_34738[(12)]);
var inst_34700 = (state_34738[(2)]);
var inst_34701 = (inst_34693 + (1));
var tmp34747 = inst_34690;
var tmp34748 = inst_34692;
var tmp34749 = inst_34691;
var inst_34690__$1 = tmp34747;
var inst_34691__$1 = tmp34749;
var inst_34692__$1 = tmp34748;
var inst_34693__$1 = inst_34701;
var state_34738__$1 = (function (){var statearr_34752 = state_34738;
(statearr_34752[(14)] = inst_34700);

(statearr_34752[(8)] = inst_34693__$1);

(statearr_34752[(9)] = inst_34690__$1);

(statearr_34752[(10)] = inst_34692__$1);

(statearr_34752[(12)] = inst_34691__$1);

return statearr_34752;
})();
var statearr_34753_36074 = state_34738__$1;
(statearr_34753_36074[(2)] = null);

(statearr_34753_36074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (22))){
var state_34738__$1 = state_34738;
var statearr_34754_36075 = state_34738__$1;
(statearr_34754_36075[(2)] = null);

(statearr_34754_36075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (6))){
var inst_34679 = (state_34738[(13)]);
var inst_34688 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34679) : f.call(null,inst_34679));
var inst_34689 = cljs.core.seq(inst_34688);
var inst_34690 = inst_34689;
var inst_34691 = null;
var inst_34692 = (0);
var inst_34693 = (0);
var state_34738__$1 = (function (){var statearr_34755 = state_34738;
(statearr_34755[(8)] = inst_34693);

(statearr_34755[(9)] = inst_34690);

(statearr_34755[(10)] = inst_34692);

(statearr_34755[(12)] = inst_34691);

return statearr_34755;
})();
var statearr_34756_36077 = state_34738__$1;
(statearr_34756_36077[(2)] = null);

(statearr_34756_36077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (17))){
var inst_34704 = (state_34738[(7)]);
var inst_34708 = cljs.core.chunk_first(inst_34704);
var inst_34709 = cljs.core.chunk_rest(inst_34704);
var inst_34710 = cljs.core.count(inst_34708);
var inst_34690 = inst_34709;
var inst_34691 = inst_34708;
var inst_34692 = inst_34710;
var inst_34693 = (0);
var state_34738__$1 = (function (){var statearr_34757 = state_34738;
(statearr_34757[(8)] = inst_34693);

(statearr_34757[(9)] = inst_34690);

(statearr_34757[(10)] = inst_34692);

(statearr_34757[(12)] = inst_34691);

return statearr_34757;
})();
var statearr_34758_36081 = state_34738__$1;
(statearr_34758_36081[(2)] = null);

(statearr_34758_36081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (3))){
var inst_34736 = (state_34738[(2)]);
var state_34738__$1 = state_34738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34738__$1,inst_34736);
} else {
if((state_val_34739 === (12))){
var inst_34724 = (state_34738[(2)]);
var state_34738__$1 = state_34738;
var statearr_34759_36083 = state_34738__$1;
(statearr_34759_36083[(2)] = inst_34724);

(statearr_34759_36083[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (2))){
var state_34738__$1 = state_34738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34738__$1,(4),in$);
} else {
if((state_val_34739 === (23))){
var inst_34732 = (state_34738[(2)]);
var state_34738__$1 = state_34738;
var statearr_34760_36086 = state_34738__$1;
(statearr_34760_36086[(2)] = inst_34732);

(statearr_34760_36086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (19))){
var inst_34719 = (state_34738[(2)]);
var state_34738__$1 = state_34738;
var statearr_34761_36087 = state_34738__$1;
(statearr_34761_36087[(2)] = inst_34719);

(statearr_34761_36087[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (11))){
var inst_34690 = (state_34738[(9)]);
var inst_34704 = (state_34738[(7)]);
var inst_34704__$1 = cljs.core.seq(inst_34690);
var state_34738__$1 = (function (){var statearr_34762 = state_34738;
(statearr_34762[(7)] = inst_34704__$1);

return statearr_34762;
})();
if(inst_34704__$1){
var statearr_34763_36093 = state_34738__$1;
(statearr_34763_36093[(1)] = (14));

} else {
var statearr_34764_36097 = state_34738__$1;
(statearr_34764_36097[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (9))){
var inst_34726 = (state_34738[(2)]);
var inst_34727 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34738__$1 = (function (){var statearr_34765 = state_34738;
(statearr_34765[(15)] = inst_34726);

return statearr_34765;
})();
if(cljs.core.truth_(inst_34727)){
var statearr_34766_36112 = state_34738__$1;
(statearr_34766_36112[(1)] = (21));

} else {
var statearr_34767_36117 = state_34738__$1;
(statearr_34767_36117[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (5))){
var inst_34682 = cljs.core.async.close_BANG_(out);
var state_34738__$1 = state_34738;
var statearr_34768_36123 = state_34738__$1;
(statearr_34768_36123[(2)] = inst_34682);

(statearr_34768_36123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (14))){
var inst_34704 = (state_34738[(7)]);
var inst_34706 = cljs.core.chunked_seq_QMARK_(inst_34704);
var state_34738__$1 = state_34738;
if(inst_34706){
var statearr_34769_36124 = state_34738__$1;
(statearr_34769_36124[(1)] = (17));

} else {
var statearr_34770_36125 = state_34738__$1;
(statearr_34770_36125[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (16))){
var inst_34722 = (state_34738[(2)]);
var state_34738__$1 = state_34738;
var statearr_34771_36136 = state_34738__$1;
(statearr_34771_36136[(2)] = inst_34722);

(statearr_34771_36136[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34739 === (10))){
var inst_34693 = (state_34738[(8)]);
var inst_34691 = (state_34738[(12)]);
var inst_34698 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34691,inst_34693);
var state_34738__$1 = state_34738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34738__$1,(13),out,inst_34698);
} else {
if((state_val_34739 === (18))){
var inst_34704 = (state_34738[(7)]);
var inst_34713 = cljs.core.first(inst_34704);
var state_34738__$1 = state_34738;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34738__$1,(20),out,inst_34713);
} else {
if((state_val_34739 === (8))){
var inst_34693 = (state_34738[(8)]);
var inst_34692 = (state_34738[(10)]);
var inst_34695 = (inst_34693 < inst_34692);
var inst_34696 = inst_34695;
var state_34738__$1 = state_34738;
if(cljs.core.truth_(inst_34696)){
var statearr_34772_36155 = state_34738__$1;
(statearr_34772_36155[(1)] = (10));

} else {
var statearr_34773_36156 = state_34738__$1;
(statearr_34773_36156[(1)] = (11));

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
});})(c__33469__auto__))
;
return ((function (switch__33368__auto__,c__33469__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33369__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33369__auto____0 = (function (){
var statearr_34774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34774[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33369__auto__);

(statearr_34774[(1)] = (1));

return statearr_34774;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33369__auto____1 = (function (state_34738){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_34738);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e34775){if((e34775 instanceof Object)){
var ex__33372__auto__ = e34775;
var statearr_34776_36157 = state_34738;
(statearr_34776_36157[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34775;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36159 = state_34738;
state_34738 = G__36159;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33369__auto__ = function(state_34738){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33369__auto____1.call(this,state_34738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33369__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33369__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto__))
})();
var state__33471__auto__ = (function (){var statearr_34777 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_34777[(6)] = c__33469__auto__);

return statearr_34777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto__))
);

return c__33469__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34779 = arguments.length;
switch (G__34779) {
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
var G__34781 = arguments.length;
switch (G__34781) {
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
var G__34783 = arguments.length;
switch (G__34783) {
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
var c__33469__auto___36179 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto___36179,out){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto___36179,out){
return (function (state_34807){
var state_val_34808 = (state_34807[(1)]);
if((state_val_34808 === (7))){
var inst_34802 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34809_36181 = state_34807__$1;
(statearr_34809_36181[(2)] = inst_34802);

(statearr_34809_36181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (1))){
var inst_34784 = null;
var state_34807__$1 = (function (){var statearr_34810 = state_34807;
(statearr_34810[(7)] = inst_34784);

return statearr_34810;
})();
var statearr_34811_36186 = state_34807__$1;
(statearr_34811_36186[(2)] = null);

(statearr_34811_36186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (4))){
var inst_34787 = (state_34807[(8)]);
var inst_34787__$1 = (state_34807[(2)]);
var inst_34788 = (inst_34787__$1 == null);
var inst_34789 = cljs.core.not(inst_34788);
var state_34807__$1 = (function (){var statearr_34812 = state_34807;
(statearr_34812[(8)] = inst_34787__$1);

return statearr_34812;
})();
if(inst_34789){
var statearr_34813_36190 = state_34807__$1;
(statearr_34813_36190[(1)] = (5));

} else {
var statearr_34814_36191 = state_34807__$1;
(statearr_34814_36191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (6))){
var state_34807__$1 = state_34807;
var statearr_34815_36192 = state_34807__$1;
(statearr_34815_36192[(2)] = null);

(statearr_34815_36192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (3))){
var inst_34804 = (state_34807[(2)]);
var inst_34805 = cljs.core.async.close_BANG_(out);
var state_34807__$1 = (function (){var statearr_34816 = state_34807;
(statearr_34816[(9)] = inst_34804);

return statearr_34816;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34807__$1,inst_34805);
} else {
if((state_val_34808 === (2))){
var state_34807__$1 = state_34807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34807__$1,(4),ch);
} else {
if((state_val_34808 === (11))){
var inst_34787 = (state_34807[(8)]);
var inst_34796 = (state_34807[(2)]);
var inst_34784 = inst_34787;
var state_34807__$1 = (function (){var statearr_34817 = state_34807;
(statearr_34817[(10)] = inst_34796);

(statearr_34817[(7)] = inst_34784);

return statearr_34817;
})();
var statearr_34818_36196 = state_34807__$1;
(statearr_34818_36196[(2)] = null);

(statearr_34818_36196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (9))){
var inst_34787 = (state_34807[(8)]);
var state_34807__$1 = state_34807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34807__$1,(11),out,inst_34787);
} else {
if((state_val_34808 === (5))){
var inst_34787 = (state_34807[(8)]);
var inst_34784 = (state_34807[(7)]);
var inst_34791 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34787,inst_34784);
var state_34807__$1 = state_34807;
if(inst_34791){
var statearr_34820_36197 = state_34807__$1;
(statearr_34820_36197[(1)] = (8));

} else {
var statearr_34821_36198 = state_34807__$1;
(statearr_34821_36198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (10))){
var inst_34799 = (state_34807[(2)]);
var state_34807__$1 = state_34807;
var statearr_34822_36199 = state_34807__$1;
(statearr_34822_36199[(2)] = inst_34799);

(statearr_34822_36199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34808 === (8))){
var inst_34784 = (state_34807[(7)]);
var tmp34819 = inst_34784;
var inst_34784__$1 = tmp34819;
var state_34807__$1 = (function (){var statearr_34823 = state_34807;
(statearr_34823[(7)] = inst_34784__$1);

return statearr_34823;
})();
var statearr_34824_36203 = state_34807__$1;
(statearr_34824_36203[(2)] = null);

(statearr_34824_36203[(1)] = (2));


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
});})(c__33469__auto___36179,out))
;
return ((function (switch__33368__auto__,c__33469__auto___36179,out){
return (function() {
var cljs$core$async$state_machine__33369__auto__ = null;
var cljs$core$async$state_machine__33369__auto____0 = (function (){
var statearr_34825 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34825[(0)] = cljs$core$async$state_machine__33369__auto__);

(statearr_34825[(1)] = (1));

return statearr_34825;
});
var cljs$core$async$state_machine__33369__auto____1 = (function (state_34807){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_34807);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e34826){if((e34826 instanceof Object)){
var ex__33372__auto__ = e34826;
var statearr_34827_36204 = state_34807;
(statearr_34827_36204[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34807);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34826;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36208 = state_34807;
state_34807 = G__36208;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$state_machine__33369__auto__ = function(state_34807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33369__auto____1.call(this,state_34807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33369__auto____0;
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33369__auto____1;
return cljs$core$async$state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto___36179,out))
})();
var state__33471__auto__ = (function (){var statearr_34828 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_34828[(6)] = c__33469__auto___36179);

return statearr_34828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto___36179,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34830 = arguments.length;
switch (G__34830) {
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
var c__33469__auto___36216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto___36216,out){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto___36216,out){
return (function (state_34868){
var state_val_34869 = (state_34868[(1)]);
if((state_val_34869 === (7))){
var inst_34864 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
var statearr_34870_36223 = state_34868__$1;
(statearr_34870_36223[(2)] = inst_34864);

(statearr_34870_36223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (1))){
var inst_34831 = (new Array(n));
var inst_34832 = inst_34831;
var inst_34833 = (0);
var state_34868__$1 = (function (){var statearr_34871 = state_34868;
(statearr_34871[(7)] = inst_34833);

(statearr_34871[(8)] = inst_34832);

return statearr_34871;
})();
var statearr_34872_36227 = state_34868__$1;
(statearr_34872_36227[(2)] = null);

(statearr_34872_36227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (4))){
var inst_34836 = (state_34868[(9)]);
var inst_34836__$1 = (state_34868[(2)]);
var inst_34837 = (inst_34836__$1 == null);
var inst_34838 = cljs.core.not(inst_34837);
var state_34868__$1 = (function (){var statearr_34873 = state_34868;
(statearr_34873[(9)] = inst_34836__$1);

return statearr_34873;
})();
if(inst_34838){
var statearr_34874_36228 = state_34868__$1;
(statearr_34874_36228[(1)] = (5));

} else {
var statearr_34875_36229 = state_34868__$1;
(statearr_34875_36229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (15))){
var inst_34858 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
var statearr_34876_36231 = state_34868__$1;
(statearr_34876_36231[(2)] = inst_34858);

(statearr_34876_36231[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (13))){
var state_34868__$1 = state_34868;
var statearr_34877_36232 = state_34868__$1;
(statearr_34877_36232[(2)] = null);

(statearr_34877_36232[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (6))){
var inst_34833 = (state_34868[(7)]);
var inst_34854 = (inst_34833 > (0));
var state_34868__$1 = state_34868;
if(cljs.core.truth_(inst_34854)){
var statearr_34878_36235 = state_34868__$1;
(statearr_34878_36235[(1)] = (12));

} else {
var statearr_34879_36238 = state_34868__$1;
(statearr_34879_36238[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (3))){
var inst_34866 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34868__$1,inst_34866);
} else {
if((state_val_34869 === (12))){
var inst_34832 = (state_34868[(8)]);
var inst_34856 = cljs.core.vec(inst_34832);
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34868__$1,(15),out,inst_34856);
} else {
if((state_val_34869 === (2))){
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34868__$1,(4),ch);
} else {
if((state_val_34869 === (11))){
var inst_34848 = (state_34868[(2)]);
var inst_34849 = (new Array(n));
var inst_34832 = inst_34849;
var inst_34833 = (0);
var state_34868__$1 = (function (){var statearr_34880 = state_34868;
(statearr_34880[(10)] = inst_34848);

(statearr_34880[(7)] = inst_34833);

(statearr_34880[(8)] = inst_34832);

return statearr_34880;
})();
var statearr_34881_36247 = state_34868__$1;
(statearr_34881_36247[(2)] = null);

(statearr_34881_36247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (9))){
var inst_34832 = (state_34868[(8)]);
var inst_34846 = cljs.core.vec(inst_34832);
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34868__$1,(11),out,inst_34846);
} else {
if((state_val_34869 === (5))){
var inst_34833 = (state_34868[(7)]);
var inst_34836 = (state_34868[(9)]);
var inst_34841 = (state_34868[(11)]);
var inst_34832 = (state_34868[(8)]);
var inst_34840 = (inst_34832[inst_34833] = inst_34836);
var inst_34841__$1 = (inst_34833 + (1));
var inst_34842 = (inst_34841__$1 < n);
var state_34868__$1 = (function (){var statearr_34882 = state_34868;
(statearr_34882[(12)] = inst_34840);

(statearr_34882[(11)] = inst_34841__$1);

return statearr_34882;
})();
if(cljs.core.truth_(inst_34842)){
var statearr_34883_36255 = state_34868__$1;
(statearr_34883_36255[(1)] = (8));

} else {
var statearr_34884_36257 = state_34868__$1;
(statearr_34884_36257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (14))){
var inst_34861 = (state_34868[(2)]);
var inst_34862 = cljs.core.async.close_BANG_(out);
var state_34868__$1 = (function (){var statearr_34886 = state_34868;
(statearr_34886[(13)] = inst_34861);

return statearr_34886;
})();
var statearr_34887_36259 = state_34868__$1;
(statearr_34887_36259[(2)] = inst_34862);

(statearr_34887_36259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (10))){
var inst_34852 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
var statearr_34888_36260 = state_34868__$1;
(statearr_34888_36260[(2)] = inst_34852);

(statearr_34888_36260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (8))){
var inst_34841 = (state_34868[(11)]);
var inst_34832 = (state_34868[(8)]);
var tmp34885 = inst_34832;
var inst_34832__$1 = tmp34885;
var inst_34833 = inst_34841;
var state_34868__$1 = (function (){var statearr_34889 = state_34868;
(statearr_34889[(7)] = inst_34833);

(statearr_34889[(8)] = inst_34832__$1);

return statearr_34889;
})();
var statearr_34890_36261 = state_34868__$1;
(statearr_34890_36261[(2)] = null);

(statearr_34890_36261[(1)] = (2));


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
});})(c__33469__auto___36216,out))
;
return ((function (switch__33368__auto__,c__33469__auto___36216,out){
return (function() {
var cljs$core$async$state_machine__33369__auto__ = null;
var cljs$core$async$state_machine__33369__auto____0 = (function (){
var statearr_34891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34891[(0)] = cljs$core$async$state_machine__33369__auto__);

(statearr_34891[(1)] = (1));

return statearr_34891;
});
var cljs$core$async$state_machine__33369__auto____1 = (function (state_34868){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_34868);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e34892){if((e34892 instanceof Object)){
var ex__33372__auto__ = e34892;
var statearr_34893_36264 = state_34868;
(statearr_34893_36264[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34892;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36267 = state_34868;
state_34868 = G__36267;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$state_machine__33369__auto__ = function(state_34868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33369__auto____1.call(this,state_34868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33369__auto____0;
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33369__auto____1;
return cljs$core$async$state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto___36216,out))
})();
var state__33471__auto__ = (function (){var statearr_34894 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_34894[(6)] = c__33469__auto___36216);

return statearr_34894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto___36216,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34896 = arguments.length;
switch (G__34896) {
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
var c__33469__auto___36281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33469__auto___36281,out){
return (function (){
var f__33470__auto__ = (function (){var switch__33368__auto__ = ((function (c__33469__auto___36281,out){
return (function (state_34938){
var state_val_34939 = (state_34938[(1)]);
if((state_val_34939 === (7))){
var inst_34934 = (state_34938[(2)]);
var state_34938__$1 = state_34938;
var statearr_34940_36282 = state_34938__$1;
(statearr_34940_36282[(2)] = inst_34934);

(statearr_34940_36282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (1))){
var inst_34897 = [];
var inst_34898 = inst_34897;
var inst_34899 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34938__$1 = (function (){var statearr_34941 = state_34938;
(statearr_34941[(7)] = inst_34898);

(statearr_34941[(8)] = inst_34899);

return statearr_34941;
})();
var statearr_34942_36290 = state_34938__$1;
(statearr_34942_36290[(2)] = null);

(statearr_34942_36290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (4))){
var inst_34902 = (state_34938[(9)]);
var inst_34902__$1 = (state_34938[(2)]);
var inst_34903 = (inst_34902__$1 == null);
var inst_34904 = cljs.core.not(inst_34903);
var state_34938__$1 = (function (){var statearr_34943 = state_34938;
(statearr_34943[(9)] = inst_34902__$1);

return statearr_34943;
})();
if(inst_34904){
var statearr_34944_36291 = state_34938__$1;
(statearr_34944_36291[(1)] = (5));

} else {
var statearr_34945_36292 = state_34938__$1;
(statearr_34945_36292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (15))){
var inst_34928 = (state_34938[(2)]);
var state_34938__$1 = state_34938;
var statearr_34946_36293 = state_34938__$1;
(statearr_34946_36293[(2)] = inst_34928);

(statearr_34946_36293[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (13))){
var state_34938__$1 = state_34938;
var statearr_34947_36294 = state_34938__$1;
(statearr_34947_36294[(2)] = null);

(statearr_34947_36294[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (6))){
var inst_34898 = (state_34938[(7)]);
var inst_34923 = inst_34898.length;
var inst_34924 = (inst_34923 > (0));
var state_34938__$1 = state_34938;
if(cljs.core.truth_(inst_34924)){
var statearr_34948_36296 = state_34938__$1;
(statearr_34948_36296[(1)] = (12));

} else {
var statearr_34949_36297 = state_34938__$1;
(statearr_34949_36297[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (3))){
var inst_34936 = (state_34938[(2)]);
var state_34938__$1 = state_34938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34938__$1,inst_34936);
} else {
if((state_val_34939 === (12))){
var inst_34898 = (state_34938[(7)]);
var inst_34926 = cljs.core.vec(inst_34898);
var state_34938__$1 = state_34938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34938__$1,(15),out,inst_34926);
} else {
if((state_val_34939 === (2))){
var state_34938__$1 = state_34938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34938__$1,(4),ch);
} else {
if((state_val_34939 === (11))){
var inst_34906 = (state_34938[(10)]);
var inst_34902 = (state_34938[(9)]);
var inst_34916 = (state_34938[(2)]);
var inst_34917 = [];
var inst_34918 = inst_34917.push(inst_34902);
var inst_34898 = inst_34917;
var inst_34899 = inst_34906;
var state_34938__$1 = (function (){var statearr_34950 = state_34938;
(statearr_34950[(7)] = inst_34898);

(statearr_34950[(11)] = inst_34918);

(statearr_34950[(8)] = inst_34899);

(statearr_34950[(12)] = inst_34916);

return statearr_34950;
})();
var statearr_34951_36313 = state_34938__$1;
(statearr_34951_36313[(2)] = null);

(statearr_34951_36313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (9))){
var inst_34898 = (state_34938[(7)]);
var inst_34914 = cljs.core.vec(inst_34898);
var state_34938__$1 = state_34938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34938__$1,(11),out,inst_34914);
} else {
if((state_val_34939 === (5))){
var inst_34899 = (state_34938[(8)]);
var inst_34906 = (state_34938[(10)]);
var inst_34902 = (state_34938[(9)]);
var inst_34906__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34902) : f.call(null,inst_34902));
var inst_34907 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34906__$1,inst_34899);
var inst_34908 = cljs.core.keyword_identical_QMARK_(inst_34899,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34909 = ((inst_34907) || (inst_34908));
var state_34938__$1 = (function (){var statearr_34952 = state_34938;
(statearr_34952[(10)] = inst_34906__$1);

return statearr_34952;
})();
if(cljs.core.truth_(inst_34909)){
var statearr_34953_36326 = state_34938__$1;
(statearr_34953_36326[(1)] = (8));

} else {
var statearr_34954_36327 = state_34938__$1;
(statearr_34954_36327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (14))){
var inst_34931 = (state_34938[(2)]);
var inst_34932 = cljs.core.async.close_BANG_(out);
var state_34938__$1 = (function (){var statearr_34956 = state_34938;
(statearr_34956[(13)] = inst_34931);

return statearr_34956;
})();
var statearr_34957_36332 = state_34938__$1;
(statearr_34957_36332[(2)] = inst_34932);

(statearr_34957_36332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (10))){
var inst_34921 = (state_34938[(2)]);
var state_34938__$1 = state_34938;
var statearr_34958_36333 = state_34938__$1;
(statearr_34958_36333[(2)] = inst_34921);

(statearr_34958_36333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34939 === (8))){
var inst_34898 = (state_34938[(7)]);
var inst_34906 = (state_34938[(10)]);
var inst_34902 = (state_34938[(9)]);
var inst_34911 = inst_34898.push(inst_34902);
var tmp34955 = inst_34898;
var inst_34898__$1 = tmp34955;
var inst_34899 = inst_34906;
var state_34938__$1 = (function (){var statearr_34959 = state_34938;
(statearr_34959[(7)] = inst_34898__$1);

(statearr_34959[(8)] = inst_34899);

(statearr_34959[(14)] = inst_34911);

return statearr_34959;
})();
var statearr_34960_36340 = state_34938__$1;
(statearr_34960_36340[(2)] = null);

(statearr_34960_36340[(1)] = (2));


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
});})(c__33469__auto___36281,out))
;
return ((function (switch__33368__auto__,c__33469__auto___36281,out){
return (function() {
var cljs$core$async$state_machine__33369__auto__ = null;
var cljs$core$async$state_machine__33369__auto____0 = (function (){
var statearr_34961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34961[(0)] = cljs$core$async$state_machine__33369__auto__);

(statearr_34961[(1)] = (1));

return statearr_34961;
});
var cljs$core$async$state_machine__33369__auto____1 = (function (state_34938){
while(true){
var ret_value__33370__auto__ = (function (){try{while(true){
var result__33371__auto__ = switch__33368__auto__(state_34938);
if(cljs.core.keyword_identical_QMARK_(result__33371__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33371__auto__;
}
break;
}
}catch (e34962){if((e34962 instanceof Object)){
var ex__33372__auto__ = e34962;
var statearr_34963_36363 = state_34938;
(statearr_34963_36363[(5)] = ex__33372__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34962;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33370__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36373 = state_34938;
state_34938 = G__36373;
continue;
} else {
return ret_value__33370__auto__;
}
break;
}
});
cljs$core$async$state_machine__33369__auto__ = function(state_34938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33369__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33369__auto____1.call(this,state_34938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33369__auto____0;
cljs$core$async$state_machine__33369__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33369__auto____1;
return cljs$core$async$state_machine__33369__auto__;
})()
;})(switch__33368__auto__,c__33469__auto___36281,out))
})();
var state__33471__auto__ = (function (){var statearr_34964 = (f__33470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33470__auto__.cljs$core$IFn$_invoke$arity$0() : f__33470__auto__.call(null));
(statearr_34964[(6)] = c__33469__auto___36281);

return statearr_34964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33471__auto__);
});})(c__33469__auto___36281,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
