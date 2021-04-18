goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37068 = arguments.length;
switch (G__37068) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37069 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37069 = (function (f,blockable,meta37070){
this.f = f;
this.blockable = blockable;
this.meta37070 = meta37070;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37071,meta37070__$1){
var self__ = this;
var _37071__$1 = this;
return (new cljs.core.async.t_cljs$core$async37069(self__.f,self__.blockable,meta37070__$1));
}));

(cljs.core.async.t_cljs$core$async37069.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37071){
var self__ = this;
var _37071__$1 = this;
return self__.meta37070;
}));

(cljs.core.async.t_cljs$core$async37069.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37069.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37069.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async37069.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async37069.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37070","meta37070",-877061025,null)], null);
}));

(cljs.core.async.t_cljs$core$async37069.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37069.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37069");

(cljs.core.async.t_cljs$core$async37069.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37069");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37069.
 */
cljs.core.async.__GT_t_cljs$core$async37069 = (function cljs$core$async$__GT_t_cljs$core$async37069(f__$1,blockable__$1,meta37070){
return (new cljs.core.async.t_cljs$core$async37069(f__$1,blockable__$1,meta37070));
});

}

return (new cljs.core.async.t_cljs$core$async37069(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__37078 = arguments.length;
switch (G__37078) {
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
var G__37080 = arguments.length;
switch (G__37080) {
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
var G__37085 = arguments.length;
switch (G__37085) {
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
var val_39340 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39340) : fn1.call(null,val_39340));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_39340) : fn1.call(null,val_39340));
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
var G__37089 = arguments.length;
switch (G__37089) {
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
var n__4613__auto___39342 = n;
var x_39343 = (0);
while(true){
if((x_39343 < n__4613__auto___39342)){
(a[x_39343] = x_39343);

var G__39344 = (x_39343 + (1));
x_39343 = G__39344;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37110 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37110 = (function (flag,meta37111){
this.flag = flag;
this.meta37111 = meta37111;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37112,meta37111__$1){
var self__ = this;
var _37112__$1 = this;
return (new cljs.core.async.t_cljs$core$async37110(self__.flag,meta37111__$1));
}));

(cljs.core.async.t_cljs$core$async37110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37112){
var self__ = this;
var _37112__$1 = this;
return self__.meta37111;
}));

(cljs.core.async.t_cljs$core$async37110.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37110.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async37110.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37111","meta37111",1987093038,null)], null);
}));

(cljs.core.async.t_cljs$core$async37110.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37110.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37110");

(cljs.core.async.t_cljs$core$async37110.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37110");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37110.
 */
cljs.core.async.__GT_t_cljs$core$async37110 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37110(flag__$1,meta37111){
return (new cljs.core.async.t_cljs$core$async37110(flag__$1,meta37111));
});

}

return (new cljs.core.async.t_cljs$core$async37110(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37119 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37119 = (function (flag,cb,meta37120){
this.flag = flag;
this.cb = cb;
this.meta37120 = meta37120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37121,meta37120__$1){
var self__ = this;
var _37121__$1 = this;
return (new cljs.core.async.t_cljs$core$async37119(self__.flag,self__.cb,meta37120__$1));
}));

(cljs.core.async.t_cljs$core$async37119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37121){
var self__ = this;
var _37121__$1 = this;
return self__.meta37120;
}));

(cljs.core.async.t_cljs$core$async37119.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37119.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async37119.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async37119.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async37119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37120","meta37120",-1623120693,null)], null);
}));

(cljs.core.async.t_cljs$core$async37119.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37119");

(cljs.core.async.t_cljs$core$async37119.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37119");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37119.
 */
cljs.core.async.__GT_t_cljs$core$async37119 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37119(flag__$1,cb__$1,meta37120){
return (new cljs.core.async.t_cljs$core$async37119(flag__$1,cb__$1,meta37120));
});

}

return (new cljs.core.async.t_cljs$core$async37119(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37128_SHARP_){
var G__37134 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37128_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37134) : fret.call(null,G__37134));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37129_SHARP_){
var G__37135 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37129_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__37135) : fret.call(null,G__37135));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39354 = (i + (1));
i = G__39354;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___39356 = arguments.length;
var i__4737__auto___39357 = (0);
while(true){
if((i__4737__auto___39357 < len__4736__auto___39356)){
args__4742__auto__.push((arguments[i__4737__auto___39357]));

var G__39358 = (i__4737__auto___39357 + (1));
i__4737__auto___39357 = G__39358;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37142){
var map__37143 = p__37142;
var map__37143__$1 = (((((!((map__37143 == null))))?(((((map__37143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37143):map__37143);
var opts = map__37143__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37136){
var G__37137 = cljs.core.first(seq37136);
var seq37136__$1 = cljs.core.next(seq37136);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37137,seq37136__$1);
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
var G__37146 = arguments.length;
switch (G__37146) {
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
var c__36997__auto___39378 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_37192){
var state_val_37193 = (state_37192[(1)]);
if((state_val_37193 === (7))){
var inst_37184 = (state_37192[(2)]);
var state_37192__$1 = state_37192;
var statearr_37197_39381 = state_37192__$1;
(statearr_37197_39381[(2)] = inst_37184);

(statearr_37197_39381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37193 === (1))){
var state_37192__$1 = state_37192;
var statearr_37200_39382 = state_37192__$1;
(statearr_37200_39382[(2)] = null);

(statearr_37200_39382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37193 === (4))){
var inst_37151 = (state_37192[(7)]);
var inst_37151__$1 = (state_37192[(2)]);
var inst_37161 = (inst_37151__$1 == null);
var state_37192__$1 = (function (){var statearr_37201 = state_37192;
(statearr_37201[(7)] = inst_37151__$1);

return statearr_37201;
})();
if(cljs.core.truth_(inst_37161)){
var statearr_37202_39383 = state_37192__$1;
(statearr_37202_39383[(1)] = (5));

} else {
var statearr_37203_39384 = state_37192__$1;
(statearr_37203_39384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37193 === (13))){
var state_37192__$1 = state_37192;
var statearr_37204_39385 = state_37192__$1;
(statearr_37204_39385[(2)] = null);

(statearr_37204_39385[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37193 === (6))){
var inst_37151 = (state_37192[(7)]);
var state_37192__$1 = state_37192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37192__$1,(11),to,inst_37151);
} else {
if((state_val_37193 === (3))){
var inst_37186 = (state_37192[(2)]);
var state_37192__$1 = state_37192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37192__$1,inst_37186);
} else {
if((state_val_37193 === (12))){
var state_37192__$1 = state_37192;
var statearr_37205_39386 = state_37192__$1;
(statearr_37205_39386[(2)] = null);

(statearr_37205_39386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37193 === (2))){
var state_37192__$1 = state_37192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37192__$1,(4),from);
} else {
if((state_val_37193 === (11))){
var inst_37173 = (state_37192[(2)]);
var state_37192__$1 = state_37192;
if(cljs.core.truth_(inst_37173)){
var statearr_37206_39387 = state_37192__$1;
(statearr_37206_39387[(1)] = (12));

} else {
var statearr_37207_39388 = state_37192__$1;
(statearr_37207_39388[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37193 === (9))){
var state_37192__$1 = state_37192;
var statearr_37208_39389 = state_37192__$1;
(statearr_37208_39389[(2)] = null);

(statearr_37208_39389[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37193 === (5))){
var state_37192__$1 = state_37192;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37209_39390 = state_37192__$1;
(statearr_37209_39390[(1)] = (8));

} else {
var statearr_37210_39391 = state_37192__$1;
(statearr_37210_39391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37193 === (14))){
var inst_37182 = (state_37192[(2)]);
var state_37192__$1 = state_37192;
var statearr_37211_39392 = state_37192__$1;
(statearr_37211_39392[(2)] = inst_37182);

(statearr_37211_39392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37193 === (10))){
var inst_37170 = (state_37192[(2)]);
var state_37192__$1 = state_37192;
var statearr_37212_39393 = state_37192__$1;
(statearr_37212_39393[(2)] = inst_37170);

(statearr_37212_39393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37193 === (8))){
var inst_37164 = cljs.core.async.close_BANG_(to);
var state_37192__$1 = state_37192;
var statearr_37213_39394 = state_37192__$1;
(statearr_37213_39394[(2)] = inst_37164);

(statearr_37213_39394[(1)] = (10));


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
var cljs$core$async$state_machine__36798__auto__ = null;
var cljs$core$async$state_machine__36798__auto____0 = (function (){
var statearr_37215 = [null,null,null,null,null,null,null,null];
(statearr_37215[(0)] = cljs$core$async$state_machine__36798__auto__);

(statearr_37215[(1)] = (1));

return statearr_37215;
});
var cljs$core$async$state_machine__36798__auto____1 = (function (state_37192){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_37192);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e37216){var ex__36801__auto__ = e37216;
var statearr_37217_39395 = state_37192;
(statearr_37217_39395[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_37192[(4)]))){
var statearr_37218_39396 = state_37192;
(statearr_37218_39396[(1)] = cljs.core.first((state_37192[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39397 = state_37192;
state_37192 = G__39397;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$state_machine__36798__auto__ = function(state_37192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36798__auto____1.call(this,state_37192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36798__auto____0;
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36798__auto____1;
return cljs$core$async$state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_37219 = f__36998__auto__();
(statearr_37219[(6)] = c__36997__auto___39378);

return statearr_37219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
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
var process = (function (p__37220){
var vec__37221 = p__37220;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37221,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37221,(1),null);
var job = vec__37221;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__36997__auto___39400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_37228){
var state_val_37229 = (state_37228[(1)]);
if((state_val_37229 === (1))){
var state_37228__$1 = state_37228;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37228__$1,(2),res,v);
} else {
if((state_val_37229 === (2))){
var inst_37225 = (state_37228[(2)]);
var inst_37226 = cljs.core.async.close_BANG_(res);
var state_37228__$1 = (function (){var statearr_37230 = state_37228;
(statearr_37230[(7)] = inst_37225);

return statearr_37230;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37228__$1,inst_37226);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____0 = (function (){
var statearr_37231 = [null,null,null,null,null,null,null,null];
(statearr_37231[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__);

(statearr_37231[(1)] = (1));

return statearr_37231;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____1 = (function (state_37228){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_37228);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e37232){var ex__36801__auto__ = e37232;
var statearr_37233_39403 = state_37228;
(statearr_37233_39403[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_37228[(4)]))){
var statearr_37234_39404 = state_37228;
(statearr_37234_39404[(1)] = cljs.core.first((state_37228[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39406 = state_37228;
state_37228 = G__39406;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__ = function(state_37228){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____1.call(this,state_37228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_37236 = f__36998__auto__();
(statearr_37236[(6)] = c__36997__auto___39400);

return statearr_37236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__37237){
var vec__37238 = p__37237;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37238,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37238,(1),null);
var job = vec__37238;
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
var n__4613__auto___39409 = n;
var __39410 = (0);
while(true){
if((__39410 < n__4613__auto___39409)){
var G__37241_39412 = type;
var G__37241_39413__$1 = (((G__37241_39412 instanceof cljs.core.Keyword))?G__37241_39412.fqn:null);
switch (G__37241_39413__$1) {
case "compute":
var c__36997__auto___39415 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39410,c__36997__auto___39415,G__37241_39412,G__37241_39413__$1,n__4613__auto___39409,jobs,results,process,async){
return (function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = ((function (__39410,c__36997__auto___39415,G__37241_39412,G__37241_39413__$1,n__4613__auto___39409,jobs,results,process,async){
return (function (state_37255){
var state_val_37256 = (state_37255[(1)]);
if((state_val_37256 === (1))){
var state_37255__$1 = state_37255;
var statearr_37257_39416 = state_37255__$1;
(statearr_37257_39416[(2)] = null);

(statearr_37257_39416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (2))){
var state_37255__$1 = state_37255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37255__$1,(4),jobs);
} else {
if((state_val_37256 === (3))){
var inst_37253 = (state_37255[(2)]);
var state_37255__$1 = state_37255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37255__$1,inst_37253);
} else {
if((state_val_37256 === (4))){
var inst_37245 = (state_37255[(2)]);
var inst_37246 = process(inst_37245);
var state_37255__$1 = state_37255;
if(cljs.core.truth_(inst_37246)){
var statearr_37258_39420 = state_37255__$1;
(statearr_37258_39420[(1)] = (5));

} else {
var statearr_37259_39421 = state_37255__$1;
(statearr_37259_39421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (5))){
var state_37255__$1 = state_37255;
var statearr_37264_39423 = state_37255__$1;
(statearr_37264_39423[(2)] = null);

(statearr_37264_39423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (6))){
var state_37255__$1 = state_37255;
var statearr_37271_39424 = state_37255__$1;
(statearr_37271_39424[(2)] = null);

(statearr_37271_39424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37256 === (7))){
var inst_37251 = (state_37255[(2)]);
var state_37255__$1 = state_37255;
var statearr_37279_39425 = state_37255__$1;
(statearr_37279_39425[(2)] = inst_37251);

(statearr_37279_39425[(1)] = (3));


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
});})(__39410,c__36997__auto___39415,G__37241_39412,G__37241_39413__$1,n__4613__auto___39409,jobs,results,process,async))
;
return ((function (__39410,switch__36797__auto__,c__36997__auto___39415,G__37241_39412,G__37241_39413__$1,n__4613__auto___39409,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____0 = (function (){
var statearr_37286 = [null,null,null,null,null,null,null];
(statearr_37286[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__);

(statearr_37286[(1)] = (1));

return statearr_37286;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____1 = (function (state_37255){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_37255);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e37287){var ex__36801__auto__ = e37287;
var statearr_37288_39428 = state_37255;
(statearr_37288_39428[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_37255[(4)]))){
var statearr_37289_39429 = state_37255;
(statearr_37289_39429[(1)] = cljs.core.first((state_37255[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39430 = state_37255;
state_37255 = G__39430;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__ = function(state_37255){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____1.call(this,state_37255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__;
})()
;})(__39410,switch__36797__auto__,c__36997__auto___39415,G__37241_39412,G__37241_39413__$1,n__4613__auto___39409,jobs,results,process,async))
})();
var state__36999__auto__ = (function (){var statearr_37290 = f__36998__auto__();
(statearr_37290[(6)] = c__36997__auto___39415);

return statearr_37290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
});})(__39410,c__36997__auto___39415,G__37241_39412,G__37241_39413__$1,n__4613__auto___39409,jobs,results,process,async))
);


break;
case "async":
var c__36997__auto___39431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__39410,c__36997__auto___39431,G__37241_39412,G__37241_39413__$1,n__4613__auto___39409,jobs,results,process,async){
return (function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = ((function (__39410,c__36997__auto___39431,G__37241_39412,G__37241_39413__$1,n__4613__auto___39409,jobs,results,process,async){
return (function (state_37303){
var state_val_37304 = (state_37303[(1)]);
if((state_val_37304 === (1))){
var state_37303__$1 = state_37303;
var statearr_37306_39433 = state_37303__$1;
(statearr_37306_39433[(2)] = null);

(statearr_37306_39433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (2))){
var state_37303__$1 = state_37303;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37303__$1,(4),jobs);
} else {
if((state_val_37304 === (3))){
var inst_37301 = (state_37303[(2)]);
var state_37303__$1 = state_37303;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37303__$1,inst_37301);
} else {
if((state_val_37304 === (4))){
var inst_37293 = (state_37303[(2)]);
var inst_37294 = async(inst_37293);
var state_37303__$1 = state_37303;
if(cljs.core.truth_(inst_37294)){
var statearr_37309_39435 = state_37303__$1;
(statearr_37309_39435[(1)] = (5));

} else {
var statearr_37310_39436 = state_37303__$1;
(statearr_37310_39436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (5))){
var state_37303__$1 = state_37303;
var statearr_37311_39437 = state_37303__$1;
(statearr_37311_39437[(2)] = null);

(statearr_37311_39437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (6))){
var state_37303__$1 = state_37303;
var statearr_37312_39438 = state_37303__$1;
(statearr_37312_39438[(2)] = null);

(statearr_37312_39438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37304 === (7))){
var inst_37299 = (state_37303[(2)]);
var state_37303__$1 = state_37303;
var statearr_37313_39439 = state_37303__$1;
(statearr_37313_39439[(2)] = inst_37299);

(statearr_37313_39439[(1)] = (3));


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
});})(__39410,c__36997__auto___39431,G__37241_39412,G__37241_39413__$1,n__4613__auto___39409,jobs,results,process,async))
;
return ((function (__39410,switch__36797__auto__,c__36997__auto___39431,G__37241_39412,G__37241_39413__$1,n__4613__auto___39409,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____0 = (function (){
var statearr_37314 = [null,null,null,null,null,null,null];
(statearr_37314[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__);

(statearr_37314[(1)] = (1));

return statearr_37314;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____1 = (function (state_37303){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_37303);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e37315){var ex__36801__auto__ = e37315;
var statearr_37316_39442 = state_37303;
(statearr_37316_39442[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_37303[(4)]))){
var statearr_37317_39443 = state_37303;
(statearr_37317_39443[(1)] = cljs.core.first((state_37303[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39444 = state_37303;
state_37303 = G__39444;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__ = function(state_37303){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____1.call(this,state_37303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__;
})()
;})(__39410,switch__36797__auto__,c__36997__auto___39431,G__37241_39412,G__37241_39413__$1,n__4613__auto___39409,jobs,results,process,async))
})();
var state__36999__auto__ = (function (){var statearr_37323 = f__36998__auto__();
(statearr_37323[(6)] = c__36997__auto___39431);

return statearr_37323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
});})(__39410,c__36997__auto___39431,G__37241_39412,G__37241_39413__$1,n__4613__auto___39409,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37241_39413__$1)].join('')));

}

var G__39447 = (__39410 + (1));
__39410 = G__39447;
continue;
} else {
}
break;
}

var c__36997__auto___39448 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_37361){
var state_val_37362 = (state_37361[(1)]);
if((state_val_37362 === (7))){
var inst_37357 = (state_37361[(2)]);
var state_37361__$1 = state_37361;
var statearr_37373_39452 = state_37361__$1;
(statearr_37373_39452[(2)] = inst_37357);

(statearr_37373_39452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37362 === (1))){
var state_37361__$1 = state_37361;
var statearr_37380_39453 = state_37361__$1;
(statearr_37380_39453[(2)] = null);

(statearr_37380_39453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37362 === (4))){
var inst_37337 = (state_37361[(7)]);
var inst_37337__$1 = (state_37361[(2)]);
var inst_37338 = (inst_37337__$1 == null);
var state_37361__$1 = (function (){var statearr_37386 = state_37361;
(statearr_37386[(7)] = inst_37337__$1);

return statearr_37386;
})();
if(cljs.core.truth_(inst_37338)){
var statearr_37387_39454 = state_37361__$1;
(statearr_37387_39454[(1)] = (5));

} else {
var statearr_37388_39455 = state_37361__$1;
(statearr_37388_39455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37362 === (6))){
var inst_37337 = (state_37361[(7)]);
var inst_37347 = (state_37361[(8)]);
var inst_37347__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_37348 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37349 = [inst_37337,inst_37347__$1];
var inst_37350 = (new cljs.core.PersistentVector(null,2,(5),inst_37348,inst_37349,null));
var state_37361__$1 = (function (){var statearr_37392 = state_37361;
(statearr_37392[(8)] = inst_37347__$1);

return statearr_37392;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37361__$1,(8),jobs,inst_37350);
} else {
if((state_val_37362 === (3))){
var inst_37359 = (state_37361[(2)]);
var state_37361__$1 = state_37361;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37361__$1,inst_37359);
} else {
if((state_val_37362 === (2))){
var state_37361__$1 = state_37361;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37361__$1,(4),from);
} else {
if((state_val_37362 === (9))){
var inst_37354 = (state_37361[(2)]);
var state_37361__$1 = (function (){var statearr_37417 = state_37361;
(statearr_37417[(9)] = inst_37354);

return statearr_37417;
})();
var statearr_37421_39458 = state_37361__$1;
(statearr_37421_39458[(2)] = null);

(statearr_37421_39458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37362 === (5))){
var inst_37341 = cljs.core.async.close_BANG_(jobs);
var state_37361__$1 = state_37361;
var statearr_37422_39462 = state_37361__$1;
(statearr_37422_39462[(2)] = inst_37341);

(statearr_37422_39462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37362 === (8))){
var inst_37347 = (state_37361[(8)]);
var inst_37352 = (state_37361[(2)]);
var state_37361__$1 = (function (){var statearr_37423 = state_37361;
(statearr_37423[(10)] = inst_37352);

return statearr_37423;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37361__$1,(9),results,inst_37347);
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
var cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____0 = (function (){
var statearr_37424 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37424[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__);

(statearr_37424[(1)] = (1));

return statearr_37424;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____1 = (function (state_37361){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_37361);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e37428){var ex__36801__auto__ = e37428;
var statearr_37429_39474 = state_37361;
(statearr_37429_39474[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_37361[(4)]))){
var statearr_37430_39476 = state_37361;
(statearr_37430_39476[(1)] = cljs.core.first((state_37361[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39477 = state_37361;
state_37361 = G__39477;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__ = function(state_37361){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____1.call(this,state_37361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_37431 = f__36998__auto__();
(statearr_37431[(6)] = c__36997__auto___39448);

return statearr_37431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
}));


var c__36997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_37482){
var state_val_37483 = (state_37482[(1)]);
if((state_val_37483 === (7))){
var inst_37478 = (state_37482[(2)]);
var state_37482__$1 = state_37482;
var statearr_37484_39485 = state_37482__$1;
(statearr_37484_39485[(2)] = inst_37478);

(statearr_37484_39485[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (20))){
var state_37482__$1 = state_37482;
var statearr_37485_39489 = state_37482__$1;
(statearr_37485_39489[(2)] = null);

(statearr_37485_39489[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (1))){
var state_37482__$1 = state_37482;
var statearr_37486_39490 = state_37482__$1;
(statearr_37486_39490[(2)] = null);

(statearr_37486_39490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (4))){
var inst_37434 = (state_37482[(7)]);
var inst_37434__$1 = (state_37482[(2)]);
var inst_37436 = (inst_37434__$1 == null);
var state_37482__$1 = (function (){var statearr_37487 = state_37482;
(statearr_37487[(7)] = inst_37434__$1);

return statearr_37487;
})();
if(cljs.core.truth_(inst_37436)){
var statearr_37488_39491 = state_37482__$1;
(statearr_37488_39491[(1)] = (5));

} else {
var statearr_37489_39493 = state_37482__$1;
(statearr_37489_39493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (15))){
var inst_37451 = (state_37482[(8)]);
var state_37482__$1 = state_37482;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37482__$1,(18),to,inst_37451);
} else {
if((state_val_37483 === (21))){
var inst_37473 = (state_37482[(2)]);
var state_37482__$1 = state_37482;
var statearr_37494_39497 = state_37482__$1;
(statearr_37494_39497[(2)] = inst_37473);

(statearr_37494_39497[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (13))){
var inst_37475 = (state_37482[(2)]);
var state_37482__$1 = (function (){var statearr_37499 = state_37482;
(statearr_37499[(9)] = inst_37475);

return statearr_37499;
})();
var statearr_37500_39505 = state_37482__$1;
(statearr_37500_39505[(2)] = null);

(statearr_37500_39505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (6))){
var inst_37434 = (state_37482[(7)]);
var state_37482__$1 = state_37482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37482__$1,(11),inst_37434);
} else {
if((state_val_37483 === (17))){
var inst_37468 = (state_37482[(2)]);
var state_37482__$1 = state_37482;
if(cljs.core.truth_(inst_37468)){
var statearr_37505_39509 = state_37482__$1;
(statearr_37505_39509[(1)] = (19));

} else {
var statearr_37506_39510 = state_37482__$1;
(statearr_37506_39510[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (3))){
var inst_37480 = (state_37482[(2)]);
var state_37482__$1 = state_37482;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37482__$1,inst_37480);
} else {
if((state_val_37483 === (12))){
var inst_37447 = (state_37482[(10)]);
var state_37482__$1 = state_37482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37482__$1,(14),inst_37447);
} else {
if((state_val_37483 === (2))){
var state_37482__$1 = state_37482;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37482__$1,(4),results);
} else {
if((state_val_37483 === (19))){
var state_37482__$1 = state_37482;
var statearr_37514_39515 = state_37482__$1;
(statearr_37514_39515[(2)] = null);

(statearr_37514_39515[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (11))){
var inst_37447 = (state_37482[(2)]);
var state_37482__$1 = (function (){var statearr_37515 = state_37482;
(statearr_37515[(10)] = inst_37447);

return statearr_37515;
})();
var statearr_37516_39516 = state_37482__$1;
(statearr_37516_39516[(2)] = null);

(statearr_37516_39516[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (9))){
var state_37482__$1 = state_37482;
var statearr_37519_39517 = state_37482__$1;
(statearr_37519_39517[(2)] = null);

(statearr_37519_39517[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (5))){
var state_37482__$1 = state_37482;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37520_39524 = state_37482__$1;
(statearr_37520_39524[(1)] = (8));

} else {
var statearr_37521_39525 = state_37482__$1;
(statearr_37521_39525[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (14))){
var inst_37451 = (state_37482[(8)]);
var inst_37451__$1 = (state_37482[(2)]);
var inst_37461 = (inst_37451__$1 == null);
var inst_37462 = cljs.core.not(inst_37461);
var state_37482__$1 = (function (){var statearr_37522 = state_37482;
(statearr_37522[(8)] = inst_37451__$1);

return statearr_37522;
})();
if(inst_37462){
var statearr_37523_39526 = state_37482__$1;
(statearr_37523_39526[(1)] = (15));

} else {
var statearr_37524_39527 = state_37482__$1;
(statearr_37524_39527[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (16))){
var state_37482__$1 = state_37482;
var statearr_37525_39528 = state_37482__$1;
(statearr_37525_39528[(2)] = false);

(statearr_37525_39528[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (10))){
var inst_37444 = (state_37482[(2)]);
var state_37482__$1 = state_37482;
var statearr_37529_39529 = state_37482__$1;
(statearr_37529_39529[(2)] = inst_37444);

(statearr_37529_39529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (18))){
var inst_37465 = (state_37482[(2)]);
var state_37482__$1 = state_37482;
var statearr_37530_39530 = state_37482__$1;
(statearr_37530_39530[(2)] = inst_37465);

(statearr_37530_39530[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37483 === (8))){
var inst_37441 = cljs.core.async.close_BANG_(to);
var state_37482__$1 = state_37482;
var statearr_37531_39531 = state_37482__$1;
(statearr_37531_39531[(2)] = inst_37441);

(statearr_37531_39531[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____0 = (function (){
var statearr_37532 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__);

(statearr_37532[(1)] = (1));

return statearr_37532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____1 = (function (state_37482){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_37482);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e37536){var ex__36801__auto__ = e37536;
var statearr_37537_39532 = state_37482;
(statearr_37537_39532[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_37482[(4)]))){
var statearr_37538_39533 = state_37482;
(statearr_37538_39533[(1)] = cljs.core.first((state_37482[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39534 = state_37482;
state_37482 = G__39534;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__ = function(state_37482){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____1.call(this,state_37482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__36798__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_37539 = f__36998__auto__();
(statearr_37539[(6)] = c__36997__auto__);

return statearr_37539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
}));

return c__36997__auto__;
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
var G__37541 = arguments.length;
switch (G__37541) {
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
var G__37549 = arguments.length;
switch (G__37549) {
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
var G__37559 = arguments.length;
switch (G__37559) {
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
var c__36997__auto___39540 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_37588){
var state_val_37589 = (state_37588[(1)]);
if((state_val_37589 === (7))){
var inst_37584 = (state_37588[(2)]);
var state_37588__$1 = state_37588;
var statearr_37591_39541 = state_37588__$1;
(statearr_37591_39541[(2)] = inst_37584);

(statearr_37591_39541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (1))){
var state_37588__$1 = state_37588;
var statearr_37594_39542 = state_37588__$1;
(statearr_37594_39542[(2)] = null);

(statearr_37594_39542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (4))){
var inst_37565 = (state_37588[(7)]);
var inst_37565__$1 = (state_37588[(2)]);
var inst_37566 = (inst_37565__$1 == null);
var state_37588__$1 = (function (){var statearr_37595 = state_37588;
(statearr_37595[(7)] = inst_37565__$1);

return statearr_37595;
})();
if(cljs.core.truth_(inst_37566)){
var statearr_37596_39543 = state_37588__$1;
(statearr_37596_39543[(1)] = (5));

} else {
var statearr_37597_39544 = state_37588__$1;
(statearr_37597_39544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (13))){
var state_37588__$1 = state_37588;
var statearr_37598_39545 = state_37588__$1;
(statearr_37598_39545[(2)] = null);

(statearr_37598_39545[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (6))){
var inst_37565 = (state_37588[(7)]);
var inst_37571 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_37565) : p.call(null,inst_37565));
var state_37588__$1 = state_37588;
if(cljs.core.truth_(inst_37571)){
var statearr_37599_39546 = state_37588__$1;
(statearr_37599_39546[(1)] = (9));

} else {
var statearr_37600_39547 = state_37588__$1;
(statearr_37600_39547[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (3))){
var inst_37586 = (state_37588[(2)]);
var state_37588__$1 = state_37588;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37588__$1,inst_37586);
} else {
if((state_val_37589 === (12))){
var state_37588__$1 = state_37588;
var statearr_37606_39555 = state_37588__$1;
(statearr_37606_39555[(2)] = null);

(statearr_37606_39555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (2))){
var state_37588__$1 = state_37588;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37588__$1,(4),ch);
} else {
if((state_val_37589 === (11))){
var inst_37565 = (state_37588[(7)]);
var inst_37575 = (state_37588[(2)]);
var state_37588__$1 = state_37588;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37588__$1,(8),inst_37575,inst_37565);
} else {
if((state_val_37589 === (9))){
var state_37588__$1 = state_37588;
var statearr_37608_39556 = state_37588__$1;
(statearr_37608_39556[(2)] = tc);

(statearr_37608_39556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (5))){
var inst_37568 = cljs.core.async.close_BANG_(tc);
var inst_37569 = cljs.core.async.close_BANG_(fc);
var state_37588__$1 = (function (){var statearr_37609 = state_37588;
(statearr_37609[(8)] = inst_37568);

return statearr_37609;
})();
var statearr_37610_39557 = state_37588__$1;
(statearr_37610_39557[(2)] = inst_37569);

(statearr_37610_39557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (14))){
var inst_37582 = (state_37588[(2)]);
var state_37588__$1 = state_37588;
var statearr_37611_39561 = state_37588__$1;
(statearr_37611_39561[(2)] = inst_37582);

(statearr_37611_39561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (10))){
var state_37588__$1 = state_37588;
var statearr_37612_39562 = state_37588__$1;
(statearr_37612_39562[(2)] = fc);

(statearr_37612_39562[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37589 === (8))){
var inst_37577 = (state_37588[(2)]);
var state_37588__$1 = state_37588;
if(cljs.core.truth_(inst_37577)){
var statearr_37619_39563 = state_37588__$1;
(statearr_37619_39563[(1)] = (12));

} else {
var statearr_37620_39564 = state_37588__$1;
(statearr_37620_39564[(1)] = (13));

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
var cljs$core$async$state_machine__36798__auto__ = null;
var cljs$core$async$state_machine__36798__auto____0 = (function (){
var statearr_37623 = [null,null,null,null,null,null,null,null,null];
(statearr_37623[(0)] = cljs$core$async$state_machine__36798__auto__);

(statearr_37623[(1)] = (1));

return statearr_37623;
});
var cljs$core$async$state_machine__36798__auto____1 = (function (state_37588){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_37588);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e37624){var ex__36801__auto__ = e37624;
var statearr_37625_39571 = state_37588;
(statearr_37625_39571[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_37588[(4)]))){
var statearr_37626_39572 = state_37588;
(statearr_37626_39572[(1)] = cljs.core.first((state_37588[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39576 = state_37588;
state_37588 = G__39576;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$state_machine__36798__auto__ = function(state_37588){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36798__auto____1.call(this,state_37588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36798__auto____0;
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36798__auto____1;
return cljs$core$async$state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_37629 = f__36998__auto__();
(statearr_37629[(6)] = c__36997__auto___39540);

return statearr_37629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
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
var c__36997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_37655){
var state_val_37656 = (state_37655[(1)]);
if((state_val_37656 === (7))){
var inst_37650 = (state_37655[(2)]);
var state_37655__$1 = state_37655;
var statearr_37659_39581 = state_37655__$1;
(statearr_37659_39581[(2)] = inst_37650);

(statearr_37659_39581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (1))){
var inst_37633 = init;
var inst_37634 = inst_37633;
var state_37655__$1 = (function (){var statearr_37660 = state_37655;
(statearr_37660[(7)] = inst_37634);

return statearr_37660;
})();
var statearr_37661_39585 = state_37655__$1;
(statearr_37661_39585[(2)] = null);

(statearr_37661_39585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (4))){
var inst_37637 = (state_37655[(8)]);
var inst_37637__$1 = (state_37655[(2)]);
var inst_37638 = (inst_37637__$1 == null);
var state_37655__$1 = (function (){var statearr_37662 = state_37655;
(statearr_37662[(8)] = inst_37637__$1);

return statearr_37662;
})();
if(cljs.core.truth_(inst_37638)){
var statearr_37663_39590 = state_37655__$1;
(statearr_37663_39590[(1)] = (5));

} else {
var statearr_37664_39602 = state_37655__$1;
(statearr_37664_39602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (6))){
var inst_37634 = (state_37655[(7)]);
var inst_37641 = (state_37655[(9)]);
var inst_37637 = (state_37655[(8)]);
var inst_37641__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_37634,inst_37637) : f.call(null,inst_37634,inst_37637));
var inst_37642 = cljs.core.reduced_QMARK_(inst_37641__$1);
var state_37655__$1 = (function (){var statearr_37665 = state_37655;
(statearr_37665[(9)] = inst_37641__$1);

return statearr_37665;
})();
if(inst_37642){
var statearr_37666_39606 = state_37655__$1;
(statearr_37666_39606[(1)] = (8));

} else {
var statearr_37667_39607 = state_37655__$1;
(statearr_37667_39607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (3))){
var inst_37652 = (state_37655[(2)]);
var state_37655__$1 = state_37655;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37655__$1,inst_37652);
} else {
if((state_val_37656 === (2))){
var state_37655__$1 = state_37655;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37655__$1,(4),ch);
} else {
if((state_val_37656 === (9))){
var inst_37641 = (state_37655[(9)]);
var inst_37634 = inst_37641;
var state_37655__$1 = (function (){var statearr_37669 = state_37655;
(statearr_37669[(7)] = inst_37634);

return statearr_37669;
})();
var statearr_37670_39612 = state_37655__$1;
(statearr_37670_39612[(2)] = null);

(statearr_37670_39612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (5))){
var inst_37634 = (state_37655[(7)]);
var state_37655__$1 = state_37655;
var statearr_37671_39614 = state_37655__$1;
(statearr_37671_39614[(2)] = inst_37634);

(statearr_37671_39614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (10))){
var inst_37648 = (state_37655[(2)]);
var state_37655__$1 = state_37655;
var statearr_37673_39615 = state_37655__$1;
(statearr_37673_39615[(2)] = inst_37648);

(statearr_37673_39615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37656 === (8))){
var inst_37641 = (state_37655[(9)]);
var inst_37644 = cljs.core.deref(inst_37641);
var state_37655__$1 = state_37655;
var statearr_37674_39616 = state_37655__$1;
(statearr_37674_39616[(2)] = inst_37644);

(statearr_37674_39616[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__36798__auto__ = null;
var cljs$core$async$reduce_$_state_machine__36798__auto____0 = (function (){
var statearr_37679 = [null,null,null,null,null,null,null,null,null,null];
(statearr_37679[(0)] = cljs$core$async$reduce_$_state_machine__36798__auto__);

(statearr_37679[(1)] = (1));

return statearr_37679;
});
var cljs$core$async$reduce_$_state_machine__36798__auto____1 = (function (state_37655){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_37655);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e37681){var ex__36801__auto__ = e37681;
var statearr_37682_39618 = state_37655;
(statearr_37682_39618[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_37655[(4)]))){
var statearr_37683_39619 = state_37655;
(statearr_37683_39619[(1)] = cljs.core.first((state_37655[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39620 = state_37655;
state_37655 = G__39620;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__36798__auto__ = function(state_37655){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__36798__auto____1.call(this,state_37655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__36798__auto____0;
cljs$core$async$reduce_$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__36798__auto____1;
return cljs$core$async$reduce_$_state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_37693 = f__36998__auto__();
(statearr_37693[(6)] = c__36997__auto__);

return statearr_37693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
}));

return c__36997__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__36997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_37711){
var state_val_37712 = (state_37711[(1)]);
if((state_val_37712 === (1))){
var inst_37706 = cljs.core.async.reduce(f__$1,init,ch);
var state_37711__$1 = state_37711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37711__$1,(2),inst_37706);
} else {
if((state_val_37712 === (2))){
var inst_37708 = (state_37711[(2)]);
var inst_37709 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_37708) : f__$1.call(null,inst_37708));
var state_37711__$1 = state_37711;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37711__$1,inst_37709);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__36798__auto__ = null;
var cljs$core$async$transduce_$_state_machine__36798__auto____0 = (function (){
var statearr_37714 = [null,null,null,null,null,null,null];
(statearr_37714[(0)] = cljs$core$async$transduce_$_state_machine__36798__auto__);

(statearr_37714[(1)] = (1));

return statearr_37714;
});
var cljs$core$async$transduce_$_state_machine__36798__auto____1 = (function (state_37711){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_37711);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e37715){var ex__36801__auto__ = e37715;
var statearr_37716_39621 = state_37711;
(statearr_37716_39621[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_37711[(4)]))){
var statearr_37717_39622 = state_37711;
(statearr_37717_39622[(1)] = cljs.core.first((state_37711[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39623 = state_37711;
state_37711 = G__39623;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__36798__auto__ = function(state_37711){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__36798__auto____1.call(this,state_37711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__36798__auto____0;
cljs$core$async$transduce_$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__36798__auto____1;
return cljs$core$async$transduce_$_state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_37719 = f__36998__auto__();
(statearr_37719[(6)] = c__36997__auto__);

return statearr_37719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
}));

return c__36997__auto__;
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
var G__37721 = arguments.length;
switch (G__37721) {
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
var c__36997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_37747){
var state_val_37748 = (state_37747[(1)]);
if((state_val_37748 === (7))){
var inst_37729 = (state_37747[(2)]);
var state_37747__$1 = state_37747;
var statearr_37750_39625 = state_37747__$1;
(statearr_37750_39625[(2)] = inst_37729);

(statearr_37750_39625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37748 === (1))){
var inst_37723 = cljs.core.seq(coll);
var inst_37724 = inst_37723;
var state_37747__$1 = (function (){var statearr_37751 = state_37747;
(statearr_37751[(7)] = inst_37724);

return statearr_37751;
})();
var statearr_37752_39628 = state_37747__$1;
(statearr_37752_39628[(2)] = null);

(statearr_37752_39628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37748 === (4))){
var inst_37724 = (state_37747[(7)]);
var inst_37727 = cljs.core.first(inst_37724);
var state_37747__$1 = state_37747;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_37747__$1,(7),ch,inst_37727);
} else {
if((state_val_37748 === (13))){
var inst_37741 = (state_37747[(2)]);
var state_37747__$1 = state_37747;
var statearr_37753_39629 = state_37747__$1;
(statearr_37753_39629[(2)] = inst_37741);

(statearr_37753_39629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37748 === (6))){
var inst_37732 = (state_37747[(2)]);
var state_37747__$1 = state_37747;
if(cljs.core.truth_(inst_37732)){
var statearr_37754_39630 = state_37747__$1;
(statearr_37754_39630[(1)] = (8));

} else {
var statearr_37755_39631 = state_37747__$1;
(statearr_37755_39631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37748 === (3))){
var inst_37745 = (state_37747[(2)]);
var state_37747__$1 = state_37747;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37747__$1,inst_37745);
} else {
if((state_val_37748 === (12))){
var state_37747__$1 = state_37747;
var statearr_37757_39633 = state_37747__$1;
(statearr_37757_39633[(2)] = null);

(statearr_37757_39633[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37748 === (2))){
var inst_37724 = (state_37747[(7)]);
var state_37747__$1 = state_37747;
if(cljs.core.truth_(inst_37724)){
var statearr_37758_39634 = state_37747__$1;
(statearr_37758_39634[(1)] = (4));

} else {
var statearr_37759_39635 = state_37747__$1;
(statearr_37759_39635[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37748 === (11))){
var inst_37738 = cljs.core.async.close_BANG_(ch);
var state_37747__$1 = state_37747;
var statearr_37760_39638 = state_37747__$1;
(statearr_37760_39638[(2)] = inst_37738);

(statearr_37760_39638[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37748 === (9))){
var state_37747__$1 = state_37747;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37761_39640 = state_37747__$1;
(statearr_37761_39640[(1)] = (11));

} else {
var statearr_37762_39641 = state_37747__$1;
(statearr_37762_39641[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37748 === (5))){
var inst_37724 = (state_37747[(7)]);
var state_37747__$1 = state_37747;
var statearr_37763_39642 = state_37747__$1;
(statearr_37763_39642[(2)] = inst_37724);

(statearr_37763_39642[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37748 === (10))){
var inst_37743 = (state_37747[(2)]);
var state_37747__$1 = state_37747;
var statearr_37764_39646 = state_37747__$1;
(statearr_37764_39646[(2)] = inst_37743);

(statearr_37764_39646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37748 === (8))){
var inst_37724 = (state_37747[(7)]);
var inst_37734 = cljs.core.next(inst_37724);
var inst_37724__$1 = inst_37734;
var state_37747__$1 = (function (){var statearr_37766 = state_37747;
(statearr_37766[(7)] = inst_37724__$1);

return statearr_37766;
})();
var statearr_37767_39648 = state_37747__$1;
(statearr_37767_39648[(2)] = null);

(statearr_37767_39648[(1)] = (2));


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
var cljs$core$async$state_machine__36798__auto__ = null;
var cljs$core$async$state_machine__36798__auto____0 = (function (){
var statearr_37768 = [null,null,null,null,null,null,null,null];
(statearr_37768[(0)] = cljs$core$async$state_machine__36798__auto__);

(statearr_37768[(1)] = (1));

return statearr_37768;
});
var cljs$core$async$state_machine__36798__auto____1 = (function (state_37747){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_37747);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e37769){var ex__36801__auto__ = e37769;
var statearr_37770_39660 = state_37747;
(statearr_37770_39660[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_37747[(4)]))){
var statearr_37771_39661 = state_37747;
(statearr_37771_39661[(1)] = cljs.core.first((state_37747[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39663 = state_37747;
state_37747 = G__39663;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$state_machine__36798__auto__ = function(state_37747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36798__auto____1.call(this,state_37747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36798__auto____0;
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36798__auto____1;
return cljs$core$async$state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_37772 = f__36998__auto__();
(statearr_37772[(6)] = c__36997__auto__);

return statearr_37772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
}));

return c__36997__auto__;
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
var G__37787 = arguments.length;
switch (G__37787) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_39666 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_39666(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_39674 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_39674(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_39690 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_39690(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_39699 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_39699(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37800 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37800 = (function (ch,cs,meta37801){
this.ch = ch;
this.cs = cs;
this.meta37801 = meta37801;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async37800.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37802,meta37801__$1){
var self__ = this;
var _37802__$1 = this;
return (new cljs.core.async.t_cljs$core$async37800(self__.ch,self__.cs,meta37801__$1));
}));

(cljs.core.async.t_cljs$core$async37800.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37802){
var self__ = this;
var _37802__$1 = this;
return self__.meta37801;
}));

(cljs.core.async.t_cljs$core$async37800.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37800.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async37800.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async37800.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async37800.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async37800.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async37800.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta37801","meta37801",1818015164,null)], null);
}));

(cljs.core.async.t_cljs$core$async37800.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async37800.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37800");

(cljs.core.async.t_cljs$core$async37800.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async37800");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37800.
 */
cljs.core.async.__GT_t_cljs$core$async37800 = (function cljs$core$async$mult_$___GT_t_cljs$core$async37800(ch__$1,cs__$1,meta37801){
return (new cljs.core.async.t_cljs$core$async37800(ch__$1,cs__$1,meta37801));
});

}

return (new cljs.core.async.t_cljs$core$async37800(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__36997__auto___39717 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_37939){
var state_val_37940 = (state_37939[(1)]);
if((state_val_37940 === (7))){
var inst_37934 = (state_37939[(2)]);
var state_37939__$1 = state_37939;
var statearr_37941_39718 = state_37939__$1;
(statearr_37941_39718[(2)] = inst_37934);

(statearr_37941_39718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (20))){
var inst_37838 = (state_37939[(7)]);
var inst_37850 = cljs.core.first(inst_37838);
var inst_37851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37850,(0),null);
var inst_37852 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37850,(1),null);
var state_37939__$1 = (function (){var statearr_37942 = state_37939;
(statearr_37942[(8)] = inst_37851);

return statearr_37942;
})();
if(cljs.core.truth_(inst_37852)){
var statearr_37943_39719 = state_37939__$1;
(statearr_37943_39719[(1)] = (22));

} else {
var statearr_37944_39720 = state_37939__$1;
(statearr_37944_39720[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (27))){
var inst_37807 = (state_37939[(9)]);
var inst_37881 = (state_37939[(10)]);
var inst_37888 = (state_37939[(11)]);
var inst_37883 = (state_37939[(12)]);
var inst_37888__$1 = cljs.core._nth(inst_37881,inst_37883);
var inst_37889 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37888__$1,inst_37807,done);
var state_37939__$1 = (function (){var statearr_37945 = state_37939;
(statearr_37945[(11)] = inst_37888__$1);

return statearr_37945;
})();
if(cljs.core.truth_(inst_37889)){
var statearr_37946_39727 = state_37939__$1;
(statearr_37946_39727[(1)] = (30));

} else {
var statearr_37947_39728 = state_37939__$1;
(statearr_37947_39728[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (1))){
var state_37939__$1 = state_37939;
var statearr_37948_39729 = state_37939__$1;
(statearr_37948_39729[(2)] = null);

(statearr_37948_39729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (24))){
var inst_37838 = (state_37939[(7)]);
var inst_37857 = (state_37939[(2)]);
var inst_37858 = cljs.core.next(inst_37838);
var inst_37816 = inst_37858;
var inst_37817 = null;
var inst_37818 = (0);
var inst_37819 = (0);
var state_37939__$1 = (function (){var statearr_37950 = state_37939;
(statearr_37950[(13)] = inst_37817);

(statearr_37950[(14)] = inst_37816);

(statearr_37950[(15)] = inst_37819);

(statearr_37950[(16)] = inst_37857);

(statearr_37950[(17)] = inst_37818);

return statearr_37950;
})();
var statearr_37951_39737 = state_37939__$1;
(statearr_37951_39737[(2)] = null);

(statearr_37951_39737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (39))){
var state_37939__$1 = state_37939;
var statearr_37955_39739 = state_37939__$1;
(statearr_37955_39739[(2)] = null);

(statearr_37955_39739[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (4))){
var inst_37807 = (state_37939[(9)]);
var inst_37807__$1 = (state_37939[(2)]);
var inst_37808 = (inst_37807__$1 == null);
var state_37939__$1 = (function (){var statearr_37956 = state_37939;
(statearr_37956[(9)] = inst_37807__$1);

return statearr_37956;
})();
if(cljs.core.truth_(inst_37808)){
var statearr_37957_39740 = state_37939__$1;
(statearr_37957_39740[(1)] = (5));

} else {
var statearr_37958_39741 = state_37939__$1;
(statearr_37958_39741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (15))){
var inst_37817 = (state_37939[(13)]);
var inst_37816 = (state_37939[(14)]);
var inst_37819 = (state_37939[(15)]);
var inst_37818 = (state_37939[(17)]);
var inst_37834 = (state_37939[(2)]);
var inst_37835 = (inst_37819 + (1));
var tmp37952 = inst_37817;
var tmp37953 = inst_37816;
var tmp37954 = inst_37818;
var inst_37816__$1 = tmp37953;
var inst_37817__$1 = tmp37952;
var inst_37818__$1 = tmp37954;
var inst_37819__$1 = inst_37835;
var state_37939__$1 = (function (){var statearr_37960 = state_37939;
(statearr_37960[(13)] = inst_37817__$1);

(statearr_37960[(14)] = inst_37816__$1);

(statearr_37960[(15)] = inst_37819__$1);

(statearr_37960[(17)] = inst_37818__$1);

(statearr_37960[(18)] = inst_37834);

return statearr_37960;
})();
var statearr_37961_39743 = state_37939__$1;
(statearr_37961_39743[(2)] = null);

(statearr_37961_39743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (21))){
var inst_37861 = (state_37939[(2)]);
var state_37939__$1 = state_37939;
var statearr_37965_39750 = state_37939__$1;
(statearr_37965_39750[(2)] = inst_37861);

(statearr_37965_39750[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (31))){
var inst_37888 = (state_37939[(11)]);
var inst_37892 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37888);
var state_37939__$1 = state_37939;
var statearr_37966_39751 = state_37939__$1;
(statearr_37966_39751[(2)] = inst_37892);

(statearr_37966_39751[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (32))){
var inst_37882 = (state_37939[(19)]);
var inst_37880 = (state_37939[(20)]);
var inst_37881 = (state_37939[(10)]);
var inst_37883 = (state_37939[(12)]);
var inst_37894 = (state_37939[(2)]);
var inst_37895 = (inst_37883 + (1));
var tmp37962 = inst_37882;
var tmp37963 = inst_37880;
var tmp37964 = inst_37881;
var inst_37880__$1 = tmp37963;
var inst_37881__$1 = tmp37964;
var inst_37882__$1 = tmp37962;
var inst_37883__$1 = inst_37895;
var state_37939__$1 = (function (){var statearr_37967 = state_37939;
(statearr_37967[(19)] = inst_37882__$1);

(statearr_37967[(20)] = inst_37880__$1);

(statearr_37967[(21)] = inst_37894);

(statearr_37967[(10)] = inst_37881__$1);

(statearr_37967[(12)] = inst_37883__$1);

return statearr_37967;
})();
var statearr_37969_39761 = state_37939__$1;
(statearr_37969_39761[(2)] = null);

(statearr_37969_39761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (40))){
var inst_37907 = (state_37939[(22)]);
var inst_37911 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_37907);
var state_37939__$1 = state_37939;
var statearr_37970_39766 = state_37939__$1;
(statearr_37970_39766[(2)] = inst_37911);

(statearr_37970_39766[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (33))){
var inst_37898 = (state_37939[(23)]);
var inst_37900 = cljs.core.chunked_seq_QMARK_(inst_37898);
var state_37939__$1 = state_37939;
if(inst_37900){
var statearr_37971_39767 = state_37939__$1;
(statearr_37971_39767[(1)] = (36));

} else {
var statearr_37972_39768 = state_37939__$1;
(statearr_37972_39768[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (13))){
var inst_37828 = (state_37939[(24)]);
var inst_37831 = cljs.core.async.close_BANG_(inst_37828);
var state_37939__$1 = state_37939;
var statearr_37973_39769 = state_37939__$1;
(statearr_37973_39769[(2)] = inst_37831);

(statearr_37973_39769[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (22))){
var inst_37851 = (state_37939[(8)]);
var inst_37854 = cljs.core.async.close_BANG_(inst_37851);
var state_37939__$1 = state_37939;
var statearr_37975_39771 = state_37939__$1;
(statearr_37975_39771[(2)] = inst_37854);

(statearr_37975_39771[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (36))){
var inst_37898 = (state_37939[(23)]);
var inst_37902 = cljs.core.chunk_first(inst_37898);
var inst_37903 = cljs.core.chunk_rest(inst_37898);
var inst_37904 = cljs.core.count(inst_37902);
var inst_37880 = inst_37903;
var inst_37881 = inst_37902;
var inst_37882 = inst_37904;
var inst_37883 = (0);
var state_37939__$1 = (function (){var statearr_37976 = state_37939;
(statearr_37976[(19)] = inst_37882);

(statearr_37976[(20)] = inst_37880);

(statearr_37976[(10)] = inst_37881);

(statearr_37976[(12)] = inst_37883);

return statearr_37976;
})();
var statearr_37977_39779 = state_37939__$1;
(statearr_37977_39779[(2)] = null);

(statearr_37977_39779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (41))){
var inst_37898 = (state_37939[(23)]);
var inst_37913 = (state_37939[(2)]);
var inst_37914 = cljs.core.next(inst_37898);
var inst_37880 = inst_37914;
var inst_37881 = null;
var inst_37882 = (0);
var inst_37883 = (0);
var state_37939__$1 = (function (){var statearr_37978 = state_37939;
(statearr_37978[(19)] = inst_37882);

(statearr_37978[(20)] = inst_37880);

(statearr_37978[(10)] = inst_37881);

(statearr_37978[(25)] = inst_37913);

(statearr_37978[(12)] = inst_37883);

return statearr_37978;
})();
var statearr_37979_39781 = state_37939__$1;
(statearr_37979_39781[(2)] = null);

(statearr_37979_39781[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (43))){
var state_37939__$1 = state_37939;
var statearr_37980_39782 = state_37939__$1;
(statearr_37980_39782[(2)] = null);

(statearr_37980_39782[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (29))){
var inst_37922 = (state_37939[(2)]);
var state_37939__$1 = state_37939;
var statearr_37981_39785 = state_37939__$1;
(statearr_37981_39785[(2)] = inst_37922);

(statearr_37981_39785[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (44))){
var inst_37931 = (state_37939[(2)]);
var state_37939__$1 = (function (){var statearr_37983 = state_37939;
(statearr_37983[(26)] = inst_37931);

return statearr_37983;
})();
var statearr_37984_39786 = state_37939__$1;
(statearr_37984_39786[(2)] = null);

(statearr_37984_39786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (6))){
var inst_37871 = (state_37939[(27)]);
var inst_37870 = cljs.core.deref(cs);
var inst_37871__$1 = cljs.core.keys(inst_37870);
var inst_37872 = cljs.core.count(inst_37871__$1);
var inst_37873 = cljs.core.reset_BANG_(dctr,inst_37872);
var inst_37879 = cljs.core.seq(inst_37871__$1);
var inst_37880 = inst_37879;
var inst_37881 = null;
var inst_37882 = (0);
var inst_37883 = (0);
var state_37939__$1 = (function (){var statearr_37985 = state_37939;
(statearr_37985[(19)] = inst_37882);

(statearr_37985[(20)] = inst_37880);

(statearr_37985[(27)] = inst_37871__$1);

(statearr_37985[(28)] = inst_37873);

(statearr_37985[(10)] = inst_37881);

(statearr_37985[(12)] = inst_37883);

return statearr_37985;
})();
var statearr_37986_39792 = state_37939__$1;
(statearr_37986_39792[(2)] = null);

(statearr_37986_39792[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (28))){
var inst_37898 = (state_37939[(23)]);
var inst_37880 = (state_37939[(20)]);
var inst_37898__$1 = cljs.core.seq(inst_37880);
var state_37939__$1 = (function (){var statearr_37987 = state_37939;
(statearr_37987[(23)] = inst_37898__$1);

return statearr_37987;
})();
if(inst_37898__$1){
var statearr_37988_39796 = state_37939__$1;
(statearr_37988_39796[(1)] = (33));

} else {
var statearr_37989_39801 = state_37939__$1;
(statearr_37989_39801[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (25))){
var inst_37882 = (state_37939[(19)]);
var inst_37883 = (state_37939[(12)]);
var inst_37885 = (inst_37883 < inst_37882);
var inst_37886 = inst_37885;
var state_37939__$1 = state_37939;
if(cljs.core.truth_(inst_37886)){
var statearr_37990_39802 = state_37939__$1;
(statearr_37990_39802[(1)] = (27));

} else {
var statearr_37991_39805 = state_37939__$1;
(statearr_37991_39805[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (34))){
var state_37939__$1 = state_37939;
var statearr_37992_39807 = state_37939__$1;
(statearr_37992_39807[(2)] = null);

(statearr_37992_39807[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (17))){
var state_37939__$1 = state_37939;
var statearr_37993_39809 = state_37939__$1;
(statearr_37993_39809[(2)] = null);

(statearr_37993_39809[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (3))){
var inst_37936 = (state_37939[(2)]);
var state_37939__$1 = state_37939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_37939__$1,inst_37936);
} else {
if((state_val_37940 === (12))){
var inst_37866 = (state_37939[(2)]);
var state_37939__$1 = state_37939;
var statearr_37995_39810 = state_37939__$1;
(statearr_37995_39810[(2)] = inst_37866);

(statearr_37995_39810[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (2))){
var state_37939__$1 = state_37939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37939__$1,(4),ch);
} else {
if((state_val_37940 === (23))){
var state_37939__$1 = state_37939;
var statearr_37996_39811 = state_37939__$1;
(statearr_37996_39811[(2)] = null);

(statearr_37996_39811[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (35))){
var inst_37920 = (state_37939[(2)]);
var state_37939__$1 = state_37939;
var statearr_37997_39812 = state_37939__$1;
(statearr_37997_39812[(2)] = inst_37920);

(statearr_37997_39812[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (19))){
var inst_37838 = (state_37939[(7)]);
var inst_37842 = cljs.core.chunk_first(inst_37838);
var inst_37843 = cljs.core.chunk_rest(inst_37838);
var inst_37844 = cljs.core.count(inst_37842);
var inst_37816 = inst_37843;
var inst_37817 = inst_37842;
var inst_37818 = inst_37844;
var inst_37819 = (0);
var state_37939__$1 = (function (){var statearr_37998 = state_37939;
(statearr_37998[(13)] = inst_37817);

(statearr_37998[(14)] = inst_37816);

(statearr_37998[(15)] = inst_37819);

(statearr_37998[(17)] = inst_37818);

return statearr_37998;
})();
var statearr_38000_39815 = state_37939__$1;
(statearr_38000_39815[(2)] = null);

(statearr_38000_39815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (11))){
var inst_37816 = (state_37939[(14)]);
var inst_37838 = (state_37939[(7)]);
var inst_37838__$1 = cljs.core.seq(inst_37816);
var state_37939__$1 = (function (){var statearr_38001 = state_37939;
(statearr_38001[(7)] = inst_37838__$1);

return statearr_38001;
})();
if(inst_37838__$1){
var statearr_38002_39825 = state_37939__$1;
(statearr_38002_39825[(1)] = (16));

} else {
var statearr_38003_39826 = state_37939__$1;
(statearr_38003_39826[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (9))){
var inst_37868 = (state_37939[(2)]);
var state_37939__$1 = state_37939;
var statearr_38004_39827 = state_37939__$1;
(statearr_38004_39827[(2)] = inst_37868);

(statearr_38004_39827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (5))){
var inst_37814 = cljs.core.deref(cs);
var inst_37815 = cljs.core.seq(inst_37814);
var inst_37816 = inst_37815;
var inst_37817 = null;
var inst_37818 = (0);
var inst_37819 = (0);
var state_37939__$1 = (function (){var statearr_38005 = state_37939;
(statearr_38005[(13)] = inst_37817);

(statearr_38005[(14)] = inst_37816);

(statearr_38005[(15)] = inst_37819);

(statearr_38005[(17)] = inst_37818);

return statearr_38005;
})();
var statearr_38006_39831 = state_37939__$1;
(statearr_38006_39831[(2)] = null);

(statearr_38006_39831[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (14))){
var state_37939__$1 = state_37939;
var statearr_38008_39832 = state_37939__$1;
(statearr_38008_39832[(2)] = null);

(statearr_38008_39832[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (45))){
var inst_37928 = (state_37939[(2)]);
var state_37939__$1 = state_37939;
var statearr_38009_39833 = state_37939__$1;
(statearr_38009_39833[(2)] = inst_37928);

(statearr_38009_39833[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (26))){
var inst_37871 = (state_37939[(27)]);
var inst_37924 = (state_37939[(2)]);
var inst_37925 = cljs.core.seq(inst_37871);
var state_37939__$1 = (function (){var statearr_38010 = state_37939;
(statearr_38010[(29)] = inst_37924);

return statearr_38010;
})();
if(inst_37925){
var statearr_38011_39836 = state_37939__$1;
(statearr_38011_39836[(1)] = (42));

} else {
var statearr_38012_39837 = state_37939__$1;
(statearr_38012_39837[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (16))){
var inst_37838 = (state_37939[(7)]);
var inst_37840 = cljs.core.chunked_seq_QMARK_(inst_37838);
var state_37939__$1 = state_37939;
if(inst_37840){
var statearr_38013_39840 = state_37939__$1;
(statearr_38013_39840[(1)] = (19));

} else {
var statearr_38014_39841 = state_37939__$1;
(statearr_38014_39841[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (38))){
var inst_37917 = (state_37939[(2)]);
var state_37939__$1 = state_37939;
var statearr_38016_39842 = state_37939__$1;
(statearr_38016_39842[(2)] = inst_37917);

(statearr_38016_39842[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (30))){
var state_37939__$1 = state_37939;
var statearr_38017_39843 = state_37939__$1;
(statearr_38017_39843[(2)] = null);

(statearr_38017_39843[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (10))){
var inst_37817 = (state_37939[(13)]);
var inst_37819 = (state_37939[(15)]);
var inst_37827 = cljs.core._nth(inst_37817,inst_37819);
var inst_37828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37827,(0),null);
var inst_37829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_37827,(1),null);
var state_37939__$1 = (function (){var statearr_38018 = state_37939;
(statearr_38018[(24)] = inst_37828);

return statearr_38018;
})();
if(cljs.core.truth_(inst_37829)){
var statearr_38019_39848 = state_37939__$1;
(statearr_38019_39848[(1)] = (13));

} else {
var statearr_38020_39849 = state_37939__$1;
(statearr_38020_39849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (18))){
var inst_37864 = (state_37939[(2)]);
var state_37939__$1 = state_37939;
var statearr_38021_39850 = state_37939__$1;
(statearr_38021_39850[(2)] = inst_37864);

(statearr_38021_39850[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (42))){
var state_37939__$1 = state_37939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37939__$1,(45),dchan);
} else {
if((state_val_37940 === (37))){
var inst_37898 = (state_37939[(23)]);
var inst_37907 = (state_37939[(22)]);
var inst_37807 = (state_37939[(9)]);
var inst_37907__$1 = cljs.core.first(inst_37898);
var inst_37908 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_37907__$1,inst_37807,done);
var state_37939__$1 = (function (){var statearr_38022 = state_37939;
(statearr_38022[(22)] = inst_37907__$1);

return statearr_38022;
})();
if(cljs.core.truth_(inst_37908)){
var statearr_38024_39852 = state_37939__$1;
(statearr_38024_39852[(1)] = (39));

} else {
var statearr_38025_39853 = state_37939__$1;
(statearr_38025_39853[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37940 === (8))){
var inst_37819 = (state_37939[(15)]);
var inst_37818 = (state_37939[(17)]);
var inst_37821 = (inst_37819 < inst_37818);
var inst_37822 = inst_37821;
var state_37939__$1 = state_37939;
if(cljs.core.truth_(inst_37822)){
var statearr_38026_39854 = state_37939__$1;
(statearr_38026_39854[(1)] = (10));

} else {
var statearr_38027_39855 = state_37939__$1;
(statearr_38027_39855[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__36798__auto__ = null;
var cljs$core$async$mult_$_state_machine__36798__auto____0 = (function (){
var statearr_38028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38028[(0)] = cljs$core$async$mult_$_state_machine__36798__auto__);

(statearr_38028[(1)] = (1));

return statearr_38028;
});
var cljs$core$async$mult_$_state_machine__36798__auto____1 = (function (state_37939){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_37939);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e38029){var ex__36801__auto__ = e38029;
var statearr_38030_39856 = state_37939;
(statearr_38030_39856[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_37939[(4)]))){
var statearr_38031_39857 = state_37939;
(statearr_38031_39857[(1)] = cljs.core.first((state_37939[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39858 = state_37939;
state_37939 = G__39858;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__36798__auto__ = function(state_37939){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__36798__auto____1.call(this,state_37939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__36798__auto____0;
cljs$core$async$mult_$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__36798__auto____1;
return cljs$core$async$mult_$_state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_38033 = f__36998__auto__();
(statearr_38033[(6)] = c__36997__auto___39717);

return statearr_38033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
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
var G__38035 = arguments.length;
switch (G__38035) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_39865 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_39865(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_39868 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_39868(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_39873 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_39873(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_39883 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_39883(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_39888 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_39888(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39896 = arguments.length;
var i__4737__auto___39897 = (0);
while(true){
if((i__4737__auto___39897 < len__4736__auto___39896)){
args__4742__auto__.push((arguments[i__4737__auto___39897]));

var G__39898 = (i__4737__auto___39897 + (1));
i__4737__auto___39897 = G__39898;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38045){
var map__38046 = p__38045;
var map__38046__$1 = (((((!((map__38046 == null))))?(((((map__38046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38046):map__38046);
var opts = map__38046__$1;
var statearr_38048_39911 = state;
(statearr_38048_39911[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_38049_39912 = state;
(statearr_38049_39912[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_38050_39913 = state;
(statearr_38050_39913[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38040){
var G__38041 = cljs.core.first(seq38040);
var seq38040__$1 = cljs.core.next(seq38040);
var G__38043 = cljs.core.first(seq38040__$1);
var seq38040__$2 = cljs.core.next(seq38040__$1);
var G__38044 = cljs.core.first(seq38040__$2);
var seq38040__$3 = cljs.core.next(seq38040__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38041,G__38043,G__38044,seq38040__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38053 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38053 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38054){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38054 = meta38054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38055,meta38054__$1){
var self__ = this;
var _38055__$1 = this;
return (new cljs.core.async.t_cljs$core$async38053(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38054__$1));
}));

(cljs.core.async.t_cljs$core$async38053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38055){
var self__ = this;
var _38055__$1 = this;
return self__.meta38054;
}));

(cljs.core.async.t_cljs$core$async38053.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38053.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async38053.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38053.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38053.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38053.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38053.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38053.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async38053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38054","meta38054",1431086253,null)], null);
}));

(cljs.core.async.t_cljs$core$async38053.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38053");

(cljs.core.async.t_cljs$core$async38053.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38053");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38053.
 */
cljs.core.async.__GT_t_cljs$core$async38053 = (function cljs$core$async$mix_$___GT_t_cljs$core$async38053(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38054){
return (new cljs.core.async.t_cljs$core$async38053(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38054));
});

}

return (new cljs.core.async.t_cljs$core$async38053(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36997__auto___39943 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_38162){
var state_val_38163 = (state_38162[(1)]);
if((state_val_38163 === (7))){
var inst_38075 = (state_38162[(2)]);
var state_38162__$1 = state_38162;
var statearr_38164_39944 = state_38162__$1;
(statearr_38164_39944[(2)] = inst_38075);

(statearr_38164_39944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (20))){
var inst_38087 = (state_38162[(7)]);
var state_38162__$1 = state_38162;
var statearr_38165_39945 = state_38162__$1;
(statearr_38165_39945[(2)] = inst_38087);

(statearr_38165_39945[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (27))){
var state_38162__$1 = state_38162;
var statearr_38166_39947 = state_38162__$1;
(statearr_38166_39947[(2)] = null);

(statearr_38166_39947[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (1))){
var inst_38062 = (state_38162[(8)]);
var inst_38062__$1 = calc_state();
var inst_38064 = (inst_38062__$1 == null);
var inst_38065 = cljs.core.not(inst_38064);
var state_38162__$1 = (function (){var statearr_38167 = state_38162;
(statearr_38167[(8)] = inst_38062__$1);

return statearr_38167;
})();
if(inst_38065){
var statearr_38168_39948 = state_38162__$1;
(statearr_38168_39948[(1)] = (2));

} else {
var statearr_38170_39954 = state_38162__$1;
(statearr_38170_39954[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (24))){
var inst_38112 = (state_38162[(9)]);
var inst_38135 = (state_38162[(10)]);
var inst_38121 = (state_38162[(11)]);
var inst_38135__$1 = (inst_38112.cljs$core$IFn$_invoke$arity$1 ? inst_38112.cljs$core$IFn$_invoke$arity$1(inst_38121) : inst_38112.call(null,inst_38121));
var state_38162__$1 = (function (){var statearr_38171 = state_38162;
(statearr_38171[(10)] = inst_38135__$1);

return statearr_38171;
})();
if(cljs.core.truth_(inst_38135__$1)){
var statearr_38172_39955 = state_38162__$1;
(statearr_38172_39955[(1)] = (29));

} else {
var statearr_38173_39956 = state_38162__$1;
(statearr_38173_39956[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (4))){
var inst_38078 = (state_38162[(2)]);
var state_38162__$1 = state_38162;
if(cljs.core.truth_(inst_38078)){
var statearr_38174_39962 = state_38162__$1;
(statearr_38174_39962[(1)] = (8));

} else {
var statearr_38175_39963 = state_38162__$1;
(statearr_38175_39963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (15))){
var inst_38105 = (state_38162[(2)]);
var state_38162__$1 = state_38162;
if(cljs.core.truth_(inst_38105)){
var statearr_38176_39964 = state_38162__$1;
(statearr_38176_39964[(1)] = (19));

} else {
var statearr_38177_39965 = state_38162__$1;
(statearr_38177_39965[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (21))){
var inst_38111 = (state_38162[(12)]);
var inst_38111__$1 = (state_38162[(2)]);
var inst_38112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38111__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38111__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38111__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38162__$1 = (function (){var statearr_38178 = state_38162;
(statearr_38178[(13)] = inst_38113);

(statearr_38178[(9)] = inst_38112);

(statearr_38178[(12)] = inst_38111__$1);

return statearr_38178;
})();
return cljs.core.async.ioc_alts_BANG_(state_38162__$1,(22),inst_38114);
} else {
if((state_val_38163 === (31))){
var inst_38143 = (state_38162[(2)]);
var state_38162__$1 = state_38162;
if(cljs.core.truth_(inst_38143)){
var statearr_38180_39970 = state_38162__$1;
(statearr_38180_39970[(1)] = (32));

} else {
var statearr_38181_39971 = state_38162__$1;
(statearr_38181_39971[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (32))){
var inst_38120 = (state_38162[(14)]);
var state_38162__$1 = state_38162;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38162__$1,(35),out,inst_38120);
} else {
if((state_val_38163 === (33))){
var inst_38111 = (state_38162[(12)]);
var inst_38087 = inst_38111;
var state_38162__$1 = (function (){var statearr_38182 = state_38162;
(statearr_38182[(7)] = inst_38087);

return statearr_38182;
})();
var statearr_38183_39973 = state_38162__$1;
(statearr_38183_39973[(2)] = null);

(statearr_38183_39973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (13))){
var inst_38087 = (state_38162[(7)]);
var inst_38094 = inst_38087.cljs$lang$protocol_mask$partition0$;
var inst_38095 = (inst_38094 & (64));
var inst_38096 = inst_38087.cljs$core$ISeq$;
var inst_38097 = (cljs.core.PROTOCOL_SENTINEL === inst_38096);
var inst_38098 = ((inst_38095) || (inst_38097));
var state_38162__$1 = state_38162;
if(cljs.core.truth_(inst_38098)){
var statearr_38184_39974 = state_38162__$1;
(statearr_38184_39974[(1)] = (16));

} else {
var statearr_38185_39975 = state_38162__$1;
(statearr_38185_39975[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (22))){
var inst_38120 = (state_38162[(14)]);
var inst_38121 = (state_38162[(11)]);
var inst_38119 = (state_38162[(2)]);
var inst_38120__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38119,(0),null);
var inst_38121__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38119,(1),null);
var inst_38122 = (inst_38120__$1 == null);
var inst_38123 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_38121__$1,change);
var inst_38124 = ((inst_38122) || (inst_38123));
var state_38162__$1 = (function (){var statearr_38186 = state_38162;
(statearr_38186[(14)] = inst_38120__$1);

(statearr_38186[(11)] = inst_38121__$1);

return statearr_38186;
})();
if(cljs.core.truth_(inst_38124)){
var statearr_38187_39981 = state_38162__$1;
(statearr_38187_39981[(1)] = (23));

} else {
var statearr_38189_39982 = state_38162__$1;
(statearr_38189_39982[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (36))){
var inst_38111 = (state_38162[(12)]);
var inst_38087 = inst_38111;
var state_38162__$1 = (function (){var statearr_38190 = state_38162;
(statearr_38190[(7)] = inst_38087);

return statearr_38190;
})();
var statearr_38191_39983 = state_38162__$1;
(statearr_38191_39983[(2)] = null);

(statearr_38191_39983[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (29))){
var inst_38135 = (state_38162[(10)]);
var state_38162__$1 = state_38162;
var statearr_38192_39985 = state_38162__$1;
(statearr_38192_39985[(2)] = inst_38135);

(statearr_38192_39985[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (6))){
var state_38162__$1 = state_38162;
var statearr_38193_39989 = state_38162__$1;
(statearr_38193_39989[(2)] = false);

(statearr_38193_39989[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (28))){
var inst_38131 = (state_38162[(2)]);
var inst_38132 = calc_state();
var inst_38087 = inst_38132;
var state_38162__$1 = (function (){var statearr_38195 = state_38162;
(statearr_38195[(7)] = inst_38087);

(statearr_38195[(15)] = inst_38131);

return statearr_38195;
})();
var statearr_38197_39990 = state_38162__$1;
(statearr_38197_39990[(2)] = null);

(statearr_38197_39990[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (25))){
var inst_38157 = (state_38162[(2)]);
var state_38162__$1 = state_38162;
var statearr_38198_39991 = state_38162__$1;
(statearr_38198_39991[(2)] = inst_38157);

(statearr_38198_39991[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (34))){
var inst_38155 = (state_38162[(2)]);
var state_38162__$1 = state_38162;
var statearr_38199_39999 = state_38162__$1;
(statearr_38199_39999[(2)] = inst_38155);

(statearr_38199_39999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (17))){
var state_38162__$1 = state_38162;
var statearr_38200_40000 = state_38162__$1;
(statearr_38200_40000[(2)] = false);

(statearr_38200_40000[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (3))){
var state_38162__$1 = state_38162;
var statearr_38201_40004 = state_38162__$1;
(statearr_38201_40004[(2)] = false);

(statearr_38201_40004[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (12))){
var inst_38159 = (state_38162[(2)]);
var state_38162__$1 = state_38162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38162__$1,inst_38159);
} else {
if((state_val_38163 === (2))){
var inst_38062 = (state_38162[(8)]);
var inst_38067 = inst_38062.cljs$lang$protocol_mask$partition0$;
var inst_38068 = (inst_38067 & (64));
var inst_38069 = inst_38062.cljs$core$ISeq$;
var inst_38070 = (cljs.core.PROTOCOL_SENTINEL === inst_38069);
var inst_38071 = ((inst_38068) || (inst_38070));
var state_38162__$1 = state_38162;
if(cljs.core.truth_(inst_38071)){
var statearr_38202_40005 = state_38162__$1;
(statearr_38202_40005[(1)] = (5));

} else {
var statearr_38203_40006 = state_38162__$1;
(statearr_38203_40006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (23))){
var inst_38120 = (state_38162[(14)]);
var inst_38126 = (inst_38120 == null);
var state_38162__$1 = state_38162;
if(cljs.core.truth_(inst_38126)){
var statearr_38204_40007 = state_38162__$1;
(statearr_38204_40007[(1)] = (26));

} else {
var statearr_38205_40008 = state_38162__$1;
(statearr_38205_40008[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (35))){
var inst_38146 = (state_38162[(2)]);
var state_38162__$1 = state_38162;
if(cljs.core.truth_(inst_38146)){
var statearr_38208_40009 = state_38162__$1;
(statearr_38208_40009[(1)] = (36));

} else {
var statearr_38209_40010 = state_38162__$1;
(statearr_38209_40010[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (19))){
var inst_38087 = (state_38162[(7)]);
var inst_38107 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38087);
var state_38162__$1 = state_38162;
var statearr_38210_40011 = state_38162__$1;
(statearr_38210_40011[(2)] = inst_38107);

(statearr_38210_40011[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (11))){
var inst_38087 = (state_38162[(7)]);
var inst_38091 = (inst_38087 == null);
var inst_38092 = cljs.core.not(inst_38091);
var state_38162__$1 = state_38162;
if(inst_38092){
var statearr_38211_40012 = state_38162__$1;
(statearr_38211_40012[(1)] = (13));

} else {
var statearr_38212_40013 = state_38162__$1;
(statearr_38212_40013[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (9))){
var inst_38062 = (state_38162[(8)]);
var state_38162__$1 = state_38162;
var statearr_38213_40017 = state_38162__$1;
(statearr_38213_40017[(2)] = inst_38062);

(statearr_38213_40017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (5))){
var state_38162__$1 = state_38162;
var statearr_38214_40018 = state_38162__$1;
(statearr_38214_40018[(2)] = true);

(statearr_38214_40018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (14))){
var state_38162__$1 = state_38162;
var statearr_38215_40019 = state_38162__$1;
(statearr_38215_40019[(2)] = false);

(statearr_38215_40019[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (26))){
var inst_38121 = (state_38162[(11)]);
var inst_38128 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_38121);
var state_38162__$1 = state_38162;
var statearr_38216_40023 = state_38162__$1;
(statearr_38216_40023[(2)] = inst_38128);

(statearr_38216_40023[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (16))){
var state_38162__$1 = state_38162;
var statearr_38217_40024 = state_38162__$1;
(statearr_38217_40024[(2)] = true);

(statearr_38217_40024[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (38))){
var inst_38151 = (state_38162[(2)]);
var state_38162__$1 = state_38162;
var statearr_38218_40025 = state_38162__$1;
(statearr_38218_40025[(2)] = inst_38151);

(statearr_38218_40025[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (30))){
var inst_38113 = (state_38162[(13)]);
var inst_38112 = (state_38162[(9)]);
var inst_38121 = (state_38162[(11)]);
var inst_38138 = cljs.core.empty_QMARK_(inst_38112);
var inst_38139 = (inst_38113.cljs$core$IFn$_invoke$arity$1 ? inst_38113.cljs$core$IFn$_invoke$arity$1(inst_38121) : inst_38113.call(null,inst_38121));
var inst_38140 = cljs.core.not(inst_38139);
var inst_38141 = ((inst_38138) && (inst_38140));
var state_38162__$1 = state_38162;
var statearr_38219_40026 = state_38162__$1;
(statearr_38219_40026[(2)] = inst_38141);

(statearr_38219_40026[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (10))){
var inst_38062 = (state_38162[(8)]);
var inst_38083 = (state_38162[(2)]);
var inst_38084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38083,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38083,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38083,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38087 = inst_38062;
var state_38162__$1 = (function (){var statearr_38220 = state_38162;
(statearr_38220[(7)] = inst_38087);

(statearr_38220[(16)] = inst_38084);

(statearr_38220[(17)] = inst_38086);

(statearr_38220[(18)] = inst_38085);

return statearr_38220;
})();
var statearr_38221_40027 = state_38162__$1;
(statearr_38221_40027[(2)] = null);

(statearr_38221_40027[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (18))){
var inst_38102 = (state_38162[(2)]);
var state_38162__$1 = state_38162;
var statearr_38224_40028 = state_38162__$1;
(statearr_38224_40028[(2)] = inst_38102);

(statearr_38224_40028[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (37))){
var state_38162__$1 = state_38162;
var statearr_38225_40029 = state_38162__$1;
(statearr_38225_40029[(2)] = null);

(statearr_38225_40029[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38163 === (8))){
var inst_38062 = (state_38162[(8)]);
var inst_38080 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_38062);
var state_38162__$1 = state_38162;
var statearr_38226_40030 = state_38162__$1;
(statearr_38226_40030[(2)] = inst_38080);

(statearr_38226_40030[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__36798__auto__ = null;
var cljs$core$async$mix_$_state_machine__36798__auto____0 = (function (){
var statearr_38227 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38227[(0)] = cljs$core$async$mix_$_state_machine__36798__auto__);

(statearr_38227[(1)] = (1));

return statearr_38227;
});
var cljs$core$async$mix_$_state_machine__36798__auto____1 = (function (state_38162){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_38162);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e38228){var ex__36801__auto__ = e38228;
var statearr_38229_40032 = state_38162;
(statearr_38229_40032[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_38162[(4)]))){
var statearr_38231_40033 = state_38162;
(statearr_38231_40033[(1)] = cljs.core.first((state_38162[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40034 = state_38162;
state_38162 = G__40034;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__36798__auto__ = function(state_38162){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__36798__auto____1.call(this,state_38162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__36798__auto____0;
cljs$core$async$mix_$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__36798__auto____1;
return cljs$core$async$mix_$_state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_38234 = f__36998__auto__();
(statearr_38234[(6)] = c__36997__auto___39943);

return statearr_38234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_40039 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_40039(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_40042 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_40042(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_40044 = (function() {
var G__40045 = null;
var G__40045__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__40045__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__40045 = function(p,v){
switch(arguments.length){
case 1:
return G__40045__1.call(this,p);
case 2:
return G__40045__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40045.cljs$core$IFn$_invoke$arity$1 = G__40045__1;
G__40045.cljs$core$IFn$_invoke$arity$2 = G__40045__2;
return G__40045;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38258 = arguments.length;
switch (G__38258) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_40044(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_40044(p,v);
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
var G__38270 = arguments.length;
switch (G__38270) {
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
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__38267_SHARP_){
if(cljs.core.truth_((p1__38267_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__38267_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__38267_SHARP_.call(null,topic)))){
return p1__38267_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__38267_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38278 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38279){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38279 = meta38279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38280,meta38279__$1){
var self__ = this;
var _38280__$1 = this;
return (new cljs.core.async.t_cljs$core$async38278(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38279__$1));
}));

(cljs.core.async.t_cljs$core$async38278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38280){
var self__ = this;
var _38280__$1 = this;
return self__.meta38279;
}));

(cljs.core.async.t_cljs$core$async38278.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38278.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async38278.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38278.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async38278.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async38278.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async38278.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async38278.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38279","meta38279",1860251753,null)], null);
}));

(cljs.core.async.t_cljs$core$async38278.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38278.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38278");

(cljs.core.async.t_cljs$core$async38278.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38278");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38278.
 */
cljs.core.async.__GT_t_cljs$core$async38278 = (function cljs$core$async$__GT_t_cljs$core$async38278(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38279){
return (new cljs.core.async.t_cljs$core$async38278(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38279));
});

}

return (new cljs.core.async.t_cljs$core$async38278(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__36997__auto___40059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_38377){
var state_val_38378 = (state_38377[(1)]);
if((state_val_38378 === (7))){
var inst_38373 = (state_38377[(2)]);
var state_38377__$1 = state_38377;
var statearr_38380_40060 = state_38377__$1;
(statearr_38380_40060[(2)] = inst_38373);

(statearr_38380_40060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (20))){
var state_38377__$1 = state_38377;
var statearr_38381_40064 = state_38377__$1;
(statearr_38381_40064[(2)] = null);

(statearr_38381_40064[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (1))){
var state_38377__$1 = state_38377;
var statearr_38383_40065 = state_38377__$1;
(statearr_38383_40065[(2)] = null);

(statearr_38383_40065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (24))){
var inst_38353 = (state_38377[(7)]);
var inst_38364 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_38353);
var state_38377__$1 = state_38377;
var statearr_38385_40066 = state_38377__$1;
(statearr_38385_40066[(2)] = inst_38364);

(statearr_38385_40066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (4))){
var inst_38300 = (state_38377[(8)]);
var inst_38300__$1 = (state_38377[(2)]);
var inst_38301 = (inst_38300__$1 == null);
var state_38377__$1 = (function (){var statearr_38389 = state_38377;
(statearr_38389[(8)] = inst_38300__$1);

return statearr_38389;
})();
if(cljs.core.truth_(inst_38301)){
var statearr_38390_40067 = state_38377__$1;
(statearr_38390_40067[(1)] = (5));

} else {
var statearr_38391_40072 = state_38377__$1;
(statearr_38391_40072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (15))){
var inst_38347 = (state_38377[(2)]);
var state_38377__$1 = state_38377;
var statearr_38393_40073 = state_38377__$1;
(statearr_38393_40073[(2)] = inst_38347);

(statearr_38393_40073[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (21))){
var inst_38369 = (state_38377[(2)]);
var state_38377__$1 = (function (){var statearr_38394 = state_38377;
(statearr_38394[(9)] = inst_38369);

return statearr_38394;
})();
var statearr_38395_40074 = state_38377__$1;
(statearr_38395_40074[(2)] = null);

(statearr_38395_40074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (13))){
var inst_38328 = (state_38377[(10)]);
var inst_38331 = cljs.core.chunked_seq_QMARK_(inst_38328);
var state_38377__$1 = state_38377;
if(inst_38331){
var statearr_38399_40079 = state_38377__$1;
(statearr_38399_40079[(1)] = (16));

} else {
var statearr_38400_40080 = state_38377__$1;
(statearr_38400_40080[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (22))){
var inst_38361 = (state_38377[(2)]);
var state_38377__$1 = state_38377;
if(cljs.core.truth_(inst_38361)){
var statearr_38402_40081 = state_38377__$1;
(statearr_38402_40081[(1)] = (23));

} else {
var statearr_38403_40082 = state_38377__$1;
(statearr_38403_40082[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (6))){
var inst_38300 = (state_38377[(8)]);
var inst_38355 = (state_38377[(11)]);
var inst_38353 = (state_38377[(7)]);
var inst_38353__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_38300) : topic_fn.call(null,inst_38300));
var inst_38354 = cljs.core.deref(mults);
var inst_38355__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_38354,inst_38353__$1);
var state_38377__$1 = (function (){var statearr_38407 = state_38377;
(statearr_38407[(11)] = inst_38355__$1);

(statearr_38407[(7)] = inst_38353__$1);

return statearr_38407;
})();
if(cljs.core.truth_(inst_38355__$1)){
var statearr_38408_40084 = state_38377__$1;
(statearr_38408_40084[(1)] = (19));

} else {
var statearr_38409_40085 = state_38377__$1;
(statearr_38409_40085[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (25))){
var inst_38366 = (state_38377[(2)]);
var state_38377__$1 = state_38377;
var statearr_38411_40086 = state_38377__$1;
(statearr_38411_40086[(2)] = inst_38366);

(statearr_38411_40086[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (17))){
var inst_38328 = (state_38377[(10)]);
var inst_38338 = cljs.core.first(inst_38328);
var inst_38339 = cljs.core.async.muxch_STAR_(inst_38338);
var inst_38340 = cljs.core.async.close_BANG_(inst_38339);
var inst_38341 = cljs.core.next(inst_38328);
var inst_38311 = inst_38341;
var inst_38312 = null;
var inst_38313 = (0);
var inst_38314 = (0);
var state_38377__$1 = (function (){var statearr_38416 = state_38377;
(statearr_38416[(12)] = inst_38314);

(statearr_38416[(13)] = inst_38340);

(statearr_38416[(14)] = inst_38312);

(statearr_38416[(15)] = inst_38311);

(statearr_38416[(16)] = inst_38313);

return statearr_38416;
})();
var statearr_38417_40087 = state_38377__$1;
(statearr_38417_40087[(2)] = null);

(statearr_38417_40087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (3))){
var inst_38375 = (state_38377[(2)]);
var state_38377__$1 = state_38377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38377__$1,inst_38375);
} else {
if((state_val_38378 === (12))){
var inst_38349 = (state_38377[(2)]);
var state_38377__$1 = state_38377;
var statearr_38422_40090 = state_38377__$1;
(statearr_38422_40090[(2)] = inst_38349);

(statearr_38422_40090[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (2))){
var state_38377__$1 = state_38377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38377__$1,(4),ch);
} else {
if((state_val_38378 === (23))){
var state_38377__$1 = state_38377;
var statearr_38426_40091 = state_38377__$1;
(statearr_38426_40091[(2)] = null);

(statearr_38426_40091[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (19))){
var inst_38300 = (state_38377[(8)]);
var inst_38355 = (state_38377[(11)]);
var inst_38359 = cljs.core.async.muxch_STAR_(inst_38355);
var state_38377__$1 = state_38377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38377__$1,(22),inst_38359,inst_38300);
} else {
if((state_val_38378 === (11))){
var inst_38328 = (state_38377[(10)]);
var inst_38311 = (state_38377[(15)]);
var inst_38328__$1 = cljs.core.seq(inst_38311);
var state_38377__$1 = (function (){var statearr_38428 = state_38377;
(statearr_38428[(10)] = inst_38328__$1);

return statearr_38428;
})();
if(inst_38328__$1){
var statearr_38429_40092 = state_38377__$1;
(statearr_38429_40092[(1)] = (13));

} else {
var statearr_38430_40093 = state_38377__$1;
(statearr_38430_40093[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (9))){
var inst_38351 = (state_38377[(2)]);
var state_38377__$1 = state_38377;
var statearr_38434_40094 = state_38377__$1;
(statearr_38434_40094[(2)] = inst_38351);

(statearr_38434_40094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (5))){
var inst_38307 = cljs.core.deref(mults);
var inst_38308 = cljs.core.vals(inst_38307);
var inst_38309 = cljs.core.seq(inst_38308);
var inst_38311 = inst_38309;
var inst_38312 = null;
var inst_38313 = (0);
var inst_38314 = (0);
var state_38377__$1 = (function (){var statearr_38438 = state_38377;
(statearr_38438[(12)] = inst_38314);

(statearr_38438[(14)] = inst_38312);

(statearr_38438[(15)] = inst_38311);

(statearr_38438[(16)] = inst_38313);

return statearr_38438;
})();
var statearr_38439_40095 = state_38377__$1;
(statearr_38439_40095[(2)] = null);

(statearr_38439_40095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (14))){
var state_38377__$1 = state_38377;
var statearr_38445_40096 = state_38377__$1;
(statearr_38445_40096[(2)] = null);

(statearr_38445_40096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (16))){
var inst_38328 = (state_38377[(10)]);
var inst_38333 = cljs.core.chunk_first(inst_38328);
var inst_38334 = cljs.core.chunk_rest(inst_38328);
var inst_38335 = cljs.core.count(inst_38333);
var inst_38311 = inst_38334;
var inst_38312 = inst_38333;
var inst_38313 = inst_38335;
var inst_38314 = (0);
var state_38377__$1 = (function (){var statearr_38448 = state_38377;
(statearr_38448[(12)] = inst_38314);

(statearr_38448[(14)] = inst_38312);

(statearr_38448[(15)] = inst_38311);

(statearr_38448[(16)] = inst_38313);

return statearr_38448;
})();
var statearr_38449_40097 = state_38377__$1;
(statearr_38449_40097[(2)] = null);

(statearr_38449_40097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (10))){
var inst_38314 = (state_38377[(12)]);
var inst_38312 = (state_38377[(14)]);
var inst_38311 = (state_38377[(15)]);
var inst_38313 = (state_38377[(16)]);
var inst_38321 = cljs.core._nth(inst_38312,inst_38314);
var inst_38322 = cljs.core.async.muxch_STAR_(inst_38321);
var inst_38323 = cljs.core.async.close_BANG_(inst_38322);
var inst_38325 = (inst_38314 + (1));
var tmp38440 = inst_38312;
var tmp38441 = inst_38311;
var tmp38442 = inst_38313;
var inst_38311__$1 = tmp38441;
var inst_38312__$1 = tmp38440;
var inst_38313__$1 = tmp38442;
var inst_38314__$1 = inst_38325;
var state_38377__$1 = (function (){var statearr_38453 = state_38377;
(statearr_38453[(12)] = inst_38314__$1);

(statearr_38453[(17)] = inst_38323);

(statearr_38453[(14)] = inst_38312__$1);

(statearr_38453[(15)] = inst_38311__$1);

(statearr_38453[(16)] = inst_38313__$1);

return statearr_38453;
})();
var statearr_38454_40098 = state_38377__$1;
(statearr_38454_40098[(2)] = null);

(statearr_38454_40098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (18))){
var inst_38344 = (state_38377[(2)]);
var state_38377__$1 = state_38377;
var statearr_38456_40103 = state_38377__$1;
(statearr_38456_40103[(2)] = inst_38344);

(statearr_38456_40103[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38378 === (8))){
var inst_38314 = (state_38377[(12)]);
var inst_38313 = (state_38377[(16)]);
var inst_38317 = (inst_38314 < inst_38313);
var inst_38318 = inst_38317;
var state_38377__$1 = state_38377;
if(cljs.core.truth_(inst_38318)){
var statearr_38457_40104 = state_38377__$1;
(statearr_38457_40104[(1)] = (10));

} else {
var statearr_38460_40105 = state_38377__$1;
(statearr_38460_40105[(1)] = (11));

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
var cljs$core$async$state_machine__36798__auto__ = null;
var cljs$core$async$state_machine__36798__auto____0 = (function (){
var statearr_38462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38462[(0)] = cljs$core$async$state_machine__36798__auto__);

(statearr_38462[(1)] = (1));

return statearr_38462;
});
var cljs$core$async$state_machine__36798__auto____1 = (function (state_38377){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_38377);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e38464){var ex__36801__auto__ = e38464;
var statearr_38465_40110 = state_38377;
(statearr_38465_40110[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_38377[(4)]))){
var statearr_38466_40113 = state_38377;
(statearr_38466_40113[(1)] = cljs.core.first((state_38377[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40114 = state_38377;
state_38377 = G__40114;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$state_machine__36798__auto__ = function(state_38377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36798__auto____1.call(this,state_38377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36798__auto____0;
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36798__auto____1;
return cljs$core$async$state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_38470 = f__36998__auto__();
(statearr_38470[(6)] = c__36997__auto___40059);

return statearr_38470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
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
var G__38474 = arguments.length;
switch (G__38474) {
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
var G__38485 = arguments.length;
switch (G__38485) {
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
var G__38494 = arguments.length;
switch (G__38494) {
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
var c__36997__auto___40119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_38560){
var state_val_38561 = (state_38560[(1)]);
if((state_val_38561 === (7))){
var state_38560__$1 = state_38560;
var statearr_38573_40123 = state_38560__$1;
(statearr_38573_40123[(2)] = null);

(statearr_38573_40123[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (1))){
var state_38560__$1 = state_38560;
var statearr_38577_40124 = state_38560__$1;
(statearr_38577_40124[(2)] = null);

(statearr_38577_40124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (4))){
var inst_38506 = (state_38560[(7)]);
var inst_38504 = (state_38560[(8)]);
var inst_38508 = (inst_38506 < inst_38504);
var state_38560__$1 = state_38560;
if(cljs.core.truth_(inst_38508)){
var statearr_38578_40125 = state_38560__$1;
(statearr_38578_40125[(1)] = (6));

} else {
var statearr_38579_40126 = state_38560__$1;
(statearr_38579_40126[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (15))){
var inst_38540 = (state_38560[(9)]);
var inst_38550 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_38540);
var state_38560__$1 = state_38560;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38560__$1,(17),out,inst_38550);
} else {
if((state_val_38561 === (13))){
var inst_38540 = (state_38560[(9)]);
var inst_38540__$1 = (state_38560[(2)]);
var inst_38541 = cljs.core.some(cljs.core.nil_QMARK_,inst_38540__$1);
var state_38560__$1 = (function (){var statearr_38583 = state_38560;
(statearr_38583[(9)] = inst_38540__$1);

return statearr_38583;
})();
if(cljs.core.truth_(inst_38541)){
var statearr_38584_40130 = state_38560__$1;
(statearr_38584_40130[(1)] = (14));

} else {
var statearr_38586_40131 = state_38560__$1;
(statearr_38586_40131[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (6))){
var state_38560__$1 = state_38560;
var statearr_38591_40132 = state_38560__$1;
(statearr_38591_40132[(2)] = null);

(statearr_38591_40132[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (17))){
var inst_38552 = (state_38560[(2)]);
var state_38560__$1 = (function (){var statearr_38608 = state_38560;
(statearr_38608[(10)] = inst_38552);

return statearr_38608;
})();
var statearr_38609_40133 = state_38560__$1;
(statearr_38609_40133[(2)] = null);

(statearr_38609_40133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (3))){
var inst_38557 = (state_38560[(2)]);
var state_38560__$1 = state_38560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38560__$1,inst_38557);
} else {
if((state_val_38561 === (12))){
var _ = (function (){var statearr_38615 = state_38560;
(statearr_38615[(4)] = cljs.core.rest((state_38560[(4)])));

return statearr_38615;
})();
var state_38560__$1 = state_38560;
var ex38603 = (state_38560__$1[(2)]);
var statearr_38616_40134 = state_38560__$1;
(statearr_38616_40134[(5)] = ex38603);


if((ex38603 instanceof Object)){
var statearr_38624_40135 = state_38560__$1;
(statearr_38624_40135[(1)] = (11));

(statearr_38624_40135[(5)] = null);

} else {
throw ex38603;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (2))){
var inst_38502 = cljs.core.reset_BANG_(dctr,cnt);
var inst_38504 = cnt;
var inst_38506 = (0);
var state_38560__$1 = (function (){var statearr_38631 = state_38560;
(statearr_38631[(7)] = inst_38506);

(statearr_38631[(11)] = inst_38502);

(statearr_38631[(8)] = inst_38504);

return statearr_38631;
})();
var statearr_38633_40136 = state_38560__$1;
(statearr_38633_40136[(2)] = null);

(statearr_38633_40136[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (11))){
var inst_38518 = (state_38560[(2)]);
var inst_38519 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_38560__$1 = (function (){var statearr_38634 = state_38560;
(statearr_38634[(12)] = inst_38518);

return statearr_38634;
})();
var statearr_38637_40137 = state_38560__$1;
(statearr_38637_40137[(2)] = inst_38519);

(statearr_38637_40137[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (9))){
var inst_38506 = (state_38560[(7)]);
var _ = (function (){var statearr_38639 = state_38560;
(statearr_38639[(4)] = cljs.core.cons((12),(state_38560[(4)])));

return statearr_38639;
})();
var inst_38525 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_38506) : chs__$1.call(null,inst_38506));
var inst_38526 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_38506) : done.call(null,inst_38506));
var inst_38527 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_38525,inst_38526);
var ___$1 = (function (){var statearr_38648 = state_38560;
(statearr_38648[(4)] = cljs.core.rest((state_38560[(4)])));

return statearr_38648;
})();
var state_38560__$1 = state_38560;
var statearr_38650_40138 = state_38560__$1;
(statearr_38650_40138[(2)] = inst_38527);

(statearr_38650_40138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (5))){
var inst_38538 = (state_38560[(2)]);
var state_38560__$1 = (function (){var statearr_38652 = state_38560;
(statearr_38652[(13)] = inst_38538);

return statearr_38652;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38560__$1,(13),dchan);
} else {
if((state_val_38561 === (14))){
var inst_38547 = cljs.core.async.close_BANG_(out);
var state_38560__$1 = state_38560;
var statearr_38658_40139 = state_38560__$1;
(statearr_38658_40139[(2)] = inst_38547);

(statearr_38658_40139[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (16))){
var inst_38555 = (state_38560[(2)]);
var state_38560__$1 = state_38560;
var statearr_38661_40141 = state_38560__$1;
(statearr_38661_40141[(2)] = inst_38555);

(statearr_38661_40141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (10))){
var inst_38506 = (state_38560[(7)]);
var inst_38530 = (state_38560[(2)]);
var inst_38532 = (inst_38506 + (1));
var inst_38506__$1 = inst_38532;
var state_38560__$1 = (function (){var statearr_38667 = state_38560;
(statearr_38667[(7)] = inst_38506__$1);

(statearr_38667[(14)] = inst_38530);

return statearr_38667;
})();
var statearr_38669_40145 = state_38560__$1;
(statearr_38669_40145[(2)] = null);

(statearr_38669_40145[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38561 === (8))){
var inst_38536 = (state_38560[(2)]);
var state_38560__$1 = state_38560;
var statearr_38670_40150 = state_38560__$1;
(statearr_38670_40150[(2)] = inst_38536);

(statearr_38670_40150[(1)] = (5));


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
var cljs$core$async$state_machine__36798__auto__ = null;
var cljs$core$async$state_machine__36798__auto____0 = (function (){
var statearr_38674 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38674[(0)] = cljs$core$async$state_machine__36798__auto__);

(statearr_38674[(1)] = (1));

return statearr_38674;
});
var cljs$core$async$state_machine__36798__auto____1 = (function (state_38560){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_38560);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e38676){var ex__36801__auto__ = e38676;
var statearr_38677_40154 = state_38560;
(statearr_38677_40154[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_38560[(4)]))){
var statearr_38678_40155 = state_38560;
(statearr_38678_40155[(1)] = cljs.core.first((state_38560[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40156 = state_38560;
state_38560 = G__40156;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$state_machine__36798__auto__ = function(state_38560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36798__auto____1.call(this,state_38560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36798__auto____0;
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36798__auto____1;
return cljs$core$async$state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_38681 = f__36998__auto__();
(statearr_38681[(6)] = c__36997__auto___40119);

return statearr_38681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
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
var G__38684 = arguments.length;
switch (G__38684) {
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
var c__36997__auto___40167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_38728){
var state_val_38729 = (state_38728[(1)]);
if((state_val_38729 === (7))){
var inst_38703 = (state_38728[(7)]);
var inst_38704 = (state_38728[(8)]);
var inst_38703__$1 = (state_38728[(2)]);
var inst_38704__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38703__$1,(0),null);
var inst_38705 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_38703__$1,(1),null);
var inst_38706 = (inst_38704__$1 == null);
var state_38728__$1 = (function (){var statearr_38734 = state_38728;
(statearr_38734[(7)] = inst_38703__$1);

(statearr_38734[(8)] = inst_38704__$1);

(statearr_38734[(9)] = inst_38705);

return statearr_38734;
})();
if(cljs.core.truth_(inst_38706)){
var statearr_38735_40171 = state_38728__$1;
(statearr_38735_40171[(1)] = (8));

} else {
var statearr_38736_40172 = state_38728__$1;
(statearr_38736_40172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38729 === (1))){
var inst_38693 = cljs.core.vec(chs);
var inst_38694 = inst_38693;
var state_38728__$1 = (function (){var statearr_38741 = state_38728;
(statearr_38741[(10)] = inst_38694);

return statearr_38741;
})();
var statearr_38742_40173 = state_38728__$1;
(statearr_38742_40173[(2)] = null);

(statearr_38742_40173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38729 === (4))){
var inst_38694 = (state_38728[(10)]);
var state_38728__$1 = state_38728;
return cljs.core.async.ioc_alts_BANG_(state_38728__$1,(7),inst_38694);
} else {
if((state_val_38729 === (6))){
var inst_38724 = (state_38728[(2)]);
var state_38728__$1 = state_38728;
var statearr_38743_40175 = state_38728__$1;
(statearr_38743_40175[(2)] = inst_38724);

(statearr_38743_40175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38729 === (3))){
var inst_38726 = (state_38728[(2)]);
var state_38728__$1 = state_38728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38728__$1,inst_38726);
} else {
if((state_val_38729 === (2))){
var inst_38694 = (state_38728[(10)]);
var inst_38696 = cljs.core.count(inst_38694);
var inst_38697 = (inst_38696 > (0));
var state_38728__$1 = state_38728;
if(cljs.core.truth_(inst_38697)){
var statearr_38747_40176 = state_38728__$1;
(statearr_38747_40176[(1)] = (4));

} else {
var statearr_38748_40177 = state_38728__$1;
(statearr_38748_40177[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38729 === (11))){
var inst_38694 = (state_38728[(10)]);
var inst_38717 = (state_38728[(2)]);
var tmp38744 = inst_38694;
var inst_38694__$1 = tmp38744;
var state_38728__$1 = (function (){var statearr_38749 = state_38728;
(statearr_38749[(10)] = inst_38694__$1);

(statearr_38749[(11)] = inst_38717);

return statearr_38749;
})();
var statearr_38750_40187 = state_38728__$1;
(statearr_38750_40187[(2)] = null);

(statearr_38750_40187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38729 === (9))){
var inst_38704 = (state_38728[(8)]);
var state_38728__$1 = state_38728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38728__$1,(11),out,inst_38704);
} else {
if((state_val_38729 === (5))){
var inst_38722 = cljs.core.async.close_BANG_(out);
var state_38728__$1 = state_38728;
var statearr_38758_40188 = state_38728__$1;
(statearr_38758_40188[(2)] = inst_38722);

(statearr_38758_40188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38729 === (10))){
var inst_38720 = (state_38728[(2)]);
var state_38728__$1 = state_38728;
var statearr_38760_40195 = state_38728__$1;
(statearr_38760_40195[(2)] = inst_38720);

(statearr_38760_40195[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38729 === (8))){
var inst_38703 = (state_38728[(7)]);
var inst_38704 = (state_38728[(8)]);
var inst_38694 = (state_38728[(10)]);
var inst_38705 = (state_38728[(9)]);
var inst_38711 = (function (){var cs = inst_38694;
var vec__38699 = inst_38703;
var v = inst_38704;
var c = inst_38705;
return (function (p1__38682_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__38682_SHARP_);
});
})();
var inst_38713 = cljs.core.filterv(inst_38711,inst_38694);
var inst_38694__$1 = inst_38713;
var state_38728__$1 = (function (){var statearr_38764 = state_38728;
(statearr_38764[(10)] = inst_38694__$1);

return statearr_38764;
})();
var statearr_38765_40196 = state_38728__$1;
(statearr_38765_40196[(2)] = null);

(statearr_38765_40196[(1)] = (2));


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
var cljs$core$async$state_machine__36798__auto__ = null;
var cljs$core$async$state_machine__36798__auto____0 = (function (){
var statearr_38767 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38767[(0)] = cljs$core$async$state_machine__36798__auto__);

(statearr_38767[(1)] = (1));

return statearr_38767;
});
var cljs$core$async$state_machine__36798__auto____1 = (function (state_38728){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_38728);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e38771){var ex__36801__auto__ = e38771;
var statearr_38773_40197 = state_38728;
(statearr_38773_40197[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_38728[(4)]))){
var statearr_38774_40198 = state_38728;
(statearr_38774_40198[(1)] = cljs.core.first((state_38728[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40199 = state_38728;
state_38728 = G__40199;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$state_machine__36798__auto__ = function(state_38728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36798__auto____1.call(this,state_38728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36798__auto____0;
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36798__auto____1;
return cljs$core$async$state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_38775 = f__36998__auto__();
(statearr_38775[(6)] = c__36997__auto___40167);

return statearr_38775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
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
var G__38781 = arguments.length;
switch (G__38781) {
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
var c__36997__auto___40201 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_38809){
var state_val_38810 = (state_38809[(1)]);
if((state_val_38810 === (7))){
var inst_38791 = (state_38809[(7)]);
var inst_38791__$1 = (state_38809[(2)]);
var inst_38792 = (inst_38791__$1 == null);
var inst_38793 = cljs.core.not(inst_38792);
var state_38809__$1 = (function (){var statearr_38812 = state_38809;
(statearr_38812[(7)] = inst_38791__$1);

return statearr_38812;
})();
if(inst_38793){
var statearr_38813_40209 = state_38809__$1;
(statearr_38813_40209[(1)] = (8));

} else {
var statearr_38814_40210 = state_38809__$1;
(statearr_38814_40210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38810 === (1))){
var inst_38786 = (0);
var state_38809__$1 = (function (){var statearr_38815 = state_38809;
(statearr_38815[(8)] = inst_38786);

return statearr_38815;
})();
var statearr_38816_40213 = state_38809__$1;
(statearr_38816_40213[(2)] = null);

(statearr_38816_40213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38810 === (4))){
var state_38809__$1 = state_38809;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38809__$1,(7),ch);
} else {
if((state_val_38810 === (6))){
var inst_38804 = (state_38809[(2)]);
var state_38809__$1 = state_38809;
var statearr_38817_40214 = state_38809__$1;
(statearr_38817_40214[(2)] = inst_38804);

(statearr_38817_40214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38810 === (3))){
var inst_38806 = (state_38809[(2)]);
var inst_38807 = cljs.core.async.close_BANG_(out);
var state_38809__$1 = (function (){var statearr_38818 = state_38809;
(statearr_38818[(9)] = inst_38806);

return statearr_38818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_38809__$1,inst_38807);
} else {
if((state_val_38810 === (2))){
var inst_38786 = (state_38809[(8)]);
var inst_38788 = (inst_38786 < n);
var state_38809__$1 = state_38809;
if(cljs.core.truth_(inst_38788)){
var statearr_38819_40215 = state_38809__$1;
(statearr_38819_40215[(1)] = (4));

} else {
var statearr_38820_40216 = state_38809__$1;
(statearr_38820_40216[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38810 === (11))){
var inst_38786 = (state_38809[(8)]);
var inst_38796 = (state_38809[(2)]);
var inst_38797 = (inst_38786 + (1));
var inst_38786__$1 = inst_38797;
var state_38809__$1 = (function (){var statearr_38822 = state_38809;
(statearr_38822[(8)] = inst_38786__$1);

(statearr_38822[(10)] = inst_38796);

return statearr_38822;
})();
var statearr_38823_40217 = state_38809__$1;
(statearr_38823_40217[(2)] = null);

(statearr_38823_40217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38810 === (9))){
var state_38809__$1 = state_38809;
var statearr_38825_40218 = state_38809__$1;
(statearr_38825_40218[(2)] = null);

(statearr_38825_40218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38810 === (5))){
var state_38809__$1 = state_38809;
var statearr_38826_40219 = state_38809__$1;
(statearr_38826_40219[(2)] = null);

(statearr_38826_40219[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38810 === (10))){
var inst_38801 = (state_38809[(2)]);
var state_38809__$1 = state_38809;
var statearr_38827_40226 = state_38809__$1;
(statearr_38827_40226[(2)] = inst_38801);

(statearr_38827_40226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38810 === (8))){
var inst_38791 = (state_38809[(7)]);
var state_38809__$1 = state_38809;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38809__$1,(11),out,inst_38791);
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
var cljs$core$async$state_machine__36798__auto__ = null;
var cljs$core$async$state_machine__36798__auto____0 = (function (){
var statearr_38828 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38828[(0)] = cljs$core$async$state_machine__36798__auto__);

(statearr_38828[(1)] = (1));

return statearr_38828;
});
var cljs$core$async$state_machine__36798__auto____1 = (function (state_38809){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_38809);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e38829){var ex__36801__auto__ = e38829;
var statearr_38830_40227 = state_38809;
(statearr_38830_40227[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_38809[(4)]))){
var statearr_38831_40228 = state_38809;
(statearr_38831_40228[(1)] = cljs.core.first((state_38809[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40229 = state_38809;
state_38809 = G__40229;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$state_machine__36798__auto__ = function(state_38809){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36798__auto____1.call(this,state_38809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36798__auto____0;
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36798__auto____1;
return cljs$core$async$state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_38832 = f__36998__auto__();
(statearr_38832[(6)] = c__36997__auto___40201);

return statearr_38832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38834 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38834 = (function (f,ch,meta38835){
this.f = f;
this.ch = ch;
this.meta38835 = meta38835;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38836,meta38835__$1){
var self__ = this;
var _38836__$1 = this;
return (new cljs.core.async.t_cljs$core$async38834(self__.f,self__.ch,meta38835__$1));
}));

(cljs.core.async.t_cljs$core$async38834.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38836){
var self__ = this;
var _38836__$1 = this;
return self__.meta38835;
}));

(cljs.core.async.t_cljs$core$async38834.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38834.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38834.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38834.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38834.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38837 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38837 = (function (f,ch,meta38835,_,fn1,meta38838){
this.f = f;
this.ch = ch;
this.meta38835 = meta38835;
this._ = _;
this.fn1 = fn1;
this.meta38838 = meta38838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38839,meta38838__$1){
var self__ = this;
var _38839__$1 = this;
return (new cljs.core.async.t_cljs$core$async38837(self__.f,self__.ch,self__.meta38835,self__._,self__.fn1,meta38838__$1));
}));

(cljs.core.async.t_cljs$core$async38837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38839){
var self__ = this;
var _38839__$1 = this;
return self__.meta38838;
}));

(cljs.core.async.t_cljs$core$async38837.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38837.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async38837.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async38837.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__38833_SHARP_){
var G__38840 = (((p1__38833_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__38833_SHARP_) : self__.f.call(null,p1__38833_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__38840) : f1.call(null,G__38840));
});
}));

(cljs.core.async.t_cljs$core$async38837.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38835","meta38835",733990342,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async38834","cljs.core.async/t_cljs$core$async38834",-287509108,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta38838","meta38838",2099859471,null)], null);
}));

(cljs.core.async.t_cljs$core$async38837.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38837.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38837");

(cljs.core.async.t_cljs$core$async38837.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38837");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38837.
 */
cljs.core.async.__GT_t_cljs$core$async38837 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38837(f__$1,ch__$1,meta38835__$1,___$2,fn1__$1,meta38838){
return (new cljs.core.async.t_cljs$core$async38837(f__$1,ch__$1,meta38835__$1,___$2,fn1__$1,meta38838));
});

}

return (new cljs.core.async.t_cljs$core$async38837(self__.f,self__.ch,self__.meta38835,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__38843 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__38843) : self__.f.call(null,G__38843));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async38834.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38834.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async38834.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38835","meta38835",733990342,null)], null);
}));

(cljs.core.async.t_cljs$core$async38834.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38834.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38834");

(cljs.core.async.t_cljs$core$async38834.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38834");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38834.
 */
cljs.core.async.__GT_t_cljs$core$async38834 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async38834(f__$1,ch__$1,meta38835){
return (new cljs.core.async.t_cljs$core$async38834(f__$1,ch__$1,meta38835));
});

}

return (new cljs.core.async.t_cljs$core$async38834(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38846 = (function (f,ch,meta38847){
this.f = f;
this.ch = ch;
this.meta38847 = meta38847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38848,meta38847__$1){
var self__ = this;
var _38848__$1 = this;
return (new cljs.core.async.t_cljs$core$async38846(self__.f,self__.ch,meta38847__$1));
}));

(cljs.core.async.t_cljs$core$async38846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38848){
var self__ = this;
var _38848__$1 = this;
return self__.meta38847;
}));

(cljs.core.async.t_cljs$core$async38846.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38846.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38846.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38846.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38846.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38846.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async38846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38847","meta38847",-1604698305,null)], null);
}));

(cljs.core.async.t_cljs$core$async38846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38846");

(cljs.core.async.t_cljs$core$async38846.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38846.
 */
cljs.core.async.__GT_t_cljs$core$async38846 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async38846(f__$1,ch__$1,meta38847){
return (new cljs.core.async.t_cljs$core$async38846(f__$1,ch__$1,meta38847));
});

}

return (new cljs.core.async.t_cljs$core$async38846(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38851 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38851 = (function (p,ch,meta38852){
this.p = p;
this.ch = ch;
this.meta38852 = meta38852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async38851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38853,meta38852__$1){
var self__ = this;
var _38853__$1 = this;
return (new cljs.core.async.t_cljs$core$async38851(self__.p,self__.ch,meta38852__$1));
}));

(cljs.core.async.t_cljs$core$async38851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38853){
var self__ = this;
var _38853__$1 = this;
return self__.meta38852;
}));

(cljs.core.async.t_cljs$core$async38851.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38851.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38851.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async38851.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38851.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async38851.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async38851.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async38851.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta38852","meta38852",-1066043133,null)], null);
}));

(cljs.core.async.t_cljs$core$async38851.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async38851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38851");

(cljs.core.async.t_cljs$core$async38851.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async38851");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38851.
 */
cljs.core.async.__GT_t_cljs$core$async38851 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async38851(p__$1,ch__$1,meta38852){
return (new cljs.core.async.t_cljs$core$async38851(p__$1,ch__$1,meta38852));
});

}

return (new cljs.core.async.t_cljs$core$async38851(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38861 = arguments.length;
switch (G__38861) {
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
var c__36997__auto___40249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_38888){
var state_val_38889 = (state_38888[(1)]);
if((state_val_38889 === (7))){
var inst_38884 = (state_38888[(2)]);
var state_38888__$1 = state_38888;
var statearr_38890_40251 = state_38888__$1;
(statearr_38890_40251[(2)] = inst_38884);

(statearr_38890_40251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38889 === (1))){
var state_38888__$1 = state_38888;
var statearr_38891_40252 = state_38888__$1;
(statearr_38891_40252[(2)] = null);

(statearr_38891_40252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38889 === (4))){
var inst_38868 = (state_38888[(7)]);
var inst_38868__$1 = (state_38888[(2)]);
var inst_38870 = (inst_38868__$1 == null);
var state_38888__$1 = (function (){var statearr_38895 = state_38888;
(statearr_38895[(7)] = inst_38868__$1);

return statearr_38895;
})();
if(cljs.core.truth_(inst_38870)){
var statearr_38896_40253 = state_38888__$1;
(statearr_38896_40253[(1)] = (5));

} else {
var statearr_38897_40254 = state_38888__$1;
(statearr_38897_40254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38889 === (6))){
var inst_38868 = (state_38888[(7)]);
var inst_38875 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_38868) : p.call(null,inst_38868));
var state_38888__$1 = state_38888;
if(cljs.core.truth_(inst_38875)){
var statearr_38898_40258 = state_38888__$1;
(statearr_38898_40258[(1)] = (8));

} else {
var statearr_38899_40263 = state_38888__$1;
(statearr_38899_40263[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38889 === (3))){
var inst_38886 = (state_38888[(2)]);
var state_38888__$1 = state_38888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_38888__$1,inst_38886);
} else {
if((state_val_38889 === (2))){
var state_38888__$1 = state_38888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_38888__$1,(4),ch);
} else {
if((state_val_38889 === (11))){
var inst_38878 = (state_38888[(2)]);
var state_38888__$1 = state_38888;
var statearr_38900_40268 = state_38888__$1;
(statearr_38900_40268[(2)] = inst_38878);

(statearr_38900_40268[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38889 === (9))){
var state_38888__$1 = state_38888;
var statearr_38901_40270 = state_38888__$1;
(statearr_38901_40270[(2)] = null);

(statearr_38901_40270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38889 === (5))){
var inst_38872 = cljs.core.async.close_BANG_(out);
var state_38888__$1 = state_38888;
var statearr_38902_40271 = state_38888__$1;
(statearr_38902_40271[(2)] = inst_38872);

(statearr_38902_40271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38889 === (10))){
var inst_38881 = (state_38888[(2)]);
var state_38888__$1 = (function (){var statearr_38910 = state_38888;
(statearr_38910[(8)] = inst_38881);

return statearr_38910;
})();
var statearr_38911_40273 = state_38888__$1;
(statearr_38911_40273[(2)] = null);

(statearr_38911_40273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38889 === (8))){
var inst_38868 = (state_38888[(7)]);
var state_38888__$1 = state_38888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_38888__$1,(11),out,inst_38868);
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
var cljs$core$async$state_machine__36798__auto__ = null;
var cljs$core$async$state_machine__36798__auto____0 = (function (){
var statearr_38924 = [null,null,null,null,null,null,null,null,null];
(statearr_38924[(0)] = cljs$core$async$state_machine__36798__auto__);

(statearr_38924[(1)] = (1));

return statearr_38924;
});
var cljs$core$async$state_machine__36798__auto____1 = (function (state_38888){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_38888);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e38925){var ex__36801__auto__ = e38925;
var statearr_38926_40283 = state_38888;
(statearr_38926_40283[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_38888[(4)]))){
var statearr_38927_40284 = state_38888;
(statearr_38927_40284[(1)] = cljs.core.first((state_38888[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40287 = state_38888;
state_38888 = G__40287;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$state_machine__36798__auto__ = function(state_38888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36798__auto____1.call(this,state_38888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36798__auto____0;
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36798__auto____1;
return cljs$core$async$state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_38928 = f__36998__auto__();
(statearr_38928[(6)] = c__36997__auto___40249);

return statearr_38928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__38940 = arguments.length;
switch (G__38940) {
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
var c__36997__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_39009){
var state_val_39010 = (state_39009[(1)]);
if((state_val_39010 === (7))){
var inst_39005 = (state_39009[(2)]);
var state_39009__$1 = state_39009;
var statearr_39011_40290 = state_39009__$1;
(statearr_39011_40290[(2)] = inst_39005);

(statearr_39011_40290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39010 === (20))){
var inst_38971 = (state_39009[(7)]);
var inst_38986 = (state_39009[(2)]);
var inst_38987 = cljs.core.next(inst_38971);
var inst_38957 = inst_38987;
var inst_38958 = null;
var inst_38959 = (0);
var inst_38960 = (0);
var state_39009__$1 = (function (){var statearr_39012 = state_39009;
(statearr_39012[(8)] = inst_38960);

(statearr_39012[(9)] = inst_38986);

(statearr_39012[(10)] = inst_38957);

(statearr_39012[(11)] = inst_38958);

(statearr_39012[(12)] = inst_38959);

return statearr_39012;
})();
var statearr_39014_40291 = state_39009__$1;
(statearr_39014_40291[(2)] = null);

(statearr_39014_40291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39010 === (1))){
var state_39009__$1 = state_39009;
var statearr_39018_40292 = state_39009__$1;
(statearr_39018_40292[(2)] = null);

(statearr_39018_40292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39010 === (4))){
var inst_38946 = (state_39009[(13)]);
var inst_38946__$1 = (state_39009[(2)]);
var inst_38947 = (inst_38946__$1 == null);
var state_39009__$1 = (function (){var statearr_39019 = state_39009;
(statearr_39019[(13)] = inst_38946__$1);

return statearr_39019;
})();
if(cljs.core.truth_(inst_38947)){
var statearr_39020_40297 = state_39009__$1;
(statearr_39020_40297[(1)] = (5));

} else {
var statearr_39021_40298 = state_39009__$1;
(statearr_39021_40298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39010 === (15))){
var state_39009__$1 = state_39009;
var statearr_39027_40303 = state_39009__$1;
(statearr_39027_40303[(2)] = null);

(statearr_39027_40303[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39010 === (21))){
var state_39009__$1 = state_39009;
var statearr_39028_40305 = state_39009__$1;
(statearr_39028_40305[(2)] = null);

(statearr_39028_40305[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39010 === (13))){
var inst_38960 = (state_39009[(8)]);
var inst_38957 = (state_39009[(10)]);
var inst_38958 = (state_39009[(11)]);
var inst_38959 = (state_39009[(12)]);
var inst_38967 = (state_39009[(2)]);
var inst_38968 = (inst_38960 + (1));
var tmp39024 = inst_38957;
var tmp39025 = inst_38958;
var tmp39026 = inst_38959;
var inst_38957__$1 = tmp39024;
var inst_38958__$1 = tmp39025;
var inst_38959__$1 = tmp39026;
var inst_38960__$1 = inst_38968;
var state_39009__$1 = (function (){var statearr_39030 = state_39009;
(statearr_39030[(8)] = inst_38960__$1);

(statearr_39030[(10)] = inst_38957__$1);

(statearr_39030[(11)] = inst_38958__$1);

(statearr_39030[(12)] = inst_38959__$1);

(statearr_39030[(14)] = inst_38967);

return statearr_39030;
})();
var statearr_39032_40307 = state_39009__$1;
(statearr_39032_40307[(2)] = null);

(statearr_39032_40307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39010 === (22))){
var state_39009__$1 = state_39009;
var statearr_39033_40309 = state_39009__$1;
(statearr_39033_40309[(2)] = null);

(statearr_39033_40309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39010 === (6))){
var inst_38946 = (state_39009[(13)]);
var inst_38955 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_38946) : f.call(null,inst_38946));
var inst_38956 = cljs.core.seq(inst_38955);
var inst_38957 = inst_38956;
var inst_38958 = null;
var inst_38959 = (0);
var inst_38960 = (0);
var state_39009__$1 = (function (){var statearr_39034 = state_39009;
(statearr_39034[(8)] = inst_38960);

(statearr_39034[(10)] = inst_38957);

(statearr_39034[(11)] = inst_38958);

(statearr_39034[(12)] = inst_38959);

return statearr_39034;
})();
var statearr_39035_40314 = state_39009__$1;
(statearr_39035_40314[(2)] = null);

(statearr_39035_40314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39010 === (17))){
var inst_38971 = (state_39009[(7)]);
var inst_38979 = cljs.core.chunk_first(inst_38971);
var inst_38980 = cljs.core.chunk_rest(inst_38971);
var inst_38981 = cljs.core.count(inst_38979);
var inst_38957 = inst_38980;
var inst_38958 = inst_38979;
var inst_38959 = inst_38981;
var inst_38960 = (0);
var state_39009__$1 = (function (){var statearr_39036 = state_39009;
(statearr_39036[(8)] = inst_38960);

(statearr_39036[(10)] = inst_38957);

(statearr_39036[(11)] = inst_38958);

(statearr_39036[(12)] = inst_38959);

return statearr_39036;
})();
var statearr_39037_40318 = state_39009__$1;
(statearr_39037_40318[(2)] = null);

(statearr_39037_40318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39010 === (3))){
var inst_39007 = (state_39009[(2)]);
var state_39009__$1 = state_39009;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39009__$1,inst_39007);
} else {
if((state_val_39010 === (12))){
var inst_38995 = (state_39009[(2)]);
var state_39009__$1 = state_39009;
var statearr_39038_40323 = state_39009__$1;
(statearr_39038_40323[(2)] = inst_38995);

(statearr_39038_40323[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39010 === (2))){
var state_39009__$1 = state_39009;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39009__$1,(4),in$);
} else {
if((state_val_39010 === (23))){
var inst_39003 = (state_39009[(2)]);
var state_39009__$1 = state_39009;
var statearr_39039_40325 = state_39009__$1;
(statearr_39039_40325[(2)] = inst_39003);

(statearr_39039_40325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39010 === (19))){
var inst_38990 = (state_39009[(2)]);
var state_39009__$1 = state_39009;
var statearr_39041_40327 = state_39009__$1;
(statearr_39041_40327[(2)] = inst_38990);

(statearr_39041_40327[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39010 === (11))){
var inst_38971 = (state_39009[(7)]);
var inst_38957 = (state_39009[(10)]);
var inst_38971__$1 = cljs.core.seq(inst_38957);
var state_39009__$1 = (function (){var statearr_39043 = state_39009;
(statearr_39043[(7)] = inst_38971__$1);

return statearr_39043;
})();
if(inst_38971__$1){
var statearr_39044_40328 = state_39009__$1;
(statearr_39044_40328[(1)] = (14));

} else {
var statearr_39045_40329 = state_39009__$1;
(statearr_39045_40329[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39010 === (9))){
var inst_38997 = (state_39009[(2)]);
var inst_38998 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_39009__$1 = (function (){var statearr_39046 = state_39009;
(statearr_39046[(15)] = inst_38997);

return statearr_39046;
})();
if(cljs.core.truth_(inst_38998)){
var statearr_39047_40334 = state_39009__$1;
(statearr_39047_40334[(1)] = (21));

} else {
var statearr_39048_40336 = state_39009__$1;
(statearr_39048_40336[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39010 === (5))){
var inst_38949 = cljs.core.async.close_BANG_(out);
var state_39009__$1 = state_39009;
var statearr_39050_40337 = state_39009__$1;
(statearr_39050_40337[(2)] = inst_38949);

(statearr_39050_40337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39010 === (14))){
var inst_38971 = (state_39009[(7)]);
var inst_38974 = cljs.core.chunked_seq_QMARK_(inst_38971);
var state_39009__$1 = state_39009;
if(inst_38974){
var statearr_39055_40338 = state_39009__$1;
(statearr_39055_40338[(1)] = (17));

} else {
var statearr_39056_40340 = state_39009__$1;
(statearr_39056_40340[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39010 === (16))){
var inst_38993 = (state_39009[(2)]);
var state_39009__$1 = state_39009;
var statearr_39057_40341 = state_39009__$1;
(statearr_39057_40341[(2)] = inst_38993);

(statearr_39057_40341[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39010 === (10))){
var inst_38960 = (state_39009[(8)]);
var inst_38958 = (state_39009[(11)]);
var inst_38965 = cljs.core._nth(inst_38958,inst_38960);
var state_39009__$1 = state_39009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39009__$1,(13),out,inst_38965);
} else {
if((state_val_39010 === (18))){
var inst_38971 = (state_39009[(7)]);
var inst_38984 = cljs.core.first(inst_38971);
var state_39009__$1 = state_39009;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39009__$1,(20),out,inst_38984);
} else {
if((state_val_39010 === (8))){
var inst_38960 = (state_39009[(8)]);
var inst_38959 = (state_39009[(12)]);
var inst_38962 = (inst_38960 < inst_38959);
var inst_38963 = inst_38962;
var state_39009__$1 = state_39009;
if(cljs.core.truth_(inst_38963)){
var statearr_39058_40347 = state_39009__$1;
(statearr_39058_40347[(1)] = (10));

} else {
var statearr_39059_40349 = state_39009__$1;
(statearr_39059_40349[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__36798__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__36798__auto____0 = (function (){
var statearr_39060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39060[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__36798__auto__);

(statearr_39060[(1)] = (1));

return statearr_39060;
});
var cljs$core$async$mapcat_STAR__$_state_machine__36798__auto____1 = (function (state_39009){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_39009);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e39061){var ex__36801__auto__ = e39061;
var statearr_39062_40352 = state_39009;
(statearr_39062_40352[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_39009[(4)]))){
var statearr_39063_40353 = state_39009;
(statearr_39063_40353[(1)] = cljs.core.first((state_39009[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40355 = state_39009;
state_39009 = G__40355;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__36798__auto__ = function(state_39009){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__36798__auto____1.call(this,state_39009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__36798__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__36798__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_39064 = f__36998__auto__();
(statearr_39064[(6)] = c__36997__auto__);

return statearr_39064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
}));

return c__36997__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39066 = arguments.length;
switch (G__39066) {
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
var G__39073 = arguments.length;
switch (G__39073) {
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
var G__39078 = arguments.length;
switch (G__39078) {
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
var c__36997__auto___40361 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_39108){
var state_val_39109 = (state_39108[(1)]);
if((state_val_39109 === (7))){
var inst_39103 = (state_39108[(2)]);
var state_39108__$1 = state_39108;
var statearr_39110_40363 = state_39108__$1;
(statearr_39110_40363[(2)] = inst_39103);

(statearr_39110_40363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39109 === (1))){
var inst_39085 = null;
var state_39108__$1 = (function (){var statearr_39111 = state_39108;
(statearr_39111[(7)] = inst_39085);

return statearr_39111;
})();
var statearr_39112_40368 = state_39108__$1;
(statearr_39112_40368[(2)] = null);

(statearr_39112_40368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39109 === (4))){
var inst_39088 = (state_39108[(8)]);
var inst_39088__$1 = (state_39108[(2)]);
var inst_39089 = (inst_39088__$1 == null);
var inst_39090 = cljs.core.not(inst_39089);
var state_39108__$1 = (function (){var statearr_39113 = state_39108;
(statearr_39113[(8)] = inst_39088__$1);

return statearr_39113;
})();
if(inst_39090){
var statearr_39114_40374 = state_39108__$1;
(statearr_39114_40374[(1)] = (5));

} else {
var statearr_39115_40375 = state_39108__$1;
(statearr_39115_40375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39109 === (6))){
var state_39108__$1 = state_39108;
var statearr_39116_40380 = state_39108__$1;
(statearr_39116_40380[(2)] = null);

(statearr_39116_40380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39109 === (3))){
var inst_39105 = (state_39108[(2)]);
var inst_39106 = cljs.core.async.close_BANG_(out);
var state_39108__$1 = (function (){var statearr_39117 = state_39108;
(statearr_39117[(9)] = inst_39105);

return statearr_39117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39108__$1,inst_39106);
} else {
if((state_val_39109 === (2))){
var state_39108__$1 = state_39108;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39108__$1,(4),ch);
} else {
if((state_val_39109 === (11))){
var inst_39088 = (state_39108[(8)]);
var inst_39097 = (state_39108[(2)]);
var inst_39085 = inst_39088;
var state_39108__$1 = (function (){var statearr_39122 = state_39108;
(statearr_39122[(7)] = inst_39085);

(statearr_39122[(10)] = inst_39097);

return statearr_39122;
})();
var statearr_39123_40399 = state_39108__$1;
(statearr_39123_40399[(2)] = null);

(statearr_39123_40399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39109 === (9))){
var inst_39088 = (state_39108[(8)]);
var state_39108__$1 = state_39108;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39108__$1,(11),out,inst_39088);
} else {
if((state_val_39109 === (5))){
var inst_39085 = (state_39108[(7)]);
var inst_39088 = (state_39108[(8)]);
var inst_39092 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39088,inst_39085);
var state_39108__$1 = state_39108;
if(inst_39092){
var statearr_39125_40402 = state_39108__$1;
(statearr_39125_40402[(1)] = (8));

} else {
var statearr_39126_40403 = state_39108__$1;
(statearr_39126_40403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39109 === (10))){
var inst_39100 = (state_39108[(2)]);
var state_39108__$1 = state_39108;
var statearr_39131_40404 = state_39108__$1;
(statearr_39131_40404[(2)] = inst_39100);

(statearr_39131_40404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39109 === (8))){
var inst_39085 = (state_39108[(7)]);
var tmp39124 = inst_39085;
var inst_39085__$1 = tmp39124;
var state_39108__$1 = (function (){var statearr_39132 = state_39108;
(statearr_39132[(7)] = inst_39085__$1);

return statearr_39132;
})();
var statearr_39133_40412 = state_39108__$1;
(statearr_39133_40412[(2)] = null);

(statearr_39133_40412[(1)] = (2));


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
var cljs$core$async$state_machine__36798__auto__ = null;
var cljs$core$async$state_machine__36798__auto____0 = (function (){
var statearr_39134 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39134[(0)] = cljs$core$async$state_machine__36798__auto__);

(statearr_39134[(1)] = (1));

return statearr_39134;
});
var cljs$core$async$state_machine__36798__auto____1 = (function (state_39108){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_39108);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e39135){var ex__36801__auto__ = e39135;
var statearr_39136_40417 = state_39108;
(statearr_39136_40417[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_39108[(4)]))){
var statearr_39137_40422 = state_39108;
(statearr_39137_40422[(1)] = cljs.core.first((state_39108[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40429 = state_39108;
state_39108 = G__40429;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$state_machine__36798__auto__ = function(state_39108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36798__auto____1.call(this,state_39108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36798__auto____0;
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36798__auto____1;
return cljs$core$async$state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_39138 = f__36998__auto__();
(statearr_39138[(6)] = c__36997__auto___40361);

return statearr_39138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39142 = arguments.length;
switch (G__39142) {
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
var c__36997__auto___40458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_39183){
var state_val_39184 = (state_39183[(1)]);
if((state_val_39184 === (7))){
var inst_39179 = (state_39183[(2)]);
var state_39183__$1 = state_39183;
var statearr_39185_40463 = state_39183__$1;
(statearr_39185_40463[(2)] = inst_39179);

(statearr_39185_40463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39184 === (1))){
var inst_39146 = (new Array(n));
var inst_39147 = inst_39146;
var inst_39148 = (0);
var state_39183__$1 = (function (){var statearr_39186 = state_39183;
(statearr_39186[(7)] = inst_39148);

(statearr_39186[(8)] = inst_39147);

return statearr_39186;
})();
var statearr_39187_40484 = state_39183__$1;
(statearr_39187_40484[(2)] = null);

(statearr_39187_40484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39184 === (4))){
var inst_39151 = (state_39183[(9)]);
var inst_39151__$1 = (state_39183[(2)]);
var inst_39152 = (inst_39151__$1 == null);
var inst_39153 = cljs.core.not(inst_39152);
var state_39183__$1 = (function (){var statearr_39188 = state_39183;
(statearr_39188[(9)] = inst_39151__$1);

return statearr_39188;
})();
if(inst_39153){
var statearr_39189_40494 = state_39183__$1;
(statearr_39189_40494[(1)] = (5));

} else {
var statearr_39190_40495 = state_39183__$1;
(statearr_39190_40495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39184 === (15))){
var inst_39173 = (state_39183[(2)]);
var state_39183__$1 = state_39183;
var statearr_39191_40498 = state_39183__$1;
(statearr_39191_40498[(2)] = inst_39173);

(statearr_39191_40498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39184 === (13))){
var state_39183__$1 = state_39183;
var statearr_39192_40503 = state_39183__$1;
(statearr_39192_40503[(2)] = null);

(statearr_39192_40503[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39184 === (6))){
var inst_39148 = (state_39183[(7)]);
var inst_39169 = (inst_39148 > (0));
var state_39183__$1 = state_39183;
if(cljs.core.truth_(inst_39169)){
var statearr_39193_40507 = state_39183__$1;
(statearr_39193_40507[(1)] = (12));

} else {
var statearr_39194_40510 = state_39183__$1;
(statearr_39194_40510[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39184 === (3))){
var inst_39181 = (state_39183[(2)]);
var state_39183__$1 = state_39183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39183__$1,inst_39181);
} else {
if((state_val_39184 === (12))){
var inst_39147 = (state_39183[(8)]);
var inst_39171 = cljs.core.vec(inst_39147);
var state_39183__$1 = state_39183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39183__$1,(15),out,inst_39171);
} else {
if((state_val_39184 === (2))){
var state_39183__$1 = state_39183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39183__$1,(4),ch);
} else {
if((state_val_39184 === (11))){
var inst_39163 = (state_39183[(2)]);
var inst_39164 = (new Array(n));
var inst_39147 = inst_39164;
var inst_39148 = (0);
var state_39183__$1 = (function (){var statearr_39195 = state_39183;
(statearr_39195[(7)] = inst_39148);

(statearr_39195[(10)] = inst_39163);

(statearr_39195[(8)] = inst_39147);

return statearr_39195;
})();
var statearr_39196_40516 = state_39183__$1;
(statearr_39196_40516[(2)] = null);

(statearr_39196_40516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39184 === (9))){
var inst_39147 = (state_39183[(8)]);
var inst_39161 = cljs.core.vec(inst_39147);
var state_39183__$1 = state_39183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39183__$1,(11),out,inst_39161);
} else {
if((state_val_39184 === (5))){
var inst_39148 = (state_39183[(7)]);
var inst_39156 = (state_39183[(11)]);
var inst_39151 = (state_39183[(9)]);
var inst_39147 = (state_39183[(8)]);
var inst_39155 = (inst_39147[inst_39148] = inst_39151);
var inst_39156__$1 = (inst_39148 + (1));
var inst_39157 = (inst_39156__$1 < n);
var state_39183__$1 = (function (){var statearr_39197 = state_39183;
(statearr_39197[(11)] = inst_39156__$1);

(statearr_39197[(12)] = inst_39155);

return statearr_39197;
})();
if(cljs.core.truth_(inst_39157)){
var statearr_39198_40534 = state_39183__$1;
(statearr_39198_40534[(1)] = (8));

} else {
var statearr_39199_40536 = state_39183__$1;
(statearr_39199_40536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39184 === (14))){
var inst_39176 = (state_39183[(2)]);
var inst_39177 = cljs.core.async.close_BANG_(out);
var state_39183__$1 = (function (){var statearr_39201 = state_39183;
(statearr_39201[(13)] = inst_39176);

return statearr_39201;
})();
var statearr_39202_40545 = state_39183__$1;
(statearr_39202_40545[(2)] = inst_39177);

(statearr_39202_40545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39184 === (10))){
var inst_39167 = (state_39183[(2)]);
var state_39183__$1 = state_39183;
var statearr_39203_40546 = state_39183__$1;
(statearr_39203_40546[(2)] = inst_39167);

(statearr_39203_40546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39184 === (8))){
var inst_39156 = (state_39183[(11)]);
var inst_39147 = (state_39183[(8)]);
var tmp39200 = inst_39147;
var inst_39147__$1 = tmp39200;
var inst_39148 = inst_39156;
var state_39183__$1 = (function (){var statearr_39204 = state_39183;
(statearr_39204[(7)] = inst_39148);

(statearr_39204[(8)] = inst_39147__$1);

return statearr_39204;
})();
var statearr_39205_40551 = state_39183__$1;
(statearr_39205_40551[(2)] = null);

(statearr_39205_40551[(1)] = (2));


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
var cljs$core$async$state_machine__36798__auto__ = null;
var cljs$core$async$state_machine__36798__auto____0 = (function (){
var statearr_39206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39206[(0)] = cljs$core$async$state_machine__36798__auto__);

(statearr_39206[(1)] = (1));

return statearr_39206;
});
var cljs$core$async$state_machine__36798__auto____1 = (function (state_39183){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_39183);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e39207){var ex__36801__auto__ = e39207;
var statearr_39208_40558 = state_39183;
(statearr_39208_40558[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_39183[(4)]))){
var statearr_39209_40560 = state_39183;
(statearr_39209_40560[(1)] = cljs.core.first((state_39183[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40561 = state_39183;
state_39183 = G__40561;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$state_machine__36798__auto__ = function(state_39183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36798__auto____1.call(this,state_39183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36798__auto____0;
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36798__auto____1;
return cljs$core$async$state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_39210 = f__36998__auto__();
(statearr_39210[(6)] = c__36997__auto___40458);

return statearr_39210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39212 = arguments.length;
switch (G__39212) {
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
var c__36997__auto___40565 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__36998__auto__ = (function (){var switch__36797__auto__ = (function (state_39255){
var state_val_39256 = (state_39255[(1)]);
if((state_val_39256 === (7))){
var inst_39251 = (state_39255[(2)]);
var state_39255__$1 = state_39255;
var statearr_39257_40567 = state_39255__$1;
(statearr_39257_40567[(2)] = inst_39251);

(statearr_39257_40567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39256 === (1))){
var inst_39213 = [];
var inst_39214 = inst_39213;
var inst_39215 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39255__$1 = (function (){var statearr_39258 = state_39255;
(statearr_39258[(7)] = inst_39215);

(statearr_39258[(8)] = inst_39214);

return statearr_39258;
})();
var statearr_39259_40577 = state_39255__$1;
(statearr_39259_40577[(2)] = null);

(statearr_39259_40577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39256 === (4))){
var inst_39218 = (state_39255[(9)]);
var inst_39218__$1 = (state_39255[(2)]);
var inst_39219 = (inst_39218__$1 == null);
var inst_39220 = cljs.core.not(inst_39219);
var state_39255__$1 = (function (){var statearr_39263 = state_39255;
(statearr_39263[(9)] = inst_39218__$1);

return statearr_39263;
})();
if(inst_39220){
var statearr_39264_40591 = state_39255__$1;
(statearr_39264_40591[(1)] = (5));

} else {
var statearr_39265_40596 = state_39255__$1;
(statearr_39265_40596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39256 === (15))){
var inst_39245 = (state_39255[(2)]);
var state_39255__$1 = state_39255;
var statearr_39266_40600 = state_39255__$1;
(statearr_39266_40600[(2)] = inst_39245);

(statearr_39266_40600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39256 === (13))){
var state_39255__$1 = state_39255;
var statearr_39267_40607 = state_39255__$1;
(statearr_39267_40607[(2)] = null);

(statearr_39267_40607[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39256 === (6))){
var inst_39214 = (state_39255[(8)]);
var inst_39240 = inst_39214.length;
var inst_39241 = (inst_39240 > (0));
var state_39255__$1 = state_39255;
if(cljs.core.truth_(inst_39241)){
var statearr_39268_40616 = state_39255__$1;
(statearr_39268_40616[(1)] = (12));

} else {
var statearr_39269_40621 = state_39255__$1;
(statearr_39269_40621[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39256 === (3))){
var inst_39253 = (state_39255[(2)]);
var state_39255__$1 = state_39255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39255__$1,inst_39253);
} else {
if((state_val_39256 === (12))){
var inst_39214 = (state_39255[(8)]);
var inst_39243 = cljs.core.vec(inst_39214);
var state_39255__$1 = state_39255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39255__$1,(15),out,inst_39243);
} else {
if((state_val_39256 === (2))){
var state_39255__$1 = state_39255;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39255__$1,(4),ch);
} else {
if((state_val_39256 === (11))){
var inst_39222 = (state_39255[(10)]);
var inst_39218 = (state_39255[(9)]);
var inst_39233 = (state_39255[(2)]);
var inst_39234 = [];
var inst_39235 = inst_39234.push(inst_39218);
var inst_39214 = inst_39234;
var inst_39215 = inst_39222;
var state_39255__$1 = (function (){var statearr_39274 = state_39255;
(statearr_39274[(11)] = inst_39233);

(statearr_39274[(7)] = inst_39215);

(statearr_39274[(12)] = inst_39235);

(statearr_39274[(8)] = inst_39214);

return statearr_39274;
})();
var statearr_39275_40650 = state_39255__$1;
(statearr_39275_40650[(2)] = null);

(statearr_39275_40650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39256 === (9))){
var inst_39214 = (state_39255[(8)]);
var inst_39231 = cljs.core.vec(inst_39214);
var state_39255__$1 = state_39255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39255__$1,(11),out,inst_39231);
} else {
if((state_val_39256 === (5))){
var inst_39215 = (state_39255[(7)]);
var inst_39222 = (state_39255[(10)]);
var inst_39218 = (state_39255[(9)]);
var inst_39222__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_39218) : f.call(null,inst_39218));
var inst_39224 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39222__$1,inst_39215);
var inst_39225 = cljs.core.keyword_identical_QMARK_(inst_39215,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39226 = ((inst_39224) || (inst_39225));
var state_39255__$1 = (function (){var statearr_39276 = state_39255;
(statearr_39276[(10)] = inst_39222__$1);

return statearr_39276;
})();
if(cljs.core.truth_(inst_39226)){
var statearr_39277_40671 = state_39255__$1;
(statearr_39277_40671[(1)] = (8));

} else {
var statearr_39278_40678 = state_39255__$1;
(statearr_39278_40678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39256 === (14))){
var inst_39248 = (state_39255[(2)]);
var inst_39249 = cljs.core.async.close_BANG_(out);
var state_39255__$1 = (function (){var statearr_39280 = state_39255;
(statearr_39280[(13)] = inst_39248);

return statearr_39280;
})();
var statearr_39281_40689 = state_39255__$1;
(statearr_39281_40689[(2)] = inst_39249);

(statearr_39281_40689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39256 === (10))){
var inst_39238 = (state_39255[(2)]);
var state_39255__$1 = state_39255;
var statearr_39282_40696 = state_39255__$1;
(statearr_39282_40696[(2)] = inst_39238);

(statearr_39282_40696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39256 === (8))){
var inst_39222 = (state_39255[(10)]);
var inst_39218 = (state_39255[(9)]);
var inst_39214 = (state_39255[(8)]);
var inst_39228 = inst_39214.push(inst_39218);
var tmp39279 = inst_39214;
var inst_39214__$1 = tmp39279;
var inst_39215 = inst_39222;
var state_39255__$1 = (function (){var statearr_39283 = state_39255;
(statearr_39283[(7)] = inst_39215);

(statearr_39283[(14)] = inst_39228);

(statearr_39283[(8)] = inst_39214__$1);

return statearr_39283;
})();
var statearr_39284_40706 = state_39255__$1;
(statearr_39284_40706[(2)] = null);

(statearr_39284_40706[(1)] = (2));


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
var cljs$core$async$state_machine__36798__auto__ = null;
var cljs$core$async$state_machine__36798__auto____0 = (function (){
var statearr_39285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39285[(0)] = cljs$core$async$state_machine__36798__auto__);

(statearr_39285[(1)] = (1));

return statearr_39285;
});
var cljs$core$async$state_machine__36798__auto____1 = (function (state_39255){
while(true){
var ret_value__36799__auto__ = (function (){try{while(true){
var result__36800__auto__ = switch__36797__auto__(state_39255);
if(cljs.core.keyword_identical_QMARK_(result__36800__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__36800__auto__;
}
break;
}
}catch (e39286){var ex__36801__auto__ = e39286;
var statearr_39287_40724 = state_39255;
(statearr_39287_40724[(2)] = ex__36801__auto__);


if(cljs.core.seq((state_39255[(4)]))){
var statearr_39288_40725 = state_39255;
(statearr_39288_40725[(1)] = cljs.core.first((state_39255[(4)])));

} else {
throw ex__36801__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__36799__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40727 = state_39255;
state_39255 = G__40727;
continue;
} else {
return ret_value__36799__auto__;
}
break;
}
});
cljs$core$async$state_machine__36798__auto__ = function(state_39255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__36798__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__36798__auto____1.call(this,state_39255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__36798__auto____0;
cljs$core$async$state_machine__36798__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__36798__auto____1;
return cljs$core$async$state_machine__36798__auto__;
})()
})();
var state__36999__auto__ = (function (){var statearr_39289 = f__36998__auto__();
(statearr_39289[(6)] = c__36997__auto___40565);

return statearr_39289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__36999__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
