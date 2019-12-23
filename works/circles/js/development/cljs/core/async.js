// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25439 = arguments.length;
switch (G__25439) {
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
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async25440 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25440 = (function (f,blockable,meta25441){
this.f = f;
this.blockable = blockable;
this.meta25441 = meta25441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25442,meta25441__$1){
var self__ = this;
var _25442__$1 = this;
return (new cljs.core.async.t_cljs$core$async25440(self__.f,self__.blockable,meta25441__$1));
});

cljs.core.async.t_cljs$core$async25440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25442){
var self__ = this;
var _25442__$1 = this;
return self__.meta25441;
});

cljs.core.async.t_cljs$core$async25440.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25440.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25440.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25440.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25441","meta25441",676357068,null)], null);
});

cljs.core.async.t_cljs$core$async25440.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25440";

cljs.core.async.t_cljs$core$async25440.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25440");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25440.
 */
cljs.core.async.__GT_t_cljs$core$async25440 = (function cljs$core$async$__GT_t_cljs$core$async25440(f__$1,blockable__$1,meta25441){
return (new cljs.core.async.t_cljs$core$async25440(f__$1,blockable__$1,meta25441));
});

}

return (new cljs.core.async.t_cljs$core$async25440(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__25446 = arguments.length;
switch (G__25446) {
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
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__25449 = arguments.length;
switch (G__25449) {
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
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__25452 = arguments.length;
switch (G__25452) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25454 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25454);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25454,ret){
return (function (){
return fn1.call(null,val_25454);
});})(val_25454,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__25456 = arguments.length;
switch (G__25456) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___25458 = n;
var x_25459 = (0);
while(true){
if((x_25459 < n__4376__auto___25458)){
(a[x_25459] = (0));

var G__25460 = (x_25459 + (1));
x_25459 = G__25460;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25461 = (i + (1));
i = G__25461;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25462 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25462 = (function (flag,meta25463){
this.flag = flag;
this.meta25463 = meta25463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25464,meta25463__$1){
var self__ = this;
var _25464__$1 = this;
return (new cljs.core.async.t_cljs$core$async25462(self__.flag,meta25463__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25462.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25464){
var self__ = this;
var _25464__$1 = this;
return self__.meta25463;
});})(flag))
;

cljs.core.async.t_cljs$core$async25462.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25462.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25462.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25462.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25462.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25463","meta25463",-1657115319,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25462.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25462";

cljs.core.async.t_cljs$core$async25462.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25462");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25462.
 */
cljs.core.async.__GT_t_cljs$core$async25462 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25462(flag__$1,meta25463){
return (new cljs.core.async.t_cljs$core$async25462(flag__$1,meta25463));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25462(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25465 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25465 = (function (flag,cb,meta25466){
this.flag = flag;
this.cb = cb;
this.meta25466 = meta25466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25467,meta25466__$1){
var self__ = this;
var _25467__$1 = this;
return (new cljs.core.async.t_cljs$core$async25465(self__.flag,self__.cb,meta25466__$1));
});

cljs.core.async.t_cljs$core$async25465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25467){
var self__ = this;
var _25467__$1 = this;
return self__.meta25466;
});

cljs.core.async.t_cljs$core$async25465.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25465.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25465.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25465.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25466","meta25466",1352840627,null)], null);
});

cljs.core.async.t_cljs$core$async25465.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25465";

cljs.core.async.t_cljs$core$async25465.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25465");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25465.
 */
cljs.core.async.__GT_t_cljs$core$async25465 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25465(flag__$1,cb__$1,meta25466){
return (new cljs.core.async.t_cljs$core$async25465(flag__$1,cb__$1,meta25466));
});

}

return (new cljs.core.async.t_cljs$core$async25465(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25468_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25468_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25469_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25469_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25470 = (i + (1));
i = G__25470;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4502__auto__ = [];
var len__4499__auto___25476 = arguments.length;
var i__4500__auto___25477 = (0);
while(true){
if((i__4500__auto___25477 < len__4499__auto___25476)){
args__4502__auto__.push((arguments[i__4500__auto___25477]));

var G__25478 = (i__4500__auto___25477 + (1));
i__4500__auto___25477 = G__25478;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25473){
var map__25474 = p__25473;
var map__25474__$1 = ((((!((map__25474 == null)))?(((((map__25474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25474):map__25474);
var opts = map__25474__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25471){
var G__25472 = cljs.core.first.call(null,seq25471);
var seq25471__$1 = cljs.core.next.call(null,seq25471);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25472,seq25471__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__25480 = arguments.length;
switch (G__25480) {
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
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25379__auto___25526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto___25526){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto___25526){
return (function (state_25504){
var state_val_25505 = (state_25504[(1)]);
if((state_val_25505 === (7))){
var inst_25500 = (state_25504[(2)]);
var state_25504__$1 = state_25504;
var statearr_25506_25527 = state_25504__$1;
(statearr_25506_25527[(2)] = inst_25500);

(statearr_25506_25527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (1))){
var state_25504__$1 = state_25504;
var statearr_25507_25528 = state_25504__$1;
(statearr_25507_25528[(2)] = null);

(statearr_25507_25528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (4))){
var inst_25483 = (state_25504[(7)]);
var inst_25483__$1 = (state_25504[(2)]);
var inst_25484 = (inst_25483__$1 == null);
var state_25504__$1 = (function (){var statearr_25508 = state_25504;
(statearr_25508[(7)] = inst_25483__$1);

return statearr_25508;
})();
if(cljs.core.truth_(inst_25484)){
var statearr_25509_25529 = state_25504__$1;
(statearr_25509_25529[(1)] = (5));

} else {
var statearr_25510_25530 = state_25504__$1;
(statearr_25510_25530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (13))){
var state_25504__$1 = state_25504;
var statearr_25511_25531 = state_25504__$1;
(statearr_25511_25531[(2)] = null);

(statearr_25511_25531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (6))){
var inst_25483 = (state_25504[(7)]);
var state_25504__$1 = state_25504;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25504__$1,(11),to,inst_25483);
} else {
if((state_val_25505 === (3))){
var inst_25502 = (state_25504[(2)]);
var state_25504__$1 = state_25504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25504__$1,inst_25502);
} else {
if((state_val_25505 === (12))){
var state_25504__$1 = state_25504;
var statearr_25512_25532 = state_25504__$1;
(statearr_25512_25532[(2)] = null);

(statearr_25512_25532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (2))){
var state_25504__$1 = state_25504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25504__$1,(4),from);
} else {
if((state_val_25505 === (11))){
var inst_25493 = (state_25504[(2)]);
var state_25504__$1 = state_25504;
if(cljs.core.truth_(inst_25493)){
var statearr_25513_25533 = state_25504__$1;
(statearr_25513_25533[(1)] = (12));

} else {
var statearr_25514_25534 = state_25504__$1;
(statearr_25514_25534[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (9))){
var state_25504__$1 = state_25504;
var statearr_25515_25535 = state_25504__$1;
(statearr_25515_25535[(2)] = null);

(statearr_25515_25535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (5))){
var state_25504__$1 = state_25504;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25516_25536 = state_25504__$1;
(statearr_25516_25536[(1)] = (8));

} else {
var statearr_25517_25537 = state_25504__$1;
(statearr_25517_25537[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (14))){
var inst_25498 = (state_25504[(2)]);
var state_25504__$1 = state_25504;
var statearr_25518_25538 = state_25504__$1;
(statearr_25518_25538[(2)] = inst_25498);

(statearr_25518_25538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (10))){
var inst_25490 = (state_25504[(2)]);
var state_25504__$1 = state_25504;
var statearr_25519_25539 = state_25504__$1;
(statearr_25519_25539[(2)] = inst_25490);

(statearr_25519_25539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25505 === (8))){
var inst_25487 = cljs.core.async.close_BANG_.call(null,to);
var state_25504__$1 = state_25504;
var statearr_25520_25540 = state_25504__$1;
(statearr_25520_25540[(2)] = inst_25487);

(statearr_25520_25540[(1)] = (10));


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
});})(c__25379__auto___25526))
;
return ((function (switch__25289__auto__,c__25379__auto___25526){
return (function() {
var cljs$core$async$state_machine__25290__auto__ = null;
var cljs$core$async$state_machine__25290__auto____0 = (function (){
var statearr_25521 = [null,null,null,null,null,null,null,null];
(statearr_25521[(0)] = cljs$core$async$state_machine__25290__auto__);

(statearr_25521[(1)] = (1));

return statearr_25521;
});
var cljs$core$async$state_machine__25290__auto____1 = (function (state_25504){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_25504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e25522){if((e25522 instanceof Object)){
var ex__25293__auto__ = e25522;
var statearr_25523_25541 = state_25504;
(statearr_25523_25541[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25542 = state_25504;
state_25504 = G__25542;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$state_machine__25290__auto__ = function(state_25504){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25290__auto____1.call(this,state_25504);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25290__auto____0;
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25290__auto____1;
return cljs$core$async$state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto___25526))
})();
var state__25381__auto__ = (function (){var statearr_25524 = f__25380__auto__.call(null);
(statearr_25524[(6)] = c__25379__auto___25526);

return statearr_25524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto___25526))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25543){
var vec__25544 = p__25543;
var v = cljs.core.nth.call(null,vec__25544,(0),null);
var p = cljs.core.nth.call(null,vec__25544,(1),null);
var job = vec__25544;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25379__auto___25715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto___25715,res,vec__25544,v,p,job,jobs,results){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto___25715,res,vec__25544,v,p,job,jobs,results){
return (function (state_25551){
var state_val_25552 = (state_25551[(1)]);
if((state_val_25552 === (1))){
var state_25551__$1 = state_25551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25551__$1,(2),res,v);
} else {
if((state_val_25552 === (2))){
var inst_25548 = (state_25551[(2)]);
var inst_25549 = cljs.core.async.close_BANG_.call(null,res);
var state_25551__$1 = (function (){var statearr_25553 = state_25551;
(statearr_25553[(7)] = inst_25548);

return statearr_25553;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25551__$1,inst_25549);
} else {
return null;
}
}
});})(c__25379__auto___25715,res,vec__25544,v,p,job,jobs,results))
;
return ((function (switch__25289__auto__,c__25379__auto___25715,res,vec__25544,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____0 = (function (){
var statearr_25554 = [null,null,null,null,null,null,null,null];
(statearr_25554[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__);

(statearr_25554[(1)] = (1));

return statearr_25554;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____1 = (function (state_25551){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_25551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e25555){if((e25555 instanceof Object)){
var ex__25293__auto__ = e25555;
var statearr_25556_25716 = state_25551;
(statearr_25556_25716[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25717 = state_25551;
state_25551 = G__25717;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__ = function(state_25551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____1.call(this,state_25551);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto___25715,res,vec__25544,v,p,job,jobs,results))
})();
var state__25381__auto__ = (function (){var statearr_25557 = f__25380__auto__.call(null);
(statearr_25557[(6)] = c__25379__auto___25715);

return statearr_25557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto___25715,res,vec__25544,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25558){
var vec__25559 = p__25558;
var v = cljs.core.nth.call(null,vec__25559,(0),null);
var p = cljs.core.nth.call(null,vec__25559,(1),null);
var job = vec__25559;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___25718 = n;
var __25719 = (0);
while(true){
if((__25719 < n__4376__auto___25718)){
var G__25562_25720 = type;
var G__25562_25721__$1 = (((G__25562_25720 instanceof cljs.core.Keyword))?G__25562_25720.fqn:null);
switch (G__25562_25721__$1) {
case "compute":
var c__25379__auto___25723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25719,c__25379__auto___25723,G__25562_25720,G__25562_25721__$1,n__4376__auto___25718,jobs,results,process,async){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (__25719,c__25379__auto___25723,G__25562_25720,G__25562_25721__$1,n__4376__auto___25718,jobs,results,process,async){
return (function (state_25575){
var state_val_25576 = (state_25575[(1)]);
if((state_val_25576 === (1))){
var state_25575__$1 = state_25575;
var statearr_25577_25724 = state_25575__$1;
(statearr_25577_25724[(2)] = null);

(statearr_25577_25724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25576 === (2))){
var state_25575__$1 = state_25575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25575__$1,(4),jobs);
} else {
if((state_val_25576 === (3))){
var inst_25573 = (state_25575[(2)]);
var state_25575__$1 = state_25575;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25575__$1,inst_25573);
} else {
if((state_val_25576 === (4))){
var inst_25565 = (state_25575[(2)]);
var inst_25566 = process.call(null,inst_25565);
var state_25575__$1 = state_25575;
if(cljs.core.truth_(inst_25566)){
var statearr_25578_25725 = state_25575__$1;
(statearr_25578_25725[(1)] = (5));

} else {
var statearr_25579_25726 = state_25575__$1;
(statearr_25579_25726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25576 === (5))){
var state_25575__$1 = state_25575;
var statearr_25580_25727 = state_25575__$1;
(statearr_25580_25727[(2)] = null);

(statearr_25580_25727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25576 === (6))){
var state_25575__$1 = state_25575;
var statearr_25581_25728 = state_25575__$1;
(statearr_25581_25728[(2)] = null);

(statearr_25581_25728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25576 === (7))){
var inst_25571 = (state_25575[(2)]);
var state_25575__$1 = state_25575;
var statearr_25582_25729 = state_25575__$1;
(statearr_25582_25729[(2)] = inst_25571);

(statearr_25582_25729[(1)] = (3));


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
});})(__25719,c__25379__auto___25723,G__25562_25720,G__25562_25721__$1,n__4376__auto___25718,jobs,results,process,async))
;
return ((function (__25719,switch__25289__auto__,c__25379__auto___25723,G__25562_25720,G__25562_25721__$1,n__4376__auto___25718,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____0 = (function (){
var statearr_25583 = [null,null,null,null,null,null,null];
(statearr_25583[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__);

(statearr_25583[(1)] = (1));

return statearr_25583;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____1 = (function (state_25575){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_25575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e25584){if((e25584 instanceof Object)){
var ex__25293__auto__ = e25584;
var statearr_25585_25730 = state_25575;
(statearr_25585_25730[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25731 = state_25575;
state_25575 = G__25731;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__ = function(state_25575){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____1.call(this,state_25575);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__;
})()
;})(__25719,switch__25289__auto__,c__25379__auto___25723,G__25562_25720,G__25562_25721__$1,n__4376__auto___25718,jobs,results,process,async))
})();
var state__25381__auto__ = (function (){var statearr_25586 = f__25380__auto__.call(null);
(statearr_25586[(6)] = c__25379__auto___25723);

return statearr_25586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(__25719,c__25379__auto___25723,G__25562_25720,G__25562_25721__$1,n__4376__auto___25718,jobs,results,process,async))
);


break;
case "async":
var c__25379__auto___25732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25719,c__25379__auto___25732,G__25562_25720,G__25562_25721__$1,n__4376__auto___25718,jobs,results,process,async){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (__25719,c__25379__auto___25732,G__25562_25720,G__25562_25721__$1,n__4376__auto___25718,jobs,results,process,async){
return (function (state_25599){
var state_val_25600 = (state_25599[(1)]);
if((state_val_25600 === (1))){
var state_25599__$1 = state_25599;
var statearr_25601_25733 = state_25599__$1;
(statearr_25601_25733[(2)] = null);

(statearr_25601_25733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (2))){
var state_25599__$1 = state_25599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25599__$1,(4),jobs);
} else {
if((state_val_25600 === (3))){
var inst_25597 = (state_25599[(2)]);
var state_25599__$1 = state_25599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25599__$1,inst_25597);
} else {
if((state_val_25600 === (4))){
var inst_25589 = (state_25599[(2)]);
var inst_25590 = async.call(null,inst_25589);
var state_25599__$1 = state_25599;
if(cljs.core.truth_(inst_25590)){
var statearr_25602_25734 = state_25599__$1;
(statearr_25602_25734[(1)] = (5));

} else {
var statearr_25603_25735 = state_25599__$1;
(statearr_25603_25735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (5))){
var state_25599__$1 = state_25599;
var statearr_25604_25736 = state_25599__$1;
(statearr_25604_25736[(2)] = null);

(statearr_25604_25736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (6))){
var state_25599__$1 = state_25599;
var statearr_25605_25737 = state_25599__$1;
(statearr_25605_25737[(2)] = null);

(statearr_25605_25737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25600 === (7))){
var inst_25595 = (state_25599[(2)]);
var state_25599__$1 = state_25599;
var statearr_25606_25738 = state_25599__$1;
(statearr_25606_25738[(2)] = inst_25595);

(statearr_25606_25738[(1)] = (3));


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
});})(__25719,c__25379__auto___25732,G__25562_25720,G__25562_25721__$1,n__4376__auto___25718,jobs,results,process,async))
;
return ((function (__25719,switch__25289__auto__,c__25379__auto___25732,G__25562_25720,G__25562_25721__$1,n__4376__auto___25718,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____0 = (function (){
var statearr_25607 = [null,null,null,null,null,null,null];
(statearr_25607[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__);

(statearr_25607[(1)] = (1));

return statearr_25607;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____1 = (function (state_25599){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_25599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e25608){if((e25608 instanceof Object)){
var ex__25293__auto__ = e25608;
var statearr_25609_25739 = state_25599;
(statearr_25609_25739[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25740 = state_25599;
state_25599 = G__25740;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__ = function(state_25599){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____1.call(this,state_25599);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__;
})()
;})(__25719,switch__25289__auto__,c__25379__auto___25732,G__25562_25720,G__25562_25721__$1,n__4376__auto___25718,jobs,results,process,async))
})();
var state__25381__auto__ = (function (){var statearr_25610 = f__25380__auto__.call(null);
(statearr_25610[(6)] = c__25379__auto___25732);

return statearr_25610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(__25719,c__25379__auto___25732,G__25562_25720,G__25562_25721__$1,n__4376__auto___25718,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25562_25721__$1)].join('')));

}

var G__25741 = (__25719 + (1));
__25719 = G__25741;
continue;
} else {
}
break;
}

var c__25379__auto___25742 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto___25742,jobs,results,process,async){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto___25742,jobs,results,process,async){
return (function (state_25632){
var state_val_25633 = (state_25632[(1)]);
if((state_val_25633 === (1))){
var state_25632__$1 = state_25632;
var statearr_25634_25743 = state_25632__$1;
(statearr_25634_25743[(2)] = null);

(statearr_25634_25743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (2))){
var state_25632__$1 = state_25632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25632__$1,(4),from);
} else {
if((state_val_25633 === (3))){
var inst_25630 = (state_25632[(2)]);
var state_25632__$1 = state_25632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25632__$1,inst_25630);
} else {
if((state_val_25633 === (4))){
var inst_25613 = (state_25632[(7)]);
var inst_25613__$1 = (state_25632[(2)]);
var inst_25614 = (inst_25613__$1 == null);
var state_25632__$1 = (function (){var statearr_25635 = state_25632;
(statearr_25635[(7)] = inst_25613__$1);

return statearr_25635;
})();
if(cljs.core.truth_(inst_25614)){
var statearr_25636_25744 = state_25632__$1;
(statearr_25636_25744[(1)] = (5));

} else {
var statearr_25637_25745 = state_25632__$1;
(statearr_25637_25745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (5))){
var inst_25616 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25632__$1 = state_25632;
var statearr_25638_25746 = state_25632__$1;
(statearr_25638_25746[(2)] = inst_25616);

(statearr_25638_25746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (6))){
var inst_25613 = (state_25632[(7)]);
var inst_25618 = (state_25632[(8)]);
var inst_25618__$1 = cljs.core.async.chan.call(null,(1));
var inst_25619 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25620 = [inst_25613,inst_25618__$1];
var inst_25621 = (new cljs.core.PersistentVector(null,2,(5),inst_25619,inst_25620,null));
var state_25632__$1 = (function (){var statearr_25639 = state_25632;
(statearr_25639[(8)] = inst_25618__$1);

return statearr_25639;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25632__$1,(8),jobs,inst_25621);
} else {
if((state_val_25633 === (7))){
var inst_25628 = (state_25632[(2)]);
var state_25632__$1 = state_25632;
var statearr_25640_25747 = state_25632__$1;
(statearr_25640_25747[(2)] = inst_25628);

(statearr_25640_25747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25633 === (8))){
var inst_25618 = (state_25632[(8)]);
var inst_25623 = (state_25632[(2)]);
var state_25632__$1 = (function (){var statearr_25641 = state_25632;
(statearr_25641[(9)] = inst_25623);

return statearr_25641;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25632__$1,(9),results,inst_25618);
} else {
if((state_val_25633 === (9))){
var inst_25625 = (state_25632[(2)]);
var state_25632__$1 = (function (){var statearr_25642 = state_25632;
(statearr_25642[(10)] = inst_25625);

return statearr_25642;
})();
var statearr_25643_25748 = state_25632__$1;
(statearr_25643_25748[(2)] = null);

(statearr_25643_25748[(1)] = (2));


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
});})(c__25379__auto___25742,jobs,results,process,async))
;
return ((function (switch__25289__auto__,c__25379__auto___25742,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____0 = (function (){
var statearr_25644 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25644[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__);

(statearr_25644[(1)] = (1));

return statearr_25644;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____1 = (function (state_25632){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_25632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e25645){if((e25645 instanceof Object)){
var ex__25293__auto__ = e25645;
var statearr_25646_25749 = state_25632;
(statearr_25646_25749[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25750 = state_25632;
state_25632 = G__25750;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__ = function(state_25632){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____1.call(this,state_25632);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto___25742,jobs,results,process,async))
})();
var state__25381__auto__ = (function (){var statearr_25647 = f__25380__auto__.call(null);
(statearr_25647[(6)] = c__25379__auto___25742);

return statearr_25647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto___25742,jobs,results,process,async))
);


var c__25379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto__,jobs,results,process,async){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto__,jobs,results,process,async){
return (function (state_25685){
var state_val_25686 = (state_25685[(1)]);
if((state_val_25686 === (7))){
var inst_25681 = (state_25685[(2)]);
var state_25685__$1 = state_25685;
var statearr_25687_25751 = state_25685__$1;
(statearr_25687_25751[(2)] = inst_25681);

(statearr_25687_25751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (20))){
var state_25685__$1 = state_25685;
var statearr_25688_25752 = state_25685__$1;
(statearr_25688_25752[(2)] = null);

(statearr_25688_25752[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (1))){
var state_25685__$1 = state_25685;
var statearr_25689_25753 = state_25685__$1;
(statearr_25689_25753[(2)] = null);

(statearr_25689_25753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (4))){
var inst_25650 = (state_25685[(7)]);
var inst_25650__$1 = (state_25685[(2)]);
var inst_25651 = (inst_25650__$1 == null);
var state_25685__$1 = (function (){var statearr_25690 = state_25685;
(statearr_25690[(7)] = inst_25650__$1);

return statearr_25690;
})();
if(cljs.core.truth_(inst_25651)){
var statearr_25691_25754 = state_25685__$1;
(statearr_25691_25754[(1)] = (5));

} else {
var statearr_25692_25755 = state_25685__$1;
(statearr_25692_25755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (15))){
var inst_25663 = (state_25685[(8)]);
var state_25685__$1 = state_25685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25685__$1,(18),to,inst_25663);
} else {
if((state_val_25686 === (21))){
var inst_25676 = (state_25685[(2)]);
var state_25685__$1 = state_25685;
var statearr_25693_25756 = state_25685__$1;
(statearr_25693_25756[(2)] = inst_25676);

(statearr_25693_25756[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (13))){
var inst_25678 = (state_25685[(2)]);
var state_25685__$1 = (function (){var statearr_25694 = state_25685;
(statearr_25694[(9)] = inst_25678);

return statearr_25694;
})();
var statearr_25695_25757 = state_25685__$1;
(statearr_25695_25757[(2)] = null);

(statearr_25695_25757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (6))){
var inst_25650 = (state_25685[(7)]);
var state_25685__$1 = state_25685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25685__$1,(11),inst_25650);
} else {
if((state_val_25686 === (17))){
var inst_25671 = (state_25685[(2)]);
var state_25685__$1 = state_25685;
if(cljs.core.truth_(inst_25671)){
var statearr_25696_25758 = state_25685__$1;
(statearr_25696_25758[(1)] = (19));

} else {
var statearr_25697_25759 = state_25685__$1;
(statearr_25697_25759[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (3))){
var inst_25683 = (state_25685[(2)]);
var state_25685__$1 = state_25685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25685__$1,inst_25683);
} else {
if((state_val_25686 === (12))){
var inst_25660 = (state_25685[(10)]);
var state_25685__$1 = state_25685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25685__$1,(14),inst_25660);
} else {
if((state_val_25686 === (2))){
var state_25685__$1 = state_25685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25685__$1,(4),results);
} else {
if((state_val_25686 === (19))){
var state_25685__$1 = state_25685;
var statearr_25698_25760 = state_25685__$1;
(statearr_25698_25760[(2)] = null);

(statearr_25698_25760[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (11))){
var inst_25660 = (state_25685[(2)]);
var state_25685__$1 = (function (){var statearr_25699 = state_25685;
(statearr_25699[(10)] = inst_25660);

return statearr_25699;
})();
var statearr_25700_25761 = state_25685__$1;
(statearr_25700_25761[(2)] = null);

(statearr_25700_25761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (9))){
var state_25685__$1 = state_25685;
var statearr_25701_25762 = state_25685__$1;
(statearr_25701_25762[(2)] = null);

(statearr_25701_25762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (5))){
var state_25685__$1 = state_25685;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25702_25763 = state_25685__$1;
(statearr_25702_25763[(1)] = (8));

} else {
var statearr_25703_25764 = state_25685__$1;
(statearr_25703_25764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (14))){
var inst_25663 = (state_25685[(8)]);
var inst_25665 = (state_25685[(11)]);
var inst_25663__$1 = (state_25685[(2)]);
var inst_25664 = (inst_25663__$1 == null);
var inst_25665__$1 = cljs.core.not.call(null,inst_25664);
var state_25685__$1 = (function (){var statearr_25704 = state_25685;
(statearr_25704[(8)] = inst_25663__$1);

(statearr_25704[(11)] = inst_25665__$1);

return statearr_25704;
})();
if(inst_25665__$1){
var statearr_25705_25765 = state_25685__$1;
(statearr_25705_25765[(1)] = (15));

} else {
var statearr_25706_25766 = state_25685__$1;
(statearr_25706_25766[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (16))){
var inst_25665 = (state_25685[(11)]);
var state_25685__$1 = state_25685;
var statearr_25707_25767 = state_25685__$1;
(statearr_25707_25767[(2)] = inst_25665);

(statearr_25707_25767[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (10))){
var inst_25657 = (state_25685[(2)]);
var state_25685__$1 = state_25685;
var statearr_25708_25768 = state_25685__$1;
(statearr_25708_25768[(2)] = inst_25657);

(statearr_25708_25768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (18))){
var inst_25668 = (state_25685[(2)]);
var state_25685__$1 = state_25685;
var statearr_25709_25769 = state_25685__$1;
(statearr_25709_25769[(2)] = inst_25668);

(statearr_25709_25769[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25686 === (8))){
var inst_25654 = cljs.core.async.close_BANG_.call(null,to);
var state_25685__$1 = state_25685;
var statearr_25710_25770 = state_25685__$1;
(statearr_25710_25770[(2)] = inst_25654);

(statearr_25710_25770[(1)] = (10));


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
});})(c__25379__auto__,jobs,results,process,async))
;
return ((function (switch__25289__auto__,c__25379__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____0 = (function (){
var statearr_25711 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25711[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__);

(statearr_25711[(1)] = (1));

return statearr_25711;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____1 = (function (state_25685){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_25685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e25712){if((e25712 instanceof Object)){
var ex__25293__auto__ = e25712;
var statearr_25713_25771 = state_25685;
(statearr_25713_25771[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25772 = state_25685;
state_25685 = G__25772;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__ = function(state_25685){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____1.call(this,state_25685);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25290__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto__,jobs,results,process,async))
})();
var state__25381__auto__ = (function (){var statearr_25714 = f__25380__auto__.call(null);
(statearr_25714[(6)] = c__25379__auto__);

return statearr_25714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto__,jobs,results,process,async))
);

return c__25379__auto__;
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
var G__25774 = arguments.length;
switch (G__25774) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__25777 = arguments.length;
switch (G__25777) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__25780 = arguments.length;
switch (G__25780) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25379__auto___25829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto___25829,tc,fc){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto___25829,tc,fc){
return (function (state_25806){
var state_val_25807 = (state_25806[(1)]);
if((state_val_25807 === (7))){
var inst_25802 = (state_25806[(2)]);
var state_25806__$1 = state_25806;
var statearr_25808_25830 = state_25806__$1;
(statearr_25808_25830[(2)] = inst_25802);

(statearr_25808_25830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25807 === (1))){
var state_25806__$1 = state_25806;
var statearr_25809_25831 = state_25806__$1;
(statearr_25809_25831[(2)] = null);

(statearr_25809_25831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25807 === (4))){
var inst_25783 = (state_25806[(7)]);
var inst_25783__$1 = (state_25806[(2)]);
var inst_25784 = (inst_25783__$1 == null);
var state_25806__$1 = (function (){var statearr_25810 = state_25806;
(statearr_25810[(7)] = inst_25783__$1);

return statearr_25810;
})();
if(cljs.core.truth_(inst_25784)){
var statearr_25811_25832 = state_25806__$1;
(statearr_25811_25832[(1)] = (5));

} else {
var statearr_25812_25833 = state_25806__$1;
(statearr_25812_25833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25807 === (13))){
var state_25806__$1 = state_25806;
var statearr_25813_25834 = state_25806__$1;
(statearr_25813_25834[(2)] = null);

(statearr_25813_25834[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25807 === (6))){
var inst_25783 = (state_25806[(7)]);
var inst_25789 = p.call(null,inst_25783);
var state_25806__$1 = state_25806;
if(cljs.core.truth_(inst_25789)){
var statearr_25814_25835 = state_25806__$1;
(statearr_25814_25835[(1)] = (9));

} else {
var statearr_25815_25836 = state_25806__$1;
(statearr_25815_25836[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25807 === (3))){
var inst_25804 = (state_25806[(2)]);
var state_25806__$1 = state_25806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25806__$1,inst_25804);
} else {
if((state_val_25807 === (12))){
var state_25806__$1 = state_25806;
var statearr_25816_25837 = state_25806__$1;
(statearr_25816_25837[(2)] = null);

(statearr_25816_25837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25807 === (2))){
var state_25806__$1 = state_25806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25806__$1,(4),ch);
} else {
if((state_val_25807 === (11))){
var inst_25783 = (state_25806[(7)]);
var inst_25793 = (state_25806[(2)]);
var state_25806__$1 = state_25806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25806__$1,(8),inst_25793,inst_25783);
} else {
if((state_val_25807 === (9))){
var state_25806__$1 = state_25806;
var statearr_25817_25838 = state_25806__$1;
(statearr_25817_25838[(2)] = tc);

(statearr_25817_25838[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25807 === (5))){
var inst_25786 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25787 = cljs.core.async.close_BANG_.call(null,fc);
var state_25806__$1 = (function (){var statearr_25818 = state_25806;
(statearr_25818[(8)] = inst_25786);

return statearr_25818;
})();
var statearr_25819_25839 = state_25806__$1;
(statearr_25819_25839[(2)] = inst_25787);

(statearr_25819_25839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25807 === (14))){
var inst_25800 = (state_25806[(2)]);
var state_25806__$1 = state_25806;
var statearr_25820_25840 = state_25806__$1;
(statearr_25820_25840[(2)] = inst_25800);

(statearr_25820_25840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25807 === (10))){
var state_25806__$1 = state_25806;
var statearr_25821_25841 = state_25806__$1;
(statearr_25821_25841[(2)] = fc);

(statearr_25821_25841[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25807 === (8))){
var inst_25795 = (state_25806[(2)]);
var state_25806__$1 = state_25806;
if(cljs.core.truth_(inst_25795)){
var statearr_25822_25842 = state_25806__$1;
(statearr_25822_25842[(1)] = (12));

} else {
var statearr_25823_25843 = state_25806__$1;
(statearr_25823_25843[(1)] = (13));

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
});})(c__25379__auto___25829,tc,fc))
;
return ((function (switch__25289__auto__,c__25379__auto___25829,tc,fc){
return (function() {
var cljs$core$async$state_machine__25290__auto__ = null;
var cljs$core$async$state_machine__25290__auto____0 = (function (){
var statearr_25824 = [null,null,null,null,null,null,null,null,null];
(statearr_25824[(0)] = cljs$core$async$state_machine__25290__auto__);

(statearr_25824[(1)] = (1));

return statearr_25824;
});
var cljs$core$async$state_machine__25290__auto____1 = (function (state_25806){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_25806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e25825){if((e25825 instanceof Object)){
var ex__25293__auto__ = e25825;
var statearr_25826_25844 = state_25806;
(statearr_25826_25844[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25845 = state_25806;
state_25806 = G__25845;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$state_machine__25290__auto__ = function(state_25806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25290__auto____1.call(this,state_25806);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25290__auto____0;
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25290__auto____1;
return cljs$core$async$state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto___25829,tc,fc))
})();
var state__25381__auto__ = (function (){var statearr_25827 = f__25380__auto__.call(null);
(statearr_25827[(6)] = c__25379__auto___25829);

return statearr_25827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto___25829,tc,fc))
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
var c__25379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto__){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto__){
return (function (state_25866){
var state_val_25867 = (state_25866[(1)]);
if((state_val_25867 === (7))){
var inst_25862 = (state_25866[(2)]);
var state_25866__$1 = state_25866;
var statearr_25868_25886 = state_25866__$1;
(statearr_25868_25886[(2)] = inst_25862);

(statearr_25868_25886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (1))){
var inst_25846 = init;
var state_25866__$1 = (function (){var statearr_25869 = state_25866;
(statearr_25869[(7)] = inst_25846);

return statearr_25869;
})();
var statearr_25870_25887 = state_25866__$1;
(statearr_25870_25887[(2)] = null);

(statearr_25870_25887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (4))){
var inst_25849 = (state_25866[(8)]);
var inst_25849__$1 = (state_25866[(2)]);
var inst_25850 = (inst_25849__$1 == null);
var state_25866__$1 = (function (){var statearr_25871 = state_25866;
(statearr_25871[(8)] = inst_25849__$1);

return statearr_25871;
})();
if(cljs.core.truth_(inst_25850)){
var statearr_25872_25888 = state_25866__$1;
(statearr_25872_25888[(1)] = (5));

} else {
var statearr_25873_25889 = state_25866__$1;
(statearr_25873_25889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (6))){
var inst_25853 = (state_25866[(9)]);
var inst_25849 = (state_25866[(8)]);
var inst_25846 = (state_25866[(7)]);
var inst_25853__$1 = f.call(null,inst_25846,inst_25849);
var inst_25854 = cljs.core.reduced_QMARK_.call(null,inst_25853__$1);
var state_25866__$1 = (function (){var statearr_25874 = state_25866;
(statearr_25874[(9)] = inst_25853__$1);

return statearr_25874;
})();
if(inst_25854){
var statearr_25875_25890 = state_25866__$1;
(statearr_25875_25890[(1)] = (8));

} else {
var statearr_25876_25891 = state_25866__$1;
(statearr_25876_25891[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (3))){
var inst_25864 = (state_25866[(2)]);
var state_25866__$1 = state_25866;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25866__$1,inst_25864);
} else {
if((state_val_25867 === (2))){
var state_25866__$1 = state_25866;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25866__$1,(4),ch);
} else {
if((state_val_25867 === (9))){
var inst_25853 = (state_25866[(9)]);
var inst_25846 = inst_25853;
var state_25866__$1 = (function (){var statearr_25877 = state_25866;
(statearr_25877[(7)] = inst_25846);

return statearr_25877;
})();
var statearr_25878_25892 = state_25866__$1;
(statearr_25878_25892[(2)] = null);

(statearr_25878_25892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (5))){
var inst_25846 = (state_25866[(7)]);
var state_25866__$1 = state_25866;
var statearr_25879_25893 = state_25866__$1;
(statearr_25879_25893[(2)] = inst_25846);

(statearr_25879_25893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (10))){
var inst_25860 = (state_25866[(2)]);
var state_25866__$1 = state_25866;
var statearr_25880_25894 = state_25866__$1;
(statearr_25880_25894[(2)] = inst_25860);

(statearr_25880_25894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25867 === (8))){
var inst_25853 = (state_25866[(9)]);
var inst_25856 = cljs.core.deref.call(null,inst_25853);
var state_25866__$1 = state_25866;
var statearr_25881_25895 = state_25866__$1;
(statearr_25881_25895[(2)] = inst_25856);

(statearr_25881_25895[(1)] = (10));


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
});})(c__25379__auto__))
;
return ((function (switch__25289__auto__,c__25379__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25290__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25290__auto____0 = (function (){
var statearr_25882 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25882[(0)] = cljs$core$async$reduce_$_state_machine__25290__auto__);

(statearr_25882[(1)] = (1));

return statearr_25882;
});
var cljs$core$async$reduce_$_state_machine__25290__auto____1 = (function (state_25866){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_25866);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e25883){if((e25883 instanceof Object)){
var ex__25293__auto__ = e25883;
var statearr_25884_25896 = state_25866;
(statearr_25884_25896[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25897 = state_25866;
state_25866 = G__25897;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25290__auto__ = function(state_25866){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25290__auto____1.call(this,state_25866);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25290__auto____0;
cljs$core$async$reduce_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25290__auto____1;
return cljs$core$async$reduce_$_state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto__))
})();
var state__25381__auto__ = (function (){var statearr_25885 = f__25380__auto__.call(null);
(statearr_25885[(6)] = c__25379__auto__);

return statearr_25885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto__))
);

return c__25379__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto__,f__$1){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto__,f__$1){
return (function (state_25903){
var state_val_25904 = (state_25903[(1)]);
if((state_val_25904 === (1))){
var inst_25898 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_25903__$1 = state_25903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25903__$1,(2),inst_25898);
} else {
if((state_val_25904 === (2))){
var inst_25900 = (state_25903[(2)]);
var inst_25901 = f__$1.call(null,inst_25900);
var state_25903__$1 = state_25903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25903__$1,inst_25901);
} else {
return null;
}
}
});})(c__25379__auto__,f__$1))
;
return ((function (switch__25289__auto__,c__25379__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25290__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25290__auto____0 = (function (){
var statearr_25905 = [null,null,null,null,null,null,null];
(statearr_25905[(0)] = cljs$core$async$transduce_$_state_machine__25290__auto__);

(statearr_25905[(1)] = (1));

return statearr_25905;
});
var cljs$core$async$transduce_$_state_machine__25290__auto____1 = (function (state_25903){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_25903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e25906){if((e25906 instanceof Object)){
var ex__25293__auto__ = e25906;
var statearr_25907_25909 = state_25903;
(statearr_25907_25909[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25910 = state_25903;
state_25903 = G__25910;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25290__auto__ = function(state_25903){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25290__auto____1.call(this,state_25903);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25290__auto____0;
cljs$core$async$transduce_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25290__auto____1;
return cljs$core$async$transduce_$_state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto__,f__$1))
})();
var state__25381__auto__ = (function (){var statearr_25908 = f__25380__auto__.call(null);
(statearr_25908[(6)] = c__25379__auto__);

return statearr_25908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto__,f__$1))
);

return c__25379__auto__;
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
var G__25912 = arguments.length;
switch (G__25912) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto__){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto__){
return (function (state_25937){
var state_val_25938 = (state_25937[(1)]);
if((state_val_25938 === (7))){
var inst_25919 = (state_25937[(2)]);
var state_25937__$1 = state_25937;
var statearr_25939_25960 = state_25937__$1;
(statearr_25939_25960[(2)] = inst_25919);

(statearr_25939_25960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (1))){
var inst_25913 = cljs.core.seq.call(null,coll);
var inst_25914 = inst_25913;
var state_25937__$1 = (function (){var statearr_25940 = state_25937;
(statearr_25940[(7)] = inst_25914);

return statearr_25940;
})();
var statearr_25941_25961 = state_25937__$1;
(statearr_25941_25961[(2)] = null);

(statearr_25941_25961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (4))){
var inst_25914 = (state_25937[(7)]);
var inst_25917 = cljs.core.first.call(null,inst_25914);
var state_25937__$1 = state_25937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25937__$1,(7),ch,inst_25917);
} else {
if((state_val_25938 === (13))){
var inst_25931 = (state_25937[(2)]);
var state_25937__$1 = state_25937;
var statearr_25942_25962 = state_25937__$1;
(statearr_25942_25962[(2)] = inst_25931);

(statearr_25942_25962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (6))){
var inst_25922 = (state_25937[(2)]);
var state_25937__$1 = state_25937;
if(cljs.core.truth_(inst_25922)){
var statearr_25943_25963 = state_25937__$1;
(statearr_25943_25963[(1)] = (8));

} else {
var statearr_25944_25964 = state_25937__$1;
(statearr_25944_25964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (3))){
var inst_25935 = (state_25937[(2)]);
var state_25937__$1 = state_25937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25937__$1,inst_25935);
} else {
if((state_val_25938 === (12))){
var state_25937__$1 = state_25937;
var statearr_25945_25965 = state_25937__$1;
(statearr_25945_25965[(2)] = null);

(statearr_25945_25965[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (2))){
var inst_25914 = (state_25937[(7)]);
var state_25937__$1 = state_25937;
if(cljs.core.truth_(inst_25914)){
var statearr_25946_25966 = state_25937__$1;
(statearr_25946_25966[(1)] = (4));

} else {
var statearr_25947_25967 = state_25937__$1;
(statearr_25947_25967[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (11))){
var inst_25928 = cljs.core.async.close_BANG_.call(null,ch);
var state_25937__$1 = state_25937;
var statearr_25948_25968 = state_25937__$1;
(statearr_25948_25968[(2)] = inst_25928);

(statearr_25948_25968[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (9))){
var state_25937__$1 = state_25937;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25949_25969 = state_25937__$1;
(statearr_25949_25969[(1)] = (11));

} else {
var statearr_25950_25970 = state_25937__$1;
(statearr_25950_25970[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (5))){
var inst_25914 = (state_25937[(7)]);
var state_25937__$1 = state_25937;
var statearr_25951_25971 = state_25937__$1;
(statearr_25951_25971[(2)] = inst_25914);

(statearr_25951_25971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (10))){
var inst_25933 = (state_25937[(2)]);
var state_25937__$1 = state_25937;
var statearr_25952_25972 = state_25937__$1;
(statearr_25952_25972[(2)] = inst_25933);

(statearr_25952_25972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (8))){
var inst_25914 = (state_25937[(7)]);
var inst_25924 = cljs.core.next.call(null,inst_25914);
var inst_25914__$1 = inst_25924;
var state_25937__$1 = (function (){var statearr_25953 = state_25937;
(statearr_25953[(7)] = inst_25914__$1);

return statearr_25953;
})();
var statearr_25954_25973 = state_25937__$1;
(statearr_25954_25973[(2)] = null);

(statearr_25954_25973[(1)] = (2));


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
});})(c__25379__auto__))
;
return ((function (switch__25289__auto__,c__25379__auto__){
return (function() {
var cljs$core$async$state_machine__25290__auto__ = null;
var cljs$core$async$state_machine__25290__auto____0 = (function (){
var statearr_25955 = [null,null,null,null,null,null,null,null];
(statearr_25955[(0)] = cljs$core$async$state_machine__25290__auto__);

(statearr_25955[(1)] = (1));

return statearr_25955;
});
var cljs$core$async$state_machine__25290__auto____1 = (function (state_25937){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_25937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e25956){if((e25956 instanceof Object)){
var ex__25293__auto__ = e25956;
var statearr_25957_25974 = state_25937;
(statearr_25957_25974[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25975 = state_25937;
state_25937 = G__25975;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$state_machine__25290__auto__ = function(state_25937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25290__auto____1.call(this,state_25937);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25290__auto____0;
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25290__auto____1;
return cljs$core$async$state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto__))
})();
var state__25381__auto__ = (function (){var statearr_25958 = f__25380__auto__.call(null);
(statearr_25958[(6)] = c__25379__auto__);

return statearr_25958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto__))
);

return c__25379__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async25976 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25976 = (function (ch,cs,meta25977){
this.ch = ch;
this.cs = cs;
this.meta25977 = meta25977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async25976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25978,meta25977__$1){
var self__ = this;
var _25978__$1 = this;
return (new cljs.core.async.t_cljs$core$async25976(self__.ch,self__.cs,meta25977__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async25976.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25978){
var self__ = this;
var _25978__$1 = this;
return self__.meta25977;
});})(cs))
;

cljs.core.async.t_cljs$core$async25976.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25976.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async25976.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async25976.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25976.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25976.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async25976.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta25977","meta25977",591370674,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async25976.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25976.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25976";

cljs.core.async.t_cljs$core$async25976.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async25976");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25976.
 */
cljs.core.async.__GT_t_cljs$core$async25976 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async25976(ch__$1,cs__$1,meta25977){
return (new cljs.core.async.t_cljs$core$async25976(ch__$1,cs__$1,meta25977));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async25976(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25379__auto___26198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto___26198,cs,m,dchan,dctr,done){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto___26198,cs,m,dchan,dctr,done){
return (function (state_26113){
var state_val_26114 = (state_26113[(1)]);
if((state_val_26114 === (7))){
var inst_26109 = (state_26113[(2)]);
var state_26113__$1 = state_26113;
var statearr_26115_26199 = state_26113__$1;
(statearr_26115_26199[(2)] = inst_26109);

(statearr_26115_26199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (20))){
var inst_26012 = (state_26113[(7)]);
var inst_26024 = cljs.core.first.call(null,inst_26012);
var inst_26025 = cljs.core.nth.call(null,inst_26024,(0),null);
var inst_26026 = cljs.core.nth.call(null,inst_26024,(1),null);
var state_26113__$1 = (function (){var statearr_26116 = state_26113;
(statearr_26116[(8)] = inst_26025);

return statearr_26116;
})();
if(cljs.core.truth_(inst_26026)){
var statearr_26117_26200 = state_26113__$1;
(statearr_26117_26200[(1)] = (22));

} else {
var statearr_26118_26201 = state_26113__$1;
(statearr_26118_26201[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (27))){
var inst_26061 = (state_26113[(9)]);
var inst_26054 = (state_26113[(10)]);
var inst_26056 = (state_26113[(11)]);
var inst_25981 = (state_26113[(12)]);
var inst_26061__$1 = cljs.core._nth.call(null,inst_26054,inst_26056);
var inst_26062 = cljs.core.async.put_BANG_.call(null,inst_26061__$1,inst_25981,done);
var state_26113__$1 = (function (){var statearr_26119 = state_26113;
(statearr_26119[(9)] = inst_26061__$1);

return statearr_26119;
})();
if(cljs.core.truth_(inst_26062)){
var statearr_26120_26202 = state_26113__$1;
(statearr_26120_26202[(1)] = (30));

} else {
var statearr_26121_26203 = state_26113__$1;
(statearr_26121_26203[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (1))){
var state_26113__$1 = state_26113;
var statearr_26122_26204 = state_26113__$1;
(statearr_26122_26204[(2)] = null);

(statearr_26122_26204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (24))){
var inst_26012 = (state_26113[(7)]);
var inst_26031 = (state_26113[(2)]);
var inst_26032 = cljs.core.next.call(null,inst_26012);
var inst_25990 = inst_26032;
var inst_25991 = null;
var inst_25992 = (0);
var inst_25993 = (0);
var state_26113__$1 = (function (){var statearr_26123 = state_26113;
(statearr_26123[(13)] = inst_25992);

(statearr_26123[(14)] = inst_26031);

(statearr_26123[(15)] = inst_25991);

(statearr_26123[(16)] = inst_25990);

(statearr_26123[(17)] = inst_25993);

return statearr_26123;
})();
var statearr_26124_26205 = state_26113__$1;
(statearr_26124_26205[(2)] = null);

(statearr_26124_26205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (39))){
var state_26113__$1 = state_26113;
var statearr_26128_26206 = state_26113__$1;
(statearr_26128_26206[(2)] = null);

(statearr_26128_26206[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (4))){
var inst_25981 = (state_26113[(12)]);
var inst_25981__$1 = (state_26113[(2)]);
var inst_25982 = (inst_25981__$1 == null);
var state_26113__$1 = (function (){var statearr_26129 = state_26113;
(statearr_26129[(12)] = inst_25981__$1);

return statearr_26129;
})();
if(cljs.core.truth_(inst_25982)){
var statearr_26130_26207 = state_26113__$1;
(statearr_26130_26207[(1)] = (5));

} else {
var statearr_26131_26208 = state_26113__$1;
(statearr_26131_26208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (15))){
var inst_25992 = (state_26113[(13)]);
var inst_25991 = (state_26113[(15)]);
var inst_25990 = (state_26113[(16)]);
var inst_25993 = (state_26113[(17)]);
var inst_26008 = (state_26113[(2)]);
var inst_26009 = (inst_25993 + (1));
var tmp26125 = inst_25992;
var tmp26126 = inst_25991;
var tmp26127 = inst_25990;
var inst_25990__$1 = tmp26127;
var inst_25991__$1 = tmp26126;
var inst_25992__$1 = tmp26125;
var inst_25993__$1 = inst_26009;
var state_26113__$1 = (function (){var statearr_26132 = state_26113;
(statearr_26132[(13)] = inst_25992__$1);

(statearr_26132[(15)] = inst_25991__$1);

(statearr_26132[(16)] = inst_25990__$1);

(statearr_26132[(17)] = inst_25993__$1);

(statearr_26132[(18)] = inst_26008);

return statearr_26132;
})();
var statearr_26133_26209 = state_26113__$1;
(statearr_26133_26209[(2)] = null);

(statearr_26133_26209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (21))){
var inst_26035 = (state_26113[(2)]);
var state_26113__$1 = state_26113;
var statearr_26137_26210 = state_26113__$1;
(statearr_26137_26210[(2)] = inst_26035);

(statearr_26137_26210[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (31))){
var inst_26061 = (state_26113[(9)]);
var inst_26065 = done.call(null,null);
var inst_26066 = cljs.core.async.untap_STAR_.call(null,m,inst_26061);
var state_26113__$1 = (function (){var statearr_26138 = state_26113;
(statearr_26138[(19)] = inst_26065);

return statearr_26138;
})();
var statearr_26139_26211 = state_26113__$1;
(statearr_26139_26211[(2)] = inst_26066);

(statearr_26139_26211[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (32))){
var inst_26054 = (state_26113[(10)]);
var inst_26056 = (state_26113[(11)]);
var inst_26053 = (state_26113[(20)]);
var inst_26055 = (state_26113[(21)]);
var inst_26068 = (state_26113[(2)]);
var inst_26069 = (inst_26056 + (1));
var tmp26134 = inst_26054;
var tmp26135 = inst_26053;
var tmp26136 = inst_26055;
var inst_26053__$1 = tmp26135;
var inst_26054__$1 = tmp26134;
var inst_26055__$1 = tmp26136;
var inst_26056__$1 = inst_26069;
var state_26113__$1 = (function (){var statearr_26140 = state_26113;
(statearr_26140[(10)] = inst_26054__$1);

(statearr_26140[(11)] = inst_26056__$1);

(statearr_26140[(22)] = inst_26068);

(statearr_26140[(20)] = inst_26053__$1);

(statearr_26140[(21)] = inst_26055__$1);

return statearr_26140;
})();
var statearr_26141_26212 = state_26113__$1;
(statearr_26141_26212[(2)] = null);

(statearr_26141_26212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (40))){
var inst_26081 = (state_26113[(23)]);
var inst_26085 = done.call(null,null);
var inst_26086 = cljs.core.async.untap_STAR_.call(null,m,inst_26081);
var state_26113__$1 = (function (){var statearr_26142 = state_26113;
(statearr_26142[(24)] = inst_26085);

return statearr_26142;
})();
var statearr_26143_26213 = state_26113__$1;
(statearr_26143_26213[(2)] = inst_26086);

(statearr_26143_26213[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (33))){
var inst_26072 = (state_26113[(25)]);
var inst_26074 = cljs.core.chunked_seq_QMARK_.call(null,inst_26072);
var state_26113__$1 = state_26113;
if(inst_26074){
var statearr_26144_26214 = state_26113__$1;
(statearr_26144_26214[(1)] = (36));

} else {
var statearr_26145_26215 = state_26113__$1;
(statearr_26145_26215[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (13))){
var inst_26002 = (state_26113[(26)]);
var inst_26005 = cljs.core.async.close_BANG_.call(null,inst_26002);
var state_26113__$1 = state_26113;
var statearr_26146_26216 = state_26113__$1;
(statearr_26146_26216[(2)] = inst_26005);

(statearr_26146_26216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (22))){
var inst_26025 = (state_26113[(8)]);
var inst_26028 = cljs.core.async.close_BANG_.call(null,inst_26025);
var state_26113__$1 = state_26113;
var statearr_26147_26217 = state_26113__$1;
(statearr_26147_26217[(2)] = inst_26028);

(statearr_26147_26217[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (36))){
var inst_26072 = (state_26113[(25)]);
var inst_26076 = cljs.core.chunk_first.call(null,inst_26072);
var inst_26077 = cljs.core.chunk_rest.call(null,inst_26072);
var inst_26078 = cljs.core.count.call(null,inst_26076);
var inst_26053 = inst_26077;
var inst_26054 = inst_26076;
var inst_26055 = inst_26078;
var inst_26056 = (0);
var state_26113__$1 = (function (){var statearr_26148 = state_26113;
(statearr_26148[(10)] = inst_26054);

(statearr_26148[(11)] = inst_26056);

(statearr_26148[(20)] = inst_26053);

(statearr_26148[(21)] = inst_26055);

return statearr_26148;
})();
var statearr_26149_26218 = state_26113__$1;
(statearr_26149_26218[(2)] = null);

(statearr_26149_26218[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (41))){
var inst_26072 = (state_26113[(25)]);
var inst_26088 = (state_26113[(2)]);
var inst_26089 = cljs.core.next.call(null,inst_26072);
var inst_26053 = inst_26089;
var inst_26054 = null;
var inst_26055 = (0);
var inst_26056 = (0);
var state_26113__$1 = (function (){var statearr_26150 = state_26113;
(statearr_26150[(10)] = inst_26054);

(statearr_26150[(11)] = inst_26056);

(statearr_26150[(20)] = inst_26053);

(statearr_26150[(27)] = inst_26088);

(statearr_26150[(21)] = inst_26055);

return statearr_26150;
})();
var statearr_26151_26219 = state_26113__$1;
(statearr_26151_26219[(2)] = null);

(statearr_26151_26219[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (43))){
var state_26113__$1 = state_26113;
var statearr_26152_26220 = state_26113__$1;
(statearr_26152_26220[(2)] = null);

(statearr_26152_26220[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (29))){
var inst_26097 = (state_26113[(2)]);
var state_26113__$1 = state_26113;
var statearr_26153_26221 = state_26113__$1;
(statearr_26153_26221[(2)] = inst_26097);

(statearr_26153_26221[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (44))){
var inst_26106 = (state_26113[(2)]);
var state_26113__$1 = (function (){var statearr_26154 = state_26113;
(statearr_26154[(28)] = inst_26106);

return statearr_26154;
})();
var statearr_26155_26222 = state_26113__$1;
(statearr_26155_26222[(2)] = null);

(statearr_26155_26222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (6))){
var inst_26045 = (state_26113[(29)]);
var inst_26044 = cljs.core.deref.call(null,cs);
var inst_26045__$1 = cljs.core.keys.call(null,inst_26044);
var inst_26046 = cljs.core.count.call(null,inst_26045__$1);
var inst_26047 = cljs.core.reset_BANG_.call(null,dctr,inst_26046);
var inst_26052 = cljs.core.seq.call(null,inst_26045__$1);
var inst_26053 = inst_26052;
var inst_26054 = null;
var inst_26055 = (0);
var inst_26056 = (0);
var state_26113__$1 = (function (){var statearr_26156 = state_26113;
(statearr_26156[(29)] = inst_26045__$1);

(statearr_26156[(10)] = inst_26054);

(statearr_26156[(11)] = inst_26056);

(statearr_26156[(20)] = inst_26053);

(statearr_26156[(30)] = inst_26047);

(statearr_26156[(21)] = inst_26055);

return statearr_26156;
})();
var statearr_26157_26223 = state_26113__$1;
(statearr_26157_26223[(2)] = null);

(statearr_26157_26223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (28))){
var inst_26053 = (state_26113[(20)]);
var inst_26072 = (state_26113[(25)]);
var inst_26072__$1 = cljs.core.seq.call(null,inst_26053);
var state_26113__$1 = (function (){var statearr_26158 = state_26113;
(statearr_26158[(25)] = inst_26072__$1);

return statearr_26158;
})();
if(inst_26072__$1){
var statearr_26159_26224 = state_26113__$1;
(statearr_26159_26224[(1)] = (33));

} else {
var statearr_26160_26225 = state_26113__$1;
(statearr_26160_26225[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (25))){
var inst_26056 = (state_26113[(11)]);
var inst_26055 = (state_26113[(21)]);
var inst_26058 = (inst_26056 < inst_26055);
var inst_26059 = inst_26058;
var state_26113__$1 = state_26113;
if(cljs.core.truth_(inst_26059)){
var statearr_26161_26226 = state_26113__$1;
(statearr_26161_26226[(1)] = (27));

} else {
var statearr_26162_26227 = state_26113__$1;
(statearr_26162_26227[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (34))){
var state_26113__$1 = state_26113;
var statearr_26163_26228 = state_26113__$1;
(statearr_26163_26228[(2)] = null);

(statearr_26163_26228[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (17))){
var state_26113__$1 = state_26113;
var statearr_26164_26229 = state_26113__$1;
(statearr_26164_26229[(2)] = null);

(statearr_26164_26229[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (3))){
var inst_26111 = (state_26113[(2)]);
var state_26113__$1 = state_26113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26113__$1,inst_26111);
} else {
if((state_val_26114 === (12))){
var inst_26040 = (state_26113[(2)]);
var state_26113__$1 = state_26113;
var statearr_26165_26230 = state_26113__$1;
(statearr_26165_26230[(2)] = inst_26040);

(statearr_26165_26230[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (2))){
var state_26113__$1 = state_26113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26113__$1,(4),ch);
} else {
if((state_val_26114 === (23))){
var state_26113__$1 = state_26113;
var statearr_26166_26231 = state_26113__$1;
(statearr_26166_26231[(2)] = null);

(statearr_26166_26231[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (35))){
var inst_26095 = (state_26113[(2)]);
var state_26113__$1 = state_26113;
var statearr_26167_26232 = state_26113__$1;
(statearr_26167_26232[(2)] = inst_26095);

(statearr_26167_26232[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (19))){
var inst_26012 = (state_26113[(7)]);
var inst_26016 = cljs.core.chunk_first.call(null,inst_26012);
var inst_26017 = cljs.core.chunk_rest.call(null,inst_26012);
var inst_26018 = cljs.core.count.call(null,inst_26016);
var inst_25990 = inst_26017;
var inst_25991 = inst_26016;
var inst_25992 = inst_26018;
var inst_25993 = (0);
var state_26113__$1 = (function (){var statearr_26168 = state_26113;
(statearr_26168[(13)] = inst_25992);

(statearr_26168[(15)] = inst_25991);

(statearr_26168[(16)] = inst_25990);

(statearr_26168[(17)] = inst_25993);

return statearr_26168;
})();
var statearr_26169_26233 = state_26113__$1;
(statearr_26169_26233[(2)] = null);

(statearr_26169_26233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (11))){
var inst_25990 = (state_26113[(16)]);
var inst_26012 = (state_26113[(7)]);
var inst_26012__$1 = cljs.core.seq.call(null,inst_25990);
var state_26113__$1 = (function (){var statearr_26170 = state_26113;
(statearr_26170[(7)] = inst_26012__$1);

return statearr_26170;
})();
if(inst_26012__$1){
var statearr_26171_26234 = state_26113__$1;
(statearr_26171_26234[(1)] = (16));

} else {
var statearr_26172_26235 = state_26113__$1;
(statearr_26172_26235[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (9))){
var inst_26042 = (state_26113[(2)]);
var state_26113__$1 = state_26113;
var statearr_26173_26236 = state_26113__$1;
(statearr_26173_26236[(2)] = inst_26042);

(statearr_26173_26236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (5))){
var inst_25988 = cljs.core.deref.call(null,cs);
var inst_25989 = cljs.core.seq.call(null,inst_25988);
var inst_25990 = inst_25989;
var inst_25991 = null;
var inst_25992 = (0);
var inst_25993 = (0);
var state_26113__$1 = (function (){var statearr_26174 = state_26113;
(statearr_26174[(13)] = inst_25992);

(statearr_26174[(15)] = inst_25991);

(statearr_26174[(16)] = inst_25990);

(statearr_26174[(17)] = inst_25993);

return statearr_26174;
})();
var statearr_26175_26237 = state_26113__$1;
(statearr_26175_26237[(2)] = null);

(statearr_26175_26237[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (14))){
var state_26113__$1 = state_26113;
var statearr_26176_26238 = state_26113__$1;
(statearr_26176_26238[(2)] = null);

(statearr_26176_26238[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (45))){
var inst_26103 = (state_26113[(2)]);
var state_26113__$1 = state_26113;
var statearr_26177_26239 = state_26113__$1;
(statearr_26177_26239[(2)] = inst_26103);

(statearr_26177_26239[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (26))){
var inst_26045 = (state_26113[(29)]);
var inst_26099 = (state_26113[(2)]);
var inst_26100 = cljs.core.seq.call(null,inst_26045);
var state_26113__$1 = (function (){var statearr_26178 = state_26113;
(statearr_26178[(31)] = inst_26099);

return statearr_26178;
})();
if(inst_26100){
var statearr_26179_26240 = state_26113__$1;
(statearr_26179_26240[(1)] = (42));

} else {
var statearr_26180_26241 = state_26113__$1;
(statearr_26180_26241[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (16))){
var inst_26012 = (state_26113[(7)]);
var inst_26014 = cljs.core.chunked_seq_QMARK_.call(null,inst_26012);
var state_26113__$1 = state_26113;
if(inst_26014){
var statearr_26181_26242 = state_26113__$1;
(statearr_26181_26242[(1)] = (19));

} else {
var statearr_26182_26243 = state_26113__$1;
(statearr_26182_26243[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (38))){
var inst_26092 = (state_26113[(2)]);
var state_26113__$1 = state_26113;
var statearr_26183_26244 = state_26113__$1;
(statearr_26183_26244[(2)] = inst_26092);

(statearr_26183_26244[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (30))){
var state_26113__$1 = state_26113;
var statearr_26184_26245 = state_26113__$1;
(statearr_26184_26245[(2)] = null);

(statearr_26184_26245[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (10))){
var inst_25991 = (state_26113[(15)]);
var inst_25993 = (state_26113[(17)]);
var inst_26001 = cljs.core._nth.call(null,inst_25991,inst_25993);
var inst_26002 = cljs.core.nth.call(null,inst_26001,(0),null);
var inst_26003 = cljs.core.nth.call(null,inst_26001,(1),null);
var state_26113__$1 = (function (){var statearr_26185 = state_26113;
(statearr_26185[(26)] = inst_26002);

return statearr_26185;
})();
if(cljs.core.truth_(inst_26003)){
var statearr_26186_26246 = state_26113__$1;
(statearr_26186_26246[(1)] = (13));

} else {
var statearr_26187_26247 = state_26113__$1;
(statearr_26187_26247[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (18))){
var inst_26038 = (state_26113[(2)]);
var state_26113__$1 = state_26113;
var statearr_26188_26248 = state_26113__$1;
(statearr_26188_26248[(2)] = inst_26038);

(statearr_26188_26248[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (42))){
var state_26113__$1 = state_26113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26113__$1,(45),dchan);
} else {
if((state_val_26114 === (37))){
var inst_26081 = (state_26113[(23)]);
var inst_25981 = (state_26113[(12)]);
var inst_26072 = (state_26113[(25)]);
var inst_26081__$1 = cljs.core.first.call(null,inst_26072);
var inst_26082 = cljs.core.async.put_BANG_.call(null,inst_26081__$1,inst_25981,done);
var state_26113__$1 = (function (){var statearr_26189 = state_26113;
(statearr_26189[(23)] = inst_26081__$1);

return statearr_26189;
})();
if(cljs.core.truth_(inst_26082)){
var statearr_26190_26249 = state_26113__$1;
(statearr_26190_26249[(1)] = (39));

} else {
var statearr_26191_26250 = state_26113__$1;
(statearr_26191_26250[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26114 === (8))){
var inst_25992 = (state_26113[(13)]);
var inst_25993 = (state_26113[(17)]);
var inst_25995 = (inst_25993 < inst_25992);
var inst_25996 = inst_25995;
var state_26113__$1 = state_26113;
if(cljs.core.truth_(inst_25996)){
var statearr_26192_26251 = state_26113__$1;
(statearr_26192_26251[(1)] = (10));

} else {
var statearr_26193_26252 = state_26113__$1;
(statearr_26193_26252[(1)] = (11));

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
});})(c__25379__auto___26198,cs,m,dchan,dctr,done))
;
return ((function (switch__25289__auto__,c__25379__auto___26198,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25290__auto__ = null;
var cljs$core$async$mult_$_state_machine__25290__auto____0 = (function (){
var statearr_26194 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26194[(0)] = cljs$core$async$mult_$_state_machine__25290__auto__);

(statearr_26194[(1)] = (1));

return statearr_26194;
});
var cljs$core$async$mult_$_state_machine__25290__auto____1 = (function (state_26113){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_26113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e26195){if((e26195 instanceof Object)){
var ex__25293__auto__ = e26195;
var statearr_26196_26253 = state_26113;
(statearr_26196_26253[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26254 = state_26113;
state_26113 = G__26254;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25290__auto__ = function(state_26113){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25290__auto____1.call(this,state_26113);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25290__auto____0;
cljs$core$async$mult_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25290__auto____1;
return cljs$core$async$mult_$_state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto___26198,cs,m,dchan,dctr,done))
})();
var state__25381__auto__ = (function (){var statearr_26197 = f__25380__auto__.call(null);
(statearr_26197[(6)] = c__25379__auto___26198);

return statearr_26197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto___26198,cs,m,dchan,dctr,done))
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
var G__26256 = arguments.length;
switch (G__26256) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___26268 = arguments.length;
var i__4500__auto___26269 = (0);
while(true){
if((i__4500__auto___26269 < len__4499__auto___26268)){
args__4502__auto__.push((arguments[i__4500__auto___26269]));

var G__26270 = (i__4500__auto___26269 + (1));
i__4500__auto___26269 = G__26270;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26262){
var map__26263 = p__26262;
var map__26263__$1 = ((((!((map__26263 == null)))?(((((map__26263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26263):map__26263);
var opts = map__26263__$1;
var statearr_26265_26271 = state;
(statearr_26265_26271[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__26263,map__26263__$1,opts){
return (function (val){
var statearr_26266_26272 = state;
(statearr_26266_26272[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26263,map__26263__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_26267_26273 = state;
(statearr_26267_26273[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26258){
var G__26259 = cljs.core.first.call(null,seq26258);
var seq26258__$1 = cljs.core.next.call(null,seq26258);
var G__26260 = cljs.core.first.call(null,seq26258__$1);
var seq26258__$2 = cljs.core.next.call(null,seq26258__$1);
var G__26261 = cljs.core.first.call(null,seq26258__$2);
var seq26258__$3 = cljs.core.next.call(null,seq26258__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26259,G__26260,G__26261,seq26258__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26274 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26274 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta26275){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta26275 = meta26275;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26276,meta26275__$1){
var self__ = this;
var _26276__$1 = this;
return (new cljs.core.async.t_cljs$core$async26274(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta26275__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26274.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26276){
var self__ = this;
var _26276__$1 = this;
return self__.meta26275;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26274.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26274.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26274.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26274.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26274.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26274.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26274.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26274.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26274.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta26275","meta26275",-792154696,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26274.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26274.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26274";

cljs.core.async.t_cljs$core$async26274.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26274");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26274.
 */
cljs.core.async.__GT_t_cljs$core$async26274 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26274(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26275){
return (new cljs.core.async.t_cljs$core$async26274(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26275));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26274(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25379__auto___26438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto___26438,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto___26438,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26378){
var state_val_26379 = (state_26378[(1)]);
if((state_val_26379 === (7))){
var inst_26293 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
var statearr_26380_26439 = state_26378__$1;
(statearr_26380_26439[(2)] = inst_26293);

(statearr_26380_26439[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (20))){
var inst_26305 = (state_26378[(7)]);
var state_26378__$1 = state_26378;
var statearr_26381_26440 = state_26378__$1;
(statearr_26381_26440[(2)] = inst_26305);

(statearr_26381_26440[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (27))){
var state_26378__$1 = state_26378;
var statearr_26382_26441 = state_26378__$1;
(statearr_26382_26441[(2)] = null);

(statearr_26382_26441[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (1))){
var inst_26280 = (state_26378[(8)]);
var inst_26280__$1 = calc_state.call(null);
var inst_26282 = (inst_26280__$1 == null);
var inst_26283 = cljs.core.not.call(null,inst_26282);
var state_26378__$1 = (function (){var statearr_26383 = state_26378;
(statearr_26383[(8)] = inst_26280__$1);

return statearr_26383;
})();
if(inst_26283){
var statearr_26384_26442 = state_26378__$1;
(statearr_26384_26442[(1)] = (2));

} else {
var statearr_26385_26443 = state_26378__$1;
(statearr_26385_26443[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (24))){
var inst_26352 = (state_26378[(9)]);
var inst_26329 = (state_26378[(10)]);
var inst_26338 = (state_26378[(11)]);
var inst_26352__$1 = inst_26329.call(null,inst_26338);
var state_26378__$1 = (function (){var statearr_26386 = state_26378;
(statearr_26386[(9)] = inst_26352__$1);

return statearr_26386;
})();
if(cljs.core.truth_(inst_26352__$1)){
var statearr_26387_26444 = state_26378__$1;
(statearr_26387_26444[(1)] = (29));

} else {
var statearr_26388_26445 = state_26378__$1;
(statearr_26388_26445[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (4))){
var inst_26296 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
if(cljs.core.truth_(inst_26296)){
var statearr_26389_26446 = state_26378__$1;
(statearr_26389_26446[(1)] = (8));

} else {
var statearr_26390_26447 = state_26378__$1;
(statearr_26390_26447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (15))){
var inst_26323 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
if(cljs.core.truth_(inst_26323)){
var statearr_26391_26448 = state_26378__$1;
(statearr_26391_26448[(1)] = (19));

} else {
var statearr_26392_26449 = state_26378__$1;
(statearr_26392_26449[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (21))){
var inst_26328 = (state_26378[(12)]);
var inst_26328__$1 = (state_26378[(2)]);
var inst_26329 = cljs.core.get.call(null,inst_26328__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26330 = cljs.core.get.call(null,inst_26328__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26331 = cljs.core.get.call(null,inst_26328__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26378__$1 = (function (){var statearr_26393 = state_26378;
(statearr_26393[(12)] = inst_26328__$1);

(statearr_26393[(13)] = inst_26330);

(statearr_26393[(10)] = inst_26329);

return statearr_26393;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26378__$1,(22),inst_26331);
} else {
if((state_val_26379 === (31))){
var inst_26360 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
if(cljs.core.truth_(inst_26360)){
var statearr_26394_26450 = state_26378__$1;
(statearr_26394_26450[(1)] = (32));

} else {
var statearr_26395_26451 = state_26378__$1;
(statearr_26395_26451[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (32))){
var inst_26337 = (state_26378[(14)]);
var state_26378__$1 = state_26378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26378__$1,(35),out,inst_26337);
} else {
if((state_val_26379 === (33))){
var inst_26328 = (state_26378[(12)]);
var inst_26305 = inst_26328;
var state_26378__$1 = (function (){var statearr_26396 = state_26378;
(statearr_26396[(7)] = inst_26305);

return statearr_26396;
})();
var statearr_26397_26452 = state_26378__$1;
(statearr_26397_26452[(2)] = null);

(statearr_26397_26452[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (13))){
var inst_26305 = (state_26378[(7)]);
var inst_26312 = inst_26305.cljs$lang$protocol_mask$partition0$;
var inst_26313 = (inst_26312 & (64));
var inst_26314 = inst_26305.cljs$core$ISeq$;
var inst_26315 = (cljs.core.PROTOCOL_SENTINEL === inst_26314);
var inst_26316 = ((inst_26313) || (inst_26315));
var state_26378__$1 = state_26378;
if(cljs.core.truth_(inst_26316)){
var statearr_26398_26453 = state_26378__$1;
(statearr_26398_26453[(1)] = (16));

} else {
var statearr_26399_26454 = state_26378__$1;
(statearr_26399_26454[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (22))){
var inst_26337 = (state_26378[(14)]);
var inst_26338 = (state_26378[(11)]);
var inst_26336 = (state_26378[(2)]);
var inst_26337__$1 = cljs.core.nth.call(null,inst_26336,(0),null);
var inst_26338__$1 = cljs.core.nth.call(null,inst_26336,(1),null);
var inst_26339 = (inst_26337__$1 == null);
var inst_26340 = cljs.core._EQ_.call(null,inst_26338__$1,change);
var inst_26341 = ((inst_26339) || (inst_26340));
var state_26378__$1 = (function (){var statearr_26400 = state_26378;
(statearr_26400[(14)] = inst_26337__$1);

(statearr_26400[(11)] = inst_26338__$1);

return statearr_26400;
})();
if(cljs.core.truth_(inst_26341)){
var statearr_26401_26455 = state_26378__$1;
(statearr_26401_26455[(1)] = (23));

} else {
var statearr_26402_26456 = state_26378__$1;
(statearr_26402_26456[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (36))){
var inst_26328 = (state_26378[(12)]);
var inst_26305 = inst_26328;
var state_26378__$1 = (function (){var statearr_26403 = state_26378;
(statearr_26403[(7)] = inst_26305);

return statearr_26403;
})();
var statearr_26404_26457 = state_26378__$1;
(statearr_26404_26457[(2)] = null);

(statearr_26404_26457[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (29))){
var inst_26352 = (state_26378[(9)]);
var state_26378__$1 = state_26378;
var statearr_26405_26458 = state_26378__$1;
(statearr_26405_26458[(2)] = inst_26352);

(statearr_26405_26458[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (6))){
var state_26378__$1 = state_26378;
var statearr_26406_26459 = state_26378__$1;
(statearr_26406_26459[(2)] = false);

(statearr_26406_26459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (28))){
var inst_26348 = (state_26378[(2)]);
var inst_26349 = calc_state.call(null);
var inst_26305 = inst_26349;
var state_26378__$1 = (function (){var statearr_26407 = state_26378;
(statearr_26407[(15)] = inst_26348);

(statearr_26407[(7)] = inst_26305);

return statearr_26407;
})();
var statearr_26408_26460 = state_26378__$1;
(statearr_26408_26460[(2)] = null);

(statearr_26408_26460[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (25))){
var inst_26374 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
var statearr_26409_26461 = state_26378__$1;
(statearr_26409_26461[(2)] = inst_26374);

(statearr_26409_26461[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (34))){
var inst_26372 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
var statearr_26410_26462 = state_26378__$1;
(statearr_26410_26462[(2)] = inst_26372);

(statearr_26410_26462[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (17))){
var state_26378__$1 = state_26378;
var statearr_26411_26463 = state_26378__$1;
(statearr_26411_26463[(2)] = false);

(statearr_26411_26463[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (3))){
var state_26378__$1 = state_26378;
var statearr_26412_26464 = state_26378__$1;
(statearr_26412_26464[(2)] = false);

(statearr_26412_26464[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (12))){
var inst_26376 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26378__$1,inst_26376);
} else {
if((state_val_26379 === (2))){
var inst_26280 = (state_26378[(8)]);
var inst_26285 = inst_26280.cljs$lang$protocol_mask$partition0$;
var inst_26286 = (inst_26285 & (64));
var inst_26287 = inst_26280.cljs$core$ISeq$;
var inst_26288 = (cljs.core.PROTOCOL_SENTINEL === inst_26287);
var inst_26289 = ((inst_26286) || (inst_26288));
var state_26378__$1 = state_26378;
if(cljs.core.truth_(inst_26289)){
var statearr_26413_26465 = state_26378__$1;
(statearr_26413_26465[(1)] = (5));

} else {
var statearr_26414_26466 = state_26378__$1;
(statearr_26414_26466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (23))){
var inst_26337 = (state_26378[(14)]);
var inst_26343 = (inst_26337 == null);
var state_26378__$1 = state_26378;
if(cljs.core.truth_(inst_26343)){
var statearr_26415_26467 = state_26378__$1;
(statearr_26415_26467[(1)] = (26));

} else {
var statearr_26416_26468 = state_26378__$1;
(statearr_26416_26468[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (35))){
var inst_26363 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
if(cljs.core.truth_(inst_26363)){
var statearr_26417_26469 = state_26378__$1;
(statearr_26417_26469[(1)] = (36));

} else {
var statearr_26418_26470 = state_26378__$1;
(statearr_26418_26470[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (19))){
var inst_26305 = (state_26378[(7)]);
var inst_26325 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26305);
var state_26378__$1 = state_26378;
var statearr_26419_26471 = state_26378__$1;
(statearr_26419_26471[(2)] = inst_26325);

(statearr_26419_26471[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (11))){
var inst_26305 = (state_26378[(7)]);
var inst_26309 = (inst_26305 == null);
var inst_26310 = cljs.core.not.call(null,inst_26309);
var state_26378__$1 = state_26378;
if(inst_26310){
var statearr_26420_26472 = state_26378__$1;
(statearr_26420_26472[(1)] = (13));

} else {
var statearr_26421_26473 = state_26378__$1;
(statearr_26421_26473[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (9))){
var inst_26280 = (state_26378[(8)]);
var state_26378__$1 = state_26378;
var statearr_26422_26474 = state_26378__$1;
(statearr_26422_26474[(2)] = inst_26280);

(statearr_26422_26474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (5))){
var state_26378__$1 = state_26378;
var statearr_26423_26475 = state_26378__$1;
(statearr_26423_26475[(2)] = true);

(statearr_26423_26475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (14))){
var state_26378__$1 = state_26378;
var statearr_26424_26476 = state_26378__$1;
(statearr_26424_26476[(2)] = false);

(statearr_26424_26476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (26))){
var inst_26338 = (state_26378[(11)]);
var inst_26345 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26338);
var state_26378__$1 = state_26378;
var statearr_26425_26477 = state_26378__$1;
(statearr_26425_26477[(2)] = inst_26345);

(statearr_26425_26477[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (16))){
var state_26378__$1 = state_26378;
var statearr_26426_26478 = state_26378__$1;
(statearr_26426_26478[(2)] = true);

(statearr_26426_26478[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (38))){
var inst_26368 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
var statearr_26427_26479 = state_26378__$1;
(statearr_26427_26479[(2)] = inst_26368);

(statearr_26427_26479[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (30))){
var inst_26330 = (state_26378[(13)]);
var inst_26329 = (state_26378[(10)]);
var inst_26338 = (state_26378[(11)]);
var inst_26355 = cljs.core.empty_QMARK_.call(null,inst_26329);
var inst_26356 = inst_26330.call(null,inst_26338);
var inst_26357 = cljs.core.not.call(null,inst_26356);
var inst_26358 = ((inst_26355) && (inst_26357));
var state_26378__$1 = state_26378;
var statearr_26428_26480 = state_26378__$1;
(statearr_26428_26480[(2)] = inst_26358);

(statearr_26428_26480[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (10))){
var inst_26280 = (state_26378[(8)]);
var inst_26301 = (state_26378[(2)]);
var inst_26302 = cljs.core.get.call(null,inst_26301,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26303 = cljs.core.get.call(null,inst_26301,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26304 = cljs.core.get.call(null,inst_26301,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26305 = inst_26280;
var state_26378__$1 = (function (){var statearr_26429 = state_26378;
(statearr_26429[(16)] = inst_26304);

(statearr_26429[(17)] = inst_26303);

(statearr_26429[(18)] = inst_26302);

(statearr_26429[(7)] = inst_26305);

return statearr_26429;
})();
var statearr_26430_26481 = state_26378__$1;
(statearr_26430_26481[(2)] = null);

(statearr_26430_26481[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (18))){
var inst_26320 = (state_26378[(2)]);
var state_26378__$1 = state_26378;
var statearr_26431_26482 = state_26378__$1;
(statearr_26431_26482[(2)] = inst_26320);

(statearr_26431_26482[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (37))){
var state_26378__$1 = state_26378;
var statearr_26432_26483 = state_26378__$1;
(statearr_26432_26483[(2)] = null);

(statearr_26432_26483[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26379 === (8))){
var inst_26280 = (state_26378[(8)]);
var inst_26298 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26280);
var state_26378__$1 = state_26378;
var statearr_26433_26484 = state_26378__$1;
(statearr_26433_26484[(2)] = inst_26298);

(statearr_26433_26484[(1)] = (10));


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
});})(c__25379__auto___26438,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25289__auto__,c__25379__auto___26438,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25290__auto__ = null;
var cljs$core$async$mix_$_state_machine__25290__auto____0 = (function (){
var statearr_26434 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26434[(0)] = cljs$core$async$mix_$_state_machine__25290__auto__);

(statearr_26434[(1)] = (1));

return statearr_26434;
});
var cljs$core$async$mix_$_state_machine__25290__auto____1 = (function (state_26378){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_26378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e26435){if((e26435 instanceof Object)){
var ex__25293__auto__ = e26435;
var statearr_26436_26485 = state_26378;
(statearr_26436_26485[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26486 = state_26378;
state_26378 = G__26486;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25290__auto__ = function(state_26378){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25290__auto____1.call(this,state_26378);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25290__auto____0;
cljs$core$async$mix_$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25290__auto____1;
return cljs$core$async$mix_$_state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto___26438,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25381__auto__ = (function (){var statearr_26437 = f__25380__auto__.call(null);
(statearr_26437[(6)] = c__25379__auto___26438);

return statearr_26437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto___26438,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__26488 = arguments.length;
switch (G__26488) {
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var G__26492 = arguments.length;
switch (G__26492) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__26490_SHARP_){
if(cljs.core.truth_(p1__26490_SHARP_.call(null,topic))){
return p1__26490_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26490_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async26493 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26493 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta26494){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta26494 = meta26494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26495,meta26494__$1){
var self__ = this;
var _26495__$1 = this;
return (new cljs.core.async.t_cljs$core$async26493(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta26494__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26493.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26495){
var self__ = this;
var _26495__$1 = this;
return self__.meta26494;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26493.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26493.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26493.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26493.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26493.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26493.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26493.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26493.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta26494","meta26494",-1768400885,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async26493.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26493";

cljs.core.async.t_cljs$core$async26493.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26493");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26493.
 */
cljs.core.async.__GT_t_cljs$core$async26493 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async26493(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26494){
return (new cljs.core.async.t_cljs$core$async26493(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta26494));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async26493(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25379__auto___26613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto___26613,mults,ensure_mult,p){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto___26613,mults,ensure_mult,p){
return (function (state_26567){
var state_val_26568 = (state_26567[(1)]);
if((state_val_26568 === (7))){
var inst_26563 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
var statearr_26569_26614 = state_26567__$1;
(statearr_26569_26614[(2)] = inst_26563);

(statearr_26569_26614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (20))){
var state_26567__$1 = state_26567;
var statearr_26570_26615 = state_26567__$1;
(statearr_26570_26615[(2)] = null);

(statearr_26570_26615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (1))){
var state_26567__$1 = state_26567;
var statearr_26571_26616 = state_26567__$1;
(statearr_26571_26616[(2)] = null);

(statearr_26571_26616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (24))){
var inst_26546 = (state_26567[(7)]);
var inst_26555 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26546);
var state_26567__$1 = state_26567;
var statearr_26572_26617 = state_26567__$1;
(statearr_26572_26617[(2)] = inst_26555);

(statearr_26572_26617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (4))){
var inst_26498 = (state_26567[(8)]);
var inst_26498__$1 = (state_26567[(2)]);
var inst_26499 = (inst_26498__$1 == null);
var state_26567__$1 = (function (){var statearr_26573 = state_26567;
(statearr_26573[(8)] = inst_26498__$1);

return statearr_26573;
})();
if(cljs.core.truth_(inst_26499)){
var statearr_26574_26618 = state_26567__$1;
(statearr_26574_26618[(1)] = (5));

} else {
var statearr_26575_26619 = state_26567__$1;
(statearr_26575_26619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (15))){
var inst_26540 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
var statearr_26576_26620 = state_26567__$1;
(statearr_26576_26620[(2)] = inst_26540);

(statearr_26576_26620[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (21))){
var inst_26560 = (state_26567[(2)]);
var state_26567__$1 = (function (){var statearr_26577 = state_26567;
(statearr_26577[(9)] = inst_26560);

return statearr_26577;
})();
var statearr_26578_26621 = state_26567__$1;
(statearr_26578_26621[(2)] = null);

(statearr_26578_26621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (13))){
var inst_26522 = (state_26567[(10)]);
var inst_26524 = cljs.core.chunked_seq_QMARK_.call(null,inst_26522);
var state_26567__$1 = state_26567;
if(inst_26524){
var statearr_26579_26622 = state_26567__$1;
(statearr_26579_26622[(1)] = (16));

} else {
var statearr_26580_26623 = state_26567__$1;
(statearr_26580_26623[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (22))){
var inst_26552 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
if(cljs.core.truth_(inst_26552)){
var statearr_26581_26624 = state_26567__$1;
(statearr_26581_26624[(1)] = (23));

} else {
var statearr_26582_26625 = state_26567__$1;
(statearr_26582_26625[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (6))){
var inst_26498 = (state_26567[(8)]);
var inst_26548 = (state_26567[(11)]);
var inst_26546 = (state_26567[(7)]);
var inst_26546__$1 = topic_fn.call(null,inst_26498);
var inst_26547 = cljs.core.deref.call(null,mults);
var inst_26548__$1 = cljs.core.get.call(null,inst_26547,inst_26546__$1);
var state_26567__$1 = (function (){var statearr_26583 = state_26567;
(statearr_26583[(11)] = inst_26548__$1);

(statearr_26583[(7)] = inst_26546__$1);

return statearr_26583;
})();
if(cljs.core.truth_(inst_26548__$1)){
var statearr_26584_26626 = state_26567__$1;
(statearr_26584_26626[(1)] = (19));

} else {
var statearr_26585_26627 = state_26567__$1;
(statearr_26585_26627[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (25))){
var inst_26557 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
var statearr_26586_26628 = state_26567__$1;
(statearr_26586_26628[(2)] = inst_26557);

(statearr_26586_26628[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (17))){
var inst_26522 = (state_26567[(10)]);
var inst_26531 = cljs.core.first.call(null,inst_26522);
var inst_26532 = cljs.core.async.muxch_STAR_.call(null,inst_26531);
var inst_26533 = cljs.core.async.close_BANG_.call(null,inst_26532);
var inst_26534 = cljs.core.next.call(null,inst_26522);
var inst_26508 = inst_26534;
var inst_26509 = null;
var inst_26510 = (0);
var inst_26511 = (0);
var state_26567__$1 = (function (){var statearr_26587 = state_26567;
(statearr_26587[(12)] = inst_26510);

(statearr_26587[(13)] = inst_26511);

(statearr_26587[(14)] = inst_26533);

(statearr_26587[(15)] = inst_26509);

(statearr_26587[(16)] = inst_26508);

return statearr_26587;
})();
var statearr_26588_26629 = state_26567__$1;
(statearr_26588_26629[(2)] = null);

(statearr_26588_26629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (3))){
var inst_26565 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26567__$1,inst_26565);
} else {
if((state_val_26568 === (12))){
var inst_26542 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
var statearr_26589_26630 = state_26567__$1;
(statearr_26589_26630[(2)] = inst_26542);

(statearr_26589_26630[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (2))){
var state_26567__$1 = state_26567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26567__$1,(4),ch);
} else {
if((state_val_26568 === (23))){
var state_26567__$1 = state_26567;
var statearr_26590_26631 = state_26567__$1;
(statearr_26590_26631[(2)] = null);

(statearr_26590_26631[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (19))){
var inst_26498 = (state_26567[(8)]);
var inst_26548 = (state_26567[(11)]);
var inst_26550 = cljs.core.async.muxch_STAR_.call(null,inst_26548);
var state_26567__$1 = state_26567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26567__$1,(22),inst_26550,inst_26498);
} else {
if((state_val_26568 === (11))){
var inst_26522 = (state_26567[(10)]);
var inst_26508 = (state_26567[(16)]);
var inst_26522__$1 = cljs.core.seq.call(null,inst_26508);
var state_26567__$1 = (function (){var statearr_26591 = state_26567;
(statearr_26591[(10)] = inst_26522__$1);

return statearr_26591;
})();
if(inst_26522__$1){
var statearr_26592_26632 = state_26567__$1;
(statearr_26592_26632[(1)] = (13));

} else {
var statearr_26593_26633 = state_26567__$1;
(statearr_26593_26633[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (9))){
var inst_26544 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
var statearr_26594_26634 = state_26567__$1;
(statearr_26594_26634[(2)] = inst_26544);

(statearr_26594_26634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (5))){
var inst_26505 = cljs.core.deref.call(null,mults);
var inst_26506 = cljs.core.vals.call(null,inst_26505);
var inst_26507 = cljs.core.seq.call(null,inst_26506);
var inst_26508 = inst_26507;
var inst_26509 = null;
var inst_26510 = (0);
var inst_26511 = (0);
var state_26567__$1 = (function (){var statearr_26595 = state_26567;
(statearr_26595[(12)] = inst_26510);

(statearr_26595[(13)] = inst_26511);

(statearr_26595[(15)] = inst_26509);

(statearr_26595[(16)] = inst_26508);

return statearr_26595;
})();
var statearr_26596_26635 = state_26567__$1;
(statearr_26596_26635[(2)] = null);

(statearr_26596_26635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (14))){
var state_26567__$1 = state_26567;
var statearr_26600_26636 = state_26567__$1;
(statearr_26600_26636[(2)] = null);

(statearr_26600_26636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (16))){
var inst_26522 = (state_26567[(10)]);
var inst_26526 = cljs.core.chunk_first.call(null,inst_26522);
var inst_26527 = cljs.core.chunk_rest.call(null,inst_26522);
var inst_26528 = cljs.core.count.call(null,inst_26526);
var inst_26508 = inst_26527;
var inst_26509 = inst_26526;
var inst_26510 = inst_26528;
var inst_26511 = (0);
var state_26567__$1 = (function (){var statearr_26601 = state_26567;
(statearr_26601[(12)] = inst_26510);

(statearr_26601[(13)] = inst_26511);

(statearr_26601[(15)] = inst_26509);

(statearr_26601[(16)] = inst_26508);

return statearr_26601;
})();
var statearr_26602_26637 = state_26567__$1;
(statearr_26602_26637[(2)] = null);

(statearr_26602_26637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (10))){
var inst_26510 = (state_26567[(12)]);
var inst_26511 = (state_26567[(13)]);
var inst_26509 = (state_26567[(15)]);
var inst_26508 = (state_26567[(16)]);
var inst_26516 = cljs.core._nth.call(null,inst_26509,inst_26511);
var inst_26517 = cljs.core.async.muxch_STAR_.call(null,inst_26516);
var inst_26518 = cljs.core.async.close_BANG_.call(null,inst_26517);
var inst_26519 = (inst_26511 + (1));
var tmp26597 = inst_26510;
var tmp26598 = inst_26509;
var tmp26599 = inst_26508;
var inst_26508__$1 = tmp26599;
var inst_26509__$1 = tmp26598;
var inst_26510__$1 = tmp26597;
var inst_26511__$1 = inst_26519;
var state_26567__$1 = (function (){var statearr_26603 = state_26567;
(statearr_26603[(12)] = inst_26510__$1);

(statearr_26603[(13)] = inst_26511__$1);

(statearr_26603[(15)] = inst_26509__$1);

(statearr_26603[(17)] = inst_26518);

(statearr_26603[(16)] = inst_26508__$1);

return statearr_26603;
})();
var statearr_26604_26638 = state_26567__$1;
(statearr_26604_26638[(2)] = null);

(statearr_26604_26638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (18))){
var inst_26537 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
var statearr_26605_26639 = state_26567__$1;
(statearr_26605_26639[(2)] = inst_26537);

(statearr_26605_26639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (8))){
var inst_26510 = (state_26567[(12)]);
var inst_26511 = (state_26567[(13)]);
var inst_26513 = (inst_26511 < inst_26510);
var inst_26514 = inst_26513;
var state_26567__$1 = state_26567;
if(cljs.core.truth_(inst_26514)){
var statearr_26606_26640 = state_26567__$1;
(statearr_26606_26640[(1)] = (10));

} else {
var statearr_26607_26641 = state_26567__$1;
(statearr_26607_26641[(1)] = (11));

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
});})(c__25379__auto___26613,mults,ensure_mult,p))
;
return ((function (switch__25289__auto__,c__25379__auto___26613,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25290__auto__ = null;
var cljs$core$async$state_machine__25290__auto____0 = (function (){
var statearr_26608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26608[(0)] = cljs$core$async$state_machine__25290__auto__);

(statearr_26608[(1)] = (1));

return statearr_26608;
});
var cljs$core$async$state_machine__25290__auto____1 = (function (state_26567){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_26567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e26609){if((e26609 instanceof Object)){
var ex__25293__auto__ = e26609;
var statearr_26610_26642 = state_26567;
(statearr_26610_26642[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26643 = state_26567;
state_26567 = G__26643;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$state_machine__25290__auto__ = function(state_26567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25290__auto____1.call(this,state_26567);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25290__auto____0;
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25290__auto____1;
return cljs$core$async$state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto___26613,mults,ensure_mult,p))
})();
var state__25381__auto__ = (function (){var statearr_26611 = f__25380__auto__.call(null);
(statearr_26611[(6)] = c__25379__auto___26613);

return statearr_26611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto___26613,mults,ensure_mult,p))
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
var G__26645 = arguments.length;
switch (G__26645) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__26648 = arguments.length;
switch (G__26648) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__26651 = arguments.length;
switch (G__26651) {
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
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25379__auto___26718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto___26718,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto___26718,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26690){
var state_val_26691 = (state_26690[(1)]);
if((state_val_26691 === (7))){
var state_26690__$1 = state_26690;
var statearr_26692_26719 = state_26690__$1;
(statearr_26692_26719[(2)] = null);

(statearr_26692_26719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (1))){
var state_26690__$1 = state_26690;
var statearr_26693_26720 = state_26690__$1;
(statearr_26693_26720[(2)] = null);

(statearr_26693_26720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (4))){
var inst_26654 = (state_26690[(7)]);
var inst_26656 = (inst_26654 < cnt);
var state_26690__$1 = state_26690;
if(cljs.core.truth_(inst_26656)){
var statearr_26694_26721 = state_26690__$1;
(statearr_26694_26721[(1)] = (6));

} else {
var statearr_26695_26722 = state_26690__$1;
(statearr_26695_26722[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (15))){
var inst_26686 = (state_26690[(2)]);
var state_26690__$1 = state_26690;
var statearr_26696_26723 = state_26690__$1;
(statearr_26696_26723[(2)] = inst_26686);

(statearr_26696_26723[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (13))){
var inst_26679 = cljs.core.async.close_BANG_.call(null,out);
var state_26690__$1 = state_26690;
var statearr_26697_26724 = state_26690__$1;
(statearr_26697_26724[(2)] = inst_26679);

(statearr_26697_26724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (6))){
var state_26690__$1 = state_26690;
var statearr_26698_26725 = state_26690__$1;
(statearr_26698_26725[(2)] = null);

(statearr_26698_26725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (3))){
var inst_26688 = (state_26690[(2)]);
var state_26690__$1 = state_26690;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26690__$1,inst_26688);
} else {
if((state_val_26691 === (12))){
var inst_26676 = (state_26690[(8)]);
var inst_26676__$1 = (state_26690[(2)]);
var inst_26677 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26676__$1);
var state_26690__$1 = (function (){var statearr_26699 = state_26690;
(statearr_26699[(8)] = inst_26676__$1);

return statearr_26699;
})();
if(cljs.core.truth_(inst_26677)){
var statearr_26700_26726 = state_26690__$1;
(statearr_26700_26726[(1)] = (13));

} else {
var statearr_26701_26727 = state_26690__$1;
(statearr_26701_26727[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (2))){
var inst_26653 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26654 = (0);
var state_26690__$1 = (function (){var statearr_26702 = state_26690;
(statearr_26702[(7)] = inst_26654);

(statearr_26702[(9)] = inst_26653);

return statearr_26702;
})();
var statearr_26703_26728 = state_26690__$1;
(statearr_26703_26728[(2)] = null);

(statearr_26703_26728[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (11))){
var inst_26654 = (state_26690[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26690,(10),Object,null,(9));
var inst_26663 = chs__$1.call(null,inst_26654);
var inst_26664 = done.call(null,inst_26654);
var inst_26665 = cljs.core.async.take_BANG_.call(null,inst_26663,inst_26664);
var state_26690__$1 = state_26690;
var statearr_26704_26729 = state_26690__$1;
(statearr_26704_26729[(2)] = inst_26665);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26690__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (9))){
var inst_26654 = (state_26690[(7)]);
var inst_26667 = (state_26690[(2)]);
var inst_26668 = (inst_26654 + (1));
var inst_26654__$1 = inst_26668;
var state_26690__$1 = (function (){var statearr_26705 = state_26690;
(statearr_26705[(7)] = inst_26654__$1);

(statearr_26705[(10)] = inst_26667);

return statearr_26705;
})();
var statearr_26706_26730 = state_26690__$1;
(statearr_26706_26730[(2)] = null);

(statearr_26706_26730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (5))){
var inst_26674 = (state_26690[(2)]);
var state_26690__$1 = (function (){var statearr_26707 = state_26690;
(statearr_26707[(11)] = inst_26674);

return statearr_26707;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26690__$1,(12),dchan);
} else {
if((state_val_26691 === (14))){
var inst_26676 = (state_26690[(8)]);
var inst_26681 = cljs.core.apply.call(null,f,inst_26676);
var state_26690__$1 = state_26690;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26690__$1,(16),out,inst_26681);
} else {
if((state_val_26691 === (16))){
var inst_26683 = (state_26690[(2)]);
var state_26690__$1 = (function (){var statearr_26708 = state_26690;
(statearr_26708[(12)] = inst_26683);

return statearr_26708;
})();
var statearr_26709_26731 = state_26690__$1;
(statearr_26709_26731[(2)] = null);

(statearr_26709_26731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (10))){
var inst_26658 = (state_26690[(2)]);
var inst_26659 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26690__$1 = (function (){var statearr_26710 = state_26690;
(statearr_26710[(13)] = inst_26658);

return statearr_26710;
})();
var statearr_26711_26732 = state_26690__$1;
(statearr_26711_26732[(2)] = inst_26659);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26690__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26691 === (8))){
var inst_26672 = (state_26690[(2)]);
var state_26690__$1 = state_26690;
var statearr_26712_26733 = state_26690__$1;
(statearr_26712_26733[(2)] = inst_26672);

(statearr_26712_26733[(1)] = (5));


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
});})(c__25379__auto___26718,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25289__auto__,c__25379__auto___26718,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25290__auto__ = null;
var cljs$core$async$state_machine__25290__auto____0 = (function (){
var statearr_26713 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26713[(0)] = cljs$core$async$state_machine__25290__auto__);

(statearr_26713[(1)] = (1));

return statearr_26713;
});
var cljs$core$async$state_machine__25290__auto____1 = (function (state_26690){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_26690);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e26714){if((e26714 instanceof Object)){
var ex__25293__auto__ = e26714;
var statearr_26715_26734 = state_26690;
(statearr_26715_26734[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26690);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26735 = state_26690;
state_26690 = G__26735;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$state_machine__25290__auto__ = function(state_26690){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25290__auto____1.call(this,state_26690);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25290__auto____0;
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25290__auto____1;
return cljs$core$async$state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto___26718,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25381__auto__ = (function (){var statearr_26716 = f__25380__auto__.call(null);
(statearr_26716[(6)] = c__25379__auto___26718);

return statearr_26716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto___26718,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__26738 = arguments.length;
switch (G__26738) {
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
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25379__auto___26792 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto___26792,out){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto___26792,out){
return (function (state_26770){
var state_val_26771 = (state_26770[(1)]);
if((state_val_26771 === (7))){
var inst_26750 = (state_26770[(7)]);
var inst_26749 = (state_26770[(8)]);
var inst_26749__$1 = (state_26770[(2)]);
var inst_26750__$1 = cljs.core.nth.call(null,inst_26749__$1,(0),null);
var inst_26751 = cljs.core.nth.call(null,inst_26749__$1,(1),null);
var inst_26752 = (inst_26750__$1 == null);
var state_26770__$1 = (function (){var statearr_26772 = state_26770;
(statearr_26772[(7)] = inst_26750__$1);

(statearr_26772[(9)] = inst_26751);

(statearr_26772[(8)] = inst_26749__$1);

return statearr_26772;
})();
if(cljs.core.truth_(inst_26752)){
var statearr_26773_26793 = state_26770__$1;
(statearr_26773_26793[(1)] = (8));

} else {
var statearr_26774_26794 = state_26770__$1;
(statearr_26774_26794[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (1))){
var inst_26739 = cljs.core.vec.call(null,chs);
var inst_26740 = inst_26739;
var state_26770__$1 = (function (){var statearr_26775 = state_26770;
(statearr_26775[(10)] = inst_26740);

return statearr_26775;
})();
var statearr_26776_26795 = state_26770__$1;
(statearr_26776_26795[(2)] = null);

(statearr_26776_26795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (4))){
var inst_26740 = (state_26770[(10)]);
var state_26770__$1 = state_26770;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26770__$1,(7),inst_26740);
} else {
if((state_val_26771 === (6))){
var inst_26766 = (state_26770[(2)]);
var state_26770__$1 = state_26770;
var statearr_26777_26796 = state_26770__$1;
(statearr_26777_26796[(2)] = inst_26766);

(statearr_26777_26796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (3))){
var inst_26768 = (state_26770[(2)]);
var state_26770__$1 = state_26770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26770__$1,inst_26768);
} else {
if((state_val_26771 === (2))){
var inst_26740 = (state_26770[(10)]);
var inst_26742 = cljs.core.count.call(null,inst_26740);
var inst_26743 = (inst_26742 > (0));
var state_26770__$1 = state_26770;
if(cljs.core.truth_(inst_26743)){
var statearr_26779_26797 = state_26770__$1;
(statearr_26779_26797[(1)] = (4));

} else {
var statearr_26780_26798 = state_26770__$1;
(statearr_26780_26798[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (11))){
var inst_26740 = (state_26770[(10)]);
var inst_26759 = (state_26770[(2)]);
var tmp26778 = inst_26740;
var inst_26740__$1 = tmp26778;
var state_26770__$1 = (function (){var statearr_26781 = state_26770;
(statearr_26781[(11)] = inst_26759);

(statearr_26781[(10)] = inst_26740__$1);

return statearr_26781;
})();
var statearr_26782_26799 = state_26770__$1;
(statearr_26782_26799[(2)] = null);

(statearr_26782_26799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (9))){
var inst_26750 = (state_26770[(7)]);
var state_26770__$1 = state_26770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26770__$1,(11),out,inst_26750);
} else {
if((state_val_26771 === (5))){
var inst_26764 = cljs.core.async.close_BANG_.call(null,out);
var state_26770__$1 = state_26770;
var statearr_26783_26800 = state_26770__$1;
(statearr_26783_26800[(2)] = inst_26764);

(statearr_26783_26800[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (10))){
var inst_26762 = (state_26770[(2)]);
var state_26770__$1 = state_26770;
var statearr_26784_26801 = state_26770__$1;
(statearr_26784_26801[(2)] = inst_26762);

(statearr_26784_26801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26771 === (8))){
var inst_26750 = (state_26770[(7)]);
var inst_26740 = (state_26770[(10)]);
var inst_26751 = (state_26770[(9)]);
var inst_26749 = (state_26770[(8)]);
var inst_26754 = (function (){var cs = inst_26740;
var vec__26745 = inst_26749;
var v = inst_26750;
var c = inst_26751;
return ((function (cs,vec__26745,v,c,inst_26750,inst_26740,inst_26751,inst_26749,state_val_26771,c__25379__auto___26792,out){
return (function (p1__26736_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26736_SHARP_);
});
;})(cs,vec__26745,v,c,inst_26750,inst_26740,inst_26751,inst_26749,state_val_26771,c__25379__auto___26792,out))
})();
var inst_26755 = cljs.core.filterv.call(null,inst_26754,inst_26740);
var inst_26740__$1 = inst_26755;
var state_26770__$1 = (function (){var statearr_26785 = state_26770;
(statearr_26785[(10)] = inst_26740__$1);

return statearr_26785;
})();
var statearr_26786_26802 = state_26770__$1;
(statearr_26786_26802[(2)] = null);

(statearr_26786_26802[(1)] = (2));


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
});})(c__25379__auto___26792,out))
;
return ((function (switch__25289__auto__,c__25379__auto___26792,out){
return (function() {
var cljs$core$async$state_machine__25290__auto__ = null;
var cljs$core$async$state_machine__25290__auto____0 = (function (){
var statearr_26787 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26787[(0)] = cljs$core$async$state_machine__25290__auto__);

(statearr_26787[(1)] = (1));

return statearr_26787;
});
var cljs$core$async$state_machine__25290__auto____1 = (function (state_26770){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_26770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e26788){if((e26788 instanceof Object)){
var ex__25293__auto__ = e26788;
var statearr_26789_26803 = state_26770;
(statearr_26789_26803[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26804 = state_26770;
state_26770 = G__26804;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$state_machine__25290__auto__ = function(state_26770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25290__auto____1.call(this,state_26770);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25290__auto____0;
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25290__auto____1;
return cljs$core$async$state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto___26792,out))
})();
var state__25381__auto__ = (function (){var statearr_26790 = f__25380__auto__.call(null);
(statearr_26790[(6)] = c__25379__auto___26792);

return statearr_26790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto___26792,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__26806 = arguments.length;
switch (G__26806) {
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
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25379__auto___26851 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto___26851,out){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto___26851,out){
return (function (state_26830){
var state_val_26831 = (state_26830[(1)]);
if((state_val_26831 === (7))){
var inst_26812 = (state_26830[(7)]);
var inst_26812__$1 = (state_26830[(2)]);
var inst_26813 = (inst_26812__$1 == null);
var inst_26814 = cljs.core.not.call(null,inst_26813);
var state_26830__$1 = (function (){var statearr_26832 = state_26830;
(statearr_26832[(7)] = inst_26812__$1);

return statearr_26832;
})();
if(inst_26814){
var statearr_26833_26852 = state_26830__$1;
(statearr_26833_26852[(1)] = (8));

} else {
var statearr_26834_26853 = state_26830__$1;
(statearr_26834_26853[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (1))){
var inst_26807 = (0);
var state_26830__$1 = (function (){var statearr_26835 = state_26830;
(statearr_26835[(8)] = inst_26807);

return statearr_26835;
})();
var statearr_26836_26854 = state_26830__$1;
(statearr_26836_26854[(2)] = null);

(statearr_26836_26854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (4))){
var state_26830__$1 = state_26830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26830__$1,(7),ch);
} else {
if((state_val_26831 === (6))){
var inst_26825 = (state_26830[(2)]);
var state_26830__$1 = state_26830;
var statearr_26837_26855 = state_26830__$1;
(statearr_26837_26855[(2)] = inst_26825);

(statearr_26837_26855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (3))){
var inst_26827 = (state_26830[(2)]);
var inst_26828 = cljs.core.async.close_BANG_.call(null,out);
var state_26830__$1 = (function (){var statearr_26838 = state_26830;
(statearr_26838[(9)] = inst_26827);

return statearr_26838;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26830__$1,inst_26828);
} else {
if((state_val_26831 === (2))){
var inst_26807 = (state_26830[(8)]);
var inst_26809 = (inst_26807 < n);
var state_26830__$1 = state_26830;
if(cljs.core.truth_(inst_26809)){
var statearr_26839_26856 = state_26830__$1;
(statearr_26839_26856[(1)] = (4));

} else {
var statearr_26840_26857 = state_26830__$1;
(statearr_26840_26857[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (11))){
var inst_26807 = (state_26830[(8)]);
var inst_26817 = (state_26830[(2)]);
var inst_26818 = (inst_26807 + (1));
var inst_26807__$1 = inst_26818;
var state_26830__$1 = (function (){var statearr_26841 = state_26830;
(statearr_26841[(8)] = inst_26807__$1);

(statearr_26841[(10)] = inst_26817);

return statearr_26841;
})();
var statearr_26842_26858 = state_26830__$1;
(statearr_26842_26858[(2)] = null);

(statearr_26842_26858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (9))){
var state_26830__$1 = state_26830;
var statearr_26843_26859 = state_26830__$1;
(statearr_26843_26859[(2)] = null);

(statearr_26843_26859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (5))){
var state_26830__$1 = state_26830;
var statearr_26844_26860 = state_26830__$1;
(statearr_26844_26860[(2)] = null);

(statearr_26844_26860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (10))){
var inst_26822 = (state_26830[(2)]);
var state_26830__$1 = state_26830;
var statearr_26845_26861 = state_26830__$1;
(statearr_26845_26861[(2)] = inst_26822);

(statearr_26845_26861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26831 === (8))){
var inst_26812 = (state_26830[(7)]);
var state_26830__$1 = state_26830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26830__$1,(11),out,inst_26812);
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
});})(c__25379__auto___26851,out))
;
return ((function (switch__25289__auto__,c__25379__auto___26851,out){
return (function() {
var cljs$core$async$state_machine__25290__auto__ = null;
var cljs$core$async$state_machine__25290__auto____0 = (function (){
var statearr_26846 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26846[(0)] = cljs$core$async$state_machine__25290__auto__);

(statearr_26846[(1)] = (1));

return statearr_26846;
});
var cljs$core$async$state_machine__25290__auto____1 = (function (state_26830){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_26830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e26847){if((e26847 instanceof Object)){
var ex__25293__auto__ = e26847;
var statearr_26848_26862 = state_26830;
(statearr_26848_26862[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26863 = state_26830;
state_26830 = G__26863;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$state_machine__25290__auto__ = function(state_26830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25290__auto____1.call(this,state_26830);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25290__auto____0;
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25290__auto____1;
return cljs$core$async$state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto___26851,out))
})();
var state__25381__auto__ = (function (){var statearr_26849 = f__25380__auto__.call(null);
(statearr_26849[(6)] = c__25379__auto___26851);

return statearr_26849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto___26851,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26865 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26865 = (function (f,ch,meta26866){
this.f = f;
this.ch = ch;
this.meta26866 = meta26866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26867,meta26866__$1){
var self__ = this;
var _26867__$1 = this;
return (new cljs.core.async.t_cljs$core$async26865(self__.f,self__.ch,meta26866__$1));
});

cljs.core.async.t_cljs$core$async26865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26867){
var self__ = this;
var _26867__$1 = this;
return self__.meta26866;
});

cljs.core.async.t_cljs$core$async26865.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26865.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26865.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26865.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26865.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async26868 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26868 = (function (f,ch,meta26866,_,fn1,meta26869){
this.f = f;
this.ch = ch;
this.meta26866 = meta26866;
this._ = _;
this.fn1 = fn1;
this.meta26869 = meta26869;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26870,meta26869__$1){
var self__ = this;
var _26870__$1 = this;
return (new cljs.core.async.t_cljs$core$async26868(self__.f,self__.ch,self__.meta26866,self__._,self__.fn1,meta26869__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async26868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26870){
var self__ = this;
var _26870__$1 = this;
return self__.meta26869;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26868.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26868.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26868.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async26868.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26864_SHARP_){
return f1.call(null,(((p1__26864_SHARP_ == null))?null:self__.f.call(null,p1__26864_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async26868.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26866","meta26866",1847920877,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async26865","cljs.core.async/t_cljs$core$async26865",-810461614,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta26869","meta26869",-1182946724,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async26868.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26868.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26868";

cljs.core.async.t_cljs$core$async26868.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26868");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26868.
 */
cljs.core.async.__GT_t_cljs$core$async26868 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26868(f__$1,ch__$1,meta26866__$1,___$2,fn1__$1,meta26869){
return (new cljs.core.async.t_cljs$core$async26868(f__$1,ch__$1,meta26866__$1,___$2,fn1__$1,meta26869));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async26868(self__.f,self__.ch,self__.meta26866,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async26865.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26865.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async26865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26866","meta26866",1847920877,null)], null);
});

cljs.core.async.t_cljs$core$async26865.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26865.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26865";

cljs.core.async.t_cljs$core$async26865.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26865");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26865.
 */
cljs.core.async.__GT_t_cljs$core$async26865 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async26865(f__$1,ch__$1,meta26866){
return (new cljs.core.async.t_cljs$core$async26865(f__$1,ch__$1,meta26866));
});

}

return (new cljs.core.async.t_cljs$core$async26865(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async26871 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26871 = (function (f,ch,meta26872){
this.f = f;
this.ch = ch;
this.meta26872 = meta26872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26873,meta26872__$1){
var self__ = this;
var _26873__$1 = this;
return (new cljs.core.async.t_cljs$core$async26871(self__.f,self__.ch,meta26872__$1));
});

cljs.core.async.t_cljs$core$async26871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26873){
var self__ = this;
var _26873__$1 = this;
return self__.meta26872;
});

cljs.core.async.t_cljs$core$async26871.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26871.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26871.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26871.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26871.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26871.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async26871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26872","meta26872",-8557570,null)], null);
});

cljs.core.async.t_cljs$core$async26871.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26871";

cljs.core.async.t_cljs$core$async26871.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26871");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26871.
 */
cljs.core.async.__GT_t_cljs$core$async26871 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async26871(f__$1,ch__$1,meta26872){
return (new cljs.core.async.t_cljs$core$async26871(f__$1,ch__$1,meta26872));
});

}

return (new cljs.core.async.t_cljs$core$async26871(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async26874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26874 = (function (p,ch,meta26875){
this.p = p;
this.ch = ch;
this.meta26875 = meta26875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26876,meta26875__$1){
var self__ = this;
var _26876__$1 = this;
return (new cljs.core.async.t_cljs$core$async26874(self__.p,self__.ch,meta26875__$1));
});

cljs.core.async.t_cljs$core$async26874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26876){
var self__ = this;
var _26876__$1 = this;
return self__.meta26875;
});

cljs.core.async.t_cljs$core$async26874.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26874.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26874.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async26874.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26874.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async26874.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26874.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async26874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta26875","meta26875",5781486,null)], null);
});

cljs.core.async.t_cljs$core$async26874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26874";

cljs.core.async.t_cljs$core$async26874.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26874");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26874.
 */
cljs.core.async.__GT_t_cljs$core$async26874 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async26874(p__$1,ch__$1,meta26875){
return (new cljs.core.async.t_cljs$core$async26874(p__$1,ch__$1,meta26875));
});

}

return (new cljs.core.async.t_cljs$core$async26874(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__26878 = arguments.length;
switch (G__26878) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25379__auto___26918 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto___26918,out){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto___26918,out){
return (function (state_26899){
var state_val_26900 = (state_26899[(1)]);
if((state_val_26900 === (7))){
var inst_26895 = (state_26899[(2)]);
var state_26899__$1 = state_26899;
var statearr_26901_26919 = state_26899__$1;
(statearr_26901_26919[(2)] = inst_26895);

(statearr_26901_26919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26900 === (1))){
var state_26899__$1 = state_26899;
var statearr_26902_26920 = state_26899__$1;
(statearr_26902_26920[(2)] = null);

(statearr_26902_26920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26900 === (4))){
var inst_26881 = (state_26899[(7)]);
var inst_26881__$1 = (state_26899[(2)]);
var inst_26882 = (inst_26881__$1 == null);
var state_26899__$1 = (function (){var statearr_26903 = state_26899;
(statearr_26903[(7)] = inst_26881__$1);

return statearr_26903;
})();
if(cljs.core.truth_(inst_26882)){
var statearr_26904_26921 = state_26899__$1;
(statearr_26904_26921[(1)] = (5));

} else {
var statearr_26905_26922 = state_26899__$1;
(statearr_26905_26922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26900 === (6))){
var inst_26881 = (state_26899[(7)]);
var inst_26886 = p.call(null,inst_26881);
var state_26899__$1 = state_26899;
if(cljs.core.truth_(inst_26886)){
var statearr_26906_26923 = state_26899__$1;
(statearr_26906_26923[(1)] = (8));

} else {
var statearr_26907_26924 = state_26899__$1;
(statearr_26907_26924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26900 === (3))){
var inst_26897 = (state_26899[(2)]);
var state_26899__$1 = state_26899;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26899__$1,inst_26897);
} else {
if((state_val_26900 === (2))){
var state_26899__$1 = state_26899;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26899__$1,(4),ch);
} else {
if((state_val_26900 === (11))){
var inst_26889 = (state_26899[(2)]);
var state_26899__$1 = state_26899;
var statearr_26908_26925 = state_26899__$1;
(statearr_26908_26925[(2)] = inst_26889);

(statearr_26908_26925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26900 === (9))){
var state_26899__$1 = state_26899;
var statearr_26909_26926 = state_26899__$1;
(statearr_26909_26926[(2)] = null);

(statearr_26909_26926[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26900 === (5))){
var inst_26884 = cljs.core.async.close_BANG_.call(null,out);
var state_26899__$1 = state_26899;
var statearr_26910_26927 = state_26899__$1;
(statearr_26910_26927[(2)] = inst_26884);

(statearr_26910_26927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26900 === (10))){
var inst_26892 = (state_26899[(2)]);
var state_26899__$1 = (function (){var statearr_26911 = state_26899;
(statearr_26911[(8)] = inst_26892);

return statearr_26911;
})();
var statearr_26912_26928 = state_26899__$1;
(statearr_26912_26928[(2)] = null);

(statearr_26912_26928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26900 === (8))){
var inst_26881 = (state_26899[(7)]);
var state_26899__$1 = state_26899;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26899__$1,(11),out,inst_26881);
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
});})(c__25379__auto___26918,out))
;
return ((function (switch__25289__auto__,c__25379__auto___26918,out){
return (function() {
var cljs$core$async$state_machine__25290__auto__ = null;
var cljs$core$async$state_machine__25290__auto____0 = (function (){
var statearr_26913 = [null,null,null,null,null,null,null,null,null];
(statearr_26913[(0)] = cljs$core$async$state_machine__25290__auto__);

(statearr_26913[(1)] = (1));

return statearr_26913;
});
var cljs$core$async$state_machine__25290__auto____1 = (function (state_26899){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_26899);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e26914){if((e26914 instanceof Object)){
var ex__25293__auto__ = e26914;
var statearr_26915_26929 = state_26899;
(statearr_26915_26929[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26899);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26930 = state_26899;
state_26899 = G__26930;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$state_machine__25290__auto__ = function(state_26899){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25290__auto____1.call(this,state_26899);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25290__auto____0;
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25290__auto____1;
return cljs$core$async$state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto___26918,out))
})();
var state__25381__auto__ = (function (){var statearr_26916 = f__25380__auto__.call(null);
(statearr_26916[(6)] = c__25379__auto___26918);

return statearr_26916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto___26918,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__26932 = arguments.length;
switch (G__26932) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25379__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto__){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto__){
return (function (state_26995){
var state_val_26996 = (state_26995[(1)]);
if((state_val_26996 === (7))){
var inst_26991 = (state_26995[(2)]);
var state_26995__$1 = state_26995;
var statearr_26997_27035 = state_26995__$1;
(statearr_26997_27035[(2)] = inst_26991);

(statearr_26997_27035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (20))){
var inst_26961 = (state_26995[(7)]);
var inst_26972 = (state_26995[(2)]);
var inst_26973 = cljs.core.next.call(null,inst_26961);
var inst_26947 = inst_26973;
var inst_26948 = null;
var inst_26949 = (0);
var inst_26950 = (0);
var state_26995__$1 = (function (){var statearr_26998 = state_26995;
(statearr_26998[(8)] = inst_26947);

(statearr_26998[(9)] = inst_26949);

(statearr_26998[(10)] = inst_26972);

(statearr_26998[(11)] = inst_26950);

(statearr_26998[(12)] = inst_26948);

return statearr_26998;
})();
var statearr_26999_27036 = state_26995__$1;
(statearr_26999_27036[(2)] = null);

(statearr_26999_27036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (1))){
var state_26995__$1 = state_26995;
var statearr_27000_27037 = state_26995__$1;
(statearr_27000_27037[(2)] = null);

(statearr_27000_27037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (4))){
var inst_26936 = (state_26995[(13)]);
var inst_26936__$1 = (state_26995[(2)]);
var inst_26937 = (inst_26936__$1 == null);
var state_26995__$1 = (function (){var statearr_27001 = state_26995;
(statearr_27001[(13)] = inst_26936__$1);

return statearr_27001;
})();
if(cljs.core.truth_(inst_26937)){
var statearr_27002_27038 = state_26995__$1;
(statearr_27002_27038[(1)] = (5));

} else {
var statearr_27003_27039 = state_26995__$1;
(statearr_27003_27039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (15))){
var state_26995__$1 = state_26995;
var statearr_27007_27040 = state_26995__$1;
(statearr_27007_27040[(2)] = null);

(statearr_27007_27040[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (21))){
var state_26995__$1 = state_26995;
var statearr_27008_27041 = state_26995__$1;
(statearr_27008_27041[(2)] = null);

(statearr_27008_27041[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (13))){
var inst_26947 = (state_26995[(8)]);
var inst_26949 = (state_26995[(9)]);
var inst_26950 = (state_26995[(11)]);
var inst_26948 = (state_26995[(12)]);
var inst_26957 = (state_26995[(2)]);
var inst_26958 = (inst_26950 + (1));
var tmp27004 = inst_26947;
var tmp27005 = inst_26949;
var tmp27006 = inst_26948;
var inst_26947__$1 = tmp27004;
var inst_26948__$1 = tmp27006;
var inst_26949__$1 = tmp27005;
var inst_26950__$1 = inst_26958;
var state_26995__$1 = (function (){var statearr_27009 = state_26995;
(statearr_27009[(8)] = inst_26947__$1);

(statearr_27009[(9)] = inst_26949__$1);

(statearr_27009[(11)] = inst_26950__$1);

(statearr_27009[(14)] = inst_26957);

(statearr_27009[(12)] = inst_26948__$1);

return statearr_27009;
})();
var statearr_27010_27042 = state_26995__$1;
(statearr_27010_27042[(2)] = null);

(statearr_27010_27042[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (22))){
var state_26995__$1 = state_26995;
var statearr_27011_27043 = state_26995__$1;
(statearr_27011_27043[(2)] = null);

(statearr_27011_27043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (6))){
var inst_26936 = (state_26995[(13)]);
var inst_26945 = f.call(null,inst_26936);
var inst_26946 = cljs.core.seq.call(null,inst_26945);
var inst_26947 = inst_26946;
var inst_26948 = null;
var inst_26949 = (0);
var inst_26950 = (0);
var state_26995__$1 = (function (){var statearr_27012 = state_26995;
(statearr_27012[(8)] = inst_26947);

(statearr_27012[(9)] = inst_26949);

(statearr_27012[(11)] = inst_26950);

(statearr_27012[(12)] = inst_26948);

return statearr_27012;
})();
var statearr_27013_27044 = state_26995__$1;
(statearr_27013_27044[(2)] = null);

(statearr_27013_27044[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (17))){
var inst_26961 = (state_26995[(7)]);
var inst_26965 = cljs.core.chunk_first.call(null,inst_26961);
var inst_26966 = cljs.core.chunk_rest.call(null,inst_26961);
var inst_26967 = cljs.core.count.call(null,inst_26965);
var inst_26947 = inst_26966;
var inst_26948 = inst_26965;
var inst_26949 = inst_26967;
var inst_26950 = (0);
var state_26995__$1 = (function (){var statearr_27014 = state_26995;
(statearr_27014[(8)] = inst_26947);

(statearr_27014[(9)] = inst_26949);

(statearr_27014[(11)] = inst_26950);

(statearr_27014[(12)] = inst_26948);

return statearr_27014;
})();
var statearr_27015_27045 = state_26995__$1;
(statearr_27015_27045[(2)] = null);

(statearr_27015_27045[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (3))){
var inst_26993 = (state_26995[(2)]);
var state_26995__$1 = state_26995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26995__$1,inst_26993);
} else {
if((state_val_26996 === (12))){
var inst_26981 = (state_26995[(2)]);
var state_26995__$1 = state_26995;
var statearr_27016_27046 = state_26995__$1;
(statearr_27016_27046[(2)] = inst_26981);

(statearr_27016_27046[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (2))){
var state_26995__$1 = state_26995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26995__$1,(4),in$);
} else {
if((state_val_26996 === (23))){
var inst_26989 = (state_26995[(2)]);
var state_26995__$1 = state_26995;
var statearr_27017_27047 = state_26995__$1;
(statearr_27017_27047[(2)] = inst_26989);

(statearr_27017_27047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (19))){
var inst_26976 = (state_26995[(2)]);
var state_26995__$1 = state_26995;
var statearr_27018_27048 = state_26995__$1;
(statearr_27018_27048[(2)] = inst_26976);

(statearr_27018_27048[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (11))){
var inst_26947 = (state_26995[(8)]);
var inst_26961 = (state_26995[(7)]);
var inst_26961__$1 = cljs.core.seq.call(null,inst_26947);
var state_26995__$1 = (function (){var statearr_27019 = state_26995;
(statearr_27019[(7)] = inst_26961__$1);

return statearr_27019;
})();
if(inst_26961__$1){
var statearr_27020_27049 = state_26995__$1;
(statearr_27020_27049[(1)] = (14));

} else {
var statearr_27021_27050 = state_26995__$1;
(statearr_27021_27050[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (9))){
var inst_26983 = (state_26995[(2)]);
var inst_26984 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26995__$1 = (function (){var statearr_27022 = state_26995;
(statearr_27022[(15)] = inst_26983);

return statearr_27022;
})();
if(cljs.core.truth_(inst_26984)){
var statearr_27023_27051 = state_26995__$1;
(statearr_27023_27051[(1)] = (21));

} else {
var statearr_27024_27052 = state_26995__$1;
(statearr_27024_27052[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (5))){
var inst_26939 = cljs.core.async.close_BANG_.call(null,out);
var state_26995__$1 = state_26995;
var statearr_27025_27053 = state_26995__$1;
(statearr_27025_27053[(2)] = inst_26939);

(statearr_27025_27053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (14))){
var inst_26961 = (state_26995[(7)]);
var inst_26963 = cljs.core.chunked_seq_QMARK_.call(null,inst_26961);
var state_26995__$1 = state_26995;
if(inst_26963){
var statearr_27026_27054 = state_26995__$1;
(statearr_27026_27054[(1)] = (17));

} else {
var statearr_27027_27055 = state_26995__$1;
(statearr_27027_27055[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (16))){
var inst_26979 = (state_26995[(2)]);
var state_26995__$1 = state_26995;
var statearr_27028_27056 = state_26995__$1;
(statearr_27028_27056[(2)] = inst_26979);

(statearr_27028_27056[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26996 === (10))){
var inst_26950 = (state_26995[(11)]);
var inst_26948 = (state_26995[(12)]);
var inst_26955 = cljs.core._nth.call(null,inst_26948,inst_26950);
var state_26995__$1 = state_26995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26995__$1,(13),out,inst_26955);
} else {
if((state_val_26996 === (18))){
var inst_26961 = (state_26995[(7)]);
var inst_26970 = cljs.core.first.call(null,inst_26961);
var state_26995__$1 = state_26995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26995__$1,(20),out,inst_26970);
} else {
if((state_val_26996 === (8))){
var inst_26949 = (state_26995[(9)]);
var inst_26950 = (state_26995[(11)]);
var inst_26952 = (inst_26950 < inst_26949);
var inst_26953 = inst_26952;
var state_26995__$1 = state_26995;
if(cljs.core.truth_(inst_26953)){
var statearr_27029_27057 = state_26995__$1;
(statearr_27029_27057[(1)] = (10));

} else {
var statearr_27030_27058 = state_26995__$1;
(statearr_27030_27058[(1)] = (11));

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
});})(c__25379__auto__))
;
return ((function (switch__25289__auto__,c__25379__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25290__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25290__auto____0 = (function (){
var statearr_27031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27031[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25290__auto__);

(statearr_27031[(1)] = (1));

return statearr_27031;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25290__auto____1 = (function (state_26995){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_26995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e27032){if((e27032 instanceof Object)){
var ex__25293__auto__ = e27032;
var statearr_27033_27059 = state_26995;
(statearr_27033_27059[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27060 = state_26995;
state_26995 = G__27060;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25290__auto__ = function(state_26995){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25290__auto____1.call(this,state_26995);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25290__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25290__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto__))
})();
var state__25381__auto__ = (function (){var statearr_27034 = f__25380__auto__.call(null);
(statearr_27034[(6)] = c__25379__auto__);

return statearr_27034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto__))
);

return c__25379__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27062 = arguments.length;
switch (G__27062) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__27065 = arguments.length;
switch (G__27065) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__27068 = arguments.length;
switch (G__27068) {
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
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25379__auto___27115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto___27115,out){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto___27115,out){
return (function (state_27092){
var state_val_27093 = (state_27092[(1)]);
if((state_val_27093 === (7))){
var inst_27087 = (state_27092[(2)]);
var state_27092__$1 = state_27092;
var statearr_27094_27116 = state_27092__$1;
(statearr_27094_27116[(2)] = inst_27087);

(statearr_27094_27116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (1))){
var inst_27069 = null;
var state_27092__$1 = (function (){var statearr_27095 = state_27092;
(statearr_27095[(7)] = inst_27069);

return statearr_27095;
})();
var statearr_27096_27117 = state_27092__$1;
(statearr_27096_27117[(2)] = null);

(statearr_27096_27117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (4))){
var inst_27072 = (state_27092[(8)]);
var inst_27072__$1 = (state_27092[(2)]);
var inst_27073 = (inst_27072__$1 == null);
var inst_27074 = cljs.core.not.call(null,inst_27073);
var state_27092__$1 = (function (){var statearr_27097 = state_27092;
(statearr_27097[(8)] = inst_27072__$1);

return statearr_27097;
})();
if(inst_27074){
var statearr_27098_27118 = state_27092__$1;
(statearr_27098_27118[(1)] = (5));

} else {
var statearr_27099_27119 = state_27092__$1;
(statearr_27099_27119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (6))){
var state_27092__$1 = state_27092;
var statearr_27100_27120 = state_27092__$1;
(statearr_27100_27120[(2)] = null);

(statearr_27100_27120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (3))){
var inst_27089 = (state_27092[(2)]);
var inst_27090 = cljs.core.async.close_BANG_.call(null,out);
var state_27092__$1 = (function (){var statearr_27101 = state_27092;
(statearr_27101[(9)] = inst_27089);

return statearr_27101;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27092__$1,inst_27090);
} else {
if((state_val_27093 === (2))){
var state_27092__$1 = state_27092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27092__$1,(4),ch);
} else {
if((state_val_27093 === (11))){
var inst_27072 = (state_27092[(8)]);
var inst_27081 = (state_27092[(2)]);
var inst_27069 = inst_27072;
var state_27092__$1 = (function (){var statearr_27102 = state_27092;
(statearr_27102[(10)] = inst_27081);

(statearr_27102[(7)] = inst_27069);

return statearr_27102;
})();
var statearr_27103_27121 = state_27092__$1;
(statearr_27103_27121[(2)] = null);

(statearr_27103_27121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (9))){
var inst_27072 = (state_27092[(8)]);
var state_27092__$1 = state_27092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27092__$1,(11),out,inst_27072);
} else {
if((state_val_27093 === (5))){
var inst_27069 = (state_27092[(7)]);
var inst_27072 = (state_27092[(8)]);
var inst_27076 = cljs.core._EQ_.call(null,inst_27072,inst_27069);
var state_27092__$1 = state_27092;
if(inst_27076){
var statearr_27105_27122 = state_27092__$1;
(statearr_27105_27122[(1)] = (8));

} else {
var statearr_27106_27123 = state_27092__$1;
(statearr_27106_27123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (10))){
var inst_27084 = (state_27092[(2)]);
var state_27092__$1 = state_27092;
var statearr_27107_27124 = state_27092__$1;
(statearr_27107_27124[(2)] = inst_27084);

(statearr_27107_27124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27093 === (8))){
var inst_27069 = (state_27092[(7)]);
var tmp27104 = inst_27069;
var inst_27069__$1 = tmp27104;
var state_27092__$1 = (function (){var statearr_27108 = state_27092;
(statearr_27108[(7)] = inst_27069__$1);

return statearr_27108;
})();
var statearr_27109_27125 = state_27092__$1;
(statearr_27109_27125[(2)] = null);

(statearr_27109_27125[(1)] = (2));


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
});})(c__25379__auto___27115,out))
;
return ((function (switch__25289__auto__,c__25379__auto___27115,out){
return (function() {
var cljs$core$async$state_machine__25290__auto__ = null;
var cljs$core$async$state_machine__25290__auto____0 = (function (){
var statearr_27110 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27110[(0)] = cljs$core$async$state_machine__25290__auto__);

(statearr_27110[(1)] = (1));

return statearr_27110;
});
var cljs$core$async$state_machine__25290__auto____1 = (function (state_27092){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_27092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e27111){if((e27111 instanceof Object)){
var ex__25293__auto__ = e27111;
var statearr_27112_27126 = state_27092;
(statearr_27112_27126[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27127 = state_27092;
state_27092 = G__27127;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$state_machine__25290__auto__ = function(state_27092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25290__auto____1.call(this,state_27092);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25290__auto____0;
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25290__auto____1;
return cljs$core$async$state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto___27115,out))
})();
var state__25381__auto__ = (function (){var statearr_27113 = f__25380__auto__.call(null);
(statearr_27113[(6)] = c__25379__auto___27115);

return statearr_27113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto___27115,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27129 = arguments.length;
switch (G__27129) {
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
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25379__auto___27195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto___27195,out){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto___27195,out){
return (function (state_27167){
var state_val_27168 = (state_27167[(1)]);
if((state_val_27168 === (7))){
var inst_27163 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27169_27196 = state_27167__$1;
(statearr_27169_27196[(2)] = inst_27163);

(statearr_27169_27196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (1))){
var inst_27130 = (new Array(n));
var inst_27131 = inst_27130;
var inst_27132 = (0);
var state_27167__$1 = (function (){var statearr_27170 = state_27167;
(statearr_27170[(7)] = inst_27132);

(statearr_27170[(8)] = inst_27131);

return statearr_27170;
})();
var statearr_27171_27197 = state_27167__$1;
(statearr_27171_27197[(2)] = null);

(statearr_27171_27197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (4))){
var inst_27135 = (state_27167[(9)]);
var inst_27135__$1 = (state_27167[(2)]);
var inst_27136 = (inst_27135__$1 == null);
var inst_27137 = cljs.core.not.call(null,inst_27136);
var state_27167__$1 = (function (){var statearr_27172 = state_27167;
(statearr_27172[(9)] = inst_27135__$1);

return statearr_27172;
})();
if(inst_27137){
var statearr_27173_27198 = state_27167__$1;
(statearr_27173_27198[(1)] = (5));

} else {
var statearr_27174_27199 = state_27167__$1;
(statearr_27174_27199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (15))){
var inst_27157 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27175_27200 = state_27167__$1;
(statearr_27175_27200[(2)] = inst_27157);

(statearr_27175_27200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (13))){
var state_27167__$1 = state_27167;
var statearr_27176_27201 = state_27167__$1;
(statearr_27176_27201[(2)] = null);

(statearr_27176_27201[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (6))){
var inst_27132 = (state_27167[(7)]);
var inst_27153 = (inst_27132 > (0));
var state_27167__$1 = state_27167;
if(cljs.core.truth_(inst_27153)){
var statearr_27177_27202 = state_27167__$1;
(statearr_27177_27202[(1)] = (12));

} else {
var statearr_27178_27203 = state_27167__$1;
(statearr_27178_27203[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (3))){
var inst_27165 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27167__$1,inst_27165);
} else {
if((state_val_27168 === (12))){
var inst_27131 = (state_27167[(8)]);
var inst_27155 = cljs.core.vec.call(null,inst_27131);
var state_27167__$1 = state_27167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27167__$1,(15),out,inst_27155);
} else {
if((state_val_27168 === (2))){
var state_27167__$1 = state_27167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27167__$1,(4),ch);
} else {
if((state_val_27168 === (11))){
var inst_27147 = (state_27167[(2)]);
var inst_27148 = (new Array(n));
var inst_27131 = inst_27148;
var inst_27132 = (0);
var state_27167__$1 = (function (){var statearr_27179 = state_27167;
(statearr_27179[(7)] = inst_27132);

(statearr_27179[(8)] = inst_27131);

(statearr_27179[(10)] = inst_27147);

return statearr_27179;
})();
var statearr_27180_27204 = state_27167__$1;
(statearr_27180_27204[(2)] = null);

(statearr_27180_27204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (9))){
var inst_27131 = (state_27167[(8)]);
var inst_27145 = cljs.core.vec.call(null,inst_27131);
var state_27167__$1 = state_27167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27167__$1,(11),out,inst_27145);
} else {
if((state_val_27168 === (5))){
var inst_27140 = (state_27167[(11)]);
var inst_27132 = (state_27167[(7)]);
var inst_27131 = (state_27167[(8)]);
var inst_27135 = (state_27167[(9)]);
var inst_27139 = (inst_27131[inst_27132] = inst_27135);
var inst_27140__$1 = (inst_27132 + (1));
var inst_27141 = (inst_27140__$1 < n);
var state_27167__$1 = (function (){var statearr_27181 = state_27167;
(statearr_27181[(11)] = inst_27140__$1);

(statearr_27181[(12)] = inst_27139);

return statearr_27181;
})();
if(cljs.core.truth_(inst_27141)){
var statearr_27182_27205 = state_27167__$1;
(statearr_27182_27205[(1)] = (8));

} else {
var statearr_27183_27206 = state_27167__$1;
(statearr_27183_27206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (14))){
var inst_27160 = (state_27167[(2)]);
var inst_27161 = cljs.core.async.close_BANG_.call(null,out);
var state_27167__$1 = (function (){var statearr_27185 = state_27167;
(statearr_27185[(13)] = inst_27160);

return statearr_27185;
})();
var statearr_27186_27207 = state_27167__$1;
(statearr_27186_27207[(2)] = inst_27161);

(statearr_27186_27207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (10))){
var inst_27151 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27187_27208 = state_27167__$1;
(statearr_27187_27208[(2)] = inst_27151);

(statearr_27187_27208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (8))){
var inst_27140 = (state_27167[(11)]);
var inst_27131 = (state_27167[(8)]);
var tmp27184 = inst_27131;
var inst_27131__$1 = tmp27184;
var inst_27132 = inst_27140;
var state_27167__$1 = (function (){var statearr_27188 = state_27167;
(statearr_27188[(7)] = inst_27132);

(statearr_27188[(8)] = inst_27131__$1);

return statearr_27188;
})();
var statearr_27189_27209 = state_27167__$1;
(statearr_27189_27209[(2)] = null);

(statearr_27189_27209[(1)] = (2));


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
});})(c__25379__auto___27195,out))
;
return ((function (switch__25289__auto__,c__25379__auto___27195,out){
return (function() {
var cljs$core$async$state_machine__25290__auto__ = null;
var cljs$core$async$state_machine__25290__auto____0 = (function (){
var statearr_27190 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27190[(0)] = cljs$core$async$state_machine__25290__auto__);

(statearr_27190[(1)] = (1));

return statearr_27190;
});
var cljs$core$async$state_machine__25290__auto____1 = (function (state_27167){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_27167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e27191){if((e27191 instanceof Object)){
var ex__25293__auto__ = e27191;
var statearr_27192_27210 = state_27167;
(statearr_27192_27210[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27211 = state_27167;
state_27167 = G__27211;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$state_machine__25290__auto__ = function(state_27167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25290__auto____1.call(this,state_27167);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25290__auto____0;
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25290__auto____1;
return cljs$core$async$state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto___27195,out))
})();
var state__25381__auto__ = (function (){var statearr_27193 = f__25380__auto__.call(null);
(statearr_27193[(6)] = c__25379__auto___27195);

return statearr_27193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto___27195,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27213 = arguments.length;
switch (G__27213) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25379__auto___27283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25379__auto___27283,out){
return (function (){
var f__25380__auto__ = (function (){var switch__25289__auto__ = ((function (c__25379__auto___27283,out){
return (function (state_27255){
var state_val_27256 = (state_27255[(1)]);
if((state_val_27256 === (7))){
var inst_27251 = (state_27255[(2)]);
var state_27255__$1 = state_27255;
var statearr_27257_27284 = state_27255__$1;
(statearr_27257_27284[(2)] = inst_27251);

(statearr_27257_27284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27256 === (1))){
var inst_27214 = [];
var inst_27215 = inst_27214;
var inst_27216 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27255__$1 = (function (){var statearr_27258 = state_27255;
(statearr_27258[(7)] = inst_27215);

(statearr_27258[(8)] = inst_27216);

return statearr_27258;
})();
var statearr_27259_27285 = state_27255__$1;
(statearr_27259_27285[(2)] = null);

(statearr_27259_27285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27256 === (4))){
var inst_27219 = (state_27255[(9)]);
var inst_27219__$1 = (state_27255[(2)]);
var inst_27220 = (inst_27219__$1 == null);
var inst_27221 = cljs.core.not.call(null,inst_27220);
var state_27255__$1 = (function (){var statearr_27260 = state_27255;
(statearr_27260[(9)] = inst_27219__$1);

return statearr_27260;
})();
if(inst_27221){
var statearr_27261_27286 = state_27255__$1;
(statearr_27261_27286[(1)] = (5));

} else {
var statearr_27262_27287 = state_27255__$1;
(statearr_27262_27287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27256 === (15))){
var inst_27245 = (state_27255[(2)]);
var state_27255__$1 = state_27255;
var statearr_27263_27288 = state_27255__$1;
(statearr_27263_27288[(2)] = inst_27245);

(statearr_27263_27288[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27256 === (13))){
var state_27255__$1 = state_27255;
var statearr_27264_27289 = state_27255__$1;
(statearr_27264_27289[(2)] = null);

(statearr_27264_27289[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27256 === (6))){
var inst_27215 = (state_27255[(7)]);
var inst_27240 = inst_27215.length;
var inst_27241 = (inst_27240 > (0));
var state_27255__$1 = state_27255;
if(cljs.core.truth_(inst_27241)){
var statearr_27265_27290 = state_27255__$1;
(statearr_27265_27290[(1)] = (12));

} else {
var statearr_27266_27291 = state_27255__$1;
(statearr_27266_27291[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27256 === (3))){
var inst_27253 = (state_27255[(2)]);
var state_27255__$1 = state_27255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27255__$1,inst_27253);
} else {
if((state_val_27256 === (12))){
var inst_27215 = (state_27255[(7)]);
var inst_27243 = cljs.core.vec.call(null,inst_27215);
var state_27255__$1 = state_27255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27255__$1,(15),out,inst_27243);
} else {
if((state_val_27256 === (2))){
var state_27255__$1 = state_27255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27255__$1,(4),ch);
} else {
if((state_val_27256 === (11))){
var inst_27223 = (state_27255[(10)]);
var inst_27219 = (state_27255[(9)]);
var inst_27233 = (state_27255[(2)]);
var inst_27234 = [];
var inst_27235 = inst_27234.push(inst_27219);
var inst_27215 = inst_27234;
var inst_27216 = inst_27223;
var state_27255__$1 = (function (){var statearr_27267 = state_27255;
(statearr_27267[(11)] = inst_27233);

(statearr_27267[(7)] = inst_27215);

(statearr_27267[(8)] = inst_27216);

(statearr_27267[(12)] = inst_27235);

return statearr_27267;
})();
var statearr_27268_27292 = state_27255__$1;
(statearr_27268_27292[(2)] = null);

(statearr_27268_27292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27256 === (9))){
var inst_27215 = (state_27255[(7)]);
var inst_27231 = cljs.core.vec.call(null,inst_27215);
var state_27255__$1 = state_27255;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27255__$1,(11),out,inst_27231);
} else {
if((state_val_27256 === (5))){
var inst_27223 = (state_27255[(10)]);
var inst_27216 = (state_27255[(8)]);
var inst_27219 = (state_27255[(9)]);
var inst_27223__$1 = f.call(null,inst_27219);
var inst_27224 = cljs.core._EQ_.call(null,inst_27223__$1,inst_27216);
var inst_27225 = cljs.core.keyword_identical_QMARK_.call(null,inst_27216,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27226 = ((inst_27224) || (inst_27225));
var state_27255__$1 = (function (){var statearr_27269 = state_27255;
(statearr_27269[(10)] = inst_27223__$1);

return statearr_27269;
})();
if(cljs.core.truth_(inst_27226)){
var statearr_27270_27293 = state_27255__$1;
(statearr_27270_27293[(1)] = (8));

} else {
var statearr_27271_27294 = state_27255__$1;
(statearr_27271_27294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27256 === (14))){
var inst_27248 = (state_27255[(2)]);
var inst_27249 = cljs.core.async.close_BANG_.call(null,out);
var state_27255__$1 = (function (){var statearr_27273 = state_27255;
(statearr_27273[(13)] = inst_27248);

return statearr_27273;
})();
var statearr_27274_27295 = state_27255__$1;
(statearr_27274_27295[(2)] = inst_27249);

(statearr_27274_27295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27256 === (10))){
var inst_27238 = (state_27255[(2)]);
var state_27255__$1 = state_27255;
var statearr_27275_27296 = state_27255__$1;
(statearr_27275_27296[(2)] = inst_27238);

(statearr_27275_27296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27256 === (8))){
var inst_27223 = (state_27255[(10)]);
var inst_27215 = (state_27255[(7)]);
var inst_27219 = (state_27255[(9)]);
var inst_27228 = inst_27215.push(inst_27219);
var tmp27272 = inst_27215;
var inst_27215__$1 = tmp27272;
var inst_27216 = inst_27223;
var state_27255__$1 = (function (){var statearr_27276 = state_27255;
(statearr_27276[(7)] = inst_27215__$1);

(statearr_27276[(14)] = inst_27228);

(statearr_27276[(8)] = inst_27216);

return statearr_27276;
})();
var statearr_27277_27297 = state_27255__$1;
(statearr_27277_27297[(2)] = null);

(statearr_27277_27297[(1)] = (2));


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
});})(c__25379__auto___27283,out))
;
return ((function (switch__25289__auto__,c__25379__auto___27283,out){
return (function() {
var cljs$core$async$state_machine__25290__auto__ = null;
var cljs$core$async$state_machine__25290__auto____0 = (function (){
var statearr_27278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27278[(0)] = cljs$core$async$state_machine__25290__auto__);

(statearr_27278[(1)] = (1));

return statearr_27278;
});
var cljs$core$async$state_machine__25290__auto____1 = (function (state_27255){
while(true){
var ret_value__25291__auto__ = (function (){try{while(true){
var result__25292__auto__ = switch__25289__auto__.call(null,state_27255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25292__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25292__auto__;
}
break;
}
}catch (e27279){if((e27279 instanceof Object)){
var ex__25293__auto__ = e27279;
var statearr_27280_27298 = state_27255;
(statearr_27280_27298[(5)] = ex__25293__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25291__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27299 = state_27255;
state_27255 = G__27299;
continue;
} else {
return ret_value__25291__auto__;
}
break;
}
});
cljs$core$async$state_machine__25290__auto__ = function(state_27255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25290__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25290__auto____1.call(this,state_27255);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25290__auto____0;
cljs$core$async$state_machine__25290__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25290__auto____1;
return cljs$core$async$state_machine__25290__auto__;
})()
;})(switch__25289__auto__,c__25379__auto___27283,out))
})();
var state__25381__auto__ = (function (){var statearr_27281 = f__25380__auto__.call(null);
(statearr_27281[(6)] = c__25379__auto___27283);

return statearr_27281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25381__auto__);
});})(c__25379__auto___27283,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1525371774944
