// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args31039 = [];
var len__28475__auto___31045 = arguments.length;
var i__28476__auto___31046 = (0);
while(true){
if((i__28476__auto___31046 < len__28475__auto___31045)){
args31039.push((arguments[i__28476__auto___31046]));

var G__31047 = (i__28476__auto___31046 + (1));
i__28476__auto___31046 = G__31047;
continue;
} else {
}
break;
}

var G__31041 = args31039.length;
switch (G__31041) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31039.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31042 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31042 = (function (f,blockable,meta31043){
this.f = f;
this.blockable = blockable;
this.meta31043 = meta31043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31044,meta31043__$1){
var self__ = this;
var _31044__$1 = this;
return (new cljs.core.async.t_cljs$core$async31042(self__.f,self__.blockable,meta31043__$1));
});

cljs.core.async.t_cljs$core$async31042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31044){
var self__ = this;
var _31044__$1 = this;
return self__.meta31043;
});

cljs.core.async.t_cljs$core$async31042.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31042.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31043","meta31043",-1682331380,null)], null);
});

cljs.core.async.t_cljs$core$async31042.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31042";

cljs.core.async.t_cljs$core$async31042.cljs$lang$ctorPrWriter = (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async31042");
});

cljs.core.async.__GT_t_cljs$core$async31042 = (function cljs$core$async$__GT_t_cljs$core$async31042(f__$1,blockable__$1,meta31043){
return (new cljs.core.async.t_cljs$core$async31042(f__$1,blockable__$1,meta31043));
});

}

return (new cljs.core.async.t_cljs$core$async31042(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
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
var args31051 = [];
var len__28475__auto___31054 = arguments.length;
var i__28476__auto___31055 = (0);
while(true){
if((i__28476__auto___31055 < len__28475__auto___31054)){
args31051.push((arguments[i__28476__auto___31055]));

var G__31056 = (i__28476__auto___31055 + (1));
i__28476__auto___31055 = G__31056;
continue;
} else {
}
break;
}

var G__31053 = args31051.length;
switch (G__31053) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31051.length)].join('')));

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
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
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
var args31058 = [];
var len__28475__auto___31061 = arguments.length;
var i__28476__auto___31062 = (0);
while(true){
if((i__28476__auto___31062 < len__28475__auto___31061)){
args31058.push((arguments[i__28476__auto___31062]));

var G__31063 = (i__28476__auto___31062 + (1));
i__28476__auto___31062 = G__31063;
continue;
} else {
}
break;
}

var G__31060 = args31058.length;
switch (G__31060) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31058.length)].join('')));

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
var args31065 = [];
var len__28475__auto___31068 = arguments.length;
var i__28476__auto___31069 = (0);
while(true){
if((i__28476__auto___31069 < len__28475__auto___31068)){
args31065.push((arguments[i__28476__auto___31069]));

var G__31070 = (i__28476__auto___31069 + (1));
i__28476__auto___31069 = G__31070;
continue;
} else {
}
break;
}

var G__31067 = args31065.length;
switch (G__31067) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31065.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31072 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31072);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31072,ret){
return (function (){
return fn1.call(null,val_31072);
});})(val_31072,ret))
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
var args31073 = [];
var len__28475__auto___31076 = arguments.length;
var i__28476__auto___31077 = (0);
while(true){
if((i__28476__auto___31077 < len__28475__auto___31076)){
args31073.push((arguments[i__28476__auto___31077]));

var G__31078 = (i__28476__auto___31077 + (1));
i__28476__auto___31077 = G__31078;
continue;
} else {
}
break;
}

var G__31075 = args31073.length;
switch (G__31075) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31073.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__28315__auto___31080 = n;
var x_31081 = (0);
while(true){
if((x_31081 < n__28315__auto___31080)){
(a[x_31081] = (0));

var G__31082 = (x_31081 + (1));
x_31081 = G__31082;
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

var G__31083 = (i + (1));
i = G__31083;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31087 = (function (alt_flag,flag,meta31088){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta31088 = meta31088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31089,meta31088__$1){
var self__ = this;
var _31089__$1 = this;
return (new cljs.core.async.t_cljs$core$async31087(self__.alt_flag,self__.flag,meta31088__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31089){
var self__ = this;
var _31089__$1 = this;
return self__.meta31088;
});})(flag))
;

cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31087.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31087.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31088","meta31088",2107840756,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31087";

cljs.core.async.t_cljs$core$async31087.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async31087");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31087 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31087(alt_flag__$1,flag__$1,meta31088){
return (new cljs.core.async.t_cljs$core$async31087(alt_flag__$1,flag__$1,meta31088));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31087(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31093 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31093 = (function (alt_handler,flag,cb,meta31094){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta31094 = meta31094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31095,meta31094__$1){
var self__ = this;
var _31095__$1 = this;
return (new cljs.core.async.t_cljs$core$async31093(self__.alt_handler,self__.flag,self__.cb,meta31094__$1));
});

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31095){
var self__ = this;
var _31095__$1 = this;
return self__.meta31094;
});

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31093.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31094","meta31094",-1183335085,null)], null);
});

cljs.core.async.t_cljs$core$async31093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31093";

cljs.core.async.t_cljs$core$async31093.cljs$lang$ctorPrWriter = (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async31093");
});

cljs.core.async.__GT_t_cljs$core$async31093 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31093(alt_handler__$1,flag__$1,cb__$1,meta31094){
return (new cljs.core.async.t_cljs$core$async31093(alt_handler__$1,flag__$1,cb__$1,meta31094));
});

}

return (new cljs.core.async.t_cljs$core$async31093(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31096_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31096_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31097_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31097_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27400__auto__ = wport;
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31098 = (i + (1));
i = G__31098;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27400__auto__ = ret;
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__27388__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27388__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27388__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__28482__auto__ = [];
var len__28475__auto___31104 = arguments.length;
var i__28476__auto___31105 = (0);
while(true){
if((i__28476__auto___31105 < len__28475__auto___31104)){
args__28482__auto__.push((arguments[i__28476__auto___31105]));

var G__31106 = (i__28476__auto___31105 + (1));
i__28476__auto___31105 = G__31106;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((1) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__28483__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31101){
var map__31102 = p__31101;
var map__31102__$1 = ((((!((map__31102 == null)))?((((map__31102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31102):map__31102);
var opts = map__31102__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31099){
var G__31100 = cljs.core.first.call(null,seq31099);
var seq31099__$1 = cljs.core.next.call(null,seq31099);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31100,seq31099__$1);
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
var args31107 = [];
var len__28475__auto___31157 = arguments.length;
var i__28476__auto___31158 = (0);
while(true){
if((i__28476__auto___31158 < len__28475__auto___31157)){
args31107.push((arguments[i__28476__auto___31158]));

var G__31159 = (i__28476__auto___31158 + (1));
i__28476__auto___31158 = G__31159;
continue;
} else {
}
break;
}

var G__31109 = args31107.length;
switch (G__31109) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31107.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30994__auto___31161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto___31161){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto___31161){
return (function (state_31133){
var state_val_31134 = (state_31133[(1)]);
if((state_val_31134 === (7))){
var inst_31129 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
var statearr_31135_31162 = state_31133__$1;
(statearr_31135_31162[(2)] = inst_31129);

(statearr_31135_31162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (1))){
var state_31133__$1 = state_31133;
var statearr_31136_31163 = state_31133__$1;
(statearr_31136_31163[(2)] = null);

(statearr_31136_31163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (4))){
var inst_31112 = (state_31133[(7)]);
var inst_31112__$1 = (state_31133[(2)]);
var inst_31113 = (inst_31112__$1 == null);
var state_31133__$1 = (function (){var statearr_31137 = state_31133;
(statearr_31137[(7)] = inst_31112__$1);

return statearr_31137;
})();
if(cljs.core.truth_(inst_31113)){
var statearr_31138_31164 = state_31133__$1;
(statearr_31138_31164[(1)] = (5));

} else {
var statearr_31139_31165 = state_31133__$1;
(statearr_31139_31165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (13))){
var state_31133__$1 = state_31133;
var statearr_31140_31166 = state_31133__$1;
(statearr_31140_31166[(2)] = null);

(statearr_31140_31166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (6))){
var inst_31112 = (state_31133[(7)]);
var state_31133__$1 = state_31133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31133__$1,(11),to,inst_31112);
} else {
if((state_val_31134 === (3))){
var inst_31131 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31133__$1,inst_31131);
} else {
if((state_val_31134 === (12))){
var state_31133__$1 = state_31133;
var statearr_31141_31167 = state_31133__$1;
(statearr_31141_31167[(2)] = null);

(statearr_31141_31167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (2))){
var state_31133__$1 = state_31133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31133__$1,(4),from);
} else {
if((state_val_31134 === (11))){
var inst_31122 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
if(cljs.core.truth_(inst_31122)){
var statearr_31142_31168 = state_31133__$1;
(statearr_31142_31168[(1)] = (12));

} else {
var statearr_31143_31169 = state_31133__$1;
(statearr_31143_31169[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (9))){
var state_31133__$1 = state_31133;
var statearr_31144_31170 = state_31133__$1;
(statearr_31144_31170[(2)] = null);

(statearr_31144_31170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (5))){
var state_31133__$1 = state_31133;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31145_31171 = state_31133__$1;
(statearr_31145_31171[(1)] = (8));

} else {
var statearr_31146_31172 = state_31133__$1;
(statearr_31146_31172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (14))){
var inst_31127 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
var statearr_31147_31173 = state_31133__$1;
(statearr_31147_31173[(2)] = inst_31127);

(statearr_31147_31173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (10))){
var inst_31119 = (state_31133[(2)]);
var state_31133__$1 = state_31133;
var statearr_31148_31174 = state_31133__$1;
(statearr_31148_31174[(2)] = inst_31119);

(statearr_31148_31174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31134 === (8))){
var inst_31116 = cljs.core.async.close_BANG_.call(null,to);
var state_31133__$1 = state_31133;
var statearr_31149_31175 = state_31133__$1;
(statearr_31149_31175[(2)] = inst_31116);

(statearr_31149_31175[(1)] = (10));


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
});})(c__30994__auto___31161))
;
return ((function (switch__29418__auto__,c__30994__auto___31161){
return (function() {
var cljs$core$async$state_machine__29419__auto__ = null;
var cljs$core$async$state_machine__29419__auto____0 = (function (){
var statearr_31153 = [null,null,null,null,null,null,null,null];
(statearr_31153[(0)] = cljs$core$async$state_machine__29419__auto__);

(statearr_31153[(1)] = (1));

return statearr_31153;
});
var cljs$core$async$state_machine__29419__auto____1 = (function (state_31133){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_31133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e31154){if((e31154 instanceof Object)){
var ex__29422__auto__ = e31154;
var statearr_31155_31176 = state_31133;
(statearr_31155_31176[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31177 = state_31133;
state_31133 = G__31177;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$state_machine__29419__auto__ = function(state_31133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29419__auto____1.call(this,state_31133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29419__auto____0;
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29419__auto____1;
return cljs$core$async$state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto___31161))
})();
var state__30996__auto__ = (function (){var statearr_31156 = f__30995__auto__.call(null);
(statearr_31156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto___31161);

return statearr_31156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto___31161))
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
return (function (p__31365){
var vec__31366 = p__31365;
var v = cljs.core.nth.call(null,vec__31366,(0),null);
var p = cljs.core.nth.call(null,vec__31366,(1),null);
var job = vec__31366;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30994__auto___31552 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto___31552,res,vec__31366,v,p,job,jobs,results){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto___31552,res,vec__31366,v,p,job,jobs,results){
return (function (state_31373){
var state_val_31374 = (state_31373[(1)]);
if((state_val_31374 === (1))){
var state_31373__$1 = state_31373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31373__$1,(2),res,v);
} else {
if((state_val_31374 === (2))){
var inst_31370 = (state_31373[(2)]);
var inst_31371 = cljs.core.async.close_BANG_.call(null,res);
var state_31373__$1 = (function (){var statearr_31375 = state_31373;
(statearr_31375[(7)] = inst_31370);

return statearr_31375;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31373__$1,inst_31371);
} else {
return null;
}
}
});})(c__30994__auto___31552,res,vec__31366,v,p,job,jobs,results))
;
return ((function (switch__29418__auto__,c__30994__auto___31552,res,vec__31366,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____0 = (function (){
var statearr_31379 = [null,null,null,null,null,null,null,null];
(statearr_31379[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__);

(statearr_31379[(1)] = (1));

return statearr_31379;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____1 = (function (state_31373){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_31373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e31380){if((e31380 instanceof Object)){
var ex__29422__auto__ = e31380;
var statearr_31381_31553 = state_31373;
(statearr_31381_31553[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31554 = state_31373;
state_31373 = G__31554;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__ = function(state_31373){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____1.call(this,state_31373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto___31552,res,vec__31366,v,p,job,jobs,results))
})();
var state__30996__auto__ = (function (){var statearr_31382 = f__30995__auto__.call(null);
(statearr_31382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto___31552);

return statearr_31382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto___31552,res,vec__31366,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31383){
var vec__31384 = p__31383;
var v = cljs.core.nth.call(null,vec__31384,(0),null);
var p = cljs.core.nth.call(null,vec__31384,(1),null);
var job = vec__31384;
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
var n__28315__auto___31555 = n;
var __31556 = (0);
while(true){
if((__31556 < n__28315__auto___31555)){
var G__31387_31557 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31387_31557) {
case "compute":
var c__30994__auto___31559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31556,c__30994__auto___31559,G__31387_31557,n__28315__auto___31555,jobs,results,process,async){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (__31556,c__30994__auto___31559,G__31387_31557,n__28315__auto___31555,jobs,results,process,async){
return (function (state_31400){
var state_val_31401 = (state_31400[(1)]);
if((state_val_31401 === (1))){
var state_31400__$1 = state_31400;
var statearr_31402_31560 = state_31400__$1;
(statearr_31402_31560[(2)] = null);

(statearr_31402_31560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (2))){
var state_31400__$1 = state_31400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31400__$1,(4),jobs);
} else {
if((state_val_31401 === (3))){
var inst_31398 = (state_31400[(2)]);
var state_31400__$1 = state_31400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31400__$1,inst_31398);
} else {
if((state_val_31401 === (4))){
var inst_31390 = (state_31400[(2)]);
var inst_31391 = process.call(null,inst_31390);
var state_31400__$1 = state_31400;
if(cljs.core.truth_(inst_31391)){
var statearr_31403_31561 = state_31400__$1;
(statearr_31403_31561[(1)] = (5));

} else {
var statearr_31404_31562 = state_31400__$1;
(statearr_31404_31562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (5))){
var state_31400__$1 = state_31400;
var statearr_31405_31563 = state_31400__$1;
(statearr_31405_31563[(2)] = null);

(statearr_31405_31563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (6))){
var state_31400__$1 = state_31400;
var statearr_31406_31564 = state_31400__$1;
(statearr_31406_31564[(2)] = null);

(statearr_31406_31564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31401 === (7))){
var inst_31396 = (state_31400[(2)]);
var state_31400__$1 = state_31400;
var statearr_31407_31565 = state_31400__$1;
(statearr_31407_31565[(2)] = inst_31396);

(statearr_31407_31565[(1)] = (3));


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
});})(__31556,c__30994__auto___31559,G__31387_31557,n__28315__auto___31555,jobs,results,process,async))
;
return ((function (__31556,switch__29418__auto__,c__30994__auto___31559,G__31387_31557,n__28315__auto___31555,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____0 = (function (){
var statearr_31411 = [null,null,null,null,null,null,null];
(statearr_31411[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__);

(statearr_31411[(1)] = (1));

return statearr_31411;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____1 = (function (state_31400){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_31400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e31412){if((e31412 instanceof Object)){
var ex__29422__auto__ = e31412;
var statearr_31413_31566 = state_31400;
(statearr_31413_31566[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31567 = state_31400;
state_31400 = G__31567;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__ = function(state_31400){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____1.call(this,state_31400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__;
})()
;})(__31556,switch__29418__auto__,c__30994__auto___31559,G__31387_31557,n__28315__auto___31555,jobs,results,process,async))
})();
var state__30996__auto__ = (function (){var statearr_31414 = f__30995__auto__.call(null);
(statearr_31414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto___31559);

return statearr_31414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(__31556,c__30994__auto___31559,G__31387_31557,n__28315__auto___31555,jobs,results,process,async))
);


break;
case "async":
var c__30994__auto___31568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31556,c__30994__auto___31568,G__31387_31557,n__28315__auto___31555,jobs,results,process,async){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (__31556,c__30994__auto___31568,G__31387_31557,n__28315__auto___31555,jobs,results,process,async){
return (function (state_31427){
var state_val_31428 = (state_31427[(1)]);
if((state_val_31428 === (1))){
var state_31427__$1 = state_31427;
var statearr_31429_31569 = state_31427__$1;
(statearr_31429_31569[(2)] = null);

(statearr_31429_31569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (2))){
var state_31427__$1 = state_31427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31427__$1,(4),jobs);
} else {
if((state_val_31428 === (3))){
var inst_31425 = (state_31427[(2)]);
var state_31427__$1 = state_31427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31427__$1,inst_31425);
} else {
if((state_val_31428 === (4))){
var inst_31417 = (state_31427[(2)]);
var inst_31418 = async.call(null,inst_31417);
var state_31427__$1 = state_31427;
if(cljs.core.truth_(inst_31418)){
var statearr_31430_31570 = state_31427__$1;
(statearr_31430_31570[(1)] = (5));

} else {
var statearr_31431_31571 = state_31427__$1;
(statearr_31431_31571[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (5))){
var state_31427__$1 = state_31427;
var statearr_31432_31572 = state_31427__$1;
(statearr_31432_31572[(2)] = null);

(statearr_31432_31572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (6))){
var state_31427__$1 = state_31427;
var statearr_31433_31573 = state_31427__$1;
(statearr_31433_31573[(2)] = null);

(statearr_31433_31573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31428 === (7))){
var inst_31423 = (state_31427[(2)]);
var state_31427__$1 = state_31427;
var statearr_31434_31574 = state_31427__$1;
(statearr_31434_31574[(2)] = inst_31423);

(statearr_31434_31574[(1)] = (3));


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
});})(__31556,c__30994__auto___31568,G__31387_31557,n__28315__auto___31555,jobs,results,process,async))
;
return ((function (__31556,switch__29418__auto__,c__30994__auto___31568,G__31387_31557,n__28315__auto___31555,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____0 = (function (){
var statearr_31438 = [null,null,null,null,null,null,null];
(statearr_31438[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__);

(statearr_31438[(1)] = (1));

return statearr_31438;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____1 = (function (state_31427){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_31427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e31439){if((e31439 instanceof Object)){
var ex__29422__auto__ = e31439;
var statearr_31440_31575 = state_31427;
(statearr_31440_31575[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31576 = state_31427;
state_31427 = G__31576;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__ = function(state_31427){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____1.call(this,state_31427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__;
})()
;})(__31556,switch__29418__auto__,c__30994__auto___31568,G__31387_31557,n__28315__auto___31555,jobs,results,process,async))
})();
var state__30996__auto__ = (function (){var statearr_31441 = f__30995__auto__.call(null);
(statearr_31441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto___31568);

return statearr_31441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(__31556,c__30994__auto___31568,G__31387_31557,n__28315__auto___31555,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31577 = (__31556 + (1));
__31556 = G__31577;
continue;
} else {
}
break;
}

var c__30994__auto___31578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto___31578,jobs,results,process,async){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto___31578,jobs,results,process,async){
return (function (state_31463){
var state_val_31464 = (state_31463[(1)]);
if((state_val_31464 === (1))){
var state_31463__$1 = state_31463;
var statearr_31465_31579 = state_31463__$1;
(statearr_31465_31579[(2)] = null);

(statearr_31465_31579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31464 === (2))){
var state_31463__$1 = state_31463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31463__$1,(4),from);
} else {
if((state_val_31464 === (3))){
var inst_31461 = (state_31463[(2)]);
var state_31463__$1 = state_31463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31463__$1,inst_31461);
} else {
if((state_val_31464 === (4))){
var inst_31444 = (state_31463[(7)]);
var inst_31444__$1 = (state_31463[(2)]);
var inst_31445 = (inst_31444__$1 == null);
var state_31463__$1 = (function (){var statearr_31466 = state_31463;
(statearr_31466[(7)] = inst_31444__$1);

return statearr_31466;
})();
if(cljs.core.truth_(inst_31445)){
var statearr_31467_31580 = state_31463__$1;
(statearr_31467_31580[(1)] = (5));

} else {
var statearr_31468_31581 = state_31463__$1;
(statearr_31468_31581[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31464 === (5))){
var inst_31447 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31463__$1 = state_31463;
var statearr_31469_31582 = state_31463__$1;
(statearr_31469_31582[(2)] = inst_31447);

(statearr_31469_31582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31464 === (6))){
var inst_31444 = (state_31463[(7)]);
var inst_31449 = (state_31463[(8)]);
var inst_31449__$1 = cljs.core.async.chan.call(null,(1));
var inst_31450 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31451 = [inst_31444,inst_31449__$1];
var inst_31452 = (new cljs.core.PersistentVector(null,2,(5),inst_31450,inst_31451,null));
var state_31463__$1 = (function (){var statearr_31470 = state_31463;
(statearr_31470[(8)] = inst_31449__$1);

return statearr_31470;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31463__$1,(8),jobs,inst_31452);
} else {
if((state_val_31464 === (7))){
var inst_31459 = (state_31463[(2)]);
var state_31463__$1 = state_31463;
var statearr_31471_31583 = state_31463__$1;
(statearr_31471_31583[(2)] = inst_31459);

(statearr_31471_31583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31464 === (8))){
var inst_31449 = (state_31463[(8)]);
var inst_31454 = (state_31463[(2)]);
var state_31463__$1 = (function (){var statearr_31472 = state_31463;
(statearr_31472[(9)] = inst_31454);

return statearr_31472;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31463__$1,(9),results,inst_31449);
} else {
if((state_val_31464 === (9))){
var inst_31456 = (state_31463[(2)]);
var state_31463__$1 = (function (){var statearr_31473 = state_31463;
(statearr_31473[(10)] = inst_31456);

return statearr_31473;
})();
var statearr_31474_31584 = state_31463__$1;
(statearr_31474_31584[(2)] = null);

(statearr_31474_31584[(1)] = (2));


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
});})(c__30994__auto___31578,jobs,results,process,async))
;
return ((function (switch__29418__auto__,c__30994__auto___31578,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____0 = (function (){
var statearr_31478 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31478[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__);

(statearr_31478[(1)] = (1));

return statearr_31478;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____1 = (function (state_31463){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_31463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e31479){if((e31479 instanceof Object)){
var ex__29422__auto__ = e31479;
var statearr_31480_31585 = state_31463;
(statearr_31480_31585[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31586 = state_31463;
state_31463 = G__31586;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__ = function(state_31463){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____1.call(this,state_31463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto___31578,jobs,results,process,async))
})();
var state__30996__auto__ = (function (){var statearr_31481 = f__30995__auto__.call(null);
(statearr_31481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto___31578);

return statearr_31481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto___31578,jobs,results,process,async))
);


var c__30994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto__,jobs,results,process,async){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto__,jobs,results,process,async){
return (function (state_31519){
var state_val_31520 = (state_31519[(1)]);
if((state_val_31520 === (7))){
var inst_31515 = (state_31519[(2)]);
var state_31519__$1 = state_31519;
var statearr_31521_31587 = state_31519__$1;
(statearr_31521_31587[(2)] = inst_31515);

(statearr_31521_31587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (20))){
var state_31519__$1 = state_31519;
var statearr_31522_31588 = state_31519__$1;
(statearr_31522_31588[(2)] = null);

(statearr_31522_31588[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (1))){
var state_31519__$1 = state_31519;
var statearr_31523_31589 = state_31519__$1;
(statearr_31523_31589[(2)] = null);

(statearr_31523_31589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (4))){
var inst_31484 = (state_31519[(7)]);
var inst_31484__$1 = (state_31519[(2)]);
var inst_31485 = (inst_31484__$1 == null);
var state_31519__$1 = (function (){var statearr_31524 = state_31519;
(statearr_31524[(7)] = inst_31484__$1);

return statearr_31524;
})();
if(cljs.core.truth_(inst_31485)){
var statearr_31525_31590 = state_31519__$1;
(statearr_31525_31590[(1)] = (5));

} else {
var statearr_31526_31591 = state_31519__$1;
(statearr_31526_31591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (15))){
var inst_31497 = (state_31519[(8)]);
var state_31519__$1 = state_31519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31519__$1,(18),to,inst_31497);
} else {
if((state_val_31520 === (21))){
var inst_31510 = (state_31519[(2)]);
var state_31519__$1 = state_31519;
var statearr_31527_31592 = state_31519__$1;
(statearr_31527_31592[(2)] = inst_31510);

(statearr_31527_31592[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (13))){
var inst_31512 = (state_31519[(2)]);
var state_31519__$1 = (function (){var statearr_31528 = state_31519;
(statearr_31528[(9)] = inst_31512);

return statearr_31528;
})();
var statearr_31529_31593 = state_31519__$1;
(statearr_31529_31593[(2)] = null);

(statearr_31529_31593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (6))){
var inst_31484 = (state_31519[(7)]);
var state_31519__$1 = state_31519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31519__$1,(11),inst_31484);
} else {
if((state_val_31520 === (17))){
var inst_31505 = (state_31519[(2)]);
var state_31519__$1 = state_31519;
if(cljs.core.truth_(inst_31505)){
var statearr_31530_31594 = state_31519__$1;
(statearr_31530_31594[(1)] = (19));

} else {
var statearr_31531_31595 = state_31519__$1;
(statearr_31531_31595[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (3))){
var inst_31517 = (state_31519[(2)]);
var state_31519__$1 = state_31519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31519__$1,inst_31517);
} else {
if((state_val_31520 === (12))){
var inst_31494 = (state_31519[(10)]);
var state_31519__$1 = state_31519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31519__$1,(14),inst_31494);
} else {
if((state_val_31520 === (2))){
var state_31519__$1 = state_31519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31519__$1,(4),results);
} else {
if((state_val_31520 === (19))){
var state_31519__$1 = state_31519;
var statearr_31532_31596 = state_31519__$1;
(statearr_31532_31596[(2)] = null);

(statearr_31532_31596[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (11))){
var inst_31494 = (state_31519[(2)]);
var state_31519__$1 = (function (){var statearr_31533 = state_31519;
(statearr_31533[(10)] = inst_31494);

return statearr_31533;
})();
var statearr_31534_31597 = state_31519__$1;
(statearr_31534_31597[(2)] = null);

(statearr_31534_31597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (9))){
var state_31519__$1 = state_31519;
var statearr_31535_31598 = state_31519__$1;
(statearr_31535_31598[(2)] = null);

(statearr_31535_31598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (5))){
var state_31519__$1 = state_31519;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31536_31599 = state_31519__$1;
(statearr_31536_31599[(1)] = (8));

} else {
var statearr_31537_31600 = state_31519__$1;
(statearr_31537_31600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (14))){
var inst_31499 = (state_31519[(11)]);
var inst_31497 = (state_31519[(8)]);
var inst_31497__$1 = (state_31519[(2)]);
var inst_31498 = (inst_31497__$1 == null);
var inst_31499__$1 = cljs.core.not.call(null,inst_31498);
var state_31519__$1 = (function (){var statearr_31538 = state_31519;
(statearr_31538[(11)] = inst_31499__$1);

(statearr_31538[(8)] = inst_31497__$1);

return statearr_31538;
})();
if(inst_31499__$1){
var statearr_31539_31601 = state_31519__$1;
(statearr_31539_31601[(1)] = (15));

} else {
var statearr_31540_31602 = state_31519__$1;
(statearr_31540_31602[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (16))){
var inst_31499 = (state_31519[(11)]);
var state_31519__$1 = state_31519;
var statearr_31541_31603 = state_31519__$1;
(statearr_31541_31603[(2)] = inst_31499);

(statearr_31541_31603[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (10))){
var inst_31491 = (state_31519[(2)]);
var state_31519__$1 = state_31519;
var statearr_31542_31604 = state_31519__$1;
(statearr_31542_31604[(2)] = inst_31491);

(statearr_31542_31604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (18))){
var inst_31502 = (state_31519[(2)]);
var state_31519__$1 = state_31519;
var statearr_31543_31605 = state_31519__$1;
(statearr_31543_31605[(2)] = inst_31502);

(statearr_31543_31605[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31520 === (8))){
var inst_31488 = cljs.core.async.close_BANG_.call(null,to);
var state_31519__$1 = state_31519;
var statearr_31544_31606 = state_31519__$1;
(statearr_31544_31606[(2)] = inst_31488);

(statearr_31544_31606[(1)] = (10));


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
});})(c__30994__auto__,jobs,results,process,async))
;
return ((function (switch__29418__auto__,c__30994__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____0 = (function (){
var statearr_31548 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31548[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__);

(statearr_31548[(1)] = (1));

return statearr_31548;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____1 = (function (state_31519){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_31519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e31549){if((e31549 instanceof Object)){
var ex__29422__auto__ = e31549;
var statearr_31550_31607 = state_31519;
(statearr_31550_31607[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31608 = state_31519;
state_31519 = G__31608;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__ = function(state_31519){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____1.call(this,state_31519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto__,jobs,results,process,async))
})();
var state__30996__auto__ = (function (){var statearr_31551 = f__30995__auto__.call(null);
(statearr_31551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto__);

return statearr_31551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto__,jobs,results,process,async))
);

return c__30994__auto__;
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
var args31609 = [];
var len__28475__auto___31612 = arguments.length;
var i__28476__auto___31613 = (0);
while(true){
if((i__28476__auto___31613 < len__28475__auto___31612)){
args31609.push((arguments[i__28476__auto___31613]));

var G__31614 = (i__28476__auto___31613 + (1));
i__28476__auto___31613 = G__31614;
continue;
} else {
}
break;
}

var G__31611 = args31609.length;
switch (G__31611) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31609.length)].join('')));

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
var args31616 = [];
var len__28475__auto___31619 = arguments.length;
var i__28476__auto___31620 = (0);
while(true){
if((i__28476__auto___31620 < len__28475__auto___31619)){
args31616.push((arguments[i__28476__auto___31620]));

var G__31621 = (i__28476__auto___31620 + (1));
i__28476__auto___31620 = G__31621;
continue;
} else {
}
break;
}

var G__31618 = args31616.length;
switch (G__31618) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31616.length)].join('')));

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
var args31623 = [];
var len__28475__auto___31676 = arguments.length;
var i__28476__auto___31677 = (0);
while(true){
if((i__28476__auto___31677 < len__28475__auto___31676)){
args31623.push((arguments[i__28476__auto___31677]));

var G__31678 = (i__28476__auto___31677 + (1));
i__28476__auto___31677 = G__31678;
continue;
} else {
}
break;
}

var G__31625 = args31623.length;
switch (G__31625) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31623.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30994__auto___31680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto___31680,tc,fc){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto___31680,tc,fc){
return (function (state_31651){
var state_val_31652 = (state_31651[(1)]);
if((state_val_31652 === (7))){
var inst_31647 = (state_31651[(2)]);
var state_31651__$1 = state_31651;
var statearr_31653_31681 = state_31651__$1;
(statearr_31653_31681[(2)] = inst_31647);

(statearr_31653_31681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (1))){
var state_31651__$1 = state_31651;
var statearr_31654_31682 = state_31651__$1;
(statearr_31654_31682[(2)] = null);

(statearr_31654_31682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (4))){
var inst_31628 = (state_31651[(7)]);
var inst_31628__$1 = (state_31651[(2)]);
var inst_31629 = (inst_31628__$1 == null);
var state_31651__$1 = (function (){var statearr_31655 = state_31651;
(statearr_31655[(7)] = inst_31628__$1);

return statearr_31655;
})();
if(cljs.core.truth_(inst_31629)){
var statearr_31656_31683 = state_31651__$1;
(statearr_31656_31683[(1)] = (5));

} else {
var statearr_31657_31684 = state_31651__$1;
(statearr_31657_31684[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (13))){
var state_31651__$1 = state_31651;
var statearr_31658_31685 = state_31651__$1;
(statearr_31658_31685[(2)] = null);

(statearr_31658_31685[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (6))){
var inst_31628 = (state_31651[(7)]);
var inst_31634 = p.call(null,inst_31628);
var state_31651__$1 = state_31651;
if(cljs.core.truth_(inst_31634)){
var statearr_31659_31686 = state_31651__$1;
(statearr_31659_31686[(1)] = (9));

} else {
var statearr_31660_31687 = state_31651__$1;
(statearr_31660_31687[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (3))){
var inst_31649 = (state_31651[(2)]);
var state_31651__$1 = state_31651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31651__$1,inst_31649);
} else {
if((state_val_31652 === (12))){
var state_31651__$1 = state_31651;
var statearr_31661_31688 = state_31651__$1;
(statearr_31661_31688[(2)] = null);

(statearr_31661_31688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (2))){
var state_31651__$1 = state_31651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31651__$1,(4),ch);
} else {
if((state_val_31652 === (11))){
var inst_31628 = (state_31651[(7)]);
var inst_31638 = (state_31651[(2)]);
var state_31651__$1 = state_31651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31651__$1,(8),inst_31638,inst_31628);
} else {
if((state_val_31652 === (9))){
var state_31651__$1 = state_31651;
var statearr_31662_31689 = state_31651__$1;
(statearr_31662_31689[(2)] = tc);

(statearr_31662_31689[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (5))){
var inst_31631 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31632 = cljs.core.async.close_BANG_.call(null,fc);
var state_31651__$1 = (function (){var statearr_31663 = state_31651;
(statearr_31663[(8)] = inst_31631);

return statearr_31663;
})();
var statearr_31664_31690 = state_31651__$1;
(statearr_31664_31690[(2)] = inst_31632);

(statearr_31664_31690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (14))){
var inst_31645 = (state_31651[(2)]);
var state_31651__$1 = state_31651;
var statearr_31665_31691 = state_31651__$1;
(statearr_31665_31691[(2)] = inst_31645);

(statearr_31665_31691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (10))){
var state_31651__$1 = state_31651;
var statearr_31666_31692 = state_31651__$1;
(statearr_31666_31692[(2)] = fc);

(statearr_31666_31692[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31652 === (8))){
var inst_31640 = (state_31651[(2)]);
var state_31651__$1 = state_31651;
if(cljs.core.truth_(inst_31640)){
var statearr_31667_31693 = state_31651__$1;
(statearr_31667_31693[(1)] = (12));

} else {
var statearr_31668_31694 = state_31651__$1;
(statearr_31668_31694[(1)] = (13));

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
});})(c__30994__auto___31680,tc,fc))
;
return ((function (switch__29418__auto__,c__30994__auto___31680,tc,fc){
return (function() {
var cljs$core$async$state_machine__29419__auto__ = null;
var cljs$core$async$state_machine__29419__auto____0 = (function (){
var statearr_31672 = [null,null,null,null,null,null,null,null,null];
(statearr_31672[(0)] = cljs$core$async$state_machine__29419__auto__);

(statearr_31672[(1)] = (1));

return statearr_31672;
});
var cljs$core$async$state_machine__29419__auto____1 = (function (state_31651){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_31651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e31673){if((e31673 instanceof Object)){
var ex__29422__auto__ = e31673;
var statearr_31674_31695 = state_31651;
(statearr_31674_31695[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31696 = state_31651;
state_31651 = G__31696;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$state_machine__29419__auto__ = function(state_31651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29419__auto____1.call(this,state_31651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29419__auto____0;
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29419__auto____1;
return cljs$core$async$state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto___31680,tc,fc))
})();
var state__30996__auto__ = (function (){var statearr_31675 = f__30995__auto__.call(null);
(statearr_31675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto___31680);

return statearr_31675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto___31680,tc,fc))
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
var c__30994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto__){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto__){
return (function (state_31760){
var state_val_31761 = (state_31760[(1)]);
if((state_val_31761 === (7))){
var inst_31756 = (state_31760[(2)]);
var state_31760__$1 = state_31760;
var statearr_31762_31783 = state_31760__$1;
(statearr_31762_31783[(2)] = inst_31756);

(statearr_31762_31783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31761 === (1))){
var inst_31740 = init;
var state_31760__$1 = (function (){var statearr_31763 = state_31760;
(statearr_31763[(7)] = inst_31740);

return statearr_31763;
})();
var statearr_31764_31784 = state_31760__$1;
(statearr_31764_31784[(2)] = null);

(statearr_31764_31784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31761 === (4))){
var inst_31743 = (state_31760[(8)]);
var inst_31743__$1 = (state_31760[(2)]);
var inst_31744 = (inst_31743__$1 == null);
var state_31760__$1 = (function (){var statearr_31765 = state_31760;
(statearr_31765[(8)] = inst_31743__$1);

return statearr_31765;
})();
if(cljs.core.truth_(inst_31744)){
var statearr_31766_31785 = state_31760__$1;
(statearr_31766_31785[(1)] = (5));

} else {
var statearr_31767_31786 = state_31760__$1;
(statearr_31767_31786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31761 === (6))){
var inst_31743 = (state_31760[(8)]);
var inst_31747 = (state_31760[(9)]);
var inst_31740 = (state_31760[(7)]);
var inst_31747__$1 = f.call(null,inst_31740,inst_31743);
var inst_31748 = cljs.core.reduced_QMARK_.call(null,inst_31747__$1);
var state_31760__$1 = (function (){var statearr_31768 = state_31760;
(statearr_31768[(9)] = inst_31747__$1);

return statearr_31768;
})();
if(inst_31748){
var statearr_31769_31787 = state_31760__$1;
(statearr_31769_31787[(1)] = (8));

} else {
var statearr_31770_31788 = state_31760__$1;
(statearr_31770_31788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31761 === (3))){
var inst_31758 = (state_31760[(2)]);
var state_31760__$1 = state_31760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31760__$1,inst_31758);
} else {
if((state_val_31761 === (2))){
var state_31760__$1 = state_31760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31760__$1,(4),ch);
} else {
if((state_val_31761 === (9))){
var inst_31747 = (state_31760[(9)]);
var inst_31740 = inst_31747;
var state_31760__$1 = (function (){var statearr_31771 = state_31760;
(statearr_31771[(7)] = inst_31740);

return statearr_31771;
})();
var statearr_31772_31789 = state_31760__$1;
(statearr_31772_31789[(2)] = null);

(statearr_31772_31789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31761 === (5))){
var inst_31740 = (state_31760[(7)]);
var state_31760__$1 = state_31760;
var statearr_31773_31790 = state_31760__$1;
(statearr_31773_31790[(2)] = inst_31740);

(statearr_31773_31790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31761 === (10))){
var inst_31754 = (state_31760[(2)]);
var state_31760__$1 = state_31760;
var statearr_31774_31791 = state_31760__$1;
(statearr_31774_31791[(2)] = inst_31754);

(statearr_31774_31791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31761 === (8))){
var inst_31747 = (state_31760[(9)]);
var inst_31750 = cljs.core.deref.call(null,inst_31747);
var state_31760__$1 = state_31760;
var statearr_31775_31792 = state_31760__$1;
(statearr_31775_31792[(2)] = inst_31750);

(statearr_31775_31792[(1)] = (10));


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
});})(c__30994__auto__))
;
return ((function (switch__29418__auto__,c__30994__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29419__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29419__auto____0 = (function (){
var statearr_31779 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31779[(0)] = cljs$core$async$reduce_$_state_machine__29419__auto__);

(statearr_31779[(1)] = (1));

return statearr_31779;
});
var cljs$core$async$reduce_$_state_machine__29419__auto____1 = (function (state_31760){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_31760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e31780){if((e31780 instanceof Object)){
var ex__29422__auto__ = e31780;
var statearr_31781_31793 = state_31760;
(statearr_31781_31793[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31794 = state_31760;
state_31760 = G__31794;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29419__auto__ = function(state_31760){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29419__auto____1.call(this,state_31760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29419__auto____0;
cljs$core$async$reduce_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29419__auto____1;
return cljs$core$async$reduce_$_state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto__))
})();
var state__30996__auto__ = (function (){var statearr_31782 = f__30995__auto__.call(null);
(statearr_31782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto__);

return statearr_31782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto__))
);

return c__30994__auto__;
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
var args31795 = [];
var len__28475__auto___31847 = arguments.length;
var i__28476__auto___31848 = (0);
while(true){
if((i__28476__auto___31848 < len__28475__auto___31847)){
args31795.push((arguments[i__28476__auto___31848]));

var G__31849 = (i__28476__auto___31848 + (1));
i__28476__auto___31848 = G__31849;
continue;
} else {
}
break;
}

var G__31797 = args31795.length;
switch (G__31797) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31795.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto__){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto__){
return (function (state_31822){
var state_val_31823 = (state_31822[(1)]);
if((state_val_31823 === (7))){
var inst_31804 = (state_31822[(2)]);
var state_31822__$1 = state_31822;
var statearr_31824_31851 = state_31822__$1;
(statearr_31824_31851[(2)] = inst_31804);

(statearr_31824_31851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (1))){
var inst_31798 = cljs.core.seq.call(null,coll);
var inst_31799 = inst_31798;
var state_31822__$1 = (function (){var statearr_31825 = state_31822;
(statearr_31825[(7)] = inst_31799);

return statearr_31825;
})();
var statearr_31826_31852 = state_31822__$1;
(statearr_31826_31852[(2)] = null);

(statearr_31826_31852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (4))){
var inst_31799 = (state_31822[(7)]);
var inst_31802 = cljs.core.first.call(null,inst_31799);
var state_31822__$1 = state_31822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31822__$1,(7),ch,inst_31802);
} else {
if((state_val_31823 === (13))){
var inst_31816 = (state_31822[(2)]);
var state_31822__$1 = state_31822;
var statearr_31827_31853 = state_31822__$1;
(statearr_31827_31853[(2)] = inst_31816);

(statearr_31827_31853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (6))){
var inst_31807 = (state_31822[(2)]);
var state_31822__$1 = state_31822;
if(cljs.core.truth_(inst_31807)){
var statearr_31828_31854 = state_31822__$1;
(statearr_31828_31854[(1)] = (8));

} else {
var statearr_31829_31855 = state_31822__$1;
(statearr_31829_31855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (3))){
var inst_31820 = (state_31822[(2)]);
var state_31822__$1 = state_31822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31822__$1,inst_31820);
} else {
if((state_val_31823 === (12))){
var state_31822__$1 = state_31822;
var statearr_31830_31856 = state_31822__$1;
(statearr_31830_31856[(2)] = null);

(statearr_31830_31856[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (2))){
var inst_31799 = (state_31822[(7)]);
var state_31822__$1 = state_31822;
if(cljs.core.truth_(inst_31799)){
var statearr_31831_31857 = state_31822__$1;
(statearr_31831_31857[(1)] = (4));

} else {
var statearr_31832_31858 = state_31822__$1;
(statearr_31832_31858[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (11))){
var inst_31813 = cljs.core.async.close_BANG_.call(null,ch);
var state_31822__$1 = state_31822;
var statearr_31833_31859 = state_31822__$1;
(statearr_31833_31859[(2)] = inst_31813);

(statearr_31833_31859[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (9))){
var state_31822__$1 = state_31822;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31834_31860 = state_31822__$1;
(statearr_31834_31860[(1)] = (11));

} else {
var statearr_31835_31861 = state_31822__$1;
(statearr_31835_31861[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (5))){
var inst_31799 = (state_31822[(7)]);
var state_31822__$1 = state_31822;
var statearr_31836_31862 = state_31822__$1;
(statearr_31836_31862[(2)] = inst_31799);

(statearr_31836_31862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (10))){
var inst_31818 = (state_31822[(2)]);
var state_31822__$1 = state_31822;
var statearr_31837_31863 = state_31822__$1;
(statearr_31837_31863[(2)] = inst_31818);

(statearr_31837_31863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31823 === (8))){
var inst_31799 = (state_31822[(7)]);
var inst_31809 = cljs.core.next.call(null,inst_31799);
var inst_31799__$1 = inst_31809;
var state_31822__$1 = (function (){var statearr_31838 = state_31822;
(statearr_31838[(7)] = inst_31799__$1);

return statearr_31838;
})();
var statearr_31839_31864 = state_31822__$1;
(statearr_31839_31864[(2)] = null);

(statearr_31839_31864[(1)] = (2));


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
});})(c__30994__auto__))
;
return ((function (switch__29418__auto__,c__30994__auto__){
return (function() {
var cljs$core$async$state_machine__29419__auto__ = null;
var cljs$core$async$state_machine__29419__auto____0 = (function (){
var statearr_31843 = [null,null,null,null,null,null,null,null];
(statearr_31843[(0)] = cljs$core$async$state_machine__29419__auto__);

(statearr_31843[(1)] = (1));

return statearr_31843;
});
var cljs$core$async$state_machine__29419__auto____1 = (function (state_31822){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_31822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e31844){if((e31844 instanceof Object)){
var ex__29422__auto__ = e31844;
var statearr_31845_31865 = state_31822;
(statearr_31845_31865[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31866 = state_31822;
state_31822 = G__31866;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$state_machine__29419__auto__ = function(state_31822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29419__auto____1.call(this,state_31822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29419__auto____0;
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29419__auto____1;
return cljs$core$async$state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto__))
})();
var state__30996__auto__ = (function (){var statearr_31846 = f__30995__auto__.call(null);
(statearr_31846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto__);

return statearr_31846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto__))
);

return c__30994__auto__;
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
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28063__auto__ = (((_ == null))?null:_);
var m__28064__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,_);
} else {
var m__28064__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,_);
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
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28063__auto__ = (((m == null))?null:m);
var m__28064__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__28064__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28063__auto__ = (((m == null))?null:m);
var m__28064__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,m,ch);
} else {
var m__28064__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28063__auto__ = (((m == null))?null:m);
var m__28064__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,m);
} else {
var m__28064__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async32092 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32092 = (function (mult,ch,cs,meta32093){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta32093 = meta32093;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32094,meta32093__$1){
var self__ = this;
var _32094__$1 = this;
return (new cljs.core.async.t_cljs$core$async32092(self__.mult,self__.ch,self__.cs,meta32093__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32092.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32094){
var self__ = this;
var _32094__$1 = this;
return self__.meta32093;
});})(cs))
;

cljs.core.async.t_cljs$core$async32092.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32092.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32092.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async32092.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32092.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32092.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32092.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32093","meta32093",-1693743896,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32092.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32092.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32092";

cljs.core.async.t_cljs$core$async32092.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async32092");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32092 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32092(mult__$1,ch__$1,cs__$1,meta32093){
return (new cljs.core.async.t_cljs$core$async32092(mult__$1,ch__$1,cs__$1,meta32093));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32092(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30994__auto___32317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto___32317,cs,m,dchan,dctr,done){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto___32317,cs,m,dchan,dctr,done){
return (function (state_32229){
var state_val_32230 = (state_32229[(1)]);
if((state_val_32230 === (7))){
var inst_32225 = (state_32229[(2)]);
var state_32229__$1 = state_32229;
var statearr_32231_32318 = state_32229__$1;
(statearr_32231_32318[(2)] = inst_32225);

(statearr_32231_32318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (20))){
var inst_32128 = (state_32229[(7)]);
var inst_32140 = cljs.core.first.call(null,inst_32128);
var inst_32141 = cljs.core.nth.call(null,inst_32140,(0),null);
var inst_32142 = cljs.core.nth.call(null,inst_32140,(1),null);
var state_32229__$1 = (function (){var statearr_32232 = state_32229;
(statearr_32232[(8)] = inst_32141);

return statearr_32232;
})();
if(cljs.core.truth_(inst_32142)){
var statearr_32233_32319 = state_32229__$1;
(statearr_32233_32319[(1)] = (22));

} else {
var statearr_32234_32320 = state_32229__$1;
(statearr_32234_32320[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (27))){
var inst_32097 = (state_32229[(9)]);
var inst_32177 = (state_32229[(10)]);
var inst_32170 = (state_32229[(11)]);
var inst_32172 = (state_32229[(12)]);
var inst_32177__$1 = cljs.core._nth.call(null,inst_32170,inst_32172);
var inst_32178 = cljs.core.async.put_BANG_.call(null,inst_32177__$1,inst_32097,done);
var state_32229__$1 = (function (){var statearr_32235 = state_32229;
(statearr_32235[(10)] = inst_32177__$1);

return statearr_32235;
})();
if(cljs.core.truth_(inst_32178)){
var statearr_32236_32321 = state_32229__$1;
(statearr_32236_32321[(1)] = (30));

} else {
var statearr_32237_32322 = state_32229__$1;
(statearr_32237_32322[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (1))){
var state_32229__$1 = state_32229;
var statearr_32238_32323 = state_32229__$1;
(statearr_32238_32323[(2)] = null);

(statearr_32238_32323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (24))){
var inst_32128 = (state_32229[(7)]);
var inst_32147 = (state_32229[(2)]);
var inst_32148 = cljs.core.next.call(null,inst_32128);
var inst_32106 = inst_32148;
var inst_32107 = null;
var inst_32108 = (0);
var inst_32109 = (0);
var state_32229__$1 = (function (){var statearr_32239 = state_32229;
(statearr_32239[(13)] = inst_32106);

(statearr_32239[(14)] = inst_32108);

(statearr_32239[(15)] = inst_32147);

(statearr_32239[(16)] = inst_32109);

(statearr_32239[(17)] = inst_32107);

return statearr_32239;
})();
var statearr_32240_32324 = state_32229__$1;
(statearr_32240_32324[(2)] = null);

(statearr_32240_32324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (39))){
var state_32229__$1 = state_32229;
var statearr_32244_32325 = state_32229__$1;
(statearr_32244_32325[(2)] = null);

(statearr_32244_32325[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (4))){
var inst_32097 = (state_32229[(9)]);
var inst_32097__$1 = (state_32229[(2)]);
var inst_32098 = (inst_32097__$1 == null);
var state_32229__$1 = (function (){var statearr_32245 = state_32229;
(statearr_32245[(9)] = inst_32097__$1);

return statearr_32245;
})();
if(cljs.core.truth_(inst_32098)){
var statearr_32246_32326 = state_32229__$1;
(statearr_32246_32326[(1)] = (5));

} else {
var statearr_32247_32327 = state_32229__$1;
(statearr_32247_32327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (15))){
var inst_32106 = (state_32229[(13)]);
var inst_32108 = (state_32229[(14)]);
var inst_32109 = (state_32229[(16)]);
var inst_32107 = (state_32229[(17)]);
var inst_32124 = (state_32229[(2)]);
var inst_32125 = (inst_32109 + (1));
var tmp32241 = inst_32106;
var tmp32242 = inst_32108;
var tmp32243 = inst_32107;
var inst_32106__$1 = tmp32241;
var inst_32107__$1 = tmp32243;
var inst_32108__$1 = tmp32242;
var inst_32109__$1 = inst_32125;
var state_32229__$1 = (function (){var statearr_32248 = state_32229;
(statearr_32248[(18)] = inst_32124);

(statearr_32248[(13)] = inst_32106__$1);

(statearr_32248[(14)] = inst_32108__$1);

(statearr_32248[(16)] = inst_32109__$1);

(statearr_32248[(17)] = inst_32107__$1);

return statearr_32248;
})();
var statearr_32249_32328 = state_32229__$1;
(statearr_32249_32328[(2)] = null);

(statearr_32249_32328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (21))){
var inst_32151 = (state_32229[(2)]);
var state_32229__$1 = state_32229;
var statearr_32253_32329 = state_32229__$1;
(statearr_32253_32329[(2)] = inst_32151);

(statearr_32253_32329[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (31))){
var inst_32177 = (state_32229[(10)]);
var inst_32181 = done.call(null,null);
var inst_32182 = cljs.core.async.untap_STAR_.call(null,m,inst_32177);
var state_32229__$1 = (function (){var statearr_32254 = state_32229;
(statearr_32254[(19)] = inst_32181);

return statearr_32254;
})();
var statearr_32255_32330 = state_32229__$1;
(statearr_32255_32330[(2)] = inst_32182);

(statearr_32255_32330[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (32))){
var inst_32170 = (state_32229[(11)]);
var inst_32169 = (state_32229[(20)]);
var inst_32171 = (state_32229[(21)]);
var inst_32172 = (state_32229[(12)]);
var inst_32184 = (state_32229[(2)]);
var inst_32185 = (inst_32172 + (1));
var tmp32250 = inst_32170;
var tmp32251 = inst_32169;
var tmp32252 = inst_32171;
var inst_32169__$1 = tmp32251;
var inst_32170__$1 = tmp32250;
var inst_32171__$1 = tmp32252;
var inst_32172__$1 = inst_32185;
var state_32229__$1 = (function (){var statearr_32256 = state_32229;
(statearr_32256[(22)] = inst_32184);

(statearr_32256[(11)] = inst_32170__$1);

(statearr_32256[(20)] = inst_32169__$1);

(statearr_32256[(21)] = inst_32171__$1);

(statearr_32256[(12)] = inst_32172__$1);

return statearr_32256;
})();
var statearr_32257_32331 = state_32229__$1;
(statearr_32257_32331[(2)] = null);

(statearr_32257_32331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (40))){
var inst_32197 = (state_32229[(23)]);
var inst_32201 = done.call(null,null);
var inst_32202 = cljs.core.async.untap_STAR_.call(null,m,inst_32197);
var state_32229__$1 = (function (){var statearr_32258 = state_32229;
(statearr_32258[(24)] = inst_32201);

return statearr_32258;
})();
var statearr_32259_32332 = state_32229__$1;
(statearr_32259_32332[(2)] = inst_32202);

(statearr_32259_32332[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (33))){
var inst_32188 = (state_32229[(25)]);
var inst_32190 = cljs.core.chunked_seq_QMARK_.call(null,inst_32188);
var state_32229__$1 = state_32229;
if(inst_32190){
var statearr_32260_32333 = state_32229__$1;
(statearr_32260_32333[(1)] = (36));

} else {
var statearr_32261_32334 = state_32229__$1;
(statearr_32261_32334[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (13))){
var inst_32118 = (state_32229[(26)]);
var inst_32121 = cljs.core.async.close_BANG_.call(null,inst_32118);
var state_32229__$1 = state_32229;
var statearr_32262_32335 = state_32229__$1;
(statearr_32262_32335[(2)] = inst_32121);

(statearr_32262_32335[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (22))){
var inst_32141 = (state_32229[(8)]);
var inst_32144 = cljs.core.async.close_BANG_.call(null,inst_32141);
var state_32229__$1 = state_32229;
var statearr_32263_32336 = state_32229__$1;
(statearr_32263_32336[(2)] = inst_32144);

(statearr_32263_32336[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (36))){
var inst_32188 = (state_32229[(25)]);
var inst_32192 = cljs.core.chunk_first.call(null,inst_32188);
var inst_32193 = cljs.core.chunk_rest.call(null,inst_32188);
var inst_32194 = cljs.core.count.call(null,inst_32192);
var inst_32169 = inst_32193;
var inst_32170 = inst_32192;
var inst_32171 = inst_32194;
var inst_32172 = (0);
var state_32229__$1 = (function (){var statearr_32264 = state_32229;
(statearr_32264[(11)] = inst_32170);

(statearr_32264[(20)] = inst_32169);

(statearr_32264[(21)] = inst_32171);

(statearr_32264[(12)] = inst_32172);

return statearr_32264;
})();
var statearr_32265_32337 = state_32229__$1;
(statearr_32265_32337[(2)] = null);

(statearr_32265_32337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (41))){
var inst_32188 = (state_32229[(25)]);
var inst_32204 = (state_32229[(2)]);
var inst_32205 = cljs.core.next.call(null,inst_32188);
var inst_32169 = inst_32205;
var inst_32170 = null;
var inst_32171 = (0);
var inst_32172 = (0);
var state_32229__$1 = (function (){var statearr_32266 = state_32229;
(statearr_32266[(27)] = inst_32204);

(statearr_32266[(11)] = inst_32170);

(statearr_32266[(20)] = inst_32169);

(statearr_32266[(21)] = inst_32171);

(statearr_32266[(12)] = inst_32172);

return statearr_32266;
})();
var statearr_32267_32338 = state_32229__$1;
(statearr_32267_32338[(2)] = null);

(statearr_32267_32338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (43))){
var state_32229__$1 = state_32229;
var statearr_32268_32339 = state_32229__$1;
(statearr_32268_32339[(2)] = null);

(statearr_32268_32339[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (29))){
var inst_32213 = (state_32229[(2)]);
var state_32229__$1 = state_32229;
var statearr_32269_32340 = state_32229__$1;
(statearr_32269_32340[(2)] = inst_32213);

(statearr_32269_32340[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (44))){
var inst_32222 = (state_32229[(2)]);
var state_32229__$1 = (function (){var statearr_32270 = state_32229;
(statearr_32270[(28)] = inst_32222);

return statearr_32270;
})();
var statearr_32271_32341 = state_32229__$1;
(statearr_32271_32341[(2)] = null);

(statearr_32271_32341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (6))){
var inst_32161 = (state_32229[(29)]);
var inst_32160 = cljs.core.deref.call(null,cs);
var inst_32161__$1 = cljs.core.keys.call(null,inst_32160);
var inst_32162 = cljs.core.count.call(null,inst_32161__$1);
var inst_32163 = cljs.core.reset_BANG_.call(null,dctr,inst_32162);
var inst_32168 = cljs.core.seq.call(null,inst_32161__$1);
var inst_32169 = inst_32168;
var inst_32170 = null;
var inst_32171 = (0);
var inst_32172 = (0);
var state_32229__$1 = (function (){var statearr_32272 = state_32229;
(statearr_32272[(29)] = inst_32161__$1);

(statearr_32272[(11)] = inst_32170);

(statearr_32272[(30)] = inst_32163);

(statearr_32272[(20)] = inst_32169);

(statearr_32272[(21)] = inst_32171);

(statearr_32272[(12)] = inst_32172);

return statearr_32272;
})();
var statearr_32273_32342 = state_32229__$1;
(statearr_32273_32342[(2)] = null);

(statearr_32273_32342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (28))){
var inst_32188 = (state_32229[(25)]);
var inst_32169 = (state_32229[(20)]);
var inst_32188__$1 = cljs.core.seq.call(null,inst_32169);
var state_32229__$1 = (function (){var statearr_32274 = state_32229;
(statearr_32274[(25)] = inst_32188__$1);

return statearr_32274;
})();
if(inst_32188__$1){
var statearr_32275_32343 = state_32229__$1;
(statearr_32275_32343[(1)] = (33));

} else {
var statearr_32276_32344 = state_32229__$1;
(statearr_32276_32344[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (25))){
var inst_32171 = (state_32229[(21)]);
var inst_32172 = (state_32229[(12)]);
var inst_32174 = (inst_32172 < inst_32171);
var inst_32175 = inst_32174;
var state_32229__$1 = state_32229;
if(cljs.core.truth_(inst_32175)){
var statearr_32277_32345 = state_32229__$1;
(statearr_32277_32345[(1)] = (27));

} else {
var statearr_32278_32346 = state_32229__$1;
(statearr_32278_32346[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (34))){
var state_32229__$1 = state_32229;
var statearr_32279_32347 = state_32229__$1;
(statearr_32279_32347[(2)] = null);

(statearr_32279_32347[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (17))){
var state_32229__$1 = state_32229;
var statearr_32280_32348 = state_32229__$1;
(statearr_32280_32348[(2)] = null);

(statearr_32280_32348[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (3))){
var inst_32227 = (state_32229[(2)]);
var state_32229__$1 = state_32229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32229__$1,inst_32227);
} else {
if((state_val_32230 === (12))){
var inst_32156 = (state_32229[(2)]);
var state_32229__$1 = state_32229;
var statearr_32281_32349 = state_32229__$1;
(statearr_32281_32349[(2)] = inst_32156);

(statearr_32281_32349[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (2))){
var state_32229__$1 = state_32229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32229__$1,(4),ch);
} else {
if((state_val_32230 === (23))){
var state_32229__$1 = state_32229;
var statearr_32282_32350 = state_32229__$1;
(statearr_32282_32350[(2)] = null);

(statearr_32282_32350[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (35))){
var inst_32211 = (state_32229[(2)]);
var state_32229__$1 = state_32229;
var statearr_32283_32351 = state_32229__$1;
(statearr_32283_32351[(2)] = inst_32211);

(statearr_32283_32351[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (19))){
var inst_32128 = (state_32229[(7)]);
var inst_32132 = cljs.core.chunk_first.call(null,inst_32128);
var inst_32133 = cljs.core.chunk_rest.call(null,inst_32128);
var inst_32134 = cljs.core.count.call(null,inst_32132);
var inst_32106 = inst_32133;
var inst_32107 = inst_32132;
var inst_32108 = inst_32134;
var inst_32109 = (0);
var state_32229__$1 = (function (){var statearr_32284 = state_32229;
(statearr_32284[(13)] = inst_32106);

(statearr_32284[(14)] = inst_32108);

(statearr_32284[(16)] = inst_32109);

(statearr_32284[(17)] = inst_32107);

return statearr_32284;
})();
var statearr_32285_32352 = state_32229__$1;
(statearr_32285_32352[(2)] = null);

(statearr_32285_32352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (11))){
var inst_32106 = (state_32229[(13)]);
var inst_32128 = (state_32229[(7)]);
var inst_32128__$1 = cljs.core.seq.call(null,inst_32106);
var state_32229__$1 = (function (){var statearr_32286 = state_32229;
(statearr_32286[(7)] = inst_32128__$1);

return statearr_32286;
})();
if(inst_32128__$1){
var statearr_32287_32353 = state_32229__$1;
(statearr_32287_32353[(1)] = (16));

} else {
var statearr_32288_32354 = state_32229__$1;
(statearr_32288_32354[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (9))){
var inst_32158 = (state_32229[(2)]);
var state_32229__$1 = state_32229;
var statearr_32289_32355 = state_32229__$1;
(statearr_32289_32355[(2)] = inst_32158);

(statearr_32289_32355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (5))){
var inst_32104 = cljs.core.deref.call(null,cs);
var inst_32105 = cljs.core.seq.call(null,inst_32104);
var inst_32106 = inst_32105;
var inst_32107 = null;
var inst_32108 = (0);
var inst_32109 = (0);
var state_32229__$1 = (function (){var statearr_32290 = state_32229;
(statearr_32290[(13)] = inst_32106);

(statearr_32290[(14)] = inst_32108);

(statearr_32290[(16)] = inst_32109);

(statearr_32290[(17)] = inst_32107);

return statearr_32290;
})();
var statearr_32291_32356 = state_32229__$1;
(statearr_32291_32356[(2)] = null);

(statearr_32291_32356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (14))){
var state_32229__$1 = state_32229;
var statearr_32292_32357 = state_32229__$1;
(statearr_32292_32357[(2)] = null);

(statearr_32292_32357[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (45))){
var inst_32219 = (state_32229[(2)]);
var state_32229__$1 = state_32229;
var statearr_32293_32358 = state_32229__$1;
(statearr_32293_32358[(2)] = inst_32219);

(statearr_32293_32358[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (26))){
var inst_32161 = (state_32229[(29)]);
var inst_32215 = (state_32229[(2)]);
var inst_32216 = cljs.core.seq.call(null,inst_32161);
var state_32229__$1 = (function (){var statearr_32294 = state_32229;
(statearr_32294[(31)] = inst_32215);

return statearr_32294;
})();
if(inst_32216){
var statearr_32295_32359 = state_32229__$1;
(statearr_32295_32359[(1)] = (42));

} else {
var statearr_32296_32360 = state_32229__$1;
(statearr_32296_32360[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (16))){
var inst_32128 = (state_32229[(7)]);
var inst_32130 = cljs.core.chunked_seq_QMARK_.call(null,inst_32128);
var state_32229__$1 = state_32229;
if(inst_32130){
var statearr_32297_32361 = state_32229__$1;
(statearr_32297_32361[(1)] = (19));

} else {
var statearr_32298_32362 = state_32229__$1;
(statearr_32298_32362[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (38))){
var inst_32208 = (state_32229[(2)]);
var state_32229__$1 = state_32229;
var statearr_32299_32363 = state_32229__$1;
(statearr_32299_32363[(2)] = inst_32208);

(statearr_32299_32363[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (30))){
var state_32229__$1 = state_32229;
var statearr_32300_32364 = state_32229__$1;
(statearr_32300_32364[(2)] = null);

(statearr_32300_32364[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (10))){
var inst_32109 = (state_32229[(16)]);
var inst_32107 = (state_32229[(17)]);
var inst_32117 = cljs.core._nth.call(null,inst_32107,inst_32109);
var inst_32118 = cljs.core.nth.call(null,inst_32117,(0),null);
var inst_32119 = cljs.core.nth.call(null,inst_32117,(1),null);
var state_32229__$1 = (function (){var statearr_32301 = state_32229;
(statearr_32301[(26)] = inst_32118);

return statearr_32301;
})();
if(cljs.core.truth_(inst_32119)){
var statearr_32302_32365 = state_32229__$1;
(statearr_32302_32365[(1)] = (13));

} else {
var statearr_32303_32366 = state_32229__$1;
(statearr_32303_32366[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (18))){
var inst_32154 = (state_32229[(2)]);
var state_32229__$1 = state_32229;
var statearr_32304_32367 = state_32229__$1;
(statearr_32304_32367[(2)] = inst_32154);

(statearr_32304_32367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (42))){
var state_32229__$1 = state_32229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32229__$1,(45),dchan);
} else {
if((state_val_32230 === (37))){
var inst_32097 = (state_32229[(9)]);
var inst_32188 = (state_32229[(25)]);
var inst_32197 = (state_32229[(23)]);
var inst_32197__$1 = cljs.core.first.call(null,inst_32188);
var inst_32198 = cljs.core.async.put_BANG_.call(null,inst_32197__$1,inst_32097,done);
var state_32229__$1 = (function (){var statearr_32305 = state_32229;
(statearr_32305[(23)] = inst_32197__$1);

return statearr_32305;
})();
if(cljs.core.truth_(inst_32198)){
var statearr_32306_32368 = state_32229__$1;
(statearr_32306_32368[(1)] = (39));

} else {
var statearr_32307_32369 = state_32229__$1;
(statearr_32307_32369[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32230 === (8))){
var inst_32108 = (state_32229[(14)]);
var inst_32109 = (state_32229[(16)]);
var inst_32111 = (inst_32109 < inst_32108);
var inst_32112 = inst_32111;
var state_32229__$1 = state_32229;
if(cljs.core.truth_(inst_32112)){
var statearr_32308_32370 = state_32229__$1;
(statearr_32308_32370[(1)] = (10));

} else {
var statearr_32309_32371 = state_32229__$1;
(statearr_32309_32371[(1)] = (11));

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
});})(c__30994__auto___32317,cs,m,dchan,dctr,done))
;
return ((function (switch__29418__auto__,c__30994__auto___32317,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29419__auto__ = null;
var cljs$core$async$mult_$_state_machine__29419__auto____0 = (function (){
var statearr_32313 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32313[(0)] = cljs$core$async$mult_$_state_machine__29419__auto__);

(statearr_32313[(1)] = (1));

return statearr_32313;
});
var cljs$core$async$mult_$_state_machine__29419__auto____1 = (function (state_32229){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_32229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e32314){if((e32314 instanceof Object)){
var ex__29422__auto__ = e32314;
var statearr_32315_32372 = state_32229;
(statearr_32315_32372[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32373 = state_32229;
state_32229 = G__32373;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29419__auto__ = function(state_32229){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29419__auto____1.call(this,state_32229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29419__auto____0;
cljs$core$async$mult_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29419__auto____1;
return cljs$core$async$mult_$_state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto___32317,cs,m,dchan,dctr,done))
})();
var state__30996__auto__ = (function (){var statearr_32316 = f__30995__auto__.call(null);
(statearr_32316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto___32317);

return statearr_32316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto___32317,cs,m,dchan,dctr,done))
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
var args32374 = [];
var len__28475__auto___32377 = arguments.length;
var i__28476__auto___32378 = (0);
while(true){
if((i__28476__auto___32378 < len__28475__auto___32377)){
args32374.push((arguments[i__28476__auto___32378]));

var G__32379 = (i__28476__auto___32378 + (1));
i__28476__auto___32378 = G__32379;
continue;
} else {
}
break;
}

var G__32376 = args32374.length;
switch (G__32376) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32374.length)].join('')));

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
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28063__auto__ = (((m == null))?null:m);
var m__28064__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,m,ch);
} else {
var m__28064__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28063__auto__ = (((m == null))?null:m);
var m__28064__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,m,ch);
} else {
var m__28064__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28063__auto__ = (((m == null))?null:m);
var m__28064__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,m);
} else {
var m__28064__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28063__auto__ = (((m == null))?null:m);
var m__28064__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,m,state_map);
} else {
var m__28064__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28063__auto__ = (((m == null))?null:m);
var m__28064__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,m,mode);
} else {
var m__28064__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__28482__auto__ = [];
var len__28475__auto___32391 = arguments.length;
var i__28476__auto___32392 = (0);
while(true){
if((i__28476__auto___32392 < len__28475__auto___32391)){
args__28482__auto__.push((arguments[i__28476__auto___32392]));

var G__32393 = (i__28476__auto___32392 + (1));
i__28476__auto___32392 = G__32393;
continue;
} else {
}
break;
}

var argseq__28483__auto__ = ((((3) < args__28482__auto__.length))?(new cljs.core.IndexedSeq(args__28482__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__28483__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32385){
var map__32386 = p__32385;
var map__32386__$1 = ((((!((map__32386 == null)))?((((map__32386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32386):map__32386);
var opts = map__32386__$1;
var statearr_32388_32394 = state;
(statearr_32388_32394[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32386,map__32386__$1,opts){
return (function (val){
var statearr_32389_32395 = state;
(statearr_32389_32395[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32386,map__32386__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32390_32396 = state;
(statearr_32390_32396[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32381){
var G__32382 = cljs.core.first.call(null,seq32381);
var seq32381__$1 = cljs.core.next.call(null,seq32381);
var G__32383 = cljs.core.first.call(null,seq32381__$1);
var seq32381__$2 = cljs.core.next.call(null,seq32381__$1);
var G__32384 = cljs.core.first.call(null,seq32381__$2);
var seq32381__$3 = cljs.core.next.call(null,seq32381__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32382,G__32383,G__32384,seq32381__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32562 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32562 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32563){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32563 = meta32563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32564,meta32563__$1){
var self__ = this;
var _32564__$1 = this;
return (new cljs.core.async.t_cljs$core$async32562(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32563__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32564){
var self__ = this;
var _32564__$1 = this;
return self__.meta32563;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32562.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32562.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32563","meta32563",809685993,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32562.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32562";

cljs.core.async.t_cljs$core$async32562.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async32562");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32562 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32562(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32563){
return (new cljs.core.async.t_cljs$core$async32562(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32563));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32562(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30994__auto___32727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto___32727,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto___32727,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32664){
var state_val_32665 = (state_32664[(1)]);
if((state_val_32665 === (7))){
var inst_32580 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32666_32728 = state_32664__$1;
(statearr_32666_32728[(2)] = inst_32580);

(statearr_32666_32728[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (20))){
var inst_32592 = (state_32664[(7)]);
var state_32664__$1 = state_32664;
var statearr_32667_32729 = state_32664__$1;
(statearr_32667_32729[(2)] = inst_32592);

(statearr_32667_32729[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (27))){
var state_32664__$1 = state_32664;
var statearr_32668_32730 = state_32664__$1;
(statearr_32668_32730[(2)] = null);

(statearr_32668_32730[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (1))){
var inst_32568 = (state_32664[(8)]);
var inst_32568__$1 = calc_state.call(null);
var inst_32570 = (inst_32568__$1 == null);
var inst_32571 = cljs.core.not.call(null,inst_32570);
var state_32664__$1 = (function (){var statearr_32669 = state_32664;
(statearr_32669[(8)] = inst_32568__$1);

return statearr_32669;
})();
if(inst_32571){
var statearr_32670_32731 = state_32664__$1;
(statearr_32670_32731[(1)] = (2));

} else {
var statearr_32671_32732 = state_32664__$1;
(statearr_32671_32732[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (24))){
var inst_32624 = (state_32664[(9)]);
var inst_32638 = (state_32664[(10)]);
var inst_32615 = (state_32664[(11)]);
var inst_32638__$1 = inst_32615.call(null,inst_32624);
var state_32664__$1 = (function (){var statearr_32672 = state_32664;
(statearr_32672[(10)] = inst_32638__$1);

return statearr_32672;
})();
if(cljs.core.truth_(inst_32638__$1)){
var statearr_32673_32733 = state_32664__$1;
(statearr_32673_32733[(1)] = (29));

} else {
var statearr_32674_32734 = state_32664__$1;
(statearr_32674_32734[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (4))){
var inst_32583 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
if(cljs.core.truth_(inst_32583)){
var statearr_32675_32735 = state_32664__$1;
(statearr_32675_32735[(1)] = (8));

} else {
var statearr_32676_32736 = state_32664__$1;
(statearr_32676_32736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (15))){
var inst_32609 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
if(cljs.core.truth_(inst_32609)){
var statearr_32677_32737 = state_32664__$1;
(statearr_32677_32737[(1)] = (19));

} else {
var statearr_32678_32738 = state_32664__$1;
(statearr_32678_32738[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (21))){
var inst_32614 = (state_32664[(12)]);
var inst_32614__$1 = (state_32664[(2)]);
var inst_32615 = cljs.core.get.call(null,inst_32614__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32616 = cljs.core.get.call(null,inst_32614__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32617 = cljs.core.get.call(null,inst_32614__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32664__$1 = (function (){var statearr_32679 = state_32664;
(statearr_32679[(13)] = inst_32616);

(statearr_32679[(11)] = inst_32615);

(statearr_32679[(12)] = inst_32614__$1);

return statearr_32679;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32664__$1,(22),inst_32617);
} else {
if((state_val_32665 === (31))){
var inst_32646 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
if(cljs.core.truth_(inst_32646)){
var statearr_32680_32739 = state_32664__$1;
(statearr_32680_32739[(1)] = (32));

} else {
var statearr_32681_32740 = state_32664__$1;
(statearr_32681_32740[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (32))){
var inst_32623 = (state_32664[(14)]);
var state_32664__$1 = state_32664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32664__$1,(35),out,inst_32623);
} else {
if((state_val_32665 === (33))){
var inst_32614 = (state_32664[(12)]);
var inst_32592 = inst_32614;
var state_32664__$1 = (function (){var statearr_32682 = state_32664;
(statearr_32682[(7)] = inst_32592);

return statearr_32682;
})();
var statearr_32683_32741 = state_32664__$1;
(statearr_32683_32741[(2)] = null);

(statearr_32683_32741[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (13))){
var inst_32592 = (state_32664[(7)]);
var inst_32599 = inst_32592.cljs$lang$protocol_mask$partition0$;
var inst_32600 = (inst_32599 & (64));
var inst_32601 = inst_32592.cljs$core$ISeq$;
var inst_32602 = (inst_32600) || (inst_32601);
var state_32664__$1 = state_32664;
if(cljs.core.truth_(inst_32602)){
var statearr_32684_32742 = state_32664__$1;
(statearr_32684_32742[(1)] = (16));

} else {
var statearr_32685_32743 = state_32664__$1;
(statearr_32685_32743[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (22))){
var inst_32624 = (state_32664[(9)]);
var inst_32623 = (state_32664[(14)]);
var inst_32622 = (state_32664[(2)]);
var inst_32623__$1 = cljs.core.nth.call(null,inst_32622,(0),null);
var inst_32624__$1 = cljs.core.nth.call(null,inst_32622,(1),null);
var inst_32625 = (inst_32623__$1 == null);
var inst_32626 = cljs.core._EQ_.call(null,inst_32624__$1,change);
var inst_32627 = (inst_32625) || (inst_32626);
var state_32664__$1 = (function (){var statearr_32686 = state_32664;
(statearr_32686[(9)] = inst_32624__$1);

(statearr_32686[(14)] = inst_32623__$1);

return statearr_32686;
})();
if(cljs.core.truth_(inst_32627)){
var statearr_32687_32744 = state_32664__$1;
(statearr_32687_32744[(1)] = (23));

} else {
var statearr_32688_32745 = state_32664__$1;
(statearr_32688_32745[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (36))){
var inst_32614 = (state_32664[(12)]);
var inst_32592 = inst_32614;
var state_32664__$1 = (function (){var statearr_32689 = state_32664;
(statearr_32689[(7)] = inst_32592);

return statearr_32689;
})();
var statearr_32690_32746 = state_32664__$1;
(statearr_32690_32746[(2)] = null);

(statearr_32690_32746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (29))){
var inst_32638 = (state_32664[(10)]);
var state_32664__$1 = state_32664;
var statearr_32691_32747 = state_32664__$1;
(statearr_32691_32747[(2)] = inst_32638);

(statearr_32691_32747[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (6))){
var state_32664__$1 = state_32664;
var statearr_32692_32748 = state_32664__$1;
(statearr_32692_32748[(2)] = false);

(statearr_32692_32748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (28))){
var inst_32634 = (state_32664[(2)]);
var inst_32635 = calc_state.call(null);
var inst_32592 = inst_32635;
var state_32664__$1 = (function (){var statearr_32693 = state_32664;
(statearr_32693[(15)] = inst_32634);

(statearr_32693[(7)] = inst_32592);

return statearr_32693;
})();
var statearr_32694_32749 = state_32664__$1;
(statearr_32694_32749[(2)] = null);

(statearr_32694_32749[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (25))){
var inst_32660 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32695_32750 = state_32664__$1;
(statearr_32695_32750[(2)] = inst_32660);

(statearr_32695_32750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (34))){
var inst_32658 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32696_32751 = state_32664__$1;
(statearr_32696_32751[(2)] = inst_32658);

(statearr_32696_32751[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (17))){
var state_32664__$1 = state_32664;
var statearr_32697_32752 = state_32664__$1;
(statearr_32697_32752[(2)] = false);

(statearr_32697_32752[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (3))){
var state_32664__$1 = state_32664;
var statearr_32698_32753 = state_32664__$1;
(statearr_32698_32753[(2)] = false);

(statearr_32698_32753[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (12))){
var inst_32662 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32664__$1,inst_32662);
} else {
if((state_val_32665 === (2))){
var inst_32568 = (state_32664[(8)]);
var inst_32573 = inst_32568.cljs$lang$protocol_mask$partition0$;
var inst_32574 = (inst_32573 & (64));
var inst_32575 = inst_32568.cljs$core$ISeq$;
var inst_32576 = (inst_32574) || (inst_32575);
var state_32664__$1 = state_32664;
if(cljs.core.truth_(inst_32576)){
var statearr_32699_32754 = state_32664__$1;
(statearr_32699_32754[(1)] = (5));

} else {
var statearr_32700_32755 = state_32664__$1;
(statearr_32700_32755[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (23))){
var inst_32623 = (state_32664[(14)]);
var inst_32629 = (inst_32623 == null);
var state_32664__$1 = state_32664;
if(cljs.core.truth_(inst_32629)){
var statearr_32701_32756 = state_32664__$1;
(statearr_32701_32756[(1)] = (26));

} else {
var statearr_32702_32757 = state_32664__$1;
(statearr_32702_32757[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (35))){
var inst_32649 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
if(cljs.core.truth_(inst_32649)){
var statearr_32703_32758 = state_32664__$1;
(statearr_32703_32758[(1)] = (36));

} else {
var statearr_32704_32759 = state_32664__$1;
(statearr_32704_32759[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (19))){
var inst_32592 = (state_32664[(7)]);
var inst_32611 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32592);
var state_32664__$1 = state_32664;
var statearr_32705_32760 = state_32664__$1;
(statearr_32705_32760[(2)] = inst_32611);

(statearr_32705_32760[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (11))){
var inst_32592 = (state_32664[(7)]);
var inst_32596 = (inst_32592 == null);
var inst_32597 = cljs.core.not.call(null,inst_32596);
var state_32664__$1 = state_32664;
if(inst_32597){
var statearr_32706_32761 = state_32664__$1;
(statearr_32706_32761[(1)] = (13));

} else {
var statearr_32707_32762 = state_32664__$1;
(statearr_32707_32762[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (9))){
var inst_32568 = (state_32664[(8)]);
var state_32664__$1 = state_32664;
var statearr_32708_32763 = state_32664__$1;
(statearr_32708_32763[(2)] = inst_32568);

(statearr_32708_32763[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (5))){
var state_32664__$1 = state_32664;
var statearr_32709_32764 = state_32664__$1;
(statearr_32709_32764[(2)] = true);

(statearr_32709_32764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (14))){
var state_32664__$1 = state_32664;
var statearr_32710_32765 = state_32664__$1;
(statearr_32710_32765[(2)] = false);

(statearr_32710_32765[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (26))){
var inst_32624 = (state_32664[(9)]);
var inst_32631 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32624);
var state_32664__$1 = state_32664;
var statearr_32711_32766 = state_32664__$1;
(statearr_32711_32766[(2)] = inst_32631);

(statearr_32711_32766[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (16))){
var state_32664__$1 = state_32664;
var statearr_32712_32767 = state_32664__$1;
(statearr_32712_32767[(2)] = true);

(statearr_32712_32767[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (38))){
var inst_32654 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32713_32768 = state_32664__$1;
(statearr_32713_32768[(2)] = inst_32654);

(statearr_32713_32768[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (30))){
var inst_32616 = (state_32664[(13)]);
var inst_32624 = (state_32664[(9)]);
var inst_32615 = (state_32664[(11)]);
var inst_32641 = cljs.core.empty_QMARK_.call(null,inst_32615);
var inst_32642 = inst_32616.call(null,inst_32624);
var inst_32643 = cljs.core.not.call(null,inst_32642);
var inst_32644 = (inst_32641) && (inst_32643);
var state_32664__$1 = state_32664;
var statearr_32714_32769 = state_32664__$1;
(statearr_32714_32769[(2)] = inst_32644);

(statearr_32714_32769[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (10))){
var inst_32568 = (state_32664[(8)]);
var inst_32588 = (state_32664[(2)]);
var inst_32589 = cljs.core.get.call(null,inst_32588,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32590 = cljs.core.get.call(null,inst_32588,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32591 = cljs.core.get.call(null,inst_32588,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32592 = inst_32568;
var state_32664__$1 = (function (){var statearr_32715 = state_32664;
(statearr_32715[(16)] = inst_32589);

(statearr_32715[(7)] = inst_32592);

(statearr_32715[(17)] = inst_32591);

(statearr_32715[(18)] = inst_32590);

return statearr_32715;
})();
var statearr_32716_32770 = state_32664__$1;
(statearr_32716_32770[(2)] = null);

(statearr_32716_32770[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (18))){
var inst_32606 = (state_32664[(2)]);
var state_32664__$1 = state_32664;
var statearr_32717_32771 = state_32664__$1;
(statearr_32717_32771[(2)] = inst_32606);

(statearr_32717_32771[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (37))){
var state_32664__$1 = state_32664;
var statearr_32718_32772 = state_32664__$1;
(statearr_32718_32772[(2)] = null);

(statearr_32718_32772[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32665 === (8))){
var inst_32568 = (state_32664[(8)]);
var inst_32585 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32568);
var state_32664__$1 = state_32664;
var statearr_32719_32773 = state_32664__$1;
(statearr_32719_32773[(2)] = inst_32585);

(statearr_32719_32773[(1)] = (10));


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
});})(c__30994__auto___32727,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29418__auto__,c__30994__auto___32727,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29419__auto__ = null;
var cljs$core$async$mix_$_state_machine__29419__auto____0 = (function (){
var statearr_32723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32723[(0)] = cljs$core$async$mix_$_state_machine__29419__auto__);

(statearr_32723[(1)] = (1));

return statearr_32723;
});
var cljs$core$async$mix_$_state_machine__29419__auto____1 = (function (state_32664){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_32664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e32724){if((e32724 instanceof Object)){
var ex__29422__auto__ = e32724;
var statearr_32725_32774 = state_32664;
(statearr_32725_32774[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32775 = state_32664;
state_32664 = G__32775;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29419__auto__ = function(state_32664){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29419__auto____1.call(this,state_32664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29419__auto____0;
cljs$core$async$mix_$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29419__auto____1;
return cljs$core$async$mix_$_state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto___32727,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30996__auto__ = (function (){var statearr_32726 = f__30995__auto__.call(null);
(statearr_32726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto___32727);

return statearr_32726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto___32727,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28063__auto__ = (((p == null))?null:p);
var m__28064__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__28064__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28063__auto__ = (((p == null))?null:p);
var m__28064__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,p,v,ch);
} else {
var m__28064__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args32776 = [];
var len__28475__auto___32779 = arguments.length;
var i__28476__auto___32780 = (0);
while(true){
if((i__28476__auto___32780 < len__28475__auto___32779)){
args32776.push((arguments[i__28476__auto___32780]));

var G__32781 = (i__28476__auto___32780 + (1));
i__28476__auto___32780 = G__32781;
continue;
} else {
}
break;
}

var G__32778 = args32776.length;
switch (G__32778) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32776.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28063__auto__ = (((p == null))?null:p);
var m__28064__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,p);
} else {
var m__28064__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28063__auto__ = (((p == null))?null:p);
var m__28064__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28063__auto__)]);
if(!((m__28064__auto__ == null))){
return m__28064__auto__.call(null,p,v);
} else {
var m__28064__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__28064__auto____$1 == null))){
return m__28064__auto____$1.call(null,p,v);
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
var args32784 = [];
var len__28475__auto___32909 = arguments.length;
var i__28476__auto___32910 = (0);
while(true){
if((i__28476__auto___32910 < len__28475__auto___32909)){
args32784.push((arguments[i__28476__auto___32910]));

var G__32911 = (i__28476__auto___32910 + (1));
i__28476__auto___32910 = G__32911;
continue;
} else {
}
break;
}

var G__32786 = args32784.length;
switch (G__32786) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32784.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27400__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27400__auto__)){
return or__27400__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27400__auto__,mults){
return (function (p1__32783_SHARP_){
if(cljs.core.truth_(p1__32783_SHARP_.call(null,topic))){
return p1__32783_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32783_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27400__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32787 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32787 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32788){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32788 = meta32788;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32789,meta32788__$1){
var self__ = this;
var _32789__$1 = this;
return (new cljs.core.async.t_cljs$core$async32787(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32788__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32789){
var self__ = this;
var _32789__$1 = this;
return self__.meta32788;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32787.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32787.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32788","meta32788",448234998,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32787.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32787.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32787";

cljs.core.async.t_cljs$core$async32787.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async32787");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32787 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32787(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32788){
return (new cljs.core.async.t_cljs$core$async32787(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32788));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32787(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30994__auto___32913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto___32913,mults,ensure_mult,p){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto___32913,mults,ensure_mult,p){
return (function (state_32861){
var state_val_32862 = (state_32861[(1)]);
if((state_val_32862 === (7))){
var inst_32857 = (state_32861[(2)]);
var state_32861__$1 = state_32861;
var statearr_32863_32914 = state_32861__$1;
(statearr_32863_32914[(2)] = inst_32857);

(statearr_32863_32914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (20))){
var state_32861__$1 = state_32861;
var statearr_32864_32915 = state_32861__$1;
(statearr_32864_32915[(2)] = null);

(statearr_32864_32915[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (1))){
var state_32861__$1 = state_32861;
var statearr_32865_32916 = state_32861__$1;
(statearr_32865_32916[(2)] = null);

(statearr_32865_32916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (24))){
var inst_32840 = (state_32861[(7)]);
var inst_32849 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32840);
var state_32861__$1 = state_32861;
var statearr_32866_32917 = state_32861__$1;
(statearr_32866_32917[(2)] = inst_32849);

(statearr_32866_32917[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (4))){
var inst_32792 = (state_32861[(8)]);
var inst_32792__$1 = (state_32861[(2)]);
var inst_32793 = (inst_32792__$1 == null);
var state_32861__$1 = (function (){var statearr_32867 = state_32861;
(statearr_32867[(8)] = inst_32792__$1);

return statearr_32867;
})();
if(cljs.core.truth_(inst_32793)){
var statearr_32868_32918 = state_32861__$1;
(statearr_32868_32918[(1)] = (5));

} else {
var statearr_32869_32919 = state_32861__$1;
(statearr_32869_32919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (15))){
var inst_32834 = (state_32861[(2)]);
var state_32861__$1 = state_32861;
var statearr_32870_32920 = state_32861__$1;
(statearr_32870_32920[(2)] = inst_32834);

(statearr_32870_32920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (21))){
var inst_32854 = (state_32861[(2)]);
var state_32861__$1 = (function (){var statearr_32871 = state_32861;
(statearr_32871[(9)] = inst_32854);

return statearr_32871;
})();
var statearr_32872_32921 = state_32861__$1;
(statearr_32872_32921[(2)] = null);

(statearr_32872_32921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (13))){
var inst_32816 = (state_32861[(10)]);
var inst_32818 = cljs.core.chunked_seq_QMARK_.call(null,inst_32816);
var state_32861__$1 = state_32861;
if(inst_32818){
var statearr_32873_32922 = state_32861__$1;
(statearr_32873_32922[(1)] = (16));

} else {
var statearr_32874_32923 = state_32861__$1;
(statearr_32874_32923[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (22))){
var inst_32846 = (state_32861[(2)]);
var state_32861__$1 = state_32861;
if(cljs.core.truth_(inst_32846)){
var statearr_32875_32924 = state_32861__$1;
(statearr_32875_32924[(1)] = (23));

} else {
var statearr_32876_32925 = state_32861__$1;
(statearr_32876_32925[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (6))){
var inst_32842 = (state_32861[(11)]);
var inst_32840 = (state_32861[(7)]);
var inst_32792 = (state_32861[(8)]);
var inst_32840__$1 = topic_fn.call(null,inst_32792);
var inst_32841 = cljs.core.deref.call(null,mults);
var inst_32842__$1 = cljs.core.get.call(null,inst_32841,inst_32840__$1);
var state_32861__$1 = (function (){var statearr_32877 = state_32861;
(statearr_32877[(11)] = inst_32842__$1);

(statearr_32877[(7)] = inst_32840__$1);

return statearr_32877;
})();
if(cljs.core.truth_(inst_32842__$1)){
var statearr_32878_32926 = state_32861__$1;
(statearr_32878_32926[(1)] = (19));

} else {
var statearr_32879_32927 = state_32861__$1;
(statearr_32879_32927[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (25))){
var inst_32851 = (state_32861[(2)]);
var state_32861__$1 = state_32861;
var statearr_32880_32928 = state_32861__$1;
(statearr_32880_32928[(2)] = inst_32851);

(statearr_32880_32928[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (17))){
var inst_32816 = (state_32861[(10)]);
var inst_32825 = cljs.core.first.call(null,inst_32816);
var inst_32826 = cljs.core.async.muxch_STAR_.call(null,inst_32825);
var inst_32827 = cljs.core.async.close_BANG_.call(null,inst_32826);
var inst_32828 = cljs.core.next.call(null,inst_32816);
var inst_32802 = inst_32828;
var inst_32803 = null;
var inst_32804 = (0);
var inst_32805 = (0);
var state_32861__$1 = (function (){var statearr_32881 = state_32861;
(statearr_32881[(12)] = inst_32803);

(statearr_32881[(13)] = inst_32802);

(statearr_32881[(14)] = inst_32827);

(statearr_32881[(15)] = inst_32804);

(statearr_32881[(16)] = inst_32805);

return statearr_32881;
})();
var statearr_32882_32929 = state_32861__$1;
(statearr_32882_32929[(2)] = null);

(statearr_32882_32929[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (3))){
var inst_32859 = (state_32861[(2)]);
var state_32861__$1 = state_32861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32861__$1,inst_32859);
} else {
if((state_val_32862 === (12))){
var inst_32836 = (state_32861[(2)]);
var state_32861__$1 = state_32861;
var statearr_32883_32930 = state_32861__$1;
(statearr_32883_32930[(2)] = inst_32836);

(statearr_32883_32930[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (2))){
var state_32861__$1 = state_32861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32861__$1,(4),ch);
} else {
if((state_val_32862 === (23))){
var state_32861__$1 = state_32861;
var statearr_32884_32931 = state_32861__$1;
(statearr_32884_32931[(2)] = null);

(statearr_32884_32931[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (19))){
var inst_32842 = (state_32861[(11)]);
var inst_32792 = (state_32861[(8)]);
var inst_32844 = cljs.core.async.muxch_STAR_.call(null,inst_32842);
var state_32861__$1 = state_32861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32861__$1,(22),inst_32844,inst_32792);
} else {
if((state_val_32862 === (11))){
var inst_32802 = (state_32861[(13)]);
var inst_32816 = (state_32861[(10)]);
var inst_32816__$1 = cljs.core.seq.call(null,inst_32802);
var state_32861__$1 = (function (){var statearr_32885 = state_32861;
(statearr_32885[(10)] = inst_32816__$1);

return statearr_32885;
})();
if(inst_32816__$1){
var statearr_32886_32932 = state_32861__$1;
(statearr_32886_32932[(1)] = (13));

} else {
var statearr_32887_32933 = state_32861__$1;
(statearr_32887_32933[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (9))){
var inst_32838 = (state_32861[(2)]);
var state_32861__$1 = state_32861;
var statearr_32888_32934 = state_32861__$1;
(statearr_32888_32934[(2)] = inst_32838);

(statearr_32888_32934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (5))){
var inst_32799 = cljs.core.deref.call(null,mults);
var inst_32800 = cljs.core.vals.call(null,inst_32799);
var inst_32801 = cljs.core.seq.call(null,inst_32800);
var inst_32802 = inst_32801;
var inst_32803 = null;
var inst_32804 = (0);
var inst_32805 = (0);
var state_32861__$1 = (function (){var statearr_32889 = state_32861;
(statearr_32889[(12)] = inst_32803);

(statearr_32889[(13)] = inst_32802);

(statearr_32889[(15)] = inst_32804);

(statearr_32889[(16)] = inst_32805);

return statearr_32889;
})();
var statearr_32890_32935 = state_32861__$1;
(statearr_32890_32935[(2)] = null);

(statearr_32890_32935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (14))){
var state_32861__$1 = state_32861;
var statearr_32894_32936 = state_32861__$1;
(statearr_32894_32936[(2)] = null);

(statearr_32894_32936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (16))){
var inst_32816 = (state_32861[(10)]);
var inst_32820 = cljs.core.chunk_first.call(null,inst_32816);
var inst_32821 = cljs.core.chunk_rest.call(null,inst_32816);
var inst_32822 = cljs.core.count.call(null,inst_32820);
var inst_32802 = inst_32821;
var inst_32803 = inst_32820;
var inst_32804 = inst_32822;
var inst_32805 = (0);
var state_32861__$1 = (function (){var statearr_32895 = state_32861;
(statearr_32895[(12)] = inst_32803);

(statearr_32895[(13)] = inst_32802);

(statearr_32895[(15)] = inst_32804);

(statearr_32895[(16)] = inst_32805);

return statearr_32895;
})();
var statearr_32896_32937 = state_32861__$1;
(statearr_32896_32937[(2)] = null);

(statearr_32896_32937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (10))){
var inst_32803 = (state_32861[(12)]);
var inst_32802 = (state_32861[(13)]);
var inst_32804 = (state_32861[(15)]);
var inst_32805 = (state_32861[(16)]);
var inst_32810 = cljs.core._nth.call(null,inst_32803,inst_32805);
var inst_32811 = cljs.core.async.muxch_STAR_.call(null,inst_32810);
var inst_32812 = cljs.core.async.close_BANG_.call(null,inst_32811);
var inst_32813 = (inst_32805 + (1));
var tmp32891 = inst_32803;
var tmp32892 = inst_32802;
var tmp32893 = inst_32804;
var inst_32802__$1 = tmp32892;
var inst_32803__$1 = tmp32891;
var inst_32804__$1 = tmp32893;
var inst_32805__$1 = inst_32813;
var state_32861__$1 = (function (){var statearr_32897 = state_32861;
(statearr_32897[(12)] = inst_32803__$1);

(statearr_32897[(13)] = inst_32802__$1);

(statearr_32897[(17)] = inst_32812);

(statearr_32897[(15)] = inst_32804__$1);

(statearr_32897[(16)] = inst_32805__$1);

return statearr_32897;
})();
var statearr_32898_32938 = state_32861__$1;
(statearr_32898_32938[(2)] = null);

(statearr_32898_32938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (18))){
var inst_32831 = (state_32861[(2)]);
var state_32861__$1 = state_32861;
var statearr_32899_32939 = state_32861__$1;
(statearr_32899_32939[(2)] = inst_32831);

(statearr_32899_32939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32862 === (8))){
var inst_32804 = (state_32861[(15)]);
var inst_32805 = (state_32861[(16)]);
var inst_32807 = (inst_32805 < inst_32804);
var inst_32808 = inst_32807;
var state_32861__$1 = state_32861;
if(cljs.core.truth_(inst_32808)){
var statearr_32900_32940 = state_32861__$1;
(statearr_32900_32940[(1)] = (10));

} else {
var statearr_32901_32941 = state_32861__$1;
(statearr_32901_32941[(1)] = (11));

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
});})(c__30994__auto___32913,mults,ensure_mult,p))
;
return ((function (switch__29418__auto__,c__30994__auto___32913,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29419__auto__ = null;
var cljs$core$async$state_machine__29419__auto____0 = (function (){
var statearr_32905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32905[(0)] = cljs$core$async$state_machine__29419__auto__);

(statearr_32905[(1)] = (1));

return statearr_32905;
});
var cljs$core$async$state_machine__29419__auto____1 = (function (state_32861){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_32861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e32906){if((e32906 instanceof Object)){
var ex__29422__auto__ = e32906;
var statearr_32907_32942 = state_32861;
(statearr_32907_32942[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32943 = state_32861;
state_32861 = G__32943;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$state_machine__29419__auto__ = function(state_32861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29419__auto____1.call(this,state_32861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29419__auto____0;
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29419__auto____1;
return cljs$core$async$state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto___32913,mults,ensure_mult,p))
})();
var state__30996__auto__ = (function (){var statearr_32908 = f__30995__auto__.call(null);
(statearr_32908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto___32913);

return statearr_32908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto___32913,mults,ensure_mult,p))
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
var args32944 = [];
var len__28475__auto___32947 = arguments.length;
var i__28476__auto___32948 = (0);
while(true){
if((i__28476__auto___32948 < len__28475__auto___32947)){
args32944.push((arguments[i__28476__auto___32948]));

var G__32949 = (i__28476__auto___32948 + (1));
i__28476__auto___32948 = G__32949;
continue;
} else {
}
break;
}

var G__32946 = args32944.length;
switch (G__32946) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32944.length)].join('')));

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
var args32951 = [];
var len__28475__auto___32954 = arguments.length;
var i__28476__auto___32955 = (0);
while(true){
if((i__28476__auto___32955 < len__28475__auto___32954)){
args32951.push((arguments[i__28476__auto___32955]));

var G__32956 = (i__28476__auto___32955 + (1));
i__28476__auto___32955 = G__32956;
continue;
} else {
}
break;
}

var G__32953 = args32951.length;
switch (G__32953) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32951.length)].join('')));

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
var args32958 = [];
var len__28475__auto___33029 = arguments.length;
var i__28476__auto___33030 = (0);
while(true){
if((i__28476__auto___33030 < len__28475__auto___33029)){
args32958.push((arguments[i__28476__auto___33030]));

var G__33031 = (i__28476__auto___33030 + (1));
i__28476__auto___33030 = G__33031;
continue;
} else {
}
break;
}

var G__32960 = args32958.length;
switch (G__32960) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32958.length)].join('')));

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
var c__30994__auto___33033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto___33033,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto___33033,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32999){
var state_val_33000 = (state_32999[(1)]);
if((state_val_33000 === (7))){
var state_32999__$1 = state_32999;
var statearr_33001_33034 = state_32999__$1;
(statearr_33001_33034[(2)] = null);

(statearr_33001_33034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (1))){
var state_32999__$1 = state_32999;
var statearr_33002_33035 = state_32999__$1;
(statearr_33002_33035[(2)] = null);

(statearr_33002_33035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (4))){
var inst_32963 = (state_32999[(7)]);
var inst_32965 = (inst_32963 < cnt);
var state_32999__$1 = state_32999;
if(cljs.core.truth_(inst_32965)){
var statearr_33003_33036 = state_32999__$1;
(statearr_33003_33036[(1)] = (6));

} else {
var statearr_33004_33037 = state_32999__$1;
(statearr_33004_33037[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (15))){
var inst_32995 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
var statearr_33005_33038 = state_32999__$1;
(statearr_33005_33038[(2)] = inst_32995);

(statearr_33005_33038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (13))){
var inst_32988 = cljs.core.async.close_BANG_.call(null,out);
var state_32999__$1 = state_32999;
var statearr_33006_33039 = state_32999__$1;
(statearr_33006_33039[(2)] = inst_32988);

(statearr_33006_33039[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (6))){
var state_32999__$1 = state_32999;
var statearr_33007_33040 = state_32999__$1;
(statearr_33007_33040[(2)] = null);

(statearr_33007_33040[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (3))){
var inst_32997 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32999__$1,inst_32997);
} else {
if((state_val_33000 === (12))){
var inst_32985 = (state_32999[(8)]);
var inst_32985__$1 = (state_32999[(2)]);
var inst_32986 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32985__$1);
var state_32999__$1 = (function (){var statearr_33008 = state_32999;
(statearr_33008[(8)] = inst_32985__$1);

return statearr_33008;
})();
if(cljs.core.truth_(inst_32986)){
var statearr_33009_33041 = state_32999__$1;
(statearr_33009_33041[(1)] = (13));

} else {
var statearr_33010_33042 = state_32999__$1;
(statearr_33010_33042[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (2))){
var inst_32962 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32963 = (0);
var state_32999__$1 = (function (){var statearr_33011 = state_32999;
(statearr_33011[(7)] = inst_32963);

(statearr_33011[(9)] = inst_32962);

return statearr_33011;
})();
var statearr_33012_33043 = state_32999__$1;
(statearr_33012_33043[(2)] = null);

(statearr_33012_33043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (11))){
var inst_32963 = (state_32999[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32999,(10),Object,null,(9));
var inst_32972 = chs__$1.call(null,inst_32963);
var inst_32973 = done.call(null,inst_32963);
var inst_32974 = cljs.core.async.take_BANG_.call(null,inst_32972,inst_32973);
var state_32999__$1 = state_32999;
var statearr_33013_33044 = state_32999__$1;
(statearr_33013_33044[(2)] = inst_32974);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32999__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (9))){
var inst_32963 = (state_32999[(7)]);
var inst_32976 = (state_32999[(2)]);
var inst_32977 = (inst_32963 + (1));
var inst_32963__$1 = inst_32977;
var state_32999__$1 = (function (){var statearr_33014 = state_32999;
(statearr_33014[(10)] = inst_32976);

(statearr_33014[(7)] = inst_32963__$1);

return statearr_33014;
})();
var statearr_33015_33045 = state_32999__$1;
(statearr_33015_33045[(2)] = null);

(statearr_33015_33045[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (5))){
var inst_32983 = (state_32999[(2)]);
var state_32999__$1 = (function (){var statearr_33016 = state_32999;
(statearr_33016[(11)] = inst_32983);

return statearr_33016;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32999__$1,(12),dchan);
} else {
if((state_val_33000 === (14))){
var inst_32985 = (state_32999[(8)]);
var inst_32990 = cljs.core.apply.call(null,f,inst_32985);
var state_32999__$1 = state_32999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32999__$1,(16),out,inst_32990);
} else {
if((state_val_33000 === (16))){
var inst_32992 = (state_32999[(2)]);
var state_32999__$1 = (function (){var statearr_33017 = state_32999;
(statearr_33017[(12)] = inst_32992);

return statearr_33017;
})();
var statearr_33018_33046 = state_32999__$1;
(statearr_33018_33046[(2)] = null);

(statearr_33018_33046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (10))){
var inst_32967 = (state_32999[(2)]);
var inst_32968 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32999__$1 = (function (){var statearr_33019 = state_32999;
(statearr_33019[(13)] = inst_32967);

return statearr_33019;
})();
var statearr_33020_33047 = state_32999__$1;
(statearr_33020_33047[(2)] = inst_32968);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32999__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33000 === (8))){
var inst_32981 = (state_32999[(2)]);
var state_32999__$1 = state_32999;
var statearr_33021_33048 = state_32999__$1;
(statearr_33021_33048[(2)] = inst_32981);

(statearr_33021_33048[(1)] = (5));


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
});})(c__30994__auto___33033,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29418__auto__,c__30994__auto___33033,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29419__auto__ = null;
var cljs$core$async$state_machine__29419__auto____0 = (function (){
var statearr_33025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33025[(0)] = cljs$core$async$state_machine__29419__auto__);

(statearr_33025[(1)] = (1));

return statearr_33025;
});
var cljs$core$async$state_machine__29419__auto____1 = (function (state_32999){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_32999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e33026){if((e33026 instanceof Object)){
var ex__29422__auto__ = e33026;
var statearr_33027_33049 = state_32999;
(statearr_33027_33049[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33050 = state_32999;
state_32999 = G__33050;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$state_machine__29419__auto__ = function(state_32999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29419__auto____1.call(this,state_32999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29419__auto____0;
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29419__auto____1;
return cljs$core$async$state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto___33033,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30996__auto__ = (function (){var statearr_33028 = f__30995__auto__.call(null);
(statearr_33028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto___33033);

return statearr_33028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto___33033,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args33052 = [];
var len__28475__auto___33110 = arguments.length;
var i__28476__auto___33111 = (0);
while(true){
if((i__28476__auto___33111 < len__28475__auto___33110)){
args33052.push((arguments[i__28476__auto___33111]));

var G__33112 = (i__28476__auto___33111 + (1));
i__28476__auto___33111 = G__33112;
continue;
} else {
}
break;
}

var G__33054 = args33052.length;
switch (G__33054) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33052.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30994__auto___33114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto___33114,out){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto___33114,out){
return (function (state_33086){
var state_val_33087 = (state_33086[(1)]);
if((state_val_33087 === (7))){
var inst_33065 = (state_33086[(7)]);
var inst_33066 = (state_33086[(8)]);
var inst_33065__$1 = (state_33086[(2)]);
var inst_33066__$1 = cljs.core.nth.call(null,inst_33065__$1,(0),null);
var inst_33067 = cljs.core.nth.call(null,inst_33065__$1,(1),null);
var inst_33068 = (inst_33066__$1 == null);
var state_33086__$1 = (function (){var statearr_33088 = state_33086;
(statearr_33088[(7)] = inst_33065__$1);

(statearr_33088[(9)] = inst_33067);

(statearr_33088[(8)] = inst_33066__$1);

return statearr_33088;
})();
if(cljs.core.truth_(inst_33068)){
var statearr_33089_33115 = state_33086__$1;
(statearr_33089_33115[(1)] = (8));

} else {
var statearr_33090_33116 = state_33086__$1;
(statearr_33090_33116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33087 === (1))){
var inst_33055 = cljs.core.vec.call(null,chs);
var inst_33056 = inst_33055;
var state_33086__$1 = (function (){var statearr_33091 = state_33086;
(statearr_33091[(10)] = inst_33056);

return statearr_33091;
})();
var statearr_33092_33117 = state_33086__$1;
(statearr_33092_33117[(2)] = null);

(statearr_33092_33117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33087 === (4))){
var inst_33056 = (state_33086[(10)]);
var state_33086__$1 = state_33086;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33086__$1,(7),inst_33056);
} else {
if((state_val_33087 === (6))){
var inst_33082 = (state_33086[(2)]);
var state_33086__$1 = state_33086;
var statearr_33093_33118 = state_33086__$1;
(statearr_33093_33118[(2)] = inst_33082);

(statearr_33093_33118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33087 === (3))){
var inst_33084 = (state_33086[(2)]);
var state_33086__$1 = state_33086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33086__$1,inst_33084);
} else {
if((state_val_33087 === (2))){
var inst_33056 = (state_33086[(10)]);
var inst_33058 = cljs.core.count.call(null,inst_33056);
var inst_33059 = (inst_33058 > (0));
var state_33086__$1 = state_33086;
if(cljs.core.truth_(inst_33059)){
var statearr_33095_33119 = state_33086__$1;
(statearr_33095_33119[(1)] = (4));

} else {
var statearr_33096_33120 = state_33086__$1;
(statearr_33096_33120[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33087 === (11))){
var inst_33056 = (state_33086[(10)]);
var inst_33075 = (state_33086[(2)]);
var tmp33094 = inst_33056;
var inst_33056__$1 = tmp33094;
var state_33086__$1 = (function (){var statearr_33097 = state_33086;
(statearr_33097[(10)] = inst_33056__$1);

(statearr_33097[(11)] = inst_33075);

return statearr_33097;
})();
var statearr_33098_33121 = state_33086__$1;
(statearr_33098_33121[(2)] = null);

(statearr_33098_33121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33087 === (9))){
var inst_33066 = (state_33086[(8)]);
var state_33086__$1 = state_33086;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33086__$1,(11),out,inst_33066);
} else {
if((state_val_33087 === (5))){
var inst_33080 = cljs.core.async.close_BANG_.call(null,out);
var state_33086__$1 = state_33086;
var statearr_33099_33122 = state_33086__$1;
(statearr_33099_33122[(2)] = inst_33080);

(statearr_33099_33122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33087 === (10))){
var inst_33078 = (state_33086[(2)]);
var state_33086__$1 = state_33086;
var statearr_33100_33123 = state_33086__$1;
(statearr_33100_33123[(2)] = inst_33078);

(statearr_33100_33123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33087 === (8))){
var inst_33065 = (state_33086[(7)]);
var inst_33067 = (state_33086[(9)]);
var inst_33056 = (state_33086[(10)]);
var inst_33066 = (state_33086[(8)]);
var inst_33070 = (function (){var cs = inst_33056;
var vec__33061 = inst_33065;
var v = inst_33066;
var c = inst_33067;
return ((function (cs,vec__33061,v,c,inst_33065,inst_33067,inst_33056,inst_33066,state_val_33087,c__30994__auto___33114,out){
return (function (p1__33051_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33051_SHARP_);
});
;})(cs,vec__33061,v,c,inst_33065,inst_33067,inst_33056,inst_33066,state_val_33087,c__30994__auto___33114,out))
})();
var inst_33071 = cljs.core.filterv.call(null,inst_33070,inst_33056);
var inst_33056__$1 = inst_33071;
var state_33086__$1 = (function (){var statearr_33101 = state_33086;
(statearr_33101[(10)] = inst_33056__$1);

return statearr_33101;
})();
var statearr_33102_33124 = state_33086__$1;
(statearr_33102_33124[(2)] = null);

(statearr_33102_33124[(1)] = (2));


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
});})(c__30994__auto___33114,out))
;
return ((function (switch__29418__auto__,c__30994__auto___33114,out){
return (function() {
var cljs$core$async$state_machine__29419__auto__ = null;
var cljs$core$async$state_machine__29419__auto____0 = (function (){
var statearr_33106 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33106[(0)] = cljs$core$async$state_machine__29419__auto__);

(statearr_33106[(1)] = (1));

return statearr_33106;
});
var cljs$core$async$state_machine__29419__auto____1 = (function (state_33086){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_33086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e33107){if((e33107 instanceof Object)){
var ex__29422__auto__ = e33107;
var statearr_33108_33125 = state_33086;
(statearr_33108_33125[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33126 = state_33086;
state_33086 = G__33126;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$state_machine__29419__auto__ = function(state_33086){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29419__auto____1.call(this,state_33086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29419__auto____0;
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29419__auto____1;
return cljs$core$async$state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto___33114,out))
})();
var state__30996__auto__ = (function (){var statearr_33109 = f__30995__auto__.call(null);
(statearr_33109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto___33114);

return statearr_33109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto___33114,out))
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
var args33127 = [];
var len__28475__auto___33176 = arguments.length;
var i__28476__auto___33177 = (0);
while(true){
if((i__28476__auto___33177 < len__28475__auto___33176)){
args33127.push((arguments[i__28476__auto___33177]));

var G__33178 = (i__28476__auto___33177 + (1));
i__28476__auto___33177 = G__33178;
continue;
} else {
}
break;
}

var G__33129 = args33127.length;
switch (G__33129) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33127.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30994__auto___33180 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto___33180,out){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto___33180,out){
return (function (state_33153){
var state_val_33154 = (state_33153[(1)]);
if((state_val_33154 === (7))){
var inst_33135 = (state_33153[(7)]);
var inst_33135__$1 = (state_33153[(2)]);
var inst_33136 = (inst_33135__$1 == null);
var inst_33137 = cljs.core.not.call(null,inst_33136);
var state_33153__$1 = (function (){var statearr_33155 = state_33153;
(statearr_33155[(7)] = inst_33135__$1);

return statearr_33155;
})();
if(inst_33137){
var statearr_33156_33181 = state_33153__$1;
(statearr_33156_33181[(1)] = (8));

} else {
var statearr_33157_33182 = state_33153__$1;
(statearr_33157_33182[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (1))){
var inst_33130 = (0);
var state_33153__$1 = (function (){var statearr_33158 = state_33153;
(statearr_33158[(8)] = inst_33130);

return statearr_33158;
})();
var statearr_33159_33183 = state_33153__$1;
(statearr_33159_33183[(2)] = null);

(statearr_33159_33183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (4))){
var state_33153__$1 = state_33153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33153__$1,(7),ch);
} else {
if((state_val_33154 === (6))){
var inst_33148 = (state_33153[(2)]);
var state_33153__$1 = state_33153;
var statearr_33160_33184 = state_33153__$1;
(statearr_33160_33184[(2)] = inst_33148);

(statearr_33160_33184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (3))){
var inst_33150 = (state_33153[(2)]);
var inst_33151 = cljs.core.async.close_BANG_.call(null,out);
var state_33153__$1 = (function (){var statearr_33161 = state_33153;
(statearr_33161[(9)] = inst_33150);

return statearr_33161;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33153__$1,inst_33151);
} else {
if((state_val_33154 === (2))){
var inst_33130 = (state_33153[(8)]);
var inst_33132 = (inst_33130 < n);
var state_33153__$1 = state_33153;
if(cljs.core.truth_(inst_33132)){
var statearr_33162_33185 = state_33153__$1;
(statearr_33162_33185[(1)] = (4));

} else {
var statearr_33163_33186 = state_33153__$1;
(statearr_33163_33186[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (11))){
var inst_33130 = (state_33153[(8)]);
var inst_33140 = (state_33153[(2)]);
var inst_33141 = (inst_33130 + (1));
var inst_33130__$1 = inst_33141;
var state_33153__$1 = (function (){var statearr_33164 = state_33153;
(statearr_33164[(10)] = inst_33140);

(statearr_33164[(8)] = inst_33130__$1);

return statearr_33164;
})();
var statearr_33165_33187 = state_33153__$1;
(statearr_33165_33187[(2)] = null);

(statearr_33165_33187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (9))){
var state_33153__$1 = state_33153;
var statearr_33166_33188 = state_33153__$1;
(statearr_33166_33188[(2)] = null);

(statearr_33166_33188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (5))){
var state_33153__$1 = state_33153;
var statearr_33167_33189 = state_33153__$1;
(statearr_33167_33189[(2)] = null);

(statearr_33167_33189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (10))){
var inst_33145 = (state_33153[(2)]);
var state_33153__$1 = state_33153;
var statearr_33168_33190 = state_33153__$1;
(statearr_33168_33190[(2)] = inst_33145);

(statearr_33168_33190[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33154 === (8))){
var inst_33135 = (state_33153[(7)]);
var state_33153__$1 = state_33153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33153__$1,(11),out,inst_33135);
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
});})(c__30994__auto___33180,out))
;
return ((function (switch__29418__auto__,c__30994__auto___33180,out){
return (function() {
var cljs$core$async$state_machine__29419__auto__ = null;
var cljs$core$async$state_machine__29419__auto____0 = (function (){
var statearr_33172 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33172[(0)] = cljs$core$async$state_machine__29419__auto__);

(statearr_33172[(1)] = (1));

return statearr_33172;
});
var cljs$core$async$state_machine__29419__auto____1 = (function (state_33153){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_33153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e33173){if((e33173 instanceof Object)){
var ex__29422__auto__ = e33173;
var statearr_33174_33191 = state_33153;
(statearr_33174_33191[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33173;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33192 = state_33153;
state_33153 = G__33192;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$state_machine__29419__auto__ = function(state_33153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29419__auto____1.call(this,state_33153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29419__auto____0;
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29419__auto____1;
return cljs$core$async$state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto___33180,out))
})();
var state__30996__auto__ = (function (){var statearr_33175 = f__30995__auto__.call(null);
(statearr_33175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto___33180);

return statearr_33175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto___33180,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33200 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33200 = (function (map_LT_,f,ch,meta33201){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33201 = meta33201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33202,meta33201__$1){
var self__ = this;
var _33202__$1 = this;
return (new cljs.core.async.t_cljs$core$async33200(self__.map_LT_,self__.f,self__.ch,meta33201__$1));
});

cljs.core.async.t_cljs$core$async33200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33202){
var self__ = this;
var _33202__$1 = this;
return self__.meta33201;
});

cljs.core.async.t_cljs$core$async33200.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33200.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33200.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33200.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33200.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33203 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33203 = (function (map_LT_,f,ch,meta33201,_,fn1,meta33204){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33201 = meta33201;
this._ = _;
this.fn1 = fn1;
this.meta33204 = meta33204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33205,meta33204__$1){
var self__ = this;
var _33205__$1 = this;
return (new cljs.core.async.t_cljs$core$async33203(self__.map_LT_,self__.f,self__.ch,self__.meta33201,self__._,self__.fn1,meta33204__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33205){
var self__ = this;
var _33205__$1 = this;
return self__.meta33204;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33203.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33203.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33203.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33203.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33193_SHARP_){
return f1.call(null,(((p1__33193_SHARP_ == null))?null:self__.f.call(null,p1__33193_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33203.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33201","meta33201",762610915,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33200","cljs.core.async/t_cljs$core$async33200",614897182,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33204","meta33204",1001222311,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33203.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33203";

cljs.core.async.t_cljs$core$async33203.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async33203");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33203 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33203(map_LT___$1,f__$1,ch__$1,meta33201__$1,___$2,fn1__$1,meta33204){
return (new cljs.core.async.t_cljs$core$async33203(map_LT___$1,f__$1,ch__$1,meta33201__$1,___$2,fn1__$1,meta33204));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33203(self__.map_LT_,self__.f,self__.ch,self__.meta33201,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27388__auto__ = ret;
if(cljs.core.truth_(and__27388__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27388__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33200.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33200.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33200.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33201","meta33201",762610915,null)], null);
});

cljs.core.async.t_cljs$core$async33200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33200";

cljs.core.async.t_cljs$core$async33200.cljs$lang$ctorPrWriter = (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async33200");
});

cljs.core.async.__GT_t_cljs$core$async33200 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33200(map_LT___$1,f__$1,ch__$1,meta33201){
return (new cljs.core.async.t_cljs$core$async33200(map_LT___$1,f__$1,ch__$1,meta33201));
});

}

return (new cljs.core.async.t_cljs$core$async33200(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33209 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33209 = (function (map_GT_,f,ch,meta33210){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33210 = meta33210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33211,meta33210__$1){
var self__ = this;
var _33211__$1 = this;
return (new cljs.core.async.t_cljs$core$async33209(self__.map_GT_,self__.f,self__.ch,meta33210__$1));
});

cljs.core.async.t_cljs$core$async33209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33211){
var self__ = this;
var _33211__$1 = this;
return self__.meta33210;
});

cljs.core.async.t_cljs$core$async33209.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33209.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33209.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33209.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33209.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33209.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33210","meta33210",803605360,null)], null);
});

cljs.core.async.t_cljs$core$async33209.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33209";

cljs.core.async.t_cljs$core$async33209.cljs$lang$ctorPrWriter = (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async33209");
});

cljs.core.async.__GT_t_cljs$core$async33209 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33209(map_GT___$1,f__$1,ch__$1,meta33210){
return (new cljs.core.async.t_cljs$core$async33209(map_GT___$1,f__$1,ch__$1,meta33210));
});

}

return (new cljs.core.async.t_cljs$core$async33209(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33215 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33215 = (function (filter_GT_,p,ch,meta33216){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33216 = meta33216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33217,meta33216__$1){
var self__ = this;
var _33217__$1 = this;
return (new cljs.core.async.t_cljs$core$async33215(self__.filter_GT_,self__.p,self__.ch,meta33216__$1));
});

cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33217){
var self__ = this;
var _33217__$1 = this;
return self__.meta33216;
});

cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33216","meta33216",1195399493,null)], null);
});

cljs.core.async.t_cljs$core$async33215.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33215";

cljs.core.async.t_cljs$core$async33215.cljs$lang$ctorPrWriter = (function (this__28006__auto__,writer__28007__auto__,opt__28008__auto__){
return cljs.core._write.call(null,writer__28007__auto__,"cljs.core.async/t_cljs$core$async33215");
});

cljs.core.async.__GT_t_cljs$core$async33215 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33215(filter_GT___$1,p__$1,ch__$1,meta33216){
return (new cljs.core.async.t_cljs$core$async33215(filter_GT___$1,p__$1,ch__$1,meta33216));
});

}

return (new cljs.core.async.t_cljs$core$async33215(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args33218 = [];
var len__28475__auto___33262 = arguments.length;
var i__28476__auto___33263 = (0);
while(true){
if((i__28476__auto___33263 < len__28475__auto___33262)){
args33218.push((arguments[i__28476__auto___33263]));

var G__33264 = (i__28476__auto___33263 + (1));
i__28476__auto___33263 = G__33264;
continue;
} else {
}
break;
}

var G__33220 = args33218.length;
switch (G__33220) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33218.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30994__auto___33266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto___33266,out){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto___33266,out){
return (function (state_33241){
var state_val_33242 = (state_33241[(1)]);
if((state_val_33242 === (7))){
var inst_33237 = (state_33241[(2)]);
var state_33241__$1 = state_33241;
var statearr_33243_33267 = state_33241__$1;
(statearr_33243_33267[(2)] = inst_33237);

(statearr_33243_33267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (1))){
var state_33241__$1 = state_33241;
var statearr_33244_33268 = state_33241__$1;
(statearr_33244_33268[(2)] = null);

(statearr_33244_33268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (4))){
var inst_33223 = (state_33241[(7)]);
var inst_33223__$1 = (state_33241[(2)]);
var inst_33224 = (inst_33223__$1 == null);
var state_33241__$1 = (function (){var statearr_33245 = state_33241;
(statearr_33245[(7)] = inst_33223__$1);

return statearr_33245;
})();
if(cljs.core.truth_(inst_33224)){
var statearr_33246_33269 = state_33241__$1;
(statearr_33246_33269[(1)] = (5));

} else {
var statearr_33247_33270 = state_33241__$1;
(statearr_33247_33270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (6))){
var inst_33223 = (state_33241[(7)]);
var inst_33228 = p.call(null,inst_33223);
var state_33241__$1 = state_33241;
if(cljs.core.truth_(inst_33228)){
var statearr_33248_33271 = state_33241__$1;
(statearr_33248_33271[(1)] = (8));

} else {
var statearr_33249_33272 = state_33241__$1;
(statearr_33249_33272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (3))){
var inst_33239 = (state_33241[(2)]);
var state_33241__$1 = state_33241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33241__$1,inst_33239);
} else {
if((state_val_33242 === (2))){
var state_33241__$1 = state_33241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33241__$1,(4),ch);
} else {
if((state_val_33242 === (11))){
var inst_33231 = (state_33241[(2)]);
var state_33241__$1 = state_33241;
var statearr_33250_33273 = state_33241__$1;
(statearr_33250_33273[(2)] = inst_33231);

(statearr_33250_33273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (9))){
var state_33241__$1 = state_33241;
var statearr_33251_33274 = state_33241__$1;
(statearr_33251_33274[(2)] = null);

(statearr_33251_33274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (5))){
var inst_33226 = cljs.core.async.close_BANG_.call(null,out);
var state_33241__$1 = state_33241;
var statearr_33252_33275 = state_33241__$1;
(statearr_33252_33275[(2)] = inst_33226);

(statearr_33252_33275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (10))){
var inst_33234 = (state_33241[(2)]);
var state_33241__$1 = (function (){var statearr_33253 = state_33241;
(statearr_33253[(8)] = inst_33234);

return statearr_33253;
})();
var statearr_33254_33276 = state_33241__$1;
(statearr_33254_33276[(2)] = null);

(statearr_33254_33276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33242 === (8))){
var inst_33223 = (state_33241[(7)]);
var state_33241__$1 = state_33241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33241__$1,(11),out,inst_33223);
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
});})(c__30994__auto___33266,out))
;
return ((function (switch__29418__auto__,c__30994__auto___33266,out){
return (function() {
var cljs$core$async$state_machine__29419__auto__ = null;
var cljs$core$async$state_machine__29419__auto____0 = (function (){
var statearr_33258 = [null,null,null,null,null,null,null,null,null];
(statearr_33258[(0)] = cljs$core$async$state_machine__29419__auto__);

(statearr_33258[(1)] = (1));

return statearr_33258;
});
var cljs$core$async$state_machine__29419__auto____1 = (function (state_33241){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_33241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e33259){if((e33259 instanceof Object)){
var ex__29422__auto__ = e33259;
var statearr_33260_33277 = state_33241;
(statearr_33260_33277[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33278 = state_33241;
state_33241 = G__33278;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$state_machine__29419__auto__ = function(state_33241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29419__auto____1.call(this,state_33241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29419__auto____0;
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29419__auto____1;
return cljs$core$async$state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto___33266,out))
})();
var state__30996__auto__ = (function (){var statearr_33261 = f__30995__auto__.call(null);
(statearr_33261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto___33266);

return statearr_33261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto___33266,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args33279 = [];
var len__28475__auto___33282 = arguments.length;
var i__28476__auto___33283 = (0);
while(true){
if((i__28476__auto___33283 < len__28475__auto___33282)){
args33279.push((arguments[i__28476__auto___33283]));

var G__33284 = (i__28476__auto___33283 + (1));
i__28476__auto___33283 = G__33284;
continue;
} else {
}
break;
}

var G__33281 = args33279.length;
switch (G__33281) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33279.length)].join('')));

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
var c__30994__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto__){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto__){
return (function (state_33451){
var state_val_33452 = (state_33451[(1)]);
if((state_val_33452 === (7))){
var inst_33447 = (state_33451[(2)]);
var state_33451__$1 = state_33451;
var statearr_33453_33494 = state_33451__$1;
(statearr_33453_33494[(2)] = inst_33447);

(statearr_33453_33494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (20))){
var inst_33417 = (state_33451[(7)]);
var inst_33428 = (state_33451[(2)]);
var inst_33429 = cljs.core.next.call(null,inst_33417);
var inst_33403 = inst_33429;
var inst_33404 = null;
var inst_33405 = (0);
var inst_33406 = (0);
var state_33451__$1 = (function (){var statearr_33454 = state_33451;
(statearr_33454[(8)] = inst_33404);

(statearr_33454[(9)] = inst_33406);

(statearr_33454[(10)] = inst_33403);

(statearr_33454[(11)] = inst_33428);

(statearr_33454[(12)] = inst_33405);

return statearr_33454;
})();
var statearr_33455_33495 = state_33451__$1;
(statearr_33455_33495[(2)] = null);

(statearr_33455_33495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (1))){
var state_33451__$1 = state_33451;
var statearr_33456_33496 = state_33451__$1;
(statearr_33456_33496[(2)] = null);

(statearr_33456_33496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (4))){
var inst_33392 = (state_33451[(13)]);
var inst_33392__$1 = (state_33451[(2)]);
var inst_33393 = (inst_33392__$1 == null);
var state_33451__$1 = (function (){var statearr_33457 = state_33451;
(statearr_33457[(13)] = inst_33392__$1);

return statearr_33457;
})();
if(cljs.core.truth_(inst_33393)){
var statearr_33458_33497 = state_33451__$1;
(statearr_33458_33497[(1)] = (5));

} else {
var statearr_33459_33498 = state_33451__$1;
(statearr_33459_33498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (15))){
var state_33451__$1 = state_33451;
var statearr_33463_33499 = state_33451__$1;
(statearr_33463_33499[(2)] = null);

(statearr_33463_33499[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (21))){
var state_33451__$1 = state_33451;
var statearr_33464_33500 = state_33451__$1;
(statearr_33464_33500[(2)] = null);

(statearr_33464_33500[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (13))){
var inst_33404 = (state_33451[(8)]);
var inst_33406 = (state_33451[(9)]);
var inst_33403 = (state_33451[(10)]);
var inst_33405 = (state_33451[(12)]);
var inst_33413 = (state_33451[(2)]);
var inst_33414 = (inst_33406 + (1));
var tmp33460 = inst_33404;
var tmp33461 = inst_33403;
var tmp33462 = inst_33405;
var inst_33403__$1 = tmp33461;
var inst_33404__$1 = tmp33460;
var inst_33405__$1 = tmp33462;
var inst_33406__$1 = inst_33414;
var state_33451__$1 = (function (){var statearr_33465 = state_33451;
(statearr_33465[(8)] = inst_33404__$1);

(statearr_33465[(14)] = inst_33413);

(statearr_33465[(9)] = inst_33406__$1);

(statearr_33465[(10)] = inst_33403__$1);

(statearr_33465[(12)] = inst_33405__$1);

return statearr_33465;
})();
var statearr_33466_33501 = state_33451__$1;
(statearr_33466_33501[(2)] = null);

(statearr_33466_33501[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (22))){
var state_33451__$1 = state_33451;
var statearr_33467_33502 = state_33451__$1;
(statearr_33467_33502[(2)] = null);

(statearr_33467_33502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (6))){
var inst_33392 = (state_33451[(13)]);
var inst_33401 = f.call(null,inst_33392);
var inst_33402 = cljs.core.seq.call(null,inst_33401);
var inst_33403 = inst_33402;
var inst_33404 = null;
var inst_33405 = (0);
var inst_33406 = (0);
var state_33451__$1 = (function (){var statearr_33468 = state_33451;
(statearr_33468[(8)] = inst_33404);

(statearr_33468[(9)] = inst_33406);

(statearr_33468[(10)] = inst_33403);

(statearr_33468[(12)] = inst_33405);

return statearr_33468;
})();
var statearr_33469_33503 = state_33451__$1;
(statearr_33469_33503[(2)] = null);

(statearr_33469_33503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (17))){
var inst_33417 = (state_33451[(7)]);
var inst_33421 = cljs.core.chunk_first.call(null,inst_33417);
var inst_33422 = cljs.core.chunk_rest.call(null,inst_33417);
var inst_33423 = cljs.core.count.call(null,inst_33421);
var inst_33403 = inst_33422;
var inst_33404 = inst_33421;
var inst_33405 = inst_33423;
var inst_33406 = (0);
var state_33451__$1 = (function (){var statearr_33470 = state_33451;
(statearr_33470[(8)] = inst_33404);

(statearr_33470[(9)] = inst_33406);

(statearr_33470[(10)] = inst_33403);

(statearr_33470[(12)] = inst_33405);

return statearr_33470;
})();
var statearr_33471_33504 = state_33451__$1;
(statearr_33471_33504[(2)] = null);

(statearr_33471_33504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (3))){
var inst_33449 = (state_33451[(2)]);
var state_33451__$1 = state_33451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33451__$1,inst_33449);
} else {
if((state_val_33452 === (12))){
var inst_33437 = (state_33451[(2)]);
var state_33451__$1 = state_33451;
var statearr_33472_33505 = state_33451__$1;
(statearr_33472_33505[(2)] = inst_33437);

(statearr_33472_33505[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (2))){
var state_33451__$1 = state_33451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33451__$1,(4),in$);
} else {
if((state_val_33452 === (23))){
var inst_33445 = (state_33451[(2)]);
var state_33451__$1 = state_33451;
var statearr_33473_33506 = state_33451__$1;
(statearr_33473_33506[(2)] = inst_33445);

(statearr_33473_33506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (19))){
var inst_33432 = (state_33451[(2)]);
var state_33451__$1 = state_33451;
var statearr_33474_33507 = state_33451__$1;
(statearr_33474_33507[(2)] = inst_33432);

(statearr_33474_33507[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (11))){
var inst_33403 = (state_33451[(10)]);
var inst_33417 = (state_33451[(7)]);
var inst_33417__$1 = cljs.core.seq.call(null,inst_33403);
var state_33451__$1 = (function (){var statearr_33475 = state_33451;
(statearr_33475[(7)] = inst_33417__$1);

return statearr_33475;
})();
if(inst_33417__$1){
var statearr_33476_33508 = state_33451__$1;
(statearr_33476_33508[(1)] = (14));

} else {
var statearr_33477_33509 = state_33451__$1;
(statearr_33477_33509[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (9))){
var inst_33439 = (state_33451[(2)]);
var inst_33440 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33451__$1 = (function (){var statearr_33478 = state_33451;
(statearr_33478[(15)] = inst_33439);

return statearr_33478;
})();
if(cljs.core.truth_(inst_33440)){
var statearr_33479_33510 = state_33451__$1;
(statearr_33479_33510[(1)] = (21));

} else {
var statearr_33480_33511 = state_33451__$1;
(statearr_33480_33511[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (5))){
var inst_33395 = cljs.core.async.close_BANG_.call(null,out);
var state_33451__$1 = state_33451;
var statearr_33481_33512 = state_33451__$1;
(statearr_33481_33512[(2)] = inst_33395);

(statearr_33481_33512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (14))){
var inst_33417 = (state_33451[(7)]);
var inst_33419 = cljs.core.chunked_seq_QMARK_.call(null,inst_33417);
var state_33451__$1 = state_33451;
if(inst_33419){
var statearr_33482_33513 = state_33451__$1;
(statearr_33482_33513[(1)] = (17));

} else {
var statearr_33483_33514 = state_33451__$1;
(statearr_33483_33514[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (16))){
var inst_33435 = (state_33451[(2)]);
var state_33451__$1 = state_33451;
var statearr_33484_33515 = state_33451__$1;
(statearr_33484_33515[(2)] = inst_33435);

(statearr_33484_33515[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33452 === (10))){
var inst_33404 = (state_33451[(8)]);
var inst_33406 = (state_33451[(9)]);
var inst_33411 = cljs.core._nth.call(null,inst_33404,inst_33406);
var state_33451__$1 = state_33451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33451__$1,(13),out,inst_33411);
} else {
if((state_val_33452 === (18))){
var inst_33417 = (state_33451[(7)]);
var inst_33426 = cljs.core.first.call(null,inst_33417);
var state_33451__$1 = state_33451;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33451__$1,(20),out,inst_33426);
} else {
if((state_val_33452 === (8))){
var inst_33406 = (state_33451[(9)]);
var inst_33405 = (state_33451[(12)]);
var inst_33408 = (inst_33406 < inst_33405);
var inst_33409 = inst_33408;
var state_33451__$1 = state_33451;
if(cljs.core.truth_(inst_33409)){
var statearr_33485_33516 = state_33451__$1;
(statearr_33485_33516[(1)] = (10));

} else {
var statearr_33486_33517 = state_33451__$1;
(statearr_33486_33517[(1)] = (11));

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
});})(c__30994__auto__))
;
return ((function (switch__29418__auto__,c__30994__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29419__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29419__auto____0 = (function (){
var statearr_33490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33490[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29419__auto__);

(statearr_33490[(1)] = (1));

return statearr_33490;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29419__auto____1 = (function (state_33451){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_33451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e33491){if((e33491 instanceof Object)){
var ex__29422__auto__ = e33491;
var statearr_33492_33518 = state_33451;
(statearr_33492_33518[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33519 = state_33451;
state_33451 = G__33519;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29419__auto__ = function(state_33451){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29419__auto____1.call(this,state_33451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29419__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29419__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto__))
})();
var state__30996__auto__ = (function (){var statearr_33493 = f__30995__auto__.call(null);
(statearr_33493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto__);

return statearr_33493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto__))
);

return c__30994__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33520 = [];
var len__28475__auto___33523 = arguments.length;
var i__28476__auto___33524 = (0);
while(true){
if((i__28476__auto___33524 < len__28475__auto___33523)){
args33520.push((arguments[i__28476__auto___33524]));

var G__33525 = (i__28476__auto___33524 + (1));
i__28476__auto___33524 = G__33525;
continue;
} else {
}
break;
}

var G__33522 = args33520.length;
switch (G__33522) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33520.length)].join('')));

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
var args33527 = [];
var len__28475__auto___33530 = arguments.length;
var i__28476__auto___33531 = (0);
while(true){
if((i__28476__auto___33531 < len__28475__auto___33530)){
args33527.push((arguments[i__28476__auto___33531]));

var G__33532 = (i__28476__auto___33531 + (1));
i__28476__auto___33531 = G__33532;
continue;
} else {
}
break;
}

var G__33529 = args33527.length;
switch (G__33529) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33527.length)].join('')));

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
var args33534 = [];
var len__28475__auto___33585 = arguments.length;
var i__28476__auto___33586 = (0);
while(true){
if((i__28476__auto___33586 < len__28475__auto___33585)){
args33534.push((arguments[i__28476__auto___33586]));

var G__33587 = (i__28476__auto___33586 + (1));
i__28476__auto___33586 = G__33587;
continue;
} else {
}
break;
}

var G__33536 = args33534.length;
switch (G__33536) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33534.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30994__auto___33589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto___33589,out){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto___33589,out){
return (function (state_33560){
var state_val_33561 = (state_33560[(1)]);
if((state_val_33561 === (7))){
var inst_33555 = (state_33560[(2)]);
var state_33560__$1 = state_33560;
var statearr_33562_33590 = state_33560__$1;
(statearr_33562_33590[(2)] = inst_33555);

(statearr_33562_33590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33561 === (1))){
var inst_33537 = null;
var state_33560__$1 = (function (){var statearr_33563 = state_33560;
(statearr_33563[(7)] = inst_33537);

return statearr_33563;
})();
var statearr_33564_33591 = state_33560__$1;
(statearr_33564_33591[(2)] = null);

(statearr_33564_33591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33561 === (4))){
var inst_33540 = (state_33560[(8)]);
var inst_33540__$1 = (state_33560[(2)]);
var inst_33541 = (inst_33540__$1 == null);
var inst_33542 = cljs.core.not.call(null,inst_33541);
var state_33560__$1 = (function (){var statearr_33565 = state_33560;
(statearr_33565[(8)] = inst_33540__$1);

return statearr_33565;
})();
if(inst_33542){
var statearr_33566_33592 = state_33560__$1;
(statearr_33566_33592[(1)] = (5));

} else {
var statearr_33567_33593 = state_33560__$1;
(statearr_33567_33593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33561 === (6))){
var state_33560__$1 = state_33560;
var statearr_33568_33594 = state_33560__$1;
(statearr_33568_33594[(2)] = null);

(statearr_33568_33594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33561 === (3))){
var inst_33557 = (state_33560[(2)]);
var inst_33558 = cljs.core.async.close_BANG_.call(null,out);
var state_33560__$1 = (function (){var statearr_33569 = state_33560;
(statearr_33569[(9)] = inst_33557);

return statearr_33569;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33560__$1,inst_33558);
} else {
if((state_val_33561 === (2))){
var state_33560__$1 = state_33560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33560__$1,(4),ch);
} else {
if((state_val_33561 === (11))){
var inst_33540 = (state_33560[(8)]);
var inst_33549 = (state_33560[(2)]);
var inst_33537 = inst_33540;
var state_33560__$1 = (function (){var statearr_33570 = state_33560;
(statearr_33570[(10)] = inst_33549);

(statearr_33570[(7)] = inst_33537);

return statearr_33570;
})();
var statearr_33571_33595 = state_33560__$1;
(statearr_33571_33595[(2)] = null);

(statearr_33571_33595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33561 === (9))){
var inst_33540 = (state_33560[(8)]);
var state_33560__$1 = state_33560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33560__$1,(11),out,inst_33540);
} else {
if((state_val_33561 === (5))){
var inst_33540 = (state_33560[(8)]);
var inst_33537 = (state_33560[(7)]);
var inst_33544 = cljs.core._EQ_.call(null,inst_33540,inst_33537);
var state_33560__$1 = state_33560;
if(inst_33544){
var statearr_33573_33596 = state_33560__$1;
(statearr_33573_33596[(1)] = (8));

} else {
var statearr_33574_33597 = state_33560__$1;
(statearr_33574_33597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33561 === (10))){
var inst_33552 = (state_33560[(2)]);
var state_33560__$1 = state_33560;
var statearr_33575_33598 = state_33560__$1;
(statearr_33575_33598[(2)] = inst_33552);

(statearr_33575_33598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33561 === (8))){
var inst_33537 = (state_33560[(7)]);
var tmp33572 = inst_33537;
var inst_33537__$1 = tmp33572;
var state_33560__$1 = (function (){var statearr_33576 = state_33560;
(statearr_33576[(7)] = inst_33537__$1);

return statearr_33576;
})();
var statearr_33577_33599 = state_33560__$1;
(statearr_33577_33599[(2)] = null);

(statearr_33577_33599[(1)] = (2));


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
});})(c__30994__auto___33589,out))
;
return ((function (switch__29418__auto__,c__30994__auto___33589,out){
return (function() {
var cljs$core$async$state_machine__29419__auto__ = null;
var cljs$core$async$state_machine__29419__auto____0 = (function (){
var statearr_33581 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33581[(0)] = cljs$core$async$state_machine__29419__auto__);

(statearr_33581[(1)] = (1));

return statearr_33581;
});
var cljs$core$async$state_machine__29419__auto____1 = (function (state_33560){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_33560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e33582){if((e33582 instanceof Object)){
var ex__29422__auto__ = e33582;
var statearr_33583_33600 = state_33560;
(statearr_33583_33600[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33601 = state_33560;
state_33560 = G__33601;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$state_machine__29419__auto__ = function(state_33560){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29419__auto____1.call(this,state_33560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29419__auto____0;
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29419__auto____1;
return cljs$core$async$state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto___33589,out))
})();
var state__30996__auto__ = (function (){var statearr_33584 = f__30995__auto__.call(null);
(statearr_33584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto___33589);

return statearr_33584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto___33589,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33602 = [];
var len__28475__auto___33672 = arguments.length;
var i__28476__auto___33673 = (0);
while(true){
if((i__28476__auto___33673 < len__28475__auto___33672)){
args33602.push((arguments[i__28476__auto___33673]));

var G__33674 = (i__28476__auto___33673 + (1));
i__28476__auto___33673 = G__33674;
continue;
} else {
}
break;
}

var G__33604 = args33602.length;
switch (G__33604) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33602.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30994__auto___33676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto___33676,out){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto___33676,out){
return (function (state_33642){
var state_val_33643 = (state_33642[(1)]);
if((state_val_33643 === (7))){
var inst_33638 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
var statearr_33644_33677 = state_33642__$1;
(statearr_33644_33677[(2)] = inst_33638);

(statearr_33644_33677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (1))){
var inst_33605 = (new Array(n));
var inst_33606 = inst_33605;
var inst_33607 = (0);
var state_33642__$1 = (function (){var statearr_33645 = state_33642;
(statearr_33645[(7)] = inst_33606);

(statearr_33645[(8)] = inst_33607);

return statearr_33645;
})();
var statearr_33646_33678 = state_33642__$1;
(statearr_33646_33678[(2)] = null);

(statearr_33646_33678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (4))){
var inst_33610 = (state_33642[(9)]);
var inst_33610__$1 = (state_33642[(2)]);
var inst_33611 = (inst_33610__$1 == null);
var inst_33612 = cljs.core.not.call(null,inst_33611);
var state_33642__$1 = (function (){var statearr_33647 = state_33642;
(statearr_33647[(9)] = inst_33610__$1);

return statearr_33647;
})();
if(inst_33612){
var statearr_33648_33679 = state_33642__$1;
(statearr_33648_33679[(1)] = (5));

} else {
var statearr_33649_33680 = state_33642__$1;
(statearr_33649_33680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (15))){
var inst_33632 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
var statearr_33650_33681 = state_33642__$1;
(statearr_33650_33681[(2)] = inst_33632);

(statearr_33650_33681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (13))){
var state_33642__$1 = state_33642;
var statearr_33651_33682 = state_33642__$1;
(statearr_33651_33682[(2)] = null);

(statearr_33651_33682[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (6))){
var inst_33607 = (state_33642[(8)]);
var inst_33628 = (inst_33607 > (0));
var state_33642__$1 = state_33642;
if(cljs.core.truth_(inst_33628)){
var statearr_33652_33683 = state_33642__$1;
(statearr_33652_33683[(1)] = (12));

} else {
var statearr_33653_33684 = state_33642__$1;
(statearr_33653_33684[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (3))){
var inst_33640 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33642__$1,inst_33640);
} else {
if((state_val_33643 === (12))){
var inst_33606 = (state_33642[(7)]);
var inst_33630 = cljs.core.vec.call(null,inst_33606);
var state_33642__$1 = state_33642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33642__$1,(15),out,inst_33630);
} else {
if((state_val_33643 === (2))){
var state_33642__$1 = state_33642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33642__$1,(4),ch);
} else {
if((state_val_33643 === (11))){
var inst_33622 = (state_33642[(2)]);
var inst_33623 = (new Array(n));
var inst_33606 = inst_33623;
var inst_33607 = (0);
var state_33642__$1 = (function (){var statearr_33654 = state_33642;
(statearr_33654[(10)] = inst_33622);

(statearr_33654[(7)] = inst_33606);

(statearr_33654[(8)] = inst_33607);

return statearr_33654;
})();
var statearr_33655_33685 = state_33642__$1;
(statearr_33655_33685[(2)] = null);

(statearr_33655_33685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (9))){
var inst_33606 = (state_33642[(7)]);
var inst_33620 = cljs.core.vec.call(null,inst_33606);
var state_33642__$1 = state_33642;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33642__$1,(11),out,inst_33620);
} else {
if((state_val_33643 === (5))){
var inst_33610 = (state_33642[(9)]);
var inst_33615 = (state_33642[(11)]);
var inst_33606 = (state_33642[(7)]);
var inst_33607 = (state_33642[(8)]);
var inst_33614 = (inst_33606[inst_33607] = inst_33610);
var inst_33615__$1 = (inst_33607 + (1));
var inst_33616 = (inst_33615__$1 < n);
var state_33642__$1 = (function (){var statearr_33656 = state_33642;
(statearr_33656[(12)] = inst_33614);

(statearr_33656[(11)] = inst_33615__$1);

return statearr_33656;
})();
if(cljs.core.truth_(inst_33616)){
var statearr_33657_33686 = state_33642__$1;
(statearr_33657_33686[(1)] = (8));

} else {
var statearr_33658_33687 = state_33642__$1;
(statearr_33658_33687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (14))){
var inst_33635 = (state_33642[(2)]);
var inst_33636 = cljs.core.async.close_BANG_.call(null,out);
var state_33642__$1 = (function (){var statearr_33660 = state_33642;
(statearr_33660[(13)] = inst_33635);

return statearr_33660;
})();
var statearr_33661_33688 = state_33642__$1;
(statearr_33661_33688[(2)] = inst_33636);

(statearr_33661_33688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (10))){
var inst_33626 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
var statearr_33662_33689 = state_33642__$1;
(statearr_33662_33689[(2)] = inst_33626);

(statearr_33662_33689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (8))){
var inst_33615 = (state_33642[(11)]);
var inst_33606 = (state_33642[(7)]);
var tmp33659 = inst_33606;
var inst_33606__$1 = tmp33659;
var inst_33607 = inst_33615;
var state_33642__$1 = (function (){var statearr_33663 = state_33642;
(statearr_33663[(7)] = inst_33606__$1);

(statearr_33663[(8)] = inst_33607);

return statearr_33663;
})();
var statearr_33664_33690 = state_33642__$1;
(statearr_33664_33690[(2)] = null);

(statearr_33664_33690[(1)] = (2));


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
});})(c__30994__auto___33676,out))
;
return ((function (switch__29418__auto__,c__30994__auto___33676,out){
return (function() {
var cljs$core$async$state_machine__29419__auto__ = null;
var cljs$core$async$state_machine__29419__auto____0 = (function (){
var statearr_33668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33668[(0)] = cljs$core$async$state_machine__29419__auto__);

(statearr_33668[(1)] = (1));

return statearr_33668;
});
var cljs$core$async$state_machine__29419__auto____1 = (function (state_33642){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_33642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e33669){if((e33669 instanceof Object)){
var ex__29422__auto__ = e33669;
var statearr_33670_33691 = state_33642;
(statearr_33670_33691[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33692 = state_33642;
state_33642 = G__33692;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$state_machine__29419__auto__ = function(state_33642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29419__auto____1.call(this,state_33642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29419__auto____0;
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29419__auto____1;
return cljs$core$async$state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto___33676,out))
})();
var state__30996__auto__ = (function (){var statearr_33671 = f__30995__auto__.call(null);
(statearr_33671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto___33676);

return statearr_33671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto___33676,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33693 = [];
var len__28475__auto___33767 = arguments.length;
var i__28476__auto___33768 = (0);
while(true){
if((i__28476__auto___33768 < len__28475__auto___33767)){
args33693.push((arguments[i__28476__auto___33768]));

var G__33769 = (i__28476__auto___33768 + (1));
i__28476__auto___33768 = G__33769;
continue;
} else {
}
break;
}

var G__33695 = args33693.length;
switch (G__33695) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33693.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30994__auto___33771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30994__auto___33771,out){
return (function (){
var f__30995__auto__ = (function (){var switch__29418__auto__ = ((function (c__30994__auto___33771,out){
return (function (state_33737){
var state_val_33738 = (state_33737[(1)]);
if((state_val_33738 === (7))){
var inst_33733 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
var statearr_33739_33772 = state_33737__$1;
(statearr_33739_33772[(2)] = inst_33733);

(statearr_33739_33772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (1))){
var inst_33696 = [];
var inst_33697 = inst_33696;
var inst_33698 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33737__$1 = (function (){var statearr_33740 = state_33737;
(statearr_33740[(7)] = inst_33698);

(statearr_33740[(8)] = inst_33697);

return statearr_33740;
})();
var statearr_33741_33773 = state_33737__$1;
(statearr_33741_33773[(2)] = null);

(statearr_33741_33773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (4))){
var inst_33701 = (state_33737[(9)]);
var inst_33701__$1 = (state_33737[(2)]);
var inst_33702 = (inst_33701__$1 == null);
var inst_33703 = cljs.core.not.call(null,inst_33702);
var state_33737__$1 = (function (){var statearr_33742 = state_33737;
(statearr_33742[(9)] = inst_33701__$1);

return statearr_33742;
})();
if(inst_33703){
var statearr_33743_33774 = state_33737__$1;
(statearr_33743_33774[(1)] = (5));

} else {
var statearr_33744_33775 = state_33737__$1;
(statearr_33744_33775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (15))){
var inst_33727 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
var statearr_33745_33776 = state_33737__$1;
(statearr_33745_33776[(2)] = inst_33727);

(statearr_33745_33776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (13))){
var state_33737__$1 = state_33737;
var statearr_33746_33777 = state_33737__$1;
(statearr_33746_33777[(2)] = null);

(statearr_33746_33777[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (6))){
var inst_33697 = (state_33737[(8)]);
var inst_33722 = inst_33697.length;
var inst_33723 = (inst_33722 > (0));
var state_33737__$1 = state_33737;
if(cljs.core.truth_(inst_33723)){
var statearr_33747_33778 = state_33737__$1;
(statearr_33747_33778[(1)] = (12));

} else {
var statearr_33748_33779 = state_33737__$1;
(statearr_33748_33779[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (3))){
var inst_33735 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33737__$1,inst_33735);
} else {
if((state_val_33738 === (12))){
var inst_33697 = (state_33737[(8)]);
var inst_33725 = cljs.core.vec.call(null,inst_33697);
var state_33737__$1 = state_33737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33737__$1,(15),out,inst_33725);
} else {
if((state_val_33738 === (2))){
var state_33737__$1 = state_33737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33737__$1,(4),ch);
} else {
if((state_val_33738 === (11))){
var inst_33705 = (state_33737[(10)]);
var inst_33701 = (state_33737[(9)]);
var inst_33715 = (state_33737[(2)]);
var inst_33716 = [];
var inst_33717 = inst_33716.push(inst_33701);
var inst_33697 = inst_33716;
var inst_33698 = inst_33705;
var state_33737__$1 = (function (){var statearr_33749 = state_33737;
(statearr_33749[(11)] = inst_33715);

(statearr_33749[(7)] = inst_33698);

(statearr_33749[(12)] = inst_33717);

(statearr_33749[(8)] = inst_33697);

return statearr_33749;
})();
var statearr_33750_33780 = state_33737__$1;
(statearr_33750_33780[(2)] = null);

(statearr_33750_33780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (9))){
var inst_33697 = (state_33737[(8)]);
var inst_33713 = cljs.core.vec.call(null,inst_33697);
var state_33737__$1 = state_33737;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33737__$1,(11),out,inst_33713);
} else {
if((state_val_33738 === (5))){
var inst_33705 = (state_33737[(10)]);
var inst_33698 = (state_33737[(7)]);
var inst_33701 = (state_33737[(9)]);
var inst_33705__$1 = f.call(null,inst_33701);
var inst_33706 = cljs.core._EQ_.call(null,inst_33705__$1,inst_33698);
var inst_33707 = cljs.core.keyword_identical_QMARK_.call(null,inst_33698,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33708 = (inst_33706) || (inst_33707);
var state_33737__$1 = (function (){var statearr_33751 = state_33737;
(statearr_33751[(10)] = inst_33705__$1);

return statearr_33751;
})();
if(cljs.core.truth_(inst_33708)){
var statearr_33752_33781 = state_33737__$1;
(statearr_33752_33781[(1)] = (8));

} else {
var statearr_33753_33782 = state_33737__$1;
(statearr_33753_33782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (14))){
var inst_33730 = (state_33737[(2)]);
var inst_33731 = cljs.core.async.close_BANG_.call(null,out);
var state_33737__$1 = (function (){var statearr_33755 = state_33737;
(statearr_33755[(13)] = inst_33730);

return statearr_33755;
})();
var statearr_33756_33783 = state_33737__$1;
(statearr_33756_33783[(2)] = inst_33731);

(statearr_33756_33783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (10))){
var inst_33720 = (state_33737[(2)]);
var state_33737__$1 = state_33737;
var statearr_33757_33784 = state_33737__$1;
(statearr_33757_33784[(2)] = inst_33720);

(statearr_33757_33784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33738 === (8))){
var inst_33705 = (state_33737[(10)]);
var inst_33701 = (state_33737[(9)]);
var inst_33697 = (state_33737[(8)]);
var inst_33710 = inst_33697.push(inst_33701);
var tmp33754 = inst_33697;
var inst_33697__$1 = tmp33754;
var inst_33698 = inst_33705;
var state_33737__$1 = (function (){var statearr_33758 = state_33737;
(statearr_33758[(14)] = inst_33710);

(statearr_33758[(7)] = inst_33698);

(statearr_33758[(8)] = inst_33697__$1);

return statearr_33758;
})();
var statearr_33759_33785 = state_33737__$1;
(statearr_33759_33785[(2)] = null);

(statearr_33759_33785[(1)] = (2));


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
});})(c__30994__auto___33771,out))
;
return ((function (switch__29418__auto__,c__30994__auto___33771,out){
return (function() {
var cljs$core$async$state_machine__29419__auto__ = null;
var cljs$core$async$state_machine__29419__auto____0 = (function (){
var statearr_33763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33763[(0)] = cljs$core$async$state_machine__29419__auto__);

(statearr_33763[(1)] = (1));

return statearr_33763;
});
var cljs$core$async$state_machine__29419__auto____1 = (function (state_33737){
while(true){
var ret_value__29420__auto__ = (function (){try{while(true){
var result__29421__auto__ = switch__29418__auto__.call(null,state_33737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29421__auto__;
}
break;
}
}catch (e33764){if((e33764 instanceof Object)){
var ex__29422__auto__ = e33764;
var statearr_33765_33786 = state_33737;
(statearr_33765_33786[(5)] = ex__29422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33787 = state_33737;
state_33737 = G__33787;
continue;
} else {
return ret_value__29420__auto__;
}
break;
}
});
cljs$core$async$state_machine__29419__auto__ = function(state_33737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29419__auto____1.call(this,state_33737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29419__auto____0;
cljs$core$async$state_machine__29419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29419__auto____1;
return cljs$core$async$state_machine__29419__auto__;
})()
;})(switch__29418__auto__,c__30994__auto___33771,out))
})();
var state__30996__auto__ = (function (){var statearr_33766 = f__30995__auto__.call(null);
(statearr_33766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30994__auto___33771);

return statearr_33766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30996__auto__);
});})(c__30994__auto___33771,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1481770134806