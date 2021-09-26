goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37022 = arguments.length;
switch (G__37022) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37023 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37023 = (function (f,blockable,meta37024){
this.f = f;
this.blockable = blockable;
this.meta37024 = meta37024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37025,meta37024__$1){
var self__ = this;
var _37025__$1 = this;
return (new cljs.core.async.t_cljs$core$async37023(self__.f,self__.blockable,meta37024__$1));
}));

(cljs.core.async.t_cljs$core$async37023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37025){
var self__ = this;
var _37025__$1 = this;
return self__.meta37024;
}));

(cljs.core.async.t_cljs$core$async37023.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37023.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37023.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37024","meta37024",302900276,null)], null);
}));

(cljs.core.async.t_cljs$core$async37023.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37023");

(cljs.core.async.t_cljs$core$async37023.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37023");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37023.
 */
cljs.core.async.__GT_t_cljs$core$async37023 = (function cljs$core$async$__GT_t_cljs$core$async37023(f__$1,blockable__$1,meta37024){
return (new cljs.core.async.t_cljs$core$async37023(f__$1,blockable__$1,meta37024));
});

}

return (new cljs.core.async.t_cljs$core$async37023(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37044 = arguments.length;
switch (G__37044) {
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
var G__37056 = arguments.length;
switch (G__37056) {
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
var G__37058 = arguments.length;
switch (G__37058) {
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
var val_39231 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39231) : fn1.call(null,val_39231));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39231) : fn1.call(null,val_39231));
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
var G__37060 = arguments.length;
switch (G__37060) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
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
var n__4695__auto___39240 = n;
var x_39241 = (0);
while(true){
if((x_39241 < n__4695__auto___39240)){
(a[x_39241] = x_39241);

var G__39242 = (x_39241 + (1));
x_39241 = G__39242;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37063 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37063 = (function (flag,meta37064){
this.flag = flag;
this.meta37064 = meta37064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37065,meta37064__$1){
var self__ = this;
var _37065__$1 = this;
return (new cljs.core.async.t_cljs$core$async37063(self__.flag,meta37064__$1));
}));

(cljs.core.async.t_cljs$core$async37063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37065){
var self__ = this;
var _37065__$1 = this;
return self__.meta37064;
}));

(cljs.core.async.t_cljs$core$async37063.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37063.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37063.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37063.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37063.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37064","meta37064",40052684,null)], null);
}));

(cljs.core.async.t_cljs$core$async37063.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37063");

(cljs.core.async.t_cljs$core$async37063.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37063");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37063.
 */
cljs.core.async.__GT_t_cljs$core$async37063 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37063(flag__$1,meta37064){
return (new cljs.core.async.t_cljs$core$async37063(flag__$1,meta37064));
});

}

return (new cljs.core.async.t_cljs$core$async37063(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37070 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37070 = (function (flag,cb,meta37071){
this.flag = flag;
this.cb = cb;
this.meta37071 = meta37071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37072,meta37071__$1){
var self__ = this;
var _37072__$1 = this;
return (new cljs.core.async.t_cljs$core$async37070(self__.flag,self__.cb,meta37071__$1));
}));

(cljs.core.async.t_cljs$core$async37070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37072){
var self__ = this;
var _37072__$1 = this;
return self__.meta37071;
}));

(cljs.core.async.t_cljs$core$async37070.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37070.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37070.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37070.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37071","meta37071",-1430213349,null)], null);
}));

(cljs.core.async.t_cljs$core$async37070.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37070");

(cljs.core.async.t_cljs$core$async37070.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37070");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37070.
 */
cljs.core.async.__GT_t_cljs$core$async37070 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37070(flag__$1,cb__$1,meta37071){
return (new cljs.core.async.t_cljs$core$async37070(flag__$1,cb__$1,meta37071));
});

}

return (new cljs.core.async.t_cljs$core$async37070(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37081_SHARP_){
var G__37083 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37081_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37083) : fret.call(null,G__37083));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37082_SHARP_){
var G__37084 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37082_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37084) : fret.call(null,G__37084));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39246 = (i + (1));
i = G__39246;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var args__4824__auto__ = [];
var len__4818__auto___39247 = arguments.length;
var i__4819__auto___39248 = (0);
while(true){
if((i__4819__auto___39248 < len__4818__auto___39247)){
args__4824__auto__.push((arguments[i__4819__auto___39248]));

var G__39249 = (i__4819__auto___39248 + (1));
i__4819__auto___39248 = G__39249;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37087){
var map__37088 = p__37087;
var map__37088__$1 = cljs.core.__destructure_map(map__37088);
var opts = map__37088__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37085){
var G__37086 = cljs.core.first(seq37085);
var seq37085__$1 = cljs.core.next(seq37085);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37086,seq37085__$1);
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
var G__37094 = arguments.length;
switch (G__37094) {
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
var c__36947__auto___39253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_37124){
var state_val_37125 = (state_37124[(1)]);
if((state_val_37125 === (7))){
var inst_37118 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37127_39254 = state_37124__$1;
(statearr_37127_39254[(2)] = inst_37118);

(statearr_37127_39254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (1))){
var state_37124__$1 = state_37124;
var statearr_37129_39255 = state_37124__$1;
(statearr_37129_39255[(2)] = null);

(statearr_37129_39255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (4))){
var inst_37101 = (state_37124[(7)]);
var inst_37101__$1 = (state_37124[(2)]);
var inst_37102 = (inst_37101__$1 == null);
var state_37124__$1 = (function (){var statearr_37137 = state_37124;
(statearr_37137[(7)] = inst_37101__$1);

return statearr_37137;
})();
if(cljs.core.truth_(inst_37102)){
var statearr_37138_39256 = state_37124__$1;
(statearr_37138_39256[(1)] = (5));

} else {
var statearr_37139_39257 = state_37124__$1;
(statearr_37139_39257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (13))){
var state_37124__$1 = state_37124;
var statearr_37144_39258 = state_37124__$1;
(statearr_37144_39258[(2)] = null);

(statearr_37144_39258[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (6))){
var inst_37101 = (state_37124[(7)]);
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37124__$1,(11),to,inst_37101);
} else {
if((state_val_37125 === (3))){
var inst_37120 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37124__$1,inst_37120);
} else {
if((state_val_37125 === (12))){
var state_37124__$1 = state_37124;
var statearr_37149_39259 = state_37124__$1;
(statearr_37149_39259[(2)] = null);

(statearr_37149_39259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (2))){
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37124__$1,(4),from);
} else {
if((state_val_37125 === (11))){
var inst_37111 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
if(cljs.core.truth_(inst_37111)){
var statearr_37153_39260 = state_37124__$1;
(statearr_37153_39260[(1)] = (12));

} else {
var statearr_37154_39261 = state_37124__$1;
(statearr_37154_39261[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (9))){
var state_37124__$1 = state_37124;
var statearr_37155_39262 = state_37124__$1;
(statearr_37155_39262[(2)] = null);

(statearr_37155_39262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (5))){
var state_37124__$1 = state_37124;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37156_39263 = state_37124__$1;
(statearr_37156_39263[(1)] = (8));

} else {
var statearr_37157_39264 = state_37124__$1;
(statearr_37157_39264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (14))){
var inst_37116 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37158_39265 = state_37124__$1;
(statearr_37158_39265[(2)] = inst_37116);

(statearr_37158_39265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (10))){
var inst_37108 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37159_39266 = state_37124__$1;
(statearr_37159_39266[(2)] = inst_37108);

(statearr_37159_39266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (8))){
var inst_37105 = cljs.core.async.close_BANG_(to);
var state_37124__$1 = state_37124;
var statearr_37160_39267 = state_37124__$1;
(statearr_37160_39267[(2)] = inst_37105);

(statearr_37160_39267[(1)] = (10));


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
var cljs$core$async$state_machine__36766__auto__ = null;
var cljs$core$async$state_machine__36766__auto____0 = (function (){
var statearr_37161 = [null,null,null,null,null,null,null,null];
(statearr_37161[(0)] = cljs$core$async$state_machine__36766__auto__);

(statearr_37161[(1)] = (1));

return statearr_37161;
});
var cljs$core$async$state_machine__36766__auto____1 = (function (state_37124){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_37124);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e37163){var ex__36769__auto__ = e37163;
var statearr_37164_39268 = state_37124;
(statearr_37164_39268[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_37124[(4)]))){
var statearr_37166_39269 = state_37124;
(statearr_37166_39269[(1)] = cljs.core.first((state_37124[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39270 = state_37124;
state_37124 = G__39270;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$state_machine__36766__auto__ = function(state_37124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36766__auto____1.call(this,state_37124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36766__auto____0;
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36766__auto____1;
return cljs$core$async$state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_37168 = f__36948__auto__();
(statearr_37168[(6)] = c__36947__auto___39253);

return statearr_37168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
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
var process = (function (p__37172){
var vec__37173 = p__37172;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37173,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37173,(1),null);
var job = vec__37173;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__36947__auto___39271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_37180){
var state_val_37181 = (state_37180[(1)]);
if((state_val_37181 === (1))){
var state_37180__$1 = state_37180;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37180__$1,(2),res,v);
} else {
if((state_val_37181 === (2))){
var inst_37177 = (state_37180[(2)]);
var inst_37178 = cljs.core.async.close_BANG_(res);
var state_37180__$1 = (function (){var statearr_37182 = state_37180;
(statearr_37182[(7)] = inst_37177);

return statearr_37182;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37180__$1,inst_37178);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____0 = (function (){
var statearr_37183 = [null,null,null,null,null,null,null,null];
(statearr_37183[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__);

(statearr_37183[(1)] = (1));

return statearr_37183;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____1 = (function (state_37180){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_37180);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e37184){var ex__36769__auto__ = e37184;
var statearr_37185_39272 = state_37180;
(statearr_37185_39272[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_37180[(4)]))){
var statearr_37186_39273 = state_37180;
(statearr_37186_39273[(1)] = cljs.core.first((state_37180[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39274 = state_37180;
state_37180 = G__39274;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__ = function(state_37180){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____1.call(this,state_37180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_37187 = f__36948__auto__();
(statearr_37187[(6)] = c__36947__auto___39271);

return statearr_37187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37188){
var vec__37189 = p__37188;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37189,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37189,(1),null);
var job = vec__37189;
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
var n__4695__auto___39276 = n;
var __39277 = (0);
while(true){
if((__39277 < n__4695__auto___39276)){
var G__37192_39278 = type;
var G__37192_39279__$1 = (((G__37192_39278 instanceof cljs.core.Keyword))?G__37192_39278.fqn:null);
switch (G__37192_39279__$1) {
case "compute":
var c__36947__auto___39281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39277,c__36947__auto___39281,G__37192_39278,G__37192_39279__$1,n__4695__auto___39276,jobs,results,process,async){
return (function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = ((function (__39277,c__36947__auto___39281,G__37192_39278,G__37192_39279__$1,n__4695__auto___39276,jobs,results,process,async){
return (function (state_37205){
var state_val_37206 = (state_37205[(1)]);
if((state_val_37206 === (1))){
var state_37205__$1 = state_37205;
var statearr_37207_39282 = state_37205__$1;
(statearr_37207_39282[(2)] = null);

(statearr_37207_39282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (2))){
var state_37205__$1 = state_37205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37205__$1,(4),jobs);
} else {
if((state_val_37206 === (3))){
var inst_37203 = (state_37205[(2)]);
var state_37205__$1 = state_37205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37205__$1,inst_37203);
} else {
if((state_val_37206 === (4))){
var inst_37195 = (state_37205[(2)]);
var inst_37196 = process(inst_37195);
var state_37205__$1 = state_37205;
if(cljs.core.truth_(inst_37196)){
var statearr_37208_39285 = state_37205__$1;
(statearr_37208_39285[(1)] = (5));

} else {
var statearr_37209_39286 = state_37205__$1;
(statearr_37209_39286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (5))){
var state_37205__$1 = state_37205;
var statearr_37210_39289 = state_37205__$1;
(statearr_37210_39289[(2)] = null);

(statearr_37210_39289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (6))){
var state_37205__$1 = state_37205;
var statearr_37211_39293 = state_37205__$1;
(statearr_37211_39293[(2)] = null);

(statearr_37211_39293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37206 === (7))){
var inst_37201 = (state_37205[(2)]);
var state_37205__$1 = state_37205;
var statearr_37212_39297 = state_37205__$1;
(statearr_37212_39297[(2)] = inst_37201);

(statearr_37212_39297[(1)] = (3));


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
});})(__39277,c__36947__auto___39281,G__37192_39278,G__37192_39279__$1,n__4695__auto___39276,jobs,results,process,async))
;
return ((function (__39277,switch__36765__auto__,c__36947__auto___39281,G__37192_39278,G__37192_39279__$1,n__4695__auto___39276,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____0 = (function (){
var statearr_37213 = [null,null,null,null,null,null,null];
(statearr_37213[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__);

(statearr_37213[(1)] = (1));

return statearr_37213;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____1 = (function (state_37205){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_37205);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e37214){var ex__36769__auto__ = e37214;
var statearr_37215_39301 = state_37205;
(statearr_37215_39301[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_37205[(4)]))){
var statearr_37216_39302 = state_37205;
(statearr_37216_39302[(1)] = cljs.core.first((state_37205[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39303 = state_37205;
state_37205 = G__39303;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__ = function(state_37205){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____1.call(this,state_37205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__;
})()
;})(__39277,switch__36765__auto__,c__36947__auto___39281,G__37192_39278,G__37192_39279__$1,n__4695__auto___39276,jobs,results,process,async))
})();
var state__36949__auto__ = (function (){var statearr_37217 = f__36948__auto__();
(statearr_37217[(6)] = c__36947__auto___39281);

return statearr_37217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
});})(__39277,c__36947__auto___39281,G__37192_39278,G__37192_39279__$1,n__4695__auto___39276,jobs,results,process,async))
);


break;
case "async":
var c__36947__auto___39305 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39277,c__36947__auto___39305,G__37192_39278,G__37192_39279__$1,n__4695__auto___39276,jobs,results,process,async){
return (function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = ((function (__39277,c__36947__auto___39305,G__37192_39278,G__37192_39279__$1,n__4695__auto___39276,jobs,results,process,async){
return (function (state_37230){
var state_val_37231 = (state_37230[(1)]);
if((state_val_37231 === (1))){
var state_37230__$1 = state_37230;
var statearr_37232_39307 = state_37230__$1;
(statearr_37232_39307[(2)] = null);

(statearr_37232_39307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (2))){
var state_37230__$1 = state_37230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37230__$1,(4),jobs);
} else {
if((state_val_37231 === (3))){
var inst_37228 = (state_37230[(2)]);
var state_37230__$1 = state_37230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37230__$1,inst_37228);
} else {
if((state_val_37231 === (4))){
var inst_37220 = (state_37230[(2)]);
var inst_37221 = async(inst_37220);
var state_37230__$1 = state_37230;
if(cljs.core.truth_(inst_37221)){
var statearr_37234_39308 = state_37230__$1;
(statearr_37234_39308[(1)] = (5));

} else {
var statearr_37235_39309 = state_37230__$1;
(statearr_37235_39309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (5))){
var state_37230__$1 = state_37230;
var statearr_37236_39310 = state_37230__$1;
(statearr_37236_39310[(2)] = null);

(statearr_37236_39310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (6))){
var state_37230__$1 = state_37230;
var statearr_37237_39311 = state_37230__$1;
(statearr_37237_39311[(2)] = null);

(statearr_37237_39311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37231 === (7))){
var inst_37226 = (state_37230[(2)]);
var state_37230__$1 = state_37230;
var statearr_37238_39312 = state_37230__$1;
(statearr_37238_39312[(2)] = inst_37226);

(statearr_37238_39312[(1)] = (3));


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
});})(__39277,c__36947__auto___39305,G__37192_39278,G__37192_39279__$1,n__4695__auto___39276,jobs,results,process,async))
;
return ((function (__39277,switch__36765__auto__,c__36947__auto___39305,G__37192_39278,G__37192_39279__$1,n__4695__auto___39276,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____0 = (function (){
var statearr_37240 = [null,null,null,null,null,null,null];
(statearr_37240[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__);

(statearr_37240[(1)] = (1));

return statearr_37240;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____1 = (function (state_37230){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_37230);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e37241){var ex__36769__auto__ = e37241;
var statearr_37242_39314 = state_37230;
(statearr_37242_39314[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_37230[(4)]))){
var statearr_37243_39315 = state_37230;
(statearr_37243_39315[(1)] = cljs.core.first((state_37230[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39317 = state_37230;
state_37230 = G__39317;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__ = function(state_37230){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____1.call(this,state_37230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__;
})()
;})(__39277,switch__36765__auto__,c__36947__auto___39305,G__37192_39278,G__37192_39279__$1,n__4695__auto___39276,jobs,results,process,async))
})();
var state__36949__auto__ = (function (){var statearr_37244 = f__36948__auto__();
(statearr_37244[(6)] = c__36947__auto___39305);

return statearr_37244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
});})(__39277,c__36947__auto___39305,G__37192_39278,G__37192_39279__$1,n__4695__auto___39276,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37192_39279__$1)].join('')));

}

var G__39318 = (__39277 + (1));
__39277 = G__39318;
continue;
} else {
}
break;
}

var c__36947__auto___39319 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_37289){
var state_val_37290 = (state_37289[(1)]);
if((state_val_37290 === (7))){
var inst_37279 = (state_37289[(2)]);
var state_37289__$1 = state_37289;
var statearr_37292_39320 = state_37289__$1;
(statearr_37292_39320[(2)] = inst_37279);

(statearr_37292_39320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37290 === (1))){
var state_37289__$1 = state_37289;
var statearr_37293_39321 = state_37289__$1;
(statearr_37293_39321[(2)] = null);

(statearr_37293_39321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37290 === (4))){
var inst_37247 = (state_37289[(7)]);
var inst_37247__$1 = (state_37289[(2)]);
var inst_37248 = (inst_37247__$1 == null);
var state_37289__$1 = (function (){var statearr_37296 = state_37289;
(statearr_37296[(7)] = inst_37247__$1);

return statearr_37296;
})();
if(cljs.core.truth_(inst_37248)){
var statearr_37297_39322 = state_37289__$1;
(statearr_37297_39322[(1)] = (5));

} else {
var statearr_37298_39323 = state_37289__$1;
(statearr_37298_39323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37290 === (6))){
var inst_37252 = (state_37289[(8)]);
var inst_37247 = (state_37289[(7)]);
var inst_37252__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37259 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37266 = [inst_37247,inst_37252__$1];
var inst_37267 = (new cljs.core.PersistentVector(null,2,(5),inst_37259,inst_37266,null));
var state_37289__$1 = (function (){var statearr_37299 = state_37289;
(statearr_37299[(8)] = inst_37252__$1);

return statearr_37299;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37289__$1,(8),jobs,inst_37267);
} else {
if((state_val_37290 === (3))){
var inst_37282 = (state_37289[(2)]);
var state_37289__$1 = state_37289;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37289__$1,inst_37282);
} else {
if((state_val_37290 === (2))){
var state_37289__$1 = state_37289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37289__$1,(4),from);
} else {
if((state_val_37290 === (9))){
var inst_37276 = (state_37289[(2)]);
var state_37289__$1 = (function (){var statearr_37321 = state_37289;
(statearr_37321[(9)] = inst_37276);

return statearr_37321;
})();
var statearr_37322_39324 = state_37289__$1;
(statearr_37322_39324[(2)] = null);

(statearr_37322_39324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37290 === (5))){
var inst_37250 = cljs.core.async.close_BANG_(jobs);
var state_37289__$1 = state_37289;
var statearr_37323_39326 = state_37289__$1;
(statearr_37323_39326[(2)] = inst_37250);

(statearr_37323_39326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37290 === (8))){
var inst_37252 = (state_37289[(8)]);
var inst_37270 = (state_37289[(2)]);
var state_37289__$1 = (function (){var statearr_37324 = state_37289;
(statearr_37324[(10)] = inst_37270);

return statearr_37324;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37289__$1,(9),results,inst_37252);
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
var cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____0 = (function (){
var statearr_37325 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37325[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__);

(statearr_37325[(1)] = (1));

return statearr_37325;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____1 = (function (state_37289){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_37289);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e37326){var ex__36769__auto__ = e37326;
var statearr_37331_39328 = state_37289;
(statearr_37331_39328[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_37289[(4)]))){
var statearr_37337_39329 = state_37289;
(statearr_37337_39329[(1)] = cljs.core.first((state_37289[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39330 = state_37289;
state_37289 = G__39330;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__ = function(state_37289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____1.call(this,state_37289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_37351 = f__36948__auto__();
(statearr_37351[(6)] = c__36947__auto___39319);

return statearr_37351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
}));


var c__36947__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_37416){
var state_val_37417 = (state_37416[(1)]);
if((state_val_37417 === (7))){
var inst_37412 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
var statearr_37422_39331 = state_37416__$1;
(statearr_37422_39331[(2)] = inst_37412);

(statearr_37422_39331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (20))){
var state_37416__$1 = state_37416;
var statearr_37423_39332 = state_37416__$1;
(statearr_37423_39332[(2)] = null);

(statearr_37423_39332[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (1))){
var state_37416__$1 = state_37416;
var statearr_37424_39333 = state_37416__$1;
(statearr_37424_39333[(2)] = null);

(statearr_37424_39333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (4))){
var inst_37365 = (state_37416[(7)]);
var inst_37365__$1 = (state_37416[(2)]);
var inst_37367 = (inst_37365__$1 == null);
var state_37416__$1 = (function (){var statearr_37435 = state_37416;
(statearr_37435[(7)] = inst_37365__$1);

return statearr_37435;
})();
if(cljs.core.truth_(inst_37367)){
var statearr_37436_39334 = state_37416__$1;
(statearr_37436_39334[(1)] = (5));

} else {
var statearr_37437_39335 = state_37416__$1;
(statearr_37437_39335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (15))){
var inst_37392 = (state_37416[(8)]);
var state_37416__$1 = state_37416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37416__$1,(18),to,inst_37392);
} else {
if((state_val_37417 === (21))){
var inst_37407 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
var statearr_37438_39337 = state_37416__$1;
(statearr_37438_39337[(2)] = inst_37407);

(statearr_37438_39337[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (13))){
var inst_37409 = (state_37416[(2)]);
var state_37416__$1 = (function (){var statearr_37443 = state_37416;
(statearr_37443[(9)] = inst_37409);

return statearr_37443;
})();
var statearr_37444_39339 = state_37416__$1;
(statearr_37444_39339[(2)] = null);

(statearr_37444_39339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (6))){
var inst_37365 = (state_37416[(7)]);
var state_37416__$1 = state_37416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37416__$1,(11),inst_37365);
} else {
if((state_val_37417 === (17))){
var inst_37402 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
if(cljs.core.truth_(inst_37402)){
var statearr_37453_39341 = state_37416__$1;
(statearr_37453_39341[(1)] = (19));

} else {
var statearr_37454_39342 = state_37416__$1;
(statearr_37454_39342[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (3))){
var inst_37414 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37416__$1,inst_37414);
} else {
if((state_val_37417 === (12))){
var inst_37387 = (state_37416[(10)]);
var state_37416__$1 = state_37416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37416__$1,(14),inst_37387);
} else {
if((state_val_37417 === (2))){
var state_37416__$1 = state_37416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37416__$1,(4),results);
} else {
if((state_val_37417 === (19))){
var state_37416__$1 = state_37416;
var statearr_37456_39344 = state_37416__$1;
(statearr_37456_39344[(2)] = null);

(statearr_37456_39344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (11))){
var inst_37387 = (state_37416[(2)]);
var state_37416__$1 = (function (){var statearr_37457 = state_37416;
(statearr_37457[(10)] = inst_37387);

return statearr_37457;
})();
var statearr_37458_39345 = state_37416__$1;
(statearr_37458_39345[(2)] = null);

(statearr_37458_39345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (9))){
var state_37416__$1 = state_37416;
var statearr_37459_39346 = state_37416__$1;
(statearr_37459_39346[(2)] = null);

(statearr_37459_39346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (5))){
var state_37416__$1 = state_37416;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37460_39347 = state_37416__$1;
(statearr_37460_39347[(1)] = (8));

} else {
var statearr_37461_39348 = state_37416__$1;
(statearr_37461_39348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (14))){
var inst_37395 = (state_37416[(11)]);
var inst_37392 = (state_37416[(8)]);
var inst_37392__$1 = (state_37416[(2)]);
var inst_37394 = (inst_37392__$1 == null);
var inst_37395__$1 = cljs.core.not(inst_37394);
var state_37416__$1 = (function (){var statearr_37466 = state_37416;
(statearr_37466[(11)] = inst_37395__$1);

(statearr_37466[(8)] = inst_37392__$1);

return statearr_37466;
})();
if(inst_37395__$1){
var statearr_37468_39351 = state_37416__$1;
(statearr_37468_39351[(1)] = (15));

} else {
var statearr_37469_39352 = state_37416__$1;
(statearr_37469_39352[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (16))){
var inst_37395 = (state_37416[(11)]);
var state_37416__$1 = state_37416;
var statearr_37470_39353 = state_37416__$1;
(statearr_37470_39353[(2)] = inst_37395);

(statearr_37470_39353[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (10))){
var inst_37380 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
var statearr_37471_39354 = state_37416__$1;
(statearr_37471_39354[(2)] = inst_37380);

(statearr_37471_39354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (18))){
var inst_37399 = (state_37416[(2)]);
var state_37416__$1 = state_37416;
var statearr_37472_39356 = state_37416__$1;
(statearr_37472_39356[(2)] = inst_37399);

(statearr_37472_39356[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37417 === (8))){
var inst_37377 = cljs.core.async.close_BANG_(to);
var state_37416__$1 = state_37416;
var statearr_37475_39357 = state_37416__$1;
(statearr_37475_39357[(2)] = inst_37377);

(statearr_37475_39357[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____0 = (function (){
var statearr_37476 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37476[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__);

(statearr_37476[(1)] = (1));

return statearr_37476;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____1 = (function (state_37416){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_37416);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e37479){var ex__36769__auto__ = e37479;
var statearr_37480_39360 = state_37416;
(statearr_37480_39360[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_37416[(4)]))){
var statearr_37481_39362 = state_37416;
(statearr_37481_39362[(1)] = cljs.core.first((state_37416[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39363 = state_37416;
state_37416 = G__39363;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__ = function(state_37416){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____1.call(this,state_37416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36766__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_37483 = f__36948__auto__();
(statearr_37483[(6)] = c__36947__auto__);

return statearr_37483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
}));

return c__36947__auto__;
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
var G__37489 = arguments.length;
switch (G__37489) {
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
var G__37498 = arguments.length;
switch (G__37498) {
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
var G__37502 = arguments.length;
switch (G__37502) {
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
var c__36947__auto___39370 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_37534){
var state_val_37535 = (state_37534[(1)]);
if((state_val_37535 === (7))){
var inst_37530 = (state_37534[(2)]);
var state_37534__$1 = state_37534;
var statearr_37536_39371 = state_37534__$1;
(statearr_37536_39371[(2)] = inst_37530);

(statearr_37536_39371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (1))){
var state_37534__$1 = state_37534;
var statearr_37537_39372 = state_37534__$1;
(statearr_37537_39372[(2)] = null);

(statearr_37537_39372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (4))){
var inst_37509 = (state_37534[(7)]);
var inst_37509__$1 = (state_37534[(2)]);
var inst_37510 = (inst_37509__$1 == null);
var state_37534__$1 = (function (){var statearr_37545 = state_37534;
(statearr_37545[(7)] = inst_37509__$1);

return statearr_37545;
})();
if(cljs.core.truth_(inst_37510)){
var statearr_37546_39373 = state_37534__$1;
(statearr_37546_39373[(1)] = (5));

} else {
var statearr_37547_39374 = state_37534__$1;
(statearr_37547_39374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (13))){
var state_37534__$1 = state_37534;
var statearr_37548_39375 = state_37534__$1;
(statearr_37548_39375[(2)] = null);

(statearr_37548_39375[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (6))){
var inst_37509 = (state_37534[(7)]);
var inst_37517 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37509) : p.call(null,inst_37509));
var state_37534__$1 = state_37534;
if(cljs.core.truth_(inst_37517)){
var statearr_37550_39376 = state_37534__$1;
(statearr_37550_39376[(1)] = (9));

} else {
var statearr_37551_39377 = state_37534__$1;
(statearr_37551_39377[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (3))){
var inst_37532 = (state_37534[(2)]);
var state_37534__$1 = state_37534;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37534__$1,inst_37532);
} else {
if((state_val_37535 === (12))){
var state_37534__$1 = state_37534;
var statearr_37553_39378 = state_37534__$1;
(statearr_37553_39378[(2)] = null);

(statearr_37553_39378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (2))){
var state_37534__$1 = state_37534;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37534__$1,(4),ch);
} else {
if((state_val_37535 === (11))){
var inst_37509 = (state_37534[(7)]);
var inst_37521 = (state_37534[(2)]);
var state_37534__$1 = state_37534;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37534__$1,(8),inst_37521,inst_37509);
} else {
if((state_val_37535 === (9))){
var state_37534__$1 = state_37534;
var statearr_37555_39383 = state_37534__$1;
(statearr_37555_39383[(2)] = tc);

(statearr_37555_39383[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (5))){
var inst_37514 = cljs.core.async.close_BANG_(tc);
var inst_37515 = cljs.core.async.close_BANG_(fc);
var state_37534__$1 = (function (){var statearr_37556 = state_37534;
(statearr_37556[(8)] = inst_37514);

return statearr_37556;
})();
var statearr_37557_39384 = state_37534__$1;
(statearr_37557_39384[(2)] = inst_37515);

(statearr_37557_39384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (14))){
var inst_37528 = (state_37534[(2)]);
var state_37534__$1 = state_37534;
var statearr_37558_39385 = state_37534__$1;
(statearr_37558_39385[(2)] = inst_37528);

(statearr_37558_39385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (10))){
var state_37534__$1 = state_37534;
var statearr_37559_39386 = state_37534__$1;
(statearr_37559_39386[(2)] = fc);

(statearr_37559_39386[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37535 === (8))){
var inst_37523 = (state_37534[(2)]);
var state_37534__$1 = state_37534;
if(cljs.core.truth_(inst_37523)){
var statearr_37561_39387 = state_37534__$1;
(statearr_37561_39387[(1)] = (12));

} else {
var statearr_37562_39388 = state_37534__$1;
(statearr_37562_39388[(1)] = (13));

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
var cljs$core$async$state_machine__36766__auto__ = null;
var cljs$core$async$state_machine__36766__auto____0 = (function (){
var statearr_37563 = [null,null,null,null,null,null,null,null,null];
(statearr_37563[(0)] = cljs$core$async$state_machine__36766__auto__);

(statearr_37563[(1)] = (1));

return statearr_37563;
});
var cljs$core$async$state_machine__36766__auto____1 = (function (state_37534){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_37534);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e37567){var ex__36769__auto__ = e37567;
var statearr_37568_39392 = state_37534;
(statearr_37568_39392[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_37534[(4)]))){
var statearr_37569_39393 = state_37534;
(statearr_37569_39393[(1)] = cljs.core.first((state_37534[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39394 = state_37534;
state_37534 = G__39394;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$state_machine__36766__auto__ = function(state_37534){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36766__auto____1.call(this,state_37534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36766__auto____0;
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36766__auto____1;
return cljs$core$async$state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_37582 = f__36948__auto__();
(statearr_37582[(6)] = c__36947__auto___39370);

return statearr_37582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
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
var c__36947__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_37612){
var state_val_37613 = (state_37612[(1)]);
if((state_val_37613 === (7))){
var inst_37608 = (state_37612[(2)]);
var state_37612__$1 = state_37612;
var statearr_37614_39395 = state_37612__$1;
(statearr_37614_39395[(2)] = inst_37608);

(statearr_37614_39395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37613 === (1))){
var inst_37591 = init;
var inst_37592 = inst_37591;
var state_37612__$1 = (function (){var statearr_37616 = state_37612;
(statearr_37616[(7)] = inst_37592);

return statearr_37616;
})();
var statearr_37617_39396 = state_37612__$1;
(statearr_37617_39396[(2)] = null);

(statearr_37617_39396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37613 === (4))){
var inst_37595 = (state_37612[(8)]);
var inst_37595__$1 = (state_37612[(2)]);
var inst_37596 = (inst_37595__$1 == null);
var state_37612__$1 = (function (){var statearr_37622 = state_37612;
(statearr_37622[(8)] = inst_37595__$1);

return statearr_37622;
})();
if(cljs.core.truth_(inst_37596)){
var statearr_37627_39397 = state_37612__$1;
(statearr_37627_39397[(1)] = (5));

} else {
var statearr_37632_39398 = state_37612__$1;
(statearr_37632_39398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37613 === (6))){
var inst_37599 = (state_37612[(9)]);
var inst_37592 = (state_37612[(7)]);
var inst_37595 = (state_37612[(8)]);
var inst_37599__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37592,inst_37595) : f.call(null,inst_37592,inst_37595));
var inst_37600 = cljs.core.reduced_QMARK_(inst_37599__$1);
var state_37612__$1 = (function (){var statearr_37641 = state_37612;
(statearr_37641[(9)] = inst_37599__$1);

return statearr_37641;
})();
if(inst_37600){
var statearr_37642_39400 = state_37612__$1;
(statearr_37642_39400[(1)] = (8));

} else {
var statearr_37643_39401 = state_37612__$1;
(statearr_37643_39401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37613 === (3))){
var inst_37610 = (state_37612[(2)]);
var state_37612__$1 = state_37612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37612__$1,inst_37610);
} else {
if((state_val_37613 === (2))){
var state_37612__$1 = state_37612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37612__$1,(4),ch);
} else {
if((state_val_37613 === (9))){
var inst_37599 = (state_37612[(9)]);
var inst_37592 = inst_37599;
var state_37612__$1 = (function (){var statearr_37645 = state_37612;
(statearr_37645[(7)] = inst_37592);

return statearr_37645;
})();
var statearr_37646_39403 = state_37612__$1;
(statearr_37646_39403[(2)] = null);

(statearr_37646_39403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37613 === (5))){
var inst_37592 = (state_37612[(7)]);
var state_37612__$1 = state_37612;
var statearr_37647_39404 = state_37612__$1;
(statearr_37647_39404[(2)] = inst_37592);

(statearr_37647_39404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37613 === (10))){
var inst_37606 = (state_37612[(2)]);
var state_37612__$1 = state_37612;
var statearr_37648_39408 = state_37612__$1;
(statearr_37648_39408[(2)] = inst_37606);

(statearr_37648_39408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37613 === (8))){
var inst_37599 = (state_37612[(9)]);
var inst_37602 = cljs.core.deref(inst_37599);
var state_37612__$1 = state_37612;
var statearr_37649_39413 = state_37612__$1;
(statearr_37649_39413[(2)] = inst_37602);

(statearr_37649_39413[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__36766__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36766__auto____0 = (function (){
var statearr_37650 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37650[(0)] = cljs$core$async$reduce_$_state_machine__36766__auto__);

(statearr_37650[(1)] = (1));

return statearr_37650;
});
var cljs$core$async$reduce_$_state_machine__36766__auto____1 = (function (state_37612){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_37612);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e37651){var ex__36769__auto__ = e37651;
var statearr_37652_39420 = state_37612;
(statearr_37652_39420[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_37612[(4)]))){
var statearr_37653_39421 = state_37612;
(statearr_37653_39421[(1)] = cljs.core.first((state_37612[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39422 = state_37612;
state_37612 = G__39422;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36766__auto__ = function(state_37612){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36766__auto____1.call(this,state_37612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36766__auto____0;
cljs$core$async$reduce_$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36766__auto____1;
return cljs$core$async$reduce_$_state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_37654 = f__36948__auto__();
(statearr_37654[(6)] = c__36947__auto__);

return statearr_37654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
}));

return c__36947__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__36947__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_37660){
var state_val_37661 = (state_37660[(1)]);
if((state_val_37661 === (1))){
var inst_37655 = cljs.core.async.reduce(f__$1,init,ch);
var state_37660__$1 = state_37660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37660__$1,(2),inst_37655);
} else {
if((state_val_37661 === (2))){
var inst_37657 = (state_37660[(2)]);
var inst_37658 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37657) : f__$1.call(null,inst_37657));
var state_37660__$1 = state_37660;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37660__$1,inst_37658);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36766__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36766__auto____0 = (function (){
var statearr_37665 = [null,null,null,null,null,null,null];
(statearr_37665[(0)] = cljs$core$async$transduce_$_state_machine__36766__auto__);

(statearr_37665[(1)] = (1));

return statearr_37665;
});
var cljs$core$async$transduce_$_state_machine__36766__auto____1 = (function (state_37660){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_37660);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e37666){var ex__36769__auto__ = e37666;
var statearr_37667_39434 = state_37660;
(statearr_37667_39434[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_37660[(4)]))){
var statearr_37668_39441 = state_37660;
(statearr_37668_39441[(1)] = cljs.core.first((state_37660[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39442 = state_37660;
state_37660 = G__39442;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36766__auto__ = function(state_37660){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36766__auto____1.call(this,state_37660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36766__auto____0;
cljs$core$async$transduce_$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36766__auto____1;
return cljs$core$async$transduce_$_state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_37670 = f__36948__auto__();
(statearr_37670[(6)] = c__36947__auto__);

return statearr_37670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
}));

return c__36947__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__37672 = arguments.length;
switch (G__37672) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__36947__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_37698){
var state_val_37699 = (state_37698[(1)]);
if((state_val_37699 === (7))){
var inst_37680 = (state_37698[(2)]);
var state_37698__$1 = state_37698;
var statearr_37700_39450 = state_37698__$1;
(statearr_37700_39450[(2)] = inst_37680);

(statearr_37700_39450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (1))){
var inst_37674 = cljs.core.seq(coll);
var inst_37675 = inst_37674;
var state_37698__$1 = (function (){var statearr_37701 = state_37698;
(statearr_37701[(7)] = inst_37675);

return statearr_37701;
})();
var statearr_37702_39454 = state_37698__$1;
(statearr_37702_39454[(2)] = null);

(statearr_37702_39454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (4))){
var inst_37675 = (state_37698[(7)]);
var inst_37678 = cljs.core.first(inst_37675);
var state_37698__$1 = state_37698;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37698__$1,(7),ch,inst_37678);
} else {
if((state_val_37699 === (13))){
var inst_37692 = (state_37698[(2)]);
var state_37698__$1 = state_37698;
var statearr_37703_39458 = state_37698__$1;
(statearr_37703_39458[(2)] = inst_37692);

(statearr_37703_39458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (6))){
var inst_37683 = (state_37698[(2)]);
var state_37698__$1 = state_37698;
if(cljs.core.truth_(inst_37683)){
var statearr_37704_39463 = state_37698__$1;
(statearr_37704_39463[(1)] = (8));

} else {
var statearr_37705_39464 = state_37698__$1;
(statearr_37705_39464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (3))){
var inst_37696 = (state_37698[(2)]);
var state_37698__$1 = state_37698;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37698__$1,inst_37696);
} else {
if((state_val_37699 === (12))){
var state_37698__$1 = state_37698;
var statearr_37706_39472 = state_37698__$1;
(statearr_37706_39472[(2)] = null);

(statearr_37706_39472[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (2))){
var inst_37675 = (state_37698[(7)]);
var state_37698__$1 = state_37698;
if(cljs.core.truth_(inst_37675)){
var statearr_37708_39476 = state_37698__$1;
(statearr_37708_39476[(1)] = (4));

} else {
var statearr_37709_39477 = state_37698__$1;
(statearr_37709_39477[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (11))){
var inst_37689 = cljs.core.async.close_BANG_(ch);
var state_37698__$1 = state_37698;
var statearr_37710_39481 = state_37698__$1;
(statearr_37710_39481[(2)] = inst_37689);

(statearr_37710_39481[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (9))){
var state_37698__$1 = state_37698;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37711_39482 = state_37698__$1;
(statearr_37711_39482[(1)] = (11));

} else {
var statearr_37712_39483 = state_37698__$1;
(statearr_37712_39483[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (5))){
var inst_37675 = (state_37698[(7)]);
var state_37698__$1 = state_37698;
var statearr_37713_39488 = state_37698__$1;
(statearr_37713_39488[(2)] = inst_37675);

(statearr_37713_39488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (10))){
var inst_37694 = (state_37698[(2)]);
var state_37698__$1 = state_37698;
var statearr_37714_39489 = state_37698__$1;
(statearr_37714_39489[(2)] = inst_37694);

(statearr_37714_39489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37699 === (8))){
var inst_37675 = (state_37698[(7)]);
var inst_37685 = cljs.core.next(inst_37675);
var inst_37675__$1 = inst_37685;
var state_37698__$1 = (function (){var statearr_37716 = state_37698;
(statearr_37716[(7)] = inst_37675__$1);

return statearr_37716;
})();
var statearr_37717_39490 = state_37698__$1;
(statearr_37717_39490[(2)] = null);

(statearr_37717_39490[(1)] = (2));


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
var cljs$core$async$state_machine__36766__auto__ = null;
var cljs$core$async$state_machine__36766__auto____0 = (function (){
var statearr_37718 = [null,null,null,null,null,null,null,null];
(statearr_37718[(0)] = cljs$core$async$state_machine__36766__auto__);

(statearr_37718[(1)] = (1));

return statearr_37718;
});
var cljs$core$async$state_machine__36766__auto____1 = (function (state_37698){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_37698);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e37719){var ex__36769__auto__ = e37719;
var statearr_37720_39494 = state_37698;
(statearr_37720_39494[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_37698[(4)]))){
var statearr_37721_39497 = state_37698;
(statearr_37721_39497[(1)] = cljs.core.first((state_37698[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39498 = state_37698;
state_37698 = G__39498;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$state_machine__36766__auto__ = function(state_37698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36766__auto____1.call(this,state_37698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36766__auto____0;
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36766__auto____1;
return cljs$core$async$state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_37722 = f__36948__auto__();
(statearr_37722[(6)] = c__36947__auto__);

return statearr_37722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
}));

return c__36947__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__37725 = arguments.length;
switch (G__37725) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_39503 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_39503(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_39507 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_39507(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_39508 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_39508(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_39510 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_39510(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37730 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37730 = (function (ch,cs,meta37731){
this.ch = ch;
this.cs = cs;
this.meta37731 = meta37731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37732,meta37731__$1){
var self__ = this;
var _37732__$1 = this;
return (new cljs.core.async.t_cljs$core$async37730(self__.ch,self__.cs,meta37731__$1));
}));

(cljs.core.async.t_cljs$core$async37730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37732){
var self__ = this;
var _37732__$1 = this;
return self__.meta37731;
}));

(cljs.core.async.t_cljs$core$async37730.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37730.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37730.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37730.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37730.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37730.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37730.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37731","meta37731",-540793998,null)], null);
}));

(cljs.core.async.t_cljs$core$async37730.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37730.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37730");

(cljs.core.async.t_cljs$core$async37730.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37730");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37730.
 */
cljs.core.async.__GT_t_cljs$core$async37730 = (function cljs$core$async$mult_$___GT_t_cljs$core$async37730(ch__$1,cs__$1,meta37731){
return (new cljs.core.async.t_cljs$core$async37730(ch__$1,cs__$1,meta37731));
});

}

return (new cljs.core.async.t_cljs$core$async37730(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__36947__auto___39511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_37870){
var state_val_37871 = (state_37870[(1)]);
if((state_val_37871 === (7))){
var inst_37865 = (state_37870[(2)]);
var state_37870__$1 = state_37870;
var statearr_37872_39512 = state_37870__$1;
(statearr_37872_39512[(2)] = inst_37865);

(statearr_37872_39512[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (20))){
var inst_37768 = (state_37870[(7)]);
var inst_37781 = cljs.core.first(inst_37768);
var inst_37782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37781,(0),null);
var inst_37783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37781,(1),null);
var state_37870__$1 = (function (){var statearr_37873 = state_37870;
(statearr_37873[(8)] = inst_37782);

return statearr_37873;
})();
if(cljs.core.truth_(inst_37783)){
var statearr_37874_39513 = state_37870__$1;
(statearr_37874_39513[(1)] = (22));

} else {
var statearr_37875_39514 = state_37870__$1;
(statearr_37875_39514[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (27))){
var inst_37819 = (state_37870[(9)]);
var inst_37812 = (state_37870[(10)]);
var inst_37737 = (state_37870[(11)]);
var inst_37814 = (state_37870[(12)]);
var inst_37819__$1 = cljs.core._nth(inst_37812,inst_37814);
var inst_37820 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37819__$1,inst_37737,done);
var state_37870__$1 = (function (){var statearr_37876 = state_37870;
(statearr_37876[(9)] = inst_37819__$1);

return statearr_37876;
})();
if(cljs.core.truth_(inst_37820)){
var statearr_37877_39515 = state_37870__$1;
(statearr_37877_39515[(1)] = (30));

} else {
var statearr_37879_39516 = state_37870__$1;
(statearr_37879_39516[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (1))){
var state_37870__$1 = state_37870;
var statearr_37880_39517 = state_37870__$1;
(statearr_37880_39517[(2)] = null);

(statearr_37880_39517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (24))){
var inst_37768 = (state_37870[(7)]);
var inst_37788 = (state_37870[(2)]);
var inst_37789 = cljs.core.next(inst_37768);
var inst_37746 = inst_37789;
var inst_37747 = null;
var inst_37748 = (0);
var inst_37749 = (0);
var state_37870__$1 = (function (){var statearr_37881 = state_37870;
(statearr_37881[(13)] = inst_37746);

(statearr_37881[(14)] = inst_37747);

(statearr_37881[(15)] = inst_37748);

(statearr_37881[(16)] = inst_37788);

(statearr_37881[(17)] = inst_37749);

return statearr_37881;
})();
var statearr_37882_39518 = state_37870__$1;
(statearr_37882_39518[(2)] = null);

(statearr_37882_39518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (39))){
var state_37870__$1 = state_37870;
var statearr_37886_39519 = state_37870__$1;
(statearr_37886_39519[(2)] = null);

(statearr_37886_39519[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (4))){
var inst_37737 = (state_37870[(11)]);
var inst_37737__$1 = (state_37870[(2)]);
var inst_37738 = (inst_37737__$1 == null);
var state_37870__$1 = (function (){var statearr_37887 = state_37870;
(statearr_37887[(11)] = inst_37737__$1);

return statearr_37887;
})();
if(cljs.core.truth_(inst_37738)){
var statearr_37889_39520 = state_37870__$1;
(statearr_37889_39520[(1)] = (5));

} else {
var statearr_37890_39521 = state_37870__$1;
(statearr_37890_39521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (15))){
var inst_37746 = (state_37870[(13)]);
var inst_37747 = (state_37870[(14)]);
var inst_37748 = (state_37870[(15)]);
var inst_37749 = (state_37870[(17)]);
var inst_37764 = (state_37870[(2)]);
var inst_37765 = (inst_37749 + (1));
var tmp37883 = inst_37746;
var tmp37884 = inst_37747;
var tmp37885 = inst_37748;
var inst_37746__$1 = tmp37883;
var inst_37747__$1 = tmp37884;
var inst_37748__$1 = tmp37885;
var inst_37749__$1 = inst_37765;
var state_37870__$1 = (function (){var statearr_37891 = state_37870;
(statearr_37891[(13)] = inst_37746__$1);

(statearr_37891[(18)] = inst_37764);

(statearr_37891[(14)] = inst_37747__$1);

(statearr_37891[(15)] = inst_37748__$1);

(statearr_37891[(17)] = inst_37749__$1);

return statearr_37891;
})();
var statearr_37892_39522 = state_37870__$1;
(statearr_37892_39522[(2)] = null);

(statearr_37892_39522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (21))){
var inst_37792 = (state_37870[(2)]);
var state_37870__$1 = state_37870;
var statearr_37896_39523 = state_37870__$1;
(statearr_37896_39523[(2)] = inst_37792);

(statearr_37896_39523[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (31))){
var inst_37819 = (state_37870[(9)]);
var inst_37823 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37819);
var state_37870__$1 = state_37870;
var statearr_37897_39524 = state_37870__$1;
(statearr_37897_39524[(2)] = inst_37823);

(statearr_37897_39524[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (32))){
var inst_37811 = (state_37870[(19)]);
var inst_37812 = (state_37870[(10)]);
var inst_37813 = (state_37870[(20)]);
var inst_37814 = (state_37870[(12)]);
var inst_37825 = (state_37870[(2)]);
var inst_37826 = (inst_37814 + (1));
var tmp37893 = inst_37811;
var tmp37894 = inst_37812;
var tmp37895 = inst_37813;
var inst_37811__$1 = tmp37893;
var inst_37812__$1 = tmp37894;
var inst_37813__$1 = tmp37895;
var inst_37814__$1 = inst_37826;
var state_37870__$1 = (function (){var statearr_37898 = state_37870;
(statearr_37898[(19)] = inst_37811__$1);

(statearr_37898[(10)] = inst_37812__$1);

(statearr_37898[(21)] = inst_37825);

(statearr_37898[(20)] = inst_37813__$1);

(statearr_37898[(12)] = inst_37814__$1);

return statearr_37898;
})();
var statearr_37899_39525 = state_37870__$1;
(statearr_37899_39525[(2)] = null);

(statearr_37899_39525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (40))){
var inst_37838 = (state_37870[(22)]);
var inst_37842 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37838);
var state_37870__$1 = state_37870;
var statearr_37901_39526 = state_37870__$1;
(statearr_37901_39526[(2)] = inst_37842);

(statearr_37901_39526[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (33))){
var inst_37829 = (state_37870[(23)]);
var inst_37831 = cljs.core.chunked_seq_QMARK_(inst_37829);
var state_37870__$1 = state_37870;
if(inst_37831){
var statearr_37902_39529 = state_37870__$1;
(statearr_37902_39529[(1)] = (36));

} else {
var statearr_37903_39530 = state_37870__$1;
(statearr_37903_39530[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (13))){
var inst_37758 = (state_37870[(24)]);
var inst_37761 = cljs.core.async.close_BANG_(inst_37758);
var state_37870__$1 = state_37870;
var statearr_37904_39531 = state_37870__$1;
(statearr_37904_39531[(2)] = inst_37761);

(statearr_37904_39531[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (22))){
var inst_37782 = (state_37870[(8)]);
var inst_37785 = cljs.core.async.close_BANG_(inst_37782);
var state_37870__$1 = state_37870;
var statearr_37906_39532 = state_37870__$1;
(statearr_37906_39532[(2)] = inst_37785);

(statearr_37906_39532[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (36))){
var inst_37829 = (state_37870[(23)]);
var inst_37833 = cljs.core.chunk_first(inst_37829);
var inst_37834 = cljs.core.chunk_rest(inst_37829);
var inst_37835 = cljs.core.count(inst_37833);
var inst_37811 = inst_37834;
var inst_37812 = inst_37833;
var inst_37813 = inst_37835;
var inst_37814 = (0);
var state_37870__$1 = (function (){var statearr_37907 = state_37870;
(statearr_37907[(19)] = inst_37811);

(statearr_37907[(10)] = inst_37812);

(statearr_37907[(20)] = inst_37813);

(statearr_37907[(12)] = inst_37814);

return statearr_37907;
})();
var statearr_37908_39533 = state_37870__$1;
(statearr_37908_39533[(2)] = null);

(statearr_37908_39533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (41))){
var inst_37829 = (state_37870[(23)]);
var inst_37844 = (state_37870[(2)]);
var inst_37845 = cljs.core.next(inst_37829);
var inst_37811 = inst_37845;
var inst_37812 = null;
var inst_37813 = (0);
var inst_37814 = (0);
var state_37870__$1 = (function (){var statearr_37909 = state_37870;
(statearr_37909[(25)] = inst_37844);

(statearr_37909[(19)] = inst_37811);

(statearr_37909[(10)] = inst_37812);

(statearr_37909[(20)] = inst_37813);

(statearr_37909[(12)] = inst_37814);

return statearr_37909;
})();
var statearr_37910_39535 = state_37870__$1;
(statearr_37910_39535[(2)] = null);

(statearr_37910_39535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (43))){
var state_37870__$1 = state_37870;
var statearr_37912_39537 = state_37870__$1;
(statearr_37912_39537[(2)] = null);

(statearr_37912_39537[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (29))){
var inst_37853 = (state_37870[(2)]);
var state_37870__$1 = state_37870;
var statearr_37913_39539 = state_37870__$1;
(statearr_37913_39539[(2)] = inst_37853);

(statearr_37913_39539[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (44))){
var inst_37862 = (state_37870[(2)]);
var state_37870__$1 = (function (){var statearr_37914 = state_37870;
(statearr_37914[(26)] = inst_37862);

return statearr_37914;
})();
var statearr_37915_39543 = state_37870__$1;
(statearr_37915_39543[(2)] = null);

(statearr_37915_39543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (6))){
var inst_37802 = (state_37870[(27)]);
var inst_37801 = cljs.core.deref(cs);
var inst_37802__$1 = cljs.core.keys(inst_37801);
var inst_37803 = cljs.core.count(inst_37802__$1);
var inst_37804 = cljs.core.reset_BANG_(dctr,inst_37803);
var inst_37809 = cljs.core.seq(inst_37802__$1);
var inst_37811 = inst_37809;
var inst_37812 = null;
var inst_37813 = (0);
var inst_37814 = (0);
var state_37870__$1 = (function (){var statearr_37916 = state_37870;
(statearr_37916[(27)] = inst_37802__$1);

(statearr_37916[(28)] = inst_37804);

(statearr_37916[(19)] = inst_37811);

(statearr_37916[(10)] = inst_37812);

(statearr_37916[(20)] = inst_37813);

(statearr_37916[(12)] = inst_37814);

return statearr_37916;
})();
var statearr_37917_39555 = state_37870__$1;
(statearr_37917_39555[(2)] = null);

(statearr_37917_39555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (28))){
var inst_37811 = (state_37870[(19)]);
var inst_37829 = (state_37870[(23)]);
var inst_37829__$1 = cljs.core.seq(inst_37811);
var state_37870__$1 = (function (){var statearr_37918 = state_37870;
(statearr_37918[(23)] = inst_37829__$1);

return statearr_37918;
})();
if(inst_37829__$1){
var statearr_37919_39556 = state_37870__$1;
(statearr_37919_39556[(1)] = (33));

} else {
var statearr_37920_39557 = state_37870__$1;
(statearr_37920_39557[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (25))){
var inst_37813 = (state_37870[(20)]);
var inst_37814 = (state_37870[(12)]);
var inst_37816 = (inst_37814 < inst_37813);
var inst_37817 = inst_37816;
var state_37870__$1 = state_37870;
if(cljs.core.truth_(inst_37817)){
var statearr_37922_39559 = state_37870__$1;
(statearr_37922_39559[(1)] = (27));

} else {
var statearr_37923_39560 = state_37870__$1;
(statearr_37923_39560[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (34))){
var state_37870__$1 = state_37870;
var statearr_37924_39562 = state_37870__$1;
(statearr_37924_39562[(2)] = null);

(statearr_37924_39562[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (17))){
var state_37870__$1 = state_37870;
var statearr_37925_39564 = state_37870__$1;
(statearr_37925_39564[(2)] = null);

(statearr_37925_39564[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (3))){
var inst_37867 = (state_37870[(2)]);
var state_37870__$1 = state_37870;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37870__$1,inst_37867);
} else {
if((state_val_37871 === (12))){
var inst_37797 = (state_37870[(2)]);
var state_37870__$1 = state_37870;
var statearr_37926_39565 = state_37870__$1;
(statearr_37926_39565[(2)] = inst_37797);

(statearr_37926_39565[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (2))){
var state_37870__$1 = state_37870;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37870__$1,(4),ch);
} else {
if((state_val_37871 === (23))){
var state_37870__$1 = state_37870;
var statearr_37928_39566 = state_37870__$1;
(statearr_37928_39566[(2)] = null);

(statearr_37928_39566[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (35))){
var inst_37851 = (state_37870[(2)]);
var state_37870__$1 = state_37870;
var statearr_37929_39568 = state_37870__$1;
(statearr_37929_39568[(2)] = inst_37851);

(statearr_37929_39568[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (19))){
var inst_37768 = (state_37870[(7)]);
var inst_37773 = cljs.core.chunk_first(inst_37768);
var inst_37774 = cljs.core.chunk_rest(inst_37768);
var inst_37775 = cljs.core.count(inst_37773);
var inst_37746 = inst_37774;
var inst_37747 = inst_37773;
var inst_37748 = inst_37775;
var inst_37749 = (0);
var state_37870__$1 = (function (){var statearr_37930 = state_37870;
(statearr_37930[(13)] = inst_37746);

(statearr_37930[(14)] = inst_37747);

(statearr_37930[(15)] = inst_37748);

(statearr_37930[(17)] = inst_37749);

return statearr_37930;
})();
var statearr_37931_39569 = state_37870__$1;
(statearr_37931_39569[(2)] = null);

(statearr_37931_39569[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (11))){
var inst_37746 = (state_37870[(13)]);
var inst_37768 = (state_37870[(7)]);
var inst_37768__$1 = cljs.core.seq(inst_37746);
var state_37870__$1 = (function (){var statearr_37932 = state_37870;
(statearr_37932[(7)] = inst_37768__$1);

return statearr_37932;
})();
if(inst_37768__$1){
var statearr_37933_39570 = state_37870__$1;
(statearr_37933_39570[(1)] = (16));

} else {
var statearr_37934_39571 = state_37870__$1;
(statearr_37934_39571[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (9))){
var inst_37799 = (state_37870[(2)]);
var state_37870__$1 = state_37870;
var statearr_37935_39572 = state_37870__$1;
(statearr_37935_39572[(2)] = inst_37799);

(statearr_37935_39572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (5))){
var inst_37744 = cljs.core.deref(cs);
var inst_37745 = cljs.core.seq(inst_37744);
var inst_37746 = inst_37745;
var inst_37747 = null;
var inst_37748 = (0);
var inst_37749 = (0);
var state_37870__$1 = (function (){var statearr_37936 = state_37870;
(statearr_37936[(13)] = inst_37746);

(statearr_37936[(14)] = inst_37747);

(statearr_37936[(15)] = inst_37748);

(statearr_37936[(17)] = inst_37749);

return statearr_37936;
})();
var statearr_37937_39577 = state_37870__$1;
(statearr_37937_39577[(2)] = null);

(statearr_37937_39577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (14))){
var state_37870__$1 = state_37870;
var statearr_37939_39578 = state_37870__$1;
(statearr_37939_39578[(2)] = null);

(statearr_37939_39578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (45))){
var inst_37859 = (state_37870[(2)]);
var state_37870__$1 = state_37870;
var statearr_37940_39579 = state_37870__$1;
(statearr_37940_39579[(2)] = inst_37859);

(statearr_37940_39579[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (26))){
var inst_37802 = (state_37870[(27)]);
var inst_37855 = (state_37870[(2)]);
var inst_37856 = cljs.core.seq(inst_37802);
var state_37870__$1 = (function (){var statearr_37941 = state_37870;
(statearr_37941[(29)] = inst_37855);

return statearr_37941;
})();
if(inst_37856){
var statearr_37942_39582 = state_37870__$1;
(statearr_37942_39582[(1)] = (42));

} else {
var statearr_37943_39583 = state_37870__$1;
(statearr_37943_39583[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (16))){
var inst_37768 = (state_37870[(7)]);
var inst_37771 = cljs.core.chunked_seq_QMARK_(inst_37768);
var state_37870__$1 = state_37870;
if(inst_37771){
var statearr_37944_39586 = state_37870__$1;
(statearr_37944_39586[(1)] = (19));

} else {
var statearr_37945_39587 = state_37870__$1;
(statearr_37945_39587[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (38))){
var inst_37848 = (state_37870[(2)]);
var state_37870__$1 = state_37870;
var statearr_37946_39588 = state_37870__$1;
(statearr_37946_39588[(2)] = inst_37848);

(statearr_37946_39588[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (30))){
var state_37870__$1 = state_37870;
var statearr_37947_39589 = state_37870__$1;
(statearr_37947_39589[(2)] = null);

(statearr_37947_39589[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (10))){
var inst_37747 = (state_37870[(14)]);
var inst_37749 = (state_37870[(17)]);
var inst_37757 = cljs.core._nth(inst_37747,inst_37749);
var inst_37758 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37757,(0),null);
var inst_37759 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37757,(1),null);
var state_37870__$1 = (function (){var statearr_37949 = state_37870;
(statearr_37949[(24)] = inst_37758);

return statearr_37949;
})();
if(cljs.core.truth_(inst_37759)){
var statearr_37950_39593 = state_37870__$1;
(statearr_37950_39593[(1)] = (13));

} else {
var statearr_37951_39594 = state_37870__$1;
(statearr_37951_39594[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (18))){
var inst_37795 = (state_37870[(2)]);
var state_37870__$1 = state_37870;
var statearr_37952_39599 = state_37870__$1;
(statearr_37952_39599[(2)] = inst_37795);

(statearr_37952_39599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (42))){
var state_37870__$1 = state_37870;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37870__$1,(45),dchan);
} else {
if((state_val_37871 === (37))){
var inst_37838 = (state_37870[(22)]);
var inst_37829 = (state_37870[(23)]);
var inst_37737 = (state_37870[(11)]);
var inst_37838__$1 = cljs.core.first(inst_37829);
var inst_37839 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37838__$1,inst_37737,done);
var state_37870__$1 = (function (){var statearr_37953 = state_37870;
(statearr_37953[(22)] = inst_37838__$1);

return statearr_37953;
})();
if(cljs.core.truth_(inst_37839)){
var statearr_37954_39606 = state_37870__$1;
(statearr_37954_39606[(1)] = (39));

} else {
var statearr_37955_39607 = state_37870__$1;
(statearr_37955_39607[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37871 === (8))){
var inst_37748 = (state_37870[(15)]);
var inst_37749 = (state_37870[(17)]);
var inst_37751 = (inst_37749 < inst_37748);
var inst_37752 = inst_37751;
var state_37870__$1 = state_37870;
if(cljs.core.truth_(inst_37752)){
var statearr_37957_39608 = state_37870__$1;
(statearr_37957_39608[(1)] = (10));

} else {
var statearr_37958_39609 = state_37870__$1;
(statearr_37958_39609[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__36766__auto__ = null;
var cljs$core$async$mult_$_state_machine__36766__auto____0 = (function (){
var statearr_37959 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37959[(0)] = cljs$core$async$mult_$_state_machine__36766__auto__);

(statearr_37959[(1)] = (1));

return statearr_37959;
});
var cljs$core$async$mult_$_state_machine__36766__auto____1 = (function (state_37870){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_37870);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e37960){var ex__36769__auto__ = e37960;
var statearr_37961_39610 = state_37870;
(statearr_37961_39610[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_37870[(4)]))){
var statearr_37962_39611 = state_37870;
(statearr_37962_39611[(1)] = cljs.core.first((state_37870[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39612 = state_37870;
state_37870 = G__39612;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36766__auto__ = function(state_37870){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36766__auto____1.call(this,state_37870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36766__auto____0;
cljs$core$async$mult_$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36766__auto____1;
return cljs$core$async$mult_$_state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_37964 = f__36948__auto__();
(statearr_37964[(6)] = c__36947__auto___39511);

return statearr_37964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
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
var G__37966 = arguments.length;
switch (G__37966) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_39615 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_39615(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_39617 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_39617(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_39619 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_39619(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_39626 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_39626(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_39627 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_39627(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___39628 = arguments.length;
var i__4819__auto___39629 = (0);
while(true){
if((i__4819__auto___39629 < len__4818__auto___39628)){
args__4824__auto__.push((arguments[i__4819__auto___39629]));

var G__39630 = (i__4819__auto___39629 + (1));
i__4819__auto___39629 = G__39630;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__37975){
var map__37976 = p__37975;
var map__37976__$1 = cljs.core.__destructure_map(map__37976);
var opts = map__37976__$1;
var statearr_37977_39640 = state;
(statearr_37977_39640[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_37978_39641 = state;
(statearr_37978_39641[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_37980_39642 = state;
(statearr_37980_39642[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq37971){
var G__37972 = cljs.core.first(seq37971);
var seq37971__$1 = cljs.core.next(seq37971);
var G__37973 = cljs.core.first(seq37971__$1);
var seq37971__$2 = cljs.core.next(seq37971__$1);
var G__37974 = cljs.core.first(seq37971__$2);
var seq37971__$3 = cljs.core.next(seq37971__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37972,G__37973,G__37974,seq37971__$3);
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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37983 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37983 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37984){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37984 = meta37984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37985,meta37984__$1){
var self__ = this;
var _37985__$1 = this;
return (new cljs.core.async.t_cljs$core$async37983(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37984__$1));
}));

(cljs.core.async.t_cljs$core$async37983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37985){
var self__ = this;
var _37985__$1 = this;
return self__.meta37984;
}));

(cljs.core.async.t_cljs$core$async37983.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37983.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async37983.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37983.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37983.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37983.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37983.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37983.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async37983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta37984","meta37984",-965141359,null)], null);
}));

(cljs.core.async.t_cljs$core$async37983.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37983");

(cljs.core.async.t_cljs$core$async37983.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async37983");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37983.
 */
cljs.core.async.__GT_t_cljs$core$async37983 = (function cljs$core$async$mix_$___GT_t_cljs$core$async37983(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37984){
return (new cljs.core.async.t_cljs$core$async37983(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37984));
});

}

return (new cljs.core.async.t_cljs$core$async37983(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36947__auto___39651 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_38056){
var state_val_38057 = (state_38056[(1)]);
if((state_val_38057 === (7))){
var inst_38015 = (state_38056[(2)]);
var state_38056__$1 = state_38056;
if(cljs.core.truth_(inst_38015)){
var statearr_38059_39657 = state_38056__$1;
(statearr_38059_39657[(1)] = (8));

} else {
var statearr_38060_39658 = state_38056__$1;
(statearr_38060_39658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (20))){
var inst_38008 = (state_38056[(7)]);
var state_38056__$1 = state_38056;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38056__$1,(23),out,inst_38008);
} else {
if((state_val_38057 === (1))){
var inst_37991 = calc_state();
var inst_37992 = cljs.core.__destructure_map(inst_37991);
var inst_37993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37992,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37992,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37995 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37992,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37996 = inst_37991;
var state_38056__$1 = (function (){var statearr_38061 = state_38056;
(statearr_38061[(8)] = inst_37995);

(statearr_38061[(9)] = inst_37996);

(statearr_38061[(10)] = inst_37993);

(statearr_38061[(11)] = inst_37994);

return statearr_38061;
})();
var statearr_38062_39659 = state_38056__$1;
(statearr_38062_39659[(2)] = null);

(statearr_38062_39659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (24))){
var inst_37999 = (state_38056[(12)]);
var inst_37996 = inst_37999;
var state_38056__$1 = (function (){var statearr_38063 = state_38056;
(statearr_38063[(9)] = inst_37996);

return statearr_38063;
})();
var statearr_38065_39662 = state_38056__$1;
(statearr_38065_39662[(2)] = null);

(statearr_38065_39662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (4))){
var inst_38010 = (state_38056[(13)]);
var inst_38008 = (state_38056[(7)]);
var inst_38007 = (state_38056[(2)]);
var inst_38008__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38007,(0),null);
var inst_38009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38007,(1),null);
var inst_38010__$1 = (inst_38008__$1 == null);
var state_38056__$1 = (function (){var statearr_38066 = state_38056;
(statearr_38066[(13)] = inst_38010__$1);

(statearr_38066[(7)] = inst_38008__$1);

(statearr_38066[(14)] = inst_38009);

return statearr_38066;
})();
if(cljs.core.truth_(inst_38010__$1)){
var statearr_38067_39663 = state_38056__$1;
(statearr_38067_39663[(1)] = (5));

} else {
var statearr_38068_39664 = state_38056__$1;
(statearr_38068_39664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (15))){
var inst_38030 = (state_38056[(15)]);
var inst_38000 = (state_38056[(16)]);
var inst_38030__$1 = cljs.core.empty_QMARK_(inst_38000);
var state_38056__$1 = (function (){var statearr_38069 = state_38056;
(statearr_38069[(15)] = inst_38030__$1);

return statearr_38069;
})();
if(inst_38030__$1){
var statearr_38070_39665 = state_38056__$1;
(statearr_38070_39665[(1)] = (17));

} else {
var statearr_38071_39666 = state_38056__$1;
(statearr_38071_39666[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (21))){
var inst_37999 = (state_38056[(12)]);
var inst_37996 = inst_37999;
var state_38056__$1 = (function (){var statearr_38072 = state_38056;
(statearr_38072[(9)] = inst_37996);

return statearr_38072;
})();
var statearr_38073_39667 = state_38056__$1;
(statearr_38073_39667[(2)] = null);

(statearr_38073_39667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (13))){
var inst_38022 = (state_38056[(2)]);
var inst_38023 = calc_state();
var inst_37996 = inst_38023;
var state_38056__$1 = (function (){var statearr_38075 = state_38056;
(statearr_38075[(9)] = inst_37996);

(statearr_38075[(17)] = inst_38022);

return statearr_38075;
})();
var statearr_38076_39669 = state_38056__$1;
(statearr_38076_39669[(2)] = null);

(statearr_38076_39669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (22))){
var inst_38050 = (state_38056[(2)]);
var state_38056__$1 = state_38056;
var statearr_38077_39670 = state_38056__$1;
(statearr_38077_39670[(2)] = inst_38050);

(statearr_38077_39670[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (6))){
var inst_38009 = (state_38056[(14)]);
var inst_38013 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38009,change);
var state_38056__$1 = state_38056;
var statearr_38078_39672 = state_38056__$1;
(statearr_38078_39672[(2)] = inst_38013);

(statearr_38078_39672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (25))){
var state_38056__$1 = state_38056;
var statearr_38079_39673 = state_38056__$1;
(statearr_38079_39673[(2)] = null);

(statearr_38079_39673[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (17))){
var inst_38001 = (state_38056[(18)]);
var inst_38009 = (state_38056[(14)]);
var inst_38032 = (inst_38001.cljs$core$IFn$_invoke$arity$1 ? inst_38001.cljs$core$IFn$_invoke$arity$1(inst_38009) : inst_38001.call(null,inst_38009));
var inst_38033 = cljs.core.not(inst_38032);
var state_38056__$1 = state_38056;
var statearr_38080_39674 = state_38056__$1;
(statearr_38080_39674[(2)] = inst_38033);

(statearr_38080_39674[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (3))){
var inst_38054 = (state_38056[(2)]);
var state_38056__$1 = state_38056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38056__$1,inst_38054);
} else {
if((state_val_38057 === (12))){
var state_38056__$1 = state_38056;
var statearr_38082_39675 = state_38056__$1;
(statearr_38082_39675[(2)] = null);

(statearr_38082_39675[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (2))){
var inst_37999 = (state_38056[(12)]);
var inst_37996 = (state_38056[(9)]);
var inst_37999__$1 = cljs.core.__destructure_map(inst_37996);
var inst_38000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37999__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37999__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_37999__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38056__$1 = (function (){var statearr_38083 = state_38056;
(statearr_38083[(12)] = inst_37999__$1);

(statearr_38083[(16)] = inst_38000);

(statearr_38083[(18)] = inst_38001);

return statearr_38083;
})();
return cljs.core.async.ioc_alts_BANG_(state_38056__$1,(4),inst_38002);
} else {
if((state_val_38057 === (23))){
var inst_38041 = (state_38056[(2)]);
var state_38056__$1 = state_38056;
if(cljs.core.truth_(inst_38041)){
var statearr_38084_39676 = state_38056__$1;
(statearr_38084_39676[(1)] = (24));

} else {
var statearr_38085_39677 = state_38056__$1;
(statearr_38085_39677[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (19))){
var inst_38036 = (state_38056[(2)]);
var state_38056__$1 = state_38056;
var statearr_38086_39678 = state_38056__$1;
(statearr_38086_39678[(2)] = inst_38036);

(statearr_38086_39678[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (11))){
var inst_38009 = (state_38056[(14)]);
var inst_38019 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38009);
var state_38056__$1 = state_38056;
var statearr_38088_39679 = state_38056__$1;
(statearr_38088_39679[(2)] = inst_38019);

(statearr_38088_39679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (9))){
var inst_38026 = (state_38056[(19)]);
var inst_38000 = (state_38056[(16)]);
var inst_38009 = (state_38056[(14)]);
var inst_38026__$1 = (inst_38000.cljs$core$IFn$_invoke$arity$1 ? inst_38000.cljs$core$IFn$_invoke$arity$1(inst_38009) : inst_38000.call(null,inst_38009));
var state_38056__$1 = (function (){var statearr_38089 = state_38056;
(statearr_38089[(19)] = inst_38026__$1);

return statearr_38089;
})();
if(cljs.core.truth_(inst_38026__$1)){
var statearr_38090_39687 = state_38056__$1;
(statearr_38090_39687[(1)] = (14));

} else {
var statearr_38091_39688 = state_38056__$1;
(statearr_38091_39688[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (5))){
var inst_38010 = (state_38056[(13)]);
var state_38056__$1 = state_38056;
var statearr_38092_39689 = state_38056__$1;
(statearr_38092_39689[(2)] = inst_38010);

(statearr_38092_39689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (14))){
var inst_38026 = (state_38056[(19)]);
var state_38056__$1 = state_38056;
var statearr_38093_39690 = state_38056__$1;
(statearr_38093_39690[(2)] = inst_38026);

(statearr_38093_39690[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (26))){
var inst_38046 = (state_38056[(2)]);
var state_38056__$1 = state_38056;
var statearr_38094_39691 = state_38056__$1;
(statearr_38094_39691[(2)] = inst_38046);

(statearr_38094_39691[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (16))){
var inst_38038 = (state_38056[(2)]);
var state_38056__$1 = state_38056;
if(cljs.core.truth_(inst_38038)){
var statearr_38095_39693 = state_38056__$1;
(statearr_38095_39693[(1)] = (20));

} else {
var statearr_38097_39694 = state_38056__$1;
(statearr_38097_39694[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (10))){
var inst_38052 = (state_38056[(2)]);
var state_38056__$1 = state_38056;
var statearr_38098_39695 = state_38056__$1;
(statearr_38098_39695[(2)] = inst_38052);

(statearr_38098_39695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (18))){
var inst_38030 = (state_38056[(15)]);
var state_38056__$1 = state_38056;
var statearr_38099_39696 = state_38056__$1;
(statearr_38099_39696[(2)] = inst_38030);

(statearr_38099_39696[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38057 === (8))){
var inst_38008 = (state_38056[(7)]);
var inst_38017 = (inst_38008 == null);
var state_38056__$1 = state_38056;
if(cljs.core.truth_(inst_38017)){
var statearr_38100_39697 = state_38056__$1;
(statearr_38100_39697[(1)] = (11));

} else {
var statearr_38101_39698 = state_38056__$1;
(statearr_38101_39698[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__36766__auto__ = null;
var cljs$core$async$mix_$_state_machine__36766__auto____0 = (function (){
var statearr_38102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38102[(0)] = cljs$core$async$mix_$_state_machine__36766__auto__);

(statearr_38102[(1)] = (1));

return statearr_38102;
});
var cljs$core$async$mix_$_state_machine__36766__auto____1 = (function (state_38056){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_38056);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e38103){var ex__36769__auto__ = e38103;
var statearr_38104_39699 = state_38056;
(statearr_38104_39699[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_38056[(4)]))){
var statearr_38106_39700 = state_38056;
(statearr_38106_39700[(1)] = cljs.core.first((state_38056[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39701 = state_38056;
state_38056 = G__39701;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36766__auto__ = function(state_38056){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36766__auto____1.call(this,state_38056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36766__auto____0;
cljs$core$async$mix_$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36766__auto____1;
return cljs$core$async$mix_$_state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_38107 = f__36948__auto__();
(statearr_38107[(6)] = c__36947__auto___39651);

return statearr_38107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_39716 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_39716(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_39717 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_39717(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_39722 = (function() {
var G__39723 = null;
var G__39723__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__39723__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__39723 = function(p,v){
switch(arguments.length){
case 1:
return G__39723__1.call(this,p);
case 2:
return G__39723__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39723.cljs$core$IFn$_invoke$arity$1 = G__39723__1;
G__39723.cljs$core$IFn$_invoke$arity$2 = G__39723__2;
return G__39723;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38115 = arguments.length;
switch (G__38115) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_39722(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_39722(p,v);
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
var G__38118 = arguments.length;
switch (G__38118) {
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
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__38116_SHARP_){
if(cljs.core.truth_((p1__38116_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38116_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__38116_SHARP_.call(null,topic)))){
return p1__38116_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38116_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38125 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38125 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38126){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38126 = meta38126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38127,meta38126__$1){
var self__ = this;
var _38127__$1 = this;
return (new cljs.core.async.t_cljs$core$async38125(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38126__$1));
}));

(cljs.core.async.t_cljs$core$async38125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38127){
var self__ = this;
var _38127__$1 = this;
return self__.meta38126;
}));

(cljs.core.async.t_cljs$core$async38125.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38125.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38125.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38125.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async38125.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async38125.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async38125.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async38125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38126","meta38126",1029273377,null)], null);
}));

(cljs.core.async.t_cljs$core$async38125.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38125");

(cljs.core.async.t_cljs$core$async38125.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async38125");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38125.
 */
cljs.core.async.__GT_t_cljs$core$async38125 = (function cljs$core$async$__GT_t_cljs$core$async38125(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38126){
return (new cljs.core.async.t_cljs$core$async38125(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38126));
});

}

return (new cljs.core.async.t_cljs$core$async38125(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36947__auto___39745 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_38235){
var state_val_38236 = (state_38235[(1)]);
if((state_val_38236 === (7))){
var inst_38230 = (state_38235[(2)]);
var state_38235__$1 = state_38235;
var statearr_38241_39746 = state_38235__$1;
(statearr_38241_39746[(2)] = inst_38230);

(statearr_38241_39746[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (20))){
var state_38235__$1 = state_38235;
var statearr_38244_39747 = state_38235__$1;
(statearr_38244_39747[(2)] = null);

(statearr_38244_39747[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (1))){
var state_38235__$1 = state_38235;
var statearr_38246_39748 = state_38235__$1;
(statearr_38246_39748[(2)] = null);

(statearr_38246_39748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (24))){
var inst_38210 = (state_38235[(7)]);
var inst_38222 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38210);
var state_38235__$1 = state_38235;
var statearr_38250_39749 = state_38235__$1;
(statearr_38250_39749[(2)] = inst_38222);

(statearr_38250_39749[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (4))){
var inst_38153 = (state_38235[(8)]);
var inst_38153__$1 = (state_38235[(2)]);
var inst_38155 = (inst_38153__$1 == null);
var state_38235__$1 = (function (){var statearr_38252 = state_38235;
(statearr_38252[(8)] = inst_38153__$1);

return statearr_38252;
})();
if(cljs.core.truth_(inst_38155)){
var statearr_38254_39751 = state_38235__$1;
(statearr_38254_39751[(1)] = (5));

} else {
var statearr_38255_39752 = state_38235__$1;
(statearr_38255_39752[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (15))){
var inst_38204 = (state_38235[(2)]);
var state_38235__$1 = state_38235;
var statearr_38259_39753 = state_38235__$1;
(statearr_38259_39753[(2)] = inst_38204);

(statearr_38259_39753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (21))){
var inst_38227 = (state_38235[(2)]);
var state_38235__$1 = (function (){var statearr_38261 = state_38235;
(statearr_38261[(9)] = inst_38227);

return statearr_38261;
})();
var statearr_38262_39757 = state_38235__$1;
(statearr_38262_39757[(2)] = null);

(statearr_38262_39757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (13))){
var inst_38182 = (state_38235[(10)]);
var inst_38184 = cljs.core.chunked_seq_QMARK_(inst_38182);
var state_38235__$1 = state_38235;
if(inst_38184){
var statearr_38266_39759 = state_38235__$1;
(statearr_38266_39759[(1)] = (16));

} else {
var statearr_38267_39760 = state_38235__$1;
(statearr_38267_39760[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (22))){
var inst_38218 = (state_38235[(2)]);
var state_38235__$1 = state_38235;
if(cljs.core.truth_(inst_38218)){
var statearr_38269_39761 = state_38235__$1;
(statearr_38269_39761[(1)] = (23));

} else {
var statearr_38272_39762 = state_38235__$1;
(statearr_38272_39762[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (6))){
var inst_38153 = (state_38235[(8)]);
var inst_38210 = (state_38235[(7)]);
var inst_38212 = (state_38235[(11)]);
var inst_38210__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_38153) : topic_fn.call(null,inst_38153));
var inst_38211 = cljs.core.deref(mults);
var inst_38212__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38211,inst_38210__$1);
var state_38235__$1 = (function (){var statearr_38278 = state_38235;
(statearr_38278[(7)] = inst_38210__$1);

(statearr_38278[(11)] = inst_38212__$1);

return statearr_38278;
})();
if(cljs.core.truth_(inst_38212__$1)){
var statearr_38279_39764 = state_38235__$1;
(statearr_38279_39764[(1)] = (19));

} else {
var statearr_38281_39765 = state_38235__$1;
(statearr_38281_39765[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (25))){
var inst_38224 = (state_38235[(2)]);
var state_38235__$1 = state_38235;
var statearr_38284_39767 = state_38235__$1;
(statearr_38284_39767[(2)] = inst_38224);

(statearr_38284_39767[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (17))){
var inst_38182 = (state_38235[(10)]);
var inst_38194 = cljs.core.first(inst_38182);
var inst_38195 = cljs.core.async.muxch_STAR_(inst_38194);
var inst_38196 = cljs.core.async.close_BANG_(inst_38195);
var inst_38197 = cljs.core.next(inst_38182);
var inst_38164 = inst_38197;
var inst_38165 = null;
var inst_38166 = (0);
var inst_38167 = (0);
var state_38235__$1 = (function (){var statearr_38287 = state_38235;
(statearr_38287[(12)] = inst_38196);

(statearr_38287[(13)] = inst_38167);

(statearr_38287[(14)] = inst_38166);

(statearr_38287[(15)] = inst_38164);

(statearr_38287[(16)] = inst_38165);

return statearr_38287;
})();
var statearr_38288_39768 = state_38235__$1;
(statearr_38288_39768[(2)] = null);

(statearr_38288_39768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (3))){
var inst_38232 = (state_38235[(2)]);
var state_38235__$1 = state_38235;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38235__$1,inst_38232);
} else {
if((state_val_38236 === (12))){
var inst_38206 = (state_38235[(2)]);
var state_38235__$1 = state_38235;
var statearr_38292_39769 = state_38235__$1;
(statearr_38292_39769[(2)] = inst_38206);

(statearr_38292_39769[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (2))){
var state_38235__$1 = state_38235;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38235__$1,(4),ch);
} else {
if((state_val_38236 === (23))){
var state_38235__$1 = state_38235;
var statearr_38294_39770 = state_38235__$1;
(statearr_38294_39770[(2)] = null);

(statearr_38294_39770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (19))){
var inst_38153 = (state_38235[(8)]);
var inst_38212 = (state_38235[(11)]);
var inst_38216 = cljs.core.async.muxch_STAR_(inst_38212);
var state_38235__$1 = state_38235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38235__$1,(22),inst_38216,inst_38153);
} else {
if((state_val_38236 === (11))){
var inst_38182 = (state_38235[(10)]);
var inst_38164 = (state_38235[(15)]);
var inst_38182__$1 = cljs.core.seq(inst_38164);
var state_38235__$1 = (function (){var statearr_38299 = state_38235;
(statearr_38299[(10)] = inst_38182__$1);

return statearr_38299;
})();
if(inst_38182__$1){
var statearr_38300_39772 = state_38235__$1;
(statearr_38300_39772[(1)] = (13));

} else {
var statearr_38301_39773 = state_38235__$1;
(statearr_38301_39773[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (9))){
var inst_38208 = (state_38235[(2)]);
var state_38235__$1 = state_38235;
var statearr_38305_39774 = state_38235__$1;
(statearr_38305_39774[(2)] = inst_38208);

(statearr_38305_39774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (5))){
var inst_38161 = cljs.core.deref(mults);
var inst_38162 = cljs.core.vals(inst_38161);
var inst_38163 = cljs.core.seq(inst_38162);
var inst_38164 = inst_38163;
var inst_38165 = null;
var inst_38166 = (0);
var inst_38167 = (0);
var state_38235__$1 = (function (){var statearr_38307 = state_38235;
(statearr_38307[(13)] = inst_38167);

(statearr_38307[(14)] = inst_38166);

(statearr_38307[(15)] = inst_38164);

(statearr_38307[(16)] = inst_38165);

return statearr_38307;
})();
var statearr_38311_39782 = state_38235__$1;
(statearr_38311_39782[(2)] = null);

(statearr_38311_39782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (14))){
var state_38235__$1 = state_38235;
var statearr_38316_39783 = state_38235__$1;
(statearr_38316_39783[(2)] = null);

(statearr_38316_39783[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (16))){
var inst_38182 = (state_38235[(10)]);
var inst_38188 = cljs.core.chunk_first(inst_38182);
var inst_38190 = cljs.core.chunk_rest(inst_38182);
var inst_38191 = cljs.core.count(inst_38188);
var inst_38164 = inst_38190;
var inst_38165 = inst_38188;
var inst_38166 = inst_38191;
var inst_38167 = (0);
var state_38235__$1 = (function (){var statearr_38320 = state_38235;
(statearr_38320[(13)] = inst_38167);

(statearr_38320[(14)] = inst_38166);

(statearr_38320[(15)] = inst_38164);

(statearr_38320[(16)] = inst_38165);

return statearr_38320;
})();
var statearr_38321_39784 = state_38235__$1;
(statearr_38321_39784[(2)] = null);

(statearr_38321_39784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (10))){
var inst_38167 = (state_38235[(13)]);
var inst_38166 = (state_38235[(14)]);
var inst_38164 = (state_38235[(15)]);
var inst_38165 = (state_38235[(16)]);
var inst_38175 = cljs.core._nth(inst_38165,inst_38167);
var inst_38176 = cljs.core.async.muxch_STAR_(inst_38175);
var inst_38177 = cljs.core.async.close_BANG_(inst_38176);
var inst_38178 = (inst_38167 + (1));
var tmp38312 = inst_38166;
var tmp38313 = inst_38164;
var tmp38314 = inst_38165;
var inst_38164__$1 = tmp38313;
var inst_38165__$1 = tmp38314;
var inst_38166__$1 = tmp38312;
var inst_38167__$1 = inst_38178;
var state_38235__$1 = (function (){var statearr_38327 = state_38235;
(statearr_38327[(13)] = inst_38167__$1);

(statearr_38327[(17)] = inst_38177);

(statearr_38327[(14)] = inst_38166__$1);

(statearr_38327[(15)] = inst_38164__$1);

(statearr_38327[(16)] = inst_38165__$1);

return statearr_38327;
})();
var statearr_38329_39786 = state_38235__$1;
(statearr_38329_39786[(2)] = null);

(statearr_38329_39786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (18))){
var inst_38201 = (state_38235[(2)]);
var state_38235__$1 = state_38235;
var statearr_38333_39787 = state_38235__$1;
(statearr_38333_39787[(2)] = inst_38201);

(statearr_38333_39787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38236 === (8))){
var inst_38167 = (state_38235[(13)]);
var inst_38166 = (state_38235[(14)]);
var inst_38171 = (inst_38167 < inst_38166);
var inst_38172 = inst_38171;
var state_38235__$1 = state_38235;
if(cljs.core.truth_(inst_38172)){
var statearr_38335_39788 = state_38235__$1;
(statearr_38335_39788[(1)] = (10));

} else {
var statearr_38336_39789 = state_38235__$1;
(statearr_38336_39789[(1)] = (11));

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
var cljs$core$async$state_machine__36766__auto__ = null;
var cljs$core$async$state_machine__36766__auto____0 = (function (){
var statearr_38341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38341[(0)] = cljs$core$async$state_machine__36766__auto__);

(statearr_38341[(1)] = (1));

return statearr_38341;
});
var cljs$core$async$state_machine__36766__auto____1 = (function (state_38235){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_38235);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e38345){var ex__36769__auto__ = e38345;
var statearr_38347_39790 = state_38235;
(statearr_38347_39790[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_38235[(4)]))){
var statearr_38349_39791 = state_38235;
(statearr_38349_39791[(1)] = cljs.core.first((state_38235[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39794 = state_38235;
state_38235 = G__39794;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$state_machine__36766__auto__ = function(state_38235){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36766__auto____1.call(this,state_38235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36766__auto____0;
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36766__auto____1;
return cljs$core$async$state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_38354 = f__36948__auto__();
(statearr_38354[(6)] = c__36947__auto___39745);

return statearr_38354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
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
var G__38360 = arguments.length;
switch (G__38360) {
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
var G__38375 = arguments.length;
switch (G__38375) {
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
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
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
var G__38388 = arguments.length;
switch (G__38388) {
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
var c__36947__auto___39807 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_38469){
var state_val_38471 = (state_38469[(1)]);
if((state_val_38471 === (7))){
var state_38469__$1 = state_38469;
var statearr_38475_39808 = state_38469__$1;
(statearr_38475_39808[(2)] = null);

(statearr_38475_39808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (1))){
var state_38469__$1 = state_38469;
var statearr_38477_39809 = state_38469__$1;
(statearr_38477_39809[(2)] = null);

(statearr_38477_39809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (4))){
var inst_38410 = (state_38469[(7)]);
var inst_38409 = (state_38469[(8)]);
var inst_38412 = (inst_38410 < inst_38409);
var state_38469__$1 = state_38469;
if(cljs.core.truth_(inst_38412)){
var statearr_38478_39810 = state_38469__$1;
(statearr_38478_39810[(1)] = (6));

} else {
var statearr_38479_39811 = state_38469__$1;
(statearr_38479_39811[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (15))){
var inst_38452 = (state_38469[(9)]);
var inst_38457 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38452);
var state_38469__$1 = state_38469;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38469__$1,(17),out,inst_38457);
} else {
if((state_val_38471 === (13))){
var inst_38452 = (state_38469[(9)]);
var inst_38452__$1 = (state_38469[(2)]);
var inst_38453 = cljs.core.some(cljs.core.nil_QMARK_,inst_38452__$1);
var state_38469__$1 = (function (){var statearr_38480 = state_38469;
(statearr_38480[(9)] = inst_38452__$1);

return statearr_38480;
})();
if(cljs.core.truth_(inst_38453)){
var statearr_38481_39812 = state_38469__$1;
(statearr_38481_39812[(1)] = (14));

} else {
var statearr_38482_39813 = state_38469__$1;
(statearr_38482_39813[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (6))){
var state_38469__$1 = state_38469;
var statearr_38483_39814 = state_38469__$1;
(statearr_38483_39814[(2)] = null);

(statearr_38483_39814[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (17))){
var inst_38459 = (state_38469[(2)]);
var state_38469__$1 = (function (){var statearr_38485 = state_38469;
(statearr_38485[(10)] = inst_38459);

return statearr_38485;
})();
var statearr_38486_39815 = state_38469__$1;
(statearr_38486_39815[(2)] = null);

(statearr_38486_39815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (3))){
var inst_38464 = (state_38469[(2)]);
var state_38469__$1 = state_38469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38469__$1,inst_38464);
} else {
if((state_val_38471 === (12))){
var _ = (function (){var statearr_38487 = state_38469;
(statearr_38487[(4)] = cljs.core.rest((state_38469[(4)])));

return statearr_38487;
})();
var state_38469__$1 = state_38469;
var ex38484 = (state_38469__$1[(2)]);
var statearr_38488_39816 = state_38469__$1;
(statearr_38488_39816[(5)] = ex38484);


if((ex38484 instanceof Object)){
var statearr_38489_39817 = state_38469__$1;
(statearr_38489_39817[(1)] = (11));

(statearr_38489_39817[(5)] = null);

} else {
throw ex38484;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (2))){
var inst_38408 = cljs.core.reset_BANG_(dctr,cnt);
var inst_38409 = cnt;
var inst_38410 = (0);
var state_38469__$1 = (function (){var statearr_38490 = state_38469;
(statearr_38490[(11)] = inst_38408);

(statearr_38490[(7)] = inst_38410);

(statearr_38490[(8)] = inst_38409);

return statearr_38490;
})();
var statearr_38491_39818 = state_38469__$1;
(statearr_38491_39818[(2)] = null);

(statearr_38491_39818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (11))){
var inst_38427 = (state_38469[(2)]);
var inst_38429 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38469__$1 = (function (){var statearr_38492 = state_38469;
(statearr_38492[(12)] = inst_38427);

return statearr_38492;
})();
var statearr_38493_39819 = state_38469__$1;
(statearr_38493_39819[(2)] = inst_38429);

(statearr_38493_39819[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (9))){
var inst_38410 = (state_38469[(7)]);
var _ = (function (){var statearr_38494 = state_38469;
(statearr_38494[(4)] = cljs.core.cons((12),(state_38469[(4)])));

return statearr_38494;
})();
var inst_38437 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38410) : chs__$1.call(null,inst_38410));
var inst_38438 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38410) : done.call(null,inst_38410));
var inst_38439 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38437,inst_38438);
var ___$1 = (function (){var statearr_38495 = state_38469;
(statearr_38495[(4)] = cljs.core.rest((state_38469[(4)])));

return statearr_38495;
})();
var state_38469__$1 = state_38469;
var statearr_38496_39820 = state_38469__$1;
(statearr_38496_39820[(2)] = inst_38439);

(statearr_38496_39820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (5))){
var inst_38450 = (state_38469[(2)]);
var state_38469__$1 = (function (){var statearr_38497 = state_38469;
(statearr_38497[(13)] = inst_38450);

return statearr_38497;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38469__$1,(13),dchan);
} else {
if((state_val_38471 === (14))){
var inst_38455 = cljs.core.async.close_BANG_(out);
var state_38469__$1 = state_38469;
var statearr_38500_39821 = state_38469__$1;
(statearr_38500_39821[(2)] = inst_38455);

(statearr_38500_39821[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (16))){
var inst_38462 = (state_38469[(2)]);
var state_38469__$1 = state_38469;
var statearr_38501_39826 = state_38469__$1;
(statearr_38501_39826[(2)] = inst_38462);

(statearr_38501_39826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (10))){
var inst_38410 = (state_38469[(7)]);
var inst_38442 = (state_38469[(2)]);
var inst_38443 = (inst_38410 + (1));
var inst_38410__$1 = inst_38443;
var state_38469__$1 = (function (){var statearr_38502 = state_38469;
(statearr_38502[(7)] = inst_38410__$1);

(statearr_38502[(14)] = inst_38442);

return statearr_38502;
})();
var statearr_38503_39834 = state_38469__$1;
(statearr_38503_39834[(2)] = null);

(statearr_38503_39834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38471 === (8))){
var inst_38448 = (state_38469[(2)]);
var state_38469__$1 = state_38469;
var statearr_38508_39835 = state_38469__$1;
(statearr_38508_39835[(2)] = inst_38448);

(statearr_38508_39835[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__36766__auto__ = null;
var cljs$core$async$state_machine__36766__auto____0 = (function (){
var statearr_38514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38514[(0)] = cljs$core$async$state_machine__36766__auto__);

(statearr_38514[(1)] = (1));

return statearr_38514;
});
var cljs$core$async$state_machine__36766__auto____1 = (function (state_38469){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_38469);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e38515){var ex__36769__auto__ = e38515;
var statearr_38516_39836 = state_38469;
(statearr_38516_39836[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_38469[(4)]))){
var statearr_38517_39837 = state_38469;
(statearr_38517_39837[(1)] = cljs.core.first((state_38469[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39841 = state_38469;
state_38469 = G__39841;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$state_machine__36766__auto__ = function(state_38469){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36766__auto____1.call(this,state_38469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36766__auto____0;
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36766__auto____1;
return cljs$core$async$state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_38518 = f__36948__auto__();
(statearr_38518[(6)] = c__36947__auto___39807);

return statearr_38518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
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
var G__38529 = arguments.length;
switch (G__38529) {
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
var c__36947__auto___39847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_38573){
var state_val_38574 = (state_38573[(1)]);
if((state_val_38574 === (7))){
var inst_38548 = (state_38573[(7)]);
var inst_38549 = (state_38573[(8)]);
var inst_38548__$1 = (state_38573[(2)]);
var inst_38549__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38548__$1,(0),null);
var inst_38550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38548__$1,(1),null);
var inst_38551 = (inst_38549__$1 == null);
var state_38573__$1 = (function (){var statearr_38580 = state_38573;
(statearr_38580[(7)] = inst_38548__$1);

(statearr_38580[(9)] = inst_38550);

(statearr_38580[(8)] = inst_38549__$1);

return statearr_38580;
})();
if(cljs.core.truth_(inst_38551)){
var statearr_38584_39848 = state_38573__$1;
(statearr_38584_39848[(1)] = (8));

} else {
var statearr_38586_39849 = state_38573__$1;
(statearr_38586_39849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (1))){
var inst_38534 = cljs.core.vec(chs);
var inst_38538 = inst_38534;
var state_38573__$1 = (function (){var statearr_38587 = state_38573;
(statearr_38587[(10)] = inst_38538);

return statearr_38587;
})();
var statearr_38588_39859 = state_38573__$1;
(statearr_38588_39859[(2)] = null);

(statearr_38588_39859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (4))){
var inst_38538 = (state_38573[(10)]);
var state_38573__$1 = state_38573;
return cljs.core.async.ioc_alts_BANG_(state_38573__$1,(7),inst_38538);
} else {
if((state_val_38574 === (6))){
var inst_38569 = (state_38573[(2)]);
var state_38573__$1 = state_38573;
var statearr_38592_39861 = state_38573__$1;
(statearr_38592_39861[(2)] = inst_38569);

(statearr_38592_39861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (3))){
var inst_38571 = (state_38573[(2)]);
var state_38573__$1 = state_38573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38573__$1,inst_38571);
} else {
if((state_val_38574 === (2))){
var inst_38538 = (state_38573[(10)]);
var inst_38540 = cljs.core.count(inst_38538);
var inst_38542 = (inst_38540 > (0));
var state_38573__$1 = state_38573;
if(cljs.core.truth_(inst_38542)){
var statearr_38595_39868 = state_38573__$1;
(statearr_38595_39868[(1)] = (4));

} else {
var statearr_38596_39869 = state_38573__$1;
(statearr_38596_39869[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (11))){
var inst_38538 = (state_38573[(10)]);
var inst_38562 = (state_38573[(2)]);
var tmp38594 = inst_38538;
var inst_38538__$1 = tmp38594;
var state_38573__$1 = (function (){var statearr_38600 = state_38573;
(statearr_38600[(11)] = inst_38562);

(statearr_38600[(10)] = inst_38538__$1);

return statearr_38600;
})();
var statearr_38601_39870 = state_38573__$1;
(statearr_38601_39870[(2)] = null);

(statearr_38601_39870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (9))){
var inst_38549 = (state_38573[(8)]);
var state_38573__$1 = state_38573;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38573__$1,(11),out,inst_38549);
} else {
if((state_val_38574 === (5))){
var inst_38567 = cljs.core.async.close_BANG_(out);
var state_38573__$1 = state_38573;
var statearr_38607_39875 = state_38573__$1;
(statearr_38607_39875[(2)] = inst_38567);

(statearr_38607_39875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (10))){
var inst_38565 = (state_38573[(2)]);
var state_38573__$1 = state_38573;
var statearr_38609_39876 = state_38573__$1;
(statearr_38609_39876[(2)] = inst_38565);

(statearr_38609_39876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38574 === (8))){
var inst_38548 = (state_38573[(7)]);
var inst_38538 = (state_38573[(10)]);
var inst_38550 = (state_38573[(9)]);
var inst_38549 = (state_38573[(8)]);
var inst_38556 = (function (){var cs = inst_38538;
var vec__38544 = inst_38548;
var v = inst_38549;
var c = inst_38550;
return (function (p1__38523_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38523_SHARP_);
});
})();
var inst_38558 = cljs.core.filterv(inst_38556,inst_38538);
var inst_38538__$1 = inst_38558;
var state_38573__$1 = (function (){var statearr_38610 = state_38573;
(statearr_38610[(10)] = inst_38538__$1);

return statearr_38610;
})();
var statearr_38611_39878 = state_38573__$1;
(statearr_38611_39878[(2)] = null);

(statearr_38611_39878[(1)] = (2));


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
var cljs$core$async$state_machine__36766__auto__ = null;
var cljs$core$async$state_machine__36766__auto____0 = (function (){
var statearr_38619 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38619[(0)] = cljs$core$async$state_machine__36766__auto__);

(statearr_38619[(1)] = (1));

return statearr_38619;
});
var cljs$core$async$state_machine__36766__auto____1 = (function (state_38573){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_38573);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e38621){var ex__36769__auto__ = e38621;
var statearr_38622_39880 = state_38573;
(statearr_38622_39880[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_38573[(4)]))){
var statearr_38623_39881 = state_38573;
(statearr_38623_39881[(1)] = cljs.core.first((state_38573[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39888 = state_38573;
state_38573 = G__39888;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$state_machine__36766__auto__ = function(state_38573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36766__auto____1.call(this,state_38573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36766__auto____0;
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36766__auto____1;
return cljs$core$async$state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_38628 = f__36948__auto__();
(statearr_38628[(6)] = c__36947__auto___39847);

return statearr_38628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
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
var G__38634 = arguments.length;
switch (G__38634) {
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
var c__36947__auto___39890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_38663){
var state_val_38664 = (state_38663[(1)]);
if((state_val_38664 === (7))){
var inst_38645 = (state_38663[(7)]);
var inst_38645__$1 = (state_38663[(2)]);
var inst_38646 = (inst_38645__$1 == null);
var inst_38647 = cljs.core.not(inst_38646);
var state_38663__$1 = (function (){var statearr_38672 = state_38663;
(statearr_38672[(7)] = inst_38645__$1);

return statearr_38672;
})();
if(inst_38647){
var statearr_38673_39897 = state_38663__$1;
(statearr_38673_39897[(1)] = (8));

} else {
var statearr_38675_39898 = state_38663__$1;
(statearr_38675_39898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38664 === (1))){
var inst_38639 = (0);
var state_38663__$1 = (function (){var statearr_38676 = state_38663;
(statearr_38676[(8)] = inst_38639);

return statearr_38676;
})();
var statearr_38677_39899 = state_38663__$1;
(statearr_38677_39899[(2)] = null);

(statearr_38677_39899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38664 === (4))){
var state_38663__$1 = state_38663;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38663__$1,(7),ch);
} else {
if((state_val_38664 === (6))){
var inst_38658 = (state_38663[(2)]);
var state_38663__$1 = state_38663;
var statearr_38681_39900 = state_38663__$1;
(statearr_38681_39900[(2)] = inst_38658);

(statearr_38681_39900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38664 === (3))){
var inst_38660 = (state_38663[(2)]);
var inst_38661 = cljs.core.async.close_BANG_(out);
var state_38663__$1 = (function (){var statearr_38683 = state_38663;
(statearr_38683[(9)] = inst_38660);

return statearr_38683;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38663__$1,inst_38661);
} else {
if((state_val_38664 === (2))){
var inst_38639 = (state_38663[(8)]);
var inst_38642 = (inst_38639 < n);
var state_38663__$1 = state_38663;
if(cljs.core.truth_(inst_38642)){
var statearr_38684_39901 = state_38663__$1;
(statearr_38684_39901[(1)] = (4));

} else {
var statearr_38685_39902 = state_38663__$1;
(statearr_38685_39902[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38664 === (11))){
var inst_38639 = (state_38663[(8)]);
var inst_38650 = (state_38663[(2)]);
var inst_38651 = (inst_38639 + (1));
var inst_38639__$1 = inst_38651;
var state_38663__$1 = (function (){var statearr_38690 = state_38663;
(statearr_38690[(10)] = inst_38650);

(statearr_38690[(8)] = inst_38639__$1);

return statearr_38690;
})();
var statearr_38691_39904 = state_38663__$1;
(statearr_38691_39904[(2)] = null);

(statearr_38691_39904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38664 === (9))){
var state_38663__$1 = state_38663;
var statearr_38692_39905 = state_38663__$1;
(statearr_38692_39905[(2)] = null);

(statearr_38692_39905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38664 === (5))){
var state_38663__$1 = state_38663;
var statearr_38693_39906 = state_38663__$1;
(statearr_38693_39906[(2)] = null);

(statearr_38693_39906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38664 === (10))){
var inst_38655 = (state_38663[(2)]);
var state_38663__$1 = state_38663;
var statearr_38697_39907 = state_38663__$1;
(statearr_38697_39907[(2)] = inst_38655);

(statearr_38697_39907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38664 === (8))){
var inst_38645 = (state_38663[(7)]);
var state_38663__$1 = state_38663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38663__$1,(11),out,inst_38645);
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
var cljs$core$async$state_machine__36766__auto__ = null;
var cljs$core$async$state_machine__36766__auto____0 = (function (){
var statearr_38699 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38699[(0)] = cljs$core$async$state_machine__36766__auto__);

(statearr_38699[(1)] = (1));

return statearr_38699;
});
var cljs$core$async$state_machine__36766__auto____1 = (function (state_38663){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_38663);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e38700){var ex__36769__auto__ = e38700;
var statearr_38701_39913 = state_38663;
(statearr_38701_39913[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_38663[(4)]))){
var statearr_38702_39914 = state_38663;
(statearr_38702_39914[(1)] = cljs.core.first((state_38663[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39915 = state_38663;
state_38663 = G__39915;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$state_machine__36766__auto__ = function(state_38663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36766__auto____1.call(this,state_38663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36766__auto____0;
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36766__auto____1;
return cljs$core$async$state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_38703 = f__36948__auto__();
(statearr_38703[(6)] = c__36947__auto___39890);

return statearr_38703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38705 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38705 = (function (f,ch,meta38706){
this.f = f;
this.ch = ch;
this.meta38706 = meta38706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38707,meta38706__$1){
var self__ = this;
var _38707__$1 = this;
return (new cljs.core.async.t_cljs$core$async38705(self__.f,self__.ch,meta38706__$1));
}));

(cljs.core.async.t_cljs$core$async38705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38707){
var self__ = this;
var _38707__$1 = this;
return self__.meta38706;
}));

(cljs.core.async.t_cljs$core$async38705.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38705.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38705.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38705.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38705.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38713 = (function (f,ch,meta38706,_,fn1,meta38714){
this.f = f;
this.ch = ch;
this.meta38706 = meta38706;
this._ = _;
this.fn1 = fn1;
this.meta38714 = meta38714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38715,meta38714__$1){
var self__ = this;
var _38715__$1 = this;
return (new cljs.core.async.t_cljs$core$async38713(self__.f,self__.ch,self__.meta38706,self__._,self__.fn1,meta38714__$1));
}));

(cljs.core.async.t_cljs$core$async38713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38715){
var self__ = this;
var _38715__$1 = this;
return self__.meta38714;
}));

(cljs.core.async.t_cljs$core$async38713.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38713.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38704_SHARP_){
var G__38718 = (((p1__38704_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38704_SHARP_) : self__.f.call(null,p1__38704_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38718) : f1.call(null,G__38718));
});
}));

(cljs.core.async.t_cljs$core$async38713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38706","meta38706",-375771114,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38705","cljs.core.async/t_cljs$core$async38705",1153791718,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38714","meta38714",-103671140,null)], null);
}));

(cljs.core.async.t_cljs$core$async38713.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38713");

(cljs.core.async.t_cljs$core$async38713.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async38713");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38713.
 */
cljs.core.async.__GT_t_cljs$core$async38713 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38713(f__$1,ch__$1,meta38706__$1,___$2,fn1__$1,meta38714){
return (new cljs.core.async.t_cljs$core$async38713(f__$1,ch__$1,meta38706__$1,___$2,fn1__$1,meta38714));
});

}

return (new cljs.core.async.t_cljs$core$async38713(self__.f,self__.ch,self__.meta38706,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38719 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38719) : self__.f.call(null,G__38719));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38705.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38705.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38706","meta38706",-375771114,null)], null);
}));

(cljs.core.async.t_cljs$core$async38705.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38705");

(cljs.core.async.t_cljs$core$async38705.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async38705");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38705.
 */
cljs.core.async.__GT_t_cljs$core$async38705 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38705(f__$1,ch__$1,meta38706){
return (new cljs.core.async.t_cljs$core$async38705(f__$1,ch__$1,meta38706));
});

}

return (new cljs.core.async.t_cljs$core$async38705(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38720 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38720 = (function (f,ch,meta38721){
this.f = f;
this.ch = ch;
this.meta38721 = meta38721;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38722,meta38721__$1){
var self__ = this;
var _38722__$1 = this;
return (new cljs.core.async.t_cljs$core$async38720(self__.f,self__.ch,meta38721__$1));
}));

(cljs.core.async.t_cljs$core$async38720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38722){
var self__ = this;
var _38722__$1 = this;
return self__.meta38721;
}));

(cljs.core.async.t_cljs$core$async38720.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38720.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38720.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38720.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38720.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38720.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38720.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38721","meta38721",241772501,null)], null);
}));

(cljs.core.async.t_cljs$core$async38720.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38720.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38720");

(cljs.core.async.t_cljs$core$async38720.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async38720");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38720.
 */
cljs.core.async.__GT_t_cljs$core$async38720 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38720(f__$1,ch__$1,meta38721){
return (new cljs.core.async.t_cljs$core$async38720(f__$1,ch__$1,meta38721));
});

}

return (new cljs.core.async.t_cljs$core$async38720(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38723 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38723 = (function (p,ch,meta38724){
this.p = p;
this.ch = ch;
this.meta38724 = meta38724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38725,meta38724__$1){
var self__ = this;
var _38725__$1 = this;
return (new cljs.core.async.t_cljs$core$async38723(self__.p,self__.ch,meta38724__$1));
}));

(cljs.core.async.t_cljs$core$async38723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38725){
var self__ = this;
var _38725__$1 = this;
return self__.meta38724;
}));

(cljs.core.async.t_cljs$core$async38723.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38723.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38723.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38723.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38723.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38723.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38723.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38723.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38724","meta38724",-978000474,null)], null);
}));

(cljs.core.async.t_cljs$core$async38723.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38723");

(cljs.core.async.t_cljs$core$async38723.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async38723");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38723.
 */
cljs.core.async.__GT_t_cljs$core$async38723 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38723(p__$1,ch__$1,meta38724){
return (new cljs.core.async.t_cljs$core$async38723(p__$1,ch__$1,meta38724));
});

}

return (new cljs.core.async.t_cljs$core$async38723(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38732 = arguments.length;
switch (G__38732) {
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
var c__36947__auto___39944 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_38754){
var state_val_38755 = (state_38754[(1)]);
if((state_val_38755 === (7))){
var inst_38750 = (state_38754[(2)]);
var state_38754__$1 = state_38754;
var statearr_38756_39945 = state_38754__$1;
(statearr_38756_39945[(2)] = inst_38750);

(statearr_38756_39945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38755 === (1))){
var state_38754__$1 = state_38754;
var statearr_38757_39946 = state_38754__$1;
(statearr_38757_39946[(2)] = null);

(statearr_38757_39946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38755 === (4))){
var inst_38736 = (state_38754[(7)]);
var inst_38736__$1 = (state_38754[(2)]);
var inst_38737 = (inst_38736__$1 == null);
var state_38754__$1 = (function (){var statearr_38758 = state_38754;
(statearr_38758[(7)] = inst_38736__$1);

return statearr_38758;
})();
if(cljs.core.truth_(inst_38737)){
var statearr_38759_39948 = state_38754__$1;
(statearr_38759_39948[(1)] = (5));

} else {
var statearr_38760_39949 = state_38754__$1;
(statearr_38760_39949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38755 === (6))){
var inst_38736 = (state_38754[(7)]);
var inst_38741 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38736) : p.call(null,inst_38736));
var state_38754__$1 = state_38754;
if(cljs.core.truth_(inst_38741)){
var statearr_38761_39953 = state_38754__$1;
(statearr_38761_39953[(1)] = (8));

} else {
var statearr_38762_39954 = state_38754__$1;
(statearr_38762_39954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38755 === (3))){
var inst_38752 = (state_38754[(2)]);
var state_38754__$1 = state_38754;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38754__$1,inst_38752);
} else {
if((state_val_38755 === (2))){
var state_38754__$1 = state_38754;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38754__$1,(4),ch);
} else {
if((state_val_38755 === (11))){
var inst_38744 = (state_38754[(2)]);
var state_38754__$1 = state_38754;
var statearr_38763_39955 = state_38754__$1;
(statearr_38763_39955[(2)] = inst_38744);

(statearr_38763_39955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38755 === (9))){
var state_38754__$1 = state_38754;
var statearr_38765_39956 = state_38754__$1;
(statearr_38765_39956[(2)] = null);

(statearr_38765_39956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38755 === (5))){
var inst_38739 = cljs.core.async.close_BANG_(out);
var state_38754__$1 = state_38754;
var statearr_38767_39957 = state_38754__$1;
(statearr_38767_39957[(2)] = inst_38739);

(statearr_38767_39957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38755 === (10))){
var inst_38747 = (state_38754[(2)]);
var state_38754__$1 = (function (){var statearr_38768 = state_38754;
(statearr_38768[(8)] = inst_38747);

return statearr_38768;
})();
var statearr_38769_39958 = state_38754__$1;
(statearr_38769_39958[(2)] = null);

(statearr_38769_39958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38755 === (8))){
var inst_38736 = (state_38754[(7)]);
var state_38754__$1 = state_38754;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38754__$1,(11),out,inst_38736);
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
var cljs$core$async$state_machine__36766__auto__ = null;
var cljs$core$async$state_machine__36766__auto____0 = (function (){
var statearr_38774 = [null,null,null,null,null,null,null,null,null];
(statearr_38774[(0)] = cljs$core$async$state_machine__36766__auto__);

(statearr_38774[(1)] = (1));

return statearr_38774;
});
var cljs$core$async$state_machine__36766__auto____1 = (function (state_38754){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_38754);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e38775){var ex__36769__auto__ = e38775;
var statearr_38776_39959 = state_38754;
(statearr_38776_39959[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_38754[(4)]))){
var statearr_38777_39960 = state_38754;
(statearr_38777_39960[(1)] = cljs.core.first((state_38754[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39961 = state_38754;
state_38754 = G__39961;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$state_machine__36766__auto__ = function(state_38754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36766__auto____1.call(this,state_38754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36766__auto____0;
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36766__auto____1;
return cljs$core$async$state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_38778 = f__36948__auto__();
(statearr_38778[(6)] = c__36947__auto___39944);

return statearr_38778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38782 = arguments.length;
switch (G__38782) {
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
var c__36947__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_38850){
var state_val_38851 = (state_38850[(1)]);
if((state_val_38851 === (7))){
var inst_38846 = (state_38850[(2)]);
var state_38850__$1 = state_38850;
var statearr_38852_39970 = state_38850__$1;
(statearr_38852_39970[(2)] = inst_38846);

(statearr_38852_39970[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38851 === (20))){
var inst_38816 = (state_38850[(7)]);
var inst_38827 = (state_38850[(2)]);
var inst_38828 = cljs.core.next(inst_38816);
var inst_38799 = inst_38828;
var inst_38800 = null;
var inst_38801 = (0);
var inst_38802 = (0);
var state_38850__$1 = (function (){var statearr_38866 = state_38850;
(statearr_38866[(8)] = inst_38801);

(statearr_38866[(9)] = inst_38827);

(statearr_38866[(10)] = inst_38799);

(statearr_38866[(11)] = inst_38802);

(statearr_38866[(12)] = inst_38800);

return statearr_38866;
})();
var statearr_38867_39974 = state_38850__$1;
(statearr_38867_39974[(2)] = null);

(statearr_38867_39974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38851 === (1))){
var state_38850__$1 = state_38850;
var statearr_38874_39975 = state_38850__$1;
(statearr_38874_39975[(2)] = null);

(statearr_38874_39975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38851 === (4))){
var inst_38788 = (state_38850[(13)]);
var inst_38788__$1 = (state_38850[(2)]);
var inst_38789 = (inst_38788__$1 == null);
var state_38850__$1 = (function (){var statearr_38875 = state_38850;
(statearr_38875[(13)] = inst_38788__$1);

return statearr_38875;
})();
if(cljs.core.truth_(inst_38789)){
var statearr_38876_39976 = state_38850__$1;
(statearr_38876_39976[(1)] = (5));

} else {
var statearr_38877_39977 = state_38850__$1;
(statearr_38877_39977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38851 === (15))){
var state_38850__$1 = state_38850;
var statearr_38881_39978 = state_38850__$1;
(statearr_38881_39978[(2)] = null);

(statearr_38881_39978[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38851 === (21))){
var state_38850__$1 = state_38850;
var statearr_38886_39979 = state_38850__$1;
(statearr_38886_39979[(2)] = null);

(statearr_38886_39979[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38851 === (13))){
var inst_38801 = (state_38850[(8)]);
var inst_38799 = (state_38850[(10)]);
var inst_38802 = (state_38850[(11)]);
var inst_38800 = (state_38850[(12)]);
var inst_38809 = (state_38850[(2)]);
var inst_38810 = (inst_38802 + (1));
var tmp38878 = inst_38801;
var tmp38879 = inst_38799;
var tmp38880 = inst_38800;
var inst_38799__$1 = tmp38879;
var inst_38800__$1 = tmp38880;
var inst_38801__$1 = tmp38878;
var inst_38802__$1 = inst_38810;
var state_38850__$1 = (function (){var statearr_38893 = state_38850;
(statearr_38893[(8)] = inst_38801__$1);

(statearr_38893[(10)] = inst_38799__$1);

(statearr_38893[(11)] = inst_38802__$1);

(statearr_38893[(14)] = inst_38809);

(statearr_38893[(12)] = inst_38800__$1);

return statearr_38893;
})();
var statearr_38894_39981 = state_38850__$1;
(statearr_38894_39981[(2)] = null);

(statearr_38894_39981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38851 === (22))){
var state_38850__$1 = state_38850;
var statearr_38898_39982 = state_38850__$1;
(statearr_38898_39982[(2)] = null);

(statearr_38898_39982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38851 === (6))){
var inst_38788 = (state_38850[(13)]);
var inst_38797 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38788) : f.call(null,inst_38788));
var inst_38798 = cljs.core.seq(inst_38797);
var inst_38799 = inst_38798;
var inst_38800 = null;
var inst_38801 = (0);
var inst_38802 = (0);
var state_38850__$1 = (function (){var statearr_38899 = state_38850;
(statearr_38899[(8)] = inst_38801);

(statearr_38899[(10)] = inst_38799);

(statearr_38899[(11)] = inst_38802);

(statearr_38899[(12)] = inst_38800);

return statearr_38899;
})();
var statearr_38900_39986 = state_38850__$1;
(statearr_38900_39986[(2)] = null);

(statearr_38900_39986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38851 === (17))){
var inst_38816 = (state_38850[(7)]);
var inst_38820 = cljs.core.chunk_first(inst_38816);
var inst_38821 = cljs.core.chunk_rest(inst_38816);
var inst_38822 = cljs.core.count(inst_38820);
var inst_38799 = inst_38821;
var inst_38800 = inst_38820;
var inst_38801 = inst_38822;
var inst_38802 = (0);
var state_38850__$1 = (function (){var statearr_38901 = state_38850;
(statearr_38901[(8)] = inst_38801);

(statearr_38901[(10)] = inst_38799);

(statearr_38901[(11)] = inst_38802);

(statearr_38901[(12)] = inst_38800);

return statearr_38901;
})();
var statearr_38902_39990 = state_38850__$1;
(statearr_38902_39990[(2)] = null);

(statearr_38902_39990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38851 === (3))){
var inst_38848 = (state_38850[(2)]);
var state_38850__$1 = state_38850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38850__$1,inst_38848);
} else {
if((state_val_38851 === (12))){
var inst_38836 = (state_38850[(2)]);
var state_38850__$1 = state_38850;
var statearr_38907_39991 = state_38850__$1;
(statearr_38907_39991[(2)] = inst_38836);

(statearr_38907_39991[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38851 === (2))){
var state_38850__$1 = state_38850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38850__$1,(4),in$);
} else {
if((state_val_38851 === (23))){
var inst_38844 = (state_38850[(2)]);
var state_38850__$1 = state_38850;
var statearr_38908_39992 = state_38850__$1;
(statearr_38908_39992[(2)] = inst_38844);

(statearr_38908_39992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38851 === (19))){
var inst_38831 = (state_38850[(2)]);
var state_38850__$1 = state_38850;
var statearr_38909_39993 = state_38850__$1;
(statearr_38909_39993[(2)] = inst_38831);

(statearr_38909_39993[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38851 === (11))){
var inst_38816 = (state_38850[(7)]);
var inst_38799 = (state_38850[(10)]);
var inst_38816__$1 = cljs.core.seq(inst_38799);
var state_38850__$1 = (function (){var statearr_38910 = state_38850;
(statearr_38910[(7)] = inst_38816__$1);

return statearr_38910;
})();
if(inst_38816__$1){
var statearr_38911_39994 = state_38850__$1;
(statearr_38911_39994[(1)] = (14));

} else {
var statearr_38912_39995 = state_38850__$1;
(statearr_38912_39995[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38851 === (9))){
var inst_38838 = (state_38850[(2)]);
var inst_38839 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_38850__$1 = (function (){var statearr_38913 = state_38850;
(statearr_38913[(15)] = inst_38838);

return statearr_38913;
})();
if(cljs.core.truth_(inst_38839)){
var statearr_38914_39996 = state_38850__$1;
(statearr_38914_39996[(1)] = (21));

} else {
var statearr_38915_39997 = state_38850__$1;
(statearr_38915_39997[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38851 === (5))){
var inst_38791 = cljs.core.async.close_BANG_(out);
var state_38850__$1 = state_38850;
var statearr_38920_39998 = state_38850__$1;
(statearr_38920_39998[(2)] = inst_38791);

(statearr_38920_39998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38851 === (14))){
var inst_38816 = (state_38850[(7)]);
var inst_38818 = cljs.core.chunked_seq_QMARK_(inst_38816);
var state_38850__$1 = state_38850;
if(inst_38818){
var statearr_38921_39999 = state_38850__$1;
(statearr_38921_39999[(1)] = (17));

} else {
var statearr_38922_40000 = state_38850__$1;
(statearr_38922_40000[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38851 === (16))){
var inst_38834 = (state_38850[(2)]);
var state_38850__$1 = state_38850;
var statearr_38923_40001 = state_38850__$1;
(statearr_38923_40001[(2)] = inst_38834);

(statearr_38923_40001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38851 === (10))){
var inst_38802 = (state_38850[(11)]);
var inst_38800 = (state_38850[(12)]);
var inst_38807 = cljs.core._nth(inst_38800,inst_38802);
var state_38850__$1 = state_38850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38850__$1,(13),out,inst_38807);
} else {
if((state_val_38851 === (18))){
var inst_38816 = (state_38850[(7)]);
var inst_38825 = cljs.core.first(inst_38816);
var state_38850__$1 = state_38850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38850__$1,(20),out,inst_38825);
} else {
if((state_val_38851 === (8))){
var inst_38801 = (state_38850[(8)]);
var inst_38802 = (state_38850[(11)]);
var inst_38804 = (inst_38802 < inst_38801);
var inst_38805 = inst_38804;
var state_38850__$1 = state_38850;
if(cljs.core.truth_(inst_38805)){
var statearr_38928_40003 = state_38850__$1;
(statearr_38928_40003[(1)] = (10));

} else {
var statearr_38929_40004 = state_38850__$1;
(statearr_38929_40004[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__36766__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36766__auto____0 = (function (){
var statearr_38930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38930[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36766__auto__);

(statearr_38930[(1)] = (1));

return statearr_38930;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36766__auto____1 = (function (state_38850){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_38850);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e38931){var ex__36769__auto__ = e38931;
var statearr_38932_40005 = state_38850;
(statearr_38932_40005[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_38850[(4)]))){
var statearr_38933_40006 = state_38850;
(statearr_38933_40006[(1)] = cljs.core.first((state_38850[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40007 = state_38850;
state_38850 = G__40007;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36766__auto__ = function(state_38850){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36766__auto____1.call(this,state_38850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36766__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36766__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_38934 = f__36948__auto__();
(statearr_38934[(6)] = c__36947__auto__);

return statearr_38934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
}));

return c__36947__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__38937 = arguments.length;
switch (G__38937) {
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
var G__38941 = arguments.length;
switch (G__38941) {
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
var G__38947 = arguments.length;
switch (G__38947) {
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
var c__36947__auto___40016 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_38971){
var state_val_38972 = (state_38971[(1)]);
if((state_val_38972 === (7))){
var inst_38966 = (state_38971[(2)]);
var state_38971__$1 = state_38971;
var statearr_38973_40017 = state_38971__$1;
(statearr_38973_40017[(2)] = inst_38966);

(statearr_38973_40017[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38972 === (1))){
var inst_38948 = null;
var state_38971__$1 = (function (){var statearr_38974 = state_38971;
(statearr_38974[(7)] = inst_38948);

return statearr_38974;
})();
var statearr_38975_40018 = state_38971__$1;
(statearr_38975_40018[(2)] = null);

(statearr_38975_40018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38972 === (4))){
var inst_38951 = (state_38971[(8)]);
var inst_38951__$1 = (state_38971[(2)]);
var inst_38952 = (inst_38951__$1 == null);
var inst_38953 = cljs.core.not(inst_38952);
var state_38971__$1 = (function (){var statearr_38976 = state_38971;
(statearr_38976[(8)] = inst_38951__$1);

return statearr_38976;
})();
if(inst_38953){
var statearr_38977_40019 = state_38971__$1;
(statearr_38977_40019[(1)] = (5));

} else {
var statearr_38978_40020 = state_38971__$1;
(statearr_38978_40020[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38972 === (6))){
var state_38971__$1 = state_38971;
var statearr_38979_40021 = state_38971__$1;
(statearr_38979_40021[(2)] = null);

(statearr_38979_40021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38972 === (3))){
var inst_38968 = (state_38971[(2)]);
var inst_38969 = cljs.core.async.close_BANG_(out);
var state_38971__$1 = (function (){var statearr_38980 = state_38971;
(statearr_38980[(9)] = inst_38968);

return statearr_38980;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38971__$1,inst_38969);
} else {
if((state_val_38972 === (2))){
var state_38971__$1 = state_38971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38971__$1,(4),ch);
} else {
if((state_val_38972 === (11))){
var inst_38951 = (state_38971[(8)]);
var inst_38960 = (state_38971[(2)]);
var inst_38948 = inst_38951;
var state_38971__$1 = (function (){var statearr_38982 = state_38971;
(statearr_38982[(7)] = inst_38948);

(statearr_38982[(10)] = inst_38960);

return statearr_38982;
})();
var statearr_38986_40023 = state_38971__$1;
(statearr_38986_40023[(2)] = null);

(statearr_38986_40023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38972 === (9))){
var inst_38951 = (state_38971[(8)]);
var state_38971__$1 = state_38971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38971__$1,(11),out,inst_38951);
} else {
if((state_val_38972 === (5))){
var inst_38951 = (state_38971[(8)]);
var inst_38948 = (state_38971[(7)]);
var inst_38955 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38951,inst_38948);
var state_38971__$1 = state_38971;
if(inst_38955){
var statearr_38989_40024 = state_38971__$1;
(statearr_38989_40024[(1)] = (8));

} else {
var statearr_38990_40025 = state_38971__$1;
(statearr_38990_40025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38972 === (10))){
var inst_38963 = (state_38971[(2)]);
var state_38971__$1 = state_38971;
var statearr_38993_40026 = state_38971__$1;
(statearr_38993_40026[(2)] = inst_38963);

(statearr_38993_40026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38972 === (8))){
var inst_38948 = (state_38971[(7)]);
var tmp38988 = inst_38948;
var inst_38948__$1 = tmp38988;
var state_38971__$1 = (function (){var statearr_38994 = state_38971;
(statearr_38994[(7)] = inst_38948__$1);

return statearr_38994;
})();
var statearr_38995_40031 = state_38971__$1;
(statearr_38995_40031[(2)] = null);

(statearr_38995_40031[(1)] = (2));


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
var cljs$core$async$state_machine__36766__auto__ = null;
var cljs$core$async$state_machine__36766__auto____0 = (function (){
var statearr_38996 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38996[(0)] = cljs$core$async$state_machine__36766__auto__);

(statearr_38996[(1)] = (1));

return statearr_38996;
});
var cljs$core$async$state_machine__36766__auto____1 = (function (state_38971){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_38971);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e38997){var ex__36769__auto__ = e38997;
var statearr_38998_40033 = state_38971;
(statearr_38998_40033[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_38971[(4)]))){
var statearr_38999_40034 = state_38971;
(statearr_38999_40034[(1)] = cljs.core.first((state_38971[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40035 = state_38971;
state_38971 = G__40035;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$state_machine__36766__auto__ = function(state_38971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36766__auto____1.call(this,state_38971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36766__auto____0;
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36766__auto____1;
return cljs$core$async$state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_39002 = f__36948__auto__();
(statearr_39002[(6)] = c__36947__auto___40016);

return statearr_39002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39007 = arguments.length;
switch (G__39007) {
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
var c__36947__auto___40040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_39045){
var state_val_39046 = (state_39045[(1)]);
if((state_val_39046 === (7))){
var inst_39041 = (state_39045[(2)]);
var state_39045__$1 = state_39045;
var statearr_39048_40041 = state_39045__$1;
(statearr_39048_40041[(2)] = inst_39041);

(statearr_39048_40041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39046 === (1))){
var inst_39008 = (new Array(n));
var inst_39009 = inst_39008;
var inst_39010 = (0);
var state_39045__$1 = (function (){var statearr_39052 = state_39045;
(statearr_39052[(7)] = inst_39010);

(statearr_39052[(8)] = inst_39009);

return statearr_39052;
})();
var statearr_39053_40042 = state_39045__$1;
(statearr_39053_40042[(2)] = null);

(statearr_39053_40042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39046 === (4))){
var inst_39013 = (state_39045[(9)]);
var inst_39013__$1 = (state_39045[(2)]);
var inst_39014 = (inst_39013__$1 == null);
var inst_39015 = cljs.core.not(inst_39014);
var state_39045__$1 = (function (){var statearr_39054 = state_39045;
(statearr_39054[(9)] = inst_39013__$1);

return statearr_39054;
})();
if(inst_39015){
var statearr_39056_40046 = state_39045__$1;
(statearr_39056_40046[(1)] = (5));

} else {
var statearr_39060_40047 = state_39045__$1;
(statearr_39060_40047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39046 === (15))){
var inst_39035 = (state_39045[(2)]);
var state_39045__$1 = state_39045;
var statearr_39061_40048 = state_39045__$1;
(statearr_39061_40048[(2)] = inst_39035);

(statearr_39061_40048[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39046 === (13))){
var state_39045__$1 = state_39045;
var statearr_39062_40049 = state_39045__$1;
(statearr_39062_40049[(2)] = null);

(statearr_39062_40049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39046 === (6))){
var inst_39010 = (state_39045[(7)]);
var inst_39031 = (inst_39010 > (0));
var state_39045__$1 = state_39045;
if(cljs.core.truth_(inst_39031)){
var statearr_39063_40050 = state_39045__$1;
(statearr_39063_40050[(1)] = (12));

} else {
var statearr_39064_40051 = state_39045__$1;
(statearr_39064_40051[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39046 === (3))){
var inst_39043 = (state_39045[(2)]);
var state_39045__$1 = state_39045;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39045__$1,inst_39043);
} else {
if((state_val_39046 === (12))){
var inst_39009 = (state_39045[(8)]);
var inst_39033 = cljs.core.vec(inst_39009);
var state_39045__$1 = state_39045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39045__$1,(15),out,inst_39033);
} else {
if((state_val_39046 === (2))){
var state_39045__$1 = state_39045;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39045__$1,(4),ch);
} else {
if((state_val_39046 === (11))){
var inst_39025 = (state_39045[(2)]);
var inst_39026 = (new Array(n));
var inst_39009 = inst_39026;
var inst_39010 = (0);
var state_39045__$1 = (function (){var statearr_39065 = state_39045;
(statearr_39065[(10)] = inst_39025);

(statearr_39065[(7)] = inst_39010);

(statearr_39065[(8)] = inst_39009);

return statearr_39065;
})();
var statearr_39066_40052 = state_39045__$1;
(statearr_39066_40052[(2)] = null);

(statearr_39066_40052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39046 === (9))){
var inst_39009 = (state_39045[(8)]);
var inst_39023 = cljs.core.vec(inst_39009);
var state_39045__$1 = state_39045;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39045__$1,(11),out,inst_39023);
} else {
if((state_val_39046 === (5))){
var inst_39013 = (state_39045[(9)]);
var inst_39010 = (state_39045[(7)]);
var inst_39009 = (state_39045[(8)]);
var inst_39018 = (state_39045[(11)]);
var inst_39017 = (inst_39009[inst_39010] = inst_39013);
var inst_39018__$1 = (inst_39010 + (1));
var inst_39019 = (inst_39018__$1 < n);
var state_39045__$1 = (function (){var statearr_39067 = state_39045;
(statearr_39067[(12)] = inst_39017);

(statearr_39067[(11)] = inst_39018__$1);

return statearr_39067;
})();
if(cljs.core.truth_(inst_39019)){
var statearr_39068_40053 = state_39045__$1;
(statearr_39068_40053[(1)] = (8));

} else {
var statearr_39069_40054 = state_39045__$1;
(statearr_39069_40054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39046 === (14))){
var inst_39038 = (state_39045[(2)]);
var inst_39039 = cljs.core.async.close_BANG_(out);
var state_39045__$1 = (function (){var statearr_39071 = state_39045;
(statearr_39071[(13)] = inst_39038);

return statearr_39071;
})();
var statearr_39073_40055 = state_39045__$1;
(statearr_39073_40055[(2)] = inst_39039);

(statearr_39073_40055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39046 === (10))){
var inst_39029 = (state_39045[(2)]);
var state_39045__$1 = state_39045;
var statearr_39075_40056 = state_39045__$1;
(statearr_39075_40056[(2)] = inst_39029);

(statearr_39075_40056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39046 === (8))){
var inst_39009 = (state_39045[(8)]);
var inst_39018 = (state_39045[(11)]);
var tmp39070 = inst_39009;
var inst_39009__$1 = tmp39070;
var inst_39010 = inst_39018;
var state_39045__$1 = (function (){var statearr_39076 = state_39045;
(statearr_39076[(7)] = inst_39010);

(statearr_39076[(8)] = inst_39009__$1);

return statearr_39076;
})();
var statearr_39077_40057 = state_39045__$1;
(statearr_39077_40057[(2)] = null);

(statearr_39077_40057[(1)] = (2));


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
var cljs$core$async$state_machine__36766__auto__ = null;
var cljs$core$async$state_machine__36766__auto____0 = (function (){
var statearr_39078 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39078[(0)] = cljs$core$async$state_machine__36766__auto__);

(statearr_39078[(1)] = (1));

return statearr_39078;
});
var cljs$core$async$state_machine__36766__auto____1 = (function (state_39045){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_39045);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e39079){var ex__36769__auto__ = e39079;
var statearr_39080_40058 = state_39045;
(statearr_39080_40058[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_39045[(4)]))){
var statearr_39084_40059 = state_39045;
(statearr_39084_40059[(1)] = cljs.core.first((state_39045[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40060 = state_39045;
state_39045 = G__40060;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$state_machine__36766__auto__ = function(state_39045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36766__auto____1.call(this,state_39045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36766__auto____0;
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36766__auto____1;
return cljs$core$async$state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_39085 = f__36948__auto__();
(statearr_39085[(6)] = c__36947__auto___40040);

return statearr_39085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39087 = arguments.length;
switch (G__39087) {
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
var c__36947__auto___40063 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36948__auto__ = (function (){var switch__36765__auto__ = (function (state_39132){
var state_val_39133 = (state_39132[(1)]);
if((state_val_39133 === (7))){
var inst_39128 = (state_39132[(2)]);
var state_39132__$1 = state_39132;
var statearr_39134_40064 = state_39132__$1;
(statearr_39134_40064[(2)] = inst_39128);

(statearr_39134_40064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39133 === (1))){
var inst_39088 = [];
var inst_39089 = inst_39088;
var inst_39090 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39132__$1 = (function (){var statearr_39135 = state_39132;
(statearr_39135[(7)] = inst_39090);

(statearr_39135[(8)] = inst_39089);

return statearr_39135;
})();
var statearr_39136_40066 = state_39132__$1;
(statearr_39136_40066[(2)] = null);

(statearr_39136_40066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39133 === (4))){
var inst_39093 = (state_39132[(9)]);
var inst_39093__$1 = (state_39132[(2)]);
var inst_39094 = (inst_39093__$1 == null);
var inst_39095 = cljs.core.not(inst_39094);
var state_39132__$1 = (function (){var statearr_39137 = state_39132;
(statearr_39137[(9)] = inst_39093__$1);

return statearr_39137;
})();
if(inst_39095){
var statearr_39138_40070 = state_39132__$1;
(statearr_39138_40070[(1)] = (5));

} else {
var statearr_39139_40071 = state_39132__$1;
(statearr_39139_40071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39133 === (15))){
var inst_39089 = (state_39132[(8)]);
var inst_39120 = cljs.core.vec(inst_39089);
var state_39132__$1 = state_39132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39132__$1,(18),out,inst_39120);
} else {
if((state_val_39133 === (13))){
var inst_39115 = (state_39132[(2)]);
var state_39132__$1 = state_39132;
var statearr_39140_40072 = state_39132__$1;
(statearr_39140_40072[(2)] = inst_39115);

(statearr_39140_40072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39133 === (6))){
var inst_39089 = (state_39132[(8)]);
var inst_39117 = inst_39089.length;
var inst_39118 = (inst_39117 > (0));
var state_39132__$1 = state_39132;
if(cljs.core.truth_(inst_39118)){
var statearr_39141_40073 = state_39132__$1;
(statearr_39141_40073[(1)] = (15));

} else {
var statearr_39142_40074 = state_39132__$1;
(statearr_39142_40074[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39133 === (17))){
var inst_39125 = (state_39132[(2)]);
var inst_39126 = cljs.core.async.close_BANG_(out);
var state_39132__$1 = (function (){var statearr_39143 = state_39132;
(statearr_39143[(10)] = inst_39125);

return statearr_39143;
})();
var statearr_39144_40075 = state_39132__$1;
(statearr_39144_40075[(2)] = inst_39126);

(statearr_39144_40075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39133 === (3))){
var inst_39130 = (state_39132[(2)]);
var state_39132__$1 = state_39132;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39132__$1,inst_39130);
} else {
if((state_val_39133 === (12))){
var inst_39089 = (state_39132[(8)]);
var inst_39108 = cljs.core.vec(inst_39089);
var state_39132__$1 = state_39132;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39132__$1,(14),out,inst_39108);
} else {
if((state_val_39133 === (2))){
var state_39132__$1 = state_39132;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39132__$1,(4),ch);
} else {
if((state_val_39133 === (11))){
var inst_39097 = (state_39132[(11)]);
var inst_39089 = (state_39132[(8)]);
var inst_39093 = (state_39132[(9)]);
var inst_39105 = inst_39089.push(inst_39093);
var tmp39145 = inst_39089;
var inst_39089__$1 = tmp39145;
var inst_39090 = inst_39097;
var state_39132__$1 = (function (){var statearr_39146 = state_39132;
(statearr_39146[(12)] = inst_39105);

(statearr_39146[(7)] = inst_39090);

(statearr_39146[(8)] = inst_39089__$1);

return statearr_39146;
})();
var statearr_39147_40080 = state_39132__$1;
(statearr_39147_40080[(2)] = null);

(statearr_39147_40080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39133 === (9))){
var inst_39090 = (state_39132[(7)]);
var inst_39101 = cljs.core.keyword_identical_QMARK_(inst_39090,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_39132__$1 = state_39132;
var statearr_39148_40081 = state_39132__$1;
(statearr_39148_40081[(2)] = inst_39101);

(statearr_39148_40081[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39133 === (5))){
var inst_39090 = (state_39132[(7)]);
var inst_39097 = (state_39132[(11)]);
var inst_39098 = (state_39132[(13)]);
var inst_39093 = (state_39132[(9)]);
var inst_39097__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39093) : f.call(null,inst_39093));
var inst_39098__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39097__$1,inst_39090);
var state_39132__$1 = (function (){var statearr_39149 = state_39132;
(statearr_39149[(11)] = inst_39097__$1);

(statearr_39149[(13)] = inst_39098__$1);

return statearr_39149;
})();
if(inst_39098__$1){
var statearr_39150_40086 = state_39132__$1;
(statearr_39150_40086[(1)] = (8));

} else {
var statearr_39151_40087 = state_39132__$1;
(statearr_39151_40087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39133 === (14))){
var inst_39097 = (state_39132[(11)]);
var inst_39093 = (state_39132[(9)]);
var inst_39110 = (state_39132[(2)]);
var inst_39111 = [];
var inst_39112 = inst_39111.push(inst_39093);
var inst_39089 = inst_39111;
var inst_39090 = inst_39097;
var state_39132__$1 = (function (){var statearr_39152 = state_39132;
(statearr_39152[(14)] = inst_39112);

(statearr_39152[(15)] = inst_39110);

(statearr_39152[(7)] = inst_39090);

(statearr_39152[(8)] = inst_39089);

return statearr_39152;
})();
var statearr_39153_40088 = state_39132__$1;
(statearr_39153_40088[(2)] = null);

(statearr_39153_40088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39133 === (16))){
var state_39132__$1 = state_39132;
var statearr_39154_40090 = state_39132__$1;
(statearr_39154_40090[(2)] = null);

(statearr_39154_40090[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39133 === (10))){
var inst_39103 = (state_39132[(2)]);
var state_39132__$1 = state_39132;
if(cljs.core.truth_(inst_39103)){
var statearr_39156_40091 = state_39132__$1;
(statearr_39156_40091[(1)] = (11));

} else {
var statearr_39157_40092 = state_39132__$1;
(statearr_39157_40092[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39133 === (18))){
var inst_39122 = (state_39132[(2)]);
var state_39132__$1 = state_39132;
var statearr_39158_40093 = state_39132__$1;
(statearr_39158_40093[(2)] = inst_39122);

(statearr_39158_40093[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39133 === (8))){
var inst_39098 = (state_39132[(13)]);
var state_39132__$1 = state_39132;
var statearr_39159_40094 = state_39132__$1;
(statearr_39159_40094[(2)] = inst_39098);

(statearr_39159_40094[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__36766__auto__ = null;
var cljs$core$async$state_machine__36766__auto____0 = (function (){
var statearr_39160 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39160[(0)] = cljs$core$async$state_machine__36766__auto__);

(statearr_39160[(1)] = (1));

return statearr_39160;
});
var cljs$core$async$state_machine__36766__auto____1 = (function (state_39132){
while(true){
var ret_value__36767__auto__ = (function (){try{while(true){
var result__36768__auto__ = switch__36765__auto__(state_39132);
if(cljs.core.keyword_identical_QMARK_(result__36768__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36768__auto__;
}
break;
}
}catch (e39161){var ex__36769__auto__ = e39161;
var statearr_39162_40095 = state_39132;
(statearr_39162_40095[(2)] = ex__36769__auto__);


if(cljs.core.seq((state_39132[(4)]))){
var statearr_39163_40096 = state_39132;
(statearr_39163_40096[(1)] = cljs.core.first((state_39132[(4)])));

} else {
throw ex__36769__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36767__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40097 = state_39132;
state_39132 = G__40097;
continue;
} else {
return ret_value__36767__auto__;
}
break;
}
});
cljs$core$async$state_machine__36766__auto__ = function(state_39132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36766__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36766__auto____1.call(this,state_39132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36766__auto____0;
cljs$core$async$state_machine__36766__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36766__auto____1;
return cljs$core$async$state_machine__36766__auto__;
})()
})();
var state__36949__auto__ = (function (){var statearr_39167 = f__36948__auto__();
(statearr_39167[(6)] = c__36947__auto___40063);

return statearr_39167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36949__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
